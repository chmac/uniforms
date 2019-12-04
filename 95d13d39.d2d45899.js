/*! For license information please see 95d13d39.d2d45899.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{208:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return m}));t(66),t(226),t(33),t(27),t(26),t(67),t(223);var r=t(0),a=t.n(r),i=t(234),c=t(432),u=t(458);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var s={id:"installation",title:"Installation"},l=[],p={rightToc:l},f="wrapper";function m(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(i.b)(f,o({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Core package first."),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{className:"language-shell"}),"npm install uniforms\n")),Object(i.b)("p",null,"Now the schema package."),Object(i.b)(c.b,{group:"bridge",tabs:[{name:"GraphQL"},{name:"JSON-Schema"},{name:"Simple-Schema"},{name:"Simple-Schema-2"}],mdxType:"Tabs"},(function(e){var n=e.name;return Object(i.b)(a.a.Fragment,null,Object(u.a)("shell","npm install uniforms-bridge-"+n.toLowerCase()),Object(i.b)("p",null,"Finally, pick your theme."),Object(i.b)(c.b,{group:"theme",tabs:[{name:"Semantic"},{name:"Material"},{name:"Bootstrap3"},{name:"Bootstrap4"},{name:"AntD"},{name:"Unstyled"}],mdxType:"Tabs"},(function(e){var t=e.name;return Object(i.b)(a.a.Fragment,null,Object(u.a)("shell","npm install uniforms-"+t.toLowerCase()),Object(i.b)("p",null,"TL;DR; Just let me copy it!"),Object(u.a)("shell","npm install uniforms uniforms-bridge-"+n.toLowerCase()+" uniforms-"+t.toLowerCase()))})))})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," If you are going to use a themed package - remember to include correct styles!"))}m.isMDXComponent=!0},223:function(e,n,t){var r=t(17).f,a=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in a||t(12)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},225:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&e.push(c)}else if("object"===i)for(var u in r)t.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(n,[]))||(e.exports=r)}()},226:function(e,n,t){"use strict";var r=t(3),a=t(69)(!1),i=[].indexOf,c=!!i&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(c||!t(34)(i)),"Array",{indexOf:function(e){return c?i.apply(this,arguments)||0:a(this,e,arguments[1])}})},277:function(e,n,t){e.exports={tabs:"tabs_2xVA",item:"item_1Jpn",active:"active_2_a2"}},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));t(45),t(226);var r=t(0),a={},i={};function c(e){var n=Object(r.useState)(a[e]||0),t=n[0],c=n[1],u=Object(r.useCallback)((function(n){return function(e,n){a[e]=n,i[e].forEach((function(e){e(n)}))}(e,n)}),[e]);return Object(r.useEffect)((function(){return function(e,n){return void 0===i[e]&&(a[e]=0,i[e]=[]),i[e].push(n),function(){i[e].splice(i[e].indexOf(n),1)}}(e,c)}),[e]),{activeTab:t,onTab:u}}},432:function(e,n,t){"use strict";var r=t(15),a=t.n(r),i=t(0),c=t.n(i),u=(t(223),t(43),t(225)),o=t.n(u),s=t(277),l=t.n(s);function p(e){var n=e.children,t=e.active,r=e.onClick;return c.a.createElement("span",{className:o()(l.a.item,t&&l.a.active),onClick:r},n)}function f(e){var n=e.items,t=e.activeTab,r=e.onTab;return c.a.createElement("div",{className:l.a.tabs},n.map((function(e,n){var a=e.name;return c.a.createElement(p,{active:t===n,key:n,onClick:function(){return r(n)}},a)})))}f.propTypes={items:a.a.arrayOf(a.a.shape({name:a.a.string.isRequired})).isRequired,activeTab:a.a.number.isRequired,onTab:a.a.func.isRequired};var m=f,b=t(281);function d(e){var n=e.children,t=e.group,r=e.tabs,a=Object(b.a)(t),i=a.activeTab,u=a.onTab;return c.a.createElement(c.a.Fragment,null,c.a.createElement(m,{activeTab:i,items:r,onTab:u}),n(r[i]))}d.propTypes={children:a.a.func,group:a.a.string.isRequired,tabs:a.a.arrayOf(a.a.shape({name:a.a.string.isRequired})).isRequired};var v=d;t.d(n,"b",(function(){return v})),t.d(n,"a",(function(){return m}))},458:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(531);function c(e,n){return a.a.createElement(i.a.pre,null,a.a.createElement(i.a.code,{children:n,className:"language-"+e,mdxType:"code",originalType:"code",parentName:"pre"}))}t.d(n,"a",(function(){return c}))},521:function(e,n){e.exports="\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},550:function(e,n,t){var r=t(3),a=t(28),i=t(11),c=t(521),u="["+c+"]",o=RegExp("^"+u+u+"*"),s=RegExp(u+u+"*$"),l=function(e,n,t){var a={},u=i((function(){return!!c[e]()||"\u200b\x85"!="\u200b\x85"[e]()})),o=a[e]=u?n(p):c[e];t&&(a[t]=o),r(r.P+r.F*u,"String",a)},p=l.trim=function(e,n){return e=String(a(e)),1&n&&(e=e.replace(o,"")),2&n&&(e=e.replace(s,"")),e};e.exports=l}}]);