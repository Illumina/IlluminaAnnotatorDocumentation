(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{166:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||s[d]||o;return n?a.a.createElement(m,l(l({ref:t},i),{},{components:n})):a.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(166)),c={},l={unversionedId:"data-sources/gnomad-lof-json",id:"version-3.14/data-sources/gnomad-lof-json",isDocsHomePage:!1,title:"gnomad-lof-json",description:"`json",source:"@site/versioned_docs/version-3.14/data-sources/gnomad-lof-json.md",slug:"/data-sources/gnomad-lof-json",permalink:"/NirvanaDocumentation/3.14/data-sources/gnomad-lof-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.14/data-sources/gnomad-lof-json.md",version:"3.14"},b=[],i={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"gnomAD":{ \n   "pLi":1.00e0,\n   "pNull":8.94e-40,\n   "pRec":1.84e-16,\n   "synZ":-8.44e-2,\n   "misZ":5.96e-1,\n   "loeuf":1.13e0\n}\n')),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Field"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Notes"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"pLi"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"float"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"probability of being intolerant of a single loss-of-function variant (like haploinsufficient genes, observed ~ 0.1*expected)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"pNull"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"float"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"probability of being completely tolerant of loss of function variation (observed = expected)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"pRec"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"float"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"probability of being intolerant of two loss of function variants (like recessive genes, observed ~ 0.5*expected)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"synZ"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"float"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"corrected synonymous Z score")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"misZ"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"float"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"corrected missense Z score")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"loeuf"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"float"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"loss of function observed/expected upper bound fraction (LOEUF)")))))}p.isMDXComponent=!0}}]);