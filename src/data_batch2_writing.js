// Batch 2 (Nov 2026): 8 more picture stories (S09–S16), 12 more emails (E13–E24) and
// 36 more character-choice items. Same formats as data_writing.js and data_toolkit.js.
APZH.stories.push(
{
  id: 'S09', unit: 6, title: '搭錯公車',
  panels: [
    { bg: 'street', desc: 'A boy listening to music waits at a bus stop for bus 12. A bus marked 21 pulls up and he gets on without looking carefully.',
      items: [['#等 12 路', 20, 16, 7], ['🚏', 20, 50, 26], ['👦', 42, 62, 17], ['🎵', 54, 40, 9], ['#21', 78, 30, 9], ['🚌', 78, 62, 32]] },
    { bg: 'park', desc: 'On the bus he looks out the window and sees mountains and fields he does not recognize. He realizes he is on the wrong bus.',
      items: [['⛰️', 80, 40, 30], ['🌾', 64, 84, 10], ['🌾', 90, 86, 9], ['🚌', 32, 64, 38], ['@😨', 58, 28, 10]] },
    { bg: 'street', desc: 'He gets off and asks a police officer for help. The officer points to the bus stop across the street for the bus back.',
      items: [['👦', 28, 62, 17], ['@❓', 30, 32, 9], ['👮', 54, 60, 18, 'f'], ['👉', 70, 56, 10], ['🚏', 88, 48, 24]] },
    { bg: 'school', desc: 'He finally reaches school late and out of breath. The clock shows nine, and he explains to his teacher what happened.',
      items: [['🕘', 50, 20, 12], ['🏫', 22, 50, 32], ['👦', 54, 64, 16], ['💦', 66, 50, 8], ['👩‍🏫', 82, 62, 17, 'f']] }
  ]
},
{
  id: 'S10', unit: 5, title: '第一次做菜',
  panels: [
    { bg: 'home', desc: 'A girl watches a cooking video on a laptop and decides to cook dinner for her parents.',
      items: [['👧', 30, 62, 18], ['💻', 60, 66, 26], ['@🍳', 62, 28, 11]] },
    { bg: 'street', desc: 'She goes to the market with a basket and buys tomatoes, eggs and vegetables from a vendor.',
      items: [['#菜市場', 50, 15, 8], ['👧', 24, 64, 16], ['🧺', 40, 78, 12], ['🍅', 56, 66, 10], ['🥚', 66, 68, 9], ['🥬', 76, 66, 10], ['👵', 90, 54, 15, 'f']] },
    { bg: 'kitchen', desc: 'In the kitchen things go wrong: the pan catches fire and smokes, and she pours in far too much salt.',
      items: [['👧', 22, 58, 16], ['@😰', 24, 28, 9], ['🍳', 52, 72, 20], ['🔥', 52, 50, 12], ['💨', 64, 28, 14], ['🧂', 78, 70, 13]] },
    { bg: 'home', desc: 'At dinner her parents find the dish very salty and reach for water, but they give her a thumbs up for trying. She decides to try again next week.',
      items: [['👨', 18, 56, 16], ['@😖', 20, 26, 9], ['🥤', 34, 80, 10], ['🍛', 50, 82, 14], ['👧', 50, 56, 15], ['👩', 82, 56, 16, 'f'], ['👍', 68, 36, 10]] }
  ]
},
{
  id: 'S11', unit: 1, title: '撿到錢包',
  panels: [
    { bg: 'park', desc: 'Walking home through the park, a girl notices a wallet left on a chair.',
      items: [['🌳', 86, 42, 26], ['🪑', 58, 72, 18], ['👛', 58, 58, 10], ['👧', 26, 62, 17], ['@❗', 38, 32, 9]] },
    { bg: 'park', desc: 'She opens it and finds money and a card showing that it belongs to an elderly man.',
      items: [['🌳', 12, 44, 24], ['👧', 34, 62, 17], ['👛', 52, 68, 11], ['💵', 64, 60, 11], ['@👴', 74, 30, 11]] },
    { bg: 'street', desc: 'She takes the wallet to the police station and hands it to an officer.',
      items: [['#警察局', 60, 15, 8], ['🏢', 62, 48, 30], ['👧', 24, 64, 16], ['👛', 38, 72, 9], ['👮', 86, 62, 16, 'f']] },
    { bg: 'home', desc: 'The elderly man gets his wallet back. He comes to thank her and gives her some fruit. She is glad she did the right thing.',
      items: [['👴', 26, 58, 18], ['@🙏', 28, 26, 10], ['🍎', 46, 72, 10], ['🍊', 56, 76, 9], ['👧', 74, 62, 16, 'f']] }
  ]
},
{
  id: 'S12', unit: 6, title: '我們的菜園',
  panels: [
    { bg: 'park', desc: 'On a sunny spring day, two classmates plant seedlings in the school garden.',
      items: [['☀️', 84, 18, 13], ['👦', 24, 60, 16], ['👧', 46, 62, 16], ['🌱', 64, 82, 11], ['🌱', 78, 84, 11], ['🌱', 92, 82, 11]] },
    { bg: 'park', desc: 'They water the garden every day, and the vegetables and carrots grow bigger.',
      items: [['📅', 14, 22, 12], ['👧', 24, 60, 16], ['💦', 42, 68, 10], ['🥬', 58, 80, 14], ['🥬', 74, 82, 14], ['🥕', 90, 80, 12]] },
    { bg: 'rain', desc: 'One night a heavy storm knocks the vegetables over. The next morning the students are upset.',
      items: [['🌧️', 26, 16, 15], ['💨', 66, 26, 15], ['🥬', 34, 82, 13, 'r70'], ['🥬', 56, 84, 13, 'r-80'], ['👦', 84, 62, 15], ['@😢', 80, 32, 9]] },
    { bg: 'park', desc: 'They repair the garden and replant. Weeks later they harvest a basket of vegetables and share them with their teacher.',
      items: [['👦', 18, 60, 15], ['👧', 36, 62, 15], ['🧺', 56, 78, 15], ['🥕', 52, 64, 9], ['🥬', 62, 64, 9], ['👩‍🏫', 84, 58, 16, 'f'], ['@😊', 48, 28, 9]] }
  ]
},
{
  id: 'S13', unit: 6, title: '颱風夜',
  panels: [
    { bg: 'home', desc: 'The family sees on the TV news that a typhoon will arrive tonight.',
      items: [['📺', 24, 58, 30], ['🌀', 24, 54, 11], ['👨', 58, 62, 15], ['👩', 74, 62, 15], ['👦', 90, 68, 12]] },
    { bg: 'street', desc: 'They hurry to the supermarket and fill a cart with canned food, a flashlight and candles.',
      items: [['#超市', 50, 15, 8], ['👨', 18, 60, 15], ['🛒', 42, 74, 22], ['🥫', 40, 58, 9], ['🔦', 60, 60, 10], ['🕯️', 72, 64, 10], ['👦', 88, 64, 14, 'f']] },
    { bg: 'night', desc: 'That night the power goes out. The family lights a candle and plays cards together, and the boy finds it fun.',
      items: [['🌧️', 82, 16, 13], ['👨', 18, 58, 15], ['🕯️', 50, 58, 14], ['🃏', 36, 80, 10], ['🃏', 64, 80, 10], ['👩', 82, 58, 15, 'f'], ['👦', 50, 86, 12], ['@😄', 66, 34, 8]] },
    { bg: 'park', desc: 'The next morning the sun is out. The boy and an elderly neighbor sweep up the fallen leaves and branches together.',
      items: [['☀️', 84, 18, 13], ['🌳', 12, 44, 24], ['👦', 34, 62, 15], ['🧹', 50, 66, 16], ['🍂', 44, 86, 10], ['🍂', 60, 88, 9], ['👵', 78, 60, 15, 'f']] }
  ]
},
{
  id: 'S14', unit: 3, title: '才藝表演',
  panels: [
    { bg: 'home', desc: 'A girl practices the violin at home every day. The school talent show is marked on the calendar.',
      items: [['#才藝表演', 18, 18, 7], ['📅', 18, 36, 12], ['👧', 46, 60, 18], ['🎻', 62, 64, 15], ['🎵', 76, 34, 10]] },
    { bg: 'stage', desc: 'Backstage before her turn, she is so nervous that she is sweating and her hands shake.',
      items: [['👧', 42, 60, 18], ['@😰', 58, 30, 10], ['💦', 30, 46, 8], ['🎻', 66, 70, 14]] },
    { bg: 'stage', desc: 'On stage she plays a wrong note and stops. The audience claps to encourage her.',
      items: [['👧', 46, 50, 16], ['🎻', 60, 54, 13], ['💥', 70, 40, 9], ['👏', 20, 86, 11], ['👏', 50, 90, 11], ['👏', 80, 86, 11]] },
    { bg: 'stage', desc: 'She takes a deep breath, finishes the piece and bows. Her mother comes up with flowers.',
      items: [['🎉', 18, 28, 13], ['👧', 46, 56, 17], ['@😊', 36, 26, 9], ['💐', 64, 66, 13], ['👩', 82, 58, 16, 'f']] }
  ]
},
{
  id: 'S15', unit: 4, title: '奶奶的新手機',
  panels: [
    { bg: 'home', desc: 'Grandma has a new smartphone but has no idea how to use it. Her grandson notices.',
      items: [['👵', 36, 60, 19], ['📱', 54, 70, 13], ['@❓', 52, 30, 10], ['👦', 86, 66, 14, 'f']] },
    { bg: 'home', desc: 'Her grandson patiently shows her, step by step, how to make a video call.',
      items: [['👵', 30, 60, 18], ['@💡', 30, 28, 10], ['📱', 48, 72, 12], ['👉', 58, 64, 9, 'f'], ['👦', 72, 62, 17, 'f']] },
    { bg: 'home', desc: 'Grandma writes the steps in a notebook and practices again and again by herself.',
      items: [['🕐', 84, 20, 11], ['👵', 38, 60, 19], ['📱', 56, 68, 12], ['📝', 74, 78, 12]] },
    { bg: 'home', desc: 'A week later Grandma video-calls her daughter overseas all by herself. Her grandson gives her a thumbs up.',
      items: [['👵', 24, 60, 18], ['@❤️', 26, 28, 10], ['📱', 56, 56, 30], ['👩', 56, 54, 10], ['👦', 86, 68, 13, 'f'], ['👍', 84, 44, 9]] }
  ]
},
{
  id: 'S16', unit: 2, title: '過年',
  panels: [
    { bg: 'home', desc: 'It is the day before Lunar New Year. The whole family cleans the house together.',
      items: [['#除夕', 84, 16, 8], ['📅', 84, 34, 11], ['👨', 18, 58, 15], ['🧹', 32, 64, 15], ['👩', 52, 58, 15], ['🧽', 64, 50, 9], ['👧', 78, 68, 13]] },
    { bg: 'home', desc: 'The children put the character 福 and red decorations on the front door.',
      items: [['🚪', 50, 58, 32], ['#福', 50, 44, 13], ['👦', 22, 64, 16], ['👧', 78, 64, 16, 'f'], ['🏮', 16, 22, 10], ['🏮', 84, 22, 10]] },
    { bg: 'night', desc: 'That evening three generations sit down to the reunion dinner, with fish and dumplings on the table.',
      items: [['👴', 14, 54, 14], ['👵', 30, 54, 14], ['👧', 50, 52, 12], ['👨', 70, 54, 14], ['👩', 86, 54, 14], ['🐟', 36, 80, 13], ['🥟', 52, 84, 11], ['🍲', 66, 80, 13]] },
    { bg: 'nightout', desc: 'After dinner the grandparents give the children red envelopes, and the family watches fireworks together.',
      items: [['🎆', 22, 20, 17], ['🎇', 78, 18, 15], ['👴', 26, 62, 16], ['🧧', 44, 68, 11], ['👧', 62, 64, 15, 'f'], ['👦', 80, 64, 15, 'f'], ['@😄', 62, 36, 9]] }
  ]
}
);

