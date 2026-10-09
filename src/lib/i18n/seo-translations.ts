// ============================================================
// FUSEN - Localized SEO content
// Professional section introductions + FAQ for the 8 fully
// translated languages. English remains the canonical base in
// translations.ts; these partials are deep-merged at export.
// ============================================================

import type { DeepPartial, LanguageCode, Translation } from "./translations";

// ------------------------------------------------------------
// Russian
// ------------------------------------------------------------
const ru: DeepPartial<Translation> = {
  products: {
    sectionIntro: {
      new: "Наши новые многопозиционные высадочные автоматы для болтов включают серии PT, GS и HM. Они созданы для производителей крепежа, которым нужна современная машина с полной гарантией, электрооборудованием по требованиям CE и заводской поддержкой. Стандартная серия PT подходит для обычных болтов, высокоскоростная серия GS — для массового производства, а серия HM с комбинированными матрицами — для сложных изделий. Каждая модель поставляется с полными техническими характеристиками, проектированием матриц и поддержкой при запуске.",
      usedNut: "Гайковысадочный автомат (формовщик гаек) автоматически формирует шестигранные и фланцевые гайки из проволоки на нескольких последовательных позициях. Наши бывшие в употреблении формовщики гаек охватывают распространённые размеры 11B, 14B, 17B, 19B и 24B — в основном 6-позиционные (6S) машины проверенных производителей, таких как Sijin, Yeswin и Jernyao. Каждая машина перед экспортом включается и проверяется: вы можете увидеть её работу и реальные допуски на видео. Покупка проверенного б/у формовщика гаек — экономичный способ расширить выпуск гаек M5–M24 за малую часть стоимости нового оборудования.",
      usedBolt: "Многопозиционные формовщики болтов и винтов формируют болты, винты и специальный крепёж через последовательность матриц. Наш ассортимент б/у охватывает компактные машины 10B2S / 13B3S до крупных многоручьевых формовщиков 62S–254SL от известных брендов: Sijin, Chunzu, BIAULI, Shengtuo, Tengfeng и Guyou. Каждый б/у формовщик болтов перед погрузкой проверяется и испытывается, с честным описанием износа и ремонта. Отгрузив сотни машин и оформив полный пакет экспортных документов, мы помогаем заводам крепежа по всему миру покупать надёжные формовщики и быстро вводить их в производство.",
    },
  },
  faq: {
    badge: "Вопросы и ответы",
    title: "Часто задаваемые вопросы",
    subtitle:
      "Практические ответы для покупателей б/у холодновысадочных автоматов из Китая.",
    items: [
      {
        title: "Можно ли увидеть машину в работе до оплаты?",
        desc: "Да. Мы включаем каждую б/у машину и отправляем видео в прямом эфире или в записи, где видно её работу, звук и реальные допуски — до внесения оплаты.",
      },
      {
        title: "Как вы доставляете машину в мою страну?",
        desc: "Мы оформляем полный пакет экспортных документов, надёжно грузим в контейнер и организуем морские перевозки до ближайшего порта. По запросу — страховка и помощь в таможенном оформлении.",
      },
      {
        title: "В чём разница между гайковыми машинами 11B, 14B, 19B и 24B?",
        desc: "Число обозначает размер машины и максимальную гайку, которую она формирует — от малых 11B до 24B для крупных гаек M20–M24. Более крупные машины работают с более толстой проволокой и имеют более мощную станину и двигатель.",
      },
      {
        title: "Предоставляете ли вы установку, матрицы и запчасти?",
        desc: "Да. Мы предлагаем удалённый или выездной пусконаладочный сервис, проектирование матриц, изнашиваемые детали и постоянную техническую поддержку для стабильного производства.",
      },
      {
        title: "Какие условия оплаты вы принимаете?",
        desc: "Обычно — задаток для подтверждения заказа и остаток перед погрузкой банковским переводом. Точные условия согласовываются по каждой машине в WhatsApp или по электронной почте.",
      },
    ],
  },
};

