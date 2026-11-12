// Listening sets — Section II Part A format: 5 task types, 5 questions per set.
// Scripts are Traditional Chinese; questions and options are in English, as on the exam.
window.APZH = window.APZH || {};
APZH.listening = [
{
  id: 'L01', type: 'instr', unit: 5, title: '博物館參觀須知',
  intro: 'You will listen to an announcement at a museum.',
  speakers: { N: { name: '廣播', g: 'f' } },
  lines: [
    ['N', '各位觀眾，歡迎來到臺灣歷史博物館。為了讓大家有愉快的參觀經驗，請注意以下幾點。'],
    ['N', '第一，館內的展品都非常珍貴，請不要觸摸，拍照的時候也不要使用閃光燈。'],
    ['N', '第二，飲料和食物不能帶進展覽室，您可以把它們放在一樓服務台旁邊的置物櫃。'],
    ['N', '第三，本館每天上午十點和下午兩點有免費的中文導覽，每次大約四十分鐘，想參加的觀眾請到服務台登記。'],
    ['N', '另外，三樓的兒童探索區今天因為整修，暫停開放，造成不便，敬請見諒。'],
    ['N', '最後提醒您，本館下午五點閉館，四點半以後就不再讓觀眾入場。祝您參觀愉快！']
  ],
  questions: [
    { q: 'What is the main purpose of the announcement?', o: ['To give visitors rules and information for their visit', 'To advertise a new exhibition', 'To announce that the museum will close early today', 'To recruit volunteer tour guides'], a: 0 },
    { q: 'What does the speaker ask visitors not to do?', o: ['Talk on their phones', 'Take photos with a flash', 'Bring backpacks into the museum', 'Sit on the benches'], a: 1 },
    { q: 'Where can visitors leave food and drinks?', o: ['In the children’s area', 'At the main entrance', 'In lockers next to the service desk', 'In the museum café'], a: 2 },
    { q: 'Why is the third floor area unavailable today?', o: ['It is reserved for a school group', 'It is being renovated', 'It is only open on weekends', 'It is too crowded'], a: 1 },
    { q: 'What can be inferred about a visitor who arrives at 4:45 p.m.?', o: ['The visitor can join the last guided tour', 'The visitor will not be allowed to enter', 'The visitor can stay until 6:00 p.m.', 'The visitor will get a discounted ticket'], a: 1 }
  ]
},
{
  id: 'L02', type: 'instr', unit: 1, title: '校外教學的提醒',
  intro: 'You will listen to a teacher giving instructions to a class.',
  speakers: { N: { name: '老師', g: 'm' } },
  lines: [
    ['N', '同學們，明天就是我們去陽明山國家公園校外教學的日子了，老師再提醒大家幾件事。'],
    ['N', '明天早上七點半在學校大門口集合，七點四十五分準時出發。遲到的同學沒辦法跟我們一起去，所以千萬不要遲到。'],
    ['N', '山上的天氣變化很快，早上可能出大太陽，下午就下雨，所以一定要帶雨衣或雨傘，也要多帶一件外套。'],
    ['N', '午餐學校會準備便當，大家只需要帶水壺和一些點心就好。'],
    ['N', '我們會走兩個小時左右的步道，請穿好走的運動鞋，不要穿新鞋或拖鞋。'],
    ['N', '還有，國家公園裡的花草和昆蟲都受到保護，大家只能拍照，不能帶走任何東西。如果身體有任何不舒服，請馬上告訴老師。']
  ],
  questions: [
    { q: 'Who is the intended audience?', o: ['Parents planning a family trip', 'Students going on a field trip', 'Park rangers', 'Bus drivers'], a: 1 },
    { q: 'What time will the group depart?', o: ['7:00', '7:30', '7:45', '8:15'], a: 2 },
    { q: 'Why should students bring rain gear?', o: ['The forecast says it will rain all day', 'The weather on the mountain changes quickly', 'They will visit a waterfall', 'The bus has no roof'], a: 1 },
    { q: 'What do students NOT need to bring?', o: ['Lunch', 'A water bottle', 'A jacket', 'Snacks'], a: 0 },
    { q: 'What does the teacher say about plants and insects in the park?', o: ['Students should collect samples for class', 'Students may photograph them but not take them', 'Students should avoid looking at them', 'Students will feed the insects'], a: 1 }
  ]
},
{
  id: 'L03', type: 'conv', unit: 1, title: '二手書義賣',
  intro: 'You will listen to a conversation between two classmates, Xiaomei and Zhiming.',
  speakers: { A: { name: '志明', g: 'm' }, B: { name: '小美', g: 'f' } },
  lines: [
    ['A', '小美，你這個星期六有空嗎？'],
    ['B', '星期六上午我要上游泳課，下午應該有空。怎麼了？'],
    ['A', '我們社區中心要辦一個二手書義賣，賣書的錢要捐給偏鄉的小學買新書。他們還缺幾個志工，你要不要一起來幫忙？'],
    ['B', '聽起來很有意義！需要做些什麼呢？'],
    ['A', '主要是幫忙整理書、把書分類，還有在攤位上收錢。活動從下午一點到五點。'],
    ['B', '我的游泳課十二點半才結束，可能要一點半才能到。這樣可以嗎？'],
    ['A', '沒問題，我跟負責的林阿姨說一聲就好。對了，如果你家有不看的書，也可以帶來捐。'],
    ['B', '好啊，我書架上有很多小時候看的故事書。我妹妹一定會捨不得，不過放著不看也是浪費。'],
    ['A', '太好了！那星期六見。']
  ],
  questions: [
    { q: 'What is the conversation mainly about?', o: ['Joining a swimming class', 'Volunteering at a used-book sale', 'Visiting a school in the countryside', 'Buying books for a younger sister'], a: 1 },
    { q: 'What will the money raised be used for?', o: ['Repairing the community center', 'Paying the volunteers', 'Buying new books for schools in remote areas', 'Starting a new library'], a: 2 },
    { q: 'Why will Xiaomei arrive late?', o: ['She has a swimming lesson', 'She has to babysit her sister', 'She is going to the library', 'She has a piano lesson'], a: 0 },
    { q: 'What does Zhiming suggest Xiaomei do?', o: ['Bring her sister along', 'Donate books she no longer reads', 'Make a poster for the event', 'Arrive before one o’clock'], a: 1 },
    { q: 'How does Xiaomei feel about giving away her old storybooks?', o: ['She refuses because they are gifts', 'She thinks it is better than leaving them unread', 'She wants to sell them herself', 'She is worried they are too old to sell'], a: 1 }
  ]
},
{
  id: 'L04', type: 'conv', unit: 1, title: '幫奶奶訂位',
  intro: 'You will listen to a phone call between a customer and a restaurant employee.',
  speakers: { A: { name: '店員', g: 'm' }, B: { name: '陳小姐', g: 'f' } },
  lines: [
    ['A', '您好，這裡是福來餐廳，請問有什麼需要？'],
    ['B', '您好，我想訂這個星期日中午的位子。我們要幫奶奶慶祝八十歲生日。'],
    ['A', '恭喜恭喜！請問一共幾位？'],
    ['B', '大人八位，小孩三位，一共十一位。'],
    ['A', '十一位的話，我們可以安排包廂，坐一張大圓桌。不過包廂有最低消費，一桌要六千元。'],
    ['B', '沒問題。另外，我奶奶的牙齒不太好，可以請廚師把菜做得軟一點嗎？'],
    ['A', '可以的，我會幫您備註。還有，我們有長壽麵和壽桃，需要幫您準備嗎？'],
    ['B', '太好了，請各準備一份。我們大概十二點到。'],
    ['A', '好的，請留下您的姓名和電話。'],
    ['B', '我姓陳，電話是〇九一二三四五六七八。'],
    ['A', '陳小姐，謝謝您，星期日見。']
  ],
  questions: [
    { q: 'Why is the customer calling?', o: ['To order food for delivery', 'To reserve a table for a birthday celebration', 'To complain about a meal', 'To ask about job openings'], a: 1 },
    { q: 'How many people will attend?', o: ['Eight', 'Nine', 'Eleven', 'Thirteen'], a: 2 },
    { q: 'What special request does the customer make?', o: ['A table near the window', 'Softer dishes for her grandmother', 'A vegetarian menu', 'A birthday cake'], a: 1 },
    { q: 'What does the restaurant offer to prepare?', o: ['Dumplings and soup', 'Longevity noodles and peach-shaped buns', 'A fruit platter', 'Red envelopes'], a: 1 },
    { q: 'What can be inferred about the private room?', o: ['It is free on Sundays', 'It is only for groups of twenty or more', 'It requires a minimum amount of spending', 'It must be paid for in advance online'], a: 2 }
  ]
},
{
  id: 'L05', type: 'report', unit: 6, title: '颱風來了',
  intro: 'You will listen to a news report.',
  speakers: { N: { name: '主播', g: 'f' } },
  lines: [
    ['N', '中央氣象署表示，強烈颱風「莎莉」預計明天清晨在臺灣東部登陸，全臺各地都將出現強風和豪雨。'],
    ['N', '臺北市、新北市和基隆市今天晚上宣布，明天停止上班、停止上課。'],
    ['N', '氣象專家提醒民眾，颱風期間應該盡量留在家中，避免到山區和海邊。'],
    ['N', '各大超市今天晚上擠滿了購物的民眾，蔬菜和泡麵的銷售量比平常高了三倍。'],
    ['N', '另外，臺灣高鐵表示，明天上午的班次將全部取消，下午是否恢復行駛，要看颱風的情況再決定。已經買票的旅客可以免費退票。']
  ],
  questions: [
    { q: 'What is the report mainly about?', o: ['A new weather satellite', 'Closures and preparations for an approaching typhoon', 'A sale at local supermarkets', 'Damage caused by last week’s storm'], a: 1 },
    { q: 'When is the typhoon expected to make landfall?', o: ['Tonight', 'Early tomorrow morning', 'Tomorrow afternoon', 'In three days'], a: 1 },
    { q: 'What did several cities announce?', o: ['Offices and schools will close tomorrow', 'All trains will run on a holiday schedule', 'Residents must leave the coast tonight', 'Supermarkets will stay open all night'], a: 0 },
    { q: 'What happened at supermarkets?', o: ['They ran out of bottled water', 'Sales of vegetables and instant noodles tripled', 'They closed early', 'Prices doubled'], a: 1 },
    { q: 'What is said about the high-speed rail?', o: ['It will run normally', 'Morning trains are canceled, and refunds are free', 'All trains for two days are canceled', 'Passengers must pay a fee to change tickets'], a: 1 }
  ]
},
{
  id: 'L06', type: 'report', unit: 4, title: '校園新聞：剩食地圖',
  intro: 'You will listen to a report on a school radio station.',
  speakers: { N: { name: '校園廣播', g: 'm' } },
  lines: [
    ['N', '各位同學午安，這裡是校園廣播站，現在為大家報導本週的校園新聞。'],
    ['N', '我校八年級的三位同學，利用課餘時間設計了一款叫做「剩食地圖」的手機應用程式。使用者可以在地圖上找到附近麵包店和餐廳快要過期、但是還能吃的食物，用比較便宜的價格買到。'],
    ['N', '這款程式上個月在全國青少年科技創意比賽中得到了第二名。'],
    ['N', '指導老師王老師說，三位同學花了半年的時間，訪問了二十多家商店，了解店家的需要。'],
    ['N', '同學們表示，他們希望這款程式能減少食物浪費，也能幫助想省錢的家庭。'],
    ['N', '下個星期三中午，他們將在圖書館舉辦分享會，歡迎有興趣的同學參加。']
  ],
  questions: [
    { q: 'What is the report mainly about?', o: ['A new school cafeteria menu', 'Students who created an award-winning app', 'A food drive at the library', 'A teacher who opened a bakery'], a: 1 },
    { q: 'What does the app help users do?', o: ['Order meals for delivery', 'Find discounted food that will expire soon', 'Count calories', 'Share recipes'], a: 1 },
    { q: 'What place did the app win in the competition?', o: ['First', 'Second', 'Third', 'Honorable mention'], a: 1 },
    { q: 'How did the students prepare their project?', o: ['They interviewed more than twenty stores', 'They took a summer course', 'They worked with a technology company', 'They surveyed their classmates'], a: 0 },
    { q: 'What will happen next Wednesday?', o: ['The app will be released', 'The students will give a talk at the library', 'The competition results will be announced', 'A bakery will visit the school'], a: 1 }
  ]
},
{
  id: 'L07', type: 'pres', unit: 3, title: '臺灣的布袋戲',
  intro: 'You will listen to a student’s presentation.',
  speakers: { N: { name: '學生', g: 'f' } },
  lines: [
    ['N', '大家好，今天我想跟大家介紹臺灣的布袋戲。布袋戲是一種用手操作布偶來表演的傳統戲劇，大約在三百多年前從中國福建傳到臺灣。'],
    ['N', '早期的布袋戲常常在廟會的時候演出，一方面是為了感謝神明，另一方面也讓村民有娛樂。那時候的戲台很小，表演者只用一隻手，就能讓布偶走路、打架，甚至翻跟斗。'],
    ['N', '到了一九七〇年代，布袋戲開始在電視上播出，加上了燈光和特效，變得非常受歡迎。聽說播出的時候，街上的人都少了很多。'],
    ['N', '現在，有些劇團把布袋戲和動畫、電影結合，還到國外表演，讓更多外國人認識這項藝術。'],
    ['N', '我覺得布袋戲能流傳這麼久，是因為它一直在改變，但是又保留了傳統的精神。謝謝大家。']
  ],
  questions: [
    { q: 'What is the presentation mainly about?', o: ['How to make a hand puppet', 'The history and development of Taiwanese glove puppetry', 'A famous puppet-show actor', 'Temple festivals in Fujian'], a: 1 },
    { q: 'Where did glove puppetry in Taiwan originally come from?', o: ['Japan', 'Fujian', 'Hong Kong', 'Beijing'], a: 1 },
    { q: 'Why were early puppet shows performed at temple fairs?', o: ['To raise money for schools', 'To thank the gods and entertain villagers', 'To train young performers', 'To attract tourists'], a: 1 },
    { q: 'According to the speaker, what happened in the 1970s?', o: ['Puppet shows became popular on television', 'Puppet shows were banned', 'Puppet shows moved indoors', 'The first puppet museum opened'], a: 0 },
    { q: 'What does the speaker believe explains the art form’s long survival?', o: ['Government support', 'Low ticket prices', 'It keeps changing while keeping its traditional spirit', 'It is taught in every school'], a: 2 }
  ]
},
{
  id: 'L08', type: 'pres', unit: 5, title: '便利商店文化',
  intro: 'You will listen to a presentation.',
  speakers: { N: { name: '講者', g: 'm' } },
  lines: [
    ['N', '各位同學，你們知道臺灣有多少家便利商店嗎？答案是超過一萬三千家，平均大約每兩千個人就有一家，密度是世界上數一數二的。'],
    ['N', '在臺灣，便利商店不只是買東西的地方。大家可以在這裡繳水電費、寄包裹、買高鐵票，甚至印文件。'],
    ['N', '很多上班族早上在這裡買咖啡和三明治當早餐，學生下課後也常常來買點心。'],
    ['N', '便利商店二十四小時營業，晚上燈火通明。有些人覺得，晚上走在路上看到便利商店，心裡就比較安心。'],
    ['N', '不過，也有人擔心便利商店的員工工作時間太長、太辛苦。'],
    ['N', '我認為，便利商店反映了臺灣人重視方便和效率的生活態度。但是我們在享受方便的同時，也應該關心背後辛苦工作的人。']
  ],
  questions: [
    { q: 'What is the speaker’s main point?', o: ['Convenience stores should close at night', 'Convenience stores play a large role in daily life in Taiwan', 'Taiwan has too many convenience stores', 'Convenience-store food is unhealthy'], a: 1 },
    { q: 'About how many people are there for each convenience store?', o: ['200', '1,300', '2,000', '13,000'], a: 2 },
    { q: 'Which service is NOT mentioned?', o: ['Paying utility bills', 'Sending packages', 'Buying train tickets', 'Opening a bank account'], a: 3 },
    { q: 'Why do some people feel safer because of convenience stores?', o: ['Police officers work there', 'The stores are open and brightly lit at night', 'The stores sell first-aid supplies', 'The stores have security cameras outside'], a: 1 },
    { q: 'What concern does the speaker raise?', o: ['Prices are rising', 'Employees work long, hard hours', 'There is too much packaging', 'Students spend too much money'], a: 1 }
  ]
},
{
  id: 'L09', type: 'chart', unit: 5, title: '學生睡眠調查',
  intro: 'You will listen to a report and look at a chart.',
  speakers: { N: { name: '記者', g: 'f' } },
  chart: { title: '學生平日平均睡眠時間', unit: '小時', max: 10, ref: { v: 8, label: '醫生建議最少 8 小時' },
    items: [ ['小學五、六年級', 9.1], ['國中一年級', 8.3], ['國中二年級', 7.8], ['國中三年級', 7.1] ] },
  lines: [
    ['N', '根據一項最新的調查，臺灣學生的睡眠時間會隨著年級增加而減少。小學高年級的學生平日平均睡九點一個小時，到了國中三年級，只剩下七點一個小時。'],
    ['N', '醫生建議，十三到十八歲的青少年每天應該睡八到十個小時。'],
    ['N', '調查也發現，學生睡不夠的主要原因有三個：補習班下課太晚、功課太多，以及睡前使用手機。'],
    ['N', '專家建議，學生睡前一個小時最好不要看手機，家長也可以和孩子一起訂出固定的上床時間。']
  ],
  questions: [
    { q: 'What is the main idea of the report?', o: ['Students sleep less as they move up in grade', 'Students sleep more on weekends', 'Doctors disagree about how much sleep teens need', 'Cram schools are closing earlier'], a: 0 },
    { q: 'According to the chart and the report, which students sleep less than the recommended minimum?', o: ['Fifth and sixth graders', 'Seventh graders only', 'Eighth and ninth graders', 'All of the groups'], a: 2 },
    { q: 'How much less do ninth graders sleep than upper-elementary students?', o: ['About 1 hour', 'About 2 hours', 'About 3 hours', 'About 4 hours'], a: 1 },
    { q: 'Which is NOT given as a reason students do not get enough sleep?', o: ['Cram school ends late', 'Too much homework', 'Using phones before bed', 'Playing sports in the evening'], a: 3 },
    { q: 'What do experts suggest?', o: ['Taking naps at school', 'Avoiding phones for an hour before bed', 'Drinking milk at night', 'Doing homework in the morning'], a: 1 }
  ]
},
{
  id: 'L10', type: 'chart', unit: 2, title: '年輕人為什麼學外語',
  intro: 'You will listen to part of a radio program and look at a chart.',
  speakers: { N: { name: '主持人', g: 'm' } },
  chart: { title: '18–30 歲年輕人學外語的原因', unit: '%', max: 40,
    items: [ ['出國旅行', 35], ['將來的工作', 28], ['對外國文化有興趣', 22], ['準備考試', 15] ] },
  lines: [
    ['N', '歡迎收聽《語言新世界》。最近我們訪問了一千位十八到三十歲的年輕人，問他們學外語的原因。'],
    ['N', '大家可以看看這張圖：最多人是為了出國旅行，佔百分之三十五；第二是為了將來的工作，佔百分之二十八；因為對外國文化有興趣，例如喜歡看日劇、聽韓國流行歌的，佔百分之二十二；另外百分之十五是為了考試。'],
    ['N', '有趣的是，跟十年前比起來，為了興趣而學外語的人增加了一倍。'],
    ['N', '我認為，網路讓年輕人更容易接觸到外國的電影和音樂，學語言也變得更輕鬆、更有趣了。'],
    ['N', '下一集，我們會邀請一位會說六種語言的大學生，來跟大家分享他的學習方法。']
  ],
  questions: [
    { q: 'What does the chart show?', o: ['Which languages young people study', 'Why young people learn foreign languages', 'How long it takes to learn a language', 'Where young people travel'], a: 1 },
    { q: 'What is the most common reason?', o: ['Travel', 'Work', 'Interest in foreign culture', 'Exams'], a: 0 },
    { q: 'What percentage learn a foreign language to prepare for exams?', o: ['15%', '22%', '28%', '35%'], a: 0 },
    { q: 'According to the host, why has learning for interest increased?', o: ['Schools require more languages', 'The internet makes foreign films and music easier to access', 'Travel has become cheaper', 'Companies pay for language classes'], a: 1 },
    { q: 'Who will be featured in the next episode?', o: ['A language teacher', 'A travel writer', 'A college student who speaks six languages', 'A Korean pop singer'], a: 2 }
  ]
}
];
