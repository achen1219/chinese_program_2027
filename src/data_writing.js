// Writing tasks — Question 3 Story Narration (4 pictures) and Question 4 Email Response.
// Picture items: [emoji, x%, y%, size(% of panel width), opts]
//   '#text' = a sign, '@emoji' = a thought/speech bubble; opts: 'f' flip, 'r-20' rotate.
// `desc` describes each picture in English (alt text, and context for AI feedback).
window.APZH = window.APZH || {};
APZH.stories = [
{
  id: 'S01', unit: 1, title: '忘了帶傘',
  panels: [
    { bg: 'home', desc: 'Morning at home. A girl with a backpack heads out the door on a sunny day. Her umbrella is left hanging on a hook by the door.',
      items: [['🪟', 80, 28, 22], ['☀️', 80, 25, 8], ['🚪', 18, 52, 34], ['☂️', 36, 42, 10, 'r-25'], ['👧', 58, 60, 20], ['🎒', 70, 74, 10]] },
    { bg: 'rain', desc: 'After school it is pouring. The girl stands at the school gate looking worried, with no umbrella.',
      items: [['🏫', 28, 48, 36], ['🌧️', 62, 14, 15], ['🌧️', 88, 18, 13], ['👧', 66, 66, 18], ['@😟', 80, 40, 9]] },
    { bg: 'rain', desc: 'A classmate, a boy, offers to share his umbrella. They walk home together under one umbrella.',
      items: [['🌧️', 15, 14, 12], ['☂️', 50, 36, 30], ['👦', 40, 68, 16], ['👧', 61, 68, 16], ['🏠', 88, 62, 18], ['💧', 20, 90, 6], ['💧', 75, 92, 5]] },
    { bg: 'school', desc: 'The next day at school, the girl gives the boy a bag of homemade cookies to thank him. Both are smiling.',
      items: [['👧', 32, 62, 18], ['🍪', 51, 64, 10], ['👦', 72, 62, 18, 'f'], ['@😊', 50, 34, 9]] }
  ]
},
{
  id: 'S02', unit: 1, title: '小狗不見了',
  panels: [
    { bg: 'park', desc: 'A girl walks her dog in the park on a sunny afternoon. A butterfly flies nearby.',
      items: [['🌳', 14, 44, 28], ['🌳', 88, 42, 24], ['👧', 44, 60, 18], ['🐕', 64, 76, 14], ['🦋', 74, 38, 7]] },
    { bg: 'park', desc: 'The dog chases the butterfly and runs off. The girl looks around, upset, holding an empty leash.',
      items: [['🌳', 14, 44, 28], ['👧', 38, 60, 18], ['@😢', 52, 34, 9], ['🐕', 86, 78, 13, 'f'], ['🦋', 95, 54, 7]] },
    { bg: 'street', desc: 'The girl puts up a “lost dog” poster with the dog’s picture on a pole in the neighborhood.',
      items: [['#尋狗啟事', 62, 34, 9], ['🐶', 62, 52, 12], ['👧', 28, 64, 18], ['📌', 50, 22, 6]] },
    { bg: 'home', desc: 'An elderly neighbor brings the dog back to the girl’s door. The girl hugs the dog happily and thanks her.',
      items: [['🚪', 88, 52, 30], ['👵', 30, 60, 18], ['🐕', 50, 76, 13], ['👧', 66, 62, 18, 'f'], ['@❤️', 50, 34, 8]] }
  ]
},
{
  id: 'S03', unit: 1, title: '給媽媽的生日驚喜',
  panels: [
    { bg: 'home', desc: 'A brother and sister look at the calendar: tomorrow is Mom’s birthday. They whisper a secret plan.',
      items: [['#媽媽生日', 24, 30, 7], ['📅', 24, 46, 14], ['👧', 54, 64, 16], ['👦', 72, 64, 16, 'f'], ['@🤫', 64, 36, 8]] },
    { bg: 'kitchen', desc: 'In the kitchen, the kids try to bake a cake by themselves. Eggs, butter and flour are everywhere.',
      items: [['👧', 22, 58, 16], ['🥣', 48, 76, 17], ['🥚', 62, 72, 10], ['🧈', 72, 80, 10], ['💨', 46, 50, 13], ['👦', 82, 58, 16, 'f']] },
    { bg: 'kitchen', desc: 'Oh no — the cake comes out of the oven burned and smoking. The kids are shocked.',
      items: [['🎂', 50, 72, 22], ['🔥', 50, 48, 13], ['💨', 36, 30, 16], ['💨', 64, 24, 14], ['👧', 16, 62, 15], ['👦', 84, 62, 15, 'f'], ['@😱', 18, 30, 9]] },
    { bg: 'home', desc: 'Mom comes home. The kids give her a handmade card and flowers instead. Mom is touched and smiles.',
      items: [['👩', 28, 58, 18], ['💐', 46, 72, 13], ['💌', 58, 66, 11], ['👧', 70, 62, 15, 'f'], ['👦', 86, 62, 15, 'f'], ['@🥰', 30, 30, 9]] }
  ]
},
{
  id: 'S04', unit: 4, title: '低頭族',
  panels: [
    { bg: 'street', desc: 'A boy walks down the street staring at his phone, not looking where he is going.',
      items: [['👦', 40, 56, 18], ['📱', 50, 70, 12], ['🚦', 84, 40, 16], ['🌳', 12, 46, 20]] },
    { bg: 'street', desc: 'Still looking at his phone, he walks straight into a bus-stop pole. His phone flies out of his hand.',
      items: [['🚏', 62, 44, 34], ['💥', 52, 44, 13], ['👦', 40, 62, 18], ['📱', 84, 22, 11, 'r30'], ['💫', 30, 36, 9]] },
    { bg: 'home', desc: 'At home, the boy has a bandage on his forehead. His mother talks to him seriously about using his phone while walking.',
      items: [['👩', 28, 58, 18], ['@💬', 40, 30, 9], ['👦', 66, 62, 18, 'f'], ['🩹', 66, 50, 7], ['📱', 86, 80, 7]] },
    { bg: 'park', desc: 'Days later, the boy walks with a friend, phone put away, looking around and chatting. Birds and flowers are around them.',
      items: [['👦', 38, 62, 17], ['🧒', 60, 62, 17, 'f'], ['@😄', 48, 34, 9], ['🌸', 84, 70, 8], ['🐦', 20, 24, 7], ['🌳', 88, 42, 20]] }
  ]
},
{
  id: 'S05', unit: 6, title: '海邊的一天',
  panels: [
    { bg: 'beach', desc: 'A family arrives at the beach for a day trip, but the sand is covered in plastic bottles, cups and bags.',
      items: [['👨', 22, 56, 15], ['👩', 38, 56, 15], ['👧', 54, 62, 13], ['@😮', 60, 34, 8], ['🥤', 70, 84, 10], ['🧴', 81, 86, 10], ['🛍️', 91, 78, 10]] },
    { bg: 'beach', desc: 'The girl finds a sea turtle tangled in a plastic bag. She looks sad and worried.',
      items: [['👧', 30, 60, 16], ['@😢', 42, 32, 9], ['🐢', 64, 80, 20], ['🛍️', 72, 72, 11]] },
    { bg: 'beach', desc: 'The family and other volunteers put on gloves and pick up trash into big bags.',
      items: [['👧', 20, 60, 14], ['🧤', 32, 74, 9], ['🗑️', 50, 72, 15], ['👨', 72, 58, 14, 'f'], ['🧑', 90, 58, 14, 'f'], ['🥤', 38, 88, 9], ['🧴', 62, 88, 9]] },
    { bg: 'sunset', desc: 'At sunset the beach is clean. The freed turtle heads back to the sea, and the family smiles next to the recycling bins.',
      items: [['♻️', 13, 72, 13], ['👨', 32, 58, 13], ['👩', 46, 58, 13], ['👧', 60, 62, 12], ['@😊', 50, 30, 9], ['🐢', 82, 82, 15]] }
  ]
},
{
  id: 'S06', unit: 5, title: '運動會',
  panels: [
    { bg: 'school', desc: 'Two friends read a poster about the school sports day 400-meter race and decide to sign up.',
      items: [['#運動會 400公尺賽跑', 50, 22, 7], ['👧', 32, 66, 16], ['👧🏻', 66, 66, 16, 'f'], ['@💪', 49, 48, 8]] },
    { bg: 'dawn', desc: 'For weeks, the girl gets up early every morning to practice running before school.',
      items: [['⏰', 16, 22, 11], ['☀️', 84, 40, 14], ['🏃‍♀️', 50, 64, 22]] },
    { bg: 'track', desc: 'During the race, the girl trips and falls. Her friend stops running and comes back to help her up.',
      items: [['🤕', 36, 76, 14], ['👧🏻', 60, 62, 16, 'f'], ['🤝', 48, 66, 8], ['🏃', 86, 58, 12]] },
    { bg: 'track', desc: 'The two friends cross the finish line together, holding hands. Everyone claps, and they each get a medal for sportsmanship.',
      items: [['#終點', 82, 26, 8], ['👧', 42, 62, 15], ['👧🏻', 58, 62, 15], ['🏅', 50, 40, 8], ['👏', 14, 42, 9], ['👏', 90, 52, 9]] }
  ]
},
{
  id: 'S07', unit: 2, title: '中秋節的視訊',
  panels: [
    { bg: 'home', desc: 'In the US, a girl sees that it is the Mid-Autumn Festival on the calendar. She misses her grandparents in Taiwan.',
      items: [['#中秋節', 24, 30, 8], ['📅', 24, 48, 14], ['👧', 58, 64, 18], ['@👵👴', 74, 32, 10]] },
    { bg: 'kitchen', desc: 'The girl and her mother make mooncakes together in the kitchen.',
      items: [['👩', 30, 58, 17], ['👧', 62, 62, 16, 'f'], ['🥮', 42, 80, 12], ['🥮', 56, 82, 12]] },
    { bg: 'night', desc: 'That night, with the full moon in the window, the girl video-calls her grandparents. Both sides hold up mooncakes and smile.',
      items: [['🌕', 82, 18, 11], ['💻', 52, 60, 30], ['👵', 46, 54, 7], ['👴', 58, 54, 7], ['👧', 18, 70, 14], ['🥮', 30, 82, 7]] },
    { bg: 'nightout', desc: 'The next year, the grandparents come to visit. The whole family enjoys mooncakes under the full moon, with lanterns.',
      items: [['🌕', 80, 18, 13], ['🏮', 12, 24, 8], ['🏮', 94, 34, 7], ['👴', 22, 60, 14], ['👵', 38, 60, 14], ['👩', 54, 60, 14], ['👧', 70, 64, 12], ['🥮', 48, 84, 7]] }
  ]
},
{
  id: 'S08', unit: 1, title: '圖書館的書',
  panels: [
    { bg: 'library', desc: 'A boy borrows a book from the library. The librarian stamps it.',
      items: [['#圖書館', 50, 14, 8], ['📚', 16, 50, 18], ['👦', 44, 62, 17], ['📕', 58, 72, 11], ['👩', 78, 60, 15, 'f']] },
    { bg: 'home', desc: 'At home, his little sister knocks over a juice box and spills juice all over the library book. The boy is shocked.',
      items: [['👶', 34, 66, 13], ['🧃', 46, 70, 11, 'r-60'], ['💦', 56, 72, 9], ['📕', 64, 80, 12], ['👦', 82, 60, 16, 'f'], ['@😱', 72, 32, 8]] },
    { bg: 'home', desc: 'The boy takes money out of his piggy bank to pay for the damaged book.',
      items: [['🐷', 38, 72, 14], ['🪙', 52, 78, 6], ['🪙', 60, 80, 6], ['👦', 72, 60, 17, 'f'], ['@💭', 80, 30, 8]] },
    { bg: 'library', desc: 'He brings the damaged book and his savings to the librarian and apologizes. The librarian praises him for being honest.',
      items: [['#圖書館', 50, 14, 8], ['👦', 30, 62, 17], ['📕', 46, 72, 8], ['💵', 56, 72, 8], ['👩', 74, 60, 16, 'f'], ['@👍', 74, 32, 8]] }
  ]
}
];

