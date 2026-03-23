# Tailwind CSS v4 迁移记录

**日期**: 2026-03-18  
**问题**: Tailwind CSS v4 配置方式变更导致的样式加载失败  
**状态**: ✅ 已修复

---

## 问题描述

项目初始化后，Tailwind CSS 样式没有正确加载，所有 Tailwind 类名（如 `bg-primary`, `text-slate-900`）无效。

---

## 根本原因

Tailwind CSS v4 与 v3 的配置方式完全不同，我使用了 **v3 的语法**在 **v4 环境**中。

| 版本 | 配置方式 |
|------|---------|
| **v3** | 需要 `tailwind.config.js` + `@tailwind` 指令 |
| **v4** | 纯 CSS 配置，使用 `@import "tailwindcss"` + `@theme` |

---

## 错误分析

### ❌ 错误 1: 使用了 v3 的 CSS 指令

```css
/* ❌ 这是 v3 的语法，v4 不支持 */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### ❌ 错误 2: 创建了 v3 的配置文件

```javascript
// ❌ tailwind.config.js - v4 不需要这个文件
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: { 
    extend: { 
      colors: { 
        primary: '#ec5b13' 
      } 
    } 
  }
}
```

### ❌ 错误 3: 使用了 v3 的自定义工具类语法

```css
/* ❌ v3 语法 */
@layer utilities {
  .layout-content-container {
    @apply flex flex-col w-full;
  }
}
```

---

## 修复方案

### 1. 修改 style.css - 改为 v4 语法

**修改前 (v3)**:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .layout-content-container {
    @apply flex flex-col w-full;
  }
}
```

**修改后 (v4)**:
```css
@import "tailwindcss";

@theme {
  --color-primary: #ec5b13;
  --color-background-light: #f8f6f6;
  --color-background-dark: #221610;
  --font-family-display: 'Noto Sans SC', sans-serif;
}

@utility layout-content-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
```

### 2. 删除 v3 配置文件

```bash
rm tailwind.config.js
```

### 3. postcss.config.js - 保持不变

```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};
```

---

## v4 关键变化总结

| 特性 | v3 | v4 |
|------|-----|-----|
| 配置文件 | `tailwind.config.js` 必需 | 不再需要 |
| CSS 导入 | `@tailwind` 指令 | `@import "tailwindcss"` |
| 主题配置 | JS 配置文件 | CSS `@theme` 指令 |
| 自定义工具类 | `@layer utilities` | `@utility` |
| 自定义组件 | `@layer components` | `@layer` (保留) |

---

## 经验教训

1. **先查版本**: 在使用工具前，先确认版本号
2. **读官方文档**: Tailwind v4 有完整的迁移指南
3. **注意 breaking changes**: 大版本升级通常有破坏性变更

---

## 参考链接

- [Tailwind CSS v4 官方文档](https://tailwindcss.com/)
- [v4 升级指南](https://tailwindcss.com/docs/v4-beta)

---

**记录者**: 阿管  
**相关文件**: `src/style.css`, `postcss.config.js`
