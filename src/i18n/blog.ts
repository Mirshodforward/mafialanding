// Blog content + UI strings for the Mafia Online blog (UZ / RU / EN).
// Each post is authored in all three languages and shares one slug, so the
// uz/ru/en versions hreflang-link cleanly. Pages read from here the same way
// the landing components read from copy.ts.

export type BlogLang = "uz" | "ru" | "en";
export const BLOG_LANGS: BlogLang[] = ["uz", "ru", "en"];

export const blogBase = (lang: BlogLang) => (lang === "uz" ? "" : `/${lang}`);
export const blogIndexPath = (lang: BlogLang) => `${blogBase(lang)}/blog`;
export const postPath = (lang: BlogLang, slug: string) => `${blogBase(lang)}/blog/${slug}`;
export const homePath = (lang: BlogLang) => (lang === "en" ? "/en/blog" : blogBase(lang) || "/");

/** A single content block. Authored by key-presence for terse, readable data. */
export type Block =
  | { p: string }
  | { h2: string }
  | { h3: string }
  | { ul: string[] }
  | { quote: string };

export interface PostContent {
  title: string;
  description: string;
  excerpt: string;
  keywords: string;
  body: Block[];
}

export interface BlogPost {
  slug: string;
  date: string;       // ISO publish date
  readMins: number;
  accent: string;     // hex accent for the card
  tag: Record<BlogLang, string>;
  uz: PostContent;
  ru: PostContent;
  en: PostContent;
}

/** UI chrome strings for the blog header / footer / index, per language. */
export const BLOG_UI: Record<BlogLang, {
  langName: string;
  nav: { home: string; blog: string; play: string };
  indexLabel: string;
  indexTitle: string;
  indexSubtitle: string;
  minRead: string;
  readMore: string;
  published: string;
  related: string;
  backToBlog: string;
  ctaTitle: string;
  ctaText: string;
  ctaPlay: string;
  ctaChannel: string;
  tagline: string;
  rights: string;
  metaIndexTitle: string;
  metaIndexDesc: string;
}> = {
  uz: {
    langName: "O'zbekcha",
    nav: { home: "Bosh sahifa", blog: "Blog", play: "O'ynash" },
    indexLabel: "Blog",
    indexTitle: "Mafiya olami: qo'llanma, strategiya va hikoyalar",
    indexSubtitle: "Mafiya o'yini qanday o'ynaladi, video chat qanday ishlaydi, 13 rol sirlari va g'alaba strategiyalari — hammasi bir joyda.",
    minRead: "daqiqa o'qish",
    readMore: "O'qish",
    published: "Nashr qilingan",
    related: "O'xshash maqolalar",
    backToBlog: "Barcha maqolalar",
    ctaTitle: "O'qidingmi? Endi o'ynab ko'r",
    ctaText: "Do'stlaringni chaqir, xona och va birinchi partiyangni hoziroq boshla.",
    ctaPlay: "Hoziroq o'ynash",
    ctaChannel: "Kanalga obuna",
    tagline: "Do'stlaring bilan o'ynaladigan jonli onlayn Mafiya o'yini.",
    rights: "Barcha huquqlar himoyalangan.",
    metaIndexTitle: "Blog — Mafia Online | Qo'llanma, rollar va strategiya",
    metaIndexDesc: "Mafia Online blogi: mafiya o'yini qanday o'ynaladi, video chat orqali mafiya, 13 rol tahlili, blef strategiyalari va do'stlar bilan onlayn mafiya bo'yicha maqolalar.",
  },
  ru: {
    langName: "Русский",
    nav: { home: "Главная", blog: "Блог", play: "Играть" },
    indexLabel: "Блог",
    indexTitle: "Мир Мафии: гайды, стратегия и истории",
    indexSubtitle: "Как играть в мафию онлайн, как работает видеочат, секреты 13 ролей и стратегии победы — всё в одном месте.",
    minRead: "мин чтения",
    readMore: "Читать",
    published: "Опубликовано",
    related: "Похожие статьи",
    backToBlog: "Все статьи",
    ctaTitle: "Прочитал? Теперь сыграй",
    ctaText: "Зови друзей, создавай комнату и начни первую партию прямо сейчас.",
    ctaPlay: "Играть сейчас",
    ctaChannel: "Подписаться на канал",
    tagline: "Живая онлайн игра Мафия для игры с друзьями.",
    rights: "Все права защищены.",
    metaIndexTitle: "Блог — Mafia Online | Гайды, роли и стратегия",
    metaIndexDesc: "Блог Mafia Online: как играть в мафию онлайн, мафия с видеочатом, разбор 13 ролей, стратегии блефа и игра в мафию с друзьями онлайн.",
  },
  en: {
    langName: "English",
    nav: { home: "Home", blog: "Blog", play: "Play" },
    indexLabel: "Blog",
    indexTitle: "The Mafia World: guides, strategy and stories",
    indexSubtitle: "How to play mafia online, how video chat works, the secrets of 13 roles and winning strategies — all in one place.",
    minRead: "min read",
    readMore: "Read",
    published: "Published",
    related: "Related articles",
    backToBlog: "All articles",
    ctaTitle: "Done reading? Now play",
    ctaText: "Invite your friends, create a room and start your first game right now.",
    ctaPlay: "Play now",
    ctaChannel: "Join the channel",
    tagline: "A live online Mafia game to play with friends.",
    rights: "All rights reserved.",
    metaIndexTitle: "Blog — Mafia Online | Guides, roles and strategy",
    metaIndexDesc: "The Mafia Online blog: how to play mafia online, mafia with video chat, a breakdown of all 13 roles, bluffing strategy and playing mafia with friends online.",
  },
};

