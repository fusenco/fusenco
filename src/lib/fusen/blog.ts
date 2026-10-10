import type { LanguageCode } from "@/lib/i18n/translations";

export type PostType = "article" | "video";

export interface BlogPost {
  slug: string;
  type: PostType;
  date: string; // ISO date, e.g. "2026-10-10"
  /** Multilingual title. Falls back to "en" via the deep-merge consumer. */
  title: Partial<Record<LanguageCode, string>>;
  /** Multilingual short summary / meta description. */
  excerpt: Partial<Record<LanguageCode, string>>;
  /** Multilingual body paragraphs (articles). */
  body?: Partial<Record<LanguageCode, string[]>>;
  /** Video asset for video posts. */
  video?: {
    src: string;
    poster: string;
    caption: Partial<Record<LanguageCode, string>>;
  };
  /** Optional thumbnail for card layout. */
  thumbnail?: string;
  /** Featured flag (pinned to top of the list). */
  featured?: boolean;
}

export interface BlogContent {
  badge: Partial<Record<LanguageCode, string>>;
  title: Partial<Record<LanguageCode, string>>;
  subtitle: Partial<Record<LanguageCode, string>>;
  readMore: Partial<Record<LanguageCode, string>>;
  categories: {
    all: Partial<Record<LanguageCode, string>>;
    article: Partial<Record<LanguageCode, string>>;
    video: Partial<Record<LanguageCode, string>>;
  };
}

export function pickLang(record: Partial<Record<LanguageCode, string>>, lang: LanguageCode): string {
  return record[lang] ?? record.en ?? "";
}

