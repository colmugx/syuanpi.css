# Syuanpi.css [![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/) 
（暂时没有英文版本…）

`Syuanpi.css`是一个比较轻便简单的CSS3动画库，据说好像应该可以跨平台。
有循环动画和过程动画。还有一些贱贱的渐变动画。至于用在哪里，各取所需。

## 安装

所有东西都已经在`dist`中。您可以：
* `Open in Desktop`
* `Download ZIP`
* 打开terminal按照下列操作。
```bash
git clone https://github.com/ColMugX/Syuanpi.css.git ./Syuanpi
```

至于`bower` and `npm` 等6一点在说了！

## 使用

按道理说跟`Animate.css`是差不多的。不过讲一下基础用法

### 简单用法
1. 您至少要在`<head>`之间引用一下吧！
```html
<head>
  <link rel="stylesheet" href="syuanpi.min.css">
</head>
```
or 
```html
<head>
  <link rel="stylesheet" href="syuanpi.css">
</head>
```
or
```html
<head>
  <link rel="stylesheet" href="dist/syuanpi.min.css">
</head>
```

2. 引用完起码要在你要的地方标记一下吧~
```html
<div class="syuanpi">
    <div>
    </div>
</div>
```

3. 动画是有多出两种模式的，一种是动画循环，您可以这么做：
```html
<div class="syuanpi infinite">
    <div class="">
    </div>
</div>
```
还有一种是“+1s”（延长动画时间，默认是2.33s）
```html
<div class="syuanpi long">
    <div class="">
    </div>
</div>
```
但是！我们还支持让动画停留在最后一帧！操作是这样的！
```html
<div class="syuanpi forwards">
    <div class="">
    </div>
</div>
```
当然了你要这么写也行！
```html
<div class="syuanpi long infinite">
    <div class="">
    </div>
</div>
```
or
```html
<div class="syuanpi long forwards">
    <div class="">
    </div>
</div>
```
还不够！可能部分用户需要动画延时（比如我自己），所以！自己的需求肯定也要满足。
所以！`Syuanpi.css` 有~~五档电风扇~~ 啊不对，五档延时。
```html
<div class="syuanpi back-1"></div>
<div class="syuanpi back-2"></div>
<div class="syuanpi back-3"></div>
<div class="syuanpi back-4"></div>
<div class="syuanpi back-5"></div>
```
[此处应该有“小车车追尾”演示]

4. 挑选想要用的动画，然后添加进`class`，就像这样
```html
<div class="">
    <div class="syuanpi pulse">
    </div>
</div>
```
“+1s”模式就这样
```html
<div class="">
    <div class="long syuanpi pulse">
    </div>
</div>
```

然后我们目前大概是支持这么几种（会增加一堆！）：
* `pulse`
* `blink`
* `bloom`
* `carIn`
* `carOut`
* `dead`
* `fadeIn`
* `fadeInLeft`
* `fadeInRight`
* `fadeOut`
* `fadeOutLeft`
* `fadeOutRight`
* `fallIn`
* `fallOut`
* `grow`
* `jumping`
* `riseIn`
* `riseOut`
* `rotateAntiClowise`
* `rotateClowise`
* `swim`
* `swim-hor` (水平游动)

只能无限循环的有（其他基本都能愉快循环）
* `swim-hor-in` (贱贱的循环版本)

另外

`fadeIn`,`fadeInLeft`,`fadeInRight`,`fadeOut`,`fadeOutLeft`,`fadeOutRight`,`fallIn`,`fallOut`,`riseIn`,`riseOut`
等都有`light`版本，也就是动画距离会短一点，用法例子
```html
<div class="">
    <div class="syuanpi fadeIn">
    </div>
</div>
```
and
```html
<div class="">
    <div class="syuanpi fadeIn-light">
    </div>
</div>
```

其他用法，用`JQuery`也行呀！用`Javascript`也行呀！

## 协议

[MIT license](http://opensource.org/licenses/MIT)

## 联系 

**ISSUE!**