APZH.emails.push(
{ id: 'E13', unit: 1, register: 'informal', from: '林小傑（表弟）', subject: '想養寵物',
  body: ['表姊：', '我最近好想養一隻寵物，可是爸媽上班都很忙，我自己也要上學。你覺得像我們這樣的家庭，養什麼寵物比較合適？為什麼？還有，我要怎麼說，爸媽才會答應呢？', '小傑'] },
{ id: 'E14', unit: 5, register: 'formal', from: '吳老師（體育老師）', subject: '新的運動社團',
  body: ['各位同學：', '下學期學校計畫增加一個新的運動社團，想先了解大家的想法。你希望學校成立哪一種運動社團？為什麼？另外，你覺得這個社團一個星期應該練習幾次、在什麼時間練習比較好？謝謝大家！', '吳老師'] },
{ id: 'E15', unit: 6, register: 'informal', from: '黃子晴（臺北的筆友）', subject: '放颱風假',
  body: ['嗨！', '昨天颱風來，我們放了一天假，我在家看了一整天的書。你住的地方有沒有因為天氣不好而停課的時候？那一天你通常會做什麼？還有，你們那裡的人平常怎麼為壞天氣做準備？', '子晴'] },
{ id: 'E16', unit: 3, register: 'formal', from: '鄭小姐（市立美術館）', subject: '青少年參觀活動',
  body: ['您好：', '本館希望吸引更多中學生來參觀，正在向年輕朋友請教。您覺得中學生對哪一類的藝術作品最有興趣？為什麼？另外，您認為美術館可以舉辦什麼樣的活動，讓參觀變得更有趣？謝謝您寶貴的意見！', '市立美術館　鄭小姐'] },
{ id: 'E17', unit: 4, register: 'informal', from: '趙安安（同學）', subject: '買手機還是買平板',
  body: ['欸，', '我存了一筆零用錢，想買一樣東西來幫助學習，可是不知道該買手機還是平板。你覺得哪一個比較適合？為什麼？還有，我很怕買了以後一直玩遊戲，你有什麼好方法可以控制使用時間嗎？', '安安'] },
{ id: 'E18', unit: 2, register: 'formal', from: '周校長（中文學校）', subject: '說故事比賽',
  body: ['各位同學：', '學校下個月要舉辦中文說故事比賽，歡迎大家報名。如果你參加，你想說哪一個故事？為什麼？另外，有些同學比較害羞，不敢上台，你覺得學校可以怎麼鼓勵他們參加？', '周校長'] },
{ id: 'E19', unit: 5, register: 'informal', from: '許大維（臺灣的表哥）', subject: '下個月去找你',
  body: ['嗨！', '告訴你一個好消息：下個月我要到美國找你玩一個星期！你打算帶我去哪些地方？為什麼？還有，你們那裡有什麼好吃的東西，是我一定要嘗嘗的？', '大維'] },
{ id: 'E20', unit: 1, register: 'formal', from: '社區活動中心　高主任', subject: '重陽節敬老活動',
  body: ['您好：', '重陽節快到了，本中心想請青少年和社區的長輩一起參加活動。您覺得年輕人可以和長輩一起做什麼活動？為什麼？另外，您認為年輕人可以從長輩身上學到什麼？期待您的回覆。', '社區活動中心　高主任'] },
{ id: 'E21', unit: 6, register: 'formal', from: '市政府公園管理處', subject: '新公園的設計',
  body: ['各位市民：', '本市計畫在您住的社區附近蓋一座新公園，想聽聽居民的意見。您希望新公園裡有哪些設施？為什麼？另外，您覺得居民可以怎麼幫忙，讓公園保持乾淨？謝謝您！', '公園管理處　敬上'] },
{ id: 'E22', unit: 3, register: 'informal', from: '白可欣（好朋友）', subject: '學校音樂會',
  body: ['嗨～', '老師要我在下個月的學校音樂會上表演一首歌，可是我還沒決定唱什麼。你覺得我應該選什麼樣的歌？為什麼？還有，我一上台就很緊張，你有什麼方法可以讓我不那麼害怕？', '可欣'] },
{ id: 'E23', unit: 4, register: 'formal', from: '羅老師（科學老師）', subject: '科學展覽',
  body: ['同學們好：', '明年春天學校要舉辦科學展覽，每位同學都要準備一個研究題目。你想研究什麼題目？為什麼？另外，做這個研究的時候，你需要老師或學校提供哪些幫助？請在下週五以前回信。', '羅老師'] },
{ id: 'E24', unit: 2, register: 'informal', from: '田小華（高雄的筆友）', subject: '學英文好難',
  body: ['你好！', '我最近在學英文，覺得單字好難記，常常背了又忘。你學中文的時候，是用什麼方法記住生字的？還有，你覺得看電影或是聽歌，對學語言有幫助嗎？為什麼？', '小華'] }
);

