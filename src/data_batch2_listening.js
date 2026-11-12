// Batch 2 (Nov 2026): 20 more listening sets, L11–L30. Four per task type, interleaved so the
// daily commute list rotates through the types. Same format as data_listening.js.
APZH.listening.push(
{
  id: 'L11', type: 'instr', unit: 5, title: '游泳池使用須知',
  intro: 'You will listen to an announcement at a public swimming pool.',
  speakers: { N: { name: '廣播', g: 'f' } },
  lines: [
    ['N', '各位泳客您好，歡迎來到市立游泳池。為了大家的安全，請注意以下幾件事。'],
    ['N', '第一，下水以前，請先到淋浴間沖洗身體，並且戴上泳帽。沒有戴泳帽的泳客不能進入泳池。'],
    ['N', '第二，泳池旁邊的地板很滑，請慢慢走，不要奔跑。'],
    ['N', '第三，深水區的水深是兩公尺，身高不到一百四十公分的兒童，必須有家長陪同才能進入。'],
    ['N', '另外，今天下午三點到四點，第一和第二水道有游泳課，請一般泳客使用其他水道。'],
    ['N', '如果身體不舒服，請馬上告訴穿紅色上衣的救生員。祝您游得愉快！']
  ],
  questions: [
    { q: 'What is the main purpose of the announcement?', o: ['To explain the safety rules of a swimming pool', 'To advertise swimming lessons', 'To announce that the pool is closing for cleaning', 'To introduce the lifeguards'], a: 0 },
    { q: 'What must swimmers do before entering the water?', o: ['Show a membership card', 'Shower and put on a swim cap', 'Warm up for ten minutes', 'Sign a form at the front desk'], a: 1 },
    { q: 'Who must be accompanied by a parent in the deep end?', o: ['Children under fourteen years old', 'Anyone who cannot swim two hundred meters', 'Children shorter than 140 centimeters', 'Children who are taking a swimming class'], a: 2 },
    { q: 'Why should general swimmers avoid lanes 1 and 2 from three to four o’clock?', o: ['The lanes are being cleaned', 'A swimming class is using them', 'A competition is being held', 'The water there is too deep'], a: 1 },
    { q: 'How can swimmers recognize a lifeguard?', o: ['By a yellow cap', 'By a whistle', 'By a blue uniform', 'By a red shirt'], a: 3 }
  ]
},
{
  id: 'L12', type: 'conv', unit: 5, title: '週末去爬山',
  intro: 'You will listen to a conversation between two friends, Wenjie and Yating.',
  speakers: { A: { name: '文傑', g: 'm' }, B: { name: '雅婷', g: 'f' } },
  lines: [
    ['A', '雅婷，這個星期六你想不想一起去爬象山？聽說山上可以看到整個臺北市。'],
    ['B', '好啊！可是我看了天氣預報，星期六下午可能會下雨。'],
    ['A', '真的嗎？那我們早一點出發吧。早上七點在捷運站見面，怎麼樣？'],
    ['B', '七點太早了吧！我星期五晚上要練鋼琴練到很晚。八點可以嗎？'],
    ['A', '好，就八點。爬完山大概十點，我們可以去附近吃小籠包。'],
    ['B', '太棒了！對了，要不要約志明一起去？'],
    ['A', '我問過他了，他星期六要去看牙醫，不能來。'],
    ['B', '真可惜。那我多帶一些水和水果，你記得帶相機喔。'],
    ['A', '沒問題，星期六見！']
  ],
  questions: [
    { q: 'What do the speakers plan to do on Saturday?', o: ['Watch a movie', 'Hike up a mountain', 'Practice the piano together', 'Go shopping downtown'], a: 1 },
    { q: 'Why do they decide to go in the morning?', o: ['It may rain in the afternoon', 'The mountain closes at noon', 'The metro is less crowded', 'Wenjie has a class in the afternoon'], a: 0 },
    { q: 'Why does Yating not want to meet at seven o’clock?', o: ['She lives far from the station', 'She has to see a dentist', 'She will be practicing the piano late the night before', 'She wants to eat breakfast first'], a: 2 },
    { q: 'Why can’t Zhiming join them?', o: ['He is afraid of heights', 'He has a dentist appointment', 'He has a piano lesson', 'He does not like hiking'], a: 1 },
    { q: 'What will Wenjie bring?', o: ['Water', 'Fruit', 'Dumplings', 'A camera'], a: 3 }
  ]
},
{
  id: 'L13', type: 'report', unit: 6, title: '小長頸鹿和大家見面',
  intro: 'You will listen to a news report.',
  speakers: { N: { name: '主播', g: 'm' } },
  lines: [
    ['N', '市立動物園今天上午宣布，上個月出生的小長頸鹿，將在下星期六第一次和遊客見面。'],
    ['N', '這隻小長頸鹿是女生，出生的時候身高已經有一百八十公分，體重六十公斤。'],
    ['N', '動物園園長表示，小長頸鹿很健康，每天都跟著媽媽學習吃樹葉。'],
    ['N', '為了替牠取名字，動物園從今天起舉辦網路投票，民眾可以從「安安」、「樂樂」和「高高」三個名字當中，選出最喜歡的一個。投票到這個月底截止。'],
    ['N', '動物園也提醒遊客，參觀的時候請保持安靜，拍照不要使用閃光燈，以免嚇到小長頸鹿。']
  ],
  questions: [
    { q: 'What is the report mainly about?', o: ['A zoo that is opening next month', 'A baby giraffe that will soon meet visitors', 'A giraffe that escaped from a zoo', 'A photo contest at the zoo'], a: 1 },
    { q: 'When can visitors first see the baby giraffe?', o: ['Today', 'Next Saturday', 'At the end of the month', 'Next month'], a: 1 },
    { q: 'What does the zoo director say about the baby giraffe?', o: ['It is healthy and learning to eat leaves', 'It is smaller than expected', 'It has been separated from its mother', 'It is afraid of visitors'], a: 0 },
    { q: 'How will the giraffe’s name be decided?', o: ['The director will choose it', 'Schoolchildren will send in drawings', 'The public will vote online among three names', 'The first visitor will pick it'], a: 2 },
    { q: 'What are visitors asked to do?', o: ['Arrive early in the morning', 'Buy tickets online', 'Bring leaves for the giraffe', 'Stay quiet and not use a flash'], a: 3 }
  ]
},
{
  id: 'L14', type: 'pres', unit: 2, title: '珍珠奶茶',
  intro: 'You will listen to a student’s presentation.',
  speakers: { N: { name: '學生', g: 'f' } },
  lines: [
    ['N', '大家好，今天我要介紹一種從臺灣紅到全世界的飲料，那就是珍珠奶茶。'],
    ['N', '珍珠奶茶大約在一九八〇年代出現。那時候，臺灣的茶店開始賣冰的奶茶，後來有人把一種叫做「粉圓」的傳統甜點加進奶茶裡，沒想到大受歡迎。'],
    ['N', '粉圓是用樹薯粉做的，煮熟以後又圓又有彈性，看起來像黑色的珍珠，所以叫做「珍珠」。'],
    ['N', '喝珍珠奶茶要用比較粗的吸管，一邊喝茶，一邊吃珍珠。客人還可以自己決定要多甜、要多少冰塊。'],
    ['N', '現在，在紐約、東京、倫敦都買得到珍珠奶茶。對很多住在國外的臺灣人來說，喝一杯珍珠奶茶，就好像回到了家鄉。'],
    ['N', '我覺得珍珠奶茶受歡迎，是因為它把傳統的甜點和現代的飲料結合在一起，又能讓每個人選擇自己喜歡的口味。謝謝大家。']
  ],
  questions: [
    { q: 'What is the presentation mainly about?', o: ['How to open a tea shop', 'The origin and popularity of bubble tea', 'The health effects of sweet drinks', 'Traditional desserts in Taiwan'], a: 1 },
    { q: 'According to the speaker, how was bubble tea created?', o: ['A traditional dessert was added to iced milk tea', 'A tea shop copied a drink from Japan', 'A farmer invented a new kind of tea leaf', 'A student mixed tea with fruit juice'], a: 0 },
    { q: 'What can customers decide when they order?', o: ['The size of the pearls', 'The color of the straw', 'How sweet the drink is and how much ice it has', 'Which kind of milk is used'], a: 2 },
    { q: 'What does bubble tea mean to many Taiwanese people living abroad?', o: ['It is too expensive to drink often', 'It tastes different from the original', 'It is a way to make new friends', 'It reminds them of home'], a: 3 },
    { q: 'Why does the speaker think bubble tea is popular?', o: ['It is cheaper than coffee', 'It combines tradition with a modern drink and lets people choose', 'It is advertised by famous singers', 'It is healthier than other drinks'], a: 1 }
  ]
},
{
  id: 'L15', type: 'chart', unit: 4, title: '國中生怎麼用手機',
  intro: 'You will listen to a report and look at a chart.',
  speakers: { N: { name: '記者', g: 'f' } },
  chart: { title: '國中生每天用手機做各種事的平均時間', unit: '分鐘', max: 70,
    items: [ ['看影片', 62], ['玩遊戲', 45], ['社群和聊天', 38], ['查資料、寫作業', 25], ['聽音樂', 20] ] },
  lines: [
    ['N', '一項針對兩千名國中生的調查發現，學生平均每天使用手機三個多小時。'],
    ['N', '從圖表可以看到，花最多時間的活動是看影片，平均每天六十二分鐘；其次是玩遊戲，四十五分鐘。'],
    ['N', '用手機查資料和寫作業的時間只有二十五分鐘，還不到看影片時間的一半。'],
    ['N', '負責這項調查的教授表示，手機本身沒有好壞，重要的是怎麼使用。他建議家長不要完全禁止孩子用手機，而是和孩子一起訂出使用的時間和規則。'],
    ['N', '調查也發現，有訂規則的家庭，孩子的睡眠時間平均多了四十分鐘。']
  ],
  questions: [
    { q: 'What is the report mainly about?', o: ['How middle school students use their phones', 'Which phone brands students prefer', 'Why schools ban phones in class', 'How to choose a phone for a child'], a: 0 },
    { q: 'According to the chart, which activity takes the second most time?', o: ['Watching videos', 'Playing games', 'Social media and chatting', 'Listening to music'], a: 1 },
    { q: 'According to the chart, about how many minutes a day do students spend looking up information and doing homework on their phones?', o: ['20', '25', '38', '45'], a: 1 },
    { q: 'What does the professor suggest parents do?', o: ['Ban phones completely', 'Check their children’s phones every night', 'Set times and rules together with their children', 'Buy phones only for high school students'], a: 2 },
    { q: 'What did the survey find about families that set rules?', o: ['Their children got better grades', 'Their children spent more time on homework', 'Their children used phones only on weekends', 'Their children slept about forty minutes longer'], a: 3 }
  ]
},
{
  id: 'L16', type: 'instr', unit: 1, title: '社區大掃除',
  intro: 'You will listen to an announcement in a neighborhood.',
  speakers: { N: { name: '里長', g: 'm' } },
  lines: [
    ['N', '各位鄰居大家好，我是里長。這個星期天是我們社區一年一次的大掃除，請大家一起來幫忙。'],
    ['N', '當天早上八點半，請到社區公園的涼亭集合。我們會分成三組：第一組打掃公園，第二組清理巷子裡的落葉，第三組幫獨居的長輩擦窗戶。'],
    ['N', '掃把和垃圾袋由里辦公室準備，請大家自己帶手套、帽子和水壺。'],
    ['N', '打掃大約在十一點半結束。結束以後，里辦公室會請大家吃便當和綠豆湯。'],
    ['N', '如果當天下雨，活動就延到下個星期天。想參加的鄰居，請在星期五以前到里辦公室登記，謝謝大家！']
  ],
  questions: [
    { q: 'Who is the speaker?', o: ['A school principal', 'A park gardener', 'A neighborhood leader', 'A restaurant owner'], a: 2 },
    { q: 'What will the third group do?', o: ['Sweep the park', 'Clean windows for elderly people who live alone', 'Clear fallen leaves from the lanes', 'Prepare lunch for the volunteers'], a: 1 },
    { q: 'What should participants bring?', o: ['Gloves, a hat and a water bottle', 'Brooms and trash bags', 'A boxed lunch', 'Rain boots and an umbrella'], a: 0 },
    { q: 'What will happen after the cleanup?', o: ['A meeting about next year’s plan', 'A prize drawing', 'A free meal for the participants', 'A visit to the elderly'], a: 2 },
    { q: 'What will happen if it rains on Sunday?', o: ['The cleanup will move indoors', 'The cleanup will be canceled', 'The cleanup will start in the afternoon', 'The cleanup will be held the following Sunday'], a: 3 }
  ]
},
{
  id: 'L17', type: 'conv', unit: 1, title: '我可以養狗嗎？',
  intro: 'You will listen to a conversation between a boy, Xiaoyu, and his mother.',
  speakers: { A: { name: '小宇', g: 'm' }, B: { name: '媽媽', g: 'f' } },
  lines: [
    ['A', '媽，我們班同學家裡有一隻小狗要送人，我可以養嗎？'],
    ['B', '養狗可不是一件簡單的事。每天要餵牠、帶牠散步，還要幫牠洗澡。'],
    ['A', '我知道！我已經想好了，我每天早上六點半起床帶牠去散步，放學以後再餵牠。'],
    ['B', '你現在七點都起不來，六點半真的可以嗎？'],
    ['A', '為了小狗，我一定可以！而且我可以用我的零用錢買狗食。'],
    ['B', '還有，暑假我們要回臺灣看外婆，到時候小狗怎麼辦？'],
    ['A', '這個我沒想到。也許可以請隔壁的王阿姨幫忙照顧？'],
    ['B', '這樣吧，你先連續兩個星期每天早起、自己整理房間。如果做得到，我們再去問王阿姨，然後一起去看小狗。'],
    ['A', '太好了！我明天就開始！']
  ],
  questions: [
    { q: 'What does Xiaoyu want?', o: ['To visit his grandmother in Taiwan', 'To adopt a classmate’s puppy', 'To get a bigger allowance', 'To walk the neighbor’s dog'], a: 1 },
    { q: 'What is the mother’s main concern at first?', o: ['Dogs are expensive to buy', 'The apartment is too small', 'Taking care of a dog is a lot of work', 'Xiaoyu is allergic to dogs'], a: 2 },
    { q: 'How does Xiaoyu plan to pay for the dog’s food?', o: ['With his allowance', 'By working for Auntie Wang', 'By asking his grandmother', 'By selling his old toys'], a: 0 },
    { q: 'What problem had Xiaoyu not thought about?', o: ['Where the dog would sleep', 'How to train the dog', 'What the dog would eat', 'Who would look after the dog during their summer trip'], a: 3 },
    { q: 'What does the mother decide?', o: ['Xiaoyu cannot have a dog', 'Xiaoyu must first show for two weeks that he can be responsible', 'They will get the dog tomorrow', 'Auntie Wang will keep the dog'], a: 1 }
  ]
},
{
  id: 'L18', type: 'report', unit: 3, title: '美術館晚上也開放',
  intro: 'You will listen to a news report.',
  speakers: { N: { name: '主播', g: 'f' } },
  lines: [
    ['N', '市立美術館宣布，從下個月開始，每個星期五和星期六的開放時間將延長到晚上九點。'],
    ['N', '館長表示，很多上班族和學生白天沒有時間看展覽。延長開放時間，是希望讓更多人有機會走進美術館。'],
    ['N', '為了吸引年輕人，美術館還會在星期五晚上舉辦免費的音樂會，並且邀請藝術家到現場介紹自己的作品。'],
    ['N', '另外，十八歲以下的學生只要出示學生證，就可以免費入場。一般民眾的門票仍然是一百元。'],
    ['N', '目前正在展出的是「水墨與城市」特展，展出五十多位年輕畫家的作品，展期到十二月底。']
  ],
  questions: [
    { q: 'What is the main announcement?', o: ['The museum will stay open later on Fridays and Saturdays', 'The museum will close for repairs', 'The museum will raise its ticket price', 'The museum will move to a new building'], a: 0 },
    { q: 'Why is the museum making this change?', o: ['To earn more money from tickets', 'Because many people cannot visit during the day', 'Because the daytime is too crowded', 'To prepare for a new exhibition'], a: 1 },
    { q: 'What will happen on Friday evenings?', o: ['Painting classes for children', 'Guided tours in English', 'Free concerts and talks by artists', 'Movie screenings'], a: 2 },
    { q: 'Who can enter for free?', o: ['Everyone on Friday evenings', 'Office workers after six o’clock', 'Artists who live in the city', 'Students under eighteen with a student ID'], a: 3 },
    { q: 'What is true about the special exhibition?', o: ['It will open next month', 'It shows works by more than fifty young painters', 'It requires a separate ticket', 'It is about traditional music'], a: 1 }
  ]
},
{
  id: 'L19', type: 'pres', unit: 1, title: '外公的雜貨店',
  intro: 'You will listen to a student’s presentation.',
  speakers: { N: { name: '學生', g: 'm' } },
  lines: [
    ['N', '大家好，今天我想介紹我外公在臺南開的雜貨店。'],
    ['N', '這家店已經開了四十多年，賣米、醬油、糖果，也賣文具。店面不大，可是東西很多。'],
    ['N', '小時候，我最喜歡站在櫃檯後面幫外公算錢。外公不用計算機，他用的是算盤，算得又快又準。'],
    ['N', '附近的鄰居不只來買東西，也常常坐在店門口聊天。誰家的孩子考上大學，誰家要辦喜事，外公都知道。有的客人忘了帶錢，外公就說：「沒關係，下次再給。」'],
    ['N', '這幾年，附近開了兩家便利商店，雜貨店的生意沒有以前好了。舅舅勸外公把店關了，好好休息，可是外公不肯。'],
    ['N', '他說：「這家店不只是做生意的地方，也是鄰居們見面的地方。」我覺得，外公的雜貨店賣的不只是商品，還有人和人之間的感情。謝謝大家。']
  ],
  questions: [
    { q: 'What is the presentation mainly about?', o: ['How to run a successful business', 'A grandfather’s store and what it means to the neighborhood', 'Why convenience stores are popular', 'The history of the abacus'], a: 1 },
    { q: 'What did the speaker enjoy doing as a child?', o: ['Helping count money at the counter', 'Eating candy from the shelves', 'Delivering rice to neighbors', 'Chatting with customers outside'], a: 0 },
    { q: 'What does the grandfather do when a customer forgets to bring money?', o: ['He asks them to come back later to buy', 'He writes their name on the wall', 'He lets them pay next time', 'He gives them the goods for free'], a: 2 },
    { q: 'Why is business not as good as before?', o: ['The grandfather raised his prices', 'Many neighbors moved away', 'The store sells fewer kinds of goods', 'Two convenience stores opened nearby'], a: 3 },
    { q: 'Why does the grandfather refuse to close the store?', o: ['He needs the income', 'He sees it as a place where neighbors meet', 'He wants his grandson to take it over', 'He has nowhere else to live'], a: 1 }
  ]
},
{
  id: 'L20', type: 'chart', unit: 1, title: '全家一起吃晚餐',
  intro: 'You will listen to part of a radio program and look at a chart.',
  speakers: { N: { name: '主持人', g: 'm' } },
  chart: { title: '學生每週和家人一起吃晚餐的次數', unit: '%', max: 40,
    items: [ ['每天', 28], ['四到六次', 34], ['一到三次', 27], ['幾乎沒有', 11] ] },
  lines: [
    ['N', '你多久和家人一起吃一次晚餐呢？一個兒童福利團體最近訪問了一千五百名中小學生。'],
    ['N', '結果發現，每天都和家人一起吃晚餐的學生不到三成。最多的是每個星期一起吃四到六次，佔百分之三十四。'],
    ['N', '值得注意的是，有百分之十一的學生幾乎沒有和家人一起吃晚餐。主要的原因是父母工作太晚，或是學生自己要補習。'],
    ['N', '研究人員指出，常常和家人一起吃飯的孩子，比較願意跟父母分享學校的事，心情也比較好。'],
    ['N', '專家建議，就算平日很忙，也可以把星期天訂為「家庭晚餐日」，全家人一起做飯、吃飯，而且吃飯的時候不看手機。']
  ],
  questions: [
    { q: 'What does the survey look at?', o: ['What students eat for dinner', 'How often students eat dinner with their families', 'How much families spend on food', 'Who cooks dinner at home'], a: 1 },
    { q: 'According to the chart, which group is the largest?', o: ['Students who eat with their families every day', 'Students who eat with their families four to six times a week', 'Students who eat with their families one to three times a week', 'Students who almost never eat with their families'], a: 1 },
    { q: 'According to the chart, what percentage of students eat dinner with their families every day?', o: ['11%', '27%', '28%', '34%'], a: 2 },
    { q: 'Why do some students almost never eat dinner with their families?', o: ['Their parents work late or the students have cram school', 'They prefer to eat with friends', 'Their families eat out too often', 'They do not like home cooking'], a: 0 },
    { q: 'What do the experts suggest?', o: ['Eating dinner earlier in the evening', 'Letting children choose the menu', 'Eating at restaurants on weekends', 'Making Sunday a family dinner day without phones'], a: 3 }
  ]
},
{
  id: 'L21', type: 'instr', unit: 6, title: '機場廣播',
  intro: 'You will listen to an announcement at an airport.',
  speakers: { N: { name: '廣播', g: 'f' } },
  lines: [
    ['N', '各位旅客請注意。搭乘長風航空三一六號班機前往東京的旅客，因為天氣的關係，本班機將延後四十分鐘起飛，新的起飛時間是下午三點二十分。'],
    ['N', '另外，登機門由原來的五號改為九號。'],
    ['N', '請各位旅客在兩點五十分以前，到九號登機門等候。'],
    ['N', '登機的時候，請準備好護照和登機證。帶小孩的旅客和需要協助的旅客可以優先登機。'],
    ['N', '候機室旁邊有免費的飲水機和充電站，歡迎多加利用。造成您的不便，我們非常抱歉。']
  ],
  questions: [
    { q: 'Why is the flight delayed?', o: ['A mechanical problem', 'The weather', 'A late crew', 'Heavy air traffic'], a: 1 },
    { q: 'What is the new departure time?', o: ['2:40 p.m.', '2:50 p.m.', '3:20 p.m.', '4:00 p.m.'], a: 2 },
    { q: 'What else has changed?', o: ['The boarding gate', 'The destination', 'The flight number', 'The airline'], a: 0 },
    { q: 'Who may board first?', o: ['Passengers in the front rows', 'Passengers with only carry-on bags', 'Passengers who arrived earliest', 'Passengers with children or who need assistance'], a: 3 },
    { q: 'What is available near the waiting area?', o: ['Free snacks', 'Free drinking water and charging stations', 'A children’s play area', 'A currency exchange counter'], a: 1 }
  ]
},
{
  id: 'L22', type: 'conv', unit: 2, title: '準備演講比賽',
  intro: 'You will listen to a conversation between a student, Xiaoan, and her teacher, Mr. Chen.',
  speakers: { A: { name: '小安', g: 'f' }, B: { name: '陳老師', g: 'm' } },
  lines: [
    ['B', '小安，下個月的中文演講比賽，你想好題目了嗎？'],
    ['A', '老師，我想講「我的奶奶」，可是我怕內容太普通。'],
    ['B', '題目普通沒關係，重要的是有沒有特別的故事。你的奶奶有什麼讓你印象深刻的事？'],
    ['A', '她七十歲才開始學用電腦，現在每天寫部落格，介紹客家菜的做法。'],
    ['B', '這個故事很好啊！你可以從這裡談「活到老，學到老」。'],
    ['A', '對耶！我還可以帶一張奶奶做菜的照片。可是我一上台就緊張，常常忘詞。'],
    ['B', '你可以把重點寫在小卡片上，每天對著鏡子練習一次。比賽前一個星期，再講給同學聽。'],
    ['A', '好，我今天回家就開始寫稿子。演講有時間限制嗎？'],
    ['B', '三到四分鐘。太短或太長都會扣分，所以練習的時候要計時。']
  ],
  questions: [
    { q: 'What are the speakers discussing?', o: ['A writing assignment', 'Preparing for a Chinese speech contest', 'A cooking class', 'Starting a blog'], a: 1 },
    { q: 'Why is Xiaoan worried about her topic?', o: ['She thinks it is too ordinary', 'She thinks it is too difficult', 'Another student chose the same topic', 'She does not know her grandmother well'], a: 0 },
    { q: 'What is special about Xiaoan’s grandmother?', o: ['She opened a Hakka restaurant', 'She won a speech contest', 'She learned to use a computer at seventy and now writes a blog', 'She teaches cooking at a school'], a: 2 },
    { q: 'What does the teacher suggest for Xiaoan’s nervousness?', o: ['Reading the whole script on stage', 'Choosing a shorter topic', 'Watching videos of past winners', 'Writing key points on cards and practicing in front of a mirror'], a: 3 },
    { q: 'What does the teacher say about the length of the speech?', o: ['It can be any length', 'It should be three to four minutes, or points will be taken off', 'It must be at least five minutes', 'It will not be timed'], a: 1 }
  ]
},
{
  id: 'L23', type: 'report', unit: 4, title: '學生設計的無人機',
  intro: 'You will listen to a news report.',
  speakers: { N: { name: '主播', g: 'm' } },
  lines: [
    ['N', '住在山區的居民，以後拿藥可能會更方便了。'],
    ['N', '東部一所高中的五位學生，設計了一架可以運送藥品的無人機。這架無人機一次可以載兩公斤的東西，飛行二十公里。'],
    ['N', '指導老師說，山上的部落離醫院很遠，開車來回要三個小時。如果用無人機，只要二十分鐘就能把藥送到。'],
    ['N', '學生們花了一年的時間，失敗了十幾次。有一次，無人機還因為風太大，掉進了河裡。'],
    ['N', '他們的作品上個月得到了全國科學展覽的第一名。學生們表示，希望將來能和醫院合作，讓這架無人機真正幫助山區的居民。']
  ],
  questions: [
    { q: 'What is the report mainly about?', o: ['A new hospital in the mountains', 'Students who designed a drone to deliver medicine', 'A science fair for high school students', 'A drone race in eastern Taiwan'], a: 1 },
    { q: 'How much can the drone carry at one time?', o: ['2 kilograms', '3 kilograms', '12 kilograms', '20 kilograms'], a: 0 },
    { q: 'Why would the drone be useful?', o: ['It is cheaper than a car', 'It can carry patients to the hospital', 'Mountain villages are far from the hospital, and it is much faster', 'It can fly in any weather'], a: 2 },
    { q: 'What difficulty did the students face?', o: ['They had no teacher to guide them', 'They ran out of money', 'The hospital refused to help', 'They failed many times, and once the drone fell into a river'], a: 3 },
    { q: 'What do the students hope to do next?', o: ['Sell the drone to a company', 'Work with hospitals so the drone can really be used', 'Enter an international competition', 'Build a bigger drone for passengers'], a: 1 }
  ]
},
{
  id: 'L24', type: 'pres', unit: 3, title: '古箏',
  intro: 'You will listen to a student’s presentation.',
  speakers: { N: { name: '學生', g: 'f' } },
  lines: [
    ['N', '大家好，今天我要介紹一種中國傳統樂器，叫做古箏。'],
    ['N', '古箏已經有兩千多年的歷史了。現在最常見的古箏有二十一條弦。演奏的人右手戴著假指甲撥弦，左手按弦，改變聲音的高低。'],
    ['N', '古箏的聲音很像流水，所以很多有名的曲子都跟大自然有關，比方說《高山流水》。'],
    ['N', '我從八歲開始學古箏。剛開始的時候，手指常常痛得想哭，可是老師告訴我：「慢慢來，比較快。」'],
    ['N', '去年，我在學校的國際日表演。很多同學第一次聽到古箏，都跑來問我這是什麼樂器。有一位同學還說，聽起來像下雨的聲音。'],
    ['N', '現在也有人用古箏演奏流行歌曲和電影音樂。我覺得，傳統樂器只要加上新的想法，一樣可以讓年輕人喜歡。謝謝大家。']
  ],
  questions: [
    { q: 'What is the presentation mainly about?', o: ['A traditional instrument and the speaker’s experience with it', 'How to buy a musical instrument', 'A famous Chinese musician', 'The history of film music'], a: 0 },
    { q: 'How is the guzheng played?', o: ['Both hands press the strings', 'The right hand plucks the strings and the left hand presses them', 'The player blows into it', 'The player uses a bow'], a: 1 },
    { q: 'Why are many famous guzheng pieces about nature?', o: ['They were written in the mountains', 'Nature is the easiest subject to play', 'The instrument’s sound resembles flowing water', 'The instrument is made from a rare tree'], a: 2 },
    { q: 'What did the teacher most likely mean by 「慢慢來，比較快」?', o: ['The speaker should play slower music', 'The speaker was learning too slowly', 'The speaker should practice less often', 'Being patient leads to faster progress in the end'], a: 3 },
    { q: 'What is the speaker’s view of traditional instruments?', o: ['They should only play traditional music', 'With new ideas they can appeal to young people', 'They are too difficult for children', 'They are disappearing quickly'], a: 1 }
  ]
},
{
  id: 'L25', type: 'chart', unit: 5, title: '放學以後做什麼',
  intro: 'You will listen to a report and look at a chart.',
  speakers: { N: { name: '記者', g: 'm' } },
  chart: { title: '國中生平常參加的課後活動（可以選不只一項）', unit: '%', max: 60,
    items: [ ['補習', 58], ['運動', 41], ['音樂或美術', 27], ['志工服務', 9], ['沒有參加', 14] ] },
  lines: [
    ['N', '放學以後，國中生都在做什麼？一項調查請一千名國中生選出自己平常參加的課後活動，可以選不只一項。'],
    ['N', '結果顯示，將近六成的學生放學後要補習；有四成左右的學生參加運動；學音樂或美術的不到三成。'],
    ['N', '參加志工服務的學生最少，只有百分之九。'],
    ['N', '有學生表示，很想參加球隊，可是補習以後已經沒有時間了。'],
    ['N', '教育專家提醒，課後活動不是越多越好。學生應該留一些時間休息，做自己真正有興趣的事。']
  ],
  questions: [
    { q: 'What does the chart show?', o: ['How many hours students study each day', 'The after-school activities middle school students take part in', 'The cost of after-school classes', 'The most popular sports among students'], a: 1 },
    { q: 'According to the chart, which activity do the fewest students take part in?', o: ['Cram school', 'Sports', 'Music or art', 'Volunteer service'], a: 3 },
    { q: 'According to the chart, what percentage of students take part in sports?', o: ['9%', '27%', '41%', '58%'], a: 2 },
    { q: 'What problem does one student mention?', o: ['There is no time for a sports team after cram school', 'Cram school is too expensive', 'The school has no sports teams', 'Parents do not allow sports'], a: 0 },
    { q: 'What does the education expert advise?', o: ['Joining as many activities as possible', 'Choosing activities that help with exams', 'Leaving time to rest and to do what truly interests them', 'Stopping cram school altogether'], a: 2 }
  ]
},
{
  id: 'L26', type: 'instr', unit: 4, title: '在網站上交作業',
  intro: 'You will listen to a teacher giving instructions to a class.',
  speakers: { N: { name: '老師', g: 'f' } },
  lines: [
    ['N', '同學們，從這個星期開始，中文課的作業都要在學校的學習網站上繳交。現在老師說明一下步驟。'],
    ['N', '第一步，用你的學號和密碼登入學習網站，然後點選「中文課」。'],
    ['N', '第二步，在「本週作業」裡找到作文題目。寫好以後，按「上傳」，把你的檔案傳上去。'],
    ['N', '上傳成功以後，畫面上會出現一個綠色的勾。如果沒有看到，就表示沒有成功，要再傳一次。'],
    ['N', '請注意，繳交期限是星期五晚上九點。過了時間，網站就不能上傳了。'],
    ['N', '如果家裡沒有電腦或網路，可以在星期三和星期四放學後，到學校的電腦教室寫。有問題的同學，下課來找老師。']
  ],
  questions: [
    { q: 'What is the purpose of the teacher’s talk?', o: ['To explain how to hand in homework online', 'To announce a computer class', 'To assign a new essay topic', 'To warn students about late homework'], a: 0 },
    { q: 'What is the first step?', o: ['Find this week’s essay topic', 'Log in with a student number and password', 'Upload the file', 'Go to the computer lab'], a: 1 },
    { q: 'How do students know the upload was successful?', o: ['They receive an email', 'The teacher tells them in class', 'A green check mark appears on the screen', 'The website closes by itself'], a: 2 },
    { q: 'When is the homework due?', o: ['Wednesday after school', 'Thursday after school', 'Friday morning', 'Friday at nine in the evening'], a: 3 },
    { q: 'What can students without a computer at home do?', o: ['Hand in the homework on paper', 'Use the school computer lab after school on Wednesday and Thursday', 'Ask the teacher for more time', 'Borrow a computer from the library'], a: 1 }
  ]
},
{
  id: 'L27', type: 'conv', unit: 6, title: '暑假去環島',
  intro: 'You will listen to a conversation between two classmates, Meiling and Daming.',
  speakers: { A: { name: '美玲', g: 'f' }, B: { name: '大明', g: 'm' } },
  lines: [
    ['A', '大明，暑假你們家要去哪裡玩？'],
    ['B', '我們打算去臺灣環島，從臺北出發，先到花蓮，再到臺東和高雄。'],
    ['A', '聽起來好棒！你們要自己開車嗎？'],
    ['B', '本來想租車，可是爸爸說暑假路上車太多，後來決定坐火車。東部的火車沿著海邊走，風景特別美。'],
    ['A', '那你們要玩幾天？'],
    ['B', '一共十天。我最期待的是在臺東坐熱氣球，可是妹妹怕高，她只想去夜市吃東西。'],
    ['A', '哈哈，那你們怎麼辦？'],
    ['B', '媽媽說，早上去看熱氣球，晚上去逛夜市，這樣兩個人都高興。'],
    ['A', '你媽媽真聰明。記得多拍一些照片給我看！']
  ],
  questions: [
    { q: 'What is the conversation mainly about?', o: ['A school trip to Hualien', 'Daming’s family trip around Taiwan', 'Meiling’s summer job', 'How to buy train tickets'], a: 1 },
    { q: 'How will Daming’s family travel?', o: ['By rental car', 'By plane', 'By train', 'By tour bus'], a: 2 },
    { q: 'Why did the family decide not to rent a car?', o: ['There is too much traffic in the summer', 'Renting a car is too expensive', 'The father does not like driving', 'The roads in the east are dangerous'], a: 0 },
    { q: 'What is Daming looking forward to most?', o: ['Eating at night markets', 'Swimming at the beach', 'Taking photos of the coast', 'Riding in a hot air balloon'], a: 3 },
    { q: 'How does the mother solve the disagreement between Daming and his sister?', o: ['She lets the sister stay at the hotel', 'She plans balloons in the morning and the night market in the evening', 'She cancels the balloon ride', 'She lets the father decide'], a: 1 }
  ]
},
{
  id: 'L28', type: 'report', unit: 5, title: '城市馬拉松',
  intro: 'You will listen to a news report.',
  speakers: { N: { name: '主播', g: 'f' } },
  lines: [
    ['N', '一年一度的城市馬拉松，將在這個星期天早上六點起跑。今年一共有兩萬多人報名，比去年多了三千人。'],
    ['N', '比賽的路線會經過市政府、河濱公園和大學城。星期天早上五點到中午十二點，這些路段將實施交通管制，車輛不能通行。'],
    ['N', '警察局提醒，當天早上要出門的民眾，最好改搭捷運。捷運也會提早到五點開始營運。'],
    ['N', '今年的比賽還有一個特別的地方：主辦單位不再提供紙杯，請跑者自己帶環保杯，希望能減少垃圾。'],
    ['N', '年紀最大的參賽者是八十二歲的林爺爺。他說，他不在乎跑第幾名，只要能跑完全程就很開心。']
  ],
  questions: [
    { q: 'What is the report mainly about?', o: ['The results of a marathon', 'The upcoming city marathon and the arrangements for it', 'A new metro line', 'How to train for a marathon'], a: 1 },
    { q: 'How does this year’s number of runners compare with last year’s?', o: ['It is three thousand higher', 'It is about the same', 'It is twenty thousand higher', 'It is lower because of the weather'], a: 0 },
    { q: 'What are residents advised to do on Sunday morning?', o: ['Stay home until noon', 'Drive along the river instead', 'Take the metro instead of driving', 'Leave home before five o’clock'], a: 2 },
    { q: 'What is new about this year’s race?', o: ['The race starts at night', 'The route passes the university', 'Runners over eighty may take part', 'No paper cups are provided; runners bring their own cups'], a: 3 },
    { q: 'What is Grandpa Lin’s attitude toward the race?', o: ['He hopes to win his age group', 'He only cares about finishing', 'He worries about the traffic', 'He thinks he is too old to run'], a: 1 }
  ]
},
{
  id: 'L29', type: 'pres', unit: 6, title: '會唱歌的垃圾車',
  intro: 'You will listen to a student’s presentation.',
  speakers: { N: { name: '學生', g: 'm' } },
  lines: [
    ['N', '大家好。如果你在臺灣聽到〈給愛麗絲〉這首鋼琴曲，別以為是賣冰淇淋的車來了，那其實是垃圾車。'],
    ['N', '在臺灣的很多城市，路邊沒有大型垃圾桶。每天到了固定的時間，垃圾車會一邊播放音樂，一邊開進巷子。居民聽到音樂，就提著垃圾出來，親手把垃圾丟進車裡。這就叫做「垃圾不落地」。'],
    ['N', '這個做法是從一九九〇年代開始的。以前垃圾堆在路邊，又髒又臭，還會引來老鼠。現在街道乾淨多了。'],
    ['N', '垃圾車後面通常還跟著一輛資源回收車，所以居民要先把紙類、塑膠瓶和廚餘分開。'],
    ['N', '有趣的是，等垃圾車的時間，也變成了鄰居聊天的時間。'],
    ['N', '我認為這個例子說明，只要每個人都願意多做一點，就能讓環境變得更好。謝謝大家。']
  ],
  questions: [
    { q: 'What is the presentation mainly about?', o: ['How garbage is collected in many Taiwanese cities', 'Why ice cream trucks play music', 'How to recycle plastic bottles', 'A famous piece of piano music'], a: 0 },
    { q: 'Why do the garbage trucks play music?', o: ['To entertain the workers', 'To let residents know the truck has arrived', 'To cover the noise of the engine', 'To remind people to recycle'], a: 1 },
    { q: 'What was the problem in the past?', o: ['There were too few garbage trucks', 'Residents refused to sort their trash', 'Trash piled up by the road was dirty, smelly and attracted rats', 'The music was too loud'], a: 2 },
    { q: 'What do residents have to do before the recycling truck comes?', o: ['Pay a small fee', 'Wash their trash cans', 'Call the city office', 'Separate paper, plastic bottles and food waste'], a: 3 },
    { q: 'What unexpected benefit does the speaker mention?', o: ['The trucks create jobs', 'Waiting for the truck has become a time for neighbors to chat', 'Children learn piano music', 'The streets are quieter at night'], a: 1 }
  ]
},
{
  id: 'L30', type: 'chart', unit: 6, title: '垃圾越來越少',
  intro: 'You will listen to a report and look at a chart.',
  speakers: { N: { name: '記者', g: 'f' } },
  chart: { title: '本市每人每天產生的垃圾量', unit: '公斤', max: 1.2,
    items: [ ['2006 年', 1.1], ['2011 年', 0.9], ['2016 年', 0.8], ['2021 年', 0.7], ['2026 年', 0.6] ] },
  lines: [
    ['N', '本市環保局今天公布了最新的垃圾統計。從圖表可以看出，二十年來，市民每人每天產生的垃圾量不斷減少。'],
    ['N', '二〇〇六年，每人每天製造一點一公斤的垃圾。今年只剩下零點六公斤，少了將近一半。'],
    ['N', '環保局表示，垃圾減少的主要原因有兩個：一是資源回收做得越來越好，二是越來越多的人自己帶購物袋和餐具。'],
    ['N', '不過，環保局也指出，外送餐點的包裝垃圾在最近五年增加了一倍，是目前最需要解決的問題。'],
    ['N', '下個月起，本市將和外送平台合作，推出可以重複使用的餐盒，希望進一步減少垃圾。']
  ],
  questions: [
    { q: 'What does the chart show?', o: ['How much each person recycles', 'The amount of garbage each person produces per day over twenty years', 'The number of garbage trucks in the city', 'The cost of collecting garbage'], a: 1 },
    { q: 'According to the chart, in which year did each person produce 0.8 kilograms of garbage a day?', o: ['2006', '2011', '2016', '2021'], a: 2 },
    { q: 'What is the general trend?', o: ['The amount has steadily decreased', 'The amount has steadily increased', 'The amount went up and then down', 'The amount has not changed'], a: 0 },
    { q: 'Which reason for the change does the report give?', o: ['The city’s population has fallen', 'Garbage collection has become more expensive', 'Stores no longer sell plastic bags', 'Recycling has improved and more people bring their own bags and utensils'], a: 3 },
    { q: 'What problem most needs to be solved now?', o: ['Too few recycling trucks', 'Packaging waste from food delivery has doubled', 'People forget their shopping bags', 'Restaurants use too much water'], a: 1 }
  ]
}
);
