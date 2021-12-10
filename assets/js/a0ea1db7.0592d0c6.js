"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[6132],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),d=p(n),u=r,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(f,o(o({ref:e},m),{},{components:n})):a.createElement(f,o({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5654:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s=void 0,p={unversionedId:"data-sources/omim-json",id:"version-3.16/data-sources/omim-json",title:"omim-json",description:"| Field       | Type         | Notes                                   |",source:"@site/versioned_docs/version-3.16/data-sources/omim-json.md",sourceDirName:"data-sources",slug:"/data-sources/omim-json",permalink:"/NirvanaDocumentation/3.16/data-sources/omim-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.16/data-sources/omim-json.md",tags:[],version:"3.16",frontMatter:{}},m=[{value:"Phenotype",id:"phenotype",children:[],level:4},{value:"Mapping",id:"mapping",children:[],level:4},{value:"Inheritance",id:"inheritance",children:[],level:4},{value:"Comments",id:"comments",children:[],level:4}],c={toc:m};function d(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"omim":[ \n   { \n      "mimNumber":600678,\n      "geneName":"MutS, E. coli, homolog of, 6",\n      "description":"The transcription factor p53 responds to diverse cellular stresses to regulate target genes that induce cell cycle arrest, apoptosis, senescence, DNA repair, or changes in metabolism. In addition, p53 appears to induce apoptosis through nontranscriptional cytoplasmic processes. In unstressed cells, p53 is kept inactive essentially through the actions of the ubiquitin ligase MDM2, which inhibits p53 transcriptional activity and ubiquitinates p53 to promote its degradation. Numerous posttranslational modifications modulate p53 activity, most notably phosphorylation and acetylation. Several less abundant p53 isoforms also modulate p53 activity. Activity of p53 is ubiquitously lost in human cancer either by mutation of the p53 gene itself or by loss of cell signaling upstream or downstream of p53 (Toledo and Wahl, 2006; Bourdon, 2007; Vousden and Lane, 2007)",\n      "phenotypes":[ \n         { \n            "mimNumber":614350,\n            "phenotype":"Colorectal cancer, hereditary nonpolyposis, type 5",\n            "description":"Hereditary nonpolyposis colorectal cancer type 5 is a cancer predisposition syndrome ...",\n            "mapping":"molecular basis of the disorder is known",\n            "inheritances":[ \n               "Autosomal dominant"\n            ]\n         },\n         { \n            "mimNumber":608089,\n            "phenotype":"Endometrial cancer, familial",\n            "mapping":"molecular basis of the disorder is known"\n         },\n         { \n            "mimNumber":276300,\n            "phenotype":"Mismatch repair cancer syndrome",\n            "description":"Constitutional mismatch repair deficiency is a rare childhood cancer predisposition syndrome ...",\n            "mapping":"molecular basis of the disorder is known",\n            "inheritances":[ \n               "Autosomal recessive"\n            ],\n            "comments"     : [\n                "contribute to susceptibility to multifactorial disorders or to susceptibility to infection",\n                "unconfirmed or possibly spurious mapping"\n            ]\n         }\n      ]\n   }\n]\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"mimNumber"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},"OMIM ID for gene")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"geneName"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"gene name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"description"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"phenotypes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"object array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"see ",(0,i.kt)("a",{parentName:"td",href:"#phenotype"},"Phenotype entry below"))))),(0,i.kt)("h4",{id:"phenotype"},"Phenotype"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"mimNumber"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"phenotype"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"description"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"mapping"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"see ",(0,i.kt)("a",{parentName:"td",href:"#mapping"},"possible values below"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"inheritance"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"see ",(0,i.kt)("a",{parentName:"td",href:"#inheritance"},"possible values below"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"comments"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"see ",(0,i.kt)("a",{parentName:"td",href:"#comments"},"possible values below"))))),(0,i.kt)("h4",{id:"mapping"},"Mapping"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"disorder was positioned by mapping of the wild type gene"),(0,i.kt)("li",{parentName:"ol"},"disease phenotype itself was mapped"),(0,i.kt)("li",{parentName:"ol"},"molecular basis of the disorder is known"),(0,i.kt)("li",{parentName:"ol"},"disorder is a chromosome deletion or duplication syndrome")),(0,i.kt)("h4",{id:"inheritance"},"Inheritance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"autosomal recessive"),(0,i.kt)("li",{parentName:"ul"},"autosomal dominant")),(0,i.kt)("h4",{id:"comments"},"Comments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"contributes to the susceptibility to multifactorial disorders"),(0,i.kt)("li",{parentName:"ul"},"variations that lead to apparently abnormal laboratory test values"),(0,i.kt)("li",{parentName:"ul"},"unconfirmed mapping")))}d.isMDXComponent=!0}}]);