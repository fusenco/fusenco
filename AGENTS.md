# FUSEN - Used Cold Heading Machines Export

## 项目概览
二手冷镦机（螺母冷镦机、螺栓打头机、螺丝成型机）外贸独立站。基于 Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4 构建，静态导出（output: 'export'）部署于 Netlify。支持 27 种语言，工业感 + 中国红 + 金色的 B2B 风格。

## 技术栈
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Fonts**: Inter (body) + Cormorant Garamond (serif/display)
- **i18n**: 自建轻量多语言系统（Context + localStorage 持久化），英文 canonical 基准 + DeepPartial 深度合并兜底
- **表单**: Formspree (`https://formspree.io/f/xwvgoavg`)，失败降级 WhatsApp

## 目录结构
```
src/
├── app/
│   ├── layout.tsx              # 根布局（LanguageProvider + WhatsAppFloat + JsonLd、字体、SEO metadata）
│   ├── page.tsx                # 首页（组合所有模块）
│   ├── machines/[model]/page.tsx # 机型详情页（SSG 静态导出全部机型；server 分发 + generateStaticParams/Metadata/Product JSON-LD）
│   ├── blog/layout.tsx         # /blog 独立 SEO metadata（canonical /blog/）
│   ├── blog/page.tsx           # 新闻博客列表页（文章+视频，按类型筛选）
│   ├── blog/[slug]/page.tsx    # 博客文章/视频详情页（SSG 静态导出；BlogPosting/VideoObject JSON-LD + metadata）
│   ├── plan/page.tsx           # 机器采购询价单（5 区块表单）
│   ├── plan/layout.tsx         # /plan 独立 SEO metadata（canonical /plan/）
│   ├── robots.ts               # robots.txt（允许全站 + sitemap 指向）
│   ├── sitemap.ts              # sitemap.xml（/、/plan/ + 全部 in-stock 机型详情页，静态导出）
│   └── globals.css             # 全局样式 + 品牌设计令牌
├── components/fusen/
│   ├── Navbar.tsx              # 固定导航栏（滚动变色 + 移动端菜单 + isPlan 白底）
│   ├── LanguageSwitcher.tsx    # 27 语言切换下拉
│   ├── Hero.tsx                # 首屏 Hero（仓库背景图 + CTA + 统计）
│   ├── Services.tsx            # 4 项服务（检验翻新/出口海运/安装调试/备件售后）
│   ├── Products.tsx            # 三大产品板块（新机规格表 + 二手螺母/螺栓，型号行可点击跳 /machines/[model]，含 SEO 专业文案）
│   ├── MachineDetailClient.tsx # 机型详情页 client 组件（useLanguage 渲染 + Navbar/Footer + Product JSON-LD）
│   ├── Categories.tsx          # 机型分类（8 类）
│   ├── Brands.tsx              # 可采购品牌（8 个）
│   ├── WhyUs.tsx               # 4 项优势（通电试机/如实披露/出口经验/价格）
│   ├── Testimonials.tsx        # 3 条海外采购商评价
│   ├── Faq.tsx                 # FAQ 折叠列表 + FAQPage JSON-LD（客户端按当前语言生成）
│   ├── BlogPostClient.tsx       # 博客详情页 client 组件（useLanguage 渲染 + VideoObject/BlogPosting JSON-LD + Navbar/Footer）
│   ├── Contact.tsx             # 联系区（WhatsApp/邮箱 + 快速表单）
│   ├── Footer.tsx              # 页脚
│   ├── JsonLd.tsx              # Organization + WebSite 结构化数据（服务端渲染）
│   └── WhatsAppFloat.tsx       # WhatsApp 悬浮按钮（默认导出）
├── lib/
│   ├── i18n/
│   │   ├── translations.ts     # 首页翻译（en 基准 + ru/ja/ko/es/pt/fr/ar/de，共 9 语言；导出时 deepMerge seoContent）
│   │   ├── seo-translations.ts # 8 语言本地化 SEO 内容（products.sectionIntro + faq）
│   │   ├── plan-translations.ts# 询价单翻译（同样 9 语言）
│   │   └── LanguageProvider.tsx# 多语言 Context Provider（深度合并英文兜底）
│   └── fusen/
│       ├── data.ts             # CONTACT_INFO、MACHINE_BRANDS、MACHINE_CATEGORIES
│       ├── inventory.ts        # 新打头机(NEW_BOLT_MACHINES: PT/GS/HM规格表) + 二手库存 NUT_STOCK(36台)+BOLT_STOCK(含春日80台) + CATEGORY_IMAGE
│       ├── machines.ts         # 机型详情查询：getMachineDetail(机型聚合品牌×数量)、allModels/slug 映射（供 /machines/[model] server+client 共用）
│       └── blog.ts             # 博客数据模块：BLOG_CONTENT + BLOG_POSTS（文章/视频）、getPostBySlug/isArticlePost/pickLang
└── public/machines/            # Hero 车间实拍、cover-nut.jpg / cover-bolt.jpg（螺母/螺栓板块封面）等配图
└── public/real/                # 机器实拍（思进19B-6S、装货发货照片）+ 新机规格表截图
└── public/videos/              # product-tuning.mp4（产品调试视频，HEVC 原片）+ product-tuning-h264.mp4（H.264 转码版，播放器实际使用）

> Products.tsx 首页"在售机器"分为三大板块：① 新打头机（PT/GS/HM 全规格表）②二手螺母冷镦机 ③二手螺栓成型机（按型号聚合品牌×数量）。每个板块编号标题下方渲染本地化专业 SEO 文案（products.sectionIntro）。
```

