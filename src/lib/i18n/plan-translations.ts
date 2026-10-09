// ============================================================
// FUSEN - Machine Purchase Inquiry translations
// English canonical; other languages deep-merge over English.
// ============================================================

export interface PlanTranslation {
  pageTitle: string;
  pageSubtitle: string;
  requiredNote: string;
  badge: string;
  sections: {
    info: string;
    machine: string;
    requirements: string;
    services: string;
    extra: string;
  };
  fields: {
    name: string;
    company: string;
    country: string;
    email: string;
    whatsapp: string;
    wechat: string;
    machineType: string;
    model: string;
    modelOther: string;
    station: string;
    diameter: string;
    length: string;
    product: string;
    brand: string;
    year: string;
    condition: string;
    quantity: string;
    budget: string;
    targetDate: string;
    shipping: string;
    install: string;
    customs: string;
    power: string;
    special: string;
    source: string;
    agree: string;
  };
  placeholders: {
    name: string;
    company: string;
    country: string;
    email: string;
    whatsapp: string;
    wechat: string;
    modelOther: string;
    diameter: string;
    length: string;
    product: string;
    quantity: string;
    special: string;
  };
  machineTypes: string[];
  models: string[];
  stations: string[];
  brandPrefs: string[];
  conditions: string[];
  budgets: string[];
  targetDates: string[];
  services: string[];
  sources: string[];
  submit: string;
  submitting: string;
  successTitle: string;
  successText: string;
  whatsappCta: string;
  backHome: string;
  newInquiry: string;
  agreeRequired: string;
}

export type DeepPartial<T> = T extends readonly (infer _U)[]
  ? T
  : T extends object
    ? { [P in keyof T]?: DeepPartial<T[P]> }
    : T;

// ------------------------------------------------------------
// English (canonical)
// ------------------------------------------------------------
export const en: PlanTranslation = {
  pageTitle: "Machine Purchase Inquiry",
  pageSubtitle:
    "Tell us the machine and specifications you need. We will send a detailed offer within 24 hours.",
  requiredNote: "* Required fields",
  badge: "Send your requirements for a detailed quote",
  sections: {
    info: "Your Information",
    machine: "Machine Requirements",
    requirements: "Purchase Preferences",
    services: "Additional Services",
    extra: "Other Information",
  },
  fields: {
    name: "Full Name",
    company: "Company Name",
    country: "Country",
    email: "Email Address",
    whatsapp: "WhatsApp / Phone",
    wechat: "WeChat ID (optional)",
    machineType: "Machine Type Needed",
    model: "Interested Models",
    modelOther: "Other model / specification",
    station: "Stations / Dies",
    diameter: "Max Wire Diameter (mm)",
    length: "Max Cut-off Length (mm)",
    product: "Product to Manufacture",
    brand: "Brand Preference",
    year: "Preferred Machine Year",
    condition: "Machine Condition",
    quantity: "Quantity",
    budget: "Purchase Budget (USD)",
    targetDate: "Expected Purchase Time",
    shipping: "Need Sea Freight",
    install: "Need Installation Support",
    customs: "Need Customs Clearance Help",
    power: "Local Power Requirement",
    special: "Special Requirements",
    source: "How did you find us?",
    agree: "I agree to be contacted about this inquiry and accept the privacy policy.",
  },
  placeholders: {
    name: "e.g. John Smith",
    company: "e.g. ABC Fastener Co., Ltd.",
    country: "e.g. Turkey, Brazil, India...",
    email: "john@example.com",
    whatsapp: "+90 5xx xxx xx xx",
    wechat: "wechat id",
    modelOther: "Enter other model or spec...",
    diameter: "e.g. 10",
    length: "e.g. 80",
    product: "e.g. M8 hex nuts, carriage bolts...",
    quantity: "e.g. 2",
    special: "Voltage, die sets, accessories, delivery terms...",
  },
  machineTypes: [
    "Nut Cold Heading Machine",
    "Bolt Heading Machine",
    "Screw Machine",
    "Thread Rolling Machine",
    "Part Former",
  ],
  models: [
    "11B6S (Nut Machine)",
    "14B6S (Nut Machine)",
    "14B5S (Nut Machine)",
    "17B6S (Nut Machine)",
    "19B6S (Nut Machine)",
    "24B6S / 24B6SL (Nut Machine)",
    "62S – 64S (Bolt Former)",
    "83S / 83L (Bolt Former)",
    "84S / 84SL (Bolt Former)",
    "10B2S / 13B3S (Bolt Former)",
    "133S / 134L (Bolt Former)",
    "163S – 165S (Bolt Former)",
    "204L / 203L (Bolt Former)",
    "254SL (Bolt Former)",
  ],
  stations: [
    "2-Station",
    "3-Station",
    "4-Station",
    "5-Station",
    "6-Station",
    "Multi-station (unsure)",
  ],
  brandPrefs: [
    "Sijin (思进)",
    "Chunzu (春日)",
    "Yeswin (联翔)",
    "Jernyao (正曜)",
    "BIAULI (标利)",
    "Tenggong (腾丰)",
    "ESSEBI (Italy)",
    "No preference",
  ],
  conditions: ["Fully refurbished", "Good working condition", "Running as-is"],
  budgets: [
    "Under $5,000",
    "$5,000 – $10,000",
    "$10,000 – $20,000",
    "$20,000 – $50,000",
    "$50,000+",
  ],
  targetDates: [
    "Immediately",
    "Within 1 month",
    "1 – 3 months",
    "Just researching",
  ],
  services: [
    "Sea freight to my port",
    "Installation & commissioning",
    "Customs clearance documents",
    "Spare die / punch sets",
    "Operator training",
  ],
  sources: [
    "Google",
    "WhatsApp",
    "Trade show",
    "Recommended by friend",
    "Social media",
  ],
  submit: "Send Inquiry",
  submitting: "Sending...",
  successTitle: "Inquiry Sent!",
  successText:
    "Thank you. Our team will review your requirements and reply within 24 hours with a detailed offer.",
  whatsappCta: "Chat on WhatsApp",
  backHome: "Back to Home",
  newInquiry: "Send Another Inquiry",
  agreeRequired: "Please agree to be contacted before submitting.",
};

