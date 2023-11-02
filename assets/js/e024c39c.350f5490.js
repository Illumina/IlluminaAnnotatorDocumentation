"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[7958],{3905:(M,L,t)=>{t.d(L,{Zo:()=>o,kt:()=>C});var i=t(67294);function e(M,L,t){return L in M?Object.defineProperty(M,L,{value:t,enumerable:!0,configurable:!0,writable:!0}):M[L]=t,M}function j(M,L){var t=Object.keys(M);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(M);L&&(i=i.filter((function(L){return Object.getOwnPropertyDescriptor(M,L).enumerable}))),t.push.apply(t,i)}return t}function u(M){for(var L=1;L<arguments.length;L++){var t=null!=arguments[L]?arguments[L]:{};L%2?j(Object(t),!0).forEach((function(L){e(M,L,t[L])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(L){Object.defineProperty(M,L,Object.getOwnPropertyDescriptor(t,L))}))}return M}function a(M,L){if(null==M)return{};var t,i,e=function(M,L){if(null==M)return{};var t,i,e={},j=Object.keys(M);for(i=0;i<j.length;i++)t=j[i],L.indexOf(t)>=0||(e[t]=M[t]);return e}(M,L);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(M);for(i=0;i<j.length;i++)t=j[i],L.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(M,t)&&(e[t]=M[t])}return e}var N=i.createContext({}),n=function(M){var L=i.useContext(N),t=L;return M&&(t="function"==typeof M?M(L):u(u({},L),M)),t},o=function(M){var L=n(M.components);return i.createElement(N.Provider,{value:L},M.children)},s="mdxType",w={inlineCode:"code",wrapper:function(M){var L=M.children;return i.createElement(i.Fragment,{},L)}},y=i.forwardRef((function(M,L){var t=M.components,e=M.mdxType,j=M.originalType,N=M.parentName,o=a(M,["components","mdxType","originalType","parentName"]),s=n(t),y=e,C=s["".concat(N,".").concat(y)]||s[y]||w[y]||j;return t?i.createElement(C,u(u({ref:L},o),{},{components:t})):i.createElement(C,u({ref:L},o))}));function C(M,L){var t=arguments,e=L&&L.mdxType;if("string"==typeof M||e){var j=t.length,u=new Array(j);u[0]=y;var a={};for(var N in L)hasOwnProperty.call(L,N)&&(a[N]=L[N]);a.originalType=M,a[s]="string"==typeof M?M:e,u[1]=a;for(var n=2;n<j;n++)u[n]=t[n];return i.createElement.apply(null,u)}return i.createElement.apply(null,t)}y.displayName="MDXCreateElement"},63427:(M,L,t)=>{t.d(L,{Z:()=>e});var i=t(67294);function e(M){let{className:L,name:t,children:e,githubUrl:j,twitterUrl:u}=M;return i.createElement("div",{className:L},i.createElement("div",{className:"card card--full-height"},i.createElement("div",{className:"card__header"},i.createElement("div",{className:"avatar avatar--vertical"},i.createElement("img",{className:"avatar__photo avatar__photo--xl",src:j+".png"}),i.createElement("div",{className:"avatar__intro"},i.createElement("h3",{className:"avatar__name"},t)))),i.createElement("div",{className:"card__body"},e),i.createElement("div",{className:"card__footer"},i.createElement("div",{className:"button-group button-group--block"},j&&i.createElement("a",{className:"button button--secondary",href:j},"GitHub"),u&&i.createElement("a",{className:"button button--secondary",href:u},"Twitter")))))}},18481:(M,L,t)=>{t.r(L),t.d(L,{TeamProfileCardCol:()=>o,contentTitle:()=>a,default:()=>y,frontMatter:()=>u,metadata:()=>N,toc:()=>n});var i=t(87462),e=(t(67294),t(3905)),j=t(63427);const u={id:"introduction",title:"Introduction",description:"Clinical-grade variant annotation",hide_title:!0,slug:"/"},a=void 0,N={unversionedId:"introduction/introduction",id:"version-3.17/introduction/introduction",title:"Introduction",description:"Clinical-grade variant annotation",source:"@site/versioned_docs/version-3.17/introduction/introduction.mdx",sourceDirName:"introduction",slug:"/",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.17/",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/versioned_docs/version-3.17/introduction/introduction.mdx",tags:[],version:"3.17",frontMatter:{id:"introduction",title:"Introduction",description:"Clinical-grade variant annotation",hide_title:!0,slug:"/"},sidebar:"version-3.17/docs",next:{title:"Dependencies",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.17/introduction/dependencies"}},n=[{value:"What does Nirvana annotate?",id:"what-does-nirvana-annotate",children:[],level:2},{value:"Licensing",id:"licensing",children:[{value:"Code",id:"code",children:[],level:3},{value:"Data",id:"data",children:[],level:3}],level:2},{value:"Nirvana Team",id:"nirvana-team",children:[{value:"Active Team",id:"active-team",children:[],level:3},{value:"Honorary Alumni",id:"honorary-alumni",children:[],level:3}],level:2}];function o(M){return(0,e.kt)(j.Z,(0,i.Z)({},M,{className:"col col--6 margin-bottom--lg",mdxType:"TeamProfileCard"}))}const s={toc:n,TeamProfileCardCol:o},w="wrapper";function y(M){let{components:L,...j}=M;return(0,e.kt)(w,(0,i.Z)({},s,j,{components:L,mdxType:"MDXLayout"}),(0,e.kt)("p",null,(0,e.kt)("img",{src:t(21319).Z})),(0,e.kt)("p",null,"Nirvana provides clinical-grade annotation of genomic variants (SNVs, MNVs, insertions, deletions, indels, STRs, gene fusions, and SVs (including CNVs). It can be run as a stand-alone package, as an AWS Lambda function, or integrated into larger software tools that require variant annotation."),(0,e.kt)("p",null,"The input to Nirvana are VCFs and the output is a structured JSON representation of all annotation and sample information (as extracted from the VCF). Nirvana handles multiple alternate alleles and multiple samples with ease."),(0,e.kt)("p",null,"The software is being developed under a rigorous SDLC and testing process to ensure accuracy of the results and enable embedding in other software with regulatory needs. Nirvana uses a continuous integration pipeline where millions of variant annotations are monitored against baseline values daily."),(0,e.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,e.kt)("div",{parentName:"div",className:"admonition-heading"},(0,e.kt)("h5",{parentName:"div"},(0,e.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,e.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,e.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Fun Fact")),(0,e.kt)("div",{parentName:"div",className:"admonition-content"},(0,e.kt)("p",{parentName:"div"},"Nirvana is a backronym for ",(0,e.kt)("strong",{parentName:"p"},"NI"),"mble and ",(0,e.kt)("strong",{parentName:"p"},"R"),"obust ",(0,e.kt)("strong",{parentName:"p"},"VA"),"riant a",(0,e.kt)("strong",{parentName:"p"},"N"),"not",(0,e.kt)("strong",{parentName:"p"},"A"),"tor"))),(0,e.kt)("h2",{id:"what-does-nirvana-annotate"},"What does Nirvana annotate?"),(0,e.kt)("p",null,"We use Sequence Ontology consequences to describe how each variant impacts a given transcript:"),(0,e.kt)("p",null,(0,e.kt)("img",{src:t(67476).Z})),(0,e.kt)("p",null,"In addition, we also use external data sources to provide additional context for each variant:"),(0,e.kt)("p",null,(0,e.kt)("img",{src:t(44341).Z})),(0,e.kt)("h2",{id:"licensing"},"Licensing"),(0,e.kt)("h3",{id:"code"},"Code"),(0,e.kt)("p",null,"Nirvana source code is provided under the ",(0,e.kt)("a",{parentName:"p",href:"https://github.com/Illumina/Nirvana/blob/develop/LICENSE"},"GPLv3")," license. Nirvana includes several third party packages provided under other open source licenses, please see ",(0,e.kt)("a",{parentName:"p",href:"introduction/dependencies"},"Dependencies")," for additional details."),(0,e.kt)("h3",{id:"data"},"Data"),(0,e.kt)("p",null,"The data used by Nirvana is publicly available, however some data sources have special restrictions on use by non-academic entities."),(0,e.kt)("h2",{id:"nirvana-team"},"Nirvana Team"),(0,e.kt)("h3",{id:"active-team"},"Active Team"),(0,e.kt)("p",null,"The Nirvana team works on the core functionality, AWS annotation services, in addition to keeping the annotation data sources up-to-date."),(0,e.kt)("p",null,"Current members of the Nirvana team are listed in alphabetical order below."),(0,e.kt)("div",{className:"row"},(0,e.kt)(o,{name:"Joseph Platzer",githubUrl:"https://github.com/jplatzer2",mdxType:"TeamProfileCardCol"},"Test Lead. Joins Nirvana with a history of building sequencing tools and keeping the customer first."),(0,e.kt)(o,{name:"Michael Str\xf6mberg",githubUrl:"https://github.com/MichaelStromberg",mdxType:"TeamProfileCardCol"},"Nirvana founder and now ever grateful Nirvana cheerleader to those who actually write code for it."),(0,e.kt)(o,{name:"Rajat Shuvro Roy",githubUrl:"https://github.com/rajatshuvro",mdxType:"TeamProfileCardCol"},"Lead developer. Loves to speed up things and make services available to all interested users.")),(0,e.kt)("h3",{id:"honorary-alumni"},"Honorary Alumni"),(0,e.kt)("p",null,"Nirvana would never be what it is today without the huge contributions from these folks who have moved on to bigger and greater things."),(0,e.kt)("div",{className:"row"},(0,e.kt)(o,{name:"Haochen Li",githubUrl:"https://github.com/haochenl",mdxType:"TeamProfileCardCol"},"Detail-oriented quick thinker that keeps cool even in the most stressful situations. Now working as a Senior Bioinformatics Data Scientist at GRAIL."),(0,e.kt)(o,{name:"Julien Lajugie",githubUrl:"https://github.com/JulienLajugie",mdxType:"TeamProfileCardCol"},"Julien is a legend around these parts. When he's not taking down opponents in Taekwondo or melting riffs in his rock band, he's demolishing bugs and making the world a better place."),(0,e.kt)(o,{name:"Shuli Kang",githubUrl:"https://github.com/shulik7",mdxType:"TeamProfileCardCol"},"Oncology bioinformatician from USC before joining our team at Illumina. Now working as a Senior Bioinformatics Scientist at Novartis Gene Therapies."),(0,e.kt)(o,{name:"Yu Jiang",githubUrl:"https://github.com/yujiang02",mdxType:"TeamProfileCardCol"},"Biostatistics genius from Duke University before joining our team at Illumina. Now working as a Research Engineer at Facebook AI Research.")))}y.isMDXComponent=!0},21319:(M,L,t)=>{t.d(L,{Z:()=>i});const i="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSIyOTkiIGhlaWdodD0iNjgiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyOTguOTQgNjcuNzkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI5OC45NCA2Ny43OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkI0NDE7c3Ryb2tlOiMyMzFGMjA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0wLjUsMC41aDExLjQ2bDE0Ljg4LDI2LjRoMC4xMlYwLjVoMTAuNXY0Mi44NEgyNmwtMTQuODgtMjYuN0gxMXYyNi43SDAuNVYwLjV6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDUuMDgsMC41aDExLjE2djQyLjg0SDQ1LjA4VjAuNXoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02My45OCwwLjVoMjEuODRjNy41NiwwLDE1LDMuNDIsMTUsMTIuMDZjMCw0LjYyLTIuMjIsOS02LjcyLDEwLjc0djAuMTJjNC41NiwxLjA4LDUuODgsNi4xOCw2LjI0LDEwLjI2CgkJYzAuMTIsMS44LDAuMyw4LjEsMS44LDkuNjZIOTEuMWMtMC45Ni0xLjQ0LTEuMTQtNS42NC0xLjI2LTYuODRjLTAuMy00LjMyLTEuMDItOC43Ni02LjI0LTguNzZoLTguNDZ2MTUuNkg2My45OFYwLjV6IE03NS4xNCwxOS4xCgkJaDkuMzZjMy4zNiwwLDUuMTYtMS44LDUuMTYtNS4wNGMwLTMuMTgtMi41Mi00LjYyLTUuNjQtNC42MmgtOC44OFYxOS4xeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyOS41LDQzLjM0aC0xMi44NEwxMDMuMTYsMC41aDExLjY0bDguNCwzMS44NmgwLjEybDguNC0zMS44NmgxMS42NEwxMjkuNSw0My4zNHoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNTUuMTgsMC41aDExLjM0bDE2LjAyLDQyLjg0SDE3MC45bC0yLjY0LTcuNjhoLTE0Ljk0bC0yLjcsNy42OGgtMTEuNDZMMTU1LjE4LDAuNXogTTE1NS45LDI3LjM4aDkuNzIKCQlsLTQuNzQtMTVoLTAuMTJMMTU1LjksMjcuMzh6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTg1LjY2LDAuNWgxMS40NkwyMTIsMjYuOWgwLjEyVjAuNWgxMC41djQyLjg0aC0xMS40NmwtMTQuODgtMjYuN2gtMC4xMnYyNi43aC0xMC41VjAuNXoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNDEuODgsMC41aDExLjM0bDE2LjAyLDQyLjg0SDI1Ny42bC0yLjY0LTcuNjhoLTE0Ljk0bC0yLjcsNy42OGgtMTEuNDZMMjQxLjg4LDAuNXogTTI0Mi42LDI3LjM4aDkuNzIKCQlsLTQuNzQtMTVoLTAuMTJMMjQyLjYsMjcuMzh6Ii8+CjwvZz4KPGc+Cgk8cGF0aCBkPSJNMTAuNDQsNTMuOTVjLTAuNDItMS42NC0xLjQ4LTIuODQtMy41Ni0yLjg0Yy0zLjA2LDAtNC4zNCwyLjctNC4zNCw1LjQ0czEuMjgsNS40NCw0LjM0LDUuNDRjMi4yMiwwLDMuNDQtMS42NiwzLjY0LTMuNzQKCQloMi40NGMtMC4yLDMuNDItMi42Miw1Ljc4LTYuMDgsNS43OGMtNC4yOCwwLTYuODQtMy40LTYuODQtNy40OGMwLTQuMDgsMi41Ni03LjQ4LDYuODQtNy40OGMzLjIyLDAuMDIsNS43NiwxLjgsNi4wNiw0Ljg4SDEwLjQ0eiIKCQkvPgoJPHBhdGggZD0iTTE0Ljk4LDQ5LjQxaDIuMjh2MTQuMjhoLTIuMjhWNDkuNDF6Ii8+Cgk8cGF0aCBkPSJNMTkuOCw0OS40MWgyLjI4djIuMTZIMTkuOFY0OS40MXogTTE5LjgsNTMuMzVoMi4yOHYxMC4zNEgxOS44VjUzLjM1eiIvPgoJPHBhdGggZD0iTTI0LjU2LDUzLjM1aDIuMTZ2MS41MmwwLjA0LDAuMDRjMC42OC0xLjE0LDEuODYtMS44NCwzLjIyLTEuODRjMi4yNCwwLDMuNjYsMS4yLDMuNjYsMy41MnY3LjFoLTIuMjh2LTYuNQoJCWMtMC4wNC0xLjYyLTAuNjgtMi4zMi0yLjAyLTIuMzJjLTEuNTIsMC0yLjUsMS4yLTIuNSwyLjcydjYuMWgtMi4yOFY1My4zNXoiLz4KCTxwYXRoIGQ9Ik0zNi4xLDQ5LjQxaDIuMjh2Mi4xNkgzNi4xVjQ5LjQxeiBNMzYuMSw1My4zNWgyLjI4djEwLjM0SDM2LjFWNTMuMzV6Ii8+Cgk8cGF0aCBkPSJNNDcuODQsNTYuODFjLTAuMTgtMS4yNi0xLjEtMS45NC0yLjM2LTEuOTRjLTEuMTgsMC0yLjg0LDAuNjItMi44NCwzLjc2YzAsMS43MiwwLjc2LDMuNTQsMi43NCwzLjU0CgkJYzEuMzIsMCwyLjI0LTAuODgsMi40Ni0yLjM2aDIuMjhjLTAuNDIsMi42OC0yLjA4LDQuMTYtNC43NCw0LjE2Yy0zLjI0LDAtNS4wMi0yLjMtNS4wMi01LjM0YzAtMy4xMiwxLjctNS41Niw1LjEtNS41NgoJCWMyLjQsMCw0LjQ0LDEuMiw0LjY2LDMuNzRINDcuODR6Ii8+Cgk8cGF0aCBkPSJNNjAuNjQsNjEuMzljMCwwLjU2LDAuMTIsMC43OCwwLjU0LDAuNzhjMC4xNCwwLDAuMzIsMCwwLjU2LTAuMDR2MS41OGMtMC4zNCwwLjEyLTEuMDYsMC4yNi0xLjQ0LDAuMjYKCQljLTAuOTIsMC0xLjU4LTAuMzItMS43Ni0xLjI2Yy0wLjksMC44OC0yLjM2LDEuMjYtMy41OCwxLjI2Yy0xLjg2LDAtMy41NC0xLTMuNTQtMy4wMmMwLTIuNTgsMi4wNi0zLDMuOTgtMy4yMgoJCWMxLjY0LTAuMywzLjEtMC4xMiwzLjEtMS40NmMwLTEuMTgtMS4yMi0xLjQtMi4xNC0xLjRjLTEuMjgsMC0yLjE4LDAuNTItMi4yOCwxLjY0SDUxLjhjMC4xNi0yLjY2LDIuNDItMy40NCw0LjctMy40NAoJCWMyLjAyLDAsNC4xNCwwLjgyLDQuMTQsM1Y2MS4zOXogTTU4LjM2LDU4LjUxYy0wLjcsMC40Ni0xLjgsMC40NC0yLjgsMC42MmMtMC45OCwwLjE2LTEuODYsMC41Mi0xLjg2LDEuNzIKCQljMCwxLjAyLDEuMywxLjMyLDIuMSwxLjMyYzEsMCwyLjU2LTAuNTIsMi41Ni0xLjk2VjU4LjUxeiIvPgoJPHBhdGggZD0iTTYzLjE2LDQ5LjQxaDIuMjh2MTQuMjhoLTIuMjhWNDkuNDF6Ii8+Cgk8cGF0aCBkPSJNNjcuNyw1Ny4xN2g1LjgydjIuMTZINjcuN1Y1Ny4xN3oiLz4KCTxwYXRoIGQ9Ik04NS4yNiw2My4xNWMwLDMuMS0xLjgyLDQuNjQtNS4wOCw0LjY0Yy0yLjA4LDAtNC40Mi0wLjgtNC42Mi0zLjIyaDIuMjhjMC4yOCwxLjMsMS4zMiwxLjUyLDIuNDgsMS41MgoJCWMxLjg0LDAsMi42Ni0wLjk0LDIuNjYtMi42NHYtMS41OGgtMC4wNGMtMC42NCwxLjE0LTEuODIsMS44Mi0zLjEsMS44MmMtMy4yOCwwLTQuNjQtMi40OC00LjY0LTUuNDRjMC0yLjc4LDEuNzQtNS4xOCw0LjY4LTUuMTgKCQljMS4zLDAsMi40OCwwLjU0LDMuMDYsMS43aDAuMDR2LTEuNDJoMi4yOFY2My4xNXogTTgyLjk4LDU4LjI5YzAtMS43OC0wLjgtMy40Mi0yLjc4LTMuNDJjLTIuMDIsMC0yLjcyLDEuODgtMi43MiwzLjYKCQljMCwxLjcsMC44MiwzLjQyLDIuNzIsMy40MkM4Mi4yMiw2MS44OSw4Mi45OCw2MC4wNSw4Mi45OCw1OC4yOXoiLz4KCTxwYXRoIGQ9Ik04Ny41Niw1My4zNWgyLjE0djJoMC4wNGMwLjI2LTEuMSwxLjYyLTIuMjgsMy4wMi0yLjI4YzAuNTIsMCwwLjY2LDAuMDQsMC44NiwwLjA2djIuMmMtMC4zMi0wLjA0LTAuNjYtMC4xLTAuOTgtMC4xCgkJYy0xLjU2LDAtMi44LDEuMjYtMi44LDMuNTR2NC45MmgtMi4yOFY1My4zNXoiLz4KCTxwYXRoIGQ9Ik0xMDMuMjYsNjEuMzljMCwwLjU2LDAuMTIsMC43OCwwLjU0LDAuNzhjMC4xNCwwLDAuMzIsMCwwLjU2LTAuMDR2MS41OGMtMC4zNCwwLjEyLTEuMDYsMC4yNi0xLjQ0LDAuMjYKCQljLTAuOTIsMC0xLjU4LTAuMzItMS43Ni0xLjI2Yy0wLjksMC44OC0yLjM2LDEuMjYtMy41OCwxLjI2Yy0xLjg2LDAtMy41NC0xLTMuNTQtMy4wMmMwLTIuNTgsMi4wNi0zLDMuOTgtMy4yMgoJCWMxLjY0LTAuMywzLjEtMC4xMiwzLjEtMS40NmMwLTEuMTgtMS4yMi0xLjQtMi4xNC0xLjRjLTEuMjgsMC0yLjE4LDAuNTItMi4yOCwxLjY0aC0yLjI4YzAuMTYtMi42NiwyLjQyLTMuNDQsNC43LTMuNDQKCQljMi4wMiwwLDQuMTQsMC44Miw0LjE0LDNWNjEuMzl6IE0xMDAuOTgsNTguNTFjLTAuNywwLjQ2LTEuOCwwLjQ0LTIuOCwwLjYyYy0wLjk4LDAuMTYtMS44NiwwLjUyLTEuODYsMS43MgoJCWMwLDEuMDIsMS4zLDEuMzIsMi4xLDEuMzJjMSwwLDIuNTYtMC41MiwyLjU2LTEuOTZWNTguNTF6Ii8+Cgk8cGF0aCBkPSJNMTE1LjQ2LDYzLjY5aC0yLjE2di0xLjRoLTAuMDRjLTAuNiwxLjE4LTEuOSwxLjY4LTMuMiwxLjY4Yy0zLjI2LDAtNC44NC0yLjQyLTQuODQtNS41MmMwLTMuNzQsMi4yMi01LjM4LDQuNDgtNS4zOAoJCWMxLjMsMCwyLjc0LDAuNDgsMy40NCwxLjYyaDAuMDR2LTUuMjhoMi4yOFY2My42OXogTTExMC4zNiw2Mi4xN2MyLjA0LDAsMi45LTEuODYsMi45LTMuNjZjMC0yLjI4LTEuMS0zLjY0LTIuODYtMy42NAoJCWMtMi4xNCwwLTIuOSwxLjktMi45LDMuNzZDMTA3LjUsNjAuNDEsMTA4LjM4LDYyLjE3LDExMC4zNiw2Mi4xN3oiLz4KCTxwYXRoIGQ9Ik0xMTkuNzIsNTkuMTFjMCwxLjYyLDAuODgsMy4wNiwyLjc4LDMuMDZjMS4zMiwwLDIuMTItMC41OCwyLjUyLTEuNzJoMi4xNmMtMC41LDIuMjYtMi40MiwzLjUyLTQuNjgsMy41MgoJCWMtMy4yNCwwLTUuMDYtMi4yNi01LjA2LTUuNDRjMC0yLjk0LDEuOTItNS40Niw1LTUuNDZjMy4yNiwwLDUuMjYsMi45NCw0Ljg4LDYuMDRIMTE5LjcyeiBNMTI1LjA0LDU3LjYxCgkJYy0wLjA4LTEuNDQtMS4wNi0yLjc0LTIuNi0yLjc0Yy0xLjU4LDAtMi42NiwxLjItMi43MiwyLjc0SDEyNS4wNHoiLz4KCTxwYXRoIGQ9Ik0xMzMuNiw1My4zNWgyLjQ4bDIuNjIsNy45NGgwLjA0bDIuNTItNy45NGgyLjM2bC0zLjcsMTAuMzRoLTIuNTZMMTMzLjYsNTMuMzV6Ii8+Cgk8cGF0aCBkPSJNMTUzLjY2LDYxLjM5YzAsMC41NiwwLjEyLDAuNzgsMC41NCwwLjc4YzAuMTQsMCwwLjMyLDAsMC41Ni0wLjA0djEuNThjLTAuMzQsMC4xMi0xLjA2LDAuMjYtMS40NCwwLjI2CgkJYy0wLjkyLDAtMS41OC0wLjMyLTEuNzYtMS4yNmMtMC45LDAuODgtMi4zNiwxLjI2LTMuNTgsMS4yNmMtMS44NiwwLTMuNTQtMS0zLjU0LTMuMDJjMC0yLjU4LDIuMDYtMywzLjk4LTMuMjIKCQljMS42NC0wLjMsMy4xLTAuMTIsMy4xLTEuNDZjMC0xLjE4LTEuMjItMS40LTIuMTQtMS40Yy0xLjI4LDAtMi4xOCwwLjUyLTIuMjgsMS42NGgtMi4yOGMwLjE2LTIuNjYsMi40Mi0zLjQ0LDQuNy0zLjQ0CgkJYzIuMDIsMCw0LjE0LDAuODIsNC4xNCwzVjYxLjM5eiBNMTUxLjM4LDU4LjUxYy0wLjcsMC40Ni0xLjgsMC40NC0yLjgsMC42MmMtMC45OCwwLjE2LTEuODYsMC41Mi0xLjg2LDEuNzIKCQljMCwxLjAyLDEuMywxLjMyLDIuMSwxLjMyYzEsMCwyLjU2LTAuNTIsMi41Ni0xLjk2VjU4LjUxeiIvPgoJPHBhdGggZD0iTTE1Ni4xMiw1My4zNWgyLjE0djJoMC4wNGMwLjI2LTEuMSwxLjYyLTIuMjgsMy4wMi0yLjI4YzAuNTIsMCwwLjY2LDAuMDQsMC44NiwwLjA2djIuMmMtMC4zMi0wLjA0LTAuNjYtMC4xLTAuOTgtMC4xCgkJYy0xLjU2LDAtMi44LDEuMjYtMi44LDMuNTR2NC45MmgtMi4yOFY1My4zNXoiLz4KCTxwYXRoIGQ9Ik0xNjMuMjIsNDkuNDFoMi4yOHYyLjE2aC0yLjI4VjQ5LjQxeiBNMTYzLjIyLDUzLjM1aDIuMjh2MTAuMzRoLTIuMjhWNTMuMzV6Ii8+Cgk8cGF0aCBkPSJNMTc2LjY0LDYxLjM5YzAsMC41NiwwLjEyLDAuNzgsMC41NCwwLjc4YzAuMTQsMCwwLjMyLDAsMC41Ni0wLjA0djEuNThjLTAuMzQsMC4xMi0xLjA2LDAuMjYtMS40NCwwLjI2CgkJYy0wLjkyLDAtMS41OC0wLjMyLTEuNzYtMS4yNmMtMC45LDAuODgtMi4zNiwxLjI2LTMuNTgsMS4yNmMtMS44NiwwLTMuNTQtMS0zLjU0LTMuMDJjMC0yLjU4LDIuMDYtMywzLjk4LTMuMjIKCQljMS42NC0wLjMsMy4xLTAuMTIsMy4xLTEuNDZjMC0xLjE4LTEuMjItMS40LTIuMTQtMS40Yy0xLjI4LDAtMi4xOCwwLjUyLTIuMjgsMS42NGgtMi4yOGMwLjE2LTIuNjYsMi40Mi0zLjQ0LDQuNy0zLjQ0CgkJYzIuMDIsMCw0LjE0LDAuODIsNC4xNCwzVjYxLjM5eiBNMTc0LjM2LDU4LjUxYy0wLjcsMC40Ni0xLjgsMC40NC0yLjgsMC42MmMtMC45OCwwLjE2LTEuODYsMC41Mi0xLjg2LDEuNzIKCQljMCwxLjAyLDEuMywxLjMyLDIuMSwxLjMyYzEsMCwyLjU2LTAuNTIsMi41Ni0xLjk2VjU4LjUxeiIvPgoJPHBhdGggZD0iTTE3OS4xLDUzLjM1aDIuMTZ2MS41MmwwLjA0LDAuMDRjMC42OC0xLjE0LDEuODYtMS44NCwzLjIyLTEuODRjMi4yNCwwLDMuNjYsMS4yLDMuNjYsMy41MnY3LjFoLTIuMjh2LTYuNQoJCWMtMC4wNC0xLjYyLTAuNjgtMi4zMi0yLjAyLTIuMzJjLTEuNTIsMC0yLjUsMS4yLTIuNSwyLjcydjYuMWgtMi4yOFY1My4zNXoiLz4KCTxwYXRoIGQ9Ik0xODkuNTQsNTMuMzVoMS43MnYtMy4xaDIuMjh2My4xaDIuMDZ2MS43aC0yLjA2djUuNTJjMCwwLjk0LDAuMDgsMS40MiwxLjEsMS40MmMwLjMyLDAsMC42NCwwLDAuOTYtMC4wOHYxLjc2CgkJYy0wLjUsMC4wNC0wLjk4LDAuMTItMS40OCwwLjEyYy0yLjM4LDAtMi44Mi0wLjkyLTIuODYtMi42NHYtNi4xaC0xLjcyVjUzLjM1eiIvPgoJPHBhdGggZD0iTTIxMS40Niw2MS4zOWMwLDAuNTYsMC4xMiwwLjc4LDAuNTQsMC43OGMwLjE0LDAsMC4zMiwwLDAuNTYtMC4wNHYxLjU4Yy0wLjM0LDAuMTItMS4wNiwwLjI2LTEuNDQsMC4yNgoJCWMtMC45MiwwLTEuNTgtMC4zMi0xLjc2LTEuMjZjLTAuOSwwLjg4LTIuMzYsMS4yNi0zLjU4LDEuMjZjLTEuODYsMC0zLjU0LTEtMy41NC0zLjAyYzAtMi41OCwyLjA2LTMsMy45OC0zLjIyCgkJYzEuNjQtMC4zLDMuMS0wLjEyLDMuMS0xLjQ2YzAtMS4xOC0xLjIyLTEuNC0yLjE0LTEuNGMtMS4yOCwwLTIuMTgsMC41Mi0yLjI4LDEuNjRoLTIuMjhjMC4xNi0yLjY2LDIuNDItMy40NCw0LjctMy40NAoJCWMyLjAyLDAsNC4xNCwwLjgyLDQuMTQsM1Y2MS4zOXogTTIwOS4xOCw1OC41MWMtMC43LDAuNDYtMS44LDAuNDQtMi44LDAuNjJjLTAuOTgsMC4xNi0xLjg2LDAuNTItMS44NiwxLjcyCgkJYzAsMS4wMiwxLjMsMS4zMiwyLjEsMS4zMmMxLDAsMi41Ni0wLjUyLDIuNTYtMS45NlY1OC41MXoiLz4KCTxwYXRoIGQ9Ik0yMTMuOTIsNTMuMzVoMi4xNnYxLjUybDAuMDQsMC4wNGMwLjY4LTEuMTQsMS44Ni0xLjg0LDMuMjItMS44NGMyLjI0LDAsMy42NiwxLjIsMy42NiwzLjUydjcuMWgtMi4yOHYtNi41CgkJYy0wLjA0LTEuNjItMC42OC0yLjMyLTIuMDItMi4zMmMtMS41MiwwLTIuNSwxLjItMi41LDIuNzJ2Ni4xaC0yLjI4VjUzLjM1eiIvPgoJPHBhdGggZD0iTTIyNS4zOSw1My4zNWgyLjE2djEuNTJsMC4wNCwwLjA0YzAuNjgtMS4xNCwxLjg2LTEuODQsMy4yMi0xLjg0YzIuMjQsMCwzLjY2LDEuMiwzLjY2LDMuNTJ2Ny4xaC0yLjI4di02LjUKCQljLTAuMDQtMS42Mi0wLjY4LTIuMzItMi4wMi0yLjMyYy0xLjUyLDAtMi41LDEuMi0yLjUsMi43MnY2LjFoLTIuMjhWNTMuMzV6Ii8+Cgk8cGF0aCBkPSJNMjM2LjM5LDU4LjUxYzAtMy4xNiwxLjktNS40NCw1LjIyLTUuNDRzNS4yMiwyLjI4LDUuMjIsNS40NGMwLDMuMTgtMS45LDUuNDYtNS4yMiw1LjQ2UzIzNi4zOSw2MS42OSwyMzYuMzksNTguNTF6CgkJIE0yNDQuNTYsNTguNTFjMC0xLjc4LTAuOS0zLjY0LTIuOTQtMy42NHMtMi45NCwxLjg2LTIuOTQsMy42NGMwLDEuOCwwLjksMy42NiwyLjk0LDMuNjZTMjQ0LjU2LDYwLjMxLDI0NC41Niw1OC41MXoiLz4KCTxwYXRoIGQ9Ik0yNDcuNjksNTMuMzVoMS43MnYtMy4xaDIuMjh2My4xaDIuMDZ2MS43aC0yLjA2djUuNTJjMCwwLjk0LDAuMDgsMS40MiwxLjEsMS40MmMwLjMyLDAsMC42NCwwLDAuOTYtMC4wOHYxLjc2CgkJYy0wLjUsMC4wNC0wLjk4LDAuMTItMS40OCwwLjEyYy0yLjM4LDAtMi44Mi0wLjkyLTIuODYtMi42NHYtNi4xaC0xLjcyVjUzLjM1eiIvPgoJPHBhdGggZD0iTTI2NC4wNiw2MS4zOWMwLDAuNTYsMC4xMiwwLjc4LDAuNTQsMC43OGMwLjE0LDAsMC4zMiwwLDAuNTYtMC4wNHYxLjU4Yy0wLjM0LDAuMTItMS4wNiwwLjI2LTEuNDQsMC4yNgoJCWMtMC45MiwwLTEuNTgtMC4zMi0xLjc2LTEuMjZjLTAuOSwwLjg4LTIuMzYsMS4yNi0zLjU4LDEuMjZjLTEuODYsMC0zLjU0LTEtMy41NC0zLjAyYzAtMi41OCwyLjA2LTMsMy45OC0zLjIyCgkJYzEuNjQtMC4zLDMuMS0wLjEyLDMuMS0xLjQ2YzAtMS4xOC0xLjIyLTEuNC0yLjE0LTEuNGMtMS4yOCwwLTIuMTgsMC41Mi0yLjI4LDEuNjRoLTIuMjhjMC4xNi0yLjY2LDIuNDItMy40NCw0LjctMy40NAoJCWMyLjAyLDAsNC4xNCwwLjgyLDQuMTQsM1Y2MS4zOXogTTI2MS43OCw1OC41MWMtMC43LDAuNDYtMS44LDAuNDQtMi44LDAuNjJjLTAuOTgsMC4xNi0xLjg2LDAuNTItMS44NiwxLjcyCgkJYzAsMS4wMiwxLjMsMS4zMiwyLjEsMS4zMmMxLDAsMi41Ni0wLjUyLDIuNTYtMS45NlY1OC41MXoiLz4KCTxwYXRoIGQ9Ik0yNjUuNDcsNTMuMzVoMS43MnYtMy4xaDIuMjh2My4xaDIuMDZ2MS43aC0yLjA2djUuNTJjMCwwLjk0LDAuMDgsMS40MiwxLjEsMS40MmMwLjMyLDAsMC42NCwwLDAuOTYtMC4wOHYxLjc2CgkJYy0wLjUsMC4wNC0wLjk4LDAuMTItMS40OCwwLjEyYy0yLjM4LDAtMi44Mi0wLjkyLTIuODYtMi42NHYtNi4xaC0xLjcyVjUzLjM1eiIvPgoJPHBhdGggZD0iTTI3My4yMyw0OS40MWgyLjI4djIuMTZoLTIuMjhWNDkuNDF6IE0yNzMuMjMsNTMuMzVoMi4yOHYxMC4zNGgtMi4yOFY1My4zNXoiLz4KCTxwYXRoIGQ9Ik0yNzcuNTEsNTguNTFjMC0zLjE2LDEuOS01LjQ0LDUuMjItNS40NGMzLjMyLDAsNS4yMiwyLjI4LDUuMjIsNS40NGMwLDMuMTgtMS45LDUuNDYtNS4yMiw1LjQ2CgkJQzI3OS40MSw2My45NywyNzcuNTEsNjEuNjksMjc3LjUxLDU4LjUxeiBNMjg1LjY4LDU4LjUxYzAtMS43OC0wLjktMy42NC0yLjk0LTMuNjRjLTIuMDQsMC0yLjk0LDEuODYtMi45NCwzLjY0CgkJYzAsMS44LDAuOSwzLjY2LDIuOTQsMy42NkMyODQuNzcsNjIuMTcsMjg1LjY4LDYwLjMxLDI4NS42OCw1OC41MXoiLz4KCTxwYXRoIGQ9Ik0yODkuODUsNTMuMzVoMi4xNnYxLjUybDAuMDQsMC4wNGMwLjY4LTEuMTQsMS44Ni0xLjg0LDMuMjItMS44NGMyLjI0LDAsMy42NiwxLjIsMy42NiwzLjUydjcuMWgtMi4yOHYtNi41CgkJYy0wLjA0LTEuNjItMC42OC0yLjMyLTIuMDItMi4zMmMtMS41MiwwLTIuNSwxLjItMi41LDIuNzJ2Ni4xaC0yLjI4VjUzLjM1eiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="},44341:(M,L,t)=>{t.d(L,{Z:()=>i});const i=t.p+"assets/images/SupplementaryAnnotations-d43d3f1c837f9b80fab530432e0e4b1d.svg"},67476:(M,L,t)=>{t.d(L,{Z:()=>i});const i=t.p+"assets/images/TranscriptConsequences-60ca1c43a36dacf896fecdabf09ce02c.svg"}}]);