// ------------------------------------------------------------
// Japanese
// ------------------------------------------------------------
const ja: DeepPartial<Translation> = {
  products: {
    sectionIntro: {
      new: "当社の新型多段式ボルト圧造機は PT、GS、HM の3シリーズ。最新世代の機械に完全保証、CE対応の電装、工場サポートを求めるファスナーメーカー向けです。汎用ボルトには標準の PT、量産には高速の GS、複雑な部品には組合せダイの HM をお選びください。各機種は完全な仕様書、オーダーダイ設計、立ち上げサポートとともに納品され、受注から安定生産までをスムーズに進められます。",
      usedNut: "ナットフォーマー（ナット圧造機）は、コイル線材を複数の段階的なステーションで六角ナットやフランジナットに自動成形します。当社の中古機は、一般的な 11B、14B、17B、19B、24B サイズを網羅し、ほとんどが Sijin、Yeswin、Jernyao など実績あるメーカーの6段（6S）機です。各中古機は輸出前に通電・検査され、稼働映像で実際の動きと公差を確認できます。検査済みの中古ナットフォーマーは、新機の数分の一の価格で M5〜M24 ナットの生産能力を増強できる費用対効果の高い選択です。",
      usedBolt: "多段式ボルト・ネジフォーマーは、一連のダイを通じてボルト、ネジ、特殊ファスナーを成形します。当社の中古在庫は、小型の 10B2S / 13B3S から大型の 62S〜254SL 多段フォーマーまで対応し、Sijin、Chunzu、BIAULI、Shengtuo、Tengfeng、Guyou など確立されたブランドから調達しています。各中古ボルトフォーマーは積込前に検査・試運転され、摩耗や修理について正直に開示します。数百台の出荷実績と完全な輸出書類により、世界中のファスナー工場が信頼できる中古フォーマーを購入し、迅速に生産へ移行できるよう支援します。",
    },
  },
  faq: {
    badge: "よくある質問",
    title: "よくあるご質問",
    subtitle: "中国から中古圧造機を調達する購入者向けの実務的な回答です。",
    items: [
      {
        title: "支払い前に機械の稼働を確認できますか?",
        desc: "はい。すべての中古機に通電し、稼働中のライブまたは録画映像をお送りします。音と実際の公差を支払い前にご確認いただけます。",
      },
      {
        title: "どのように自国へ発送しますか?",
        desc: "完全な輸出書類の作成、安全なコンテナ積込み、最寄り港までの海上輸送を手配します。ご希望により保険や通関サポートも対応します。",
      },
      {
        title: "ナット機の 11B、14B、19B、24B の違いは何ですか?",
        desc: "数字は機械サイズと成形できる最大ナットを示します。小型の 11B から、M20〜M24 の大型ナット向け 24B まであり、大型機ほど太い線材を使い、フレームとモーターも強力です。",
      },
      {
        title: "据付、ダイ、スペア部品は提供しますか?",
        desc: "はい。リモートまたは現地での試運転、オーダーダイ設計、消耗部品、継続的な技術サポートを提供し、安定生産を実現します。",
      },
      {
        title: "どのような支払い条件に対応していますか?",
        desc: "一般的に、受注確定のための頭金と、積込み前の残金を銀行送金でお願いしています。正確な条件は機械ごとに WhatsApp またはメールでご相談いただけます。",
      },
    ],
  },
};