// ------------------------------------------------------------
// Russian
// ------------------------------------------------------------
export const ru: DeepPartial<PlanTranslation> = {
  pageTitle: "Запрос на покупку станка",
  pageSubtitle:
    "Сообщите нужный станок и характеристики. Мы направим подробное предложение в течение 24 часов.",
  requiredNote: "* Обязательные поля",
  badge: "Отправьте требования для подробного расчёта",
  sections: {
    info: "Ваши данные",
    machine: "Требования к станку",
    requirements: "Условия покупки",
    services: "Дополнительные услуги",
    extra: "Прочая информация",
  },
  fields: {
    name: "Полное имя",
    company: "Название компании",
    country: "Страна",
    email: "Эл. почта",
    whatsapp: "WhatsApp / телефон",
    wechat: "WeChat ID (необязательно)",
    machineType: "Нужный тип станка",
    model: "Интересующие модели",
    modelOther: "Другая модель / характеристика",
    station: "Позиции / штампы",
    diameter: "Макс. диаметр проволоки (мм)",
    length: "Макс. длина отрезаемой заготовки (мм)",
    product: "Изделие для производства",
    brand: "Предпочтение по бренду",
    year: "Предпочтительный год станка",
    condition: "Состояние станка",
    quantity: "Количество",
    budget: "Бюджет (USD)",
    targetDate: "Ожидаемое время покупки",
    shipping: "Нужна морская доставка",
    install: "Нужна помощь в установке",
    customs: "Нужна помощь с таможней",
    power: "Требования к электропитанию",
    special: "Особые требования",
    source: "Как вы нас нашли?",
    agree: "Я согласен на связь по этому запросу и принимаю политику конфиденциальности.",
  },
  placeholders: {
    name: "напр., Иван Петров",
    company: "напр., ООО Крепёж",
    country: "напр., Турция, Бразилия, Индия...",
    email: "ivan@example.com",
    whatsapp: "+7 9xx xxx xx xx",
    wechat: "id wechat",
    modelOther: "Укажите другую модель или характеристику...",
    diameter: "напр., 10",
    length: "напр., 80",
    product: "напр., шестигранные гайки М8, болты...",
    quantity: "напр., 2",
    special: "Напряжение, комплекты штампов, аксессуары, условия поставки...",
  },
  conditions: ["Полностью восстановлен", "В хорошем рабочем состоянии", "Как есть, рабочий"],
  budgets: ["До $5 000", "$5 000 – $10 000", "$10 000 – $20 000", "$20 000 – $50 000", "$50 000+"],
  targetDates: ["Срочно", "В течение месяца", "1 – 3 месяца", "Просто изучаю"],
  services: ["Морская доставка до порта", "Монтаж и наладка", "Таможенные документы", "Комплекты штампов/пуансонов", "Обучение оператора"],
  sources: ["Google", "WhatsApp", "Выставка", "Рекомендация знакомого", "Соцсети"],
  submit: "Отправить запрос",
  submitting: "Отправка...",
  successTitle: "Запрос отправлен!",
  successText:
    "Спасибо. Наша команда изучит требования и ответит в течение 24 часов с подробным предложением.",
  whatsappCta: "Чат в WhatsApp",
  backHome: "На главную",
  newInquiry: "Отправить ещё запрос",
  agreeRequired: "Пожалуйста, подтвердите согласие на связь перед отправкой.",
};

