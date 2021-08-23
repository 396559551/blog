(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{540:function(t,e,r){"use strict";r.r(e);var a=r(6),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"遍历数组方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#遍历数组方法"}},[t._v("#")]),t._v(" "),r("strong",[t._v("遍历数组方法")])]),t._v(" "),r("h2",{attrs:{id:"_1-for-循环"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-for-循环"}},[t._v("#")]),t._v(" "),r("strong",[t._v("1. for(循环）")])]),t._v(" "),r("p",[t._v("这个用的十分常见，主要是用在数组中和一些dom操作中。")]),t._v(" "),r("div",{staticClass:"language-text extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("for(var i = 0 ; i &lt; arr.length ; i++) {\n    //执行相关操作\n}\n")])])]),r("h2",{attrs:{id:"_2-for-优化版"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-for-优化版"}},[t._v("#")]),t._v(" "),r("strong",[t._v("2. for 优化版")])]),t._v(" "),r("p",[t._v("由于一些dom操作，在进行的时候，是动态更新的，所以会导致"),r("code",[t._v("length")]),t._v("是不断变化的，同时也为了减少操作，可以将"),r("code",[t._v("arr.length")]),t._v("存储在变量里面。")]),t._v(" "),r("div",{staticClass:"language-text extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("for(var i = 0,length=arr.length;i&lt;length;i++) {\n    //执行相关操作\n}\n")])])]),r("h2",{attrs:{id:"_3-其他迭代方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-其他迭代方法"}},[t._v("#")]),t._v(" "),r("strong",[t._v("3. 其他迭代方法")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("every()\nsome()\nfilter()\nforEach()\nmap()\n")])])]),r("h2",{attrs:{id:"_4-for-in循环"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-for-in循环"}},[t._v("#")]),t._v(" "),r("strong",[t._v("4. for...in循环")])]),t._v(" "),r("p",[t._v("精准的迭代，可以迭代对象的元素。也可以迭代数组。")]),t._v(" "),r("p",[t._v("【注意】使用"),r("code",[t._v("for ... in")]),t._v("，迭代的是元素（keys），对于数组来说，则为下标（0,1,2...,length-1）")]),t._v(" "),r("div",{staticClass:"language-text extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("for(var key in arr) {\n    //执行相关操作\n}\n")])])]),r("h2",{attrs:{id:"对象的遍历的方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#对象的遍历的方法"}},[t._v("#")]),t._v(" "),r("strong",[t._v("对象的遍历的方法")])]),t._v(" "),r("p",[r("strong",[t._v("（1）for...in")])]),t._v(" "),r("p",[r("code",[t._v("for...in")]),t._v("循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。")]),t._v(" "),r("p",[r("strong",[t._v("（2）Object.keys(obj)")])]),t._v(" "),r("p",[r("code",[t._v("Object.keys")]),t._v("返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。")]),t._v(" "),r("p",[r("strong",[t._v("（3）Object.getOwnPropertyNames(obj)")])]),t._v(" "),r("p",[r("code",[t._v("Object.getOwnPropertyNames")]),t._v("返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。")]),t._v(" "),r("p",[r("strong",[t._v("（4）Object.getOwnPropertySymbols(obj)")])]),t._v(" "),r("p",[r("code",[t._v("Object.getOwnPropertySymbols")]),t._v("返回一个数组，包含对象自身的所有 Symbol 属性的键名。")]),t._v(" "),r("p",[r("strong",[t._v("（5）Reflect.ownKeys(obj)")])]),t._v(" "),r("p",[r("code",[t._v("Reflect.ownKeys")]),t._v("返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。")]),t._v(" "),r("p",[t._v("以上的 5 种方法遍历对象的键名，都遵守同样的属性遍历的次序规则。")]),t._v(" "),r("ul",[r("li",[t._v("首先遍历所有数值键，按照数值升序排列。")]),t._v(" "),r("li",[t._v("其次遍历所有字符串键，按照加入时间升序排列。")]),t._v(" "),r("li",[t._v("最后遍历所有 Symbol 键，按照加入时间升序排列。")])]),t._v(" "),r("p",[t._v("其中遍历的条件包含是否枚举，是否继承，已经 是否遍历Symbol 属性（ES6新增JS类型）。平时常用的也就前三个，因为很少用Symbol。")]),t._v(" "),r("p",[r("strong",[t._v("for...in ： 可遍历 自身继承、枚举的属性")])]),t._v(" "),r("p",[r("strong",[t._v("Object.keys(obj)： 可遍历那自身不可继承、枚举的属性")])]),t._v(" "),r("p",[r("strong",[t._v("Object.getOwnPropertyNames(obj)： 可遍历自身不可继承，可枚举/不枚举的所有属性")])])])}),[],!1,null,null,null);e.default=s.exports}}]);