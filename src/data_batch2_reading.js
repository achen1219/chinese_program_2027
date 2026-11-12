// Batch 2 (Nov 2026): 21 more reading sets, R10–R30, bringing every task type to six sets.
// Interleaved by type so the daily commute list rotates. Same format as data_reading.js.
APZH.reading.push(
{
  id: 'R10', type: 'lit', unit: 1, title: '爸爸的便當',
  intro: 'Read the following passage.',
  paras: [
    '上小學的時候，我的便當總是和別人不一樣。同學的便當盒裡裝著三明治和洋芋片，我的卻是白飯、滷蛋和炒青菜。每次打開蓋子，就有同學捏著鼻子問：「那是什麼味道？」',
    '我開始把便當藏在書包最下面，回家以後再偷偷倒掉。有一天，爸爸在垃圾桶裡發現了沒吃的飯菜。他什麼也沒說，只是看了我一眼，就走進廚房。',
    '第二天早上，我的便當盒裡多了一張小紙條，上面寫著：「今天的滷蛋，爸爸滷了三個小時。吃不完沒關係，可是不要丟掉爸爸的心意。」',
    '那天中午，我第一次在同學面前把便當吃完。坐在旁邊的大衛好奇地問我能不能嘗一口滷蛋。他吃完以後睜大眼睛說：「你爸爸可以開餐廳了！」',
    '現在我上高中了，還是每天帶爸爸做的便當。我終於明白，便當裡裝的不只是飯菜，還有爸爸說不出口的愛。'
  ],
  questions: [
    { q: 'Why did the narrator hide the lunch box at first?', o: ['Classmates reacted badly to how different it was', 'The food was often cold', 'The lunch box was too heavy', 'The teacher did not allow home lunches'], a: 0 },
    { q: 'What did the father do after finding the thrown-away food?', o: ['He scolded the narrator', 'He said nothing and put a note in the lunch box the next day', 'He stopped making lunch', 'He called the school'], a: 1 },
    { q: 'What can be inferred from the father’s note?', o: ['He wanted the narrator to cook', 'He planned to open a restaurant', 'He had put great effort into the food and was hurt, but understanding', 'He thought the narrator ate too little'], a: 2 },
    { q: 'How did David react after tasting the braised egg?', o: ['He held his nose', 'He asked for the recipe', 'He laughed at the narrator', 'He was very impressed'], a: 3 },
    { q: 'What is the main message of the passage?', o: ['Children should learn to cook', 'A homemade lunch can carry a parent’s unspoken love', 'School lunches should be healthier', 'Friends should share their food'], a: 1 }
  ]
},
{
  id: 'R11', type: 'article', unit: 5, title: '公共自行車',
  intro: 'Read the following article.',
  paras: [
    '在臺灣的許多城市，街上到處看得到公共自行車。市民只要用悠遊卡或手機，就能在任何一個車站借車，騎到目的地以後，再把車還到附近的車站。',
    '公共自行車受歡迎的原因很多。首先，費用便宜，前三十分鐘只要幾塊錢。其次，很多車站就設在捷運站和公車站旁邊，下了車可以直接騎車回家，解決了「最後一公里」的問題。此外，騎車不排放廢氣，對環境也有好處。',
    '不過，公共自行車也有一些問題。上下班時間，熱門車站的車常常被借光；有的人騎車不遵守交通規則，在人行道上騎得很快，讓行人覺得很危險。',
    '為了解決這些問題，市政府一方面增加車站和車輛，另一方面也在學校推廣騎車安全教育。有了更完善的設施和守規矩的騎士，公共自行車才能真正成為城市交通的好幫手。'
  ],
  questions: [
    { q: 'What is the article mainly about?', o: ['How to repair a bicycle', 'Why public bicycles are popular and what problems they face', 'The history of the metro', 'A new traffic law'], a: 1 },
    { q: 'What does 「最後一公里」 refer to?', o: ['The short distance between a transit station and one’s destination', 'The last part of a bicycle race', 'The longest route in the city', 'A discount for short rides'], a: 0 },
    { q: 'Which benefit is NOT mentioned in the article?', o: ['The fee is low', 'Stations are close to public transit', 'Riding does not produce exhaust', 'Riding is faster than taking the metro'], a: 3 },
    { q: 'What problem occurs during rush hour?', o: ['The fee goes up', 'Stations close early', 'Popular stations run out of bicycles', 'Bicycles are not allowed on the roads'], a: 2 },
    { q: 'According to the last paragraph, what is needed for public bicycles to work well?', o: ['Lower prices and more advertising', 'Better facilities and riders who follow the rules', 'Fewer stations near schools', 'A ban on riding at night'], a: 1 }
  ]
},
{
  id: 'R12', type: 'artchart', unit: 4, title: '青少年上網買東西',
  intro: 'Read the following article and chart.',
  chart: { title: '青少年在網路上最常買的東西', unit: '%', max: 40,
    items: [ ['衣服和鞋子', 36], ['文具和書', 22], ['電子產品', 18], ['零食和飲料', 14], ['其他', 10] ] },
  paras: [
    '網路購物已經成為年輕人生活的一部分。根據一項針對一千名十三到十八歲青少年的調查，有八成的人曾經在網路上買過東西，其中最常買的是衣服和鞋子。',
    '青少年喜歡網路購物，主要是因為價錢比較便宜、選擇比較多，而且不用出門。但是調查也發現，有四成五的人買過「跟圖片不一樣」的商品，還有三成的人曾經因為一時衝動，買了根本用不到的東西。',
    '消費者保護團體提醒，在網路上買東西以前，應該先看看其他買家的評價，並且確認能不能退貨。另外，未成年人購物最好先和父母商量，不要隨便把個人資料告訴別人。'
  ],
  questions: [
    { q: 'What is the main purpose of the article?', o: ['To describe teenagers’ online shopping habits and give advice', 'To advertise an online store', 'To explain how to return a product', 'To compare prices in stores and online'], a: 0 },
    { q: 'According to the chart, what do teenagers buy second most often?', o: ['Clothes and shoes', 'Stationery and books', 'Electronics', 'Snacks and drinks'], a: 1 },
    { q: 'Which statement is supported by the article and the chart?', o: ['Most teenagers have never shopped online', 'Electronics are the most popular purchase', 'Clothes and shoes are what more than a third of teenagers buy most often', 'Snacks are bought more often than books'], a: 2 },
    { q: 'What problem had forty-five percent of the teenagers experienced?', o: ['Their package never arrived', 'They paid twice for one item', 'Their personal information was stolen', 'The item they received did not match the picture'], a: 3 },
    { q: 'What does the consumer group advise shoppers to do before buying?', o: ['Pay in cash only', 'Read other buyers’ reviews and check whether returns are allowed', 'Buy only from stores abroad', 'Wait for a holiday sale'], a: 1 }
  ]
},
{
  id: 'R13', type: 'corr', unit: 5, title: '大學的第一個月',
  intro: 'Read the following email.',
  meta: { from: '雅文', to: '小弟', subject: '大學的第一個月' },
  paras: [
    '小弟：',
    '好久沒寫信給你了。我到臺中念大學已經一個月了，一切都還在慢慢適應。宿舍是四個人一間，我的室友來自不同的地方，有一位是從馬來西亞來的僑生，她的中文、英文和馬來文都說得很好，常常教我們幾句馬來話。',
    '大學和高中最大的不同，是沒有人管你。早上沒有人叫你起床，功課也沒有人催。剛開始我覺得很自由，結果第一個星期就遲到了兩次，還忘了交一份報告。現在我學會用手機的行事曆，把每天要做的事記下來。',
    '我參加了登山社，上個週末第一次跟社團去爬合歡山。雖然累得腿都快斷了，可是在山頂看到日出的那一刻，覺得一切都值得。',
    '你明年也要上高中了，我的建議是：早一點學會自己安排時間，將來會輕鬆很多。媽媽說你最近迷上打電動，要適可而止喔！',
    '寒假回家再聊。',
    '姊姊　雅文'
  ],
  questions: [
    { q: 'Why did Yawen write this email?', o: ['To ask her brother for help with a report', 'To share her first month of college and give some advice', 'To invite her brother to climb a mountain', 'To complain about her roommates'], a: 1 },
    { q: 'What do we learn about one of her roommates?', o: ['She is an overseas student from Malaysia who speaks three languages', 'She is the president of the hiking club', 'She is often late for class', 'She teaches English at the university'], a: 0 },
    { q: 'What problem did Yawen have in her first week?', o: ['She got lost on campus', 'She argued with a roommate', 'She was late twice and forgot to hand in a report', 'She lost her phone'], a: 2 },
    { q: 'How did Yawen feel at the top of the mountain?', o: ['She regretted joining the club', 'She was too tired to enjoy it', 'She was afraid of the height', 'She felt the hard climb had been worth it'], a: 3 },
    { q: 'In the fourth paragraph, 「適可而止」 most nearly means', o: ['to try harder', 'to know when to stop', 'to start right away', 'to ask for permission'], a: 1 }
  ]
},
{
  id: 'R14', type: 'promo', unit: 3, title: '青少年國樂團音樂會',
  intro: 'Read the following poster.',
  ad: [
    ['h', '青少年國樂團　年度音樂會「絲竹新聲」'],
    ['li', '時間：十二月十九日（星期六）晚上 7:30（7:00 開放入場）'],
    ['li', '地點：市立文化中心音樂廳'],
    ['li', '曲目：傳統名曲《茉莉花》、《彩雲追月》，以及用二胡、琵琶演奏的電影配樂'],
    ['li', '票價：全票 300 元、學生票 150 元；六歲以下兒童請勿入場'],
    ['b', '會前導聆'],
    ['li', '當天晚上 6:45，指揮將在大廳介紹樂器和曲目，免費參加'],
    ['star', '優惠：十二月五日以前購票，全票、學生票一律八折；十人以上團體七折'],
    ['star', '購票方式：文化中心售票處，或上網訂票（網路訂票每張加收 20 元手續費）'],
    ['star', '注意事項：演出中請關閉手機，禁止錄音、錄影；遲到的觀眾須等到中場休息才能入場']
  ],
  questions: [
    { q: 'What is being advertised?', o: ['A music class for children', 'A concert by a youth Chinese orchestra', 'A film festival', 'A sale of musical instruments'], a: 1 },
    { q: 'Besides traditional pieces, what will be performed?', o: ['Film music played on traditional instruments', 'Popular songs sung by the audience', 'A piano concerto', 'A new opera'], a: 0 },
    { q: 'A student buys one ticket at the box office on December 1. How much does it cost?', o: ['NT$105', 'NT$120', 'NT$140', 'NT$150'], a: 1 },
    { q: 'What happens to audience members who arrive late?', o: ['They get a refund', 'They may enter quietly at any time', 'They must wait until the intermission to enter', 'They must buy a new ticket'], a: 2 },
    { q: 'What is true about the pre-concert talk?', o: ['It requires a separate ticket', 'It is held after the concert', 'It is only for young children', 'The conductor introduces the instruments and the pieces'], a: 3 }
  ]
},
{
  id: 'R15', type: 'lit', unit: 2, title: '歪歪的「春」字',
  intro: 'Read the following passage.',
  paras: [
    '每年除夕前幾天，外公都會在客廳的大桌子上鋪好紅紙，磨好墨，準備寫春聯。小時候的我，總是趴在桌邊看他寫字。毛筆在他手裡好像有了生命，一筆一畫，又穩又有力。',
    '十歲那年，外公第一次讓我試試看。我拿起毛筆，手卻抖個不停，寫出來的「春」字歪歪斜斜，像一隻喝醉的螃蟹。我氣得把紙揉成一團。',
    '外公撿起紙團，慢慢攤開，笑著說：「字跟人一樣，要先站得穩，才能走得好。你太急了。」他握著我的手，帶著我一筆一筆地寫。我感覺到他手心的溫度，也感覺到筆尖落在紙上的輕重。',
    '那一年，我們家的大門上貼著外公寫的春聯，我房間的門上，則貼著那個歪歪的「春」字。外公說，那是全家最有精神的一個字。',
    '外公去年過世了。今年除夕，我鋪好紅紙，磨好墨，寫下了一個「春」字。它還是不夠漂亮，可是我知道，外公一定會說：「站得很穩。」'
  ],
  questions: [
    { q: 'What tradition does the passage describe?', o: ['Writing spring couplets with a brush before Lunar New Year', 'Painting eggs in spring', 'Making red lanterns', 'Giving red envelopes'], a: 0 },
    { q: 'Why did the narrator crumple the paper?', o: ['The ink had spilled', 'The narrator was frustrated with the badly written character', 'The grandfather asked for it', 'The paper was the wrong color'], a: 1 },
    { q: 'What did the grandfather mean by 「要先站得穩，才能走得好」?', o: ['The narrator should stand up while writing', 'Children should exercise more', 'One must patiently master the basics before doing well', 'Writing quickly is the key to good calligraphy'], a: 2 },
    { q: 'Where was the narrator’s character put up?', o: ['On the front door', 'In the living room', 'In the grandfather’s study', 'On the narrator’s bedroom door'], a: 3 },
    { q: 'What does the ending suggest?', o: ['The narrator has given up calligraphy', 'The narrator carries on the tradition and remembers the grandfather’s teaching', 'The narrator now writes better than the grandfather', 'The family no longer celebrates the New Year'], a: 1 }
  ]
},
{
  id: 'R16', type: 'article', unit: 2, title: '有趣的諧音',
  intro: 'Read the following article.',
  paras: [
    '中文裡有很多發音相同或相近的字，這種現象叫做「諧音」。諧音不只讓中文變得有趣，也影響了華人的許多習俗。',
    '過年的時候，餐桌上一定要有魚，因為「魚」和「餘」同音，代表「年年有餘」。許多人喜歡把「福」字倒過來貼，因為「倒」和「到」同音，意思是「福到了」。探望病人的時候，送蘋果很合適，因為「蘋」和「平」同音，有祝福對方平安的意思。',
    '不過，諧音也帶來了不少禁忌。送禮的時候不能送時鐘，因為「送鐘」聽起來像「送終」；情人不能分吃一個梨，因為「分梨」和「分離」同音。很多醫院和大樓沒有四樓，也是因為「四」聽起來像「死」。',
    '年輕一代也用諧音創造了新的網路用語，例如用數字「五二〇」表示「我愛你」，用「八八」表示「再見」。',
    '從這些例子可以看出，語言不只是溝通的工具，也反映了人們對幸福的期待和對不幸的害怕。了解諧音，就更能了解華人文化。'
  ],
  questions: [
    { q: 'What is the main idea of the article?', o: ['Chinese is hard to pronounce', 'Words that sound alike have shaped customs, taboos and new slang', 'Young people no longer follow traditions', 'Numbers are unlucky in Chinese culture'], a: 1 },
    { q: 'Why is fish served at the New Year’s table?', o: ['The word for fish sounds like the word for surplus', 'Fish is the most expensive dish', 'Fish is easy to cook for many people', 'Fish is believed to bring good health'], a: 0 },
    { q: 'According to the article, which is a suitable gift for someone who is ill?', o: ['A clock', 'A pear to share', 'Apples', 'Four flowers'], a: 2 },
    { q: 'Why do many buildings have no fourth floor?', o: ['Building rules do not allow it', 'The fourth floor is used for storage', 'It is cheaper to skip a floor', 'The word for four sounds like the word for death'], a: 3 },
    { q: 'What is the purpose of the fourth paragraph?', o: ['To criticize internet slang', 'To show that young people keep creating expressions based on similar sounds', 'To explain how to write numbers in Chinese', 'To compare Chinese with other languages'], a: 1 }
  ]
},
{
  id: 'R17', type: 'artchart', unit: 6, title: '高鐵帶來的改變',
  intro: 'Read the following article and chart.',
  chart: { title: '從臺北到高雄大約需要的時間', unit: '小時', max: 6,
    items: [ ['高鐵', 2], ['開車', 4], ['火車', 4.5], ['客運', 5] ] },
  paras: [
    '二〇〇七年，臺灣高速鐵路正式通車，把臺北到高雄的時間從四個多小時縮短到兩個小時以內。臺灣西部從此進入「一日生活圈」的時代。',
    '高鐵改變了許多人的生活方式。住在臺中的上班族，可以每天坐高鐵到臺北上班；住在北部的遊客，可以早上出發到南部看展覽、吃小吃，晚上再回家。',
    '然而，高鐵也帶來了一些影響。由於搭高鐵又快又方便，臺灣西部的國內航線乘客大量減少，後來幾乎全部停飛。另外，高鐵的票價比火車和客運貴，對學生來說是不小的負擔。',
    '從圖表可以看到，客運雖然最慢，卻因為票價最便宜，仍然受到學生的歡迎。交通專家認為，不同的交通工具各有優點，旅客可以依照自己的時間和預算來選擇。'
  ],
  questions: [
    { q: 'What is the article mainly about?', o: ['How high-speed rail changed travel and life in western Taiwan', 'How to buy a train ticket', 'Why buses are disappearing', 'The cost of building a railway'], a: 0 },
    { q: 'What does 「一日生活圈」 mean?', o: ['People work only one day a week', 'People can travel between cities and return within a day', 'Every city has a one-day festival', 'Trains run for only one day'], a: 1 },
    { q: 'According to the chart, about how much time does high-speed rail save compared with the regular train?', o: ['About 1 hour', 'About 2 hours', 'About 2.5 hours', 'About 3 hours'], a: 2 },
    { q: 'What was one effect of high-speed rail?', o: ['Train tickets became cheaper', 'More people moved to the east coast', 'Highways were closed', 'Domestic flights in the west lost most of their passengers'], a: 3 },
    { q: 'Why do many students still take the bus?', o: ['It is the fastest', 'It is the cheapest', 'It is the most comfortable', 'It stops at their schools'], a: 1 }
  ]
},
{
  id: 'R18', type: 'corr', unit: 6, title: '暑期交流計畫錄取通知',
  intro: 'Read the following letter.',
  meta: { from: '國際教育中心', to: '林同學', subject: '暑期交流計畫錄取通知' },
  paras: [
    '林同學，您好：',
    '恭喜您！經過書面審查和面試，您已經錄取本中心今年的「新加坡暑期交流計畫」。本計畫將於七月六日出發，七月二十六日回國，一共三個星期。',
    '在新加坡期間，您將住在當地的寄宿家庭，週一到週五上午在當地中學上課，下午參加文化活動，例如參觀小印度和牛車水、學做海南雞飯、訪問當地的雙語學校。週末則由寄宿家庭安排。',
    '請您在四月三十日以前完成以下三件事：一、上網填寫健康調查表；二、繳交護照影本；三、繳交費用新臺幣四萬五千元（包含機票、保險和學費，不包含個人零用錢）。家庭經濟有困難的同學可以申請獎學金，申請表請在四月十五日以前交到本中心。',
    '五月二十日（星期六）上午十點，我們將在本中心舉辦行前說明會，請您和一位家長務必參加。',
    '如有任何問題，歡迎來信詢問。',
    '國際教育中心　敬上'
  ],
  questions: [
    { q: 'What is the main purpose of the letter?', o: ['To invite the student to an interview', 'To tell the student of acceptance and explain the next steps', 'To advertise a summer camp', 'To ask the student’s family to host a visitor'], a: 1 },
    { q: 'How long is the program?', o: ['Three weeks', 'One month', 'Six weeks', 'Two months'], a: 0 },
    { q: 'What will students do on weekday afternoons?', o: ['Attend classes at a local school', 'Stay with their host families', 'Take part in cultural activities', 'Have free time on their own'], a: 2 },
    { q: 'What is NOT included in the fee?', o: ['Airfare', 'Insurance', 'Tuition', 'Personal spending money'], a: 3 },
    { q: 'What must a student who wants a scholarship do?', o: ['Attend an extra interview', 'Hand in the application by April 15', 'Write a letter to the host family', 'Pay the full fee first'], a: 1 }
  ]
},
{
  id: 'R19', type: 'promo', unit: 1, title: '食物銀行招募志工',
  intro: 'Read the following notice.',
  ad: [
    ['h', '社區食物銀行　招募青少年志工'],
    ['li', '服務內容：整理捐贈的食物、檢查保存期限、把食物包裝成「愛心箱」'],
    ['li', '服務時間：每週六上午 9:00–12:00，或每週三下午 4:00–6:00（可以只選一個時段）'],
    ['li', '服務地點：社區活動中心一樓'],
    ['li', '報名資格：十二歲到十八歲；十四歲以下須有家長陪同'],
    ['b', '志工可以得到'],
    ['li', '服務滿 20 小時，發給服務證明'],
    ['li', '每次服務提供點心和飲料'],
    ['star', '行前訓練：第一次服務以前，必須先參加一小時的食品安全課程（每月第一個週六上午 8:00）'],
    ['star', '報名方式：填寫網路報名表，或打電話到活動中心'],
    ['star', '特別需要：會說臺語或客家話的志工，幫忙和長輩溝通']
  ],
  questions: [
    { q: 'What is the purpose of the notice?', o: ['To recruit teenage volunteers for a food bank', 'To ask for food donations', 'To advertise a cooking class', 'To announce a food safety inspection'], a: 0 },
    { q: 'Which task will volunteers do?', o: ['Deliver food by bicycle', 'Check expiration dates and pack food boxes', 'Cook meals for the elderly', 'Collect money from neighbors'], a: 1 },
    { q: 'Who must be accompanied by a parent?', o: ['All volunteers', 'Volunteers who work on Wednesdays', 'Volunteers aged fourteen or younger', 'Volunteers who do not speak Taiwanese'], a: 2 },
    { q: 'A volunteer serves every Saturday morning. After how many Saturdays will the volunteer first qualify for a service certificate?', o: ['Five', 'Six', 'Seven', 'Ten'], a: 2 },
    { q: 'Why does the food bank especially want volunteers who speak Taiwanese or Hakka?', o: ['To translate the notice', 'To teach the other volunteers', 'To answer the telephone', 'To communicate with elderly people'], a: 3 }
  ]
},
{
  id: 'R20', type: 'lit', unit: 2, title: '塞翁失馬',
  intro: 'Read the following story.',
  paras: [
    '從前，在北方的邊境住著一位老人，大家都叫他塞翁。有一天，他養的一匹馬不知道為什麼跑到了邊境外面，再也沒有回來。鄰居們都來安慰他，塞翁卻說：「丟了一匹馬，怎麼知道不是一件好事呢？」',
    '過了幾個月，那匹馬竟然自己回來了，還帶回了一匹又高又壯的駿馬。鄰居們紛紛來向他道賀，塞翁卻皺著眉頭說：「白白得到一匹好馬，怎麼知道不是一件壞事呢？」',
    '塞翁的兒子非常喜歡那匹駿馬，天天騎著牠出去玩。有一天，他從馬背上摔下來，摔斷了腿。鄰居們又來安慰塞翁，塞翁還是平靜地說：「這怎麼知道不是一件好事呢？」',
    '一年以後，邊境發生了戰爭，村子裡的年輕人都被叫去打仗，很多人再也沒有回來。塞翁的兒子因為腿不方便，留在家裡，父子兩人平安地活了下來。',
    '後來，人們用「塞翁失馬，焉知非福」這句話來說明：好事和壞事常常會互相轉變，遇到不順利的事，不必太難過。'
  ],
  questions: [
    { q: 'How did the old man react when he lost his horse?', o: ['He blamed his neighbors', 'He stayed calm and said it might turn out well', 'He searched for it day and night', 'He bought a new horse'], a: 1 },
    { q: 'Why did the neighbors congratulate him?', o: ['His horse came back and brought a fine horse with it', 'His son won a horse race', 'He sold his horse for a high price', 'The war had ended'], a: 0 },
    { q: 'What happened to the old man’s son?', o: ['He ran away with the horse', 'He became a soldier', 'He fell from the horse and broke his leg', 'He moved across the border'], a: 2 },
    { q: 'Why did the son survive the war?', o: ['He was a skilled rider', 'His father hid him in the mountains', 'The war never reached the village', 'His injured leg kept him from being sent to fight'], a: 3 },
    { q: 'What lesson does the story teach?', o: ['Horses bring both wealth and danger', 'Good and bad fortune can turn into each other, so setbacks need not upset us too much', 'Neighbors cannot be trusted', 'Old people are always right'], a: 1 }
  ]
},
{
  id: 'R21', type: 'article', unit: 3, title: '翠玉白菜',
  intro: 'Read the following article.',
  paras: [
    '走進臺北的故宮博物院，最多遊客排隊想看的，不是巨大的青銅器，也不是名家的書畫，而是一棵用玉石雕成的白菜，叫做「翠玉白菜」。',
    '這件作品來自清朝，長度還不到十九公分，比一支手機大不了多少。它最特別的地方，是工匠巧妙地利用了玉石本來的顏色：白色的部分雕成菜梗，綠色的部分雕成菜葉，看起來就像一棵剛從菜園裡拔出來的新鮮白菜。',
    '仔細看，菜葉上還停著兩隻小昆蟲。在傳統文化裡，白菜象徵「清白」，而這兩種昆蟲繁殖力很強，代表「多子多孫」。因此，許多學者認為，這件作品可能是一位清朝妃子的嫁妝。',
    '有趣的是，白菜是華人餐桌上最普通的蔬菜，工匠卻選擇用珍貴的玉石來表現它。這說明，藝術的價值不一定來自特別的題材；日常生活中最平凡的東西，只要有巧思和好的技術，也能成為動人的作品。'
  ],
  questions: [
    { q: 'What is the article mainly about?', o: ['A famous jade carving and what makes it special', 'How to grow cabbage', 'The history of a museum', 'A Qing dynasty wedding'], a: 0 },
    { q: 'What is most special about the work?', o: ['It is the largest piece in the museum', 'The craftsman used the natural colors of the jade for the stalk and the leaves', 'It was made by a famous painter', 'It is more than two thousand years old'], a: 1 },
    { q: 'What do the two insects on the leaves represent?', o: ['Hard work', 'Long life', 'Having many children and grandchildren', 'A good harvest'], a: 2 },
    { q: 'Why do scholars think the work may have been part of a dowry?', o: ['It was found in a bride’s tomb', 'A letter about it has been found', 'It was very expensive', 'Its symbols of purity and many descendants suit a bride'], a: 3 },
    { q: 'What point does the author make in the last paragraph?', o: ['Jade is too valuable for ordinary subjects', 'Ordinary things can become moving art through ingenuity and skill', 'Museums should show more everyday objects', 'Vegetables are important in Chinese cooking'], a: 1 }
  ]
},
{
  id: 'R22', type: 'artchart', unit: 1, title: '長輩和誰住在一起',
  intro: 'Read the following article and chart.',
  chart: { title: '六十五歲以上長輩的居住方式', unit: '%', max: 50,
    items: [ ['和子女同住', 48], ['只和配偶同住', 26], ['獨居', 14], ['住在養老院', 5], ['其他', 7] ] },
  paras: [
    '在傳統的華人社會，父母年紀大了以後和兒子、媳婦、孫子住在一起，是很自然的事，這種家庭叫做「三代同堂」。然而，隨著社會的改變，長輩的居住方式也越來越多樣。',
    '根據一項調查，目前仍有將近一半的長輩和子女同住，但是比例比二十年前少了很多。只和配偶同住以及獨居的長輩，加起來已經有四成。',
    '為什麼會有這樣的變化？一方面，許多年輕人到大城市或國外工作，沒辦法住在父母身邊；另一方面，現在的長輩身體比較健康，也比較重視自己的生活空間。一位七十歲的奶奶說：「住得近比住在一起好，想孫子的時候去看看，又不會互相打擾。」',
    '不過，獨居的長輩如果生病或跌倒，可能沒有人馬上發現。因此，有些社區成立了關懷站，由志工每天打電話或上門問候，讓長輩即使不和子女同住，也能得到照顧。'
  ],
  questions: [
    { q: 'What is the main idea of the article?', o: ['Nursing homes are becoming popular', 'The living arrangements of older people are becoming more varied', 'Young people no longer care about their parents', 'Three-generation families have disappeared'], a: 1 },
    { q: 'According to the chart, which living arrangement is most common?', o: ['Living with their children', 'Living only with a spouse', 'Living alone', 'Living in a nursing home'], a: 0 },
    { q: 'According to the chart, what percentage of older people live either alone or only with a spouse?', o: ['14%', '26%', '40%', '48%'], a: 2 },
    { q: 'What does the seventy-year-old grandmother’s remark suggest?', o: ['She feels lonely living alone', 'She wants to move to a big city', 'She dislikes her grandchildren’s visits', 'She prefers to live near her family but not with them'], a: 3 },
    { q: 'What do the community care stations do?', o: ['They provide housing for older people', 'Volunteers call or visit older people every day', 'They teach older people to use phones', 'They find jobs for young people'], a: 1 }
  ]
},
{
  id: 'R23', type: 'corr', unit: 2, title: '檳城的新年',
  intro: 'Read the following letter.',
  meta: { from: '麗雯', to: '小安', subject: '我們這裡怎麼過新年' },
  paras: [
    '小安：',
    '收到你的信真開心！你問我馬來西亞的華人怎麼過農曆新年，我來告訴你幾件有趣的事。',
    '除夕晚上，我們全家一定會回到爺爺奶奶在檳城的老家吃團圓飯。吃飯以前有一個特別的活動，叫做「撈生」。桌子中間放一大盤生魚片和切成絲的蔬菜，全家人站起來，用筷子把菜高高地夾起來，一邊夾一邊大聲說吉祥話。聽說夾得越高，新的一年就越順利。每次撈完，桌上總是亂七八糟的，可是大家都笑得很開心。',
    '還有一個習慣你可能沒聽過：新年期間，很多家庭會「開放門戶」，請朋友和鄰居到家裡來坐坐、吃點心。我的馬來同學和印度同學都會來我家拜年，我們也會在他們過節的時候去他們家。媽媽說，這樣大家才會越來越了解彼此的文化。',
    '對了，我們這裡一年到頭都是夏天，所以過年的時候穿的是短袖的新衣服。你們那裡過年會下雪嗎？下次寫信的時候，寄幾張照片給我看看吧！',
    '祝　新年快樂',
    '麗雯'
  ],
  questions: [
    { q: 'What is the main purpose of the letter?', o: ['To describe how Chinese families in Malaysia celebrate Lunar New Year', 'To invite Xiaoan to Penang', 'To ask about the weather where Xiaoan lives', 'To share a recipe'], a: 0 },
    { q: 'What do people do during 「撈生」?', o: ['Cook fish soup together', 'Toss fish and vegetables high with chopsticks while saying lucky phrases', 'Give red envelopes to children', 'Clean the table before dinner'], a: 1 },
    { q: 'Why do people try to lift the food high?', o: ['To mix the sauce well', 'To show off their chopstick skills', 'They believe it brings a smoother year', 'To keep the food away from children'], a: 2 },
    { q: 'According to Liwen’s mother, what is good about the open-house custom?', o: ['It saves money on food', 'It lets children collect more red envelopes', 'It keeps the house clean', 'It helps people understand each other’s cultures'], a: 3 },
    { q: 'What can be inferred about where Liwen lives?', o: ['It snows at New Year', 'It is hot all year round', 'It is far from her grandparents’ home', 'Few Chinese families live there'], a: 1 }
  ]
},
{
  id: 'R24', type: 'promo', unit: 4, title: '圖書館電子書',
  intro: 'Read the following notice.',
  ad: [
    ['h', '市立圖書館　電子書借閱服務　全新上線'],
    ['li', '只要有借書證，就能用手機、平板或電腦免費借閱三萬多本電子書和有聲書'],
    ['li', '每人每次最多借 6 本，借期 14 天；到期自動歸還，不必擔心逾期罰款'],
    ['li', '熱門書籍可以預約，輪到你的時候會用電子郵件通知'],
    ['b', '三個步驟開始閱讀'],
    ['li', '一、下載「市圖電子書」應用程式'],
    ['li', '二、輸入借書證號碼和密碼'],
    ['li', '三、選一本書，按「借閱」'],
    ['star', '還沒有借書證？帶學生證或身分證到任何一間分館辦理，五分鐘就能完成'],
    ['star', '暑假閱讀挑戰：七、八月借閱滿 10 本，就能參加抽獎，獎品是平板電腦一台'],
    ['star', '小提醒：有聲書很適合在通勤的時候聽，請記得戴耳機']
  ],
  questions: [
    { q: 'What is the purpose of the notice?', o: ['To announce new library hours', 'To introduce the library’s e-book lending service', 'To sell tablets', 'To recruit library volunteers'], a: 1 },
    { q: 'What happens when the loan period ends?', o: ['The book is returned automatically', 'The reader pays a small fine', 'The reader must visit a branch', 'The book can no longer be borrowed'], a: 0 },
    { q: 'What does a reader need in order to use the service?', o: ['A credit card', 'A new tablet', 'A library card', 'A letter from school'], a: 2 },
    { q: 'How can a reader enter the prize drawing?', o: ['Apply for a library card in July', 'Reserve a popular book', 'Download the app', 'Borrow ten books during July and August'], a: 3 },
    { q: 'When does the notice suggest listening to audiobooks?', o: ['Before going to sleep', 'While commuting', 'During class', 'While exercising'], a: 1 }
  ]
},
{
  id: 'R25', type: 'lit', unit: 6, title: '村口的老榕樹',
  intro: 'Read the following passage.',
  paras: [
    '我們村子口有一棵老榕樹。爺爺說，他小的時候，這棵樹就已經那麼大了。夏天的午後，樹下總是坐滿了人：老人下棋，媽媽們聊天，孩子們抓著垂下來的樹根盪來盪去。',
    '去年春天，鄉公所貼出公告，說為了拓寬馬路，要把老榕樹砍掉。消息一傳開，整個村子都安靜了。',
    '開會那天，有人說：「路寬了，車子進出才方便，村子才會進步。」也有人說：「樹砍了，就再也種不回來了。」大人們吵得面紅耳赤，誰也說服不了誰。',
    '這時候，平常很少說話的阿土伯站了起來。他什麼大道理也沒講，只說：「我太太還在的時候，每天傍晚都在樹下等我回家。」會場一下子安靜下來。我看見好幾個大人低下了頭。',
    '後來，馬路還是拓寬了，只是在村子口轉了一個小小的彎，繞過了老榕樹。開車的人經過這裡，都得放慢速度。爺爺說，這樣也好，慢一點，才看得見樹下的人。'
  ],
  questions: [
    { q: 'What role does the banyan tree play in village life?', o: ['It is a gathering place for people of all ages', 'It marks the village’s border', 'It provides fruit for the villagers', 'It is where the village meetings are held'], a: 0 },
    { q: 'Why was the tree going to be cut down?', o: ['It was old and sick', 'To widen the road', 'To build a new office', 'It blocked the sunlight'], a: 1 },
    { q: 'What was the disagreement at the meeting?', o: ['Who should pay for the road', 'Where to plant a new tree', 'Convenience and progress versus keeping something that cannot be replaced', 'Whether children should play under the tree'], a: 2 },
    { q: 'Why did the room fall silent after Uncle Atu spoke?', o: ['He was the village leader', 'He shouted at everyone', 'He announced the final decision', 'His memory reminded people of what the tree meant to them'], a: 3 },
    { q: 'What does the grandfather’s remark at the end suggest?', o: ['Driving slowly is safer for children', 'Slowing down lets people notice what really matters', 'The road should not have been widened', 'Old people dislike cars'], a: 1 }
  ]
},
{
  id: 'R26', type: 'article', unit: 4, title: '有了翻譯軟體，還要學外語嗎？',
  intro: 'Read the following article.',
  paras: [
    '現在，只要拿出手機，對著它說一句話，翻譯軟體就能馬上把這句話變成另一種語言。有人因此認為，將來人們再也不需要辛苦地學習外語了。真的是這樣嗎？',
    '翻譯軟體確實很方便。出國旅行的時候，它可以幫我們問路、點菜；看不懂的外文網頁，按一個鍵就能翻成中文。對於只需要簡單溝通的人來說，翻譯軟體已經夠用了。',
    '然而，語言不只是一個一個的字。同一句「你吃飯了嗎？」，在華人社會裡常常只是打招呼，並不是真的想知道對方吃了沒有。機器可以翻譯字面的意思，卻不一定懂得話裡的感情和文化。此外，朋友之間的玩笑、詩歌裡的美感，也很難靠機器完全表達出來。',
    '更重要的是，學習一種語言的過程，本身就是認識另一種文化、另一種想法的機會。一位語言學教授說：「翻譯軟體像一座橋，可以帶你到對岸；但是只有學會那裡的語言，你才能真正住下來。」',
    '因此，科技也許會改變我們學外語的方式，卻不會讓學外語變得沒有意義。'
  ],
  questions: [
    { q: 'What question does the article explore?', o: ['Which translation software is best', 'Whether translation technology makes learning languages unnecessary', 'How to learn a language quickly', 'Why phones are useful when traveling'], a: 1 },
    { q: 'According to the second paragraph, when is translation software good enough?', o: ['When people only need simple communication', 'When people read poetry', 'When people make friends abroad', 'When people study at a university'], a: 0 },
    { q: 'Why does the author mention 「你吃飯了嗎？」?', o: ['To teach a useful travel phrase', 'To show that machines translate food words badly', 'To show that words can carry cultural meaning beyond their literal sense', 'To explain Chinese eating habits'], a: 2 },
    { q: 'What does the professor’s comparison to a bridge mean?', o: ['Software is expensive to build', 'Learning a language takes as long as building a bridge', 'Translation software will soon be replaced', 'Software can get you by, but real understanding requires learning the language'], a: 3 },
    { q: 'What is the author’s conclusion?', o: ['Schools should stop teaching foreign languages', 'Technology may change how we learn languages, but learning them still matters', 'Translation software should be banned in class', 'Only some languages are worth learning'], a: 1 }
  ]
},
{
  id: 'R27', type: 'artchart', unit: 3, title: '年輕人怎麼聽音樂',
  intro: 'Read the following article and chart.',
  chart: { title: '青少年最常用的聽音樂方式', unit: '%', max: 50,
    items: [ ['串流音樂平台', 46], ['影音網站', 31], ['現場演出', 13], ['廣播', 6], ['CD 或唱片', 4] ] },
  paras: [
    '二十年前，年輕人想聽喜歡的歌，得到唱片行買 CD。現在，只要打開手機，幾千萬首歌隨時都能聽。一項針對青少年的調查顯示，將近八成的人主要透過串流平台和影音網站聽音樂，買 CD 的人已經非常少。',
    '聽音樂的方式改變了，喜歡的音樂也變得更多樣。透過網路，臺灣的學生可以聽到韓國的流行歌、美國的嘻哈，也可以聽到用客家話、原住民語言演唱的歌曲。有些歌手把傳統樂器的聲音加進流行音樂裡，受到年輕人的歡迎。',
    '值得注意的是，雖然在網路上聽歌又方便又便宜，仍然有百分之十三的青少年說，他們最喜歡的是聽現場演出。一位高中生說：「在演唱會上，幾千個人一起唱同一首歌，那種感動是手機給不了的。」',
    '音樂老師認為，不管用什麼方式聽，重要的是學會用心聽。他建議學生偶爾關掉螢幕，閉上眼睛，好好聽完一整首歌。'
  ],
  questions: [
    { q: 'What is the article mainly about?', o: ['How the way young people listen to music has changed', 'How to become a singer', 'Why CDs are better than phones', 'The history of traditional instruments'], a: 0 },
    { q: 'According to the chart, which way of listening is least common?', o: ['Radio', 'CDs or records', 'Live performances', 'Video websites'], a: 1 },
    { q: 'According to the chart, what percentage of teenagers mainly listen to music on video websites?', o: ['13%', '31%', '46%', '77%'], a: 1 },
    { q: 'What does the high school student say about concerts?', o: ['They are too expensive', 'They are too loud', 'The tickets sell out too fast', 'Singing together with thousands of people gives a feeling a phone cannot'], a: 3 },
    { q: 'What does the music teacher recommend?', o: ['Buying more CDs', 'Learning a traditional instrument', 'Sometimes turning off the screen and listening closely to a whole song', 'Listening only to live music'], a: 2 }
  ]
},
{
  id: 'R28', type: 'corr', unit: 4, title: '給客服中心的信',
  intro: 'Read the following email.',
  meta: { from: '陳怡君', to: '快樂購物網客服中心', subject: '商品問題（訂單編號 A20931）' },
  paras: [
    '客服人員您好：',
    '我在十月三日向貴公司訂購了一副無線耳機（訂單編號 A20931）。網頁上寫著「三天內到貨」，但是我一直等到十月十二日才收到商品。',
    '更讓我失望的是，打開盒子以後，我發現耳機的顏色是黑色的，而我訂的是白色。另外，右邊的耳機充電以後完全沒有聲音，我試了好幾次都一樣。',
    '這副耳機是我準備送給弟弟的生日禮物，他的生日是十月十五日，現在已經來不及換貨了。因此，我希望貴公司能夠全額退費，並且負擔退貨的運費。',
    '我已經把商品的照片和訂單資料放在附件裡，請您確認。希望能在三天內收到您的回覆。如果問題沒有解決，我將向消費者保護單位反映。',
    '謝謝您的協助。',
    '陳怡君　敬上'
  ],
  questions: [
    { q: 'Why is the writer sending this email?', o: ['To order another pair of earphones', 'To complain about an order and ask for a refund', 'To thank the company for fast delivery', 'To ask how to charge the earphones'], a: 1 },
    { q: 'Which problem is NOT mentioned in the email?', o: ['The delivery was late', 'The color was wrong', 'One earphone does not work', 'The price was higher than advertised'], a: 3 },
    { q: 'Why does the writer want a refund instead of an exchange?', o: ['There is not enough time before her brother’s birthday', 'She found a cheaper pair elsewhere', 'Her brother does not like earphones', 'The store has no white ones left'], a: 0 },
    { q: 'What will the writer do if the problem is not solved?', o: ['Write a review online', 'Visit the store in person', 'Report it to a consumer protection agency', 'Order from the company again'], a: 2 },
    { q: 'Which best describes the tone of the email?', o: ['Friendly and casual', 'Firm but polite', 'Angry and rude', 'Apologetic'], a: 1 }
  ]
},
{
  id: 'R29', type: 'promo', unit: 6, title: '賞螢生態之旅',
  intro: 'Read the following poster.',
  ad: [
    ['h', '山林夜未眠　賞螢生態之旅'],
    ['li', '活動日期：四月十日至五月十日，每週五、六晚上'],
    ['li', '集合時間、地點：晚上 6:00，自然教育中心門口'],
    ['li', '活動內容：6:00 生態講座 → 7:00 夜間步道導覽 → 8:30 結束'],
    ['li', '費用：大人 250 元，國中以下學生 150 元（含導覽和保險）'],
    ['li', '名額：每場 25 人，請在活動三天前上網報名'],
    ['b', '賞螢三不'],
    ['li', '不使用手電筒和閃光燈（導覽員會提供包著紅色玻璃紙的小燈）'],
    ['li', '不捕捉螢火蟲'],
    ['li', '不大聲說話'],
    ['star', '請穿長袖、長褲和好走的鞋子；不要噴防蚊液，因為會傷害螢火蟲'],
    ['star', '如果下大雨，活動取消，費用全額退還']
  ],
  questions: [
    { q: 'What activity is being advertised?', o: ['A guided night walk to watch fireflies', 'A camping trip in the mountains', 'A class on catching insects', 'A photography contest'], a: 0 },
    { q: 'What happens first?', o: ['A walk along the trail', 'A talk about ecology', 'A group photo', 'A dinner at the center'], a: 1 },
    { q: 'Why are participants asked not to use insect repellent?', o: ['It smells bad', 'It is not allowed in the center', 'It harms the fireflies', 'It attracts mosquitoes'], a: 2 },
    { q: 'Two adults and one elementary school student sign up. What is the total cost?', o: ['NT$550', 'NT$650', 'NT$700', 'NT$750'], a: 1 },
    { q: 'What happens if it rains heavily?', o: ['The talk is held indoors only', 'The walk is moved to the next evening', 'Participants receive a discount', 'The activity is canceled and the fee is refunded in full'], a: 3 }
  ]
},
{
  id: 'R30', type: 'lit', unit: 3, title: '奶奶的歌',
  intro: 'Read the following passage.',
  paras: [
    '奶奶不識字，卻會唱很多歌。那些歌沒有歌譜，也沒有人知道是誰寫的，是她的媽媽唱給她聽，她再唱給我爸爸聽的。',
    '小時候，每到夏天的晚上，奶奶就搬一張竹椅坐在院子裡，一邊搖著扇子，一邊用客家話輕輕地唱。我聽不懂歌詞，只記得那個調子慢慢的、軟軟的，像晚風一樣。聽著聽著，我就在她腿上睡著了。',
    '上了中學以後，我的耳機裡裝滿了流行歌，奶奶的歌漸漸被我忘了。有一次她又唱起來，我不耐煩地說：「奶奶，這種歌現在沒有人聽了啦。」她笑了笑，沒有再唱。',
    '去年，音樂老師要我們訪問家裡的長輩，錄下一首他們年輕時候的歌。我拿著手機走到奶奶面前，她愣了一下，有點不好意思地清了清喉嚨。當那個熟悉的調子響起來的時候，我的眼睛忽然熱了。',
    '我請爸爸把歌詞一句一句翻譯給我聽，才知道那是一首勸人珍惜時間的歌。現在，那段錄音還存在我的手機裡。我想，等我學會了，也要唱給我的孩子聽。'
  ],
  questions: [
    { q: 'How did the grandmother learn her songs?', o: ['From the radio', 'From her mother, who sang them to her', 'From a songbook', 'From a music teacher'], a: 1 },
    { q: 'Why did the narrator fall asleep to the songs as a child?', o: ['The melody was slow and soothing', 'The words were boring', 'The songs were very long', 'The summer nights were hot'], a: 0 },
    { q: 'How did the narrator’s attitude change in middle school?', o: ['The narrator began to sing along', 'The narrator asked to learn Hakka', 'The narrator lost interest and called the songs out of date', 'The narrator recorded the songs'], a: 2 },
    { q: 'What led the narrator to record the grandmother’s song?', o: ['A family reunion', 'The grandmother’s birthday', 'A singing contest', 'An assignment from a music teacher'], a: 3 },
    { q: 'What does the last paragraph suggest?', o: ['The narrator still cannot stand the song', 'The narrator now treasures the song and wants to pass it on', 'The narrator plans to become a singer', 'The grandmother has stopped singing'], a: 1 }
  ]
}
);