// ------------------------------------------------------------
// Japanese
// ------------------------------------------------------------
export const ja: DeepPartial<PlanTranslation> = {
  pageTitle: "機械購入引合",
  pageSubtitle:
    "必要な機械と仕様をお知らせください。24時間以内に詳細なオファーをお送りします。",
  requiredNote: "* 必須項目",
  badge: "ご要件を送信いただくと詳細見積をご案内",
  sections: {
    info: "お客様情報",
    machine: "機械のご要件",
    requirements: "購入条件",
    services: "追加サービス",
    extra: "その他の情報",
  },
  fields: {
    name: "お名前",
    company: "会社名",
    country: "国",
    email: "メールアドレス",
    whatsapp: "WhatsApp / 電話",
    wechat: "WeChat ID（任意）",
    machineType: "必要な機械の種類",
    model: "ご希望モデル",
    modelOther: "その他のモデル / 仕様",
    station: "段数 / 金型",
    diameter: "最大線径（mm）",
    length: "最大切断長（mm）",
    product: "製造する製品",
    brand: "ブランド希望",
    year: "希望製造年",
    condition: "機械の状態",
    quantity: "台数",
    budget: "予算（USD）",
    targetDate: "購入予定時期",
    shipping: "海上輸送が必要",
    install: "据付サポートが必要",
    customs: "通関サポートが必要",
    power: "現地電源仕様",
    special: "特別なご要望",
    source: "当社をどこでお知りになりましたか？",
    agree: "この引合に関する連絡に同意し、プライバシーポリシーを承諾します。",
  },
  placeholders: {
    name: "例：山田太郎",
    company: "例：ABCファスナー株式会社",
    country: "例：トルコ、ブラジル、インド...",
    email: "taro@example.com",
    whatsapp: "+81 9x xxxx xxxx",
    wechat: "wechat id",
    modelOther: "その他のモデルや仕様を入力...",
    diameter: "例：10",
    length: "例：80",
    product: "例：M8六角ナット、蝶ボルト...",
    quantity: "例：2",
    special: "電圧、金型セット、付属品、取引条件...",
  },
  conditions: ["完全オーバーホール済み", "良好な稼働状態", "現状稼働品"],
  budgets: ["$5,000未満", "$5,000 – $10,000", "$10,000 – $20,000", "$20,000 – $50,000", "$50,000以上"],
  targetDates: ["すぐに", "1ヶ月以内", "1 – 3ヶ月", "調査段階"],
  services: ["仕向港まで海上輸送", "据付・試運転", "通関書類", "ダイ/パンチセット", "オペレーター研修"],
  sources: ["Google", "WhatsApp", "展示会", "知人の紹介", "SNS"],
  submit: "引合を送信",
  submitting: "送信中...",
  successTitle: "引合を送信しました！",
  successText:
    "ありがとうございます。ご要件を確認し、24時間以内に詳細オファーとともにご連絡します。",
  whatsappCta: "WhatsAppで相談",
  backHome: "ホームへ戻る",
  newInquiry: "別の引合を送る",
  agreeRequired: "送信前に連絡への同意をお願いします。",
};

