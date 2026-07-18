/**
 * FUSEN i18n - Multi-language translation system
 * Supported: EN, RU, JA, KO, ES, PT, FR, AR
 */

export type LanguageCode = "en" | "ru" | "ja" | "ko" | "es" | "pt" | "fr" | "ar";

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
];

export interface Translation {
  nav: {
    home: string;
    services: string;
    destinations: string;
    guides: string;
    about: string;
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
};
