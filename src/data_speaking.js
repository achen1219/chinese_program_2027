// Speaking — Question 1 Project Presentation (3 min prep + 3 min talk) and
// Question 2 Project Q&A (4 recorded questions, each heard twice, 40 s per answer).
// The Project Manual warns against memorizing a fixed list, so drills draw 4 at random
// from a large bank covering the language functions it names.
window.APZH = window.APZH || {};

APZH.personas = [
  { id: 'reporter',  name: '校刊記者',       intro: '你好，我是校刊的記者。聽了你的報告，想請你回答幾個問題。' },
  { id: 'exchange',  name: '臺灣來的交換學生', intro: '嗨，我是從臺灣來的交換學生。我對你的報告很有興趣，可以問你幾個問題嗎？' },
  { id: 'professor', name: '大學教授',       intro: '同學你好，我是大學華語系的教授，想進一步了解你的研究。' },
  { id: 'director',  name: '社區文化中心主任', intro: '你好，我是社區文化中心的主任。我們正在規劃一個文化活動，想聽聽你的想法。' },
  { id: 'friend',    name: '好朋友',         intro: '欸，你的報告好有趣喔！我有幾個問題想問你。' },
  { id: 'panel',     name: '獎學金面試官',   intro: '你好，歡迎參加今天的面試。我們想請你談一談你的研究。' }
];

// fn: info 提供資訊 · pref 表達喜好 · opinion 表達意見 · advice 提供建議 ·
//     emotion 說明感受 · compare 文化比較 · reflect 反思文化觀點
APZH.qaBank = [
  { fn: 'info',    q: '你為什麼選擇研究這個地區或社群？' },
  { fn: 'info',    q: '你是怎麼找到研究資料的？哪一個資料對你最有幫助？' },
  { fn: 'info',    q: '請你再多說一點，你報告中提到的第一個因素是什麼意思？' },
  { fn: 'info',    q: '在你研究的社群裡，這樣的文化活動通常在什麼場合出現？' },
  { fn: 'info',    q: '一般人可以在哪裡看到或體驗你報告中介紹的文化？' },
  { fn: 'info',    q: '這個傳統是怎麼一代一代傳下來的？' },
  { fn: 'pref',    q: '在你的研究中，你最喜歡哪一個部分？為什麼？' },
  { fn: 'pref',    q: '如果你可以親自去那裡，你最想體驗什麼？為什麼？' },
  { fn: 'pref',    q: '你平常喜歡什麼樣的音樂？為什麼？' },
  { fn: 'pref',    q: '你會推薦哪一首歌或哪一個作品，給想認識這個文化的人？為什麼？' },
  { fn: 'opinion', q: '你覺得科技和網路對這個傳統有什麼影響？' },
  { fn: 'opinion', q: '你認為年輕人對這個傳統還有興趣嗎？為什麼？' },
  { fn: 'opinion', q: '你覺得傳統文化和流行文化可以結合嗎？請舉例說明。' },
  { fn: 'opinion', q: '你認為政府或學校應該怎麼推廣這樣的文化？' },
  { fn: 'opinion', q: '有人說傳統文化一定要保持原來的樣子，你同意嗎？為什麼？' },
  { fn: 'opinion', q: '你覺得音樂可以怎麼幫助人們了解一個文化？' },
  { fn: 'advice',  q: '如果有外國朋友想多了解這個文化，你會給他什麼建議？' },
  { fn: 'advice',  q: '如果你的同學也想做類似的研究，你會給他什麼建議？' },
  { fn: 'advice',  q: '如果我們想在社區舉辦一個介紹這個文化的活動，你覺得應該怎麼安排？' },
  { fn: 'advice',  q: '你覺得一個人要怎麼做，才能真正了解另一個文化？' },
  { fn: 'emotion', q: '在研究的過程中，最讓你驚訝的發現是什麼？' },
  { fn: 'emotion', q: '做這個研究的時候，你遇到過什麼困難？你是怎麼解決的？' },
  { fn: 'emotion', q: '第一次接觸這個文化的時候，你有什麼感覺？' },
  { fn: 'emotion', q: '完成這個報告以後，你最大的收穫是什麼？' },
  { fn: 'compare', q: '跟你自己住的社區比起來，有什麼相同或不同的地方？' },
  { fn: 'compare', q: '你覺得美國有沒有類似的文化活動？它們有什麼不同？' },
  { fn: 'compare', q: '在你家裡，有沒有類似的習慣或傳統？請比較一下。' },
  { fn: 'compare', q: '不同的華語地區對這件事的做法一樣嗎？請比較一下。' },
  { fn: 'compare', q: '以前的人和現在的人，對這個傳統的看法有什麼不同？' },
  { fn: 'reflect', q: '你覺得這個文化現象反映了當地人什麼樣的價值觀？' },
  { fn: 'reflect', q: '從你的研究來看，為什麼這個傳統對當地人那麼重要？' },
  { fn: 'reflect', q: '做完這個研究以後，你對這個文化的看法有什麼改變？' },
  { fn: 'reflect', q: '你報告中提到的例子，可以看出當地人重視什麼？' },
  { fn: 'reflect', q: '你覺得這個傳統未來會有什麼變化？為什麼？' },
  { fn: 'reflect', q: '這個研究讓你對自己的文化背景有什麼新的認識？' }
];

