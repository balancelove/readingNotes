(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{364:function(a,t,_){"use strict";_.r(t);var r=_(38),v=Object(r.a)({},function(){var a=this,t=a.$createElement,_=a._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"数字证书那些事"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数字证书那些事","aria-hidden":"true"}},[a._v("#")]),a._v(" 数字证书那些事")]),a._v(" "),_("blockquote",[_("p",[a._v("在这个 HTTPS 满天飞的时代，数字证书无处不在，但是数字证书的原理到底是什么，我一直不太清楚，今天就来谈谈数字证书的那些事。")])]),a._v(" "),_("h2",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),_("p",[a._v("突然想到这个问题，是因为最近在在开发过程中了解到一种叫做 MITM(中间人攻击) 的攻击手段。所以又去学习了一波姿势，哈哈。")]),a._v(" "),_("p",[a._v("那么在开始之前，我们先来了解一些基本的姿势、概念。")]),a._v(" "),_("h2",{attrs:{id:"基本概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本概念","aria-hidden":"true"}},[a._v("#")]),a._v(" 基本概念")]),a._v(" "),_("h3",{attrs:{id:"公钥密码体制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#公钥密码体制","aria-hidden":"true"}},[a._v("#")]),a._v(" 公钥密码体制")]),a._v(" "),_("p",[a._v("在这个体制中密钥是成对生成的，每对密钥由"),_("strong",[a._v("公钥")]),a._v("和"),_("strong",[a._v("私钥")]),a._v("组成。那么它的加密解密过程是什么样的呢？")]),a._v(" "),_("ul",[_("li",[a._v("加密： 通过加密算法以及公钥对内容进行加密，得到了密文。")]),a._v(" "),_("li",[a._v("解密： 通过解密算法以及私钥对密文进行解密，得到明文。")])]),a._v(" "),_("p",[_("strong",[a._v("注意：")]),a._v(" 由公钥加密的内容，只能由私钥进行解密，也就是说没有私钥你是无法解密的。")]),a._v(" "),_("h3",{attrs:{id:"对称加密算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#对称加密算法","aria-hidden":"true"}},[a._v("#")]),a._v(" 对称加密算法")]),a._v(" "),_("p",[a._v("对于对称加密算法来说，加密和解密使用的密钥是相同的，不区分公钥以及私钥，也就是一把锁两把一模一样的钥匙。所以如果你想要保证安全的话，就只有把钥匙藏好，别让任何人知道，只有通信的双方知道。")]),a._v(" "),_("h3",{attrs:{id:"非对称加密算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#非对称加密算法","aria-hidden":"true"}},[a._v("#")]),a._v(" 非对称加密算法")]),a._v(" "),_("p",[a._v("非对称加密算法中，加密和解密使用的密钥是不同的。上面说到的公钥密码体制就是一种非对称加密，公钥与私钥不同。")]),a._v(" "),_("h3",{attrs:{id:"签名"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#签名","aria-hidden":"true"}},[a._v("#")]),a._v(" 签名")]),a._v(" "),_("p",[a._v("在生活中签名的作用是啥，我想大家都明白，表示这个文件是我认可的，同时防止文件被篡改。那么，在计算机领域我们怎么进行签名呢？一般的做法就是对信息做 hash 处理，得到一个 hash 值。特别注意的是，这个过程是不可逆的，也就是说你无法通过 hash 值去推导出原来的信息。")]),a._v(" "),_("h2",{attrs:{id:"加密信息传递过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#加密信息传递过程","aria-hidden":"true"}},[a._v("#")]),a._v(" 加密信息传递过程")]),a._v(" "),_("p",[a._v("我们举个小例子来说明这个过程：")]),a._v(" "),_("p",[a._v("现在我们有两个人物，小张和小王，他们两个在谈恋爱，但是他们是异地恋，于是他们想用信来进行交流，但是直接写又害怕别人看见，咋办呢？加密。")]),a._v(" "),_("p",[a._v("所以，小张拿出了一把锁，这把锁有一把钥匙，小张自己拿着这把钥匙，同时，他把开着的锁("),_("strong",[a._v("公钥")]),a._v(")通过快递员给了小王。")]),a._v(" "),_("p",[a._v("小王收到了这把锁之后，又拿出了一把锁，这把锁有两把钥匙("),_("strong",[a._v("对称加密")]),a._v(")，然后小王留一把钥匙，把锁和另外一把钥匙放到盒子里（砸不开的那种泰拉石盒子，哈哈），然后用小张给她的那把锁锁上。")]),a._v(" "),_("p",[a._v("好了，这个盒子除了小张，谁也打不开，经过快递员，盒子到了小张那里，小张用他的钥匙打开了盒子，然后放了个纸条写上 ”我爱你“，然后用盒子里面的小王锁把盒子锁上。")]),a._v(" "),_("p",[a._v("于是乎，现在小张和小王都有了这把锁的钥匙，就可以加密交流了。")]),a._v(" "),_("hr"),a._v(" "),_("p",[a._v("那这个加密方法是完美的么？并不是，好了，传说中的第三者要出现了。")]),a._v(" "),_("p",[a._v("这时候出现了另一个人，小六，他也喜欢小王，于是，在小张第一次给那把锁的时候，悄悄的把锁换了，换成了自己的锁。")]),a._v(" "),_("p",[a._v("然后小王以为是小张给的锁，于是将自己的锁和钥匙放在了盒子里，然后用小六的锁锁上了盒子。")]),a._v(" "),_("p",[a._v("于是乎，大家都知道了，小六用钥匙打开了盒子，然后把小王锁和钥匙拿到自己手里，放进去了自己的锁和钥匙，然后用小张的锁锁上盒子。")]),a._v(" "),_("p",[a._v("小张收到了盒子之后，以为盒子里的锁和钥匙是小王的，于是写上了 ”我爱你“，结果小六拿到之后，把 ”我爱你“ 换成了 ”分手吧“ 发给了小王，小王收到后很伤心，就问 ”为啥要分手“，但是小六又把纸条换成了 ”那就分手吧“，完蛋，分手了。")]),a._v(" "),_("p",[a._v("这是一个悲伤的故事，那咋办呢？于是乎，小张发明了一种不能销毁的小条条（"),_("strong",[a._v("数字证书")]),a._v("）贴在锁上，表示这是我小张的锁，然后小六就没办法偷换锁了。")]),a._v(" "),_("h2",{attrs:{id:"数字证书"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数字证书","aria-hidden":"true"}},[a._v("#")]),a._v(" 数字证书")]),a._v(" "),_("p",[a._v("数字证书就是我们上面所说的那个小条条，那么数字证书如何产生的呢？")]),a._v(" "),_("p",[a._v("首先，我们需要一个很权威的机构来签发数字证书给你，我们称之为 CA，这个机构用非对称加密产生一对密钥。")]),a._v(" "),_("p",[a._v("然后，私钥自己藏起来，用自己的私钥对公钥进行签名，生成数字证书，证书文件都有一个明文的部分和密文的部分，明文的部分里面包含了谁签发的、签发给谁、有效期是多少等等信息，然后使用 hash 算法进行计算，得到一个 hash 值。然后再用私钥对这个 hash 值进行加密，这就得到了一个签名信息。然后把这两部分合起来，放到数字证书的文件里，这就是一个数字证书了。")]),a._v(" "),_("p",[a._v("好了，假如说我拿到了一个数字证书，那么我要如何去验明他是否正确呢？")]),a._v(" "),_("p",[a._v("首先，我们找到签发这个证书的机构，拿到它的公钥，然后用公钥去解密密文，得到 hash 值，接下来，我们通过同样的 hash 算法对明文进行 hash 处理，现在我们就有两个 hash 值了，我们比对一下这两个 hash 值，就知道证书是否正确了。")]),a._v(" "),_("p",[a._v("那么，我们从何得知它是否可信呢？我是不是可以自己给自己发一个证书啊，当然这是不行的，上面说的权威机构，就那么些公司，这几个公司的证书被各软件厂商设置成“可信任的根证书”，然后这几个根证书可以去证明其他的证书。就比如说你爸信任你，你信任你的女朋友，那么你爸也就信任你的女朋友了。而上面说的自己给自己发的证书各厂商当然就不信任了。")]),a._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),_("p",[a._v("这篇文章也只能说个大概，真实情况更加复杂，记得以前颁发证书使用的非对称加密算法是 RSA，后面有了解到一种叫 ECC 的加密算法，安全性高，处理速度快，存储空间占用小，有篇"),_("a",{attrs:{href:"https://imququ.com/post/ecc-certificate.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("博客"),_("OutboundLink")],1),a._v("大家可以看看。")]),a._v(" "),_("p",[a._v("好了，就说到这里，其实对这方面了解的也不是太多，如果有错误，望指出改正。")]),a._v(" "),_("blockquote",[_("p",[a._v("如果各位看官看的还行，可以到 "),_("a",{attrs:{href:"https://github.com/balancelove/readingNotes",target:"_blank",rel:"noopener noreferrer"}},[a._v("我的博客仓库"),_("OutboundLink")],1),a._v(" 里给我一颗小小的 star 支持一下，不胜感激。")])])])},[],!1,null,null,null);t.default=v.exports}}]);