"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[7416],{3905:(a,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>A});var n=t(67294);function i(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function c(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function o(a,e){if(null==a)return{};var t,n,i=function(a,e){if(null==a)return{};var t,n,i={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(i[t]=a[t]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(i[t]=a[t])}return i}var s=n.createContext({}),l=function(a){var e=n.useContext(s),t=e;return a&&(t="function"==typeof a?a(e):c(c({},e),a)),t},d=function(a){var e=l(a.components);return n.createElement(s.Provider,{value:e},a.children)},m="mdxType",u={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(a,e){var t=a.components,i=a.mdxType,r=a.originalType,s=a.parentName,d=o(a,["components","mdxType","originalType","parentName"]),m=l(t),p=i,A=m["".concat(s,".").concat(p)]||m[p]||u[p]||r;return t?n.createElement(A,c(c({ref:e},d),{},{components:t})):n.createElement(A,c({ref:e},d))}));function A(a,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var r=t.length,c=new Array(r);c[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=a,o[m]="string"==typeof a?a:i,c[1]=o;for(var l=2;l<r;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},62418:(a,e,t)=>{t.r(e),t.d(e,{contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=t(87462),i=(t(67294),t(3905));const r={title:"Cancer Hotspots"},c=void 0,o={unversionedId:"data-sources/cancer-hotspots",id:"version-3.21/data-sources/cancer-hotspots",title:"Cancer Hotspots",description:"Overview",source:"@site/versioned_docs/version-3.21/data-sources/cancer-hotspots.mdx",sourceDirName:"data-sources",slug:"/data-sources/cancer-hotspots",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.21/data-sources/cancer-hotspots",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/versioned_docs/version-3.21/data-sources/cancer-hotspots.mdx",tags:[],version:"3.21",frontMatter:{title:"Cancer Hotspots"},sidebar:"docs",previous:{title:"Amino Acid Conservation",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.21/data-sources/amino-acid-conservation"},next:{title:"ClinGen",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.21/data-sources/clingen"}},s=[{value:"Overview",id:"overview",children:[],level:2},{value:"Data extraction",id:"data-extraction",children:[{value:"Example",id:"example",children:[{value:"SNV",id:"snv",children:[],level:4},{value:"Indel",id:"indel",children:[],level:4}],level:3},{value:"Parsing",id:"parsing",children:[],level:3}],level:2},{value:"JSON Output",id:"json-output",children:[],level:2}],l={toc:s},d="wrapper";function m(a){let{components:e,...t}=a;return(0,i.kt)(d,(0,n.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Cancer Hotspots, a resource for statistically significant mutations in cancer. It provides information about statistically significantly recurrent mutations identified in large scale cancer genomics data."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Chang MT, Bhattarai TS, Schram AM, Bielski CM, Donoghue MTA, Jonsson P, Chakravarty D, Phillips S, Kandoth C, Penson A, Gorelick A, Shamu T, Patel S, Harris C, Gao J, Sumer SO, Kundra R, Razavi P, Li BT, Reales DN, Socci ND, Jayakumaran G, Zehir A, Benayed R, Arcila ME, Chandarlapaty S, Ladanyi M, Schultz N, Baselga J, Berger MF, Rosen N, Solit DB, Hyman DM, Taylor BS. Accelerating Discovery of Functional Mutant Alleles in Cancer. Cancer Discov. 2018 Feb;8(2):174-183. doi: 10.1158/2159-8290.CD-17-0321. Epub 2017 Dec 15. PMID: 29247016; PMCID: PMC5809279."),(0,i.kt)("p",{parentName:"div"},"Chang MT, Asthana S, Gao SP, Lee BH, Chapman JS, Kandoth C, Gao J, Socci ND, Solit DB, Olshen AB, Schultz N, Taylor BS. Identifying recurrent mutations in cancer reveals widespread lineage diversity and mutational specificity. Nat Biotechnol. 2016 Feb;34(2):155-63. doi: 10.1038/nbt.3391. Epub 2015 Nov 30. PMID: 26619011; PMCID: PMC4744099."))),(0,i.kt)("h2",{id:"data-extraction"},"Data extraction"),(0,i.kt)("p",null,"Nirvana currently parses SNV and indel tabs from hotspots_v2.xls file to extract the relevant content."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("h4",{id:"snv"},"SNV"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},'Hugo_Symbol     Amino_Acid_Position     log10_pvalue    Mutation_Count  Reference_Amino_Acid    Total_Mutations_in_Gene Median_Allele_Freq_Rank Allele_Freq_Rank        Variant_Amino_Acid   Codon_Change     Genomic_Position        Detailed_Cancer_Types   Organ_Types     Tri-nucleotides Mutability      mu_protein      Total_Samples   Analysis_Type   qvalue  tm      qvalue_pancanIs_repeat        seq     length  align100        pad12entropy    pad24entropy    pad36entropy    TP      reason  n_MSK   n_Retro judgement       inNBT   inOncokb        ref     qvaluect     ct       Samples\nNRAS    61      -1237.69143477067       422     Q:422   620     0.333333333333333       295|0.692307692307692:0.733333333333333:0.2:0.933333333333333:1:0.25:0.666666666666667:1:0.25:0.571428571428571:1:1:0.5:0.363636363636364:0.428571428571429:0.0833333333333333:1:1:1:1:0.5:1:0.125:0.363636363636364:0.173913043478261:0.25:1:0.8:0.153846153846154:0.857142857142857:0.5:0.5:0.5:1:0.272727272727273:0.214285714285714:1:0.5:1:1:0.2:0.333333333333333:0.6875:0.708333333333333:0.25:0.266666666666667:0.111111111111111:1:1:0.333333333333333:0.428571428571429:0.666666666666667:0.25:0.5:0.833333333333333:0.5:0.735294117647059:0.0476190476190476:0.1:0.133333333333333:0.230769230769231:0.25:1:0.5:0.294117647058824:0.217391304347826:0.46875:0.5:1:0.2:0.166666666666667:0.666666666666667:1:0.8:0.407407407407407:1:0.0212765957446809:0.285714285714286:0.0909090909090909:0.333333333333333:0.2:0.333333333333333:0.5:0.5:1:0.111111111111111:0.5:0.903846153846154:0.5:0.2:1:1:0.0909090909090909:0.4:0.428571428571429:0.0625:0.25:0.833333333333333:1:0.956521739130435:0.111111111111111:0.6:0.212765957446809:0.5:0.207547169811321:1:0.75:0.294117647058824:0.666666666666667:1:0.333333333333333:0.714285714285714:0.142857142857143:1:0.3:0.416666666666667:0.272727272727273:0.25:0.333333333333333:0.345454545454545:0.0952380952380952:0.166666666666667:0.111111111111111:0.454545454545455:0.0666666666666667:1:0.636363636363636:0.636363636363636:0.25:0.272727272727273:0.824324324324324:1:0.75:0.545454545454545:1:1:0.0769230769230769:0.363636363636364:0.290322580645161:0.333333333333333:0.179487179487179:1:0.0666666666666667:0.333333333333333:1:0.478260869565217:0.166666666666667:1:1:0.0276497695852535:0.0716845878136201:0.0263736263736264:0.933333333333333:1:0.5:1:1:0.8125:0.361788617886179:0.113761467889908:0.113761467889908:0.157894736842105:0.333333333333333:0.0555555555555556:0.0357142857142857:0.375:0.111111111111111:0.584415584415584:0.0350877192982456:0.751111111111111:0.761245674740484:0.164989939637827:0.196652719665272:0.135549872122762:0.172113289760349:0.0240963855421687:0.0620767494356659:0.142268041237113:0.147441457068517:0.147959183673469:0.038961038961039:0.686274509803922:0.0929054054054054:0.364787111622555:0.331306990881459:0.691449814126394:0.691449814126394:0.0769230769230769:0.347826086956522:0.117647058823529:0.148148148148148:0.05:0.290030211480363:0.680272108843537:0.188679245283019:0.0701754385964912:0.801526717557252:0.236842105263158:0.1953125:0.0539906103286385:0.015625:0.0390492359932088:0.00790513833992095:0.0597826086956522:0.136783733826248:0.362359550561798:0.0713719270420301:0.328621908127208:0.0657672849915683:0.320099255583127:0.075:0.433021806853583:0.524818401937046:0.524818401937046:0.259259259259259:0.483695652173913:0.0269360269360269:0.100486223662885:0.785507246376812:0.137870855148342:0.472340425531915:0.194331983805668:0.0830769230769231:0.418055555555556:0.546296296296296:0.247596153846154:0.52:0.39832285115304:0.601866251944012:0.234016887816647:0.214007782101167:0.153153153153153:0.137180700094607:0.0666666666666667:0.037037037037037:0.1:0.2:0.458333333333333:0.0588235294117647:0.111111111111111:0.333333333333333:0.181818181818182:0.473684210526316:0.5:0.2:0.136363636363636:0.0769230769230769:0.142857142857143:0.285714285714286:0.25:0.445714285714286:0.149377593360996:0.0227790432801822:0.182278481012658:0.540123456790123:0.021505376344086:0.541666666666667:0.00429184549356223:0.473684210526316:0.103508771929825:0.0930232558139535:0.391304347826087:0.072:0.0113636363636364:0.148837209302326:0.448051948051948:0.761038961038961:0.530373831775701:0.222857142857143:0.433862433862434:0.0810810810810811:0.0723327305605787:0.410714285714286:0.247910863509749:0.384615384615385:0.125:0.24:0.783582089552239:0.0646651270207852:0.445569620253165:0.754777070063694:0.165137614678899:0.10732538330494:0.0375:0.538461538461538:0.0981387478849408:0.029126213592233:0.0833333333333333:0.443514644351464:0.0917431192660551:0.03125:0.674418604651163:0.3125:0.375:0.314285714285714     R:204   cAa/cGa:203|Caa/Aaa:140|cAa/cTa:46|caA/caT:14|caA/caC:13|ggACaa/ggCAaa:2|cAa/cCa:2|Caa/Taa:1|CAa/AGa:1  1:115256529_252|1:115256530_143|1:115256528_27        skcm:787:186|thpa:486:43|mm:275:27|thpd:58:18|coadread:683:16|luad:2057:15|coad:712:13|mup:42:7|aml:198:6|blca:852:5|thap:33:5|read:149:5|rms:50:5|uec:339:5|nsgct:152:5|cll:283:4|ihch:104:4|lgsoc:17:3|sem:59:3|thhc:21:3|erms:8:3|lggnos:544:3|utuc:76:2|cup:135:2|thfo:5:2|sarcl:13:2|mfh:53:2|gbm:688:2|soc:468:2|stad:748:2|thym:125:2|es:229:1|npc:66:1|unk:146:1|panet:86:1|hnsc:643:1|armm:21:1|tmt:3:1|acrm:23:1|thyc:9:1|odg:36:1|paasc:8:1|hnmucm:11:1|blad:7:1|esca:556:1|mixed:3:1|chol:152:1|hcc:620:1|sarc:280:1|chrcc:88:1|aca:93:1     skin:974:187|thyroid:618:71|blood:890:37|bowel:1782:35|lung:2761:17|unk:357:11|softtissue:739:11|testis:217:9|bladder:958:8|cnsbrain:2270:6|ovaryfallopiantube:699:5|biliarytract:358:5|uterus:618:5|headandneck:988:3|thymus:162:3|esophagusstomach:1407:3|pancreas:1059:2|bone:297:1|liver:636:1|kidney:1304:1|adrenalgland:291:1    TTG|ACA|CTT|TCG|CCC|CCA 0.0120300464273379      0.0267810594223141    24592   "pancan,skin,thyroid,bowel,blood,lung,softtissue,testis,bladder,cnsbrain,biliarytract,ovaryfallopiantube,uterus,thymus,headandneck,esophagusstomach"    0       NRAS 61       0       FALSE           NA      1       1.16795714944678        1.26187131041539        1.29838371117394        TRUE            165     257     RETAIN  TRUE    TRUE    Q       0    skin     skin:88|thyroid:54|blood:15|bowel:8|testis:5|biliarytract:4|bladder:4|lung:4|ovaryfallopiantube:4|softtissue:3|unk:3|uterus:3|cnsbrain:2|esophagusstomach:2|headandneck:2|bone:1|pancreas:1|thymus:1\nNRAS    61      -1237.69143477067       422     Q:422   620     0.333333333333333       295|0.692307692307692:0.733333333333333:0.2:0.933333333333333:1:0.25:0.666666666666667:1:0.25:0.571428571428571:1:1:0.5:0.363636363636364:0.428571428571429:0.0833333333333333:1:1:1:1:0.5:1:0.125:0.363636363636364:0.173913043478261:0.25:1:0.8:0.153846153846154:0.857142857142857:0.5:0.5:0.5:1:0.272727272727273:0.214285714285714:1:0.5:1:1:0.2:0.333333333333333:0.6875:0.708333333333333:0.25:0.266666666666667:0.111111111111111:1:1:0.333333333333333:0.428571428571429:0.666666666666667:0.25:0.5:0.833333333333333:0.5:0.735294117647059:0.0476190476190476:0.1:0.133333333333333:0.230769230769231:0.25:1:0.5:0.294117647058824:0.217391304347826:0.46875:0.5:1:0.2:0.166666666666667:0.666666666666667:1:0.8:0.407407407407407:1:0.0212765957446809:0.285714285714286:0.0909090909090909:0.333333333333333:0.2:0.333333333333333:0.5:0.5:1:0.111111111111111:0.5:0.903846153846154:0.5:0.2:1:1:0.0909090909090909:0.4:0.428571428571429:0.0625:0.25:0.833333333333333:1:0.956521739130435:0.111111111111111:0.6:0.212765957446809:0.5:0.207547169811321:1:0.75:0.294117647058824:0.666666666666667:1:0.333333333333333:0.714285714285714:0.142857142857143:1:0.3:0.416666666666667:0.272727272727273:0.25:0.333333333333333:0.345454545454545:0.0952380952380952:0.166666666666667:0.111111111111111:0.454545454545455:0.0666666666666667:1:0.636363636363636:0.636363636363636:0.25:0.272727272727273:0.824324324324324:1:0.75:0.545454545454545:1:1:0.0769230769230769:0.363636363636364:0.290322580645161:0.333333333333333:0.179487179487179:1:0.0666666666666667:0.333333333333333:1:0.478260869565217:0.166666666666667:1:1:0.0276497695852535:0.0716845878136201:0.0263736263736264:0.933333333333333:1:0.5:1:1:0.8125:0.361788617886179:0.113761467889908:0.113761467889908:0.157894736842105:0.333333333333333:0.0555555555555556:0.0357142857142857:0.375:0.111111111111111:0.584415584415584:0.0350877192982456:0.751111111111111:0.761245674740484:0.164989939637827:0.196652719665272:0.135549872122762:0.172113289760349:0.0240963855421687:0.0620767494356659:0.142268041237113:0.147441457068517:0.147959183673469:0.038961038961039:0.686274509803922:0.0929054054054054:0.364787111622555:0.331306990881459:0.691449814126394:0.691449814126394:0.0769230769230769:0.347826086956522:0.117647058823529:0.148148148148148:0.05:0.290030211480363:0.680272108843537:0.188679245283019:0.0701754385964912:0.801526717557252:0.236842105263158:0.1953125:0.0539906103286385:0.015625:0.0390492359932088:0.00790513833992095:0.0597826086956522:0.136783733826248:0.362359550561798:0.0713719270420301:0.328621908127208:0.0657672849915683:0.320099255583127:0.075:0.433021806853583:0.524818401937046:0.524818401937046:0.259259259259259:0.483695652173913:0.0269360269360269:0.100486223662885:0.785507246376812:0.137870855148342:0.472340425531915:0.194331983805668:0.0830769230769231:0.418055555555556:0.546296296296296:0.247596153846154:0.52:0.39832285115304:0.601866251944012:0.234016887816647:0.214007782101167:0.153153153153153:0.137180700094607:0.0666666666666667:0.037037037037037:0.1:0.2:0.458333333333333:0.0588235294117647:0.111111111111111:0.333333333333333:0.181818181818182:0.473684210526316:0.5:0.2:0.136363636363636:0.0769230769230769:0.142857142857143:0.285714285714286:0.25:0.445714285714286:0.149377593360996:0.0227790432801822:0.182278481012658:0.540123456790123:0.021505376344086:0.541666666666667:0.00429184549356223:0.473684210526316:0.103508771929825:0.0930232558139535:0.391304347826087:0.072:0.0113636363636364:0.148837209302326:0.448051948051948:0.761038961038961:0.530373831775701:0.222857142857143:0.433862433862434:0.0810810810810811:0.0723327305605787:0.410714285714286:0.247910863509749:0.384615384615385:0.125:0.24:0.783582089552239:0.0646651270207852:0.445569620253165:0.754777070063694:0.165137614678899:0.10732538330494:0.0375:0.538461538461538:0.0981387478849408:0.029126213592233:0.0833333333333333:0.443514644351464:0.0917431192660551:0.03125:0.674418604651163:0.3125:0.375:0.314285714285714     K:142   cAa/cGa:203|Caa/Aaa:140|cAa/cTa:46|caA/caT:14|caA/caC:13|ggACaa/ggCAaa:2|cAa/cCa:2|Caa/Taa:1|CAa/AGa:1  1:115256529_252|1:115256530_143|1:115256528_27        skcm:787:186|thpa:486:43|mm:275:27|thpd:58:18|coadread:683:16|luad:2057:15|coad:712:13|mup:42:7|aml:198:6|blca:852:5|thap:33:5|read:149:5|rms:50:5|uec:339:5|nsgct:152:5|cll:283:4|ihch:104:4|lgsoc:17:3|sem:59:3|thhc:21:3|erms:8:3|lggnos:544:3|utuc:76:2|cup:135:2|thfo:5:2|sarcl:13:2|mfh:53:2|gbm:688:2|soc:468:2|stad:748:2|thym:125:2|es:229:1|npc:66:1|unk:146:1|panet:86:1|hnsc:643:1|armm:21:1|tmt:3:1|acrm:23:1|thyc:9:1|odg:36:1|paasc:8:1|hnmucm:11:1|blad:7:1|esca:556:1|mixed:3:1|chol:152:1|hcc:620:1|sarc:280:1|chrcc:88:1|aca:93:1     skin:974:187|thyroid:618:71|blood:890:37|bowel:1782:35|lung:2761:17|unk:357:11|softtissue:739:11|testis:217:9|bladder:958:8|cnsbrain:2270:6|ovaryfallopiantube:699:5|biliarytract:358:5|uterus:618:5|headandneck:988:3|thymus:162:3|esophagusstomach:1407:3|pancreas:1059:2|bone:297:1|liver:636:1|kidney:1304:1|adrenalgland:291:1    TTG|ACA|CTT|TCG|CCC|CCA 0.0120300464273379      0.0267810594223141    24592   "pancan,skin,thyroid,bowel,blood,lung,softtissue,testis,bladder,cnsbrain,biliarytract,ovaryfallopiantube,uterus,thymus,headandneck,esophagusstomach"    0       NRAS 61       0       FALSE           NA      1       1.16795714944678        1.26187131041539        1.29838371117394        TRUE            165     257     RETAIN  TRUE    TRUE    Q       0    skin     skin:62|bowel:18|thyroid:17|blood:12|softtissue:6|lung:5|unk:5|bladder:3|cnsbrain:2|thymus:2|adrenalgland:1|biliarytract:1|esophagusstomach:1|headandneck:1|kidney:1|liver:1|ovaryfallopiantube:1|pancreas:1|testis:1|uterus:1\nNRAS    61      -1237.69143477067       422     Q:422   620     0.333333333333333       295|0.692307692307692:0.733333333333333:0.2:0.933333333333333:1:0.25:0.666666666666667:1:0.25:0.571428571428571:1:1:0.5:0.363636363636364:0.428571428571429:0.0833333333333333:1:1:1:1:0.5:1:0.125:0.363636363636364:0.173913043478261:0.25:1:0.8:0.153846153846154:0.857142857142857:0.5:0.5:0.5:1:0.272727272727273:0.214285714285714:1:0.5:1:1:0.2:0.333333333333333:0.6875:0.708333333333333:0.25:0.266666666666667:0.111111111111111:1:1:0.333333333333333:0.428571428571429:0.666666666666667:0.25:0.5:0.833333333333333:0.5:0.735294117647059:0.0476190476190476:0.1:0.133333333333333:0.230769230769231:0.25:1:0.5:0.294117647058824:0.217391304347826:0.46875:0.5:1:0.2:0.166666666666667:0.666666666666667:1:0.8:0.407407407407407:1:0.0212765957446809:0.285714285714286:0.0909090909090909:0.333333333333333:0.2:0.333333333333333:0.5:0.5:1:0.111111111111111:0.5:0.903846153846154:0.5:0.2:1:1:0.0909090909090909:0.4:0.428571428571429:0.0625:0.25:0.833333333333333:1:0.956521739130435:0.111111111111111:0.6:0.212765957446809:0.5:0.207547169811321:1:0.75:0.294117647058824:0.666666666666667:1:0.333333333333333:0.714285714285714:0.142857142857143:1:0.3:0.416666666666667:0.272727272727273:0.25:0.333333333333333:0.345454545454545:0.0952380952380952:0.166666666666667:0.111111111111111:0.454545454545455:0.0666666666666667:1:0.636363636363636:0.636363636363636:0.25:0.272727272727273:0.824324324324324:1:0.75:0.545454545454545:1:1:0.0769230769230769:0.363636363636364:0.290322580645161:0.333333333333333:0.179487179487179:1:0.0666666666666667:0.333333333333333:1:0.478260869565217:0.166666666666667:1:1:0.0276497695852535:0.0716845878136201:0.0263736263736264:0.933333333333333:1:0.5:1:1:0.8125:0.361788617886179:0.113761467889908:0.113761467889908:0.157894736842105:0.333333333333333:0.0555555555555556:0.0357142857142857:0.375:0.111111111111111:0.584415584415584:0.0350877192982456:0.751111111111111:0.761245674740484:0.164989939637827:0.196652719665272:0.135549872122762:0.172113289760349:0.0240963855421687:0.0620767494356659:0.142268041237113:0.147441457068517:0.147959183673469:0.038961038961039:0.686274509803922:0.0929054054054054:0.364787111622555:0.331306990881459:0.691449814126394:0.691449814126394:0.0769230769230769:0.347826086956522:0.117647058823529:0.148148148148148:0.05:0.290030211480363:0.680272108843537:0.188679245283019:0.0701754385964912:0.801526717557252:0.236842105263158:0.1953125:0.0539906103286385:0.015625:0.0390492359932088:0.00790513833992095:0.0597826086956522:0.136783733826248:0.362359550561798:0.0713719270420301:0.328621908127208:0.0657672849915683:0.320099255583127:0.075:0.433021806853583:0.524818401937046:0.524818401937046:0.259259259259259:0.483695652173913:0.0269360269360269:0.100486223662885:0.785507246376812:0.137870855148342:0.472340425531915:0.194331983805668:0.0830769230769231:0.418055555555556:0.546296296296296:0.247596153846154:0.52:0.39832285115304:0.601866251944012:0.234016887816647:0.214007782101167:0.153153153153153:0.137180700094607:0.0666666666666667:0.037037037037037:0.1:0.2:0.458333333333333:0.0588235294117647:0.111111111111111:0.333333333333333:0.181818181818182:0.473684210526316:0.5:0.2:0.136363636363636:0.0769230769230769:0.142857142857143:0.285714285714286:0.25:0.445714285714286:0.149377593360996:0.0227790432801822:0.182278481012658:0.540123456790123:0.021505376344086:0.541666666666667:0.00429184549356223:0.473684210526316:0.103508771929825:0.0930232558139535:0.391304347826087:0.072:0.0113636363636364:0.148837209302326:0.448051948051948:0.761038961038961:0.530373831775701:0.222857142857143:0.433862433862434:0.0810810810810811:0.0723327305605787:0.410714285714286:0.247910863509749:0.384615384615385:0.125:0.24:0.783582089552239:0.0646651270207852:0.445569620253165:0.754777070063694:0.165137614678899:0.10732538330494:0.0375:0.538461538461538:0.0981387478849408:0.029126213592233:0.0833333333333333:0.443514644351464:0.0917431192660551:0.03125:0.674418604651163:0.3125:0.375:0.314285714285714     L:46    cAa/cGa:203|Caa/Aaa:140|cAa/cTa:46|caA/caT:14|caA/caC:13|ggACaa/ggCAaa:2|cAa/cCa:2|Caa/Taa:1|CAa/AGa:1  1:115256529_252|1:115256530_143|1:115256528_27        skcm:787:186|thpa:486:43|mm:275:27|thpd:58:18|coadread:683:16|luad:2057:15|coad:712:13|mup:42:7|aml:198:6|blca:852:5|thap:33:5|read:149:5|rms:50:5|uec:339:5|nsgct:152:5|cll:283:4|ihch:104:4|lgsoc:17:3|sem:59:3|thhc:21:3|erms:8:3|lggnos:544:3|utuc:76:2|cup:135:2|thfo:5:2|sarcl:13:2|mfh:53:2|gbm:688:2|soc:468:2|stad:748:2|thym:125:2|es:229:1|npc:66:1|unk:146:1|panet:86:1|hnsc:643:1|armm:21:1|tmt:3:1|acrm:23:1|thyc:9:1|odg:36:1|paasc:8:1|hnmucm:11:1|blad:7:1|esca:556:1|mixed:3:1|chol:152:1|hcc:620:1|sarc:280:1|chrcc:88:1|aca:93:1     skin:974:187|thyroid:618:71|blood:890:37|bowel:1782:35|lung:2761:17|unk:357:11|softtissue:739:11|testis:217:9|bladder:958:8|cnsbrain:2270:6|ovaryfallopiantube:699:5|biliarytract:358:5|uterus:618:5|headandneck:988:3|thymus:162:3|esophagusstomach:1407:3|pancreas:1059:2|bone:297:1|liver:636:1|kidney:1304:1|adrenalgland:291:1    TTG|ACA|CTT|TCG|CCC|CCA 0.0120300464273379      0.0267810594223141    24592   "pancan,skin,thyroid,bowel,blood,lung,softtissue,testis,bladder,cnsbrain,biliarytract,ovaryfallopiantube,uterus,thymus,headandneck,esophagusstomach"    0       NRAS 61       0       FALSE           NA      1       1.16795714944678        1.26187131041539        1.29838371117394        TRUE            165     257     RETAIN  TRUE    TRUE    Q       0    skin     skin:24|bowel:7|lung:6|blood:2|cnsbrain:2|unk:2|bladder:1|softtissue:1|uterus:1\nNRAS    61      -1237.69143477067       422     Q:422   620     0.333333333333333       295|0.692307692307692:0.733333333333333:0.2:0.933333333333333:1:0.25:0.666666666666667:1:0.25:0.571428571428571:1:1:0.5:0.363636363636364:0.428571428571429:0.0833333333333333:1:1:1:1:0.5:1:0.125:0.363636363636364:0.173913043478261:0.25:1:0.8:0.153846153846154:0.857142857142857:0.5:0.5:0.5:1:0.272727272727273:0.214285714285714:1:0.5:1:1:0.2:0.333333333333333:0.6875:0.708333333333333:0.25:0.266666666666667:0.111111111111111:1:1:0.333333333333333:0.428571428571429:0.666666666666667:0.25:0.5:0.833333333333333:0.5:0.735294117647059:0.0476190476190476:0.1:0.133333333333333:0.230769230769231:0.25:1:0.5:0.294117647058824:0.217391304347826:0.46875:0.5:1:0.2:0.166666666666667:0.666666666666667:1:0.8:0.407407407407407:1:0.0212765957446809:0.285714285714286:0.0909090909090909:0.333333333333333:0.2:0.333333333333333:0.5:0.5:1:0.111111111111111:0.5:0.903846153846154:0.5:0.2:1:1:0.0909090909090909:0.4:0.428571428571429:0.0625:0.25:0.833333333333333:1:0.956521739130435:0.111111111111111:0.6:0.212765957446809:0.5:0.207547169811321:1:0.75:0.294117647058824:0.666666666666667:1:0.333333333333333:0.714285714285714:0.142857142857143:1:0.3:0.416666666666667:0.272727272727273:0.25:0.333333333333333:0.345454545454545:0.0952380952380952:0.166666666666667:0.111111111111111:0.454545454545455:0.0666666666666667:1:0.636363636363636:0.636363636363636:0.25:0.272727272727273:0.824324324324324:1:0.75:0.545454545454545:1:1:0.0769230769230769:0.363636363636364:0.290322580645161:0.333333333333333:0.179487179487179:1:0.0666666666666667:0.333333333333333:1:0.478260869565217:0.166666666666667:1:1:0.0276497695852535:0.0716845878136201:0.0263736263736264:0.933333333333333:1:0.5:1:1:0.8125:0.361788617886179:0.113761467889908:0.113761467889908:0.157894736842105:0.333333333333333:0.0555555555555556:0.0357142857142857:0.375:0.111111111111111:0.584415584415584:0.0350877192982456:0.751111111111111:0.761245674740484:0.164989939637827:0.196652719665272:0.135549872122762:0.172113289760349:0.0240963855421687:0.0620767494356659:0.142268041237113:0.147441457068517:0.147959183673469:0.038961038961039:0.686274509803922:0.0929054054054054:0.364787111622555:0.331306990881459:0.691449814126394:0.691449814126394:0.0769230769230769:0.347826086956522:0.117647058823529:0.148148148148148:0.05:0.290030211480363:0.680272108843537:0.188679245283019:0.0701754385964912:0.801526717557252:0.236842105263158:0.1953125:0.0539906103286385:0.015625:0.0390492359932088:0.00790513833992095:0.0597826086956522:0.136783733826248:0.362359550561798:0.0713719270420301:0.328621908127208:0.0657672849915683:0.320099255583127:0.075:0.433021806853583:0.524818401937046:0.524818401937046:0.259259259259259:0.483695652173913:0.0269360269360269:0.100486223662885:0.785507246376812:0.137870855148342:0.472340425531915:0.194331983805668:0.0830769230769231:0.418055555555556:0.546296296296296:0.247596153846154:0.52:0.39832285115304:0.601866251944012:0.234016887816647:0.214007782101167:0.153153153153153:0.137180700094607:0.0666666666666667:0.037037037037037:0.1:0.2:0.458333333333333:0.0588235294117647:0.111111111111111:0.333333333333333:0.181818181818182:0.473684210526316:0.5:0.2:0.136363636363636:0.0769230769230769:0.142857142857143:0.285714285714286:0.25:0.445714285714286:0.149377593360996:0.0227790432801822:0.182278481012658:0.540123456790123:0.021505376344086:0.541666666666667:0.00429184549356223:0.473684210526316:0.103508771929825:0.0930232558139535:0.391304347826087:0.072:0.0113636363636364:0.148837209302326:0.448051948051948:0.761038961038961:0.530373831775701:0.222857142857143:0.433862433862434:0.0810810810810811:0.0723327305605787:0.410714285714286:0.247910863509749:0.384615384615385:0.125:0.24:0.783582089552239:0.0646651270207852:0.445569620253165:0.754777070063694:0.165137614678899:0.10732538330494:0.0375:0.538461538461538:0.0981387478849408:0.029126213592233:0.0833333333333333:0.443514644351464:0.0917431192660551:0.03125:0.674418604651163:0.3125:0.375:0.314285714285714     H:27    cAa/cGa:203|Caa/Aaa:140|cAa/cTa:46|caA/caT:14|caA/caC:13|ggACaa/ggCAaa:2|cAa/cCa:2|Caa/Taa:1|CAa/AGa:1  1:115256529_252|1:115256530_143|1:115256528_27        skcm:787:186|thpa:486:43|mm:275:27|thpd:58:18|coadread:683:16|luad:2057:15|coad:712:13|mup:42:7|aml:198:6|blca:852:5|thap:33:5|read:149:5|rms:50:5|uec:339:5|nsgct:152:5|cll:283:4|ihch:104:4|lgsoc:17:3|sem:59:3|thhc:21:3|erms:8:3|lggnos:544:3|utuc:76:2|cup:135:2|thfo:5:2|sarcl:13:2|mfh:53:2|gbm:688:2|soc:468:2|stad:748:2|thym:125:2|es:229:1|npc:66:1|unk:146:1|panet:86:1|hnsc:643:1|armm:21:1|tmt:3:1|acrm:23:1|thyc:9:1|odg:36:1|paasc:8:1|hnmucm:11:1|blad:7:1|esca:556:1|mixed:3:1|chol:152:1|hcc:620:1|sarc:280:1|chrcc:88:1|aca:93:1     skin:974:187|thyroid:618:71|blood:890:37|bowel:1782:35|lung:2761:17|unk:357:11|softtissue:739:11|testis:217:9|bladder:958:8|cnsbrain:2270:6|ovaryfallopiantube:699:5|biliarytract:358:5|uterus:618:5|headandneck:988:3|thymus:162:3|esophagusstomach:1407:3|pancreas:1059:2|bone:297:1|liver:636:1|kidney:1304:1|adrenalgland:291:1    TTG|ACA|CTT|TCG|CCC|CCA 0.0120300464273379      0.0267810594223141    24592   "pancan,skin,thyroid,bowel,blood,lung,softtissue,testis,bladder,cnsbrain,biliarytract,ovaryfallopiantube,uterus,thymus,headandneck,esophagusstomach"    0       NRAS 61       0       FALSE           NA      1       1.16795714944678        1.26187131041539        1.29838371117394        TRUE            165     257     RETAIN  TRUE    TRUE    Q       0    skin     skin:12|blood:7|bowel:2|lung:2|testis:2|softtissue:1|unk:1\n')),(0,i.kt)("h4",{id:"indel"},"Indel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"Hugo_Symbol     Amino_Acid_Position     log10_pvalue    Mutation_Count  Reference_Amino_Acid    Total_Mutations_in_Gene Median_Allele_Freq_Rank Allele_Freq_Rank        SNP_ID  Variant_Amino_Acid    Codon_Change    Genomic_Position        Detailed_Cancer_Types   Organ_Types     Tri-nucleotides Mutability      mu_protein      ccf     Total_Samples   indel_size      qvalue  tm   Is_repeat        seq     length  align100        pad12entropy    pad24entropy    pad36entropy    TP      reason  n_MSK   n_Retro judgement       inNBT   inOncokb        Samples\nSMARCA4 546     -7.75235638169585       5       QK:5    101     NA      NA      :NA     K546del:5       cAGAag/cag:5    19:11106926_5   lgg:536:4|dlbcl:246:1   cnsbrain:2283:4|lymph:366:1  NA       0.0573226243518208      0.0473351872460284      NA      24592   1       0.000230672905611517    SMARCA4 546     FALSE   NA      NA      1       0.91489630957268        1.2950060272429       1.33965330506364        FALSE   LOCAL_ENTROPY   1       4       RETAIN  FALSE   FALSE   cnsbrain:4|lymph:1\nCDKN2A  27-42   -6.82111516846557       12      VRALLEA:4|LEAGALP:3|ALPN:1|EV:1|GA:1|PNAPN:1|RALLEA:1   219     NA      NA      :NA     V28_E33del:4    gTGCGGGCGCTGCTGGAGGcg/gcg:4|cTGGAGGCGGGGGCGCTGCcc/ccc:3|GGGGCG/-:1|gCGCTGCCCAac/gac:1|gAGGtg/gtg:1|CGGGCGCTGCTGGAGGCG/-:1|ccCAACGCACCGAAt/cct:1       9:21974727_4|9:21974715_3|9:21974745_1|9:21974725_1|9:21974719_1|9:21974712_1|9:21974702_1    luad:2071:3|esca:556:2|blca:852:1|skcm:192:1|icemu:1:1|paad:932:1|mel:595:1|stad:748:1|hnsc:650:1       esophagusstomach:1413:3|lung:2767:3|skin:974:2|bladder:955:1|cervix:234:1|pancreas:1059:1|headandneck:988:1   NA      0.0573226243518208      0.0473351872460284      NA      24592   15      8.77193090544841e-05    CDKN2A 27-42    FALSE   NA      NA      1    0.857780912379927        1.13008762297022        1.1577633500238 FALSE   LOCAL_ENTROPY   6       6       RETAIN  FALSE   FALSE   cervix:1|esophagusstomach:1|lung:1|pancreas:1\nCDKN2A  27-42   -6.82111516846557       12      VRALLEA:4|LEAGALP:3|ALPN:1|EV:1|GA:1|PNAPN:1|RALLEA:1   219     NA      NA      :NA     L32_L37del:3    gTGCGGGCGCTGCTGGAGGcg/gcg:4|cTGGAGGCGGGGGCGCTGCcc/ccc:3|GGGGCG/-:1|gCGCTGCCCAac/gac:1|gAGGtg/gtg:1|CGGGCGCTGCTGGAGGCG/-:1|ccCAACGCACCGAAt/cct:1       9:21974727_4|9:21974715_3|9:21974745_1|9:21974725_1|9:21974719_1|9:21974712_1|9:21974702_1    luad:2071:3|esca:556:2|blca:852:1|skcm:192:1|icemu:1:1|paad:932:1|mel:595:1|stad:748:1|hnsc:650:1       esophagusstomach:1413:3|lung:2767:3|skin:974:2|bladder:955:1|cervix:234:1|pancreas:1059:1|headandneck:988:1   NA      0.0573226243518208      0.0473351872460284      NA      24592   15      8.77193090544841e-05    CDKN2A 27-42    FALSE   NA      NA      1    0.857780912379927        1.13008762297022        1.1577633500238 FALSE   LOCAL_ENTROPY   6       6       RETAIN  FALSE   FALSE   skin:2|esophagusstomach:1\nCDKN2A  27-42   -6.82111516846557       12      VRALLEA:4|LEAGALP:3|ALPN:1|EV:1|GA:1|PNAPN:1|RALLEA:1   219     NA      NA      :NA     A36_N39delinsD:1        gTGCGGGCGCTGCTGGAGGcg/gcg:4|cTGGAGGCGGGGGCGCTGCcc/ccc:3|GGGGCG/-:1|gCGCTGCCCAac/gac:1|gAGGtg/gtg:1|CGGGCGCTGCTGGAGGCG/-:1|ccCAACGCACCGAAt/cct:1       9:21974727_4|9:21974715_3|9:21974745_1|9:21974725_1|9:21974719_1|9:21974712_1|9:21974702_1    luad:2071:3|esca:556:2|blca:852:1|skcm:192:1|icemu:1:1|paad:932:1|mel:595:1|stad:748:1|hnsc:650:1       esophagusstomach:1413:3|lung:2767:3|skin:974:2|bladder:955:1|cervix:234:1|pancreas:1059:1|headandneck:988:1   NA      0.0573226243518208      0.0473351872460284      NA      24592   15      8.77193090544841e-05    CDKN2A 27-42    FALSE   NA      NA   0.857780912379927        1.13008762297022        1.1577633500238 FALSE   LOCAL_ENTROPY   6       6       RETAIN  FALSE   FALSE   lung:1\n")),(0,i.kt)("h3",{id:"parsing"},"Parsing"),(0,i.kt)("p",null,"From the file, we're mainly interested in the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Hugo_Symbol")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Amino_Acid_Position")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Mutation_Count")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Reference_Amino_Acid")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Variant_Amino_Acid")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"qvalue"))),(0,i.kt)("p",null,"We map the gene symbol onto the canonical transcripts (RefSeq & Ensembl) for that gene. For SNVs, we obtain position, ref and alt amino acid from source file and generate substitution notation. For indels, we get protein change notation from ",(0,i.kt)("inlineCode",{parentName:"p"},"Reference_Amino_Acid")," column.\nThen we match each entry using these notations."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We currently skip all variants labeled as splice from the source"))),(0,i.kt)("h2",{id:"json-output"},"JSON Output"),(0,i.kt)("p",null,"The data source will be captured under the cancerHotspots key in the transcript section."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{13-18}","{13-18}":!0},'{\n   "transcript":"NM_002524.5",\n   "source":"RefSeq",\n   "bioType":"mRNA",\n   "aminoAcids":"Q/K",\n   "proteinPos":"61",\n   "geneId":"4893",\n   "hgnc":"NRAS",\n   "hgvsc":"NM_002524.5:c.181C>A",\n   "hgvsp":"NP_002515.1:p.(Gln61Lys)",\n   "isCanonical":true,\n   "proteinId":"NP_002515.1",\n   "cancerHotspots":{\n      "residue":"Q61",\n      "numSamples":422,\n      "numAltAminoAcidSamples":142,\n      "qValue":0\n   }\n}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"residue"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"numSamples"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},"how many samples are associated with a variant at the same amino acid position")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"numAltAminoAcidSamples"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},"how many samples are associated with a variant with the same position and alternate amino acid position")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"qValue"),(0,i.kt)("td",{parentName:"tr",align:"center"},"double"),(0,i.kt)("td",{parentName:"tr",align:"left"})))))}m.isMDXComponent=!0}}]);