"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[7821],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>v});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,v=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(v,l(l({ref:t},p),{},{components:a})):n.createElement(v,l({ref:t},p))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},65717:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"Variant IDs"},l=void 0,o={unversionedId:"core-functionality/variant-ids",id:"version-3.21/core-functionality/variant-ids",title:"Variant IDs",description:"Overview",source:"@site/versioned_docs/version-3.21/core-functionality/variant-ids.md",sourceDirName:"core-functionality",slug:"/core-functionality/variant-ids",permalink:"/NirvanaDocumentation/3.21/core-functionality/variant-ids",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.21/core-functionality/variant-ids.md",tags:[],version:"3.21",frontMatter:{title:"Variant IDs"},sidebar:"docs",previous:{title:"MNV Recomposition",permalink:"/NirvanaDocumentation/3.21/core-functionality/mnv-recomposition"},next:{title:"Jasix",permalink:"/NirvanaDocumentation/3.21/utilities/jasix"}},s=[{value:"Overview",id:"overview",children:[],level:2},{value:"Small Variants",id:"small-variants",children:[{value:"VCF Examples",id:"vcf-examples",children:[],level:3},{value:"Format",id:"format",children:[],level:3},{value:"VID Examples",id:"vid-examples",children:[],level:3}],level:2},{value:"Translocation Breakends",id:"translocation-breakends",children:[{value:"VCF Example",id:"vcf-example",children:[],level:3},{value:"Format",id:"format-1",children:[],level:3},{value:"VID Example",id:"vid-example",children:[],level:3}],level:2},{value:"All Other Structural Variants",id:"all-other-structural-variants",children:[{value:"VCF Examples",id:"vcf-examples-1",children:[],level:3},{value:"Format",id:"format-2",children:[],level:3},{value:"VID Examples",id:"vid-examples-1",children:[],level:3}],level:2}],c={toc:s},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Many downstream tools use a variant identifier to store annotation results. We've standardized on using variant identifiers (VIDs) that originated from the notation used by the Broad Institute."),(0,r.kt)("p",null,"The Broad VID scheme is not only simple, but it has the advantage that a user could create a bare bones VCF entry from the information captured in the identifier. One of the limitations of the Broad VID scheme is that it does not define how to handle structural variants. Our VID scheme attempts to fill that gap."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Conventions")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"all chromosomes use Ensembl style notation (i.e. 22 instead of chr22)"),(0,r.kt)("li",{parentName:"ul"},"for a reference variant (i.e. no alt allele), replace the period (.) with the reference base"),(0,r.kt)("li",{parentName:"ul"},"padding bases are used, neither the reference nor alternate allele can be empty"),(0,r.kt)("li",{parentName:"ul"},"some large variant callers lazily output N for the reference allele. If this is the case, replace it with the true reference base")))),(0,r.kt)("h2",{id:"small-variants"},"Small Variants"),(0,r.kt)("h3",{id:"vcf-examples"},"VCF Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    66507   .   T   A   184.45  PASS    .\nchr1    66521   .   T   TATATA  144.53  PASS    .\nchr1    66572   .   GTA G,GTACTATATATTATA   45.45   PASS    .\n")),(0,r.kt)("h3",{id:"format"},"Format"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"chromosome"),"\u2014",(0,r.kt)("inlineCode",{parentName:"p"},"position"),"\u2014",(0,r.kt)("inlineCode",{parentName:"p"},"reference allele"),"\u2014",(0,r.kt)("inlineCode",{parentName:"p"},"alternate allele")),(0,r.kt)("h3",{id:"vid-examples"},"VID Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1-66507-T-A"),(0,r.kt)("li",{parentName:"ul"},"1-66521-T-TATATA"),(0,r.kt)("li",{parentName:"ul"},"1-66572-GTA-G"),(0,r.kt)("li",{parentName:"ul"},"1-66572-G-GTACTATATATTA")),(0,r.kt)("h2",{id:"translocation-breakends"},"Translocation Breakends"),(0,r.kt)("h3",{id:"vcf-example"},"VCF Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    2617277 .   A   AAAAAAAAAAAAAAAAAATTAGTCAGGCAC[chr3:153444911[  .   PASS    SVTYPE=BND\n")),(0,r.kt)("h3",{id:"format-1"},"Format"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"chromosome"),"\u2014",(0,r.kt)("inlineCode",{parentName:"p"},"position"),"\u2014",(0,r.kt)("inlineCode",{parentName:"p"},"reference allele"),"\u2014",(0,r.kt)("inlineCode",{parentName:"p"},"alternate allele")),(0,r.kt)("h3",{id:"vid-example"},"VID Example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1-2617277-A-AAAAAAAAAAAAAAAAAATTAGTCAGGCAC[chr3:153444911[")),(0,r.kt)("h2",{id:"all-other-structural-variants"},"All Other Structural Variants"),(0,r.kt)("h3",{id:"vcf-examples-1"},"VCF Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    1000    .   G   <ROH>   .   PASS    END=3001000;SVTYPE=ROH\nchr1    1350082 .   G   <DEL>   .   PASS    END=1351320;SVTYPE=DEL\nchr1    1477854 .   C   <DUP:TANDEM>    .   PASS    END=1477984;SVTYPE=DUP\nchr1    1477968 .   T   <INS>   .   PASS    END=1477968;SVTYPE=INS\nchr1    1715898 .   N   <DUP>   .   PASS    SVTYPE=CNV;END=1750149\nchr1    2650426 .   N   <DEL>   .   PASS    SVTYPE=CNV;END=2653074\nchr2    321682  .   T   <INV>   .   PASS    SVTYPE=INV;END=421681\nchr20   2633403 .   G   <STR2>  .   PASS    END=2633421\n")),(0,r.kt)("h3",{id:"format-2"},"Format"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"chromosome"),"\u2014",(0,r.kt)("inlineCode",{parentName:"p"},"position"),"\u2014",(0,r.kt)("inlineCode",{parentName:"p"},"end position"),"\u2014",(0,r.kt)("inlineCode",{parentName:"p"},"reference allele"),"\u2014",(0,r.kt)("inlineCode",{parentName:"p"},"alternate allele"),"\u2014",(0,r.kt)("inlineCode",{parentName:"p"},"SVTYPE")),(0,r.kt)("h3",{id:"vid-examples-1"},"VID Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1-1000-3001000-G-","<","ROH",">","-ROH"),(0,r.kt)("li",{parentName:"ul"},"1-1350082-1351320-G-","<","DEL",">","-DEL"),(0,r.kt)("li",{parentName:"ul"},"1-1477854-1477984-C-","<","DUP:TANDEM",">","-DUP"),(0,r.kt)("li",{parentName:"ul"},"1-1477968-1477968-T-","<","INS",">","-INS"),(0,r.kt)("li",{parentName:"ul"},"1-1715898-1750149-A-","<","DUP",">","-CNV ",(0,r.kt)("strong",{parentName:"li"},"(replace the N with A)")),(0,r.kt)("li",{parentName:"ul"},"1-2650426-2653074-N-","<","DEL",">","-CNV ",(0,r.kt)("strong",{parentName:"li"},"(keep the N)")),(0,r.kt)("li",{parentName:"ul"},"2-321682-421681-T-","<","INV",">","-INV"),(0,r.kt)("li",{parentName:"ul"},"20-2633403-2633421-G-","<","STR2",">","-STR")))}m.isMDXComponent=!0}}]);