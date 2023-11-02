"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[784,8001],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7398:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"data-sources/gme-json",id:"version-3.18/data-sources/gme-json",title:"gme-json",description:"| Field        | Type  | Notes                                   |",source:"@site/versioned_docs/version-3.18/data-sources/gme-json.md",sourceDirName:"data-sources",slug:"/data-sources/gme-json",permalink:"/NirvanaDocumentation/3.18/data-sources/gme-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.18/data-sources/gme-json.md",tags:[],version:"3.18",frontMatter:{}},s=[],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"gmeVariome":{\n   "allAc":10,\n   "allAn":202,\n   "allAf":0.049504,\n   "failedFilter":true\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"allAc"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"GME allele count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"allAn"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"GME allele number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"allAf"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"GME allele frequency")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"failedFilter"),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"True if this variant failed any filters")))))}u.isMDXComponent=!0},6027:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),o=n(7398);const i={title:"GME Variome"},l=void 0,s={unversionedId:"data-sources/gme",id:"version-3.18/data-sources/gme",title:"GME Variome",description:"Overview",source:"@site/versioned_docs/version-3.18/data-sources/gme.mdx",sourceDirName:"data-sources",slug:"/data-sources/gme",permalink:"/NirvanaDocumentation/3.18/data-sources/gme",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.18/data-sources/gme.mdx",tags:[],version:"3.18",frontMatter:{title:"GME Variome"},sidebar:"docs",previous:{title:"GERP",permalink:"/NirvanaDocumentation/3.18/data-sources/gerp"},next:{title:"gnomAD",permalink:"/NirvanaDocumentation/3.18/data-sources/gnomad"}},c=[{value:"Overview",id:"overview",children:[{value:"TSV Extraction",id:"tsv-extraction",children:[{value:"Parsing",id:"parsing",children:[],level:4}],level:3}],level:2},{value:"GRCh37 liftover",id:"grch37-liftover",children:[],level:2},{value:"Download URL",id:"download-url",children:[],level:2},{value:"JSON output",id:"json-output",children:[],level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"http://igm.ucsd.edu/gme/index.php"},"Greater Middle East (GME) Variome")," Project is aimed at generating a coding base reference for the countries found in the Greater Middle East. Nirvana presents variant frequencies for the Greater Middle Eastern population."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Scott, E. M., Halees, A., Itan, Y., Spencer, E. G., He, Y., Azab, M. A., Gabriel, S. B., Belkadi, A., Boisson, B., Abel, L., Clark, A. G., Greater Middle East Variome Consortium, Alkuraya, F. S., Casanova, J. L., & Gleeson, J. G. (2016). Characterization of Greater Middle Eastern genetic variation for enhanced disease gene discovery. ",(0,a.kt)("em",{parentName:"p"},"Nature genetics"),", 48(9), 1071\u20131076. ",(0,a.kt)("a",{parentName:"p",href:"https://doi.org/10.1038/ng.3592"},"https://doi.org/10.1038/ng.3592")))),(0,a.kt)("h3",{id:"tsv-extraction"},"TSV Extraction"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"chrom   pos     ref     alt     AA      filter  FunctionGVS     geneFunction    Gene    GeneID  SIFT_pred       GERP++  AF      GME_GC  GME_AC  GME_AF  NWA     NEA     AP      Israel  SD      TP      CA      FunctionGVS_new Priority        Polyphen2_HVAR_pred     LRT_pred        MutationTaster_pred     rsid    OMIM_MIM        OMIM_Disease    AA_AC   EA_AC   rsid_link       position_link\n1       69134   A       G       A       VQSRTrancheSNP99.90to100.00     nonsynonymous_SNV       exonic  OR4F5   79501   T       2.31            96:0:5  10,192  0.04950495049504951     4:0:0   59:0:2  12:0:0  0:0:0   6:0:0   9:0:2   13:0:2  nonsynonymous_SNV       MODERATE        B       N       N       none    -       -       none    none    -       http://genome.ucsc.edu/cgi-bin/hgTracks?db=hg19&org=human&position=chr1%3A69134-69133\n1       69270   A       G       A       PASS    synonymous_SNV  exonic  OR4F5   79501   .       .               93:38:240       518,224 0.6981132075471698      5:5:11  63:30:86        12:5:28 1:0:2   2:2:18  7:3:46  7:2:52  synonymous_SNV  LOW     .       .       .       rs201219564     -       -       none    none    http://www.ncbi.nlm.nih.gov/projects/SNP/snp_ref.cgi?searchType=adhoc_search&type=rs&rs=rs201219564     http://genome.ucsc.edu/cgi-bin/hgTracks?db=hg19&org=human&position=chr1%3A69270-69269\n1       69428   T       G       T       PASS    nonsynonymous_SNV       exonic  OR4F5   79501   D       0.891           676:44:15       74,1396 0.050340136054421766    43:0:2  313:16:10       88:7:3  6:0:0   44:8:0  102:9:0 102:4:2 nonsynonymous_SNV       MODERATE        D       N       N       rs140739101     -       -       14,3808 313,6535        http://www.ncbi.nlm.nih.gov/projects/SNP/snp_ref.cgi?searchType=adhoc_search&type=rs&rs=rs140739101     http://genome.ucsc.edu/cgi-bin/hgTracks?db=hg19&org=human&position=chr1%3A69428-69427\n")),(0,a.kt)("h4",{id:"parsing"},"Parsing"),(0,a.kt)("p",null,"We parse the GME tsv file and extract the following columns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"chrom"),(0,a.kt)("li",{parentName:"ul"},"pos"),(0,a.kt)("li",{parentName:"ul"},"ref"),(0,a.kt)("li",{parentName:"ul"},"alt"),(0,a.kt)("li",{parentName:"ul"},"filter"),(0,a.kt)("li",{parentName:"ul"},"GME_AC"),(0,a.kt)("li",{parentName:"ul"},"GME_AF")),(0,a.kt)("h2",{id:"grch37-liftover"},"GRCh37 liftover"),(0,a.kt)("p",null,"The data is not available for GRCh38 on GME website. We performed a liftover from GRCh37 to GRCh38 using CrossMap."),(0,a.kt)("h2",{id:"download-url"},"Download URL"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://igm.ucsd.edu/gme/download.shtml"},"http://igm.ucsd.edu/gme/download.shtml")),(0,a.kt)("h2",{id:"json-output"},"JSON output"),(0,a.kt)(o.default,{mdxType:"JSON"}))}p.isMDXComponent=!0}}]);