"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import Link from "next/link";
import { Navbar } from "@/components/fusen/Navbar";
import { Footer } from "@/components/fusen/Footer";
import { CONTACT_INFO } from "@/lib/fusen/data";

// ─── Pricing Data (based on China market research) ───
const TIERS = [
  {
    id: "standard",
    name: { en: "Standard", ru: "Стандарт", ja: "スタンダード", ko: "스탠다드", es: "Estándar", pt: "Padrão", fr: "Standard", ar: "قياسي" },
    desc: { en: "Professional translation & local guide service", ru: "Профессиональный перевод и сопровождение", ja: "プロフェッショナル通訳・ガイド", ko: "전문 통역 및 가이드 서비스", es: "Servicio profesional de traducción y guía", pt: "Serviço profissional de tradução e guia", fr: "Service professionnel de traduction et guide", ar: "خدمة ترجمة وإرشاد احترافية" },
    badge: { en: "Most Popular", ru: "Самый популярный", ja: "最も人気", ko: "가장 인기", es: "Más Popular", pt: "Mais Popular", fr: "Le Plus Populaire", ar: "الأكثر شعبية" },
    hourly: 40,
    daily: 220,
    unit: { en: "USD", ru: "USD", ja: "USD", ko: "USD", es: "USD", pt: "USD", fr: "USD", ar: "USD" },
  },
  {
    id: "premium",
    name: { en: "Premium", ru: "Премиум", ja: "プレミアム", ko: "프리미엄", es: "Premium", pt: "Premium", fr: "Premium", ar: "بريميوم" },
    desc: { en: "Specialized industry interpreter & business guide", ru: "Специализированный отраслевой переводчик", ja: "専門分野通訳・ビジネスガイド", ko: "전문 산업 통역사 및 비즈니스 가이드", es: "Intérprete especializado y guía de negocios", pt: "Intérprete especializado e guia de negócios", fr: "Interprète spécialisé et guide d'affaires", ar: "مترجم متخصص ومرشد أعمال" },
    badge: { en: "Best Value", ru: "Лучшее соотношение", ja: "ベストバリュー", ko: "최고 가치", es: "Mejor Valor", pt: "Melhor Custo", fr: "Meilleur Rapport", ar: "أفضل قيمة" },
    hourly: 65,
    daily: 380,
    unit: { en: "USD", ru: "USD", ja: "USD", ko: "USD", es: "USD", pt: "USD", fr: "USD", ar: "USD" },
  },
  {
    id: "enterprise",
    name: { en: "Enterprise", ru: "Корпоративный", ja: "エンタープライズ", ko: "엔터프라이즈", es: "Empresarial", pt: "Empresarial", fr: "Entreprise", ar: "مؤسسي" },
    desc: { en: "Senior interpreter + factory visit + full business support", ru: "Старший переводчик + посещение заводов", ja: "シニア通訳＋工場見学＋ビジネス支援", ko: "시니어 통역사 + 공장 방문 + 비즈니스 지원", es: "Intérprete senior + visita a fábrica + apoyo empresarial", pt: "Intérprete sênior + visita a fábrica + suporte empresarial", fr: "Interprète senior + visite d'usine + support commercial", ar: "مترجم أول + زيارة مصنع + دعم تجاري" },
    badge: { en: "For Business", ru: "Для бизнеса", ja: "ビジネス向け", ko: "비즈니스용", es: "Para Negocios", pt: "Para Negócios", fr: "Pour Affaires", ar: "للأعمال" },
    hourly: 100,
    daily: 600,
    unit: { en: "USD", ru: "USD", ja: "USD", ko: "USD", es: "USD", pt: "USD", fr: "USD", ar: "USD" },
  },
];

