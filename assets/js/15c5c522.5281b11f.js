"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[692],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=s(n),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||l;return n?r.createElement(f,i(i({ref:e},c),{},{components:n})):r.createElement(f,i({ref:e},c))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4663:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},p=void 0,s={unversionedId:"data-sources/mitomap-small-variants-json",id:"version-3.14/data-sources/mitomap-small-variants-json",title:"mitomap-small-variants-json",description:"| Field                    | Type         | Notes                              |",source:"@site/versioned_docs/version-3.14/data-sources/mitomap-small-variants-json.md",sourceDirName:"data-sources",slug:"/data-sources/mitomap-small-variants-json",permalink:"/NirvanaDocumentation/3.14/data-sources/mitomap-small-variants-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.14/data-sources/mitomap-small-variants-json.md",tags:[],version:"3.14",frontMatter:{}},c=[],m={toc:c};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"mitomap":[ \n   { \n      "refAllele":"G",\n      "altAllele":"A",\n      "diseases":[ \n         "Bipolar disorder",\n         "Melanoma"\n      ],\n      "hasHomoplasmy":false,\n      "hasHeteroplasmy":true,\n      "status":"Reported",\n      "clinicalSignificance":"confirmed pathogenic",\n      "scorePercentile":83.30,\n      "numGenBankFullLengthSeqs":2,\n      "pubMedIds":["2316527","6299878","6301949"],\n      "isAlleleSpecific":true\n   }\n]\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"refAllele"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"altAllele"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"diseases"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"associated diseases")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"hasHomoplasmy"),(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"hasHeteroplasmy"),(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"status"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"record status")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"clinicalSignificance"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"predicted pathogenicity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"scorePercentile"),(0,l.kt)("td",{parentName:"tr",align:"center"},"float"),(0,l.kt)("td",{parentName:"tr",align:"left"},"MitoTIP score")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"numGenBankFullLengthSeqs"),(0,l.kt)("td",{parentName:"tr",align:"center"},"integer"),(0,l.kt)("td",{parentName:"tr",align:"left"},"# of GenBank full-length sequences")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pubMedIds"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"isAlleleSpecific"),(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true when the current variant alternate allele matches the MITOMAP alternate allele")))))}d.isMDXComponent=!0}}]);