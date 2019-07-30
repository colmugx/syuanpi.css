# Syuanpi.css [![license](https://badgen.net/github/license/micromatch/micromatch)](https://github.com/colmugx/Syuanpi.css)

`Syuanpi.css`是一个比较轻便简单的CSS3动画库

## 安装

1.所有东西都已经在`dist`中。您可以：

- `Open in Desktop`
- `Download ZIP`
- 打开terminal按照下列操作。

```bash
git clone https://github.com/ColMugX/Syuanpi.css.git
```

2.或者你喜欢直接用`src`的话，编译直接
```bash
npx gulp build
```

## 使用

按道理说跟`animate.css`是差不多的。不过讲一下基础用法

### 简单用法

1. 在`<head>`之间引用
```html
<head>
  <link rel="stylesheet" href="syuanpi.min.css">
</head>
```

```html
<head>
  <link rel="stylesheet" href="syuanpi.css">
</head>
```

2. 在 `class` 标记以使用动画

```html
<div class="syuanpi"></div>
```

3. 动画是有多出两种模式的，一种是动画循环，您可以这么做：
```html
<div class="syuanpi infinite"></div>
```

或者只是延长时间(375*2ms)
```html
<div class="syuanpi long"></div>
```

4. 支持让动画停留在最后一帧
```html
<div class="syuanpi forwards"></div>
```

5. 支持 5 档动画延迟播放（可以做队列动画）

```html
<div class="syuanpi back-1"></div>
<div class="syuanpi back-2"></div>
<div class="syuanpi back-3"></div>
<div class="syuanpi back-4"></div>
<div class="syuanpi back-5"></div>
```

## 联系

{issue}