// Language-specific price adjustments
const LANGUAGES_TABLE = [
  {
    lang: { en: "English", ru: "Английский", ja: "英語", ko: "영어", es: "Inglés", pt: "Inglês", fr: "Anglais", ar: "الإنجليزية" },
    flag: "🇬🇧",
    level: { en: "Common", ru: "Распространённый", ja: "一般", ko: "일반", es: "Común", pt: "Comum", fr: "Courant", ar: "شائع" },
    hourly: 30,
    daily: 180,
    note: { en: "Most widely available", ru: "Наиболее распространён", ja: "最も広く利用可能", ko: "가장 널리 이용 가능", es: "Más ampliamente disponible", pt: "Mais amplamente disponível", fr: "Le plus largement disponible", ar: "الأكثر توفرًا" },
  },
  {
    lang: { en: "Russian", ru: "Русский", ja: "ロシア語", ko: "러시아어", es: "Ruso", pt: "Russo", fr: "Russe", ar: "الروسية" },
    flag: "🇷🇺",
    level: { en: "Common", ru: "Распространённый", ja: "一般", ko: "일반", es: "Común", pt: "Comum", fr: "Courant", ar: "شائع" },
    hourly: 35,
    daily: 200,
    note: { en: "Popular in Northeast & Beijing", ru: "Популярен на северо-востоке и в Пекине", ja: "東北部と北京で人気", ko: "동북부 및 베이징에서 인기", es: "Popular en el noreste y Pekín", pt: "Popular no nordeste e Pequim", fr: "Populaire dans le nord-est et Pékin", ar: "شائع في الشمال الشرقي وبكين" },
  },
  {
    lang: { en: "Japanese", ru: "Японский", ja: "日本語", ko: "일본어", es: "Japonés", pt: "Japonês", fr: "Japonais", ar: "اليابانية" },
    flag: "🇯🇵",
    level: { en: "Premium", ru: "Премиум", ja: "プレミアム", ko: "프리미엄", es: "Premium", pt: "Premium", fr: "Premium", ar: "ممتاز" },
    hourly: 50,
    daily: 300,
    note: { en: "High demand in Shanghai & Dalian", ru: "Высокий спрос в Шанхае и Даляне", ja: "上海と大連で高い需要", ko: "상하이 및 다롄에서 높은 수요", es: "Alta demanda en Shanghái y Dalian", pt: "Alta demanda em Xangai e Dalian", fr: "Forte demande à Shanghai et Dalian", ar: "طلب مرتفع في شنغهاي وداليان" },
  },
  {
    lang: { en: "Korean", ru: "Корейский", ja: "韓国語", ko: "한국어", es: "Coreano", pt: "Coreano", fr: "Coréen", ar: "الكورية" },
    flag: "🇰🇷",
    level: { en: "Premium", ru: "Премиум", ja: "プレミアム", ko: "프리미엄", es: "Premium", pt: "Premium", fr: "Premium", ar: "ممتاز" },
    hourly: 45,
    daily: 280,
    note: { en: "High demand in Shandong & Beijing", ru: "Высокий спрос в Шаньдуне и Пекине", ja: "山東省と北京で高い需要", ko: "산둥성 및 베이징에서 높은 수요", es: "Alta demanda en Shandong y Pekín", pt: "Alta demanda em Shandong e Pequim", fr: "Forte demande dans le Shandong et Pékin", ar: "طلب مرتفع في شاندونغ وبكين" },
  },
  {
    lang: { en: "Spanish", ru: "Испанский", ja: "スペイン語", ko: "스페인어", es: "Español", pt: "Espanhol", fr: "Espagnol", ar: "الإسبانية" },
    flag: "🇪🇸",
    level: { en: "Standard", ru: "Стандарт", ja: "スタンダード", ko: "스탠다드", es: "Estándar", pt: "Padrão", fr: "Standard", ar: "قياسي" },
    hourly: 40,
    daily: 250,
    note: { en: "Growing demand in Yiwu & Guangzhou", ru: "Растущий спрос в Иу и Гуанчжоу", ja: "義烏と広州で需要増加", ko: "이우 및 광저우에서 수요 증가", es: "Demanda creciente en Yiwu y Cantón", pt: "Demanda crescente em Yiwu e Cantão", fr: "Demande croissante à Yiwu et Canton", ar: "طلب متزايد في ييوو وقوانغتشو" },
  },
  {
    lang: { en: "Portuguese", ru: "Португальский", ja: "ポルトガル語", ko: "포르투갈어", es: "Portugués", pt: "Português", fr: "Portugais", ar: "البرتغالية" },
    flag: "🇧🇷",
    level: { en: "Standard", ru: "Стандарт", ja: "スタンダード", ko: "스탠다드", es: "Estándar", pt: "Padrão", fr: "Standard", ar: "قياسي" },
    hourly: 40,
    daily: 250,
    note: { en: "Demand in trade hubs (Yiwu, Guangzhou)", ru: "Спрос в торговых центрах (Иу, Гуанчжоу)", ja: "貿易拠点（義烏、広州）で需要", ko: "무역 허브(이우, 광저우)에서 수요", es: "Demanda en centros comerciales (Yiwu, Cantón)", pt: "Demanda em centros comerciais (Yiwu, Cantão)", fr: "Demande dans les pôles commerciaux (Yiwu, Canton)", ar: "طلب في المراكز التجارية (ييوو، قوانغتشو)" },
  },
  {
    lang: { en: "French", ru: "Французский", ja: "フランス語", ko: "프랑스어", es: "Francés", pt: "Francês", fr: "Français", ar: "الفرنسية" },
    flag: "🇫🇷",
    level: { en: "Premium", ru: "Премиум", ja: "プレミアム", ko: "프리미엄", es: "Premium", pt: "Premium", fr: "Premium", ar: "ممتاز" },
    hourly: 55,
    daily: 320,
    note: { en: "High demand in Shanghai & Beijing", ru: "Высокий спрос в Шанхае и Пекине", ja: "上海と北京で高い需要", ko: "상하이 및 베이징에서 높은 수요", es: "Alta demanda en Shanghái y Pekín", pt: "Alta demanda em Xangai e Pequim", fr: "Forte demande à Shanghai et Pékin", ar: "طلب مرتفع في شنغهاي وبكين" },
  },
  {
    lang: { en: "Arabic", ru: "Арабский", ja: "アラビア語", ko: "아랍어", es: "Árabe", pt: "Árabe", fr: "Arabe", ar: "العربية" },
    flag: "🇸🇦",
    level: { en: "Premium", ru: "Премиум", ja: "プレミアム", ko: "프리미엄", es: "Premium", pt: "Premium", fr: "Premium", ar: "ممتاز" },
    hourly: 60,
    daily: 350,
    note: { en: "High demand in Guangzhou, Yiwu & Beijing", ru: "Высокий спрос в Гуанчжоу, Иу и Пекине", ja: "広州、義烏、北京で高い需要", ko: "광저우, 이우, 베이징에서 높은 수요", es: "Alta demanda en Cantón, Yiwu y Pekín", pt: "Alta demanda em Cantão, Yiwu e Pequim", fr: "Forte demande à Canton, Yiwu et Pékin", ar: "طلب مرتفع في قوانغتشو وييوو وبكين" },
  },
  {
    lang: { en: "German", ru: "Немецкий", ja: "ドイツ語", ko: "독일어", es: "Alemán", pt: "Alemão", fr: "Allemand", ar: "الألمانية" },
    flag: "🇩🇪",
    level: { en: "Premium", ru: "Премиум", ja: "プレミアム", ko: "프리미엄", es: "Premium", pt: "Premium", fr: "Premium", ar: "ممتاز" },
    hourly: 55,
    daily: 320,
    note: { en: "Industrial & automotive sector demand", ru: "Спрос в промышленном и автомобильном секторах", ja: "産業・自動車分野で需要", ko: "산업 및 자동차 분야 수요", es: "Demanda en sectores industrial y automotriz", pt: "Demanda nos setores industrial e automotivo", fr: "Demande dans les secteurs industriel et automobile", ar: "طلب في القطاعين الصناعي والسيارات" },
  },
  {
    lang: { en: "Italian", ru: "Итальянский", ja: "イタリア語", ko: "이탈리아어", es: "Italiano", pt: "Italiano", fr: "Italien", ar: "الإيطالية" },
    flag: "🇮🇹",
    level: { en: "Premium", ru: "Премиум", ja: "プレミアム", ko: "프리미엄", es: "Premium", pt: "Premium", fr: "Premium", ar: "ممتاز" },
    hourly: 55,
    daily: 320,
    note: { en: "Fashion, design & luxury goods sector", ru: "Сектор моды, дизайна и предметов роскоши", ja: "ファッション・デザイン・高級品分野", ko: "패션, 디자인 및 명품 분야", es: "Sector de moda, diseño y artículos de lujo", pt: "Setor de moda, design e artigos de luxo", fr: "Secteur de la mode, du design et du luxe", ar: "قطاع الأزياء والتصميم والسلع الفاخرة" },
  },
  {
    lang: { en: "Thai", ru: "Тайский", ja: "タイ語", ko: "태국어", es: "Tailandés", pt: "Tailandês", fr: "Thaï", ar: "التايلاندية" },
    flag: "🇹🇭",
    level: { en: "Specialized", ru: "Специализированный", ja: "専門", ko: "전문", es: "Especializado", pt: "Especializado", fr: "Spécialisé", ar: "متخصص" },
    hourly: 45,
    daily: 280,
    note: { en: "Growing demand in tourism & trade", ru: "Растущий спрос в туризме и торговле", ja: "観光と貿易で需要増加", ko: "관광 및 무역 분야에서 수요 증가", es: "Demanda creciente en turismo y comercio", pt: "Demanda crescente em turismo e comércio", fr: "Demande croissante dans le tourisme et le commerce", ar: "طلب متزايد في السياحة والتجارة" },
  },
  {
    lang: { en: "Indonesian", ru: "Индонезийский", ja: "インドネシア語", ko: "인도네시아어", es: "Indonesio", pt: "Indonésio", fr: "Indonésien", ar: "الإندونيسية" },
    flag: "🇮🇩",
    level: { en: "Specialized", ru: "Специализированный", ja: "専門", ko: "전문", es: "Especializado", pt: "Especializado", fr: "Spécialisé", ar: "متخصص" },
    hourly: 40,
    daily: 250,
    note: { en: "Demand in trade & manufacturing hubs", ru: "Спрос в торговых и производственных центрах", ja: "貿易・製造拠点で需要", ko: "무역 및 제조 허브에서 수요", es: "Demanda en centros comerciales y manufactureros", pt: "Demanda em centros comerciais e industriais", fr: "Demande dans les pôles commerciaux et industriels", ar: "طلب في مراكز التجارة والتصنيع" },
  },
  {
    lang: { en: "Turkish", ru: "Турецкий", ja: "トルコ語", ko: "터키어", es: "Turco", pt: "Turco", fr: "Turc", ar: "التركية" },
    flag: "🇹🇷",
    level: { en: "Specialized", ru: "Специализированный", ja: "専門", ko: "전문", es: "Especializado", pt: "Especializado", fr: "Spécialisé", ar: "متخصص" },
    hourly: 45,
    daily: 280,
    note: { en: "Growing sector in trade & textiles", ru: "Растущий сектор в торговле и текстиле", ja: "貿易と繊維で成長分野", ko: "무역 및 섬유 분야에서 성장", es: "Sector creciente en comercio y textiles", pt: "Setor crescente em comércio e têxteis", fr: "Secteur en croissance dans le commerce et le textile", ar: "قطاع متنامٍ في التجارة والمنسوجات" },
  },
  {
    lang: { en: "Hindi", ru: "Хинди", ja: "ヒンディー語", ko: "힌디어", es: "Hindi", pt: "Hindi", fr: "Hindi", ar: "الهندية" },
    flag: "🇮🇳",
    level: { en: "Specialized", ru: "Специализированный", ja: "専門", ko: "전문", es: "Especializado", pt: "Especializado", fr: "Spécialisé", ar: "متخصص" },
    hourly: 40,
    daily: 250,
    note: { en: "Growing demand in IT & trade sectors", ru: "Растущий спрос в IT и торговле", ja: "IT・貿易分野で需要増加", ko: "IT 및 무역 분야에서 수요 증가", es: "Demanda creciente en TI y comercio", pt: "Demanda crescente em TI e comércio", fr: "Demande croissante dans l'IT et le commerce", ar: "طلب متزايد في قطاعي تكنولوجيا المعلومات والتجارة" },
  },
  {
    lang: { en: "Persian (Farsi)", ru: "Персидский", ja: "ペルシア語", ko: "페르시아어", es: "Persa", pt: "Persa", fr: "Persan", ar: "الفارسية" },
    flag: "🇮🇷",
    level: { en: "Specialized", ru: "Специализированный", ja: "専門", ko: "전문", es: "Especializado", pt: "Especializado", fr: "Spécialisé", ar: "متخصص" },
    hourly: 45,
    daily: 280,
    note: { en: "Demand in trade & carpet industry", ru: "Спрос в торговле и ковровой промышленности", ja: "貿易とカーペット産業で需要", ko: "무역 및 카페트 산업에서 수요", es: "Demanda en comercio e industria de alfombras", pt: "Demanda no comércio e indústria de tapetes", fr: "Demande dans le commerce et l'industrie du tapis", ar: "طلب في التجارة وصناعة السجاد" },
  },
];

