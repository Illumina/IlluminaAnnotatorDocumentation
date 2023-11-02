"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[8943,216],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),h=i,u=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var m=2;m<o;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8010:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const o={},r=void 0,l={unversionedId:"data-sources/omim-json",id:"data-sources/omim-json",title:"omim-json",description:"| Field       | Type         | Notes                                   |",source:"@site/docs/data-sources/omim-json.md",sourceDirName:"data-sources",slug:"/data-sources/omim-json",permalink:"/NirvanaDocumentation/data-sources/omim-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/omim-json.md",tags:[],version:"current",frontMatter:{}},s=[{value:"Phenotype",id:"phenotype",children:[],level:4},{value:"Mapping",id:"mapping",children:[],level:4},{value:"Inheritance",id:"inheritance",children:[],level:4},{value:"Comments",id:"comments",children:[],level:4}],m={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"omim":[ \n   { \n      "mimNumber":600678,\n      "geneName":"MutS, E. coli, homolog of, 6",\n      "description":"The transcription factor p53 responds to diverse cellular stresses to regulate target genes that induce cell cycle arrest, apoptosis, senescence, DNA repair, or changes in metabolism. In addition, p53 appears to induce apoptosis through nontranscriptional cytoplasmic processes. In unstressed cells, p53 is kept inactive essentially through the actions of the ubiquitin ligase MDM2, which inhibits p53 transcriptional activity and ubiquitinates p53 to promote its degradation. Numerous posttranslational modifications modulate p53 activity, most notably phosphorylation and acetylation. Several less abundant p53 isoforms also modulate p53 activity. Activity of p53 is ubiquitously lost in human cancer either by mutation of the p53 gene itself or by loss of cell signaling upstream or downstream of p53 (Toledo and Wahl, 2006; Bourdon, 2007; Vousden and Lane, 2007)",\n      "phenotypes":[ \n         { \n            "mimNumber":614350,\n            "phenotype":"Colorectal cancer, hereditary nonpolyposis, type 5",\n            "description":"Hereditary nonpolyposis colorectal cancer type 5 is a cancer predisposition syndrome ...",\n            "mapping":"molecular basis of the disorder is known",\n            "inheritances":[ \n               "Autosomal dominant"\n            ]\n         },\n         { \n            "mimNumber":608089,\n            "phenotype":"Endometrial cancer, familial",\n            "mapping":"molecular basis of the disorder is known"\n         },\n         { \n            "mimNumber":276300,\n            "phenotype":"Mismatch repair cancer syndrome",\n            "description":"Constitutional mismatch repair deficiency is a rare childhood cancer predisposition syndrome ...",\n            "mapping":"molecular basis of the disorder is known",\n            "inheritances":[ \n               "Autosomal recessive"\n            ],\n            "comments"     : [\n                "contribute to susceptibility to multifactorial disorders or to susceptibility to infection",\n                "unconfirmed or possibly spurious mapping"\n            ]\n         }\n      ]\n   }\n]\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"mimNumber"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},"OMIM ID for gene")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"geneName"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"gene name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"description"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"phenotypes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"object array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"see ",(0,i.kt)("a",{parentName:"td",href:"#phenotype"},"Phenotype entry below"))))),(0,i.kt)("h4",{id:"phenotype"},"Phenotype"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"mimNumber"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"phenotype"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"description"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"mapping"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"see ",(0,i.kt)("a",{parentName:"td",href:"#mapping"},"possible values below"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"inheritance"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"see ",(0,i.kt)("a",{parentName:"td",href:"#inheritance"},"possible values below"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"comments"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"see ",(0,i.kt)("a",{parentName:"td",href:"#comments"},"possible values below"))))),(0,i.kt)("h4",{id:"mapping"},"Mapping"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"disorder was positioned by mapping of the wild type gene"),(0,i.kt)("li",{parentName:"ol"},"disease phenotype itself was mapped"),(0,i.kt)("li",{parentName:"ol"},"molecular basis of the disorder is known"),(0,i.kt)("li",{parentName:"ol"},"disorder is a chromosome deletion or duplication syndrome")),(0,i.kt)("h4",{id:"inheritance"},"Inheritance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"autosomal recessive"),(0,i.kt)("li",{parentName:"ul"},"autosomal dominant")),(0,i.kt)("h4",{id:"comments"},"Comments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"contributes to the susceptibility to multifactorial disorders"),(0,i.kt)("li",{parentName:"ul"},"variations that lead to apparently abnormal laboratory test values"),(0,i.kt)("li",{parentName:"ul"},"unconfirmed mapping")))}d.isMDXComponent=!0},1927:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var a=n(7462),i=(n(7294),n(3905)),o=n(8010);const r={title:"OMIM"},l=void 0,s={unversionedId:"data-sources/omim",id:"data-sources/omim",title:"OMIM",description:"Overview",source:"@site/docs/data-sources/omim.mdx",sourceDirName:"data-sources",slug:"/data-sources/omim",permalink:"/NirvanaDocumentation/data-sources/omim",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/omim.mdx",tags:[],version:"current",frontMatter:{title:"OMIM"},sidebar:"docs",previous:{title:"MITOMAP",permalink:"/NirvanaDocumentation/data-sources/mitomap"},next:{title:"PhyloP",permalink:"/NirvanaDocumentation/data-sources/phylop"}},m=[{value:"Overview",id:"overview",children:[],level:2},{value:"Parse OMIM data",id:"parse-omim-data",children:[{value:"mim2gene.txt",id:"mim2genetxt",children:[],level:3},{value:"OMIM API",id:"omim-api",children:[{value:"Mapping key to content",id:"mapping-key-to-content",children:[],level:4},{value:"Phenotype character to comment",id:"phenotype-character-to-comment",children:[],level:4}],level:3},{value:"Remove links in OMIM descriptions",id:"remove-links-in-omim-descriptions",children:[],level:3}],level:2},{value:"JSON output",id:"json-output",children:[],level:2},{value:"Building the supplementary files",id:"building-the-supplementary-files",children:[],level:2}],p={toc:m},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"OMIM is a comprehensive, authoritative compendium of human genes and genetic phenotypes that is freely available and updated daily."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publications")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Amberger JS, Bocchini CA, Scott AF, Hamosh A. OMIM.org: leveraging knowledge across phenotype-gene relationships. Nucleic Acids Res. 2019 Jan 8;47(D1):D1038-D1043. doi:10.1093/nar/gky1151. PMID: ",(0,i.kt)("a",{parentName:"p",href:"https://pubmed.ncbi.nlm.nih.gov/30445645/"},"30445645"),"."),(0,i.kt)("p",{parentName:"div"},"Amberger JS, Bocchini CA, Schiettecatte FJM, Scott AF, Hamosh A. OMIM.org: Online Mendelian Inheritance in Man (OMIM\xae), an online catalog of human genes and genetic disorders. Nucleic Acids Res. 2015 Jan;43(Database issue):D789-98. PMID: ",(0,i.kt)("a",{parentName:"p",href:"https://pubmed.ncbi.nlm.nih.gov/25428349/"},"25428349"),"."))),(0,i.kt)("h2",{id:"parse-omim-data"},"Parse OMIM data"),(0,i.kt)("p",null,"Nirvana uses gene symbols as the gene identifiers internally. To generate the OMIM database, we first map the MIM numbers, which are the primary identifiers used by OMIM, to gene symbols supported by Nirvana. Please note that there can be multiple MIM numbers mapped to one gene symbol. Only MIM numbers successfully mapped to a Nirvana gene symbol are further processed. The OMIM API is used to fetch all the information associated with a gene MIM number, except the gene symbols."),(0,i.kt)("h3",{id:"mim2genetxt"},"mim2gene.txt"),(0,i.kt)("p",null,"This mim2gene.txt (",(0,i.kt)("a",{parentName:"p",href:"http://omim.org/static/omim/data/mim2gene.txt"},"http://omim.org/static/omim/data/mim2gene.txt"),") file provides the mapping between MIM numbers and gene symbols. An example of this file is given below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# MIM Number    MIM Entry Type (see FAQ 1.3 at https://omim.org/help/faq)   Entrez Gene ID (NCBI)   Approved Gene Symbol (HGNC) Ensembl Gene ID (Ensembl)\n100050  predominantly phenotypes\n100070  phenotype   100329167\n100100  phenotype\n100200  predominantly phenotypes\n100300  phenotype\n100500  moved/removed\n100600  phenotype\n100640  gene    216 ALDH1A1 ENSG00000165092\n100650  gene/phenotype  217 ALDH2   ENSG00000111275\n100660  gene    218 ALDH3A1 ENSG00000108602\n100670  gene    219 ALDH1B1 ENSG00000137124\n100675  predominantly phenotypes\n100678  gene    39  ACAT2   ENSG00000120437\n")),(0,i.kt)("p",null,'The information in the "Entrez Gene ID (NCBI)",  "Approved Gene Symbol (HGNC)" and "Ensembl Gene ID (Ensembl)" columns are used to find the proper gene symbol supported by Nirvana, which may or may not be the same as the gene symbol listed here.'),(0,i.kt)("h3",{id:"omim-api"},"OMIM API"),(0,i.kt)("p",null,"Nirvana retrieves the OMIM annotations from the ",(0,i.kt)("a",{parentName:"p",href:"https://www.omim.org/api"},"OMIM API"),' JSON responses. The "entry" handler is used to fetch all the annotations associated with a given OMIM gene. A sample JSON response from the API is provided there.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "omim": {\n    "version": "1.0",\n    "entryList": [\n      {\n        "entry": {\n          "prefix": "*",\n          "mimNumber": 100640,\n          "status": "live",\n          "titles": {\n            "preferredTitle": "ALDEHYDE DEHYDROGENASE 1 FAMILY, MEMBER A1; ALDH1A1",\n            "alternativeTitles": "ALDEHYDE DEHYDROGENASE 1; ALDH1;;\\nACETALDEHYDE DEHYDROGENASE 1;;\\nALDH, LIVER CYTOSOLIC;;\\nRETINAL DEHYDROGENASE 1; RALDH1"\n          },\n          "textSectionList": [\n            {\n              "textSection": {\n                "textSectionName": "description",\n                "textSectionTitle": "Description",\n                "textSectionContent": "The ALDH1A1 gene encodes a liver cytosolic isoform of acetaldehyde dehydrogenase ({EC 1.2.1.3}), an enzyme involved in the major pathway of alcohol metabolism after alcohol dehydrogenase (ADH, see {103700}). See also liver mitochondrial ALDH2 ({100650}), variation in which has been implicated in different responses to alcohol ingestion.\\n\\nALDH1 is associated with a low Km for NAD, a high Km for acetaldehyde, and is strongly inactivated by disulfiram. ALDH2 is associated with a high Km for NAD, and low Km for acetaldehyde, and is insensitive to inhibition by disulfiram ({4:Hsu et al., 1985})."\n              }\n            }\n          ],\n          "geneMap": {\n            "sequenceID": 7709,\n            "chromosome": 9,\n            "chromosomeSymbol": "9",\n            "chromosomeSort": 225,\n            "chromosomeLocationStart": 72900670,\n            "chromosomeLocationEnd": 72953052,\n            "transcript": "ENST00000297785.7",\n            "cytoLocation": "9q21",\n            "computedCytoLocation": "9q21.13",\n            "mimNumber": 100640,\n            "geneSymbols": "ALDH1A1",\n            "geneName": "Aldehyde dehydrogenase-1 family, member A1, soluble",\n            "mappingMethod": "REa, A",\n            "confidence": "P",\n            "mouseGeneSymbol": "Aldh1a1",\n            "mouseMgiID": "MGI:1353450",\n            "geneInheritance": null\n          },\n          "externalLinks": {\n            "geneIDs": "216",\n            "hgncID": "402",\n            "ensemblIDs": "ENSG00000165092,ENST00000297785.8",\n            "approvedGeneSymbols": "ALDH1A1",\n            "ncbiReferenceSequences": "1519246465",\n            "proteinSequences": "194378740,211947843,2183299,178400,119582947,119582948,178372,40807656,194375548,30582681,209402710,4262707,194739599,4261625,178394,261487497,16306661,21361176,32815082,118495,62089228",\n            "uniGenes": "Hs.76392",\n            "swissProtIDs": "P00352",\n            "decipherGene": false,\n            "umlsIDs": "C1412333",\n            "gtr": true,\n            "cmgGene": false,\n            "keggPathways": true,\n            "gwasCatalog": false,\n\n          }\n        }\n      },\n      {\n        "entry": {\n          "prefix": "*",\n          "mimNumber": 102560,\n          "status": "live",\n          "titles": {\n            "preferredTitle": "ACTIN, GAMMA-1; ACTG1",\n            "alternativeTitles": "ACTIN, GAMMA; ACTG;;\\nCYTOSKELETAL GAMMA-ACTIN;;\\nACTIN, CYTOPLASMIC, 2"\n          },\n          "textSectionList": [\n            {\n              "textSection": {\n                "textSectionName": "description",\n                "textSectionTitle": "Description",\n                "textSectionContent": "Actins are a family of highly conserved cytoskeletal proteins that play fundamental roles in nearly all aspects of eukaryotic cell biology. The ability of a cell to divide, move, endocytose, generate contractile force, and maintain shape is reliant upon functional actin-based structures. Actin isoforms are grouped according to expression patterns: muscle actins predominate in striated and smooth muscle (e.g., ACTA1, {102610}, and ACTA2, {102620}, respectively), whereas the 2 cytoplasmic nonmuscle actins, gamma-actin (ACTG1) and beta-actin (ACTB; {102630}), are found in all cells ({13:Sonnemann et al., 2006})."\n              }\n            }\n          ],\n          "geneMap": {\n            "sequenceID": 13666,\n            "chromosome": 17,\n            "chromosomeSymbol": "17",\n            "chromosomeSort": 947,\n            "chromosomeLocationStart": 81509970,\n            "chromosomeLocationEnd": 81512798,\n            "transcript": "ENST00000331925.7",\n            "cytoLocation": "17q25.3",\n            "computedCytoLocation": "17q25.3",\n            "mimNumber": 102560,\n            "geneSymbols": "ACTG1, DFNA20, DFNA26, BRWS2",\n            "geneName": "Actin, gamma-1",\n            "mappingMethod": "REa, A, Fd",\n            "confidence": "C",\n            "mouseGeneSymbol": "Actg1",\n            "mouseMgiID": "MGI:87906",\n            "geneInheritance": null,\n            "phenotypeMapList": [\n              {\n                "phenotypeMap": {\n                  "mimNumber": 102560,\n                  "phenotype": "Baraitser-Winter syndrome 2",\n                  "phenotypeMimNumber": 614583,\n                  "phenotypicSeriesNumber": "PS243310",\n                  "phenotypeMappingKey": 3,\n                  "phenotypeInheritance": "Autosomal dominant"\n                }\n              },\n              {\n                "phenotypeMap": {\n                  "mimNumber": 102560,\n                  "phenotype": "Deafness, autosomal dominant 20/26",\n                  "phenotypeMimNumber": 604717,\n                  "phenotypicSeriesNumber": "PS124900",\n                  "phenotypeMappingKey": 3,\n                  "phenotypeInheritance": "Autosomal dominant"\n                }\n              }\n            ]\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"Content from the OMIM API JSON response is reorganized as shown in the Nirvana ",(0,i.kt)("a",{parentName:"p",href:"#json-output"},"JSON Output")),(0,i.kt)("p",null,"Mappings between the Nirvana JSON output and OMIM JSON API are listed in the table below:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Nirvana JSON key chain"),(0,i.kt)("th",{parentName:"tr",align:"left"},"OMIM API JSON key chain"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"omim:mimNumber"),(0,i.kt)("td",{parentName:"tr",align:"left"},"omim:entryList:entry:mimNumber")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"omim:geneName"),(0,i.kt)("td",{parentName:"tr",align:"left"},"omim:entryList:entry:geneMap:geneName")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"omim:description"),(0,i.kt)("td",{parentName:"tr",align:"left"},"omim:entryList:entry:textSectionList:textSection:textSectionContent")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"omim:phenotypes:mimNumber"),(0,i.kt)("td",{parentName:"tr",align:"left"},"omim:entryList:entry:geneMap:phenotypeMapList:phenotypeMap:mimNumber")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"omim:phenotypes:phenotype"),(0,i.kt)("td",{parentName:"tr",align:"left"},"omim:entryList:entry:geneMap:phenotypeMapList:phenotypeMap:phenotype")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"omim:phenotypes:description"),(0,i.kt)("td",{parentName:"tr",align:"left"},"omim:entryList:entry:textSectionList:textSection:textSectionContent")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"omim:phenotypes:mapping"),(0,i.kt)("td",{parentName:"tr",align:"left"},"omim:entryList:entry:geneMap:phenotypeMapList:phenotypeMap:phenotypeMappingKey (",(0,i.kt)("a",{parentName:"td",href:"#mapping-key-to-content"},"see mapping below"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"omim:phenotypes:inheritances"),(0,i.kt)("td",{parentName:"tr",align:"left"},"omim:entryList:entry:geneMap:phenotypeMapList:phenotypeMap:phenotypeInheritance")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"omim:phenotypes:comments"),(0,i.kt)("td",{parentName:"tr",align:"left"},"omim:entryList:entry:geneMap:phenotypeMapList:phenotypeMap:phenotype (",(0,i.kt)("a",{parentName:"td",href:"#phenotype-character-to-comment"},"see mapping below"),")")))),(0,i.kt)("h4",{id:"mapping-key-to-content"},"Mapping key to content"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"disorder was positioned by mapping of the wild type gene"),(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"2")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"disease phenotype itself was mapped"),(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"3")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"molecular basis of the disorder is known"),(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"4")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"disorder is a chromosome deletion or duplication syndrome"),(0,i.kt)("br",null)),(0,i.kt)("h4",{id:"phenotype-character-to-comment"},"Phenotype character to comment"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"?")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"unconfirmed or possibly spurious mapping"),(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"["),"/",(0,i.kt)("inlineCode",{parentName:"p"},"]")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"nondiseases"),(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"{"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"}")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"contribute to susceptibility to multifactorial disorders or to susceptibility to infection"),(0,i.kt)("br",null)),(0,i.kt)("h3",{id:"remove-links-in-omim-descriptions"},"Remove links in OMIM descriptions"),(0,i.kt)("p",null,"There are different types of link in the OMIM description section. For example, in above JSON response, we have the description of MIM entry 100640:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"The ALDH1A1 gene encodes a liver cytosolic isoform of acetaldehyde dehydrogenase ({EC 1.2.1.3}), an enzyme involved in the major pathway of alcohol metabolism after alcohol dehydrogenase (ADH, see {103700}). See also liver mitochondrial ALDH2 ({100650}), variation in which has been implicated in different responses to alcohol ingestion.\\n\\nALDH1 is associated with a low Km for NAD, a high Km for acetaldehyde, and is strongly inactivated by disulfiram. ALDH2 is associated with a high Km for NAD, and low Km for acetaldehyde, and is insensitive to inhibition by disulfiram ({4:Hsu et al., 1985}).")),(0,i.kt)("p",null,"As the descriptions will be shown as plain text, we remove the curry brackets surrounding links and try to make the text still readable with minimal modifications. Briefly:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Links referring to another MIM entry (e.g. {100650}) will be removed. Any word(s) specifically associated with the removed link will also be removed. For example,  "(ADH, see {103700})" will become "(ADH)" after the process.'),(0,i.kt)("li",{parentName:"ul"},'Links referring to a literature reference will be processed to remove the internal index and curry brackets. For example, "{4:Hsu et al., 1985}" becomes "Hsu et al., 1985".'),(0,i.kt)("li",{parentName:"ul"},'All the other links will simple have their curry brackets removed. For example, "{EC 1.2.1.3}" becomes "EC 1.2.1.3".'),(0,i.kt)("li",{parentName:"ul"},'If the content within a pair of parentheses becomes empty after being processed, the parentheses need to be removed as well and its surrounding white spaces should be properly processed. For example,  "ALDH2 ({100650})," will become "ALDH2,".')),(0,i.kt)("p",null,"Here is a list of examples about how the description section supposed to be processed:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Original text"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Processed text"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"({516030}, {516040}, and {516050})"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"(e.g., D1, {168461}; D2, {123833}; D3, {123834})"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(e.g., D1; D2; D3)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"(desmocollins; see DSC2, {125645})"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(desmocollins; see DSC2)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"(e.g., see {102700}, {300755})"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"(ADH, see {103700}). See also liver mitochondrial ALDH2 ({100650})"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(ADH). See also liver mitochondrial ALDH2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"(see, e.g., CACNA1A; {601011})"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(see, e.g., CACNA1A)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"(e.g., GSTA1; {138359}), mu (e.g., {138350})"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(e.g., GSTA1), mu")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"(NFKB; see {164011})"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(NFKB)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"(see ISGF3G, {147574})"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(see ISGF3G)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"(DCK; {EC 2.7.1.74}; {125450})"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(DCK; EC 2.7.1.74)")))),(0,i.kt)("h2",{id:"json-output"},"JSON output"),(0,i.kt)(o.default,{mdxType:"JSON"}),(0,i.kt)("h2",{id:"building-the-supplementary-files"},"Building the supplementary files"),(0,i.kt)("p",null,"The first step in builing the OMIM ",(0,i.kt)("inlineCode",{parentName:"p"},".nga")," files is to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"SAUtils")," command's subcommand ",(0,i.kt)("inlineCode",{parentName:"p"},"downloadOMIM")," to download the necessary data. In order to download the data the user must possess an API key obtained from OMIM. This key has to be set as the environment variable ",(0,i.kt)("em",{parentName:"p"},"OmimApiKey"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"export OmimApiKey=<users-omim-api-key>\ndotnet NirvanaBuild/SAUtils.dll downloadOMIM\n---------------------------------------------------------------------------\nSAUtils                                             (c) 2021 Illumina, Inc.\nStromberg, Roy, Lajugie, Jiang, Li, and Kang                         3.15.0\n---------------------------------------------------------------------------\n\nUSAGE: dotnet SAUtils.dll downloadomim [options]\nDownload the OMIM gene annotation data\n\nOPTIONS:\n      --uga, -u <path>       universal gene archive path\n      --ref, -r <filename>   input reference filename\n      --out, -o <VALUE>      output directory\n      --help, -h             displays the help menu\n      --version, -v          displays the version\n\ndotnet NirvanaBuild/SAUtils.dll downloadOMIM --ref References/7/Homo_sapiens.GRCh38.Nirvana.dat --uga Cache/27/UGA.tsv.gz --out ExternalDataSources/OMIM/2021-06-14\n---------------------------------------------------------------------------\nSAUtils                                             (c) 2021 Illumina, Inc.\nStromberg, Roy, Lajugie, Jiang, Li, and Kang                         3.15.0\n---------------------------------------------------------------------------\n\nUnable to resolve gene symbol conflict for CD300H: Ensembl: [ENSG00000284690]: AC079325.2, Entrez Gene: [100130520]: LOC100130520\nUnable to resolve gene symbol conflict for STRIT1: Ensembl: [ENSG00000240045]: DWORF, Entrez Gene: [100507537]: LOC100507537\nUnable to resolve gene symbol conflict for WAKMAR2: Ensembl: [ENSG00000237499]: AL357060.2, Entrez Gene: [100130476]: LOC100130476\nUnable to resolve gene symbol conflict for PERCC1: Ensembl: [ENSG00000284395]: AL032819.3, Entrez Gene: [105371045]: LOC105371045\nUnable to resolve gene symbol conflict for LASTR: Ensembl: [ENSG00000242147]: AL365356.5, Entrez Gene: [105376382]: LOC105376382\nUnable to resolve gene symbol conflict for PRANCR: Ensembl: [ENSG00000257815]: LINC01481, Entrez Gene: [101928062]: LOC101928062\nUnable to resolve gene symbol conflict for THORLNC: Ensembl: [ENSG00000226856]: AC093901.1, Entrez Gene: [100506797]: LOC100506797\nGene Symbol Update Statistics\n============================================\n# of gene symbols already up-to-date:   15,952\n# of gene symbols updated:              330\n# of genes where both IDs are null:     0\n# of gene symbols not in cache:         148\n# of resolved gene symbol conflicts:    15\n# of unresolved gene symbol conflicts:  7\n\nTime: 00:02:38.2\n")),(0,i.kt)("p",null,"Once the download has succeeded, the ",(0,i.kt)("inlineCode",{parentName:"p"},"nga")," files can be produced using the ",(0,i.kt)("inlineCode",{parentName:"p"},"SAUtils")," command's subcommand ",(0,i.kt)("inlineCode",{parentName:"p"},"omim"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"dotnet NirvanaBuild/SAUtils.dll omim\n---------------------------------------------------------------------------\nSAUtils                                             (c) 2021 Illumina, Inc.\nStromberg, Roy, Lajugie, Jiang, Li, and Kang                         3.15.0\n---------------------------------------------------------------------------\n\nUSAGE: dotnet SAUtils.dll omim [options]\nCreates a gene annotation database from OMIM data\n\nOPTIONS:\n      --m2g, -m <VALUE>      MimToGeneSymbol tsv file\n      --json, -j <VALUE>     OMIM entry json file\n      --out, -o <VALUE>      output directory\n      --help, -h             displays the help menu\n      --version, -v          displays the version\n\n\ndotnet NirvanaBuild/SAUtils.dll omim --m2g ExternalDataSources/OMIM/2021-06-14/MimToGeneSymbol.tsv --json ExternalDataSources/OMIM/2021-06-14/MimEntries.json.gz --out SupplementaryDatabase/63/\n---------------------------------------------------------------------------\nSAUtils                                             (c) 2021 Illumina, Inc.\nStromberg, Roy, Lajugie, Jiang, Li, and Kang                         3.15.0\n---------------------------------------------------------------------------\n\n\nTime: 00:00:04.5\n")))}c.isMDXComponent=!0}}]);