// ------------------------------------------------------------
// Korean
// ------------------------------------------------------------
const ko: DeepPartial<Translation> = {
  products: {
    sectionIntro: {
      new: "당사의 신형 다단 볼트 헤딩기는 PT, GS, HM 시리즈로 구성됩니다. 완전한 보증, CE 대응 전장, 공장 지원을 갖춘 최신 세대 기계를 원하는 파스너 제조업체에 적합합니다. 범용 볼트에는 표준 PT 라인을, 대량 생산에는 고속 GS 라인을, 복잡한 부품에는 복합 다이 HM 라인을 선택하십시오. 모든 모델은 완전한 기술 사양, 맞춤 다이 설계, 시운전 지원과 함께 제공되어 주문부터 안정적인 생산까지 시행착오 없이 진행할 수 있습니다.",
      usedNut: "너트 포머(너트 냉간 헤딩기)는 코일 선재를 여러 점진적인 스테이션을 거쳐 육각 및 플랜지 너트로 자동 성형합니다. 당사의 중고 너트 포머는 일반적인 11B, 14B, 17B, 19B, 24B 크기를 아우르며, 대부분 Sijin, Yeswin, Jernyao 등 검증된 제조사의 6스테이션(6S) 기계입니다. 각 중고 기계는 수출 전에 통전 및 검사되어, 가동 영상으로 실제 작동과 공차를 확인할 수 있습니다. 검사된 중고 너트 포머는 신규 장비의 일부 비용으로 M5~M24 너트 생산 능력을 늘릴 수 있는 경제적인 방법입니다.",
      usedBolt: "다단 볼트 및 나사 포머는 일련의 다이를 통해 볼트, 나사, 특수 파스너를 성형합니다. 당사의 중고 재고는 소형 10B2S / 13B3S 기계부터 대형 62S~254SL 다중 다이 포머까지 이르며, Sijin, Chunzu, BIAULI, Shengtuo, Tengfeng, Guyou 등 확립된 브랜드에서 조달합니다. 모든 중고 볼트 포머는 적재 전 검사 및 시운전되고 마모와 수리 내용을 솔직하게 공개합니다. 수백 대의 출하 실적과 완전한 수출 서류로 전 세계 파스너 공장이 믿을 수 있는 중고 포머를 구매하고 빠르게 생산에 투입하도록 돕습니다.",
    },
  },
  faq: {
    badge: "자주 묻는 질문",
    title: "자주 묻는 질문",
    subtitle: "중국에서 중고 냉간 헤딩기를 조달하는 구매자를 위한 실용적인 답변입니다.",
    items: [
      {
        title: "결제 전 기계가 작동하는 모습을 볼 수 있나요?",
        desc: "네. 모든 중고 기계에 통전하고 작동 모습을 라이브 또는 녹화 영상으로 보내드려, 결제 전 소리와 실제 공차를 확인하실 수 있습니다.",
      },
      {
        title: "기계를 제 국가로 어떻게 배송하나요?",
        desc: "완전한 수출 서류, 안전한 컨테이너 적재, 가장 가까운 항구까지의 해상 운송을 처리합니다. 요청 시 보험과 통관 지원도 가능합니다.",
      },
      {
        title: "너트 기계 11B, 14B, 19B, 24B의 차이는 무엇인가요?",
        desc: "숫자는 기계 크기와 성형 가능한 최대 너트를 나타냅니다. 작은 11B부터 M20~M24 대형 너트용 24B까지 있으며, 큰 기계일수록 더 굵은 선재를 사용하고 프레임과 모터도 강력합니다.",
      },
      {
        title: "설치, 다이, 예비 부품을 제공하나요?",
        desc: "네. 원격 또는 현장 시운전, 맞춤 다이 설계, 소모품, 지속적인 기술 지원을 제공해 기계가 안정적으로 생산하도록 합니다.",
      },
      {
        title: "어떤 결제 조건을 받나요?",
        desc: "일반적으로 주문 확정을 위한 계약금과 적재 전 잔금을 은행 송금으로 받습니다. 정확한 조건은 기계별로 WhatsApp 또는 이메일로 협의할 수 있습니다.",
      },
    ],
  },
};

