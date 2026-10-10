# DESIGN.md

## 品牌与视觉方向
- 品牌名：FUSEN（风泉）
- 定位：二手冷镦机（螺母/螺栓/螺丝）外贸出口独立站
- 风格：工业感 + 高端 B2B，中国红与金色点缀
- 气质：专业、可靠、如实透明、国际化

## Design Tokens

### 色彩
- 主色（深红）：#8B1A1A（brand-red，按钮/选中态/品牌强调）
- 主色浅：#A52A2A（hover）
- 金色：#C9A961（gold，线条/图标/边框 hover）
- 金色浅：#D4BC7E
- 深色背景：#1A1410（dark，WhyUs/Contact 区）
- 米白背景：#F8F5F0（cream，页面主背景）
- 纯白：#FFFFFF（卡片/表单背景）
- 次要文字：#574C43（用工具类 `text-muted-foreground`；`muted`/`bg-muted` 是浅米色背景色 #F0EBE3，切勿用作文字色）
- 边框色：#E5DDD3

### 字体
- 标题字体：Cormorant Garamond（优雅衬线体）
- 正文字体：Inter（现代无衬线）
- 中文标题：Noto Serif SC

### 间距
- Section 垂直间距：py-20 ~ py-32
- 容器最大宽度：max-w-7xl
- 卡片内边距：p-6 ~ p-8
- 表单区块内边距：p-8

### 圆角
- 卡片/表单：rounded-xl ~ rounded-2xl
- 按钮/选项 chip：rounded-full
- 输入框/图片：rounded-lg

### 阴影
- 卡片：shadow-sm；悬浮 shadow 加深 + translate-y
- 按钮无阴影，用边框和色彩区分

### 动效
- 滚动渐入：fade-in + slide-up
- 卡片悬浮：translate-y + shadow 加深
- 过渡时长：300ms ease
- WhatsApp 悬浮按钮延迟 2s 淡入，hover 放大至 1.05

## 布局与响应式
- 桌面端：多列网格，宽屏体验
- 平板：2 列网格
- 移动端：单列堆叠，汉堡菜单
- 询盘页内容宽度：max-w-4xl 居中
- 断点：sm(640) / md(768) / lg(1024) / xl(1280)

## 多语言
- 支持 27 种语言：EN / RU / JA / KO / ES / PT / FR / AR / DE / IT / NL / TH / ID / FA / HI / TR / KK / UZ / KY / TG / TK / PL / LA / FI / MS / SV / EL
- 已人工翻译 9 种：EN（基准）/ RU / JA / KO / ES / PT / FR / AR / DE；其余语言运行时自动回退英文
- 阿拉伯语、波斯语使用 RTL 布局
- 语言切换器在导航栏右侧

## 组件规范
- 导航栏：透明→滚动后白底带阴影；Logo 左 / 链接中 / 语言切换 + Get a Quote 右
- 导航链接：滚动前 bg-white/10、滚动后 bg-brand-red/10（hover 变实色 brand-red）；/plan 页面默认白底
- Hero：全屏仓库背景图 + 暗色遮罩 + 居中 badge/标题/双 CTA + 4 项统计
- 服务卡片：白底 + 内联 SVG 图标 + 标题 + 描述 + 悬浮金色边框
- 机器卡片：4:3 图片 + 年份徽章（Hot 徽章）+ 型号/品牌/工位/规格 + Inquire 按钮（→ /plan）
- 螺母/螺栓板块封面横幅：cover-nut.jpg / cover-bolt.jpg（写实风格、现代厂房、单台整机外观，统一深绿机身）；全站跳转用整页导航，锚点定位预留 80px 顶部偏移
- 分类/品牌：按钮式卡片网格，悬浮金边
- 选项 chip（表单内按钮组）：未选中白底灰边；选中 brand-red 底白字；多选型号用 grid
- 输入框：白底、灰边、focus 红边 + 红 ring
- 联系区：深色底，WhatsApp/邮箱通道卡片 + Formspree 快速表单（失败降级 WhatsApp）
- WhatsApp 悬浮按钮：右下角绿色圆形，wa.me/8613365764352

## 询价单页面（/plan）
- 5 个编号区块（圆形红色编号 + serif 标题）：
  1. 个人信息：姓名/公司/国家/邮箱/WhatsApp/WeChat，2 列网格
  2. 机器需求：机器类型按钮组、型号多选网格 + 自定义输入、工位按钮组、线径/切长/产品 3 列
  3. 采购偏好：品牌按钮组、年份下拉、成色按钮组、数量、预算下拉
  4. 附加服务：5 项复选框（海运/安装/报关/模具/培训）+ 电源规格
  5. 其他信息：采购时间按钮组、特殊需求文本框、来源渠道按钮组
- 提交区：同意条款复选框（未勾选显示错误提示）+ 红色圆角全宽提交按钮
- 提交成功：绿色勾选卡片 + WhatsApp 绿色按钮 + 返回首页（next/link）+ 再填一单
- 表单提交到 Formspree，失败时打开 WhatsApp
