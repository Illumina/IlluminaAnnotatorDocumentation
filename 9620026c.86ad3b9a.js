(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{181:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),i=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=i(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),m=i(n),f=r,s=m["".concat(o,".").concat(f)]||m[f]||u[f]||l;return n?a.a.createElement(s,c(c({ref:t},p),{},{components:n})):a.a.createElement(s,c({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=f;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<l;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return i}));var r=n(3),a=n(7),l=(n(0),n(181)),o={},c={unversionedId:"data-sources/1000Genomes-snv-json",id:"data-sources/1000Genomes-snv-json",isDocsHomePage:!1,title:"1000Genomes-snv-json",description:"`json",source:"@site/docs/data-sources/1000Genomes-snv-json.md",slug:"/data-sources/1000Genomes-snv-json",permalink:"/NirvanaDocumentation/data-sources/1000Genomes-snv-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/1000Genomes-snv-json.md",version:"current"},b=[],p={toc:b};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'"oneKg":{\n   "allAf":0.200879,\n   "afrAf":0.210287,\n   "amrAf":0.139769,\n   "easAf":0.275794,\n   "eurAf":0.181909,\n   "sasAf":0.173824,\n   "allAn":5008,\n   "afrAn":1322,\n   "amrAn":694,\n   "easAn":1008,\n   "eurAn":1006,\n   "sasAn":978,\n   "allAc":1006,\n   "afrAc":278,\n   "amrAc":97,\n   "easAc":278,\n   "eurAc":183,\n   "sasAc":170\n}\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Field"),Object(l.b)("th",{parentName:"tr",align:"center"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"allAf"),Object(l.b)("td",{parentName:"tr",align:"center"},"float"),Object(l.b)("td",{parentName:"tr",align:"left"},"allele frequency for all populations. Range: 0 - 1.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"allAc"),Object(l.b)("td",{parentName:"tr",align:"center"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"allele count for all populations. Integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"allAn"),Object(l.b)("td",{parentName:"tr",align:"center"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"allele number for all populations. Non-zero integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"afrAf"),Object(l.b)("td",{parentName:"tr",align:"center"},"float"),Object(l.b)("td",{parentName:"tr",align:"left"},"allele frequency for the African super population. Range: 0 - 1.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"afrAc"),Object(l.b)("td",{parentName:"tr",align:"center"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"allele count for the African super population. Integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"afrAn"),Object(l.b)("td",{parentName:"tr",align:"center"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"allele number for the African super population. Non-zero integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"amrAf"),Object(l.b)("td",{parentName:"tr",align:"center"},"float"),Object(l.b)("td",{parentName:"tr",align:"left"},"allele frequency for the Ad Mixed American super population. Range: 0 - 1.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"amrAc"),Object(l.b)("td",{parentName:"tr",align:"center"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"allele count for the Ad Mixed American super population. Integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"amrAn"),Object(l.b)("td",{parentName:"tr",align:"center"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"allele number for the Ad Mixed American super population. Non-zero integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"easAf"),Object(l.b)("td",{parentName:"tr",align:"center"},"float"),Object(l.b)("td",{parentName:"tr",align:"left"},"allele frequency for the East Asian super population. Range: 0 - 1.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"easAc"),Object(l.b)("td",{parentName:"tr",align:"center"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"allele count for the East Asian super population. Integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"easAn"),Object(l.b)("td",{parentName:"tr",align:"center"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"allele number for the East Asian super population. Non-zero integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"eurAf"),Object(l.b)("td",{parentName:"tr",align:"center"},"float"),Object(l.b)("td",{parentName:"tr",align:"left"},"allele frequency for the European super population. Range: 0 - 1.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"eurAc"),Object(l.b)("td",{parentName:"tr",align:"center"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"allele count for the European super population. Integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"eurAn"),Object(l.b)("td",{parentName:"tr",align:"center"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"allele number for the European super population. Non-zero integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"sasAf"),Object(l.b)("td",{parentName:"tr",align:"center"},"float"),Object(l.b)("td",{parentName:"tr",align:"left"},"allele frequency for the South Asian super population. Range: 0 - 1.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"sasAc"),Object(l.b)("td",{parentName:"tr",align:"center"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"allele count for the South Asian super population. Integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"sasAn"),Object(l.b)("td",{parentName:"tr",align:"center"},"int"),Object(l.b)("td",{parentName:"tr",align:"left"},"allele number for the South Asian super population. Non-zero integer.")))))}i.isMDXComponent=!0}}]);