// ------------------------------------------------------------
// Spanish
// ------------------------------------------------------------
const es: DeepPartial<Translation> = {
  products: {
    sectionIntro: {
      new: "Nuestras nuevas máquinas de estampado de pernos de múltiples estaciones cubren las series PT, GS y HM, pensadas para fabricantes de fijaciones que desean una máquina de generación actual con garantía completa, sistema eléctrico listo para CE y respaldo de fábrica. Elija la línea estándar PT para pernos generales, la línea de alta velocidad GS para producción en gran volumen o la línea HM de matrices combinadas para piezas complejas. Cada modelo se entrega con especificaciones técnicas completas, diseño de matrices a medida y apoyo en la puesta en marcha.",
      usedNut: "Una máquina de embutido de tuercas (también llamada formadora de tuercas) forma automáticamente tuercas hexagonales y con brida a partir de alambre en bobina a través de varias estaciones progresivas. Nuestras formadoras usadas abarcan los tamaños comunes 11B, 14B, 17B, 19B y 24B, principalmente máquinas de 6 estaciones (6S) de fabricantes probados como Sijin, Yeswin y Jernyao. Cada máquina de segunda mano se enciende e inspecciona antes de exportar, para que pueda verla funcionar y comprobar tolerancias reales en vídeo. Comprar una formadora de tuercas usada y probada es una forma rentable de ampliar la producción de tuercas M5 a M24 por una fracción del precio de un equipo nuevo.",
      usedBolt: "Las formadoras de múltiples estaciones para pernos y tornillos conforman estos productos mediante una secuencia de matrices. Nuestro stock usado cubre desde máquinas compactas 10B2S / 13B3S hasta grandes formadoras 62S–254SL, de marcas establecidas como Sijin, Chunzu, BIAULI, Shengtuo, Tengfeng y Guyou. Cada formadora de pernos usada se inspecciona y prueba antes de cargar, con información honesta sobre desgaste y reparaciones. Con cientos de unidades enviadas y documentación de exportación completa, ayudamos a fábricas de fijaciones de todo el mundo a comprar formadoras fiables y ponerlas en producción rápidamente.",
    },
  },
  faq: {
    badge: "Preguntas frecuentes",
    title: "Preguntas frecuentes",
    subtitle:
      "Respuestas prácticas para compradores que buscan máquinas de embutido en frío usadas en China.",
    items: [
      {
        title: "¿Puedo ver la máquina funcionando antes de pagar?",
        desc: "Sí. Encendemos cada máquina usada y le enviamos un vídeo en directo o grabado que muestra su funcionamiento, para que escuche el motor y compruebe tolerancias reales antes del pago.",
      },
      {
        title: "¿Cómo envían la máquina a mi país?",
        desc: "Gestionamos toda la documentación de exportación, la carga segura en contenedor y el flete marítimo a su puerto más cercano. También podemos ofrecer seguro y apoyo para el despacho aduanero.",
      },
      {
        title: "¿Cuál es la diferencia entre las máquinas de tuercas 11B, 14B, 19B y 24B?",
        desc: "El número indica el tamaño de la máquina y la tuerca máxima que puede formar: desde las pequeñas 11B hasta las 24B para tuercas grandes M20–M24. Las máquinas más grandes usan alambre más grueso y tienen bastidor y motor más potentes.",
      },
      {
        title: "¿Ofrecen instalación, matrices y repuestos?",
        desc: "Sí. Ofrecemos puesta en marcha remota o in situ, diseño de matrices a medida, piezas de desgaste y apoyo técnico continuo para que la máquina alcance una producción estable.",
      },
      {
        title: "¿Qué condiciones de pago aceptan?",
        desc: "Habitualmente aceptamos un depósito para confirmar el pedido y el saldo antes de la carga mediante transferencia bancaria. Los términos exactos se acuerdan por máquina y pueden comentarse por WhatsApp o correo electrónico.",
      },
    ],
  },
};

