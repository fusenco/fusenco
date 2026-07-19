export type PlanLang = "en" | "ru" | "ja" | "ko" | "es" | "pt" | "fr" | "ar";

export interface PlanT {
  // Header
  incentiveBadge: string;
  pageTitle: string;
  pageSubtitle: string;
  requiredFields: string;

  // Section 1
  s1Title: string;
  fullName: string;
  nationality: string;
  visitorCount: string;
  email: string;
  phone: string;
  wechat: string;
  emergencyContact: string;
  emergencyName: string;
  emergencyPhone: string;
  emergencyRelation: string;

  // Section 2
  s2Title: string;
  entryDate: string;
  exitDate: string;
  serviceDuration: string;
  customDuration: string;
  overtimeNotice: string;
  cities: string;
  otherCity: string;

  // Section 3
  s3Title: string;
  dietary: string;
  religion: string;
  services: string;
  specificInterests: string;
  pleaseSpecify: string;

  // Section 4
  s4Title: string;
  tripTypeLabel: string;

  // Section 5
  s5Title: string;
  budget: string;
  accommodation: string;
  transportation: string;
  specialNotes: string;
  medical: string;
  hearAbout: string;

  // Section 6
  privacyTitle: string;
  privacyText: string;
  agreeText: string;
  termsOfService: string;
  privacyPolicy: string;
  submit: string;
  submitting: string;

  // Success
  thankYou: string;
  successMessage: string;
  chatWhatsApp: string;
  backToHome: string;

  // Options
  durationOptions: string[];
  dietaryOptions: string[];
  religionOptions: string[];
  serviceOptions: string[];
  tripTypeOptions: string[];
  cityNames: Record<string, string>;
  budgetOptions: string[];
  accommodationOptions: string[];
  transportationOptions: string[];
  hearOptions: string[];

  // Placeholders
  phFullName: string;
  phNationality: string;
  phEmail: string;
  phPhone: string;
  phWechat: string;
  phRelation: string;
  phCustomDuration: string;
  phCustomCity: string;
  phInterests: string;
  phSpecialNotes: string;
  phMedical: string;
  phSpecify: string;
}