const ADD_ON_SERVICES = [
  {
    name: { en: "Airport Pickup & Transfer", ru: "Встреча в аэропорту и трансфер", ja: "空港送迎", ko: "공항 픽업 및 이동", es: "Recogida en aeropuerto y traslado", pt: "Busca no aeroporto e transfer", fr: "Prise en charge aéroport et transfert", ar: "استقبال من المطار وانتقال" },
    price: { en: "From $50", ru: "От $50", ja: "$50〜", ko: "$50부터", es: "Desde $50", pt: "A partir de $50", fr: "À partir de 50 $", ar: "من 50 دولارًا" },
  },
  {
    name: { en: "Factory Visit Coordination", ru: "Организация посещения заводов", ja: "工場見学コーディネート", ko: "공장 방문 코디네이션", es: "Coordinación de visita a fábrica", pt: "Coordenação de visita à fábrica", fr: "Coordination de visite d'usine", ar: "تنسيق زيارة المصنع" },
    price: { en: "From $120", ru: "От $120", ja: "$120〜", ko: "$120부터", es: "Desde $120", pt: "A partir de $120", fr: "À partir de 120 $", ar: "من 120 دولارًا" },
  },
  {
    name: { en: "Business Meeting Support", ru: "Поддержка деловых встреч", ja: "ビジネス会議サポート", ko: "비즈니스 미팅 지원", es: "Apoyo en reuniones de negocios", pt: "Suporte a reuniões de negócios", fr: "Soutien aux réunions d'affaires", ar: "دعم الاجتماعات التجارية" },
    price: { en: "From $80", ru: "От $80", ja: "$80〜", ko: "$80부터", es: "Desde $80", pt: "A partir de $80", fr: "À partir de 80 $", ar: "من 80 دولارًا" },
  },
  {
    name: { en: "Document Translation (per page)", ru: "Перевод документов (за страницу)", ja: "書類翻訳（1ページあたり）", ko: "문서 번역 (페이지당)", es: "Traducción de documentos (por página)", pt: "Tradução de documentos (por página)", fr: "Traduction de documents (par page)", ar: "ترجمة المستندات (لكل صفحة)" },
    price: { en: "From $15", ru: "От $15", ja: "$15〜", ko: "$15부터", es: "Desde $15", pt: "A partir de $15", fr: "À partir de 15 $", ar: "من 15 دولارًا" },
  },
  {
    name: { en: "Cultural Workshop & Experience", ru: "Культурный мастер-класс", ja: "文化体験ワークショップ", ko: "문화 체험 워크숍", es: "Taller cultural y experiencia", pt: "Oficina cultural e experiência", fr: "Atelier culturel et expérience", ar: "ورشة عمل ثقافية وتجربة" },
    price: { en: "From $60", ru: "От $60", ja: "$60〜", ko: "$60부터", es: "Desde $60", pt: "A partir de $60", fr: "À partir de 60 $", ar: "من 60 دولارًا" },
  },
];