// ------------------------------------------------------------
// Portuguese
// ------------------------------------------------------------
const pt: DeepPartial<Translation> = {
  products: {
    sectionIntro: {
      new: "Nossas novas máquinas de estampagem de parafusos de múltiplas estações abrangem as séries PT, GS e HM, feitas para fabricantes de fixadores que desejam uma máquina de geração atual com garantia total, parte elétrica compatível com CE e suporte de fábrica. Escolha a linha padrão PT para parafusos em geral, a linha de alta velocidade GS para produção em larga escala ou a linha HM de matrizes combinadas para peças complexas. Cada modelo é entregue com especificações técnicas completas, projeto de matrizes personalizadas e suporte no comissionamento.",
      usedNut: "Uma máquina conformadora de porcas (também chamada de formadora de porcas) molda automaticamente porcas sextavadas e flangeadas a partir de fio em rolo por meio de várias estações progressivas. Nossas formadoras usadas abrangem os tamanhos comuns 11B, 14B, 17B, 19B e 24B, principalmente máquinas de 6 estações (6S) de fabricantes consagrados como Sijin, Yeswin e Jernyao. Cada máquina usada é ligada e inspecionada antes da exportação, para que você possa vê-la funcionar e verificar tolerâncias reais em vídeo. Comprar uma formadora de porcas usada e testada é uma maneira econômica de aumentar a capacidade de produção de porcas M5 a M24 por uma fração do preço de um equipamento novo.",
      usedBolt: "As formadoras de múltiplas estações para parafusos moldam esses produtos por meio de uma sequência de matrizes. Nosso estoque usado vai de máquinas compactas 10B2S / 13B3S até grandes formadoras 62S–254SL, de marcas estabelecidas como Sijin, Chunzu, BIAULI, Shengtuo, Tengfeng e Guyou. Cada formadora usada é inspecionada e testada antes do carregamento, com divulgação honesta de desgastes e reparos. Com centenas de unidades enviadas e documentação de exportação completa, ajudamos fábricas de fixadores no mundo todo a comprar formadoras confiables e colocá-las em produção rapidamente.",
    },
  },
  faq: {
    badge: "Perguntas frequentes",
    title: "Perguntas frequentes",
    subtitle:
      "Respostas práticas para compradores que adquirem máquinas de estampagem a frio usadas na China.",
    items: [
      {
        title: "Posso ver a máquina funcionando antes de pagar?",
        desc: "Sim. Ligamos cada máquina usada e enviamos um vídeo ao vivo ou gravado mostrando o funcionamento, para você ouvir o motor e verificar tolerâncias reais antes do pagamento.",
      },
      {
        title: "Como vocês enviam a máquina para o meu país?",
        desc: "Cuidamos de toda a documentação de exportação, do carregamento seguro em contêiner e do frete marítimo até o porto mais próximo. Mediante pedido, também oferecemos seguro e suporte no desembaraço aduaneiro.",
      },
      {
        title: "Qual é a diferença entre as máquinas de porcas 11B, 14B, 19B e 24B?",
        desc: "O número indica o tamanho da máquina e a porca máxima que ela pode conformar: das pequenas 11B às 24B para porcas grandes M20–M24. As máquinas maiores usam fio mais grosso e têm estrutura e motor mais potentes.",
      },
      {
        title: "Vocês fornecem instalação, matrizes e peças sobressalentes?",
        desc: "Sim. Oferecemos comissionamento remoto ou no local, projeto de matrizes personalizadas, peças de desgaste e suporte técnico contínuo para que a máquina atinja uma produção estável.",
      },
      {
        title: "Quais condições de pagamento vocês aceitam?",
        desc: "Normalmente aceitamos um depósito para confirmar o pedido e o saldo antes do carregamento por transferência bancária. Os termos exatos são acordados por máquina e podem ser discutidos pelo WhatsApp ou e-mail.",
      },
    ],
  },
};