// Official wording of the Story Narration prompt (CED 2026).
APZH.storyPrompt = 'Imagine you are writing a story presented in the four pictures for a class assignment. Use all four pictures to narrate a complete story that follows the order of the pictures.';

APZH.emails = [
{ id: 'E01', unit: 2, register: 'formal', from: '張老師（週末中文學校）', subject: '中秋晚會',
  body: ['各位同學：', '中秋節快到了，學校打算在下個月舉辦一場中秋晚會，邀請全校同學和家長一起參加。今年我們希望由同學們來設計活動內容。你覺得晚會上可以安排哪些活動，讓大家更了解中秋節的傳統？另外，你願意在活動中負責哪一項工作？為什麼？請在週五以前回信。謝謝！', '張老師'] },
{ id: 'E02', unit: 5, register: 'informal', from: '王小婷（表姊）', subject: '暑假去美國',
  body: ['嗨！好久不見！', '我爸媽說明年暑假可以讓我去美國參加夏令營，我好興奮喔！可是我不知道應該選哪一種夏令營比較好，你可以推薦一下嗎？還有，在美國參加夏令營，有什麼要特別注意或準備的事情嗎？等你的回信！', '小婷'] },
{ id: 'E03', unit: 1, register: 'formal', from: '李美玲（社區圖書館）', subject: '親子閱讀日',
  body: ['您好：', '本館計畫在寒假舉辦「親子閱讀日」，鼓勵家長和孩子一起讀書。想請您給我們一些意見：您覺得哪一類的書最適合小學生和家長一起閱讀？為什麼？另外，您認為我們可以用什麼方法吸引更多家庭來參加？謝謝您的協助！', '社區圖書館　李美玲'] },
{ id: 'E04', unit: 4, register: 'informal', from: '陳志豪（臺中的筆友）', subject: '上課可以用手機嗎？',
  body: ['你好！', '最近我們學校在討論要不要禁止學生在上課時間使用手機，大家吵得很厲害。我想知道你們學校對手機有什麼規定？你自己覺得學生在學校應不應該用手機呢？為什麼？', '志豪'] },
{ id: 'E05', unit: 6, register: 'formal', from: '學生會', subject: '環保週',
  body: ['各位同學好：', '下個月是學校的「環保週」，學生會正在收集大家的想法。你認為在日常生活中，學生最應該做到的環保行動是什麼？為什麼？另外，你覺得學校可以舉辦什麼活動，讓更多同學願意參與環保？謝謝你的寶貴意見！', '學生會　敬上'] },
{ id: 'E06', unit: 3, register: 'informal', from: '林佳佳（好朋友）', subject: '想學一種樂器',
  body: ['嗨～', '最近我好想學一種樂器，可是不知道要學鋼琴、吉他還是小提琴。你覺得我應該學哪一種？為什麼？還有，我以前學東西常常學到一半就放棄了，你有什麼好方法可以讓我一直練下去嗎？', '佳佳'] },
{ id: 'E07', unit: 6, register: 'formal', from: '王阿姨（鄰居）', subject: '請教你一些事情',
  body: ['你好：', '我的兒子明年要到你住的城市念大學，我們對那裡完全不熟悉。想請問你，那裡最方便的交通方式是什麼？另外，週末的時候有什麼好玩、值得去的地方嗎？麻煩你了，謝謝！', '王阿姨'] },
{ id: 'E08', unit: 2, register: 'informal', from: '張文文（同學）', subject: '一起做美食影片？',
  body: ['欸，', '我想在網路上開一個頻道，向外國人介紹臺灣的小吃！你覺得我們第一集應該介紹哪一種小吃？為什麼？還有，要怎麼做，才能讓不會說中文的外國人也看得懂、看得有興趣呢？', '文文'] },
{ id: 'E09', unit: 4, register: 'formal', from: '趙主任（社區活動中心）', subject: '招募志工：教長輩用手機',
  body: ['您好：', '本中心這學期開設「長輩智慧手機班」，正在招募青少年志工。想請問您：您覺得哪些手機功能對長輩的生活最有幫助？為什麼？另外，如果長輩學得比較慢，您會用什麼方法教他們？期待您的回覆。', '社區活動中心　趙主任'] },
{ id: 'E10', unit: 2, register: 'informal', from: '周明明（新加坡的筆友）', subject: '過年',
  body: ['你好！', '農曆新年快到了，我們家每年都會去奶奶家吃團圓飯、拿紅包。你們家在美國怎麼過年呢？你覺得在美國過年和在華人地區過年有什麼不同？', '明明'] },
{ id: 'E11', unit: 3, register: 'formal', from: '黃老師（中文老師）', subject: '文化週電影',
  body: ['同學們好：', '學校的文化週要放映一部華語電影或動畫，我想聽聽大家的推薦。你會推薦哪一部？為什麼？另外，看完以後，你覺得可以舉辦什麼樣的活動，讓同學們更了解片中的文化？', '黃老師'] },
{ id: 'E12', unit: 5, register: 'informal', from: '許小雨（好朋友）', subject: '壓力好大',
  body: ['嗨，', '最近功課好多，又要上游泳課和數學補習班，每天都覺得好累，壓力好大。你平常是怎麼安排時間的？你壓力大的時候，都怎麼讓自己放鬆呢？', '小雨'] }
];

// Official wording of the Email Response prompt (CED 2026).
APZH.emailPrompt = 'Read the email. Type a response to the email. Respond to both requests for information, providing relevant details and examples.';
