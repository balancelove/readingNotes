(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{382:function(t,s,a){"use strict";a.r(s);var e=a(38),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"给你的项目装个探头-—-sentry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#给你的项目装个探头-—-sentry","aria-hidden":"true"}},[t._v("#")]),t._v(" 给你的项目装个探头 — Sentry")]),t._v(" "),a("blockquote",[a("p",[t._v("在线上环境中，因为应用跑在用户浏览器中，发生错误时我们如果要对其进行调试就会显得比较困难。所以我们接入了 Sentry 服务对远程错误进行记录，接下来我们将会一步一步接入 Sentry 服务。")])]),t._v(" "),a("h2",{attrs:{id:"初始化-sentry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化-sentry","aria-hidden":"true"}},[t._v("#")]),t._v(" 初始化 Sentry")]),t._v(" "),a("p",[t._v("我们可以到 "),a("a",{attrs:{href:"https://sentry.io/welcome/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sentry"),a("OutboundLink")],1),t._v(" 官网中去创建一个账号，然后我们在 Sentry 中根据我们项目类型创建一个项目，由于这里我们做演示是 React 应用，所以我们选择 React，当然了 Sentry 支持非常多的类型，大家可以按照自己项目进行添加。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/27/16b97b7cd01f77ee?w=1659&h=379&f=png&s=77892",alt:""}})]),t._v(" "),a("p",[t._v("这时候，我们会看到这个界面，我们点击按钮。这时候会出现例子，我们先记住，然后开始创建我们的 React 应用。")]),t._v(" "),a("h2",{attrs:{id:"初始化-react-应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化-react-应用","aria-hidden":"true"}},[t._v("#")]),t._v(" 初始化 React 应用")]),t._v(" "),a("p",[t._v("我们用 "),a("code",[t._v("create-react-app")]),t._v(" 创建好我们的应用，并且安装好 "),a("code",[t._v("@sentry/browser")]),t._v("。")]),t._v(" "),a("p",[t._v("接着我们在 "),a("code",[t._v("index.js")]),t._v(" 里初始化 "),a("code",[t._v("Sentry")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Sentry "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@sentry/browser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nSentry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  dsn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://54ad7a14513e48bbb9b20698da401d1d@sentry.io/1491516'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("然后，在 "),a("code",[t._v("App.js")]),t._v(" 里写一段抛出错误的代码。")]),t._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onClick")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'抛出错误'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  throw error\n")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("点击按钮，我们就能够在 "),a("code",[t._v("Sentry")]),t._v(" 中看到错误了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/27/16b985d3b6b69d2b?w=1690&h=177&f=png&s=31640",alt:""}})]),t._v(" "),a("p",[t._v("我们点击进去之后可以看到非常多的信息，包括错误堆栈，以及浏览器的事件等等，这些都能够帮助我们快速定位问题，并且在邮箱中我们收到了来自 "),a("code",[t._v("Sentry")]),t._v(" 的报警邮件。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/27/16b98614c6bf3528?w=1378&h=1562&f=png&s=568025",alt:""}})]),t._v(" "),a("p",[t._v("等等，我们好像忘记了一个问题，如果别人也往这里发报错信息，我们会接收到所有的报错信息，但是我们只想收到我们应用的报错。")]),t._v(" "),a("p",[t._v("可以在这个地方设置我们接收的域名。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/27/16b98674c72e6336?w=1192&h=142&f=png&s=20623",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"设置-releases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置-releases","aria-hidden":"true"}},[t._v("#")]),t._v(" 设置 releases")]),t._v(" "),a("p",[t._v("在我们项目进行版本迭代的过程中，我们在一个新版本修复了一个问题，但是由于用户使用的是老版本，所以同样的错误又暴露出来了，这时候我们就能够清楚的知道，这是因为用户使用了老版本代码造成的。")]),t._v(" "),a("p",[t._v("那么我们要如何在 "),a("code",[t._v("Sentry")]),t._v(" 中设置项目的版本呢？很简单，就像下面这样：")]),t._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[t._v("Sentry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  dsn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://54ad7a14513e48bbb9b20698da401d1d@sentry.io/1491516'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  release"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sentry_example@20190627121204'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("这样新版本上的错误就会被标记成 "),a("code",[t._v("sentry_example@20190627121204")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/27/16b987091139cf64?w=1669&h=435&f=png&s=70924",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"sourcemap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sourcemap","aria-hidden":"true"}},[t._v("#")]),t._v(" sourceMap")]),t._v(" "),a("p",[t._v("上面说的这些，我们能够简单的对项目进行错误预警，但是有个问题就是当我们将项目进行打包之后代码变得极其难阅读，这样的报错信息对于我们来说是不友好的，那么我们要怎么解决这个问题呢？")]),t._v(" "),a("p",[t._v("答案当然就是给 "),a("code",[t._v("webpack")]),t._v(" 的配置加上 "),a("code",[t._v("source-map")]),t._v(" 了，我们将 "),a("code",[t._v("webpack")]),t._v(" 的配置打开，这时候我们再进行编译就会出现 map 文件了。")]),t._v(" "),a("p",[t._v("那么 "),a("code",[t._v("Sentry")]),t._v(" 是如何知道我们的 map 文件的呢？答案就是我们需要将 map 文件上传到 "),a("code",[t._v("Sentry")]),t._v(" 中去，也就是说，我们在 "),a("code",[t._v("build")]),t._v(" 之后需要将文件上传一份到 "),a("code",[t._v("Sentry")]),t._v(" 中去，同时，我们将版本和 map 文件结合起来，也就是说我们需要先建立一个版本，然后将对应版本的文件上传上去，那么我们该如何操作呢？")]),t._v(" "),a("ol",[a("li",[t._v("第一步，先安装 "),a("code",[t._v("@sentry/cli")]),t._v(" 工具")]),t._v(" "),a("li",[t._v("第二步，在编译之后进行版本确定以及文件上传工作")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 我们确定版本号的格式为 sentry_example@20190627220147")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这时候我们使用 sentry-cli 工具创建对应的版本")]),t._v("\n$ sentry-cli releases new sentry_example@20190627220147\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 再使用 sentry-cli 上传文件")]),t._v("\n$ sentry-cli releases files sentry_example@20190627220147 upload-sourcemaps --url-prefix http://localhost:8080 ./build\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 圆满成功")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("上面的操作中有个需要注意的点，就是 "),a("code",[t._v("--url-prefix")]),t._v(" 参数是你的静态文件访问的前缀，这个一定要写对，不然它对应不起来。")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("第三步，使用 "),a("code",[t._v("http-server")]),t._v(" 启动一个服务，然后访问它，再点击抛错按钮。")])]),t._v(" "),a("p",[t._v("通过上面几步，我们又在 "),a("code",[t._v("Sentry")]),t._v(" 中收到了报警。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/28/16b9dd31accce861?w=2180&h=776&f=png&s=100867",alt:""}})]),t._v(" "),a("p",[t._v("bingo，我们看到了更容易阅读的错误报告，同时，你还可以去设置邮件、钉钉、微信等接入报错提醒，关于 "),a("code",[t._v("Sentry")]),t._v(" 接入更多信息，可以到官网查看"),a("a",{attrs:{href:"https://docs.sentry.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("最后，大家使用 "),a("code",[t._v("Sentry")]),t._v(" 还有场景是需要自己在内网搭建部署，如果是配合 Docker，那么搭建 "),a("code",[t._v("Sentry")]),t._v(" 服务就变得非常简单了。")]),t._v(" "),a("p",[t._v("经过迷茫后，博客将继续更新，欢迎 Star，敬请期待。")]),t._v(" "),a("p",[t._v("https://github.com/balancelove/readingNotes")])])},[],!1,null,null,null);s.default=n.exports}}]);