// ------------------------------------------------------------
// French
// ------------------------------------------------------------
const fr: DeepPartial<Translation> = {
  products: {
    sectionIntro: {
      new: "Nos nouvelles machines à frapper les boulons multi-postes couvrent les séries PT, GS et HM, conçues pour les fabricants de fixations souhaitant une machine de dernière génération avec garantie complète, installation électrique conforme CE et support d’usine. Choisissez la ligne standard PT pour les boulons courants, la ligne grande vitesse GS pour la production en grande série ou la ligne HM à matrices combinées pour les pièces complexes. Chaque modèle est livré avec des spécifications techniques complètes, la conception des matrices sur mesure et une aide à la mise en service.",
      usedNut: "Une machine à frapper les écrous (aussi appelée formeuse d’écrous) forme automatiquement les écrous hexagonaux et à embase à partir de fil en bobine sur plusieurs postes successifs. Nos formeuses d’occasion couvrent les tailles courantes 11B, 14B, 17B, 19B et 24B, principalement des machines à 6 postes (6S) de fabricants éprouvés tels que Sijin, Yeswin et Jernyao. Chaque machine d’occasion est mise sous tension et inspectée avant exportation : vous pouvez la voir tourner et vérifier les tolérances réelles en vidéo. Acheter une formeuse d’écrous d’occasion contrôlée est un moyen économique d’augmenter la capacité de production d’écrous M5 à M24 pour une fraction du prix d’un équipement neuf.",
      usedBolt: "Les formeuses multi-postes pour boulons et vis façonnent ces pièces à travers une séquence de matrices. Notre stock d’occasion va des machines compactes 10B2S / 13B3S aux grandes formeuses 62S–254SL, issues de marques établies telles que Sijin, Chunzu, BIAULI, Shengtuo, Tengfeng et Guyou. Chaque formeuse à boulons d’occasion est inspectée et testée avant chargement, avec une communication honnête sur l’usure et les réparations. Forts de centaines de machines expédiées et d’une documentation d’exportation complète, nous aidons les usines de fixations du monde entier à acheter des formeuses fiables et à les mettre rapidement en production.",
    },
  },
  faq: {
    badge: "FAQ",
    title: "Questions fréquentes",
    subtitle:
      "Des réponses concrètes pour les acheteurs de machines à frapper à froid d’occasion en Chine.",
    items: [
      {
        title: "Puis-je voir la machine tourner avant de payer ?",
        desc: "Oui. Nous mettons sous tension chaque machine d’occasion et vous envoyons une vidéo en direct ou enregistrée montrant son fonctionnement, afin d’entendre le moteur et de vérifier les tolérances réelles avant paiement.",
      },
      {
        title: "Comment expédiez-vous la machine dans mon pays ?",
        desc: "Nous gérons toute la documentation d’exportation, le chargement sécurisé en conteneur et le fret maritime jusqu’au port le plus proche. Sur demande, nous proposons également l’assurance et une aide au dédouanement.",
      },
      {
        title: "Quelle est la différence entre les machines à écrous 11B, 14B, 19B et 24B ?",
        desc: "Le chiffre indique la taille de la machine et l’écrou maximal qu’elle peut former : des petites 11B aux 24B pour les grands écrous M20–M24. Les machines plus grandes utilisent un fil plus épais et possèdent un bâti et un moteur plus puissants.",
      },
      {
        title: "Proposez-vous l’installation, les matrices et les pièces de rechange ?",
        desc: "Oui. Nous proposons une mise en service à distance ou sur site, la conception de matrices sur mesure, les pièces d’usure et un support technique continu pour une production stable.",
      },
      {
        title: "Quelles conditions de paiement acceptez-vous ?",
        desc: "Nous acceptons généralement un acompte pour confirmer la commande et le solde avant chargement par virement bancaire. Les conditions exactes sont convenues par machine et peuvent être discutées sur WhatsApp ou par e-mail.",
      },
    ],
  },
};

