"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[9639,7942],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(v,o(o({ref:t},p),{},{components:n})):a.createElement(v,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20737:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={},l=void 0,c={unversionedId:"data-sources/primate-ai-json",id:"data-sources/primate-ai-json",title:"primate-ai-json",description:"| Field            | Type         | Notes                     |",source:"@site/docs/data-sources/primate-ai-json.md",sourceDirName:"data-sources",slug:"/data-sources/primate-ai-json",permalink:"/NirvanaDocumentation/data-sources/primate-ai-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/primate-ai-json.md",tags:[],version:"current",frontMatter:{}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"primateAI":[\n   {\n      "hgnc":"TP53",\n      "scorePercentile":0.3,\n   }\n]\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"hgnc"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"scorePercentile"),(0,i.kt)("td",{parentName:"tr",align:"center"},"float"),(0,i.kt)("td",{parentName:"tr",align:"left"},"range: 0 - 1.0")))))}d.isMDXComponent=!0},93556:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(20737),s=["components"],l={title:"Primate AI"},c=void 0,p={unversionedId:"data-sources/primate-ai",id:"data-sources/primate-ai",title:"Primate AI",description:"Overview",source:"@site/docs/data-sources/primate-ai.mdx",sourceDirName:"data-sources",slug:"/data-sources/primate-ai",permalink:"/NirvanaDocumentation/data-sources/primate-ai",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/primate-ai.mdx",tags:[],version:"current",frontMatter:{title:"Primate AI"},sidebar:"docs",previous:{title:"PhyloP",permalink:"/NirvanaDocumentation/data-sources/phylop"},next:{title:"REVEL",permalink:"/NirvanaDocumentation/data-sources/revel"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"TSV File",id:"tsv-file",children:[{value:"Example",id:"example",children:[],level:3},{value:"Parsing",id:"parsing",children:[],level:3}],level:2},{value:"Pre-processing",id:"pre-processing",children:[{value:"Converting UCSC IDs",id:"converting-ucsc-ids",children:[],level:3},{value:"Running the Pre-Processor",id:"running-the-pre-processor",children:[],level:3}],level:2},{value:"Known Issues",id:"known-issues",children:[],level:2},{value:"Download URL",id:"download-url",children:[],level:2},{value:"JSON Output",id:"json-output",children:[],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Primate AI is a deep residual neural network for classifying the pathogenicity of missense mutations. The method is described in the publication:"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Sundaram, L., Gao, H., Padigepati, S.R. et al. Predicting the clinical impact of human mutation with deep neural networks. ",(0,i.kt)("em",{parentName:"p"},"Nat Genet")," ",(0,i.kt)("strong",{parentName:"p"},"50"),", 1161\u20131170 (2018). ",(0,i.kt)("a",{parentName:"p",href:"https://doi.org/10.1038/s41588-018-0167-z"},"https://doi.org/10.1038/s41588-018-0167-z")))),(0,i.kt)("h2",{id:"tsv-file"},"TSV File"),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"chr pos ref alt refAA   altAA   strand_1pos_0neg    trinucleotide_context   UCSC_gene   ExAC_coverage   primateDL_score\nchr10   1046704 C   T   R   C   1   CCG uc001ift.3  45.49   0.849114537239\nchr10   1046704 C   G   R   G   1   CCG uc001ift.3  45.49   0.795686006546\n")),(0,i.kt)("h3",{id:"parsing"},"Parsing"),(0,i.kt)("p",null,"From the TSV file, we're mainly interested in the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chr")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pos")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ref")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"alt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"primateDL_score"))),(0,i.kt)("p",null,"We also use ",(0,i.kt)("inlineCode",{parentName:"p"},"UCSC_gene")," to filter out variants that don't have matching gene models in Nirvana."),(0,i.kt)("h2",{id:"pre-processing"},"Pre-processing"),(0,i.kt)("h3",{id:"converting-ucsc-ids"},"Converting UCSC IDs"),(0,i.kt)("p",null,"Primate AI only provides UCSC IDs. As an initial pre-processing step, we'll need to convert these to either Entrez or Ensembl Gene IDs."),(0,i.kt)("p",null,"The following queries are used to download the conversions from UCSC:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'mysql -h genome-mysql.soe.ucsc.edu -u genome -A -P 3306 \\\n      -e "select * FROM knownToLocusLink;" hg19 > ucsc_locuslink.tsv\n\nmysql -h genome-mysql.soe.ucsc.edu -u genome -A -P 3306 \\\n      -e "select knownToEnsembl.name, knownToEnsembl.value, ensGene.name2 FROM knownToEnsembl, ensGene WHERE knownToEnsembl.value = ensGene.name;" \\\n      hg19 > ucsc_ensembl.tsv\n')),(0,i.kt)("h3",{id:"running-the-pre-processor"},"Running the Pre-Processor"),(0,i.kt)("p",null,"The Primate AI pre-processor can be run as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet PrimateAiPreProcessor.dll UGA_develop.tsv PrimateAI_scores_v0.2.tsv.gz \\\n     ucsc_locuslink.tsv ucsc_ensembl.tsv PrimateAI_0.2_GRCh37.tsv.gz\n")),(0,i.kt)("p",null,"During conversion, 0.5% of the UCSC Ids cannot be converted to either Entrez or Ensembl gene IDs. Once the gene IDs have been acquired, we check to see which are available in Nirvana."),(0,i.kt)("p",null,"The following Entrez Gene IDs were not found:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"399753\n401980\n504189\n504191\n100293534\n")),(0,i.kt)("p",null,"Here is the output from the pre-processor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"- loading UCSC to Entrez Gene ID dictionary... 73,432 genes loaded.\n- loading UCSC to Ensembl Gene ID dictionary... 76,178 genes loaded.\n- loading UGA gene ID to gene dictionary... 103,277 genes loaded.\n- parsing Primate AI variants... 70,121,953 variants parsed.\n \n# variants with unknown gene ID: 27,253 / 70,121,953\n# genes with unknown gene ID:    109 / 19,614\n \n# variants not in UGA: 2,036 / 70,121,953\n# genes not in UGA:    6 / 19,614\n")),(0,i.kt)("h2",{id:"known-issues"},"Known Issues"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Known Issues")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The Primate AI data set provides raw scores, but the scores are biased according to gene context. I.e. a 0.4 means something different in ",(0,i.kt)("inlineCode",{parentName:"p"},"TP53")," than it does in ",(0,i.kt)("inlineCode",{parentName:"p"},"KRAS"),"."),(0,i.kt)("p",{parentName:"div"},"As a result, the Primate AI team provided guidance on aggregating these scores and presenting them as percentiles with respect to the associated gene. According to their research, the 25",(0,i.kt)("sup",null,"th")," percentile is a good proxy for benign variants and the 75",(0,i.kt)("sup",null,"th")," percentile is a good proxy for pathogenic variants."))),(0,i.kt)("h2",{id:"download-url"},"Download URL"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://basespace.illumina.com/s/cPgCSmecvhb4"},"https://basespace.illumina.com/s/cPgCSmecvhb4")),(0,i.kt)("h2",{id:"json-output"},"JSON Output"),(0,i.kt)(o.default,{mdxType:"JSON"}))}m.isMDXComponent=!0}}]);