// ------------------------------------------------------------
// Korean
// ------------------------------------------------------------
export const ko: DeepPartial<PlanTranslation> = {
  pageTitle: "기계 구매 문의",
  pageSubtitle:
    "필요한 기계와 사양을 알려주세요. 24시간 이내에 상세 견적을 보내드립니다.",
  requiredNote: "* 필수 항목",
  badge: "요구사항을 보내주시면 상세 견적을 안내드립니다",
  sections: {
    info: "고객 정보",
    machine: "기계 요구사항",
    requirements: "구매 조건",
    services: "추가 서비스",
    extra: "기타 정보",
  },
  fields: {
    name: "성함",
    company: "회사명",
    country: "국가",
    email: "이메일 주소",
    whatsapp: "WhatsApp / 전화",
    wechat: "WeChat ID (선택)",
    machineType: "필요한 기계 유형",
    model: "관심 모델",
    modelOther: "기타 모델 / 사양",
    station: "스테이션 / 다이",
    diameter: "최대 선경 (mm)",
    length: "최대 절단 길이 (mm)",
    product: "생산할 제품",
    brand: "브랜드 선호",
    year: "선호 제조연도",
    condition: "기계 상태",
    quantity: "수량",
    budget: "예산 (USD)",
    targetDate: "예상 구매 시기",
    shipping: "해상 운송 필요",
    install: "설치 지원 필요",
    customs: "통관 지원 필요",
    power: "현지 전원 사양",
    special: "특별 요구사항",
    source: "어떻게 저희를 찾으셨나요?",
    agree: "본 문의 관련 연락에 동의하고 개인정보 처리방침을 수락합니다.",
  },
  placeholders: {
    name: "예: 홍길동",
    company: "예: ABC파스너(주)",
    country: "예: 터키, 브라질, 인도...",
    email: "gildong@example.com",
    whatsapp: "+82 1x xxxx xxxx",
    wechat: "wechat id",
    modelOther: "기타 모델이나 사양 입력...",
    diameter: "예: 10",
    length: "예: 80",
    product: "예: M8 육각너트, 캐리지볼트...",
    quantity: "예: 2",
    special: "전압, 금형 세트, 부속품, 인도 조건...",
  },
  conditions: ["완전 정비 완료", "양호한 작동 상태", "현 상태 그대로 가동"],
  budgets: ["$5,000 미만", "$5,000 – $10,000", "$10,000 – $20,000", "$20,000 – $50,000", "$50,000 이상"],
  targetDates: ["즉시", "1개월 이내", "1 – 3개월", "알아보는 중"],
  services: ["항구까지 해상 운송", "설치 및 시운전", "통관 서류", "다이/펀치 세트", "작업자 교육"],
  sources: ["Google", "WhatsApp", "전시회", "지인 소개", "SNS"],
  submit: "문의 보내기",
  submitting: "전송 중...",
  successTitle: "문의가 전송되었습니다!",
  successText:
    "감사합니다. 담당 팀이 요구사항을 검토한 후 24시간 이내 상세 견적과 함께 답변드립니다.",
  whatsappCta: "WhatsApp 채팅",
  backHome: "홈으로",
  newInquiry: "다른 문의 보내기",
  agreeRequired: "전송 전 연락 동의를 확인해 주세요.",
};

