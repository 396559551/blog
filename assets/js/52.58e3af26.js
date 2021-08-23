(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{560:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前端模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端模块化"}},[t._v("#")]),t._v(" 前端模块化")]),t._v(" "),a("p",[t._v("将复杂的文件解析成一个独立的文件，比如js，css文件等。提高了代码的复用率和有效维护。")]),t._v(" "),a("h3",{attrs:{id:"同步加载commonjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步加载commonjs"}},[t._v("#")]),t._v(" 同步加载CommonJS")]),t._v(" "),a("p",[t._v("比如node.js，使用的便是CommomJS规范。通过require，module.exports，exports来进行导入和导出，这里exports是module.exports的一个引用。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" http "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" server "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  myserver"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" server\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("同步模块化的应用场景：对于服务器而言，所有的模块都是存在本地硬盘中的，读取速度快，所以可以采用同步的方式读取模块。")]),t._v(" "),a("h3",{attrs:{id:"异步加载amd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步加载amd"}},[t._v("#")]),t._v(" 异步加载AMD")]),t._v(" "),a("p",[t._v("采用异步方式加载模块，通过define来定义一个模块，通过require来引入模块，模块的加载不影响后面语句的执行，所有依赖于这些模块的语句都写在一个回调函数中，加载完毕后，这个回调函数才运行。如")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义一个模块，name为定义的模块名称，foo为该模块依赖的其他模块")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("outPutFoo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    outPutFoo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" outPutFoo\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导入模块")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("outPutFoo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("异步模块化的产生主要是因为:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("同步加载方式无法应用到浏览器等受网速等限制加载速度较慢且不稳定的场景")])]),t._v(" "),a("li",[a("p",[t._v("所以通过异步加载的方式防止代码执行受阻，页面停止渲染等问题。")])])]),t._v(" "),a("h3",{attrs:{id:"cmd-common-module-definition-通用模块定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmd-common-module-definition-通用模块定义"}},[t._v("#")]),t._v(" CMD (Common Module Definition，通用模块定义)")]),t._v(" "),a("p",[t._v("CMD规范是国内SeaJS的推广过程中产生的，CMD规范中一个模块是一个文件。")]),t._v(" "),a("ul",[a("li",[t._v("AMD提倡依赖前置，在定义模块的时候就要声明其依赖的模块")]),t._v(" "),a("li",[t._v("CMD提倡就近依赖（按需加载），在用到某个模块的时候再去require进来。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义一个模块，可通过return， exports， mudule.exports决定要导出的内容")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" one "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./one'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("do")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 就近依赖，按需加载")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v("  two "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./two'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  two"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("do")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"es6-import-export-export-default"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6-import-export-export-default"}},[t._v("#")]),t._v(" ES6 import export/export default")]),t._v(" "),a("h3",{attrs:{id:"模块打包工具-webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块打包工具-webpack"}},[t._v("#")]),t._v(" 模块打包工具 webpack")]),t._v(" "),a("p",[t._v("本质上webpack是一个现代JavaScript应用程序的静态模块打包器。它递归的构建一个依赖关系图，其中包含应用程序的每个模块，然后将这些模块打包成一个或多个bundle.js。")]),t._v(" "),a("p",[t._v("webpack 支持 CommonJS，AMD，ES6等规范，所以我们在代码中可以使用多种模块加载规范，而且通过loader，它不仅可以处理JavaScript，还可以处理像css，图片等等的静态资源")])])}),[],!1,null,null,null);s.default=e.exports}}]);