(function () {
'use strict';
const D = window.APZH;
const main = document.getElementById('main');

/* ---------- utilities ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const sleep = ms => new Promise(r => setTimeout(r, ms));
const pick = a => a[Math.floor(Math.random() * a.length)];
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const mmss = s => { s = Math.max(0, Math.round(s)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
const letters = 'ABCD';
function load(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage blocked */ } }
function dropKey(k) { try { localStorage.removeItem(k); } catch (e) { /* storage blocked */ } }
function localISO(d = new Date()) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function parseISO(s) { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); }
function daysBetween(a, b) { return Math.round((parseISO(b) - parseISO(a)) / 86400000); }
function md(s) { const d = parseISO(s); return (d.getMonth() + 1) + '/' + d.getDate(); }
function fmtTs(ts) { const d = new Date(ts); return (d.getMonth() + 1) + '/' + d.getDate() + ' ' + String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0'); }
function toast(msg) { const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; document.body.appendChild(t); setTimeout(() => t.remove(), 2600); }
const countChars = s => (s || '').replace(/\s/g, '').length;

const prefs = Object.assign({ plays: 2, rate: 1, showQ: false }, load('apzh.prefs', {}));
const savePrefs = () => save('apzh.prefs', prefs);

const unitNames = { 1: '家庭與社區', 2: '語言與文化', 3: '藝術與創意', 4: '科學與科技', 5: '當代生活', 6: '全球議題' };
const typeLabels = {
  chart: ['圖表聽力', 'Audio and Chart'], report: ['報導', 'Audio Report'], conv: ['對話', 'Conversation'],
  instr: ['指示說明', 'Instructional Guidance'], pres: ['演講', 'Presentation'],
  article: ['文章', 'Article'], artchart: ['文章＋圖表', 'Article and Chart'], corr: ['書信', 'Correspondence'],
  lit: ['文學作品', 'Literary Text'], promo: ['宣傳資料', 'Promotional Material']
};
const kindLabels = { listening: '聽力', reading: '閱讀', story: '看圖寫故事', email: '電子郵件', qa: '專題問答', pres: '專題報告', homo: '選字', auth: '真實語料' };
const IN_VIEWER = !!(window.claude && typeof window.claude.use === 'function');

/* ---------- capabilities (claude.ai viewer); absent when opened as a plain file ---------- */
function useCap(name) {
  try { return window.claude && typeof window.claude.use === 'function' ? window.claude.use(name).catch(() => null) : Promise.resolve(null); }
  catch (e) { return Promise.resolve(null); }
}
let aiState = 'unknown'; // unknown | ready | off
const samplePromise = useCap('sample').then(s => { aiState = s ? 'ready' : 'off'; return s; });

/* ---------- store: shared db when available, else this browser ---------- */
const Store = {
  db: null, mode: 'local', ready: !IN_VIEWER, attempts: [], checks: {}, unchecks: {}, dels: {}, subs: new Set(),
  init() {
    this.loadLocal();
    this.ready = !IN_VIEWER && !Sync.first;
    useCap('db').then(db => {
      if (!db) { this.ready = !Sync.first; this.emit(); return; }
      this.db = db; this.mode = 'db';
      db.collection('attempts').orderBy('ts', 'desc').limit(600).onSnapshot(snap => {
        this.attempts = snap.docs.map(d => Object.assign({ id: d.id }, d.data()));
        this.ready = true;
        this.emit();
      }, () => { this.fallback(); });
      db.doc('progress/checks').onSnapshot(s => {
        const data = s.exists ? s.data() : null;
        this.checks = (data && data.done) ? Object.assign({}, data.done) : {};
        this.emit();
      }, () => { this.fallback(); });
      this.emit();
    });
  },
  loadLocal() { this.attempts = load('apzh.attempts', []); this.checks = load('apzh.checks', {}); this.unchecks = load('apzh.unchecks', {}); this.dels = load('apzh.dels', {}); },
  fallback() { this.db = null; this.mode = 'local'; this.ready = true; this.loadLocal(); this.emit(); },
  persistLocal() { save('apzh.attempts', this.attempts.slice(0, 5000)); save('apzh.checks', this.checks); save('apzh.unchecks', this.unchecks); save('apzh.dels', this.dels); },
  on(fn) { this.subs.add(fn); },
  emit() { this.subs.forEach(f => f()); },
  async add(a) {
    a.ts = Date.now();
    if (this.db) {
      try { const ref = this.db.collection('attempts').doc(); await ref.set(a); afterAttempt(a.ref); return ref.id; }
      catch (e) { toast('雲端儲存失敗，改存在這台裝置'); this.fallback(); }
    }
    a.id = 'local-' + a.ts + Math.random().toString(36).slice(2, 6); a.u = a.ts;
    this.attempts.unshift(a); this.persistLocal(); this.emit(); Sync.touch(); afterAttempt(a.ref); return a.id;
  },
  async update(id, patch) {
    if (this.db && !String(id).startsWith('local-')) {
      try { await this.db.collection('attempts').doc(id).update(patch); return; } catch (e) { toast('更新失敗，請再試一次'); return; }
    }
    const a = this.attempts.find(x => x.id === id); if (a) Object.assign(a, patch, { u: Date.now() });
    this.persistLocal(); this.emit(); Sync.touch();
  },
  async remove(id) {
    if (this.db && !String(id).startsWith('local-')) { try { await this.db.collection('attempts').doc(id).delete(); } catch (e) { toast('刪除失敗'); } return; }
    this.dels[id] = Date.now();
    this.attempts = this.attempts.filter(x => x.id !== id); this.persistLocal(); this.emit(); Sync.touch();
  },
  async toggle(key) {
    const done = Object.assign({}, this.checks);
    if (done[key]) { delete done[key]; this.unchecks[key] = Date.now(); } else { done[key] = Date.now(); delete this.unchecks[key]; }
    this.checks = done; this.emit();
    if (this.db) { try { await this.db.doc('progress/checks').set({ done }); } catch (e) { toast('勾選沒有存到雲端'); } }
    else { this.persistLocal(); Sync.touch(); }
  },
  best(ref) {
    const xs = this.attempts.filter(a => a.ref === ref && typeof a.score === 'number' && a.total);
    if (!xs.length) return null;
    return xs.reduce((b, a) => (a.score / a.total > b.score / b.total ? a : b));
  },
  count(ref) { return this.attempts.filter(a => a.ref === ref).length; }
};

/* ---------- cross-device sync (phone site only) ----------
   Every device keeps its own copy and works offline. When there is a connection, the copies are
   merged record by record through Firestore (REST, anonymous sign-in), under a 12-character code:
     apzh/{code}                  meta: checkboxes, deletions, today's commute picks
     apzh/{code}/months/{YYYY-MM} that month's attempts
   Newest edit of a record wins; deletions and un-ticks are kept as tombstones so they stick. */
const stable = o => JSON.stringify(o, (k, v) => (v && typeof v === 'object' && !Array.isArray(v)) ? Object.keys(v).sort().reduce((r, key) => { r[key] = v[key]; return r; }, {}) : v);
const localMeta = () => ({ checks: Store.checks, unchecks: Store.unchecks, dels: Store.dels, commute: load('apzh.commute', null) });
function mergeMeta(a, b) {
  const checks = {}, unchecks = {};
  new Set([a.checks, a.unchecks, b.checks, b.unchecks].flatMap(o => Object.keys(o || {}))).forEach(k => {
    const c = Math.max((a.checks || {})[k] || 0, (b.checks || {})[k] || 0);
    const u = Math.max((a.unchecks || {})[k] || 0, (b.unchecks || {})[k] || 0);
    if (c > u) checks[k] = c; else if (u) unchecks[k] = u;
  });
  let commute = a.commute || b.commute || null;
  if (a.commute && b.commute) commute = b.commute.date >= a.commute.date ? b.commute : a.commute;
  return { checks, unchecks, dels: Object.assign({}, b.dels || {}, a.dels || {}), commute };
}
const Sync = {
  st: load('apzh.sync', {}), status: 'off', detail: '', busy: false, again: false, timer: null, first: false,
  get on() { return !IN_VIEWER && !!this.st.code; },
  saveState() { save('apzh.sync', this.st); },
  newCode() { const b = new Uint8Array(12); crypto.getRandomValues(b); return Array.from(b, x => 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[x % 32]).join(''); },
  pretty(code) { return String(code || '').replace(/(.{4})(?=.)/g, '$1-'); },
  clean(text) { return String(text || '').toUpperCase().replace(/[^A-Z0-9]/g, ''); },
  valid(code) { return /^[A-Z2-9]{12}$/.test(code); },
  start(code) { this.st = { code, seen: {}, sig: {}, auth: this.st.auth }; this.saveState(); this.run(); },
  // Joining checks that the code exists first, so a typo cannot quietly start a second, empty record.
  async join(code) {
    const had = this.st;
    this.st = { code, seen: {}, sig: {}, auth: had.auth };
    try {
      const doc = await this.req('GET', '/apzh/' + code);
      if (!doc) { this.st = Object.assign({}, had, { auth: this.st.auth }); this.saveState(); return 'missing'; }
    } catch (e) { this.st = Object.assign({}, had, { auth: this.st.auth }); this.saveState(); return (e && e.http === 403) ? 'denied' : 'offline'; }
    this.saveState(); this.run(); return 'ok';
  },
  stop() { clearTimeout(this.timer); this.st = {}; this.saveState(); this.status = 'off'; },
  setStatus(s, detail) { this.status = s; this.detail = detail || ''; $$('[data-sync-status]').forEach(el => { el.innerHTML = this.statusHTML(); }); },
  statusHTML() {
    const s = this.status;
    if (s === 'syncing') return '<span class="chip">同步中…</span>';
    if (s === 'ok') return `<span class="chip ok">已同步 ${fmtTs(this.st.last || Date.now()).split(' ')[1]}</span>`;
    if (s === 'offline') return '<span class="chip warn">離線：連上網路後自動同步</span>';
    if (s === 'denied') return '<span class="chip bad">雲端拒絕存取</span> <span class="small muted">請家長確認 Firebase 規則已經發布。</span>';
    if (s === 'error') return `<span class="chip bad">同步失敗</span> <span class="small muted">${esc(this.detail)}</span>`;
    return '';
  },
  touch() { if (!this.on) return; clearTimeout(this.timer); this.timer = setTimeout(() => this.run(), 1500); },
  endFirst() { if (!this.first) return; this.first = false; if (Store.mode === 'local' && !Store.ready) { Store.ready = true; Store.emit(); } },
  boot() {
    if (IN_VIEWER) return;
    window.addEventListener('online', () => this.run());
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && Date.now() - (this.st.last || 0) > 60000) this.run(); });
    // Another tab of this site changed the saved data: pick it up.
    window.addEventListener('storage', e => { if (e.key && e.key.indexOf('apzh.') !== 0) return; if (Store.mode === 'local') Store.loadLocal(); this.st = load('apzh.sync', {}); Store.emit(); });
    if (this.on) { setTimeout(() => this.endFirst(), 8000); this.run(); }
  },
  // One sign-in at a time, even when several requests start together.
  token() {
    if (!this.tokP) this.tokP = this.fetchToken().finally(() => { this.tokP = null; });
    return this.tokP;
  },
  async fetchToken() {
    const a = this.st.auth || {}, key = D.firebase.apiKey;
    if (a.idToken && a.exp > Date.now() + 60000) return a.idToken;
    if (a.refreshToken) {
      const r = await fetch('https://securetoken.googleapis.com/v1/token?key=' + key, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'grant_type=refresh_token&refresh_token=' + encodeURIComponent(a.refreshToken) });
      if (r.ok) { const j = await r.json(); this.st.auth = { idToken: j.id_token, refreshToken: j.refresh_token, exp: Date.now() + Number(j.expires_in) * 1000 }; this.saveState(); return j.id_token; }
    }
    const r = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + key, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ returnSecureToken: true }) });
    if (!r.ok) { const err = new Error('登入雲端失敗（' + r.status + '）'); err.http = r.status; err.stage = 'auth'; throw err; }
    const j = await r.json();
    this.st.auth = { idToken: j.idToken, refreshToken: j.refreshToken, exp: Date.now() + Number(j.expiresIn) * 1000 };
    this.saveState(); return j.idToken;
  },
  async req(method, path, body, query, retried) {
    const tok = await this.token();
    const url = 'https://firestore.googleapis.com/v1/projects/' + D.firebase.projectId + '/databases/(default)/documents' + path + (query ? '?' + query : '');
    const r = await fetch(url, { method, headers: Object.assign({ Authorization: 'Bearer ' + tok }, body ? { 'Content-Type': 'application/json' } : {}), body: body ? JSON.stringify(body) : undefined });
    if (r.status === 404) return null;
    if (r.status === 401 && !retried) { this.st.auth = Object.assign({}, this.st.auth, { idToken: null }); return this.req(method, path, body, query, true); }
    if (!r.ok) { let status = ''; try { status = (await r.json()).error.status; } catch (e) { /* not JSON */ } const err = new Error(status || 'HTTP ' + r.status); err.http = r.status; err.status = status; throw err; }
    return r.json();
  },
  async run() {
    if (!this.on) { this.endFirst(); return; }
    if (this.busy) { this.again = true; return; }
    if (navigator.onLine === false) { this.setStatus('offline'); this.endFirst(); return; }
    this.busy = true; this.setStatus('syncing');
    try { await this.cycle(); this.st.last = Date.now(); this.saveState(); this.setStatus('ok'); }
    catch (e) {
      if (e && e.http === 403 && e.stage !== 'auth') this.setStatus('denied');
      else if (e instanceof TypeError || navigator.onLine === false) this.setStatus('offline');
      else this.setStatus('error', (e && e.message) || '');
    }
    finally { this.busy = false; this.endFirst(); if (this.again) { this.again = false; this.touch(); } }
  },
  async cycle() {
    const st = this.st, base = '/apzh/' + st.code;
    st.seen = st.seen || {}; st.sig = st.sig || {};
    const monthOf = a => new Date(a.ts).toISOString().slice(0, 7);
    const sigOf = list => list.map(a => a.id + ':' + (a.u || a.ts)).sort().join('|');
    const text = (doc, f) => (doc && doc.fields && doc.fields[f] && doc.fields[f].stringValue) || '';

    // 1. What the cloud holds: the meta record, and when each month last changed.
    const [metaDoc, listing] = await Promise.all([
      this.req('GET', base),
      this.req('GET', base + '/months', null, 'pageSize=100&mask.fieldPaths=n').catch(e => { if (e && e.http === 400) return this.req('GET', base + '/months', null, 'pageSize=100'); throw e; })
    ]);
    const cloudMeta = text(metaDoc, 'meta') ? JSON.parse(text(metaDoc, 'meta')) : {};
    const cloudMonths = {};
    ((listing && listing.documents) || []).forEach(d => { cloudMonths[d.name.split('/').pop()] = d.updateTime; });

    // 2. Download only the months that changed since this device last looked.
    const fetched = {};
    await Promise.all(Object.keys(cloudMonths).filter(m => cloudMonths[m] !== st.seen[m]).map(async m => {
      const d = await this.req('GET', base + '/months/' + m);
      fetched[m] = text(d, 'data') ? JSON.parse(text(d, 'data')) : [];
      if (d) cloudMonths[m] = d.updateTime;
    }));

    // 3. Merge and save locally in one step (no waiting in between, so nothing typed meanwhile is lost).
    const before = sigOf(Store.attempts) + stable(localMeta());
    const meta = mergeMeta(localMeta(), cloudMeta);
    const byId = new Map();
    const put = a => { const b = byId.get(a.id); if (!b || (a.u || a.ts) > (b.u || b.ts)) byId.set(a.id, a); };
    Store.attempts.forEach(put);
    Object.keys(fetched).forEach(m => fetched[m].forEach(put));
    const merged = Array.from(byId.values()).filter(a => !meta.dels[a.id]).sort((a, b) => b.ts - a.ts);
    Store.attempts = merged; Store.checks = meta.checks; Store.unchecks = meta.unchecks; Store.dels = meta.dels;
    if (meta.commute) save('apzh.commute', meta.commute);
    Store.persistLocal();
    if (sigOf(merged) + stable(meta) !== before) Store.emit();

    // 4. Upload the months whose merged content differs from the cloud's, then the meta record.
    const groups = {};
    merged.forEach(a => { const m = monthOf(a); (groups[m] = groups[m] || []).push(a); });
    for (const m of new Set(Object.keys(groups).concat(Object.keys(cloudMonths)))) {
      const list = groups[m] || [], mine = sigOf(list);
      const theirs = m in fetched ? sigOf(fetched[m]) : (m in cloudMonths ? st.sig[m] : null);
      if (mine === theirs) { st.seen[m] = cloudMonths[m]; st.sig[m] = mine; continue; }
      const d = await this.req('PATCH', base + '/months/' + m, { fields: { data: { stringValue: JSON.stringify(list) }, n: { integerValue: String(list.length) } } });
      st.seen[m] = d.updateTime; st.sig[m] = mine;
    }
    if (!metaDoc || stable(meta) !== stable(mergeMeta({}, cloudMeta))) {
      await this.req('PATCH', base, { fields: { meta: { stringValue: JSON.stringify(meta) }, app: { stringValue: 'apzh' } } });
    }
  }
};
function syncCard() {
  if (IN_VIEWER || Store.mode !== 'local') return '';
  if (!Sync.on) return `<div class="card" id="synccard"><b>在手機和電腦之間同步</b>
    <p class="small muted">開啟後，進度會存到雲端。在另一台裝置輸入同一組同步碼，就會看到同一份紀錄；家長也可以用同一組同步碼查看和寫評語。</p>
    <div class="row"><button class="btn primary" data-act="syncnew">開啟同步</button></div>
    <div class="row"><label for="synccode" class="small muted">已經有同步碼：</label><input class="field" id="synccode" style="max-width:13em" placeholder="XXXX-XXXX-XXXX" autocapitalize="characters" autocomplete="off" spellcheck="false"><button class="btn" data-act="syncjoin">連結</button></div>
    <div class="small" id="syncmsg" style="color:var(--red)"></div></div>`;
  return `<div class="card" id="synccard"><div class="row"><b>跨裝置同步</b><span data-sync-status>${Sync.statusHTML()}</span></div>
    <div class="row"><span class="small muted">同步碼</span><code class="synccode">${esc(Sync.pretty(Sync.st.code))}</code><button class="btn" data-act="synccopy">複製</button></div>
    <p class="small muted">在另一台裝置打開這個網站，到「紀錄」輸入這組同步碼。同步碼就是鑰匙，不要公開。</p>
    <div class="row"><button class="btn" data-act="syncnow">立即同步</button><button class="btn ghost danger" data-act="syncoff">在這台裝置停止同步</button></div></div>`;
}

