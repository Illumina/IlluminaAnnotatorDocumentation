"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[5146],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),d=p(n),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:e},s),{},{components:n})):r.createElement(f,i({ref:e},s))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[d]="string"==typeof t?t:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52629:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},i=void 0,c={unversionedId:"data-sources/splice-ai-json",id:"version-3.17/data-sources/splice-ai-json",title:"splice-ai-json",description:"| Field                | Type   | Notes                                            |",source:"@site/versioned_docs/version-3.17/data-sources/splice-ai-json.md",sourceDirName:"data-sources",slug:"/data-sources/splice-ai-json",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.17/data-sources/splice-ai-json",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/versioned_docs/version-3.17/data-sources/splice-ai-json.md",tags:[],version:"3.17",frontMatter:{}},l=[],p={toc:l},s="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"spliceAI":[ \n   {\n      "hgnc":"BLCAP",\n      "acceptorGainDistance":-3,\n      "acceptorGainScore":0.3,\n      "donorLossDistance":7,\n      "donorLossScore":0.9\n   },\n   { \n      "hgnc":"NNAT",\n      "acceptorGainDistance":-1,\n      "acceptorGainScore":0.2,\n      "donorGainDistance":-2,\n      "donorGainScore":0.3\n   }\n]\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hgnc"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"HGNC gene symbol")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"acceptorGainDistance"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\xb1 bp from current position")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"acceptorGainScore"),(0,a.kt)("td",{parentName:"tr",align:"center"},"float"),(0,a.kt)("td",{parentName:"tr",align:"left"},"range: 0 - 1.0. 1 decimal place")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"acceptorLossDistance"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\xb1 bp from current position")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"acceptorLossScore"),(0,a.kt)("td",{parentName:"tr",align:"center"},"float"),(0,a.kt)("td",{parentName:"tr",align:"left"},"range: 0 - 1.0. 1 decimal place")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"donorGainDistance"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\xb1 bp from current position")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"donorGainScore"),(0,a.kt)("td",{parentName:"tr",align:"center"},"float"),(0,a.kt)("td",{parentName:"tr",align:"left"},"range: 0 - 1.0. 1 decimal place")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"donorLossDistance"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\xb1 bp from current position")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"donorLossScore"),(0,a.kt)("td",{parentName:"tr",align:"center"},"float"),(0,a.kt)("td",{parentName:"tr",align:"left"},"range: 0 - 1.0. 1 decimal place")))))}d.isMDXComponent=!0}}]);