// ------------------------------------------------------------
// Arabic
// ------------------------------------------------------------
const ar: DeepPartial<Translation> = {
  products: {
    sectionIntro: {
      new: "تغطي آلات تشكيل البراغي الجديدة متعددة المحطات لدينا سلاسل PT وGS وHM، وهي مصممة لمصنّعي المثبتات الذين يرغبون في آلة من الجيل الحديث مع ضمان كامل ومنظومة كهربائية جاهزة لمتطلبات CE ودعم من المصنع. اختر خط PT القياسي للبراغي العامة، أو خط GS عالي السرعة للإنتاج بكميات كبيرة، أو خط HM ذي القوالب المركبة للقطع المعقدة. تُسلَّم كل طراز بمواصفات فنية كاملة وتصميم قوالب مخصص ودعم أثناء التشغيل التجريبي، حتى تنتقل من الطلب إلى إنتاج مستقر دون تخمين.",
      usedNut: "تقوم آلة تشكيل الصواميل (وتسمى أيضًا فورمة الصواميل) بتشكيل الصواميل السداسية وذات الحافة تلقائيًا من سلك ملفوف عبر عدة محطات متتابعة. تشمل آلات الصواميل المستعملة لدينا الأحجام الشائعة 11B و14B و17B و19B و24B، ومعظمها آلات بست محطات (6S) من مصنعين موثوقين مثل Sijin وYeswin وJernyao. يتم تشغيل وفحص كل آلة مستعملة قبل التصدير، بحيث يمكنك رؤيتها تعمل والتحقق من التفاوتات الحقيقية عبر الفيديو. إن شراء آلة صواميل مستعملة تم فحصها هو وسيلة اقتصادية لإضافة طاقة إنتاجية للصواميل من M5 إلى M24 بجزء بسيط من سعر المعدات الجديدة.",
      usedBolt: "تقوم آلات التشكيل متعددة المحطات للبراغي بتشكيل البراغي واللوالب والمثبتات الخاصة عبر سلسلة من القوالب. يغطي مخزوننا المستعمل آلات مدمجة 10B2S / 13B3S وحتى آلات تشكيل كبيرة 62S–254SL من علامات راسخة مثل Sijin وChunzu وBIAULI وShengtuo وTengfeng وGuyou. يتم فحص وتشغيل كل آلة براغي مستعملة قبل التحميل، مع إفصاح صادق عن التآكل والإصلاحات. بفضل شحن مئات الآلات ووثائق التصدير الكاملة، نساعد مصانع المثبتات حول العالم على شراء آلات تشكيل مستعملة موثوقة وإدخالها في الإنتاج بسرعة.",
    },
  },
  faq: {
    badge: "الأسئلة الشائعة",
    title: "الأسئلة الشائعة",
    subtitle: "إجابات عملية للمشترين الباحثين عن آلات التشكيل على البارد المستعملة من الصين.",
    items: [
      {
        title: "هل يمكنني رؤية الآلة تعمل قبل الدفع؟",
        desc: "نعم. نقوم بتشغيل كل آلة مستعملة ونرسل لك فيديو مباشرًا أو مسجَّلًا يُظهر عملها، لتستمع إلى صوت المحرك وتتحقق من التفاوتات الحقيقية قبل الدفع.",
      },
      {
        title: "كيف تشحنون الآلة إلى بلدي؟",
        desc: "نتولى وثائق التصدير كاملة والتحميل الآمن داخل الحاوية والشحن البحري إلى أقرب ميناء لديك. ويمكننا أيضًا توفير التأمين ودعم التخليص الجمركي عند الطلب.",
      },
      {
        title: "ما الفرق بين آلات الصواميل 11B و14B و19B و24B؟",
        desc: "يشير الرقم إلى حجم الآلة وأقصى صامولة يمكنها تشكيلها: من آلات 11B الصغيرة إلى 24B للصواميل الكبيرة M20–M24. وتستخدم الآلات الأكبر سلكًا أكثر سماكة وتمتلك هيكلًا ومحركًا أقوى.",
      },
      {
        title: "هل تقدمون التركيب والقوالب وقطع الغيار؟",
        desc: "نعم. نقدم التشغيل التجريبي عن بُعد أو في الموقع، وتصميم القوالب المخصصة، وقطع التآكل، والدعم الفني المستمر لتصل الآلة إلى إنتاج مستقر.",
      },
      {
        title: "ما شروط الدفع التي تقبلونها؟",
        desc: "نقبل عادة دفعة مقدمة لتأكيد الطلب والرصيد قبل التحميل عبر تحويل بنكي. تُتَّفق الشروط الدقيقة لكل آلة ويمكن مناقشتها عبر واتساب أو البريد الإلكتروني.",
      },
    ],
  },
};