/* ---------- speech synthesis ---------- */
const TTS = {
  ok: typeof window.speechSynthesis !== 'undefined' && typeof window.SpeechSynthesisUtterance !== 'undefined',
  zh: [],
  init() {
    if (!this.ok) return;
    const loadV = () => {
      const all = speechSynthesis.getVoices();
      const tw = all.filter(v => /zh[-_]TW/i.test(v.lang) || /Taiwan|臺灣|台灣/i.test(v.name));
      this.zh = tw.length ? tw : all.filter(v => /^zh/i.test(v.lang) && !/HK|yue/i.test(v.lang));
      $$('[data-voice-status]').forEach(el => { el.innerHTML = voiceStatus(); });
      $$('[data-novoice]').forEach(el => { el.hidden = this.zh.length > 0; });
    };
    loadV();
    if (speechSynthesis.addEventListener) speechSynthesis.addEventListener('voiceschanged', loadV);
    else speechSynthesis.onvoiceschanged = loadV;
  },
  voice(g) {
    if (!this.zh.length) return null;
    const re = g === 'm' ? /Zhiwei|YunJhe|Yun-?Jhe|male|男/i : /HsiaoChen|HsiaoYu|Hanhan|Yating|Mei-?Jia|female|女/i;
    return this.zh.find(v => re.test(v.name)) || this.zh[0];
  },
  one(text, g, rate) {
    return new Promise(resolve => {
      const u = new SpeechSynthesisUtterance(text);
      const v = this.voice(g);
      if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'zh-TW';
      const shared = !v || this.voice(g === 'm' ? 'f' : 'm') === v;
      u.pitch = shared ? (g === 'm' ? 0.72 : 1.12) : 1;
      u.rate = rate;
      let done = false;
      const fin = () => { if (!done) { done = true; clearTimeout(t); resolve(); } };
      u.onend = fin; u.onerror = fin;
      const t = setTimeout(fin, 3000 + text.length * 420 / rate);
      speechSynthesis.speak(u);
    });
  },
  async say(lines, opt = {}) {
    if (!this.ok) return;
    const rate = opt.rate || 1, tok = opt.token || {};
    for (let i = 0; i < lines.length; i++) {
      if (tok.stop) return;
      if (opt.onLine) opt.onLine(i);
      const parts = lines[i].text.replace(/([。！？；])/g, '$1\n').split('\n').map(s => s.trim()).filter(Boolean);
      for (const p of parts) { if (tok.stop) return; await this.one(p, lines[i].g, rate); }
      if (i < lines.length - 1) await sleep(380);
    }
  },
  unlock() { if (!this.ok) return; try { const u = new SpeechSynthesisUtterance(' '); u.volume = 0; speechSynthesis.speak(u); } catch (e) { /* ignore */ } },
  stop() { if (this.ok) speechSynthesis.cancel(); }
};
function voiceStatus() {
  if (!TTS.ok) return '<span class="chip bad">這個瀏覽器不支援語音朗讀</span>';
  if (!TTS.zh.length) return '<span class="chip warn">找不到中文語音</span>';
  return '<span class="chip ok">語音：' + esc(TTS.zh.slice(0, 2).map(v => v.name.replace(/Microsoft |Google | Online.*$/g, '')).join('、')) + '</span>';
}
const noVoiceTip = () => `<div class="tip" data-novoice ${TTS.zh.length || !TTS.ok ? 'hidden' : ''}><b>找不到中文語音。</b>先按播放試試，聽得到中文就不用管。聽不到的話：iPhone／iPad 到「設定 → 輔助使用 → 朗讀內容 → 聲音」加入中文（台灣）；Android 到「設定 → 語言與輸入 → 文字轉語音」安裝中文（台灣）語音；Windows 到「設定 → 時間與語言 → 語音」新增語音。設定好之後重新開啟這一頁。</div>`;

/* ---------- microphone (works when the page is opened directly in a browser) ---------- */
const Rec = {
  state: 'unknown', mr: null, stream: null, chunks: [],
  async start() {
    if (this.state === 'off') return false;
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) throw new Error('unsupported');
      if (!this.stream) this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.chunks = [];
      this.mr = new MediaRecorder(this.stream);
      this.mr.ondataavailable = e => { if (e.data && e.data.size) this.chunks.push(e.data); };
      this.mr.start(); this.state = 'on'; return true;
    } catch (e) { this.state = 'off'; return false; }
  },
  stop() {
    return new Promise(res => {
      if (!this.mr || this.mr.state === 'inactive') return res(null);
      const mr = this.mr;
      mr.onstop = () => { const blob = new Blob(this.chunks, { type: mr.mimeType || 'audio/webm' }); res(URL.createObjectURL(blob)); };
      mr.stop(); this.mr = null;
    });
  },
  release() { if (this.stream) { this.stream.getTracks().forEach(t => t.stop()); this.stream = null; } }
};
const probeMic = () => Promise.race([Rec.start().then(ok => { if (ok) Rec.stop(); return ok; }), sleep(8000).then(() => false)]);
const recTip = '<div class="tip"><b>這裡沒有麥克風權限，所以不會錄音。</b>' + (IN_VIEWER ? '請用手機的「語音備忘錄」同時錄下來，或改用網站版練習。' : '請允許這個網站使用麥克風再試一次，或用「語音備忘錄」同時錄下來。') + '練習完聽一次，用下面的評分標準自評。</div>';

/* ---------- run lifecycle ---------- */
let cleanups = [];
let wakeLock = null;
function onCleanup(fn) { cleanups.push(fn); }
function runCleanups() { const c = cleanups; cleanups = []; c.forEach(f => { try { f(); } catch (e) { /* ignore */ } }); TTS.stop(); }
async function keepAwake() { if (wakeLock) return; try { if (navigator.wakeLock) { wakeLock = await navigator.wakeLock.request('screen'); onCleanup(() => { if (wakeLock) wakeLock.release().catch(() => {}); wakeLock = null; }); } } catch (e) { /* optional */ } }
function countdown(sec, onTick, tok) {
  return new Promise(res => {
    const end = Date.now() + sec * 1000;
    const tick = () => {
      if (tok.stop) return res('stop');
      const left = Math.max(0, (end - Date.now()) / 1000);
      onTick(left);
      if (left <= 0) return res('done');
      tok.timer = setTimeout(tick, 200);
    };
    tok.skip = () => { clearTimeout(tok.timer); res('skip'); };
    tick();
  });
}

