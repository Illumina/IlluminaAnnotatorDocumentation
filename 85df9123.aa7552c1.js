(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),i=a(7),r=(a(0),a(126)),o={title:"Mitochondrial Heteroplasmy"},c={unversionedId:"data-sources/mito-heteroplasmy",id:"version-3.13/data-sources/mito-heteroplasmy",isDocsHomePage:!1,title:"Mitochondrial Heteroplasmy",description:"Overview",source:"@site/versioned_docs/version-3.13/data-sources/mito-heteroplasmy.md",slug:"/data-sources/mito-heteroplasmy",permalink:"/NirvanaDocumentation/3.13/data-sources/mito-heteroplasmy",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.13/data-sources/mito-heteroplasmy.md",version:"3.13",sidebar:"version-3.13/docs",previous:{title:"dbSNP",permalink:"/NirvanaDocumentation/3.13/data-sources/dbsnp"},next:{title:"Splice AI",permalink:"/NirvanaDocumentation/3.13/data-sources/splice-ai"}},l=[{value:"Overview",id:"overview",children:[]},{value:"JSON File",id:"json-file",children:[{value:"Example",id:"example",children:[]},{value:"Parsing",id:"parsing",children:[]}]},{value:"Download URL",id:"download-url",children:[]},{value:"JSON Output",id:"json-output",children:[]}],s={rightToc:l};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"Mitochondrial Heteroplasmy is an aggregate population data set that characterizes the amount of heteroplasmy observed for each variant. The latest version of this data set is based on re-processed 1000 Genomes Project data using the Illumina DRAGEN pipeline."),Object(r.b)("h2",{id:"json-file"},"JSON File"),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n   "T:C":{\n      "ad":[\n         1,\n         1,\n         1,\n         1,\n         1,\n         1\n      ],\n      "allele_type":"alt",\n      "vrf":[\n         0.002369668246445498,\n         0.0024937655860349127,\n         0.0016129032258064516,\n         0.0025188916876574307,\n         0.0022935779816513763,\n         0.002008032128514056\n      ],\n      "vrf_stats":{\n         "kurtosis":38.889891511122556,\n         "max":0.0025188916876574307,\n         "mean":5.4052190471990743e-05,\n         "min":0.0,\n         "nobs":246,\n         "skewness":6.346664692283075,\n         "stdev":0.0003461416264750575,\n         "variance":1.1981402557879823e-07\n      }\n   }\n}\n\n')),Object(r.b)("h3",{id:"parsing"},"Parsing"),Object(r.b)("p",null,"From the JSON file, we're mainly interested in the following keys:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"variant")," (i.e. ",Object(r.b)("inlineCode",{parentName:"li"},"T:C"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ad")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"vrf")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"nobs")," (number of observations)")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Adjusting for null observations")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"nobs")," value indicates how many observations were made. Ideally this would have been represented in the ",Object(r.b)("inlineCode",{parentName:"p"},"ad")," and ",Object(r.b)("inlineCode",{parentName:"p"},"vrf")," arrays, but it's left as an exercise for the reader."))),Object(r.b)("h4",{id:"binning-vrf-data"},"Binning VRF Data"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"vrf")," (variant read frequency) array in the JSON object above is paired with with the ",Object(r.b)("inlineCode",{parentName:"p"},"ad")," array (allele depths) shown above."),Object(r.b)("p",null,"The data in the JSON object has a crazy number of significant digits. This means that as the number of samples increase, this array will grow. To make this more future-proof, Nirvana bins everything according to 0.1% increments."),Object(r.b)("p",null,"With the binned data, we end up having 775 distinct ",Object(r.b)("inlineCode",{parentName:"p"},"vrf")," values in the entire JSON file. This also means that the variant with the largest number of VRFs would originally have 246 entries, but due to binning this will decrease to 143."),Object(r.b)("h4",{id:"pre-processing-the-data"},"Pre-processing the Data"),Object(r.b)("p",null,"The JSON file is converted into a small TSV file that is ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Illumina/Nirvana/blob/main/MitoHeteroplasmy/Resources/MitoHeteroplasmy.tsv.gz"}),"embedded in Nirvana"),". Here is an example of the TSV file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"#CHROM  POS REF ALT VRF_BINS    VRF_COUNTS\nchrM    1   G   .   0.981,0.987,0.988,0.989,0.99,0.991,0.992,0.993,0.994,0.995,0.996,0.997,0.998,0.999  1,2,2,4,7,8,11,19,43,60,48,64,499,1736\nchrM    2   A   .   0.981,0.987,0.988,0.989,0.99,0.991,0.992,0.993,0.994,0.995,0.996,0.997,0.998,0.999  1,2,2,4,7,8,11,19,43,60,48,64,499,1736\n")),Object(r.b)("h4",{id:"algorithm"},"Algorithm"),Object(r.b)("p",null,"Nirvana will calculate mitochondrial heteroplasmy data for every sample in the VCF. Using the computed VRF for each sample, we compute where in the empirical mitochondrial heteroplasmy distribution that VRF occurs and express that as a percentile."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Percentiles")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Nirvana uses the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Percentile"}),"statistical definition of percentile")," (indicating the value below which a given percentage of observations in a group of observations falls). Unless the sample's VRF is higher than all the VRFs represented in the distribution, the range will be [0, 1)."))),Object(r.b)("h2",{id:"download-url"},"Download URL"),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Unavailable")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The original data set is only available internally at Illumina at the moment."))),Object(r.b)("h2",{id:"json-output"},"JSON Output"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:"{14-17}","{14-17}":!0}),'"samples":[\n   {\n      "genotype":"0/1",\n      "variantFrequencies":[\n         0.333,\n         0.5\n      ],\n      ],\n      "alleleDepths":[\n         10,\n         20,\n         30\n      ],\n      "heteroplasmyPercentile":[\n         23.13,\n         12.65\n      ]\n   }\n]\n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Notes"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"heteroplasmyPercentile"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"float array"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"one percentile for each variant frequency (each alternate allele)")))))}b.isMDXComponent=!0},126:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return a?i.a.createElement(h,c(c({ref:t},s),{},{components:a})):i.a.createElement(h,c({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<r;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);