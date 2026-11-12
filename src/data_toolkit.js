// Toolkit: cohesive devices, set phrases, input-method homophone drill, grammar pitfalls,
// rubric summaries (from the 2026 CED) and resources.
window.APZH = window.APZH || {};

// Every rubric rewards "a variety of cohesive devices" — these are the ones to own.
APZH.connectives = [
  { group: '開頭', en: 'Opening', items: ['有一天', '某個星期六下午', '一大早', '從前', '今天我想跟大家介紹'] },
  { group: '時間順序', en: 'Sequence', items: ['首先', '接著', '然後', '後來', '過了一會兒', '不久', '就在這時候', '同時', '最後', '終於'] },
  { group: '因果', en: 'Cause & effect', items: ['因為……所以……', '由於……', '因此', '於是', '難怪', '既然……就……', '結果'] },
  { group: '轉折', en: 'Contrast & surprise', items: ['雖然……但是……', '可是', '不過', '然而', '沒想到', '本來……後來……', '竟然', '原來'] },
  { group: '遞進', en: 'Adding on', items: ['不但……而且……', '不僅……還……', '甚至', '更重要的是', '除了……以外，還……'] },
  { group: '舉例', en: 'Examples', items: ['比如說', '例如', '像是', '拿……來說', '舉個例子'] },
  { group: '條件', en: 'Conditions', items: ['只要……就……', '如果……就……', '無論……都……', '除非……否則……', '一……就……'] },
  { group: '比較', en: 'Comparing', items: ['跟……比起來', '和……一樣', '和……不同的是', '相較之下', '比……更……', '反而'] },
  { group: '總結', en: 'Concluding', items: ['總而言之', '總之', '整體來說', '由此可見', '從這些例子可以看出', '所以我認為'] }
];

APZH.phrases = [
  { group: '電子郵件：開頭（朋友）', items: ['好久不見！', '收到你的信真高興！', '謝謝你的來信。', '看到你的信，我馬上就想回信給你。'] },
  { group: '電子郵件：開頭（長輩、老師、機構）', items: ['張老師您好：', '李館員您好：', '謝謝您的來信，以下是我的一些想法。', '很高興能提供我的意見。'] },
  { group: '電子郵件：回答兩個問題', items: ['關於你的第一個問題，……', '至於你問的……，我覺得……', '另外，你問我……', '我的建議是……，因為……'] },
  { group: '電子郵件：結尾', items: ['希望我的建議對你有幫助！', '期待你的回信！', '有空再聊！', '祝　學業進步', '祝　一切順利', '敬祝　教安（寫給老師）', '此致　敬禮'] },
  { group: '專題報告：架構', items: ['今天我要報告的主題是……', '我的報告分成三個部分。', '第一個因素是……', '第二，……', '從這個例子可以看出……', '這反映了當地人重視……的觀念。', '總結來說，……', '謝謝大家。'] },
  { group: '問答：爭取思考時間', items: ['這是一個很好的問題。', '讓我想一想。', '我覺得最重要的是……', '換句話說，……', '舉個例子來說，……', '跟我的家鄉比起來，……'] },
  { group: '文化觀點用語（3P）', items: ['這個習俗反映了……的價值觀', '對當地人來說，……代表……', '這是一種……的象徵', '從這個傳統可以看出人們重視……', '這種做法跟……的觀念有關'] }
];

APZH.threePs = [
  { k: '文化產物 Products', d: 'Tangible and intangible artifacts: clothing, tools, food, monuments, artwork, stories (and songs, instruments).', zh: '例：月餅、旗袍、布袋戲偶、一首民歌' },
  { k: '文化習俗 Practices', d: 'Patterns of social behavior: how people greet each other, socialize, celebrate holidays.', zh: '例：中秋節全家賞月、廟會時演戲、過年拿紅包' },
  { k: '文化觀點 Perspectives', d: 'The values, beliefs and attitudes underneath the products and practices.', zh: '例：重視家庭團圓、感謝神明、尊敬長輩' }
];

