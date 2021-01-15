(window.webpackJsonp=window.webpackJsonp||[]).push([[18,21],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,O=m["".concat(o,".").concat(d)]||m[d]||p[d]||i;return n?r.a.createElement(O,c(c({ref:t},l),{},{components:n})):r.a.createElement(O,c({ref:t},l))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(133)),o={},c={unversionedId:"data-sources/omim-json",id:"data-sources/omim-json",isDocsHomePage:!1,title:"omim-json",description:"`json",source:"@site/docs/data-sources/omim-json.md",slug:"/data-sources/omim-json",permalink:"/NirvanaDocumentation/data-sources/omim-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/omim-json.md",version:"current"},b=[],l={rightToc:b};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"omim":[ \n   { \n      "mimNumber":600678,\n      "geneName":"MutS, E. coli, homolog of, 6",\n      "description":"The transcription factor p53 responds to diverse cellular stresses to regulate target genes that induce cell cycle arrest, apoptosis, senescence, DNA repair, or changes in metabolism. In addition, p53 appears to induce apoptosis through nontranscriptional cytoplasmic processes. In unstressed cells, p53 is kept inactive essentially through the actions of the ubiquitin ligase MDM2, which inhibits p53 transcriptional activity and ubiquitinates p53 to promote its degradation. Numerous posttranslational modifications modulate p53 activity, most notably phosphorylation and acetylation. Several less abundant p53 isoforms also modulate p53 activity. Activity of p53 is ubiquitously lost in human cancer either by mutation of the p53 gene itself or by loss of cell signaling upstream or downstream of p53 (Toledo and Wahl, 2006; Bourdon, 2007; Vousden and Lane, 2007)",\n      "phenotypes":[ \n         { \n            "mimNumber":614350,\n            "phenotype":"Colorectal cancer, hereditary nonpolyposis, type 5",\n            "description":"Hereditary nonpolyposis colorectal cancer type 5 is a cancer predisposition syndrome ...",\n            "mapping":"molecular basis of the disorder is known",\n            "inheritances":[ \n               "Autosomal dominant"\n            ]\n         },\n         { \n            "mimNumber":608089,\n            "phenotype":"Endometrial cancer, familial",\n            "mapping":"molecular basis of the disorder is known"\n         },\n         { \n            "mimNumber":276300,\n            "phenotype":"Mismatch repair cancer syndrome",\n            "description":"Constitutional mismatch repair deficiency is a rare childhood cancer predisposition syndrome ...",\n            "mapping":"molecular basis of the disorder is known",\n            "inheritances":[ \n               "Autosomal recessive"\n            ],\n            "comments"     : [\n                "contribute to susceptibility to multifactorial disorders or to susceptibility to infection",\n                "unconfirmed or possibly spurious mapping"\n            ]\n         }\n      ]\n   }\n]\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Field"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Notes"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"mimNumber"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"int"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"OMIM ID for gene")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"geneName"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"gene name")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"description"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"phenotypes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"object array"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"see ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#phenotype"}),"Phenotype entry below"))))),Object(i.b)("h4",{id:"phenotype"},"Phenotype"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Field"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Notes"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"mimNumber"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"int"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"phenotype"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"description"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"mapping"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"see ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#mapping"}),"possible values below"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"inheritance"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string array"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"see ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#inheritance"}),"possible values below"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"comments"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string array"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"see ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#comments"}),"possible values below"))))),Object(i.b)("h4",{id:"mapping"},"Mapping"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"disorder was positioned by mapping of the wild type gene"),Object(i.b)("li",{parentName:"ol"},"disease phenotype itself was mapped"),Object(i.b)("li",{parentName:"ol"},"molecular basis of the disorder is known"),Object(i.b)("li",{parentName:"ol"},"disorder is a chromosome deletion or duplication syndrome")),Object(i.b)("h4",{id:"inheritance"},"Inheritance"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"autosomal recessive"),Object(i.b)("li",{parentName:"ul"},"autosomal dominant")),Object(i.b)("h4",{id:"comments"},"Comments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"contributes to the susceptibility to multifactorial disorders"),Object(i.b)("li",{parentName:"ul"},"variations that lead to apparently abnormal laboratory test values"),Object(i.b)("li",{parentName:"ul"},"unconfirmed mapping")))}s.isMDXComponent=!0},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),i=(n(0),n(133)),o=n(66),c={title:"OMIM"},b={unversionedId:"data-sources/omim",id:"data-sources/omim",isDocsHomePage:!1,title:"OMIM",description:"Overview",source:"@site/docs/data-sources/omim.mdx",slug:"/data-sources/omim",permalink:"/NirvanaDocumentation/data-sources/omim",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/omim.mdx",version:"current",sidebar:"docs",previous:{title:"MITOMAP",permalink:"/NirvanaDocumentation/data-sources/mitomap"},next:{title:"Primate AI",permalink:"/NirvanaDocumentation/data-sources/primate-ai"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Parse OMIM data",id:"parse-omim-data",children:[{value:"mim2gene.txt",id:"mim2genetxt",children:[]},{value:"OMIM API",id:"omim-api",children:[]},{value:"Remove links in OMIM descriptions",id:"remove-links-in-omim-descriptions",children:[]}]},{value:"JSON output",id:"json-output",children:[]}],s={rightToc:l};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"OMIM is a comprehensive, authoritative compendium of human genes and genetic phenotypes that is freely available and updated daily."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Publications")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Amberger JS, Bocchini CA, Scott AF, Hamosh A. OMIM.org: leveraging knowledge across phenotype-gene relationships. Nucleic Acids Res. 2019 Jan 8;47(D1):D1038-D1043. doi:10.1093/nar/gky1151. PMID: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://pubmed.ncbi.nlm.nih.gov/30445645/"}),"30445645"),"."),Object(i.b)("p",{parentName:"div"},"Amberger JS, Bocchini CA, Schiettecatte FJM, Scott AF, Hamosh A. OMIM.org: Online Mendelian Inheritance in Man (OMIM\xae), an online catalog of human genes and genetic disorders. Nucleic Acids Res. 2015 Jan;43(Database issue):D789-98. PMID: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://pubmed.ncbi.nlm.nih.gov/25428349/"}),"25428349"),"."))),Object(i.b)("h2",{id:"parse-omim-data"},"Parse OMIM data"),Object(i.b)("p",null,"Nirvana uses gene symbols as the gene identifiers internally. To generate the OMIM database, we first map the MIM numbers, which are the primary identifiers used by OMIM, to gene symbols supported by Nirvana. Please note that there can be multiple MIM numbers mapped to one gene symbol. Only MIM numbers successfully mapped to a Nirvana gene symbol are further processed. The OMIM API is used to fetch all the information associated with a gene MIM number, except the gene symbols."),Object(i.b)("h3",{id:"mim2genetxt"},"mim2gene.txt"),Object(i.b)("p",null,"This mim2gene.txt (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://omim.org/static/omim/data/mim2gene.txt"}),"http://omim.org/static/omim/data/mim2gene.txt"),") file provides the mapping between MIM numbers and gene symbols. An example of this file is given below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"# MIM Number    MIM Entry Type (see FAQ 1.3 at https://omim.org/help/faq)   Entrez Gene ID (NCBI)   Approved Gene Symbol (HGNC) Ensembl Gene ID (Ensembl)\n100050  predominantly phenotypes\n100070  phenotype   100329167\n100100  phenotype\n100200  predominantly phenotypes\n100300  phenotype\n100500  moved/removed\n100600  phenotype\n100640  gene    216 ALDH1A1 ENSG00000165092\n100650  gene/phenotype  217 ALDH2   ENSG00000111275\n100660  gene    218 ALDH3A1 ENSG00000108602\n100670  gene    219 ALDH1B1 ENSG00000137124\n100675  predominantly phenotypes\n100678  gene    39  ACAT2   ENSG00000120437\n")),Object(i.b)("p",null,'The information in the "Entrez Gene ID (NCBI)",  "Approved Gene Symbol (HGNC)" and "Ensembl Gene ID (Ensembl)" columns are used to find the proper gene symbol supported by Nirvana, which may or may not be the same as the gene symbol listed here.'),Object(i.b)("h3",{id:"omim-api"},"OMIM API"),Object(i.b)("p",null,"Nirvana retrieves the OMIM annotations from the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.omim.org/api"}),"OMIM API"),' JSON responses. The "entry" handler is used to fetch all the annotations associated with a given OMIM gene. A sample JSON response from the API is provided there.'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "omim": {\n    "version": "1.0",\n    "entryList": [\n      {\n        "entry": {\n          "prefix": "*",\n          "mimNumber": 100640,\n          "status": "live",\n          "titles": {\n            "preferredTitle": "ALDEHYDE DEHYDROGENASE 1 FAMILY, MEMBER A1; ALDH1A1",\n            "alternativeTitles": "ALDEHYDE DEHYDROGENASE 1; ALDH1;;\\nACETALDEHYDE DEHYDROGENASE 1;;\\nALDH, LIVER CYTOSOLIC;;\\nRETINAL DEHYDROGENASE 1; RALDH1"\n          },\n          "textSectionList": [\n            {\n              "textSection": {\n                "textSectionName": "description",\n                "textSectionTitle": "Description",\n                "textSectionContent": "The ALDH1A1 gene encodes a liver cytosolic isoform of acetaldehyde dehydrogenase ({EC 1.2.1.3}), an enzyme involved in the major pathway of alcohol metabolism after alcohol dehydrogenase (ADH, see {103700}). See also liver mitochondrial ALDH2 ({100650}), variation in which has been implicated in different responses to alcohol ingestion.\\n\\nALDH1 is associated with a low Km for NAD, a high Km for acetaldehyde, and is strongly inactivated by disulfiram. ALDH2 is associated with a high Km for NAD, and low Km for acetaldehyde, and is insensitive to inhibition by disulfiram ({4:Hsu et al., 1985})."\n              }\n            }\n          ],\n          "geneMap": {\n            "sequenceID": 7709,\n            "chromosome": 9,\n            "chromosomeSymbol": "9",\n            "chromosomeSort": 225,\n            "chromosomeLocationStart": 72900670,\n            "chromosomeLocationEnd": 72953052,\n            "transcript": "ENST00000297785.7",\n            "cytoLocation": "9q21",\n            "computedCytoLocation": "9q21.13",\n            "mimNumber": 100640,\n            "geneSymbols": "ALDH1A1",\n            "geneName": "Aldehyde dehydrogenase-1 family, member A1, soluble",\n            "mappingMethod": "REa, A",\n            "confidence": "P",\n            "mouseGeneSymbol": "Aldh1a1",\n            "mouseMgiID": "MGI:1353450",\n            "geneInheritance": null\n          },\n          "externalLinks": {\n            "geneIDs": "216",\n            "hgncID": "402",\n            "ensemblIDs": "ENSG00000165092,ENST00000297785.8",\n            "approvedGeneSymbols": "ALDH1A1",\n            "ncbiReferenceSequences": "1519246465",\n            "proteinSequences": "194378740,211947843,2183299,178400,119582947,119582948,178372,40807656,194375548,30582681,209402710,4262707,194739599,4261625,178394,261487497,16306661,21361176,32815082,118495,62089228",\n            "uniGenes": "Hs.76392",\n            "swissProtIDs": "P00352",\n            "decipherGene": false,\n            "umlsIDs": "C1412333",\n            "gtr": true,\n            "cmgGene": false,\n            "keggPathways": true,\n            "gwasCatalog": false,\n\n          }\n        }\n      },\n      {\n        "entry": {\n          "prefix": "*",\n          "mimNumber": 102560,\n          "status": "live",\n          "titles": {\n            "preferredTitle": "ACTIN, GAMMA-1; ACTG1",\n            "alternativeTitles": "ACTIN, GAMMA; ACTG;;\\nCYTOSKELETAL GAMMA-ACTIN;;\\nACTIN, CYTOPLASMIC, 2"\n          },\n          "textSectionList": [\n            {\n              "textSection": {\n                "textSectionName": "description",\n                "textSectionTitle": "Description",\n                "textSectionContent": "Actins are a family of highly conserved cytoskeletal proteins that play fundamental roles in nearly all aspects of eukaryotic cell biology. The ability of a cell to divide, move, endocytose, generate contractile force, and maintain shape is reliant upon functional actin-based structures. Actin isoforms are grouped according to expression patterns: muscle actins predominate in striated and smooth muscle (e.g., ACTA1, {102610}, and ACTA2, {102620}, respectively), whereas the 2 cytoplasmic nonmuscle actins, gamma-actin (ACTG1) and beta-actin (ACTB; {102630}), are found in all cells ({13:Sonnemann et al., 2006})."\n              }\n            }\n          ],\n          "geneMap": {\n            "sequenceID": 13666,\n            "chromosome": 17,\n            "chromosomeSymbol": "17",\n            "chromosomeSort": 947,\n            "chromosomeLocationStart": 81509970,\n            "chromosomeLocationEnd": 81512798,\n            "transcript": "ENST00000331925.7",\n            "cytoLocation": "17q25.3",\n            "computedCytoLocation": "17q25.3",\n            "mimNumber": 102560,\n            "geneSymbols": "ACTG1, DFNA20, DFNA26, BRWS2",\n            "geneName": "Actin, gamma-1",\n            "mappingMethod": "REa, A, Fd",\n            "confidence": "C",\n            "mouseGeneSymbol": "Actg1",\n            "mouseMgiID": "MGI:87906",\n            "geneInheritance": null,\n            "phenotypeMapList": [\n              {\n                "phenotypeMap": {\n                  "mimNumber": 102560,\n                  "phenotype": "Baraitser-Winter syndrome 2",\n                  "phenotypeMimNumber": 614583,\n                  "phenotypicSeriesNumber": "PS243310",\n                  "phenotypeMappingKey": 3,\n                  "phenotypeInheritance": "Autosomal dominant"\n                }\n              },\n              {\n                "phenotypeMap": {\n                  "mimNumber": 102560,\n                  "phenotype": "Deafness, autosomal dominant 20/26",\n                  "phenotypeMimNumber": 604717,\n                  "phenotypicSeriesNumber": "PS124900",\n                  "phenotypeMappingKey": 3,\n                  "phenotypeInheritance": "Autosomal dominant"\n                }\n              }\n            ]\n          }\n        }\n      }\n    ]\n  }\n}\n')),Object(i.b)("p",null,"Content from the OMIM API JSON response is reorganized as shown in the Nirvana ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#json-output"}),"JSON Output")),Object(i.b)("p",null,"Mappings between the Nirvana JSON output and OMIM JSON API are listed in the table below:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Nirvana JSON key chain"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"OMIM API JSON key chain"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"omim:mimNumber"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"omim:entryList:entry:mimNumber")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"omim:geneName"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"omim:entryList:entry:geneMap:geneName")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"omim:description"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"omim:entryList:entry:textSectionList:textSection:textSectionContent")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"omim:phenotypes:mimNumber"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"omim:entryList:entry:geneMap:phenotypeMapList:phenotypeMap:mimNumber")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"omim:phenotypes:phenotype"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"omim:entryList:entry:geneMap:phenotypeMapList:phenotypeMap:phenotype")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"omim:phenotypes:description"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"omim:entryList:entry:textSectionList:textSection:textSectionContent")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"omim:phenotypes:mapping"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"omim:entryList:entry:geneMap:phenotypeMapList:phenotypeMap:phenotypeMappingKey (",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#mapping-key-to-content"}),"see mapping below"),")")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"omim:phenotypes:inheritances"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"omim:entryList:entry:geneMap:phenotypeMapList:phenotypeMap:phenotypeInheritance")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"omim:phenotypes:comments"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"omim:entryList:entry:geneMap:phenotypeMapList:phenotypeMap:phenotype (",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#phenotype-character-to-comment"}),"see mapping below"),")")))),Object(i.b)("h4",{id:"mapping-key-to-content"},"Mapping key to content"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"1")," to ",Object(i.b)("inlineCode",{parentName:"p"},"disorder was positioned by mapping of the wild type gene"),Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},"2")," to ",Object(i.b)("inlineCode",{parentName:"p"},"disease phenotype itself was mapped"),Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},"3")," to ",Object(i.b)("inlineCode",{parentName:"p"},"molecular basis of the disorder is known"),Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},"4")," to ",Object(i.b)("inlineCode",{parentName:"p"},"disorder is a chromosome deletion or duplication syndrome"),Object(i.b)("br",null)),Object(i.b)("h4",{id:"phenotype-character-to-comment"},"Phenotype character to comment"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"?")," to ",Object(i.b)("inlineCode",{parentName:"p"},"unconfirmed or possibly spurious mapping"),Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},"["),"/",Object(i.b)("inlineCode",{parentName:"p"},"]")," to ",Object(i.b)("inlineCode",{parentName:"p"},"nondiseases"),Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},"{"),"/",Object(i.b)("inlineCode",{parentName:"p"},"}")," to ",Object(i.b)("inlineCode",{parentName:"p"},"contribute to susceptibility to multifactorial disorders or to susceptibility to infection"),Object(i.b)("br",null)),Object(i.b)("h3",{id:"remove-links-in-omim-descriptions"},"Remove links in OMIM descriptions"),Object(i.b)("p",null,"There are different types of link in the OMIM description section. For example, in above JSON response, we have the description of MIM entry 100640:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"The ALDH1A1 gene encodes a liver cytosolic isoform of acetaldehyde dehydrogenase ({EC 1.2.1.3}), an enzyme involved in the major pathway of alcohol metabolism after alcohol dehydrogenase (ADH, see {103700}). See also liver mitochondrial ALDH2 ({100650}), variation in which has been implicated in different responses to alcohol ingestion.\\n\\nALDH1 is associated with a low Km for NAD, a high Km for acetaldehyde, and is strongly inactivated by disulfiram. ALDH2 is associated with a high Km for NAD, and low Km for acetaldehyde, and is insensitive to inhibition by disulfiram ({4:Hsu et al., 1985}).")),Object(i.b)("p",null,"As the descriptions will be shown as plain text, we remove the curry brackets surrounding links and try to make the text still readable with minimal modifications. Briefly:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Links referring to another MIM entry (e.g. {100650}) will be removed. Any word(s) specifically associated with the removed link will also be removed. For example,  "(ADH, see {103700})" will become "(ADH)" after the process.'),Object(i.b)("li",{parentName:"ul"},'Links referring to a literature reference will be processed to remove the internal index and curry brackets. For example, "{4:Hsu et al., 1985}" becomes "Hsu et al., 1985".'),Object(i.b)("li",{parentName:"ul"},'All the other links will simple have their curry brackets removed. For example, "{EC 1.2.1.3}" becomes "EC 1.2.1.3".'),Object(i.b)("li",{parentName:"ul"},'If the content within a pair of parentheses becomes empty after being processed, the parentheses need to be removed as well and its surrounding white spaces should be properly processed. For example,  "ALDH2 ({100650})," will become "ALDH2,".')),Object(i.b)("p",null,"Here is a list of examples about how the description section supposed to be processed:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Original text"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Processed text"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"({516030}, {516040}, and {516050})"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"(e.g., D1, {168461}; D2, {123833}; D3, {123834})"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"(e.g., D1; D2; D3)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"(desmocollins; see DSC2, {125645})"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"(desmocollins; see DSC2)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"(e.g., see {102700}, {300755})"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"(ADH, see {103700}). See also liver mitochondrial ALDH2 ({100650})"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"(ADH). See also liver mitochondrial ALDH2")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"(see, e.g., CACNA1A; {601011})"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"(see, e.g., CACNA1A)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"(e.g., GSTA1; {138359}), mu (e.g., {138350})"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"(e.g., GSTA1), mu")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"(NFKB; see {164011})"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"(NFKB)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"(see ISGF3G, {147574})"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"(see ISGF3G)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"(DCK; {EC 2.7.1.74}; {125450})"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"(DCK; EC 2.7.1.74)")))),Object(i.b)("h2",{id:"json-output"},"JSON output"),Object(i.b)(o.default,{mdxType:"JSON"}))}m.isMDXComponent=!0}}]);