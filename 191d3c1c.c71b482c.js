(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{181:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,u=s["".concat(o,".").concat(m)]||s[m]||d[m]||c;return n?a.a.createElement(u,i(i({ref:t},l),{},{components:n})):a.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(181)),o={},i={unversionedId:"data-sources/splice-ai-json",id:"data-sources/splice-ai-json",isDocsHomePage:!1,title:"splice-ai-json",description:"`json",source:"@site/docs/data-sources/splice-ai-json.md",slug:"/data-sources/splice-ai-json",permalink:"/NirvanaDocumentation/data-sources/splice-ai-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/splice-ai-json.md",version:"current"},b=[],l={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'"spliceAI":[ \n   {\n      "hgnc":"BLCAP",\n      "acceptorGainDistance":-3,\n      "acceptorGainScore":0.3,\n      "donorLossDistance":7,\n      "donorLossScore":0.9\n   },\n   { \n      "hgnc":"NNAT",\n      "acceptorGainDistance":-1,\n      "acceptorGainScore":0.2,\n      "donorGainDistance":-2,\n      "donorGainScore":0.3\n   }\n]\n')),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Field"),Object(c.b)("th",{parentName:"tr",align:"center"},"Type"),Object(c.b)("th",{parentName:"tr",align:"left"},"Notes"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"hgnc"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"left"},"HGNC gene symbol")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"acceptorGainDistance"),Object(c.b)("td",{parentName:"tr",align:"center"},"int"),Object(c.b)("td",{parentName:"tr",align:"left"},"\xb1 bp from current position")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"acceptorGainScore"),Object(c.b)("td",{parentName:"tr",align:"center"},"float"),Object(c.b)("td",{parentName:"tr",align:"left"},"range: 0 - 1.0. 1 decimal place")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"acceptorLossDistance"),Object(c.b)("td",{parentName:"tr",align:"center"},"int"),Object(c.b)("td",{parentName:"tr",align:"left"},"\xb1 bp from current position")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"acceptorLossScore"),Object(c.b)("td",{parentName:"tr",align:"center"},"float"),Object(c.b)("td",{parentName:"tr",align:"left"},"range: 0 - 1.0. 1 decimal place")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"donorGainDistance"),Object(c.b)("td",{parentName:"tr",align:"center"},"int"),Object(c.b)("td",{parentName:"tr",align:"left"},"\xb1 bp from current position")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"donorGainScore"),Object(c.b)("td",{parentName:"tr",align:"center"},"float"),Object(c.b)("td",{parentName:"tr",align:"left"},"range: 0 - 1.0. 1 decimal place")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"donorLossDistance"),Object(c.b)("td",{parentName:"tr",align:"center"},"int"),Object(c.b)("td",{parentName:"tr",align:"left"},"\xb1 bp from current position")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"donorLossScore"),Object(c.b)("td",{parentName:"tr",align:"center"},"float"),Object(c.b)("td",{parentName:"tr",align:"left"},"range: 0 - 1.0. 1 decimal place")))))}p.isMDXComponent=!0}}]);