// Language picker for the page
function getText(dict: Record<string, string>, lang: string): string {
  return dict[lang] || dict["en"] || "";
}

export default function PricingPage() {
  const { lang, t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F8F5F0] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#8B1A1A]/5 border border-[#8B1A1A]/10 px-4 py-1.5 text-sm font-medium text-[#8B1A1A] mb-4">
              {getText({
                en: "Transparent Pricing",
                ru: "Прозрачные цены",
                ja: "透明な料金",
                ko: "투명한 가격",
                es: "Precios Transparentes",
                pt: "Preços Transparentes",
                fr: "Tarifs Transparents",
                ar: "أسعار شفافة",
              }, lang)}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#1A1410] mb-4">
              {getText({
                en: "Translation & Guide Service Pricing",
                ru: "Цены на услуги перевода и сопровождения",
                ja: "翻訳・ガイドサービス料金",
                ko: "통역 및 가이드 서비스 요금",
                es: "Precios de servicios de traducción y guía",
                pt: "Preços de serviços de tradução e guia",
                fr: "Tarifs des services de traduction et de guide",
                ar: "أسعار خدمات الترجمة والإرشاد",
              }, lang)}
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {getText({
                en: "All prices are in USD and based on current market research across major Chinese cities. Prices may vary by city, season, and specific requirements. Contact us for a customized quote.",
                ru: "Все цены указаны в долларах США и основаны на текущих рыночных исследованиях в крупных городах Китая. Цены могут варьироваться в зависимости от города, сезона и конкретных требований.",
                ja: "料金はUSD表示で、中国主要都市の市場調査に基づいています。都市、季節、ご要望により変動します。お問い合わせください。",
                ko: "모든 가격은 USD 기준이며 중국 주요 도시의 시장 조사에 기반합니다. 도시, 시즌 및 특정 요구 사항에 따라 다를 수 있습니다.",
                es: "Todos los precios están en USD y basados en estudios de mercado actuales en las principales ciudades chinas. Los precios pueden variar según la ciudad, temporada y requisitos.",
                pt: "Todos os preços estão em USD e baseados em pesquisas de mercado atuais nas principais cidades chinesas. Os preços podem variar conforme a cidade, estação e requisitos.",
                fr: "Tous les prix sont en USD et basés sur des études de marché actuelles dans les grandes villes chinoises. Les prix peuvent varier selon la ville, la saison et les exigences.",
                ar: "جميع الأسعار بالدولار الأمريكي ومبنية على أبحاث السوق الحالية في المدن الصينية الكبرى. قد تختلف الأسعار حسب المدينة والموسم والمتطلبات.",
              }, lang)}
            </p>
          </div>

          {/* ═══════════ Service Tiers ═══════════ */}
          <section className="mb-20">
            <h2 className="font-serif text-3xl text-center text-[#1A1410] mb-3">
              {getText({
                en: "Service Packages",
                ru: "Пакеты услуг",
                ja: "サービスパッケージ",
                ko: "서비스 패키지",
                es: "Paquetes de servicios",
                pt: "Pacotes de serviços",
                fr: "Forfaits de services",
                ar: "باقات الخدمات",
              }, lang)}
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
              {getText({
                en: "Choose the package that fits your needs",
                ru: "Выберите пакет, который соответствует вашим потребностям",
                ja: "ニーズに合ったパッケージをお選びください",
                ko: "필요에 맞는 패키지를 선택하세요",
                es: "Elija el paquete que se adapte a sus necesidades",
                pt: "Escolha o pacote que atende às suas necessidades",
                fr: "Choisissez le forfait qui correspond à vos besoins",
                ar: "اختر الباقة التي تناسب احتياجاتك",
              }, lang)}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {TIERS.map((tier) => (
                <div
                  key={tier.id}
                  className={`relative rounded-2xl bg-white border-2 transition-all duration-300 hover:shadow-brand-hover ${
                    tier.id === "standard"
                      ? "border-[#C9A961] shadow-brand"
                      : "border-border hover:border-[#C9A961]/50"
                  }`}
                >
                  {tier.id === "standard" && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-block rounded-full bg-[#C9A961] px-4 py-1 text-xs font-bold text-white uppercase tracking-wider">
                        {getText(tier.badge, lang)}
                      </span>
                    </div>
                  )}
                  {tier.id === "premium" && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-block rounded-full bg-[#8B1A1A] px-4 py-1 text-xs font-bold text-white uppercase tracking-wider">
                        {getText(tier.badge, lang)}
                      </span>
                    </div>
                  )}
                  {tier.id === "enterprise" && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-block rounded-full bg-[#1A1410] px-4 py-1 text-xs font-bold text-white uppercase tracking-wider">
                        {getText(tier.badge, lang)}
                      </span>
                    </div>
                  )}
                  <div className="p-6 sm:p-8 pt-8">
                    <h3 className="font-serif text-2xl text-[#1A1410] mb-2">{getText(tier.name, lang)}</h3>
                    <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">{getText(tier.desc, lang)}</p>

                    {/* Pricing */}
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-4xl font-bold text-[#8B1A1A]">${tier.hourly}</span>
                      <span className="text-muted-foreground text-sm">
                        /{getText({ en: "hour", ru: "час", ja: "時間", ko: "시간", es: "hora", pt: "hora", fr: "heure", ar: "ساعة" }, lang)}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-8">
                      <span className="font-medium text-foreground">${tier.daily}</span>
                      {" / "}
                      {getText({
                        en: "day (8 hours)",
                        ru: "день (8 часов)",
                        ja: "日（8時間）",
                        ko: "일 (8시간)",
                        es: "día (8 horas)",
                        pt: "dia (8 horas)",
                        fr: "jour (8 heures)",
                        ar: "يوم (8 ساعات)",
                      }, lang)}
                    </div>

                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full text-center rounded-full py-3 font-semibold transition-all ${
                        tier.id === "standard"
                          ? "bg-[#8B1A1A] text-white hover:bg-[#A52A2A] hover:shadow-lg"
                          : tier.id === "premium"
                          ? "bg-[#C9A961] text-white hover:bg-[#B8943F] hover:shadow-lg"
                          : "bg-[#1A1410] text-white hover:bg-[#2C2420] hover:shadow-lg"
                      }`}
                    >
                      {getText({
                        en: "Book Now",
                        ru: "Заказать",
                        ja: "予約する",
                        ko: "예약하기",
                        es: "Reservar",
                        pt: "Reservar",
                        fr: "Réserver",
                        ar: "احجز الآن",
                      }, lang)}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════════ Language Price Table ═══════════ */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl text-[#1A1410] mb-3">
                {getText({
                  en: "Pricing by Language",
                  ru: "Цены по языкам",
                  ja: "言語別料金",
                  ko: "언어별 요금",
                  es: "Precios por idioma",
                  pt: "Preços por idioma",
                  fr: "Tarifs par langue",
                  ar: "الأسعار حسب اللغة",
                }, lang)}
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                {getText({
                  en: "Detailed rates for each language. All prices are per hour/per day (8h) for professional service.",
                  ru: "Детальные ставки для каждого языка. Все цены указаны за час/день (8ч) профессионального обслуживания.",
                  ja: "各言語の詳細料金。すべての料金はプロフェッショナルサービスの1時間/1日（8時間）あたりの価格です。",
                  ko: "각 언어별 상세 요금입니다. 모든 가격은 전문 서비스의 시간당/일당(8시간) 기준입니다.",
                  es: "Tarifas detalladas para cada idioma. Todos los precios son por hora/día (8h) de servicio profesional.",
                  pt: "Taxas detalhadas para cada idioma. Todos os preços são por hora/dia (8h) de serviço profissional.",
                  fr: "Tarifs détaillés pour chaque langue. Tous les prix sont par heure/jour (8h) de service professionnel.",
                  ar: "أسعار مفصلة لكل لغة. جميع الأسعار لكل ساعة/يوم (8 ساعات) من الخدمة المهنية.",
                }, lang)}
              </p>
            </div>

            {/* Table - Desktop */}
            <div className="hidden lg:block overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#1A1410]">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                      {getText({ en: "Language", ru: "Язык", ja: "言語", ko: "언어", es: "Idioma", pt: "Idioma", fr: "Langue", ar: "اللغة" }, lang)}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                      {getText({ en: "Level", ru: "Уровень", ja: "レベル", ko: "수준", es: "Nivel", pt: "Nível", fr: "Niveau", ar: "المستوى" }, lang)}
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-white">
                      {getText({ en: "Hourly Rate", ru: "Часовая ставка", ja: "時間料金", ko: "시간당 요금", es: "Tarifa por hora", pt: "Tarifa horária", fr: "Tarif horaire", ar: "السعر للساعة" }, lang)}
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-white">
                      {getText({ en: "Daily Rate (8h)", ru: "Дневная ставка (8ч)", ja: "日額料金（8時間）", ko: "일일 요금 (8시간)", es: "Tarifa diaria (8h)", pt: "Tarifa diária (8h)", fr: "Tarif journalier (8h)", ar: "السعر اليومي (8 ساعات)" }, lang)}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                      {getText({ en: "Notes", ru: "Примечания", ja: "備考", ko: "참고", es: "Notas", pt: "Notas", fr: "Notes", ar: "ملاحظات" }, lang)}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {LANGUAGES_TABLE.map((item, i) => (
                    <tr
                      key={item.lang.en}
                      className={`transition-colors hover:bg-[#F0EBE3]/50 ${
                        i < LANGUAGES_TABLE.length - 1 ? "border-b border-border" : ""
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{item.flag}</span>
                          <span className="font-medium text-foreground">{getText(item.lang, lang)}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex rounded-full px-3 py-0.5 text-xs font-medium ${
                          getText(item.level, lang).toLowerCase().includes("premium") || getText(item.level, lang).toLowerCase().includes("премиум") || getText(item.level, lang).toLowerCase().includes("プレミアム") || getText(item.level, lang).toLowerCase().includes("프리미엄")
                            ? "bg-[#C9A961]/10 text-[#8B6F2E]"
                            : getText(item.level, lang).toLowerCase().includes("specialized") || getText(item.level, lang).toLowerCase().includes("специализированный") || getText(item.level, lang).toLowerCase().includes("専門") || getText(item.level, lang).toLowerCase().includes("전문")
                            ? "bg-purple-50 text-purple-700"
                            : "bg-green-50 text-green-700"
                        }`}>
                          {getText(item.level, lang)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-lg font-bold text-[#8B1A1A]">${item.hourly}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-lg font-bold text-foreground">${item.daily}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground max-w-[240px]">
                        {getText(item.note, lang)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table - Mobile cards */}
            <div className="lg:hidden space-y-3">
              {LANGUAGES_TABLE.map((item) => (
                <div key={item.lang.en} className="rounded-xl border border-border bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{item.flag}</span>
                      <span className="font-medium text-foreground">{getText(item.lang, lang)}</span>
                    </div>
                    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      getText(item.level, lang).toLowerCase().includes("premium") || getText(item.level, lang).toLowerCase().includes("премиум")
                        ? "bg-[#C9A961]/10 text-[#8B6F2E]"
                        : getText(item.level, lang).toLowerCase().includes("specialized") || getText(item.level, lang).toLowerCase().includes("специализированный")
                        ? "bg-purple-50 text-purple-700"
                        : "bg-green-50 text-green-700"
                    }`}>
                      {getText(item.level, lang)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {getText({ en: "Hourly", ru: "Час", ja: "時間", ko: "시간당", es: "Por hora", pt: "Por hora", fr: "Horaire", ar: "بالساعة" }, lang)}:
                    </span>
                    <span className="font-bold text-[#8B1A1A]">${item.hourly}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="text-muted-foreground">
                      {getText({ en: "Daily (8h)", ru: "День (8ч)", ja: "日額（8時間）", ko: "일일 (8시간)", es: "Diario (8h)", pt: "Diário (8h)", fr: "Journalier (8h)", ar: "يومي (8 ساعات)" }, lang)}:
                    </span>
                    <span className="font-bold text-foreground">${item.daily}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{getText(item.note, lang)}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════════ Add-on Services ═══════════ */}
          <section className="mb-20">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-center text-[#1A1410] mb-3">
                {getText({
                  en: "Add-on Services",
                  ru: "Дополнительные услуги",
                  ja: "追加サービス",
                  ko: "추가 서비스",
                  es: "Servicios adicionales",
                  pt: "Serviços adicionais",
                  fr: "Services supplémentaires",
                  ar: "خدمات إضافية",
                }, lang)}
              </h2>
              <p className="text-center text-muted-foreground mb-10">
                {getText({
                  en: "Enhance your experience with these additional services",
                  ru: "Дополните свой опыт этими услугами",
                  ja: "これらの追加サービスで体験を充実",
                  ko: "이 추가 서비스로 경험을 향상하세요",
                  es: "Mejore su experiencia con estos servicios adicionales",
                  pt: "Melhore sua experiência com estes serviços adicionais",
                  fr: "Améliorez votre expérience avec ces services supplémentaires",
                  ar: "عزز تجربتك مع هذه الخدمات الإضافية",
                }, lang)}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ADD_ON_SERVICES.map((svc) => (
                  <div key={svc.name.en} className="flex items-center justify-between rounded-xl border border-border bg-white p-5 shadow-sm transition-all hover:border-[#C9A961]/50 hover:shadow-brand">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C9A961]/10">
                        <svg className="h-5 w-5 text-[#C9A961]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <span className="font-medium text-foreground text-sm">{getText(svc.name, lang)}</span>
                    </div>
                    <span className="text-sm font-bold text-[#8B1A1A]">{getText(svc.price, lang)}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════ Notes & CTA ═══════════ */}
          <section className="max-w-3xl mx-auto">
            <div className="rounded-2xl bg-[#1A1410] p-8 sm:p-10 text-center">
              <h2 className="font-serif text-3xl text-white mb-4">
                {getText({
                  en: "Need a Custom Quote?",
                  ru: "Нужен индивидуальный расчет?",
                  ja: "カスタム見積もりが必要ですか？",
                  ko: "맞춤 견적이 필요하신가요?",
                  es: "¿Necesita un presupuesto personalizado?",
                  pt: "Precisa de um orçamento personalizado?",
                  fr: "Besoin d'un devis personnalisé ?",
                  ar: "هل تحتاج إلى عرض أسعار مخصص؟",
                }, lang)}
              </h2>
              <p className="text-white/70 mb-8 max-w-lg mx-auto leading-relaxed">
                {getText({
                  en: "Every trip is unique. Contact us for a tailored quote based on your specific itinerary, languages, and requirements.",
                  ru: "Каждая поездка уникальна. Свяжитесь с нами для индивидуального расчета на основе вашего маршрута, языков и требований.",
                  ja: "すべての旅はユニークです。旅程、言語、ご要望に基づいた見積もりをご用意します。",
                  ko: "모든 여행은 독특합니다. 구체적인 일정, 언어 및 요구 사항에 따라 맞춤 견적을 제공합니다.",
                  es: "Cada viaje es único. Contáctenos para un presupuesto personalizado según su itinerario, idiomas y requisitos.",
                  pt: "Cada viagem é única. Contacte-nos para um orçamento personalizado com base no seu itinerário, idiomas e requisitos.",
                  fr: "Chaque voyage est unique. Contactez-nous pour un devis personnalisé basé sur votre itinéraire, vos langues et vos besoins.",
                  ar: "كل رحلة فريدة. اتصل بنا للحصول على عرض أسعار مخصص بناءً على خط سير رحلتك ولغاتك ومتطلباتك.",
                }, lang)}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 font-semibold text-white transition-all hover:bg-[#1EBE5A] hover:shadow-lg"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  {getText({
                    en: "Chat on WhatsApp",
                    ru: "Написать в WhatsApp",
                    ja: "WhatsAppで問い合わせ",
                    ko: "WhatsApp 문의",
                    es: "Chatear en WhatsApp",
                    pt: "Fale no WhatsApp",
                    fr: "Discuter sur WhatsApp",
                    ar: "تواصل عبر واتساب",
                  }, lang)}
                </a>
                <Link
                  href={"/plan"}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 font-semibold text-white transition-all hover:bg-white hover:text-[#1A1410]"
                >
                  {getText({
                    en: "Plan Your Trip",
                    ru: "Спланировать поездку",
                    ja: "旅行を計画する",
                    ko: "여행 계획하기",
                    es: "Planificar su viaje",
                    pt: "Planejar sua viagem",
                    fr: "Planifier votre voyage",
                    ar: "خطط لرحلتك",
                  }, lang)}
                </Link>
              </div>
            </div>
          </section>

          {/* ═══════════ Disclaimer ═══════════ */}
          <div className="mt-12 text-center">
            <p className="text-xs text-muted-foreground/60 max-w-2xl mx-auto leading-relaxed">
              {getText({
                en: "* Prices are indicative and based on market research. Actual rates may vary depending on city, season, duration, language rarity, and specific requirements. Peak season (April-October, Chinese New Year) may incur a 20-30% surcharge. Long-term bookings (5+ days) qualify for discounted rates. Contact us for a firm quote.",
                ru: "* Цены являются ориентировочными и основаны на рыночных исследованиях. Фактические ставки могут варьироваться в зависимости от города, сезона, продолжительности, редкости языка и конкретных требований. В высокий сезон (апрель-октябрь, китайский Новый год) может применяться надбавка 20-30%. Долгосрочные бронирования (5+ дней) дают право на скидки.",
                ja: "* 料金は目安であり、市場調査に基づいています。実際の料金は都市、季節、期間、言語の希少性、具体的な要件によって異なります。ピークシーズン（4月〜10月、旧正月）は20〜30％の追加料金がかかる場合があります。長期予約（5日以上）は割引料金の対象となります。",
                ko: "* 가격은 시장 조사에 기반한 참고 가격입니다. 실제 요금은 도시, 시즌, 기간, 언어 희소성 및 특정 요구 사항에 따라 다를 수 있습니다. 성수기(4월-10월, 중국 설날)에는 20-30%의 할증료가 부과될 수 있습니다. 장기 예약(5일 이상)은 할인 요금이 적용됩니다.",
                es: "* Los precios son indicativos y basados en estudios de mercado. Las tarifas reales pueden variar según la ciudad, temporada, duración, rareza del idioma y requisitos específicos. La temporada alta (abril-octubre, Año Nuevo chino) puede tener un recargo del 20-30%. Las reservas a largo plazo (5+ días) califican para tarifas con descuento.",
                pt: "* Os preços são indicativos e baseados em pesquisas de mercado. As taxas reais podem variar dependendo da cidade, estação, duração, raridade do idioma e requisitos específicos. A alta temporada (abril-outubro, Ano Novo Chinês) pode incorrer em sobretaxa de 20-30%. Reservas de longo prazo (5+ dias) têm direito a tarifas com desconto.",
                fr: "* Les prix sont indicatifs et basés sur des études de marché. Les tarifs réels peuvent varier selon la ville, la saison, la durée, la rareté de la langue et les exigences spécifiques. La haute saison (avril-octobre, Nouvel An chinois) peut entraîner un supplément de 20 à 30 %. Les réservations à long terme (5+ jours) bénéficient de tarifs réduits.",
                ar: "* الأسعار إرشادية ومبنية على أبحاث السوق. قد تختلف الأسعار الفعلية حسب المدينة والموسم والمدة وندرة اللغة والمتطلبات المحددة. قد يخضع موسم الذروة (أبريل-أكتوبر، رأس السنة الصينية) لرسوم إضافية بنسبة 20-30٪. الحجوزات طويلة الأجل (5+ أيام) تؤهل للحصول على أسعار مخفضة.",
              }, lang)}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}