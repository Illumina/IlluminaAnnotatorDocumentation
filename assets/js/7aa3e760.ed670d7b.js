"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[7121],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return t?i.createElement(h,o(o({ref:n},p),{},{components:t})):i.createElement(h,o({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5902:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=t(7462),a=(t(7294),t(3905));const r={title:"Jasix"},o=void 0,l={unversionedId:"utilities/jasix",id:"version-3.17/utilities/jasix",title:"Jasix",description:"Overview",source:"@site/versioned_docs/version-3.17/utilities/jasix.mdx",sourceDirName:"utilities",slug:"/utilities/jasix",permalink:"/NirvanaDocumentation/3.17/utilities/jasix",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.17/utilities/jasix.mdx",tags:[],version:"3.17",frontMatter:{title:"Jasix"},sidebar:"version-3.17/docs",previous:{title:"Variant IDs",permalink:"/NirvanaDocumentation/3.17/core-functionality/variant-ids"}},s=[{value:"Overview",id:"overview",children:[],level:2},{value:"Creating the Jasix index",id:"creating-the-jasix-index",children:[{value:"Example",id:"example",children:[],level:3}],level:2},{value:"Querying the index",id:"querying-the-index",children:[],level:2},{value:"Extracting a section",id:"extracting-a-section",children:[],level:2}],c={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Jasix index is aimed at providing TABIX like indexing capabilities for the Nirvana JSON output."),(0,a.kt)("h2",{id:"creating-the-jasix-index"},"Creating the Jasix index"),(0,a.kt)("p",null,"The Jasix index (that comes in a .jsi) file is generated on-the-fly with Nirvana output. It can also be generated independently by running the Jasix command line utility on the JSON output file. Please note that the Jasix utility can only consume JSON files that follow the Nirvana JSON output format. The following code blocks demonstrate the help menu and index generating functionalities of Jasix."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"dotnet Jasix.dll -h\nUSAGE: dotnet Jasix.dll -i in.json.gz [options]\nIndexes a Nirvana annotated JSON file\n\nOPTIONS:\n      --header, -t           print also the header lines\n      --only-header, -H      print only the header lines\n      --chromosomes, -l      list chromosome names\n      --index, -c            create index\n      --in, -i <VALUE>       input\n      --out, -o <VALUE>      compressed output file name (default:console)\n      --query, -q <VALUE>    query range\n      --section, -s <VALUE>  complete section (positions or genes) to output\n      --help, -h             displays the help menu\n      --version, -v          displays the version\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"dotnet Jasix.dll --index -i input.json.gz\n---------------------------------------------------------------------------\nJasix                                               (c) 2017 Illumina, Inc.\nStromberg, Roy, Lajugie, Jiang, Li, and Kang                          2.0.0\n---------------------------------------------------------------------------\n\nRef Sequence chrM indexed in 00:00:00.2\nRef Sequence chr1 indexed in 00:00:05.8\nRef Sequence chr2 indexed in 00:00:06.0\n.\n.\n.\nPeak memory usage: 28.5 MB\nTime: 00:01:14.8\n")),(0,a.kt)("h2",{id:"querying-the-index"},"Querying the index"),(0,a.kt)("p",null,"The Jasix query format is chr:start-end. If not provided, it assumes end=start. If only chr is provided, all entries for that chromosome will be provided."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"dotnet Jasix.dll -i input.json.gz chrM:5000-7000\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "positions":[\n      {\n         "chromosome":"chrM",\n         "refAllele":"C",\n         "position":5581,\n         "quality":3070.00,\n         "filters":[\n            "LowGQXHomSNP"\n         ],\n         "altAlleles":[\n            "T"\n         ],\n         "samples":[\n            {\n               "variantFreq":1,\n               "totalDepth":1625,\n               "genotypeQuality":1,\n               "alleleDepths":[\n                  0,\n                  1625\n               ],\n               "genotype":"1/1"\n            }\n         ],\n         "variants":[\n            {\n               "altAllele":"T",\n               "refAllele":"C",\n               "begin":5581,\n               "chromosome":"chrM",\n               "end":5581,\n               "variantType":"SNV",\n               "vid":"MT:5581:T"\n            }\n         ]\n      },\n      {\n         "chromosome":"chrM",\n         "refAllele":"A",\n         "position":6267,\n         "quality":1637.00,\n         "filters":[\n            "LowGQXHetSNP"\n         ],\n         "altAlleles":[\n            "G"\n         ],\n         "samples":[\n            {\n               "variantFreq":0.6873,\n               "totalDepth":323,\n               "genotypeQuality":1,\n               "alleleDepths":[\n                  101,\n                  222\n               ],\n               "genotype":"0/1"\n            }\n         ],\n         "variants":[\n            {\n               "altAllele":"G",\n               "refAllele":"A",\n               "begin":6267,\n               "chromosome":"chrM",\n               "end":6267,\n               "variantType":"SNV",\n               "vid":"MT:6267:G"\n            }\n         ]\n      }\n   ]\n}\n\n')),(0,a.kt)("p",null,'The default output stream is Console. However, if an output filename is provided, Jasix outputs the results to that file in a bgzip compressed format. The output is always a valid JSON entry. If requested (via -t option) the header of the indexed file will be provided. Multiple queries can be submitted in the same command and the output will contain them within the same "positions" block in order of the submitted queries (Warning: if the queries are out of order, or overlapping, the output will be out or order and intersecting).'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"dotnet Jasix.dll -i input.json.gz  -q chrM:5000-7000 -q chrM:8500-9500 -t\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "header":{\n      "annotator":"Illumina Annotation Engine 1.6.2.0",\n      "creationTime":"2017-08-30 11:42:57",\n      "genomeAssembly":"GRCh37",\n      "schemaVersion":6,\n      "dataVersion":"84.24.39",\n      "dataSources":[\n         {\n            "name":"VEP",\n            "version":"84",\n            "description":"Ensembl",\n            "releaseDate":"2017-01-16"\n         }\n      ],\n      "samples":[\n         "Mother"\n      ]\n   },\n   "positions":[\n      {\n         "chromosome":"chrM",\n         "refAllele":"C",\n         "position":5581,\n         "quality":3070.00,\n         "filters":[\n            "LowGQXHomSNP"\n         ],\n         "altAlleles":[\n            "T"\n         ],\n         "samples":[\n            {\n               "variantFreq":1,\n               "totalDepth":1625,\n               "genotypeQuality":1,\n               "alleleDepths":[\n                  0,\n                  1625\n               ],\n               "genotype":"1/1"\n            }\n         ],\n         "variants":[\n            {\n               "altAllele":"T",\n               "refAllele":"C",\n               "begin":5581,\n               "chromosome":"chrM",\n               "end":5581,\n               "variantType":"SNV",\n               "vid":"MT:5581:T"\n            }\n         ]\n      },\n      {\n         "chromosome":"chrM",\n         "refAllele":"A",\n         "position":6267,\n         "quality":1637.00,\n         "filters":[\n            "LowGQXHetSNP"\n         ],\n         "altAlleles":[\n            "G"\n         ],\n         "samples":[\n            {\n               "variantFreq":0.6873,\n               "totalDepth":323,\n               "genotypeQuality":1,\n               "alleleDepths":[\n                  101,\n                  222\n               ],\n               "genotype":"0/1"\n            }\n         ],\n         "variants":[\n            {\n               "altAllele":"G",\n               "refAllele":"A",\n               "begin":6267,\n               "chromosome":"chrM",\n               "end":6267,\n               "variantType":"SNV",\n               "vid":"MT:6267:G"\n            }\n         ]\n      },\n      {\n         "chromosome":"chrM",\n         "refAllele":"G",\n         "position":8702,\n         "quality":3070.00,\n         "filters":[\n            "LowGQXHomSNP"\n         ],\n         "altAlleles":[\n            "A"\n         ],\n         "samples":[\n            {\n               "variantFreq":0.9987,\n               "totalDepth":1534,\n               "genotypeQuality":1,\n               "alleleDepths":[\n                  2,\n                  1532\n               ],\n               "genotype":"1/1"\n            }\n         ],\n         "variants":[\n            {\n               "altAllele":"A",\n               "refAllele":"G",\n               "begin":8702,\n               "chromosome":"chrM",\n               "end":8702,\n               "variantType":"SNV",\n               "vid":"MT:8702:A"\n            }\n         ]\n      },\n      {\n         "chromosome":"chrM",\n         "refAllele":"G",\n         "position":9378,\n         "quality":3070.00,\n         "filters":[\n            "LowGQXHomSNP"\n         ],\n         "altAlleles":[\n            "A"\n         ],\n         "samples":[\n            {\n               "variantFreq":1,\n               "totalDepth":1018,\n               "genotypeQuality":1,\n               "alleleDepths":[\n                  0,\n                  1018\n               ],\n               "genotype":"1/1"\n            }\n         ],\n         "variants":[\n            {\n               "altAllele":"A",\n               "refAllele":"G",\n               "begin":9378,\n               "chromosome":"chrM",\n               "end":9378,\n               "variantType":"SNV",\n               "vid":"MT:9378:A"\n            }\n         ]\n      }\n   ]\n}\n')),(0,a.kt)("h2",{id:"extracting-a-section"},"Extracting a section"),(0,a.kt)("p",null,"The Nirvana JSON file has three sections: header, positions and genes. Header can be printed using the -H option. If you are interested in only the positions or genes section, you can use the -s or --section option."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"dotnet Jasix.dll -i input.json.gz  -s genes\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n{\n  "name": "ABCB10",\n  "omim": [\n    {\n      "mimNumber": 605454,\n      "geneName": "ATP-binding cassette, subfamily B, member 10"\n    }\n  ]\n},\n{\n  "name": "ABCD3",\n  "omim": [\n    {\n      "mimNumber": 170995,\n      "geneName": "ATP-binding cassette, subfamily D, member 3 (peroxisomal membrane protein 1, 70kD)",\n      "description": "The ABCD3 gene encodes a peroxisomal membrane transporter involved in the transport of branched-chain fatty acids and C27 bile acids into the peroxisome; the latter function is a crucial step in bile acid biosynthesis (summary by Ferdinandusse et al., 2015).",\n      "phenotypes": [\n        {\n          "mimNumber": 616278,\n          "phenotype": "?Bile acid synthesis defect, congenital, 5",\n          "mapping": "molecular basis of the disorder is known",\n          "inheritances": [\n            "Autosomal recessive"\n          ],\n          "comments": [\n            "unconfirmed or possibly spurious mapping"\n          ]\n        }\n      ]\n    }\n  ]\n}\n]\n')))}u.isMDXComponent=!0}}]);