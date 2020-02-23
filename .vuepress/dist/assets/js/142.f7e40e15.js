(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{277:function(t,a,e){"use strict";e.r(a);var s=e(38),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"webpack-学习"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-学习","aria-hidden":"true"}},[t._v("#")]),t._v(" Webpack 学习")]),t._v(" "),e("blockquote",[e("p",[t._v("中文文档： https://doc.webpack-china.org/")])]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#配置"}},[t._v("配置")])]),e("li",[e("a",{attrs:{href:"#配置选项"}},[t._v("配置选项")])])])]),e("p"),t._v(" "),e("h3",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),e("ol",[e("li",[t._v("创建配置文件："),e("code",[t._v("webpack.config.js")])]),t._v(" "),e("li",[t._v("文件配置："),e("code",[t._v("entry")]),t._v("、"),e("code",[t._v("module")]),t._v("、"),e("code",[t._v("plugins")]),t._v("、"),e("code",[t._v("output")]),t._v(" ；进阶配置："),e("code",[t._v("resolve")]),t._v("、"),e("code",[t._v("devServer")]),t._v("、"),e("code",[t._v("devtool")]),t._v("。")])]),t._v(" "),e("h3",{attrs:{id:"配置选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置选项","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置选项")]),t._v(" "),e("ol",[e("li",[t._v("entry: 入口文件，有两种书写方式，单页应用一个入口和多页应用拥有多个入口。")]),t._v(" "),e("li",[t._v("output: 输出文件，它表示的是当 webpack 编译打包完成之后怎么去输出的一个字段，里面比较常用的两个字段是 filename 和 path，这两个字段代表了输出文件的名字和路径。")]),t._v(" "),e("li",[t._v("module: 这里面就是对不同的模块进行处理的地方了，我们知道 webpack 把所有的资源都当成模块来处理，所以对应不同类型的模块，加载的方式也会不同，而这些都是通过一个个不同的 loader 来实现的，比如 css 通过 css-loader 来进行打包。")]),t._v(" "),e("li",[t._v("plugins: 通过插件这个选项我们能让 webpack 变得丰富多彩，不同的插件会造成不同的打包构建过程。")]),t._v(" "),e("li",[t._v("devtool: 这里面其实就是一个 sourcemap，因为当我们打包完成之后，webpack 会生成一个或者几个文件，我们如果要去追踪错误在源码中的位置，会十分困难，这给我们调试带来很大的不方便，于是就有了这个。")]),t._v(" "),e("li",[t._v("devServer: 这是 webpack 给我们提供的一个简单的 web 服务器，并且能够实时的重新加载。")]),t._v(" "),e("li",[t._v("resolve: 在这里面我们能够配置，在打包编译过程中如何去解析模块，比如常用的别名 alias 等等。")])]),t._v(" "),e("h2",{attrs:{id:"loaders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loaders","aria-hidden":"true"}},[t._v("#")]),t._v(" loaders")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    loaders"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正则匹配")]),t._v("\n        test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/\\.html$/'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应的 loader")]),t._v("\n        loader"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html-loader'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("p",[t._v("我们可以看到对于 loader，我们使用正则匹配去匹配相应的文件，然后使用相应的 loader 去解析。")]),t._v(" "),e("p",[e("strong",[t._v("特别注意")]),t._v("：对于多个 loader 串行的解析，是从右向左的解析顺序。")]),t._v(" "),e("h2",{attrs:{id:"插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件","aria-hidden":"true"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),e("p",[t._v("在这个"),e("a",{attrs:{href:"https://doc.webpack-china.org/plugins/",target:"_blank",rel:"noopener noreferrer"}},[t._v("地址"),e("OutboundLink")],1),t._v("我们能够看到许许多多的插件，它能够给我们的 webpack 代理不一样的构建体验。")]),t._v(" "),e("p",[t._v("比如说：")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("html-webpack-plugin:")]),t._v(" 这个插件会动态生成一个 html 文件。")]),t._v(" "),e("li",[e("strong",[t._v("clean-webpack-plugin:")]),t._v(" 这个插件会打包生成文件之前删除你提供的路径的文件。")]),t._v(" "),e("li",[e("strong",[t._v("HotModuleReplacementPlugin:")]),t._v(" 模块热更新插件，它会实时的更新，可以加快开发的速度。")]),t._v(" "),e("li",[e("strong",[t._v("DefinePlugin:")]),t._v(" 它可以创建一个在编译时可以配置的全局常量，做开发与线上区分非常有用。")]),t._v(" "),e("li",[t._v("当然了，还有许多的插件，大家可以去尝试，自然就熟悉了。")])]),t._v(" "),e("h2",{attrs:{id:"devtool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#devtool","aria-hidden":"true"}},[t._v("#")]),t._v(" devtool")]),t._v(" "),e("p",[t._v("为了更容易地追踪错误和警告，JavaScript 提供了 "),e("a",{attrs:{href:"http://blog.teamtreehouse.com/introduction-source-maps",target:"_blank",rel:"noopener noreferrer"}},[t._v("source map"),e("OutboundLink")],1),t._v(" 功能，将编译后的代码映射回原始源代码。如果一个错误来自于 "),e("code",[t._v("b.js")]),t._v("，source map 就会明确的告诉你。")]),t._v(" "),e("p",[t._v("source map 有很多"),e("a",{attrs:{href:"https://doc.webpack-china.org/configuration/devtool",target:"_blank",rel:"noopener noreferrer"}},[t._v("不同的选项"),e("OutboundLink")],1),t._v("可用，请务必仔细阅读它们，以便可以根据需要进行配置。")])])},[],!1,null,null,null);a.default=r.exports}}]);