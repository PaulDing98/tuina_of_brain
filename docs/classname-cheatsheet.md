# Tailwind CSS className 速查表

> 项目：`tuina_of_brain` | Tailwind v4 | 深色模式支持

---

## 🎨 项目自定义主题

### 颜色变量（来自 style.css）

| class | 说明 | 值 |
|-------|------|-----|
| `text-primary` / `bg-primary` | 主色调（橙色） | `#ec5b13` |
| `text-primary/10` | 主色 10% 透明度 | 用于边框、背景 |
| `bg-background-light` | 浅色背景 | `#f8f6f6` |
| `bg-background-dark` | 深色背景 | `#221610` |

### 深色模式切换

```tsx
// 父级加 dark 类，子元素自动切换
<div className="dark">
  <p className="text-slate-900 dark:text-slate-100">自动变色</p>
</div>
```

---

## 📐 布局 Layout

### Flex 布局

| class | 说明 |
|-------|------|
| `flex` | 开启 flex |
| `flex-col` | 垂直排列（column） |
| `flex-1` | 占据剩余空间 |
| `items-center` | 垂直居中 |
| `justify-center` | 水平居中 |
| `justify-between` | 两端对齐 |
| `gap-2` / `gap-4` / `gap-6` | 间距（0.5rem / 1rem / 1.5rem） |

### Grid 布局

| class | 说明 |
|-------|------|
| `grid` | 开启 grid |
| `grid-cols-5` | 5列 |
| `grid-cols-1 sm:grid-cols-2` | 手机1列，平板+2列 |

### 尺寸

| class | 说明 |
|-------|------|
| `min-h-screen` | 最小高度 = 视口高度 |
| `h-auto` | 高度自适应 |
| `h-full` | 高度 100% |
| `h-10` / `h-14` / `h-16` | 固定高度（2.5rem / 3.5rem / 4rem） |
| `w-full` | 宽度 100% |
| `w-10` / `size-8` | 固定宽度（size 是 w + h） |
| `max-w-[960px]` | 最大宽度 960px |
| `aspect-square` | 宽高比 1:1 |
| `aspect-video` | 宽高比 16:9 |

---

## 🎭 间距 Padding / Margin

| class | 说明 |
|-------|------|
| `p-4` / `p-6` | padding 1rem / 1.5rem |
| `px-4` / `px-6` | 水平方向 padding |
| `py-4` / `py-8` | 垂直方向 padding |
| `pb-24` | 底部 padding 6rem（给 fixed footer 留空间） |
| `mt-10` / `mb-6` | margin-top / margin-bottom |

**响应式断点**：`sm:` `md:` `lg:`
```tsx
px-4 sm:px-6 lg:px-0   // 手机4，平板6，桌面0
```

---

## 🎯 样式修饰

### 圆角

| class | 说明 |
|-------|------|
| `rounded-lg` | 大圆角（0.5rem） |
| `rounded-xl` | 更大圆角（0.75rem） |
| `rounded-2xl` | 超大圆角（1rem） |
| `rounded-full` | 圆形 |

### 边框

| class | 说明 |
|-------|------|
| `border` | 边框 |
| `border-b` | 底部边框 |
| `border-t` | 顶部边框 |
| `border-primary/5` | 主色 5% 透明度边框 |
| `border-solid` | 实线边框 |

### 阴影

| class | 说明 |
|-------|------|
| `shadow-sm` | 小阴影 |
| `shadow-xl` | 大阴影 |
| `shadow-lg shadow-primary/20` | 主色阴影 20% 透明度 |

---

## 📝 文字 Typography

| class | 说明 |
|-------|------|
| `text-sm` / `text-base` / `text-lg` / `text-xl` / `text-2xl` | 字号 |
| `text-xs` | 超小字（0.75rem） |
| `text-3xl` | 大字（1.875rem） |
| `font-bold` | 粗体 |
| `font-semibold` | 半粗 |
| `font-medium` | 中等粗细 |
| `text-center` | 居中 |
| `leading-tight` | 紧凑行高 |
| `tracking-tight` | 紧凑字间距 |
| `tracking-wider` | 加宽字间距 |
| `uppercase` | 全大写 |
| `whitespace-nowrap` | 不换行 |

### 文字颜色

| class | 说明 |
|-------|------|
| `text-slate-900` | 深灰（浅色模式主文字） |
| `text-slate-500` / `text-slate-400` | 中灰/浅灰（次要文字） |
| `dark:text-slate-100` | 浅色文字（深色模式） |
| `dark:text-slate-400` | 次要浅色文字 |

---

## 🎪 交互状态

| class | 说明 |
|-------|------|
| `cursor-pointer` | 鼠标手型 |
| `hover:bg-primary/20` | 悬停时背景变深 |
| `hover:border-primary/30` | 悬停时边框变色 |
| `hover:underline` | 悬停下划线 |
| `active:scale-95` | 点击时缩小（按压效果） |
| `transition-all` / `transition-colors` | 过渡动画 |
| `duration-500` | 动画时长 500ms |

---

## 🏗️ 定位 Position

| class | 说明 |
|-------|------|
| `relative` | 相对定位 |
| `absolute` | 绝对定位 |
| `fixed` | 固定定位（滚动不跟随） |
| `sticky` | 粘性定位（滚动到顶部固定） |
| `top-0` / `bottom-0` | 贴顶/贴底 |
| `left-0` / `right-0` | 贴左/贴右 |
| `z-50` / `z-50` | 层级（越大越在上层） |

---

## 🌙 深色模式

### 基础写法

```tsx
// 浅色模式样式 + 深色模式覆盖
className="text-slate-900 dark:text-slate-100 bg-white dark:bg-background-dark"
```

### 项目常用组合

| 场景 | class |
|------|-------|
| 卡片背景 | `bg-white dark:bg-background-dark/30` |
| 主文字 | `text-slate-900 dark:text-slate-100` |
| 次要文字 | `text-slate-500 dark:text-slate-400` |
| 边框 | `border-primary/5`（深浅通用） |

---

## 🧩 常用组合（复制即用）

### 按钮
```tsx
// 主按钮
className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl h-14 bg-primary text-white text-base font-bold transition-transform active:scale-95 shadow-lg shadow-primary/20"

// 次按钮
className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl h-14 bg-white dark:bg-background-dark/50 text-slate-900 dark:text-slate-100 border border-primary/20 text-base font-bold hover:bg-primary/5 transition-all active:scale-95"

// 图标按钮
className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
```

### 卡片
```tsx
// 模块卡片
className="flex flex-col gap-4 p-4 bg-white dark:bg-background-dark/30 rounded-xl border border-primary/5 hover:border-primary/30 transition-all cursor-pointer group shadow-sm"

// 统计卡片
className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-xl p-4 border border-primary/20 bg-white dark:bg-background-dark shadow-sm"
```

### 页面外壳
```tsx
// 页面根容器
className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100"

// 主内容区
className="flex flex-1 justify-center py-8 pb-24"

// 内容容器（居中+最大宽度）
className="layout-content-container flex flex-col max-w-[960px] flex-1 px-4 sm:px-6 lg:px-0"
```

---

## 📚 参考

- [Tailwind CSS 官方文档](https://tailwindcss.com/docs)
- 项目自定义主题：`src/style.css`
- Material Icons：`material-symbols-outlined`

---

*最后更新：2026-03-20*
