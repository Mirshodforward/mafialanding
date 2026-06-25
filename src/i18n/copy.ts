// Bilingual content + shared data for the Mafia Online landing.
// Components take a `lang` ("uz" | "ru") and read from here so UZ and RU pages
// reuse the exact same markup/design.

import type { IconName } from "../components/icons";

export type Lang = "uz" | "ru";

export const PLAY_URL = "https://game.mafiaonline.uz";
export const BOT_URL = "https://t.me/MafiaOnlaynBot";
export const CHANNEL_URL = "https://t.me/MafiyaOnlaynUz";

/** Team accent colours (mirror the in-game palette). */
export type Team = "MAFIA" | "CIVIL" | "NEUTRAL";
export const TEAM_COLOR: Record<Team, string> = {
  MAFIA: "#C41E3A",
  CIVIL: "#2563EB",
  NEUTRAL: "#9333EA",
};
export const TEAM_LABEL: Record<Lang, Record<Team, string>> = {
  uz: { MAFIA: "Mafiya", CIVIL: "Shahar", NEUTRAL: "Neytral" },
  ru: { MAFIA: "Мафия", CIVIL: "Город", NEUTRAL: "Нейтрал" },
};

export interface Role {
  icon: IconName;
  /** Base filename of the role's card art in src/assets/rollar (no extension). */
  img?: string;
  color: string;
  team: Team;
  uz: { name: string; desc: string };
  ru: { name: string; desc: string };
}

// 13 roles — names/colours/descriptions sourced from the live game (src/constants/roles.ts).
export const ROLES: Role[] = [
  { icon: "crown", img: "don", color: "#D4AF37", team: "MAFIA",
    uz: { name: "Don", desc: "Mafiya boshlig'i. Kechasi oila bilan qurbon tanlaydi va hukm ijro etadi." },
    ru: { name: "Дон", desc: "Глава мафии. Ночью вместе с семьёй выбирает жертву и приводит приговор в исполнение." } },
  { icon: "crosshair", img: "mafia", color: "#C41E3A", team: "MAFIA",
    uz: { name: "Mafiya", desc: "Oila a'zosi. Kechasi birga qurbon tanlaydi. Don o'lsa, yangi Don bo'ladi." },
    ru: { name: "Мафия", desc: "Член семьи. Ночью выбирает жертву вместе со всеми. Если Дон убит — становится новым Доном." } },
  { icon: "search", img: "komissar", color: "#2563EB", team: "CIVIL",
    uz: { name: "Komissar Katani", desc: "Kechasi o'yinchini tekshiradi yoki o'ldiradi — shaharning bosh himoyachisi." },
    ru: { name: "Комиссар Катани", desc: "Ночью проверяет роль игрока или убивает его — главный защитник города." } },
  { icon: "shield", img: "serjant", color: "#3B82F6", team: "CIVIL",
    uz: { name: "Serjant", desc: "Komissar tekshiruvlaridan xabardor. Komissar o'lsa, uning o'rnini egallaydi." },
    ru: { name: "Сержант", desc: "Знает о проверках комиссара. Если комиссар погибает — занимает его место." } },
  { icon: "cross", img: "shifokor", color: "#16A34A", team: "CIVIL",
    uz: { name: "Shifokor", desc: "Kechasi bir o'yinchini hujumdan qutqaradi. Bir marta o'zini ham asray oladi." },
    ru: { name: "Доктор", desc: "Ночью спасает одного игрока от атаки. Один раз может спасти себя." } },
  { icon: "sword", img: "qotil", color: "#9333EA", team: "NEUTRAL",
    uz: { name: "Qotil (Manyak)", desc: "Har kecha birini o'ldiradi. Maqsadi — hammani yo'q qilib, yolg'iz g'olib bo'lish." },
    ru: { name: "Маньяк", desc: "Каждую ночь убивает одного. Цель — уничтожить всех и победить в одиночку." } },
  { icon: "heart", img: "mashuqa", color: "#EC4899", team: "CIVIL",
    uz: { name: "Ma'shuqa", desc: "Istalgan o'yinchini bir kechaga chalg'itadi — u kecha va kunduzi befarq qoladi." },
    ru: { name: "Любовница", desc: "Отвлекает любого игрока на ночь — он бездействует ночь и следующий день." } },
  { icon: "scales", img: "advokat", color: "#F59E0B", team: "CIVIL",
    uz: { name: "Advokat", desc: "Mijozini tanlaydi: Komissar uni tekshirsa, 'Tinch aholi' deb ko'rsatadi." },
    ru: { name: "Адвокат", desc: "Выбирает клиента: если комиссар проверит его — увидит «Мирный»." } },
  { icon: "eye", img: "daydi", color: "#A16207", team: "CIVIL",
    uz: { name: "Daydi", desc: "Tun bo'yi shahar kezadi va kim kimga borganini ko'radi — tirik guvoh." },
    ru: { name: "Бомж", desc: "Всю ночь бродит по городу и видит, кто к кому приходил — живой свидетель." } },
  { icon: "dice", img: "omadli", color: "#84CC16", team: "CIVIL",
    uz: { name: "Omadli", desc: "Omadi baland aholi — hujumga uchraganda 50% omon qolish imkoniyati bor." },
    ru: { name: "Счастливчик", desc: "Везучий житель — при атаке с шансом 50% остаётся в живых." } },
  { icon: "bomb", img: "kamikaze", color: "#F97316", team: "CIVIL",
    uz: { name: "Kamikaze", desc: "Linchda osilsa, o'zi bilan birga yana bir o'yinchini qabristonga olib ketadi." },
    ru: { name: "Камикадзе", desc: "Если его линчуют, забирает с собой на тот свет ещё одного игрока." } },
  { icon: "skull", img: "suidsid", color: "#A1A1AA", team: "NEUTRAL",
    uz: { name: "Suitsid", desc: "Faqat kunduzgi ovoz berishda linch qilinsa g'olib. Kechasi o'lsa — yutqazadi." },
    ru: { name: "Самоубийца", desc: "Побеждает, только если его линчуют днём. Умрёт ночью — проигрывает." } },
  { icon: "user", img: "tinchaholi", color: "#94A3B8", team: "CIVIL",
    uz: { name: "Tinch aholi", desc: "Kunduzi muhokama va ovoz berish orqali mafiyani fosh qilishga harakat qiladi." },
    ru: { name: "Мирный житель", desc: "Днём через обсуждение и голосование пытается вычислить мафию." } },
];

