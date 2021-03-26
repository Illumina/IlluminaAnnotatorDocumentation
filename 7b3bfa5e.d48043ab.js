(window.webpackJsonp=window.webpackJsonp||[]).push([[46,73],{140:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var a=t(3),r=t(7),o=(t(0),t(181)),i=t(85),c={title:"Amino Acid Conservation"},s={unversionedId:"data-sources/amino-acid-conservation",id:"data-sources/amino-acid-conservation",isDocsHomePage:!1,title:"Amino Acid Conservation",description:"Overview",source:"@site/docs/data-sources/amino-acid-conservation.mdx",slug:"/data-sources/amino-acid-conservation",permalink:"/NirvanaDocumentation/data-sources/amino-acid-conservation",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/amino-acid-conservation.mdx",version:"current",sidebar:"docs",previous:{title:"1000 Genomes",permalink:"/NirvanaDocumentation/data-sources/1000Genomes"},next:{title:"ClinGen",permalink:"/NirvanaDocumentation/data-sources/clingen"}},l=[{value:"Overview",id:"overview",children:[]},{value:"FASTA File",id:"fasta-file",children:[]},{value:"Parsing FASTA",id:"parsing-fasta",children:[]},{value:"Assigning scores to Nirvana transcripts",id:"assigning-scores-to-nirvana-transcripts",children:[{value:"GRCh37",id:"grch37",children:[]},{value:"GRCh38",id:"grch38",children:[]}]},{value:"Download URL",id:"download-url",children:[]},{value:"JSON Output",id:"json-output",children:[]}],d={toc:l};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"Amino acid conservation scores are obtained from multiple alignments of vertebrate exomes to the human ones. The score indicate the frequency with which a particular AA is observed in Humans."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Siepel A, Bejerano G, Pedersen JS, Hinrichs AS, Hou M, Rosenbloom K, Clawson H, Spieth J, Hillier LW, Richards S, et al. Evolutionarily conserved elements in vertebrate, insect, worm, and yeast genomes. ",Object(o.b)("strong",{parentName:"p"},"Genome Res. 2005")," Aug;15(8):1034-50.  (",Object(o.b)("a",{parentName:"p",href:"http://www.genome.org/cgi/doi/10.1101/gr.3715005"},"http://www.genome.org/cgi/doi/10.1101/gr.3715005"),")"))),Object(o.b)("h2",{id:"fasta-file"},"FASTA File"),Object(o.b)("p",null,"The exon alignments are provided in FASTA files as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scss"},">ENST00000641515.2_hg38_1_2 3 0 0 chr1:65565-65573+\nMKK\n>ENST00000641515.2_panTro4_1_2 3 0 0 chrUn_GL393541:146907-146915+\nMKK\n>ENST00000641515.2_gorGor3_1_2 3 0 0\n---\n>ENST00000641515.2_ponAbe2_1_2 3 0 0 chr15:99141417-99141425-\nMKK\n>ENST00000641515.2_hg38_2_2 324 0 0 chr1:69037-70008+\nVTAEAISWNESTSETNNSMVTEFIFLGLSDSQELQTFLFMLFFVFYGGIVFGNLLIVITVVSDSHLHSPMYFLLANLSLIDLSLSSVTAPKMITDFFSQRKVISFKGCLVQIFLLHFFGGSEMVILIAMGFDRYIAICKPLHYTTIMCGNACVGIMAVTWGIGFLHSVSQLAFAVHLLFCGPNEVDSFYCDLPRVIKLACTDTYRLDIMVIANSGVLTVCSFVLLIISYTIILMTIQHRPLDKSSKALSTLTAHITVVLLFFGPCVFIYAWPFPIKSLDKFLAVFYSVITPLLNPIIYTLRNKDMKTAIRQLRKWDAHSSVKFZ\n>ENST00000641515.2_panTro4_2_2 324 0 0 chrUn_GL393541:151333-152303+\n")),Object(o.b)("h2",{id:"parsing-fasta"},"Parsing FASTA"),Object(o.b)("p",null,"For each Ensembl transcript, we will need to aggregate all the exons together for each of the 100 species. From there, we should get a full alignment that can be used to determine conservation. For example, for ENST00000641515.2 we have:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scss"},"Human (hg38) MKKVTAEAISWNESTSETNNSMVTEFIFLGLSDSQELQTFLFMLFFVFYGGIVFGNLLIVITVVSDSHLHSPMYFLLANLSLIDLSLSSVTAPKMITDFFSQRKVISFKGCLVQIFLL\nChimp        MKKVTAEAISWNESTSETNNSMVTEFIFLGLSDSQELQTFL-MLFFVFYGGIVFGNLLIVRIVVSDSHLHSPMYFLLANLSLIDLSLCSVTAPKMITDFFSQRKVISFKGCLVQIFLL\nGorilla      ----------------------------------------------------------------------------------------------------------------------\nOrangutan    MKKVTAEAISWNESTSKTNNSVVTEFIFLGLSDSQELQTFLFMLFFVFYGGIVFGNLLIVIIVVSDSHLHSPMYFLLANLSLIDLSLSSVTAPKMITDFFSQRKVISFKGCLVQIFLL\nGibbon       ----------------------------------------------------------------------------------------------------------------------\nRhesus       MKKVTEAAISWNESTSETNNSIVTEFIFLGLSDSQELQIFLFVLFLVFYGGIVFGNLLIVITVVSDSHLHSPMYLLLANLSVVDLSLSSVTAPKMITDFFSQRKAISFKGCLVQIFLL\nMacaque      MKKVTEAAISWNESTSETNNSIVTEFIFLGLSDSQELQIFLFVLFLVFYGGIVFGNLLIVITVVSDSHLHSPMYLLLANLSVIDLSLSSVTAPKMITDFFSQRKAISFKGCLVQIFLL\n")),Object(o.b)("p",null,"If we look at position 6, we see that humans have an Alanine (A) residue. This residue is shared by Chimp and Orangutan. However, Rhesus and Macaque have a Glutamic acid (E) residue at that position. Moreover, Gorilla and Gibbon don't even have data for that transcript.\nFor position 6, we would say that we have 43% conservation (3/7) since three organisms share the same residue as humans."),Object(o.b)("h2",{id:"assigning-scores-to-nirvana-transcripts"},"Assigning scores to Nirvana transcripts"),Object(o.b)("p",null,"The source FASTA file comes with Ensembl/UCSC transcript ids of the transcripts used for alignments. The Nirvana cache has RefSeq and Ensembl transcripts and our first attempt was to map the given Ensembl/UCSC ids to their equivalent RefSeq/Ensembl ids. This attempt was unsuccessful since UCSC Table Browser provided mapping without version numbers. So we proceeded as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Take proteins which have a unique mapping (and hence one set of conservation scores). For ones that mapped to both ChrX and ChrY, we accepted the one from ChrX."),Object(o.b)("li",{parentName:"ul"},"A Nirvana transcript having an exact peptide sequence match with a uniquely aligned protein is assigned the corresponding conservation scores.")),Object(o.b)("p",null,"Unfortunately this left us with a very small number of transcripts having conservation scores."),Object(o.b)("h3",{id:"grch37"},"GRCh37"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Source FASTA contained 41957 protein alignments."),Object(o.b)("li",{parentName:"ul"},"38165 proteins had unique scores."),Object(o.b)("li",{parentName:"ul"},"88 aligned proteins existed in Nirvana cache."),Object(o.b)("li",{parentName:"ul"},"118 transcripts had conservation scores.")),Object(o.b)("h3",{id:"grch38"},"GRCh38"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Source FASTA contained 110024 protein alignments."),Object(o.b)("li",{parentName:"ul"},"88961 proteins had unique scores."),Object(o.b)("li",{parentName:"ul"},"11688 aligned proteins existed in Nirvana cache."),Object(o.b)("li",{parentName:"ul"},"12098 transcripts had conservation scores.")),Object(o.b)("h2",{id:"download-url"},"Download URL"),Object(o.b)("p",null,"GRCh37: ",Object(o.b)("a",{parentName:"p",href:"http://hgdownload.soe.ucsc.edu/goldenPath/hg19/multiz100way/alignments/knownGene.exonAA.fa.gz"},"http://hgdownload.soe.ucsc.edu/goldenPath/hg19/multiz100way/alignments/knownGene.exonAA.fa.gz")),Object(o.b)("p",null,"GRCh38: ",Object(o.b)("a",{parentName:"p",href:"http://hgdownload.soe.ucsc.edu/goldenPath/hg38/multiz100way/alignments/knownGene.exonAA.fa.gz"},"http://hgdownload.soe.ucsc.edu/goldenPath/hg38/multiz100way/alignments/knownGene.exonAA.fa.gz")),Object(o.b)("h2",{id:"json-output"},"JSON Output"),Object(o.b)("p",null,"Conservation scores are reported in the transcript section. One score is reported for each alt allele"),Object(o.b)(i.default,{mdxType:"JSON"}))}u.isMDXComponent=!0},181:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),d=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=d(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),b=a,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return t?r.a.createElement(m,c(c({ref:n},l),{},{components:t})):r.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},85:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(7),o=(t(0),t(181)),i={},c={unversionedId:"data-sources/amino-acid-conservation-json",id:"data-sources/amino-acid-conservation-json",isDocsHomePage:!1,title:"amino-acid-conservation-json",description:"`json",source:"@site/docs/data-sources/amino-acid-conservation-json.md",slug:"/data-sources/amino-acid-conservation-json",permalink:"/NirvanaDocumentation/data-sources/amino-acid-conservation-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/amino-acid-conservation-json.md",version:"current"},s=[],l={toc:s};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'"aminoAcidConservation": {\n    "scores": [0.34]\n}  \n')),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Field"),Object(o.b)("th",{parentName:"tr",align:"center"},"Type"),Object(o.b)("th",{parentName:"tr",align:"left"},"Notes"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"aminoAcidConservation"),Object(o.b)("td",{parentName:"tr",align:"center"},"object"),Object(o.b)("td",{parentName:"tr",align:"left"})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"scores"),Object(o.b)("td",{parentName:"tr",align:"center"},"object array of doubles"),Object(o.b)("td",{parentName:"tr",align:"left"},"percent conserved with respect to human amino acid residue. Range: 0.01 - 1.00")))))}d.isMDXComponent=!0}}]);