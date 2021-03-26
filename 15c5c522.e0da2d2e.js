(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{181:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,u=s["".concat(c,".").concat(d)]||s[d]||m[d]||l;return n?r.a.createElement(u,i(i({ref:t},b),{},{components:n})):r.a.createElement(u,i({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var b=2;b<l;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(181)),c={},i={unversionedId:"data-sources/mitomap-small-variants-json",id:"version-3.14/data-sources/mitomap-small-variants-json",isDocsHomePage:!1,title:"mitomap-small-variants-json",description:"`json",source:"@site/versioned_docs/version-3.14/data-sources/mitomap-small-variants-json.md",slug:"/data-sources/mitomap-small-variants-json",permalink:"/NirvanaDocumentation/3.14/data-sources/mitomap-small-variants-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.14/data-sources/mitomap-small-variants-json.md",version:"3.14"},o=[],b={toc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'"mitomap":[ \n   { \n      "refAllele":"G",\n      "altAllele":"A",\n      "diseases":[ \n         "Bipolar disorder",\n         "Melanoma"\n      ],\n      "hasHomoplasmy":false,\n      "hasHeteroplasmy":true,\n      "status":"Reported",\n      "clinicalSignificance":"confirmed pathogenic",\n      "scorePercentile":83.30,\n      "numGenBankFullLengthSeqs":2,\n      "pubMedIds":["2316527","6299878","6301949"],\n      "isAlleleSpecific":true\n   }\n]\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Field"),Object(l.b)("th",{parentName:"tr",align:"center"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"refAllele"),Object(l.b)("td",{parentName:"tr",align:"center"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"altAllele"),Object(l.b)("td",{parentName:"tr",align:"center"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"diseases"),Object(l.b)("td",{parentName:"tr",align:"center"},"string array"),Object(l.b)("td",{parentName:"tr",align:"left"},"associated diseases")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"hasHomoplasmy"),Object(l.b)("td",{parentName:"tr",align:"center"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"hasHeteroplasmy"),Object(l.b)("td",{parentName:"tr",align:"center"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"status"),Object(l.b)("td",{parentName:"tr",align:"center"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"},"record status")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"clinicalSignificance"),Object(l.b)("td",{parentName:"tr",align:"center"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"},"predicted pathogenicity")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"scorePercentile"),Object(l.b)("td",{parentName:"tr",align:"center"},"float"),Object(l.b)("td",{parentName:"tr",align:"left"},"MitoTIP score")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"numGenBankFullLengthSeqs"),Object(l.b)("td",{parentName:"tr",align:"center"},"integer"),Object(l.b)("td",{parentName:"tr",align:"left"},"# of GenBank full-length sequences")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"pubMedIds"),Object(l.b)("td",{parentName:"tr",align:"center"},"string array"),Object(l.b)("td",{parentName:"tr",align:"left"})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"isAlleleSpecific"),Object(l.b)("td",{parentName:"tr",align:"center"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"true when the current variant alternate allele matches the MITOMAP alternate allele")))))}p.isMDXComponent=!0}}]);