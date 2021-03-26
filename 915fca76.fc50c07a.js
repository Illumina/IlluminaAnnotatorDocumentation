(window.webpackJsonp=window.webpackJsonp||[]).push([[60,16],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(181)),o=n(67),c={title:"Primate AI"},s={unversionedId:"data-sources/primate-ai",id:"data-sources/primate-ai",isDocsHomePage:!1,title:"Primate AI",description:"Overview",source:"@site/docs/data-sources/primate-ai.mdx",slug:"/data-sources/primate-ai",permalink:"/NirvanaDocumentation/data-sources/primate-ai",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/primate-ai.mdx",version:"current",sidebar:"docs",previous:{title:"PhyloP",permalink:"/NirvanaDocumentation/data-sources/phylop"},next:{title:"REVEL",permalink:"/NirvanaDocumentation/data-sources/revel"}},l=[{value:"Overview",id:"overview",children:[]},{value:"TSV File",id:"tsv-file",children:[{value:"Example",id:"example",children:[]},{value:"Parsing",id:"parsing",children:[]}]},{value:"Pre-processing",id:"pre-processing",children:[{value:"Converting UCSC IDs",id:"converting-ucsc-ids",children:[]},{value:"Running the Pre-Processor",id:"running-the-pre-processor",children:[]}]},{value:"Known Issues",id:"known-issues",children:[]},{value:"Download URL",id:"download-url",children:[]},{value:"JSON Output",id:"json-output",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"Primate AI is a deep residual neural network for classifying the pathogenicity of missense mutations. The method is described in the publication:"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Sundaram, L., Gao, H., Padigepati, S.R. et al. Predicting the clinical impact of human mutation with deep neural networks. ",Object(i.b)("em",{parentName:"p"},"Nat Genet")," ",Object(i.b)("strong",{parentName:"p"},"50"),", 1161\u20131170 (2018). ",Object(i.b)("a",{parentName:"p",href:"https://doi.org/10.1038/s41588-018-0167-z"},"https://doi.org/10.1038/s41588-018-0167-z")))),Object(i.b)("h2",{id:"tsv-file"},"TSV File"),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-scss"},"chr pos ref alt refAA   altAA   strand_1pos_0neg    trinucleotide_context   UCSC_gene   ExAC_coverage   primateDL_score\nchr10   1046704 C   T   R   C   1   CCG uc001ift.3  45.49   0.849114537239\nchr10   1046704 C   G   R   G   1   CCG uc001ift.3  45.49   0.795686006546\n")),Object(i.b)("h3",{id:"parsing"},"Parsing"),Object(i.b)("p",null,"From the TSV file, we're mainly interested in the following columns:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"chr")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pos")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ref")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"alt")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"primateDL_score"))),Object(i.b)("p",null,"We also use ",Object(i.b)("inlineCode",{parentName:"p"},"UCSC_gene")," to filter out variants that don't have matching gene models in Nirvana."),Object(i.b)("h2",{id:"pre-processing"},"Pre-processing"),Object(i.b)("h3",{id:"converting-ucsc-ids"},"Converting UCSC IDs"),Object(i.b)("p",null,"Primate AI only provides UCSC IDs. As an initial pre-processing step, we'll need to convert these to either Entrez or Ensembl Gene IDs."),Object(i.b)("p",null,"The following queries are used to download the conversions from UCSC:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'mysql -h genome-mysql.soe.ucsc.edu -u genome -A -P 3306 \\\n      -e "select * FROM knownToLocusLink;" hg19 > ucsc_locuslink.tsv\n\nmysql -h genome-mysql.soe.ucsc.edu -u genome -A -P 3306 \\\n      -e "select knownToEnsembl.name, knownToEnsembl.value, ensGene.name2 FROM knownToEnsembl, ensGene WHERE knownToEnsembl.value = ensGene.name;" \\\n      hg19 > ucsc_ensembl.tsv\n')),Object(i.b)("h3",{id:"running-the-pre-processor"},"Running the Pre-Processor"),Object(i.b)("p",null,"The Primate AI pre-processor can be run as follows:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"dotnet PrimateAiPreProcessor.dll UGA_develop.tsv PrimateAI_scores_v0.2.tsv.gz \\\n     ucsc_locuslink.tsv ucsc_ensembl.tsv PrimateAI_0.2_GRCh37.tsv.gz\n")),Object(i.b)("p",null,"During conversion, 0.5% of the UCSC Ids cannot be converted to either Entrez or Ensembl gene IDs. Once the gene IDs have been acquired, we check to see which are available in Nirvana."),Object(i.b)("p",null,"The following Entrez Gene IDs were not found:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-scss"},"399753\n401980\n504189\n504191\n100293534\n")),Object(i.b)("p",null,"Here is the output from the pre-processor:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-scss"},"- loading UCSC to Entrez Gene ID dictionary... 73,432 genes loaded.\n- loading UCSC to Ensembl Gene ID dictionary... 76,178 genes loaded.\n- loading UGA gene ID to gene dictionary... 103,277 genes loaded.\n- parsing Primate AI variants... 70,121,953 variants parsed.\n \n# variants with unknown gene ID: 27,253 / 70,121,953\n# genes with unknown gene ID:    109 / 19,614\n \n# variants not in UGA: 2,036 / 70,121,953\n# genes not in UGA:    6 / 19,614\n")),Object(i.b)("h2",{id:"known-issues"},"Known Issues"),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Known Issues")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The Primate AI data set provides raw scores, but the scores are biased according to gene context. I.e. a 0.4 means something different in ",Object(i.b)("inlineCode",{parentName:"p"},"TP53")," than it does in ",Object(i.b)("inlineCode",{parentName:"p"},"KRAS"),"."),Object(i.b)("p",{parentName:"div"},"As a result, the Primate AI team provided guidance on aggregating these scores and presenting them as percentiles with respect to the associated gene. According to their research, the 25",Object(i.b)("sup",null,"th")," percentile is a good proxy for benign variants and the 75",Object(i.b)("sup",null,"th")," percentile is a good proxy for pathogenic variants."))),Object(i.b)("h2",{id:"download-url"},"Download URL"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://basespace.illumina.com/s/cPgCSmecvhb4"},"https://basespace.illumina.com/s/cPgCSmecvhb4")),Object(i.b)("h2",{id:"json-output"},"JSON Output"),Object(i.b)(o.default,{mdxType:"JSON"}))}b.isMDXComponent=!0},181:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(181)),o={},c={unversionedId:"data-sources/primate-ai-json",id:"data-sources/primate-ai-json",isDocsHomePage:!1,title:"primate-ai-json",description:"`json",source:"@site/docs/data-sources/primate-ai-json.md",slug:"/data-sources/primate-ai-json",permalink:"/NirvanaDocumentation/data-sources/primate-ai-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/primate-ai-json.md",version:"current"},s=[],l={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'"primateAI":[\n   {\n      "hgnc":"TP53",\n      "scorePercentile":0.3,\n   }\n]\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Field"),Object(i.b)("th",{parentName:"tr",align:"center"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Notes"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"hgnc"),Object(i.b)("td",{parentName:"tr",align:"center"},"string"),Object(i.b)("td",{parentName:"tr",align:"left"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"scorePercentile"),Object(i.b)("td",{parentName:"tr",align:"center"},"float"),Object(i.b)("td",{parentName:"tr",align:"left"},"range: 0 - 1.0")))))}p.isMDXComponent=!0}}]);