/* ---------- state & routing ---------- */
const TABS = [['plan', '計畫'], ['listen', '聽力'], ['read', '閱讀'], ['write', '寫作'], ['speak', '口說'], ['tools', '工具箱'], ['log', '紀錄']];
const S = { tab: 'plan', run: null, logFilter: 'all', commute: false };
let H = {};
main.addEventListener('click', e => {
  const el = e.target.closest('[data-act]');
  if (!el || !main.contains(el)) return;
  const fn = H[el.dataset.act] || GLOBAL[el.dataset.act];
  if (fn) { e.preventDefault(); fn(el, e); }
});
const GLOBAL = {
  check: el => Store.toggle(el.dataset.key),
  open: el => { S.commute = false; openItem(el.dataset.id); },
  run: el => { S.commute = false; go({ kind: el.dataset.kind, id: el.dataset.id }); },
  tab: el => setTab(el.dataset.tab),
  back: () => { S.run = null; S.commute = false; render(true); },
  commute: el => startCommute(+el.dataset.i),
  share: el => { const a = findAttempt(el.dataset.id); if (a) shareText('AP中文練習', attemptShareText(a)); },
  copyprompt: el => { const a = findAttempt(el.dataset.id); if (a) copyText(aiPrompt(a, true), '已複製，貼給 Claude 就能批改'); },
  hidehint: () => { save('apzh.hint', 1); const h = $('#ihint'); if (h) h.remove(); },
  syncnew: () => { Sync.start(Sync.newCode()); refresh(); },
  syncjoin: async el => {
    const code = Sync.clean($('#synccode').value), msg = $('#syncmsg');
    if (!Sync.valid(code)) { msg.textContent = '同步碼是 12 個英文字母和數字（沒有 0 和 1）。'; return; }
    el.disabled = true; msg.textContent = '連結中…';
    const r = await Sync.join(code);
    if (r === 'ok') { refresh(); return; }
    el.disabled = false;
    msg.textContent = r === 'missing' ? '找不到這組同步碼，請檢查有沒有打錯。' : r === 'denied' ? '雲端拒絕存取，請家長確認 Firebase 規則已經發布。' : '連不上雲端，請確認有網路後再試一次。';
  },
  synccopy: () => copyText(Sync.pretty(Sync.st.code), '同步碼已複製'),
  syncnow: () => Sync.run(),
  syncoff: el => {
    if (!el.dataset.armed) { el.dataset.armed = '1'; el.textContent = '確定停止？再按一次'; setTimeout(() => { if (el.isConnected) { delete el.dataset.armed; el.textContent = '在這台裝置停止同步'; } }, 4000); return; }
    Sync.stop(); refresh();
  },
  say: el => { TTS.stop(); TTS.say([{ text: el.dataset.say || el.textContent.replace(/……/g, '，'), g: 'f' }], { rate: 0.95 }); }
};
function setTab(t) {
  S.tab = t; S.run = null; S.commute = false;
  try { history.replaceState(null, '', '#' + t); } catch (e) { /* sandboxed */ }
  render(true);
}
function go(run) { S.run = run; render(true); }
function openItem(id) {
  if (id === 'QA') return (S.tab = 'speak', go({ kind: 'qa' }));
  if (id === 'HOMO') return (S.tab = 'tools', go({ kind: 'homo' }));
  const map = { L: ['listen', 'listening'], R: ['read', 'reading'], S: ['write', 'story'], E: ['write', 'email'], P: ['speak', 'pres'] };
  const m = map[id[0]]; if (!m) return;
  S.tab = m[0]; go({ kind: m[1], id });
}
function itemTitle(id) {
  if (id === 'QA') return '問答練習';
  if (id === 'HOMO') return '選字練習';
  const pools = { L: D.listening, R: D.reading, S: D.stories, E: D.emails, P: D.presTopics };
  const it = (pools[id[0]] || []).find(x => x.id === id);
  if (!it) return id;
  if (id[0] === 'S') return '看圖寫故事 ' + id.slice(1).replace(/^0/, '');
  if (id[0] === 'E') return '郵件「' + it.subject + '」';
  if (id[0] === 'P') return '報告練習 ' + id.slice(1).replace(/^0/, '');
  return it.title;
}
function linkify(t) {
  return esc(t).replace(/\[\[(\w+)\]\]/g, (m, id) => {
    const done = id !== 'QA' && id !== 'HOMO' && Store.count(id) > 0;
    return `<button class="linkish" data-act="open" data-id="${id}">${esc(itemTitle(id))}</button>${done ? ' <span class="chip ok">✓</span>' : ''}`;
  });
}

function renderTabs() {
  $('#tabs').innerHTML = TABS.map(([k, n]) => `<button class="tab" role="tab" aria-selected="${S.tab === k}" data-tabbtn="${k}">${n}</button>`).join('');
}
function renderCount() {
  const n = daysBetween(localISO(), D.examDate);
  $('#count').innerHTML = n >= 0 ? `距考試 <span class="num">${n}</span> 天` : '考試已結束';
}
function render(scrollTop) {
  runCleanups();
  H = {};
  renderTabs();
  if (S.run) RUN[S.run.kind](S.run);
  else VIEW[S.tab]();
  if (scrollTop) window.scrollTo(0, 0);
}
function refresh() {
  if (S.run) return;
  const a = document.activeElement;
  if (a && main.contains(a) && /TEXTAREA|INPUT/.test(a.tagName)) return;
  const open = $$('details[data-keep]').filter(d => d.open).map(d => d.dataset.keep);
  const y = window.scrollY;
  H = {};
  VIEW[S.tab]();
  open.forEach(k => { const d = $(`details[data-keep="${k}"]`); if (d) d.open = true; });
  window.scrollTo(0, y);
}

/* ---------- shared fragments ---------- */
function setStatus(id) {
  const b = Store.best(id), n = Store.count(id);
  if (!n) return '<span class="chip">未練習</span>';
  if (!b) return `<span class="chip ok">已練習 ${n} 次</span>`;
  const pct = b.score / b.total;
  return `<span class="chip ${pct >= .8 ? 'ok' : pct >= .6 ? 'warn' : 'bad'}">最佳 ${b.score}/${b.total}</span>` + (n > 1 ? `<span class="chip">${n} 次</span>` : '');
}
function chartHTML(c) {
  return `<figure class="chart" style="margin:0"><figcaption class="ttl">${esc(c.title)}</figcaption>
    ${c.items.map(([k, v]) => `<div class="bar-row"><span>${esc(k)}</span><span class="bar-track"><span class="bar" style="width:${(v / c.max * 100).toFixed(1)}%"></span>${c.ref ? `<span class="ref" style="left:${(c.ref.v / c.max * 100).toFixed(1)}%"></span>` : ''}</span><span class="bar-val">${v}${c.unit === '%' ? '%' : ''}</span></div>`).join('')}
    ${c.ref ? `<div class="ref-note">紅色虛線：${esc(c.ref.label)}</div>` : ''}
    <div class="small muted">單位：${esc(c.unit === '%' ? '百分比' : c.unit)}</div></figure>`;
}
function keepOrder(opts) {
  const num = /^(NT\$|US\$|\$)?[\d,.:]+(%|\s|$)|^(About|One|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten|Eleven|Twelve|Thirteen)\b/;
  return opts.every(o => num.test(o));
}
function prepQs(questions) {
  return questions.map(q => {
    const idx = keepOrder(q.o) ? q.o.map((_, i) => i) : shuffle(q.o.map((_, i) => i));
    return { q: q.q, opts: idx.map(i => q.o[i]), a: idx.indexOf(q.a) };
  });
}
function qsHTML(qs) {
  return qs.map((q, i) => `<div class="q" data-q="${i}"><div class="qt">${i + 1}. ${esc(q.q)}</div><div class="opts">${q.opts.map((o, j) => `<button class="opt" data-act="pickopt" data-q="${i}" data-o="${j}"><span class="k">(${letters[j]})</span><span>${esc(o)}</span></button>`).join('')}</div></div>`).join('');
}
function wireMC(qs, answers) {
  H.pickopt = el => {
    if (el.disabled) return;
    const i = +el.dataset.q, j = +el.dataset.o;
    answers[i] = j;
    $$(`.opt[data-q="${i}"]`).forEach(b => b.classList.toggle('sel', +b.dataset.o === j));
  };
}
function gradeMC(qs, answers) {
  let score = 0;
  qs.forEach((q, i) => {
    if (answers[i] === q.a) score++;
    $$(`.opt[data-q="${i}"]`).forEach(b => {
      const j = +b.dataset.o; b.disabled = true;
      if (j === q.a) b.classList.add('right');
      else if (j === answers[i]) b.classList.add('wrong');
    });
  });
  return score;
}
function scoreHTML(score, total, note) {
  const pct = Math.round(score / total * 100);
  return `<div class="card raised"><div class="score"><span class="big num">${score}/${total}</span><span class="chip ${pct >= 80 ? 'ok' : pct >= 60 ? 'warn' : 'bad'}">${pct}%</span><span class="muted small">${note || ''}</span></div></div>`;
}
function rubricPicker(key, rub, current) {
  return `<div class="stack">${rub.rows.map(r => `<div class="rubric-row"><div class="rn"><span>${r.k}　${esc(r.name)}</span><span class="chip">0–${r.max} 分</span></div>
    <div class="small"><b>滿分表現：</b>${esc(r.top)}</div><div class="small muted">${esc(r.note)}</div>
    <div class="pts">${Array.from({ length: r.max + 1 }, (_, p) => `<button data-act="selfpt" data-key="${key}" data-row="${r.k}" data-p="${p}" aria-pressed="${current && current[r.k] === p}">${p}</button>`).join('')}</div></div>`).join('')}</div>`;
}
function wireSelf(selfState, onChange) {
  H.selfpt = el => {
    const key = el.dataset.key, row = el.dataset.row, p = +el.dataset.p;
    selfState[key] = selfState[key] || {};
    selfState[key][row] = p;
    $$(`[data-act="selfpt"][data-key="${key}"][data-row="${row}"]`).forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.p === p)));
    if (onChange) onChange(key);
  };
}
const sumSelf = o => Object.values(o || {}).reduce((a, b) => a + b, 0);

/* ======================================================================
   VIEWS
   ====================================================================== */
/* ---------- today's commute session ---------- */
const lastRecs = {};
const findAttempt = id => Store.attempts.find(x => x.id === id) || lastRecs[id];
const shareRow = id => `<div class="row"><button class="btn primary" data-act="share" data-id="${id}">分享給家長</button><button class="btn" data-act="copyprompt" data-id="${id}">複製 AI 批改提示</button></div>`;

