"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[5348],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(h,r(r({ref:n},u),{},{components:t})):a.createElement(h,r({ref:n},u))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},39646:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const o={title:"Annotating COVID-19"},r=void 0,l={unversionedId:"introduction/covid19",id:"version-3.21/introduction/covid19",title:"Annotating COVID-19",description:"The Nirvana development team is mainly focused on providing annotations for the human genome. This focus allows us to maximize our resources towards understanding human health.",source:"@site/versioned_docs/version-3.21/introduction/covid19.md",sourceDirName:"introduction",slug:"/introduction/covid19",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.21/introduction/covid19",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/versioned_docs/version-3.21/introduction/covid19.md",tags:[],version:"3.21",frontMatter:{title:"Annotating COVID-19"},sidebar:"docs",previous:{title:"Parsing Nirvana JSON",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.21/introduction/parsing-json"},next:{title:"1000 Genomes",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.21/data-sources/1000Genomes"}},s=[{value:"Getting Nirvana",id:"getting-nirvana",children:[],level:2},{value:"Downloading the COVID-19 data files",id:"downloading-the-covid-19-data-files",children:[],level:2},{value:"Download a COVID-19 VCF file",id:"download-a-covid-19-vcf-file",children:[],level:2},{value:"Running Nirvana",id:"running-nirvana",children:[],level:2},{value:"Investigating the Results",id:"investigating-the-results",children:[],level:2}],c={toc:s},u="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Nirvana development team is mainly focused on providing annotations for the human genome. This focus allows us to maximize our resources towards understanding human health."),(0,i.kt)("p",null,"However, nothing in our architecture prevents us from supporting other genomes. Earlier this year, we had an opportunity to put that statement to the test - we added support for annotating the ",(0,i.kt)("strong",{parentName:"p"},"SARS-CoV-2")," genome, the virus that causes the ",(0,i.kt)("strong",{parentName:"p"},"COVID-19")," disease."),(0,i.kt)("p",null,"In addition to normal transcript annotation, we also supply:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"allele frequencies"),(0,i.kt)("li",{parentName:"ul"},"protein domains")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"SARS-CoV-2 Galaxy Project")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The allele frequencies used by Nirvana were provided by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/galaxyproject/SARS-CoV-2"},"SARS-CoV-2 Galaxy Project"),". This is an international effort that provides ongoing analysis of COVID-19 using Galaxy, BioConda, and public research infrastructures."))),(0,i.kt)("h2",{id:"getting-nirvana"},"Getting Nirvana"),(0,i.kt)("p",null,"If you don't have Nirvana already, please consult our ",(0,i.kt)("a",{parentName:"p",href:"getting-started"},"Getting Started")," page first."),(0,i.kt)("h2",{id:"downloading-the-covid-19-data-files"},"Downloading the COVID-19 data files"),(0,i.kt)("p",null,"Here's ",(0,i.kt)("a",{parentName:"p",href:"https://illumina.github.io/NirvanaDocumentation/files/Covid19Data.zip"},"a data zip file")," containing new gene models, reference, and external data sources for SARS-CoV-2:"),(0,i.kt)("p",null,"Just go to the directory that contains your Nirvana ",(0,i.kt)("inlineCode",{parentName:"p"},"Data")," directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/Nirvana\ncurl -O https://illumina.github.io/NirvanaDocumentation/files/Covid19Data.zip\nunzip Covid19Data.zip\n")),(0,i.kt)("h2",{id:"download-a-covid-19-vcf-file"},"Download a COVID-19 VCF file"),(0,i.kt)("p",null,"Here's ",(0,i.kt)("a",{parentName:"p",href:"https://illumina.github.io/NirvanaDocumentation/files/Covid19Mutations.vcf.gz"},"a COVID-19 VCF file")," you can play around with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O https://illumina.github.io/NirvanaDocumentation/files/Covid19Mutations.vcf.gz\n")),(0,i.kt)("h2",{id:"running-nirvana"},"Running Nirvana"),(0,i.kt)("p",null,"Once you have downloaded the data sets, use the following command to annotate your VCF:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet bin/Release/netcoreapp2.1/Nirvana.dll \\\n     -c Data/Cache/SARS-CoV-2/SARS-CoV-2 \\\n     --sd Data/SupplementaryAnnotation/SARS-CoV-2 \\\n     -r Data/References/SARS-CoV-2.ASM985889v3.dat \\\n     -i Covid19Mutations.vcf.gz \\\n     -o Covid19Mutations\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"-c")," argument specifies the cache prefix"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"--sd")," argument specifies the supplementary annotation directory"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"-r")," argument specifies the compressed reference path"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"-i")," argument specifies the input VCF path"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"-o")," argument specifies the output filename prefix")),(0,i.kt)("p",null,"When running Nirvana, performance metrics are shown as it evaluates each chromosome in the input VCF file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"---------------------------------------------------------------------------\nNirvana                                             (c) 2020 Illumina, Inc.\nStromberg, Roy, Lajugie, Jiang, Li, and Kang                         3.12.0\n---------------------------------------------------------------------------\n\nInitialization                                         Time     Positions/s\n---------------------------------------------------------------------------\nCache                                               00:00:00.0\nSA Position Scan                                    00:00:00.0         1763\n\nReference                                Preload    Annotation   Variants/s\n---------------------------------------------------------------------------\nNC_045512                               00:00:00.0  00:00:00.1          173\n\nSummary                                                Time         Percent\n---------------------------------------------------------------------------\nInitialization                                      00:00:00.0        2.0 %\nPreload                                             00:00:00.0        0.3 %\nAnnotation                                          00:00:00.1        6.0 %\n\nTime: 00:00:01.5\n")),(0,i.kt)("p",null,"The output will be a JSON file called ",(0,i.kt)("inlineCode",{parentName:"p"},"Covid19Mutations.json.gz"),". Here's ",(0,i.kt)("a",{parentName:"p",href:"https://illumina.github.io/NirvanaDocumentation/files/Covid19Mutations.json.gz"},"the full JSON file"),"."),(0,i.kt)("h2",{id:"investigating-the-results"},"Investigating the Results"),(0,i.kt)("p",null,"Here's an example of what a COVID-19 variant looks like in the JSON output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "chromosome":"NC_045512.2",\n   "position":27323,\n   "refAllele":"C",\n   "altAlleles":[\n      "T"\n   ],\n   "filters":[\n      "PASS"\n   ],\n   "proteinDomains":[\n      {\n         "start":27202,\n         "end":27384,\n         "proteinId":"YP_009724394.1",\n         "domainId":"cl13556",\n         "domainName":"Sars6 super family",\n         "reciprocalOverlap":0.00546,\n         "annotationOverlap":0.00546\n      }\n   ],\n   "variants":[\n      {\n         "vid":"NC_045512.2-27323-C-T",\n         "chromosome":"NC_045512.2",\n         "begin":27323,\n         "end":27323,\n         "refAllele":"C",\n         "altAllele":"T",\n         "variantType":"SNV",\n         "hgvsg":"NC_045512.2:g.27323C>T",\n         "alleleFrequency":{\n            "refAllele":"C",\n            "altAllele":"T",\n            "allAc":8,\n            "allAn":1058,\n            "allAf":0.007561\n         },\n         "transcripts":[\n            {\n               "transcript":"YP_009724394.1",\n               "source":"RefSeq",\n               "bioType":"protein_coding",\n               "codons":"tCt/tTt",\n               "aminoAcids":"S/F",\n               "cdnaPos":"122",\n               "cdsPos":"122",\n               "exons":"1/1",\n               "proteinPos":"41",\n               "geneId":"43740572",\n               "hgnc":"ORF6",\n               "consequence":[\n                  "missense_variant"\n               ],\n               "hgvsc":"YP_009724394.1:c.122C>T",\n               "hgvsp":"YP_009724394.1:p.(Ser41Phe)",\n               "proteinId":"YP_009724394.1"\n            },\n            {\n               "transcript":"YP_009724395.1",\n               "source":"RefSeq",\n               "bioType":"protein_coding",\n               "geneId":"43740573",\n               "hgnc":"ORF7a",\n               "consequence":[\n                  "upstream_gene_variant"\n               ],\n               "proteinId":"YP_009724395.1"\n            }\n         ]\n      }\n   ]\n}\n')))}p.isMDXComponent=!0}}]);