// ------------------------------------------------------------
// Spanish
// ------------------------------------------------------------
export const es: DeepPartial<PlanTranslation> = {
  pageTitle: "Consulta de compra de máquina",
  pageSubtitle:
    "Indíquenos la máquina y las especificaciones que necesita. Enviaremos una oferta detallada en 24 horas.",
  requiredNote: "* Campos obligatorios",
  badge: "Envíe sus requisitos para un presupuesto detallado",
  sections: {
    info: "Sus datos",
    machine: "Requisitos de la máquina",
    requirements: "Preferencias de compra",
    services: "Servicios adicionales",
    extra: "Otra información",
  },
  fields: {
    name: "Nombre completo",
    company: "Nombre de la empresa",
    country: "País",
    email: "Correo electrónico",
    whatsapp: "WhatsApp / teléfono",
    wechat: "ID de WeChat (opcional)",
    machineType: "Tipo de máquina necesaria",
    model: "Modelos de interés",
    modelOther: "Otro modelo / especificación",
    station: "Estaciones / dados",
    diameter: "Diámetro máx. de alambre (mm)",
    length: "Longitud máx. de corte (mm)",
    product: "Producto a fabricar",
    brand: "Preferencia de marca",
    year: "Año preferido de la máquina",
    condition: "Estado de la máquina",
    quantity: "Cantidad",
    budget: "Presupuesto (USD)",
    targetDate: "Fecha prevista de compra",
    shipping: "Necesito flete marítimo",
    install: "Necesito soporte de instalación",
    customs: "Necesito ayuda aduanera",
    power: "Requisito de energía local",
    special: "Requisitos especiales",
    source: "¿Cómo nos encontró?",
    agree: "Acepto ser contactado sobre esta consulta y acepto la política de privacidad.",
  },
  placeholders: {
    name: "p. ej. Juan Pérez",
    company: "p. ej. ABC Fijación S.A.",
    country: "p. ej. Turquía, Brasil, India...",
    email: "juan@example.com",
    whatsapp: "+52 1 xx xxxx xxxx",
    wechat: "id wechat",
    modelOther: "Introduzca otro modelo o especificación...",
    diameter: "p. ej. 10",
    length: "p. ej. 80",
    product: "p. ej. tuercas hexagonales M8, pernos carroceros...",
    quantity: "p. ej. 2",
    special: "Voltaje, juegos de dados, accesorios, términos de entrega...",
  },
  conditions: ["Totalmente reacondicionada", "Buen estado de funcionamiento", "Funciona tal cual"],
  budgets: ["Menos de $5.000", "$5.000 – $10.000", "$10.000 – $20.000", "$20.000 – $50.000", "$50.000+"],
  targetDates: ["Inmediatamente", "En 1 mes", "1 – 3 meses", "Solo investigando"],
  services: ["Flete marítimo a mi puerto", "Instalación y puesta en marcha", "Documentos aduaneros", "Juegos de dados/punzones", "Capacitación del operador"],
  sources: ["Google", "WhatsApp", "Feria comercial", "Recomendación de un amigo", "Redes sociales"],
  submit: "Enviar consulta",
  submitting: "Enviando...",
  successTitle: "¡Consulta enviada!",
  successText:
    "Gracias. Nuestro equipo revisará sus requisitos y responderá en 24 horas con una oferta detallada.",
  whatsappCta: "Chatear por WhatsApp",
  backHome: "Volver al inicio",
  newInquiry: "Enviar otra consulta",
  agreeRequired: "Acepte ser contactado antes de enviar.",
};

// ------------------------------------------------------------
// Portuguese
// ------------------------------------------------------------
export const pt: DeepPartial<PlanTranslation> = {
  pageTitle: "Consulta de compra de máquina",
  pageSubtitle:
    "Diga-nos a máquina e as especificações necessárias. Enviaremos uma oferta detalhada em 24 horas.",
  requiredNote: "* Campos obrigatórios",
  badge: "Envie suas necessidades para um orçamento detalhado",
  sections: {
    info: "Seus dados",
    machine: "Requisitos da máquina",
    requirements: "Preferências de compra",
    services: "Serviços adicionais",
    extra: "Outras informações",
  },
  fields: {
    name: "Nome completo",
    company: "Nome da empresa",
    country: "País",
    email: "Endereço de e-mail",
    whatsapp: "WhatsApp / telefone",
    wechat: "ID WeChat (opcional)",
    machineType: "Tipo de máquina necessária",
    model: "Modelos de interesse",
    modelOther: "Outro modelo / especificação",
    station: "Estações / matrizes",
    diameter: "Diâmetro máx. do fio (mm)",
    length: "Comprimento máx. de corte (mm)",
    product: "Produto a fabricar",
    brand: "Preferência de marca",
    year: "Ano preferido da máquina",
    condition: "Estado da máquina",
    quantity: "Quantidade",
    budget: "Orçamento (USD)",
    targetDate: "Previsão de compra",
    shipping: "Preciso de frete marítimo",
    install: "Preciso de suporte de instalação",
    customs: "Preciso de ajuda aduaneira",
    power: "Requisito de energia local",
    special: "Requisitos especiais",
    source: "Como nos encontrou?",
    agree: "Concordo em ser contatado sobre esta consulta e aceito a política de privacidade.",
  },
  placeholders: {
    name: "ex.: João Silva",
    company: "ex.: ABC Fixação Ltda.",
    country: "ex.: Turquia, Brasil, Índia...",
    email: "joao@example.com",
    whatsapp: "+55 11 9xxxx xxxx",
    wechat: "id wechat",
    modelOther: "Digite outro modelo ou especificação...",
    diameter: "ex.: 10",
    length: "ex.: 80",
    product: "ex.: porcas sextavadas M8, parafusos...",
    quantity: "ex.: 2",
    special: "Tensão, jogos de matrizes, acessórios, condições de entrega...",
  },
  conditions: ["Totalmente recondicionada", "Bom estado de funcionamento", "Funciona como está"],
  budgets: ["Menos de $5.000", "$5.000 – $10.000", "$10.000 – $20.000", "$20.000 – $50.000", "$50.000+"],
  targetDates: ["Imediatamente", "Em 1 mês", "1 – 3 meses", "Apenas pesquisando"],
  services: ["Frete marítimo até meu porto", "Instalação e comissionamento", "Documentos aduaneiros", "Jogos de matrizes/punzões", "Treinamento do operador"],
  sources: ["Google", "WhatsApp", "Feira comercial", "Recomendação de amigo", "Redes sociais"],
  submit: "Enviar consulta",
  submitting: "Enviando...",
  successTitle: "Consulta enviada!",
  successText:
    "Obrigado. Nossa equipe analisará suas necessidades e responderá em 24 horas com uma oferta detalhada.",
  whatsappCta: "Conversar no WhatsApp",
  backHome: "Voltar ao início",
  newInquiry: "Enviar outra consulta",
  agreeRequired: "Concorde em ser contatado antes de enviar.",
};