interface NavCopy { roles: string; features: string; how: string; faq: string; blog: string; play: string }
interface Feature { icon: IconName; title: string; text: string }
interface Step { title: string; text: string }
interface Stat { value: string; label: string }
interface FaqItem { q: string; a: string }

export interface Copy {
  htmlTitle: string;
  metaDescription: string;
  keywords: string;
  nav: NavCopy;
  hero: {
    badge: string;
    titleA: string;
    titleHi: string;
    titleB: string;
    desc: string;
    play: string;
    secondary: string;
    live: string;
    answer: string; // AEO direct-answer line
  };
  rolesSection: { label: string; title: string; subtitle: string };
  featuresSection: { label: string; title: string; subtitle: string; items: Feature[] };
  howSection: { label: string; title: string; subtitle: string; steps: Step[] };
  statsSection: { items: Stat[] };
  faqSection: { label: string; title: string; subtitle: string; items: FaqItem[] };
  cta: { title: string; text: string; play: string; channel: string };
  footer: { tagline: string; product: string; community: string; rights: string; play: string; bot: string; channel: string };
}

export const COPY: Record<Lang, Copy> = {
  uz: {
    htmlTitle: "Mafia Online — Onlayn Mafiya o'yini | Bepul o'ynang",
    metaDescription:
      "Mafia Online — do'stlaringiz bilan real vaqtda o'ynaladigan onlayn Mafiya o'yini. 13 ta noyob rol, ovozli va video chat, 4–20 o'yinchi. Telegram orqali bepul, ro'yxatdan o'tmasdan o'ynang.",
    keywords:
      "mafia online, mafia online o'yini, mafia online o'yna, mafiya online, mafiya onlayn, mafia online game, mafia online uzbek, mafiya o'yini, mafiya o'yini qanday o'ynaladi, mafiya o'yini qoidalari, mafiya o'yini rollar, 13 rollar mafiya o'yini, mafiyada don roli, video chat orqali mafiya, video chat mafiya o'yini, kamera orqali mafiya o'yna, vebkamera mafiya online, mafiya video qo'ng'iroq bilan, onlayn mafiya o'yini o'zbek, multiplayer mafiya o'yini, do'stlar bilan onlayn mafiya, party game onlayn o'zbek, ijtimoiy o'yin onlayn, psixologik o'yin onlayn, blef o'yini online, mafiya online telefonda, mafiya o'yini ilovasi, mafiya o'yini brauzerda, mafiya online ro'yxatdan o'tmasdan, o'zbek tilida mafiya o'yini, o'zbekcha mafiya, mafiya o'yini O'zbekiston, mafiya online Toshkent, mafia uz, мафия онлайн, мафия игра онлайн, мафия видеочат, мафия с друзьями онлайн, мафия играть бесплатно, mafia online free, play mafia online free, mafia game with friends video, online mafia party game, mafia social deduction game, real-time mafia video chat, mafia game with video call, how to play mafia online with friends",
    nav: { roles: "Rollar", features: "Imkoniyatlar", how: "Qanday o'ynash", faq: "Savollar", blog: "Blog", play: "O'ynash" },
    hero: {
      badge: "Jonli onlayn Mafiya",
      titleA: "Tun keldi.",
      titleHi: "Mafiya",
      titleB: "uyg'ondi.",
      desc:
        "Do'stlaring bilan real vaqtda o'yna: kechasi mafiya ov qiladi, kunduzi shahar haqiqatni qidiradi. Aldash, ittifoq va ovozli muloqot — hammasi bitta o'yinda.",
      play: "Hoziroq o'ynash",
      secondary: "Rollarni ko'rish",
      live: "o'yinchi hozir onlayn",
      answer:
        "Mafia Online — bu brauzer va Telegram orqali ishlaydigan bepul onlayn Mafiya o'yini. 4 dan 20 gacha o'yinchi, 13 ta rol, jonli ovozli chat va real vaqt rejimi.",
    },
    rolesSection: {
      label: "Rollar",
      title: "13 ta noyob rol",
      subtitle: "Har bir partiya yangi taqdir. Mafiya, shahar va neytral kuchlar — kim bo'lasan?",
    },
    featuresSection: {
      label: "Imkoniyatlar",
      title: "Nega aynan Mafia Online?",
      subtitle: "Zamonaviy, tez va adolatli — haqiqiy stol o'yini hissi, onlayn ko'rinishda.",
      items: [
        { icon: "zap", title: "Real vaqt rejimi", text: "Socket.io asosida — har bir ovoz, hujum va ovoz berish bir lahzada barchaga yetadi." },
        { icon: "mic", title: "Ovozli muloqot", text: "O'yin ichida jonli ovozli chat. Ishontir, ayblar yoki blef qil — tovushing bilan." },
        { icon: "users", title: "4–20 o'yinchi", text: "Kichik davra yoki katta shahar — xonani o'zing sozlaysan. Yetishmasa, botlar qo'shiladi." },
        { icon: "sparkles", title: "VIP profil", text: "Profilingni yondir: 5 xil animatsiya, oltin ramka va toj — o'yinda ajralib tur." },
        { icon: "telegram", title: "Telegram bilan kirish", text: "Bir bosishda kir — ro'yxatdan o'tish shart emas. Mini App ichida ham ishlaydi." },
        { icon: "devices", title: "Istalgan qurilmada", text: "Telefon, planshet yoki kompyuter — moslashuvchan dizayn hamma joyda silliq." },
      ],
    },
    howSection: {
      label: "Qanday o'ynash",
      title: "3 qadamda o'yinga kir",
      subtitle: "Murakkab sozlamalar yo'q — bir daqiqada birinchi partiyangni boshlaysan.",
      steps: [
        { title: "Kir", text: "Telegram orqali bir bosishda kir yoki mehmon sifatida darhol boshla." },
        { title: "Xona och yoki qo'shil", text: "Do'stlaringni havola orqali chaqir yoki ochiq xonaga qo'shil." },
        { title: "Rolingni o'yna", text: "Rol ol, kechasi harakat qil, kunduzi muhokama qil — va g'alaba qozon!" },
      ],
    },
    statsSection: {
      items: [
        { value: "13", label: "noyob rol" },
        { value: "4–20", label: "o'yinchi" },
        { value: "100%", label: "bepul" },
        { value: "24/7", label: "onlayn o'yinlar" },
      ],
    },
    faqSection: {
      label: "FAQ",
      title: "Ko'p beriladigan savollar",
      subtitle: "Mafia Online haqida bilishing kerak bo'lgan hamma narsa.",
      items: [
        { q: "Mafia Online nima?", a: "Mafia Online — do'stlaring bilan real vaqtda o'ynaladigan onlayn Mafiya o'yini. Shahar va mafiya o'rtasidagi psixologik kurash: kechasi mafiya ov qiladi, kunduzi shahar muhokama va ovoz berish orqali aybdorni topadi." },
        { q: "O'ynash uchun pul to'lash kerakmi?", a: "Yo'q, o'yin to'liq bepul. Faqat ixtiyoriy VIP profil (yonuvchi ramka va animatsiyalar) Telegram Stars orqali sotib olinadi — bu o'yin natijasiga ta'sir qilmaydi." },
        { q: "Qancha odam bilan o'ynasa bo'ladi?", a: "Bitta xonada 4 dan 20 gacha o'yinchi. Agar tirik o'yinchi yetishmasa, xonaga aqlli botlar qo'shilib, o'yin to'xtab qolmaydi." },
        { q: "Ro'yxatdan o'tish shartmi?", a: "Shart emas. Mehmon sifatida darhol boshlashing yoki Telegram orqali bir bosishda kirib, statistikang va do'stlaring saqlanib qolishi mumkin." },
        { q: "Telefonda o'ynasa bo'ladimi?", a: "Ha. Mafia Online moslashuvchan — telefon, planshet va kompyuterda silliq ishlaydi, hamda Telegram Mini App ichida ham ochiladi." },
        { q: "Qanday rollar bor?", a: "13 ta rol: Don, Mafiya, Komissar, Serjant, Shifokor, Manyak, Ma'shuqa, Advokat, Daydi, Omadli, Kamikaze, Suitsid va Tinch aholi — har biri o'ziga xos qobiliyatga ega." },
      ],
    },
    cta: {
      title: "Shahar seni kutmoqda",
      text: "Birinchi partiyang bir daqiqada boshlanadi. Kim do'st, kim dushman — bilib ol.",
      play: "Hoziroq o'ynash",
      channel: "Kanalga obuna",
    },
    footer: {
      tagline: "Do'stlaring bilan o'ynaladigan jonli onlayn Mafiya o'yini.",
      product: "Mahsulot",
      community: "Hamjamiyat",
      rights: "Barcha huquqlar himoyalangan.",
      play: "O'ynash",
      bot: "Telegram bot",
      channel: "Telegram kanal",
    },
  },

  ru: {
    htmlTitle: "Mafia Online — Онлайн игра Мафия | Играть бесплатно",
    metaDescription:
      "Mafia Online — онлайн игра Мафия в реальном времени с друзьями. 13 уникальных ролей, голосовой и видеочат, от 4 до 20 игроков. Играйте бесплатно через Telegram, без регистрации.",
    keywords:
      "мафия онлайн, мафия игра онлайн, мафия онлайн играть, мафия играть бесплатно, мафия видеочат, мафия с веб-камерой, мафия с видеозвонком онлайн, онлайн игра мафия с видео, мафия с друзьями онлайн, правила игры мафия онлайн, роли в мафии онлайн, как играть в мафию онлайн, как играть в мафию онлайн с вебкамерой, где поиграть в мафию онлайн бесплатно, мафия онлайн без регистрации, мафия онлайн без скачивания, мафия мобильная версия, мафия онлайн приложение, психологическая игра онлайн, игра на логику онлайн, мафия на узбекском языке, мафия СНГ онлайн, мафия Узбекистан, mafia online, mafia online game, mafiya online, mafiya o'yini, mafia uz, video chat orqali mafiya, do'stlar bilan onlayn mafiya, mafia online free, play mafia online free, mafia game with friends video, real-time mafia video chat, mafia game with video call, mafia social deduction game, online mafia party game",
    nav: { roles: "Роли", features: "Возможности", how: "Как играть", faq: "Вопросы", blog: "Блог", play: "Играть" },
    hero: {
      badge: "Живая онлайн Мафия",
      titleA: "Ночь пришла.",
      titleHi: "Мафия",
      titleB: "проснулась.",
      desc:
        "Играй с друзьями в реальном времени: ночью мафия охотится, днём город ищет правду. Обман, союзы и голосовой чат — всё в одной игре.",
      play: "Играть сейчас",
      secondary: "Смотреть роли",
      live: "игроков сейчас онлайн",
      answer:
        "Mafia Online — это бесплатная онлайн игра Мафия в браузере и Telegram. От 4 до 20 игроков, 13 ролей, живой голосовой чат и режим реального времени.",
    },
    rolesSection: {
      label: "Роли",
      title: "13 уникальных ролей",
      subtitle: "Каждая партия — новая судьба. Мафия, город и нейтральные силы. Кем будешь ты?",
    },
    featuresSection: {
      label: "Возможности",
      title: "Почему именно Mafia Online?",
      subtitle: "Современно, быстро и честно — ощущение настоящей настольной игры онлайн.",
      items: [
        { icon: "zap", title: "Реальное время", text: "На базе Socket.io — каждый голос, атака и голосование мгновенно доходят до всех." },
        { icon: "mic", title: "Голосовой чат", text: "Живой голосовой чат прямо в игре. Убеждай, обвиняй или блефуй — своим голосом." },
        { icon: "users", title: "От 4 до 20 игроков", text: "Маленький круг или большой город — настрой комнату сам. Не хватает — добавятся боты." },
        { icon: "sparkles", title: "VIP профиль", text: "Зажги профиль: 5 анимаций, золотая рамка и корона — выделяйся прямо в игре." },
        { icon: "telegram", title: "Вход через Telegram", text: "Вход в один клик — регистрация не нужна. Работает и внутри Mini App." },
        { icon: "devices", title: "На любом устройстве", text: "Телефон, планшет или ПК — адаптивный дизайн везде работает плавно." },
      ],
    },
    howSection: {
      label: "Как играть",
      title: "Войди в игру за 3 шага",
      subtitle: "Никаких сложных настроек — первая партия начнётся за минуту.",
      steps: [
        { title: "Войди", text: "Зайди через Telegram в один клик или начни сразу как гость." },
        { title: "Создай или присоединись", text: "Пригласи друзей по ссылке или войди в открытую комнату." },
        { title: "Сыграй свою роль", text: "Получи роль, действуй ночью, обсуждай днём — и побеждай!" },
      ],
    },
    statsSection: {
      items: [
        { value: "13", label: "уникальных ролей" },
        { value: "4–20", label: "игроков" },
        { value: "100%", label: "бесплатно" },
        { value: "24/7", label: "игры онлайн" },
      ],
    },
    faqSection: {
      label: "FAQ",
      title: "Частые вопросы",
      subtitle: "Всё, что нужно знать о Mafia Online.",
      items: [
        { q: "Что такое Mafia Online?", a: "Mafia Online — онлайн игра Мафия в реальном времени с друзьями. Психологическая битва города и мафии: ночью мафия охотится, а днём город обсуждает и голосованием вычисляет виновного." },
        { q: "Нужно ли платить за игру?", a: "Нет, игра полностью бесплатна. Только опциональный VIP-профиль (светящаяся рамка и анимации) покупается за Telegram Stars и не влияет на исход игры." },
        { q: "Сколько человек могут играть?", a: "В одной комнате от 4 до 20 игроков. Если живых игроков не хватает, добавляются умные боты, и игра не останавливается." },
        { q: "Нужна ли регистрация?", a: "Не обязательно. Можно начать сразу как гость или войти через Telegram в один клик, чтобы сохранить статистику и друзей." },
        { q: "Можно играть с телефона?", a: "Да. Mafia Online адаптивна — плавно работает на телефоне, планшете и ПК, а также открывается внутри Telegram Mini App." },
        { q: "Какие есть роли?", a: "13 ролей: Дон, Мафия, Комиссар, Сержант, Доктор, Маньяк, Любовница, Адвокат, Бомж, Счастливчик, Камикадзе, Самоубийца и Мирный житель — у каждой своя способность." },
      ],
    },
    cta: {
      title: "Город ждёт тебя",
      text: "Первая партия начнётся за минуту. Узнай, кто друг, а кто враг.",
      play: "Играть сейчас",
      channel: "Подписаться на канал",
    },
    footer: {
      tagline: "Живая онлайн игра Мафия для игры с друзьями.",
      product: "Продукт",
      community: "Сообщество",
      rights: "Все права защищены.",
      play: "Играть",
      bot: "Telegram бот",
      channel: "Telegram канал",
    },
  },
};
