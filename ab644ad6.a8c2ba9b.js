(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));n(66),n(226),n(33),n(27),n(26),n(67),n(0);var r=n(234);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o={id:"motivation",title:"Motivation"},i=[{value:"Forms concept",id:"forms-concept",children:[]}],c={rightToc:i},s="wrapper";function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(s,a({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"forms-concept"},"Forms concept"),Object(r.b)("p",null,"There\u2019s a very interesting class-based inheritance concept for forms.\nBasically, there are a few types of forms with different capabilities.\nMost of the time you\u2019ll be using either AutoForm or ValidatedForm, but there are quite a few more to choose from:"),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/uniforms-graph.png"})),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"If you are not familiar with concept of HOC, read one of many posts about them first."),"\nI\u2019m sure you\u2019ve read at least one of ",Object(r.b)("em",{parentName:"p"},"Why ES6 classes are bad")," or ",Object(r.b)("em",{parentName:"p"},"class considered harmful")," posts. I\u2019ve read them too, so why is uniforms using classes? Well, it\u2019s all about the complexity."),Object(r.b)("p",{parentName:"blockquote"},"-- ",Object(r.b)("cite",null,Object(r.b)("a",a({parentName:"p"},{href:"https://github.com/radekmie"}),"Rados\u0142aw Miernik")))),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/hoc-hell.png"}),Object(r.b)("small",{style:{display:"block"}},"Screenshot of React DevTools when lots of HOC\u2019s are applied to a component.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"I wanted to achieve the same functionality as with multiple HOCs, but within one component. To be honest, readability is more important than performance. In short, I\u2019ve reached (more or less) traits with ES6 clasess. The result?"),Object(r.b)("p",{parentName:"blockquote"},"-- ",Object(r.b)("cite",null,Object(r.b)("a",a({parentName:"p"},{href:"https://github.com/radekmie"}),"Rados\u0142aw Miernik")))),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"import BaseForm from './BaseForm';\nimport QuickForm from './QuickForm';\nimport ValidatedForm from './ValidatedForm';\n\nconst ValidatedQuickForm = ValidatedForm.Validated(QuickForm.Quick(BaseForm));\n")),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/uniforms-traits.png"}),Object(r.b)("small",{style:{display:"block"}},'AutoValidatedQuickSemanticForm (using 5 "traits") viewed in React DevTools.')),Object(r.b)("p",null,"While it\u2019s not a universal approach that will work in every situation, using it in uniforms allows us to deliver clean-looking components while keeping extendability and separation of concerns."),Object(r.b)("hr",null),Object(r.b)("p",null,"Based on ",Object(r.b)("a",a({parentName:"p"},{href:"https://blog.meteor.com/managing-forms-in-a-meteor-react-project-with-uniforms-33d60602b43a"}),"Managing forms in a Meteor/React project with the uniforms package")," written by ",Object(r.b)("a",a({parentName:"p"},{href:"https://github.com/MacRusher"}),"Maciej Stasie\u0142uk"),"."))}l.isMDXComponent=!0},226:function(e,t,n){"use strict";var r=n(3),a=n(69)(!1),o=[].indexOf,i=!!o&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(i||!n(34)(o)),"Array",{indexOf:function(e){return i?o.apply(this,arguments)||0:a(this,e,arguments[1])}})},234:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r),o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var s="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),m=r,u=p[c+"."+m]||p[m]||l[m]||o;return n?a.a.createElement(u,Object.assign({},{ref:t},s,{components:n})):a.a.createElement(u,Object.assign({},{ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:r,i[1]=c;for(var m=2;m<o;m++)i[m]=n[m];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);