// ------------------------------------------------------------
// French
// ------------------------------------------------------------
export const fr: DeepPartial<PlanTranslation> = {
  pageTitle: "Demande d'achat de machine",
  pageSubtitle:
    "Indiquez-nous la machine et les spécifications requises. Nous enverrons une offre détaillée sous 24 heures.",
  requiredNote: "* Champs obligatoires",
  badge: "Envoyez vos besoins pour un devis détaillé",
  sections: {
    info: "Vos coordonnées",
    machine: "Besoins en machine",
    requirements: "Préférences d'achat",
    services: "Services complémentaires",
    extra: "Autres informations",
  },
  fields: {
    name: "Nom complet",
    company: "Nom de l'entreprise",
    country: "Pays",
    email: "Adresse e-mail",
    whatsapp: "WhatsApp / téléphone",
    wechat: "ID WeChat (facultatif)",
    machineType: "Type de machine recherché",
    model: "Modèles qui vous intéressent",
    modelOther: "Autre modèle / spécification",
    station: "Stations / filières",
    diameter: "Diamètre max. du fil (mm)",
    length: "Longueur max. de coupe (mm)",
    product: "Produit à fabriquer",
    brand: "Marque préférée",
    year: "Année préférée de la machine",
    condition: "État de la machine",
    quantity: "Quantité",
    budget: "Budget (USD)",
    targetDate: "Délai d'achat prévu",
    shipping: "Fret maritime nécessaire",
    install: "Aide à l'installation nécessaire",
    customs: "Aide au dédouanement nécessaire",
    power: "Besoins en alimentation électrique",
    special: "Exigences particulières",
    source: "Comment nous avez-vous trouvés ?",
    agree: "J'accepte d'être contacté au sujet de cette demande et j'accepte la politique de confidentialité.",
  },
  placeholders: {
    name: "ex. Jean Dupont",
    company: "ex. ABC Fixation SARL",
    country: "ex. Turquie, Brésil, Inde...",
    email: "jean@example.com",
    whatsapp: "+33 6 xx xx xx xx",
    wechat: "id wechat",
    modelOther: "Saisissez un autre modèle ou une spécification...",
    diameter: "ex. 10",
    length: "ex. 80",
    product: "ex. écrous hexagonaux M8, boulons de carrosserie...",
    quantity: "ex. 2",
    special: "Tension, jeux de filières, accessoires, conditions de livraison...",
  },
  conditions: ["Entièrement remise en état", "Bon état de fonctionnement", "Fonctionne en l'état"],
  budgets: ["Moins de 5 000 $", "5 000 $ – 10 000 $", "10 000 $ – 20 000 $", "20 000 $ – 50 000 $", "50 000 $ +"],
  targetDates: ["Immédiatement", "Sous 1 mois", "1 – 3 mois", "Simple recherche"],
  services: ["Fret maritime jusqu'à mon port", "Installation et mise en service", "Documents douaniers", "Jeux de filières/poinçons", "Formation de l'opérateur"],
  sources: ["Google", "WhatsApp", "Salon professionnel", "Recommandation d'un ami", "Réseaux sociaux"],
  submit: "Envoyer la demande",
  submitting: "Envoi...",
  successTitle: "Demande envoyée !",
  successText:
    "Merci. Notre équipe examinera vos besoins et répondra sous 24 heures avec une offre détaillée.",
  whatsappCta: "Discuter sur WhatsApp",
  backHome: "Retour à l'accueil",
  newInquiry: "Envoyer une autre demande",
  agreeRequired: "Veuillez accepter d'être contacté avant d'envoyer.",
};

