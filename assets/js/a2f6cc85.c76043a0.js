"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[3111,217],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(n),u=i,h=p["".concat(s,".").concat(u)]||p[u]||d[u]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1034:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return c},default:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={},s=void 0,m={unversionedId:"data-sources/cosmic-json",id:"version-3.17/data-sources/cosmic-json",title:"cosmic-json",description:"| Field       | Type         | Notes                     |",source:"@site/versioned_docs/version-3.17/data-sources/cosmic-json.md",sourceDirName:"data-sources",slug:"/data-sources/cosmic-json",permalink:"/NirvanaDocumentation/3.17/data-sources/cosmic-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.17/data-sources/cosmic-json.md",tags:[],version:"3.17",frontMatter:{}},c=[],d={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'   "cosmicGeneFusions":[\n      {\n         "id":"COSF881",\n         "numSamples":6,\n         "geneSymbols":[\n            "MYB",\n            "NFIB"\n         ],\n         "hgvsr":"ENST00000341911.5(MYB):r.1_2368::ENST00000397581.2(NFIB):r.2592_3318",\n         "histologies":[\n            {\n               "name":"adenoid cystic carcinoma",\n               "numSamples":6\n            }\n         ],\n         "sites":[\n            {\n               "name":"salivary gland (submandibular)",\n               "numSamples":1\n            },\n            {\n               "name":"salivary gland (parotid)",\n               "numSamples":1\n            },\n            {\n               "name":"salivary gland (nasal cavity)",\n               "numSamples":1\n            },\n            {\n               "name":"breast",\n               "numSamples":3\n            }\n         ],\n         "pubMedIds":[\n            19841262\n         ]\n      }\n   ]\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"COSMIC fusion ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"numSamples"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"geneSymbols"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5' gene & 3' gene")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hgvsr"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HGVS RNA translocation fusion notation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"histologies"),(0,r.kt)("td",{parentName:"tr",align:"center"},"count array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"phenotypic descriptions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sites"),(0,r.kt)("td",{parentName:"tr",align:"center"},"count array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"tissue types")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pubMedIds"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"PubMed IDs")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Count")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"numSamples"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"})))))}p.isMDXComponent=!0},4512:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=n(1034),l=["components"],s={title:"COSMIC"},m=void 0,c={unversionedId:"data-sources/cosmic",id:"version-3.17/data-sources/cosmic",title:"COSMIC",description:"Overview",source:"@site/versioned_docs/version-3.17/data-sources/cosmic.mdx",sourceDirName:"data-sources",slug:"/data-sources/cosmic",permalink:"/NirvanaDocumentation/3.17/data-sources/cosmic",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.17/data-sources/cosmic.mdx",tags:[],version:"3.17",frontMatter:{title:"COSMIC"},sidebar:"version-3.17/docs",previous:{title:"ClinVar",permalink:"/NirvanaDocumentation/3.17/data-sources/clinvar"},next:{title:"dbSNP",permalink:"/NirvanaDocumentation/3.17/data-sources/dbsnp"}},d=[{value:"Overview",id:"overview",children:[],level:2},{value:"Gene Fusions",id:"gene-fusions",children:[{value:"TSV File",id:"tsv-file",children:[{value:"Example",id:"example",children:[],level:4},{value:"Parsing",id:"parsing",children:[],level:4},{value:"Aggregation",id:"aggregation",children:[],level:4},{value:"Fixing the HGVS RNA Notation",id:"fixing-the-hgvs-rna-notation",children:[],level:4},{value:"Aggregating Histologies",id:"aggregating-histologies",children:[],level:4},{value:"Aggregating Sites",id:"aggregating-sites",children:[],level:4}],level:3},{value:"Known Issues",id:"known-issues",children:[],level:3},{value:"Download URL",id:"download-url",children:[],level:3},{value:"JSON Output",id:"json-output",children:[],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"COSMIC, the Catalogue of Somatic Mutations in Cancer, is the world's largest source of expert manually curated somatic mutation information relating to human cancers."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"John G Tate, Sally Bamford, Harry C Jubb, Zbyslaw Sondka, David M Beare, Nidhi Bindal, Harry Boutselakis, Charlotte G Cole, Celestino Creatore, Elisabeth Dawson, Peter Fish, Bhavana Harsha, Charlie Hathaway, Steve C Jupe, Chai Yin Kok, Kate Noble, Laura Ponting, Christopher C Ramshaw, Claire E Rye, Helen E Speedy, Ray Stefancsik, Sam L Thompson, Shicai Wang, Sari Ward, Peter J Campbell, Simon A Forbes. (2019) ",(0,r.kt)("a",{parentName:"p",href:"https://academic.oup.com/nar/article/47/D1/D941/5146192"},"COSMIC: the Catalogue Of Somatic Mutations In Cancer"),", ",(0,r.kt)("em",{parentName:"p"},"Nucleic Acids Research"),", Volume 47, Issue D1"))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Licensed Content")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Commercial companies are required to ",(0,r.kt)("a",{parentName:"p",href:"https://cancer.sanger.ac.uk/cosmic/license"},"acquire a license from COSMIC"),". At the moment, this means that our COSMIC content is only available in Illumina's products and services, not in the open source distribution."),(0,r.kt)("p",{parentName:"div"},"Since many of you are academic users, we will enable a COSMIC login in our downloader later this year that will allow academic and commercial organizations (with a license) access our COSMIC data sources. "))),(0,r.kt)("h2",{id:"gene-fusions"},"Gene Fusions"),(0,r.kt)("p",null,"Gene fusions are manually curated from peer reviewed publications by expert COSMIC curators. A comprehensive literature curation is completed for each fusion pair when it is released in the database. Currently COSMIC includes information on fusions involved in solid tumours and leukaemias."),(0,r.kt)("h3",{id:"tsv-file"},"TSV File"),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"SAMPLE_ID       SAMPLE_NAME     PRIMARY_SITE    SITE_SUBTYPE_1  SITE_SUBTYPE_2  SITE_SUBTYPE_3  PRIMARY_HISTOLOGY      HISTOLOGY_SUBTYPE_1      HISTOLOGY_SUBTYPE_2     HISTOLOGY_SUBTYPE_3     FUSION_ID       TRANSLOCATION_NAME      5'_CHROMOSOME   5'_STRAND       5'_GENE_ID      5'_GENE_NAME    5'_LAST_OBSERVED_EXON   5'_GENOME_START_FROM    5'_GENOME_START_TO      5'_GENOME_STOP_FROM     5'_GENOME_STOP_TO       3'_CHROMOSOME   3'_STRAND       3'_GENE_ID      3'_GENE_NAME   3'_FIRST_OBSERVED_EXON   3'_GENOME_START_FROM    3'_GENOME_START_TO      3'_GENOME_STOP_FROM     3'_GENOME_STOP_TO      FUSION_TYPE      PUBMED_PMID\n749711  HCC1187 breast  NS      NS      NS      carcinoma       ductal_carcinoma        NS      NS      665     ENST00000360863.10(RGS22):r.1_3555_ENST00000369518.1(SYCP1):r.2100_3452 8       -       197199  RGS22   22      99981937       99981937 100106116       100106116       1       +       212470  SYCP1_ENST00000369518   24      114944339       114944339       114995367       114995367       Inferred Breakpoint     20033038\n")),(0,r.kt)("h4",{id:"parsing"},"Parsing"),(0,r.kt)("p",null,"From the TSV file, we're mainly interested in the following columns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SAMPLE_ID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PRIMARY_SITE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PRIMARY_HISTOLOGY")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HISTOLOGY_SUBTYPE_1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FUSION_ID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TRANSLOCATION_NAME")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PUBMED_PMID"))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For all the histologies and sites, we replace all the underlines with spaces. ",(0,r.kt)("inlineCode",{parentName:"p"},"salivary_gland")," would become ",(0,r.kt)("inlineCode",{parentName:"p"},"salivary gland"),"."))),(0,r.kt)("h4",{id:"aggregation"},"Aggregation"),(0,r.kt)("p",null,"To create the gene fusion entries in Nirvana, we perform the following on each row in the TSV file:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Group all entries by FUSION_ID"),(0,r.kt)("li",{parentName:"ul"},"Using all the entries related to this FUSION_ID:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Collect all the PubMed IDs"),(0,r.kt)("li",{parentName:"ul"},"Tally the number of observed sample IDs"),(0,r.kt)("li",{parentName:"ul"},"Grab the HGVS r. notation (should not change throughout the FUSION_ID)"),(0,r.kt)("li",{parentName:"ul"},"Tally the number of samples observed for each histology"),(0,r.kt)("li",{parentName:"ul"},"Tally the number of samples observed for each site"))),(0,r.kt)("li",{parentName:"ul"},"Extract the transcript IDs from the HGVS notation and lookup the associated gene symbols")),(0,r.kt)("h4",{id:"fixing-the-hgvs-rna-notation"},"Fixing the HGVS RNA Notation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ENST00000360863.6(RGS22):r.1_3555_ENST00000369518.1(SYCP1):r.2100_3452\n")),(0,r.kt)("p",null,"There are some issues with the HGVS RNA notation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The two transcripts should be linked by a double colon ",(0,r.kt)("inlineCode",{parentName:"li"},"::"),"."),(0,r.kt)("li",{parentName:"ul"},"For coding transcripts, HGVS numbering should use CDS coordinates. Right now COSMIC is using cDNA coordinates for all their fusion"),(0,r.kt)("li",{parentName:"ul"},"If only the breakpoint is truly known, the recommendation is to use ",(0,r.kt)("inlineCode",{parentName:"li"},"?")," marks")),(0,r.kt)("p",null,"We chose to only update the linkage between each transcript using double colons ",(0,r.kt)("inlineCode",{parentName:"p"},"::"),". While we could have recalculated the HGVS notation using the supplied breakpoints, we chose not to because the resulting notation would be quite different from the original material. This would potentially lead to some confusion."),(0,r.kt)("h4",{id:"aggregating-histologies"},"Aggregating Histologies"),(0,r.kt)("p",null,"For histologies we want to capture the most specific description available. In the example above, we saw that the primary histology was ",(0,r.kt)("inlineCode",{parentName:"p"},"carcinoma"),", but the subtype was ",(0,r.kt)("inlineCode",{parentName:"p"},"ductal carcinoma"),". In this case we would use the subtype for the annotation."),(0,r.kt)("p",null,"COSMIC uses ",(0,r.kt)("inlineCode",{parentName:"p"},"NS")," to show that a value is empty. If the subtype is ",(0,r.kt)("inlineCode",{parentName:"p"},"NS"),", we will use the primary histology instead."),(0,r.kt)("h4",{id:"aggregating-sites"},"Aggregating Sites"),(0,r.kt)("p",null,"For sites, we observe that the subtype provides additional description but is still dependent on the primary site value. For example, the primary site might be ",(0,r.kt)("inlineCode",{parentName:"p"},"skin"),", but the subtype is ",(0,r.kt)("inlineCode",{parentName:"p"},"foot"),". Therefore, we will combine the values in the following manner: ",(0,r.kt)("inlineCode",{parentName:"p"},"skin (foot)"),"."),(0,r.kt)("h3",{id:"known-issues"},"Known Issues"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Known Issues")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There are some issues with the HGVS RNA notation:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"The two transcripts should be linked by a double colon ",(0,r.kt)("inlineCode",{parentName:"li"},"::"),". We fixed this aspect in Nirvana."),(0,r.kt)("li",{parentName:"ul"},"For coding transcripts, HGVS numbering should use CDS coordinates. Right now COSMIC is using cDNA coordinates for all their fusions.")))),(0,r.kt)("h3",{id:"download-url"},"Download URL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cancer.sanger.ac.uk/cosmic/file_download/GRCh37/cosmic/v94/CosmicFusionExport.tsv.gz"},"https://cancer.sanger.ac.uk/cosmic/file_download/GRCh37/cosmic/v94/CosmicFusionExport.tsv.gz")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cancer.sanger.ac.uk/cosmic/file_download/GRCh38/cosmic/v94/CosmicFusionExport.tsv.gz"},"https://cancer.sanger.ac.uk/cosmic/file_download/GRCh38/cosmic/v94/CosmicFusionExport.tsv.gz"))),(0,r.kt)("h3",{id:"json-output"},"JSON Output"),(0,r.kt)(o.default,{mdxType:"JSON"}))}u.isMDXComponent=!0}}]);