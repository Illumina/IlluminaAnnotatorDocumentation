"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[9496],{3905:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>h});var a=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var c=a.createContext({}),l=function(n){var e=a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},d=function(n){var e=l(n.components);return a.createElement(c.Provider,{value:e},n.children)},p="mdxType",g={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,c=n.parentName,d=s(n,["components","mdxType","originalType","parentName"]),p=l(t),m=i,h=p["".concat(c,".").concat(m)]||p[m]||g[m]||o;return t?a.createElement(h,r(r({ref:e},d),{},{components:t})):a.createElement(h,r({ref:e},d))}));function h(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s[p]="string"==typeof n?n:i,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5958:(n,e,t)=>{t.r(e),t.d(e,{contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(7462),i=(t(7294),t(3905));const o={title:"Parsing Nirvana JSON"},r=void 0,s={unversionedId:"introduction/parsing-json",id:"version-3.18/introduction/parsing-json",title:"Parsing Nirvana JSON",description:"Why JSON?",source:"@site/versioned_docs/version-3.18/introduction/parsing-json.md",sourceDirName:"introduction",slug:"/introduction/parsing-json",permalink:"/NirvanaDocumentation/3.18/introduction/parsing-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.18/introduction/parsing-json.md",tags:[],version:"3.18",frontMatter:{title:"Parsing Nirvana JSON"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/NirvanaDocumentation/3.18/introduction/getting-started"},next:{title:"Annotating COVID-19",permalink:"/NirvanaDocumentation/3.18/introduction/covid19"}},c=[{value:"Why JSON?",id:"why-json",children:[{value:"What do other annotators use?",id:"what-do-other-annotators-use",children:[],level:3},{value:"What do we gain by using JSON?",id:"what-do-we-gain-by-using-json",children:[],level:3}],level:2},{value:"Parsing JSON",id:"parsing-json",children:[{value:"Organization",id:"organization",children:[],level:3},{value:"JASIX",id:"jasix",children:[],level:3}],level:2}],l={toc:c},d="wrapper";function p(n){let{components:e,...o}=n;return(0,i.kt)(d,(0,a.Z)({},l,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"why-json"},"Why JSON?"),(0,i.kt)("p",null,"VCF is a fantastic file format that was developed during the methods development activities within the 1000 Genomes Project. Prior to that, variant callers were outputting information into a variety of tab-delimited formats. Sometimes based on existing standards (like GFF), while most were proprietary. The primary intent of VCF files was to provide a human-readable, standardized representation of genetic variants. Similar to SAM/BAM files, VCF files used BCF files as their binary counterpart."),(0,i.kt)("p",null,"In the very beginning, Nirvana offered VCF output for annotation. While many variant annotators offer an option to output VCF files, one could argue if they are still human-readable. Here's an example from a VCF file produced by VEP v102:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"chr3    107840527   .   A   ATTTTTTTTT,AT,ATTTTTTTT 153.51  PASS    AN=6;MQ=244.10;\nSOR=1.739;QD=2.24;DP=57;AF=0.500,0.167,0.333;FS=0.000;AC=3,1,2;CSQ=TTTTTTTTT|\nintron_variant&non_coding_transcript_variant|MODIFIER|LINC00635|ENSG00000241469|\nTranscript|ENST00000608506.6|lncRNA||4/4|ENST00000608506.6:n.622-132_622-124dup|||||||\nrs35564779||-1||HGNC|HGNC:27184|||5|||||||||Ensembl|||||||||||||||||||||||||||||||||||\n|||||||||0.792|-0.109757,T|intron_variant&non_coding_transcript_variant|MODIFIER|\nLINC00635|ENSG00000241469|Transcript|ENST00000608506.6|lncRNA||4/4|\nENST00000608506.6:n.622-124dup|||||||rs35564779||-1||HGNC|HGNC:27184|||5|||||||||\nEnsembl||||||||||||||||||||||||||||||||||||||||||||0.932|-0.075622,TTTTTTTT|\nintron_variant&non_coding_transcript_variant|MODIFIER|LINC00635|ENSG00000241469|\nTranscript|ENST00000608506.6|lncRNA||4/4|ENST00000608506.6:n.622-131_622-124dup|||||||\nrs35564779||-1||HGNC|HGNC:27184|||5|||||||||Ensembl|||||||||||||||||||||||||||||||||||\n|||||||||0.808|-0.105490,TTTTTTTTT|intron_variant&non_coding_transcript_variant|\nMODIFIER|LINC00636|ENSG00000240423|Transcript|ENST00000649048.1|lncRNA||2/3|\nENST00000649048.1:n.179+5223_179+5231dup|||||||rs35564779||1||HGNC|HGNC:27702|||||||||\n|||Ensembl||||||||||||||||||||||||||||||||||||||||||||0.792|-0.109757, (etc.)\n")),(0,i.kt)("p",null,"Originally Nirvana used the same VCF notation as VEP uses above. The problem is that you end up with a large amount of text that is difficult to parse out by eye and requires the use of several delimiters to divide the information into useful segments. When we originally annotated this variant using VEP, ",(0,i.kt)("strong",{parentName:"p"},"this single variant used 488,909 bytes")," (almost \xbd MB). Surprisingly, we found that this broke some downstream tools that had preconceived notions of how long a single line could be in a VCF file."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Whitespace is not allowed in the VCF INFO field. This means that if you wanted to express a gene description from OMIM: ",(0,i.kt)("strong",{parentName:"p"},'"HRAS PROTOONCOGENE, GTPase; HRAS"'),", you would need to replace the spaces with something else like an underline. You would also need to hope that the VCF parser correctly handles embedded commas and semicolons in the description."))),(0,i.kt)("h3",{id:"what-do-other-annotators-use"},"What do other annotators use?"),(0,i.kt)("p",null,"Unfortunately, file format standardization has not made it all the way to variant annotation yet. The ",(0,i.kt)("a",{parentName:"p",href:"https://ga4gh-gks.github.io/variant_annotation.html"},"GA4GH Annotation group")," had many discussions on the topic several years ago. While a set of JSON schemas were created in that effort, there wasn't enough momentum to make this a new standard."),(0,i.kt)("p",null,"While there is some overlap in general file formats (JSON vs VCF vs TSV), none of those are compatible with each other. I.e. the VCF representation in VEP and snpEff is different just like the JSON schemas used by VEP, Nirvana, and GA4GH are different."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Source"),(0,i.kt)("th",{parentName:"tr",align:null},"Formats"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"VEP"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"JSON"),", TSV, VCF")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"snpEff"),(0,i.kt)("td",{parentName:"tr",align:null},"VCF")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Annovar"),(0,i.kt)("td",{parentName:"tr",align:null},"TSV")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Nirvana"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"JSON"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GA4GH"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"JSON"))))),(0,i.kt)("p",null,"We are interested in working together with others in the annotation space to develop a common annotation file format. Our belief is that this would accelerate methods development and benchmarking activities within annotation much in the same way the creation of SAM/BAM & VCF/BCF accelerated secondary analysis development."),(0,i.kt)("h3",{id:"what-do-we-gain-by-using-json"},"What do we gain by using JSON?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JSON files are better at showing hierarchical and other relational data. For example when we output ClinVar data, we often want to output several overlapping RCV entries (variants coupled with a disease phenotype). In each, we would want to output a list of phenotypes, clinical significance, etc. That is difficult to accomplish in a human-readable way using VCF files (without resorting to growing lexicon of delimiters)."),(0,i.kt)("li",{parentName:"ul"},"JSON files use JavaScript data types, while VCF INFO fields don't directly have data types. Instead, external metadata located in the VCF header is required to indicated the preferred data type."),(0,i.kt)("li",{parentName:"ul"},"JSON files are more verbose. Often this is seen as a negative, but compression largely compensates for this. Given the following excerpt from the VCF example above ",(0,i.kt)("inlineCode",{parentName:"li"},"HGNC:27184|||5|||||||||Ensembl")," it's not immediately obvious what the ",(0,i.kt)("inlineCode",{parentName:"li"},"5")," refers to (without checking the VCF header for details). With JSON files, you would always see a key name associated with a value."),(0,i.kt)("li",{parentName:"ul"},"JSON files can be natively imported into different search and analytics solutions like Elasticsearch and Snowflake."),(0,i.kt)("li",{parentName:"ul"},"JSON strings do not have any limitations on the use of whitespace.")),(0,i.kt)("h2",{id:"parsing-json"},"Parsing JSON"),(0,i.kt)("p",null,"Our JSON files are organized similarly to original VCF variants:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(6205).Z})),(0,i.kt)("p",null,"Nirvana JSON files can get very large and sometimes we receive feedback that a bioinformatician tried to read the JSON file into Python or R resulting in a program that ran out of available RAM. This happens because those parsers try to load everything into memory all at once."),(0,i.kt)("p",null,"To get around those issues, we play some clever tricks with newlines that enables our users to parse our JSON files quickly and efficiently."),(0,i.kt)("h3",{id:"organization"},"Organization"),(0,i.kt)("p",null,"Our JSON file is arranged as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the header section is located on the first line"),(0,i.kt)("li",{parentName:"ul"},"each line after that corresponds to a position (same as a row in a VCF file)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"until you reach the genes section ",(0,i.kt)("inlineCode",{parentName:"li"},'],"genes":[')))),(0,i.kt)("li",{parentName:"ul"},"each line after that corresponds to a gene",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"until you reach the end ",(0,i.kt)("inlineCode",{parentName:"li"},"]}"))))),(0,i.kt)("p",null,"Knowing this, you can load each position line as an independent JSON object and extract the information you need. "),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Jupyter Notebook")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To demonstrate this, we have put together a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Illumina/NirvanaDocumentation/blob/master/static/files/parse-nirvana-json-python.ipynb"},"Jupyter notebook demonstrating how to do this in Python")," and a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Illumina/NirvanaDocumentation/blob/master/static/files/parse-nirvana-json-r.ipynb"},"R version")," as well."))),(0,i.kt)("h3",{id:"jasix"},"JASIX"),(0,i.kt)("p",null,"One of the tools that we really like in the VCF ecosystem is ",(0,i.kt)("a",{parentName:"p",href:"https://dx.doi.org/10.1093%2Fbioinformatics%2Fbtq671"},"tabix"),". Unfortunately, tabix only works for tab-delimited file formats. As a result, we created a similar tool for Nirvana JSON files called JASIX."),(0,i.kt)("p",null,"Here's an example of how you might use JASIX:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet bin/Release/netcoreapp2.1/Jasix.dll -i dragen.json.gz -q chr1:942450-942455\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"-i")," argument specifies the Nirvana JSON path"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"-q")," argument specifies a genomic range ",(0,i.kt)("em",{parentName:"li"},"(you can use as many of these as you want)"))),(0,i.kt)("p",null,"JASIX also includes additional options for showing the Nirvana header or for extracting different sections (like the genes section)."),(0,i.kt)("p",null,"The output from JASIX is compliant JSON object shown in pretty-printed form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"positions":[\n{\n  "chromosome": "chr1",\n  "position": 942451,\n  "refAllele": "T",\n  "altAlleles": [\n    "C"\n  ],\n  "quality": 484.23,\n  "filters": [\n    "PASS"\n  ],\n  "cytogeneticBand": "1p36.33",\n  "samples": [\n    {\n      "genotype": "1/1",\n      "variantFrequencies": [\n        1\n      ],\n      "totalDepth": 21,\n      "genotypeQuality": 60,\n      "alleleDepths": [\n        0,\n        21\n      ]\n    },\n    {\n      "genotype": "1/1",\n      "variantFrequencies": [\n        1\n      ],\n      "totalDepth": 32,\n      "genotypeQuality": 93,\n      "alleleDepths": [\n        0,\n        32\n      ]\n    },\n    {\n      "genotype": "1/1",\n      "variantFrequencies": [\n        1\n      ],\n      "totalDepth": 36,\n      "genotypeQuality": 105,\n      "alleleDepths": [\n        0,\n        36\n      ]\n    }\n  ],\n  "variants": [\n    {\n      "vid": "1-942451-T-C",\n      "chromosome": "chr1",\n      "begin": 942451,\n      "end": 942451,\n      "refAllele": "T",\n      "altAllele": "C",\n      "variantType": "SNV",\n      "hgvsg": "NC_000001.11:g.942451T>C",\n      "phylopScore": -0.1,\n      "clinvar": [\n        {\n          "id": "VCV000836156.1",\n          "reviewStatus": "criteria provided, single submitter",\n          "significance": [\n            "uncertain significance"\n          ],\n          "refAllele": "T",\n          "altAllele": "T",\n          "lastUpdatedDate": "2020-08-20"\n        },\n        {\n          "id": "RCV001037211.1",\n          "variationId": 836156,\n          "reviewStatus": "criteria provided, single submitter",\n          "alleleOrigins": [\n            "germline"\n          ],\n          "refAllele": "T",\n          "altAllele": "T",\n          "phenotypes": [\n            "not provided"\n          ],\n          "medGenIds": [\n            "CN517202"\n          ],\n          "significance": [\n            "uncertain significance"\n          ],\n          "lastUpdatedDate": "2020-08-20",\n          "pubMedIds": [\n            "28492532"\n          ]\n        }\n      ],\n      "dbsnp": [\n        "rs6672356"\n      ],\n      "gnomad": {\n        "coverage": 25,\n        "allAf": 0.999855,\n        "allAn": 123742,\n        "allAc": 123724,\n        "allHc": 61853,\n        "afrAf": 0.999416,\n        "afrAn": 10278,\n        "afrAc": 10272,\n        "afrHc": 5133,\n        "amrAf": 0.99995,\n        "amrAn": 20008,\n        "amrAc": 20007,\n        "amrHc": 10003,\n        "easAf": 1,\n        "easAn": 6054,\n        "easAc": 6054,\n        "easHc": 3027,\n        "finAf": 1,\n        "finAn": 8696,\n        "finAc": 8696,\n        "finHc": 4348,\n        "nfeAf": 0.999899,\n        "nfeAn": 49590,\n        "nfeAc": 49585,\n        "nfeHc": 24790,\n        "asjAf": 1,\n        "asjAn": 7208,\n        "asjAc": 7208,\n        "asjHc": 3604,\n        "sasAf": 0.99967,\n        "sasAn": 18160,\n        "sasAc": 18154,\n        "sasHc": 9074,\n        "othAf": 1,\n        "othAn": 3748,\n        "othAc": 3748,\n        "othHc": 1874,\n        "maleAf": 0.9999,\n        "maleAn": 69780,\n        "maleAc": 69773,\n        "maleHc": 34883,\n        "femaleAf": 0.999796,\n        "femaleAn": 53962,\n        "femaleAc": 53951,\n        "femaleHc": 26970,\n        "controlsAllAf": 0.999815,\n        "controlsAllAn": 48654,\n        "controlsAllAc": 48645\n      },\n      "oneKg": {\n        "allAf": 1,\n        "afrAf": 1,\n        "amrAf": 1,\n        "easAf": 1,\n        "eurAf": 1,\n        "sasAf": 1,\n        "allAn": 5008,\n        "afrAn": 1322,\n        "amrAn": 694,\n        "easAn": 1008,\n        "eurAn": 1006,\n        "sasAn": 978,\n        "allAc": 5008,\n        "afrAc": 1322,\n        "amrAc": 694,\n        "easAc": 1008,\n        "eurAc": 1006,\n        "sasAc": 978\n      },\n      "primateAI": [\n        {\n          "hgnc": "SAMD11",\n          "scorePercentile": 0.87\n        }\n      ],\n      "revel": {\n        "score": 0.145\n      },\n      "topmed": {\n        "allAf": 0.999809,\n        "allAn": 125568,\n        "allAc": 125544,\n        "allHc": 62760\n      },\n      "transcripts": [\n        {\n          "transcript": "ENST00000420190.6",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "downstream_gene_variant"\n          ],\n          "proteinId": "ENSP00000411579.2"\n        },\n        {\n          "transcript": "ENST00000342066.7",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "codons": "Tgg/Cgg",\n          "aminoAcids": "W/R",\n          "cdnaPos": "1110",\n          "cdsPos": "1027",\n          "exons": "10/14",\n          "proteinPos": "343",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "missense_variant"\n          ],\n          "hgvsc": "ENST00000342066.7:c.1027T>C",\n          "hgvsp": "ENSP00000342313.3:p.(Trp343Arg)",\n          "polyPhenScore": 0,\n          "polyPhenPrediction": "benign",\n          "proteinId": "ENSP00000342313.3",\n          "siftScore": 1,\n          "siftPrediction": "tolerated"\n        },\n        {\n          "transcript": "ENST00000618181.4",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "codons": "Tgg/Cgg",\n          "aminoAcids": "W/R",\n          "cdnaPos": "732",\n          "cdsPos": "652",\n          "exons": "7/11",\n          "proteinPos": "218",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "missense_variant"\n          ],\n          "hgvsc": "ENST00000618181.4:c.652T>C",\n          "hgvsp": "ENSP00000480870.1:p.(Trp218Arg)",\n          "polyPhenScore": 0,\n          "polyPhenPrediction": "benign",\n          "proteinId": "ENSP00000480870.1",\n          "siftScore": 1,\n          "siftPrediction": "tolerated"\n        },\n        {\n          "transcript": "ENST00000622503.4",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "codons": "Tgg/Cgg",\n          "aminoAcids": "W/R",\n          "cdnaPos": "1110",\n          "cdsPos": "1030",\n          "exons": "10/14",\n          "proteinPos": "344",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "missense_variant"\n          ],\n          "hgvsc": "ENST00000622503.4:c.1030T>C",\n          "hgvsp": "ENSP00000482138.1:p.(Trp344Arg)",\n          "isCanonical": true,\n          "polyPhenScore": 0,\n          "polyPhenPrediction": "benign",\n          "proteinId": "ENSP00000482138.1",\n          "siftScore": 1,\n          "siftPrediction": "tolerated"\n        },\n        {\n          "transcript": "ENST00000618323.4",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "codons": "cTg/cCg",\n          "aminoAcids": "L/P",\n          "cdnaPos": "712",\n          "cdsPos": "632",\n          "exons": "8/12",\n          "proteinPos": "211",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "missense_variant"\n          ],\n          "hgvsc": "ENST00000618323.4:c.632T>C",\n          "hgvsp": "ENSP00000480678.1:p.(Leu211Pro)",\n          "polyPhenScore": 0,\n          "polyPhenPrediction": "unknown",\n          "proteinId": "ENSP00000480678.1",\n          "siftScore": 0.03,\n          "siftPrediction": "deleterious - low confidence"\n        },\n        {\n          "transcript": "ENST00000616016.4",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "codons": "ccT/ccC",\n          "aminoAcids": "P",\n          "cdnaPos": "944",\n          "cdsPos": "864",\n          "exons": "9/13",\n          "proteinPos": "288",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "synonymous_variant"\n          ],\n          "hgvsc": "ENST00000616016.4:c.864T>C",\n          "hgvsp": "ENST00000616016.4:c.864T>C(p.(Pro288=))",\n          "proteinId": "ENSP00000478421.1"\n        },\n        {\n          "transcript": "ENST00000618779.4",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "codons": "Tgg/Cgg",\n          "aminoAcids": "W/R",\n          "cdnaPos": "921",\n          "cdsPos": "841",\n          "exons": "9/13",\n          "proteinPos": "281",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "missense_variant"\n          ],\n          "hgvsc": "ENST00000618779.4:c.841T>C",\n          "hgvsp": "ENSP00000484256.1:p.(Trp281Arg)",\n          "polyPhenScore": 0,\n          "polyPhenPrediction": "benign",\n          "proteinId": "ENSP00000484256.1",\n          "siftScore": 1,\n          "siftPrediction": "tolerated"\n        },\n        {\n          "transcript": "ENST00000616125.4",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "codons": "Tgg/Cgg",\n          "aminoAcids": "W/R",\n          "cdnaPos": "783",\n          "cdsPos": "703",\n          "exons": "8/12",\n          "proteinPos": "235",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "missense_variant"\n          ],\n          "hgvsc": "ENST00000616125.4:c.703T>C",\n          "hgvsp": "ENSP00000484643.1:p.(Trp235Arg)",\n          "polyPhenScore": 0,\n          "polyPhenPrediction": "benign",\n          "proteinId": "ENSP00000484643.1",\n          "siftScore": 1,\n          "siftPrediction": "tolerated"\n        },\n        {\n          "transcript": "ENST00000620200.4",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "codons": "cTg/cCg",\n          "aminoAcids": "L/P",\n          "cdnaPos": "427",\n          "cdsPos": "347",\n          "exons": "5/9",\n          "proteinPos": "116",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "missense_variant"\n          ],\n          "hgvsc": "ENST00000620200.4:c.347T>C",\n          "hgvsp": "ENSP00000484820.1:p.(Leu116Pro)",\n          "polyPhenScore": 0,\n          "polyPhenPrediction": "unknown",\n          "proteinId": "ENSP00000484820.1",\n          "siftScore": 0.16,\n          "siftPrediction": "tolerated - low confidence"\n        },\n        {\n          "transcript": "ENST00000617307.4",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "codons": "Tgg/Cgg",\n          "aminoAcids": "W/R",\n          "cdnaPos": "867",\n          "cdsPos": "787",\n          "exons": "9/13",\n          "proteinPos": "263",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "missense_variant"\n          ],\n          "hgvsc": "ENST00000617307.4:c.787T>C",\n          "hgvsp": "ENSP00000482090.1:p.(Trp263Arg)",\n          "polyPhenScore": 0,\n          "polyPhenPrediction": "benign",\n          "proteinId": "ENSP00000482090.1",\n          "siftScore": 1,\n          "siftPrediction": "tolerated"\n        },\n        {\n          "transcript": "NM_152486.2",\n          "source": "RefSeq",\n          "bioType": "protein_coding",\n          "codons": "Cgg/Cgg",\n          "aminoAcids": "R",\n          "cdnaPos": "1107",\n          "cdsPos": "1027",\n          "exons": "10/14",\n          "proteinPos": "343",\n          "geneId": "148398",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "synonymous_variant"\n          ],\n          "hgvsc": "NM_152486.2:c.1027T>C",\n          "hgvsp": "NM_152486.2:c.1027T>C(p.(Arg343=))",\n          "isCanonical": true,\n          "proteinId": "NP_689699.2"\n        },\n        {\n          "transcript": "ENST00000341065.8",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "codons": "Tgg/Cgg",\n          "aminoAcids": "W/R",\n          "cdnaPos": "750",\n          "cdsPos": "751",\n          "exons": "8/12",\n          "proteinPos": "251",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "missense_variant"\n          ],\n          "hgvsc": "ENST00000341065.8:c.750T>C",\n          "hgvsp": "ENSP00000349216.4:p.(Trp251Arg)",\n          "polyPhenScore": 0,\n          "polyPhenPrediction": "benign",\n          "proteinId": "ENSP00000349216.4",\n          "siftScore": 1,\n          "siftPrediction": "tolerated"\n        },\n        {\n          "transcript": "ENST00000455979.1",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "codons": "Tgg/Cgg",\n          "aminoAcids": "W/R",\n          "cdnaPos": "507",\n          "cdsPos": "508",\n          "exons": "4/7",\n          "proteinPos": "170",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "missense_variant"\n          ],\n          "hgvsc": "ENST00000455979.1:c.507T>C",\n          "hgvsp": "ENSP00000412228.1:p.(Trp170Arg)",\n          "polyPhenScore": 0,\n          "polyPhenPrediction": "benign",\n          "proteinId": "ENSP00000412228.1",\n          "siftScore": 1,\n          "siftPrediction": "tolerated"\n        },\n        {\n          "transcript": "ENST00000478729.1",\n          "source": "Ensembl",\n          "bioType": "processed_transcript",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "downstream_gene_variant"\n          ]\n        },\n        {\n          "transcript": "ENST00000474461.1",\n          "source": "Ensembl",\n          "bioType": "retained_intron",\n          "cdnaPos": "389",\n          "exons": "3/4",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "non_coding_transcript_exon_variant"\n          ],\n          "hgvsc": "ENST00000474461.1:n.389T>C"\n        },\n        {\n          "transcript": "ENST00000466827.1",\n          "source": "Ensembl",\n          "bioType": "retained_intron",\n          "cdnaPos": "191",\n          "exons": "2/2",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "non_coding_transcript_exon_variant"\n          ],\n          "hgvsc": "ENST00000466827.1:n.191T>C"\n        },\n        {\n          "transcript": "ENST00000464948.1",\n          "source": "Ensembl",\n          "bioType": "retained_intron",\n          "cdnaPos": "286",\n          "exons": "1/2",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "non_coding_transcript_exon_variant"\n          ],\n          "hgvsc": "ENST00000464948.1:n.286T>C"\n        },\n        {\n          "transcript": "NM_015658.3",\n          "source": "RefSeq",\n          "bioType": "protein_coding",\n          "geneId": "26155",\n          "hgnc": "NOC2L",\n          "consequence": [\n            "downstream_gene_variant"\n          ],\n          "isCanonical": true,\n          "proteinId": "NP_056473.2"\n        },\n        {\n          "transcript": "ENST00000483767.5",\n          "source": "Ensembl",\n          "bioType": "retained_intron",\n          "geneId": "ENSG00000188976",\n          "hgnc": "NOC2L",\n          "consequence": [\n            "downstream_gene_variant"\n          ]\n        },\n        {\n          "transcript": "ENST00000327044.6",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "geneId": "ENSG00000188976",\n          "hgnc": "NOC2L",\n          "consequence": [\n            "downstream_gene_variant"\n          ],\n          "isCanonical": true,\n          "proteinId": "ENSP00000317992.6"\n        },\n        {\n          "transcript": "ENST00000477976.5",\n          "source": "Ensembl",\n          "bioType": "retained_intron",\n          "geneId": "ENSG00000188976",\n          "hgnc": "NOC2L",\n          "consequence": [\n            "downstream_gene_variant"\n          ]\n        },\n        {\n          "transcript": "ENST00000496938.1",\n          "source": "Ensembl",\n          "bioType": "processed_transcript",\n          "geneId": "ENSG00000188976",\n          "hgnc": "NOC2L",\n          "consequence": [\n            "downstream_gene_variant"\n          ]\n        }\n      ]\n    }\n  ]\n}\n]}\n')))}p.isMDXComponent=!0},6205:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/JSON-Layout-fc8e5c0cf4c8428981cd206fe9b6feac.svg"}}]);