// ------------------------------------------------------------
// Arabic
// ------------------------------------------------------------
export const ar: DeepPartial<PlanTranslation> = {
  pageTitle: "طلب شراء ماكينة",
  pageSubtitle:
    "أخبرنا بالماكينة والمواصفات التي تحتاجها. سنرسل عرضًا تفصيليًا خلال 24 ساعة.",
  requiredNote: "* حقول مطلوبة",
  badge: "أرسل متطلباتك للحصول على عرض سعر تفصيلي",
  sections: {
    info: "بياناتك",
    machine: "متطلبات الماكينة",
    requirements: "تفضيلات الشراء",
    services: "خدمات إضافية",
    extra: "معلومات أخرى",
  },
  fields: {
    name: "الاسم الكامل",
    company: "اسم الشركة",
    country: "الدولة",
    email: "البريد الإلكتروني",
    whatsapp: "واتساب / هاتف",
    wechat: "معرف WeChat (اختياري)",
    machineType: "نوع الماكينة المطلوبة",
    model: "الموديلات المهتم بها",
    modelOther: "موديل / مواصفة أخرى",
    station: "المحطات / القوالب",
    diameter: "القطر الأقصى للسلك (مم)",
    length: "أقصى طول قطع (مم)",
    product: "المنتج المراد تصنيعه",
    brand: "تفضيل العلامة",
    year: "السنة المفضلة للماكينة",
    condition: "حالة الماكينة",
    quantity: "الكمية",
    budget: "ميزانية الشراء (USD)",
    targetDate: "الوقت المتوقع للشراء",
    shipping: "أحتاج شحنًا بحريًا",
    install: "أحتاج دعم التركيب",
    customs: "أحتاج مساعدة التخليص الجمركي",
    power: "متطلبات الكهرباء المحلية",
    special: "متطلبات خاصة",
    source: "كيف وجدتنا؟",
    agree: "أوافق على التواصل معي بخصوص هذا الطلب وأقبل سياسة الخصوصية.",
  },
  placeholders: {
    name: "مثال: أحمد محمد",
    company: "مثال: شركة المثبتات المحدودة",
    country: "مثال: تركيا، البرازيل، الهند...",
    email: "ahmed@example.com",
    whatsapp: "+90 5xx xxx xx xx",
    wechat: "معرف wechat",
    modelOther: "أدخل موديلًا أو مواصفة أخرى...",
    diameter: "مثال: 10",
    length: "مثال: 80",
    product: "مثال: صواميل سداسية M8، مسامير...",
    quantity: "مثال: 2",
    special: "الجهد الكهربائي، أطقم القوالب، الملحقات، شروط التسليم...",
  },
  conditions: ["مجددة بالكامل", "حالة تشغيل جيدة", "تعمل كما هي"],
  budgets: ["أقل من 5,000$", "5,000$ – 10,000$", "10,000$ – 20,000$", "20,000$ – 50,000$", "أكثر من 50,000$"],
  targetDates: ["فورًا", "خلال شهر", "1 – 3 أشهر", "أبحث فقط"],
  services: ["شحن بحري إلى مينائي", "تركيب وتشغيل", "مستندات التخليص الجمركي", "أطقم قوالب/بواش", "تدريب المشغل"],
  sources: ["Google", "واتساب", "معرض تجاري", "توصية صديق", "وسائل التواصل"],
  submit: "إرسال الطلب",
  submitting: "جارٍ الإرسال...",
  successTitle: "تم إرسال الطلب!",
  successText:
    "شكرًا لك. سيراجع فريقنا متطلباتك ويرد خلال 24 ساعة بعرض تفصيلي.",
  whatsappCta: "تواصل عبر واتساب",
  backHome: "العودة للرئيسية",
  newInquiry: "إرسال طلب آخر",
  agreeRequired: "يرجى الموافقة على التواصل قبل الإرسال.",
};

