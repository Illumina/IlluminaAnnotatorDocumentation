"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[207],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(a),g=r,k=d["".concat(p,".").concat(g)]||d[g]||c[g]||i;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},87146:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"MNV Recomposition"},o=void 0,l={unversionedId:"core-functionality/mnv-recomposition",id:"version-3.21/core-functionality/mnv-recomposition",title:"MNV Recomposition",description:"Overview",source:"@site/versioned_docs/version-3.21/core-functionality/mnv-recomposition.md",sourceDirName:"core-functionality",slug:"/core-functionality/mnv-recomposition",permalink:"/NirvanaDocumentation/3.21/core-functionality/mnv-recomposition",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.21/core-functionality/mnv-recomposition.md",tags:[],version:"3.21",frontMatter:{title:"MNV Recomposition"},sidebar:"docs",previous:{title:"Gene Fusion Detection",permalink:"/NirvanaDocumentation/3.21/core-functionality/gene-fusions"},next:{title:"Variant IDs",permalink:"/NirvanaDocumentation/3.21/core-functionality/variant-ids"}},p=[{value:"Overview",id:"overview",children:[],level:2},{value:"Criteria",id:"criteria",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Multiple Samples",id:"multiple-samples",children:[],level:3},{value:"Phase Sets",id:"phase-sets",children:[{value:"Homozygous variants, same phase set",id:"homozygous-variants-same-phase-set",children:[],level:4},{value:"Mixing phased and unphased variants",id:"mixing-phased-and-unphased-variants",children:[],level:4},{value:"Variants in different phase sets",id:"variants-in-different-phase-sets",children:[],level:4},{value:"Unphased homozygous variants",id:"unphased-homozygous-variants",children:[],level:4},{value:"Homozygous variants are not commutative",id:"homozygous-variants-are-not-commutative",children:[],level:4}],level:3},{value:"Conflicting Genotypes",id:"conflicting-genotypes",children:[],level:3}],level:2},{value:"JSON Output",id:"json-output",children:[],level:2}],s={toc:p},m="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Most annotation tools handle variants independently. The problem with this approach is that nearby variants could affect the same codon leading to a very different annotation. For example, consider the following example (Danecek, 2017):"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(6632).Z})),(0,r.kt)("p",null,"When handled independently, the two variants (C\u2192T & G\u2192A) would be annotated as missense annotations. However, if we consider them together, the resulting MNV would yield a stop gain."),(0,r.kt)("p",null,"By default, Nirvana identifies these types of cases where two or more SNVs would affect the same codon. In addition, it's able to perform this operation on VCFs containing large numbers of samples (we've tested this on 2,500+ samples using the 1000 Genomes Project VCF files)."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Petr Danecek, Shane A McCarthy, ",(0,r.kt)("a",{parentName:"p",href:"https://academic.oup.com/bioinformatics/article-abstract/33/13/2037/3000373"},"BCFtools/csq: haplotype-aware variant consequences"),", Bioinformatics, Volume 33, Issue 13, 1 July 2017, Pages 2037\u20132039"))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Supported variant types")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"At the moment, ",(0,r.kt)("strong",{parentName:"p"},"Nirvana only supports recomposing multiple SNVs into an MNV"),". The Danecek paper makes a compelling case for supporting frameshifting variants paired with frame-restoring variants. We've also received requests for supporting the recomposition of an SNV with insertions and deletions. While this is something we've looked into, it represents functionality that many of our clinical customers are not yet comfortable with."))),(0,r.kt)("h2",{id:"criteria"},"Criteria"),(0,r.kt)("p",null,"Nirvana will recompose a set of SNVs if two or more SNVs are located in the same codon for any codon in any of the overlapping transcripts."),(0,r.kt)("p",null,"The following criteria must also be met for at least one sample:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Genotypes are provided for the VCF variants and all variants are in phase or homozygous variant."),(0,r.kt)("li",{parentName:"ol"},"All the available phase set IDs are the same (homozygous variants are available to all phase sets)"),(0,r.kt)("li",{parentName:"ol"},"The genotype ploidy for all the variants are the same."),(0,r.kt)("li",{parentName:"ol"},"No unsupported variant type (i.e. insertion or deletion) overlaps the recomposed variants"),(0,r.kt)("li",{parentName:"ol"},"The first and last base in at least one of the recomposed alleles must be non-reference.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"During variant recomposition, if two SNVs affect the same codon, it becomes the seed codon. If there are SNVs in the adjacent codons, they will be aggregated into the seed codon."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Three SNVs in two adjacent codons. The recomposed alternate allele is ",(0,r.kt)("inlineCode",{parentName:"p"},"ATAG"),":\n",(0,r.kt)("img",{src:a(14147).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Three SNVs in two adjacent codons (larger distance). The recomposed alternate allele is ",(0,r.kt)("inlineCode",{parentName:"p"},"ATATCC"),":\n",(0,r.kt)("img",{src:a(6583).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Nirvana can use ",(0,r.kt)("strong",{parentName:"p"},"multiple reading frames")," to aggregate the seed codon. In this example, the seed codon is highlighted in green. If we look at reading frame 1, we see that the T\u2192A variant occurs in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ACT")," codon. The adjacent codon to the left also has a variant C\u2192T. As a result, there can be up to four bases between SNVs when aggregating the flanking codons. The recomposed alternate allele is ",(0,r.kt)("inlineCode",{parentName:"p"},"TTCACATAGCACTCAC"),":\n",(0,r.kt)("img",{src:a(30171).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Nothing will be recomposed if there's no seed codon:\n",(0,r.kt)("img",{src:a(98838).Z})))),(0,r.kt)("h3",{id:"multiple-samples"},"Multiple Samples"),(0,r.kt)("p",null,"Recomposing variants while handling multiple samples can be complex. The recomposition criteria described above often leads to sample-specific recomposed variants. Here we show the recomposition of three variants with sample-specific criteria marked in bold:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"center"},"POS"),(0,r.kt)("th",{parentName:"tr",align:"center"},"REF"),(0,r.kt)("th",{parentName:"tr",align:"center"},"ALT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Sample 1"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Sample 2"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Sample 3"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"100"),(0,r.kt)("td",{parentName:"tr",align:"center"},"A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"C"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0","|","1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0","|","1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1","|","1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"101"),(0,r.kt)("td",{parentName:"tr",align:"center"},"C"),(0,r.kt)("td",{parentName:"tr",align:"center"},"G"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"0/1")),(0,r.kt)("td",{parentName:"tr",align:"center"},"1","|","1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0","|","0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"102"),(0,r.kt)("td",{parentName:"tr",align:"center"},"T"),(0,r.kt)("td",{parentName:"tr",align:"center"},"A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1","|","1"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},".")),(0,r.kt)("td",{parentName:"tr",align:"center"},"0","|","1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Recomposed Variant 1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"100"),(0,r.kt)("td",{parentName:"tr",align:"center"},"AC"),(0,r.kt)("td",{parentName:"tr",align:"center"},"AG, CG"),(0,r.kt)("td",{parentName:"tr",align:"center"},"."),(0,r.kt)("td",{parentName:"tr",align:"center"},"1","|","2"),(0,r.kt)("td",{parentName:"tr",align:"center"},".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Recomposed Variant 2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"100"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ACT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"CCT, CCA"),(0,r.kt)("td",{parentName:"tr",align:"center"},"."),(0,r.kt)("td",{parentName:"tr",align:"center"},"."),(0,r.kt)("td",{parentName:"tr",align:"center"},"1","|","2")))),(0,r.kt)("p",null,"In the example above, the heterozygous genotype in sample 1 at position 101 would prevent the MNVs from being recomposed. Similarly, the unknown genotype for sample 2 at position 102 would produce a smaller MNV than the one expressed for sample 3."),(0,r.kt)("h3",{id:"phase-sets"},"Phase Sets"),(0,r.kt)("h4",{id:"homozygous-variants-same-phase-set"},"Homozygous variants, same phase set"),(0,r.kt)("p",null,"Recomposed phase set becomes ",(0,r.kt)("inlineCode",{parentName:"p"},".")," since homozygous variants belong to all phase sets."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"center"},"POS"),(0,r.kt)("th",{parentName:"tr",align:"center"},"REF"),(0,r.kt)("th",{parentName:"tr",align:"center"},"ALT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Genotype"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Phase Set"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"100"),(0,r.kt)("td",{parentName:"tr",align:"center"},"A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"T"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1","|","1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"567")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"101"),(0,r.kt)("td",{parentName:"tr",align:"center"},"C"),(0,r.kt)("td",{parentName:"tr",align:"center"},"G"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1","|","1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"567")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Recomposed Variant"),(0,r.kt)("td",{parentName:"tr",align:"center"},"100"),(0,r.kt)("td",{parentName:"tr",align:"center"},"AC"),(0,r.kt)("td",{parentName:"tr",align:"center"},"TG"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1","|","1"),(0,r.kt)("td",{parentName:"tr",align:"center"},".")))),(0,r.kt)("h4",{id:"mixing-phased-and-unphased-variants"},"Mixing phased and unphased variants"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"center"},"POS"),(0,r.kt)("th",{parentName:"tr",align:"center"},"REF"),(0,r.kt)("th",{parentName:"tr",align:"center"},"ALT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Genotype"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Phase Set"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"100"),(0,r.kt)("td",{parentName:"tr",align:"center"},"A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"T"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0","|","1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"567")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"101"),(0,r.kt)("td",{parentName:"tr",align:"center"},"C"),(0,r.kt)("td",{parentName:"tr",align:"center"},"G"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1/1"),(0,r.kt)("td",{parentName:"tr",align:"center"},".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Recomposed Variant"),(0,r.kt)("td",{parentName:"tr",align:"center"},"100"),(0,r.kt)("td",{parentName:"tr",align:"center"},"AC"),(0,r.kt)("td",{parentName:"tr",align:"center"},"AG,TG"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1","|","2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"567")))),(0,r.kt)("h4",{id:"variants-in-different-phase-sets"},"Variants in different phase sets"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"center"},"POS"),(0,r.kt)("th",{parentName:"tr",align:"center"},"REF"),(0,r.kt)("th",{parentName:"tr",align:"center"},"ALT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Genotype"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Phase Set"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"100"),(0,r.kt)("td",{parentName:"tr",align:"center"},"A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"T"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0","|","1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"567")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"101"),(0,r.kt)("td",{parentName:"tr",align:"center"},"C"),(0,r.kt)("td",{parentName:"tr",align:"center"},"G"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1","|","1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"890")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Recomposed Variant"),(0,r.kt)("td",{parentName:"tr",align:"center"},"100"),(0,r.kt)("td",{parentName:"tr",align:"center"},"AC"),(0,r.kt)("td",{parentName:"tr",align:"center"},"AG,TG"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1","|","2"),(0,r.kt)("td",{parentName:"tr",align:"center"},".")))),(0,r.kt)("h4",{id:"unphased-homozygous-variants"},"Unphased homozygous variants"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"center"},"POS"),(0,r.kt)("th",{parentName:"tr",align:"center"},"REF"),(0,r.kt)("th",{parentName:"tr",align:"center"},"ALT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Genotype"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Phase Set"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"100"),(0,r.kt)("td",{parentName:"tr",align:"center"},"A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"T"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1/1"),(0,r.kt)("td",{parentName:"tr",align:"center"},".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"101"),(0,r.kt)("td",{parentName:"tr",align:"center"},"C"),(0,r.kt)("td",{parentName:"tr",align:"center"},"G"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1/1"),(0,r.kt)("td",{parentName:"tr",align:"center"},".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Recomposed Variant"),(0,r.kt)("td",{parentName:"tr",align:"center"},"100"),(0,r.kt)("td",{parentName:"tr",align:"center"},"AC"),(0,r.kt)("td",{parentName:"tr",align:"center"},"TG"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1/1"),(0,r.kt)("td",{parentName:"tr",align:"center"},".")))),(0,r.kt)("h4",{id:"homozygous-variants-are-not-commutative"},"Homozygous variants are not commutative"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"center"},"POS"),(0,r.kt)("th",{parentName:"tr",align:"center"},"REF"),(0,r.kt)("th",{parentName:"tr",align:"center"},"ALT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Genotype"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Phase Set"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"100"),(0,r.kt)("td",{parentName:"tr",align:"center"},"A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"T"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0","|","1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"567")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"101"),(0,r.kt)("td",{parentName:"tr",align:"center"},"C"),(0,r.kt)("td",{parentName:"tr",align:"center"},"G"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1","|","1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"567")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"102"),(0,r.kt)("td",{parentName:"tr",align:"center"},"G"),(0,r.kt)("td",{parentName:"tr",align:"center"},"T"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0","|","1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"890")))),(0,r.kt)("p",null,"In this example, the homozygous variant at position 101 cannot bridge the gap between other two variants since there could be a switching error between phase sets 567 & 890. As a result, we have to create two overlapping MNVs:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"center"},"POS"),(0,r.kt)("th",{parentName:"tr",align:"center"},"REF"),(0,r.kt)("th",{parentName:"tr",align:"center"},"ALT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Genotype"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Phase Set"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Recomposed Variant 1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"100"),(0,r.kt)("td",{parentName:"tr",align:"center"},"AC"),(0,r.kt)("td",{parentName:"tr",align:"center"},"AG, TG"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1","|","2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"567")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Recomposed Variant 2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"101"),(0,r.kt)("td",{parentName:"tr",align:"center"},"CG"),(0,r.kt)("td",{parentName:"tr",align:"center"},"GG, GT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1","|","2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"890")))),(0,r.kt)("h3",{id:"conflicting-genotypes"},"Conflicting Genotypes"),(0,r.kt)("h2",{id:"json-output"},"JSON Output"),(0,r.kt)("p",null,"Given the following VCF entries:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"#CHROM  POS ID  REF ALT QUAL    FILTER  INFO    FORMAT  S1  S2  S3\nchr1    12861477    .   T   C   .   PASS    .   GT:PS   0/0:.   0/0:.   0|1:12861477\nchr1    12861478    .   G   A   .   PASS    .   GT:PS   0/0:.   0/0:.   0|1:12861477\n")),(0,r.kt)("p",null,"Each original variant would be annotated as usual. The difference is that both will now have a ",(0,r.kt)("inlineCode",{parentName:"p"},"isDecomposedVariant")," flag set to true in addition to an entry in the ",(0,r.kt)("inlineCode",{parentName:"p"},"linkedVids")," field that points to the new MNV:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"{31-34,70-73}","{31-34,70-73}":!0},'{\n   "chromosome":"chr1",\n   "position":12861477,\n   "refAllele":"T",\n   "altAlleles":[\n      "C"\n   ],\n   "filters":[\n      "PASS"\n   ],\n   "samples":[\n      {\n         "genotype":"0/0",\n      },\n      {\n         "genotype":"0/0",\n      },\n      {\n         "genotype":"0|1",\n      }\n   ],\n   "variants":[\n      {\n         "vid":"1-12861477-T-C",\n         "chromosome":"chr1",\n         "begin":12861477,\n         "end":12861477,\n         "refAllele":"T",\n         "altAllele":"C",\n         "variantType":"SNV",\n         "isDecomposedVariant":true,\n         "linkedVids":[\n            "1-12861477-TG-CA"\n         ],\n         "hgvsg":"NC_000001.11:g.12861477T>C",\n         "transcripts":[ ... ]\n      }\n   ]\n},\n{\n   "chromosome":"chr1",\n   "position":12861478,\n   "refAllele":"G",\n   "altAlleles":[\n      "A"\n   ],\n   "filters":[\n      "PASS"\n   ],\n   "samples":[\n      {\n         "genotype":"0/0",\n      },\n      {\n         "genotype":"0/0",\n      },\n      {\n         "genotype":"0|1",\n      }\n   ],\n   "variants":[\n      {\n         "vid":"1-12861478-G-A",\n         "chromosome":"chr1",\n         "begin":12861478,\n         "end":12861478,\n         "refAllele":"G",\n         "altAllele":"A",\n         "variantType":"SNV",\n         "isDecomposedVariant":true,\n         "linkedVids":[\n            "1-12861477-TG-CA"\n         ],\n         "hgvsg":"NC_000001.11:g.12861478G>A",\n         "transcripts":[ ... ]\n      }\n   ]\n}\n')),(0,r.kt)("p",null,"The recomposed variant gets a separate entry where the ",(0,r.kt)("inlineCode",{parentName:"p"},"isRecomposedVariant")," flag is set to true and the ",(0,r.kt)("inlineCode",{parentName:"p"},"linkedVids")," field links to the constituent SNVs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"{32-36}","{32-36}":!0},'    {\n      "chromosome": "chr1",\n      "position": 12861477,\n      "refAllele": "TG",\n      "altAlleles": [\n        "CA"\n      ],\n      "filters": [\n        "PASS"\n      ],\n      "cytogeneticBand": "1p36.21",\n      "samples": [\n        {\n          "genotype": "0|0"\n        },\n        {\n          "genotype": "0|0"\n        },\n        {\n          "genotype": "0|1"\n        }\n      ],\n      "variants": [\n        {\n          "vid": "1-12861477-TG-CA",\n          "chromosome": "chr1",\n          "begin": 12861477,\n          "end": 12861478,\n          "refAllele": "TG",\n          "altAllele": "CA",\n          "variantType": "MNV",\n          "isRecomposedVariant": true,\n          "linkedVids": [\n            "1-12861477-T-C",\n            "1-12861478-G-A"\n          ],\n          "hgvsg": "NC_000001.11:g.12861477_12861478inv",\n          "transcripts":[ ... ]\n          ]\n        }\n      ]\n    },\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Recomposed QUAL, FILTER, and GQ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Although the example above does not demonstrate it, Nirvana tries to set the quality score, filter, and genotype quality (GQ) for the recomposed variant. The QUAL score is calculated to be the ",(0,r.kt)("strong",{parentName:"p"},"minimum")," QUAL score for all the constituent SNVs. The same method is used for the genotype quality (GQ) scores. For the ",(0,r.kt)("inlineCode",{parentName:"p"},"filters")," field, ",(0,r.kt)("inlineCode",{parentName:"p"},"PASS")," will be used if all constituent variants passed their filters, otherwise we set it to ",(0,r.kt)("inlineCode",{parentName:"p"},"FilteredVariantsRecomposed"),"."))))}d.isMDXComponent=!0},6632:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/BCFtools-csq-fig1a-a266b0be1c6d74f085fcacb2f433f750.png"},30171:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/multiple-reading-frames-19e896fe74a8781afdd1fa2539edff88.png"},98838:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/no-recomposition-b63eb855b0ed62b8ae331eafc538223d.png"},6583:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/three-SNVs-larger-separation-85b12d5bafd32ee312103a1b9b588720.png"},14147:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/three-SNVs-two-codons-bc45a465809b53d51dbfb32deaa6324a.png"}}]);