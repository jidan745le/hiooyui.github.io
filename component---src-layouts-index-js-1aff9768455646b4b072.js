webpackJsonp([0x67ef26645b2a,60335399758886],{89:function(e,t){e.exports={layoutContext:{}}},176:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},o=n(4),r=l(o),u=n(180),i=l(u),c=n(89),f=l(c);t.default=function(e){return r.default.createElement(i.default,a({},e,f.default))},e.exports=t.default},268:function(e,t){},180:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(4),i=l(u),c=n(8),f=l(c),d=n(42),m=l(d),s=n(187),p=n(47),h=l(p);n(268);var E=function(e){var t=e.location,n=t.pathname;return i.default.createElement("div",{className:"header-nav",style:{borderBottom:"2px solid #343434",height:40,lineHeight:40}},i.default.createElement("ul",{className:"nav-list clearfix",style:{margin:"0 auto",maxWidth:960,display:"block",padding:"0 40px"}},i.default.createElement("li",{className:"/"===n?"active":null},i.default.createElement(m.default,{to:"/"},"首页")),i.default.createElement("li",{className:n.match(/\/fun/i)?"active":null},i.default.createElement(m.default,{to:"/fun"},"A4纸知多少")),i.default.createElement("li",{className:n.match(/\/news/i)?"active":null},i.default.createElement(m.default,{to:"/news"},"A4纸资讯")),i.default.createElement("li",{className:n.match(/\/price/i)?"active":null},i.default.createElement(m.default,{to:"/price"},"A4纸价格"))))},g=function(){return i.default.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1rem 1.0875rem"}},i.default.createElement("h1",{style:{margin:0}},i.default.createElement(m.default,{to:"/",style:{color:"#ff9c00",textDecoration:"none"}},i.default.createElement("img",{src:"/img/logo.png",alt:"A4纸网"}))))},b=function(){return i.default.createElement("div",{style:{background:"#b1dff0 url(/img/banner-2017.jpg) no-repeat center center",height:94}})},y=function(e){var t=e.location;return i.default.createElement("div",{style:{marginBottom:"1rem"}},i.default.createElement(g,null),i.default.createElement(E,{location:t}),i.default.createElement(b,null))},v=function(){return i.default.createElement("div",{style:{width:"100%",background:"#efefef",borderTop:"1px solid #eee",position:"absolute",left:0,bottom:0}},i.default.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",textAlign:"center"}},"注：本站内容全部原创或者来源于网络，如遇引用版权问题，欢迎与本站站长联系！",i.default.createElement("br",null),i.default.createElement("br",null),i.default.createElement("a",{href:"mailto:kbl_1794@qq.com",rel:"nofollow"},"联系站长")," | ",i.default.createElement("a",{href:"mailto:kbl_1794@qq.com",rel:"nofollow"},"商务合作"),i.default.createElement("br",null),"A4纸网 - 专注于A4纸  保留所有权 © 2017~2018 a4z.cn"))},x=function(){return i.default.createElement("div",{className:"return-top",style:{width:50,height:50,lineHeight:"50px",textAlign:"center",position:"fixed",right:20,bottom:50,color:"#ddd",border:"1px solid #ddd",fontSize:16,fontWeight:700,cursor:"pointer",backgroundColor:"#fff"},onClick:function(){(0,s.goTop)()}},"个")},w=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.location;return i.default.createElement("div",{style:{minHeight:"100%",position:"relative"}},i.default.createElement(h.default,{link:[{type:"favicon",rel:"icon",href:"/favicon.ico"}]}),i.default.createElement(y,{location:n}),i.default.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 150px"}},t()),i.default.createElement(v,null),i.default.createElement(x,null))},t}(u.Component);w.propTypes={children:f.default.func},t.default=w,e.exports=t.default},187:function(e,t){"use strict";t.__esModule=!0;t.goTop=function(e,t){var n=e||-.02,l=t||16,a=function e(){var t=0,a=0,o=0;document.documentElement&&(t=document.documentElement.scrollTop||0),document.body&&(a=document.body.scrollTop||0),o=window.scrollY||0;var r=Math.max(t,Math.max(a,o)),u=n*Math.sqrt(-2*r/n)*l;window.scrollTo(0,Math.floor(r+u)),r>0&&window.setTimeout(function(){e()},l)};a()}}});
//# sourceMappingURL=component---src-layouts-index-js-1aff9768455646b4b072.js.map