## SEO 架构（重要）
- **Metadata**：根 `layout.tsx` 用 `metadataBase=https://fusenco.com` + title `template` + `alternates.canonical`；首页、/plan 各自独立 title/description/keywords，/plan 用嵌套 `plan/layout.tsx` 提供 metadata（page.tsx 为 client component）。
- **sitemap / robots**：`app/sitemap.ts` 输出 `/`、`/plan/`、`/blog/` 与全部机器详情页、博客文章；`app/robots.ts` 允许全站抓取并指向 sitemap。两者静态导出为 `out/sitemap.xml`、`out/robots.txt`。
- **结构化数据（JSON-LD）**：`JsonLd.tsx` 服务端注入 `Organization` + `WebSite`；`Faq.tsx` 客户端按当前语言注入 `FAQPage`。
- **多语言 SEO 内容**：`seo-translations.ts` 存放 8 种人工语言的板块文案与 FAQ，`translations.ts` 在导出 Record 时通过 `deepMerge` 合并；未翻译语言仍回退英文。
- **图片 alt**：产品封面 alt 含机型/数量/用途关键词；Hero 为 CSS 背景（装饰性）。
- 待办（后续）：在 Google Search Console / Bing Webmaster 验证站点并提交 sitemap；考虑机型独立详情页与 hreflang。


## 导航机制（重要）
全站跳转统一使用浏览器整页导航（`window.location.assign`），**不使用** `next/navigation` 的 `router.push`/`useRouter`。原因：静态导出部署在 Netlify，客户端路由在 /plan ↔ 首页之间的跳转不可靠（曾出现进入 /plan 后无法返回）。锚点通过 URL hash（如 `/#products`）定位，`html` 已设 `scroll-padding-top:80px` 避免被固定导航栏遮挡。仅 /plan 成功页的"返回首页"使用 `next/link`（静态导出会渲染为标准 `<a>`）。

## 品牌设计令牌
- **主色（中国红）**: #8B1A1A (`brand-red`)
- **辅色（金）**: #C9A961 (`gold`)
- **深色背景**: #1A1410 (`dark`)
- **米白背景**: #F8F5F0 (`cream`)
- **次要文字**: #6B5D52 (`muted`)
- **边框**: #E5DDD3
- **字体**: Cormorant Garamond (serif) + Inter (sans)

## 多语言系统
支持语言：27 种（EN/RU/JA/KO/ES/PT/FR/AR/DE/IT/NL/TH/ID/FA/HI/TR/KK/UZ/KY/TG/TK/PL/LA/FI/MS/SV/EL）
- **英文兜底机制**：`DeepPartial<T>` + `mergeTranslation` 深度合并，未翻译语言/缺失键自动回退英文，永不空白
- 阿拉伯语、波斯语自动切换 RTL 布局
- 语言选择持久化到 localStorage（key: `fusen-lang`）
- 所有文本通过 `useLanguage().t` 获取

## 新闻博客页面（/blog）
- 用于发布文章与视频，提升网站流量（替代导航中原"Brands"入口）
- 导航链接：`/blog`（`t.nav.news`，9 语言已翻译；原 `nav.brands` 字段已并入 `nav.news`）
- 列表页（app/blog/page.tsx）：`BlogPage` client 组件，深色头部 + 类型筛选（All/Articles/Videos）+ 卡片网格；视频卡片内嵌 controls 播放器，文章卡片显示封面/摘要
- 详情页（app/blog/[slug]/page.tsx）：SSG 静态导出全部文章；server 端生成 `BlogPosting`（文章）JSON-LD，客户端生成 `VideoObject`（视频）JSON-LD；含 CTA 引导询价
- 数据源：`src/lib/fusen/blog.ts` 的 `BLOG_POSTS`（文章 article / 视频 video，标题/摘要/正文 9 语言），`BLOG_CONTENT` 为页面文案；新增内容直接往数组添加对象即可
- **视频兼容性**：所有嵌入式 `<video>` 必须使用 H.264（H.265/HEVC 会被浏览器忽略只出声音）。`public/videos/product-tuning-h264.mp4` 为转码兼容版

## 询价单页面（/plan）
- 5 个编号区块：
  1. 个人信息（姓名/公司/国家/邮箱/WhatsApp/WeChat）
  2. 机器需求（机器类型多选、型号多选+自定义、工位、线径/切长/产品）
  3. 采购偏好（品牌、年份、成色、数量、预算）
  4. 附加服务（海运/安装/报关/模具/培训 + 电源规格）
  5. 其他信息（采购时间、特殊需求、来源渠道）
- 同意条款 + 提交；成功页含 WhatsApp CTA / 返回首页 / 再填一单
- Formspree 提交，失败时打开 WhatsApp

## 构建与测试命令
```bash
pnpm install        # 安装依赖
pnpm run dev        # 开发模式（热更新）
pnpm run build      # 生产构建（静态导出）
pnpm ts-check       # TypeScript 类型检查
pnpm lint           # ESLint 检查
```

## 业务信息
- **品牌**: FUSEN（风泉）
- **业务**: 二手螺母冷镦机、螺栓打头机、螺丝成型机收购与出口
- **主营机型**: 螺母机 11B / 14B / 17B / 19B / 24B（6S 多工位）；螺栓/螺丝多工位成型机 62S–254SL、10B2S/13B3S 等
- **常见品牌**: Sijin（思进）、Chunzu（春日）、Yeswin（联翔）、Jernyao（正曜）、BIAULI（标利）、Tengfeng（腾丰）、Shengtuo（盛拓）、Guyou（固友，宁波）
- **联系方式**:
  - Email: info@fusenco.com
  - WhatsApp / 电话: +86 133-6576-4352
  - WhatsApp 链接: https://wa.me/8613365764352
  - 地址: Zhejiang, China
