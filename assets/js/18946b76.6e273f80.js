"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[3305,2630],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||l;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2833:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={},s={unversionedId:"data-sources/dbsnp-json",id:"data-sources/dbsnp-json",isDocsHomePage:!1,title:"dbsnp-json",description:"`json",source:"@site/docs/data-sources/dbsnp-json.md",sourceDirName:"data-sources",slug:"/data-sources/dbsnp-json",permalink:"/NirvanaDocumentation/data-sources/dbsnp-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/dbsnp-json.md",version:"current",frontMatter:{}},c=[],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"dbsnp":[\n   "rs1042821"\n]\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"dbsnp"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"dbSNP rsIDs")))))}m.isMDXComponent=!0},4624:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=n(2833),o=["components"],s={title:"dbSNP"},c={unversionedId:"data-sources/dbsnp",id:"data-sources/dbsnp",isDocsHomePage:!1,title:"dbSNP",description:"Overview",source:"@site/docs/data-sources/dbsnp.mdx",sourceDirName:"data-sources",slug:"/data-sources/dbsnp",permalink:"/NirvanaDocumentation/data-sources/dbsnp",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/dbsnp.mdx",version:"current",frontMatter:{title:"dbSNP"},sidebar:"docs",previous:{title:"COSMIC",permalink:"/NirvanaDocumentation/data-sources/cosmic"},next:{title:"FusionCatcher",permalink:"/NirvanaDocumentation/data-sources/fusioncatcher"}},d=[{value:"Overview",id:"overview",children:[]},{value:"VCF File",id:"vcf-file",children:[{value:"Example",id:"example",children:[]},{value:"Parsing",id:"parsing",children:[]}]},{value:"Known Issues",id:"known-issues",children:[]},{value:"Download URL",id:"download-url",children:[]},{value:"JSON Output",id:"json-output",children:[]}],m={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"dbSNP contains human single nucleotide variations, microsatellites, and small-scale insertions and deletions along with publication, population frequency, molecular consequence, and genomic and RefSeq mapping information for both common variations and clinical mutations."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Sherry, S.T., Ward, M. and Sirotkin, K. (1999) dbSNP\u2014Database for Single Nucleotide Polymorphisms and Other Classes of Minor Genetic Variation. ",(0,l.kt)("em",{parentName:"p"},"Genome Res."),", ",(0,l.kt)("strong",{parentName:"p"},"9"),", 677\u2013679."))),(0,l.kt)("h2",{id:"vcf-file"},"VCF File"),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"#CHROM  POS ID  REF ALT QUAL    FILTER  INFO\n1   10177   rs367896724 A   AC  .   .   RS=367896724;RSPOS=10177;dbSNPBuildID=138; \\ \n      SSR=0;SAO=0;VP=0x050000020005130026000200;GENEINFO=DDX11L1:100287102;WGT=1; \\\n      VC=DIV;R5;ASP;G5A;G5;KGPhase3;CAF=0.5747,0.4253;COMMON=1; \\\n      TOPMED=0.76728147298674821,0.23271852701325178\n")),(0,l.kt)("h3",{id:"parsing"},"Parsing"),(0,l.kt)("p",null,"From the VCF file, we're mainly interested in the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rsID")," from the ",(0,l.kt)("inlineCode",{parentName:"li"},"ID")," field"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CAF")," from the ",(0,l.kt)("inlineCode",{parentName:"li"},"INFO")," field")),(0,l.kt)("h4",{id:"global-allele-extraction"},"Global allele extraction"),(0,l.kt)("p",null,"The global major and minor alleles are extracted based on the frequency of the alleles provided in the CAF field. The global minor allele frequency is the second highest value of the CAF comma delimited field (ignoring '.' values). "),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tie Breaking: Global Major Allele")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If there are two candidates for global major and the reference allele is one of them, we prefer the reference allele."))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tie Breaking: Global Minor Allele")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If there are two candidates for global minor and the reference allele is one of them, we prefer the other allele. If the reference allele is not involved, they are chosen arbitrarily."))),(0,l.kt)("h4",{id:"equal-allele-frequency-example-2-alleles"},"Equal Allele Frequency Example (2 alleles)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    100 A   C   CAF=0.5,0.5\n")),(0,l.kt)("p",null,"We will select A to be the global major allele and C to be the global minor allele."),(0,l.kt)("h4",{id:"equal-allele-frequency-example-3-alleles"},"Equal Allele Frequency Example (3 alleles)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    100 A   C,T CAF=0.33,0.33,0.33\n")),(0,l.kt)("p",null,"We will select A to be the global major allele and either C or T is chosen (arbitrarily) to be the global minor allele."),(0,l.kt)("h4",{id:"equal-allele-frequency-in-alternate-alleles"},"Equal Allele Frequency in Alternate Alleles"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    100 A   C,T CAF=0.2,0.4,0.4\n")),(0,l.kt)("p",null,"We will select C or T to be arbitrarily assigned to be the global major or global minor allele."),(0,l.kt)("h4",{id:"equal-allele-frequency-between-reference--alternate-allele"},"Equal Allele Frequency Between Reference & Alternate Allele"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    100 A   C,T CAF=0.2,0.2,0.6\n")),(0,l.kt)("p",null,"We will select T to be the global major allele and C to be the global minor allele."),(0,l.kt)("h2",{id:"known-issues"},"Known Issues"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Known Issues")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If there are multiple entries with different CAF values for the same allele, we use the first CAF value."))),(0,l.kt)("h2",{id:"download-url"},"Download URL"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://ftp.ncbi.nih.gov/snp/organisms/"},"https://ftp.ncbi.nih.gov/snp/organisms/")),(0,l.kt)("h2",{id:"json-output"},"JSON Output"),(0,l.kt)(i.default,{mdxType:"JSON"}))}p.isMDXComponent=!0}}]);