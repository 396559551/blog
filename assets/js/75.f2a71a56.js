(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{582:function(t,v,_){"use strict";_.r(v);var e=_(6),a=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h3",{attrs:{id:"watch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[t._v("#")]),t._v(" watch")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("监听的数据改变的时，watch 如何工作")])])]),t._v(" "),_("p",[t._v("watch 在一开始初始化的时候，会 "),_("strong",[t._v("读取")]),t._v(" 一遍 监听的数据的值，于是，此时 那个数据就收集到 watch 的 watcher 了")]),t._v(" "),_("p",[t._v("然后 你给 watch 设置的 handler ，watch 会放入 watcher 的更新函数中")]),t._v(" "),_("p",[t._v("当 数据改变时，通知 watch 的 watcher 进行更新，于是 你设置的 handler 就被调用了")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("设置 immediate 时，watch 如何工作")])])]),t._v(" "),_("p",[t._v("当你设置了 immediate 时，就不需要在 数据改变的时候 才会触发。")]),t._v(" "),_("p",[t._v("而是在 "),_("strong",[t._v("初始化 watch")]),t._v(" 时，在读取了 监听的数据的值 之后，便"),_("strong",[t._v("立即调用")]),t._v("一遍你设置的监听回调，然后传入刚读取的值")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("设置了 deep 时， watch 如何工作")])])]),t._v(" "),_("p",[t._v("我们都知道 watch 有一个 deep 选项，是用来"),_("strong",[t._v("深度监听")]),t._v("的。什么是深度监听呢？就是当你监听的属性的值是一个对象的时候，如果你没有设置深度监听，当对象内部变化时，你监听的回调是不会被触发的")]),t._v(" "),_("p",[t._v("在说明这个之前，请大家先了解一下")]),t._v(" "),_("p",[t._v("当你使用 Object.defineProperty 给 "),_("strong",[t._v("【*"),_("em",[t._v("值是对象的属性*")]),t._v("】")]),t._v(" 设置 set 和 get 的时候")]),t._v(" "),_("p",[_("strong",[t._v("1")]),t._v(". 如果你直接改变或读取这个属性 ( 直接赋值 )，可以触发这个属性的设置的 set 和 get")]),t._v(" "),_("p",[_("strong",[t._v("2")]),t._v(". 但是你改变或读取它内部的属性，get 和 set 不会被触发的")]),t._v(" "),_("p",[t._v("没有设置 deep：")]),t._v(" "),_("p",[t._v("因为"),_("strong",[t._v("读取")]),t._v("了监听的 data 的属性，watch 的 watcher 被"),_("strong",[t._v("收集")]),t._v("在 这个属性的 收集器中")]),t._v(" "),_("p",[t._v("设置了 deep")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("因为"),_("strong",[t._v("读取")]),t._v("了监听的data 的属性，watch 的 watcher 被"),_("strong",[t._v("收集")]),t._v("在 这个属性的 收集器中")])]),t._v(" "),_("li",[_("p",[t._v("在"),_("strong",[t._v("读取")]),t._v(" data 属性的时候，发现设置了 deep 而且值是一个对象，会递归遍历这个值，把内部所有属性逐个"),_("strong",[t._v("读取")]),t._v("一遍，于是 属性和 它的对象值内每一个属性 都会"),_("strong",[t._v("收集")]),t._v("到 watch 的 watcher")])])])])}),[],!1,null,null,null);v.default=a.exports}}]);