function planOrderIds() {
  const cur = currentWeek(), out = [];
  for (const w of D.weeks) {
    if (w.w > cur.w) break;
    for (const t of w.tasks) for (const m of t.matchAll(/\[\[(\w+)\]\]/g)) if (!out.includes(m[1])) out.push(m[1]);
  }
  return out;
}
// Next item from a pool: catch up in plan order, then anything untouched, then the weakest / stalest.
function nextFrom(pool, prefix) {
  const ids = pool.map(x => x.id);
  const planned = planOrderIds().filter(id => id[0] === prefix && ids.includes(id));
  const order = planned.concat(ids.filter(id => !planned.includes(id)));
  const fresh = order.find(id => !Store.count(id));
  if (fresh) return fresh;
  const last = id => Math.max(0, ...Store.attempts.filter(a => a.ref === id).map(a => a.ts));
  const ratio = id => { const b = Store.best(id); return b ? b.score / b.total : 1; };
  return order.slice().sort((a, b) => ratio(a) - ratio(b) || last(a) - last(b))[0];
}
function commutePicks() {
  const today = localISO();
  const saved = load('apzh.commute', null);
  if (saved && saved.date === today && Array.isArray(saved.items)) return saved.items;
  const n = Math.abs(daysBetween('2026-10-12', today));
  const src = D.authSources[n % D.authSources.length];
  const items = [
    { k: 'listening', id: nextFrom(D.listening, 'L'), min: 6 },
    { k: 'reading', id: nextFrom(D.reading, 'R'), min: 7 },
    { k: 'homo', id: 'HOMO', min: 3 },
    n % 2 ? { k: 'story', id: nextFrom(D.stories, 'S'), min: 15 } : { k: 'email', id: nextFrom(D.emails, 'E'), min: 15 },
    { k: 'auth', id: 'AUTH-' + src.id, min: src.min }
  ];
  if (Store.ready) { save('apzh.commute', { date: today, items }); Sync.touch(); }
  return items;
}
function doneToday(id, extra) {
  if (extra && extra === id) return true;
  const today = localISO();
  return Store.attempts.some(a => a.ref === id && localISO(new Date(a.ts)) === today);
}
function commuteLabel(it) {
  if (it.k === 'auth') { const s = D.authSources.find(x => 'AUTH-' + x.id === it.id) || D.authSources[0]; return [s.name, s.task]; }
  if (it.k === 'homo') return ['選字', '同音字 12 題'];
  if (it.k === 'listening' || it.k === 'reading') { const set = (it.k === 'listening' ? D.listening : D.reading).find(x => x.id === it.id); return [kindLabels[it.k], typeLabels[set.type][0] + '・' + set.title]; }
  return ['寫作', itemTitle(it.id)];
}
function commuteCard() {
  const items = commutePicks();
  const done = items.filter(it => doneToday(it.id)).length;
  const next = items.findIndex(it => !doneToday(it.id));
  const total = items.reduce((s, it) => s + it.min, 0);
  return `<section class="section"><div class="card raised commute">
    <div class="row"><h2>今日通勤任務</h2><span class="chip ${done === items.length ? 'ok' : 'acc'} num">${done}/${items.length}</span><span class="spacer"></span><span class="small muted">約 ${total} 分鐘・戴耳機</span></div>
    <div>${items.map((it, i) => { const [a, b] = commuteLabel(it); const d = doneToday(it.id); return `<button class="crow ${d ? 'done' : ''}" data-act="commute" data-i="${i}"><span class="cdot">${d ? '✓' : i + 1}</span><span class="ct"><b>${esc(a)}</b>　${esc(b)}</span><span class="small muted num">${it.min} 分</span><span class="go" aria-hidden="true">›</span></button>`; }).join('')}</div>
    <div class="row">${next >= 0 ? `<button class="btn primary" data-act="commute" data-i="${next}">${done ? '繼續' : '開始'} →</button>` : '<span class="chip ok">今天的任務完成了</span>'}<span class="small muted">口說要出聲，留到家裡練。除了最後一項，沒有網路也能做。</span></div>
  </div></section>`;
}
function startCommute(i) {
  const it = commutePicks()[i]; if (!it) return;
  S.tab = 'plan'; S.commute = true;
  go(it.k === 'homo' ? { kind: 'homo' } : { kind: it.k, id: it.id });
}
function afterAttempt(ref) {
  if (!S.run || !S.commute) return;
  const old = $('#cnext'); if (old) old.remove();
  const items = commutePicks();
  const done = items.filter(it => doneToday(it.id, ref)).length;
  const next = items.findIndex(it => !doneToday(it.id, ref));
  const el = document.createElement('div'); el.id = 'cnext'; el.className = 'card raised cnext';
  el.innerHTML = next >= 0
    ? `<div class="row"><div class="stack" style="gap:2px"><b>今日通勤任務 ${done}/${items.length}</b><span class="small muted">下一個：${esc(commuteLabel(items[next]).join('・'))}（約 ${items[next].min} 分鐘）</span></div><span class="spacer"></span><button class="btn primary" data-act="commute" data-i="${next}">下一個 →</button></div>`
    : `<div class="row"><div class="stack" style="gap:2px"><b>今日通勤任務完成！</b><span class="small muted">${items.length}/${items.length}・明天見</span></div><span class="spacer"></span><button class="btn primary" data-act="back">回首頁</button></div>`;
  main.appendChild(el);
}
function installHint() {
  if (IN_VIEWER || location.protocol === 'file:' || load('apzh.hint', 0)) return '';
  const installed = (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone;
  const touch = window.matchMedia && matchMedia('(pointer: coarse)').matches;
  if (installed || !touch) return '';
  return `<div class="tip" id="ihint"><b>加到手機主畫面：</b>iPhone 用 Safari 開啟，點「分享」→「加入主畫面」。Android 用 Chrome，點右上角選單 →「加到主畫面」。之後像 App 一樣打開，沒有網路也能用。<button class="linkish" data-act="hidehint">知道了</button></div>`;
}

/* ---------- sharing (phone site has no AI grader, so work goes to the parent) ---------- */
function showCopyBox(text) {
  const old = $('#copybox'); if (old) old.remove();
  const d = document.createElement('div'); d.id = 'copybox'; d.className = 'card';
  d.innerHTML = '<b>全選後複製：</b><textarea class="notes" readonly></textarea>';
  const ta = d.querySelector('textarea'); ta.value = text;
  main.appendChild(d); ta.focus(); ta.select(); d.scrollIntoView({ block: 'center' });
}
async function copyText(text, okMsg) {
  try { await navigator.clipboard.writeText(text); toast(okMsg || '已複製'); }
  catch (e) { showCopyBox(text); }
}
async function shareText(title, text) {
  if (navigator.share && !IN_VIEWER) {
    try { await navigator.share({ title, text }); return; }
    catch (e) { if (e && e.name === 'AbortError') return; }
  }
  copyText(text, '已複製，貼到訊息裡傳給家長');
}
function attemptShareText(a) {
  const out = [`【AP中文練習】${kindLabels[a.kind] || a.kind}　${a.title || a.ref || ''}`,
    fmtTs(a.ts) + (a.secs ? `・用時 ${mmss(a.secs)}` : '') + (a.text ? `・${countChars(a.text)} 字` : '') + (typeof a.score === 'number' && a.total ? `・${a.score}/${a.total}` : '')];
  if (a.prompt) out.push('', '題目：' + a.prompt);
  if (a.text) out.push('', '我的作答：', a.text);
  if (a.notes) out.push('', '筆記：' + a.notes);
  if (a.self && Object.keys(a.self).length) out.push('', '自評：' + Object.entries(a.self).map(([k, v]) => k + ' ' + v).join('・') + `（共 ${sumSelf(a.self)} 分）`);
  return out.join('\n');
}
function weekSummaryText() {
  const d = new Date(); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() - (d.getDay() + 6) % 7);
  const A = Store.attempts.filter(a => a.ts >= d.getTime()).slice().reverse();
  const out = [`【AP中文】本週紀錄（${d.getMonth() + 1}/${d.getDate()} 起）　共 ${A.length} 項練習`];
  for (const k of ['listening', 'reading', 'homo']) {
    const xs = A.filter(a => a.kind === k && a.total);
    if (xs.length) out.push(`${kindLabels[k]}：${xs.length} 次，平均 ${Math.round(xs.reduce((s, a) => s + a.score / a.total, 0) / xs.length * 100)}%（${xs.map(a => (a.ref === 'HOMO' ? '' : a.ref + ' ') + a.score + '/' + a.total).join('、')}）`);
  }
  const sp = A.filter(a => a.kind === 'qa' || a.kind === 'pres');
  if (sp.length) out.push(`口說：${sp.length} 次` + (sp.some(a => a.self) ? `（自評 ${sp.filter(a => a.self).map(a => sumSelf(a.self)).join('、')} 分）` : ''));
  const texts = A.filter(a => a.text);
  if (texts.length) out.push('', '── 寫作和閱讀心得 ──');
  texts.forEach(a => out.push('', attemptShareText(a)));
  if (!A.length) out.push('這個星期還沒有紀錄。');
  return out.join('\n');
}
function headClock(left) {
  const c = $('#count'); if (!c) return;
  if (left === null) { c.classList.remove('low'); renderCount(); return; }
  c.innerHTML = `⏱ <span class="num">${mmss(left)}</span>`; c.classList.toggle('low', left <= 120);
}

const VIEW = {};

function currentWeek() {
  const today = localISO();
  let cur = D.weeks[0];
  for (const w of D.weeks) if (w.start <= today) cur = w;
  return cur;
}
function weekEnd(w) { const d = parseISO(w.start); d.setDate(d.getDate() + 6); return localISO(d); }
function taskRow(key, text) {
  const done = !!Store.checks[key];
  return `<div class="task ${done ? 'done' : ''}"><button class="cb" role="checkbox" aria-checked="${done}" aria-label="完成" data-act="check" data-key="${key}"></button><div class="txt">${linkify(text)}</div></div>`;
}
function storageNote() {
  if (Store.mode === 'db') return '紀錄和勾選存在雲端：家長和孩子打開同一個連結，看到的是同一份。';
  if (Sync.on) return '紀錄存在這台裝置，並和使用同一組同步碼的裝置同步。';
  return IN_VIEWER ? '紀錄和勾選存在這台裝置的瀏覽器裡。' : '紀錄和勾選只存在這台裝置。到「紀錄」可以開啟跨裝置同步。';
}

VIEW.plan = () => {
  const wk = currentWeek();
  const ph = D.phases[wk.phase];
  const today = localISO();
  const days = daysBetween(today, D.examDate);
  const keyRows = D.keyDates.map(k => {
    const done = !!Store.checks[k.id];
    const left = daysBetween(today, k.date);
    const st = done ? '<span class="chip ok">完成</span>' : left < 0 ? '<span class="chip bad">已過期</span>' : left <= 14 ? `<span class="chip warn">剩 ${left} 天</span>` : '';
    return `<div class="task ${done ? 'done' : ''}"><button class="cb" role="checkbox" aria-checked="${done}" aria-label="完成" data-act="check" data-key="${k.id}"></button>
      <div class="stack" style="gap:2px"><div class="row" style="gap:8px"><span class="date">${md(k.date)}</span><span class="txt" style="font-weight:700">${esc(k.t)}</span>${st}</div><div class="small muted">${esc(k.d)}</div></div></div>`;
  }).join('');
  const fmt = D.examFormat;
  const weeksByPhase = D.phases.map(p => {
    const ws = D.weeks.filter(w => w.phase === p.n);
    return `<div class="stack" style="gap:0"><h3 style="margin:14px 0 4px">${p.n + 1}. ${esc(p.name)}　<span class="muted small" style="font-family:var(--body)">${esc(p.range)}・${esc(p.d)}</span></h3>
      ${ws.map(w => {
        const total = w.tasks.length, done = w.tasks.filter((_, i) => Store.checks['w' + w.w + '-' + i]).length;
        return `<details class="week ${w === wk ? 'now' : ''}" data-keep="w${w.w}" ${w === wk ? 'open' : ''}>
          <summary><span class="wn">W${w.w}</span><span class="date">${md(w.start)}–${md(weekEnd(w))}</span><span class="wt">${esc(w.title)}</span><span class="chip ${done === total ? 'ok' : ''}">${done}/${total}</span></summary>
          <div class="stack" style="padding:6px 0 4px 0">${w.tasks.map((t, i) => taskRow('w' + w.w + '-' + i, t)).join('')}</div></details>`;
      }).join('')}</div>`;
  }).join('');

  main.innerHTML = `${installHint()}${commuteCard()}
  <section class="hero">
    <div class="days"><span class="lbl">距離考試還有</span><span class="big num">${Math.max(0, days)}</span><span class="lbl">天・2027 年 5 月 13 日（四）</span></div>
    <div class="card raised">
      <div class="row"><span class="chip acc">本週・第 ${wk.w} 週／${D.weeks.length}</span><span class="chip">${esc(ph.name)}階段</span><span class="date">${md(wk.start)}–${md(weekEnd(wk))}</span></div>
      <h2>${esc(wk.title)}</h2>
      <div class="stack" style="gap:0">${wk.tasks.map((t, i) => taskRow('w' + wk.w + '-' + i, t)).join('')}</div>
    </div>
  </section>

  <section class="section">
    <div class="section-head"><h2>重要日期</h2><span class="small muted">${storageNote()}</span></div>
    <div class="card">${keyRows}</div>
  </section>

  <section class="section">
    <div class="section-head"><h2>2027 年新制考試</h2><span class="small muted">約 1 小時 50 分鐘</span></div>
    <p class="lede">${esc(fmt.order)}</p>
    <div class="card tbl-wrap"><table class="fmt"><thead><tr><th>部分</th><th>配分</th><th>內容</th></tr></thead><tbody>
      ${fmt.sections.map(s => `<tr class="sec"><td>${s.s}　${esc(s.name)}</td><td>${s.weight}</td><td>${esc(s.time)}</td></tr>` + s.parts.map(p => `<tr><td>${esc(p.n)}</td><td class="num">${p.w}</td><td>${esc(p.d)}</td></tr>`).join('')).join('')}
    </tbody></table></div>
    <ul class="lede" style="margin:0;padding-left:1.2em">${fmt.notes.map(n => `<li>${esc(n)}</li>`).join('')}</ul>
  </section>

  <section class="section">
    <div class="section-head"><h2>每週作息</h2><span class="small muted">公車上練聽、讀、寫；口說留在家裡</span></div>
    <div class="card"><table class="fmt"><tbody>${D.routine.map(r => `<tr><td style="white-space:nowrap;font-weight:700">${r.day}</td><td style="white-space:nowrap">${esc(r.t)}</td><td>${esc(r.d)}</td><td class="num muted" style="white-space:nowrap">${r.min ? r.min + ' 分' : ''}</td></tr>`).join('')}</tbody></table></div>
  </section>

  <section class="section">
    <div class="section-head"><h2>31 週計畫</h2><span class="small muted">點一週展開；連結會直接打開練習</span></div>
    <div class="phase-bar">${D.phases.map(p => `<div class="phase ${p.n === wk.phase ? 'cur' : ''}"><b>${p.n + 1}. ${esc(p.name)}</b><span class="small muted">${esc(p.range)}</span></div>`).join('')}</div>
    <div class="card">${weeksByPhase}</div>
  </section>

  <section class="section">
    <div class="section-head"><h2>專題報告：家長的角色</h2></div>
    <p class="lede">專題報告和問答佔總分 35%。College Board 對老師有明確規定，自學時家長就是老師，請照同一套規則。</p>
    <div class="do-dont">
      <div class="card"><h3><span class="chip ok">可以</span></h3><ul>${D.parentRules.can.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
      <div class="card"><h3><span class="chip bad">不可以</span></h3><ul>${D.parentRules.cannot.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
    </div>
    <p class="small muted">${esc(D.parentRules.source)}</p>
  </section>
  ${footer()}`;
};

function footer() {
  return `<footer class="foot"><span>練習題是依 2026 年官方 Course and Exam Description 的題型編寫的模擬題，不是 College Board 的官方試題；圖表數字為練習用途。</span><span>${storageNote()}</span></footer>`;
}

function setListView(kind, data, order, head) {
  const groups = order.map(t => {
    const sets = data.filter(s => s.type === t);
    if (!sets.length) return '';
    return `<div class="group-title"><h3>${typeLabels[t][0]}</h3><span class="small muted">${typeLabels[t][1]}</span></div>
      <div class="grid">${sets.map(s => `<button class="set" data-act="run" data-kind="${kind}" data-id="${s.id}">
        <div class="meta"><span class="chip">${s.id}</span><span class="chip">單元${s.unit}・${unitNames[s.unit]}</span></div>
        <div class="t">${esc(s.title)}</div><div class="meta">${setStatus(s.id)}</div></button>`).join('')}</div>`;
  }).join('');
  main.innerHTML = head + `<section class="section">${groups}</section>` + footer();
}

