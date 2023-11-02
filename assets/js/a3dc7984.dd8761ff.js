"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[8836,6819],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,v=p["".concat(s,".").concat(u)]||p[u]||m[u]||i;return n?a.createElement(v,o(o({ref:t},c),{},{components:n})):a.createElement(v,o({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27061:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={},o=void 0,l={unversionedId:"data-sources/revel-json",id:"version-3.21/data-sources/revel-json",title:"revel-json",description:"| Field | Type         | Notes                     |",source:"@site/versioned_docs/version-3.21/data-sources/revel-json.md",sourceDirName:"data-sources",slug:"/data-sources/revel-json",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.21/data-sources/revel-json",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/versioned_docs/version-3.21/data-sources/revel-json.md",tags:[],version:"3.21",frontMatter:{}},s=[],d={toc:s},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"revel":{ \n   "score":0.027\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"score"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Range: 0 - 1.0")))))}p.isMDXComponent=!0},80183:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),i=n(27061);const o={title:"REVEL"},l=void 0,s={unversionedId:"data-sources/revel",id:"version-3.21/data-sources/revel",title:"REVEL",description:"Overview",source:"@site/versioned_docs/version-3.21/data-sources/revel.mdx",sourceDirName:"data-sources",slug:"/data-sources/revel",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.21/data-sources/revel",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/versioned_docs/version-3.21/data-sources/revel.mdx",tags:[],version:"3.21",frontMatter:{title:"REVEL"},sidebar:"docs",previous:{title:"Primate AI",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.21/data-sources/primate-ai"},next:{title:"Splice AI",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.21/data-sources/splice-ai"}},d=[{value:"Overview",id:"overview",children:[],level:2},{value:"CSV File",id:"csv-file",children:[{value:"Example",id:"example",children:[],level:3},{value:"Parsing",id:"parsing",children:[],level:3}],level:2},{value:"Known Issues",id:"known-issues",children:[],level:2},{value:"Download URL",id:"download-url",children:[],level:2},{value:"JSON Output",id:"json-output",children:[],level:2}],c={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"REVEL is an ensemble method for predicting the pathogenicity of missense variants based on a combination of scores from 13 individual tools: MutPred, FATHMM v2.3, VEST 3.0, PolyPhen-2, SIFT, PROVEAN, MutationAssessor, MutationTaster, LRT, GERP++, SiPhy, phyloP, and phastCons."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Ioannidis, N. M. et al. REVEL: An Ensemble Method for Predicting the Pathogenicity of Rare Missense Variants. ",(0,r.kt)("em",{parentName:"p"},"The American Journal of Human Genetics")," ",(0,r.kt)("strong",{parentName:"p"},"99"),", 877-885 (2016). ",(0,r.kt)("a",{parentName:"p",href:"https://doi.org/10.1016/j.ajhg.2016.08.016"},"https://doi.org/10.1016/j.ajhg.2016.08.016")))),(0,r.kt)("h2",{id:"csv-file"},"CSV File"),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"chr,hg19_pos,grch38_pos,ref,alt,aaref,aaalt,REVEL\n1,35142,35142,G,A,T,M,0.027\n1,35142,35142,G,C,T,R,0.035\n1,35142,35142,G,T,T,K,0.043\n1,35143,35143,T,A,T,S,0.018\n1,35143,35143,T,C,T,A,0.034\n")),(0,r.kt)("h3",{id:"parsing"},"Parsing"),(0,r.kt)("p",null,"From the CSV file, we're mainly interested in the following columns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chr")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hg19_pos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"grch38_pos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ref")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"alt")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"REVEL"))),(0,r.kt)("h2",{id:"known-issues"},"Known Issues"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Sorting")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Since the input file contains positions for both GRCh37 and GRCh38, we split it into two ",(0,r.kt)("strong",{parentName:"p"},"TSV")," files (for the sake of better readability) with identical format. The positions for GRCh37 were sorted but not for GRCh38. So we re-sort the variants by position in the GRCh38 file."))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Conflicting Scores")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When there are multiple scores available for the same variant (i.e. the same position with the same alternative allele), we pick the highest score."))),(0,r.kt)("h2",{id:"download-url"},"Download URL"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://sites.google.com/site/revelgenomics/downloads"},"https://sites.google.com/site/revelgenomics/downloads")),(0,r.kt)("h2",{id:"json-output"},"JSON Output"),(0,r.kt)(i.default,{mdxType:"JSON"}))}m.isMDXComponent=!0}}]);