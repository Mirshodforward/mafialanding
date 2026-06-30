// Trust / info pages (About, Contact, Privacy, Terms) in UZ + RU.
// Bodies reuse the blog `Block` type so they render through BlogBody.astro.
import type { Block } from "./blog";
import { SUPPORT_EMAIL, SUPPORT_TG, SUPPORT_TG_URL, BOT_URL, CHANNEL_URL, PLAY_URL } from "./copy";

export type InfoLang = "uz" | "ru";
export type InfoKey = "about" | "contact" | "privacy" | "terms";

export interface InfoPage {
  slug: InfoKey;
  updated: string;
  title: Record<InfoLang, string>;
  description: Record<InfoLang, string>;
  body: Record<InfoLang, Block[]>;
}

const UPDATED = "2026-06-30";

export const INFO_PAGES: Record<InfoKey, InfoPage> = {
  about: {
    slug: "about",
    updated: UPDATED,
    title: { uz: "Mafia Online haqida", ru: "О Mafia Online" },
    description: {
      uz: "Mafia Online — brauzer va Telegram orqali o'ynaladigan jonli onlayn mafiya o'yini. Loyiha, missiyamiz va nega aynan biz haqimizda.",
      ru: "Mafia Online — живая онлайн игра Мафия в браузере и Telegram. О проекте, нашей миссии и о том, почему именно мы.",
    },
    body: {
      uz: [
        { h2: "Biz kimmiz" },
        { p: "Mafia Online — brauzer va Telegram orqali real vaqtda o'ynaladigan jonli onlayn mafiya o'yini. Klassik \"Mafiya\" stol o'yinini zamonaviy texnologiyalar bilan birlashtirib, do'stlaringiz bilan dunyoning istalgan nuqtasidan, o'z tilingizda o'ynash imkonini beramiz. Maqsadimiz — O'zbek tilidagi yetakchi va eng qulay mafiya platformasi bo'lish." },
        { h2: "Missiyamiz" },
        { p: "Stol atrofidagi jonli muloqot, kulgi va blefni masofa to'sib qo'ymasligi kerak. Biz mafiyani har kim — telefon yoki kompyuter orqali, ro'yxatdan o'tmasdan, bepul o'ynay oladigan qilib yaratdik. Ovozli va video chat orqali o'yin xuddi bir xonada o'tirgandek jonli his beradi." },
        { h2: "Nega aynan Mafia Online" },
        { ul: [
          "Brauzerda ishlaydi — hech narsa yuklab olish yoki o'rnatish shart emas.",
          "Telegram orqali bir bosishda kirish yoki mehmon sifatida darhol boshlash.",
          "Jonli ovozli va HD video chat — to'g'ridan-to'g'ri o'yin ichida.",
          "13 ta noyob rol: Don, Komissar, Shifokor, Manyak va boshqalar.",
          "O'zbek va rus tillarida to'liq ishlaydi.",
          "100% bepul — VIP profil faqat ko'rinish uchun, natijaga ta'sir qilmaydi.",
          "4–20 o'yinchi; tirik o'yinchi yetishmasa, aqlli botlar qo'shiladi.",
        ] },
        { h2: "Bog'lanish" },
        { p: `Savol, taklif yoki muammo bo'lsa, biz bilan bog'laning: <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a> yoki Telegram orqali <a href="${SUPPORT_TG_URL}" target="_blank" rel="noopener">${SUPPORT_TG}</a>. To'liq ma'lumot uchun <a href="/contact">Aloqa</a> sahifasiga o'ting.` },
      ],
      ru: [
        { h2: "Кто мы" },
        { p: "Mafia Online — живая онлайн игра Мафия в реальном времени в браузере и Telegram. Мы соединили классическую настольную «Мафию» с современными технологиями, чтобы вы могли играть с друзьями из любой точки мира и на своём языке. Наша цель — быть ведущей и самой удобной платформой Мафии в Узбекистане и СНГ." },
        { h2: "Наша миссия" },
        { p: "Живое общение за столом, смех и блеф не должны разбиваться о расстояние. Мы сделали Мафию доступной каждому — с телефона или компьютера, без регистрации и бесплатно. Голосовой и видеочат дают ощущение, будто все сидят в одной комнате." },
        { h2: "Почему именно Mafia Online" },
        { ul: [
          "Работает в браузере — ничего не нужно скачивать и устанавливать.",
          "Вход через Telegram в один клик или сразу как гость.",
          "Живой голосовой и HD видеочат — прямо внутри игры.",
          "13 уникальных ролей: Дон, Комиссар, Доктор, Маньяк и другие.",
          "Полностью на русском и узбекском языках.",
          "100% бесплатно — VIP-профиль только для вида и не влияет на исход.",
          "4–20 игроков; если живых не хватает, добавляются умные боты.",
        ] },
        { h2: "Связаться с нами" },
        { p: `По вопросам, предложениям или проблемам пишите нам: <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a> или в Telegram <a href="${SUPPORT_TG_URL}" target="_blank" rel="noopener">${SUPPORT_TG}</a>. Подробнее — на странице <a href="/ru/contact">Контакты</a>.` },
      ],
    },
  },

  contact: {
    slug: "contact",
    updated: UPDATED,
    title: { uz: "Aloqa", ru: "Контакты" },
    description: {
      uz: "Mafia Online bilan bog'lanish: email, Telegram qo'llab-quvvatlash, bot va kanal.",
      ru: "Связь с Mafia Online: email, поддержка в Telegram, бот и канал.",
    },
    body: {
      uz: [
        { p: "Bizga istalgan vaqtda murojaat qilishingiz mumkin. Quyidagi kanallar orqali bog'laning — odatda bir necha soat ichida javob beramiz." },
        { h2: "Qo'llab-quvvatlash" },
        { p: `<strong>Email:</strong> <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a>` },
        { p: `<strong>Telegram qo'llab-quvvatlash:</strong> <a href="${SUPPORT_TG_URL}" target="_blank" rel="noopener">${SUPPORT_TG}</a>` },
        { h2: "O'yin va yangiliklar" },
        { p: `<strong>O'yin boti:</strong> <a href="${BOT_URL}" target="_blank" rel="noopener">@MafiaOnlaynBot</a>` },
        { p: `<strong>Telegram kanal:</strong> <a href="${CHANNEL_URL}" target="_blank" rel="noopener">@MafiyaOnlaynUz</a>` },
        { p: `<strong>O'ynash:</strong> <a href="${PLAY_URL}" target="_blank" rel="noopener">game.mafiaonline.uz</a>` },
        { h2: "Javob vaqti" },
        { p: "To'lov, VIP yoki texnik nosozlik bilan bog'liq murojaatlarni birinchi navbatda ko'rib chiqamiz. Iltimos, muammoni iloji boricha batafsil yozing — bu tezroq yordam berishimizga ko'maklashadi." },
      ],
      ru: [
        { p: "Вы можете обратиться к нам в любое время. Свяжитесь по одному из каналов ниже — обычно мы отвечаем в течение нескольких часов." },
        { h2: "Поддержка" },
        { p: `<strong>Email:</strong> <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a>` },
        { p: `<strong>Поддержка в Telegram:</strong> <a href="${SUPPORT_TG_URL}" target="_blank" rel="noopener">${SUPPORT_TG}</a>` },
        { h2: "Игра и новости" },
        { p: `<strong>Игровой бот:</strong> <a href="${BOT_URL}" target="_blank" rel="noopener">@MafiaOnlaynBot</a>` },
        { p: `<strong>Telegram-канал:</strong> <a href="${CHANNEL_URL}" target="_blank" rel="noopener">@MafiyaOnlaynUz</a>` },
        { p: `<strong>Играть:</strong> <a href="${PLAY_URL}" target="_blank" rel="noopener">game.mafiaonline.uz</a>` },
        { h2: "Время ответа" },
        { p: "Обращения по оплате, VIP или техническим сбоям рассматриваем в первую очередь. Пожалуйста, опишите проблему как можно подробнее — так мы поможем быстрее." },
      ],
    },
  },

  privacy: {
    slug: "privacy",
    updated: UPDATED,
    title: { uz: "Maxfiylik siyosati", ru: "Политика конфиденциальности" },
    description: {
      uz: "Mafia Online qanday ma'lumotlarni yig'adi, ulardan qanday foydalanadi va ularni qanday himoya qiladi.",
      ru: "Какие данные собирает Mafia Online, как их использует и как защищает.",
    },
    body: {
      uz: [
        { p: "Maxfiyligingiz biz uchun muhim. Ushbu siyosat Mafia Online (mafiaonline.uz va game.mafiaonline.uz) qanday ma'lumotlarni yig'ishi va ulardan qanday foydalanishini tushuntiradi." },
        { h2: "Qanday ma'lumotlarni yig'amiz" },
        { ul: [
          "Telegram orqali kirganda: ochiq Telegram ma'lumotlari (ism, @username, ID va profil rasmi).",
          "Mehmon sifatida o'ynaganda: vaqtinchalik o'yin nomi va sessiya ma'lumotlari.",
          "O'yin statistikasi: o'ynagan partiyalar, natijalar va reyting.",
          "VIP xaridlari: Telegram Stars orqali amalga oshiriladi; biz karta yoki to'lov ma'lumotlaringizni saqlamaymiz.",
        ] },
        { h2: "Ovozli va video chat" },
        { p: "Ovozli va video chat faqat siz xona ichida bo'lganingizda, jonli muloqot uchun ishlatiladi. Kamera va mikrofon ixtiyoriy bo'lib, ularni istalgan vaqtda o'chirib qo'yishingiz mumkin." },
        { h2: "Ma'lumotlardan qanday foydalanamiz" },
        { ul: [
          "O'yinni ishlatish, xonalarni boshqarish va natijalarni hisoblash uchun.",
          "Statistika, reyting va do'stlar ro'yxatini saqlash uchun.",
          "Qo'llab-quvvatlash va xavfsizlikni ta'minlash (firibgarlik va qoidabuzarlikning oldini olish) uchun.",
        ] },
        { h2: "Uchinchi tomonlar" },
        { p: "Biz o'yin ishlashi uchun zarur bo'lgan xizmatlardan foydalanamiz, jumladan Telegram (kirish va to'lov uchun). Shaxsiy ma'lumotlaringizni reklama maqsadida sotmaymiz." },
        { h2: "Ma'lumotlaringizni o'chirish" },
        { p: `Akkauntingiz yoki ma'lumotlaringizni o'chirishni istasangiz, <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a> orqali murojaat qiling — so'rovingizni imkon qadar tez bajaramiz.` },
        { h2: "O'zgarishlar" },
        { p: "Ushbu siyosat vaqti-vaqti bilan yangilanishi mumkin. Eng so'nggi versiya doimo shu sahifada bo'ladi." },
      ],
      ru: [
        { p: "Ваша конфиденциальность важна для нас. Эта политика объясняет, какие данные собирает Mafia Online (mafiaonline.uz и game.mafiaonline.uz) и как мы их используем." },
        { h2: "Какие данные мы собираем" },
        { ul: [
          "При входе через Telegram: открытые данные Telegram (имя, @username, ID и фото профиля).",
          "При игре гостем: временное игровое имя и данные сессии.",
          "Игровая статистика: сыгранные партии, результаты и рейтинг.",
          "Покупки VIP: проводятся через Telegram Stars; мы не храним данные вашей карты или платежей.",
        ] },
        { h2: "Голосовой и видеочат" },
        { p: "Голосовой и видеочат используются только когда вы находитесь в комнате, для живого общения. Камера и микрофон опциональны, их можно отключить в любой момент." },
        { h2: "Как мы используем данные" },
        { ul: [
          "Для работы игры, управления комнатами и подсчёта результатов.",
          "Для сохранения статистики, рейтинга и списка друзей.",
          "Для поддержки и безопасности (предотвращение мошенничества и нарушений).",
        ] },
        { h2: "Третьи стороны" },
        { p: "Мы используем сервисы, необходимые для работы игры, включая Telegram (для входа и оплаты). Мы не продаём ваши персональные данные в рекламных целях." },
        { h2: "Удаление данных" },
        { p: `Если вы хотите удалить аккаунт или данные, напишите на <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a> — мы выполним запрос как можно быстрее.` },
        { h2: "Изменения" },
        { p: "Эта политика может время от времени обновляться. Актуальная версия всегда находится на этой странице." },
      ],
    },
  },

  terms: {
    slug: "terms",
    updated: UPDATED,
    title: { uz: "Foydalanish shartlari", ru: "Условия использования" },
    description: {
      uz: "Mafia Online'dan foydalanish shartlari: adolatli o'yin, VIP xaridlar va mas'uliyat.",
      ru: "Условия использования Mafia Online: честная игра, покупки VIP и ответственность.",
    },
    body: {
      uz: [
        { p: "Mafia Online'dan foydalanish orqali siz quyidagi shartlarga rozilik bildirasiz. Iltimos, ularni diqqat bilan o'qing." },
        { h2: "O'yindan foydalanish" },
        { p: "Mafia Online o'yini bepul taqdim etiladi. O'yindan shaxsiy, qonuniy va ko'ngilochar maqsadlarda foydalanishingiz mumkin." },
        { h2: "Adolatli o'yin va xulq-atvor" },
        { ul: [
          "Boshqa o'yinchilarni haqorat qilish, tahdid yoki kamsitish taqiqlanadi.",
          "Cheat, bot (ruxsatsiz), yoki o'yinni buzuvchi dasturlardan foydalanish taqiqlanadi.",
          "Spam, reklama va boshqa o'yinchilarning huquqlarini buzish taqiqlanadi.",
          "Qoidabuzarlik akkauntni cheklash yoki bloklashga olib kelishi mumkin.",
        ] },
        { h2: "VIP va Telegram Stars" },
        { p: "VIP profil — bu faqat ko'rinishni o'zgartiruvchi (animatsiya, ramka, toj) ixtiyoriy raqamli mahsulot va u o'yin natijasiga ta'sir qilmaydi. VIP Telegram Stars orqali sotib olinadi. Texnik nosozlik tufayli mahsulot yetkazilmasa, qo'llab-quvvatlash bilan bog'laning — masalani hal qilamiz." },
        { h2: "Mas'uliyatni cheklash" },
        { p: "O'yin \"borligicha\" taqdim etiladi. Biz uzluksiz ishlashga harakat qilamiz, lekin texnik ishlar yoki nosozliklar tufayli vaqtinchalik uzilishlar bo'lishi mumkin." },
        { h2: "O'zgarishlar" },
        { p: "Ushbu shartlar yangilanishi mumkin. Yangilangandan so'ng o'yindan foydalanishni davom ettirish yangi shartlarga rozilik hisoblanadi." },
        { h2: "Bog'lanish" },
        { p: `Savollar bo'lsa: <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a> yoki <a href="${SUPPORT_TG_URL}" target="_blank" rel="noopener">${SUPPORT_TG}</a>.` },
      ],
      ru: [
        { p: "Используя Mafia Online, вы соглашаетесь с условиями ниже. Пожалуйста, внимательно их прочитайте." },
        { h2: "Использование игры" },
        { p: "Игра Mafia Online предоставляется бесплатно. Вы можете использовать её в личных, законных и развлекательных целях." },
        { h2: "Честная игра и поведение" },
        { ul: [
          "Запрещены оскорбления, угрозы или унижение других игроков.",
          "Запрещено использование читов, несанкционированных ботов и программ, нарушающих игру.",
          "Запрещены спам, реклама и нарушение прав других игроков.",
          "Нарушения могут привести к ограничению или блокировке аккаунта.",
        ] },
        { h2: "VIP и Telegram Stars" },
        { p: "VIP-профиль — это опциональный цифровой товар, меняющий только внешний вид (анимации, рамка, корона), и он не влияет на исход игры. VIP покупается за Telegram Stars. Если из-за технического сбоя товар не доставлен, свяжитесь с поддержкой — мы решим вопрос." },
        { h2: "Ограничение ответственности" },
        { p: "Игра предоставляется «как есть». Мы стремимся к бесперебойной работе, но возможны временные перерывы из-за технических работ или сбоев." },
        { h2: "Изменения" },
        { p: "Эти условия могут обновляться. Продолжение использования игры после обновления означает согласие с новыми условиями." },
        { h2: "Связаться с нами" },
        { p: `По вопросам: <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a> или <a href="${SUPPORT_TG_URL}" target="_blank" rel="noopener">${SUPPORT_TG}</a>.` },
      ],
    },
  },
};

