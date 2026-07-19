# FUSEN - China Local Guide Service

## 项目概览
面向国外独立游客的中国地陪服务独立站。基于 Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4 构建。支持 8 种语言（英/俄/日/韩/西/葡/法/阿），东方文化感与高端商务融合设计风格。

## 技术栈
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + shadcn/ui 设计令牌
- **Fonts**: Inter (body) + Cormorant Garamond (serif/display)
- **i18n**: 自建轻量多语言系统（Context + localStorage 持久化），支持 27 种语言

## 目录结构
```
src/
├── app/
│   ├── layout.tsx              # 根布局（LanguageProvider 包裹、字体加载）
│   ├── page.tsx                # 首页（组合所有模块）
│   └── globals.css            # 全局样式 + FUSEN 品牌设计令牌
├── components/
│   └── fusen/
│       ├── Navbar.tsx          # 固定导航栏（滚动变色 + 移动端菜单）
│       ├── LanguageSwitcher.tsx# 多语言切换下拉
│       ├── Hero.tsx            # 首屏 Hero（背景图 + CTA + 统计数据）
│       ├── Services.tsx        # 服务介绍（4 项卡片）
│       ├── Destinations.tsx    # 热门目的地（8 城市图片网格）
│       ├── Guides.tsx          # 导游展示（4 位导游卡片）
│       ├── WhyUs.tsx           # 为什么选择我们（4 项优势）
│       ├── Testimonials.tsx    # 客户评价（3 条证言）
│       ├── Contact.tsx         # 联系区（WhatsApp/邮箱 + 询价表单）
│       └── Footer.tsx          # 页脚
├── lib/
│   ├── i18n/
│   │   ├── translations.ts     # 8 语言翻译数据
│   │   └── LanguageProvider.tsx# 多语言 Context Provider
│   └── fusen/
│       └── data.ts             # 导游数据、联系方式、目的地图片
└── public/
    ├── fusen-logo.png          # FUSEN LOGO
    ├── hero-mountain.jpg       # 首屏背景图
    └── pattern-bg.jpg          # 装饰纹理背景
```

## 品牌设计令牌
- **主色（中国红）**: #8B1A1A
- **辅色（金）**: #C9A961
- **深色背景**: #1A1410
- **浅色背景**: #F8F5F0
- **卡片背景**: #FFFFFF
- **边框**: #E5DDD3
- **字体**: Cormorant Garamond (serif) + Inter (sans)

## 多语言系统
支持语言：EN, RU, JA, KO, ES, PT, FR, AR
- 阿拉伯语自动切换 RTL 布局
- 语言选择持久化到 localStorage
- 所有文本内容均通过 `useLanguage().t` 获取

## 构建与测试命令
```bash
pnpm install        # 安装依赖
pnpm run dev        # 开发模式（热更新）
pnpm run build      # 生产构建
pnpm run start      # 生产启动
pnpm ts-check       # TypeScript 类型检查
pnpm lint           # ESLint 检查
```

## 业务信息
- **品牌**: FUSEN
- **服务**: 英语及小语种翻译、私人探店、商务对接、工厂探访对接
- **目标客户**: 来华个人游、过境免签、家庭旅行
- **联系方式**: WhatsApp + 邮箱（无在线预订系统）
- **导游**: 4 位导游（北京/上海/深圳/成都），多语言能力
