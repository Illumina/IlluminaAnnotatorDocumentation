(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{181:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,d=u["".concat(o,".").concat(s)]||u[s]||m[s]||l;return n?r.a.createElement(d,b(b({ref:t},i),{},{components:n})):r.a.createElement(d,b({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var i=2;i<l;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(181)),o={},b={unversionedId:"data-sources/1000Genomes-sv-json",id:"data-sources/1000Genomes-sv-json",isDocsHomePage:!1,title:"1000Genomes-sv-json",description:"`json",source:"@site/docs/data-sources/1000Genomes-sv-json.md",slug:"/data-sources/1000Genomes-sv-json",permalink:"/NirvanaDocumentation/data-sources/1000Genomes-sv-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/1000Genomes-sv-json.md",version:"current"},c=[],i={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'"oneKg":[\n   {\n      "chromosome":"1",\n      "begin":1595369,\n      "end":1612441,\n      "variantType": "copy_number_variation",\n      "id": "esv3635753;esv3635754;esv3635755;esv3635756;esv3635757",\n      "allAn": 5008,\n      "allAc": 2702,\n      "allAf": 0.539537,\n      "afrAf": 0.6052,\n      "amrAf": 0.3675,\n      "eurAf": 0.5357,\n      "easAf": 0.5368,\n      "sasAf": 0.5797,\n      "reciprocalOverlap": 0.07555\n   }\n],\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"chromosome"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"begin"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"end"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"variantType"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"id"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"allAn"),Object(l.b)("td",{parentName:"tr",align:null},"floating point"),Object(l.b)("td",{parentName:"tr",align:null},"allele number for all populations. Non-zero integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"allAc"),Object(l.b)("td",{parentName:"tr",align:null},"floating point"),Object(l.b)("td",{parentName:"tr",align:null},"allele count for all populations. Integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"allAf"),Object(l.b)("td",{parentName:"tr",align:null},"floating point"),Object(l.b)("td",{parentName:"tr",align:null},"allele frequency for all populations. Range: 0 - 1.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"afrAf"),Object(l.b)("td",{parentName:"tr",align:null},"floating point"),Object(l.b)("td",{parentName:"tr",align:null},"allele frequency for the African super population. Range: 0 - 1.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"amrAf"),Object(l.b)("td",{parentName:"tr",align:null},"floating point"),Object(l.b)("td",{parentName:"tr",align:null},"allele frequency for the Ad Mixed American super population. Range: 0 - 1.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"eurAf"),Object(l.b)("td",{parentName:"tr",align:null},"floating point"),Object(l.b)("td",{parentName:"tr",align:null},"allele frequency for the European super population. Range: 0 - 1.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"easAf"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"allele frequency for the East Asian super population. Range: 0 - 1.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"sasAf"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"allele frequency for the South Asian super population. Range: 0 - 1.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"reciprocalOverlap"),Object(l.b)("td",{parentName:"tr",align:null},"floating point"),Object(l.b)("td",{parentName:"tr",align:null},"range: 0 - 1.")))))}p.isMDXComponent=!0}}]);