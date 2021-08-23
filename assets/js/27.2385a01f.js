(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{532:function(v,_,t){"use strict";t.r(_);var o=t(6),e=Object(o.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h3",{attrs:{id:"http报文格式、请求响应头"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http报文格式、请求响应头"}},[v._v("#")]),v._v(" HTTP报文格式、请求响应头")]),v._v(" "),t("h4",{attrs:{id:"http报文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http报文"}},[v._v("#")]),v._v(" "),t("strong",[v._v("HTTP报文")])]),v._v(" "),t("ul",[t("li",[v._v("用于HTTP协议交互的信息叫做HTTP报文")]),v._v(" "),t("li",[v._v("报文由"),t("strong",[v._v("报文首部")]),v._v("和"),t("strong",[v._v("报文主体")]),v._v("来组成，其中由"),t("strong",[v._v("空行")]),v._v("分割")]),v._v(" "),t("li",[t("strong",[v._v("请求报文")]),v._v("和"),t("strong",[v._v("响应报文")]),v._v("的"),t("strong",[v._v("报文结构不一样")]),v._v("，其中最大的区别就是在报文首部中，"),t("strong",[v._v("各有各的特定的首部")])])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://pic3.zhimg.com/80/v2-f94c3aecfcd4eea41550c6bb1991ab8e_720w.jpg",alt:"img"}})]),v._v(" "),t("ul",[t("li",[v._v("报文首部：服务器或者客户端需要处理的请求或者响应的内容及其属性")]),v._v(" "),t("li",[v._v("报文主体：被发送的数据")])]),v._v(" "),t("h3",{attrs:{id:"请求报文首部-共19种"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求报文首部-共19种"}},[v._v("#")]),v._v(" "),t("strong",[v._v("请求报文首部 （共19种）")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://pic3.zhimg.com/80/v2-c8c0487e896dd8603d2fc15d409b76ca_720w.jpg",alt:"img"}})]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("If-Match")]),v._v("：只有当 "),t("code",[v._v("If-Match")]),v._v(" 字段值跟 "),t("code",[v._v("ETag")]),v._v(" 值匹配一致时，服务器才会接受请求")])]),v._v(" "),t("ul",[t("li",[v._v("它会告知服务器匹配资源所用的实体标记（ETag）值，这时服务器无法使用弱ETag值")]),v._v(" "),t("li",[v._v("仅当两者一致时才会执行请求，否则返回"),t("code",[v._v("412 Precondition Failed")]),v._v("的响应")]),v._v(" "),t("li",[v._v("还可以使用 * 号指定"),t("code",[v._v("If-Match")]),v._v("的字段值，如果这样的话，那么服务器将会忽略ETag的值，只要资源存在就处理请求。")])]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("If-Modified-Since")]),v._v(" ：")])]),v._v(" "),t("ul",[t("li",[v._v("若资源更新时间确实在此字段指定时间之后的话，则处理该请求，否则返回"),t("code",[v._v("304 Not Modified")])]),v._v(" "),t("li",[v._v("用于确认代理或客户端拥有本地资源的有效性，若想获取资源的更新日期时间的话可以通过确认首部字段"),t("code",[v._v("Last-Modified")]),v._v("来确定")])]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("If-None-Match")])])]),v._v(" "),t("ul",[t("li",[v._v("只有在"),t("code",[v._v("If-None-Match")]),v._v("的字段值与ETag值不一致时，才可以处理该请求，与前文中提到的"),t("code",[v._v("If-Match")]),v._v("作用相反")])]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("If-Range")])])]),v._v(" "),t("ul",[t("li",[v._v("他告知服务器若指定的"),t("code",[v._v("If-Range")]),v._v("字段值（ETag值或者时间）和请求资源的ETag值或时间一致时，则作为范围请求处理，否则，返回全体资源")])]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("If-Unmodified-Since")])])]),v._v(" "),t("ul",[t("li",[v._v("指定的请求资源只有在字段值内指定的日期时间之后未发生更新，才会执行这个请求，否则，返回"),t("code",[v._v("412 Precondition Failed")]),v._v("状态响应，与"),t("code",[v._v("If-Modified-Since")]),v._v("作用相反")])]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("Max-Forwards")])])]),v._v(" "),t("ul",[t("li",[v._v("每次请求转发时数值减一，直到0时返回响应")]),v._v(" "),t("li",[v._v("有可能这个请求经过了多台服务器代理转发，如果突然间请求出现了什么问题导致转发失败，而客户端不知道，此时就可以用此属性来定位问题，这个时候我们就可以掌握一个出问题的转发路径，从而方便进一步的排查问题。")])]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("Range")]),v._v(":")])]),v._v(" "),t("ul",[t("li",[v._v("对于只需要获取部分资源的范围请求，"),t("code",[v._v("Range")]),v._v("字段可以指定获取资源范围"),t("code",[v._v("Range: bytes=10001-20000")])]),v._v(" "),t("li",[v._v("例子中表示请求获取从第10001字节到20000字节的资源")]),v._v(" "),t("li",[v._v("服务器处理请求后会返回"),t("code",[v._v("206 Partial Content")]),v._v("的响应。无法处理时，则会返回状态码"),t("code",[v._v("200 OK")]),v._v("的响应及其全部资源")])]),v._v(" "),t("h3",{attrs:{id:"响应报文首部-共9种"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#响应报文首部-共9种"}},[v._v("#")]),v._v(" "),t("strong",[v._v("响应报文首部 （共9种）")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-e6f14419635cbf9e9399fec7203f1c07_720w.jpg",alt:"img"}})]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("Accept-Ranges")])])]),v._v(" "),t("ul",[t("li",[t("code",[v._v("Accept-Ranges：bytes")]),v._v(" 可以处理范围请求")]),v._v(" "),t("li",[t("code",[v._v("Accept-Ranges：none")]),v._v(" 不可以处理范围请求")])]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("Age")])])]),v._v(" "),t("ul",[t("li",[v._v("可以告知客户端，源服务器多久之前创建了资源，单位是秒")]),v._v(" "),t("li",[v._v("若创建该响应的是缓存服务器，则Age值是指缓存后的响应再次发起发起认证到认证完成的时间值。代理创建响应时必须加上首部字段Age")])]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("ETag")]),v._v(" 它是一种可将资源以字符串形式做唯一标识的方式，服务器会为每份资源分配对应的"),t("code",[v._v("ETag")]),v._v("值,资源被更新时，"),t("code",[v._v("ETag")]),v._v("值也会被更新，并没有统一的算法规则，而是由服务器来分配")])]),v._v(" "),t("ul",[t("li",[v._v("强"),t("code",[v._v("ETag")]),v._v("：无论实体发生多么细微的变化都会改变其值")]),v._v(" "),t("li",[v._v("弱"),t("code",[v._v("ETag")]),v._v("：只用于提示资源是否相同，只有资源发生了根本的改变才会改变ETag值，这时会在字段值最开始加"),t("code",[v._v("W/")]),v._v(",\n"),t("code",[v._v('ETag：W/"XXX"')])])]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("Location")])])]),v._v(" "),t("ul",[t("li",[v._v("使用该响应字段可以将响应接收方引导至某个与请求的URI位置不同的资源")]),v._v(" "),t("li",[v._v("基本上，该字段配合3XX，Redirection的响应，提供重定向的URI")])]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("Vary")]),v._v(" 首部字段vary可对缓存进行控制，源服务器会向代理服务器传达关于本地缓存使用方法的命令")])]),v._v(" "),t("ul",[t("li",[v._v("当代理服务器接收到服务器返回包含Vary指定项的响应后，仅对请求中含有相同Vary指定首部字段的请求返回缓存")]),v._v(" "),t("li",[v._v("即使对相同资源发起请求，但是由于Vary指定的首部字段不相同，因此必须从源服务器重新获取资源")])])])}),[],!1,null,null,null);_.default=e.exports}}]);