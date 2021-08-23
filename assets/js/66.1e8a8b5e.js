(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{570:function(t,a,v){"use strict";v.r(a);var r=v(6),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h3",{attrs:{id:"diff"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#diff"}},[t._v("#")]),t._v(" diff")]),t._v(" "),v("h2",{attrs:{id:"diff-作用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#diff-作用"}},[t._v("#")]),t._v(" Diff 作用")]),t._v(" "),v("p",[t._v("Diff 的出现，就会为了减少更新量，找到最小差异部分DOM，只更新差异部分DOM就好了")]),t._v(" "),v("p",[t._v("这样消耗就会小一些")]),t._v(" "),v("p",[t._v("数据变化一下，没必要把其他没有涉及的没有变化的DOM 也替换了")]),t._v(" "),v("h2",{attrs:{id:"diff-做法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#diff-做法"}},[t._v("#")]),t._v(" Diff 做法")]),t._v(" "),v("p",[t._v("Vue 只会对新旧节点中 父节点是相同节点 的 那一层子节点 进行比较")]),t._v(" "),v("p",[t._v("也可以说成是")]),t._v(" "),v("p",[t._v("只有两个新旧节点是相同节点的时候，才会去比较他们各自的子节点")]),t._v(" "),v("p",[t._v("最大的根节点一开始可以直接比较")]),t._v(" "),v("h2",{attrs:{id:"diff-比较逻辑"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#diff-比较逻辑"}},[t._v("#")]),t._v(" Diff 比较逻辑")]),t._v(" "),v("p",[t._v("同层级比较，并不需要递归，虽然好像降低了一些复用性，也是为了避免过度优化，是一种很高效的 Diff 算法")]),t._v(" "),v("p",[t._v("1、能不移动，尽量不移动")]),t._v(" "),v("p",[t._v("2、没得办法，只好移动")]),t._v(" "),v("p",[t._v("3、实在不行，新建或删除")]),t._v(" "),v("p",[t._v("详细：")]),t._v(" "),v("ol",[v("li",[v("h5",{attrs:{id:"旧头-新头"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#旧头-新头"}},[t._v("#")]),t._v(" 旧头 == 新头")])]),t._v(" "),v("li",[v("h5",{attrs:{id:"旧尾-新尾"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#旧尾-新尾"}},[t._v("#")]),t._v(" 旧尾 == 新尾")])]),t._v(" "),v("li",[v("h5",{attrs:{id:"旧头-新尾"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#旧头-新尾"}},[t._v("#")]),t._v(" 旧头 == 新尾")])]),t._v(" "),v("li",[v("h5",{attrs:{id:"旧尾-新头"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#旧尾-新头"}},[t._v("#")]),t._v(" 旧尾 == 新头")])]),t._v(" "),v("li",[v("h5",{attrs:{id:"单个遍历查找"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单个遍历查找"}},[t._v("#")]),t._v(" 单个遍历查找")])])]),t._v(" "),v("h3",{attrs:{id:"比较是为了修改dom-树"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#比较是为了修改dom-树"}},[t._v("#")]),t._v(" 比较是为了修改DOM 树")]),t._v(" "),v("h2",{attrs:{id:"diff-简单例子"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#diff-简单例子"}},[t._v("#")]),t._v(" Diff 简单例子")]),t._v(" "),v("p",[t._v("比如下图存在这两棵 需要比较的新旧节点树 和 一棵 需要修改的页面 DOM树")]),t._v(" "),v("p",[v("img",{attrs:{src:"F:%5C%E6%A1%8C%E9%9D%A2%5Cfrontend%5CKnowledge%5Cvue%5Cimages%5Cdiff%5Cchushi.png",alt:"img"}})]),t._v(" "),v("h3",{attrs:{id:"第一轮比较开始"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第一轮比较开始"}},[t._v("#")]),t._v(" 第一轮比较开始")]),t._v(" "),v("p",[t._v("因为父节点都是 1，所以开始比较他们的子节点")]),t._v(" "),v("p",[t._v("按照我们上面的比较逻辑，所以先找 相同 && 不需移动 的点")]),t._v(" "),v("p",[t._v("毫无疑问，找到 2")]),t._v(" "),v("p",[v("img",{attrs:{src:"F:%5C%E6%A1%8C%E9%9D%A2%5Cfrontend%5CKnowledge%5Cvue%5Cimages%5Cdiff%5Cdiyi.png",alt:"img"}})]),t._v(" "),v("p",[t._v("拿到比较结果，这里不用修改DOM，所以 DOM 保留在原地")]),t._v(" "),v("p",[v("img",{attrs:{src:"F:%5C%E6%A1%8C%E9%9D%A2%5Cfrontend%5CKnowledge%5Cvue%5Cimages%5Cdiff%5Cdom.png",alt:"img"}})]),t._v(" "),v("h3",{attrs:{id:"第二轮比较开始"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第二轮比较开始"}},[t._v("#")]),t._v(" 第二轮比较开始")]),t._v(" "),v("p",[t._v("然后，没有 相同 && 不需移动 的节点 了")]),t._v(" "),v("p",[t._v("只能第二个方案，开始找相同的点")]),t._v(" "),v("p",[t._v("找到 节点5，相同但是位置不同，所以需要移动")]),t._v(" "),v("p",[v("img",{attrs:{src:"F:%5C%E6%A1%8C%E9%9D%A2%5Cfrontend%5CKnowledge%5Cvue%5Cimages%5Cdiff%5Cdier.png",alt:"img"}})]),t._v(" "),v("p",[t._v("拿到比较结果，页面 DOM 树需要移动DOM 了，不修改，原样移动")]),t._v(" "),v("p",[v("img",{attrs:{src:"F:%5C%E6%A1%8C%E9%9D%A2%5Cfrontend%5CKnowledge%5Cvue%5Cimages%5Cdiff%5Cdierdom.png",alt:"img"}})]),t._v(" "),v("h3",{attrs:{id:"第三轮比较开始"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第三轮比较开始"}},[t._v("#")]),t._v(" 第三轮比较开始")]),t._v(" "),v("p",[t._v("继续，哦吼，相同节点也没得了，没得办法了，只能创建了")]),t._v(" "),v("p",[t._v("所以要根据 新Vnode 中没找到的节点去创建并且插入")]),t._v(" "),v("p",[t._v("然后旧Vnode 中有些节点不存在 新VNode 中，所以要删除")]),t._v(" "),v("p",[v("img",{attrs:{src:"F:%5C%E6%A1%8C%E9%9D%A2%5Cfrontend%5CKnowledge%5Cvue%5Cimages%5Cdiff%5Cdi3.png",alt:"img"}})]),t._v(" "),v("p",[t._v("于是开始创建节点 6 和 9，并且删除节点 3 和 4")]),t._v(" "),v("p",[v("img",{attrs:{src:"F:%5C%E6%A1%8C%E9%9D%A2%5Cfrontend%5CKnowledge%5Cvue%5Cimages%5Cdiff%5Cd3dom.jpg",alt:"img"}})])])}),[],!1,null,null,null);a.default=s.exports}}]);