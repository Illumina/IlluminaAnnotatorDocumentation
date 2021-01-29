(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{173:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},O=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),O=p(n),j=a,d=O["".concat(o,".").concat(j)]||O[j]||s[j]||c;return n?r.a.createElement(d,b(b({ref:t},l),{},{components:n})):r.a.createElement(d,b({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=j;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var l=2;l<c;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(173)),o={},b={unversionedId:"data-sources/splice-ai-json",id:"data-sources/splice-ai-json",isDocsHomePage:!1,title:"splice-ai-json",description:"`json",source:"@site/docs/data-sources/splice-ai-json.md",slug:"/data-sources/splice-ai-json",permalink:"/NirvanaDocumentation/data-sources/splice-ai-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/splice-ai-json.md",version:"current"},i=[],l={toc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"spliceAI":[ \n   {\n      "hgnc":"BLCAP",\n      "acceptorGainDistance":-3,\n      "acceptorGainScore":0.3,\n      "donorLossDistance":7,\n      "donorLossScore":0.9\n   },\n   { \n      "hgnc":"NNAT",\n      "acceptorGainDistance":-1,\n      "acceptorGainScore":0.2,\n      "donorGainDistance":-2,\n      "donorGainScore":0.3\n   }\n]\n')),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Field"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Notes"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"hgnc"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"HGNC gene symbol")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"acceptorGainDistance"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"int"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\xb1 bp from current position")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"acceptorGainScore"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"float"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"range: 0 - 1.0. 1 decimal place")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"acceptorLossDistance"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"int"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\xb1 bp from current position")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"acceptorLossScore"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"float"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"range: 0 - 1.0. 1 decimal place")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"donorGainDistance"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"int"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\xb1 bp from current position")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"donorGainScore"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"float"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"range: 0 - 1.0. 1 decimal place")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"donorLossDistance"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"int"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\xb1 bp from current position")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"donorLossScore"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"float"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"range: 0 - 1.0. 1 decimal place")))))}p.isMDXComponent=!0}}]);