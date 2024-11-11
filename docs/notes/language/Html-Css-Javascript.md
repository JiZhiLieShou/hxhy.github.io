---
title: Html-Css-Javascript
createTime: 2024/11/10 17:38:00
tags:
  - Html
  - Css
  - Javascript
permalink: /article/qr7xo89t/
---
## HTML【页面骨架】

`超文本标记语言（HyperText Markup Language，简称：HTML）是一种用于创建网页的标准标记语言。`

### 基本语法

```html
<标签名 属性="值">被标记的内容</标签名>
<标签名 属性="值"/>   自带闭合的标签
```

### 标题

`通过<h1> - <h6> 标签来定义`

```html
<h1>这是一个标题</h1>
<h2>这是一个标题</h2>
<h3>这是一个标题</h3>
```

### 段落

`过标签 <p> 来定义`

```html
<p>这是一个段落。</p>
<p>这是另外一个段落。</p>
```

### 链接

`通过标签 <a> 来定义`

```html
<a href="https://www.runoob.com">这是一个链接</a>
```

### 图像

`通过标签 <img> 来定义`

```html
<img src="/images/logo.png" width="258" height="39" />
```

### 下拉列表

`页面显示的：北京市...；传送给服务器的：1或2`

```html
<select>
    <option value='1'>北京市昌平区沙河镇美丽富饶的XXXx</option>
    <option value='2'>北京市昌平区沙河镇美丽富饶的xxXx</option>
</select>
```



## CSS【页面效果美化】

`CSS全称层叠样式表(Gascading Style Sheets),主要用来定义页面内容展示效果的一门语言。`

### css语法规则：

1.通过stylel属性来编写样式
2.通过style标签.然后使用选择器的形式来编写样式
3.在css文件中编写样式，通过ink引入该文件

### css选择器（重点）

| 选择器     | 符号      |
| ---------- | --------- |
| id选择器   | #         |
| 标签选择器 | 标签      |
| 类选择器   | .         |
| 选择器分组 | ,         |
| 后代选择器 | 空格      |
| 子选择器   | >         |
| 相邻选择器 | +         |
| 属性选择器 | [属性=值] |

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        #abc{
            color: pink;
        }
        li{
            border: 1px solid red;
        }
        .jay{
            color: green;
        }

        div,span{
            background:hotpink;
        }

    /*
        ul li{   空格表示子子孙孙, 所有后代
            list-style: none;
        }
    */
        ul > li{  /*  > 表示儿子一层*/
            list-style: none;
        }

        h1 + h2{
            color: red;
        }

        a[target]{
            color: green;
        }

        a[target='_blank']{
            text-decoration: none;
        }

    </style>
</head>
<body>
    <!--
    <ul>
        <li>周润发</li>
        <li id="abc">黎明</li>
        <li>周星驰</li>
        <li>
            <ol>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ol>
        </li>
    </ul>
    <ol>
        <li>手电筒</li>
        <li>电视机</li>
        <li>黑板擦</li>
    </ol>
    <div class="jay">呵呵哒</div>
    <span class="jay">呵呵哒</span>

    <h1>我爱麻花藤</h1>
    <h2>我爱黎明</h2>
    <h2>我也爱黎明</h2>
    -->
    <a href="#" target="_blank">我是blank</a>
    <a href="#" target="_self">我是self</a>
    <a href="#" >我是啥也没有</a>

</body>
</html>
```

