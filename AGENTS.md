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
│   ├── layout.tsx              # 根布局（LanguageProvider + WhatsAppFloat、字体、SEO metadata）
│   ├── page.tsx                # 首页（组合所有模块）
│   ├── plan/page.tsx           # 机器采购询价单（5 区块表单）
│   └── globals.css             # 全局样式 + 品牌设计令牌
├── components/fusen/
│   ├── Navbar.tsx              # 固定导航栏（滚动变色 + 移动端菜单 + isPlan 白底）
│   ├── LanguageSwitcher.tsx    # 27 语言切换下拉
│   ├── Hero.tsx                # 首屏 Hero（仓库背景图 + CTA + 统计）
│   ├── Services.tsx            # 4 项服务（检验翻新/出口海运/安装调试/备件售后）
│   ├── Products.tsx            # 在售机器网格（8 台）
│   ├── Categories.tsx          # 机型分类（8 类）
│   ├── Brands.tsx              # 可采购品牌（8 个）
│   ├── WhyUs.tsx               # 4 项优势（通电试机/如实披露/出口经验/价格）
│   ├── Testimonials.tsx        # 3 条海外采购商评价
│   ├── Contact.tsx             # 联系区（WhatsApp/邮箱 + 快速表单）
│   ├── Footer.tsx              # 页脚
│   └── WhatsAppFloat.tsx       # WhatsApp 悬浮按钮（默认导出）
├── lib/
│   ├── i18n/
│   │   ├── translations.ts     # 首页翻译（en 基准 + ru/ja/ko/es/pt/fr/ar/de，共 9 语言）
│   │   ├── plan-translations.ts# 询价单翻译（同样 9 语言）
│   │   └── LanguageProvider.tsx# 多语言 Context Provider（深度合并英文兜底）
│   └── fusen/
│       ├── data.ts             # CONTACT_INFO、MACHINE_BRANDS、MACHINE_CATEGORIES
│       └── inventory.ts        # 真实在售库存：NUT_STOCK(约36台)+BOLT_STOCK(含春日80台)，CATEGORY_IMAGE
└── public/machines/            # 机器/仓库/出货等配图（AI 占位图，待换用户实拍）

> Products.tsx 依据 inventory.ts 真实库存分组展示（按型号聚合品牌×数量），不再使用编造机型。
```

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
- **主营机型**: 1D2B / 2D4B / 3D3B / 4D4B / 5D5B / 6D6B、螺母机 14B/17B/19B
- **常见品牌**: Sijin（思进）、Spring（春日）、Asahi Okuma、Sakamura、Nakashimada、Tanisaka、Hyodong
- **联系方式**:
  - Email: info@fusenco.com
  - WhatsApp / 电话: +86 133-6576-4352
  - WhatsApp 链接: https://wa.me/8613365764352
  - 地址: Dongguan, Guangdong, China