export const POSTS: BlogPost[] = [
  // ── 1. How to play ──────────────────────────────────────────────────────
  {
    slug: "how-to-play-mafia-online",
    date: "2026-06-02",
    readMins: 7,
    accent: "#C41E3A",
    tag: { uz: "Qo'llanma", ru: "Гайд", en: "Guide" },
    uz: {
      title: "Mafiya o'yini qanday o'ynaladi? Yangi boshlovchilar uchun to'liq qo'llanma",
      description: "Mafiya o'yini qanday o'ynaladi: kechasi va kunduzi bosqichlari, nechi kishi kerakligi va g'alaba shartlari. Mafia Online'da do'stlar bilan onlayn mafiya o'ynashni 7 daqiqada o'rganing.",
      excerpt: "Tun tushadi, shahar uxlaydi — va kimdir uyg'oq qoladi. Mafiya o'yini qanday ishlaydi, nechi kishi kerak va birinchi partiyada qanday g'alaba qozonish mumkin?",
      keywords: "mafiya o'yini qanday o'ynaladi, mafiya o'yini qoidalari, mafiya o'yini nechi kishi kerak, do'stlar bilan onlayn mafiya, mafia online o'yna, how to play mafia online",
      body: [
        { p: "Tasavvur qiling: ekranda o'n kishi. Tashqaridan — oddiy do'stlar davrasi. Lekin ulardan ikkitasi mafiya, biri komissar, biri shifokor, biri esa hech kimga ishonmaydigan manyak. Birinchi tun boshlanganda hamma jim bo'ladi — va o'yin o'zining haqiqiy qiyofasini ochadi. Mafiya shunchaki o'yin emas; bu aldash, ishonch va deduksiya san'ati." },
        { h2: "Mafiya o'yini nima?" },
        { p: "Mafiya — bu ijtimoiy deduksiya (social deduction) o'yini. O'yinchilar ikki asosiy lagerga bo'linadi: kam sonli, lekin bir-birini taniydigan mafiya va ko'p sonli, ammo kim do'st-u kim dushman ekanini bilmaydigan shahar aholisi. Mafia Online'da bu klassik o'yin brauzer va Telegram orqali real vaqtda jonlanadi." },
        { h2: "Mafiya o'yini nechi kishi kerak?" },
        { p: "Klassik mafiyani 4 kishidan boshlash mumkin, lekin eng qiziqarli partiyalar 8–12 o'yinchida bo'ladi. Mafia Online'da bitta xonaga 4 dan 20 gacha o'yinchi sig'adi. Agar tirik o'yinchi yetishmasa, xonaga aqlli botlar qo'shiladi — shuning uchun o'yin hech qachon kutib qolmaydi." },
        { h2: "Kechasi va kunduzi: o'yin qanday kechadi" },
        { p: "O'yin tun va kun bosqichlaridan iborat takrorlanuvchi sikl bo'yicha boradi:" },
        { ul: [
          "Tun bosqichi: shahar 'uxlaydi'. Mafiya jimgina qurbon tanlaydi, komissar kimnidir tekshiradi, shifokor esa kimnidir himoya qiladi.",
          "Kunduzgi bosqich: tunda nima bo'lgani e'lon qilinadi va butun shahar muhokama qiladi — har kim ayblaydi yoki o'zini oqlaydi.",
          "Ovoz berish: shahar eng shubhali o'yinchini ovoz berish orqali 'linch' qiladi. Adashsa — begunoh aholini yo'qotadi.",
        ] },
        { h2: "G'alaba shartlari" },
        { p: "Shahar barcha mafiyani topib yo'q qilsa — shahar yutadi. Mafiya soni tirik aholiga tenglashsa — mafiya yutadi. Manyak yoki suitsid kabi neytral rollar esa o'z shaxsiy maqsadiga erishsa g'olib bo'ladi. Aynan shu uch tomonlama kurash har bir partiyani takrorlanmas qiladi." },
        { h2: "Birinchi partiya uchun 5 maslahat" },
        { ul: [
          "Jim turmang — sukut saqlovchi o'yinchi birinchi bo'lib shubha ostiga tushadi.",
          "Ovozlarni eslab qoling: kim kimni himoya qildi, kim kimni aybladi.",
          "Mafiya bo'lsangiz, haddan tashqari tinch bo'lmang — tabiiy ko'rining.",
          "Komissar bo'lsangiz, tekshiruvlaringizni juda erta oshkor qilmang.",
          "Ovozli yoki video chatdan foydalaning — ovoz va yuz ifodasi haqiqatni ochadi.",
        ] },
        { quote: "Eng yaxshi usul — o'qish emas, o'ynab ko'rish. Do'stlaringizni chaqiring, xona oching va birinchi tuningizni boshlang." },
      ],
    },
    ru: {
      title: "Как играть в мафию онлайн? Полный гайд для новичков",
      description: "Как играть в мафию онлайн: фазы ночи и дня, сколько нужно игроков и условия победы. Научитесь играть в мафию с друзьями онлайн в Mafia Online за 7 минут.",
      excerpt: "Наступает ночь, город засыпает — и кто-то остаётся бодрствовать. Как работает мафия, сколько нужно игроков и как победить в первой партии?",
      keywords: "как играть в мафию онлайн, правила игры мафия онлайн, мафия с друзьями онлайн, где поиграть в мафию онлайн бесплатно, mafia online, how to play mafia online",
      body: [
        { p: "Представьте: на экране десять человек. Со стороны — обычная компания друзей. Но двое из них мафия, один комиссар, один доктор, а ещё один — маньяк, который не верит никому. Когда наступает первая ночь, все замолкают — и игра показывает своё истинное лицо. Мафия это не просто игра; это искусство обмана, доверия и дедукции." },
        { h2: "Что такое мафия?" },
        { p: "Мафия — это игра на социальную дедукцию (social deduction). Игроки делятся на два лагеря: малочисленную мафию, которая знает друг друга, и многочисленный город, который не знает, кто друг, а кто враг. В Mafia Online эта классика оживает в реальном времени прямо в браузере и Telegram." },
        { h2: "Сколько нужно игроков для мафии?" },
        { p: "Классическую мафию можно начать вчетвером, но самые интересные партии получаются на 8–12 игроках. В Mafia Online одна комната вмещает от 4 до 20 игроков. Если живых игроков не хватает, добавляются умные боты — поэтому игра никогда не простаивает." },
        { h2: "Ночь и день: как идёт партия" },
        { p: "Игра идёт повторяющимся циклом из фаз ночи и дня:" },
        { ul: [
          "Фаза ночи: город «спит». Мафия тихо выбирает жертву, комиссар кого-то проверяет, а доктор кого-то лечит.",
          "Фаза дня: объявляется, что случилось ночью, и весь город обсуждает — каждый обвиняет или оправдывается.",
          "Голосование: город «линчует» самого подозрительного игрока. Ошибётся — потеряет невиновного.",
        ] },
        { h2: "Условия победы" },
        { p: "Если город находит и устраняет всю мафию — побеждает город. Если мафии становится столько же, сколько мирных — побеждает мафия. А нейтральные роли вроде маньяка или самоубийцы выигрывают, достигнув своей личной цели. Именно эта борьба трёх сторон делает каждую партию неповторимой." },
        { h2: "5 советов для первой партии" },
        { ul: [
          "Не молчите — молчун первым попадает под подозрение.",
          "Запоминайте голоса: кто кого защищал, кто кого обвинял.",
          "Если вы мафия, не будьте слишком спокойны — ведите себя естественно.",
          "Если вы комиссар, не раскрывайте проверки слишком рано.",
          "Используйте голосовой или видеочат — голос и мимика выдают правду.",
        ] },
        { quote: "Лучший способ — не читать, а сыграть. Зовите друзей, создавайте комнату и начинайте свою первую ночь." },
      ],
    },
    en: {
      title: "How to Play Mafia Online: a Complete Beginner's Guide",
      description: "How to play mafia online: the night and day phases, how many players you need and the win conditions. Learn to play mafia with friends online in Mafia Online in 7 minutes.",
      excerpt: "Night falls, the town sleeps — and someone stays awake. How does mafia work, how many players do you need, and how do you win your first game?",
      keywords: "how to play mafia online, mafia game rules, how many players for mafia, play mafia with friends online, mafia social deduction game, mafia online free",
      body: [
        { p: "Picture ten people on a screen. From the outside, just a group of friends. But two of them are mafia, one is the detective, one is the doctor, and one is a maniac who trusts no one. When the first night begins, everyone goes quiet — and the game shows its true face. Mafia is not just a game; it is the art of deception, trust and deduction." },
        { h2: "What is mafia?" },
        { p: "Mafia is a social deduction game. Players split into two camps: a small mafia that knows each other, and a large town that has no idea who is a friend and who is a foe. In Mafia Online this classic comes alive in real time, right in your browser and in Telegram." },
        { h2: "How many players do you need?" },
        { p: "You can start classic mafia with four people, but the best games happen with 8–12 players. A Mafia Online room holds 4 to 20 players, and when there are not enough humans, smart bots fill the seats — so the game never stalls." },
        { h2: "Night and day: how a game flows" },
        { p: "A game runs as a repeating cycle of night and day phases:" },
        { ul: [
          "Night phase: the town 'sleeps'. The mafia quietly pick a victim, the detective investigates someone, and the doctor protects someone.",
          "Day phase: the night's results are revealed and the whole town debates — everyone accuses or defends.",
          "Voting: the town 'lynches' the most suspicious player by vote. Get it wrong, and an innocent is lost.",
        ] },
        { h2: "Win conditions" },
        { p: "If the town finds and removes all of the mafia, the town wins. If the mafia ever equal the number of townsfolk, the mafia win. Neutral roles such as the maniac or the suicide win by reaching their own private goal. This three-way struggle is what makes every game unique." },
        { h2: "5 tips for your first game" },
        { ul: [
          "Do not stay silent — the quiet player is suspected first.",
          "Remember the votes: who defended whom, who accused whom.",
          "If you are mafia, do not be too calm — act natural.",
          "If you are the detective, do not reveal your checks too early.",
          "Use voice or video chat — tone and facial expression give the truth away.",
        ] },
        { quote: "The best way to learn is not to read but to play. Invite your friends, open a room and start your first night." },
      ],
    },
  },

  // ── 2. Video chat ───────────────────────────────────────────────────────
  {
    slug: "mafia-video-chat",
    date: "2026-06-06",
    readMins: 6,
    accent: "#D4AF37",
    tag: { uz: "Video chat", ru: "Видеочат", en: "Video chat" },
    uz: {
      title: "Video chat orqali mafiya: kamera o'yinni qanday o'zgartiradi",
      description: "Video chat orqali mafiya — kamera va ovoz qo'shilganda blef yangi darajaga chiqadi. Vebkamera mafiya online qanday ishlashi va nega bu o'yinni qiziqarliroq qilishini bilib oling.",
      excerpt: "Matnli mafiyada yolg'on oson. Lekin kameraga qarab turib yolg'on gapirish — butunlay boshqa san'at. Video chat mafiyani qanday tubdan o'zgartiradi?",
      keywords: "video chat orqali mafiya, video chat mafiya o'yini, kamera orqali mafiya o'yna, vebkamera mafiya online, mafiya video qo'ng'iroq bilan, real-time mafia video chat",
      body: [
        { p: "Klassik mafiyada eng kuchli quroli — yuz. Stol atrofida o'tirganingizda raqibingizning ko'zlari, jilmayishi va qo'l harakatlari sizga ming so'zdan ko'p narsani aytadi. Onlayn o'yinlar uzoq vaqt shu sehrni yo'qotgan edi. Video chat orqali mafiya esa uni qaytaradi." },
        { h2: "Nega video chat hammasini o'zgartiradi" },
        { p: "Inson yolg'on gapirganda tanasi uni sotadi: ko'z qochirish, beixtiyor jilmayish, ovoz titrashi. Video chat mafiyada bu mikroifodalar yana ishga tushadi. Endi siz nafaqat nima deyilganini, balki uni qanday aytilganini ham o'qiysiz — bu deduksiyani butunlay yangi darajaga olib chiqadi." },
        { h2: "Vebkamera mafiya online qanday ishlaydi" },
        { p: "Mafia Online'da kamera va mikrofon to'g'ridan-to'g'ri brauzerda ishlaydi — hech narsa yuklab olish yoki o'rnatish shart emas. Xonaga qo'shilasiz, kamerangizni yoqasiz va boshqa o'yinchilarni real vaqtda ko'rib, eshitib turasiz. Hammasi ro'yxatdan o'tmasdan, bir necha soniyada." },
        { h2: "Ovoz va kamera: blefning yangi qatlami" },
        { p: "Mafiya bo'lsangiz, vazifangiz ikki barobar qiyinlashadi: nafaqat to'g'ri so'zlarni topish, balki yuzingizni ham boshqarish kerak. Shahar bo'lsangiz, raqiblaringizning har bir reaksiyasini kuzatasiz. Aynan shu jonli muloqot mafiyani video qo'ng'iroq bilan haqiqiy psixologik duelga aylantiradi." },
        { h2: "Real vaqt video chat afzalliklari" },
        { ul: [
          "Jonli his — do'stlaringiz xuddi yoningizda o'tirgandek.",
          "Mikroifodalar orqali yolg'onni topish osonroq.",
          "Kulgi, qichqiriq va 'ishonmayman!' lahzalari eslab qoladigan bo'ladi.",
          "Brauzerda ishlaydi — ilova ham, ro'yxat ham kerak emas.",
        ] },
        { h2: "Kamerasiz ham o'ynash mumkinmi?" },
        { p: "Albatta. Kamera va mikrofon — ixtiyoriy. Uyalchoq bo'lsangiz yoki internet sekin bo'lsa, faqat matn yoki ovoz orqali ham o'ynay olasiz. Lekin bir marta kamera bilan o'ynab ko'rsangiz, ortga qaytish qiyin bo'ladi." },
        { quote: "Video chat mafiyani ekrandan stol atrofiga qaytaradi — faqat endi do'stlaringiz dunyoning istalgan nuqtasida bo'lishi mumkin." },
      ],
    },
    ru: {
      title: "Мафия с видеочатом: как камера меняет игру",
      description: "Мафия с видеочатом — когда добавляются камера и голос, блеф выходит на новый уровень. Узнайте, как работает мафия с веб-камерой онлайн и почему это интереснее.",
      excerpt: "В текстовой мафии врать легко. Но врать, глядя в камеру — совсем другое искусство. Как видеочат полностью меняет мафию?",
      keywords: "мафия с видеочатом, мафия с веб-камерой, мафия с видеозвонком онлайн, онлайн игра мафия с видео, real-time mafia video chat, video chat orqali mafiya",
      body: [
        { p: "В классической мафии самое сильное оружие — лицо. Когда вы сидите за столом, глаза, улыбка и жесты соперника говорят больше тысячи слов. Онлайн-игры надолго потеряли эту магию. Мафия с видеочатом её возвращает." },
        { h2: "Почему видеочат меняет всё" },
        { p: "Когда человек врёт, его выдаёт тело: бегающий взгляд, невольная улыбка, дрожь в голосе. В мафии с видеочатом эти микровыражения снова в игре. Теперь вы читаете не только то, что сказано, но и то, как это сказано — а это поднимает дедукцию на новый уровень." },
        { h2: "Как работает мафия с веб-камерой онлайн" },
        { p: "В Mafia Online камера и микрофон работают прямо в браузере — ничего не нужно скачивать или устанавливать. Вы заходите в комнату, включаете камеру и видите и слышите других игроков в реальном времени. Всё без регистрации, за несколько секунд." },
        { h2: "Голос и камера: новый слой блефа" },
        { p: "Если вы мафия, задача усложняется вдвое: нужно подобрать не только верные слова, но и удержать лицо. Если вы город — вы следите за каждой реакцией соперников. Именно это живое общение превращает мафию с видеозвонком в настоящую психологическую дуэль." },
        { h2: "Преимущества видеочата в реальном времени" },
        { ul: [
          "Живое ощущение — будто друзья сидят рядом.",
          "Ложь легче поймать по микровыражениям.",
          "Смех, крики и моменты «не верю!» запоминаются надолго.",
          "Работает в браузере — без приложения и регистрации.",
        ] },
        { h2: "А можно играть без камеры?" },
        { p: "Конечно. Камера и микрофон — по желанию. Если стесняетесь или интернет медленный, можно играть только текстом или голосом. Но стоит один раз сыграть с камерой — и возвращаться уже не захочется." },
        { quote: "Видеочат возвращает мафию с экрана за стол — только теперь ваши друзья могут быть в любой точке мира." },
      ],
    },
    en: {
      title: "Mafia with Video Chat: How the Camera Changes the Game",
      description: "Mafia with video chat — when camera and voice are added, bluffing reaches a new level. Learn how mafia with a webcam works online and why it makes the game better.",
      excerpt: "Lying in text mafia is easy. But lying while looking into a camera is a whole different art. How does video chat completely change mafia?",
      keywords: "mafia with video chat, mafia game webcam online, mafia game with video call, mafia live video multiplayer, real-time mafia video chat",
      body: [
        { p: "In classic mafia, your strongest weapon is your face. Sitting around a table, an opponent's eyes, smile and gestures tell you more than a thousand words. Online games lost that magic for a long time. Mafia with video chat brings it back." },
        { h2: "Why video chat changes everything" },
        { p: "When a person lies, the body betrays them: darting eyes, an involuntary smile, a tremble in the voice. In mafia with video chat these micro-expressions are back in play. Now you read not only what is said, but how it is said — and that lifts deduction to a whole new level." },
        { h2: "How webcam mafia works online" },
        { p: "In Mafia Online the camera and microphone run right in the browser — nothing to download or install. You join a room, turn on your camera, and see and hear the other players in real time. All with no registration, in a few seconds." },
        { h2: "Voice and camera: a new layer of bluff" },
        { p: "If you are mafia, the task doubles: you must find not only the right words but also keep a straight face. If you are the town, you watch every reaction of your opponents. This live interaction is what turns mafia with a video call into a true psychological duel." },
        { h2: "Benefits of real-time video chat" },
        { ul: [
          "A live feeling — as if your friends were right next to you.",
          "Lies are easier to catch through micro-expressions.",
          "Laughs, shouts and 'I don't believe you!' moments stay memorable.",
          "Runs in the browser — no app and no registration.",
        ] },
        { h2: "Can you play without a camera?" },
        { p: "Of course. Camera and microphone are optional. If you are shy or your connection is slow, you can play with text or voice only. But play once with the camera on, and going back is hard." },
        { quote: "Video chat brings mafia off the screen and back to the table — only now your friends can be anywhere in the world." },
      ],
    },
  },

  // ── 3. 13 roles ─────────────────────────────────────────────────────────
  {
    slug: "13-mafia-roles-explained",
    date: "2026-06-10",
    readMins: 8,
    accent: "#2563EB",
    tag: { uz: "Rollar", ru: "Роли", en: "Roles" },
    uz: {
      title: "Mafiyaning 13 roli: Don'dan Manyakgacha to'liq tahlil",
      description: "Mafiya online rollar: Don, Komissar, Serjant, Shifokor, Manyak va boshqalar. Har bir rolning vazifasi va strategiyasi — 13 rollar mafiya o'yini bo'yicha to'liq qo'llanma.",
      excerpt: "Har bir partiya — yangi taqdir. Mafia Online'ning 13 roli, ularning yashirin qobiliyatlari va har biri uchun g'alaba strategiyasi.",
      keywords: "mafiya o'yini rollar, roli v mafii, mafiyada don roli, mafiya sherifning vazifasi, mafiya o'yinida shifokor, 13 rollar mafiya o'yini, mafia game doctor sheriff roles",
      body: [
        { p: "Mafiyada kim ekaningiz — bu sizning taqdiringiz. Kichik kartochkadagi bitta so'z butun partiya davomida qanday o'ynashingizni belgilaydi. Mafia Online'da 13 ta noyob rol bor va ularni uch jamoaga bo'lish mumkin: mafiya, shahar va neytral." },
        { h2: "Mafiya jamoasi" },
        { p: "Kam sonli, lekin tunda birga ish ko'radigan eng xavfli kuch." },
        { ul: [
          "Don — mafiya boshlig'i. Kechasi oila bilan qurbon tanlaydi va hukmni ijro etadi. Komissar uni tekshirsa ham, ko'pincha 'tinch' bo'lib ko'rinadi.",
          "Mafiya — oilaning oddiy a'zosi. Don o'lsa, uning o'rnini egallaydi. Asosiy vazifa — shahar orasiga singib, shubhani boshqaga burish.",
        ] },
        { h2: "Shahar jamoasi" },
        { p: "Ko'pchilik, lekin ko'r — kim do'st-u kim dushman ekanini bilmaydi. Ularning kuchi — birlik va mantiqda." },
        { ul: [
          "Komissar Katani — shaharning bosh himoyachisi. Kechasi o'yinchini tekshiradi yoki o'ldiradi.",
          "Serjant — komissar tekshiruvlaridan xabardor; komissar o'lsa, o'rnini egallaydi.",
          "Shifokor — kechasi bir o'yinchini hujumdan qutqaradi, bir marta o'zini ham.",
          "Advokat — mijozini himoya qiladi: komissar uni 'tinch' deb ko'radi.",
          "Daydi — tun bo'yi shahar kezadi va kim kimga borganini ko'radi.",
          "Omadli — hujumga uchraganda 50% omon qolish imkoniyati bor.",
          "Kamikaze — linchda osilsa, o'zi bilan yana birini olib ketadi.",
          "Ma'shuqa — istalgan o'yinchini bir kechaga chalg'itadi.",
          "Tinch aholi — qobiliyatsiz, lekin ovozi va mantig'i bilan kuchli.",
        ] },
        { h2: "Neytral kuchlar" },
        { p: "Hech kimning do'sti emas — faqat o'zi uchun o'ynaydi va o'yin muvozanatini ag'darib yuboradi." },
        { ul: [
          "Qotil (Manyak) — har kecha birini o'ldiradi. Maqsadi — hammani yo'q qilib, yolg'iz g'olib bo'lish.",
          "Suitsid — faqat kunduzgi ovoz berishda linch qilinsagina g'olib. Kechasi o'lsa — yutqazadi.",
        ] },
        { h2: "Qaysi rol siz uchun?" },
        { p: "Agar sovuqqonlik va aldash yoqsa — mafiya yoki manyak sizniki. Mantiq va tahlilni sevsangiz — komissar yoki daydi. Boshqalarni himoya qilishni xohlasangiz — shifokor. Eng yaxshi tomoni: har partiyada rol o'zgaradi, shuning uchun zerikish degan narsa yo'q." },
        { quote: "13 rol — bu 13 xil hikoya. Keyingi tun sizga qaysi birini beradi?" },
      ],
    },
    ru: {
      title: "13 ролей в мафии: полный разбор от Дона до Маньяка",
      description: "Роли в мафии онлайн: Дон, Комиссар, Сержант, Доктор, Маньяк и другие. Задача и стратегия каждой роли — полный гайд по 13 ролям игры мафия.",
      excerpt: "Каждая партия — новая судьба. 13 ролей Mafia Online, их скрытые способности и стратегия победы для каждой.",
      keywords: "роли в мафии онлайн, роль мафии в игре, обязанности комиссара в мафии, доктор в мафии, 13 ролей мафия, mafia game doctor sheriff roles",
      body: [
        { p: "В мафии то, кто вы есть — это ваша судьба. Одно слово на маленькой карточке определяет, как вы будете играть всю партию. В Mafia Online 13 уникальных ролей, и их можно поделить на три команды: мафия, город и нейтралы." },
        { h2: "Команда мафии" },
        { p: "Малочисленная, но самая опасная сила, которая действует ночью сообща." },
        { ul: [
          "Дон — глава мафии. Ночью с семьёй выбирает жертву и приводит приговор в исполнение. Даже при проверке часто выглядит «мирным».",
          "Мафия — рядовой член семьи. Если Дон убит, занимает его место. Главная задача — раствориться среди города и перевести подозрение на других.",
        ] },
        { h2: "Команда города" },
        { p: "Большинство, но «слепое» — не знает, кто друг, а кто враг. Их сила в единстве и логике." },
        { ul: [
          "Комиссар Катани — главный защитник города. Ночью проверяет или убивает игрока.",
          "Сержант — знает о проверках комиссара; если тот погибает, занимает его место.",
          "Доктор — ночью спасает одного игрока от атаки, один раз может спасти себя.",
          "Адвокат — защищает клиента: комиссар видит его как «мирного».",
          "Бомж — всю ночь бродит по городу и видит, кто к кому ходил.",
          "Счастливчик — при атаке с шансом 50% остаётся в живых.",
          "Камикадзе — если его линчуют, забирает с собой ещё одного.",
          "Любовница — отвлекает любого игрока на одну ночь.",
          "Мирный житель — без способностей, но силён голосом и логикой.",
        ] },
        { h2: "Нейтральные силы" },
        { p: "Ничей друг — играет только за себя и переворачивает баланс партии." },
        { ul: [
          "Маньяк — каждую ночь убивает одного. Цель — уничтожить всех и победить в одиночку.",
          "Самоубийца — побеждает, только если его линчуют днём. Умрёт ночью — проигрывает.",
        ] },
        { h2: "Какая роль для вас?" },
        { p: "Любите хладнокровие и обман — ваше это мафия или маньяк. Любите логику и анализ — комиссар или бомж. Хотите защищать других — доктор. Лучшее в том, что роль меняется каждую партию, так что скучать не придётся." },
        { quote: "13 ролей — это 13 разных историй. Какую из них подарит вам следующая ночь?" },
      ],
    },
    en: {
      title: "The 13 Mafia Roles Explained: From the Don to the Maniac",
      description: "Mafia online roles: the Don, Detective, Sergeant, Doctor, Maniac and more. The job and strategy of every role — a full guide to the 13 roles of the mafia game.",
      excerpt: "Every game is a new fate. The 13 roles of Mafia Online, their hidden abilities, and a winning strategy for each one.",
      keywords: "mafia game roles explained, roles in mafia online, mafia don role, mafia detective sheriff role, mafia doctor role, 13 mafia roles",
      body: [
        { p: "In mafia, who you are is your fate. A single word on a small card decides how you play the entire game. Mafia Online has 13 unique roles, and they fall into three teams: the mafia, the town and the neutrals." },
        { h2: "The mafia team" },
        { p: "Few in number but the most dangerous force, acting together at night." },
        { ul: [
          "Don — the head of the mafia. At night, with the family, he picks the victim and carries out the sentence. Even when investigated, he often appears 'innocent'.",
          "Mafia — a regular family member. If the Don dies, takes his place. The main job is to blend into the town and shift suspicion onto others.",
        ] },
        { h2: "The town team" },
        { p: "The majority, but 'blind' — they do not know who is friend or foe. Their strength is unity and logic." },
        { ul: [
          "Detective (Commissioner Catani) — the town's main protector. At night investigates or kills a player.",
          "Sergeant — knows the detective's checks; if the detective dies, takes over.",
          "Doctor — saves one player from attack each night, and can save himself once.",
          "Lawyer — protects a client: the detective sees them as 'innocent'.",
          "Tramp — wanders the town all night and sees who visited whom.",
          "Lucky — has a 50% chance to survive an attack.",
          "Kamikaze — if lynched, takes another player down with him.",
          "Mistress — distracts any player for one night.",
          "Townsperson — no ability, but strong through vote and logic.",
        ] },
        { h2: "The neutral forces" },
        { p: "No one's friend — plays only for themselves and tips the balance of the game." },
        { ul: [
          "Maniac — kills one player each night. The goal is to wipe out everyone and win alone.",
          "Suicide — wins only if lynched during the day. Die at night, and they lose.",
        ] },
        { h2: "Which role is for you?" },
        { p: "Love cold blood and deception — mafia or maniac is yours. Love logic and analysis — the detective or the tramp. Want to protect others — the doctor. The best part is that your role changes every game, so there is no room for boredom." },
        { quote: "13 roles are 13 different stories. Which one will the next night hand you?" },
      ],
    },
  },

  // ── 4. Strategy & psychology ────────────────────────────────────────────
  {
    slug: "mafia-strategy-and-psychology",
    date: "2026-06-14",
    readMins: 7,
    accent: "#7C3AED",
    tag: { uz: "Strategiya", ru: "Стратегия", en: "Strategy" },
    uz: {
      title: "Blef san'ati: mafiyada g'alaba qozonish psixologiyasi",
      description: "Mafiya — psixologik o'yin. Blef, deduksiya va ishonchni boshqarish orqali qanday g'alaba qozonish mumkin. Social deduction strategiyalari va Among Us bilan farqi.",
      excerpt: "Mafiyada eng kuchli o'yinchi ko'p gapiruvchi emas — to'g'ri lahzada to'g'ri yolg'onni aytadigan o'yinchi. Blef va deduksiya psixologiyasiga sho'ng'iymiz.",
      keywords: "psixologik o'yin onlayn, blef o'yini online, deduction game online, social deduction game, mafia game better than among us, mafiya strategiya",
      body: [
        { p: "Mafiya — kamdan-kam o'yinlardan biriki, unda g'alaba sizning rolingizga emas, balki odamlarni qanchalik yaxshi o'qiy olishingizga bog'liq. Bu shaxmat emas; bu jonli psixologiya. Va yaxshi xabar shuki, blefni ham, deduksiyani ham o'rganish mumkin." },
        { h2: "Deduksiya nima va u qanday ishlaydi" },
        { p: "Deduksiya — ma'lumotni to'plab, undan xulosa chiqarish san'ati. Kim juda tez himoyalandi? Kim ovoz berishda nazarda qoldi? Kim mantiqsiz ayblayapti? Har bir partiya — bu jumboq va har bir o'yinchi — bir bo'lak. Yaxshi o'yinchi gaplarni emas, naqshlarni ko'radi." },
        { h2: "Mafiya uchun strategiya: ko'rinmaslik san'ati" },
        { p: "Eng katta xato — haddan tashqari tinch yoki haddan tashqari faol bo'lish. Tabiiy o'ynang: ba'zan begunohni ayblang, ba'zan to'g'ri xulosaga qo'shiling. Eng kuchli mafiya — shaharni o'z foydasiga 'yo'naltira oladigan' mafiya, qichqiradigan emas." },
        { h2: "Shahar uchun strategiya: ovozni boshqarish" },
        { p: "Shahar bo'lsangiz, eng katta quroli — birlik. Tasodifiy ovoz bermang. Savol bering, ziddiyatlarni qidiring va kim kimni himoya qilayotganini kuzating. Ko'pincha mafiya bir-birini beixtiyor himoya qilib, o'zini sotadi." },
        { h2: "Blef psixologiyasi" },
        { ul: [
          "Ishonchli bo'ling — ikkilanish shubha uyg'otadi.",
          "Tafsilot qo'shing — yaxshi yolg'onda kichik, tekshirib bo'lmas detallar bo'ladi.",
          "Hujumni o'zingizdan boshqaga buring, lekin asossiz emas.",
          "Sukutni qurol sifatida ishlating — har doim ham gapirish shart emas.",
        ] },
        { h2: "Mafia vs Among Us: farqi nimada?" },
        { p: "Among Us — qiziqarli, lekin asosan vazifa va xaritaga asoslangan. Mafiyada esa hammasi muloqotda: ishontirish, ayblash, blef. Mafia Online ovozli va video chat qo'shib, bu jonli munozarani markazga qo'yadi — shuning uchun ko'plar uni 'Among Us'ning kattalar uchun, jiddiyroq versiyasi' deb ataydi." },
        { quote: "Mafiyada haqiqat muhim emas — odamlar nimaga ishonishi muhim. Ana shu ishonchni boshqargan g'olib bo'ladi." },
      ],
    },
    ru: {
      title: "Искусство блефа: психология победы в мафии",
      description: "Мафия — психологическая игра. Как побеждать через блеф, дедукцию и управление доверием. Стратегии social deduction и отличие от Among Us.",
      excerpt: "Сильнейший игрок в мафии не тот, кто больше говорит, а тот, кто в нужный момент произносит нужную ложь. Погружаемся в психологию блефа и дедукции.",
      keywords: "психологическая игра онлайн, игра на логику онлайн, deduction game online, social deduction game, mafia game better than among us, стратегия мафии",
      body: [
        { p: "Мафия — одна из немногих игр, где победа зависит не от вашей роли, а от того, насколько хорошо вы читаете людей. Это не шахматы; это живая психология. И хорошая новость в том, что и блефу, и дедукции можно научиться." },
        { h2: "Что такое дедукция и как она работает" },
        { p: "Дедукция — искусство собирать информацию и делать из неё выводы. Кто слишком быстро начал защищаться? Кто отсиделся на голосовании? Кто обвиняет нелогично? Каждая партия — головоломка, а каждый игрок — её фрагмент. Хороший игрок видит не слова, а закономерности." },
        { h2: "Стратегия за мафию: искусство быть незаметным" },
        { p: "Главная ошибка — быть слишком спокойным или слишком активным. Играйте естественно: иногда обвиняйте невиновного, иногда соглашайтесь с верным выводом. Сильнейшая мафия та, что умеет «направлять» город в свою пользу, а не та, что кричит." },
        { h2: "Стратегия за город: управление голосованием" },
        { p: "Если вы город, ваше главное оружие — единство. Не голосуйте наугад. Задавайте вопросы, ищите противоречия и следите, кто кого защищает. Часто мафия невольно прикрывает своих — и тем себя выдаёт." },
        { h2: "Психология блефа" },
        { ul: [
          "Будьте уверены — колебание рождает подозрение.",
          "Добавляйте детали — в хорошей лжи есть мелкие, непроверяемые подробности.",
          "Переводите подозрение с себя, но не без оснований.",
          "Используйте молчание как оружие — говорить нужно не всегда.",
        ] },
        { h2: "Мафия против Among Us: в чём разница?" },
        { p: "Among Us интересна, но в основном строится на заданиях и карте. В мафии же всё в общении: убеждение, обвинение, блеф. Mafia Online добавляет голосовой и видеочат и ставит эту живую дискуссию в центр — поэтому многие называют её «более серьёзной, взрослой версией Among Us»." },
        { quote: "В мафии важна не правда, а то, во что верят люди. Побеждает тот, кто управляет этой верой." },
      ],
    },
    en: {
      title: "The Art of the Bluff: the Psychology of Winning at Mafia",
      description: "Mafia is a psychological game. How to win through bluffing, deduction and managing trust. Social deduction strategies and how it differs from Among Us.",
      excerpt: "The strongest mafia player is not the one who talks the most, but the one who tells the right lie at the right moment. Let's dive into the psychology of bluff and deduction.",
      keywords: "social deduction game online, deduction game online, bluffing game online, mafia game better than among us, mafia strategy, psychological game online",
      body: [
        { p: "Mafia is one of the few games where winning depends not on your role but on how well you read people. It is not chess; it is live psychology. And the good news is that both bluffing and deduction can be learned." },
        { h2: "What deduction is and how it works" },
        { p: "Deduction is the art of gathering information and drawing conclusions from it. Who defended themselves too fast? Who hid during the vote? Who is accusing without logic? Every game is a puzzle and every player is a piece. A good player sees patterns, not words." },
        { h2: "Mafia strategy: the art of being invisible" },
        { p: "The biggest mistake is being too calm or too active. Play naturally: sometimes accuse an innocent, sometimes agree with the right conclusion. The strongest mafia is the one who can 'steer' the town to their advantage, not the one who shouts." },
        { h2: "Town strategy: controlling the vote" },
        { p: "If you are the town, your greatest weapon is unity. Do not vote at random. Ask questions, look for contradictions and watch who defends whom. The mafia often shields their own without meaning to — and gives themselves away." },
        { h2: "The psychology of the bluff" },
        { ul: [
          "Be confident — hesitation breeds suspicion.",
          "Add detail — a good lie has small, uncheckable specifics.",
          "Redirect suspicion away from yourself, but never without grounds.",
          "Use silence as a weapon — you do not always have to speak.",
        ] },
        { h2: "Mafia vs Among Us: what's the difference?" },
        { p: "Among Us is fun, but it is mostly built on tasks and a map. In mafia, everything is in the talking: persuasion, accusation, bluff. Mafia Online adds voice and video chat and puts that live discussion at the centre — which is why many call it 'a more serious, grown-up version of Among Us'." },
        { quote: "In mafia, the truth does not matter — what people believe does. Whoever controls that belief wins." },
      ],
    },
  },

  // ── 5. Play with friends ────────────────────────────────────────────────
  {
    slug: "play-mafia-with-friends-online",
    date: "2026-06-18",
    readMins: 6,
    accent: "#16A34A",
    tag: { uz: "Do'stlar bilan", ru: "С друзьями", en: "With friends" },
    uz: {
      title: "Do'stlar bilan virtual o'yin kechasi: onlayn mafiyani qanday tashkil qilish",
      description: "Do'stlar bilan onlayn mafiya qayerda o'ynash mumkin? Ro'yxatdan o'tmasdan, brauzer yoki telefonda virtual o'yin kechasini tashkil qiling — o'zbek tilida, bepul.",
      excerpt: "Hamma bir xonada yig'ila olmaydi — lekin bir o'yinda yig'ilish mumkin. Do'stlaringiz bilan unutilmas virtual mafiya kechasini qanday uyushtirishni ko'rsatamiz.",
      keywords: "do'stlar bilan onlayn mafiya, party game onlayn o'zbek, mafiya online telefonda, mafiya online ro'yxatdan o'tmasdan, o'zbekcha mafiya, mafia uz, virtual game night mafia",
      body: [
        { p: "Juma kechasi. Do'stlaringiz turli shaharlarda, hatto turli mamlakatlarda. Ilgari bu — kechani birga o'tkazib bo'lmaydi degani edi. Endi esa bir havola yetarli: hamma onlayn xonaga yig'iladi va virtual o'yin kechasi boshlanadi." },
        { h2: "Nega aynan mafiya?" },
        { p: "Mafiya — virtual yig'inlar uchun mukammal o'yin. U muloqotni talab qiladi, kulgi va bahsga to'la, va 4 kishidan 20 kishigacha — istalgan davraga moslashadi. Bir partiya 10–15 daqiqa, shuning uchun bir kechada o'nlab partiya o'ynash mumkin." },
        { h2: "Xona ochish va do'st chaqirish" },
        { p: "Mafia Online'da xona ochish bir necha soniya: xona yarating, sozlamalarni tanlang va havolani do'stlaringizga tashlang. Ular havolani bosadi va to'g'ridan-to'g'ri xonaga tushadi — qidirish yoki kod kiritish shart emas." },
        { h2: "Telefon, brauzer, ro'yxatsiz" },
        { ul: [
          "Brauzerda ishlaydi — hech narsa yuklab olish kerak emas.",
          "Telefon, planshet va kompyuterda silliq.",
          "Ro'yxatdan o'tmasdan: mehmon sifatida darhol boshlang yoki Telegram orqali bir bosishda kiring.",
          "Yetishmasa, aqlli botlar qo'shiladi — kecha to'xtab qolmaydi.",
        ] },
        { h2: "O'zbekcha va bepul" },
        { p: "Mafia Online to'liq o'zbek tilida (va rus tilida) ishlaydi, shuning uchun hamma tushunadi. O'yin 100% bepul — ixtiyoriy VIP profil faqat ko'rinish uchun, natijaga ta'sir qilmaydi. Bu uni O'zbekiston va butun MDH uchun ideal party game qiladi." },
        { h2: "Mukammal kecha uchun maslahatlar" },
        { ul: [
          "Kamerani yoqing — yuz ifodalari kechani jonlantiradi.",
          "Birinchi partiyani sodda rollar bilan boshlang, keyin murakkablashtiring.",
          "G'oliblarni belgilab boring — kichik turnir qiziqishni oshiradi.",
          "Vaqtni cheklang, shunda muhokama qizg'in bo'ladi.",
        ] },
        { quote: "Masofa endi to'siq emas. Bitta havola — va do'stlaringiz yana bir stol atrofida, mafiyani qidirib o'tirishadi." },
      ],
    },
    ru: {
      title: "Виртуальный игровой вечер с друзьями: как организовать мафию онлайн",
      description: "Где поиграть в мафию онлайн с друзьями? Устройте виртуальный игровой вечер без регистрации, в браузере или на телефоне — бесплатно, на русском и узбекском.",
      excerpt: "Не все могут собраться в одной комнате — но в одной игре могут. Показываем, как устроить незабываемый виртуальный вечер мафии с друзьями.",
      keywords: "мафия с друзьями онлайн, где поиграть в мафию онлайн бесплатно, мафия онлайн без регистрации, мафия мобильная версия, virtual game night mafia, party game онлайн",
      body: [
        { p: "Вечер пятницы. Друзья в разных городах, а то и в разных странах. Раньше это значило, что вечер вместе не провести. Теперь достаточно одной ссылки: все собираются в онлайн-комнате, и виртуальный игровой вечер начинается." },
        { h2: "Почему именно мафия?" },
        { p: "Мафия — идеальная игра для онлайн-встреч. Она требует общения, полна смеха и споров и подходит компании от 4 до 20 человек. Одна партия длится 10–15 минут, так что за вечер можно сыграть десятки раз." },
        { h2: "Создать комнату и позвать друзей" },
        { p: "В Mafia Online создание комнаты занимает секунды: создайте комнату, выберите настройки и отправьте ссылку друзьям. Они нажимают на ссылку и сразу попадают в комнату — без поиска и без ввода кода." },
        { h2: "Телефон, браузер, без регистрации" },
        { ul: [
          "Работает в браузере — ничего не нужно скачивать.",
          "Плавно на телефоне, планшете и ПК.",
          "Без регистрации: начните как гость или войдите через Telegram в один клик.",
          "Не хватает игроков — добавятся умные боты, и вечер не остановится.",
        ] },
        { h2: "На русском, узбекском и бесплатно" },
        { p: "Mafia Online полностью работает на русском и узбекском, так что поймут все. Игра на 100% бесплатна — опциональный VIP-профиль только для вида и не влияет на исход. Это делает её идеальной party game для Узбекистана и всего СНГ." },
        { h2: "Советы для идеального вечера" },
        { ul: [
          "Включайте камеру — мимика оживляет вечер.",
          "Первую партию начните с простых ролей, потом усложняйте.",
          "Ведите счёт побед — мини-турнир добавляет азарта.",
          "Ограничьте время, и обсуждение станет жарче.",
        ] },
        { quote: "Расстояние больше не преграда. Одна ссылка — и друзья снова за одним столом, вычисляя мафию." },
      ],
    },
    en: {
      title: "A Virtual Game Night with Friends: How to Set Up Mafia Online",
      description: "Where can you play mafia online with friends? Host a virtual game night with no registration, in the browser or on your phone — free, in three languages.",
      excerpt: "Not everyone can gather in one room — but they can gather in one game. Here's how to host an unforgettable virtual mafia night with your friends.",
      keywords: "play mafia with friends online, mafia game night online friends, virtual game night mafia, mafia online no registration, mafia online no download, mafia browser online",
      body: [
        { p: "It's Friday night. Your friends are in different cities, maybe even different countries. That used to mean you couldn't spend the evening together. Now one link is enough: everyone gathers in an online room, and the virtual game night begins." },
        { h2: "Why mafia?" },
        { p: "Mafia is the perfect game for online get-togethers. It demands conversation, is full of laughter and argument, and fits a group of 4 to 20. A single game lasts 10–15 minutes, so you can play dozens in one night." },
        { h2: "Create a room and invite friends" },
        { p: "In Mafia Online, creating a room takes seconds: make a room, choose the settings and send the link to your friends. They click the link and drop straight into the room — no searching, no codes to type." },
        { h2: "Phone, browser, no registration" },
        { ul: [
          "Runs in the browser — nothing to download.",
          "Smooth on phone, tablet and PC.",
          "No registration: start as a guest or sign in with Telegram in one click.",
          "Short on players? Smart bots join, and the night never stops.",
        ] },
        { h2: "Free and in your language" },
        { p: "Mafia Online runs fully in Uzbek and Russian, so everyone understands. The game is 100% free — the optional VIP profile is cosmetic only and never affects the outcome. That makes it an ideal party game for friends anywhere." },
        { h2: "Tips for the perfect night" },
        { ul: [
          "Turn the camera on — facial expressions bring the night to life.",
          "Start the first game with simple roles, then add complexity.",
          "Keep score of the winners — a mini-tournament adds spice.",
          "Set a time limit, and the discussion gets hotter.",
        ] },
        { quote: "Distance is no longer a barrier. One link — and your friends are back around the same table, hunting for the mafia." },
      ],
    },
  },

  // ── 6. History of mafia ─────────────────────────────────────────────────
  {
    slug: "history-of-mafia-game",
    date: "2026-06-22",
    readMins: 7,
    accent: "#B45309",
    tag: { uz: "Tarix", ru: "История", en: "History" },
    uz: {
      title: "Mafiya o'yini tarixi: psixologiya darsidan dunyo fenomeniga",
      description: "Mafiya o'yini qachon va kim tomonidan o'ylab topilgan? 1986 yilda Moskvada tug'ilgan o'yin qanday qilib dunyoga tarqaldi va onlayn fenomenga aylandi — mafiya o'yini tarixi.",
      excerpt: "Bugun millionlab odam o'ynaydigan mafiya bir paytlar oddiy psixologiya mashg'uloti bo'lgan. U qayerdan paydo bo'ldi va qanday qilib butun dunyoni zabt etdi?",
      keywords: "mafiya o'yini tarixi, mafiya o'yini kim o'ylab topgan, mafiya o'yini qachon paydo bo'lgan, mafia game history, mafiya kelib chiqishi, werewolf o'yini",
      body: [
        { p: "Tasavvur qiling: 1986 yil, Moskva. Bir guruh talaba stol atrofida o'tiribdi — yarmi yashirincha rol o'ynaydi, qolgani esa kim aldayotganini topishga urinadi. O'sha kechada hech kim bilmasdi: bu oddiy mashg'ulot keyinchalik butun dunyoda millionlab odamni avval bir stol, so'ng bir ekran atrofiga yig'adigan o'yinga aylanadi. Bu — mafiya." },
        { h2: "1986: bir psixolog talabaning ixtirosi" },
        { p: "Mafiyani Moskva davlat universitetining psixologiya fakulteti talabasi Dmitriy Davidov o'ylab topgan. U bu o'yinni ko'ngilochar uchun emas, balki ilmiy maqsadda yaratgan: kam sonli, lekin uyushgan ozchilik (mafiya) ko'p sonli, ammo tarqoq ko'pchilikni (shahar) qanday boshqarishi mumkinligini ko'rsatish uchun. Aynan shu g'oya — ma'lumotga ega ozchilik va 'ko'r' ko'pchilik o'rtasidagi kurash — o'yinning bugungi kungacha yuragida turadi." },
        { h2: "Auditoriyadan yotoqxona va lagerlargacha" },
        { p: "Davidovning g'oyasi tez tarqaldi. Avval universitet auditoriyalarida, keyin talabalar yotoqxonalarida, yozgi lagerlarda va do'stlar davralarida o'ynay boshlashdi. O'yinning ajoyib tomoni shundaki, uni o'ynash uchun deyarli hech narsa kerak emas edi — bir necha varaq qog'oz va boshlovchi yetarli. 1990-yillarga kelib mafiya butun postsovet hududida tanish o'yinga aylandi." },
        { h2: "Bo'rilar va yangi niqoblar" },
        { p: "1997 yilda amerikalik Endryu Plotkin o'yinni yangi mavzu bilan qayta ishladi: mafiya o'rniga qishloqqa yashiringan bo'rilar paydo bo'ldi. Shu tariqa 'Werewolf' (Bo'ri) versiyasi tug'ildi va o'yin G'arbda keng tarqaldi. Yillar davomida o'nlab variantlar yaratildi, lekin mohiyat o'zgarmadi: kunduzi bahs, kechasi yashirin hujum va doimiy shubha." },
        { h2: "Stoldan ekranga: mafiya onlayn bo'ladi" },
        { p: "Internet o'yinni butunlay yangi bosqichga olib chiqdi. Avval forumlarda matn orqali ('play-by-post') o'ynashardi — bir partiya bir necha kun davom etishi mumkin edi. Keyin mobil ilovalar paydo bo'ldi. Va nihoyat, real vaqt texnologiyalari, ovozli va video chat o'yinga jonli stol hissini qaytardi — endi do'stlaringiz dunyoning istalgan nuqtasida bo'lishi mumkin." },
        { h2: "Nega mafiya 40 yildan beri yashaydi" },
        { p: "Ko'pgina o'yinlar paydo bo'lib, unutilib ketadi. Mafiya esa o'nlab yillardan beri yashayapti. Buning sababi oddiy:" },
        { ul: [
          "Komponent emas, odamlar — o'yin taxta yoki tasodifga emas, balki muloqot va psixologiyaga asoslangan.",
          "Har bir partiya o'ziga xos — bir xil rollar, lekin har safar butunlay boshqa hikoya.",
          "Osongina o'rganiladi, lekin ustasi bo'lish qiyin — bu uni cheksiz qiziqarli qiladi.",
          "Istalgan davraga mos — 4 kishidan 20 kishigacha, do'stlar, oila yoki notanishlar bilan.",
        ] },
        { h2: "Mafiya bugun: O'zbekistonda va onlayn" },
        { p: "Bugun mafiya O'zbekiston va butun MDH da eng sevimli davra o'yinlaridan biri. Mafia Online esa bu klassikani zamonaviy ko'rinishga olib chiqdi: brauzer va Telegram orqali, 13 ta rol, ovozli va video chat bilan, ro'yxatdan o'tmasdan. 1986 yildagi qog'oz varaqlaridan to bugungi real vaqt onlayn partiyalargacha — o'yinning mohiyati o'zgarmadi: kim aldayapti?" },
        { quote: "Qoidalar o'zgardi, ekranlar paydo bo'ldi, lekin savol o'sha-o'sha: stol atrofidagi kim haqiqatni aytyapti? Mafiya — hech qachon eskirmaydigan o'yin." },
      ],
    },
    ru: {
      title: "История игры мафия: от урока психологии до мирового феномена",
      description: "Когда и кем придумана игра мафия? Как игра, родившаяся в Москве в 1986 году, покорила мир и стала онлайн-феноменом — полная история мафии.",
      excerpt: "Сегодня в мафию играют миллионы, а когда-то это было просто упражнение по психологии. Откуда она взялась и как завоевала весь мир?",
      keywords: "история игры мафия, кто придумал мафию, когда появилась мафия, mafia game history, происхождение мафии, игра werewolf",
      body: [
        { p: "Представьте: 1986 год, Москва. Группа студентов сидит за столом — половина тайно играет роли, остальные пытаются понять, кто лжёт. В тот вечер никто не знал, что это простое упражнение однажды превратится в игру, которая соберёт за одним столом, а потом и у одного экрана, миллионы людей по всему миру. Это мафия." },
        { h2: "1986: изобретение студента-психолога" },
        { p: "Мафию придумал Дмитрий Давыдов, студент факультета психологии МГУ. Он создал игру не для развлечения, а с научной целью: показать, как малочисленное, но организованное меньшинство (мафия) может управлять многочисленным, но разрозненным большинством (городом). Именно эта идея — борьба информированного меньшинства и «слепого» большинства — и сегодня лежит в сердце игры." },
        { h2: "Из аудиторий в общежития и лагеря" },
        { p: "Идея Давыдова распространилась мгновенно. Сначала в университетских аудиториях, потом в студенческих общежитиях, летних лагерях и компаниях друзей. Прелесть игры была в том, что для неё почти ничего не нужно — пара листков бумаги и ведущий. К 1990-м мафия стала знакомой игрой на всём постсоветском пространстве." },
        { h2: "Оборотни и новые маски" },
        { p: "В 1997 году американец Эндрю Плоткин переосмыслил игру в новой теме: вместо мафии появились оборотни, прячущиеся в деревне. Так родилась версия «Werewolf» (Оборотень), и игра широко разошлась на Западе. За годы появились десятки вариантов, но суть осталась прежней: днём спор, ночью тайная атака и вечное подозрение." },
        { h2: "Со стола на экран: мафия уходит в онлайн" },
        { p: "Интернет вывел игру на совершенно новый уровень. Сначала играли текстом на форумах («play-by-post») — одна партия могла длиться несколько дней. Потом появились мобильные приложения. И наконец технологии реального времени, голосовой и видеочат вернули игре живое ощущение стола — теперь друзья могут быть в любой точке мира." },
        { h2: "Почему мафия живёт уже 40 лет" },
        { p: "Многие игры появляются и забываются. Мафия же живёт десятилетиями. Причина проста:" },
        { ul: [
          "Не компоненты, а люди — игра построена не на доске или случайности, а на общении и психологии.",
          "Каждая партия уникальна — одни и те же роли, но каждый раз совсем другая история.",
          "Легко научиться, но трудно стать мастером — это делает её бесконечно интересной.",
          "Подходит любой компании — от 4 до 20 человек, с друзьями, семьёй или незнакомцами.",
        ] },
        { h2: "Мафия сегодня: в Узбекистане и онлайн" },
        { p: "Сегодня мафия — одна из любимых компанейских игр в Узбекистане и во всём СНГ. А Mafia Online вывела эту классику в современный формат: через браузер и Telegram, 13 ролей, голосовой и видеочат, без регистрации. От бумажных карточек 1986 года до сегодняшних онлайн-партий в реальном времени — суть игры не изменилась: кто лжёт?" },
        { quote: "Правила менялись, появились экраны, но вопрос остался прежним: кто за столом говорит правду? Мафия — игра, которая никогда не устареет." },
      ],
    },
    en: {
      title: "The History of Mafia: From a Psychology Lesson to a Global Phenomenon",
      description: "When and by whom was the game of mafia invented? How a game born in Moscow in 1986 conquered the world and became an online phenomenon — the full history of mafia.",
      excerpt: "Millions play mafia today, but it began as a simple psychology exercise. Where did it come from, and how did it conquer the world?",
      keywords: "history of mafia game, who invented mafia, when was mafia invented, mafia game origin, werewolf game history, social deduction history",
      body: [
        { p: "Picture this: 1986, Moscow. A group of students sit around a table — half of them secretly playing roles, the rest trying to work out who is lying. That evening, nobody knew this simple exercise would one day become a game that gathers millions of people around a table, and later around a screen, all over the world. This is mafia." },
        { h2: "1986: a psychology student's invention" },
        { p: "Mafia was invented by Dmitry Davydov, a psychology student at Moscow State University. He created the game not for fun but for a scientific purpose: to show how a small but organised minority (the mafia) can control a large but scattered majority (the town). That very idea — the struggle between an informed minority and a 'blind' majority — still sits at the heart of the game today." },
        { h2: "From lecture halls to dorms and camps" },
        { p: "Davydov's idea spread fast. First in university lecture halls, then in student dorms, summer camps and groups of friends. The beauty of the game was that it needed almost nothing — a few slips of paper and a host. By the 1990s, mafia was a familiar game across the post-Soviet world." },
        { h2: "Werewolves and new masks" },
        { p: "In 1997, the American Andrew Plotkin reimagined the game with a new theme: instead of mafia, werewolves hid among the villagers. So the 'Werewolf' version was born, and the game spread widely in the West. Over the years dozens of variants appeared, but the essence stayed the same: debate by day, a secret attack by night, and endless suspicion." },
        { h2: "From the table to the screen: mafia goes online" },
        { p: "The internet took the game to a whole new level. At first people played by text on forums ('play-by-post') — a single game could last days. Then mobile apps arrived. And finally real-time technology, voice and video chat brought back the live feeling of the table — now your friends can be anywhere in the world." },
        { h2: "Why mafia has lived for 40 years" },
        { p: "Many games appear and are forgotten. Mafia has lived for decades. The reason is simple:" },
        { ul: [
          "Not components, but people — the game is built on conversation and psychology, not a board or luck.",
          "Every game is unique — the same roles, but a completely different story each time.",
          "Easy to learn, hard to master — which makes it endlessly interesting.",
          "Fits any group — from 4 to 20 players, with friends, family or strangers.",
        ] },
        { h2: "Mafia today: online and everywhere" },
        { p: "Today mafia is one of the most loved party games in Uzbekistan and far beyond. Mafia Online brings this classic into a modern format: through the browser and Telegram, with 13 roles, voice and video chat, and no registration. From the paper cards of 1986 to today's real-time online games, the essence has not changed: who is lying?" },
        { quote: "The rules changed, screens appeared, but the question stayed the same: who at the table is telling the truth? Mafia is a game that will never grow old." },
      ],
    },
  },

  // ── 7. Terms glossary ───────────────────────────────────────────────────
  {
    slug: "mafia-terms-glossary",
    date: "2026-06-24",
    readMins: 6,
    accent: "#0D9488",
    tag: { uz: "Lug'at", ru: "Словарь", en: "Glossary" },
    uz: {
      title: "Mafiya jargoni: boshlovchidan ustagacha bilishingiz kerak bo'lgan atamalar",
      description: "Mafiya o'yini atamalari va jargoni: linch, tekshiruv, alibi, claim, katok va boshqalar. Mafiya lug'ati — yangi o'yinchilar uchun barcha so'zlar bir joyda.",
      excerpt: "Birinchi marta mafiya o'ynaganda ko'pchilik 'linch', 'claim' yoki 'katok' kabi so'zlardan dovdirab qoladi. Mana, har bir mafiyachi bilishi kerak bo'lgan atamalar lug'ati.",
      keywords: "mafiya o'yini atamalari, mafiya jargoni, mafiya lug'ati, mafiya so'zlari, mafia terms, mafiya claim nima, mafiya linch nima",
      body: [
        { p: "Mafiyada faqat rolingizni bilish yetarli emas — stol tilini ham tushunish kerak. Tajribali o'yinchilar tez-tez 'claim', 'katok' yoki 'qora' kabi so'zlarni ishlatadi va yangi o'yinchi adashib qoladi. Quyida boshlovchidan ustagacha har bir mafiyachiga kerak bo'ladigan asosiy atamalar lug'ati." },
        { h2: "Umumiy atamalar" },
        { ul: [
          "Linch — kunduzi shahar ovoz berib bir o'yinchini o'yindan chiqarishi. Bu shaharning asosiy quroli ham, eng katta xatosi ham bo'lishi mumkin.",
          "Tekshiruv — komissar kechasi bir o'yinchining rolini aniqlashi (mafiya yoki tinch).",
          "Foul (qoidabuzarlik) — boshlovchi belgilagan qoidani buzish, masalan, kechasi gapirish yoki imo-ishora qilish.",
          "Boshlovchi (vedushiy) — o'yinni boshqaradigan, tun va kunni e'lon qiladigan shaxs. Onlaynda buni dasturning o'zi bajaradi.",
        ] },
        { h2: "Kecha va kunduz atamalari" },
        { ul: [
          "Tun — mafiya, komissar, shifokor va boshqa 'faol' rollar yashirin harakat qiladigan bosqich.",
          "Kunduz — hamma uyg'onadi, tunda nima bo'lgani e'lon qilinadi va muhokama boshlanadi.",
          "Birinchi tun — odatda hech kim o'lmaydigan yoki faqat mafiya bir-birini taniydigan dastlabki bosqich.",
        ] },
        { h2: "Strategiya va blef atamalari" },
        { ul: [
          "Claim — o'yinchi o'z rolini (yoki yolg'on rolni) ochiq e'lon qilishi. Masalan: 'Men komissarman'.",
          "Counter-claim — boshqa o'yinchi ham xuddi shu rolni da'vo qilishi; endi shahar kim yolg'onchi ekanini topishi kerak.",
          "Alibi — o'yinchi o'zining begunohligini isbotlash uchun keltiradigan dalil yoki mantiq.",
          "Ochilish (raskol) — komissar yoki boshqa muhim rolning o'zini ataylab oshkor qilishi.",
          "Katok — bir guruh o'yinchining birgalikda bir kishini uzluksiz 'bosib', linch qilishi.",
        ] },
        { h2: "Jamoa va rol atamalari" },
        { ul: [
          "Qora (chyornie) — mafiya jamoasi a'zolari.",
          "Qizil (krasnie) — tinch aholi va butun shahar jamoasi.",
          "Neytral — hech qaysi jamoaga kirmaydigan, faqat o'zi uchun o'ynaydigan rollar (manyak, suitsid).",
          "Mirka (tinch aholi) — qobiliyatsiz, lekin ovozi va mantig'i bilan kuchli oddiy shahar a'zosi.",
        ] },
        { h2: "Mafia Online atamalari" },
        { ul: [
          "Xona (room) — o'yin o'tkaziladigan virtual joy; uni ochib, do'stlarni havola orqali chaqirasiz.",
          "Bot — o'yinchi yetishmaganda o'rinni to'ldiradigan aqlli kompyuter o'yinchisi.",
          "VIP profil — yonuvchi ramka, toj va animatsiyalar; faqat ko'rinish uchun, o'yin natijasiga ta'sir qilmaydi.",
          "Mini App — Telegram ichida to'g'ridan-to'g'ri ochiladigan o'yin ko'rinishi.",
        ] },
        { quote: "Atamalarni bilish — birinchi qadam. Lekin haqiqiy usta nazariyani emas, stol atrofidagi odamlarni o'qiydi." },
      ],
    },
    ru: {
      title: "Жаргон мафии: термины, которые нужно знать от новичка до мастера",
      description: "Термины и жаргон игры мафия: линч, проверка, алиби, клейм, каток и другие. Словарь мафии — все слова для новых игроков в одном месте.",
      excerpt: "В первой партии многие теряются от слов вроде «линч», «клейм» или «каток». Вот словарь терминов, который должен знать каждый мафиози.",
      keywords: "термины игры мафия, жаргон мафии, словарь мафии, слова в мафии, mafia terms, что такое клейм в мафии, что такое линч",
      body: [
        { p: "В мафии мало знать свою роль — нужно понимать ещё и язык стола. Опытные игроки то и дело бросают «клейм», «каток» или «чёрный», и новичок теряется. Ниже — словарь основных терминов, который пригодится каждому мафиози, от новичка до мастера." },
        { h2: "Общие термины" },
        { ul: [
          "Линч — когда город днём голосованием выводит игрока из игры. Это и главное оружие, и самая большая ошибка города.",
          "Проверка — когда комиссар ночью узнаёт роль игрока (мафия или мирный).",
          "Фол (нарушение) — нарушение правил, заданных ведущим, например разговор или жесты ночью.",
          "Ведущий — человек, который ведёт игру и объявляет ночь и день. Онлайн это делает сама программа.",
        ] },
        { h2: "Термины ночи и дня" },
        { ul: [
          "Ночь — фаза, в которой мафия, комиссар, доктор и другие «активные» роли действуют тайно.",
          "День — все просыпаются, объявляется итог ночи и начинается обсуждение.",
          "Первая ночь — обычно стартовая фаза, где никто не гибнет или мафия лишь узнаёт друг друга.",
        ] },
        { h2: "Термины стратегии и блефа" },
        { ul: [
          "Клейм (claim) — игрок открыто заявляет свою роль (или ложную). Например: «Я комиссар».",
          "Контр-клейм — другой игрок заявляет ту же роль; теперь городу нужно понять, кто лжёт.",
          "Алиби — довод или логика, которыми игрок доказывает свою невиновность.",
          "Раскрытие — когда комиссар или другая важная роль намеренно открывается.",
          "Каток — когда группа игроков сообща «продавливает» линч одного человека.",
        ] },
        { h2: "Термины команд и ролей" },
        { ul: [
          "Чёрные — члены команды мафии.",
          "Красные — мирные жители и вся команда города.",
          "Нейтрал — роли, не входящие ни в одну команду и играющие только за себя (маньяк, самоубийца).",
          "Мирный (мирка) — рядовой житель без способности, но сильный своим голосом и логикой.",
        ] },
        { h2: "Термины Mafia Online" },
        { ul: [
          "Комната (room) — виртуальное место для партии; вы создаёте её и зовёте друзей по ссылке.",
          "Бот — умный компьютерный игрок, который занимает место, когда не хватает людей.",
          "VIP-профиль — светящаяся рамка, корона и анимации; только для вида, на исход не влияет.",
          "Mini App — версия игры, которая открывается прямо внутри Telegram.",
        ] },
        { quote: "Знать термины — первый шаг. Но настоящий мастер читает не теорию, а людей за столом." },
      ],
    },
    en: {
      title: "Mafia Slang: the Terms You Need to Know, from Beginner to Master",
      description: "Mafia game terms and slang: lynch, check, alibi, claim, steamroll and more. A mafia glossary — every word a new player needs, in one place.",
      excerpt: "In a first game, many players get lost in words like 'lynch', 'claim' and 'steamroll'. Here is the glossary of terms every mafia player should know.",
      keywords: "mafia game terms, mafia slang, mafia glossary, mafia terminology, what is a claim in mafia, what is a lynch in mafia",
      body: [
        { p: "In mafia, knowing your role is not enough — you also need to understand the language of the table. Experienced players keep dropping words like 'claim', 'steamroll' or 'black', and a newcomer gets lost. Below is a glossary of the core terms every mafia player needs, from beginner to master." },
        { h2: "General terms" },
        { ul: [
          "Lynch — when the town votes a player out during the day. It is both the main weapon and the town's biggest mistake.",
          "Check — when the detective learns a player's role at night (mafia or innocent).",
          "Foul — breaking the rules set by the host, such as talking or gesturing at night.",
          "Host (moderator) — the person who runs the game and announces night and day. Online, the software does it.",
        ] },
        { h2: "Day and night terms" },
        { ul: [
          "Night — the phase where the mafia, detective, doctor and other 'active' roles act in secret.",
          "Day — everyone wakes up, the night's result is announced and discussion begins.",
          "First night — usually the opening phase where no one dies or the mafia simply learn who each other are.",
        ] },
        { h2: "Strategy and bluff terms" },
        { ul: [
          "Claim — a player openly states their role (real or fake). For example: 'I am the detective'.",
          "Counter-claim — another player claims the same role; now the town must work out who is lying.",
          "Alibi — the reasoning a player uses to prove their innocence.",
          "Reveal — when the detective or another key role deliberately comes out.",
          "Steamroll — when a group of players push through the lynch of one person together.",
        ] },
        { h2: "Team and role terms" },
        { ul: [
          "Black — members of the mafia team.",
          "Red — the townsfolk and the entire town team.",
          "Neutral — roles that belong to no team and play only for themselves (maniac, suicide).",
          "Townsperson (vanilla) — a plain villager with no ability, but strong through their vote and logic.",
        ] },
        { h2: "Mafia Online terms" },
        { ul: [
          "Room — the virtual place a game runs in; you create it and invite friends by link.",
          "Bot — a smart computer player that fills a seat when there are not enough humans.",
          "VIP profile — a glowing frame, crown and animations; cosmetic only, it never affects the outcome.",
          "Mini App — the version of the game that opens right inside Telegram.",
        ] },
        { quote: "Knowing the terms is the first step. But a true master reads not the theory — they read the people at the table." },
      ],
    },
  },

  // ── 8. Best online party games 2026 ─────────────────────────────────────
  {
    slug: "best-online-party-games",
    date: "2026-06-25",
    readMins: 6,
    accent: "#0EA5E9",
    tag: { uz: "Reyting", ru: "Подборка", en: "Roundup" },
    uz: {
      title: "2026: do'stlar bilan masofadan o'ynaladigan eng yaxshi onlayn o'yinlar",
      description: "Do'stlar bilan onlayn o'ynaladigan eng yaxshi party o'yinlar 2026: mafiya, Among Us, Codenames va boshqalar. Qaysi biri sizning davrangizga mos — to'liq sharh.",
      excerpt: "Do'stlar turli shaharlarda, lekin kechani birga o'tkazgingiz keladimi? 2026 yilning eng yaxshi onlayn party o'yinlari va nega mafiya ro'yxat boshida turadi.",
      keywords: "onlayn party o'yinlar, do'stlar bilan onlayn o'yinlar, eng yaxshi onlayn o'yinlar 2026, masofadan o'ynaladigan o'yinlar, party game onlayn o'zbek, mafia vs among us",
      body: [
        { p: "2026 yil — do'stlar bilan masofadan vaqt o'tkazish allaqachon odatga aylangan davr. Hammani bitta xonaga yig'ish har doim ham mumkin emas, lekin bitta o'yinga yig'ish mumkin. Savol shu: qaysi onlayn o'yin chinakam qiziq kecha sovg'a qiladi? Mana, 2026 yilning eng yaxshi party o'yinlari." },
        { h2: "Yaxshi onlayn party o'yini qanday bo'ladi?" },
        { p: "Eng yaxshi davra o'yinlarini ajratib turadigan bir nechta xususiyat bor:" },
        { ul: [
          "Tez boshlanadi — yuklab olish va murakkab sozlash shart emas.",
          "Ko'pchilikka mos — kamida 5–6, ideal holda 10 va undan ortiq o'yinchi.",
          "Muloqotga asoslangan — kulgi, bahs va jonli his bo'lishi kerak.",
          "Qisqa partiyalar — bir kechada bir necha marta o'ynash imkoniyati.",
        ] },
        { h2: "2026 yilning eng yaxshi onlayn o'yinlari" },
        { h3: "1. Mafiya (Mafia Online)" },
        { p: "Klassik ijtimoiy deduksiya o'yini: kechasi mafiya ov qiladi, kunduzi shahar haqiqatni qidiradi. Ovozli va video chat, 4 dan 20 gacha o'yinchi, brauzer va Telegram orqali. Aynan jonli muloqotga asoslangani uni ro'yxat boshiga olib chiqadi." },
        { h3: "2. Among Us" },
        { p: "Kosmik mavzudagi deduksiya o'yini. Qiziqarli va sodda, lekin asosan vazifa va xaritaga tayanadi — muloqot faqat yig'ilishlarda bo'ladi." },
        { h3: "3. Codenames" },
        { p: "So'z assotsiatsiyasiga asoslangan jamoaviy o'yin. Mantiq va til sezgisini sinaydi, juftliklarga ajralib o'ynashga ideal." },
        { h3: "4. Skribbl (chizish o'yinlari)" },
        { p: "Bir o'yinchi chizadi, qolganlar topadi. Yengil, kulgili va deyarli har qanday davraga mos." },
        { h3: "5. Onlayn viktorina (Quiz)" },
        { p: "Bilim va tezlik o'yini. Qiziqarli, lekin chuqur strategiya yoki blef yo'q — qisqa tanaffuslar uchun yaxshi." },
        { h2: "Nega mafiya ro'yxat boshida" },
        { p: "Boshqa o'yinlar mexanikaga tayansa, mafiya markazga jonli odamni qo'yadi. Har bir partiya boshqacha, chunki uni varaqlar emas, odamlar yaratadi. Ovozli va video chat qo'shilganda, mafiya shunchaki o'yin emas — bu unutilmas kecha bo'ladi." },
        { h2: "Mafia Online: 2026 da nima taklif qiladi" },
        { ul: [
          "13 ta noyob rol — har partiya yangi taqdir.",
          "Ovozli va video chat — yuz ifodalari orqali blef.",
          "4 dan 20 gacha o'yinchi; yetishmasa, aqlli botlar qo'shiladi.",
          "Brauzer va Telegram orqali, ro'yxatdan o'tmasdan, 100% bepul.",
          "O'zbek va rus tilida — butun davra tushunadi.",
        ] },
        { quote: "Eng yaxshi onlayn o'yin — sizni ekranga emas, bir-biringizga bog'laydigani. Mafiya aynan shuni qiladi." },
      ],
    },
    ru: {
      title: "2026: лучшие онлайн-игры, чтобы играть с друзьями на расстоянии",
      description: "Лучшие онлайн party-игры с друзьями в 2026: мафия, Among Us, Codenames и другие. Какая подойдёт вашей компании — полный обзор.",
      excerpt: "Друзья в разных городах, но хочется провести вечер вместе? Лучшие онлайн party-игры 2026 года и почему мафия возглавляет список.",
      keywords: "онлайн party игры, онлайн игры с друзьями, лучшие онлайн игры 2026, игры на расстоянии, party game онлайн, мафия против among us",
      body: [
        { p: "2026 год — время, когда проводить вечер с друзьями на расстоянии уже привычка. Собрать всех в одной комнате удаётся не всегда, но собрать их в одной игре — можно. Вопрос в том, какая онлайн-игра подарит по-настоящему весёлый вечер. Вот лучшие party-игры 2026 года." },
        { h2: "Какой должна быть хорошая онлайн party-игра?" },
        { p: "Лучшие компанейские игры отличает несколько черт:" },
        { ul: [
          "Быстрый старт — без скачивания и сложных настроек.",
          "Подходит для компании — минимум 5–6, в идеале 10 и больше игроков.",
          "Построена на общении — должны быть смех, спор и живое ощущение.",
          "Короткие партии — возможность сыграть несколько раз за вечер.",
        ] },
        { h2: "Лучшие онлайн-игры 2026 года" },
        { h3: "1. Мафия (Mafia Online)" },
        { p: "Классическая игра на социальную дедукцию: ночью мафия охотится, днём город ищет правду. Голосовой и видеочат, от 4 до 20 игроков, через браузер и Telegram. Именно ставка на живое общение выводит её на первое место." },
        { h3: "2. Among Us" },
        { p: "Игра-дедукция в космической теме. Весёлая и простая, но в основном опирается на задания и карту — общение только на собраниях." },
        { h3: "3. Codenames" },
        { p: "Командная игра на словесные ассоциации. Проверяет логику и чувство языка, идеальна для игры по парам." },
        { h3: "4. Skribbl (игры в рисование)" },
        { p: "Один игрок рисует, остальные угадывают. Лёгкая, смешная и подходит почти любой компании." },
        { h3: "5. Онлайн-викторина (Quiz)" },
        { p: "Игра на знания и скорость. Весело, но без глубокой стратегии и блефа — хороша для коротких пауз." },
        { h2: "Почему мафия возглавляет список" },
        { p: "Другие игры держатся на механике, а мафия ставит в центр живого человека. Каждая партия другая, ведь её создают не карточки, а люди. С голосовым и видеочатом мафия — это уже не просто игра, а незабываемый вечер." },
        { h2: "Mafia Online: что предлагает в 2026" },
        { ul: [
          "13 уникальных ролей — каждая партия новая судьба.",
          "Голосовой и видеочат — блеф через мимику.",
          "От 4 до 20 игроков; не хватает — добавятся умные боты.",
          "Через браузер и Telegram, без регистрации, на 100% бесплатно.",
          "На русском и узбекском — поймёт вся компания.",
        ] },
        { quote: "Лучшая онлайн-игра та, что связывает не с экраном, а друг с другом. Мафия делает именно это." },
      ],
    },
    en: {
      title: "2026: the Best Online Games to Play with Friends from Anywhere",
      description: "The best online party games to play with friends in 2026: mafia, Among Us, Codenames and more. Which one fits your group — a full roundup.",
      excerpt: "Friends in different cities, but you want to spend the evening together? The best online party games of 2026 — and why mafia tops the list.",
      keywords: "online party games, online games with friends, best online games 2026, games to play remotely, party game online, mafia vs among us",
      body: [
        { p: "2026 is a time when spending an evening with friends from afar is already a habit. Getting everyone into one room is not always possible, but getting them into one game is. The question is which online game delivers a truly fun night. Here are the best party games of 2026." },
        { h2: "What makes a good online party game?" },
        { p: "A few traits set the best party games apart:" },
        { ul: [
          "A fast start — no downloads and no complicated setup.",
          "Fits a group — at least 5–6, ideally 10 or more players.",
          "Built on conversation — there should be laughter, argument and a live feeling.",
          "Short games — the chance to play several times in one night.",
        ] },
        { h2: "The best online games of 2026" },
        { h3: "1. Mafia (Mafia Online)" },
        { p: "The classic social deduction game: the mafia hunt at night, the town seeks the truth by day. Voice and video chat, 4 to 20 players, through the browser and Telegram. Its bet on live conversation is exactly what puts it at number one." },
        { h3: "2. Among Us" },
        { p: "A deduction game with a space theme. Fun and simple, but mostly built on tasks and a map — the talking only happens at meetings." },
        { h3: "3. Codenames" },
        { p: "A team game of word association. It tests logic and a feel for language, and is ideal to play in pairs." },
        { h3: "4. Skribbl (drawing games)" },
        { p: "One player draws, the rest guess. Light, funny and a fit for almost any group." },
        { h3: "5. Online quiz" },
        { p: "A game of knowledge and speed. Fun, but with no deep strategy or bluff — great for short breaks." },
        { h2: "Why mafia tops the list" },
        { p: "Other games rest on mechanics, but mafia puts a living person at the centre. Every game is different, because it is made by people, not cards. Add voice and video chat, and mafia is no longer just a game — it is an unforgettable night." },
        { h2: "Mafia Online: what it offers in 2026" },
        { ul: [
          "13 unique roles — every game is a new fate.",
          "Voice and video chat — bluff through facial expressions.",
          "4 to 20 players; short on people, and smart bots fill in.",
          "Through the browser and Telegram, no registration, 100% free.",
          "In Uzbek and Russian — the whole group understands.",
        ] },
        { quote: "The best online game is the one that connects you not to a screen but to each other. Mafia does exactly that." },
      ],
    },
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);

// ── SEO helpers shared by the blog pages ────────────────────────────────
export const SITE = "https://mafiaonline.uz";
export const abs = (path: string) => `${SITE}${path}`;

/** hreflang map for an index page (no slug) or a single post (with slug). */
export const blogHreflangs = (slug?: string) =>
  BLOG_LANGS.map((l) => ({ lang: l, href: abs(slug ? postPath(l, slug) : blogIndexPath(l)) }));

/** Combined keyword string for the blog index of a given language. */
export const indexKeywords = (lang: BlogLang) =>
  POSTS.map((p) => p[lang].keywords).join(", ");

const ORG = { "@type": "Organization", name: "Mafia Online", url: SITE, logo: `${SITE}/icon-512x512.png` };
const homeItem = (lang: BlogLang) =>
  lang === "en" ? abs(blogIndexPath(lang)) : lang === "uz" ? SITE : `${SITE}/${lang}`;

/** JSON-LD for a blog index page: Blog listing + breadcrumb. */
export function indexSchema(lang: BlogLang) {
  const ui = BLOG_UI[lang];
  const canonical = abs(blogIndexPath(lang));
  return [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: ui.metaIndexTitle,
      description: ui.metaIndexDesc,
      url: canonical,
      inLanguage: lang,
      publisher: ORG,
      blogPost: POSTS.map((p) => ({
        "@type": "BlogPosting",
        headline: p[lang].title,
        description: p[lang].description,
        url: abs(postPath(lang, p.slug)),
        datePublished: p.date,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: ui.nav.home, item: homeItem(lang) },
        { "@type": "ListItem", position: 2, name: ui.nav.blog, item: canonical },
      ],
    },
  ];
}

/** JSON-LD for a single post: BlogPosting + breadcrumb. */
export function postSchema(lang: BlogLang, post: BlogPost) {
  const ui = BLOG_UI[lang];
  const url = abs(postPath(lang, post.slug));
  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post[lang].title,
      description: post[lang].description,
      image: `${SITE}/og-image.png`,
      datePublished: post.date,
      dateModified: post.date,
      inLanguage: lang,
      keywords: post[lang].keywords,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: ORG,
      publisher: {
        "@type": "Organization",
        name: "Mafia Online",
        url: SITE,
        logo: { "@type": "ImageObject", url: `${SITE}/icon-512x512.png` },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: ui.nav.home, item: homeItem(lang) },
        { "@type": "ListItem", position: 2, name: ui.nav.blog, item: abs(blogIndexPath(lang)) },
        { "@type": "ListItem", position: 3, name: post[lang].title, item: url },
      ],
    },
  ];
}