// ------------------------------------------------------------
// German
// ------------------------------------------------------------
const de: DeepPartial<Translation> = {
  products: {
    sectionIntro: {
      new: "Unsere neuen mehrstufigen Schraubenpressen decken die Serien PT, GS und HM ab und sind für Verbindungsteilehersteller gedacht, die eine Maschine der aktuellen Generation mit voller Garantie, CE-fähiger Elektrik und Herstellerunterstützung benötigen. Wählen Sie die Standardlinie PT für allgemeine Schrauben, die Hochgeschwindigkeitslinie GS für die Großserienfertigung oder die HM-Linie mit kombinierten Werkzeugen für komplexe Teile. Jedes Modell wird mit vollständigen technischen Daten, individueller Werkzeugauslegung und Inbetriebnahme-Unterstützung geliefert, damit Sie ohne Rätselraten vom Auftrag zur stabilen Produktion gelangen.",
      usedNut: "Eine Mutterpresse (auch Mutterformer genannt) formt Sechskant- und Bundmuttern automatisch aus Drahtring über mehrere aufeinanderfolgende Stationen. Unsere gebrauchten Mutterformer decken die gängigen Größen 11B, 14B, 17B, 19B und 24B ab, meist 6-Stationen-Maschinen (6S) bewährter Hersteller wie Sijin, Yeswin und Jernyao. Jede Gebrauchtmaschine wird vor dem Export eingeschaltet und geprüft, sodass Sie sie im Video laufen sehen und echte Toleranzen prüfen können. Der Kauf eines geprüften gebrauchten Mutterformers ist ein kosteneffizienter Weg, die Kapazität für Muttern M5 bis M24 zu einem Bruchteil des Preises einer Neumaschine zu erweitern.",
      usedBolt: "Mehrstufige Schrauben- und Bolzenformer formen diese Teile über eine Abfolge von Werkzeugen. Unser Gebrauchtbestand reicht von kompakten Maschinen 10B2S / 13B3S bis zu großen 62S–254SL Mehrfachformern etablierter Marken wie Sijin, Chunzu, BIAULI, Shengtuo, Tengfeng und Guyou. Jeder gebrauchte Bolzenformer wird vor der Verladung geprüft und getestet, mit ehrlicher Angabe von Verschleiß und Reparaturen. Mit hunderten ausgelieferten Maschinen und vollständigen Exportdokumenten helfen wir Verbindungsteilefabriken weltweit, zuverlässige Gebrauchtformer zu kaufen und sie schnell in Produktion zu bringen.",
    },
  },
  faq: {
    badge: "FAQ",
    title: "Häufig gestellte Fragen",
    subtitle:
      "Praktische Antworten für Käufer, die gebrauchte Kaltpressen aus China beziehen.",
    items: [
      {
        title: "Kann ich die Maschine vor der Zahlung laufen sehen?",
        desc: "Ja. Wir schalten jede Gebrauchtmaschine ein und senden Ihnen ein Live- oder aufgezeichnetes Video des Betriebs, damit Sie den Motor hören und echte Toleranzen vor der Zahlung prüfen können.",
      },
      {
        title: "Wie versenden Sie die Maschine in mein Land?",
        desc: "Wir übernehmen die vollständigen Exportdokumente, die sichere Containerverladung und die Seefracht zu Ihrem nächsten Hafen. Auf Wunsch organisieren wir auch Versicherung und Unterstützung bei der Zollabfertigung.",
      },
      {
        title: "Was ist der Unterschied zwischen den Mutternmaschinen 11B, 14B, 19B und 24B?",
        desc: "Die Zahl gibt die Maschinengröße und die maximal formbare Mutter an: von kleinen 11B bis zu 24B für große Muttern M20–M24. Größere Maschinen verarbeiten dickeren Draht und haben einen schwereren Rahmen und stärkere Motoren.",
      },
      {
        title: "Bieten Sie Installation, Werkzeuge und Ersatzteile an?",
        desc: "Ja. Wir bieten Remote- oder Vor-Ort-Inbetriebnahme, individuelle Werkzeugauslegung, Verschleißteile und fortlaufende technische Unterstützung für eine stabile Produktion.",
      },
      {
        title: "Welche Zahlungsbedingungen akzeptieren Sie?",
        desc: "Üblicherweise akzeptieren wir eine Anzahlung zur Auftragsbestätigung und den Restbetrag vor der Verladung per Banküberweisung. Die genauen Bedingungen werden je Maschine vereinbart und können über WhatsApp oder E-Mail besprochen werden.",
      },
    ],
  },
};

// ------------------------------------------------------------
// Merge map
// ------------------------------------------------------------
export const seoContent: Partial<Record<LanguageCode, DeepPartial<Translation>>> = {
  ru,
  ja,
  ko,
  es,
  pt,
  fr,
  ar,
  de,
};
