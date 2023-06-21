"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[8943],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),p=r,b=u["".concat(s,".").concat(p)]||u[p]||m[p]||i;return a?n.createElement(b,l(l({ref:t},d),{},{components:a})):n.createElement(b,l({ref:t},d))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},32466:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"SAUtils"},l=void 0,o={unversionedId:"utilities/sautils",id:"version-3.21/utilities/sautils",title:"SAUtils",description:"Overview",source:"@site/versioned_docs/version-3.21/utilities/sautils.mdx",sourceDirName:"utilities",slug:"/utilities/sautils",permalink:"/NirvanaDocumentation/3.21/utilities/sautils",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.21/utilities/sautils.mdx",tags:[],version:"3.21",frontMatter:{title:"SAUtils"},sidebar:"docs",previous:{title:"Jasix",permalink:"/NirvanaDocumentation/3.21/utilities/jasix"}},s=[{value:"Overview",id:"overview",children:[],level:2},{value:"The SAUtils Menu",id:"the-sautils-menu",children:[],level:2},{value:"Output File Formats",id:"output-file-formats",children:[],level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"SAUtils is a utility tool that creates binary supplementary annotation files (",(0,r.kt)("em",{parentName:"p"},".nsa, "),".gsa, ",(0,r.kt)("em",{parentName:"p"},".npd, "),".nsi, etc.) from original data files (e.g. VCFs, TSVs, XML, HTML, etc.) for various data sources (e.g. ClinVar, dbSNP, gnomAD, etc.). These binary files can be fed into the Nirvana Annotation engine to provide supplementary annotations in the output."),(0,r.kt)("h2",{id:"the-sautils-menu"},"The SAUtils Menu"),(0,r.kt)("p",null,"SAUtils supports building binary files for many data sources. The help menu lists them out in the form of sub-commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"dotnet Nirvana/bin/Release/net6.0/SAUtils.dll\n---------------------------------------------------------------------------\nSAUtils                                             (c) 2023 Illumina, Inc.\nStromberg, Roy, Platzer, Siddiqui, Ouyang, et al                     3.21.0\n---------------------------------------------------------------------------\n\nUtilities focused on supplementary annotation\n\nUSAGE: dotnet SAUtils.dll <command> [options]\n\nCOMMAND: AutoDownloadGenerate   auto download and generate Omim, Clinvar, Clingen\n         AaCon                  create AA conservation database\n         ancestralAllele        create Ancestral allele database from 1000Genomes data\n         ClinGen                create ClinGen database\n         Downloader             download ClinGen database\n         clinvar                create ClinVar database\n         concat                 merge multiple NSA files for the same data source having non-overlapping regions\n         Cosmic                 create COSMIC database\n         CosmicSv               create COSMIC SV database\n         CosmicFusion           create COSMIC gene fusion database\n         CosmicCGC              create COSMIC cancer gene census database\n         CustomGene             create custom gene annotation database\n         CustomVar              create custom variant annotation database\n         Dann                   create DANN database\n         Dbsnp                  create dbSNP database\n         Dgv                    create DGV database\n         DiseaseValidity        create disease validity database\n         DosageMapRegions       create dosage map regions\n         DosageSensitivity      create dosage sensitivity database\n         DownloadOmim           download OMIM database\n         ExtractMiniSA          extracts mini SA\n         ExtractMiniXml         extracts mini XML (ClinVar)\n         FilterSpliceNetTsv     filter SpliceNet predictions\n         FusionCatcher          create FusionCatcher database\n         Gerp                   create GERP conservation database\n         GlobalMinor            create global minor allele database\n         Gnomad                 create gnomAD database\n         Gnomad-lcr             create gnomAD low complexity region database\n         GnomadGeneScores       create gnomAD gene scores database\n         GnomadSV               create gnomAD structural variant database\n         Index                  edit an index file\n         MitoHet                create mitochondrial Heteroplasmy database\n         MitomapSvDb            create MITOMAP structural variants database\n         MitomapVarDb           create MITOMAP small variants database\n         Omim                   create OMIM database\n         OneKGen                create 1000 Genome small variants database\n         OneKGenSv              create 1000 Genomes structural variants database\n         OneKGenSvVcfToBed      convert 1000 Genomes structural variants VCF file into a BED-like file\n         PhyloP                 create PhyloP database\n         PrimateAi              create PrimateAI database\n         RefMinor               create Reference Minor database from 1000 Genome \n         RemapWithDbsnp         remap a VCF file given source and destination rsID mappings\n         Revel                  create REVEL database\n         SpliceAi               create SpliceAI database\n         TopMed                 create TOPMed database\n         Gme                    create GME Variome database\n         Decipher               create Decipher database\n")),(0,r.kt)("p",null,"You can get further detailed help for each sub-command by typing in the subcommand. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"dotnet Nirvana/bin/Release/net6.0/SAUtils.dll clinvar\n---------------------------------------------------------------------------\nSAUtils                                             (c) 2023 Illumina, Inc.\nStromberg, Roy, Platzer, Siddiqui, Ouyang, et al                     3.21.0\n---------------------------------------------------------------------------\n\nUSAGE: dotnet SAUtils.dll clinvar [options]\nCreates a supplementary database with ClinVar annotations\n\nOPTIONS:\n      --ref, -r <VALUE>      compressed reference sequence file\n      --rcv, -i <VALUE>      ClinVar Full release XML file\n      --vcv, -c <VALUE>      ClinVar Variation release XML file\n      --out, -o <VALUE>      output directory\n      --help, -h             displays the help menu\n      --version, -v          displays the version\n")),(0,r.kt)("p",null,"More detailed instructions about each sub-command can be found in documentation of respective data sources."),(0,r.kt)("h2",{id:"output-file-formats"},"Output File Formats"),(0,r.kt)("p",null,"The format of the binary file SAUtils produce depend on the type of annotation data represented in that file (e.g. small variant vs. structural variants vs. genes)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"File Extension"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".nsa"),(0,r.kt)("td",{parentName:"tr",align:null},"Small variant annotations (e.g. SNV, insertions, deletions, etc.)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".gsa"),(0,r.kt)("td",{parentName:"tr",align:null},"Compact variant annotations (e.g. SNV, insertions, deletions, etc.)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".idx"),(0,r.kt)("td",{parentName:"tr",align:null},"Index file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".nsi"),(0,r.kt)("td",{parentName:"tr",align:null},"Interval annotations (e.g. SV, CNVs, intervals)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".nga"),(0,r.kt)("td",{parentName:"tr",align:null},"Gene annotations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".npd"),(0,r.kt)("td",{parentName:"tr",align:null},"Conservation scores")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".rma"),(0,r.kt)("td",{parentName:"tr",align:null},"Reference Minor allele")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".gfs"),(0,r.kt)("td",{parentName:"tr",align:null},"Gene fusions source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".gfj"),(0,r.kt)("td",{parentName:"tr",align:null},"Gene fusions JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".schema"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON schema")))))}u.isMDXComponent=!0}}]);