export function pickLangArray(
  record: Partial<Record<LanguageCode, string[]>>,
  lang: LanguageCode
): string[] {
  return record[lang] ?? record.en ?? [];
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function isArticlePost(post: BlogPost): post is BlogPost & { body: Partial<Record<LanguageCode, string[]>> } {
  return post.type === "article" && !!post.body;
}

export const blogPostSlugs = () => BLOG_POSTS.map((p) => ({ slug: p.slug }));

export const BLOG_CONTENT: BlogContent = {
  badge: {
    en: "News & Blog",
    ru: "Новости и блог",
    ja: "ニュースとブログ",
    ko: "뉴스와 블로그",
    es: "Noticias y Blog",
    pt: "Notícias e Blog",
    fr: "Actualités et Blog",
    ar: "الأخبار والمدونة",
    de: "News und Blog",
  },
  title: {
    en: "Insights, Articles & Shop Floor Videos",
    ru: "Статьи, обзоры и видео с нашего завода",
    ja: "記事と工場のビデオ",
    ko: "기사와 공장 영상",
    es: "Artículos y vídeos de taller",
    pt: "Artigos e vídeos da fábrica",
    fr: "Articles et vidéos d'atelier",
    ar: "مقالات وفيديو من المصنع",
    de: "Artikel und Werkstattvideos",
  },
  subtitle: {
    en: "Real knowledge for buying used cold heading machinery: inspection guides, machine walkthroughs and behind-the-scenes videos from our workshop.",
    ru: "Реальные советы по покупке б/у холодновысадочного оборудования: руководства по осмотру, обзоры машин и видео из нашего цеха.",
    ja: "中古冷間圧造機械の購入に役立つ知識：点検ガイド、機械紹介、工場のビデオ。",
    ko: "중고 냉간 압조 기계 구매에 실제로 도움이 되는 지식：점검 가이드, 기계 소개, 공장 영상.",
    es: "Conocimiento real para comprar maquinaria de encabezado en frío usada: guías de inspección, recorridos y vídeos de taller.",
    pt: "Conhecimento real para comprar máquinas de forjamento a frio usadas: guias de inspeção, máquinas e vídeos da fábrica.",
    fr: "De vraies connaissances pour acheter des machines de refoulage à froid d'occasion : guides d'inspection, machines et vidéos d'atelier.",
    ar: "معرفة حقيقية لشراء آلات التشكيل بالدم البارد: أدلة الفحص وجودة الأجهزة وفيديو من المصنع.",
    de: "Echtes Wissen für den Kauf gebrauchter Kaltstauchmaschinen: Inspektionsratgeber, Maschinenvorstellungen und Werkstattvideos.",
  },
  readMore: {
    en: "Read article",
    ru: "Читать статью",
    ja: "記事を読む",
    ko: "기사 읽기",
    es: "Leer artículo",
    pt: "Ler artigo",
    fr: "Lire l'article",
    ar: "اقرأ المقال",
    de: "Artikel lesen",
  },
  categories: {
    all: { en: "All", ru: "Все", ja: "すべて", ko: "전체", es: "Todos", pt: "Todos", fr: "Tous", ar: "الكل", de: "Alle" },
    article: { en: "Articles", ru: "Статьи", ja: "記事", ko: "기사", es: "Artículos", pt: "Artigos", fr: "Articles", ar: "مقالات", de: "Artikel" },
    video: { en: "Videos", ru: "Видео", ja: "ビデオ", ko: "영상", es: "Vídeos", pt: "Vídeos", fr: "Vidéos", ar: "فيديو", de: "Videos" },
  },
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "we-tune-machines-to-deliver-real-products",
    type: "video",
    date: "2026-10-10",
    featured: true,
    title: {
      en: "We Don't Just Sell Machines — We Tune Them to Deliver Real Products",
      ru: "Мы не просто продаём станки — мы настраиваем их до реального продукта",
      ja: "機械を売るだけでは終わらない——実際の製品が出るところまで調整します",
      ko: "기계만 파는 것이 아닙니다 — 실제 제품이 나올 때까지 조정합니다",
      es: "No solo vendemos máquinas — las ajustamos para producir piezas reales",
      pt: "Não só vendemos máquinas — nós as ajustamos para produzir peças reais",
      fr: "Nous ne vendons pas que des machines — nous les réglons pour produire de vraies pièces",
      ar: "نحن لا نبيع الآلات فقط — بل نضبطها لإنتاج قطع حقيقية",
      de: "Wir verkaufen nicht nur Maschinen — wir stellen sie für echte Produkte ein",
    },
    excerpt: {
      en: "Watch a used nut cold header being powered on and test-run in our workshop, producing real parts for a customer before export.",
      ru: "Смотрите, как б/у гайковысадочный автомат выходит на рабочий режим и выпускает реальные детали для клиента перед отгрузкой.",
      ja: "中古ナット冷間圧造機が工場で稼働し、輸出前に実際の部品を生産する様子をご覧ください。",
      ko: "중고 너트 냉간 단조기가 공장에서 가동되어 수출 전에 실제 부품을 생산하는 모습을 확인하세요.",
      es: "Vea cómo una encabezadora de tuercas usada se enciende y prueba en nuestro taller, produciendo piezas reales antes de la exportación.",
      pt: "Veja como uma máquina de forjamento de porcas usada é ligada e testada em nossa fábrica, produzindo peças reais antes da exportação.",
      fr: "Regardez une refouleuse à froid d'occasion pour écrous démarrée et testée dans notre atelier, produisant de vraies pièces avant export.",
      ar: "شاهد كيف يتم تشغيل واختبار آلة تشكيل الصواميل المستعملة في مصنعنا، لإنتاج قطع حقيقية قبل التصدير.",
      de: "Sehen Sie, wie eine gebrauchte Muttern-Kaltstauchmaschine in unserer Werkstatt angeschaltet und getestet wird und echte Teile produziert.",
    },
    video: {
      src: "/videos/product-tuning-h264.mp4",
      poster: "/machines/cover-nut.jpg",
      caption: {
        en: "A sample run from our workshop — a used cold header producing real parts for a buyer.",
        ru: "Пробный прогон в нашем цехе — б/у холодновысадочный станок выпускает реальные детали для покупателя.",
        ja: "当社工場でのテストラン — 中古冷間圧造機が購入者向けに実際の部品を生産しています。",
        ko: "저희 공장에서의 시험 가동 — 중고 냉간 단조기가 구매자용 실제 부품을 생산합니다.",
        es: "Una prueba de funcionamiento en nuestro taller: una encabezadora usada produce piezas reales para un comprador.",
        pt: "Um teste em nossa fábrica: uma máquina usada produz peças reais para um comprador.",
        fr: "Un essai dans notre atelier : une refouleuse d'occasion produit de vraies pièces pour un acheteur.",
        ar: "تشغيل تجريبي في مصنعنا: آلة تشكيل مستعملة تنتج قطعًا حقيقية لمشترٍ.",
        de: "Ein Probelauf in unserer Werkstatt: Eine gebrauchte Kaltstauchmaschine produziert echte Teile für einen Käufer.",
      },
    },
    thumbnail: "/machines/cover-nut.jpg",
  },
  {
    slug: "how-to-inspect-a-used-cold-heading-machine-before-buying",
    type: "article",
    date: "2026-09-28",
    title: {
      en: "How to Inspect a Used Cold Heading Machine Before Buying",
      ru: "Как проверить б/у холодновысадочный станок перед покупкой",
      ja: "中古冷間圧造機を購入前に検査する方法",
      ko: "중고 냉간 압조 기계 구매 전 검사 방법",
      es: "Cómo inspeccionar una máquina de encabezado en frío usada antes de comprar",
      pt: "Como inspecionar uma máquina de forjamento a frio usada antes de comprar",
      fr: "Comment inspecter une machine de refoulage à froid d'occasion avant l'achat",
      ar: "كيفية فحص آلة تشكيل باردة مستعملة قبل الشراء",
      de: "Gebrauchte Kaltstauchmaschinen vor dem Kauf prüfen",
    },
    excerpt: {
      en: "A practical 7-point checklist covering tooling wear, ram play, oil leaks, motor and pusher condition — plus why a power-on test run should be non-negotiable.",
      ru: "Практическая проверка по 7 пунктам: износ оснастки, люфт ползуна, течи масла, состояние мотора и толкателя — и почему пробный запуск обязателен.",
      ja: "工具の摩耗、ラムのガタ、オイル漏れ、モーターとプッシャーの状態をチェックする実践的な7項目と、電源を入れた試運転が必要な理由。",
      ko: "금형 마모, 램 유격, 오일 누유, 모터와 푸셔 상태를 점검하는 실용적인 7가지 체크리스트와 시동 테스트가 필수인 이유.",
      es: "Una lista práctica de 7 puntos: desgaste de utillaje, holgura de la corredera, fugas de aceite, motor y empujador, y por qué la prueba en marcha es innegociable.",
      pt: "Uma lista prática de 7 pontos: desgaste de ferramentas, folga do êmbolo, vazamentos de óleo, motor e empurrador, e por que o teste em funcionamento é inegociável.",
      fr: "Une liste pratique en 7 points : usure de l'outillage, jeu du coulisseau, fuites d'huile, état du moteur et du poussoir, et pourquoi l'essai en marche est indispensable.",
      ar: "قائمة عملية من 7 نقاط: تآكل العدة، الخلوص في المكبس، تسرب الزيت، حالة المحرك والدافع — ولماذا يعتبر تشغيل الاختبار غير قابل للتفاوض.",
      de: "Eine praktische 7-Punkte-Checkliste: Werkzeugverschleiß, Spiel im Stößel, Öllecks, Motor- und Zuführerzustand — und warum ein Probelauf unverzichtbar ist.",
    },
    body: {
      en: [
        "Buying a used cold header is a high-value decision. A machine that looks clean can hide worn tooling, a fatigued pusher unit or uneven ram play — problems that only surface during an actual production run.",
        "Start with the tooling: check the punch and die for pitting, cracks or polishing marks. Excessive wear here means immediate replacement costs. Next, move the ram by hand and feel for vertical play — more than a few tenths of a millimetre tells you the guides need work.",
        "Look for oil leaks around the gearbox and pusher, listen for unusual knocking at idle, and inspect the motor and belt tension. Then, and this is the part many buyers skip: ask for a power-on test run. At FUSEN we switch every candidate machine on, run it and confirm it produces real parts before we ever quote it.",
      ],
    },
  },
  {
    slug: "new-vs-used-fastener-machinery-total-cost-of-ownership",
    type: "article",
    date: "2026-09-12",
    title: {
      en: "New vs Used Fastener Machinery: Total Cost of Ownership Compared",
      ru: "Новое или б/у оборудование для крепежа: сравнение совокупной стоимости владения",
      ja: "新品か中古か：ファスナー機械の総所有コスト比較",
      ko: "신품 vs 중고 체결구 기계: 총 소유 비용 비교",
      es: "Maquinaria para sujetadores nueva vs usada: comparación del costo total de propiedad",
      pt: "Máquinas para fixadores novas vs usadas: comparação do custo total de propriedade",
      fr: "Machines à fixations neuves ou d'occasion : comparaison du coût total de possession",
      ar: "معدات التثبيت الجديدة مقابل المستعملة: مقارنة التكلفة الإجمالية للملكية",
      de: "Neue vs. gebrauchte Verbindungselemente-Maschinen: Gesamtkostenvergleich",
    },
    excerpt: {
      en: "Beyond the sticker price: how line speed, upkeep, spare-part lead times and resale value shape the real economics of buying new or used cold heading machinery.",
      ru: "Не только цена на ценнике: скорость линии, обслуживание, сроки поставки запчастей и остаточная стоимость формируют реальную экономику покупки.",
      ja: "表示価格だけではありません。生産速度、維持費、部品の納期、再販価値が新品・中古の本当の経済性を左右します。",
      ko: "스티커 가격 너머: 생산 속도, 유지보수, 예비 부품 조달 기간, 재판매 가치가 신품·중고 구매의 실제 경제성을 결정합니다.",
      es: "Más allá del precio de etiqueta: velocidad de línea, mantenimiento, plazo de repuestos y valor de reventa moldean la economía real de comprar nueva o usada.",
      pt: "Além do preço de etiqueta: velocidade da linha, manutenção, prazo de peças de reposição e valor de revenda moldam a economia real da compra.",
      fr: "Au-delà du prix : la vitesse de ligne, la maintenance, les délais de pièces et la valeur de revente façonnent l'économie réelle de l'achat.",
      ar: "أبعد من السعر المعلن: سرعة الخط، والصيانة، ومهل قطع الغيار، وقيمة إعادة البيع تحدد الاقتصاد الحقيقي للشراء.",
      de: "Über den Preis hinaus: Liniengeschwindigkeit, Wartung, Ersatzteil-Lieferzeiten und Wiederverkaufswert prägen die tatsächliche Ökonomie des Kaufs.",
    },
    body: {
      en: [
        "The obvious comparison is purchase price — a used machine can cost a fraction of a new one. But total cost of ownership goes further: uptime, tooling availability, and how quickly you can bring a line into production.",
        "Used machines, in our experience, arrive with established tooling ecosystems and widely available spares, while honest suppliers stage a full power-on test so you know exactly — in parts per minute and real output — what you're getting.",
        "For a growing fastener workshop, a well-inspected used cold header often delivers the fastest payback. Reserve new machinery for brand-new products where the newest technical refinements genuinely justify the premium.",
      ],
    },
  },
];