"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[8493],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),m=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=m(t.components);return r.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),u=m(n),d=a,k=u["".concat(o,".").concat(d)]||u[d]||c[d]||l;return n?r.createElement(k,i(i({ref:e},s),{},{components:n})):r.createElement(k,i({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5044:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return s},default:function(){return u}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],p={},o=void 0,m={unversionedId:"data-sources/clinvar-json",id:"version-3.14/data-sources/clinvar-json",title:"clinvar-json",description:"| Field            | Type         | Notes                     |",source:"@site/versioned_docs/version-3.14/data-sources/clinvar-json.md",sourceDirName:"data-sources",slug:"/data-sources/clinvar-json",permalink:"/NirvanaDocumentation/3.14/data-sources/clinvar-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.14/data-sources/clinvar-json.md",tags:[],version:"3.14",frontMatter:{}},s=[],c={toc:s};function u(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"clinvar":[\n   {\n      "id":"VCV000036581.3",\n      "reviewStatus":"reviewed by expert panel",\n      "significance":[\n         "benign"\n      ],\n      "refAllele":"G",\n      "altAllele":"A",\n      "lastUpdatedDate":"2020-03-01",\n      "isAlleleSpecific":true\n   },\n   {\n      "id":"RCV000030258.4",\n      "variationId":"VCV000036581.3",\n      "reviewStatus":"reviewed by expert panel",\n      "alleleOrigins":[\n         "germline"\n      ],\n      "refAllele":"G",\n      "altAllele":"A",\n      "phenotypes":[\n         "Lynch syndrome"\n      ],\n      "medGenIds":[\n         "C1333990"\n      ],\n      "omimIds":[\n         "120435"\n      ],\n      "significance":[\n         "benign"\n      ],\n      "lastUpdatedDate":"2017-05-01",\n      "isAlleleSpecific":true\n   }\n]\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"id"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ClinVar ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"variationId"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ClinVar VCV ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"reviewStatus"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"see possible values below")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"alleleOrigins"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"see possible values below")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"refAllele"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"altAllele"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"phenotypes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"medGenIds"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"MedGen IDs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"omimIds"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"OMIM IDs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"orphanetIds"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Orphanet IDs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"significance"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"see possible values below")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"lastUpdatedDate"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"yyyy-MM-dd")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pubMedIds"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"PubMed IDs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"isAlleleSpecific"),(0,l.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true when the current variant alternate allele matches the ClinVar alternate allele")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"reviewStatus:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"no assertion provided"),(0,l.kt)("li",{parentName:"ul"},"no assertion criteria provided"),(0,l.kt)("li",{parentName:"ul"},"criteria provided, single submitter"),(0,l.kt)("li",{parentName:"ul"},"practice guideline"),(0,l.kt)("li",{parentName:"ul"},"classified by multiple submitters"),(0,l.kt)("li",{parentName:"ul"},"criteria provided, conflicting interpretations"),(0,l.kt)("li",{parentName:"ul"},"criteria provided, multiple submitters, no conflicts"),(0,l.kt)("li",{parentName:"ul"},"no interpretation for the single variant")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"alleleOrigins:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"unknown"),(0,l.kt)("li",{parentName:"ul"},"other"),(0,l.kt)("li",{parentName:"ul"},"germline"),(0,l.kt)("li",{parentName:"ul"},"somatic"),(0,l.kt)("li",{parentName:"ul"},"inherited"),(0,l.kt)("li",{parentName:"ul"},"paternal"),(0,l.kt)("li",{parentName:"ul"},"maternal"),(0,l.kt)("li",{parentName:"ul"},"de-novo"),(0,l.kt)("li",{parentName:"ul"},"biparental"),(0,l.kt)("li",{parentName:"ul"},"uniparental"),(0,l.kt)("li",{parentName:"ul"},"not-tested"),(0,l.kt)("li",{parentName:"ul"},"tested-inconclusive")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"significance:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"uncertain significance"),(0,l.kt)("li",{parentName:"ul"},"not provided"),(0,l.kt)("li",{parentName:"ul"},"benign"),(0,l.kt)("li",{parentName:"ul"},"likely benign"),(0,l.kt)("li",{parentName:"ul"},"likely pathogenic"),(0,l.kt)("li",{parentName:"ul"},"pathogenic"),(0,l.kt)("li",{parentName:"ul"},"drug response"),(0,l.kt)("li",{parentName:"ul"},"histocompatibility"),(0,l.kt)("li",{parentName:"ul"},"association"),(0,l.kt)("li",{parentName:"ul"},"risk factor"),(0,l.kt)("li",{parentName:"ul"},"protective"),(0,l.kt)("li",{parentName:"ul"},"affects"),(0,l.kt)("li",{parentName:"ul"},"conflicting data from submitters"),(0,l.kt)("li",{parentName:"ul"},"other"),(0,l.kt)("li",{parentName:"ul"},"no interpretation for the single variant"),(0,l.kt)("li",{parentName:"ul"},"conflicting interpretations of pathogenicity")))}u.isMDXComponent=!0}}]);