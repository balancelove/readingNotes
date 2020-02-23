(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{380:function(t,a,i){"use strict";i.r(a);var e=i(38),r=Object(e.a)({},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"盒模型"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#盒模型","aria-hidden":"true"}},[t._v("#")]),t._v(" 盒模型")]),t._v(" "),i("blockquote",[i("p",[t._v("CSS 盒模型是 CSS 的基石，非常重要的一块内容。")])]),t._v(" "),i("h2",{attrs:{id:"盒模型基本概念"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#盒模型基本概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 盒模型基本概念")]),t._v(" "),i("ol",[i("li",[t._v("margin + border + padding + content")]),t._v(" "),i("li",[t._v("标准模型： 计算内容宽度时 width = content width，高度计算相同。")]),t._v(" "),i("li",[t._v("IE 模型： 计算内容宽度时 width = content + padding + border。")]),t._v(" "),i("li",[t._v("box-sizing: border-box、content-box。")]),t._v(" "),i("li",[i("strong",[t._v("JS 获取盒模型的宽高。")])]),t._v(" "),i("li",[i("strong",[t._v("边距重叠及 BFC。")])])]),t._v(" "),i("h2",{attrs:{id:"js-获取盒模型的宽高"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#js-获取盒模型的宽高","aria-hidden":"true"}},[t._v("#")]),t._v(" JS 获取盒模型的宽高")]),t._v(" "),i("ul",[i("li",[t._v("dom.style.width/height: 只能取到内联样式")]),t._v(" "),i("li",[t._v("dom.currentStyle.width/height: 拿到选然后的宽高，但只有 IE 支持")]),t._v(" "),i("li",[t._v("window.getComputedStyle(dom).width/height: 兼容浏览器")]),t._v(" "),i("li",[t._v("dom.getBoundingClientRect().width/height: 拿到四条边相对左边上边的距离。")])]),t._v(" "),i("h2",{attrs:{id:"边距重叠"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#边距重叠","aria-hidden":"true"}},[t._v("#")]),t._v(" 边距重叠")]),t._v(" "),i("p",[t._v("父子边距重叠、兄弟边距重叠、空元素边距重叠(自身上下边距重叠)，取最大值。")]),t._v(" "),i("h2",{attrs:{id:"bfc"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bfc","aria-hidden":"true"}},[t._v("#")]),t._v(" BFC")]),t._v(" "),i("p",[t._v("块级格式化上下文")]),t._v(" "),i("h3",{attrs:{id:"原理（渲染规则）"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#原理（渲染规则）","aria-hidden":"true"}},[t._v("#")]),t._v(" 原理（渲染规则）")]),t._v(" "),i("ol",[i("li",[t._v("在同一个 BFC 元素内部垂直方向发生边距重叠")]),t._v(" "),i("li",[t._v("BFC 区域不会与浮动元素 box 重叠")]),t._v(" "),i("li",[t._v("独立容器，内外互不影响")]),t._v(" "),i("li",[t._v("计算 BFC 高度，浮动元素参与计算")])]),t._v(" "),i("h3",{attrs:{id:"创建-bfc"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#创建-bfc","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建 BFC")]),t._v(" "),i("ul",[i("li",[t._v("position 的值不为 static 或者 relative。")]),t._v(" "),i("li",[t._v("float 不为 none")]),t._v(" "),i("li",[t._v("display 为 table 相关")]),t._v(" "),i("li",[t._v("overflow 不为 visible")])])])},[],!1,null,null,null);a.default=r.exports}}]);