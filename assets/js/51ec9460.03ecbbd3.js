"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[5697,4246],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9819:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s=void 0,c={unversionedId:"data-sources/topmed-json",id:"data-sources/topmed-json",title:"topmed-json",description:"| Field        | Type  | Notes                                         |",source:"@site/docs/data-sources/topmed-json.md",sourceDirName:"data-sources",slug:"/data-sources/topmed-json",permalink:"/NirvanaDocumentation/data-sources/topmed-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/topmed-json.md",tags:[],version:"current",frontMatter:{}},u=[],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"topmed":{ \n   "allAc":20,\n   "allAn":125568,\n   "allAf":0.000159,\n   "allHc":0,\n   "failedFilter":true\n}\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"allAc"),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"TOPMed allele count")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"allAn"),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"TOPMed allele number. Non-zero integer.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"allAf"),(0,o.kt)("td",{parentName:"tr",align:null},"float"),(0,o.kt)("td",{parentName:"tr",align:null},"TOPMed allele frequency (computed by Nirvana)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"allHc"),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"TOPMed homozygous count")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"failedFilter"),(0,o.kt)("td",{parentName:"tr",align:null},"bool"),(0,o.kt)("td",{parentName:"tr",align:null},"True if this variant failed any filters")))))}p.isMDXComponent=!0},6891:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(9819),l=["components"],s={title:"TOPMed"},c=void 0,u={unversionedId:"data-sources/topmed",id:"data-sources/topmed",title:"TOPMed",description:"Overview",source:"@site/docs/data-sources/topmed.mdx",sourceDirName:"data-sources",slug:"/data-sources/topmed",permalink:"/NirvanaDocumentation/data-sources/topmed",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/topmed.mdx",tags:[],version:"current",frontMatter:{title:"TOPMed"},sidebar:"docs",previous:{title:"Splice AI",permalink:"/NirvanaDocumentation/data-sources/splice-ai"},next:{title:"Nirvana JSON File Format",permalink:"/NirvanaDocumentation/file-formats/nirvana-json-file-format"}},d=[{value:"Overview",id:"overview",children:[],level:2},{value:"VCF extraction",id:"vcf-extraction",children:[],level:2},{value:"GRCh37 liftover",id:"grch37-liftover",children:[],level:2},{value:"Download URL",id:"download-url",children:[],level:2},{value:"JSON output",id:"json-output",children:[],level:2}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://www.nhlbi.nih.gov/science/trans-omics-precision-medicine-topmed-program"},"Trans-Omics for Precision Medicine")," (TOPMed) program, sponsored by the National Institutes of Health (NIH) National Heart, Lung and Blood Institute (NHLBI), is part of a broader Precision Medicine Initiative, which aims to provide disease treatments tailored to an individual\u2019s unique genes and environment. TOPMed contributes to this Initiative through the integration of whole-genome sequencing (WGS) and other omics (e.g., metabolic profiles, epigenomics, protein and RNA expression patterns) data with molecular, behavioral, imaging, environmental, and clinical data."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Kowalski, M.H., Qian, H., Hou, Z., Rosen, J.D., Tapia, A.L., Shan, Y., Jain, D., Argos, M., Arnett, D.K., Avery, C. and Barnes, K.C., 2019. Use of> 100,000 NHLBI Trans-Omics for Precision Medicine (TOPMed) Consortium whole genome sequences improves imputation quality and detection of rare variant associations in admixed African and Hispanic/Latino populations. ",(0,o.kt)("em",{parentName:"p"},"PLoS genetics"),", ",(0,o.kt)("strong",{parentName:"p"},"15(12)"),", p.e1008500."))),(0,o.kt)("h2",{id:"vcf-extraction"},"VCF extraction"),(0,o.kt)("p",null,"We currently extract the following fields from TOPMed VCF file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},'##INFO=<ID=AN,Number=1,Type=Integer,Description="Number of Alleles in Samples with Coverage">\n##INFO=<ID=AC,Number=A,Type=Integer,Description="Alternate Allele Counts in Samples with Coverage">\n##INFO=<ID=AF,Number=A,Type=Float,Description="Alternate Allele Frequencies">\n##INFO=<ID=Het,Number=A,Type=Integer,Description="Number of samples with heterozygous genotype calls">\n##INFO=<ID=Hom,Number=A,Type=Integer,Description="Number of samples with homozygous alternate genotype calls">\n')),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    10132   TOPMed_freeze_5?chr1:10,132     T       C       255     SVM     VRT=1;NS=62784;AN=125568;AC=32;AF=0.000254842;Het=32;Hom=0      NA:FRQ  125568:0.000254842\n")),(0,o.kt)("h2",{id:"grch37-liftover"},"GRCh37 liftover"),(0,o.kt)("p",null,"The data is not available for GRCh37 on TOPMed website. We performed a liftover from GRCh38 to GRCh37 using dbSNP ids."),(0,o.kt)("h2",{id:"download-url"},"Download URL"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://bravo.sph.umich.edu/freeze5/hg38/download"},"https://bravo.sph.umich.edu/freeze5/hg38/download")),(0,o.kt)("h2",{id:"json-output"},"JSON output"),(0,o.kt)(i.default,{mdxType:"JSON"}))}m.isMDXComponent=!0}}]);