// More same-sound character choices for the 選字 drill: [sentence, [three options], index of the correct one].
APZH.homophones.push(
  ['今天的＿＿很好，適合去郊遊。', ['天氣', '天器', '天汽'], 0],
  ['他從小的＿＿是當醫生。', ['夢像', '夢想', '夢響'], 1],
  ['這本小說的＿＿很精彩。', ['內榮', '內溶', '內容'], 2],
  ['弟弟＿＿把花瓶打破了。', ['不小心', '不小新', '不曉心'], 0],
  ['這個問題很＿＿，我想不出答案。', ['付雜', '複雜', '復雜'], 1],
  ['爺爺每天早上去公園＿＿。', ['韻動', '運洞', '運動'], 2],
  ['她的中文說得很＿＿。', ['流利', '留利', '流力'], 0],
  ['除夕晚上，全家人一起吃＿＿飯。', ['團員', '團圓', '團園'], 1],
  ['請＿＿時間，不要遲到。', ['住意', '注義', '注意'], 2],
  ['這家餐廳的服務＿＿很好。', ['態度', '太度', '態渡'], 0],
  ['他對音樂很有＿＿。', ['興去', '興趣', '幸趣'], 1],
  ['我＿＿帶作業了。', ['望記', '忘紀', '忘記'], 2],
  ['這次旅行讓我＿＿深刻。', ['印象', '印像', '映象'], 0],
  ['請大家＿＿順序排隊。', ['安照', '按照', '按造'], 1],
  ['他＿＿了很多困難，終於成功了。', ['客服', '刻服', '克服'], 2],
  ['老師＿＿我們多讀課外書。', ['鼓勵', '古勵', '鼓力'], 0],
  ['我們要＿＿用水，不要浪費。', ['結約', '節約', '節月'], 1],
  ['這件衣服的＿＿很特別。', ['社計', '設記', '設計'], 2],
  ['我們應該＿＿長輩。', ['尊敬', '遵敬', '尊境'], 0],
  ['過馬路要＿＿交通規則。', ['尊守', '遵守', '遵手'], 1],
  ['這個城市的＿＿很發達。', ['郊通', '交痛', '交通'], 2],
  ['他＿＿自己一定能考上。', ['相信', '想信', '相性'], 0],
  ['媽媽在＿＿買了很多蔬菜和水果。', ['超是', '超市', '抄市'], 1],
  ['上課的時候要＿＿聽講。', ['磚心', '專新', '專心'], 2],
  ['這裡的＿＿很美，吸引了很多遊客。', ['風景', '風警', '封景'], 0],
  ['她＿＿把這個好消息告訴我。', ['力刻', '立刻', '立客'], 1],
  ['多吃蔬菜對身體＿＿。', ['有意', '友益', '有益'], 2],
  ['這是我第一次＿＿飛機。', ['坐', '做', '作'], 0],
  ['我正在＿＿功課，等一下再出去玩。', ['坐', '做', '座'], 1],
  ['請回到你的＿＿位。', ['坐', '做', '座'], 2],
  ['你想去＿＿裡玩？', ['哪', '那', '拿'], 0],
  ['他長得很＿＿爸爸。', ['向', '像', '象'], 1],
  ['一直＿＿前走，就到圖書館了。', ['像', '象', '向'], 2],
  ['出門記得＿＿口罩。', ['戴', '帶', '代'], 0],
  ['明天會下雨，記得＿＿雨傘。', ['戴', '帶', '待'], 1],
  ['我對這次比賽很有＿＿。', ['新心', '信新', '信心'], 2]
);
