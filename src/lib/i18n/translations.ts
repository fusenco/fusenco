/**
 * FUSEN i18n - Multi-language translation system
 * Supported: EN, RU, JA, KO, ES, PT, FR, AR, DE, IT, NL, TH, ID, FA, HI, TR, KK, UZ, KY, TG, TK, PL, LA, FI, MS, SV, EL
 */

export type LanguageCode = "en" | "ru" | "ja" | "ko" | "es" | "pt" | "fr" | "ar" | "de" | "it" | "nl" | "th" | "id" | "fa" | "hi" | "tr" | "kk" | "uz" | "ky" | "tg" | "tk" | "pl" | "la" | "fi" | "ms" | "sv" | "el";

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
  flag: string;
  rtl?: boolean;
}

export const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", nativeLabel: "English", flag: "EN" },
  { code: "ru", label: "Russian", nativeLabel: "Русский", flag: "RU" },
  { code: "ja", label: "Japanese", nativeLabel: "日本語", flag: "JA" },
  { code: "ko", label: "Korean", nativeLabel: "한국어", flag: "KO" },
  { code: "es", label: "Spanish", nativeLabel: "Español", flag: "ES" },
  { code: "pt", label: "Portuguese", nativeLabel: "Português", flag: "PT" },
  { code: "fr", label: "French", nativeLabel: "Français", flag: "FR" },
  { code: "ar", label: "Arabic", nativeLabel: "العربية", flag: "AR", rtl: true },
  { code: "de", label: "German", nativeLabel: "Deutsch", flag: "DE" },
  { code: "it", label: "Italian", nativeLabel: "Italiano", flag: "IT" },
  { code: "nl", label: "Dutch", nativeLabel: "Nederlands", flag: "NL" },
  { code: "th", label: "Thai", nativeLabel: "ไทย", flag: "TH" },
  { code: "id", label: "Indonesian", nativeLabel: "Bahasa Indonesia", flag: "ID" },
  { code: "fa", label: "Persian", nativeLabel: "فارسی", flag: "FA", rtl: true },
  { code: "hi", label: "Hindi", nativeLabel: "हिन्दी", flag: "HI" },
  { code: "tr", label: "Turkish", nativeLabel: "Türkçe", flag: "TR" },
  { code: "kk", label: "Kazakh", nativeLabel: "Қазақша", flag: "KK" },
  { code: "uz", label: "Uzbek", nativeLabel: "O'zbekcha", flag: "UZ" },
  { code: "ky", label: "Kyrgyz", nativeLabel: "Кыргызча", flag: "KY" },
  { code: "tg", label: "Tajik", nativeLabel: "Тоҷикӣ", flag: "TG" },
  { code: "tk", label: "Turkmen", nativeLabel: "Türkmen", flag: "TK" },
  { code: "pl", label: "Polish", nativeLabel: "Polski", flag: "PL" },
  { code: "la", label: "Latin", nativeLabel: "Latina", flag: "LA" },
  { code: "fi", label: "Finnish", nativeLabel: "Suomi", flag: "FI" },
  { code: "ms", label: "Malay", nativeLabel: "Bahasa Melayu", flag: "MS" },
  { code: "sv", label: "Swedish", nativeLabel: "Svenska", flag: "SV" },
  { code: "el", label: "Greek", nativeLabel: "Ελληνικά", flag: "EL" },
];

export interface Translation {
  nav: {
    home: string;
    services: string;
    destinations: string;
    guides: string;
    about: string;
    plan: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    titleTop: string;
    titleBottom: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  destinations: {
    title: string;
    subtitle: string;
    cities: { name: string; desc: string }[];
    explore: string;
  };
  guides: {
    title: string;
    subtitle: string;
    languages: string;
    experience: string;
    viewProfile: string;
  };
  whyUs: {
    title: string;
    subtitle: string;
    features: { title: string; desc: string }[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: { quote: string; author: string; role: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    whatsapp: string;
    email: string;
    whatsappBtn: string;
    emailBtn: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contactUs: string;
    followUs: string;
    copyright: string;
    rights: string;
  };
}

export const translations: Record<LanguageCode, Translation> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      destinations: "Destinations",
      guides: "Our Guides",
      about: "About",
      plan: "Plan",
      contact: "Contact",
      cta: "Get in Touch",
    },
    hero: {
      badge: "Premium Local Guide Service in China",
      titleTop: "Discover the",
      titleBottom: "Real China",
      subtitle:
        "Professional local guides for independent travelers, transit visitors, and families. Multi-language support, private tours, and business assistance across China's top destinations.",
      cta1: "Start Your Journey",
      cta2: "Explore Services",
      stat1Label: "Cities Covered",
      stat2Label: "Languages Spoken",
      stat3Label: "Happy Travelers",
    },
    services: {
      title: "Our Services",
      subtitle:
        "Comprehensive local guide services tailored for international visitors to China",
      items: [
        {
          title: "Language Translation",
          desc: "Professional interpreters fluent in English, Russian, Japanese, Korean, Spanish, Portuguese, French, Arabic and more. Bridge the communication gap effortlessly.",
        },
        {
          title: "Private Local Experiences",
          desc: "Hidden gems, authentic local shops, cultural workshops, and off-the-beaten-path discoveries curated just for you. No group tours — fully personalized.",
        },
        {
          title: "Business Matching",
          desc: "Factory visits, supplier meetings, trade fair assistance, and business networking. We connect you with the right partners across China.",
        },
        {
          title: "Transit & Visa-Free Tours",
          desc: "Short-stay shore excursions and transit visa-free tours designed for cruise passengers and layover travelers. Maximize every minute in China.",
        },
      ],
    },
    destinations: {
      title: "Popular Destinations",
      subtitle: "Explore China's most iconic cities with our expert local guides",
      cities: [
        { name: "Beijing", desc: "Forbidden City, Great Wall, hutong alleys" },
        { name: "Shanghai", desc: "Bund, French Concession, modern skyline" },
        { name: "Xi'an", desc: "Terracotta Warriors, ancient city wall" },
        { name: "Chengdu", desc: "Pandas, teahouses, spicy Sichuan cuisine" },
        { name: "Guangzhou", desc: "Canton Tower, trade hubs, dim sum" },
        { name: "Hangzhou", desc: "West Lake, tea plantations, silk heritage" },
        { name: "Shenzhen", desc: "Tech innovation, electronics markets" },
        { name: "Guilin", desc: "Karst mountains, Li River cruise" },
      ],
      explore: "Explore",
    },
    guides: {
      title: "Meet Our Guides",
      subtitle:
        "Licensed, experienced, and passionate local experts ready to show you the best of China",
      languages: "Languages",
      experience: "years experience",
      viewProfile: "View Profile",
    },
    whyUs: {
      title: "Why Choose FUSEN",
      subtitle: "We make your China journey seamless, authentic, and unforgettable",
      features: [
        {
          title: "Licensed Professionals",
          desc: "All guides hold official national tour guide licenses with years of experience serving international visitors.",
        },
        {
          title: "Multi-Language Support",
          desc: "From English to Arabic, Russian to Portuguese — communicate comfortably in your native language throughout your trip.",
        },
        {
          title: "Fully Customized",
          desc: "No cookie-cutter itineraries. Every tour is tailored to your interests, pace, and preferences. You're in control.",
        },
        {
          title: "24/7 Availability",
          desc: "Round-the-clock support via WhatsApp. We're always one message away, wherever you are in China.",
        },
      ],
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Real experiences from travelers who chose FUSEN",
      items: [
        {
          quote:
            "Our guide in Beijing spoke perfect Russian and knew every hidden corner of the hutongs. Best travel decision we made!",
          author: "Maria Ivanova",
          role: "Independent traveler from Moscow",
        },
        {
          quote:
            "FUSEN arranged a factory visit in Shenzhen that was crucial for our business. Professional, efficient, and beyond expectations.",
          author: "Carlos Mendez",
          role: "Business traveler from São Paulo",
        },
        {
          quote:
            "Traveling with kids in China seemed daunting, but our guide made it effortless. The kids still talk about the panda experience!",
          author: "Sophie Laurent",
          role: "Family traveler from Paris",
        },
      ],
    },
    contact: {
      title: "Get in Touch",
      subtitle:
        "Ready to plan your China adventure? Send us a message and we'll respond within 24 hours.",
      whatsapp: "WhatsApp",
      email: "Email",
      whatsappBtn: "Chat on WhatsApp",
      emailBtn: "Send Email",
      formName: "Your Name",
      formEmail: "Email Address",
      formMessage: "Tell us about your trip",
      formSubmit: "Send Inquiry",
      formSuccess: "Thank you! We'll get back to you within 24 hours.",
    },
    footer: {
      tagline: "Your trusted local guide partner in China. Authentic experiences, professional service, multilingual support.",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      followUs: "Follow Us",
      copyright: "FUSEN",
      rights: "All rights reserved.",
    },
  },

  ru: {
    nav: {
      home: "Главная",
      services: "Услуги",
      destinations: "Направления",
      guides: "Наши гиды",
      about: "О нас",
      plan: "План",
      contact: "Контакты",
      cta: "Связаться",
    },
    hero: {
      badge: "Премиум-сервис местных гидов в Китае",
      titleTop: "Откройте",
      titleBottom: "Настоящий Китай",
      subtitle:
        "Профессиональные местные гиды для индивидуальных путешественников, транзитных пассажиров и семей. Многоязычная поддержка, частные туры и деловое сопровождение в лучших направлениях Китая.",
      cta1: "Начать путешествие",
      cta2: "Наши услуги",
      stat1Label: "Городов",
      stat2Label: "Языков",
      stat3Label: "Довольных туристов",
    },
    services: {
      title: "Наши услуги",
      subtitle:
        "Комплексные услуги местного гида для иностранных гостей Китая",
      items: [
        {
          title: "Языковой перевод",
          desc: "Профессиональные переводчики, владеющие английским, русским, японским, корейским, испанским, португальским, французским, арабским и др. Преодолейте языковой барьер легко.",
        },
        {
          title: "Частные локальные впечатления",
          desc: "Скрытые жемчужины, аутентичные местные магазины, культурные мастер-классы и неизведанные маршруты — только для вас. Без групповых туров — полностью персонально.",
        },
        {
          title: "Деловое сопровождение",
          desc: "Посещение фабрик, встречи с поставщиками, помощь на ярмарках и деловые связи. Мы свяжем вас с нужными партнёрами по всему Китаю.",
        },
        {
          title: "Транзитные туры без визы",
          desc: "Короткие экскурсии для круизных пассажиров и транзитных путешественников без визы. Получите максимум от каждой минуты в Китае.",
        },
      ],
    },
    destinations: {
      title: "Популярные направления",
      subtitle: "Исследуйте самые знаменитые города Китая с нашими экспертами",
      cities: [
        { name: "Пекин", desc: "Запретный город, Великая стена, хутуны" },
        { name: "Шанхай", desc: "Бунд, Французская концессия, небоскрёбы" },
        { name: "Сиань", desc: "Терракотовая армия, древняя городская стена" },
        { name: "Чэнду", desc: "Панды, чайные дома, сычуаньская кухня" },
        { name: "Гуанчжоу", desc: "Кантонская башня, торговые центры, димсам" },
        { name: "Ханчжоу", desc: "Западное озеро, чайные плантации, шёлк" },
        { name: "Шэньчжэнь", desc: "Технологии, электронные рынки" },
        { name: "Гуйлинь", desc: "Карстовые горы, круиз по реке Ли" },
      ],
      explore: "Подробнее",
    },
    guides: {
      title: "Наши гиды",
      subtitle:
        "Лицензированные, опытные и увлечённые местные эксперты, готовые показать вам лучшее в Китае",
      languages: "Языки",
      experience: "лет опыта",
      viewProfile: "Профиль",
    },
    whyUs: {
      title: "Почему FUSEN",
      subtitle: "Мы делаем ваше путешествие по Китаю лёгким, аутентичным и незабываемым",
      features: [
        {
          title: "Лицензированные профессионалы",
          desc: "Все гиды имеют официальные национальные лицензии и многолетний опыт работы с иностранными гостями.",
        },
        {
          title: "Многоязычная поддержка",
          desc: "От английского до арабского, от русского до португальского — общайтесь на родном языке на протяжении всей поездки.",
        },
        {
          title: "Полная кастомизация",
          desc: "Никаких шаблонных маршрутов. Каждый тур адаптирован под ваши интересы и предпочтения. Вы контролируете всё.",
        },
        {
          title: "Поддержка 24/7",
          desc: "Круглосуточная поддержка через WhatsApp. Мы всегда на связи, где бы вы ни находились в Китае.",
        },
      ],
    },
    testimonials: {
      title: "Отзывы наших клиентов",
      subtitle: "Реальный опыт путешественников, выбравших FUSEN",
      items: [
        {
          quote:
            "Наш гид в Пекине говорил на идеальном русском и знал каждый уголок хутунов. Лучшее решение в поездке!",
          author: "Мария Иванова",
          role: "Самостоятельный путешественник из Москвы",
        },
        {
          quote:
            "FUSEN организовал визит на фабрику в Шэньчжэне, который был критичен для нашего бизнеса. Профессионально и эффективно.",
          author: "Карлос Мендес",
          role: "Бизнес-путешественник из Сан-Паулу",
        },
        {
          quote:
            "Путешествие с детьми в Китае казалось сложным, но наш гид сделал всё легко. Дети до сих пор вспоминают панд!",
          author: "Софи Лоран",
          role: "Семейный турист из Парижа",
        },
      ],
    },
    contact: {
      title: "Свяжитесь с нами",
      subtitle:
        "Готовы спланировать приключение в Китае? Отправьте сообщение, и мы ответим в течение 24 часов.",
      whatsapp: "WhatsApp",
      email: "Эл. почта",
      whatsappBtn: "Написать в WhatsApp",
      emailBtn: "Отправить письмо",
      formName: "Ваше имя",
      formEmail: "Email адрес",
      formMessage: "Расскажите о вашей поездке",
      formSubmit: "Отправить запрос",
      formSuccess: "Спасибо! Мы свяжемся с вами в течение 24 часов.",
    },
    footer: {
      tagline: "Ваш надёжный партнёр-гид в Китае. Аутентичный опыт, профессиональный сервис, многоязычная поддержка.",
      quickLinks: "Быстрые ссылки",
      contactUs: "Контакты",
      followUs: "Мы в соцсетях",
      copyright: "FUSEN",
      rights: "Все права защищены.",
    },
  },

  ja: {
    nav: {
      home: "ホーム",
      services: "サービス",
      destinations: "目的地",
      guides: "ガイド紹介",
      about: "会社概要",
      plan: "プラン",
      contact: "お問い合わせ",
      cta: "お問い合わせ",
    },
    hero: {
      badge: "中国プレミアム現地ガイドサービス",
      titleTop: "本当の中国を",
      titleBottom: "見つけよう",
      subtitle:
        "個人旅行者、トランジット旅行者、家族旅行のためのプロフェッショナルな現地ガイド。多言語サポート、プライベートツアー、ビジネス支援を中国の主要都市で提供します。",
      cta1: "旅を始める",
      cta2: "サービスを見る",
      stat1Label: "対応都市",
      stat2Label: "対応言語",
      stat3Label: "満足した旅行者",
    },
    services: {
      title: "サービス",
      subtitle: "中国を訪れる外国人旅行者のための総合現地ガイドサービス",
      items: [
        {
          title: "言語通訳",
          desc: "英語、ロシア語、日本語、韓国語、スペイン語、ポルトガル語、フランス語、アラビア語などに堪能なプロ通訳。言葉の壁を簡単に乗り越えましょう。",
        },
        {
          title: "プライベート現地体験",
          desc: "隠れた名所、本格的な地元の店、文化ワークショップ、穴場スポットをあなただけのために企画。グループツアーなし — 完全パーソナライズ。",
        },
        {
          title: "ビジネスサポート",
          desc: "工場見学、サプライヤーとの面会、見本市サポート、ビジネスネットワーキング。中国全土で適切なパートナーをご紹介します。",
        },
        {
          title: "トランジット・ビザなしツアー",
          desc: "クルーズ乗客と乗り継ぎ旅行者向けの短時間滞在ツアー。中国での每一分を最大限に活用。",
        },
      ],
    },
    destinations: {
      title: "人気の目的地",
      subtitle: "専門ガイドと一緒に中国の最も象徴的な都市を探索",
      cities: [
        { name: "北京", desc: "故宮、万里の長城、フートン" },
        { name: "上海", desc: "外灘、旧フランス租界、摩天楼" },
        { name: "西安", desc: "兵馬俑、古代城壁" },
        { name: "成都", desc: "パンダ、茶館、四川料理" },
        { name: "広州", desc: "広州塔、貿易ハブ、飲茶" },
        { name: "杭州", desc: "西湖、茶畑、シルク遺産" },
        { name: "深圳", desc: "テクノロジー、電子市場" },
        { name: "桂林", desc: "カルスト山地、漓江下り" },
      ],
      explore: "詳細を見る",
    },
    guides: {
      title: "ガイド紹介",
      subtitle: "中国の魅力をお見せするライセンス保有の経験豊富な現地エキスパート",
      languages: "言語",
      experience: "年の経験",
      viewProfile: "プロフィール",
    },
    whyUs: {
      title: "FUSENが選ばれる理由",
      subtitle: "中国の旅をシームレスで、本格的で、忘れられないものにします",
      features: [
        {
          title: "ライセンス保有プロ",
          desc: "全ガイドが公式国家ガイドライセンスを保有し、外国人旅行者の対応に長年の経験があります。",
        },
        {
          title: "多言語サポート",
          desc: "英語からアラビア語、ロシア語からポルトガル語まで — 旅行中ずっと母語で快適にコミュニケーション。",
        },
        {
          title: "完全カスタマイズ",
          desc: "画一的なスケジュールなし。すべてのツアーはあなたの興味とペースに合わせて調整。主導権はあなたに。",
        },
        {
          title: "24時間サポート",
          desc: "WhatsAppで24時間体制のサポート。中国のどこにいてもメッセージ一つで対応。",
        },
      ],
    },
    testimonials: {
      title: "お客様の声",
      subtitle: "FUSENを選んだ旅行者のリアルな体験",
      items: [
        {
          quote: "北京のガイドは完璧な日本語を話し、フートンの隠れた場所を知り尽くしていました。最高の旅行決定でした！",
          author: "マリア・イワノワ",
          role: "モスクワからの個人旅行者",
        },
        {
          quote: "FUSENは深センでの工場訪問を手配してくれました。ビジネスに不可欠な訪問でした。プロフェッショナルで期待以上でした。",
          author: "カルロス・メンデス",
          role: "サンパウロからのビジネス旅行者",
        },
        {
          quote: "子供連れの中国旅行は不安でしたが、ガイドのおかげで安心でした。子供たちはまだパンダのことを話しています！",
          author: "ソフィー・ローラン",
          role: "パリからの家族旅行者",
        },
      ],
    },
    contact: {
      title: "お問い合わせ",
      subtitle: "中国の冒険を計画する準備はできましたか？メッセージを送ってください。24時間以内に返信します。",
      whatsapp: "WhatsApp",
      email: "メール",
      whatsappBtn: "WhatsAppでチャット",
      emailBtn: "メールを送信",
      formName: "お名前",
      formEmail: "メールアドレス",
      formMessage: "旅行について教えてください",
      formSubmit: "問い合わせ送信",
      formSuccess: "ありがとうございます！24時間以内にご連絡いたします。",
    },
    footer: {
      tagline: "中国での信頼できる現地ガイドパートナー。本格的な体験、プロのサービス、多言語サポート。",
      quickLinks: "クイックリンク",
      contactUs: "お問い合わせ",
      followUs: "フォローする",
      copyright: "FUSEN",
      rights: "全著作権所有。",
    },
  },