// Input-method homophone drill. The 2025 Chief Reader Report lists wrong-character
// picks (整理→真理, 開心→開行, 舊衣服→久衣服, 因為→應為 …) as a real score-killer.
APZH.homophones = [
  ['房間太亂了，我得好好＿＿一下。', ['整理', '真理', '正理'], 0],
  ['考試考了一百分，她非常＿＿。', ['開新', '開心', '開行'], 1],
  ['這些＿＿衣服太小了，可以拿去捐。', ['久', '救', '舊'], 2],
  ['媽媽說房間要保持＿＿。', ['乾淨', '趕緊', '感謝'], 0],
  ['我們下個月要＿＿家到臺中。', ['班', '搬', '般'], 1],
  ['他上課很＿＿，從來不遲到。', ['認證', '人真', '認真'], 2],
  ['隔壁的＿＿常常送水果給我們。', ['鄰居', '另居', '零居'], 0],
  ['我喜歡一邊寫功課一邊聽＿＿。', ['影月', '音樂', '因樂'], 1],
  ['媽媽買了一副新的＿＿給我。', ['二機', '而機', '耳機'], 2],
  ['我＿＿這部電影很好看。', ['覺得', '決得', '絕得'], 0],
  ['明天要考試，你＿＿好了嗎？', ['準被', '準備', '尊備'], 1],
  ['學中文需要每天＿＿。', ['連習', '戀習', '練習'], 2],
  ['我們應該保護地球的＿＿。', ['環境', '還境', '還敬'], 0],
  ['老師給了我一個很好的＿＿。', ['見意', '建議', '健議'], 1],
  ['我很＿＿這次的旅行。', ['其待', '奇待', '期待'], 2],
  ['這是一個難得的＿＿。', ['機會', '幾會', '基會'], 0],
  ['生日的時候，朋友送我一份＿＿。', ['理物', '禮物', '立物'], 1],
  ['爸爸每天工作到很晚，非常＿＿。', ['新苦', '心苦', '辛苦'], 2],
  ['圖書館裡很＿＿，大家都在看書。', ['安靜', '安經', '安境'], 0],
  ['剛到美國時，她花了很久才＿＿新環境。', ['是應', '適應', '試應'], 1],
  ['請你自我＿＿一下。', ['借紹', '戒紹', '介紹'], 2],
  ['這次的活動由小明＿＿。', ['負責', '付責', '附責'], 0],
  ['我們＿＿明天去爬山。', ['絕定', '決定', '覺定'], 1],
  ['校外教學我們去＿＿了科學博物館。', ['參關', '餐觀', '參觀'], 2],
  ['吃不完的食物丟掉太＿＿了。', ['浪費', '浪廢', '浪飛'], 0],
  ['住在捷運站旁邊，交通很＿＿。', ['方變', '方便', '方遍'], 1],
  ['考完試以後，終於可以好好＿＿一下。', ['放送', '方鬆', '放鬆'], 2],
  ['他＿＿到家了。', ['已經', '以經', '已近'], 0],
  ['我＿＿生病，所以沒去上學。', ['應為', '因為', '音為'], 1],
  ['下次＿＿來玩吧！', ['在', '載', '再'], 2],
  ['他正＿＿吃飯。', ['在', '再', '載'], 0],
  ['她跑＿＿很快。', ['的', '得', '地'], 1],
  ['小狗開心＿＿搖尾巴。', ['的', '得', '地'], 2],
  ['這是我＿＿書。', ['的', '得', '地'], 0],
  ['她把舊玩具拿去＿＿給別人，賺了一些零用錢。', ['買', '賣', '邁'], 1],
  ['太陽下山了，天色漸漸＿＿了。', ['按', '案', '暗'], 2]
];

