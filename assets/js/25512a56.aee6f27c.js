"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[8808],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(g,i(i({ref:e},c),{},{components:n})):r.createElement(g,i({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86806:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={},p=void 0,u={unversionedId:"data-sources/clingen-json",id:"version-3.16/data-sources/clingen-json",title:"clingen-json",description:"| Field                  | Type           | Notes                                                                                                                            |",source:"@site/versioned_docs/version-3.16/data-sources/clingen-json.md",sourceDirName:"data-sources",slug:"/data-sources/clingen-json",permalink:"/NirvanaDocumentation/3.16/data-sources/clingen-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.16/data-sources/clingen-json.md",tags:[],version:"3.16",frontMatter:{}},c=[],s={toc:c};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"clingen":[\n   {\n      "chromosome":"17",\n      "begin":525,\n      "end":14667519,\n      "variantType":"copy_number_gain",\n      "id":"nsv996083",\n      "clinicalInterpretation":"pathogenic",\n      "observedGains":1,\n      "validated":true,\n      "phenotypes":[\n         "Intrauterine growth retardation"\n      ],\n      "phenotypeIds":[\n         "HP:0001511",\n         "MedGen:C1853481"\n      ],\n      "reciprocalOverlap":0.00131\n   },\n   {\n      "chromosome":"17",\n      "begin":45835,\n      "end":7600330,\n      "variantType":"copy_number_loss",\n      "id":"nsv869419",\n      "clinicalInterpretation":"pathogenic",\n      "observedLosses":1,\n      "validated":true,\n      "phenotypes":[\n         "Developmental delay AND/OR other significant developmental or morphological phenotypes"\n      ],\n      "reciprocalOverlap":0.00254\n   }\n]\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clingen"),(0,l.kt)("td",{parentName:"tr",align:null},"object array"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chromosome"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Ensembl-style chromosome names")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"begin"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"1-based position")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"end"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"1-based position")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"variantType"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Any of the\xa0sequence alterations defined here.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Identifier from the data source. Alternatively a VID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clinicalInterpretation"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"see possible values below")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"observedGains"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Range: 0 - (2",(0,l.kt)("sup",null,"31"),"\xa0- 1). Only used if copy_number_variation, copy_number_loss, or copy_number_gain.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"observedLosses"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Range: 0 - (2",(0,l.kt)("sup",null,"31"),"\xa0- 1). Only used if copy_number_variation, copy_number_loss, or copy_number_gain.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"validated"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"phenotypes"),(0,l.kt)("td",{parentName:"tr",align:null},"string array"),(0,l.kt)("td",{parentName:"tr",align:null},"Description of the phenotype.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"phenotypeIds"),(0,l.kt)("td",{parentName:"tr",align:null},"string array"),(0,l.kt)("td",{parentName:"tr",align:null},"Description of the phenotype IDs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reciprocalOverlap"),(0,l.kt)("td",{parentName:"tr",align:null},"floating point"),(0,l.kt)("td",{parentName:"tr",align:null},"Range: 0 - 1. E.g. 0.57 would indicate a 57% reciprocal overlap. Specified up to 5 decimal places (Not reported for Insertions).")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"clinicalInterpretation")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"benign"),(0,l.kt)("li",{parentName:"ul"},"curated benign"),(0,l.kt)("li",{parentName:"ul"},"curated pathogenic"),(0,l.kt)("li",{parentName:"ul"},"likely benign"),(0,l.kt)("li",{parentName:"ul"},"likely pathogenic"),(0,l.kt)("li",{parentName:"ul"},"path gain"),(0,l.kt)("li",{parentName:"ul"},"path loss"),(0,l.kt)("li",{parentName:"ul"},"pathogenic"),(0,l.kt)("li",{parentName:"ul"},"uncertain")))}d.isMDXComponent=!0}}]);