export const INFO_KEYS: InfoKey[] = ["about", "contact", "privacy", "terms"];

// ── SEO helpers ──────────────────────────────────────────────────────────
const SITE = "https://mafiaonline.uz";
const SCHEMA_TYPE: Record<InfoKey, string> = {
  about: "AboutPage",
  contact: "ContactPage",
  privacy: "WebPage",
  terms: "WebPage",
};

export const infoPath = (lang: InfoLang, key: InfoKey) => (lang === "ru" ? "/ru" : "") + `/${key}`;
export const infoAbs = (lang: InfoLang, key: InfoKey) => SITE + infoPath(lang, key);
export const infoHreflangs = (key: InfoKey) => [
  { lang: "uz", href: infoAbs("uz", key) },
  { lang: "ru", href: infoAbs("ru", key) },
];

export function infoSchema(lang: InfoLang, key: InfoKey) {
  const p = INFO_PAGES[key];
  const url = infoAbs(lang, key);
  const home = lang === "ru" ? `${SITE}/ru` : SITE;
  return [
    {
      "@context": "https://schema.org",
      "@type": SCHEMA_TYPE[key],
      name: p.title[lang],
      description: p.description[lang],
      url,
      inLanguage: lang === "ru" ? "ru-RU" : "uz-UZ",
      dateModified: p.updated,
      isPartOf: { "@type": "WebSite", name: "Mafia Online", url: SITE },
      publisher: { "@type": "Organization", name: "Mafia Online", url: SITE, logo: `${SITE}/icon-512x512.png` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: lang === "ru" ? "Главная" : "Bosh sahifa", item: home },
        { "@type": "ListItem", position: 2, name: p.title[lang], item: url },
      ],
    },
  ];
}