// Grammar pitfalls the 2025 Chief Reader Report quoted from real responses.
APZH.pitfalls = [
  { wrong: '畢業了高中', right: '高中畢業了', why: 'Word order: the object comes before 畢業.' },
  { wrong: '做功課在電腦上', right: '在電腦上做功課', why: 'Place phrases (在……) go before the verb, not after.' },
  { wrong: '我就把那些衣服賣去', right: '我就把那些衣服賣了', why: 'A 把 sentence needs a result or completion after the verb.' },
  { wrong: '過三個小時', right: '過了三個小時', why: 'Use 了 for a time span that has already passed.' },
  { wrong: '她說我棒了', right: '她說我很棒', why: 'Adjectives take 很, not 了, for a plain description.' },
  { wrong: '我的衣服太小，穿不起了', right: '我的衣服太小，穿不下了', why: 'Resultative complement: 穿不下 = doesn’t fit; 穿不起 = can’t afford.' },
  { wrong: '我買不到我全部的舊東西', right: '我賣不掉我全部的舊東西', why: '賣不掉 = couldn’t sell off. Watch 買/賣.' },
  { wrong: '媽媽問她收衣櫃', right: '媽媽叫她整理衣櫃', why: 'English “ask someone to” is 請／叫／讓, not 問.' },
  { wrong: '媽媽買小麗新的耳機', right: '媽媽給小麗買了新的耳機', why: 'English word order. Use 給＋person＋verb.' },
  { wrong: '她們要乾淨她們的櫃子', right: '她們要把櫃子整理乾淨', why: '乾淨 is an adjective, not a verb.' }
];

// Rubric summaries — CED effective Fall 2026. Points per row are official.
APZH.rubrics = {
  story: { name: '看圖寫故事 Story Narration', total: 8, weight: '7.5%', rows: [
    { k: 'A', name: '故事發展 Narrative Development', max: 3, top: 'Complete story consistent with the pictures; integrates all four pictures; relevant details and/or dialogue.', note: 'Only describing pictures or listing words = 1 point. A story that would be clear even without the pictures = 3.' },
    { k: 'B', name: '組織 Organization', max: 2, top: 'Logical progression with a clear beginning, middle and end; effective variety of cohesive devices.', note: 'Using the same one or two connectives over and over = 1 point.' },
    { k: 'C', name: '語言掌控 Language Control', max: 3, top: 'Wide variety of vocabulary (even idioms), variety of grammatical structures, no errors that impede comprehension.', note: 'Wrong characters from typing count as written-language-convention errors.' }
  ]},
  email: { name: '回覆電子郵件 Email Response', total: 8, weight: '7.5%', rows: [
    { k: 'A', name: '訊息發展 Message Development', max: 3, top: 'Answers BOTH requests with relevant details and/or examples.', note: 'Answering only one request caps this row at 2.' },
    { k: 'B', name: '組織 Organization', max: 2, top: 'Logical order, a greeting AND a closing, varied cohesive devices.', note: 'Missing greeting or closing = 1 point.' },
    { k: 'C', name: '語言掌控 Language Control', max: 3, top: 'Wide vocabulary, varied structures, consistently appropriate register, no errors that impede comprehension.', note: 'Register matters: 您 and a formal close for a principal or librarian; casual tone for a friend.' }
  ]},
  pres: { name: '專題報告 Project Presentation', total: 11, weight: '20%', rows: [
    { k: 'A', name: '任務執行 Task Execution', max: 2, top: 'Explains three or more factors with relevant details drawn from research.', note: 'Listing factors without explaining them, or relying on personal anecdotes, = 1 point.' },
    { k: 'B', name: '文化理解 Cultural Understanding', max: 2, top: 'Specific examples showing how products or practices relate to perspectives (values, beliefs).', note: 'Describing products or practices without the “why” = 1 point.' },
    { k: 'C', name: '組織 Organization', max: 2, top: 'Introduction and conclusion; logical flow; natural cohesive devices.', note: 'No intro or conclusion = 1 point.' },
    { k: 'D', name: '語言掌控 Language Control', max: 3, top: 'Variety of vocabulary and structures; self-corrects to improve clarity.', note: 'Falling back on English for missing words = 1 point.' },
    { k: 'E', name: '表達 Delivery', max: 2, top: 'Smooth, confident, even pace, engaging intonation, little hesitation.', note: 'Sounding read aloud or recited from memory scores 0 here.' }
  ]},
  qa: { name: '專題問答 Project Q&A', total: 9, weight: '15%', rows: [
    { k: 'A', name: '任務執行 Task Execution', max: 2, top: 'Answers at least three of the four questions appropriately.', note: 'Take notes while the question plays twice.' },
    { k: 'B', name: '文化理解 Cultural Understanding', max: 2, top: 'In at least one answer: a cultural comparison, OR the link between perspectives and products/practices.', note: 'Plan to use “跟……比起來” or “這反映了……” at least once.' },
    { k: 'C', name: '語言掌控 Language Control', max: 3, top: 'Variety of vocabulary and structures; circumlocution and paraphrasing when stuck.', note: 'If a word is missing, describe it in Chinese rather than switching to English.' },
    { k: 'D', name: '流利度 Fluency', max: 2, top: 'Fluid, automatic speech with natural intonation.', note: 'You do not have to fill all 40 seconds to earn full points.' }
  ]}
};