VIEW.listen = () => {
  setListView('listening', D.listening, ['chart', 'report', 'conv', 'instr', 'pres'], `
  <section class="section">
    <div class="section-head"><h2>聽力 Listening</h2><span data-voice-status>${voiceStatus()}</span></div>
    <p class="lede">考試 Part A：5 組、25 題、25 分鐘，佔總分 25%。內容是中文，題目和選項是英文。先看題目再聽，邊聽邊記關鍵字。</p>
    <div class="row">
      <span class="small muted">播放次數</span><div class="seg" role="group">${[1, 2].map(n => `<button data-act="pref" data-k="plays" data-v="${n}" aria-pressed="${prefs.plays === n}">${n} 次</button>`).join('')}</div>
      <span class="small muted">語速</span><div class="seg" role="group">${[[0.85, '慢'], [1, '正常']].map(([v, l]) => `<button data-act="pref" data-k="rate" data-v="${v}" aria-pressed="${prefs.rate === v}">${l}</button>`).join('')}</div>
    </div>
    ${noVoiceTip()}
  </section>`);
  H.pref = el => { prefs[el.dataset.k] = +el.dataset.v; savePrefs(); refresh(); };
};

VIEW.read = () => {
  setListView('reading', D.reading, ['article', 'artchart', 'corr', 'lit', 'promo'], `
  <section class="section">
    <div class="section-head"><h2>閱讀 Reading</h2></div>
    <p class="lede">考試 Part B：6 組、30 題、40 分鐘，佔總分 25%。平均每組 6–7 分鐘。先看題目，再回到文章找證據。</p>
  </section>`);
};

VIEW.write = () => {
  const stories = D.stories.map((s, i) => `<button class="set" data-act="run" data-kind="story" data-id="${s.id}">
    <div class="meta"><span class="chip">${s.id}</span><span class="chip">單元${s.unit}</span></div>
    <div class="t">看圖寫故事 ${i + 1}${Store.count(s.id) ? '：' + esc(s.title) : ''}</div><div class="meta">${setStatus(s.id)}</div></button>`).join('');
  const emails = D.emails.map(e => `<button class="set" data-act="run" data-kind="email" data-id="${e.id}">
    <div class="meta"><span class="chip">${e.id}</span><span class="chip ${e.register === 'formal' ? 'acc' : ''}">${e.register === 'formal' ? '正式語氣' : '朋友語氣'}</span></div>
    <div class="t">${esc(e.subject)}</div><div class="small muted">${esc(e.from)}</div><div class="meta">${setStatus(e.id)}</div></button>`).join('');
  const nextS = D.stories.find(s => !Store.count(s.id)) || pick(D.stories);
  const nextE = D.emails.find(e => !Store.count(e.id)) || pick(D.emails);
  main.innerHTML = `
  <section class="section">
    <div class="section-head"><h2>寫作 Writing</h2><span class="chip acc">${aiState === 'off' ? '自評模式' : '交卷後可請 AI 依官方標準批改'}</span></div>
    <p class="lede">考試第 3、4 題：看圖寫故事和回覆電子郵件，兩題共 30 分鐘，各佔 7.5%，都是 8 分制。要打字，所以選字正確很重要。</p>
    <div class="card raised"><div class="row"><div class="stack" style="gap:2px"><b>完整寫作測驗（30 分鐘）</b><span class="small muted">一次寫一篇故事和一封郵件，跟考試一樣共用時間：${esc(nextS.id)}＋${esc(nextE.id)}</span></div><span class="spacer"></span>
      <button class="btn primary" data-act="combo" data-s="${nextS.id}" data-e="${nextE.id}">開始</button></div></div>
  </section>
  <section class="section"><div class="group-title"><h3>看圖寫故事</h3><span class="small muted">Story Narration・建議 15 分鐘</span></div><div class="grid">${stories}</div></section>
  <section class="section"><div class="group-title"><h3>回覆電子郵件</h3><span class="small muted">Email Response・建議 15 分鐘</span></div><div class="grid">${emails}</div></section>
  <section class="section"><div class="card"><b>歷屆真題</b><p class="small">College Board 公布了 2023–2026 年的試題，看圖寫故事和電子郵件的題型跟新制一樣，還有高、中、低分的學生範例。<a href="https://apcentral.collegeboard.org/courses/ap-chinese-language-and-culture/exam/past-exam-questions" target="_blank" rel="noopener">打開歷屆試題頁 ↗</a></p></div></section>
  ${footer()}`;
  H.combo = el => go({ kind: 'combo', s: el.dataset.s, e: el.dataset.e });
};

VIEW.speak = () => {
  const topics = D.presTopics.map(t => `<button class="set" data-act="run" data-kind="pres" data-id="${t.id}">
    <div class="meta"><span class="chip">${t.id}</span><span class="chip">單元${t.unit}</span></div>
    <div style="font-size:.98rem">${esc(t.zh)}</div><div class="meta">${setStatus(t.id)}</div></button>`).join('');
  main.innerHTML = `
  <section class="section">
    <div class="section-head"><h2>口說 Speaking</h2><span data-voice-status>${voiceStatus()}</span></div>
    <p class="lede">考試第 1、2 題都和她自己的專題有關：先做 3 分鐘專題報告（20%），接著回答 4 個錄音問題（15%）。專題題目一月才公布，所以現在先用練習題把「報告」和「臨場問答」的能力練起來。</p>
    ${noVoiceTip()}
  </section>
  <section class="section">
    <div class="card raised"><div class="row"><div class="stack" style="gap:2px"><b>專題問答練習 Project Q&amp;A</b><span class="small muted">隨機一位提問者、4 個問題；每題播兩次，然後 40 秒回答</span></div><span class="spacer"></span><button class="btn primary" data-act="run" data-kind="qa">開始一回合</button></div>
    <label class="row small" style="gap:8px"><input type="checkbox" id="showq" ${prefs.showQ ? 'checked' : ''}> 同時顯示題目文字（剛開始可以打開；考試時只有聲音）</label></div>
  </section>
  <section class="section"><div class="group-title"><h3>專題報告練習</h3><span class="small muted">準備 3 分鐘、報告 3 分鐘；至少說明三個因素，並連到文化觀點</span></div>
    <div class="grid">${topics}</div></section>
  <section class="section"><div class="tip"><b>提醒：</b>練習題不是 2027 年的專題題目。一月拿到資料包以後，專題內容必須是她自己研究、自己寫的；這個工具不提供專題內容的 AI 批改。</div></section>
  ${footer()}`;
  const cb = $('#showq'); if (cb) cb.onchange = () => { prefs.showQ = cb.checked; savePrefs(); };
};

VIEW.tools = () => {
  const r = D.rubrics;
  main.innerHTML = `
  <section class="section">
    <div class="section-head"><h2>工具箱</h2><span class="small muted">點一下詞語可以聽發音</span></div>
    <div class="card raised"><div class="row"><div class="stack" style="gap:2px"><b>選字練習</b><span class="small muted">2025 年閱卷報告指出：打字選錯同音字（整理→真理、開心→開行、因為→應為）讓很多考生失分。每回 12 題。</span></div><span class="spacer"></span><button class="btn primary" data-act="run" data-kind="homo">開始</button></div></div>
  </section>
  <section class="section"><h2>連接詞</h2><p class="lede small muted">四項評分標準都看「是否有效使用多樣的連接詞」。每次寫作至少用三組不同的。</p>
    <div class="grid2">${D.connectives.map(g => `<div class="card"><div class="row" style="gap:8px"><b>${esc(g.group)}</b><span class="small muted">${esc(g.en)}</span></div><div class="chips">${g.items.map(x => `<button class="say" data-act="say">${esc(x)}</button>`).join('')}</div></div>`).join('')}</div></section>
  <section class="section"><h2>書信、報告與問答用語</h2>
    <div class="grid2">${D.phrases.map(g => `<div class="card"><b>${esc(g.group)}</b><div class="chips">${g.items.map(x => `<button class="say" data-act="say">${esc(x)}</button>`).join('')}</div></div>`).join('')}</div></section>
  <section class="section"><h2>文化的 3P</h2><p class="lede">專題報告、問答都要看出她懂「文化產物、習俗」和背後「觀點」的關係。只描述東西而沒有說明「為什麼」，文化理解只能拿 1 分。</p>
    <div class="grid2">${D.threePs.map(p => `<div class="card"><b>${esc(p.k)}</b><span class="small">${esc(p.d)}</span><span class="small muted">${esc(p.zh)}</span></div>`).join('')}</div></section>
  <section class="section"><h2>常見文法錯誤</h2><p class="small muted">來自 2025 年 Chief Reader Report 引用的真實考生作答。</p>
    <div class="card">${D.pitfalls.map(p => `<div class="pit"><div><del style="color:var(--red)">${esc(p.wrong)}</del>　→　<b style="color:var(--ok)">${esc(p.right)}</b></div><div class="small muted">${esc(p.why)}</div></div>`).join('')}</div></section>
  <section class="section"><h2>官方評分標準</h2><p class="small muted">College Board 2026 年版。</p>
    ${['pres', 'qa', 'story', 'email'].map(k => `<details class="fold" data-keep="rub-${k}"><summary>${esc(r[k].name)}・${r[k].total} 分・佔 ${r[k].weight}</summary>${r[k].rows.map(x => `<div class="rubric-row"><div class="rn">${x.k}　${esc(x.name)} <span class="chip">0–${x.max}</span></div><div class="small"><b>滿分表現：</b>${esc(x.top)}</div><div class="small muted">${esc(x.note)}</div></div>`).join('')}</details>`).join('')}
  </section>
  <section class="section res"><h2>資源</h2>
    ${D.resources.map(g => `<div class="card"><b>${esc(g.group)}</b><ul>${g.items.map(([n, u, d]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(n)} ↗</a>${d ? `<span class="small muted">　${esc(d)}</span>` : ''}</li>`).join('')}</ul></div>`).join('')}
  </section>
  ${footer()}`;
};

VIEW.log = () => {
  const A = Store.attempts;
  const monday = (() => { const d = new Date(); const day = (d.getDay() + 6) % 7; d.setHours(0, 0, 0, 0); d.setDate(d.getDate() - day); return d.getTime(); })();
  const avg = kind => { const xs = A.filter(a => a.kind === kind && typeof a.score === 'number' && a.total); if (!xs.length) return '—'; return Math.round(xs.reduce((s, a) => s + a.score / a.total, 0) / xs.length * 100) + '%'; };
  const wAvg = () => { const xs = A.filter(a => (a.kind === 'story' || a.kind === 'email') && a.ai && typeof a.ai.total === 'number'); if (!xs.length) return '—'; return (xs.reduce((s, a) => s + a.ai.total, 0) / xs.length).toFixed(1) + '/8'; };
  const filters = [['all', '全部'], ['listening', '聽力'], ['reading', '閱讀'], ['write', '寫作'], ['speak', '口說'], ['homo', '選字']];
  const pass = a => S.logFilter === 'all' || a.kind === S.logFilter || (S.logFilter === 'write' && (a.kind === 'story' || a.kind === 'email')) || (S.logFilter === 'speak' && (a.kind === 'qa' || a.kind === 'pres'));
  const items = A.filter(pass).slice(0, 200);
  main.innerHTML = `
  <section class="section">
    <div class="section-head"><h2>紀錄</h2><span class="small muted">${storageNote()}</span></div>
    ${syncCard()}
    <div class="tiles">
      <div class="tile"><span class="v num">${A.filter(a => a.ts >= monday).length}</span><span class="k">本週完成的練習</span></div>
      <div class="tile"><span class="v num">${avg('listening')}</span><span class="k">聽力平均正確率</span></div>
      <div class="tile"><span class="v num">${avg('reading')}</span><span class="k">閱讀平均正確率</span></div>
      <div class="tile"><span class="v num">${wAvg()}</span><span class="k">寫作平均（AI 批改）</span></div>
    </div>
    <div class="row"><button class="btn" data-act="shareweek">分享本週紀錄給家長</button></div>
    <div class="seg" role="group" style="justify-self:start;flex-wrap:wrap">${filters.map(([k, n]) => `<button data-act="flt" data-k="${k}" aria-pressed="${S.logFilter === k}">${n}</button>`).join('')}</div>
  </section>
  <section class="section"><div class="card" style="gap:0">
    ${items.length ? items.map(logItem).join('') : '<p class="muted">還沒有紀錄。做完任何一個練習，結果會出現在這裡；寫作和口說會保留內容，家長可以在下面加評語。</p>'}
  </div></section>
  ${footer()}`;
  H.flt = el => { S.logFilter = el.dataset.k; refresh(); };
  H.shareweek = () => shareText('AP中文本週紀錄', weekSummaryText());
  H.savenote = el => { const ta = $(`#note-${el.dataset.id}`); Store.update(el.dataset.id, { note: ta.value.trim() }).then(() => toast('評語已儲存')); };
  H.del = el => {
    if (el.dataset.armed) { Store.remove(el.dataset.id); return; }
    el.dataset.armed = '1'; el.textContent = '確定刪除？再按一次'; setTimeout(() => { if (el.isConnected) { delete el.dataset.armed; el.textContent = '刪除'; } }, 4000);
  };
  H.ai = el => { const a = Store.attempts.find(x => x.id === el.dataset.id); if (a) runAI(a, $(`#ai-${a.id}`), el); };
};

