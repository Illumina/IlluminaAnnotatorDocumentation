"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[5919],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>f});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=p(a),u=r,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||l;return a?n.createElement(f,i(i({ref:e},m),{},{components:a})):n.createElement(f,i({ref:e},m))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5584:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={},i=void 0,o={unversionedId:"data-sources/mitomap-small-variants-json",id:"version-3.17/data-sources/mitomap-small-variants-json",title:"mitomap-small-variants-json",description:"| Field                    | Type         | Notes                              |",source:"@site/versioned_docs/version-3.17/data-sources/mitomap-small-variants-json.md",sourceDirName:"data-sources",slug:"/data-sources/mitomap-small-variants-json",permalink:"/NirvanaDocumentation/3.17/data-sources/mitomap-small-variants-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.17/data-sources/mitomap-small-variants-json.md",tags:[],version:"3.17",frontMatter:{}},s=[],p={toc:s},m="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"mitomap":[ \n   { \n      "refAllele":"G",\n      "altAllele":"A",\n      "diseases":[ \n         "Bipolar disorder",\n         "Melanoma"\n      ],\n      "hasHomoplasmy":false,\n      "hasHeteroplasmy":true,\n      "status":"Reported",\n      "clinicalSignificance":"confirmed pathogenic",\n      "scorePercentile":83.30,\n      "numGenBankFullLengthSeqs":2,\n      "pubMedIds":["2316527","6299878","6301949"],\n      "isAlleleSpecific":true\n   }\n]\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"refAllele"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"altAllele"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"diseases"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"associated diseases")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hasHomoplasmy"),(0,r.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hasHeteroplasmy"),(0,r.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"record status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"clinicalSignificance"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"predicted pathogenicity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"scorePercentile"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MitoTIP score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"numGenBankFullLengthSeqs"),(0,r.kt)("td",{parentName:"tr",align:"center"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"# of GenBank full-length sequences")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pubMedIds"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"isAlleleSpecific"),(0,r.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true when the current variant alternate allele matches the MITOMAP alternate allele")))))}c.isMDXComponent=!0}}]);