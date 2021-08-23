(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{535:function(t,v,_){"use strict";_.r(v);var p=_(6),h=Object(p.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"http-1-0"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-1-0"}},[t._v("#")]),t._v(" HTTP 1.0")]),t._v(" "),_("ul",[_("li",[t._v("无状态，无连接")]),t._v(" "),_("li",[t._v("短连接：每次发送请求都要重新建立tcp请求，即三次握手，非常浪费性能")]),t._v(" "),_("li",[t._v("无host头域，也就是http请求头里的host，")]),t._v(" "),_("li",[t._v("不允许断点续传，而且不能只传输对象的一部分，要求传输整个对象")])]),t._v(" "),_("h2",{attrs:{id:"http-1-1"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1"}},[t._v("#")]),t._v(" HTTP 1.1")]),t._v(" "),_("ul",[_("li",[t._v("长连接，流水线，使用connection:keep-alive使用长连接")]),t._v(" "),_("li",[t._v("请求管道化")]),t._v(" "),_("li",[t._v("增加缓存处理（新的字段如cache-control）")]),t._v(" "),_("li",[t._v("增加Host字段，支持断点传输等")]),t._v(" "),_("li",[t._v("由于长连接会给服务器造成压力")])]),t._v(" "),_("h3",{attrs:{id:"http-2-0"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-2-0"}},[t._v("#")]),t._v(" "),_("strong",[t._v("http 2.0")])]),t._v(" "),_("p",[t._v("http2.0不是https，它相当于是http的下一代规范（譬如https的请求可以是http2.0规范的）")]),t._v(" "),_("p",[t._v("然后简述下http2.0与http1.1的显著不同点：")]),t._v(" "),_("ul",[_("li",[t._v("http1.1中，每请求一个资源，都是需要开启一个tcp/ip连接的，所以对应的结果是，每一个资源对应一个tcp/ip请求，由于tcp/ip本身有并发数限制，所以当资源一多，速度就显著慢下来")]),t._v(" "),_("li",[t._v("http2.0中，一个tcp/ip请求可以请求多个资源，也就是说，只要一次tcp/ip请求，就可以请求若干个资源，分割成更小的帧请求，速度明显提升。")])]),t._v(" "),_("p",[t._v("所以，如果http2.0全面应用，很多http1.1中的优化方案就无需用到了（譬如打包成精灵图，静态资源多域名拆分等）")]),t._v(" "),_("p",[t._v("然后简述下http2.0的一些特性：")]),t._v(" "),_("ul",[_("li",[t._v("多路复用（即一个tcp/ip连接可以请求多个资源）")]),t._v(" "),_("li",[t._v("首部压缩（http头部压缩，减少体积）")]),t._v(" "),_("li",[t._v("二进制分帧（在应用层跟传送层之间增加了一个二进制分帧层，改进传输性能，实现低延迟和高吞吐量）")]),t._v(" "),_("li",[t._v("服务器端推送（服务端可以对客户端的一个请求发出多个响应，可以主动通知客户端）")]),t._v(" "),_("li",[t._v("请求优先级（如果流被赋予了优先级，它就会基于这个优先级来处理，由服务器决定需要多少资源来处理该请求。）")])])])}),[],!1,null,null,null);v.default=h.exports}}]);