function logItem(a) {
  const score = typeof a.score === 'number' && a.total ? `<span class="chip ${a.score / a.total >= .8 ? 'ok' : a.score / a.total >= .6 ? 'warn' : 'bad'} num">${a.score}/${a.total}</span>`
    : a.ai && typeof a.ai.total === 'number' ? `<span class="chip acc num">AI ${a.ai.total}/8</span>` : a.self && Object.keys(a.self).length ? `<span class="chip num">自評 ${sumSelf(a.self)}</span>` : '';
  const isWriting = a.kind === 'story' || a.kind === 'email';
  const body = [];
  if (a.prompt) body.push(`<div class="small muted">${esc(a.prompt)}</div>`);
  if (a.text) body.push(`<div class="essay">${esc(a.text)}</div><div class="small muted">${countChars(a.text)} 字${a.secs ? '・用時 ' + mmss(a.secs) : ''}</div>`);
  if (a.qs) body.push(`<ol class="small" style="margin:0;padding-left:1.4em">${a.qs.map(q => `<li>${esc(q)}</li>`).join('')}</ol>`);
  if (a.notes) body.push(`<div class="small"><b>${a.kind === 'auth' ? '新詞' : '報告筆記'}：</b>${esc(a.notes)}</div>`);
  if (a.self && Object.keys(a.self).length) body.push(`<div class="small"><b>自評：</b>${Object.entries(a.self).map(([k, v]) => k + ' ' + v).join('・')}（共 ${sumSelf(a.self)} 分）</div>`);
  if (isWriting) body.push(`<div id="ai-${a.id}">${a.ai ? aiHTML(a.ai, D.rubrics[a.kind]) : (aiState === 'off' ? shareRow(a.id) : `<button class="btn" data-act="ai" data-id="${a.id}">請 AI 批改</button>`)}</div>`);
  if (isWriting || a.kind === 'qa' || a.kind === 'pres') body.push(`<label class="small" for="note-${a.id}"><b>家長評語</b></label><textarea class="notes" id="note-${a.id}" style="min-height:4.5em">${esc(a.note || '')}</textarea><div class="row"><button class="btn" data-act="savenote" data-id="${a.id}">儲存評語</button></div>`);
  else if (a.note) body.push(`<div class="small"><b>家長評語：</b>${esc(a.note)}</div>`);
  body.push(`<div class="row"><span class="spacer"></span><button class="btn ghost danger" data-act="del" data-id="${a.id}">刪除</button></div>`);
  return `<details class="log-item" data-keep="log-${a.id}"><summary><span class="date">${fmtTs(a.ts)}</span><span class="chip">${kindLabels[a.kind] || a.kind}</span><span style="min-width:0">${esc(a.title || a.ref || '')}${a.note ? ' <span class="chip acc">有評語</span>' : ''}</span>${score}</summary><div class="log-body">${body.join('')}</div></details>`;
}

/* ======================================================================
   RUNNERS
   ====================================================================== */
const RUN = {};
const backBtn = label => `<button class="btn ghost back" data-act="back">← ${S.commute ? '回今日任務' : label}</button>`;

RUN.listening = ({ id }) => {
  const set = D.listening.find(x => x.id === id);
  const qs = prepQs(set.questions), answers = Array(qs.length).fill(null);
  let playsLeft = prefs.plays, tok = null, submitted = false;
  const lines = set.lines.map(([sp, text]) => ({ text, g: set.speakers[sp].g, name: set.speakers[sp].name }));
  main.innerHTML = `${backBtn('回聽力')}
  <div class="run-head"><div class="row"><span class="chip acc">${typeLabels[set.type][0]} ${typeLabels[set.type][1]}</span><span class="chip">單元${set.unit}・${unitNames[set.unit]}</span></div>
    <h2>${esc(set.id)}　聽力練習</h2><p class="en">${esc(set.intro)}</p></div>
  ${set.chart ? chartHTML(set.chart) : ''}
  <div class="panel-audio"><button class="btn primary" data-act="play" id="playbtn">▶ 播放（剩 ${playsLeft} 次）</button><button class="btn" data-act="stop" id="stopbtn" hidden>■ 停止</button><span class="eq" id="eq"><i></i><i></i><i></i><i></i></span><span class="small muted" id="pstat">先看題目，再按播放。</span></div>
  ${noVoiceTip()}
  <div>${qsHTML(qs)}</div>
  <div class="row"><button class="btn primary" data-act="submit">交卷</button><button class="btn ghost" data-act="peek" id="peekbtn" ${TTS.zh.length ? 'hidden' : ''}>沒有語音：改看文字稿</button><span class="small muted" id="submsg"></span></div>
  <div id="result" class="stack"></div>`;
  wireMC(qs, answers);
  const setPlaying = on => { $('#eq').classList.toggle('on', on); $('#stopbtn').hidden = !on; $('#playbtn').disabled = on || playsLeft <= 0; };
  const transcript = () => `<div class="transcript"><b>文字稿</b>${lines.map(l => `<div>${set.lines.length > 0 && Object.keys(set.speakers).length > 1 ? `<span class="sp">${esc(l.name)}</span>` : ''}${esc(l.text)}</div>`).join('')}</div>`;
  H.play = async () => {
    if (playsLeft <= 0) return;
    playsLeft--; tok = { stop: false }; setPlaying(true); keepAwake();
    $('#playbtn').textContent = `▶ 播放（剩 ${playsLeft} 次）`;
    await TTS.say(lines, { rate: prefs.rate, token: tok, onLine: i => { $('#pstat').textContent = `播放中 ${i + 1}/${lines.length}`; } });
    if (!main.contains($('#eq'))) return;
    setPlaying(false);
    $('#pstat').textContent = playsLeft > 0 ? '可以再聽一次。' : '播放次數用完了，作答後交卷。';
  };
  H.stop = () => { if (tok) tok.stop = true; TTS.stop(); setPlaying(false); };
  H.peek = () => { $('#result').insertAdjacentHTML('afterbegin', transcript()); $('#peekbtn').hidden = true; };
  H.submit = async () => {
    if (submitted) return;
    const blank = answers.filter(a => a === null).length;
    if (blank && !$('#submsg').dataset.warned) { $('#submsg').dataset.warned = '1'; $('#submsg').textContent = `還有 ${blank} 題沒作答，再按一次交卷。`; return; }
    submitted = true; H.stop();
    const score = gradeMC(qs, answers);
    $('#result').innerHTML = scoreHTML(score, qs.length, '綠色是正確答案，紅色是你選的。') + transcript() +
      `<div class="row"><button class="btn" data-act="again">再做一次</button><button class="btn primary" data-act="next">下一組 →</button></div>`;
    $('#result').scrollIntoView({ behavior: 'smooth', block: 'start' });
    Store.add({ kind: 'listening', ref: set.id, title: set.id + ' ' + set.title, score, total: qs.length });
  };
  H.again = () => go({ kind: 'listening', id });
  H.next = () => { const i = D.listening.findIndex(x => x.id === id); go({ kind: 'listening', id: D.listening[(i + 1) % D.listening.length].id }); };
  onCleanup(() => { if (tok) tok.stop = true; });
};

RUN.reading = ({ id }) => {
  const set = D.reading.find(x => x.id === id);
  const qs = prepQs(set.questions), answers = Array(qs.length).fill(null);
  let submitted = false; const t0 = Date.now();
  let body = '';
  if (set.meta) body = `<div class="mail"><div class="mail-h"><div><b>發件人：</b>${esc(set.meta.from)}</div><div><b>收件人：</b>${esc(set.meta.to)}</div><div><b>主題：</b>${esc(set.meta.subject)}</div></div><div class="mail-b passage">${set.paras.map((p, i) => `<p class="${i === 0 || i >= set.paras.length - 2 && p.length < 20 ? 'noindent' : ''}">${esc(p)}</p>`).join('')}</div></div>`;
  else if (set.ad) body = `<div class="ad">${set.ad.map(([k, t]) => `<div class="${k}">${esc(t)}</div>`).join('')}</div>`;
  else body = `<div class="passage card">${set.paras.map(p => `<p>${esc(p)}</p>`).join('')}</div>`;
  main.innerHTML = `${backBtn('回閱讀')}
  <div class="run-head"><div class="row"><span class="chip acc">${typeLabels[set.type][0]} ${typeLabels[set.type][1]}</span><span class="chip">單元${set.unit}・${unitNames[set.unit]}</span><span class="spacer"></span><span class="timer" id="clock" style="font-size:1.1rem">0:00</span></div>
    <h2>${esc(set.id)}　${esc(set.title)}</h2><p class="en">${esc(set.intro)}　建議 6–7 分鐘完成。</p></div>
  ${set.chart ? chartHTML(set.chart) : ''}
  ${body}
  <div>${qsHTML(qs)}</div>
  <div class="row"><button class="btn primary" data-act="submit">交卷</button><span class="small muted" id="submsg"></span></div>
  <div id="result" class="stack"></div>`;
  wireMC(qs, answers);
  const iv = setInterval(() => { const c = $('#clock'); if (c && !submitted) c.textContent = mmss((Date.now() - t0) / 1000); }, 1000);
  onCleanup(() => clearInterval(iv));
  H.submit = () => {
    if (submitted) return;
    const blank = answers.filter(a => a === null).length;
    if (blank && !$('#submsg').dataset.warned) { $('#submsg').dataset.warned = '1'; $('#submsg').textContent = `還有 ${blank} 題沒作答，再按一次交卷。`; return; }
    submitted = true;
    const secs = Math.round((Date.now() - t0) / 1000);
    const score = gradeMC(qs, answers);
    $('#result').innerHTML = scoreHTML(score, qs.length, `用時 ${mmss(secs)}`) + `<div class="row"><button class="btn" data-act="again">再做一次</button><button class="btn primary" data-act="next">下一組 →</button></div>`;
    $('#result').scrollIntoView({ behavior: 'smooth', block: 'start' });
    Store.add({ kind: 'reading', ref: set.id, title: set.id + ' ' + set.title, score, total: qs.length, secs });
  };
  H.again = () => go({ kind: 'reading', id });
  H.next = () => { const i = D.reading.findIndex(x => x.id === id); go({ kind: 'reading', id: D.reading[(i + 1) % D.reading.length].id }); };
};

