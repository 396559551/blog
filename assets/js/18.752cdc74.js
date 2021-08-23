(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{523:function(t,e,r){"use strict";r.r(e);var a=r(6),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"什么是回流-什么是重绘-有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是回流-什么是重绘-有什么区别"}},[t._v("#")]),t._v(" 什么是回流，什么是重绘，有什么区别？")]),t._v(" "),r("h3",{attrs:{id:"html-加载时发生了什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#html-加载时发生了什么"}},[t._v("#")]),t._v(" html 加载时发生了什么")]),t._v(" "),r("ol",[r("li",[t._v("浏览器会把HTML解析成DOM，把CSS解析成CSSOM，DOM和CSSOM合并就产生了渲染树（Render Tree）。")]),t._v(" "),r("li",[t._v("有了RenderTree，我们就知道了所有节点的样式，然后计算他们在页面上的大小和位置，最后把节点绘制到页面上。")]),t._v(" "),r("li",[t._v("render tree类似于DOM tree，但区别很大，因为render tree能识别样式，render tree中每个NODE都有自己的style，而且render tree不包含隐藏的节点(比如display:none的节点，还有head节点)，因为这些节点不会用于呈现，而且不会影响呈现的，所以就不会包含到 render tree中。")])]),t._v(" "),r("h3",{attrs:{id:"什么是回流"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是回流"}},[t._v("#")]),t._v(" 什么是回流？")]),t._v(" "),r("p",[t._v("当一个元素自身的宽高，布局，显示或隐藏，或元素内部的文字结构发生变化，导致需要重新构建页面的时候，就产生了回流")]),t._v(" "),r("h3",{attrs:{id:"什么是重绘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是重绘"}},[t._v("#")]),t._v(" 什么是重绘？")]),t._v(" "),r("p",[t._v("当一个元素自身的宽高，布局，及显示或隐藏没有改变，而只是改变了元素的外观风格的时候，就产生了重绘")]),t._v(" "),r("h3",{attrs:{id:"什么时候会进行回流"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么时候会进行回流"}},[t._v("#")]),t._v(" 什么时候会进行回流？")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("添加或者删除可见的DOM元素的时候")])]),t._v(" "),r("li",[r("p",[t._v("元素的位置发生改变")])]),t._v(" "),r("li",[r("p",[t._v("元素的尺寸发生改变")])]),t._v(" "),r("li",[r("p",[t._v("内容改变")])]),t._v(" "),r("li",[r("p",[t._v("页面第一次渲染的时候")])])]),t._v(" "),r("p",[t._v("列举一些相关的CSS样式：width、height、line-height、padding、margin、diaplay、border、top、position、float、font-size、overflow等")]),t._v(" "),r("h3",{attrs:{id:"什么时候会进行重绘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么时候会进行重绘"}},[t._v("#")]),t._v(" 什么时候会进行重绘？")]),t._v(" "),r("p",[t._v("列举一些相关的CSS样式：color、background、background-size、visibility、box-shadow")]),t._v(" "),r("h4",{attrs:{id:"区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别：")]),t._v(" "),r("p",[t._v("他们的区别很大：\n回流必将引起重绘，而重绘不一定会引起回流。比如：只有颜色改变的时候就只会发生重绘而不会引起回流\n当页面布局和几何属性改变时就需要回流\n比如：添加或者删除可见的DOM元素，元素位置改变，元素尺寸改变——边距、填充、边框、宽度和高度，内容改变")]),t._v(" "),r("h3",{attrs:{id:"如何进行性能优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何进行性能优化"}},[t._v("#")]),t._v(" 如何进行性能优化？")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("用transform 代替 top，left ，margin-top， margin-left… 这些位移属性")])]),t._v(" "),r("li",[r("p",[t._v("不要使用 js 代码对dom 元素设置多条样式，选择用一个 className 代替之")])]),t._v(" "),r("li",[r("p",[t._v("不要在循环内获取dom 的样式例如：offsetWidth, offsetHeight, clientWidth, clientHeight等。浏览器有一个回流的缓冲机制，获取这些属性时会产生回流")])]),t._v(" "),r("li",[r("p",[t._v("避免设置多层内联样式，写个外部类这样只回流一次")])]),t._v(" "),r("li",[r("p",[t._v("让多次回流的元素脱离文档流比如动画，使用 position 属性的 fixed 值或 absolute 值一起变化（同时修改所有需要变化的属性）")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);