  ko: {
    nav: {
      home: "홈",
      services: "서비스",
      destinations: "여행지",
      guides: "가이드",
      about: "소개",
      plan: "계획",
      contact: "문의",
      cta: "문의하기",
    },
    hero: {
      badge: "중국 프리미엄 현지 가이드 서비스",
      titleTop: "진정한 중국을",
      titleBottom: "발견하세요",
      subtitle:
        "개인 여행객, 환승 여행객 및 가족 여행을 위한 전문 현지 가이드. 다국어 지원, 프라이빗 투어 및 비즈니스 지원을 중국 주요 목적지에서 제공합니다.",
      cta1: "여행 시작하기",
      cta2: "서비스 보기",
      stat1Label: "서비스 도시",
      stat2Label: "지원 언어",
      stat3Label: "만족한 여행객",
    },
    services: {
      title: "서비스",
      subtitle: "중국을 방문하는 외국인 여행객을 위한 종합 현지 가이드 서비스",
      items: [
        {
          title: "언어 통역",
          desc: "영어, 러시아어, 일본어, 한국어, 스페인어, 포르투갈어, 프랑스어, 아랍어 등에 능통한 전문 통역사. 언어 장벽을 쉽게 넘으세요.",
        },
        {
          title: "프라이빗 현지 체험",
          desc: "숨겨진 명소, 현지 상점, 문화 워크숍 및 특별한 장소를 오직 당신을 위해 큐레이션. 단체 투어 없음 — 완전한 맞춤형.",
        },
        {
          title: "비즈니스 매칭",
          desc: "공장 방문, 공급업체 미팅, 무역 박람회 지원 및 비즈니스 네트워킹. 중국 전역의 적절한 파트너와 연결해 드립니다.",
        },
        {
          title: "환승 및 비자 면제 투어",
          desc: "크루즈 승객 및 환승 여행객을 위한 단기 체류 투어. 중국에서의 매 순간을 최대한 활용하세요.",
        },
      ],
    },
    destinations: {
      title: "인기 여행지",
      subtitle: "전문 가이드와 함께 중국의 가장 상징적인 도시 탐험",
      cities: [
        { name: "베이징", desc: "자금성, 만리장성, 후통 골목" },
        { name: "상하이", desc: "와이탄, 프랑스 조계, 마천루" },
        { name: "시안", desc: "병마용, 고대 성벽" },
        { name: "청두", desc: "판다, 찻집, 쓰촨 요리" },
        { name: "광저우", desc: "광저우 타워, 무역 허브, 딤섬" },
        { name: "항저우", desc: "서호, 차 농장, 실크 유산" },
        { name: "선전", desc: "기술 혁신, 전자 시장" },
        { name: "구이린", desc: "카르스트 산, 리강 크루즈" },
      ],
      explore: "자세히 보기",
    },
    guides: {
      title: "가이드 소개",
      subtitle: "중국의 최고를 보여줄 면허 보유, 경험 많은 현지 전문가",
      languages: "언어",
      experience: "년 경력",
      viewProfile: "프로필 보기",
    },
    whyUs: {
      title: "FUSEN을 선택하는 이유",
      subtitle: "중국 여행을 매끄럽고, 진정하고, 잊을 수 없게 만듭니다",
      features: [
        {
          title: "면허 보유 전문가",
          desc: "모든 가이드는 공식 국가 가이드 면허를 보유하고 있으며 외국인 방문객 응대에 다년의 경험이 있습니다.",
        },
        {
          title: "다국어 지원",
          desc: "영어부터 아랍어, 러시아어부터 포르투갈어까지 — 여행 내내 모국어로 편안하게 소통하세요.",
        },
        {
          title: "완전 맞춤형",
          desc: "획일적인 일정 없음. 모든 투어는 귀하의 관심사와 선호도에 맞춰 조정됩니다. 주도권은 귀하에게.",
        },
        {
          title: "24시간 지원",
          desc: "WhatsApp을 통한 연중무휴 지원. 중국 어디에 있든 한 번의 메시지로 연락 가능합니다.",
        },
      ],
    },
    testimonials: {
      title: "고객 후기",
      subtitle: "FUSEN을 선택한 여행객들의 실제 경험",
      items: [
        {
          quote: "베이징 가이드는 완벽한 한국어를 구사했고 후통의 숨겨진 구석을 모두 알고 있었습니다. 최고의 여행 결정이었어요!",
          author: "마리아 이바노바",
          role: "모스크바에서 온 개인 여행객",
        },
        {
          quote: "FUSEN은 선전에서의 공장 방문을 주선했습니다. 비즈니스에 필수적인 방문이었습니다. 전문적이고 기대 이상이었습니다.",
          author: "카를로스 멘데스",
          role: "상파울루에서 온 비즈니스 여행객",
        },
        {
          quote: "아이와 함께하는 중국 여행이 막막했지만, 가이드 덕분에 수월했습니다. 아이들이 아직도 판다 이야기를 해요!",
          author: "소피 로랑",
          role: "파리에서 온 가족 여행객",
        },
      ],
    },
    contact: {
      title: "문의하기",
      subtitle: "중국 모험을 계획할 준비가 되셨나요? 메시지를 보내주시면 24시간 이내에 답변드립니다.",
      whatsapp: "WhatsApp",
      email: "이메일",
      whatsappBtn: "WhatsApp 채팅",
      emailBtn: "이메일 보내기",
      formName: "이름",
      formEmail: "이메일 주소",
      formMessage: "여행에 대해 알려주세요",
      formSubmit: "문의 보내기",
      formSuccess: "감사합니다! 24시간 이내에 연락드리겠습니다.",
    },
    footer: {
      tagline: "중국에서 신뢰할 수 있는 현지 가이드 파트너. 진정한 경험, 전문 서비스, 다국어 지원.",
      quickLinks: "빠른 링크",
      contactUs: "문의하기",
      followUs: "팔로우",
      copyright: "FUSEN",
      rights: "모든 권리 보유.",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      destinations: "Destinos",
      guides: "Guías",
      about: "Nosotros",
      plan: "Plan",
      contact: "Contacto",
      cta: "Contáctanos",
    },
    hero: {
      badge: "Servicio Premium de Guías Locales en China",
      titleTop: "Descubre la",
      titleBottom: "Verdadera China",
      subtitle:
        "Guías locales profesionales para viajeros independientes, visitantes en tránsito y familias. Soporte multilingüe, tours privados y asistencia comercial en los principales destinos de China.",
      cta1: "Comienza tu viaje",
      cta2: "Ver servicios",
      stat1Label: "Ciudades",
      stat2Label: "Idiomas",
      stat3Label: "Viajeros felices",
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Servicios integrales de guía local para visitantes extranjeros en China",
      items: [
        {
          title: "Traducción e Interpretación",
          desc: "Intérpretes profesionales fluentes en inglés, ruso, japonés, coreano, español, portugués, francés, árabe y más. Supera la barrera del idioma sin esfuerzo.",
        },
        {
          title: "Experiencias Locales Privadas",
          desc: "Lugares ocultos, tiendas auténticas, talleres culturales y descubrimientos fuera de lo común, curados solo para ti. Sin tours grupales — totalmente personalizado.",
        },
        {
          title: "Asistencia Comercial",
          desc: "Visitas a fábricas, reuniones con proveedores, asistencia en ferias comerciales y networking. Te conectamos con los socios adecuados en toda China.",
        },
        {
          title: "Tours de Tránsito y Sin Visa",
          desc: "Excursiones cortas para pasajeros de cruceros y viajeros en tránsito sin visa. Aprovecha al máximo cada minuto en China.",
        },
      ],
    },
    destinations: {
      title: "Destinos Populares",
      subtitle: "Explora las ciudades más icónicas de China con nuestros guías expertos",
      cities: [
        { name: "Pekín", desc: "Ciudad Prohibida, Gran Muralla, hutongs" },
        { name: "Shanghái", desc: "Bund, Concesión Francesa, rascacielos" },
        { name: "Xi'an", desc: "Guerreros de Terracota, muralla antigua" },
        { name: "Chengdu", desc: "Pandas, casas de té, cuisine de Sichuan" },
        { name: "Guangzhou", desc: "Torre de Cantón, centros comerciales, dim sum" },
        { name: "Hangzhou", desc: "Lago del Oeste, plantaciones de té, seda" },
        { name: "Shenzhen", desc: "Innovación tecnológica, mercados electrónicos" },
        { name: "Guilin", desc: "Montañas kársticas, crucero por el río Li" },
      ],
      explore: "Explorar",
    },
    guides: {
      title: "Nuestros Guías",
      subtitle: "Expertos locales con licencia, experimentados y apasionados",
      languages: "Idiomas",
      experience: "años de experiencia",
      viewProfile: "Ver perfil",
    },
    whyUs: {
      title: "Por qué elegir FUSEN",
      subtitle: "Hacemos tu viaje por China fluido, auténtico e inolvidable",
      features: [
        {
          title: "Profesionales Licenciados",
          desc: "Todos los guías tienen licencias oficiales nacionales y años de experiencia con visitantes extranjeros.",
        },
        {
          title: "Soporte Multilingüe",
          desc: "Del inglés al árabe, del ruso al portugués — comunícate cómodamente en tu idioma materno durante todo el viaje.",
        },
        {
          title: "Totalmente Personalizado",
          desc: "Sin itinerarios genéricos. Cada tour se adapta a tus intereses y preferencias. Tú tienes el control.",
        },
        {
          title: "Disponibilidad 24/7",
          desc: "Soporte las 24 horas vía WhatsApp. Siempre a un mensaje de distancia, estés donde estés en China.",
        },
      ],
    },
    testimonials: {
      title: "Lo que dicen nuestros clientes",
      subtitle: "Experiencias reales de viajeros que eligieron FUSEN",
      items: [
        {
          quote: "Nuestra guía en Pekín hablaba perfecto español y conocía cada rincón oculto de los hutongs. ¡La mejor decisión de viaje!",
          author: "María Ivanova",
          role: "Viajera independiente de Moscú",
        },
        {
          quote: "FUSEN organizó una visita a una fábrica en Shenzhen crucial para nuestro negocio. Profesional, eficiente y superó expectativas.",
          author: "Carlos Méndez",
          role: "Viajero de negocios de São Paulo",
        },
        {
          quote: "Viajar con niños a China parecía intimidante, pero nuestra guía lo hizo fácil. ¡Los niños aún hablan de los pandas!",
          author: "Sophie Laurent",
          role: "Viajera familiar de París",
        },
      ],
    },
    contact: {
      title: "Contáctanos",
      subtitle: "¿Listo para planear tu aventura en China? Envíanos un mensaje y responderemos en 24 horas.",
      whatsapp: "WhatsApp",
      email: "Correo",
      whatsappBtn: "Chatear por WhatsApp",
      emailBtn: "Enviar correo",
      formName: "Tu nombre",
      formEmail: "Correo electrónico",
      formMessage: "Cuéntanos sobre tu viaje",
      formSubmit: "Enviar consulta",
      formSuccess: "¡Gracias! Te responderemos en 24 horas.",
    },
    footer: {
      tagline: "Tu socio de confianza para guías locales en China. Experiencias auténticas, servicio profesional, soporte multilingüe.",
      quickLinks: "Enlaces rápidos",
      contactUs: "Contáctanos",
      followUs: "Síguenos",
      copyright: "FUSEN",
      rights: "Todos los derechos reservados.",
    },
  },