/* ---- writing ---- */
function panelsHTML(st) {
  return `<div class="panels">${st.panels.map((p, i) => `<div class="pnl bg-${p.bg}" role="img" aria-label="圖${i + 1}：${esc(p.desc)}"><span class="no">${i + 1}</span>${p.items.map(([e, x, y, s, o]) => {
    const style = `left:${x}%;top:${y}%;--s:${s}`;
    if (e[0] === '#') return `<span class="sign" style="${style}">${esc(e.slice(1))}</span>`;
    if (e[0] === '@') return `<span class="bub" style="${style}">${esc(e.slice(1))}</span>`;
    let tf = '';
    if (o && o.includes('f')) tf += ' scaleX(-1)';
    const rot = o && o.match(/r(-?\d+)/); if (rot) tf += ` rotate(${rot[1]}deg)`;
    return `<span class="it" style="${style}${tf ? `;transform:translate(-50%,-50%)${tf}` : ''}" aria-hidden="true">${e}</span>`;
  }).join('')}</div>`).join('')}</div>`;
}
function emailHTML(e) {
  return `<div class="mail"><div class="mail-h"><div><b>發件人：</b>${esc(e.from)}</div><div><b>郵件主題：</b>${esc(e.subject)}</div></div><div class="mail-b">${e.body.map((p, i) => `<p${i === 1 ? ' style="text-indent:2em"' : ''}>${esc(p)}</p>`).join('')}</div></div>`;
}
function taskSpec(kind, id) {
  if (kind === 'story') { const s = D.stories.find(x => x.id === id); return { kind, id, item: s, title: s.id + ' ' + s.title, prompt: D.storyPrompt, promptZh: '請依照四張圖的順序，寫一個完整的故事：要有開頭、經過和結尾，四張圖都要寫到。' }; }
  const e = D.emails.find(x => x.id === id);
  return { kind, id, item: e, title: e.id + ' ' + e.subject, prompt: D.emailPrompt, promptZh: `回答信中的兩個問題，每個都要有理由或例子；要有稱呼和結尾。${e.register === 'formal' ? '這封信要用正式語氣（「您」、敬語）。' : '這是朋友的信，語氣可以輕鬆。'}` };
}
function taskBlock(t, n) {
  const draft = load('apzh.draft.' + t.id, '');
  return `<section class="section" data-task="${t.id}">
    <div class="run-head"><div class="row"><span class="chip acc">${t.kind === 'story' ? '問題 3 看圖寫故事 Story Narration' : '問題 4 回覆電子郵件 Email Response'}</span><span class="chip">單元${t.item.unit}・${unitNames[t.item.unit]}</span></div></div>
    ${t.kind === 'story' ? panelsHTML(t.item) : emailHTML(t.item)}
    <div class="prompt-box"><span class="en">${esc(t.prompt)}</span><span>${esc(t.promptZh)}</span></div>
    <label for="ta-${t.id}" class="small muted">在這裡打字${n > 1 ? `（第 ${t.kind === 'story' ? 3 : 4} 題）` : ''}：</label>
    <textarea class="compose" id="ta-${t.id}" data-tid="${t.id}" spellcheck="false" lang="zh-Hant">${esc(draft)}</textarea>
    <div class="row small muted"><span id="cc-${t.id}">${countChars(draft)} 字</span>${draft ? '<span class="chip warn">已載入上次沒交的草稿</span>' : ''}</div>
    <div id="after-${t.id}" class="stack"></div>
  </section>`;
}
function runWriting(tasks, minutes, backLabel) {
  let submitted = false, started = false;
  const tok = { stop: false };
  const t0 = { v: 0 };
  main.innerHTML = `${backBtn(backLabel)}
  ${tasks.map(t => taskBlock(t, tasks.length)).join('')}
  <div class="tip"><b>打字提醒：</b>用注音輸入時每個詞都要看一眼選字（整理≠真理、因為≠應為）。寫完留一分鐘檢查錯字。</div>
  <div class="card raised timebar" style="position:sticky;bottom:calc(env(safe-area-inset-bottom, 0px) + 8px);z-index:5">
    <div class="row"><span class="timer" id="clock">${mmss(minutes * 60)}</span><span class="small muted barmsg" id="clockmsg">${tasks.length > 1 ? '兩題共用時間，跟考試一樣。' : '考試時第 3、4 題共 30 分鐘，一題約 15 分鐘。'}開始打字就會自動計時。</span><span class="spacer"></span>
      <button class="btn" data-act="start" id="startbtn">開始計時</button><button class="btn primary" data-act="submit" id="subbtn">交卷</button></div>
  </div>`;
  const start = () => {
    if (started) return; started = true; t0.v = Date.now(); keepAwake();
    $('#startbtn').hidden = true;
    countdown(minutes * 60, left => { const c = $('#clock'); if (c) { c.textContent = mmss(left); c.classList.toggle('low', left <= 120); } headClock(left); }, tok).then(r => { if (r === 'done' && !submitted) { toast('時間到，已自動交卷'); H.submit(); } });
  };
  H.start = start;
  tasks.forEach(t => {
    const ta = $('#ta-' + t.id);
    let saveT;
    ta.addEventListener('input', () => {
      if (!started) start();
      $('#cc-' + t.id).textContent = countChars(ta.value) + ' 字';
      clearTimeout(saveT); saveT = setTimeout(() => save('apzh.draft.' + t.id, ta.value), 600);
    });
  });
  onCleanup(() => { tok.stop = true; clearTimeout(tok.timer); headClock(null); });
  const selfState = {};
  H.submit = async () => {
    if (submitted) return;
    const empty = tasks.filter(t => !$('#ta-' + t.id).value.trim());
    if (empty.length === tasks.length) { toast('還沒有寫任何內容'); return; }
    submitted = true; tok.stop = true; clearTimeout(tok.timer); headClock(null);
    const secs = started ? Math.round((Date.now() - t0.v) / 1000) : 0;
    $('#subbtn').disabled = true; $('#startbtn').hidden = true;
    $('#clockmsg').textContent = '已交卷' + (secs ? `・用時 ${mmss(secs)}` : '');
    for (const t of tasks) {
      const ta = $('#ta-' + t.id); ta.readOnly = true;
      const text = ta.value.trim();
      dropKey('apzh.draft.' + t.id);
      const rec = { kind: t.kind, ref: t.id, title: t.title, text, secs, prompt: t.kind === 'email' ? t.item.body.join(' ') : t.item.panels.map((p, i) => (i + 1) + '. ' + p.desc).join(' ') };
      const aid = text ? await Store.add(rec) : null;
      rec.id = aid; if (aid) lastRecs[aid] = rec;
      const rub = D.rubrics[t.kind];
      $('#after-' + t.id).innerHTML = text ? `
        <div id="ai-${aid}">${aiState === 'off' ? shareRow(aid) : `<button class="btn primary" data-act="ai" data-aid="${aid}">請 AI 依官方標準批改</button><span class="small muted">　會使用這個帳號的 Claude 用量；第一次會先詢問。</span>`}</div>
        <details class="fold" data-keep="self-${t.id}" ${aiState === 'off' ? 'open' : ''}><summary>自評／家長評分（${rub.total} 分）</summary>${rubricPicker(t.id, rub)}<div class="row"><span id="selfsum-${t.id}" class="small muted"></span><span class="spacer"></span><button class="btn" data-act="saveself" data-tid="${t.id}" data-aid="${aid}">儲存評分</button></div></details>`
        : '<p class="muted small">這一題沒有作答。</p>';
      t.rec = rec;
    }
    wireSelf(selfState, key => { const el = $('#selfsum-' + key); if (el) el.textContent = '目前 ' + sumSelf(selfState[key]) + ' 分'; });
  };
  H.saveself = el => { const s = selfState[el.dataset.tid]; if (!s) return toast('先點選分數'); Store.update(el.dataset.aid, { self: s }).then(() => toast('評分已儲存')); };
  H.ai = el => {
    const t = tasks.find(x => x.rec && x.rec.id === el.dataset.aid);
    if (t) runAI(Object.assign({ id: el.dataset.aid }, t.rec), $('#ai-' + el.dataset.aid), el);
  };
}
RUN.story = ({ id }) => runWriting([taskSpec('story', id)], 15, '回寫作');
RUN.email = ({ id }) => runWriting([taskSpec('email', id)], 15, '回寫作');
RUN.combo = ({ s, e }) => runWriting([taskSpec('story', s), taskSpec('email', e)], 30, '回寫作');

/* ---- AI feedback (claude.ai viewers only) ---- */
function aiHTML(r, rub) {
  const rows = rub.rows.map(x => `<span class="chip ${r.scores && r.scores[x.k] === x.max ? 'ok' : ''}">${x.k} ${esc(x.name.split(' ')[0])} ${r.scores ? r.scores[x.k] : '?'}/${x.max}</span>`).join('');
  return `<div class="redpen"><div class="row" style="align-items:flex-start;gap:16px"><div class="grade num">${r.total}<span style="font-size:.9rem">/${rub.total}</span></div>
    <div class="stack" style="flex:1;min-width:0"><h3>老師批改</h3><p>${esc(r.summary_zh)}</p>${r.summary_en ? `<p class="en">${esc(r.summary_en)}</p>` : ''}<div class="chips">${rows}</div></div></div>
    ${r.strengths && r.strengths.length ? `<div><b>做得好的地方</b><ul style="margin:4px 0 0;padding-left:1.2em">${r.strengths.map(s => `<li>${esc(s)}</li>`).join('')}</ul></div>` : ''}
    ${r.fixes && r.fixes.length ? `<div><b>要改的地方</b>${r.fixes.map(f => `<div class="fix"><div><del>${esc(f.original)}</del>　→　<ins>${esc(f.corrected)}</ins></div><div class="small muted">${esc(f.why)}</div></div>`).join('')}</div>` : ''}
    ${r.next_step ? `<div><b>下一次最該練的：</b>${esc(r.next_step)}</div>` : ''}
    ${r.upgrade && r.upgrade.length ? `<div><b>可以試試的句型</b><div class="chips" style="margin-top:4px">${r.upgrade.map(u => `<span class="say">${esc(u)}</span>`).join('')}</div></div>` : ''}
    <p class="small muted">AI 評分僅供參考，和正式閱卷可能有落差；家長可以在「紀錄」加評語。</p></div>`;
}
function aiPrompt(a, readable) {
  const rub = D.rubrics[a.kind];
  const task = a.kind === 'story'
    ? `看圖寫故事（Story Narration）。題目：${D.storyPrompt}\n四張圖的內容：${a.prompt}`
    : `回覆電子郵件（Email Response）。題目：${D.emailPrompt}\n來信：${a.prompt}`;
  const head = `你是 AP Chinese Language and Culture 考試的閱卷老師，也是一位溫和、具體的中文老師。學生是在美國長大、會說中文的華裔孩子（傳承語學習者），正在自學準備 2027 年五月的 AP 中文考試，使用繁體字和注音輸入法。

請依照 College Board 2026 年公布的官方評分標準，為下面這份作答打分並給回饋。
任務：${task}

評分標準（總分 ${rub.total} 分）：
${rub.rows.map(r => `${r.k}. ${r.name}（0–${r.max} 分）滿分表現：${r.top} 注意：${r.note}`).join('\n')}

學生作答（${countChars(a.text)} 字${a.secs ? '，用時 ' + mmss(a.secs) : ''}）：
"""
${a.text}
"""
`;
  if (readable) return head + `
請用繁體中文回覆，分成這幾段：
一、各項分數和總分（滿分 ${rub.total} 分）
二、兩三句總評
三、做得好的地方（最多 3 點）
四、要改的地方：原文 → 改正 → 原因（最多 8 項，只列真正的錯誤，優先找選錯的同音字、語序、量詞、了／的／得、語氣不合的地方）
五、下一次最該練的一件事
六、可以加進去的連接詞或句型，各附一個例句（最多 3 個）
最後用一兩句英文給家長總結。分數要誠實，照標準給，不要因為是孩子就放寬。`;
  return head + `
只回覆一個 JSON 物件，格式如下：
{"scores":{${rub.rows.map(r => `"${r.k}":0`).join(',')}},"total":0,"summary_zh":"兩三句繁體中文總評","summary_en":"One or two sentences in English for the parent.","strengths":["做得好的地方，最多 3 點"],"fixes":[{"original":"學生寫的詞或句子","corrected":"改正後","why":"簡短原因"}],"next_step":"下一次最該練的一件事","upgrade":["可以加進去的連接詞或句型，附一個例句，最多 3 個"]}

規則：分數要誠實，照標準給，不要因為是孩子就放寬。fixes 最多 8 項，只列真正的錯誤，優先找選錯的同音字、語序、量詞、了／的／得、語氣不合（register）的地方。除了 summary_en 以外全部用繁體中文。`;
}
async function runAI(a, box, btn) {
  if (!box) return;
  const sample = await samplePromise;
  if (!sample) { aiState = 'off'; box.innerHTML = '<p class="small muted">AI 批改只能在 claude.ai 上開啟這個頁面時使用。</p>'; return; }
  if (btn) btn.disabled = true;
  box.innerHTML = '<p class="muted">批改中……通常需要 10–60 秒。</p>';
  try {
    const r = await sample.json(aiPrompt(a), { modelTier: 'default' });
    const rub = D.rubrics[a.kind];
    const clean = { scores: {}, total: 0, summary_zh: String(r.summary_zh || ''), summary_en: String(r.summary_en || ''),
      strengths: (r.strengths || []).slice(0, 3).map(String), fixes: (r.fixes || []).slice(0, 8).map(f => ({ original: String(f.original || ''), corrected: String(f.corrected || ''), why: String(f.why || '') })),
      next_step: String(r.next_step || ''), upgrade: (r.upgrade || []).slice(0, 3).map(String) };
    rub.rows.forEach(x => { const v = Math.max(0, Math.min(x.max, Math.round(Number(r.scores && r.scores[x.k]) || 0))); clean.scores[x.k] = v; clean.total += v; });
    box.innerHTML = aiHTML(clean, rub);
    if (a.id) Store.update(a.id, { ai: clean });
  } catch (e) {
    const code = e && e.code;
    if (['not_granted', 'sampling_disabled', 'not_declared', 'capability_disabled', 'capability_removed'].includes(code)) { aiState = 'off'; box.innerHTML = '<p class="small muted">這個檢視沒有開放 AI 批改。可以用自評或家長評分。</p>'; return; }
    const msg = code === 'rate_limited' ? '使用太頻繁了，請過一會兒再試。' : code === 'invalid_json' ? '回覆格式有誤，請再按一次。' : code === 'cancelled' ? '已取消。' : '批改暫時失敗，請再試一次。';
    box.innerHTML = `<p class="small" style="color:var(--red)">${msg}</p><button class="btn" data-act="ai" ${a.id ? `data-aid="${a.id}" data-id="${a.id}"` : ''}>再試一次</button>`;
  }
}

/* ---- speaking ---- */
function ringSVG(id) {
  const C = 2 * Math.PI * 70;
  return `<svg class="ring" id="${id}" viewBox="0 0 168 168" role="img" aria-label="倒數計時"><circle class="trk" cx="84" cy="84" r="70"></circle><circle class="val" cx="84" cy="84" r="70" stroke-dasharray="${C}" stroke-dashoffset="0" transform="rotate(-90 84 84)"></circle><text x="84" y="92" text-anchor="middle" class="t">--</text><text x="84" y="116" text-anchor="middle" class="unit">秒</text></svg>`;
}
function setRing(id, left, total, asClock) {
  const r = $('#' + id); if (!r) return;
  const C = 2 * Math.PI * 70;
  r.querySelector('.val').setAttribute('stroke-dashoffset', String(C * (1 - left / total)));
  r.querySelector('.t').textContent = asClock ? mmss(left) : String(Math.ceil(left));
  r.querySelector('.unit').textContent = asClock ? '' : '秒';
  r.classList.toggle('low', left <= (asClock ? 30 : 10));
}
function pickQA(n) {
  const bank = shuffle(D.qaBank);
  const out = [], fns = new Set();
  const cultural = bank.find(q => q.fn === 'compare' || q.fn === 'reflect');
  out.push(cultural); fns.add(cultural.fn);
  for (const q of bank) { if (out.length >= n) break; if (!out.includes(q) && !fns.has(q.fn)) { out.push(q); fns.add(q.fn); } }
  return shuffle(out);
}