APZH.qaFnLabels = {
  info: '提供資訊', pref: '表達喜好', opinion: '表達意見', advice: '提供建議',
  emotion: '說明感受', compare: '文化比較', reflect: '反思文化觀點'
};

// Practice presentation topics — for building the skill before (and alongside) the real
// course project. These are NOT the 2027 project topic, which arrives in the January packet.
APZH.presTopics = [
  { id: 'P01', unit: 1, zh: '選一個華語地區或社群，介紹一個重要節日的家庭活動。說明至少三個原因，解釋這些活動為什麼對家庭很重要。', en: 'Choose a Chinese-speaking region or community. Present the family activities of an important holiday and explain at least three reasons they matter to families.' },
  { id: 'P02', unit: 5, zh: '介紹夜市在一個華語地區受歡迎的原因。說明至少三個因素，並舉例說明夜市反映了什麼樣的生活態度。', en: 'Explain why night markets are popular in a Chinese-speaking region. Discuss at least three factors and what attitudes toward life they reflect.' },
  { id: 'P03', unit: 2, zh: '介紹一種傳統節日食物（例如粽子、月餅、年糕）。說明它的由來、做法或吃法，以及它代表的意義。', en: 'Present a traditional festival food. Explain its origin, how it is made or eaten, and what it symbolizes.' },
  { id: 'P04', unit: 3, zh: '介紹一種傳統藝術（例如書法、剪紙、布袋戲）。說明至少三個因素，解釋它為什麼能流傳到今天。', en: 'Present a traditional art form. Explain at least three factors that help it survive today.' },
  { id: 'P05', unit: 4, zh: '介紹科技怎麼改變了華語地區年輕人溝通的方式（例如通訊軟體、貼圖、短影片）。說明至少三個影響。', en: 'Explain how technology has changed the way young people in a Chinese-speaking region communicate. Discuss at least three effects.' },
  { id: 'P06', unit: 6, zh: '介紹一個華語城市的大眾運輸。說明至少三個因素，解釋為什麼很多人選擇搭大眾運輸。', en: 'Present public transportation in a Chinese-speaking city. Explain at least three factors that lead people to use it.' },
  { id: 'P07', unit: 5, zh: '介紹華語地區學生的課後生活（例如補習、才藝課、社團）。說明這反映了家庭和社會什麼樣的教育觀念。', en: 'Present after-school life for students in a Chinese-speaking region and what it shows about attitudes toward education.' },
  { id: 'P08', unit: 1, zh: '介紹廟宇或社區中心在當地人生活中的角色。說明至少三個方面，並舉例說明。', en: 'Present the role of temples or community centers in local life. Explain at least three aspects with examples.' },
  { id: 'P09', unit: 6, zh: '介紹一個華語地區的資源回收或環保做法。說明至少三個因素，解釋為什麼這些做法能成功。', en: 'Present recycling or environmental practices in a Chinese-speaking region. Explain at least three factors behind their success.' },
  { id: 'P10', unit: 3, zh: '介紹一種傳統服飾（例如旗袍、原住民服飾）在現代生活中的樣子。說明傳統和現代設計怎麼結合。', en: 'Present a traditional style of clothing in modern life and how traditional and modern design are combined.' },
  { id: 'P11', unit: 5, zh: '介紹一項在華語地區很受歡迎的運動或休閒活動（例如棒球、太極拳、龍舟）。說明至少三個受歡迎的原因。', en: 'Present a popular sport or leisure activity in a Chinese-speaking region. Explain at least three reasons for its popularity.' },
  { id: 'P12', unit: 2, zh: '介紹華語中的一個語言現象（例如網路用語、成語、方言）。說明它是怎麼產生的，以及它反映了什麼文化觀點。', en: 'Present a feature of the Chinese language (internet slang, idioms, or dialects). Explain how it arose and what cultural perspectives it reflects.' }
];
