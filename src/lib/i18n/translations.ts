// ============================================================
// FUSEN - Site Translations
// English is the canonical base; all other languages deep-merge
// over English so missing keys never render blank.
// ============================================================

import { seoContent } from "./seo-translations";

export interface NavTranslation {
  home: string;
  products: string;
  categories: string;
  brands: string;
  whyUs: string;
  inquiry: string;
  contact: string;
  cta: string;
}

export interface ListItem {
  title: string;
  desc: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Translation {
  nav: NavTranslation;
  hero: {
    badge: string;
    accent: string;
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    stats: StatItem[];
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    items: ListItem[];
  };
  products: {
    badge: string;
    title: string;
    subtitle: string;
    inquire: string;
    all: string;
    unitsLabel: string;
    modelsLabel: string;
    nutCat: string;
    boltCat: string;
    qty: string;
    items: string;
    newMachines: {
      label: string;
      title: string;
      subtitle: string;
      seriesPT: string;
      seriesGS: string;
      seriesHM: string;
      model: string;
      maxDia: string;
      maxLength: string;
      output: string;
      motor: string;
      weight: string;
      tableSize: string;
      inquire: string;
    };
    sections: {
      new: string;
      usedNut: string;
      usedBolt: string;
    };
    sectionIntro: {
      new: string;
      usedNut: string;
      usedBolt: string;
    };
  };
  categories: {
    badge: string;
    title: string;
    subtitle: string;
    items: string[];
  };
  brands: {
    badge: string;
    title: string;
    subtitle: string;
    originLabel: string;
  };
  whyUs: {
    badge: string;
    title: string;
    subtitle: string;
    items: ListItem[];
  };
  testimonials: {
    badge: string;
    title: string;
    items: Testimonial[];
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: ListItem[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    whatsapp: string;
    email: string;
    chatBtn: string;
    emailBtn: string;
    nameLabel: string;
    emailLabel: string;
    msgLabel: string;
    namePh: string;
    emailPh: string;
    msgPh: string;
    submit: string;
    sending: string;
  };
  footer: {
    desc: string;
    productsTitle: string;
    companyTitle: string;
    rights: string;
  };
}

// ------------------------------------------------------------
// Supported languages
// ------------------------------------------------------------
export type LanguageCode =
  | "en"
  | "ru"
  | "ja"
  | "ko"
  | "es"
  | "pt"
  | "fr"
  | "ar"
  | "de"
  | "it"
  | "nl"
  | "th"
  | "id"
  | "fa"
  | "hi"
  | "tr"
  | "kk"
  | "uz"
  | "ky"
  | "tg"
  | "tk"
  | "pl"
  | "la"
  | "fi"
  | "ms"
  | "sv"
  | "el";

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  native: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", native: "English" },
  { code: "ru", label: "Russian", native: "Русский" },
  { code: "ja", label: "Japanese", native: "日本語" },
  { code: "ko", label: "Korean", native: "한국어" },
  { code: "es", label: "Spanish", native: "Español" },
  { code: "pt", label: "Portuguese", native: "Português" },
  { code: "fr", label: "French", native: "Français" },
  { code: "ar", label: "Arabic", native: "العربية" },
  { code: "de", label: "German", native: "Deutsch" },
  { code: "it", label: "Italian", native: "Italiano" },
  { code: "nl", label: "Dutch", native: "Nederlands" },
  { code: "th", label: "Thai", native: "ไทย" },
  { code: "id", label: "Indonesian", native: "Bahasa Indonesia" },
  { code: "fa", label: "Persian", native: "فارسی" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
  { code: "tr", label: "Turkish", native: "Türkçe" },
  { code: "kk", label: "Kazakh", native: "Қазақша" },
  { code: "uz", label: "Uzbek", native: "Oʻzbekcha" },
  { code: "ky", label: "Kyrgyz", native: "Кыргызча" },
  { code: "tg", label: "Tajik", native: "Тоҷикӣ" },
  { code: "tk", label: "Turkmen", native: "Türkmençe" },
  { code: "pl", label: "Polish", native: "Polski" },
  { code: "la", label: "Latin", native: "Latina" },
  { code: "fi", label: "Finnish", native: "Suomi" },
  { code: "ms", label: "Malay", native: "Bahasa Melayu" },
  { code: "sv", label: "Swedish", native: "Svenska" },
  { code: "el", label: "Greek", native: "Ελληνικά" },
];

export const RTL_LANGUAGES: LanguageCode[] = ["ar", "fa"];

export type DeepPartial<T> = T extends readonly (infer _U)[]
  ? T
  : T extends object
    ? { [P in keyof T]?: DeepPartial<T[P]> }
    : T;

// ------------------------------------------------------------
// English (canonical)
// ------------------------------------------------------------
export const en: Translation = {
  nav: {
    home: "Home",
    products: "Machines",
    categories: "Categories",
    brands: "Brands",
    whyUs: "Why Us",
    inquiry: "Inquiry",
    contact: "Contact",
    cta: "Get a Quote",
  },
  hero: {
    badge: "Reliable Used Fastener Machinery",
    accent: "Used Nut & Bolt",
    title: "Cold Heading Machines",
    subtitle:
      "Inspected and tested second-hand nut formers, bolt headers and screw machines. Exported worldwide with installation support.",
    cta1: "Get a Quote",
    cta2: "Browse Machines",
    stats: [
      { value: "15+", label: "Years Experience" },
      { value: "500+", label: "Machines Delivered" },
      { value: "60+", label: "Export Countries" },
      { value: "98%", label: "Satisfaction Rate" },
    ],
  },
  services: {
    badge: "What We Offer",
    title: "Complete Machinery Service",
    subtitle:
      "More than selling machines — we support you from inspection to production.",
    items: [
      {
        title: "Inspection & Refurbishment",
        desc: "Every machine is powered on, checked for noise and precision, and refurbished before delivery.",
      },
      {
        title: "Worldwide Export & Shipping",
        desc: "Full export documentation, container loading and sea freight to your nearest port.",
      },
      {
        title: "Installation & Commissioning",
        desc: "Remote guidance or on-site support to set up dies and reach stable production.",
      },
      {
        title: "Spare Parts & After-Sales",
        desc: "Wear parts, die supply and technical support long after your purchase.",
      },
    ],
  },
  products: {
    badge: "Available Machines",
    title: "Machines In Stock Now",
    subtitle:
      "Deal in both brand-new heading machines and quality used cold heading machines, with live inventory checked before export.",
    inquire: "Inquire",
    all: "View All Machines",
    unitsLabel: "Units in stock",
    modelsLabel: "machine models",
    nutCat: "Used Nut Cold Headers",
    boltCat: "Used Bolt & Screw Formers",
    qty: "Unit",
    items: "items",
    newMachines: {
      label: "Brand New",
      title: "New Bolt Heading Machines",
      subtitle:
        "Factory-fresh multi-station heading machines with full technical specifications. Custom die design and commissioning available.",
      seriesPT: "PT Series — Standard",
      seriesGS: "GS Series — High Speed",
      seriesHM: "HM Series — Combination Die",
      model: "Model",
      maxDia: "Max. Dia. (mm)",
      maxLength: "Max. Length (mm)",
      output: "Output (pcs/min)",
      motor: "Motor",
      weight: "Weight (kg)",
      tableSize: "Table Size (mm)",
      inquire: "Check Price & Lead Time",
    },
    sections: {
      new: "Brand-New Machines",
      usedNut: "Used Nut Cold Headers",
      usedBolt: "Used Bolt & Screw Formers",
    },
    sectionIntro: {
      new: "Our brand-new multi-station bolt heading machines cover the PT, GS and HM series, built for fastener makers who want a current-generation machine with a full warranty, CE-ready electrics and factory support. Choose the standard PT line for general bolts, the high-speed GS line for high-volume production, or the HM combination-die line for complex parts. Every model is delivered with complete technical specifications, custom die design and commissioning support, so you can move from order to stable production without guesswork.",
      usedNut: "A nut cold header — also called a nut former — automatically forms hex and flange nuts from coiled wire across several progressive stations. Our used nut formers span the common 11B, 14B, 17B, 19B and 24B sizes, mostly 6-station (6S) machines from proven makers such as Sijin, Yeswin and Jernyao. Each second-hand machine is powered on and inspected before export, so you can see it run and check real tolerances on video. Buying a tested used nut former is a cost-effective way to add capacity for M5 to M24 nuts at a fraction of the price of new equipment.",
      usedBolt: "Multi-station bolt and screw formers shape bolts, screws and special fasteners through a sequence of dies. Our used stock covers compact 10B2S / 13B3S machines through large 62S–254SL multi-die formers, sourced from established brands including Sijin, Chunzu, BIAULI, Shengtuo, Tengfeng and Guyou. Every used bolt former is inspected and test-run before loading, with honest disclosure of wear and repairs. With hundreds of units shipped and complete export documentation, we help fastener factories worldwide buy reliable second-hand formers and get them into production quickly.",
    },
  },
  categories: {
    badge: "By Type",
    title: "Find Your Machine Type",
    subtitle: "From simple screw headers to six-station complex part formers.",
    items: [
      "Nut Cold Headers",
      "Bolt Heading Machines",
      "1-Die 2-Blow",
      "2-Die 4-Blow",
      "3-Die 3-Blow",
      "4-Die 4-Blow",
      "5-Die 5-Blow",
      "6-Die 6-Blow",
    ],
  },
  brands: {
    badge: "Trusted Brands",
    title: "Brands We Deal In",
    subtitle:
      "Proven Chinese brands from the mainland and Taiwan, plus precision Italian machines.",
    originLabel: "Origin",
  },
  whyUs: {
    badge: "Why FUSEN",
    title: "Buy Used Machinery With Confidence",
    subtitle:
      "Every machine is tested honestly and exported by an experienced team.",
    items: [
      {
        title: "Power-On Test Before Payment",
        desc: "See the machine running, hear it run and check real tolerances on video or in person.",
      },
      {
        title: "Honest Condition Disclosure",
        desc: "We report wear, leaks and repairs truthfully. No hidden problems.",
      },
      {
        title: "Export Experience",
        desc: "Hundreds of machines shipped; we handle customs documents and safe loading.",
      },
      {
        title: "Competitive Pricing",
        desc: "Direct stock without brokers, priced fairly by machine year and condition.",
      },
    ],
  },
  testimonials: {
    badge: "Testimonials",
    title: "Trusted By Overseas Buyers",
    items: [
      {
        quote:
          "The 2-die 4-blow arrived exactly as shown in the test video. Installation support was fast.",
        name: "Ahmed R.",
        role: "Fastener Factory, Turkey",
      },
      {
        quote:
          "Good machines at fair prices. FUSEN handled all the export paperwork smoothly.",
        name: "Carlos M.",
        role: "Machinery Trader, Brazil",
      },
      {
        quote:
          "I have bought three nut formers from them. Every unit was tested honestly.",
        name: "D. Kowalski",
        role: "Fastener Manufacturer, Poland",
      },
    ],
  },
  faq: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    subtitle:
      "Practical answers for buyers sourcing used cold heading machines from China.",
    items: [
      {
        title: "Can I see the machine running before I pay?",
        desc: "Yes. We power on every used machine and send you a live or recorded video showing it running, so you can hear it and check real tolerances before making payment.",
      },
      {
        title: "How do you ship a machine to my country?",
        desc: "We handle full export documentation, secure container loading and sea freight to your nearest port. We can also arrange insurance and customs-clearance support on request.",
      },
      {
        title: "What is the difference between the 11B, 14B, 19B and 24B nut machines?",
        desc: "The number indicates the machine size and the maximum nut it can form — from small 11B units up to 24B machines for large M20–M24 nuts. Larger machines use thicker wire and have heavier frames and motor power.",
      },
      {
        title: "Do you provide installation, dies and spare parts?",
        desc: "Yes. We offer remote or on-site commissioning, custom die design, wear parts and ongoing technical support so the machine can reach stable production in your factory.",
      },
      {
        title: "What payment terms do you accept?",
        desc: "We commonly accept a deposit to confirm the order with the balance paid before loading, by bank transfer. Exact terms are agreed per machine and can be discussed on WhatsApp or by email.",
      },
    ],
  },
  contact: {
    badge: "Contact",
    title: "Get In Touch",
    subtitle:
      "Tell us the machine model and specs you need. We respond within 24 hours.",
    whatsapp: "WhatsApp",
    email: "Email",
    chatBtn: "Chat on WhatsApp",
    emailBtn: "Send Email",
    nameLabel: "Your Name",
    emailLabel: "Email Address",
    msgLabel: "Tell us your machine needs",
    namePh: "John Smith",
    emailPh: "john@example.com",
    msgPh: "e.g. Sijin 105S nut former, M6–M10, year 2017+",
    submit: "Send Inquiry",
    sending: "Sending...",
  },
  footer: {
    desc: "Supplier of inspected used nut cold headers, bolt heading machines and screw machines, exported worldwide from China.",
    productsTitle: "Machines",
    companyTitle: "Company",
    rights: "All rights reserved.",
  },
};

// ------------------------------------------------------------
// Russian
// ------------------------------------------------------------
export const ru: DeepPartial<Translation> = {
  nav: {
    home: "Главная",
    products: "Станки",
    categories: "Категории",
    brands: "Бренды",
    whyUs: "Почему мы",
    inquiry: "Запрос",
    contact: "Контакты",
    cta: "Запросить цену",
  },
  hero: {
    badge: "Надёжное б/у оборудование для крепежа",
    accent: "Б/у станки для гаек и болтов",
    title: "Холодновысадочные автоматы",
    subtitle:
      "Проверенные б/у автоматы для гаек, болтов и винтов. Экспорт по всему миру и помощь в запуске.",
    cta1: "Запросить цену",
    cta2: "Смотреть станки",
    stats: [
      { value: "15+", label: "лет опыта" },
      { value: "500+", label: "станков поставлено" },
      { value: "60+", label: "стран экспорта" },
      { value: "98%", label: "довольных клиентов" },
    ],
  },
  services: {
    badge: "Наши услуги",
    title: "Полный комплекс услуг",
    subtitle:
      "Мы не просто продаём станки — мы сопровождаем вас от проверки до выпуска продукции.",
    items: [
      {
        title: "Проверка и восстановление",
        desc: "Каждый станок включается, проверяется на шум и точность и восстанавливается перед отгрузкой.",
      },
      {
        title: "Экспорт и доставка",
        desc: "Полный пакет экспортных документов, погрузка в контейнер и морская доставка до ближайшего порта.",
      },
      {
        title: "Монтаж и наладка",
        desc: "Удалённые консультации или выезд специалиста для настройки штампов и выхода на стабильный режим.",
      },
      {
        title: "Запчасти и сервис",
        desc: "Износостойкие детали, штампы и техподдержка долгое время после покупки.",
      },
    ],
  },
  products: {
    badge: "В наличии",
    title: "Станки на складе сейчас",
    subtitle:
      "Реальный склад и реальные фото. Запросите актуальный отчёт о состоянии и тест-видео.",
    inquire: "Запросить",
    all: "Все станки",
  },
  categories: {
    badge: "По типу",
    title: "Подберите тип станка",
    subtitle:
      "От простых винтовых автоматов до шестипозиционных высадочных комплексов.",
    items: [
      "Автоматы для гаек",
      "Автоматы для болтов",
      "1 пуансон 2 удара",
      "2 пуансона 4 удара",
      "3 пуансона 3 удара",
      "4 пуансона 4 удара",
      "5 пуансонов 5 ударов",
      "6 пуансонов 6 ударов",
    ],
  },
  brands: {
    badge: "Бренды",
    title: "С какими брендами работаем",
    subtitle: "Надёжные китайские и точные японские станки.",
    originLabel: "Страна",
  },
  whyUs: {
    badge: "Почему FUSEN",
    title: "Покупайте б/у станки уверенно",
    subtitle:
      "Каждый станок честно протестирован и отгружается опытной командой.",
    items: [
      {
        title: "Проверка под напряжением",
        desc: "Посмотрите работу станка, услышьте его и оцените реальные допуски на видео или лично.",
      },
      {
        title: "Честное описание состояния",
        desc: "Мы честно сообщаем об износе, протечках и ремонте. Без скрытых проблем.",
      },
      {
        title: "Опыт экспорта",
        desc: "Сотни отгруженных станков; мы оформляем таможенные документы и безопасную погрузку.",
      },
      {
        title: "Выгодные цены",
        desc: "Прямой склад без посредников, честная цена по году и состоянию станка.",
      },
    ],
  },
  testimonials: {
    badge: "Отзывы",
    title: "Нам доверяют покупатели за рубежом",
    items: [
      {
        quote:
          "Автомат 2 пуансона 4 удара пришёл точно как на тест-видео. Помощь в запуске была быстрой.",
        name: "Ахмед Р.",
        role: "Завод крепежа, Турция",
      },
      {
        quote:
          "Хорошие станки по справедливым ценам. FUSEN без проблем оформил все экспортные документы.",
        name: "Карлос М.",
        role: "Торговец оборудованием, Бразилия",
      },
      {
        quote:
          "Я купил у них три гайковых автомата. Все были честно проверены.",
        name: "Д. Ковальски",
        role: "Производитель крепежа, Польша",
      },
    ],
  },
  contact: {
    badge: "Контакты",
    title: "Свяжитесь с нами",
    subtitle:
      "Сообщите модель и характеристики нужного станка. Отвечаем в течение 24 часов.",
    whatsapp: "WhatsApp",
    email: "Эл. почта",
    chatBtn: "Написать в WhatsApp",
    emailBtn: "Отправить email",
    nameLabel: "Ваше имя",
    emailLabel: "Эл. почта",
    msgLabel: "Опишите требуемый станок",
    namePh: "Иван Петров",
    emailPh: "ivan@example.com",
    msgPh: "напр., гайковый автомат Sijin 105S, M6–M10, от 2017 г.",
    submit: "Отправить запрос",
    sending: "Отправка...",
  },
  footer: {
    desc: "Поставщик проверенных б/у автоматов для гаек, болтов и винтов с экспортом из Китая по всему миру.",
    productsTitle: "Станки",
    companyTitle: "Компания",
    rights: "Все права защищены.",
  },
};

// ------------------------------------------------------------
// Japanese
// ------------------------------------------------------------
export const ja: DeepPartial<Translation> = {
  nav: {
    home: "ホーム",
    products: "機械",
    categories: "カテゴリー",
    brands: "ブランド",
    whyUs: "選ぶ理由",
    inquiry: "引合",
    contact: "お問い合わせ",
    cta: "見積依頼",
  },
  hero: {
    badge: "信頼の中古ファスナー機械",
    accent: "中古ナット・ボルト用",
    title: "圧造成形機",
    subtitle:
      "点検・試運転済みの中古ナットフォーマー、ボルトヘッダー、ねじフォーマー。世界へ輸出、据付サポート付き。",
    cta1: "見積依頼",
    cta2: "機械を見る",
    stats: [
      { value: "15年+", label: "業界経験" },
      { value: "500台+", label: "納入実績" },
      { value: "60カ国+", label: "輸出先" },
      { value: "98%", label: "満足率" },
    ],
  },
  services: {
    badge: "サービス",
    title: "一貫した機械サービス",
    subtitle:
      "機械を売るだけでなく、点検から生産開始までサポートします。",
    items: [
      {
        title: "点検・整備",
        desc: "すべての機械は通電し、異音と精度を確認し、納品前に整備します。",
      },
      {
        title: "世界への輸出・発送",
        desc: "輸出書類一式、コンテナ積込み、最寄り港までの海上輸送を手配します。",
      },
      {
        title: "据付・試運転",
        desc: "金型設定と安定生産まで、リモート指導または現地サポートを提供します。",
      },
      {
        title: "部品・アフターサービス",
        desc: "消耗部品、金型供給、購入後も長く技術サポートを続けます。",
      },
    ],
  },
  products: {
    badge: "在庫機械",
    title: "現在の在庫機械",
    subtitle:
      "実在庫・実写真。最新の状態レポートとテスト動画をご請求ください。",
    inquire: "引合",
    all: "すべての機械を見る",
  },
  categories: {
    badge: "種類別",
    title: "機械の種類を探す",
    subtitle:
      "シンプルなねじヘッダーから6段式複雑形状フォーマーまで。",
    items: [
      "ナットフォーマー",
      "ボルトヘッダー",
      "1ダイ2ブロー",
      "2ダイ4ブロー",
      "3ダイ3ブロー",
      "4ダイ4ブロー",
      "5ダイ5ブロー",
      "6ダイ6ブロー",
    ],
  },
  brands: {
    badge: "取扱ブランド",
    title: "取り扱いブランド",
    subtitle: "信頼の中国製と精密な日本製の機械。",
    originLabel: "原産",
  },
  whyUs: {
    badge: "FUSENの強み",
    title: "安心して中古機械を購入",
    subtitle: "すべての機械を誠実に試験し、経験豊富なチームが輸出します。",
    items: [
      {
        title: "支払い前の通電テスト",
        desc: "動作中の機械を見て、音を聞き、実際の公差を動画または現地で確認できます。",
      },
      {
        title: "誠実な状態開示",
        desc: "摩耗、漏れ、修理歴を正直にお伝えします。隠れた問題はありません。",
      },
      {
        title: "輸出経験",
        desc: "数百台の出荷実績。通関書類と安全な積込みを処理します。",
      },
      {
        title: "競争力のある価格",
        desc: "仲介業者のない直接在庫。年式と状態に応じた適正価格。",
      },
    ],
  },
  testimonials: {
    badge: "お客様の声",
    title: "海外バイヤーに信頼されています",
    items: [
      {
        quote:
          "2ダイ4ブローはテスト動画どおりに届きました。据付サポートも迅速でした。",
        name: "Ahmed R.",
        role: "ファスナー工場（トルコ）",
      },
      {
        quote:
          "適正価格で良い機械です。FUSENは輸出書類をスムーズに処理してくれました。",
        name: "Carlos M.",
        role: "機械商（ブラジル）",
      },
      {
        quote: "ナットフォーマーを3台購入しました。すべて正直に試験されていました。",
        name: "D. Kowalski",
        role: "ファスナーメーカー（ポーランド）",
      },
    ],
  },
  contact: {
    badge: "お問い合わせ",
    title: "お問い合わせ",
    subtitle:
      "必要な機械の型式と仕様をお知らせください。24時間以内に返信します。",
    whatsapp: "WhatsApp",
    email: "メール",
    chatBtn: "WhatsAppで相談",
    emailBtn: "メールを送る",
    nameLabel: "お名前",
    emailLabel: "メールアドレス",
    msgLabel: "必要な機械をお知らせください",
    namePh: "山田太郎",
    emailPh: "taro@example.com",
    msgPh: "例：Sijin 105S ナットフォーマー、M6～M10、2017年式以降",
    submit: "引合を送る",
    sending: "送信中...",
  },
  footer: {
    desc: "点検済み中古ナットフォーマー、ボルトヘッダー、ねじフォーマーのサプライヤー。中国から世界へ輸出。",
    productsTitle: "機械",
    companyTitle: "会社",
    rights: "All rights reserved.",
  },
};

// ------------------------------------------------------------
// Korean
// ------------------------------------------------------------
export const ko: DeepPartial<Translation> = {
  nav: {
    home: "홈",
    products: "기계",
    categories: "카테고리",
    brands: "브랜드",
    whyUs: "선택 이유",
    inquiry: "문의",
    contact: "연락처",
    cta: "견적 요청",
  },
  hero: {
    badge: "믿을 수 있는 중고 파스너 기계",
    accent: "중고 너트·볼트용",
    title: "냉간 헤딩기",
    subtitle:
      "검사와 시운전을 마친 중고 너트 포머, 볼트 헤더, 나사 기계. 전 세계 수출 및 설치 지원.",
    cta1: "견적 요청",
    cta2: "기계 둘러보기",
    stats: [
      { value: "15년+", label: "경력" },
      { value: "500대+", label: "인도 실적" },
      { value: "60개국+", label: "수출 국가" },
      { value: "98%", label: "만족도" },
    ],
  },
  services: {
    badge: "서비스",
    title: "종합 기계 서비스",
    subtitle: "기계 판매를 넘어 검사부터 양산까지 지원합니다.",
    items: [
      {
        title: "검사 및 정비",
        desc: "모든 기계는 전원을 켜고 소음과 정밀도를 확인한 후 납품 전 정비합니다.",
      },
      {
        title: "세계 수출 및 운송",
        desc: "수출 서류 일체, 컨테이너 적재, 가장 가까운 항구까지 해상 운송을 처리합니다.",
      },
      {
        title: "설치 및 시운전",
        desc: "금형 설정과 안정적인 양산을 위해 원격 지도 또는 현장 지원을 제공합니다.",
      },
      {
        title: "부품 및 사후 관리",
        desc: "소모 부품, 금형 공급, 구매 후에도 오랫동안 기술 지원을 제공합니다.",
      },
    ],
  },
  products: {
    badge: "보유 기계",
    title: "현재 재고 기계",
    subtitle: "실재고, 실사진. 최신 상태 보고서와 테스트 영상을 요청하세요.",
    inquire: "문의",
    all: "전체 기계 보기",
  },
  categories: {
    badge: "유형별",
    title: "기계 유형 찾기",
    subtitle: "단순 나사 헤더부터 6단 복합 형상 포머까지.",
    items: [
      "너트 냉간 포머",
      "볼트 헤딩기",
      "1다이 2블로우",
      "2다이 4블로우",
      "3다이 3블로우",
      "4다이 4블로우",
      "5다이 5블로우",
      "6다이 6블로우",
    ],
  },
  brands: {
    badge: "취급 브랜드",
    title: "취급 브랜드",
    subtitle: "믿을 수 있는 중국 기계와 정밀한 일본 기계.",
    originLabel: "원산지",
  },
  whyUs: {
    badge: "FUSEN의 강점",
    title: "안심하고 중고 기계 구매",
    subtitle: "모든 기계를 솔직하게 테스트하고 숙련된 팀이 수출합니다.",
    items: [
      {
        title: "결제 전 전원 테스트",
        desc: "가동 중인 기계를 보고 소리를 듣고 실제 공차를 영상 또는 현장에서 확인하세요.",
      },
      {
        title: "솔직한 상태 고지",
        desc: "마모, 누유, 수리 이력을 정직하게 알려드립니다. 숨겨진 문제 없음.",
      },
      {
        title: "수출 경험",
        desc: "수백 대 출하 실적. 통관 서류와 안전한 적재를 처리합니다.",
      },
      {
        title: "경쟁력 있는 가격",
        desc: "중개상 없는 직접 재고. 연식과 상태에 따른 공정한 가격.",
      },
    ],
  },
  testimonials: {
    badge: "고객 후기",
    title: "해외 바이어의 신뢰",
    items: [
      {
        quote:
          "2다이 4블로우는 테스트 영상 그대로 도착했습니다. 설치 지원도 빨랐습니다.",
        name: "Ahmed R.",
        role: "파스너 공장, 터키",
      },
      {
        quote:
          "공정한 가격에 좋은 기계입니다. FUSEN이 수출 서류를 매끄럽게 처리했습니다.",
        name: "Carlos M.",
        role: "기계 무역상, 브라질",
      },
      {
        quote: "너트 포머 3대를 구매했습니다. 모든 기계가 솔직하게 검사되었습니다.",
        name: "D. Kowalski",
        role: "파스너 제조사, 폴란드",
      },
    ],
  },
  contact: {
    badge: "연락처",
    title: "연락하기",
    subtitle: "필요한 기계 모델과 사양을 알려주세요. 24시간 이내 답변드립니다.",
    whatsapp: "WhatsApp",
    email: "이메일",
    chatBtn: "WhatsApp 채팅",
    emailBtn: "이메일 보내기",
    nameLabel: "성함",
    emailLabel: "이메일 주소",
    msgLabel: "필요한 기계를 알려주세요",
    namePh: "홍길동",
    emailPh: "gildong@example.com",
    msgPh: "예: Sijin 105S 너트 포머, M6–M10, 2017년 이후",
    submit: "문의 보내기",
    sending: "전송 중...",
  },
  footer: {
    desc: "검사 완료한 중고 너트 포머, 볼트 헤더, 나사 기계 공급업체. 중국에서 전 세계로 수출.",
    productsTitle: "기계",
    companyTitle: "회사",
    rights: "All rights reserved.",
  },
};

// ------------------------------------------------------------
// Spanish
// ------------------------------------------------------------
export const es: DeepPartial<Translation> = {
  nav: {
    home: "Inicio",
    products: "Máquinas",
    categories: "Categorías",
    brands: "Marcas",
    whyUs: "Por qué nosotros",
    inquiry: "Consulta",
    contact: "Contacto",
    cta: "Pedir cotización",
  },
  hero: {
    badge: "Maquinaria de fijación usada confiable",
    accent: "Máquinas usadas para tuercas y tornillos",
    title: "Estampadoras en frío",
    subtitle:
      "Conformadoras de tuercas, cabezales de tornillo y máquinas para roscas usados, inspeccionados y probados. Exportación mundial con soporte de instalación.",
    cta1: "Pedir cotización",
    cta2: "Ver máquinas",
    stats: [
      { value: "15+", label: "años de experiencia" },
      { value: "500+", label: "máquinas entregadas" },
      { value: "60+", label: "países de exportación" },
      { value: "98%", label: "satisfacción" },
    ],
  },
  services: {
    badge: "Servicios",
    title: "Servicio integral de maquinaria",
    subtitle:
      "Más que vender máquinas: lo acompañamos desde la inspepción hasta la producción.",
    items: [
      {
        title: "Inspección y reacondicionamiento",
        desc: "Cada máquina se enciende, se revisa el ruido y la precisión, y se repara antes de la entrega.",
      },
      {
        title: "Exportación y envío mundial",
        desc: "Documentación de exportación completa, carga en contenedor y flete marítimo hasta su puerto.",
      },
      {
        title: "Instalación y puesta en marcha",
        desc: "Asistencia remota o in situ para ajustar los troqueles y lograr producción estable.",
      },
      {
        title: "Repuestos y posventa",
        desc: "Piezas de desgaste, suministro de troqueles y soporte técnico tras la compra.",
      },
    ],
  },
  products: {
    badge: "Disponibles",
    title: "Máquinas en stock ahora",
    subtitle:
      "Inventario real, fotos reales. Solicite el informe de estado y videos de prueba.",
    inquire: "Consultar",
    all: "Ver todas las máquinas",
  },
  categories: {
    badge: "Por tipo",
    title: "Encuentre su tipo de máquina",
    subtitle:
      "Desde cabezales simples de tornillo hasta conformadoras de seis estaciones.",
    items: [
      "Conformadoras de tuercas",
      "Cabezales para pernos",
      "1 dado 2 golpes",
      "2 dados 4 golpes",
      "3 dados 3 golpes",
      "4 dados 4 golpes",
      "5 dados 5 golpes",
      "6 dados 6 golpes",
    ],
  },
  brands: {
    badge: "Marcas",
    title: "Marcas que manejamos",
    subtitle: "Máquinas chinas confiables y japonesas de precisión.",
    originLabel: "Origen",
  },
  whyUs: {
    badge: "Por qué FUSEN",
    title: "Compre maquinaria usada con confianza",
    subtitle:
      "Cada máquina se prueba con honestidad y la exporta un equipo experimentado.",
    items: [
      {
        title: "Prueba encendida antes de pagar",
        desc: "Vea la máquina funcionando, escúchela y compruebe tolerancias reales por video o en persona.",
      },
      {
        title: "Estado informado con honestidad",
        desc: "Informamos desgaste, fugas y reparaciones con sinceridad. Sin problemas ocultos.",
      },
      {
        title: "Experiencia en exportación",
        desc: "Cientos de máquinas enviadas; gestionamos documentos aduaneros y carga segura.",
      },
      {
        title: "Precios competitivos",
        desc: "Stock directo sin intermediarios, precio justo según año y estado.",
      },
    ],
  },
  testimonials: {
    badge: "Testimonios",
    title: "Con la confianza de compradores en el extranjero",
    items: [
      {
        quote:
          "La máquina de 2 dados 4 golpes llegó exactamente como en el video de prueba. El soporte fue rápido.",
        name: "Ahmed R.",
        role: "Fábrica de fijación, Turquía",
      },
      {
        quote:
          "Buenas máquinas a precios justos. FUSEN tramitó toda la documentación de exportación sin problemas.",
        name: "Carlos M.",
        role: "Comerciante de maquinaria, Brasil",
      },
      {
        quote:
          "He comprado tres conformadoras de tuercas. Todas se probaron con honestidad.",
        name: "D. Kowalski",
        role: "Fabricante de fijación, Polonia",
      },
    ],
  },
  contact: {
    badge: "Contacto",
    title: "Póngase en contacto",
    subtitle:
      "Indíquenos el modelo y las especificaciones que necesita. Respondemos en 24 horas.",
    whatsapp: "WhatsApp",
    email: "Correo",
    chatBtn: "Chatear por WhatsApp",
    emailBtn: "Enviar correo",
    nameLabel: "Su nombre",
    emailLabel: "Correo electrónico",
    msgLabel: "Cuéntenos qué máquina necesita",
    namePh: "Juan Pérez",
    emailPh: "juan@example.com",
    msgPh: "p. ej. conformadora Sijin 105S, M6–M10, año 2017+",
    submit: "Enviar consulta",
    sending: "Enviando...",
  },
  footer: {
    desc: "Proveedor de conformadoras de tuercas, cabezales de pernos y máquinas para roscas usados e inspeccionados, exportados desde China al mundo.",
    productsTitle: "Máquinas",
    companyTitle: "Empresa",
    rights: "Todos los derechos reservados.",
  },
};

// ------------------------------------------------------------
// Portuguese
// ------------------------------------------------------------
export const pt: DeepPartial<Translation> = {
  nav: {
    home: "Início",
    products: "Máquinas",
    categories: "Categorias",
    brands: "Marcas",
    whyUs: "Por que nós",
    inquiry: "Consulta",
    contact: "Contato",
    cta: "Pedir cotação",
  },
  hero: {
    badge: "Maquinário de fixação usado confiável",
    accent: "Máquinas usadas para porcas e parafusos",
    title: "Recalcadoras a frio",
    subtitle:
      "Conformadoras de porcas, recalcadoras de parafusos e máquinas de rosca usadas, inspecionadas e testadas. Exportação mundial com suporte de instalação.",
    cta1: "Pedir cotação",
    cta2: "Ver máquinas",
    stats: [
      { value: "15+", label: "anos de experiência" },
      { value: "500+", label: "máquinas entregues" },
      { value: "60+", label: "países de exportação" },
      { value: "98%", label: "satisfação" },
    ],
  },
  services: {
    badge: "Serviços",
    title: "Serviço completo de maquinário",
    subtitle:
      "Mais do que vender máquinas: acompanhamos você da inspeção à produção.",
    items: [
      {
        title: "Inspeção e recondicionamento",
        desc: "Cada máquina é ligada, verificada quanto a ruído e precisão e recondicionada antes da entrega.",
      },
      {
        title: "Exportação e frete mundial",
        desc: "Documentação de exportação completa, carregamento em contêiner e frete marítimo até seu porto.",
      },
      {
        title: "Instalação e comissionamento",
        desc: "Orientação remota ou suporte no local para ajustar matrizes e chegar à produção estável.",
      },
      {
        title: "Peças e pós-venda",
        desc: "Peças de desgaste, fornecimento de matrizes e suporte técnico após a compra.",
      },
    ],
  },
  products: {
    badge: "Disponíveis",
    title: "Máquinas em estoque agora",
    subtitle:
      "Estoque real, fotos reais. Solicite o laudo de estado e vídeos de teste.",
    inquire: "Consultar",
    all: "Ver todas as máquinas",
  },
  categories: {
    badge: "Por tipo",
    title: "Encontre seu tipo de máquina",
    subtitle:
      "De recalcadoras simples de parafuso a conformadoras complexas de seis estações.",
    items: [
      "Conformadoras de porcas",
      "Recalcadoras de parafusos",
      "1 matriz 2 golpes",
      "2 matrizes 4 golpes",
      "3 matrizes 3 golpes",
      "4 matrizes 4 golpes",
      "5 matrizes 5 golpes",
      "6 matrizes 6 golpes",
    ],
  },
  brands: {
    badge: "Marcas",
    title: "Marcas que trabalhamos",
    subtitle: "Máquinas chinesas confiáveis e japonesas de precisão.",
    originLabel: "Origem",
  },
  whyUs: {
    badge: "Por que a FUSEN",
    title: "Compre maquinário usado com confiança",
    subtitle:
      "Cada máquina é testada com honestidade e exportada por uma equipe experiente.",
    items: [
      {
        title: "Teste ligado antes do pagamento",
        desc: "Veja a máquina funcionando, ouça-a e confira tolerâncias reais por vídeo ou pessoalmente.",
      },
      {
        title: "Estado informado com honestidade",
        desc: "Relatamos desgaste, vazamentos e reparos com sinceridade. Sem problemas escondidos.",
      },
      {
        title: "Experiência em exportação",
        desc: "Centenas de máquinas enviadas; cuidamos de documentos aduaneiros e carregamento seguro.",
      },
      {
        title: "Preços competitivos",
        desc: "Estoque direto sem intermediários, preço justo conforme ano e estado.",
      },
    ],
  },
  testimonials: {
    badge: "Depoimentos",
    title: "A confiança de compradores no exterior",
    items: [
      {
        quote:
          "A máquina de 2 matrizes 4 golpes chegou exatamente como no vídeo de teste. O suporte foi rápido.",
        name: "Ahmed R.",
        role: "Fábrica de fixação, Turquia",
      },
      {
        quote:
          "Boas máquinas a preços justos. A FUSEN cuidou de toda a documentação de exportação sem problemas.",
        name: "Carlos M.",
        role: "Comerciante de máquinas, Brasil",
      },
      {
        quote:
          "Comprei três conformadoras de porcas com eles. Todas foram testadas com honestidade.",
        name: "D. Kowalski",
        role: "Fabricante de fixação, Polônia",
      },
    ],
  },
  contact: {
    badge: "Contato",
    title: "Entre em contato",
    subtitle:
      "Diga-nos o modelo e as especificações de que precisa. Respondemos em 24 horas.",
    whatsapp: "WhatsApp",
    email: "E-mail",
    chatBtn: "Conversar no WhatsApp",
    emailBtn: "Enviar e-mail",
    nameLabel: "Seu nome",
    emailLabel: "Endereço de e-mail",
    msgLabel: "Conte-nos qual máquina precisa",
    namePh: "João Silva",
    emailPh: "joao@example.com",
    msgPh: "ex.: conformadora Sijin 105S, M6–M10, ano 2017+",
    submit: "Enviar consulta",
    sending: "Enviando...",
  },
  footer: {
    desc: "Fornecedor de conformadoras de porcas, recalcadoras de parafusos e máquinas de rosca usadas e inspecionadas, exportadas da China para o mundo.",
    productsTitle: "Máquinas",
    companyTitle: "Empresa",
    rights: "Todos os direitos reservados.",
  },
};

// ------------------------------------------------------------
// French
// ------------------------------------------------------------
export const fr: DeepPartial<Translation> = {
  nav: {
    home: "Accueil",
    products: "Machines",
    categories: "Catégories",
    brands: "Marques",
    whyUs: "Pourquoi nous",
    inquiry: "Demande",
    contact: "Contact",
    cta: "Demander un devis",
  },
  hero: {
    badge: "Machines de fixation d'occasion fiables",
    accent: "Machines d'occasion pour écrous et boulons",
    title: "Machines à frapper à froid",
    subtitle:
      "Formeuses d'écrous, frappeuses à boulons et machines à vis d'occasion, inspectées et testées. Exportation mondiale avec assistance à l'installation.",
    cta1: "Demander un devis",
    cta2: "Voir les machines",
    stats: [
      { value: "15+", label: "ans d'expérience" },
      { value: "500+", label: "machines livrées" },
      { value: "60+", label: "pays d'exportation" },
      { value: "98%", label: "satisfaction" },
    ],
  },
  services: {
    badge: "Services",
    title: "Service machines complet",
    subtitle:
      "Au-delà de la vente : nous vous accompagnons de l'inspection à la production.",
    items: [
      {
        title: "Inspection et remise en état",
        desc: "Chaque machine est mise sous tension, contrôlée pour le bruit et la précision, puis remise en état.",
      },
      {
        title: "Exportation et transport mondial",
        desc: "Documents d'exportation complets, chargement en conteneur et fret maritime jusqu'à votre port.",
      },
      {
        title: "Installation et mise en service",
        desc: "Assistance à distance ou sur site pour régler les filières et atteindre une production stable.",
      },
      {
        title: "Pièces et après-vente",
        desc: "Pièces d'usure, fourniture de filières et support technique longtemps après l'achat.",
      },
    ],
  },
  products: {
    badge: "Disponibles",
    title: "Machines en stock actuellement",
    subtitle:
      "Stock réel, photos réelles. Demandez le rapport d'état et les vidéos de test.",
    inquire: "Demander",
    all: "Voir toutes les machines",
  },
  categories: {
    badge: "Par type",
    title: "Trouvez votre type de machine",
    subtitle:
      "Des frappeuses simples aux formeuses complexes à six stations.",
    items: [
      "Formeuses à écrous",
      "Frappeuses à boulons",
      "1 matrice 2 frappes",
      "2 matrices 4 frappes",
      "3 matrices 3 frappes",
      "4 matrices 4 frappes",
      "5 matrices 5 frappes",
      "6 matrices 6 frappes",
    ],
  },
  brands: {
    badge: "Marques",
    title: "Marques que nous traitons",
    subtitle: "Machines chinoises fiables et machines japonaises de précision.",
    originLabel: "Origine",
  },
  whyUs: {
    badge: "Pourquoi FUSEN",
    title: "Achetez des machines d'occasion en confiance",
    subtitle:
      "Chaque machine est testée honnêtement et exportée par une équipe expérimentée.",
    items: [
      {
        title: "Test sous tension avant paiement",
        desc: "Voyez la machine tourner, écoutez-la et vérifiez les tolérances réelles en vidéo ou sur place.",
      },
      {
        title: "État communiqué honnêtement",
        desc: "Nous signalons l'usure, les fuites et les réparations franchement. Aucun problème caché.",
      },
      {
        title: "Expérience de l'exportation",
        desc: "Des centaines de machines expédiées ; nous gérons les documents douaniers et le chargement sûr.",
      },
      {
        title: "Prix compétitifs",
        desc: "Stock direct sans intermédiaires, prix juste selon l'année et l'état.",
      },
    ],
  },
  testimonials: {
    badge: "Témoignages",
    title: "La confiance d'acheteurs à l'étranger",
    items: [
      {
        quote:
          "La machine 2 matrices 4 frappes est arrivée exactement comme sur la vidéo de test. L'assistance fut rapide.",
        name: "Ahmed R.",
        role: "Usine de fixation, Turquie",
      },
      {
        quote:
          "De bonnes machines à prix justes. FUSEN a traité tous les documents d'exportation sans problème.",
        name: "Carlos M.",
        role: "Négociant en machines, Brésil",
      },
      {
        quote:
          "J'ai acheté trois formeuses d'écrous chez eux. Chaque unité fut testée honnêtement.",
        name: "D. Kowalski",
        role: "Fabricant de fixation, Pologne",
      },
    ],
  },
  contact: {
    badge: "Contact",
    title: "Contactez-nous",
    subtitle:
      "Indiquez-nous le modèle et les spécifications requis. Nous répondons sous 24 heures.",
    whatsapp: "WhatsApp",
    email: "E-mail",
    chatBtn: "Discuter sur WhatsApp",
    emailBtn: "Envoyer un e-mail",
    nameLabel: "Votre nom",
    emailLabel: "Adresse e-mail",
    msgLabel: "Dites-nous la machine dont vous avez besoin",
    namePh: "Jean Dupont",
    emailPh: "jean@example.com",
    msgPh: "ex. formeuse Sijin 105S, M6–M10, année 2017+",
    submit: "Envoyer la demande",
    sending: "Envoi...",
  },
  footer: {
    desc: "Fournisseur de formeuses d'écrous, frappeuses à boulons et machines à vis d'occasion inspectées, exportées de Chine vers le monde entier.",
    productsTitle: "Machines",
    companyTitle: "Société",
    rights: "Tous droits réservés.",
  },
};

// ------------------------------------------------------------
// Arabic
// ------------------------------------------------------------
export const ar: DeepPartial<Translation> = {
  nav: {
    home: "الرئيسية",
    products: "الماكينات",
    categories: "الفئات",
    brands: "العلامات",
    whyUs: "لماذا نحن",
    inquiry: "استفسار",
    contact: "اتصل بنا",
    cta: "اطلب عرض سعر",
  },
  hero: {
    badge: "ماكينات مستعملة موثوقة للمثبتات",
    accent: "ماكينات مستعملة للصواميل والمسامير",
    title: "مكابس التشكيل على البارد",
    subtitle:
      "مكابس صواميل ومسامير وماكينات لولبية مستعملة، مفحوصة ومختبرة. تصدير إلى العالم مع دعم التركيب.",
    cta1: "اطلب عرض سعر",
    cta2: "تصفح الماكينات",
    stats: [
      { value: "+15", label: "عامًا من الخبرة" },
      { value: "+500", label: "ماكينة تم تسليمها" },
      { value: "+60", label: "دولة تصدير" },
      { value: "98%", label: "نسبة الرضا" },
    ],
  },
  services: {
    badge: "خدماتنا",
    title: "خدمة متكاملة للماكينات",
    subtitle:
      "أكثر من مجرد بيع ماكينات — ندعمك من الفحص حتى الإنتاج.",
    items: [
      {
        title: "الفحص والتجديد",
        desc: "يتم تشغيل كل ماكينة وفحص ضجيجها ودقتها وتجديدها قبل التسليم.",
      },
      {
        title: "التصدير والشحن العالمي",
        desc: "مستندات تصدير كاملة وتحميل الحاويات والشحن البحري إلى أقرب ميناء إليك.",
      },
      {
        title: "التركيب والتشغيل",
        desc: "إرشاد عن بُعد أو دعم في الموقع لضبط القوالب والوصول إلى إنتاج مستقر.",
      },
      {
        title: "قطع الغيار وخدمة ما بعد البيع",
        desc: "قطع التآكل وتوريد القوالب والدعم الفني لفترة طويلة بعد الشراء.",
      },
    ],
  },
  products: {
    badge: "متوفر الآن",
    title: "ماكينات بالمخزون حاليًا",
    subtitle:
      "مخزون حقيقي وصور حقيقية. اطلب تقرير الحالة ومقاطع الفيديو التجريبية.",
    inquire: "استفسر",
    all: "عرض كل الماكينات",
  },
  categories: {
    badge: "حسب النوع",
    title: "اعثر على نوع الماكينة",
    subtitle: "من مكابس اللولب البسيطة إلى مكابس التشكيل ذات المحطات الست.",
    items: [
      "مكابس الصواميل",
      "مكابس المسامير",
      "قالب واحد ضربتان",
      "قالبان أربع ضربات",
      "ثلاثة قوالب ثلاث ضربات",
      "أربعة قوالب أربع ضربات",
      "خمسة قوالب خمس ضربات",
      "ستة قوالب ست ضربات",
    ],
  },
  brands: {
    badge: "العلامات التجارية",
    title: "العلامات التي نتعامل معها",
    subtitle: "ماكينات صينية موثوقة وماكينات يابانية دقيقة.",
    originLabel: "المنشأ",
  },
  whyUs: {
    badge: "لماذا FUSEN",
    title: "اشترِ ماكينات مستعملة بثقة",
    subtitle: "كل ماكينة تُختبَر بصدق ويصدّرها فريق ذو خبرة.",
    items: [
      {
        title: "اختبار التشغيل قبل الدفع",
        desc: "شاهد الماكينة تعمل واسمعها وتحقق من التفاوتات الفعلية عبر الفيديو أو شخصيًا.",
      },
      {
        title: "إفصاح صادق عن الحالة",
        desc: "نبلغ عن التآكل والتسريبات والإصلاحات بصدق. لا مشاكل مخفية.",
      },
      {
        title: "خبرة التصدير",
        desc: "مئات الماكينات المشحونة؛ نتعامل مع مستندات الجمارك والتحميل الآمن.",
      },
      {
        title: "أسعار تنافسية",
        desc: "مخزون مباشر بدون وسطاء، بسعر عادل حسب السنة والحالة.",
      },
    ],
  },
  testimonials: {
    badge: "آراء العملاء",
    title: "ثقة المشترين في الخارج",
    items: [
      {
        quote:
          "وصلت ماكينة القالبين وأربع ضربات تمامًا كما في الفيديو التجريبي. كان دعم التركيب سريعًا.",
        name: "أحمد ر.",
        role: "مصنع مثبتات، تركيا",
      },
      {
        quote:
          "ماكينات جيدة بأسعار عادلة. تعاملت FUSEN مع جميع أوراق التصدير بسلاسة.",
        name: "كارلوس م.",
        role: "تاجر ماكينات، البرازيل",
      },
      {
        quote: "اشتريت ثلاث مكابس صواميل منهم. تم اختبار كل وحدة بصدق.",
        name: "D. Kowalski",
        role: "مصنع مثبتات، بولندا",
      },
    ],
  },
  contact: {
    badge: "اتصل",
    title: "تواصل معنا",
    subtitle:
      "أخبرنا بموديل الماكينة والمواصفات التي تحتاجها. نرد خلال 24 ساعة.",
    whatsapp: "واتساب",
    email: "البريد",
    chatBtn: "تواصل عبر واتساب",
    emailBtn: "إرسال بريد",
    nameLabel: "الاسم",
    emailLabel: "البريد الإلكتروني",
    msgLabel: "أخبرنا باحتياجك من الماكينات",
    namePh: "John Smith",
    emailPh: "john@example.com",
    msgPh: "مثال: مكبس Sijin 105S للصواميل، M6–M10، إصدار 2017+",
    submit: "إرسال الاستفسار",
    sending: "جارٍ الإرسال...",
  },
  footer: {
    desc: "مورّد مكابس الصواميل والمسامير والماكينات اللولبية المستعملة المفحوصة، تُصدَّر من الصين إلى العالم.",
    productsTitle: "الماكينات",
    companyTitle: "الشركة",
    rights: "جميع الحقوق محفوظة.",
  },
};

// ------------------------------------------------------------
// German
// ------------------------------------------------------------
export const de: DeepPartial<Translation> = {
  nav: {
    home: "Startseite",
    products: "Maschinen",
    categories: "Kategorien",
    brands: "Marken",
    whyUs: "Warum wir",
    inquiry: "Anfrage",
    contact: "Kontakt",
    cta: "Angebot anfordern",
  },
  hero: {
    badge: "Zuverlässige gebrauchte Verbindungstechnik",
    accent: "Gebrauchte Muttern- & Bolzen-",
    title: "Kaltstauchmaschinen",
    subtitle:
      "Geprüfte und getestete gebrauchte Mutternformer, Bolzenstauch- und Schraubenmaschinen. Weltweiter Export mit Montageunterstützung.",
    cta1: "Angebot anfordern",
    cta2: "Maschinen ansehen",
    stats: [
      { value: "15+", label: "Jahre Erfahrung" },
      { value: "500+", label: "gelieferte Maschinen" },
      { value: "60+", label: "Exportländer" },
      { value: "98%", label: "Zufriedenheit" },
    ],
  },
  services: {
    badge: "Leistungen",
    title: "Kompletter Maschinenservice",
    subtitle:
      "Mehr als Maschinenverkauf — wir begleiten Sie von der Prüfung bis zur Produktion.",
    items: [
      {
        title: "Prüfung & Überholung",
        desc: "Jede Maschine wird eingeschaltet, auf Geräusch und Präzision geprüft und vor Lieferung überholt.",
      },
      {
        title: "Weltweiter Export & Versand",
        desc: "Vollständige Exportpapiere, Containerbeladung und Seefracht zu Ihrem Hafen.",
      },
      {
        title: "Montage & Inbetriebnahme",
        desc: "Fernanleitung oder Unterstützung vor Ort für Werkzeugeinrichtung und stabile Produktion.",
      },
      {
        title: "Ersatzteile & Kundendienst",
        desc: "Verschleißteile, Werkzeugversorgung und technischer Support lange nach dem Kauf.",
      },
    ],
  },
  products: {
    badge: "Verfügbar",
    title: "Maschinen aktuell auf Lager",
    subtitle:
      "Echter Bestand, echte Fotos. Fordern Sie Zustandsbericht und Testvideos an.",
    inquire: "Anfragen",
    all: "Alle Maschinen ansehen",
  },
  categories: {
    badge: "Nach Typ",
    title: "Finden Sie Ihren Maschinentyp",
    subtitle: "Vom einfachen Schraubenkopfstaucher bis zum Sechs-Stationen-Former.",
    items: [
      "Muttern-Kaltformer",
      "Bolzenstauchmaschinen",
      "1 Stempel 2 Schläge",
      "2 Stempel 4 Schläge",
      "3 Stempel 3 Schläge",
      "4 Stempel 4 Schläge",
      "5 Stempel 5 Schläge",
      "6 Stempel 6 Schläge",
    ],
  },
  brands: {
    badge: "Marken",
    title: "Von uns gehandelte Marken",
    subtitle: "Zuverlässige chinesische und präzise japanische Maschinen.",
    originLabel: "Herkunft",
  },
  whyUs: {
    badge: "Warum FUSEN",
    title: "Gebrauchtmaschinen sicher kaufen",
    subtitle: "Jede Maschine wird ehrlich getestet und erfahren exportiert.",
    items: [
      {
        title: "Probelauf vor Zahlung",
        desc: "Sehen Sie die Maschine laufen, hören Sie sie und prüfen Sie echte Toleranzen per Video oder vor Ort.",
      },
      {
        title: "Ehrliche Zustandsbeschreibung",
        desc: "Verschleiß, Lecks und Reparaturen nennen wir wahrheitsgemäß. Keine versteckten Mängel.",
      },
      {
        title: "Exporterfahrung",
        desc: "Hunderte versandter Maschinen; Zollpapiere und sichere Beladung erledigen wir.",
      },
      {
        title: "Wettbewerbsfähige Preise",
        desc: "Direktbestand ohne Vermittler, fairer Preis nach Baujahr und Zustand.",
      },
    ],
  },
  testimonials: {
    badge: "Referenzen",
    title: "Vertrauen von Käufern weltweit",
    items: [
      {
        quote:
          "Die 2-Stempel-4-Schlag-Maschine kam genau wie im Testvideo an. Die Montagehilfe war schnell.",
        name: "Ahmed R.",
        role: "Verbindungsfabrik, Türkei",
      },
      {
        quote:
          "Gute Maschinen zu fairen Preisen. FUSEN erledigte alle Exportpapiere reibungslos.",
        name: "Carlos M.",
        role: "Maschinenhändler, Brasilien",
      },
      {
        quote:
          "Ich habe drei Mutternformer gekauft. Jede Einheit wurde ehrlich getestet.",
        name: "D. Kowalski",
        role: "Verbindungshersteller, Polen",
      },
    ],
  },
  contact: {
    badge: "Kontakt",
    title: "Kontakt aufnehmen",
    subtitle:
      "Nennen Sie uns Modell und Spezifikationen. Wir antworten innerhalb von 24 Stunden.",
    whatsapp: "WhatsApp",
    email: "E-Mail",
    chatBtn: "WhatsApp-Chat",
    emailBtn: "E-Mail senden",
    nameLabel: "Ihr Name",
    emailLabel: "E-Mail-Adresse",
    msgLabel: "Nennen Sie Ihren Maschinenbedarf",
    namePh: "Max Mustermann",
    emailPh: "max@example.com",
    msgPh: "z. B. Sijin 105S Mutternformer, M6–M10, Baujahr 2017+",
    submit: "Anfrage senden",
    sending: "Senden...",
  },
  footer: {
    desc: "Anbieter geprüfter gebrauchter Mutternformer, Bolzenstauch- und Schraubenmaschinen, aus China in die ganze Welt exportiert.",
    productsTitle: "Maschinen",
    companyTitle: "Unternehmen",
    rights: "Alle Rechte vorbehalten.",
  },
};

// === MORE_LANGUAGES ===

export const translations: Record<string, DeepPartial<Translation>> = (() => {
  const base: Record<string, DeepPartial<Translation>> = {
    en,
    ru,
    ja,
    ko,
    es,
    pt,
    fr,
    ar,
    de,
    // === LANG_MAP ===
  };
  // Localized professional SEO copy (section intros + FAQ) is deep-merged
  // over the hand-written translations so missing keys still fall back.
  for (const code of Object.keys(seoContent)) {
    const patch = seoContent[code as LanguageCode];
    if (patch) {
      base[code] = deepMerge(base[code] ?? {}, patch);
    }
  }
  return base;
})();

function deepMerge<T extends object>(base: T, patch: DeepPartial<T>): T {
  const result: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const key of Object.keys(patch as object)) {
    const b = result[key];
    const p = (patch as Record<string, unknown>)[key];
    if (Array.isArray(p)) {
      result[key] = p;
    } else if (isPlainObjectValue(p) && isPlainObjectValue(b)) {
      result[key] = deepMerge(b as object, p as DeepPartial<typeof b>);
    } else if (p !== undefined) {
      result[key] = p;
    }
  }
  return result as T;
}

function isPlainObjectValue(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}