export const planTranslations: Record<PlanLang, PlanT> = {
  en: {
    incentiveBadge: "Fill in to get a detailed quote",
    pageTitle: "Custom Itinerary Planner",
    pageSubtitle: "Tell us about your trip and we'll create a personalized itinerary with detailed cost estimates. Our team will respond within 24 hours.",
    requiredFields: "Required fields",
    s1Title: "Personal Information",
    fullName: "Full Name", nationality: "Nationality", visitorCount: "Number of Visitors",
    email: "Email Address", phone: "WhatsApp / Phone", wechat: "WeChat ID (Optional)",
    emergencyContact: "Emergency Contact", emergencyName: "Full Name", emergencyPhone: "Phone Number", emergencyRelation: "Relationship",
    s2Title: "Trip Details", entryDate: "Entry Date (Arrival in China)", exitDate: "Exit Date (Departure)",
    serviceDuration: "Service Duration", customDuration: "Custom Duration",
    overtimeNotice: "Overtime: Additional hours beyond the selected duration will be charged at $15/hour (or equivalent in local currency).",
    cities: "Cities You Want to Visit", otherCity: "Other City",
    s3Title: "Preferences & Requirements", dietary: "Dietary Restrictions", religion: "Religious Beliefs (for cultural sensitivity)",
    services: "Services Needed", specificInterests: "Specific Interests / Goals", pleaseSpecify: "Please specify...",
    s4Title: "Trip Type", tripTypeLabel: "What best describes your trip?",
    s5Title: "Additional Information", budget: "Estimated Budget (per person)", accommodation: "Accommodation Preference",
    transportation: "Transportation Preference", specialNotes: "Special Notes / Requests", medical: "Medical Conditions / Special Needs",
    hearAbout: "How did you hear about FUSEN?",
    privacyTitle: "Your Privacy Matters", privacyText: "All information you provide is strictly confidential and will only be used to create your personalized itinerary. We never share your data with third parties. Your personal details are protected under GDPR and international privacy standards.",
    agreeText: "I confirm that the information provided is accurate and I agree to FUSEN's", termsOfService: "Terms of Service", privacyPolicy: "Privacy Policy",
    submit: "Submit Itinerary Request", submitting: "Submitting...",
    thankYou: "Thank You!", successMessage: "Your itinerary request has been received successfully. Our team will review your requirements and get back to you within 24 hours via email or WhatsApp with a personalized travel plan and cost estimate.",
    chatWhatsApp: "Chat on WhatsApp", backToHome: "Back to Home",
    durationOptions: ["4 Hours", "8 Hours (Full Day)", "3 Days", "5 Days", "7 Days", "Custom Duration"],
    dietaryOptions: ["Halal", "Vegetarian", "Vegan", "No Pork", "Gluten-Free", "Lactose-Free", "Seafood Allergy", "Nut Allergy", "No Restrictions", "Other"],
    religionOptions: ["Buddhism", "Islam", "Christianity", "Hinduism", "Judaism", "No Preference", "Other"],
    serviceOptions: ["Translation / Interpretation", "Tour Guide", "Sightseeing & Attractions", "Food & Culinary Tour", "Culture & History", "Shopping Assistance", "Business Visit / Meeting", "Factory Visit & Inspection", "Exhibition / Trade Fair", "Photography Tour", "Other"],
    tripTypeOptions: ["Transit Visa / Short Stay", "Personal / Solo Travel", "Family Trip", "Couple / Honeymoon", "Business Visit & Meetings", "Factory Inspection & Sourcing", "Exhibition & Trade Fair", "Study / Cultural Exchange", "Custom / Other"],
    cityNames: { Beijing: "Beijing", Shanghai: "Shanghai", "Xi'an": "Xi'an", Chengdu: "Chengdu", Guangzhou: "Guangzhou", Shenzhen: "Shenzhen", Hangzhou: "Hangzhou", Guilin: "Guilin", Chongqing: "Chongqing", Kunming: "Kunming", Suzhou: "Suzhou", Nanjing: "Nanjing", "Lhasa (Tibet)": "Lhasa (Tibet)", Harbin: "Harbin", "Hong Kong": "Hong Kong" },
    budgetOptions: ["Select budget range", "Under $500", "$500 - $1,000", "$1,000 - $2,000", "$2,000 - $5,000", "$5,000+", "Flexible / Not Sure"],
    accommodationOptions: ["Budget / Hostel", "Mid-Range Hotel (3-4 star)", "Luxury Hotel (5 star)", "Boutique / Themed Hotel", "No accommodation needed"],
    transportationOptions: ["Public Transit (Metro/Bus)", "Private Car + Driver", "High-Speed Rail", "Domestic Flight", "Mixed (Flexible)"],
    hearOptions: ["Select...", "Google Search", "TripAdvisor", "Instagram / Social Media", "YouTube", "Friend / Word of Mouth", "Travel Agent", "Other"],
    phFullName: "e.g. John Smith", phNationality: "e.g. USA, UK, France...", phEmail: "john@example.com", phPhone: "+86 131 1671 6778",
    phWechat: "wechat123", phRelation: "e.g. Spouse, Parent", phCustomDuration: "e.g. 10 days, 2 weeks...", phCustomCity: "Enter your city / region...",
    phInterests: "Tell us what you're most excited about — e.g. Great Wall hiking, street food tour, tech company visits, photography spots...",
    phSpecialNotes: "Any special requirements, mobility concerns, must-see places, or anything else we should know...",
    phMedical: "Any medical conditions, allergies, mobility issues, or special assistance needed...", phSpecify: "Please specify...",
  },

  ru: {
    incentiveBadge: "Заполните для получения подробного предложения",
    pageTitle: "Планировщик индивидуального маршрута",
    pageSubtitle: "Расскажите нам о своей поездке, и мы создадим индивидуальный маршрут с подробной оценкой стоимости. Наша команда ответит в течение 24 часов.",
    requiredFields: "Обязательные поля",
    s1Title: "Личная информация",
    fullName: "Полное имя", nationality: "Гражданство", visitorCount: "Количество посетителей",
    email: "Адрес электронной почты", phone: "WhatsApp / Телефон", wechat: "WeChat ID (необязательно)",
    emergencyContact: "Экстренный контакт", emergencyName: "Полное имя", emergencyPhone: "Номер телефона", emergencyRelation: "Отношение",
    s2Title: "Детали поездки", entryDate: "Дата въезда (прибытие в Китай)", exitDate: "Дата выезда (отправление)",
    serviceDuration: "Продолжительность обслуживания", customDuration: "Своя продолжительность",
    overtimeNotice: "Сверхурочные: дополнительные часы сверх выбранной продолжительности оплачиваются из расчёта $15/час (или эквивалент в местной валюте).",
    cities: "Города, которые вы хотите посетить", otherCity: "Другой город",
    s3Title: "Предпочтения и требования", dietary: "Диетические ограничения", religion: "Религиозные убеждения (для культурной чувствительности)",
    services: "Необходимые услуги", specificInterests: "Особые интересы / цели", pleaseSpecify: "Пожалуйста, уточните...",
    s4Title: "Тип поездки", tripTypeLabel: "Что лучше всего описывает вашу поездку?",
    s5Title: "Дополнительная информация", budget: "Ориентировочный бюджет (на человека)", accommodation: "Предпочтение по проживанию",
    transportation: "Предпочтение по транспорту", specialNotes: "Особые пожелания / запросы", medical: "Медицинские состояния / особые потребности",
    hearAbout: "Откуда вы узнали о FUSEN?",
    privacyTitle: "Ваша конфиденциальность важна", privacyText: "Вся предоставленная вами информация строго конфиденциальна и будет использована только для создания вашего индивидуального маршрута. Мы никогда не передаём ваши данные третьим лицам. Ваши личные данные защищены в соответствии с GDPR и международными стандартами конфиденциальности.",
    agreeText: "Я подтверждаю, что предоставленная информация точна, и я согласен с", termsOfService: "Условиями обслуживания", privacyPolicy: "Политикой конфиденциальности",
    submit: "Отправить запрос на маршрут", submitting: "Отправка...",
    thankYou: "Спасибо!", successMessage: "Ваш запрос на маршрут успешно получен. Наша команда изучит ваши требования и свяжется с вами в течение 24 часов по электронной почте или WhatsApp с индивидуальным планом поездки и оценкой стоимости.",
    chatWhatsApp: "Чат в WhatsApp", backToHome: "Вернуться на главную",
    durationOptions: ["4 часа", "8 часов (полный день)", "3 дня", "5 дней", "7 дней", "Своя продолжительность"],
    dietaryOptions: ["Халяль", "Вегетарианец", "Веган", "Без свинины", "Без глютена", "Без лактозы", "Аллергия на морепродукты", "Аллергия на орехи", "Без ограничений", "Другое"],
    religionOptions: ["Буддизм", "Ислам", "Христианство", "Индуизм", "Иудаизм", "Без предпочтений", "Другое"],
    serviceOptions: ["Перевод / устный перевод", "Гид", "Осмотр достопримечательностей", "Гастрономический тур", "Культура и история", "Помощь в покупках", "Деловой визит / встреча", "Посещение завода", "Выставка / ярмарка", "Фототур", "Другое"],
    tripTypeOptions: ["Транзитная виза / короткий визит", "Личная поездка", "Семейная поездка", "Пара / медовый месяц", "Деловой визит", "Осмотр заводов", "Выставка и ярмарка", "Обучение / обмен", "Другое"],
    cityNames: { Beijing: "Пекин", Shanghai: "Шанхай", "Xi'an": "Сиань", Chengdu: "Чэнду", Guangzhou: "Гуанчжоу", Shenzhen: "Шэньчжэнь", Hangzhou: "Ханчжоу", Guilin: "Гуйлинь", Chongqing: "Чунцин", Kunming: "Куньмин", Suzhou: "Сучжоу", Nanjing: "Нанкин", "Lhasa (Tibet)": "Лхаса (Тибет)", Harbin: "Харбин", "Hong Kong": "Гонконг" },
    budgetOptions: ["Выберите бюджет", "До $500", "$500 - $1,000", "$1,000 - $2,000", "$2,000 - $5,000", "Более $5,000", "Гибкий / не уверен"],
    accommodationOptions: ["Бюджет / хостел", "Отель среднего класса (3-4 звезды)", "Роскошный отель (5 звёзд)", "Бутик-отель", "Проживание не нужно"],
    transportationOptions: ["Общественный транспорт", "Частный автомобиль + водитель", "Скоростной поезд", "Внутренний рейс", "Смешанный"],
    hearOptions: ["Выберите...", "Поиск Google", "TripAdvisor", "Instagram / соцсети", "YouTube", "Друг / сарафанное радио", "Турагент", "Другое"],
    phFullName: "напр. Иван Смирнов", phNationality: "напр. Россия, США, Франция...", phEmail: "ivan@example.com", phPhone: "+86 131 1671 6778",
    phWechat: "wechat123", phRelation: "напр. Супруг, Родитель", phCustomDuration: "напр. 10 дней, 2 недели...", phCustomCity: "Введите ваш город / регион...",
    phInterests: "Расскажите, что вас больше всего интересует — например, поход по Великой стене, уличная еда, визиты в технические компании...",
    phSpecialNotes: "Любые особые требования, проблемы с мобильностью, обязательные места для посещения...",
    phMedical: "Любые медицинские состояния, аллергии, проблемы с мобильностью...", phSpecify: "Пожалуйста, уточните...",
  },

  ja: {
    incentiveBadge: "記入して詳細な見積もりを取得",
    pageTitle: "カスタム旅程プランナー",
    pageSubtitle: "旅行についてお聞かせください。詳細な費用見積もり付きのパーソナライズされた旅程を作成します。24時間以内にご返信します。",
    requiredFields: "必須項目",
    s1Title: "個人情報",
    fullName: "氏名", nationality: "国籍", visitorCount: "訪問者数",
    email: "メールアドレス", phone: "WhatsApp / 電話", wechat: "WeChat ID（任意）",
    emergencyContact: "緊急連絡先", emergencyName: "氏名", emergencyPhone: "電話番号", emergencyRelation: "関係",
    s2Title: "旅行詳細", entryDate: "入国日（中国到着）", exitDate: "出国日（出発）",
    serviceDuration: "サービス期間", customDuration: "カスタム期間",
    overtimeNotice: "超過時間：選択した期間を超える追加時間は$15/時間で課金されます（現地通貨同等額）。",
    cities: "訪問したい都市", otherCity: "その他の都市",
    s3Title: "嗜好と要件", dietary: "食事制限", religion: "宗教的信念（文化的配慮）",
    services: "必要なサービス", specificInterests: "具体的な興味 / 目的", pleaseSpecify: "詳細を入力してください...",
    s4Title: "旅行タイプ", tripTypeLabel: "あなたの旅行に最も当てはまるものは？",
    s5Title: "追加情報", budget: "予算目安（1人あたり）", accommodation: "宿泊の希望",
    transportation: "交通の希望", specialNotes: "特記事項 / リクエスト", medical: "医療状態 / 特別なニーズ",
    hearAbout: "FUSENをどこで知りましたか？",
    privacyTitle: "プライバシー保護", privacyText: "ご提供いただくすべての情報は厳密に機密扱いされ、パーソナライズされた旅程の作成にのみ使用されます。データを第三者と共有することはありません。GDPRおよび国際的なプライバシー基準に基づき保護されています。",
    agreeText: "提供した情報が正確であることを確認し、FUSENの", termsOfService: "利用規約", privacyPolicy: "プライバシーポリシー",
    submit: "旅程リクエストを送信", submitting: "送信中...",
    thankYou: "ありがとうございます！", successMessage: "旅程リクエストを正常に受信しました。当社のチームがご要件を確認し、24時間以内にメールまたはWhatsAppでパーソナライズされた旅行プランと費用見積もりをお送りします。",
    chatWhatsApp: "WhatsAppでチャット", backToHome: "ホームに戻る",
    durationOptions: ["4時間", "8時間（1日）", "3日間", "5日間", "7日間", "カスタム期間"],
    dietaryOptions: ["ハラール", "ベジタリアン", "ヴィーガン", "豚肉なし", "グルテンフリー", "ラクトースフリー", "魚介アレルギー", "ナッツアレルギー", "制限なし", "その他"],
    religionOptions: ["仏教", "イスラム教", "キリスト教", "ヒンドゥー教", "ユダヤ教", "こだわらない", "その他"],
    serviceOptions: ["翻訳 / 通訳", "ツアーガイド", "観光名所", "グルメツアー", "文化と歴史", "買い物サポート", "ビジネス訪問", "工場見学", "展示会", "写真ツアー", "その他"],
    tripTypeOptions: ["トランジットビザ / 短期滞在", "個人旅行", "家族旅行", "カップル / ハネムーン", "ビジネス訪問", "工場視察", "展示会", "留学 / 文化交流", "その他"],
    cityNames: { Beijing: "北京", Shanghai: "上海", "Xi'an": "西安", Chengdu: "成都", Guangzhou: "広州", Shenzhen: "深セン", Hangzhou: "杭州", Guilin: "桂林", Chongqing: "重慶", Kunming: "昆明", Suzhou: "蘇州", Nanjing: "南京", "Lhasa (Tibet)": "ラサ（チベット）", Harbin: "ハルビン", "Hong Kong": "香港" },
    budgetOptions: ["予算を選択", "$500以下", "$500 - $1,000", "$1,000 - $2,000", "$2,000 - $5,000", "$5,000以上", "柔軟 / 不明"],
    accommodationOptions: ["格安 / ホステル", "中級ホテル（3-4つ星）", "高級ホテル（5つ星）", "ブティックホテル", "宿泊不要"],
    transportationOptions: ["公共交通機関", "専用車 + 運転手", "高速鉄道", "国内線", "混合"],
    hearOptions: ["選択...", "Google検索", "TripAdvisor", "Instagram / SNS", "YouTube", "友人 / 口コミ", "旅行代理店", "その他"],
    phFullName: "例：山田太郎", phNationality: "例：日本、アメリカ、フランス...", phEmail: "taro@example.com", phPhone: "+86 131 1671 6778",
    phWechat: "wechat123", phRelation: "例：配偶者、親", phCustomDuration: "例：10日間、2週間...", phCustomCity: "都市 / 地域を入力...",
    phInterests: "最も楽しみにしていることを教えてください — 例：万里の長城ハイキング、屋台料理、テクノロジー企業訪問...",
    phSpecialNotes: "特別な要件、移動の懸念、必見スポットなど...",
    phMedical: "医療状態、アレルギー、移動の問題など...", phSpecify: "詳細を入力してください...",
  },

  ko: {
    incentiveBadge: "작성하여 상세 견적 받기",
    pageTitle: "맞춤 여행 일정 플래너",
    pageSubtitle: "여행에 대해 알려주시면 상세한 비용 견적이 포함된 맞춤 일정을 만들어 드립니다. 24시간 이내에 답변드립니다.",
    requiredFields: "필수 항목",
    s1Title: "개인 정보",
    fullName: "성명", nationality: "국적", visitorCount: "방문자 수",
    email: "이메일 주소", phone: "WhatsApp / 전화", wechat: "WeChat ID (선택)",
    emergencyContact: "비상 연락처", emergencyName: "성명", emergencyPhone: "전화번호", emergencyRelation: "관계",
    s2Title: "여행 세부정보", entryDate: "입국일 (중국 도착)", exitDate: "출국일 (출발)",
    serviceDuration: "서비스 기간", customDuration: "사용자 정의 기간",
    overtimeNotice: "초과 시간: 선택한 기간을 초과하는 추가 시간은 $15/시간으로 청구됩니다 (현지 통화 equival).",
    cities: "방문하고 싶은 도시", otherCity: "기타 도시",
    s3Title: "선호도 및 요구사항", dietary: "식이 제한", religion: "종교적 신념 (문화적 민감성)",
    services: "필요한 서비스", specificInterests: "구체적인 관심사 / 목표", pleaseSpecify: "구체적으로 입력해주세요...",
    s4Title: "여행 유형", tripTypeLabel: "여행을 가장 잘 설명하는 것은?",
    s5Title: "추가 정보", budget: "예상 예산 (1인당)", accommodation: "숙박 선호도",
    transportation: "교통 선호도", specialNotes: "특별 메모 / 요청", medical: "의료 상태 / 특별 요구",
    hearAbout: "FUSEN을 어떻게 알게 되셨나요?",
    privacyTitle: "개인정보 보호", privacyText: "제공하신 모든 정보는 엄격히 기밀로 유지되며 맞춤 일정 작성에만 사용됩니다. 데이터를 제3자와 공유하지 않습니다. GDPR 및 국제 개인정보 보호 기준에 따라 보호됩니다.",
    agreeText: "제공한 정보가 정확함을 확인하며 FUSEN의", termsOfService: "서비스 약관", privacyPolicy: "개인정보 처리방침",
    submit: "여행 일정 요청 제출", submitting: "제출 중...",
    thankYou: "감사합니다!", successMessage: "여행 일정 요청이 성공적으로 접수되었습니다. 당사 팀이 요구사항을 검토하고 24시간 이내에 이메일 또는 WhatsApp으로 맞춤 여행 계획과 비용 견적을 보내드립니다.",
    chatWhatsApp: "WhatsApp에서 채팅", backToHome: "홈으로 돌아가기",
    durationOptions: ["4시간", "8시간 (종일)", "3일", "5일", "7일", "사용자 정의 기간"],
    dietaryOptions: ["할랄", "채식", "비건", "돼지고기 불가", "글루텐 프리", "락토스 프리", "해산물 알레르기", "견과류 알레르기", "제한 없음", "기타"],
    religionOptions: ["불교", "이슬람교", "기독교", "힌두교", "유대교", "선호 없음", "기타"],
    serviceOptions: ["번역 / 통역", "투어 가이드", "관광 명소", "미식 투어", "문화와 역사", "쇼핑 지원", "비즈니스 방문", "공장 방문", "전시회", "사진 투어", "기타"],
    tripTypeOptions: ["환승 비자 / 단기 체류", "개인 여행", "가족 여행", "커플 / 신혼여행", "비즈니스 방문", "공장 시찰", "전시회", "유학 / 문화 교류", "기타"],
    cityNames: { Beijing: "베이징", Shanghai: "상하이", "Xi'an": "시안", Chengdu: "청두", Guangzhou: "광저우", Shenzhen: "선전", Hangzhou: "항저우", Guilin: "구이린", Chongqing: "충칭", Kunming: "쿤밍", Suzhou: "쑤저우", Nanjing: "난징", "Lhasa (Tibet)": "라사 (티베트)", Harbin: "하얼빈", "Hong Kong": "홍콩" },
    budgetOptions: ["예산 선택", "$500 이하", "$500 - $1,000", "$1,000 - $2,000", "$2,000 - $5,000", "$5,000 이상", "유연 / 모름"],
    accommodationOptions: ["저렴 / 호스텔", "중급 호텔 (3-4성)", "고급 호텔 (5성)", "부티크 호텔", "숙박 불필요"],
    transportationOptions: ["대중교통", "전용차 + 기사", "고속철도", "국내선", "혼합"],
    hearOptions: ["선택...", "Google 검색", "TripAdvisor", "Instagram / SNS", "YouTube", "친구 / 입소문", "여행사", "기타"],
    phFullName: "예: 김민수", phNationality: "예: 한국, 미국, 프랑스...", phEmail: "minsu@example.com", phPhone: "+86 131 1671 6778",
    phWechat: "wechat123", phRelation: "예: 배우자, 부모", phCustomDuration: "예: 10일, 2주...", phCustomCity: "도시 / 지역 입력...",
    phInterests: "가장 기대하는 것을 알려주세요 — 예: 만리장성 하이킹, 길거리 음식, 기업 방문...",
    phSpecialNotes: "특별한 요구사항, 이동 문제, 필수 방문 장소 등...",
    phMedical: "의료 상태, 알레르기, 이동 문제 등...", phSpecify: "구체적으로 입력해주세요...",
  },

  es: {
    incentiveBadge: "Complete para obtener una cotización detallada",
    pageTitle: "Planificador de Itinerario Personalizado",
    pageSubtitle: "Cuéntenos sobre su viaje y crearemos un itinerario personalizado con estimaciones de costo detalladas. Nuestro equipo responderá en 24 horas.",
    requiredFields: "Campos obligatorios",
    s1Title: "Información Personal",
    fullName: "Nombre completo", nationality: "Nacionalidad", visitorCount: "Número de visitantes",
    email: "Correo electrónico", phone: "WhatsApp / Teléfono", wechat: "WeChat ID (Opcional)",
    emergencyContact: "Contacto de emergencia", emergencyName: "Nombre completo", emergencyPhone: "Número de teléfono", emergencyRelation: "Relación",
    s2Title: "Detalles del Viaje", entryDate: "Fecha de entrada (llegada a China)", exitDate: "Fecha de salida (partida)",
    serviceDuration: "Duración del servicio", customDuration: "Duración personalizada",
    overtimeNotice: "Horas extra: las horas adicionales más allá de la duración seleccionada se cobrarán a $15/hora (o equivalente en moneda local).",
    cities: "Ciudades que desea visitar", otherCity: "Otra ciudad",
    s3Title: "Preferencias y Requisitos", dietary: "Restricciones dietéticas", religion: "Creencias religiosas (sensibilidad cultural)",
    services: "Servicios necesarios", specificInterests: "Intereses específicos / Objetivos", pleaseSpecify: "Por favor, especifique...",
    s4Title: "Tipo de Viaje", tripTypeLabel: "¿Qué describe mejor su viaje?",
    s5Title: "Información Adicional", budget: "Presupuesto estimado (por persona)", accommodation: "Preferencia de alojamiento",
    transportation: "Preferencia de transporte", specialNotes: "Notas especiales / Solicitudes", medical: "Condiciones médicas / Necesidades especiales",
    hearAbout: "¿Cómo se enteró de FUSEN?",
    privacyTitle: "Su privacidad importa", privacyText: "Toda la información que proporciona es estrictamente confidencial y solo se utilizará para crear su itinerario personalizado. Nunca compartimos sus datos con terceros. Sus datos personales están protegidos bajo el GDPR y los estándares internacionales de privacidad.",
    agreeText: "Confirmo que la información proporcionada es precisa y acepto los", termsOfService: "Términos de servicio", privacyPolicy: "Política de privacidad",
    submit: "Enviar solicitud de itinerario", submitting: "Enviando...",
    thankYou: "¡Gracias!", successMessage: "Su solicitud de itinerario se ha recibido con éxito. Nuestro equipo revisará sus requisitos y se pondrá en contacto con usted en 24 horas por correo electrónico o WhatsApp con un plan de viaje personalizado y una estimación de costos.",
    chatWhatsApp: "Chatear por WhatsApp", backToHome: "Volver al inicio",
    durationOptions: ["4 horas", "8 horas (día completo)", "3 días", "5 días", "7 días", "Duración personalizada"],
    dietaryOptions: ["Halal", "Vegetariano", "Vegano", "Sin cerdo", "Sin gluten", "Sin lactosa", "Alergia a mariscos", "Alergia a nueces", "Sin restricciones", "Otro"],
    religionOptions: ["Budismo", "Islam", "Cristianismo", "Hinduismo", "Judaísmo", "Sin preferencia", "Otro"],
    serviceOptions: ["Traducción / Interpretación", "Guía turístico", "Visitás y atracciones", "Tour gastronómico", "Cultura e historia", "Asistencia de compras", "Visita de negocios", "Visita de fábrica", "Exposición / feria", "Tour de fotografía", "Otro"],
    tripTypeOptions: ["Visa de tránsito / estancia corta", "Viaje personal", "Viaje familiar", "Pareja / luna de miel", "Visita de negocios", "Inspección de fábrica", "Exposición y feria", "Estudio / intercambio", "Personalizado / otro"],
    cityNames: { Beijing: "Pekín", Shanghai: "Shanghái", "Xi'an": "Xi'an", Chengdu: "Chengdu", Guangzhou: "Guangzhou", Shenzhen: "Shenzhen", Hangzhou: "Hangzhou", Guilin: "Guilin", Chongqing: "Chongqing", Kunming: "Kunming", Suzhou: "Suzhou", Nanjing: "Nankín", "Lhasa (Tibet)": "Lhasa (Tíbet)", Harbin: "Harbin", "Hong Kong": "Hong Kong" },
    budgetOptions: ["Seleccionar presupuesto", "Menos de $500", "$500 - $1,000", "$1,000 - $2,000", "$2,000 - $5,000", "Más de $5,000", "Flexible / no seguro"],
    accommodationOptions: ["Económico / albergue", "Hotel de gama media (3-4 estrellas)", "Hotel de lujo (5 estrellas)", "Hotel boutique", "No necesita alojamiento"],
    transportationOptions: ["Transporte público", "Coche privado + conductor", "Tren de alta velocidad", "Vuelo nacional", "Mixto"],
    hearOptions: ["Seleccionar...", "Búsqueda de Google", "TripAdvisor", "Instagram / redes sociales", "YouTube", "Amigo / boca a boca", "Agencia de viajes", "Otro"],
    phFullName: "ej. Juan García", phNationality: "ej. España, México, Argentina...", phEmail: "juan@example.com", phPhone: "+86 131 1671 6778",
    phWechat: "wechat123", phRelation: "ej. Cónyuge, Padre", phCustomDuration: "ej. 10 días, 2 semanas...", phCustomCity: "Ingrese su ciudad / región...",
    phInterests: "Cuéntenos qué le emociona más — ej. caminar por la Gran Muralla, tour de comida callejera, visitas a empresas tecnológicas...",
    phSpecialNotes: "Cualquier requisito especial, problemas de movilidad, lugares imperdibles...",
    phMedical: "Cualquier condición médica, alergias, problemas de movilidad...", phSpecify: "Por favor, especifique...",
  },

  pt: {
    incentiveBadge: "Preencha para obter um orçamento detalhado",
    pageTitle: "Planejador de Itinerário Personalizado",
    pageSubtitle: "Conte-nos sobre sua viagem e criaremos um itinerário personalizado com estimativas de custo detalhadas. Nossa equipe responderá em 24 horas.",
    requiredFields: "Campos obrigatórios",
    s1Title: "Informações Pessoais",
    fullName: "Nome completo", nationality: "Nacionalidade", visitorCount: "Número de visitantes",
    email: "Endereço de e-mail", phone: "WhatsApp / Telefone", wechat: "WeChat ID (Opcional)",
    emergencyContact: "Contato de emergência", emergencyName: "Nome completo", emergencyPhone: "Número de telefone", emergencyRelation: "Relação",
    s2Title: "Detalhes da Viagem", entryDate: "Data de entrada (chegada na China)", exitDate: "Data de saída (partida)",
    serviceDuration: "Duração do serviço", customDuration: "Duração personalizada",
    overtimeNotice: "Horas extras: horas adicionais além da duração selecionada serão cobradas a $15/hora (ou equivalente em moeda local).",
    cities: "Cidades que deseja visitar", otherCity: "Outra cidade",
    s3Title: "Preferências e Requisitos", dietary: "Restrições alimentares", religion: "Crenças religiosas (sensibilidade cultural)",
    services: "Serviços necessários", specificInterests: "Interesses específicos / Objetivos", pleaseSpecify: "Por favor, especifique...",
    s4Title: "Tipo de Viagem", tripTypeLabel: "O que melhor descreve sua viagem?",
    s5Title: "Informações Adicionais", budget: "Orçamento estimado (por pessoa)", accommodation: "Preferência de alojamento",
    transportation: "Preferência de transporte", specialNotes: "Notas especiais / Pedidos", medical: "Condições médicas / Necessidades especiais",
    hearAbout: "Como soube da FUSEN?",
    privacyTitle: "Sua privacidade é importante", privacyText: "Todas as informações que você fornece são estritamente confidenciais e serão usadas apenas para criar seu itinerário personalizado. Nunca compartilhamos seus dados com terceiros. Seus dados pessoais estão protegidos pelo GDPR e padrões internacionais de privacidade.",
    agreeText: "Confirmo que as informações fornecidas são precisas e concordo com os", termsOfService: "Termos de serviço", privacyPolicy: "Política de privacidade",
    submit: "Enviar pedido de itinerário", submitting: "Enviando...",
    thankYou: "Obrigado!", successMessage: "Seu pedido de itinerário foi recebido com sucesso. Nossa equipe revisará seus requisitos e entrará em contato em 24 horas por e-mail ou WhatsApp com um plano de viagem personalizado e estimativa de custos.",
    chatWhatsApp: "Conversar no WhatsApp", backToHome: "Voltar ao início",
    durationOptions: ["4 horas", "8 horas (dia completo)", "3 dias", "5 dias", "7 dias", "Duração personalizada"],
    dietaryOptions: ["Halal", "Vegetariano", "Vegano", "Sem porco", "Sem glúten", "Sem lactose", "Alergia a frutos do mar", "Alergia a nozes", "Sem restrições", "Outro"],
    religionOptions: ["Budismo", "Islão", "Cristianismo", "Hinduísmo", "Judaísmo", "Sem preferência", "Outro"],
    serviceOptions: ["Tradução / Interpretação", "Guia turístico", "Visitas e atrações", "Tour gastronômico", "Cultura e história", "Assistência de compras", "Visita de negócios", "Visita de fábrica", "Exposição / feira", "Tour de fotografia", "Outro"],
    tripTypeOptions: ["Visto de trânsito / curta estadia", "Viagem pessoal", "Viagem familiar", "Casal / lua de mel", "Visita de negócios", "Inspeção de fábrica", "Exposição e feira", "Estudo / intercâmbio", "Personalizado / outro"],
    cityNames: { Beijing: "Pequim", Shanghai: "Xangai", "Xi'an": "Xi'an", Chengdu: "Chengdu", Guangzhou: "Guangzhou", Shenzhen: "Shenzhen", Hangzhou: "Hangzhou", Guilin: "Guilin", Chongqing: "Chongqing", Kunming: "Kunming", Suzhou: "Suzhou", Nanjing: "Nanquim", "Lhasa (Tibet)": "Lhasa (Tibete)", Harbin: "Harbin", "Hong Kong": "Hong Kong" },
    budgetOptions: ["Selecionar orçamento", "Menos de $500", "$500 - $1,000", "$1,000 - $2,000", "$2,000 - $5,000", "Mais de $5,000", "Flexível / não sei"],
    accommodationOptions: ["Económico / albergue", "Hotel médio (3-4 estrelas)", "Hotel de luxo (5 estrelas)", "Hotel boutique", "Não precisa de alojamento"],
    transportationOptions: ["Transporte público", "Carro privado + motorista", "Comboio de alta velocidade", "Voo doméstico", "Misto"],
    hearOptions: ["Selecionar...", "Pesquisa Google", "TripAdvisor", "Instagram / redes sociais", "YouTube", "Amigo / boca a boca", "Agência de viagens", "Outro"],
    phFullName: "ex. João Silva", phNationality: "ex. Brasil, Portugal, França...", phEmail: "joao@example.com", phPhone: "+86 131 1671 6778",
    phWechat: "wechat123", phRelation: "ex. Cônjuge, Pai", phCustomDuration: "ex. 10 dias, 2 semanas...", phCustomCity: "Digite sua cidade / região...",
    phInterests: "Diga-nos o que mais o entusiasma — ex. caminhada na Grande Muralha, tour de comida de rua, visitas a empresas...",
    phSpecialNotes: "Quaisquer requisitos especiais, problemas de mobilidade, lugares imperdíveis...",
    phMedical: "Quaisquer condições médicas, alergias, problemas de mobilidade...", phSpecify: "Por favor, especifique...",
  },

  fr: {
    incentiveBadge: "Remplissez pour obtenir un devis détaillé",
    pageTitle: "Planificateur d'Itinéraire Personnalisé",
    pageSubtitle: "Parlez-nous de votre voyage et nous créerons un itinéraire personnalisé avec des estimations de coût détaillées. Notre équipe répondra sous 24 heures.",
    requiredFields: "Champs obligatoires",
    s1Title: "Informations Personnelles",
    fullName: "Nom complet", nationality: "Nationalité", visitorCount: "Nombre de visiteurs",
    email: "Adresse e-mail", phone: "WhatsApp / Téléphone", wechat: "WeChat ID (Facultatif)",
    emergencyContact: "Contact d'urgence", emergencyName: "Nom complet", emergencyPhone: "Numéro de téléphone", emergencyRelation: "Relation",
    s2Title: "Détails du Voyage", entryDate: "Date d'entrée (arrivée en Chine)", exitDate: "Date de sortie (départ)",
    serviceDuration: "Durée du service", customDuration: "Durée personnalisée",
    overtimeNotice: "Heures supplémentaires : les heures au-delà de la durée sélectionnée seront facturées à $15/heure (ou équivalent en monnaie locale).",
    cities: "Villes que vous souhaitez visiter", otherCity: "Autre ville",
    s3Title: "Préférences et Exigences", dietary: "Restrictions alimentaires", religion: "Croyances religieuses (sensibilité culturelle)",
    services: "Services nécessaires", specificInterests: "Intérêts spécifiques / Objectifs", pleaseSpecify: "Veuillez préciser...",
    s4Title: "Type de Voyage", tripTypeLabel: "Qu'est-ce qui décrit le mieux votre voyage ?",
    s5Title: "Informations Supplémentaires", budget: "Budget estimé (par personne)", accommodation: "Préférence d'hébergement",
    transportation: "Préférence de transport", specialNotes: "Notes spéciales / Demandes", medical: "Conditions médicales / Besoins spéciaux",
    hearAbout: "Comment avez-vous entendu parler de FUSEN ?",
    privacyTitle: "Votre vie privée compte", privacyText: "Toutes les informations que vous fournissez sont strictement confidentielles et ne seront utilisées que pour créer votre itinéraire personnalisé. Nous ne partageons jamais vos données avec des tiers. Vos données personnelles sont protégées par le RGPD et les normes internationales de confidentialité.",
    agreeText: "Je confirme que les informations fournies sont exactes et j'accepte les", termsOfService: "Conditions d'utilisation", privacyPolicy: "Politique de confidentialité",
    submit: "Envoyer la demande d'itinéraire", submitting: "Envoi...",
    thankYou: "Merci !", successMessage: "Votre demande d'itinéraire a été reçue avec succès. Notre équipe examinera vos exigences et vous contactera sous 24 heures par e-mail ou WhatsApp avec un plan de voyage personnalisé et une estimation des coûts.",
    chatWhatsApp: "Discuter sur WhatsApp", backToHome: "Retour à l'accueil",
    durationOptions: ["4 heures", "8 heures (journée complète)", "3 jours", "5 jours", "7 jours", "Durée personnalisée"],
    dietaryOptions: ["Halal", "Végétarien", "Végétalien", "Sans porc", "Sans gluten", "Sans lactose", "Allergie aux fruits de mer", "Allergie aux noix", "Aucune restriction", "Autre"],
    religionOptions: ["Bouddhisme", "Islam", "Christianisme", "Hindouisme", "Judaïsme", "Sans préférence", "Autre"],
    serviceOptions: ["Traduction / Interprétation", "Guide touristique", "Visites et attractions", "Tour culinaire", "Culture et histoire", "Assistance shopping", "Visite d'affaires", "Visite d'usine", "Exposition / salon", "Tour photographique", "Autre"],
    tripTypeOptions: ["Visa de transit / court séjour", "Voyage personnel", "Voyage familial", "Couple / lune de miel", "Visite d'affaires", "Inspection d'usine", "Exposition et salon", "Étude / échange culturel", "Personnalisé / autre"],
    cityNames: { Beijing: "Pékin", Shanghai: "Shanghai", "Xi'an": "Xi'an", Chengdu: "Chengdu", Guangzhou: "Guangzhou", Shenzhen: "Shenzhen", Hangzhou: "Hangzhou", Guilin: "Guilin", Chongqing: "Chongqing", Kunming: "Kunming", Suzhou: "Suzhou", Nanjing: "Nankin", "Lhasa (Tibet)": "Lhasa (Tibet)", Harbin: "Harbin", "Hong Kong": "Hong Kong" },
    budgetOptions: ["Sélectionner le budget", "Moins de 500$", "500$ - 1 000$", "1 000$ - 2 000$", "2 000$ - 5 000$", "Plus de 5 000$", "Flexible / incertain"],
    accommodationOptions: ["Économique / auberge", "Hôtel milieu de gamme (3-4 étoiles)", "Hôtel de luxe (5 étoiles)", "Hôtel boutique", "Pas d'hébergement nécessaire"],
    transportationOptions: ["Transport en commun", "Voiture privée + chauffeur", "Train à grande vitesse", "Vol intérieur", "Mixte"],
    hearOptions: ["Sélectionner...", "Recherche Google", "TripAdvisor", "Instagram / réseaux sociaux", "YouTube", "Ami / bouche-à-oreille", "Agence de voyage", "Autre"],
    phFullName: "ex. Jean Dupont", phNationality: "ex. France, Belgique, Canada...", phEmail: "jean@example.com", phPhone: "+86 131 1671 6778",
    phWechat: "wechat123", phRelation: "ex. Conjoint, Parent", phCustomDuration: "ex. 10 jours, 2 semaines...", phCustomCity: "Entrez votre ville / région...",
    phInterests: "Dites-nous ce qui vous enthousiasme le plus — ex. randonnée sur la Grande Muraille, tour de street food, visites d'entreprises tech...",
    phSpecialNotes: "Toute exigence spéciale, problème de mobilité, lieu incontournable...",
    phMedical: "Toute condition médicale, allergie, problème de mobilité...", phSpecify: "Veuillez préciser...",
  },

  ar: {
    incentiveBadge: "املأ للحصول على عرض أسعار مفصل",
    pageTitle: "مخطط الرحلة المخصصة",
    pageSubtitle: "أخبرنا عن رحلتك وسنقوم بإنشاء مسار مخصص مع تقديرات تكلفة مفصلة. سيرد فريقنا خلال 24 ساعة.",
    requiredFields: "الحقول المطلوبة",
    s1Title: "المعلومات الشخصية",
    fullName: "الاسم الكامل", nationality: "الجنسية", visitorCount: "عدد الزوار",
    email: "البريد الإلكتروني", phone: "واتساب / الهاتف", wechat: "WeChat ID (اختياري)",
    emergencyContact: "جهة اتصال الطوارئ", emergencyName: "الاسم الكامل", emergencyPhone: "رقم الهاتف", emergencyRelation: "العلاقة",
    s2Title: "تفاصيل الرحلة", entryDate: "تاريخ الدخول (الوصول إلى الصين)", exitDate: "تاريخ المغادرة",
    serviceDuration: "مدة الخدمة", customDuration: "مدة مخصصة",
    overtimeNotice: "الوقت الإضافي: الساعات الإضافية تتجاوز المدة المحددة سيتم حسابها بمعدل 15$/ساعة (أو ما يعادلها بالعملة المحلية).",
    cities: "المدن التي ترغب في زيارتها", otherCity: "مدينة أخرى",
    s3Title: "التفضيلات والمتطلبات", dietary: "القيود الغذائية", religion: "المعتقدات الدينية (للحساسية الثقافية)",
    services: "الخدمات المطلوبة", specificInterests: "اهتمامات محددة / أهداف", pleaseSpecify: "يرجى التحديد...",
    s4Title: "نوع الرحلة", tripTypeLabel: "ما الذي يصف رحلتك بشكل أفضل؟",
    s5Title: "معلومات إضافية", budget: "الميزانية المقدرة (للشخص الواحد)", accommodation: "تفضيل الإقامة",
    transportation: "تفضيل النقل", specialNotes: "ملاحظات خاصة / طلبات", medical: "الحالات الطبية / احتياجات خاصة",
    hearAbout: "كيف سمعت عن FUSEN؟",
    privacyTitle: "خصوصيتك مهمة", privacyText: "جميع المعلومات التي تقدمها سرية تماماً وستستخدم فقط لإنشاء مسار رحلتك المخصص. نحن لا نشارك بياناتك مع أطراف ثالثة أبدًا. بياناتك الشخصية محمية بموجب GDPR والمعايير الدولية للخصوصية.",
    agreeText: "أؤكد أن المعلومات المقدمة دقيقة وأوافق على", termsOfService: "شروط الخدمة", privacyPolicy: "سياسة الخصوصية",
    submit: "إرسال طلب الرحلة", submitting: "جارٍ الإرسال...",
    thankYou: "شكراً لك!", successMessage: "تم استلام طلب الرحلة بنجاح. سيراجع فريقنا متطلباتك ويتواصل معك خلال 24 ساعة عبر البريد الإلكتروني أو واتساب مع خطة سفر مخصصة وتقدير للتكاليف.",
    chatWhatsApp: "دردشة على واتساب", backToHome: "العودة إلى الرئيسية",
    durationOptions: ["4 ساعات", "8 ساعات (يوم كامل)", "3 أيام", "5 أيام", "7 أيام", "مدة مخصصة"],
    dietaryOptions: ["حلال", "نباتي", "نباتي صرف", "بدون لحم خنزير", "بدون جلوتين", "بدون لاكتوز", "حساسية المأكولات البحرية", "حساسية المكسرات", "بدون قيود", "أخرى"],
    religionOptions: ["البوذية", "الإسلام", "المسيحية", "الهندوسية", "اليهودية", "بدون تفضيل", "أخرى"],
    serviceOptions: ["ترجمة / تأويل", "مرشد سياحي", "المعالم السياحية", "جولة طعام", "الثقافة والتاريخ", "مساعدة التسوق", "زيارة عمل", "زيارة مصنع", "معرض / معرض تجاري", "جولة تصوير", "أخرى"],
    tripTypeOptions: ["تأشيرة عبور / إقامة قصيرة", "سفر شخصي", "رحلة عائلية", "زوجان / شهر العسل", "زيارة عمل", "تفتيش المصانع", "معرض تجاري", "دراسة / تبادل ثقافي", "مخصص / أخرى"],
    cityNames: { Beijing: "بكين", Shanghai: "شنغهاي", "Xi'an": "شيآن", Chengdu: "تشنغدو", Guangzhou: "قوانغتشو", Shenzhen: "شنتشن", Hangzhou: "هانغتشو", Guilin: "قويلين", Chongqing: "تشونغتشينغ", Kunming: "كونمينغ", Suzhou: "سوتشو", Nanjing: "نانجينغ", "Lhasa (Tibet)": "لاها (التبت)", Harbin: "هاربن", "Hong Kong": "هونغ كونغ" },
    budgetOptions: ["اختر الميزانية", "أقل من 500$", "500$ - 1,000$", "1,000$ - 2,000$", "2,000$ - 5,000$", "أكثر من 5,000$", "مرن / غير متأكد"],
    accommodationOptions: ["اقتصادي / نزل", "فندق متوسط (3-4 نجوم)", "فندق فاخر (5 نجوم)", "فندق بوتيك", "لا حاجة للإقامة"],
    transportationOptions: ["النقل العام", "سيارة خاصة + سائق", "قطار فائق السرعة", "رحلة داخلية", "مختلط"],
    hearOptions: ["اختر...", "بحث Google", "TripAdvisor", "Instagram / وسائل التواصل", "YouTube", "صديق / عن طريق الفم", "وكالة سفر", "أخرى"],
    phFullName: "مثال: أحمد محمد", phNationality: "مثال: السعودية، مصر، الإمارات...", phEmail: "ahmed@example.com", phPhone: "+86 131 1671 6778",
    phWechat: "wechat123", phRelation: "مثال: زوج، والد", phCustomDuration: "مثال: 10 أيام، أسبوعين...", phCustomCity: "أدخل مدينتك / منطقتك...",
    phInterests: "أخبرنا بما يحمسك أكثر — مثال: المشي على سور الصين العظيم، جولة طعام الشوارع، زيارات الشركات...",
    phSpecialNotes: "أي متطلبات خاصة، مشاكل في التنقل، أماكن يجب زيارتها...",
    phMedical: "أي حالات طبية، حساسية، مشاكل في التنقل...", phSpecify: "يرجى التحديد...",
  },
};

export function getPlanT(lang: string): PlanT {
  const validLangs: PlanLang[] = ["en", "ru", "ja", "ko", "es", "pt", "fr", "ar"];
  const safeLang = (validLangs.includes(lang as PlanLang) ? lang : "en") as PlanLang;
  return planTranslations[safeLang];
}