  pt: {
    nav: {
      home: "Início",
      services: "Serviços",
      destinations: "Destinos",
      guides: "Guias",
      about: "Sobre",
      plan: "Plano",
      contact: "Contato",
      cta: "Fale Conosco",
    },
    hero: {
      badge: "Serviço Premium de Guias Locais na China",
      titleTop: "Descubra a",
      titleBottom: "Verdadeira China",
      subtitle:
        "Guias locais profissionais para viajantes independentes, visitantes em trânsito e famílias. Suporte multilíngue, tours privados e assistência comercial nos principais destinos da China.",
      cta1: "Comece sua jornada",
      cta2: "Ver serviços",
      stat1Label: "Cidades",
      stat2Label: "Idiomas",
      stat3Label: "Viajantes felizes",
    },
    services: {
      title: "Nossos Serviços",
      subtitle: "Serviços abrangentes de guia local para visitantes estrangeiros na China",
      items: [
        {
          title: "Tradução e Interpretação",
          desc: "Intérpretes profissionais fluentes em inglês, russo, japonês, coreano, espanhol, português, francês, árabe e mais. Supere a barreira do idioma sem esforço.",
        },
        {
          title: "Experiências Locais Privadas",
          desc: "Lugares ocultos, lojas autênticas, oficinas culturais e descobertas fora do comum, curadas apenas para você. Sem tours em grupo — totalmente personalizado.",
        },
        {
          title: "Assistência Comercial",
          desc: "Visitas a fábricas, reuniões com fornecedores, assistência em feiras e networking. Conectamos você aos parceiros certos em toda a China.",
        },
        {
          title: "Tours de Trânsito e Sem Visto",
          desc: "Excursões curtas para passageiros de cruzeiro e viajantes em trânsito sem visto. Aproveite ao máximo cada minuto na China.",
        },
      ],
    },
    destinations: {
      title: "Destinos Populares",
      subtitle: "Explore as cidades mais icônicas da China com nossos guias especializados",
      cities: [
        { name: "Pequim", desc: "Cidade Proibida, Grande Muralha, hutongs" },
        { name: "Xangai", desc: "Bund, Concessão Francesa, arranha-céus" },
        { name: "Xi'an", desc: "Guerreiros de Terracota, muralha antiga" },
        { name: "Chengdu", desc: "Pandas, casas de chá, culinária de Sichuan" },
        { name: "Guangzhou", desc: "Torre de Cantão, centros comerciais, dim sum" },
        { name: "Hangzhou", desc: "Lago Oeste, plantações de chá, seda" },
        { name: "Shenzhen", desc: "Inovação tecnológica, mercados de eletrônicos" },
        { name: "Guilin", desc: "Montanhas cársticas, cruzeiro pelo rio Li" },
      ],
      explore: "Explorar",
    },
    guides: {
      title: "Nossos Guias",
      subtitle: "Especialistas locais licenciados, experientes e apaixonados",
      languages: "Idiomas",
      experience: "anos de experiência",
      viewProfile: "Ver perfil",
    },
    whyUs: {
      title: "Por que escolher a FUSEN",
      subtitle: "Tornamos sua jornada pela China fluida, autêntica e inesquecível",
      features: [
        {
          title: "Profissionais Licenciados",
          desc: "Todos os guias possuem licenças oficiais nacionais e anos de experiência com visitantes estrangeiros.",
        },
        {
          title: "Suporte Multilíngue",
          desc: "Do inglês ao árabe, do russo ao português — comunique-se confortavelmente em seu idioma durante toda a viagem.",
        },
        {
          title: "Totalmente Personalizado",
          desc: "Sem itinerários genéricos. Cada tour é adaptado aos seus interesses e preferências. Você no controle.",
        },
        {
          title: "Disponibilidade 24/7",
          desc: "Suporte 24 horas via WhatsApp. Sempre a uma mensagem de distância, onde quer que esteja na China.",
        },
      ],
    },
    testimonials: {
      title: "O que dizem nossos clientes",
      subtitle: "Experiências reais de viajantes que escolheram a FUSEN",
      items: [
        {
          quote: "Nosso guia em Pequim falava português perfeito e conhecia cada canto dos hutongs. Melhor decisão da viagem!",
          author: "Maria Ivanova",
          role: "Viajante independente de Moscou",
        },
        {
          quote: "A FUSEN organizou uma visita a fábrica em Shenzhen crucial para o nosso negócio. Profissional, eficiente e além das expectativas.",
          author: "Carlos Mendez",
          role: "Viajante de negócios de São Paulo",
        },
        {
          quote: "Viajar com crianças na China parecia assustador, mas nosso guia tornou tudo fácil. As crianças ainda falam sobre os pandas!",
          author: "Sophie Laurent",
          role: "Viajante familiar de Paris",
        },
      ],
    },
    contact: {
      title: "Entre em Contato",
      subtitle: "Pronto para planejar sua aventura na China? Envie uma mensagem e responderemos em 24 horas.",
      whatsapp: "WhatsApp",
      email: "E-mail",
      whatsappBtn: "Conversar no WhatsApp",
      emailBtn: "Enviar e-mail",
      formName: "Seu nome",
      formEmail: "E-mail",
      formMessage: "Conte sobre sua viagem",
      formSubmit: "Enviar consulta",
      formSuccess: "Obrigado! Responderemos em 24 horas.",
    },
    footer: {
      tagline: "Seu parceiro confiável de guias locais na China. Experiências autênticas, serviço profissional, suporte multilíngue.",
      quickLinks: "Links rápidos",
      contactUs: "Contato",
      followUs: "Siga-nos",
      copyright: "FUSEN",
      rights: "Todos os direitos reservados.",
    },
  },

  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      destinations: "Destinations",
      guides: "Guides",
      about: "À propos",
      plan: "Plan",
      contact: "Contact",
      cta: "Contactez-nous",
    },
    hero: {
      badge: "Service Premium de Guides Locaux en Chine",
      titleTop: "Découvrez la",
      titleBottom: "Vraie Chine",
      subtitle:
        "Guides locaux professionnels pour voyageurs indépendants, visiteurs en transit et familles. Support multilingue, visites privées et assistance commerciale dans les principales destinations de Chine.",
      cta1: "Commencez votre voyage",
      cta2: "Voir les services",
      stat1Label: "Villes couvertes",
      stat2Label: "Langues parlées",
      stat3Label: "Voyageurs satisfaits",
    },
    services: {
      title: "Nos Services",
      subtitle: "Services complets de guide local pour les visiteurs étrangers en Chine",
      items: [
        {
          title: "Traduction et Interprétariat",
          desc: "Interprètes professionnels parlant anglais, russe, japonais, coréen, espagnol, portugais, français, arabe et plus. Franchissez la barrière linguistique sans effort.",
        },
        {
          title: "Expériences Locales Privées",
          desc: "Lieux cachés, boutiques authentiques, ateliers culturels et découvertes hors des sentiers battus, rien que pour vous. Pas de visites en groupe — entièrement personnalisé.",
        },
        {
          title: "Assistance Commerciale",
          desc: "Visites d'usines, réunions avec fournisseurs, assistance aux salons et networking. Nous vous connectons aux bons partenaires partout en Chine.",
        },
        {
          title: "Visites de Transit et Sans Visa",
          desc: "Excursions courtes pour passagers de croisière et voyageurs en transit sans visa. Tirez le maximum de chaque minute en Chine.",
        },
      ],
    },
    destinations: {
      title: "Destinations Populaires",
      subtitle: "Explorez les villes les plus emblématiques de Chine avec nos guides experts",
      cities: [
        { name: "Pékin", desc: "Cité Interdite, Grande Muraille, hutongs" },
        { name: "Shanghai", desc: "Bund, Concession Française, gratte-ciels" },
        { name: "Xi'an", desc: "Guerriers de Terracotta, muraille ancienne" },
        { name: "Chengdu", desc: "Pandas, maisons de thé, cuisine du Sichuan" },
        { name: "Guangzhou", desc: "Tour de Canton, centres commerciaux, dim sum" },
        { name: "Hangzhou", desc: "Lac de l'Ouest, plantations de thé, soie" },
        { name: "Shenzhen", desc: "Innovation technologique, marchés d'électronique" },
        { name: "Guilin", desc: "Montagnes karstiques, croisière sur la rivière Li" },
      ],
      explore: "Explorer",
    },
    guides: {
      title: "Nos Guides",
      subtitle: "Experts locaux agréés, expérimentés et passionnés",
      languages: "Langues",
      experience: "ans d'expérience",
      viewProfile: "Voir le profil",
    },
    whyUs: {
      title: "Pourquoi choisir FUSEN",
      subtitle: "Nous rendons votre voyage en Chine fluide, authentique et inoubliable",
      features: [
        {
          title: "Professionnels Agréés",
          desc: "Tous nos guides détiennent une licence nationale officielle et ont des années d'expérience avec les visiteurs étrangers.",
        },
        {
          title: "Support Multilingue",
          desc: "De l'anglais à l'arabe, du russe au portugais — communiquez confortablement dans votre langue maternelle tout au long du voyage.",
        },
        {
          title: "Entièrement Personnalisé",
          desc: "Pas d'itinéraires standardisés. Chaque visite est adaptée à vos intérêts et préférences. Vous gardez le contrôle.",
        },
        {
          title: "Disponibilité 24/7",
          desc: "Support 24h/24 via WhatsApp. Toujours à un message près, où que vous soyez en Chine.",
        },
      ],
    },
    testimonials: {
      title: "Avis de nos clients",
      subtitle: "Expériences réelles de voyageurs qui ont choisi FUSEN",
      items: [
        {
          quote: "Notre guide à Pékin parlait un français parfait et connaissait chaque recoin des hutongs. Meilleure décision du voyage !",
          author: "Maria Ivanova",
          role: "Voyageuse indépendante de Moscou",
        },
        {
          quote: "FUSEN a organisé une visite d'usine à Shenzhen cruciale pour notre activité. Professionnel, efficace et au-delà des attentes.",
          author: "Carlos Mendez",
          role: "Voyageur d'affaires de São Paulo",
        },
        {
          quote: "Voyager avec des enfants en Chine semblait intimidant, mais notre guide a tout rendu facile. Les enfants parlent encore des pandas !",
          author: "Sophie Laurent",
          role: "Voyageuse familiale de Paris",
        },
      ],
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Prêt à planifier votre aventure en Chine ? Envoyez-nous un message et nous répondrons sous 24 heures.",
      whatsapp: "WhatsApp",
      email: "E-mail",
      whatsappBtn: "Discuter sur WhatsApp",
      emailBtn: "Envoyer un e-mail",
      formName: "Votre nom",
      formEmail: "Adresse e-mail",
      formMessage: "Parlez-nous de votre voyage",
      formSubmit: "Envoyer la demande",
      formSuccess: "Merci ! Nous vous répondrons sous 24 heures.",
    },
    footer: {
      tagline: "Votre partenaire de confiance pour les guides locaux en Chine. Expériences authentiques, service professionnel, support multilingue.",
      quickLinks: "Liens rapides",
      contactUs: "Contactez-nous",
      followUs: "Suivez-nous",
      copyright: "FUSEN",
      rights: "Tous droits réservés.",
    },
  },

  ar: {
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      destinations: "الوجهات",
      guides: "مرشدونا",
      about: "من نحن",
      plan: "الخطة",
      contact: "اتصل بنا",
      cta: "تواصل معنا",
    },
    hero: {
      badge: "خدمة مرشدين محليين متميزة في الصين",
      titleTop: "اكتشف",
      titleBottom: "الصين الحقيقية",
      subtitle:
        "مرشدون محليون محترفون للمسافرين المستقلين والمسافرين العابرين والعائلات. دعم متعدد اللغات، جولات خاصة، ومساعدة تجارية في أهم وجهات الصين.",
      cta1: "ابدأ رحلتك",
      cta2: "استكشف الخدمات",
      stat1Label: "مدن مغطاة",
      stat2Label: "لغات منطوقة",
      stat3Label: "مسافر سعيد",
    },
    services: {
      title: "خدماتنا",
      subtitle: "خدمات شاملة للمرشدين المحليين للزوار الأجانب في الصين",
      items: [
        {
          title: "الترجمة والتفسير",
          desc: "مترجمون محترفون يتقون الإنجليزية والروسية واليابانية والكورية والإسبانية والبرتغالية والفرنسية والعربية والمزيد. تجاوز حاجز اللغة بسهولة.",
        },
        {
          title: "تجارب محلية خاصة",
          desc: "أماكن مخفية ومتاجر أصيلة وورش ثقافية واكتشافات بعيدة عن المسارات المعتادة، مصممة خصيصاً لك. بدون جولات جماعية — شخصية بالكامل.",
        },
        {
          title: "المساعدة التجارية",
          desc: "زيارات المصانع، اجتماعات الموردين، المساعدة في المعارض التجارية والتشبيك التجاري. نربطك بالشركاء المناسبين في جميع أنحاء الصين.",
        },
        {
          title: "جولات العبور والتأشيرة الحرة",
          desc: "رحلات قصيرة لمسافري السفن والمسافرين العابرين بدون تأشيرة. استفد من كل دقيقة في الصين.",
        },
      ],
    },
    destinations: {
      title: "الوجهات الشهيرة",
      subtitle: "استكشف أشهر مدن الصين مع مرشدينا الخبراء",
      cities: [
        { name: "بكين", desc: "المدينة المحرمة، سور الصين العظيم، الأزقة" },
        { name: "شنغهاي", desc: "الواجهة البحرية، الامتياز الفرنسي، ناطحات السحاب" },
        { name: "شيان", desc: "جيش الطين، السور القديم" },
        { name: "تشنغدو", desc: "الباندا، بيوت الشاي، مطبخ سيتشوان" },
        { name: "قوانغتشو", desc: "برج كانتون، مراكز التجارة، ديم سام" },
        { name: "هانغتشو", desc: "البحيرة الغربية، مزارع الشاي، الحرير" },
        { name: "شنتشن", desc: "الابتكار التقني، أسواق الإلكترونيات" },
        { name: "قويلين", desc: "جبال الكارست، رحلة نهر لي" },
      ],
      explore: "استكشف",
    },
    guides: {
      title: "مرشدونا",
      subtitle: "خبراء محليون مرخصون وذوو خبرة وشغف",
      languages: "اللغات",
      experience: "سنوات خبرة",
      viewProfile: "عرض الملف",
    },
    whyUs: {
      title: "لماذا تختار FUSEN",
      subtitle: "نجعل رحلتك في الصين سلسة وأصيلة ولا تُنسى",
      features: [
        {
          title: "محترفون مرخصون",
          desc: "جميع المرشدين يحملون تراخيص إرشاد سياحي رسمية مع سنوات من الخبرة في خدمة الزوار الأجانب.",
        },
        {
          title: "دعم متعدد اللغات",
          desc: "من الإنجليزية إلى العربية، من الروسية إلى البرتغالية — تواصل براحتك بلغتك الأم طوال الرحلة.",
        },
        {
          title: "تخصيص كامل",
          desc: "بدون مسارات جاهزة. كل جولة مصممة حسب اهتماماتك وتفضيلاتك. أنت تتحكم.",
        },
        {
          title: "دعم 24/7",
          desc: "دعم على مدار الساعة عبر واتساب. نحن دائماً على بعد رسالة واحدة، أينما كنت في الصين.",
        },
      ],
    },
    testimonials: {
      title: "ماذا يقول عملاؤنا",
      subtitle: "تجارب حقيقية من مسافرين اختاروا FUSEN",
      items: [
        {
          quote: "مرشدنا في بكين كان يتحدث العربية بشكل ممتاز ويعرف كل زاوية مخفية في الأزقة. أفضل قرار سفر اتخذناه!",
          author: "ماريا إيفانوفا",
          role: "مسافرة مستقلة من موسكو",
        },
        {
          quote: "نظمت FUSEN زيارة مصنع في شنتشن كانت حاسمة لأعمالنا. احترافية وفعالة وفوق التوقعات.",
          author: "كارلوس منديز",
          role: "مسافر أعمال من ساو باولو",
        },
        {
          quote: "السفر مع الأطفال إلى الصين بدا مخيفاً، لكن مرشدنا جعله سهلاً. الأطفال لا يزالون يتحدثون عن الباندا!",
          author: "صوفي لوران",
          role: "مسافرة عائلية من باريس",
        },
      ],
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "مستعد ل تخطيط مغامرتك في الصين؟ أرسل لنا رسالة وسنرد خلال 24 ساعة.",
      whatsapp: "واتساب",
      email: "البريد الإلكتروني",
      whatsappBtn: "محادثة على واتساب",
      emailBtn: "إرسال بريد إلكتروني",
      formName: "اسمك",
      formEmail: "البريد الإلكتروني",
      formMessage: "أخبرنا عن رحلتك",
      formSubmit: "إرسال الاستفسار",
      formSuccess: "شكراً لك! سنرد عليك خلال 24 ساعة.",
    },
    footer: {
      tagline: "شريكك الموثوق للمرشدين المحليين في الصين. تجارب أصيلة، خدمة احترافية، دعم متعدد اللغات.",
      quickLinks: "روابط سريعة",
      contactUs: "اتصل بنا",
      followUs: "تابعنا",
      copyright: "FUSEN",
      rights: "جميع الحقوق محفوظة.",
    },
  },

  de: {
    nav: { home: "Startseite", services: "Leistungen", destinations: "Reiseziele", guides: "Unsere Führer", about: "Über uns", plan: "Planen", contact: "Kontakt", cta: "Kontakt aufnehmen" },
    hero: {
      badge: "Premium-Lokalführerservice in China",
      titleTop: "Entdecken Sie",
      titleBottom: "das echte China",
      subtitle: "Professionelle Lokalführer für unabhängige Reisende, Transitbesucher und Familien. Mehrsprachige Unterstützung, private Touren und geschäftliche Begleitung in den besten Zielen Chinas.",
      cta1: "Reise beginnen", cta2: "Leistungen entdecken",
      stat1Label: "Städte", stat2Label: "Sprachen", stat3Label: "Zufriedene Reisende",
    },
    services: {
      title: "Unsere Leistungen",
      subtitle: "Umfassende Lokalführerleistungen für internationale Besucher in China",
      items: [
        { title: "Sprachübersetzung", desc: "Professionelle Dolmetscher für Englisch, Russisch, Japanisch, Koreanisch, Spanisch, Portugiesisch, Französisch, Arabisch und mehr. Überwinden Sie die Sprachbarriere mühelos." },
        { title: "Private lokale Erlebnisse", desc: "Versteckte Juwelen, authentische lokale Geschäfte, kulturelle Workshops und abseits der Touristenpfade. Keine Gruppentouren — vollständig personalisiert." },
        { title: "Geschäftsvermittlung", desc: "Fabrikbesuche, Lieferantentreffen, Messehilfe und geschäftliche Kontakte. Wir verbinden Sie mit den richtigen Partnern in ganz China." },
        { title: "Transit- & visumfreie Touren", desc: "Kurze Ausflüge für Kreuzfahrtpassagiere und Transitreisende ohne Visum. Maximieren Sie jede Minute in China." },
      ],
    },
    destinations: {
      title: "Beliebte Reiseziele",
      subtitle: "Erkunden Sie Chinas berühmteste Städte mit unseren Experten",
      cities: [
        { name: "Peking", desc: "Verbotene Stadt, Große Mauer, Hutong-Gassen" },
        { name: "Shanghai", desc: "Bund, Französische Konzession, moderne Skyline" },
        { name: "Xi'an", desc: "Terrakotta-Armee, alte Stadtmauer" },
        { name: "Chengdu", desc: "Pandas, Teehäuser, scharfe Sichuan-Küche" },
        { name: "Guangzhou", desc: "Canton Tower, Handelszentren, Dim Sum" },
        { name: "Hangzhou", desc: "Westsee, Teeplantagen, Seiden-Erbe" },
        { name: "Shenzhen", desc: "Technologie-Innovation, Elektronikmärkte" },
        { name: "Guilin", desc: "Karstberge, Li-Fluss-Kreuzfahrt" },
      ],
      explore: "Entdecken",
    },
    guides: { title: "Lernen Sie unsere Führer kennen", subtitle: "Lizenzierte, erfahrene und leidenschaftliche lokale Experten", languages: "Sprachen", experience: "Jahre Erfahrung", viewProfile: "Profil ansehen" },
    whyUs: {
      title: "Warum FUSEN wählen",
      subtitle: "Wir machen Ihre China-Reise nahtlos, authentisch und unvergesslich",
      features: [
        { title: "Lizenzierte Profis", desc: "Alle Führer haben offizielle nationale Touristenführer-Lizenzen und jahrelange Erfahrung mit internationalen Gästen." },
        { title: "Mehrsprachige Unterstützung", desc: "Von Englisch bis Arabisch, von Russisch bis Portugiesisch — kommunizieren Sie in Ihrer Muttersprache." },
        { title: "Vollständig maßgeschneidert", desc: "Keine Standard-Routen. Jede Tour ist auf Ihre Interessen zugeschnitten. Sie haben die Kontrolle." },
        { title: "24/7 Verfügbarkeit", desc: "Rund um die Uhr Unterstützung via WhatsApp. Wir sind immer eine Nachricht entfernt." },
      ],
    },
    testimonials: {
      title: "Was unsere Kunden sagen",
      subtitle: "Echte Erfahrungen von Reisenden, die FUSEN gewählt haben",
      items: [
        { quote: "Unser Führer in Peking sprach perfektes Russisch und kannte jede Ecke der Hutongs. Beste Reiseentscheidung!", author: "Maria Iwanowa", role: "Unabhängige Reisende aus Moskau" },
        { quote: "FUSEN organisierte einen Fabrikbesuch in Shenzhen, der für unser Geschäft entscheidend war. Professionell und effizient.", author: "Carlos Méndez", role: "Geschäftsreisender aus São Paulo" },
        { quote: "Mit Kindern in China zu reisen schien schwierig, aber unser Führer machte es mühelos. Die Kinder sprechen noch von den Pandas!", author: "Sophie Laurent", role: "Familienreisende aus Paris" },
      ],
    },
    contact: {
      title: "Kontakt aufnehmen",
      subtitle: "Bereit, Ihr China-Abenteuer zu planen? Senden Sie uns eine Nachricht und wir antworten innerhalb von 24 Stunden.",
      whatsapp: "WhatsApp", email: "E-Mail", whatsappBtn: "WhatsApp-Chat", emailBtn: "E-Mail senden",
      formName: "Ihr Name", formEmail: "E-Mail-Adresse", formMessage: "Erzählen Sie uns von Ihrer Reise", formSubmit: "Anfrage senden", formSuccess: "Vielen Dank! Wir melden uns innerhalb von 24 Stunden.",
    },
    footer: {
      tagline: "Ihr vertrauenswürdiger lokaler Führer in China. Authentische Erlebnisse, professioneller Service, mehrsprachige Unterstützung.",
      quickLinks: "Schnelllinks", contactUs: "Kontakt", followUs: "Folgen Sie uns", copyright: "FUSEN", rights: "Alle Rechte vorbehalten.",
    },
  },

  it: {
    nav: { home: "Home", services: "Servizi", destinations: "Destinazioni", guides: "Le nostre guide", about: "Chi siamo", plan: "Pianifica", contact: "Contatti", cta: "Contattaci" },
    hero: {
      badge: "Servizio premium di guide locali in Cina",
      titleTop: "Scopri la",
      titleBottom: "vera Cina",
      subtitle: "Guide locali professionisti per viaggiatori indipendenti, visitatori in transito e famiglie. Supporto multilingue, tour privati e assistenza commerciale nelle migliori destinazioni cinesi.",
      cta1: "Inizia il viaggio", cta2: "Esplora i servizi",
      stat1Label: "Città", stat2Label: "Lingue", stat3Label: "Viaggiatori soddisfatti",
    },
    services: {
      title: "I nostri servizi",
      subtitle: "Servizi completi di guide locali per visitatori internazionali in Cina",
      items: [
        { title: "Traduzione linguistica", desc: "Interpreti professionisti fluenti in inglese, russo, giapponese, coreano, spagnolo, portoghese, francese, arabo e altro. Supera la barriera linguistica senza sforzo." },
        { title: "Esperienze locali private", desc: "Gioielli nascosti, negozi locali autentici, laboratori culturali e scoperte fuori dai sentieri battuti. Niente tour di gruppo — completamente personalizzato." },
        { title: "Mediazione commerciale", desc: "Visite in fabbrica, incontri con fornitori, assistenza alle fiere e contatti commerciali. Ti colleghiamo ai partner giusti in tutta la Cina." },
        { title: "Tour di transito e senza visto", desc: "Escursioni brevi per passeggeri di crociera e viaggiatori in transito senza visto. Massimizza ogni minuto in Cina." },
      ],
    },
    destinations: {
      title: "Destinazioni popolari",
      subtitle: "Esplora le città più iconiche della Cina con le nostre guide esperte",
      cities: [
        { name: "Pechino", desc: "Città Proibita, Grande Muraglia, vicoli hutong" },
        { name: "Shanghai", desc: "Bund, Concessione Francese, skyline moderno" },
        { name: "Xi'an", desc: "Esercito di Terracotta, antica cinta muraria" },
        { name: "Chengdu", desc: "Panda, case del tè, cucina del Sichuan" },
        { name: "Guangzhou", desc: "Canton Tower, centri commerciali, dim sum" },
        { name: "Hangzhou", desc: "Lago dell'Ovest, piantagioni di tè, seta" },
        { name: "Shenzhen", desc: "Innovazione tecnologica, mercati elettronici" },
        { name: "Guilin", desc: "Montagne carsiche, crociera sul fiume Li" },
      ],
      explore: "Esplora",
    },
    guides: { title: "Conosci le nostre guide", subtitle: "Guide esperte, appassionate e locali pronte a mostrarti il meglio della Cina", languages: "Lingue", experience: "anni di esperienza", viewProfile: "Vedi profilo" },
    whyUs: {
      title: "Perché scegliere FUSEN",
      subtitle: "Rendiamo il tuo viaggio in Cina semplice, autentico e indimenticabile",
      features: [
        { title: "Professionisti autorizzati", desc: "Tutte le guide hanno licenze ufficiali nazionali e anni di esperienza con visitatori internazionali." },
        { title: "Supporto multilingue", desc: "Dall'inglese all'arabo, dal russo al portoghese — comunica nella tua lingua madre." },
        { title: "Completamente personalizzato", desc: "Nessun itinerario standard. Ogni tour è su misura per i tuoi interessi. Hai il controllo." },
        { title: "Disponibilità 24/7", desc: "Assistenza continua via WhatsApp. Siamo sempre a un messaggio di distanza." },
      ],
    },
    testimonials: {
      title: "Cosa dicono i nostri clienti",
      subtitle: "Esperienze reali di viaggiatori che hanno scelto FUSEN",
      items: [
        { quote: "La nostra guida a Pechino parlava un russo perfetto e conosceva ogni angolo degli hutong. Miglior decisione di viaggio!", author: "Maria Ivanova", role: "Viaggiatrice indipendente da Mosca" },
        { quote: "FUSEN ha organizzato una visita in fabbrica a Shenzhen cruciale per il nostro business. Professionale ed efficiente.", author: "Carlos Méndez", role: "Viaggiatore d'affari da San Paolo" },
        { quote: "Viaggiare con bambini in Cina sembrava difficile, ma la nostra guida ha reso tutto facile. I bambini parlano ancora dei panda!", author: "Sophie Laurent", role: "Viaggiatrice in famiglia da Parigi" },
      ],
    },
    contact: {
      title: "Contattaci",
      subtitle: "Pronto a pianificare la tua avventura in Cina? Inviaci un messaggio e risponderemo entro 24 ore.",
      whatsapp: "WhatsApp", email: "Email", whatsappBtn: "Chat WhatsApp", emailBtn: "Invia email",
      formName: "Il tuo nome", formEmail: "Indirizzo email", formMessage: "Raccontaci del tuo viaggio", formSubmit: "Invia richiesta", formSuccess: "Grazie! Ti risponderemo entro 24 ore.",
    },
    footer: {
      tagline: "Il tuo partner locale affidabile in Cina. Esperienze autentiche, servizio professionale, supporto multilingue.",
      quickLinks: "Link rapidi", contactUs: "Contattaci", followUs: "Seguici", copyright: "FUSEN", rights: "Tutti i diritti riservati.",
    },
  },

  nl: {
    nav: { home: "Home", services: "Diensten", destinations: "Bestemmingen", guides: "Onze gidsen", about: "Over ons", plan: "Plannen", contact: "Contact", cta: "Neem contact op" },
    hero: {
      badge: "Premium lokale gidsenservice in China",
      titleTop: "Ontdek",
      titleBottom: "het echte China",
      subtitle: "Professionele lokale gidsen voor onafhankelijke reizigers, transitpassagiers en gezinnen. Meertalige ondersteuning, privé-tours en zakelijke begeleiding in de beste bestemmingen van China.",
      cta1: "Begin je reis", cta2: "Bekijk diensten",
      stat1Label: "Steden", stat2Label: "Talen", stat3Label: "Tevreden reizigers",
    },
    services: {
      title: "Onze diensten",
      subtitle: "Uitgebreide lokale gidsendiensten voor internationale bezoekers in China",
      items: [
        { title: "Taalvertaling", desc: "Professionele tolken vloeiend in Engels, Russisch, Japans, Koreaans, Spaans, Portugees, Frans, Arabisch en meer. Overbrug de taalbarrière moeiteloos." },
        { title: "Privé lokale ervaringen", desc: "Verborgen pareltjes, authentieke lokale winkels, culturele workshops en ontdekkingen buiten de gebaande paden. Geen groepstours — volledig gepersonaliseerd." },
        { title: "Zakelijke bemiddeling", desc: "Fabrieksbezoeken, leveranciersontmoetingen, beurshulp en zakelijke contacten. We verbinden je met de juiste partners in heel China." },
        { title: "Transit- & visumvrije tours", desc: "Korte excursies voor cruisepassagiers en transitreizigers zonder visum. Haal het maximale uit elke minuut in China." },
      ],
    },
    destinations: {
      title: "Populaire bestemmingen",
      subtitle: "Verken China's meest iconische steden met onze expert lokale gidsen",
      cities: [
        { name: "Peking", desc: "Verboden Stad, Chinese Muur, hutong-steegjes" },
        { name: "Shanghai", desc: "Bund, Franse Concessie, moderne skyline" },
        { name: "Xi'an", desc: "Terracottaleger, oude stadsmuur" },
        { name: "Chengdu", desc: "Panda's, theehuizen, pittige Sichuan-keuken" },
        { name: "Guangzhou", desc: "Canton Tower, handelscentra, dim sum" },
        { name: "Hangzhou", desc: "Westmeer, theeplantages, zijde-erfgoed" },
        { name: "Shenzhen", desc: "Technologie-innovatie, elektronica-markten" },
        { name: "Guilin", desc: "Karstbergen, Li-riviercruise" },
      ],
      explore: "Verken",
    },
    guides: { title: "Ontmoet onze gidsen", subtitle: "Gelicentieerde, ervaren en gepassioneerde lokale experts", languages: "Talen", experience: "jaar ervaring", viewProfile: "Bekijk profiel" },
    whyUs: {
      title: "Waarom FUSEN kiezen",
      subtitle: "We maken je China-reis naadloos, authentiek en onvergetelijk",
      features: [
        { title: "Gelicentieerde professionals", desc: "Alle gidsen hebben officiële nationale tourgidsvergunningen en jarenlange ervaring met internationale bezoekers." },
        { title: "Meertalige ondersteuning", desc: "Van Engels tot Arabisch, van Russisch tot Portugees — communiceer in je moedertaal." },
        { title: "Volledig aangepast", desc: "Geen standaardrondes. Elke tour is afgestemd op jouw interesses. Jij hebt de controle." },
        { title: "24/7 beschikbaarheid", desc: "Rond-de-klok ondersteuning via WhatsApp. We zijn altijd één bericht verwijderd." },
      ],
    },
    testimonials: {
      title: "Wat onze klanten zeggen",
      subtitle: "Echte ervaringen van reizigers die voor FUSEN kozen",
      items: [
        { quote: "Onze gids in Peking sprak perfect Russisch en kende elke hoek van de hutongs. Beste reisbeslissing!", author: "Maria Ivanova", role: "Onafhankelijke reiziger uit Moskou" },
        { quote: "FUSEN regelde een fabrieksbezoek in Shenzhen dat cruciaal was voor ons bedrijf. Professioneel en efficiënt.", author: "Carlos Méndez", role: "Zakelijke reiziger uit São Paulo" },
        { quote: "Met kinderen reizen in China leek ontmoedigend, maar onze gids maakte het moeiteloos. De kinderen praten nog over de panda's!", author: "Sophie Laurent", role: "Gezinsreiziger uit Parijs" },
      ],
    },
    contact: {
      title: "Neem contact op",
      subtitle: "Klaar om je China-avontuur te plannen? Stuur ons een bericht en we reageren binnen 24 uur.",
      whatsapp: "WhatsApp", email: "E-mail", whatsappBtn: "Chat op WhatsApp", emailBtn: "Stuur e-mail",
      formName: "Je naam", formEmail: "E-mailadres", formMessage: "Vertel ons over je reis", formSubmit: "Verstuur aanvraag", formSuccess: "Bedankt! We nemen binnen 24 uur contact op.",
    },
    footer: {
      tagline: "Je betrouwbare lokale gidspartner in China. Authentieke ervaringen, professionele service, meertalige ondersteuning.",
      quickLinks: "Snelle links", contactUs: "Contact", followUs: "Volg ons", copyright: "FUSEN", rights: "Alle rechten voorbehouden.",
    },
  },

  th: {
    nav: { home: "หน้าแรก", services: "บริการ", destinations: "จุดหมายปลายทาง", guides: "มัคคุเทศก์ของเรา", about: "เกี่ยวกับเรา", plan: "วางแผน", contact: "ติดต่อ", cta: "ติดต่อเรา" },
    hero: {
      badge: "บริการมัคคุเทศก์ท้องถิ่นระดับพรีเมียมในจีน",
      titleTop: "ค้นพบ",
      titleBottom: "จีนแท้ๆ",
      subtitle: "มัคคุเทศก์ท้องถิ่นมืออาชีพสำหรับนักเดินทางอิสระ นักท่องเที่ยวแวะเปลี่ยนเครื่อง และครอบครัว รองรับหลายภาษา ทัวร์ส่วนตัว และการช่วยเหลือทางธุรกิจในจุดหมายปลายทางยอดนิยมของจีน",
      cta1: "เริ่มต้นการเดินทาง", cta2: "ดูบริการ",
      stat1Label: "เมือง", stat2Label: "ภาษา", stat3Label: "นักเดินทางที่พอใจ",
    },
    services: {
      title: "บริการของเรา",
      subtitle: "บริการมัคคุเทศก์ท้องถิ่นครบวงจรสำหรับนักท่องเที่ยวต่างชาติในจีน",
      items: [
        { title: "การแปลภาษา", desc: "นักแปลอาชีพที่พูดได้หลายภาษา อังกฤษ รัสเซีย ญี่ปุ่น เกาหลี สเปน โปรตุเกส ฝรั่งเศส อาหรับ และอื่นๆ ล้มล้างอุปสรรคทางภาษาได้อย่างง่ายดาย" },
        { title: "ประสบการณ์ท้องถิ่นส่วนตัว", desc: "สถานที่ซ่อนเร้น ร้านค้าท้องถิ่นแท้ การปฏิบัติวัฒนธรรม และการค้นพบนอกเส้นทางท่องเที่ยว ไม่มีทัวร์กลุ่ม — ปรับให้เหมาะกับคุณโดยเฉพาะ" },
        { title: "การจัดการธุรกิจ", desc: "เยี่ยมชมโรงงาน พบผู้ผลิต ช่วยเหลืองานแสดงสินค้า และเครือข่ายธุรกิจ เราเชื่อมต่อคุณกับพาร์ทเนอร์ที่เหมาะสมทั่วจีน" },
        { title: "ทัวร์แวะเปลี่ยนเครื่องและไม่ต้องวีซ่า", desc: "ทัวร์สั้นสำหรับผู้โดยสารเรือสำราญและนักเดินทางแวะเปลี่ยนเครื่องโดยไม่ต้องวีซ่า ใช้เวลาทุกนาทีในจีนให้คุ้มค่าที่สุด" },
      ],
    },
    destinations: {
      title: "จุดหมายปลายทางยอดนิยม",
      subtitle: "สำรวจเมืองที่โด่งดังที่สุดของจีนกับมัคคุเทศก์ท้องถิ่นผู้เชี่ยวชาญของเรา",
      cities: [
        { name: "ปักกิ่ง", desc: "พระราชวังต้องห้าม กำแพงเมืองจีน ย่านหูทง" },
        { name: "เซี่ยงไฮ้", desc: "เดอะบันด์ เขตสัมปทานฝรั่งเศส ทิวทัศน์เมือง" },
        { name: "ซีอาน", desc: "กองทัพทหารดินเผา กำแพงเมืองโบราณ" },
        { name: "เฉิงตู", desc: "แพนด้า โรงน้ำชา อาหารเสฉวนเผ็ดร้อน" },
        { name: "กว่างโจว", desc: "หอคอยกว่างโจว ศูนย์การค้า ติ่มซำ" },
        { name: "หางโจว", desc: "ทะเลสาบตะวันตก สวนชา มรดกผ้าไหม" },
        { name: "เสิ่นเจิ้น", desc: "นวัตกรรมเทคโนโลยี ตลาดอิเล็กทรอนิกส์" },
        { name: "กุ้ยหลิน", desc: "ภูเขาคาร์สต์ ล่องเรือแม่น้ำหลี่" },
      ],
      explore: "สำรวจ",
    },
    guides: { title: "พบกับมัคคุเทศก์ของเรา", subtitle: "ผู้เชี่ยวชาญท้องถิ่นที่มีใบอนุญาต มีประสบการณ์ และมีความหลงใหล", languages: "ภาษา", experience: "ปีประสบการณ์", viewProfile: "ดูโปรไฟล์" },
    whyUs: {
      title: "ทำไมเลือก FUSEN",
      subtitle: "เราทำให้การเดินทางของคุณในจีนราบรื่น แท้จริง และไม่อาจลืม",
      features: [
        { title: "ผู้เชี่ยวชาญที่มีใบอนุญาต", desc: "มัคคุเทศก์ทุกคนมีใบอนุญาตนำเที่ยวระดับชาติและประสบการณ์หลายปีกับนักท่องเที่ยวต่างชาติ" },
        { title: "รองรับหลายภาษา", desc: "จากอังกฤษถึงอาหรับ จากรัสเซียถึงโปรตุเกส — สื่อสารด้วยภาษาแม่ของคุณตลอดทริป" },
        { title: "ปรับให้เหมาะกับคุณ", desc: "ไม่มีโปรแกรมตายตัว ทุกทัวร์ปรับให้เหมาะกับความสนใจของคุณ คุณคือผู้ควบคุม" },
        { title: "พร้อมให้บริการ 24/7", desc: "ช่วยเหลือตลอด 24 ชั่วโมงผ่าน WhatsApp เราอยู่ห่างแค่ข้อความเดียว" },
      ],
    },
    testimonials: {
      title: "ลูกค้าของเราพูดถึงเรา",
      subtitle: "ประสบการณ์จริงจากนักเดินทางที่เลือก FUSEN",
      items: [
        { quote: "มัคคุเทศก์ของเราในปักกิ่งพูดภาษารัสเซียได้อย่างสมบูรณ์แบบและรู้จักทุกมุมของหูทง การตัดสินใจที่ดีที่สุดในการเดินทาง!", author: "Maria Ivanova", role: "นักเดินทางอิสระจากมอสโก" },
        { quote: "FUSEN จัดการเยี่ยมชมโรงงานในเสิ่นเจิ้นซึ่งสำคัญต่อธุรกิจของเรามาก มืออาชีพและมีประสิทธิภาพ", author: "Carlos Méndez", role: "นักธุรกิจจากเซาเปาลู" },
        { quote: "การเดินทางกับเด็กในจีนดูเหมือนยาก แต่มัคคุเทศก์ของเราทำให้ง่ายดาย เด็กๆ ยังพูดถึงประสบการณ์แพนด้าอยู่!", author: "Sophie Laurent", role: "นักเดินทางครอบครัวจากปารีส" },
      ],
    },
    contact: {
      title: "ติดต่อเรา",
      subtitle: "พร้อมวางแผนการผจญภัยในจีนหรือยัง? ส่งข้อความถึงเราแล้วเราจะตอบกลับภายใน 24 ชั่วโมง",
      whatsapp: "WhatsApp", email: "อีเมล", whatsappBtn: "แชท WhatsApp", emailBtn: "ส่งอีเมล",
      formName: "ชื่อของคุณ", formEmail: "ที่อยู่อีเมล", formMessage: "บอกเราเกี่ยวกับทริปของคุณ", formSubmit: "ส่งคำถาม", formSuccess: "ขอบคุณ! เราจะติดต่อกลับภายใน 24 ชั่วโมง",
    },
    footer: {
      tagline: "พันธมิตรมัคคุเทศก์ท้องถิ่นที่ไว้วางใจได้ในจีน ประสบการณ์แท้จริง บริการมืออาชีพ รองรับหลายภาษา",
      quickLinks: "ลิงก์ด่วน", contactUs: "ติดต่อเรา", followUs: "ติดตามเรา", copyright: "FUSEN", rights: "สงวนลิขสิทธิ์ทั้งหมด",
    },
  },

  id: {
    nav: { home: "Beranda", services: "Layanan", destinations: "Tujuan", guides: "Pemandu kami", about: "Tentang", plan: "Rencana", contact: "Kontak", cta: "Hubungi kami" },
    hero: {
      badge: "Layanan pemandu lokal premium di Tiongkok",
      titleTop: "Temukan",
      titleBottom: "Tiongkok yang Nyata",
      subtitle: "Pemandu lokal profesional untuk wisatawan independen, pengunjung transit, dan keluarga. Dukungan multi-bahasa, tur privat, dan bantuan bisnis di destinasi terbaik Tiongkok.",
      cta1: "Mulai perjalanan", cta2: "Jelajahi layanan",
      stat1Label: "Kota", stat2Label: "Bahasa", stat3Label: "Wisatawan puas",
    },
    services: {
      title: "Layanan kami",
      subtitle: "Layanan pemandu lokal komprehensif untuk pengunjung internasional di Tiongkok",
      items: [
        { title: "Terjemahan bahasa", desc: "Penerjemah profesional yang fasih dalam bahasa Inggris, Rusia, Jepang, Korea, Spanyol, Portugis, Prancis, Arab, dan lainnya. Atasi hambatan bahasa dengan mudah." },
        { title: "Pengalaman lokal privat", desc: "Permata tersembunyi, toko lokal otentik, lokakarya budaya, dan penemuan di luar jalur wisatawan. Tanpa tur kelompok — sepenuhnya dipersonalisasi." },
        { title: "Pencocokan bisnis", desc: "Kunjungan pabrik, pertemuan pemasok, bantuan pameran dagang, dan jaringan bisnis. Kami menghubungkan Anda dengan mitra yang tepat di seluruh Tiongkok." },
        { title: "Tur transit & tanpa visa", desc: "Ekskursi singkat untuk penumpang kapal pesiar dan wisatawan transit tanpa visa. Maksimalkan setiap menit di Tiongkok." },
      ],
    },
    destinations: {
      title: "Destinasi populer",
      subtitle: "Jelajahi kota-kota paling ikonik Tiongkok dengan pemandu lokal ahli kami",
      cities: [
        { name: "Beijing", desc: "Kota Terlarang, Tembok Besar, gang hutong" },
        { name: "Shanghai", desc: "Bund, Konsesi Prancis, cakrawala modern" },
        { name: "Xi'an", desc: "Tentara Terakota, tembok kota kuno" },
        { name: "Chengdu", desc: "Panda, rumah teh, masakan Sichuan pedas" },
        { name: "Guangzhou", desc: "Menara Kanton, pusat perdagangan, dim sum" },
        { name: "Hangzhou", desc: "Danau Barat, perkebunan teh, warisan sutra" },
        { name: "Shenzhen", desc: "Inovasi teknologi, pasar elektronik" },
        { name: "Guilin", desc: "Gunung karst, pelayaran Sungai Li" },
      ],
      explore: "Jelajahi",
    },
    guides: { title: "Temui pemandu kami", subtitle: "Pemandu lokal berlisensi, berpengalaman, dan bersemangat", languages: "Bahasa", experience: "tahun pengalaman", viewProfile: "Lihat profil" },
    whyUs: {
      title: "Mengapa memilih FUSEN",
      subtitle: "Kami membuat perjalanan Tiongkok Anda mulus, otentik, dan tak terlupakan",
      features: [
        { title: "Profesional berlisensi", desc: "Semua pemandu memiliki lisensi pemandu wisata nasional resmi dan pengalaman bertahun-tahun dengan pengunjung internasional." },
        { title: "Dukungan multi-bahasa", desc: "Dari Inggris hingga Arab, dari Rusia hingga Portugis — berkomunikasi dalam bahasa ibu Anda." },
        { title: "Sepenuhnya disesuaikan", desc: "Tanpa itinerari standar. Setiap tur disesuaikan dengan minat Anda. Anda yang mengontrol." },
        { title: "Ketersediaan 24/7", desc: "Dukungan sepanjang waktu via WhatsApp. Kami selalu satu pesan jauhnya." },
      ],
    },
    testimonials: {
      title: "Apa kata klien kami",
      subtitle: "Pengalaman nyata dari wisatawan yang memilih FUSEN",
      items: [
        { quote: "Pemandu kami di Beijing berbahasa Rusia sempurna dan tahu setiap sudut hutong. Keputusan terbaik dalam perjalanan!", author: "Maria Ivanova", role: "Wisatawan independen dari Moskow" },
        { quote: "FUSEN mengatur kunjungan pabrik di Shenzhen yang krusial untuk bisnis kami. Profesional dan efisien.", author: "Carlos Méndez", role: "Pebisnis dari São Paulo" },
        { quote: "Bepergian dengan anak-anak di Tiongkok tampak menakutkan, tetapi pemandu kami membuatnya mudah. Anak-anak masih membicarakan panda!", author: "Sophie Laurent", role: "Wisatawan keluarga dari Paris" },
      ],
    },
    contact: {
      title: "Hubungi kami",
      subtitle: "Siap merencanakan petualangan Tiongkok Anda? Kirim pesan dan kami akan merespons dalam 24 jam.",
      whatsapp: "WhatsApp", email: "Email", whatsappBtn: "Chat WhatsApp", emailBtn: "Kirim email",
      formName: "Nama Anda", formEmail: "Alamat email", formMessage: "Ceritakan tentang perjalanan Anda", formSubmit: "Kirim pertanyaan", formSuccess: "Terima kasih! Kami akan menghubungi Anda dalam 24 jam.",
    },
    footer: {
      tagline: "Mitra pemandu lokal tepercaya Anda di Tiongkok. Pengalaman otentik, layanan profesional, dukungan multi-bahasa.",
      quickLinks: "Tautan cepat", contactUs: "Hubungi kami", followUs: "Ikuti kami", copyright: "FUSEN", rights: "Hak cipta dilindungi.",
    },
  },

  fa: {
    nav: { home: "خانه", services: "خدمات", destinations: "مقاصد", guides: "راهنمایان ما", about: "درباره ما", plan: "برنامه‌ریزی", contact: "تماس", cta: "ارتباط با ما" },
    hero: {
      badge: "خدمات راهنمای محلی پریمیوم در چین",
      titleTop: "کشف کنید",
      titleBottom: "چین واقعی را",
      subtitle: "راهنمایان محلی حرفه‌ای برای مسافران مستقل، مسافران ترانزیتی و خانواده‌ها. پشتیبانی چندزبانه، تورهای خصوصی و کمک تجاری در بهترین مقاصد چین.",
      cta1: "سفر خود را آغاز کنید", cta2: "کاوش در خدمات",
      stat1Label: "شهرها", stat2Label: "زبان‌ها", stat3Label: "مسافران راضی",
    },
    services: {
      title: "خدمات ما",
      subtitle: "خدمات جامع راهنمای محلی برای بازدیدکنندگان بین‌المللی در چین",
      items: [
        { title: "ترجمه زبان", desc: "مترجمان حرفه‌ای مسلط به انگلیسی، روسی، ژاپنی، کره‌ای، اسپانیایی، پرتغالی، فرانسوی، عربی و بیشتر. موانع زبانی را به راحتی برطرف کنید." },
        { title: "تجربیات محلی خصوصی", desc: "جواهرات پنهان، فروشگاه‌های محلی اصیل، کارگاه‌های فرهنگی و کشفیات خارج از مسیر توریستی. بدون تور گروهی — کاملاً شخصی‌سازی شده." },
        { title: "تطبیق تجاری", desc: "بازدید از کارخانه، جلسات با تامین‌کنندگان، کمک در نمایشگاه‌های تجاری و شبکه‌سازی تجاری. ما شما را به شرکای مناسب در سراسر چین متصل می‌کنیم." },
        { title: "تورهای ترانزیت و بدون ویزا", desc: "گردش‌های کوتاه برای مسافران کشتی‌های کروز و مسافران ترانزیتی بدون ویزا. از هر دقیقه در چین نهایت استفاده را ببرید." },
      ],
    },
    destinations: {
      title: "مقاصد محبوب",
      subtitle: "با راهنمایان محلی متخصص ما شهرهای نمادین چین را کاوش کنید",
      cities: [
        { name: "پکن", desc: "شهر ممنوعه، دیوار بزرگ، کوچه‌های هوتونگ" },
        { name: "شانگهای", desc: "باند، کنسول‌گری فرانسوی، افق مدرن" },
        { name: "شی‌آن", desc: "ارتش سفالی، دیوار شهر باستانی" },
        { name: "چنگدو", desc: "پانداها، چای‌خانه‌ها، غذای تند سیچوان" },
        { name: "گوانگژو", desc: "برج کانتون، مراکز تجاری، دیم سام" },
        { name: "هانگژو", desc: "دریاچه غرب، مزارع چای، میراث ابریشم" },
        { name: "شنژن", desc: "نوآوری فناوری، بازارهای الکترونیکی" },
        { name: "گوئیلین", desc: "کوه‌های کارست، سفر روی رودخانه لی" },
      ],
      explore: "کاوش",
    },
    guides: { title: "با راهنمایان ما آشنا شوید", subtitle: "راهنمایان محلی دارای مجوز، باتجربه و پرشور", languages: "زبان‌ها", experience: "سال تجربه", viewProfile: "مشاهده پروفایل" },
    whyUs: {
      title: "چرا FUSEN را انتخاب کنید",
      subtitle: "ما سفر شما به چین را روان، اصیل و فراموش‌نشدنی می‌کنیم",
      features: [
        { title: "حرفه‌ای‌های دارای مجوز", desc: "تمام راهنمایان دارای مجوز رسمی ملی گردشگری و تجربه چندین ساله با بازدیدکنندگان بین‌المللی هستند." },
        { title: "پشتیبانی چندزبانه", desc: "از انگلیسی تا عربی، از روسی تا پرتغالی — به زبان مادری خود ارتباط برقرار کنید." },
        { title: "کاملاً سفارشی", desc: "بدون برنامه‌های ثابت. هر تور متناسب با علایق شما تنظیم شده است. کنترل دست شماست." },
        { title: "در دسترس ۲۴/۷", desc: "پشتیبانی شبانه‌روزی از طریق واتساپ. ما همیشه یک پیام فاصله داریم." },
      ],
    },
    testimonials: {
      title: "مشتریان ما چه می‌گویند",
      subtitle: "تجربیات واقعی مسافرانی که FUSEN را انتخاب کردند",
      items: [
        { quote: "راهنمای ما در پکن روسی عالی صحبت می‌کرد و هر گوشه هوتونگ‌ها را می‌شناخت. بهترین تصمیم سفر!", author: "ماریا ایوانوا", role: "مسافر مستقل از مسکو" },
        { quote: "FUSEN بازدید از کارخانه‌ای را در شنژن ترتیب داد که برای کسب‌وکارمان حیاتی بود. حرفه‌ای و کارآمد.", author: "کارلوس مندز", role: "مسافر تجاری از سائوپائولو" },
        { quote: "سفر با کودکان در چین دلهره‌آور به نظر می‌رسید، اما راهنمای ما آن را آسان کرد. بچه‌ها هنوز از پانداها می‌گویند!", author: "سوفی لوران", role: "مسافر خانوادگی از پاریس" },
      ],
    },
    contact: {
      title: "ارتباط با ما",
      subtitle: "آماده برنامه‌ریزی ماجراجویی چین خود هستید؟ پیامی بفرستید و ما ظرف ۲۴ ساعت پاسخ می‌دهیم.",
      whatsapp: "واتساپ", email: "ایمیل", whatsappBtn: "گفتگو در واتساپ", emailBtn: "ارسال ایمیل",
      formName: "نام شما", formEmail: "آدرس ایمیل", formMessage: "درباره سفر خود به ما بگویید", formSubmit: "ارسال درخواست", formSuccess: "متشکریم! ظرف ۲۴ ساعت با شما تماس می‌گیریم.",
    },
    footer: {
      tagline: "شرکت راهنمای محلی مورد اعتماد شما در چین. تجربیات اصیل، خدمات حرفه‌ای، پشتیبانی چندزبانه.",
      quickLinks: "لینک‌های سریع", contactUs: "تماس با ما", followUs: "ما را دنبال کنید", copyright: "FUSEN", rights: "تمام حقوق محفوظ است.",
    },
  },

  hi: {
    nav: { home: "होम", services: "सेवाएं", destinations: "गंतव्य", guides: "हमारे गाइड", about: "हमारे बारे में", plan: "योजना", contact: "संपर्क", cta: "संपर्क करें" },
    hero: {
      badge: "चीन में प्रीमियम स्थानीय गाइड सेवा",
      titleTop: "खोजिए",
      titleBottom: "असली चीन",
      subtitle: "स्वतंत्र यात्रियों, ट्रांज़िट आगंतुकों और परिवारों के लिए पेशेवर स्थानीय गाइड। बहुभाषी समर्थन, निजी टूर और चीन के शीर्ष गंतव्यों में व्यावसायिक सहायता।",
      cta1: "अपनी यात्रा शुरू करें", cta2: "सेवाएं देखें",
      stat1Label: "शहर", stat2Label: "भाषाएं", stat3Label: "संतुष्ट यात्री",
    },
    services: {
      title: "हमारी सेवाएं",
      subtitle: "चीन में अंतर्राष्ट्रीय आगंतुकों के लिए व्यापक स्थानीय गाइड सेवाएं",
      items: [
        { title: "भाषा अनुवाद", desc: "अंग्रेजी, रूसी, जापानी, कोरियाई, स्पेनिश, पुर्तगाली, फ्रेंच, अरबी और अधिक में धाराप्रवाह पेशेवर दुभाषिए। भाषा बाधा को आसानी से पार करें।" },
        { title: "निजी स्थानीय अनुभव", desc: "छिपे हुए रत्न, प्रामाणिक स्थानीय दुकानें, सांस्कृतिक कार्यशालाएं और अप्रतिम पथ की खोज। कोई समूह टूर नहीं — पूरी तरह व्यक्तिगत।" },
        { title: "व्यावसायिक मिलान", desc: "कारखाना दौरे, आपूर्तिकर्ता बैठकें, व्यापार मेला सहायता और व्यावसायिक नेटवर्किंग। हम आपको चीन भर में सही भागीदारों से जोड़ते हैं।" },
        { title: "ट्रांज़िट और वीज़ा-मुक्त टूर", desc: "क्रूज़ यात्रियों और लेओवर यात्रियों के लिए वीज़ा-मुक्त ट्रांज़िट टूर। चीन में हर मिनट का अधिकतम लाभ उठाएं।" },
      ],
    },
    destinations: {
      title: "लोकप्रिय गंतव्य",
      subtitle: "हमारे विशेषज्ञ स्थानीय गाइड के साथ चीन के सबसे प्रतिष्ठित शहरों का अन्वेषण करें",
      cities: [
        { name: "बीजिंग", desc: "निषिद्ध शहर, चीन की दीवार, हुटोंग गलियां" },
        { name: "शंघाई", desc: "बंड, फ्रेंच कंसेशन, आधुनिक स्काईलाइन" },
        { name: "शियान", desc: "टेराकोटा सेना, प्राचीन शहर की दीवार" },
        { name: "चेंगदू", desc: "पांडा, चायघर, तीखा सिचुआन व्यंजन" },
        { name: "गुआंगझोउ", desc: "कैंटन टॉवर, व्यापार केंद्र, डिम सम" },
        { name: "हांगझोउ", desc: "पश्चिम झील, चाय बागान, रेशम विरासत" },
        { name: "शेनझेन", desc: "तकनीकी नवाचार, इलेक्ट्रॉनिक्स बाजार" },
        { name: "गुइलिन", desc: "कार्स्ट पहाड़, ली नदी क्रूज़" },
      ],
      explore: "अन्वेषण",
    },
    guides: { title: "हमारे गाइड से मिलें", subtitle: "लाइसेंस प्राप्त, अनुभवी और उत्साही स्थानीय विशेषज्ञ", languages: "भाषाएं", experience: "वर्षों का अनुभव", viewProfile: "प्रोफाइल देखें" },
    whyUs: {
      title: "FUSEN क्यों चुनें",
      subtitle: "हम आपकी चीन यात्रा को सहज, प्रामाणिक और अविस्मरणीय बनाते हैं",
      features: [
        { title: "लाइसेंस प्राप्त पेशेवर", desc: "सभी गाइड के पास आधिकारिक राष्ट्रीय टूर गाइड लाइसेंस और अंतर्राष्ट्रीय आगंतुकों के साथ वर्षों का अनुभव है।" },
        { title: "बहुभाषी समर्थन", desc: "अंग्रेजी से अरबी, रूसी से पुर्तगाली — अपनी मातृभाषा में सहजता से बात करें।" },
        { title: "पूरी तरह अनुकूलित", desc: "कोई सांचे में ढला यात्रा कार्यक्रम नहीं। हर टूर आपकी रुचियों के अनुसार। आपका नियंत्रण।" },
        { title: "24/7 उपलब्धता", desc: "व्हाट्सएप के माध्यम से चौबीसों घंटे सहायता। हम हमेशा एक संदेश दूर हैं।" },
      ],
    },
    testimonials: {
      title: "हमारे ग्राहक क्या कहते हैं",
      subtitle: "FUSEN चुनने वाले यात्रियों के वास्तविक अनुभव",
      items: [
        { quote: "बीजिंग में हमारे गाइड ने बेहतरीन रूसी बोली और हुटोंग के हर कोने को जानते थे। सबसे अच्छा यात्रा निर्णय!", author: "मारिया इवानोवा", role: "मॉस्को से स्वतंत्र यात्री" },
        { quote: "FUSEN ने शेनझेन में कारखाना दौरे का आयोजन किया जो हमारे व्यवसाय के लिए महत्वपूर्ण था। पेशेवर और कुशल।", author: "कार्लोस मेंडेज़", role: "साओ पाउलो से व्यावसायिक यात्री" },
        { quote: "बच्चों के साथ चीन में यात्रा करना मुश्किल लग रहा था, लेकिन हमारे गाइड ने इसे आसान बना दिया। बच्चे आज भी पांडा की बात करते हैं!", author: "सोफी लॉरेंट", role: "पेरिस से पारिवारिक यात्री" },
      ],
    },
    contact: {
      title: "संपर्क करें",
      subtitle: "अपने चीन रोमांच की योजना के लिए तैयार हैं? हमें संदेश भेजें और हम 24 घंटे में जवाब देंगे।",
      whatsapp: "व्हाट्सएप", email: "ईमेल", whatsappBtn: "व्हाट्सएप पर चैट", emailBtn: "ईमेल भेजें",
      formName: "आपका नाम", formEmail: "ईमेल पता", formMessage: "अपनी यात्रा के बारे में बताएं", formSubmit: "पूछताछ भेजें", formSuccess: "धन्यवाद! हम 24 घंटे में आपसे संपर्क करेंगे।",
    },
    footer: {
      tagline: "चीन में आपका विश्वसनीय स्थानीय गाइड साझेदार। प्रामाणिक अनुभव, पेशेवर सेवा, बहुभाषी समर्थन।",
      quickLinks: "त्वरित लिंक", contactUs: "संपर्क करें", followUs: "हमें फॉलो करें", copyright: "FUSEN", rights: "सर्वाधिकार सुरक्षित।",
    },
  },

  tr: {
    nav: { home: "Ana Sayfa", services: "Hizmetler", destinations: "Destinasyonlar", guides: "Rehberlerimiz", about: "Hakkımızda", plan: "Planla", contact: "İletişim", cta: "İletişime Geç" },
    hero: {
      badge: "Çin'de premium yerel rehber servisi",
      titleTop: "Keşfedin",
      titleBottom: "Gerçek Çin'i",
      subtitle: "Bağımsız gezginler, transit yolcular ve aileler için profesyonel yerel rehberler. Çok dilli destek, özel turlar ve Çin'in en iyi destinasyonlarında iş yardımı.",
      cta1: "Yolculuğa Başla", cta2: "Hizmetleri Keşfet",
      stat1Label: "Şehir", stat2Label: "Dil", stat3Label: "Mutlu Gezgin",
    },
    services: {
      title: "Hizmetlerimiz",
      subtitle: "Çin'deki uluslararası ziyaretçiler için kapsamlı yerel rehberlik hizmetleri",
      items: [
        { title: "Dil Çevirisi", desc: "İngilizce, Rusça, Japonca, Korece, İspanyolca, Portekizce, Fransızca, Arapça ve daha fazlasına hakim profesyonel tercümanlar. Dil bariyerini zahmetsizce aşın." },
        { title: "Özel Yerel Deneyimler", desc: "Gizli mücevherler, otantik yerel dükkanlar, kültürel atölyeler ve turistik rotalar dışında keşifler. Grup turu yok — tamamen kişiselleştirilmiş." },
        { title: "İş Eşleştirme", desc: "Fabrika ziyaretleri, tedarikçi toplantıları, fuar yardımı ve iş ağları. Sizi Çin genelinde doğru ortaklarla buluşturuyoruz." },
        { title: "Transit ve Vizesiz Turlar", desc: "Gemi yolcuları ve transit gezginler için vizesiz kısa geziler. Çin'deki her dakikanızı en iyi şekilde değerlendirin." },
      ],
    },
    destinations: {
      title: "Popüler Destinasyonlar",
      subtitle: "Uzman yerel rehberlerimizle Çin'in en ikonik şehirlerini keşfedin",
      cities: [
        { name: "Pekin", desc: "Yasak Şehir, Büyük Duvar, hutong sokakları" },
        { name: "Şanghay", desc: "Bund, Fransız Konşeyi, modern silüet" },
        { name: "Xi'an", desc: "Terracotta Ordusu, antik surlar" },
        { name: "Çengdu", desc: "Pandalar, çayevleri, acı Siçuan mutfağı" },
        { name: "Guangcou", desc: "Canton Kulesi, ticaret merkezleri, dim sum" },
        { name: "Hangcou", desc: "Batı Gölü, çay plantasyonları, ipek mirası" },
        { name: "Şencun", desc: "Teknoloji yeniliği, elektronik pazarları" },
        { name: "Guilin", desc: "Karst dağları, Li Nehri gezisi" },
      ],
      explore: "Keşfet",
    },
    guides: { title: "Rehberlerimizle Tanışın", subtitle: "Lisanslı, deneyimli ve tutkulu yerel uzmanlar", languages: "Diller", experience: "yıl deneyim", viewProfile: "Profili Gör" },
    whyUs: {
      title: "Neden FUSEN",
      subtitle: "Çin yolculuğunuzu sorunsuz, otantik ve unutulmaz kılıyoruz",
      features: [
        { title: "Lisanslı Profesyoneller", desc: "Tüm rehberler resmi ulusal tur rehberi lisansına ve uluslararası ziyaretçilere yıllarca hizmet deneyimine sahiptir." },
        { title: "Çok Dilli Destek", desc: "İngilizceden Arapçaya, Rusçadan Portekizceye — ana dilinizde iletişim kurun." },
        { title: "Tamamen Özelleştirilmiş", desc: "Kalıp plan yok. Her tur ilgi alanlarınıza göre uyarlanır. Kontrol sizde." },
        { title: "7/24 Erişilebilirlik", desc: "WhatsApp üzerinden kesintisiz destek. Her zaman bir mesaj uzağınızdayız." },
      ],
    },
    testimonials: {
      title: "Müşterilerimiz Ne Diyor",
      subtitle: "FUSEN'i seçen gezginlerin gerçek deneyimleri",
      items: [
        { quote: "Pekin'deki rehberimiz mükemmel Rusça konuşuyordu ve hutongların her köşesini biliyordu. En iyi seyahat kararı!", author: "Maria İvanova", role: "Moskova'dan bağımsız gezgin" },
        { quote: "FUSEN, işimiz için kritik olan Şencun'da bir fabrika ziyareti ayarladı. Profesyonel ve verimli.", author: "Carlos Méndez", role: "São Paulo'dan iş gezgini" },
        { quote: "Çin'de çocuklarla seyahat etmek göz korkutucu görünüyordu, ama rehberimiz bunu kolaylaştırdı. Çocuklar hala pandalardan bahsediyor!", author: "Sophie Laurent", role: "Paris'ten aile gezgini" },
      ],
    },
    contact: {
      title: "İletişime Geçin",
      subtitle: "Çin maceranızı planlamaya hazır mısınız? Bize mesaj gönderin, 24 saat içinde yanıt verelim.",
      whatsapp: "WhatsApp", email: "E-posta", whatsappBtn: "WhatsApp'tan Yaz", emailBtn: "E-posta Gönder",
      formName: "Adınız", formEmail: "E-posta Adresi", formMessage: "Seyahatinizden bahsedin", formSubmit: "Soru Gönder", formSuccess: "Teşekkürler! 24 saat içinde size geri döneceğiz.",
    },
    footer: {
      tagline: "Çin'de güvenilir yerel rehber ortağınız. Otantik deneyimler, profesyonel hizmet, çok dilli destek.",
      quickLinks: "Hızlı Bağlantılar", contactUs: "Bize Ulaşın", followUs: "Bizi Takip Edin", copyright: "FUSEN", rights: "Tüm hakları saklıdır.",
    },
  },

  kk: {
    nav: { home: "Басты бет", services: "Қызметтер", destinations: "Бағыттар", guides: "Сархыштарымыз", about: "Біз туралы", plan: "Жоспарлау", contact: "Байланыс", cta: "Байланысу" },
    hero: {
      badge: "Қытайдағы премиум жергілікті сархыш қызметі",
      titleTop: "Ашыңыз",
      titleBottom: "Шынайы Қытайды",
      subtitle: "Дербес саяхатшылар, транзит жолаушылары және отбасылар үшін кәсіби жергілікті сархыштар. Көптілді қолдау, жеке турлар және Қытайдың үздік бағыттарында іскерлік көмек.",
      cta1: "Саяхатыңызды бастаңыз", cta2: "Қызметтерді қарау",
      stat1Label: "Қала", stat2Label: "Тіл", stat3Label: "Қанағаттанған саяхатшылар",
    },
    services: {
      title: "Біздің қызметтеріміз",
      subtitle: "Қытайдағы халықаралық қонақтар үшін кешенді жергілікті сархыш қызметтері",
      items: [
        { title: "Тіл аударма", desc: "Ағылшын, орыс, жапон, корей, испан, португал, француз, араб және басқа тілдерде еркін сөйлейтін кәсіби аудармашылар. Тілдік кедергіні оңай жеңіңіз." },
        { title: "Жеке жергілікті тәжірибелер", desc: "Жасырын асыл тастар, шынайы жергілікті дүкендер, мәдени шеберханалар және қалыптан тыс бағыттар. Топтық турлар жоқ — толықтай жеке." },
        { title: "Іскерлік байланыс", desc: "Зауыттарға бару, жеткізушілермен кездесу, көрме көмегі және іскерлік байланыстар. Біз сізді Қытайдың барлық жерінде дұрыс әріптестермен байланыстырамыз." },
        { title: "Транзиттік және визасыз турлар", desc: "Круиз жолаушылары және транзиттік саяхатшылар үшін визасыз қысқа турлар. Қытайдағы әр минутты барынша пайдаланыңыз." },
      ],
    },
    destinations: {
      title: "Танымал бағыттар",
      subtitle: "Біздің сарапшы жергілікті сархыштармен Қытайдың ең танымал қалаларын зерттеңіз",
      cities: [
        { name: "Бейжің", desc: "Тыйым салынған қала, Ұлы қорған, хутуң қысқа көшелері" },
        { name: "Шанхай", desc: "Бунд, Француз концессиясы, заманауи көрініс" },
        { name: "Сиань", desc: "Қыш әскер, көне қорған" },
        { name: "Чэнду", desc: "Пандылар, шайханалар, қышқыл Сычуань тағамдары" },
        { name: "Гуанчжоу", desc: "Кантон мұнарасы, сауда орталықтары, дим сам" },
        { name: "Ханчжоу", desc: "Батыс көлі, шай плантациялары, жібек мұрасы" },
        { name: "Шэньчжэнь", desc: "Технологиялық инновация, электронды нарықтар" },
        { name: "Гуйлинь", desc: "Карст таулары, Ли өзені круизі" },
      ],
      explore: "Зерттеу",
    },
    guides: { title: "Сархыштарымызбен танысыңыз", subtitle: "Лицензиялы, тәжірибелі және ынталы жергілікті сарапшылар", languages: "Тілдер", experience: "жыл тәжірибе", viewProfile: "Профильді қарау" },
    whyUs: {
      title: "Неге FUSEN",
      subtitle: "Біз Қытай саяхатыңызды ықшам, шынайы және есте қаларлық етеміз",
      features: [
        { title: "Лицензиялы мамандар", desc: "Барлық сархыштарда ресми ұлттық тур сархышы лицензиясы және халықаралық қонақтарға қызмет көрсету бойынша көпжылдық тәжірибе бар." },
        { title: "Көптілді қолдау", desc: "Ағылшыннан арабқа дейін, орыстан португалға дейін — ана тіліңізде сөйлесіңіз." },
        { title: "Толықтай бейімделген", desc: "Қалыпты бағдарламалар жоқ. Әр тур сіздің қызығушылықтарыңызға бейімделген. Бақылау сізде." },
        { title: "24/7 қолжетімділік", desc: "WhatsApp арқылы тәулік бойы қолдау. Біз әрқашан бір хат қашықтықта." },
      ],
    },
    testimonials: {
      title: "Қонақтарымыз не дейді",
      subtitle: "FUSEN-ді таңдаған саяхатшылардың шынайы тәжірибелері",
      items: [
        { quote: "Бейжіңдегі сархышымыз мінсіз орысша сөйледі және хутуңдардың әр бұрышын білді. Ең жақын саяхат шешімі!", author: "Мария Иванова", role: "Мәскеуден дербес саяхатшы" },
        { quote: "FUSEN Шэньчжэньде зауытқа баруды ұйымдастырды, бұл біздің бизнесіміз үшін маңызды болды. Кәсіби және тиімді.", author: "Карлос Мендес", role: "Сан-Паулудан іскер саяхатшы" },
        { quote: "Балалармен Қытайға саяхаттау қиын көрінді, бірақ сархышымыз оны оңайлатты. Балалар әлі күнге дейін пандыларды айтады!", author: "Софи Лоран", role: "Парижден отбасылық саяхатшы" },
      ],
    },
    contact: {
      title: "Байланысу",
      subtitle: "Қытайға саяхатыңызды жоспарлауға дайынсыз ба? Хат жіберіңіз, біз 24 сағат ішінде жауап береміз.",
      whatsapp: "WhatsApp", email: "Электронды пошта", whatsappBtn: "WhatsApp-та жазу", emailBtn: "Хат жіберу",
      formName: "Атыңыз", formEmail: "Электронды пошта", formMessage: "Саяхатыңыз туралы айтыңыз", formSubmit: "Сұрау жіберу", formSuccess: "Рахмет! 24 сағат ішінде хабарласамыз.",
    },
    footer: {
      tagline: "Қытайдағы сенімді жергілікті сархыш серіктесіңіз. Шынайы тәжірибелер, кәсіби қызмет, көптілді қолдау.",
      quickLinks: "Жылдам сілтемелер", contactUs: "Байланыс", followUs: "Бізге жазылыңыз", copyright: "FUSEN", rights: "Барлық құқықтар қорғалған.",
    },
  },

  uz: {
    nav: { home: "Bosh sahifa", services: "Xizmatlar", destinations: "Yo'nalishlar", guides: "Gidlarimiz", about: "Biz haqimizda", plan: "Reja", contact: "Aloqa", cta: "Bog'lanish" },
    hero: {
      badge: "Xitoyda premium mahalliy gid xizmati",
      titleTop: "Kashf eting",
      titleBottom: "haqiqiy Xitoyni",
      subtitle: "Mustaqil sayohatchilar, tranzit yo'lovchilar va oilalar uchun professional mahalliy gidlar. Ko'p tilli qo'llab-quvvatlash, shaxsiy turlar va Xitoyning eng yaxshi yo'nalishlarida biznes yordami.",
      cta1: "Sayohatingizni boshlang", cta2: "Xizmatlarni ko'ring",
      stat1Label: "Shaharlar", stat2Label: "Tillar", stat3Label: "Mamnun sayohatchilar",
    },
    services: {
      title: "Bizning xizmatlarimiz",
      subtitle: "Xitoydagi xalqaro mehmonlar uchun keng qamrovli mahalliy gid xizmatlari",
      items: [
        { title: "Til tarjimasi", desc: "Ingliz, rus, yapon, koreys, ispan, portugal, fransuz, arab va boshqa tillarda erkin so'zlashuvchi professional tarjimonlar. Til to'siqlarini oson enging." },
        { title: "Shaxsiy mahalliy tajribalar", desc: "Yashirin gavharlar, haqiqiy mahalliy do'konlar, madaniy ustaxonalar va sayyohlik yo'nalishlaridan tashqari kashfiyotlar. Guruhiy turlar yo'q — to'liq shaxsiylashtirilgan." },
        { title: "Biznes moslashtirish", desc: "Zavod tashriflari, yetkazib beruvchilar bilan uchrashuvlar, yordam ko'rgazmasi va biznes aloqalari. Sizni Xitoy bo'ylab to'g'ri hamkorlar bilan bog'laymiz." },
        { title: "Tranzit va vizasiz turlar", desc: "Kruiz yo'lovchilari va tranzit sayohatchilar uchun vizasiz qisqa turlar. Xitoydagi har bir daqiqadan maksimal foydalaning." },
      ],
    },
    destinations: {
      title: "Mashhur yo'nalishlar",
      subtitle: "Bizning mutaxassis mahalliy gidlar bilan Xitoyning eng mashhur shaharlarini o'rganing",
      cities: [
        { name: "Pekin", desc: "Taqiqlangan shahar, Buyuk devor, xutong ko'chalari" },
        { name: "Shanxay", desc: "Bund, Fransuz konsessiyasi, zamonaviy siluet" },
        { name: "Si'an", desc: "Terrakota armiyasi, qadimiy devor" },
        { name: "Chenddu", desc: "Pandalar, choyxonalalar, achchiq Sichuan taomlari" },
        { name: "Guanchjou", desc: "Kanton minorasi, savdo markazlari, dim sum" },
        { name: "Xanchjou", desc: "G'arbiy ko'l, choy plantatsiyalari, ipak merosi" },
        { name: "Shenchjen", desc: "Texnologiya innovatsiyasi, elektronika bozorlari" },
        { name: "GUILIN", desc: "Karst tog'lari, Li daryosi kruizi" },
      ],
      explore: "O'rganish",
    },
    guides: { title: "Gidlarimiz bilan tanishing", subtitle: "Litsenziyalangan, tajribali va g'ayratli mahalliy mutaxassislar", languages: "Tillar", experience: "yil tajriba", viewProfile: "Profilni ko'rish" },
    whyUs: {
      title: "Nega FUSEN",
      subtitle: "Biz Xitoy sayohatingizni silliq, haqiqiy va unutilmas qilamiz",
      features: [
        { title: "Litsenziyalangan mutaxassislar", desc: "Barcha gidlarda rasmiy milliy tur gid litsenziyasi va xalqaro mehmonlarga xizmat ko'rsatish bo'yicha kop yillik tajriba bor." },
        { title: "Ko'p tilli qo'llab-quvvatlash", desc: "Inglizdan arabgacha, rusdan portugalgacha — ona tilingizda muloqot qiling." },
        { title: "To'liq moslashtirilgan", desc: "Standart rejalr yo'q. Har bir tur sizning qiziqishlaringizga moslashtirilgan. Nazorat sizda." },
        { title: "24/7 mavjudlik", desc: "WhatsApp orqali doimiy qo'llab-quvvatlash. Biz doimo bir xabar uzoqdamiz." },
      ],
    },
    testimonials: {
      title: "Mijozlarimiz nima deydi",
      subtitle: "FUSEN ni tanlagan sayohatchilarning haqiqiy tajribalari",
      items: [
        { quote: "Pekindagi gidimiz mukammal ruscha gapirdi va xutonglarning har bir burchagini bilardi. Eng yaxshi sayohat qarori!", author: "Mariya Ivanova", role: "Moskvadan mustaqil sayohatchi" },
        { quote: "FUSEN Shenchjenda biznesimiz uchun muhim bo'lgan zavod tashrifini tashkil qildi. Professional va samarali.", author: "Karlos Mendez", role: "Sao Paulodan biznes sayohatchisi" },
        { quote: "Bolalar bilan Xitoyda sayohat qilish qiyin ko'rinardi, lekin gidimiz buni osonlashtirdi. Bolalar hali ham pandalarni gapiradi!", author: "Sofi Loren", role: "Parijdan oilaviy sayohatchi" },
      ],
    },
    contact: {
      title: "Bog'laning",
      subtitle: "Xitoy sarguzashtingizni rejalashtirga tayyormisiz? Xabar yuboring va biz 24 soat ichida javob beramiz.",
      whatsapp: "WhatsApp", email: "Email", whatsappBtn: "WhatsApp'da yozish", emailBtn: "Email yuborish",
      formName: "Ismingiz", formEmail: "Email manzil", formMessage: "Sayohatingiz haqida gapiring", formSubmit: "So'rov yuborish", formSuccess: "Rahmat! 24 soat ichida bog'lanamiz.",
    },
    footer: {
      tagline: "Xitoyda ishonchli mahalliy gid hamkoringiz. Haqiqiy tajribalar, professional xizmat, ko'p tilli qo'llab-quvvatlash.",
      quickLinks: "Tezkor havolalar", contactUs: "Biz bilan bog'laning", followUs: "Bizni kuzating", copyright: "FUSEN", rights: "Barcha huquqlar himoyalangan.",
    },
  },

  ky: {
    nav: { home: "Башкы бет", services: "Кызматтар", destinations: "Багыттар", guides: "Гиддерибиз", about: "Биз жөнүндө", plan: "План", contact: "Байланыш", cta: "Байланышуу" },
    hero: {
      badge: "Кытайдагы премиум жергиликтүү гид кызматы",
      titleTop: "Ачкыла",
      titleBottom: "чыныгы Кытайды",
      subtitle: "Көз карандысыз саякатчылар, транзит жолчулары жана үй-бүлөлөр үчүн кесипкөй жергиликтүү гиддер. Көп тилду колдоо, жеке турлар жана Кытайдын эң мыкты багыттарында ишкердик жардам.",
      cta1: "Саяхатыңызды баштаңыз", cta2: "Кызматтарды көрүү",
      stat1Label: "Шаар", stat2Label: "Тил", stat3Label: "Канааттанган саякатчылар",
    },
    services: {
      title: "Биздин кызматтар",
      subtitle: "Кытайдагы эл аралык коноктор үчүн кеңири жергиликтүү гид кызматтары",
      items: [
        { title: "Тил котормосу", desc: "Англис, орус, жапон, корей, испан, португал, француз, араб жана башка тилдерде эркин сүйлөгөн кесипкөй котормочулар. Тилдик тоскоолдукту оңой жеңиңиз." },
        { title: "Жеке жергиликтүү тажрыйбалар", desc: "Жашыруун асыл таштар, чыныгы жергиликтүү дүкөндөр, маданий устаканалар жана адаттан тыш багыттар. Топтук турлар жок — толугу менен жекелештирилген." },
        { title: "Ишкердик байланыш", desc: "Заводдорго баруу, жеткирүүчүлөр менен жолугушуу, көргөзмө жардамы жана ишкердик байланыштар. Биз сизди Кытайдын бүтүндөй жерде туура өнөктөр менен байланыштырабыз." },
        { title: "Транзиттик жана визасыз турлар", desc: "Круиз жолчулары жана транзиттик саякатчылар үчүн визасыз кыска турлар. Кытайдагы ар бир мүнөттөн максималдуу пайдаланыңыз." },
      ],
    },
    destinations: {
      title: "Популярдуу багыттар",
      subtitle: "Биздин адис жергиликтүү гиддер менен Кытайдын эң белгилүү шаарларын изилдеңиз",
      cities: [
        { name: "Бейжин", desc: "Тыйым салынган шаар, Улуу дубал, хутонг көчөлөрү" },
        { name: "Шанхай", desc: "Бунд, Француз концессиясы, заманбап көрүнүш" },
        { name: "Сиань", desc: "Чополук аскер, байыркы дубал" },
        { name: "Чэнду", desc: "Пандалар, чайканалар, өткүр Сычуань тамактары" },
        { name: "Гуанчжоу", desc: "Кантон мунарасы, соода борборлору, дим сам" },
        { name: "Ханчжоу", desc: "Батыш көлү, чай плантациялары, жибек мурасы" },
        { name: "Шэньчжэнь", desc: "Технологиялык инновация, электроника базарлары" },
        { name: "Гуйлинь", desc: "Карст тоолору, Ли дарыясы круизи" },
      ],
      explore: "Изилдөө",
    },
    guides: { title: "Гиддерибиз менен таанышыңыз", subtitle: "Лицензиялуу, тажрыйбалуу жана кызыктуу жергиликтүү адистер", languages: "Тилдер", experience: "жыл тажрыйба", viewProfile: "Профилди көрүү" },
    whyUs: {
      title: "Эмне үчүн FUSEN",
      subtitle: "Биз Кытай саяхатыңызды жөнөкөй, чыныгы жана унутулгус кылабыз",
      features: [
        { title: "Лицензиялуу адистер", desc: "Бардык гиддерде расмий улуттук тур гид лицензиясы жана эл аралык конокторго кызмат көрсөтүү боюнча көп жылдык тажрыйба бар." },
        { title: "Көп тилду колдоо", desc: "Англистен арабка чейин, орустан португалга чейин — эне тилиңизде баарлашыңыз." },
        { title: "Толугу менен ыңгайлаштырылган", desc: "Стандарттык пландар жок. Ар бир тур сиздин кызыкчылыктарыңызга ыңгайлаштырылган. Көзөмөл сизде." },
        { title: "24/7 жеткиликтүүлүк", desc: "WhatsApp аркылуу такай колдоо. Биз дайыма бир билдирүү аралыгындабыз." },
      ],
    },
    testimonials: {
      title: "Конокторубуз эмне дейт",
      subtitle: "FUSEN-ди тандаган саякатчылардын чыныгы тажрыйбалары",
      items: [
        { quote: "Бейжиндеги гидибиз мүкөмсүз орусча сүйлөдү жана хутонгдордун ар бир бурчун билген. Эң мыкты саяхат чечими!", author: "Мария Иванова", role: "Москвадан көз карандысыз саякатчы" },
        { quote: "FUSEN Шэньчжэньде заводго барууну уюштурулду, ал биздин бизнесибиз үчүн маанилүү болду. Кесипкөй жана натыйжалуу.", author: "Карлос Мендес", role: "Сан-Паулудан ишкер саякатчы" },
        { quote: "Балдар менен Кытайга саякат кыйын көрүндү, бирок гидибиз аны оңойлоду. Балдар дагы эле пандаларды айтышат!", author: "Софи Лоран", role: "Парижден үй-бүлөлүк саякатчы" },
      ],
    },
    contact: {
      title: "Байланышуу",
      subtitle: "Кытай саяхатыңызды пландоого даярсызбы? Билдирүү жөнөтүңүз жана биз 24 саат ичинде жооп березиз.",
      whatsapp: "WhatsApp", email: "Электрондук почта", whatsappBtn: "WhatsApp'та жазуу", emailBtn: "Кат жөнөтүү",
      formName: "Атыңыз", formEmail: "Электрондук почта", formMessage: "Саяхатыңыз жөнүндө айтыңыз", formSubmit: "Суроо жөнөтүү", formSuccess: "Рахмат! 24 саат ичинде байланышабыз.",
    },
    footer: {
      tagline: "Кытайдагы ишенимдүү жергиликтүү гид өнөктөшүңүз. Чыныгы тажрыйбалар, кесипкөй кызмат, көп тилду колдоо.",
      quickLinks: "Тез шилтемелер", contactUs: "Байланыш", followUs: "Бизге жазылыңыз", copyright: "FUSEN", rights: "Бардык укуктар корголгон.",
    },
  },

  tg: {
    nav: { home: "Асосӣ", services: "Хизматҳо", destinations: "Самтҳо", guides: "Роҳбаладони мо", about: "Дар бораи мо", plan: "Нақша", contact: "Тамос", cta: "Тамос гирифтан" },
    hero: {
      badge: "Хизмати роҳбалади маҳаллии премиум дар Чин",
      titleTop: "Кушоед",
      titleBottom: "Чини ҳақиқиро",
      subtitle: "Роҳбаладони касбии маҳаллӣ барои мусофирони мустақил, мусофирони транзитӣ ва оилаҳо. Дастгирӣ ба забонҳои зиёд, турҳои шахсӣ ва кумаки тиҷоратӣ дар беҳтарин самтҳои Чин.",
      cta1: "Сафари худро оғоз кунед", cta2: "Хизматҳоро бубинед",
      stat1Label: "Шаҳрҳо", stat2Label: "Забонҳо", stat3Label: "Мусофирони розӣ",
    },
    services: {
      title: "Хизматҳои мо",
      subtitle: "Хизматҳои кӯпҷаҳонаи роҳбалади маҳаллӣ барои меҳмонони байналмилалӣ дар Чин",
      items: [
        { title: "Тарҷумаи забон", desc: "Тарҷумонҳои касбӣ бо забонҳои англисӣ, русӣ, японӣ, кореягӣ, испанӣ, португалӣ, фаронсавӣ, арабӣ ва дигарон. Монеаи забониро осон бартараф кунед." },
        { title: "Таҷрибаҳои маҳаллии шахсӣ", desc: "Ҷавоҳироти пинҳонӣ, мағозаҳои маҳаллии аслӣ, коргоҳҳои фарҳангӣ ва кашфиётҳои берун аз роҳҳои сайёҳӣ. Бе турҳои гурӯҳӣ — комилан шахсӣ." },
        { title: "Мутобиқати тиҷоратӣ", desc: "Дидани корхонаҳо, вохӯриҳо бо таъминкунандагон, кумаки намоишгоҳҳо ва алоқаҳои тиҷоратӣ. Мо шуморо бо шарикони дуруст дар тамоми Чин мутобиқ мекунем." },
        { title: "Турҳои транзитӣ ва бе виза", desc: "Сафарҳои кӯтоҳ барои мусофирони киштӣ ва мусофирони транзитии бе виза. Аз ҳар дақиқа дар Чин ба ҳадди аксар истифода баред." },
      ],
    },
    destinations: {
      title: "Самтҳои машҳур",
      subtitle: "Бо роҳбаладони маҳаллии мутахассиси мо шаҳрҳои маъруфтарини Чинро омӯзед",
      cities: [
        { name: "Пекин", desc: "Шаҳри манъшуда, Девори бузург, кӯчабоғҳои хутунг" },
        { name: "Шанхай", desc: "Бунд, Консессияи фаронсавӣ, силуети муосир" },
        { name: "Сиан", desc: "Лашкари сангфош, девори қадимии шаҳр" },
        { name: "Чэнду", desc: "Пандаҳо, чойхонаҳо, таомҳои тунди Сычуань" },
        { name: "Гуанчжоу", desc: "Бурҷи Кантон, марказҳои савдо, дим сам" },
        { name: "Ханчжоу", desc: "Кӯли Ғарбӣ, плантатсияҳои чой, мероси абрешим" },
        { name: "Шэньчжэнь", desc: "Инноватсияи технологиявӣ, бозорҳои электроникӣ" },
        { name: "Гуйлин", desc: "Кӯҳҳои карстӣ, сайри наҳри Ли" },
      ],
      explore: "Омӯзиш",
    },
    guides: { title: "Бо роҳбаладони мо шинос шавед", subtitle: "Роҳбаладони маҳаллии иҷозатномадор, таҷрибадор ва ҳавасманд", languages: "Забонҳо", experience: "соли таҷриба", viewProfile: "Профилро бубинед" },
    whyUs: {
      title: "Чаро FUSEN",
      subtitle: "Мо сафари Чини шуморо осон, аслӣ ва ёдоварнашаванда мекунем",
      features: [
        { title: "Мутахассисони иҷозатномадор", desc: "Ҳамаи роҳбаладон иҷозатномаи расмии миллии роҳбалади тур доранд ва солҳои зиёд ба меҳмонони байналмилалӣ хизмат расондаанд." },
        { title: "Дастгирии бисёрзабона", desc: "Аз англисӣ то арабӣ, аз русӣ то португалӣ — бо забони модари худ сӯҳбат кунед." },
        { title: "Комилан мутобиқшуда", desc: "Бе нақшаҳои стандартӣ. Ҳар тур мувофиқи манфиатҳои шумо. Назорат дар дасти шумост." },
        { title: "Дастрасии 24/7", desc: "Дастгирии доимӣ тавассути WhatsApp. Мо ҳамеша як паём дур ҳастем." },
      ],
    },
    testimonials: {
      title: "Мизоҷони мо чӣ мегӯянд",
      subtitle: "Таҷрибаҳои ҳақиқии мусофироне, ки FUSEN-ро интихоб карданд",
      items: [
        { quote: "Роҳбалади мо дар Пекин ба забони русӣ комилан сухан мегуфт ва ҳар кунҷи хутунгро медонист. Беҳтарин қарори сафар!", author: "Мария Иванова", role: "Мусофири мустақил аз Маскав" },
        { quote: "FUSEN дидани корхонаро дар Шэньчжэнь танзим кард, ки барои тиҷорати мо муҳим буд. Касбӣ ва самаранок.", author: "Карлос Мендес", role: "Мусофири тиҷоратӣ аз Сан-Паулу" },
        { quote: "Бо кудакон дар Чин сайр кардан мушкил менамуд, аммо роҳбалади мо онро осон кард. Кудакон ҳанӯз ҳам аз пандаҳо мегӯянд!", author: "Софӣ Лоран", role: "Мусофири оилавӣ аз Порис" },
      ],
    },
    contact: {
      title: "Тамос гирифтан",
      subtitle: "Барои нақшаи сафари Чин омодаед? Ба мо паём фиристед ва мо дар 24 соат ҷавоб медиҳем.",
      whatsapp: "WhatsApp", email: "Email", whatsappBtn: "Дар WhatsApp нависед", emailBtn: "Email фиристодан",
      formName: "Номи шумо", formEmail: "Суроғаи email", formMessage: "Дар бораи сафари худ нақл кунед", formSubmit: "Дархост фиристодан", formSuccess: "Ташаккур! Мо дар 24 соат бо шумо тамос мегирем.",
    },
    footer: {
      tagline: "Шарики роҳбалади маҳаллии боэътимоди шумо дар Чин. Таҷрибаҳои аслӣ, хизмати касбӣ, дастгирии бисёрзабона.",
      quickLinks: "Пайвандҳои тез", contactUs: "Бо мо тамос гиред", followUs: "Моро дунбол кунед", copyright: "FUSEN", rights: "Ҳамаи ҳуқуқҳо ҳифз шудаанд.",
    },
  },

  tk: {
    nav: { home: "Baş sahypa", services: "Hyzmatlar", destinations: "Maksatlar", guides: "Gidlerimiz", about: "Biz barada", plan: "Meýilnama", contact: "Aragatnaşyk", cta: "Habarlaşmak" },
    hero: {
      badge: "Hytaýda premium ýerli gid hyzmaty",
      titleTop: "Açyň",
      titleBottom: "hakyky Hytaýy",
      subtitle: "Özbaşdyn syýahatçylar, tranzit ýolagçylar we maşgalar üçin hünärmen ýerli gidler. Köp dilli goldaw, şahsy turlar we Hytaýyň iň oňat maksatlarynda iş kömek.",
      cta1: "Syýahatyňyzy başlaň", cta2: "Hyzmatlary görüň",
      stat1Label: "Şäherler", stat2Label: "Diller", stat3Label: "Hoşal syýahatçylar",
    },
    services: {
      title: "Hyzmatlarymyz",
      subtitle: "Hytaýdaky halkara myhmanlar üçin giňişli ýerli gid hyzmatlary",
      items: [
        { title: "Terjime", desc: "Iňlis, rus, ýapon, koreý, ispan, portugal, fransuz, arap we başga dillerde erkin gepleýän hünärmen terjimeçiler. Dil päsgelçiligini aňatly ýeňiň." },
        { title: "Şahsy ýerli tejribeler", desc: "Gizlin gymmatlyklar, hakyky ýerli dükanlar, medeniýet ussahanalary we syýahatçy ýollaryndan daşary täzeçilikler. Topar turlary ýok — doly şahsylaşdyrylan." },
        { title: "Biznes gabat gelmek", desc: "Zawodlara barmak, üpjünçiler bilen duşuşmak, söwda ýürgünçiligine kömek we biznes aragatnaşyklary. Sizi Hytaýyň ähli ýerinde dogry hyzmatdaşlar bilen baglanyşdyrýarys." },
        { title: "Tranzit we wizasyz turlar", desc: "Gämi ýolagçylary we tranzit syýahatçylar üçin wizasyz gysga turlar. Hytaýdaky her minuty iň oňat ulanyň." },
      ],
    },
    destinations: {
      title: "Meşhur maksatlar",
      subtitle: "Hünärmen ýerli gidlerimiz bilen Hytaýyň iň belli şäherlerini öwreniň",
      cities: [
        { name: "Pekin", desc: "Yaglyk şäher, Uly diwar, hutong köçeleri" },
        { name: "Şanhaý", desc: "Bund, Fransuz konsessiýasy, zamanýetew silwet" },
        { name: "Si'an", desc: "Toprak goşun, gadymy diwar" },
        { name: "Çendu", desc: "Pandalar, çaýhanalar, acy Sichuan tagamlary" },
        { name: "Guançjou", desc: "Kanton minarasy, söwda merkezleri, dim sum" },
        { name: "Hançjou", desc: "Günbatar köli, çaý plantasiýalary, ýüpek miras" },
        { name: "Şençen", desc: "Tehnologiýa täzeligi, elektronika bazary" },
        { name: "Guilin", desc: "Karst daglary, Li derýasy kruizi" },
      ],
      explore: "Öwrenmek",
    },
    guides: { title: "Gidlerimiz bilen tanyşyň", subtitle: "Ruşetly, tejribeli we höwesli ýerli hünärmenler", languages: "Diller", experience: "ýyl tejribe", viewProfile: "Profili görmek" },
    whyUs: {
      title: "Näme üçin FUSEN",
      subtitle: "Biz Hytaý syýahatyňyzy ýumşak, hakyky we ýatdan çykarlmas edýäris",
      features: [
        { title: "Ruşetly hünärmenler", desc: "Ähli gidlerde resmi milliy tur gid ruşetnamasy we halkara myhmanlara hyzmet etmekde köp ýyllyk tejribe bar." },
        { title: "Köp dilli goldaw", desc: "Iňlisden araba çenli, rusdan portugalga çenli — ene dilinde gürleň." },
        { title: "Doly uýgunlaşdyrylan", desc: "Standart meýilnamalar ýok. Her tur sizin gyzyklanmalaryňyza laýyk. Dolandyryş sizde." },
        { title: "24/7 elýeterlilik", desc: "WhatsApp arkaly dowamly goldaw. Biz hemişe bir hat aralykda." },
      ],
    },
    testimonials: {
      title: "Müşderilerimiz näme diýýär",
      subtitle: "FUSEN-i saýlan syýahatçylaryň hakyky tejribeleri",
      items: [
        { quote: "Pekindäki gidimiz kemalsyz rusça gürledi we hutonglaryň her burçuny bilýärdi. Iň gowy syýahat karary!", author: "Mariýa Iwanowa", role: "Moskwadan özbaşdyn syýahatçy" },
        { quote: "FUSEN Şençende işimiz üçin möhüm bolan zawoda barmagy gurady. Hünärmen we netijeli.", author: "Karlos Mendes", role: "São Paulo-dan biznes syýahatçysy" },
        { quote: "Çagalar bilen Hytaýa syýahat etmek kyn göründi, ýöne gidimiz ony aňat etdi. Çagalar henizem pandalar hakda gürrüň edýärler!", author: "Sofi Loren", role: "Parizden maşgala syýahatçysy" },
      ],
    },
    contact: {
      title: "Habarlaşmak",
      subtitle: "Hytaý syýahatyňyzy meýilnamaga taýýarmy? Habar iberiň we biz 24 sagatda jogap bereris.",
      whatsapp: "WhatsApp", email: "Email", whatsappBtn: "WhatsApp-da ýazmak", emailBtn: "Email ibermek",
      formName: "Adyňyz", formEmail: "Email salgy", formMessage: "Syýahatyňyz hakda gürrüň beriň", formSubmit: "Sorag ibermek", formSuccess: "Sag boluň! 24 sagatda habarlaşarys.",
    },
    footer: {
      tagline: "Hytaýda ynamly ýerli gid hyzmatdaşyňyz. Hakyky tejribeler, hünärmen hyzmat, köp dilli goldaw.",
      quickLinks: "Çalt baglanyşyklar", contactUs: "Biz bilen habarlaşyň", followUs: "Bizi yzarlaň", copyright: "FUSEN", rights: "Ähli hukuklar goralýar.",
    },
  },

  pl: {
    nav: { home: "Strona główna", services: "Usługi", destinations: "Destynacje", guides: "Nasi przewodnicy", about: "O nas", plan: "Planuj", contact: "Kontakt", cta: "Skontaktuj się" },
    hero: {
      badge: "Premium lokalny serwis przewodników w Chinach",
      titleTop: "Odkryj",
      titleBottom: "prawdziwe Chiny",
      subtitle: "Profesjonalni lokalni przewodnicy dla niezależnych podróżników, podróżnych tranzytowych i rodzin. Wielojęzyczne wsparcie, prywatne wycieczki i pomoc biznesowa w najlepszych destynacjach Chin.",
      cta1: "Rozpocznij podróż", cta2: "Poznaj usługi",
      stat1Label: "Miasta", stat2Label: "Języki", stat3Label: "Zadowolonych podróżnych",
    },
    services: {
      title: "Nasze usługi",
      subtitle: "Kompleksowe usługi lokalnych przewodników dla międzynarodowych gości w Chinach",
      items: [
        { title: "Tłumaczenia", desc: "Profesjonalni tłumacze władający angielskim, rosyjskim, japońskim, koreańskim, hiszpańskim, portugalskim, francuskim, arabskim i innymi. Pokonaj bariery językowe bez wysiłku." },
        { title: "Prywatne lokalne doświadczenia", desc: "Ukryte perełki, autentyczne lokalne sklepy, warsztaty kulturalne i odkrycia z dala od utartych szlaków. Bez wycieczek grupowych — w pełni spersonalizowane." },
        { title: "Dopasowanie biznesowe", desc: "Wizyty w fabrykach, spotkania z dostawcami, pomoc na targach i networking biznesowy. Łączymy Cię z odpowiednimi partnerami w całych Chinach." },
        { title: "Wycieczki tranzytowe i bez wizy", desc: "Krótkie wycieczki dla pasażerów statków wycieczkowych i podróżnych tranzytowych bez wizy. Wykorzystaj każdą minutę w Chinach." },
      ],
    },
    destinations: {
      title: "Popularne destynacje",
      subtitle: "Odkryj najbardziej kultowe miasta Chin z naszymi ekspertami lokalnymi",
      cities: [
        { name: "Pekin", desc: "Zakazane Miasto, Wielki Mur, uliczki hutong" },
        { name: "Szanghaj", desc: "Bund, Koncesja Francuska, nowoczesna panorama" },
        { name: "Xi'an", desc: "Armia Terakotowa, starożytne mury miejskie" },
        { name: "Chengdu", desc: "Pandy, herbaciarnie, pikantna kuchnia syczuańska" },
        { name: "Kanton", desc: "Wieża Kantonu, centra handlowe, dim sum" },
        { name: "Hangzhou", desc: "Jezioro Zachodnie, plantacje herbaty, dziedzictwo jedwabiu" },
        { name: "Shenzhen", desc: "Innowacje technologiczne, rynki elektroniczne" },
        { name: "Guilin", desc: "Góry krasowe, rejs po rzece Li" },
      ],
      explore: "Odkryj",
    },
    guides: { title: "Poznaj naszych przewodników", subtitle: "Licencjonowani, doświadczeni i pasjonujący się lokalni eksperci", languages: "Języki", experience: "lat doświadczenia", viewProfile: "Zobacz profil" },
    whyUs: {
      title: "Dlaczego FUSEN",
      subtitle: "Sprawiamy, że Twoja podróż do Chin jest płynna, autentyczna i niezapomniana",
      features: [
        { title: "Licencjonowani profesjonaliści", desc: "Wszyscy przewodnicy posiadają oficjalne krajowe licencje przewodnika turystycznego i wieloletnie doświadczenie w obsłudze gości międzynarodowych." },
        { title: "Wielojęzyczne wsparcie", desc: "Od angielskiego po arabski, od rosyjskiego po portugalski — komunikuj się w swoim ojczystym języku." },
        { title: "W pełni spersonalizowane", desc: "Bez sztampowych planów. Każda wycieczka jest dostosowana do Twoich zainteresowań. Ty masz kontrolę." },
        { title: "Dostępność 24/7", desc: "Całodobowe wsparcie przez WhatsApp. Jesteśmy zawsze o jedną wiadomość stąd." },
      ],
    },
    testimonials: {
      title: "Co mówią nasi klienci",
      subtitle: "Prawdziwe doświadczenia podróżnych, którzy wybrali FUSEN",
      items: [
        { quote: "Nasz przewodnik w Pekinie mówił perfekcyjnie po rosyjsku i znał każdy zakątek hutongów. Najlepsza decyzja podróżna!", author: "Maria Iwanowa", role: "Niezależna podróżniczka z Moskwy" },
        { quote: "FUSEN zorganizował wizytę w fabryce w Shenzhen, która była kluczowa dla naszego biznesu. Profesjonalnie i sprawnie.", author: "Carlos Méndez", role: "Podróżnik biznesowy z São Paulo" },
        { quote: "Podróż z dziećmi do Chin wydawała się trudna, ale nasz przewodnik sprawił, że było to proste. Dzieci wciąż opowiadają o pandach!", author: "Sophie Laurent", role: "Podróżniczka rodzinna z Paryża" },
      ],
    },
    contact: {
      title: "Skontaktuj się",
      subtitle: "Gotowy zaplanować swoją przygodę w Chinach? Wyślij nam wiadomość, a odpowiemy w ciągu 24 godzin.",
      whatsapp: "WhatsApp", email: "Email", whatsappBtn: "Czatuj na WhatsApp", emailBtn: "Wyślij email",
      formName: "Twoje imię", formEmail: "Adres email", formMessage: "Opowiedz nam o swojej podróży", formSubmit: "Wyślij zapytanie", formSuccess: "Dziękujemy! Skontaktujemy się w ciągu 24 godzin.",
    },
    footer: {
      tagline: "Twój zaufany lokalny partner przewodnika w Chinach. Autentyczne doświadczenia, profesjonalna obsługa, wielojęzyczne wsparcie.",
      quickLinks: "Szybkie linki", contactUs: "Skontaktuj się z nami", followUs: "Obserwuj nas", copyright: "FUSEN", rights: "Wszelkie prawa zastrzeżone.",
    },
  },

  la: {
    nav: { home: "Domus", services: "Servitia", destinations: "Destinationes", guides: "Ductores nostri", about: "De nobis", plan: "Consilium", contact: "Contactus", cta: "Contingere" },
    hero: {
      badge: "Premium ductor localis servitium in Sina",
      titleTop: "Inveni",
      titleBottom: "veram Sinam",
      subtitle: "Professionales ductores locales pro itinerantibus independentibus, viatoribus transitivis et familiis. Multilingue subsidium, privata itinera et negotium auxilium in optimis Sinae destinationibus.",
      cta1: "Incipe iter tuum", cta2: "Explora servitia",
      stat1Label: "Urbes", stat2Label: "Linguae", stat3Label: "Viatores laeti",
    },
    services: {
      title: "Servitia nostra",
      subtitle: "Omnia ductoris localis servitia pro hospitibus internationalibus in Sina",
      items: [
        { title: "Linguarum interpretatio", desc: "Interpretes professionales qui Anglice, Russice, Iaponice, Coreane, Hispanice, Lusitane, Gallice, Arabice et pluribus fluunt. Obstacles linguarum facile supera." },
        { title: "Privata locales experientiae", desc: "Gemmae occultae, verae localee tabernae, culturales officinae et inventiones extra vias tritas. Sine gregibus — omnino personalisatae." },
        { title: "Negotium conciliatio", desc: "Fabricarum visitationes, congressus cum praebitoribus, nundinarum auxilium et negotiationes. Te cum rectis sociis per omnem Sinam conectimus." },
        { title: "Transitus et sine visa itinera", desc: "Brevia itinera pro navium vectibus et viatoribus transitivis sine visa. Omne momentum in Sina maxime utere." },
      ],
    },
    destinations: {
      title: "Destinationes populares",
      subtitle: "Explora urbes Sinae celeberrimas cum nostris peritis ductoribus localibus",
      cities: [
        { name: "Pechinum", desc: "Urbs Prohibita, Murus Magnus, angiportus hutong" },
        { name: "Shanghai", desc: "Bund, Concessio Gallica, moderna prospectus" },
        { name: "Xi'an", desc: "Exercitus Terreus, antiquum murum urbis" },
        { name: "Chengdu", desc: "Pandae, domus tea, cibi Sichuan acre" },
        { name: "Guangzhou", desc: "Turris Canton, centra mercatus, dim sum" },
        { name: "Hangzhou", desc: "Lacus Occidentalis, plantationes tea, hereditas serici" },
        { name: "Shenzhen", desc: "Innovatio technologica, mercatus electronicae" },
        { name: "Guilin", desc: "Montes karst, navigatio fluminis Li" },
      ],
      explore: "Explora",
    },
    guides: { title: "Occurres nostris ductoribus", subtitle: "Licentiati, periti et cupidi locales experti", languages: "Linguae", experience: "annos peritiae", viewProfile: "Vide profilum" },
    whyUs: {
      title: "Cur FUSEN eligere",
      subtitle: "Iter tuum Sinense facile, verum et inmemorabile facimus",
      features: [
        { title: "Professionales licentiati", desc: "Omnes ductores habent officiales nationales licentias et multos annos peritiae cum hospitibus internationalibus." },
        { title: "Multilingue subsidium", desc: "Ab Anglico ad Arabicum, a Russo ad Lusitanum — in lingua materna communica." },
        { title: "Omnino personalisatum", desc: "Nulla formula itineris. Quodque itiner pro tuis interesse adaptatur. Tu controlis." },
        { title: "24/7 disponibilitas", desc: "Continuum subsidium per WhatsApp. Semper uno nuntio procul sumus." },
      ],
    },
    testimonials: {
      title: "Quid clientes nostri dicunt",
      subtitle: " Verae experientiae viatorum qui FUSEN elegerunt",
      items: [
        { quote: "Ductor noster in Pechino perfecte Russice loquebatur et omnem angulum hutong noverat. Optimum iter decisum!", author: "Maria Ivanova", role: "Viatrix independens e Moscua" },
        { quote: "FUSEN visitationem fabricae in Shenzhen ordinavit quae pro negotio nostro crucialis erat. Professionalis et efficiens.", author: "Carolus Mendez", role: "Viator negotiosus e São Paulo" },
        { quote: "Cum liberis in Sina iter facere formidabile videbatur, sed ductor noster id facile fecit. Liberi adhuc de pandis loquuntur!", author: "Sophia Laurent", role: "Viatrix familiaris e Lutetia" },
      ],
    },
    contact: {
      title: "Contingere",
      subtitle: "Paratus est proventus Sinensem tuum? Nuntium mitte et nos intra 24 horas respondebimus.",
      whatsapp: "WhatsApp", email: "Email", whatsappBtn: "Loqui in WhatsApp", emailBtn: "Mittere email",
      formName: "Nomen tuum", formEmail: "Inscriptio email", formMessage: "De itinere tuo narra", formSubmit: "Mittere quaestionem", formSuccess: "Gratias! Nos intra 24 horas tecum contactum habebimus.",
    },
    footer: {
      tagline: "Tuus fidus localis ductor socius in Sina. Verae experientiae, professionale servitium, multilingue subsidium.",
      quickLinks: "Nexus celeres", contactUs: "Contingere nos", followUs: "Sequere nos", copyright: "FUSEN", rights: "Omnia iura reservata.",
    },
  },

  fi: {
    nav: { home: "Etusivu", services: "Palvelut", destinations: "Kohteet", guides: "Oppaamme", about: "Meistä", plan: "Suunnittelu", contact: "Yhteystiedot", cta: "Ota yhteyttä" },
    hero: {
      badge: "Premium paikallisopaspalvelu Kiinassa",
      titleTop: "Löydä",
      titleBottom: "todellinen Kiina",
      subtitle: "Ammattimaisia paikallisoppaita itsenäisille matkailijoille, kauttakulkumatkustajille ja perheille. Monikielinen tuki, yksityiset kierrokset ja liike-elämän apu Kiinan parhaissa kohteissa.",
      cta1: "Aloita matkasi", cta2: "Tutki palveluita",
      stat1Label: "Kaupunkia", stat2Label: "Kieltä", stat3Label: "Tyytyväistä matkailijaa",
    },
    services: {
      title: "Palvelumme",
      subtitle: "Kattavat paikallisopaspalvelut kansainvälisille vierailijoille Kiinassa",
      items: [
        { title: "Käännökset", desc: "Ammattimaisia tulkkeja, jotka puhuvat sujuvasti englantia, venäjää, japania, koreaa, espanjaa, portugalia, ranskaa, arabiaa ja muuta. Voita kielimuurit vaivattomasti." },
        { title: "Yksityiset paikalliskokemukset", desc: "Piilotetut helmet, aitoja paikallisia kauppoja, kulttuurityöpajoja ja tutkimuksia tutkituilla poluilla. Ei ryhmämatkoja — täysin personoituja." },
        { title: "Liike-elämän välitys", desc: "Tehdaskäyntejä, tapaamisia toimittajien kanssa, messuapua ja liiketoimintaverkostot. Yhdistämme sinut oikeiden kumppaneiden kanssa koko Kiinassa." },
        { title: "Kauttakulku- ja viisumivapaat kierrokset", desc: "Lyhyitä retkiä risteilymatkustajille ja kauttakulkumatkailijoille ilman viisumia. Hyödynnä jokainen minuutti Kiinassa." },
      ],
    },
    destinations: {
      title: "Suositut kohteet",
      subtitle: "Tutki Kiinan ikonisimpia kaupunkeja asiantuntevien paikallisopaidemme kanssa",
      cities: [
        { name: "Peking", desc: "Kielletty kaupunki, Suuri muuri, hutong-kujat" },
        { name: "Shanghai", desc: "Bund, Ranskalainen konsessi, moderni siluetti" },
        { name: "Xi'an", desc: "Terrakotta-armeija, muinainen kaupunginmuuri" },
        { name: "Chengdu", desc: "Pandat, teetalot, tulinen sichuankeittiö" },
        { name: "Guangzhou", desc: "Canton-torni, kauppakeskukset, dim sum" },
        { name: "Hangzhou", desc: "Länsijärvi, teeplantaasit, silkkiperintö" },
        { name: "Shenzhen", desc: "Teknologia-innovaatiot, elektroniikkamarkkinat" },
        { name: "Guilin", desc: "Karstimäet, Li-joen risteily" },
      ],
      explore: "Tutki",
    },
    guides: { title: "Tutustu oppaisiimme", subtitle: "Lisensoituja, kokeneita ja intohimoisia paikallisia asiantuntijoita", languages: "Kielet", experience: "vuoden kokemus", viewProfile: "Näytä profiili" },
    whyUs: {
      title: "Miksi valita FUSEN",
      subtitle: "Teemme Kiina-matkastasi sujuvan, aito ja unohtumaton",
      features: [
        { title: "Lisensoidut ammattilaiset", desc: "Kaikilla oppailla on virallinen kansallinen opaslupa ja vuosien kokemus kansainvälisistä vierailijoista." },
        { title: "Monikielinen tuki", desc: "Englannista arabiaan, venäjästä portugaliin — kommunikoi äidinkielelläsi." },
        { title: "Täysin räätälöity", desc: "Ei vakio-ohjelmia. Jokainen kierros on sovitettu mielenkiintosi mukaan. Sinä hallitset." },
        { title: "24/7 saatavuus", desc: "Ympärivuorokautinen tuki WhatsAppin kautta. Olemme aina yhden viestin päässä." },
      ],
    },
    testimonials: {
      title: "Mitä asiakkaamme sanovat",
      subtitle: "Todellisia kokemuksia matkailijoilta, jotka valitsivat FUSEN",
      items: [
        { quote: "Oppaamme Pekingissä puhui täydellistä venäjää ja tunsi hutongien jokaisen kulman. Paras matkapäätös!", author: "Maria Ivanova", role: "Itsenäinen matkailija Moskovasta" },
        { quote: "FUSEN järjesti tehdaskäynnin Shenzhenissa, joka oli ratkaiseva liiketoiminnallemme. Ammattimainen ja tehokas.", author: "Carlos Méndez", role: "Liikematkailija São Paulosta" },
        { quote: "Lasten kanssa matkustaminen Kiinaan vaikutti pelottavalta, mutta oppaamme teki sen helpoksi. Lapset puhuvat yhä pandista!", author: "Sophie Laurent", role: "Perhematkailija Pariisista" },
      ],
    },
    contact: {
      title: "Ota yhteyttä",
      subtitle: "Valmis suunnittelemaan Kiina-seikkailuasi? Lähetä viesti ja vastaamme 24 tunnin kuluessa.",
      whatsapp: "WhatsApp", email: "Sähköposti", whatsappBtn: "Chattaile WhatsAppissa", emailBtn: "Lähetä sähköposti",
      formName: "Nimesi", formEmail: "Sähköpostiosoite", formMessage: "Kerro matkastasi", formSubmit: "Lähetä kysely", formSuccess: "Kiitos! Otamme sinuun yhteyttä 24 tunnin kuluessa.",
    },
    footer: {
      tagline: "Luotettava paikallisopaskumppanisi Kiinassa. Aitoja kokemuksia, ammattimaista palvelua, monikielistä tukea.",
      quickLinks: "Pikalinkit", contactUs: "Ota yhteyttä", followUs: "Seuraa meitä", copyright: "FUSEN", rights: "Kaikki oikeudet pidätetään.",
    },
  },

  ms: {
    nav: { home: "Utama", services: "Perkhidmatan", destinations: "Destinasi", guides: "Pemandu kami", about: "Tentang kami", plan: "Rancang", contact: "Hubungi", cta: "Hubungi kami" },
    hero: {
      badge: "Perkhidmatan pemandu tempatan premium di China",
      titleTop: "Temui",
      titleBottom: "China yang Sebenar",
      subtitle: "Pemandu tempatan profesional untuk pelancong bebas, pelawat transit dan keluarga. Sokongan berbilang bahasa, lawatan peribadi dan bantuan perniagaan di destinasi terbaik China.",
      cta1: "Mulakan perjalanan anda", cta2: "Terokai perkhidmatan",
      stat1Label: "Bandar", stat2Label: "Bahasa", stat3Label: "Pelancong berpuas hati",
    },
    services: {
      title: "Perkhidmatan kami",
      subtitle: "Perkhidmatan pemandu tempatan komprehensif untuk pelawat antarabangsa di China",
      items: [
        { title: "Terjemahan bahasa", desc: "Penterjemah profesional yang fasih dalam Bahasa Inggeris, Rusia, Jepun, Korea, Sepanyol, Portugis, Perancis, Arab dan lain-lain. Atasi halangan bahasa dengan mudah." },
        { title: "Pengalaman tempatan peribadi", desc: "Permata tersembunyi, kedai tempatan tulen, bengkel budaya dan penemuan di luar laluan pelancong. Tanpa lawatan kumpulan — sepenuhnya peribadi." },
        { title: "Pemadanan perniagaan", desc: "Lawatan kilang, mesyuarat pembekal, bantuan pameran perdagangan dan rangkaian perniagaan. Kami menghubungkan anda dengan rakan kongsi yang betul di seluruh China." },
        { title: "Lawatan transit & tanpa visa", desc: "Lawatan singkat untuk penumpang kapal pesiar dan pelancong transit tanpa visa. Manfaatkan setiap minit di China." },
      ],
    },
    destinations: {
      title: "Destinasi popular",
      subtitle: "Terokai bandar paling ikonik China dengan pemandu tempatan pakar kami",
      cities: [
        { name: "Beijing", desc: "Kota Terlarang, Tembok Besar, lorong hutong" },
        { name: "Shanghai", desc: "Bund, Konsesi Perancis, siluet moden" },
        { name: "Xi'an", desc: "Tentera Terracotta, tembok kota purba" },
        { name: "Chengdu", desc: "Panda, kedai teh, masakan Sichuan pedas" },
        { name: "Guangzhou", desc: "Menara Kanton, pusat perdagangan, dim sum" },
        { name: "Hangzhou", desc: "Tasik Barat, ladang teh, warisan sutera" },
        { name: "Shenzhen", desc: "Inovasi teknologi, pasaran elektronik" },
        { name: "Guilin", desc: "Gunung karst, pelayaran Sungai Li" },
      ],
      explore: "Terokai",
    },
    guides: { title: "Temui pemandu kami", subtitle: "Pemandu tempatan berlesen, berpengalaman dan bersemangat", languages: "Bahasa", experience: "tahun pengalaman", viewProfile: "Lihat profil" },
    whyUs: {
      title: "Mengapa pilih FUSEN",
      subtitle: "Kami menjadikan perjalanan China anda lancar, tulen dan tidak dilupakan",
      features: [
        { title: "Profesional berlesen", desc: "Semua pemandu mempunyai lesen panduan pelancongan kebangsaan rasmi dan pengalaman bertahun-tahun dengan pelawat antarabangsa." },
        { title: "Sokongan berbilang bahasa", desc: "Dari Inggeris ke Arab, dari Rusia ke Portugis — berkomunikasi dalam bahasa ibunda anda." },
        { title: "Sepenuhnya disesuaikan", desc: "Tiada itinerari standard. Setiap lawatan disesuaikan dengan minat anda. Anda yang mengawal." },
        { title: "Ketersediaan 24/7", desc: "Sokongan sepanjang masa melalui WhatsApp. Kami sentiasa satu mesej jauh." },
      ],
    },
    testimonials: {
      title: "Apa kata pelanggan kami",
      subtitle: "Pengalaman sebenar dari pelancong yang memilih FUSEN",
      items: [
        { quote: "Pemandu kami di Beijing bertutur bahasa Rusia dengan sempurna dan mengenali setiap sudut hutong. Keputusan perjalanan terbaik!", author: "Maria Ivanova", role: "Pelancong bebas dari Moscow" },
        { quote: "FUSEN mengatur lawatan kilang di Shenzhen yang penting untuk perniagaan kami. Profesional dan cekap.", author: "Carlos Méndez", role: "Pelancong perniagaan dari São Paulo" },
        { quote: "Berkelor dengan anak-anak di China nampak menakutkan, tetapi pemandu kami memudahkannya. Anak-anak masih bercakap tentang panda!", author: "Sophie Laurent", role: "Pelancong keluarga dari Paris" },
      ],
    },
    contact: {
      title: "Hubungi kami",
      subtitle: "Bersedia merancang pengembaraan China anda? Hantar mesej dan kami akan menjawab dalam 24 jam.",
      whatsapp: "WhatsApp", email: "Emel", whatsappBtn: "Chat di WhatsApp", emailBtn: "Hantar emel",
      formName: "Nama anda", formEmail: "Alamat emel", formMessage: "Ceritakan tentang perjalanan anda", formSubmit: "Hantar pertanyaan", formSuccess: "Terima kasih! Kami akan menghubungi anda dalam 24 jam.",
    },
    footer: {
      tagline: "Rakan kongsi pemandu tempatan yang dipercayai di China. Pengalaman tulen, perkhidmatan profesional, sokongan berbilang bahasa.",
      quickLinks: "Pautan pantas", contactUs: "Hubungi kami", followUs: "Ikuti kami", copyright: "FUSEN", rights: "Hak cipta terpelihara.",
    },
  },

  sv: {
    nav: { home: "Hem", services: "Tjänster", destinations: "Destinationer", guides: "Våra guider", about: "Om oss", plan: "Planera", contact: "Kontakt", cta: "Kontakta oss" },
    hero: {
      badge: "Premium lokal guideervice i Kina",
      titleTop: "Upptäck",
      titleBottom: "det riktiga Kina",
      subtitle: "Professionella lokala guider för självständiga resenärer, transitpassagerare och familjer. Flerspråkigt stöd, privata turer och affärsassistans i Kinas bästa destinationer.",
      cta1: "Starta din resa", cta2: "Utforska tjänster",
      stat1Label: "Städer", stat2Label: "Språk", stat3Label: "Nöjda resenärer",
    },
    services: {
      title: "Våra tjänster",
      subtitle: "Omfattande lokala guidetjänster för internationella besökare i Kina",
      items: [
        { title: "Språköversättning", desc: "Professionella tolkar som talar flytande engelska, ryska, japanska, koreanska, spanska, portugisiska, franska, arabiska och mer. Övervinna språkbarriärer enkelt." },
        { title: "Privata lokala upplevelser", desc: "Dolda pärlor, autentiska lokala butiker, kulturella verkstäder och upptäckter bortom turistlederna. Inga gruppturer — helt personliga." },
        { title: "Affärsmatchning", desc: "Fabriksbesök, leverantörsmöten, mässassistans och affärsnätverk. Vi kopplar dig med rätt partners i hela Kina." },
        { title: "Transit- och visfria turer", desc: "Korta utflykter för kryssningspassagerare och transitresenärer utan visum. Maximera varje minut i Kina." },
      ],
    },
    destinations: {
      title: "Populära destinationer",
      subtitle: "Utforska Kinas mest ikoniska städer med våra expertlokala guider",
      cities: [
        { name: "Peking", desc: "Förbjudna staden, Kinesiska muren, hutong-gränder" },
        { name: "Shanghai", desc: "Bund, Franska koncessionen, modern silhuett" },
        { name: "Xi'an", desc: "Terrakottaarmén, gamla stadsmuren" },
        { name: "Chengdu", desc: "Pandor, tehus, stark sichuanmat" },
        { name: "Guangzhou", desc: "Canton Tower, handelscentra, dim sum" },
        { name: "Hangzhou", desc: "Västra sjön, teplantager, silkesarv" },
        { name: "Shenzhen", desc: "Teknikinnovation, elektronikmarknader" },
        { name: "Guilin", desc: "Karstberg, Li-floden kryssning" },
      ],
      explore: "Utforska",
    },
    guides: { title: "Möt våra guider", subtitle: "Licensierade, erfarna och passionerade lokala experter", languages: "Språk", experience: "års erfarenhet", viewProfile: "Visa profil" },
    whyUs: {
      title: "Varför välja FUSEN",
      subtitle: "Vi gör din Kina-resa smidig, autentisk och oförglömlig",
      features: [
        { title: "Licensierade professionella", desc: "Alla guider har officiella nationella turistguide-licenser och års erfarenhet av internationella besökare." },
        { title: "Flerspråkigt stöd", desc: "Från engelska till arabiska, från ryska till portugisiska — kommunicera på ditt modersmål." },
        { title: "Helt anpassad", desc: "Inga standardresplaner. Varje tur är anpassad efter dina intressen. Du har kontrollen." },
        { title: "24/7 tillgänglighet", desc: "Dygnet-runt-stöd via WhatsApp. Vi är alltid ett meddelande bort." },
      ],
    },
    testimonials: {
      title: "Vad våra kunder säger",
      subtitle: "Verkliga upplevelser från resenärer som valde FUSEN",
      items: [
        { quote: "Vår guide i Peking talade perfekt ryska och kände varje hörn av hutongerna. Bästa resbeslutet!", author: "Maria Ivanova", role: "Självständig resenär från Moskva" },
        { quote: "FUSEN ordnade ett fabriksbesök i Shenzhen som var avgörande för vår verksamhet. Professionellt och effektivt.", author: "Carlos Méndez", role: "Affärsresenär från São Paulo" },
        { quote: "Att resa med barn i Kina verkade skrämmande, men vår guide gjorde det enkelt. Barnen pratar fortfarande om pandorna!", author: "Sophie Laurent", role: "Familjeresenär från Paris" },
      ],
    },
    contact: {
      title: "Kontakta oss",
      subtitle: "Redo att planera ditt Kina-äventyr? Skicka ett meddelande så svarar vi inom 24 timmar.",
      whatsapp: "WhatsApp", email: "E-post", whatsappBtn: "Chatta på WhatsApp", emailBtn: "Skicka e-post",
      formName: "Ditt namn", formEmail: "E-postadress", formMessage: "Berätta om din resa", formSubmit: "Skicka förfrågan", formSuccess: "Tack! Vi återkommer inom 24 timmar.",
    },
    footer: {
      tagline: "Din pålitliga lokala guidepartner i Kina. Autentiska upplevelser, professionell service, flerspråkigt stöd.",
      quickLinks: "Snabblänkar", contactUs: "Kontakta oss", followUs: "Följ oss", copyright: "FUSEN", rights: "Alla rättigheter förbehållna.",
    },
  },

  el: {
    nav: { home: "Αρχική", services: "Υπηρεσίες", destinations: "Προορισμοί", guides: "Οι ξεναγοί μας", about: "Σχετικά", plan: "Σχεδιασμός", contact: "Επικοινωνία", cta: "Επικοινωνήστε" },
    hero: {
      badge: "Premium υπηρεσία τοπικού ξεναγού στην Κίνα",
      titleTop: "Ανακαλύψτε",
      titleBottom: "την πραγματική Κίνα",
      subtitle: "Επαγγελματικοί τοπικοί ξεναγοί για ανεξάρτητους ταξιδιώτες, επιβάτες διελεύσεως και οικογένειες. Πολυγλωσσική υποστήριξη, ιδιωτικές περιηγήσεις και επιχειρηματική βοήθεια στις κορυφαίες προορισμούς της Κίνας.",
      cta1: "Ξεκινήστε το ταξίδι σας", cta2: "Εξερευνήστε υπηρεσίες",
      stat1Label: "Πόλεις", stat2Label: "Γλώσσες", stat3Label: "Ικανοποιημένοι ταξιδιώτες",
    },
    services: {
      title: "Οι υπηρεσίες μας",
      subtitle: "Ολοκληρωμένες υπηρεσίες τοπικού ξεναγού για διεθνείς επισκέπτες στην Κίνα",
      items: [
        { title: "Γλωσσική μετάφραση", desc: "Επαγγελματίες διερμηνείς που μιλούν άπταιστα αγγλικά, ρωσικά, ιαπωνικά, κορεατικά, ισπανικά, πορτογαλικά, γαλλικά, αραβικά και άλλα. Ξεπεράστε τα γλωσσικά εμπόδια εύκολα." },
        { title: "Ιδιωτικές τοπικές εμπειρίες", desc: "Κρυμμένα πετράδια, αυθεντικά τοπικά καταστήματα, πολιτιστικά εργαστήρια και ανακαλύψεις εκτός των τουριστικών διαδρομών. Χωρίς ομαδικές περιηγήσεις — πλήρως εξατομικευμένες." },
        { title: "Επιχειρηματική διασύνδεση", desc: "Επισκέψεις σε εργοστάσια, συναντήσεις με προμηθευτές, βοήθεια σε εκθέσεις και επιχειρηματικά δίκτυα. Σας συνδέουμε με τους σωστούς συνεργάτες σε όλη την Κίνα." },
        { title: "Διελεύσεις και περιηγήσεις χωρίς βίζα", desc: "Σύντομες εκδρομές για επιβάτες κρουαζιέρας και διελεύσεως χωρίς βίζα. Αξιοποιήστε κάθε λεπτό στην Κίνα." },
      ],
    },
    destinations: {
      title: "Δημοφιλείς προορισμοί",
      subtitle: "Εξερευνήστε τις πιο εμβληματικές πόλεις της Κίνας με τους ειδικούς τοπικούς ξεναγούς μας",
      cities: [
        { name: "Πεκίνο", desc: "Απαγορευμένη Πόλη, Μεγάλο Τείχος, σοκάκια χουτόνγκ" },
        { name: "Σαγκάη", desc: "Μπαντ, Γαλλική Παραχώρηση, σύγχρονος ορίζοντας" },
        { name: "Σιάν", desc: "Στρατός από Τερακότα, αρχαίο τείχος πόλης" },
        { name: "Τσενγκτού", desc: "Πάντες, τεϊοπορεία, πικάντικη κουζίνα Σιτσουάν" },
        { name: "Γκουανγκτζόου", desc: "Πύργος Καντόν, εμπορικά κέντρα, ντιμ σαμ" },
        { name: "Χανγκτζόου", desc: "Δυτική Λίμνη, φυτείες τσαγιού, κληρονομία μεταξιού" },
        { name: "Σεντσέν", desc: "Τεχνολογική καινοτομία, αγορές ηλεκτρονικών" },
        { name: "Γκουιλίν", desc: "Καρστικά βουνά, κρουαζιέρα ποταμού Λι" },
      ],
      explore: "Εξερευνήστε",
    },
    guides: { title: "Γνωρίστε τους ξεναγούς μας", subtitle: "Αδειούχοι, έμπειροι και ενθουσιώδεις τοπικοί ειδικοί", languages: "Γλώσσες", experience: "χρόνια εμπειρίας", viewProfile: "Προβολή προφίλ" },
    whyUs: {
      title: "Γιατί να επιλέξετε FUSEN",
      subtitle: "Κάνουμε το ταξίδι σας στην Κίνα ομαλό, αυθεντικό και αξέχαστο",
      features: [
        { title: "Αδειούχοι επαγγελματίες", desc: "Όλοι οι ξεναγοί έχουν επίσημες εθνικές άδειες ξεναγού και πολυετή εμπειρία με διεθνείς επισκέπτες." },
        { title: "Πολυγλωσσική υποστήριξη", desc: "Από αγγλικά μέχρι αραβικά, από ρωσικά μέχρι πορτογαλικά — επικοινωνήστε στη μητρική σας γλώσσα." },
        { title: "Πλήρως εξατομικευμένο", desc: "Χωρίς τυποποιημένα προγράμματα. Κάθε περιήγηση προσαρμόζεται στα ενδιαφέροντά σας. Έχετε τον έλεγχο." },
        { title: "Διαθεσιμότητα 24/7", desc: "Συνεχής υποστήριξη μέσω WhatsApp. Είμαστε πάντα ένα μήνυμα μακριά." },
      ],
    },
    testimonials: {
      title: "Τι λένε οι πελάτες μας",
      subtitle: "Πραγματικές εμπειρίες από ταξιδιώτες που επέλεξαν το FUSEN",
      items: [
        { quote: "Ο ξεναγός μας στο Πεκίνο μιλούσε τέλεια ρωσικά και ήξερε κάθε γωνιά των χουτόνγκ. Η καλύτερη ταξιδιωτική απόφαση!", author: "Μαρία Ιβάνοβα", role: "Ανεξάρτητη ταξιδιώτρια από Μόσχα" },
        { quote: "Το FUSEN οργάνωσε επίσκεψη σε εργοστάσιο στο Σεντσέν που ήταν κρίσιμη για την επιχείρησή μας. Επαγγελματικό και αποδοτικό.", author: "Κάρλος Μέντεζ", role: "Επιχειρηματικός ταξιδιώτης από Σάο Πάολο" },
        { quote: "Το ταξίδι με παιδιά στην Κίνα φάνταζε δύσκολο, αλλά ο ξεναγός μας το έκανε εύκολο. Τα παιδιά ακόμα μιλούν για τις πάνδες!", author: "Σοφί Λωράν", role: "Οικογενειακή ταξιδιώτρια από Παρίσι" },
      ],
    },
    contact: {
      title: "Επικοινωνήστε",
      subtitle: "Έτοιμοι να σχεδιάσετε την κινεζική περιπέτειά σας; Στείλτε μας μήνυμα και θα απαντήσουμε εντός 24 ωρών.",
      whatsapp: "WhatsApp", email: "Email", whatsappBtn: "Chat στο WhatsApp", emailBtn: "Αποστολή email",
      formName: "Το όνομά σας", formEmail: "Διεύθυνση email", formMessage: "Πείτε μας για το ταξίδι σας", formSubmit: "Αποστολή ερώτησης", formSuccess: "Ευχαριστούμε! Θα επικοινωνήσουμε εντός 24 ωρών.",
    },
    footer: {
      tagline: "Ο αξιόπιστος τοπικός ξεναγός συνεργάτης σας στην Κίνα. Αυθεντικές εμπειρίες, επαγγελματική υπηρεσία, πολυγλωσσική υποστήριξη.",
      quickLinks: "Γρήγοροι σύνδεσμοι", contactUs: "Επικοινωνήστε μαζί μας", followUs: "Ακολουθήστε μας", copyright: "FUSEN", rights: "Με επιφύλαξη κάθε δικαιώματος.",
    },
  },
};