APZH.resources = [
  { group: '官方（College Board）', items: [
    ['AP Chinese 課程頁', 'https://apcentral.collegeboard.org/courses/ap-chinese-language-and-culture', '2026–27 改版說明、重要日期'],
    ['考試頁（新題型與配分）', 'https://apcentral.collegeboard.org/courses/ap-chinese-language-and-culture/exam', '2027 年五月考試格式'],
    ['Course and Exam Description（PDF）', 'https://apcentral.collegeboard.org/media/pdf/ap-chinese-language-and-culture-course-and-exam-description.pdf', '附 Project Manual、評分標準、樣題'],
    ['歷屆自由作答題', 'https://apcentral.collegeboard.org/courses/ap-chinese-language-and-culture/exam/past-exam-questions', '2023–2026：看圖寫故事和電子郵件題型與新制相同，含高中低分範例'],
    ['2026 自由作答題（PDF）', 'https://apcentral.collegeboard.org/media/pdf/ap26-frq-chinese-language.pdf', '最新一年的真題'],
    ['2025 自由作答題（PDF）', 'https://apcentral.collegeboard.org/media/pdf/ap25-frq-chinese-language.pdf', ''],
    ['2024 自由作答題（PDF）', 'https://apcentral.collegeboard.org/media/pdf/ap24-frq-chinese-language.pdf', ''],
    ['Bluebook 練習', 'https://bluebook.collegeboard.org/students/practice', '考試軟體；考前一定要先熟悉介面'],
    ['AP Digital Portfolio', 'https://digitalportfolio.collegeboard.org/', '一月領取專題資料包；4/30 前提交 PPR'],
    ['學生版考試說明', 'https://apstudents.collegeboard.org/courses/ap-chinese-language-and-culture/assessment', '']
  ]},
  { group: '真實語料（繁體、臺灣）', items: [
    ['國語日報', 'https://www.mdnkids.com/', '給中小學生的新聞，程度很適合每天讀一篇'],
    ['公視新聞網', 'https://news.pts.org.tw/', '新聞報導：練 Audio Report 題型'],
    ['公共電視', 'https://www.pts.org.tw/', '兒少、科學、文化節目'],
    ['華語文能力測驗 TOCFL', 'https://tocfl.edu.tw/', '有線上模擬試題，聽力閱讀都是繁體']
  ]},
  { group: '工具', items: [
    ['教育部重編國語辭典', 'https://dict.revised.moe.edu.tw/', '查字義、例句'],
    ['萌典', 'https://www.moedict.tw/', '快速查字，附注音']
  ]}
];
