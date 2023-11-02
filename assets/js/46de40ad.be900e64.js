"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[3082],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),m=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},v=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=m(t),v=l,u=s["".concat(p,".").concat(v)]||s[v]||c[v]||i;return t?a.createElement(u,r(r({ref:n},d),{},{components:t})):a.createElement(u,r({ref:n},d))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=v;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[s]="string"==typeof e?e:l,r[1]=o;for(var m=2;m<i;m++)r[m]=t[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},90297:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(87462),l=(t(67294),t(3905));const i={title:"Variant IDs"},r=void 0,o={unversionedId:"core-functionality/variant-ids",id:"version-3.2.5/core-functionality/variant-ids",title:"Variant IDs",description:"Overview",source:"@site/versioned_docs/version-3.2.5/core-functionality/variant-ids.md",sourceDirName:"core-functionality",slug:"/core-functionality/variant-ids",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.2.5/core-functionality/variant-ids",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/versioned_docs/version-3.2.5/core-functionality/variant-ids.md",tags:[],version:"3.2.5",frontMatter:{title:"Variant IDs"},sidebar:"version-3.2.5/docs",previous:{title:"Nirvana JSON File Format",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.2.5/file-formats/nirvana-json-file-format"},next:{title:"Gene Fusion Detection",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.2.5/core-functionality/gene-fusions"}},p=[{value:"Overview",id:"overview",children:[],level:2},{value:"SNV",id:"snv",children:[{value:"VCF Example",id:"vcf-example",children:[],level:4},{value:"Format",id:"format",children:[],level:4},{value:"VID Example",id:"vid-example",children:[],level:4}],level:2},{value:"Insertion",id:"insertion",children:[{value:"VCF Example",id:"vcf-example-1",children:[],level:4},{value:"Format",id:"format-1",children:[],level:4},{value:"VID Example",id:"vid-example-1",children:[],level:4}],level:2},{value:"Deletion",id:"deletion",children:[{value:"VCF Example",id:"vcf-example-2",children:[],level:4},{value:"Format",id:"format-2",children:[],level:4},{value:"VID Example",id:"vid-example-2",children:[],level:4}],level:2},{value:"Delins",id:"delins",children:[{value:"VCF Example",id:"vcf-example-3",children:[],level:4},{value:"Format",id:"format-3",children:[],level:4},{value:"VID Example",id:"vid-example-3",children:[],level:4}],level:2},{value:"MNV",id:"mnv",children:[{value:"VCF Example",id:"vcf-example-4",children:[],level:4},{value:"Format",id:"format-4",children:[],level:4},{value:"VID Example",id:"vid-example-4",children:[],level:4}],level:2},{value:"CNV",id:"cnv",children:[{value:"VCF Example",id:"vcf-example-5",children:[],level:4},{value:"Format",id:"format-5",children:[],level:4},{value:"VID Example",id:"vid-example-5",children:[],level:4}],level:2},{value:"Inversion (SV)",id:"inversion-sv",children:[{value:"VCF Example",id:"vcf-example-6",children:[],level:4},{value:"Format",id:"format-6",children:[],level:4},{value:"VID Example",id:"vid-example-6",children:[],level:4}],level:2},{value:"Translocation (SV)",id:"translocation-sv",children:[{value:"VCF Example",id:"vcf-example-7",children:[],level:4},{value:"Format",id:"format-7",children:[],level:4},{value:"VID Example",id:"vid-example-7",children:[],level:4}],level:2},{value:"Deletion (SV)",id:"deletion-sv",children:[{value:"VCF Example",id:"vcf-example-8",children:[],level:4},{value:"Format",id:"format-8",children:[],level:4},{value:"VID Example",id:"vid-example-8",children:[],level:4}],level:2},{value:"Insertion (SV)",id:"insertion-sv",children:[{value:"VCF Example",id:"vcf-example-9",children:[],level:4},{value:"Format",id:"format-9",children:[],level:4},{value:"VID Example",id:"vid-example-9",children:[],level:4}],level:2},{value:"Tandem Duplication (SV)",id:"tandem-duplication-sv",children:[{value:"VCF Example",id:"vcf-example-10",children:[],level:4},{value:"Format",id:"format-10",children:[],level:4},{value:"VID Example",id:"vid-example-10",children:[],level:4}],level:2}],m={toc:p},d="wrapper";function s(e){let{components:n,...t}=e;return(0,l.kt)(d,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Many downstream tools use a variant identifier to store annotation results. "),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Deprecated")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This initial variant ID (VID) scheme was designed to be parsimonious and was not meant to be used to reconstitute the original VCF variant. In later versions of Nirvana, we migrated to the identifier scheme used at the Broad Institute (with some extensions to handle structural variants)."))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Conventions")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"all chromosomes use Ensembl style notation (i.e. 22 instead of chr22)"),(0,l.kt)("li",{parentName:"ul"},"for a reference variant (i.e. no alt allele), replace the period (.) with the reference base"),(0,l.kt)("li",{parentName:"ul"},"padding bases are used, neither the reference nor alternate allele can be empty"),(0,l.kt)("li",{parentName:"ul"},"some large variant callers lazily output N for the reference allele. If this is the case, replace it with the true reference base")))),(0,l.kt)("h2",{id:"snv"},"SNV"),(0,l.kt)("h4",{id:"vcf-example"},"VCF Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    69224   .   A   C   .   .   .\n")),(0,l.kt)("h4",{id:"format"},"Format"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"chromosome"),":",(0,l.kt)("inlineCode",{parentName:"p"},"position"),":",(0,l.kt)("inlineCode",{parentName:"p"},"alternate allele")),(0,l.kt)("h4",{id:"vid-example"},"VID Example"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1:69224:C"))),(0,l.kt)("h2",{id:"insertion"},"Insertion"),(0,l.kt)("h4",{id:"vcf-example-1"},"VCF Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    69567   .   A   AT  .   .   .\n")),(0,l.kt)("h4",{id:"format-1"},"Format"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"chromosome"),":",(0,l.kt)("inlineCode",{parentName:"p"},"position after insertion"),":",(0,l.kt)("inlineCode",{parentName:"p"},"position before insertion"),":",(0,l.kt)("inlineCode",{parentName:"p"},"alternate allele OR MD5 hash")),(0,l.kt)("p",null,"If more than 32 bases are being inserted, the VID scheme uses an MD5 checksum instead"),(0,l.kt)("h4",{id:"vid-example-1"},"VID Example"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1:69568:69567:T")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1:69568:69567:B9ECE18C950AFBFA6B0FDBFA4FF731D3"))),(0,l.kt)("h2",{id:"deletion"},"Deletion"),(0,l.kt)("h4",{id:"vcf-example-2"},"VCF Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    136647  .   GG  G   .   .   .\n")),(0,l.kt)("h4",{id:"format-2"},"Format"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"chromosome"),":",(0,l.kt)("inlineCode",{parentName:"p"},"start position"),":",(0,l.kt)("inlineCode",{parentName:"p"},"end position")),(0,l.kt)("h4",{id:"vid-example-2"},"VID Example"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1:136645:136645"))),(0,l.kt)("h2",{id:"delins"},"Delins"),(0,l.kt)("h4",{id:"vcf-example-3"},"VCF Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    965025  .   GCAGTGCATGGTGCTGTGAGATCAGCATGTGTG   GTGCAGTGCATGGTGCTGTGAGATCAGCA   .   .   .\n")),(0,l.kt)("h4",{id:"format-3"},"Format"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"chromosome"),":",(0,l.kt)("inlineCode",{parentName:"p"},"start position"),":",(0,l.kt)("inlineCode",{parentName:"p"},"end position"),":",(0,l.kt)("inlineCode",{parentName:"p"},"inserted bases")),(0,l.kt)("p",null,"If more than 32 bases are being inserted, the VID scheme uses an MD5 checksum instead"),(0,l.kt)("h4",{id:"vid-example-3"},"VID Example"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1:965026:965057:TGCAGTGCATGGTGCTGTGAGATCAGCA")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1:965026:965057:5DC27E17BE0B0F184325DC8654E34F1F"))),(0,l.kt)("h2",{id:"mnv"},"MNV"),(0,l.kt)("h4",{id:"vcf-example-4"},"VCF Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    979210  .   TGG TTT .   .   .\n")),(0,l.kt)("h4",{id:"format-4"},"Format"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"chromosome"),":",(0,l.kt)("inlineCode",{parentName:"p"},"start position"),":",(0,l.kt)("inlineCode",{parentName:"p"},"end position"),":",(0,l.kt)("inlineCode",{parentName:"p"},"alternate allele")),(0,l.kt)("p",null,"If more than 32 bases are being inserted, the VID scheme uses an MD5 checksum instead"),(0,l.kt)("h4",{id:"vid-example-4"},"VID Example"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1:979211:979212:TT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1:979211:979212:DF1F3EDB9115ACB0A1E04209B7A9937B"))),(0,l.kt)("h2",{id:"cnv"},"CNV"),(0,l.kt)("h4",{id:"vcf-example-5"},"VCF Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    854895  .   N   <CN0>,<CN3> .   PASS    SVTYPE=CNV;END=861879;CNVLEN=6984;CIPOS=-291,291;CIEND=-291,291 GT:RC:BC:CN:MCC:MCCQ:QS:FT:DQ   1/2:165.40:12:3:3:16.80:16.71:PASS:.\nchr1    814866  .   N   <CNV>   4   q10;CLT10kb SVTYPE=CNV;END=824517   RC:BC:CN    214:7:4\n")),(0,l.kt)("h4",{id:"format-5"},"Format"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"chromosome"),":",(0,l.kt)("inlineCode",{parentName:"p"},"start position"),":",(0,l.kt)("inlineCode",{parentName:"p"},"end position"),":",(0,l.kt)("inlineCode",{parentName:"p"},'copy number or "CNV"')),(0,l.kt)("h4",{id:"vid-example-5"},"VID Example"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1:854896:861879:3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1:814867:824517:CNV"))),(0,l.kt)("h2",{id:"inversion-sv"},"Inversion (SV)"),(0,l.kt)("h4",{id:"vcf-example-6"},"VCF Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    17051724    .   C   <INV>   3070    MaxDepth    END=234912187;SVTYPE=INV;SVLEN=217860463    GT:GQ:PR:SR 0/1:3070:77,69:84,76\n")),(0,l.kt)("h4",{id:"format-6"},"Format"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"chromosome"),":",(0,l.kt)("inlineCode",{parentName:"p"},"start position"),":",(0,l.kt)("inlineCode",{parentName:"p"},"end position"),":",(0,l.kt)("inlineCode",{parentName:"p"},"Inverse")),(0,l.kt)("h4",{id:"vid-example-6"},"VID Example"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1:17051725:234912187:Inverse"))),(0,l.kt)("h2",{id:"translocation-sv"},"Translocation (SV)"),(0,l.kt)("h4",{id:"vcf-example-7"},"VCF Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    797265  .   G   G]chr8:245687]  55  PASS    SVTYPE=BND;CIPOS=0,31   GT:GQ:PR:SR 0/1:55:39,6:20,3\n")),(0,l.kt)("h4",{id:"format-7"},"Format"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"chromosome 1"),":",(0,l.kt)("inlineCode",{parentName:"p"},"breakpoint 1"),":",(0,l.kt)("inlineCode",{parentName:"p"},"orientation 1"),":",(0,l.kt)("inlineCode",{parentName:"p"},"chromosome 2"),":",(0,l.kt)("inlineCode",{parentName:"p"},"breakpoint 2"),":",(0,l.kt)("inlineCode",{parentName:"p"},"orientation 2")),(0,l.kt)("h4",{id:"vid-example-7"},"VID Example"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1:797265:+:8:245687:-"))),(0,l.kt)("h2",{id:"deletion-sv"},"Deletion (SV)"),(0,l.kt)("h4",{id:"vcf-example-8"},"VCF Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    2053194 .   G   <DEL>   38  PASS    END=2055480;SVTYPE=DEL;SVLEN=-2286;IMPRECISE;CIPOS=-143,144;CIEND=-102,102  GT:GQ:PR    0/1:38:3,5\n")),(0,l.kt)("h4",{id:"format-8"},"Format"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"chromosome"),":",(0,l.kt)("inlineCode",{parentName:"p"},"start position"),":",(0,l.kt)("inlineCode",{parentName:"p"},"end position")),(0,l.kt)("h4",{id:"vid-example-8"},"VID Example"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1:2053195:2055480"))),(0,l.kt)("h2",{id:"insertion-sv"},"Insertion (SV)"),(0,l.kt)("h4",{id:"vcf-example-9"},"VCF Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    1925144 .   G   <INS>   1439    PASS    END=1925144;SVTYPE=INS;CIPOS=0,14;CIEND=0,14    GT:GQ:PR:SR 1/1:72:2,7:0,33\n")),(0,l.kt)("h4",{id:"format-9"},"Format"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"chromosome"),":",(0,l.kt)("inlineCode",{parentName:"p"},"start position"),":",(0,l.kt)("inlineCode",{parentName:"p"},"end position"),":INS"),(0,l.kt)("h4",{id:"vid-example-9"},"VID Example"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1:1925145:1925144:INS"))),(0,l.kt)("h2",{id:"tandem-duplication-sv"},"Tandem Duplication (SV)"),(0,l.kt)("h4",{id:"vcf-example-10"},"VCF Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    2454149 .   G   <DUP:TANDEM>    976 MaxDepth    END=2454244;SVTYPE=DUP;SVLEN=95;CIPOS=0,10;CIEND=0,10   GT:GQ:PR:SR 0/1:976:6,0:80,52\n")),(0,l.kt)("h4",{id:"format-10"},"Format"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"chromosome"),":",(0,l.kt)("inlineCode",{parentName:"p"},"start position"),":",(0,l.kt)("inlineCode",{parentName:"p"},"end position"),":TDUP"),(0,l.kt)("h4",{id:"vid-example-10"},"VID Example"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1:2454150:2454244:TDUP"))))}s.isMDXComponent=!0}}]);