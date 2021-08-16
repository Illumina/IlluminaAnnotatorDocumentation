"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[2883],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return s}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),m=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),f=m(n),s=a,d=f["".concat(p,".").concat(s)]||f[s]||c[s]||l;return n?r.createElement(d,o(o({ref:e},u),{},{components:n})):r.createElement(d,o({ref:e},u))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4342:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={},p={unversionedId:"data-sources/1000Genomes-snv-json",id:"version-3.14/data-sources/1000Genomes-snv-json",isDocsHomePage:!1,title:"1000Genomes-snv-json",description:"`json",source:"@site/versioned_docs/version-3.14/data-sources/1000Genomes-snv-json.md",sourceDirName:"data-sources",slug:"/data-sources/1000Genomes-snv-json",permalink:"/NirvanaDocumentation/3.14/data-sources/1000Genomes-snv-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.14/data-sources/1000Genomes-snv-json.md",version:"3.14",frontMatter:{}},m=[],u={toc:m};function c(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"oneKg":{\n   "allAf":0.200879,\n   "afrAf":0.210287,\n   "amrAf":0.139769,\n   "easAf":0.275794,\n   "eurAf":0.181909,\n   "sasAf":0.173824,\n   "allAn":5008,\n   "afrAn":1322,\n   "amrAn":694,\n   "easAn":1008,\n   "eurAn":1006,\n   "sasAn":978,\n   "allAc":1006,\n   "afrAc":278,\n   "amrAc":97,\n   "easAc":278,\n   "eurAc":183,\n   "sasAc":170\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"allAf"),(0,l.kt)("td",{parentName:"tr",align:"center"},"float"),(0,l.kt)("td",{parentName:"tr",align:"left"},"allele frequency for all populations. Range: 0 - 1.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"allAc"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"allele count for all populations. Integer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"allAn"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"allele number for all populations. Non-zero integer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"afrAf"),(0,l.kt)("td",{parentName:"tr",align:"center"},"float"),(0,l.kt)("td",{parentName:"tr",align:"left"},"allele frequency for the African super population. Range: 0 - 1.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"afrAc"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"allele count for the African super population. Integer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"afrAn"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"allele number for the African super population. Non-zero integer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"amrAf"),(0,l.kt)("td",{parentName:"tr",align:"center"},"float"),(0,l.kt)("td",{parentName:"tr",align:"left"},"allele frequency for the Ad Mixed American super population. Range: 0 - 1.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"amrAc"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"allele count for the Ad Mixed American super population. Integer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"amrAn"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"allele number for the Ad Mixed American super population. Non-zero integer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"easAf"),(0,l.kt)("td",{parentName:"tr",align:"center"},"float"),(0,l.kt)("td",{parentName:"tr",align:"left"},"allele frequency for the East Asian super population. Range: 0 - 1.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"easAc"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"allele count for the East Asian super population. Integer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"easAn"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"allele number for the East Asian super population. Non-zero integer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"eurAf"),(0,l.kt)("td",{parentName:"tr",align:"center"},"float"),(0,l.kt)("td",{parentName:"tr",align:"left"},"allele frequency for the European super population. Range: 0 - 1.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"eurAc"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"allele count for the European super population. Integer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"eurAn"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"allele number for the European super population. Non-zero integer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"sasAf"),(0,l.kt)("td",{parentName:"tr",align:"center"},"float"),(0,l.kt)("td",{parentName:"tr",align:"left"},"allele frequency for the South Asian super population. Range: 0 - 1.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"sasAc"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"allele count for the South Asian super population. Integer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"sasAn"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"allele number for the South Asian super population. Non-zero integer.")))))}c.isMDXComponent=!0}}]);