(window.webpackJsonp=window.webpackJsonp||[]).push([[63,64],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(166)),c=n(84),i={title:"PhyloP"},l={unversionedId:"data-sources/phylop",id:"data-sources/phylop",isDocsHomePage:!1,title:"PhyloP",description:"Overview",source:"@site/docs/data-sources/phylop.mdx",slug:"/data-sources/phylop",permalink:"/NirvanaDocumentation/data-sources/phylop",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/phylop.mdx",version:"current",sidebar:"docs",previous:{title:"OMIM",permalink:"/NirvanaDocumentation/data-sources/omim"},next:{title:"Primate AI",permalink:"/NirvanaDocumentation/data-sources/primate-ai"}},s=[{value:"Overview",id:"overview",children:[]},{value:"WigFix File",id:"wigfix-file",children:[]},{value:"Download URL",id:"download-url",children:[]},{value:"JSON Output",id:"json-output",children:[]}],p={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"PhyloP (phylogenetic p-values) conservation scores are obtained from the ","[PHAST package]"," (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://compgen.bscb.cornell.edu/phast/"}),"http://compgen.bscb.cornell.edu/phast/"),") for multiple alignments of vertebrate genomes to the human genome. For GRCh38, the multiple alignments are against 19 mammals and for GRCh37, it is against 45 vertebrate genomes."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Publication")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Siepel A, Bejerano G, Pedersen JS, Hinrichs AS, Hou M, Rosenbloom K, Clawson H, Spieth J, Hillier LW, Richards S, et al. Evolutionarily conserved elements in vertebrate, insect, worm, and yeast genomes. ",Object(o.b)("strong",{parentName:"p"},"Genome Res. 2005")," Aug;15(8):1034-50.  (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.genome.org/cgi/doi/10.1101/gr.3715005"}),"http://www.genome.org/cgi/doi/10.1101/gr.3715005"),")"))),Object(o.b)("h2",{id:"wigfix-file"},"WigFix File"),Object(o.b)("p",null,"The data is provided in WigFix files which is a text file that provides conservation scores for contiguous intervals in the following format:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scss"}),"fixedStep chrom=chr1 start=10918 step=1\n0.064\n0.058\n0.064\n0.058\n0.064\n0.064\nfixedStep chrom=chr1 start=34045 step=1\n0.111\n0.100\n0.111\n0.111\n0.100\n0.111\n0.111\n0.111\n0.100\n0.111\n-1.636\n")),Object(o.b)("p",null,"We convert them to binary files with indexes for fast query. Note that these are scores for genomic positions and are reported only for SNVs."),Object(o.b)("h2",{id:"download-url"},"Download URL"),Object(o.b)("p",null,"GRCh37: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://hgdownload.cse.ucsc.edu/goldenpath/hg19/phyloP46way/vertebrate/"}),"http://hgdownload.cse.ucsc.edu/goldenpath/hg19/phyloP46way/vertebrate/")),Object(o.b)("p",null,"GRCh38: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://hgdownload.cse.ucsc.edu/goldenPath/hg38/phyloP20way/"}),"http://hgdownload.cse.ucsc.edu/goldenPath/hg38/phyloP20way/")),Object(o.b)("h2",{id:"json-output"},"JSON Output"),Object(o.b)("p",null,"Unlike other supplemetary datasources, phyloP scores are reported in the variants section."),Object(o.b)(c.default,{mdxType:"JSON"}))}u.isMDXComponent=!0},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(166)),c={},i={unversionedId:"data-sources/phylop-json",id:"data-sources/phylop-json",isDocsHomePage:!1,title:"phylop-json",description:"`json",source:"@site/docs/data-sources/phylop-json.md",slug:"/data-sources/phylop-json",permalink:"/NirvanaDocumentation/data-sources/phylop-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/phylop-json.md",version:"current"},l=[],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"variants":[\n   {\n      "vid":"2:48010488:A",\n      "chromosome":"chr2",\n      "begin":48010488,\n      "end":48010488,\n      "refAllele":"G",\n      "altAllele":"A",\n      "variantType":"SNV",\n      "phylopScore":0.459\n  }\n]  \n')),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Field"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Notes"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"phylopScore"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"float"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"range: -14.08 to 6.424")))))}p.isMDXComponent=!0}}]);