// ------------------------------------------------------------
// German
// ------------------------------------------------------------
export const de: DeepPartial<PlanTranslation> = {
  pageTitle: "Maschinenkauf-Anfrage",
  pageSubtitle:
    "Teilen Sie uns die benötigte Maschine und Spezifikationen mit. Wir senden innerhalb von 24 Stunden ein detailliertes Angebot.",
  requiredNote: "* Pflichtfelder",
  badge: "Senden Sie Ihre Anforderungen für ein detailliertes Angebot",
  sections: {
    info: "Ihre Daten",
    machine: "Maschinenanforderungen",
    requirements: "Kaufpräferenzen",
    services: "Zusätzliche Leistungen",
    extra: "Weitere Informationen",
  },
  fields: {
    name: "Vollständiger Name",
    company: "Firmenname",
    country: "Land",
    email: "E-Mail-Adresse",
    whatsapp: "WhatsApp / Telefon",
    wechat: "WeChat-ID (optional)",
    machineType: "Benötigter Maschinentyp",
    model: "Interessierende Modelle",
    modelOther: "Anderes Modell / Spezifikation",
    station: "Stationen / Werkzeuge",
    diameter: "Max. Drahtdurchmesser (mm)",
    length: "Max. Schnittlänge (mm)",
    product: "Herzustellendes Produkt",
    brand: "Markenwunsch",
    year: "Bevorzugtes Baujahr",
    condition: "Maschinenzustand",
    quantity: "Anzahl",
    budget: "Budget (USD)",
    targetDate: "Geplanter Kaufzeitpunkt",
    shipping: "Seefracht benötigt",
    install: "Montageunterstützung benötigt",
    customs: "Zollabfertigungshilfe benötigt",
    power: "Lokale Stromanforderung",
    special: "Besondere Anforderungen",
    source: "Wie haben Sie uns gefunden?",
    agree: "Ich stimme der Kontaktaufnahme im Zusammenhang mit dieser Anfrage zu und akzeptiere die Datenschutzerklärung.",
  },
  placeholders: {
    name: "z. B. Max Mustermann",
    company: "z. B. ABC Befestigung GmbH",
    country: "z. B. Türkei, Brasilien, Indien...",
    email: "max@example.com",
    whatsapp: "+49 1xx xxxx xxxx",
    wechat: "WeChat-ID",
    modelOther: "Anderes Modell oder Spezifikation eingeben...",
    diameter: "z. B. 10",
    length: "z. B. 80",
    product: "z. B. M8-Sechskantmuttern, Schlossschrauben...",
    quantity: "z. B. 2",
    special: "Spannung, Werkzeugsätze, Zubehör, Lieferbedingungen...",
  },
  conditions: ["Komplett überholt", "Guter Betriebszustand", "Läuft wie besichtigt"],
  budgets: ["Unter 5.000 $", "5.000 $ – 10.000 $", "10.000 $ – 20.000 $", "20.000 $ – 50.000 $", "50.000 $ +"],
  targetDates: ["Sofort", "Innerhalb 1 Monats", "1 – 3 Monate", "Nur Recherche"],
  services: ["Seefracht zu meinem Hafen", "Montage & Inbetriebnahme", "Zolldokumente", "Matrizen-/Stempelsätze", "Bediener-Schulung"],
  sources: ["Google", "WhatsApp", "Fachmesse", "Empfehlung eines Freundes", "Soziale Medien"],
  submit: "Anfrage senden",
  submitting: "Senden...",
  successTitle: "Anfrage gesendet!",
  successText:
    "Vielen Dank. Unser Team prüft Ihre Anforderungen und antwortet innerhalb von 24 Stunden mit einem detaillierten Angebot.",
  whatsappCta: "WhatsApp-Chat",
  backHome: "Zur Startseite",
  newInquiry: "Weitere Anfrage senden",
  agreeRequired: "Bitte stimmen Sie vor dem Senden der Kontaktaufnahme zu.",
};

// === MORE_PLAN_LANGS ===

export const planTranslations: Record<string, DeepPartial<PlanTranslation>> = {
  en,
  ru,
  ja,
  ko,
  es,
  pt,
  fr,
  ar,
  de,
  // === PLAN_LANG_MAP ===
};
