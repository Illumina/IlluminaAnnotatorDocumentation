"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[1987],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},97079:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const r={title:"Gene Fusion Detection"},o=void 0,l={unversionedId:"core-functionality/gene-fusions",id:"version-3.2.5/core-functionality/gene-fusions",title:"Gene Fusion Detection",description:"Overview",source:"@site/versioned_docs/version-3.2.5/core-functionality/gene-fusions.md",sourceDirName:"core-functionality",slug:"/core-functionality/gene-fusions",permalink:"/NirvanaDocumentation/3.2.5/core-functionality/gene-fusions",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.2.5/core-functionality/gene-fusions.md",tags:[],version:"3.2.5",frontMatter:{title:"Gene Fusion Detection"},sidebar:"version-3.2.5/docs",previous:{title:"Variant IDs",permalink:"/NirvanaDocumentation/3.2.5/core-functionality/variant-ids"}},s=[{value:"Overview",id:"overview",children:[],level:2},{value:"Approach",id:"approach",children:[{value:"Variant Types",id:"variant-types",children:[],level:3},{value:"Criteria",id:"criteria",children:[],level:3}],level:2},{value:"ETV6/RUNX1 Example",id:"etv6runx1-example",children:[{value:"VCF",id:"vcf",children:[{value:"Interpreting translocation breakends",id:"interpreting-translocation-breakends",children:[],level:4},{value:"Visualization",id:"visualization",children:[],level:4}],level:3},{value:"JSON Output",id:"json-output",children:[{value:"Consequences",id:"consequences",children:[],level:4},{value:"Introns &amp; Exons",id:"introns--exons",children:[],level:4},{value:"HGVS coding notation",id:"hgvs-coding-notation",children:[],level:4}],level:3}],level:2}],c={toc:s},p="wrapper";function d(e){let{components:n,...r}=e;return(0,i.kt)(p,(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Gene fusions often result from large genomic rearrangements such as structural variants. While WGS secondary analysis pipelines typically contain alignment and variant calling stages, very few of them contain dedicated gene fusion callers. When they are included, they are usually associated with RNA-Seq pipelines where gene fusions can be readily observed."),(0,i.kt)("p",null,"Since gene fusions are frequently observed in cancer and since many sequencing experiments do not include paired RNA-Seq data, we have added gene fusion detection and annotation to Nirvana."),(0,i.kt)("p",null,"The rich diversity in gene fusion architectures and their likely mechanisms can be seen below:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(45901).Z})),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Kumar-Sinha, C., Kalyana-Sundaram, S. & Chinnaiyan, A.M. ",(0,i.kt)("a",{parentName:"p",href:"https://genomemedicine.biomedcentral.com/articles/10.1186/s13073-015-0252-1"},"Landscape of gene fusions in epithelial cancers: seq and ye shall find"),". Genome Med 7, 129 (2015)"))),(0,i.kt)("h2",{id:"approach"},"Approach"),(0,i.kt)("p",null,"Nirvana uses structural variant calls to evaluate if they form either putative intra-chromosomal or inter-chromosomal gene fusions. "),(0,i.kt)("p",null,"For each originating transcript, we report the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"originating intron or exon number"),(0,i.kt)("li",{parentName:"ul"},"for each partner transcript fused with the originating transcript, we report:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"HGVS coding notation"),(0,i.kt)("li",{parentName:"ul"},"partner intron or exon number")))),(0,i.kt)("h3",{id:"variant-types"},"Variant Types"),(0,i.kt)("p",null,"Specifically we can identify gene fusions from the following structural variant types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"deletions (",(0,i.kt)("inlineCode",{parentName:"li"},"<DEL>"),")"),(0,i.kt)("li",{parentName:"ul"},"tandem_duplications (",(0,i.kt)("inlineCode",{parentName:"li"},"<DUP:TANDEM>"),")"),(0,i.kt)("li",{parentName:"ul"},"inversions (",(0,i.kt)("inlineCode",{parentName:"li"},"<INV>"),")"),(0,i.kt)("li",{parentName:"ul"},"translocation breakpoints (",(0,i.kt)("inlineCode",{parentName:"li"},"AAAAAAAAAAAAAAAAAATTAGTCAGGCAC[chr3:153444911["),") ")),(0,i.kt)("h3",{id:"criteria"},"Criteria"),(0,i.kt)("p",null,"The following criteria must be met for Nirvana to identify a gene fusion:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Both transcripts must possess a coding region"),(0,i.kt)("li",{parentName:"ol"},"After accounting for genomic rearrangements, both transcripts must have the same orientation"),(0,i.kt)("li",{parentName:"ol"},"Both transcripts must be from the same transcript source (i.e. we won't mix and match between RefSeq and Ensembl transcripts)"),(0,i.kt)("li",{parentName:"ol"},"Both transcripts must belong to different genes"),(0,i.kt)("li",{parentName:"ol"},"Both transcripts cannot have a coding region that already overlaps without the variant (i.e. in cases where two genes naturally overlap, we don't want to call a gene fusion)"),(0,i.kt)("li",{parentName:"ol"},"The coding regions from the two genes must overlap\n:::")),(0,i.kt)("h2",{id:"etv6runx1-example"},"ETV6/RUNX1 Example"),(0,i.kt)("p",null,"ETV6/RUNX1 is the most common gene fusion in childhood B-cell precursor acute lymphoblastic leukemia (ALL). Patients with this translocation are associated with a good prognosis and excellent response to treatment."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Sun C., Chang L., Zhu X. ",(0,i.kt)("a",{parentName:"p",href:"https://www.oncotarget.com/article/16367/text/"},"Pathogenesis of ETV6/RUNX1-positive childhood acute lymphoblastic leukemia and mechanisms underlying its relapse"),". Oncotarget. 2017; 8: 35445-35459"))),(0,i.kt)("h3",{id:"vcf"},"VCF"),(0,i.kt)("p",null,"Here's a simplified representation of the translocation breakends called by the Manta structural variant caller:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"##fileformat=VCFv4.1\n#CHROM  POS     ID      REF     ALT     QUAL    FILTER  INFO\nchr12   12026270    .   C   [chr21:36420865[C   .   PASS    SVTYPE=BND\nchr12   12026305    .   A   A]chr21:36420571]   .   PASS    SVTYPE=BND\nchr21   36420571    .   C   C]chr12:12026305]   .   PASS    SVTYPE=BND\nchr21   36420865    .   C   [chr12:12026270[C   .   PASS    SVTYPE=BND\n")),(0,i.kt)("h4",{id:"interpreting-translocation-breakends"},"Interpreting translocation breakends"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"REF"),(0,i.kt)("th",{parentName:"tr",align:"left"},"ALT"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"s"),(0,i.kt)("td",{parentName:"tr",align:"left"},"t[p["),(0,i.kt)("td",{parentName:"tr",align:"left"},"piece extending to the right of p is joined after t")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"s"),(0,i.kt)("td",{parentName:"tr",align:"left"},"t]p]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"reverse comp piece extending left of p is joined after t")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"s"),(0,i.kt)("td",{parentName:"tr",align:"left"},"]p]t"),(0,i.kt)("td",{parentName:"tr",align:"left"},"piece extending to the left of p is joined before t")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"s"),(0,i.kt)("td",{parentName:"tr",align:"left"},"[p[t"),(0,i.kt)("td",{parentName:"tr",align:"left"},"reverse comp piece extending right of p is joined before t")))),(0,i.kt)("h4",{id:"visualization"},"Visualization"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(87955).Z})),(0,i.kt)("h3",{id:"json-output"},"JSON Output"),(0,i.kt)("p",null,"The annotation for the first variant in the VCF looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{66,68-100,113,115-123}","{66,68-100,113,115-123}":!0},'    {\n      "chromosome": "chr12",\n      "position": 12026270,\n      "refAllele": "C",\n      "altAlleles": [\n        "[chr21:36420865[C"\n      ],\n      "filters": [\n        "PASS"\n      ],\n      "cytogeneticBand": "12p13.2",\n      "clingen": [\n        {\n          "chromosome": "12",\n          "begin": 173786,\n          "end": 34835837,\n          "variantType": "copy_number_gain",\n          "id": "nsv995956",\n          "clinicalInterpretation": "pathogenic",\n          "phenotypes": [\n            "Decreased calvarial ossification",\n            "Delayed gross motor development",\n            "Feeding difficulties",\n            "Frontal bossing",\n            "Morphological abnormality of the central nervous system",\n            "Patchy alopecia"\n          ],\n          "phenotypeIds": [\n            "HP:0002007",\n            "HP:0002011",\n            "HP:0002194",\n            "HP:0002232",\n            "HP:0005474",\n            "HP:0011968",\n            "MedGen:C0232466",\n            "MedGen:C1862862",\n            "MedGen:CN001816",\n            "MedGen:CN001820",\n            "MedGen:CN001989",\n            "MedGen:CN004852"\n          ],\n          "observedGains": 1,\n          "validated": true\n        }\n      ],\n      "variants": [\n        {\n          "vid": "12-12026270-C-[chr21:36420865[C",\n          "chromosome": "chr12",\n          "begin": 12026270,\n          "end": 12026270,\n          "isStructuralVariant": true,\n          "refAllele": "C",\n          "altAllele": "[chr21:36420865[C",\n          "variantType": "translocation_breakend",\n          "transcripts": [\n            {\n              "transcript": "ENST00000396373.4",\n              "source": "Ensembl",\n              "bioType": "protein_coding",\n              "introns": "5/7",\n              "geneId": "ENSG00000139083",\n              "hgnc": "ETV6",\n              "consequence": [\n                "transcript_variant",\n                "unidirectional_gene_fusion"\n              ],\n              "geneFusion": {\n                "intron": 5,\n                "fusions": [\n                  {\n                    "hgvsc": "RUNX1{ENST00000437180.1}:c.1_58+274_ETV6{ENST00000396373.4}:c.1009+3367_1359",\n                    "intron": 2\n                  },\n                  {\n                    "hgvsc": "RUNX1{ENST00000300305.3}:c.1_58+274_ETV6{ENST00000396373.4}:c.1009+3367_1359",\n                    "intron": 1\n                  },\n                  {\n                    "hgvsc": "RUNX1{ENST00000482318.1}:c.1_58+274_ETV6{ENST00000396373.4}:c.1009+3367_1359",\n                    "intron": 2\n                  },\n                  {\n                    "hgvsc": "RUNX1{ENST00000486278.2}:c.?_156195_ETV6{ENST00000396373.4}:c.1009+3367_1359",\n                    "intron": 2\n                  },\n                  {\n                    "hgvsc": "RUNX1{ENST00000455571.1}:c.1_58+274_ETV6{ENST00000396373.4}:c.1009+3367_1359",\n                    "intron": 2\n                  },\n                  {\n                    "hgvsc": "RUNX1{ENST00000475045.2}:c.1_58+274_ETV6{ENST00000396373.4}:c.1009+3367_1359",\n                    "intron": 11\n                  },\n                  {\n                    "hgvsc": "RUNX1{ENST00000416754.1}:c.1_58+274_ETV6{ENST00000396373.4}:c.1009+3367_1359",\n                    "intron": 2\n                  }\n                ]\n              },\n              "isCanonical": true,\n              "proteinId": "ENSP00000379658.3"\n            },\n            {\n              "transcript": "NM_001987.4",\n              "source": "RefSeq",\n              "bioType": "protein_coding",\n              "introns": "5/7",\n              "geneId": "2120",\n              "hgnc": "ETV6",\n              "consequence": [\n                "transcript_variant",\n                "unidirectional_gene_fusion"\n              ],\n              "geneFusion": {\n                "intron": 5,\n                "fusions": [\n                  {\n                    "hgvsc": "RUNX1{NM_001754.4}:c.1_58+274_ETV6{NM_001987.4}:c.1009+3367_1359",\n                    "intron": 2\n                  }\n                ]\n              },\n              "isCanonical": true,\n              "proteinId": "NP_001978.1"\n            }\n          ]\n        }\n      ]\n    }\n')),(0,i.kt)("h4",{id:"consequences"},"Consequences"),(0,i.kt)("p",null,"When a gene fusion is identified, we add the following Sequence Ontology consequence:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3}","{3}":!0},'              "consequence": [\n                "transcript_variant",\n                "unidirectional_gene_fusion"\n              ],\n')),(0,i.kt)("h4",{id:"introns--exons"},"Introns & Exons"),(0,i.kt)("p",null,"In this section we describe all the pairwise gene fusions that obey the criteria outlined above. In the case of ",(0,i.kt)("inlineCode",{parentName:"p"},"ENST00000396373.4"),", there 7 other Ensembl transcripts that would produce a gene fusion. For ",(0,i.kt)("inlineCode",{parentName:"p"},"NM_001987.4"),", there was only one transcript (",(0,i.kt)("inlineCode",{parentName:"p"},"NM_001754.4"),") that produce a gene fusion."),(0,i.kt)("p",null,"In each case, Nirvana outputs which intron or exon contained the breakpoint in both of the transcripts that form the gene fusion."),(0,i.kt)("h4",{id:"hgvs-coding-notation"},"HGVS coding notation"),(0,i.kt)("p",null,"Finally, Nirvana also describes the gene fusion using HGVS c. notation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3}","{3}":!0},'                "fusions": [\n                  {\n                    "hgvsc": "RUNX1{NM_001754.4}:c.1_58+274_ETV6{NM_001987.4}:c.1009+3367_1359",\n                    "intron": 2\n                  }\n')),(0,i.kt)("p",null,"This means that gene fusion uses CDS positions 1-58 from ",(0,i.kt)("inlineCode",{parentName:"p"},"NM_001754.4")," (RUNX1) and CDS positions 1009-1359 from ",(0,i.kt)("inlineCode",{parentName:"p"},"NM_001987.4")," (ETV6). ",(0,i.kt)("inlineCode",{parentName:"p"},"1009+3367")," indicates that the fusion occurred 3367 bp within intron 2."))}d.isMDXComponent=!0},87955:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/etv6-runx1-fusion-ec8f4312c9aca496bde0d6e2b1bbd50d.svg"},45901:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/gene-fusions-fig2-1cce8ac31b00465c8d36bdc47ec3309e.svg"}}]);