RUN.qa = () => {
  const persona = pick(D.personas);
  const qs = pickQA(4);
  const tok = { stop: false };
  const recs = [];
  let running = false;
  main.innerHTML = `${backBtn('回口說')}
  <div class="run-head"><span class="chip acc">問題 2 專題問答 Project Q&amp;A</span><h2>問答練習</h2>
    <p class="lede">先聽提問者自我介紹，接著 4 個問題，每題播兩次，然後有 40 秒回答。可以邊聽邊記關鍵字。至少有一題要做文化比較或說明文化觀點。</p></div>
  <div class="stage" id="stage"><div class="phase-label" id="plabel">提問者：${esc(persona.name)}</div><p class="muted" id="psub">戴上耳機，準備好就按開始。</p>
    <div id="ringbox" hidden>${ringSVG('ring')}</div><div class="qtext" id="qtext" hidden></div>
    <div class="row" style="justify-content:center"><button class="btn primary" data-act="go" id="gobtn">開始</button><button class="btn" data-act="skip" id="skipbtn" hidden>提早結束這題</button></div>
    <div id="recstate" class="small muted"></div></div>
  ${noVoiceTip()}
  <div id="after" class="stack"></div>`;
  onCleanup(() => { tok.stop = true; clearTimeout(tok.timer); Rec.stop(); Rec.release(); });
  H.skip = () => { if (tok.skip) tok.skip(); };
  H.go = async () => {
    if (running) return; running = true; TTS.unlock();
    $('#gobtn').hidden = true; keepAwake();
    const canRec = await probeMic();
    if (!canRec) $('#recstate').innerHTML = recTip;
    $('#plabel').textContent = '提問者自我介紹'; $('#psub').textContent = persona.name;
    await TTS.say([{ text: persona.intro, g: 'f' }], { token: tok, rate: prefs.rate });
    for (let i = 0; i < qs.length; i++) {
      if (tok.stop) return;
      $('#plabel').textContent = `第 ${i + 1} 題／4`; $('#psub').textContent = '聽題目（播兩次）';
      $('#ringbox').hidden = true; $('#skipbtn').hidden = true;
      const qt = $('#qtext'); qt.hidden = !prefs.showQ; qt.textContent = qs[i].q;
      await TTS.say([{ text: qs[i].q, g: 'f' }], { token: tok, rate: prefs.rate });
      await sleep(1200); if (tok.stop) return;
      await TTS.say([{ text: qs[i].q, g: 'f' }], { token: tok, rate: prefs.rate });
      if (tok.stop) return;
      $('#psub').innerHTML = canRec ? '<span class="rec-dot"></span>錄音中，請回答' : '請回答';
      $('#ringbox').hidden = false; $('#skipbtn').hidden = false;
      if (canRec) await Rec.start();
      await countdown(40, left => setRing('ring', left, 40), tok);
      if (canRec) recs[i] = await Rec.stop();
    }
    if (tok.stop) return;
    Rec.release();
    $('#plabel').textContent = '完成！'; $('#psub').textContent = '聽聽自己的回答，用評分標準自評。';
    $('#ringbox').hidden = true; $('#skipbtn').hidden = true; $('#qtext').hidden = true;
    const aid = await Store.add({ kind: 'qa', ref: 'QA', title: '問答・' + persona.name, qs: qs.map(q => q.q) });
    const selfState = {};
    $('#after').innerHTML = `<div class="card"><b>這一回的問題</b><ol style="margin:0;padding-left:1.4em">${qs.map((q, i) => `<li><span class="chip">${D.qaFnLabels[q.fn]}</span> ${esc(q.q)}${recs[i] ? `<br><audio controls src="${recs[i]}" style="width:100%;max-width:420px"></audio>` : ''}</li>`).join('')}</ol></div>
      <div class="card"><b>自評（${D.rubrics.qa.total} 分）</b>${rubricPicker('qa', D.rubrics.qa)}<div class="row"><span id="selfsum-qa" class="small muted"></span><span class="spacer"></span><button class="btn" data-act="saveself">儲存自評</button><button class="btn primary" data-act="again">再來一回</button></div></div>`;
    wireSelf(selfState, () => { $('#selfsum-qa').textContent = '目前 ' + sumSelf(selfState.qa) + ' 分'; });
    H.saveself = () => { if (!selfState.qa) return toast('先點選分數'); Store.update(aid, { self: selfState.qa }).then(() => toast('自評已儲存')); };
    H.again = () => go({ kind: 'qa' });
  };
};

RUN.pres = ({ id }) => {
  const t = D.presTopics.find(x => x.id === id);
  const tok = { stop: false };
  let phase = 'ready', recUrl = null, canRec = false;
  main.innerHTML = `${backBtn('回口說')}
  <div class="run-head"><div class="row"><span class="chip acc">問題 1 專題報告 Project Presentation</span><span class="chip">練習題 ${t.id}・單元${t.unit}</span></div>
    <h2>${esc(t.zh)}</h2><p class="en">${esc(t.en)}</p></div>
  <div class="tip"><b>考試時：</b>準備 3 分鐘、報告 3 分鐘，可以看自己的 PPR（只有關鍵詞的大綱）。滿分要做到：開場和結論、至少三個因素並各有例子、說明文化產物或習俗和觀點的關係、說得自然不像背稿。</div>
  <div class="stage"><div class="phase-label" id="plabel">準備好就開始</div><p class="muted" id="psub">先有 3 分鐘準備，寫下關鍵詞。</p>
    <div id="ringbox" hidden>${ringSVG('ring')}</div>
    <div class="row" style="justify-content:center"><button class="btn primary" data-act="go" id="gobtn">開始準備</button><button class="btn" data-act="skip" id="skipbtn" hidden>提早開始報告</button></div>
    <div id="recstate" class="small muted"></div></div>
  <label for="pnotes" class="small muted">關鍵詞筆記（像 PPR 一樣，只寫詞，不寫整句）：</label>
  <textarea class="notes" id="pnotes" placeholder="開場：&#10;因素一：&#10;因素二：&#10;因素三：&#10;文化觀點：&#10;結論："></textarea>
  <div id="after" class="stack"></div>`;
  onCleanup(() => { tok.stop = true; clearTimeout(tok.timer); Rec.stop(); Rec.release(); });
  H.skip = () => { if (tok.skip) tok.skip(); };
  H.go = async () => {
    if (phase !== 'ready') return; phase = 'prep'; TTS.unlock();
    $('#gobtn').hidden = true; keepAwake();
    canRec = await probeMic();
    if (!canRec) $('#recstate').innerHTML = recTip;
    $('#plabel').textContent = '準備時間'; $('#psub').textContent = '寫關鍵詞、想好三個因素的例子。';
    $('#ringbox').hidden = false; $('#skipbtn').hidden = false; $('#skipbtn').textContent = '提早開始報告';
    await countdown(180, left => setRing('ring', left, 180, true), tok);
    if (tok.stop) return;
    phase = 'speak';
    $('#plabel').textContent = '開始報告'; $('#psub').innerHTML = canRec ? '<span class="rec-dot"></span>錄音中' : '請開始說（記得同時錄音）';
    $('#skipbtn').textContent = '結束報告';
    if (canRec) await Rec.start();
    await countdown(180, left => setRing('ring', left, 180, true), tok);
    if (tok.stop) return;
    if (canRec) recUrl = await Rec.stop();
    Rec.release();
    phase = 'done';
    $('#plabel').textContent = '完成！'; $('#psub').textContent = '聽一次錄音，用評分標準自評。';
    $('#ringbox').hidden = true; $('#skipbtn').hidden = true;
    const notes = $('#pnotes').value.trim();
    const aid = await Store.add({ kind: 'pres', ref: t.id, title: t.id + ' 報告練習', notes });
    const selfState = {};
    $('#after').innerHTML = `${recUrl ? `<div class="card"><b>你的報告錄音</b><audio controls src="${recUrl}" style="width:100%"></audio></div>` : ''}
      <div class="card"><b>自評（${D.rubrics.pres.total} 分）</b>${rubricPicker('pres', D.rubrics.pres)}<div class="row"><span id="selfsum-pres" class="small muted"></span><span class="spacer"></span><button class="btn" data-act="saveself">儲存自評</button><button class="btn primary" data-act="again">再練一次</button></div></div>`;
    wireSelf(selfState, () => { $('#selfsum-pres').textContent = '目前 ' + sumSelf(selfState.pres) + ' 分'; });
    H.saveself = () => { if (!selfState.pres) return toast('先點選分數'); Store.update(aid, { self: selfState.pres }).then(() => toast('自評已儲存')); };
    H.again = () => go({ kind: 'pres', id });
  };
};

/* ---- homophone drill ---- */
RUN.homo = () => {
  const items = shuffle(D.homophones).slice(0, 12).map(([s, o, a]) => { const idx = shuffle([0, 1, 2]); return { s, o: idx.map(i => o[i]), a: idx.indexOf(a), right: o[a] }; });
  let i = 0, score = 0; const missed = [];
  const back = S.tab === 'plan' ? '回計畫' : '回工具箱';
  const draw = () => {
    if (i >= items.length) {
      main.innerHTML = `${backBtn(back)}<h2>選字練習</h2>${scoreHTML(score, items.length, '')}
        ${missed.length ? `<div class="card"><b>要記住的字</b>${missed.map(m => `<div class="pit"><div>${esc(m.s.replace('＿＿', '【' + m.right + '】'))}</div><div class="small" style="color:var(--red)">你選了：${esc(m.pickedText)}</div></div>`).join('')}</div>` : '<p>全對！</p>'}
        <div class="row"><button class="btn primary" data-act="again">再來一回</button></div>`;
      Store.add({ kind: 'homo', ref: 'HOMO', title: '選字練習', score, total: items.length });
      H.again = () => go({ kind: 'homo' });
      return;
    }
    const it = items[i];
    main.innerHTML = `${backBtn(back)}
      <div class="run-head"><div class="row"><span class="chip acc">選字練習</span><span class="num muted">${i + 1}/${items.length}</span><span class="chip ok">答對 ${score}</span></div>
      <p class="muted small">用注音打字時最容易選錯同音字。選出正確的字。</p></div>
      <div class="card raised" style="font-size:1.4rem;line-height:1.8">${esc(it.s).replace('＿＿', '<span style="border-bottom:3px solid var(--accent);padding:0 1.5em"></span>')}</div>
      <div class="opts" style="grid-template-columns:repeat(3,minmax(0,1fr))">${it.o.map((o, j) => `<button class="opt" style="grid-template-columns:1fr;text-align:center;font-size:1.3rem" data-act="hp" data-j="${j}">${esc(o)}</button>`).join('')}</div>
      <div class="row" id="hnext"></div>`;
  };
  H.hp = el => {
    if (el.disabled) return;
    const it = items[i], j = +el.dataset.j;
    $$('[data-act="hp"]').forEach(b => { b.disabled = true; const k = +b.dataset.j; if (k === it.a) b.classList.add('right'); else if (k === j) b.classList.add('wrong'); });
    if (j === it.a) score++; else missed.push(Object.assign({ pickedText: it.o[j] }, it));
    $('#hnext').innerHTML = `<button class="btn primary" data-act="hnext">${i + 1 < items.length ? '下一題 →' : '看結果'}</button>`;
  };
  H.hnext = () => { i++; draw(); };
  draw();
};

/* ---- authentic input: read or watch something real, then say what it was about ---- */
RUN.auth = ({ id }) => {
  const src = D.authSources.find(s => 'AUTH-' + s.id === id) || D.authSources[0];
  main.innerHTML = `${backBtn('回計畫')}
  <div class="run-head"><span class="chip acc">真實語料</span><h2>${esc(src.name)}：${esc(src.task)}</h2><p class="lede">${esc(src.how)}</p></div>
  <a class="btn primary" style="justify-self:start" href="${esc(src.url)}" target="_blank" rel="noopener">打開${esc(src.name)} ↗</a>
  <label for="authsum" class="small muted">回來以後，用一兩句中文寫下大意：</label>
  <textarea class="notes" id="authsum" lang="zh-Hant" style="min-height:6em"></textarea>
  <label for="authwords" class="small muted">學到的新詞（可以不寫）：</label>
  <input class="field" id="authwords" lang="zh-Hant">
  <div class="row"><button class="btn primary" data-act="authdone" id="authbtn">完成</button><span class="small muted" id="authmsg">需要網路。沒有訊號的話先做別的任務。</span></div>`;
  H.authdone = () => {
    const text = $('#authsum').value.trim();
    if (!text) { $('#authmsg').textContent = '先寫一句大意。'; return; }
    $('#authbtn').disabled = true; $('#authsum').readOnly = true; $('#authmsg').textContent = '已記錄。';
    Store.add({ kind: 'auth', ref: id, title: src.name + '・' + src.task, text, notes: $('#authwords').value.trim() });
  };
};

/* ---------- boot ---------- */
function boot() {
  const h = (location.hash || '').slice(1);
  if (TABS.some(([k]) => k === h)) S.tab = h;
  $('#tabs').addEventListener('click', e => { const b = e.target.closest('[data-tabbtn]'); if (b) setTab(b.dataset.tabbtn); });
  renderCount();
  const hdr = () => document.documentElement.style.setProperty('--hdr', $('.top').offsetHeight + 'px');
  hdr(); window.addEventListener('resize', hdr);
  TTS.init();
  Store.on(refresh);
  Sync.first = Sync.on && navigator.onLine !== false;
  Store.init();
  Sync.boot();
  samplePromise.then(() => { if (!S.run && (S.tab === 'write' || S.tab === 'log')) refresh(); });
  render(false);
}
boot();
})();
