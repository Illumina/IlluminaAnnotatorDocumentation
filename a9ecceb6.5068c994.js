(window.webpackJsonp=window.webpackJsonp||[]).push([[68,21,57],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return O}));var n=a(3),r=a(7),l=(a(0),a(165)),b=a(82),c=a(68),i={title:"1000 Genomes"},o={unversionedId:"data-sources/1000Genomes",id:"data-sources/1000Genomes",isDocsHomePage:!1,title:"1000 Genomes",description:"Overview",source:"@site/docs/data-sources/1000Genomes.mdx",slug:"/data-sources/1000Genomes",permalink:"/NirvanaDocumentation/data-sources/1000Genomes",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/1000Genomes.mdx",version:"current",sidebar:"docs",previous:{title:"Annotating COVID-19",permalink:"/NirvanaDocumentation/introduction/covid19"},next:{title:"ClinVar",permalink:"/NirvanaDocumentation/data-sources/clinvar"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Populations",id:"populations",children:[]},{value:"Small Variants",id:"small-variants",children:[{value:"VCF File Parsing",id:"vcf-file-parsing",children:[]}]},{value:"Download URL",id:"download-url",children:[]},{value:"JSON Output",id:"json-output",children:[]},{value:"Structural Variants",id:"structural-variants",children:[{value:"VCF File Parsing",id:"vcf-file-parsing-1",children:[]},{value:"Converting VCF svTypes to SO sequence alterations",id:"converting-vcf-svtypes-to-so-sequence-alterations",children:[]}]},{value:"JSON Output",id:"json-output-1",children:[]}],s={rightToc:p};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"overview"},"Overview"),Object(l.b)("p",null,"The goal of the 1000 Genomes Project was to find most genetic variants with frequencies of at least 1% in the populations studied. It was the first project to sequence the genomes of a large number of people, to provide a comprehensive resource on human genetic variation. Data from the 1000 Genomes Project was quickly made available to the worldwide scientific community through freely accessible public databases."),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Publication")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Sudmant, P., Rausch, T., Gardner, E. et al. An integrated map of structural variation in 2,504 human genomes. ",Object(l.b)("em",{parentName:"p"},"Nature 526"),", 75\u201381 (2015). ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://doi.org/10.1038/nature15394"}),"https://doi.org/10.1038/nature15394")))),Object(l.b)("h2",{id:"populations"},"Populations"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The super population membership can be found here: (",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.1000genomes.org/category/population/"}),"http://www.1000genomes.org/category/population/"),")"),Object(l.b)("li",{parentName:"ul"},"We want to capture the allele frequencies for all 26 populations as well as the 5 super populations and the total population.")),Object(l.b)("h2",{id:"small-variants"},"Small Variants"),Object(l.b)("h3",{id:"vcf-file-parsing"},"VCF File Parsing"),Object(l.b)("p",null,"The original VCF files come with allele frequency fields (e.g. ALL_AF, AMR_AF) but we recompute them using allele counts and allele numbers in order to get 6 digit precision. The allele counts and allele numbers (e.g. AMR_AC, AMR_AN) are not expressed in the INFO field. Instead the genotypes need to be parsed to compute that information. Our team converted the original data to VCF entries with allele counts and allele numbers like the following."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"#CHROM  POS ID  REF ALT QUAL    FILTER  INFO\n1       15274   rs62636497      A       G,T     100     PASS    AC=1739,3210;AF=0.347244,0.640974;AN=5008;NS=2504;DP=23255;EAS_AF=0.4812,0.5188;AMR_AF=0.2752,0.7205;AFR_AF=0.323,0.6369;EUR_AF=0.2922,0.7078;SAS_AF=0.3497,0.6472;AA=g|||;VT=SNP;MULTI_ALLELIC;EAS_AN=1008;EAS_AC=485,523;EUR_AN=1006;EUR_AC=294,712;AFR_AN=1322;AFR_AC=427,842;AMR_AN=694;AMR_AC=191,500;SAS_AN=978;SAS_AC=342,633\n")),Object(l.b)("p",null,"The ancestral allele, if it exists, is the first value in the pipe separated AA fields (the Indel specific REF, ALT, IndelType fields are ignored)."),Object(l.b)("p",null,"We parse the VCF file and extract the following fields from INFO:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"AA"),Object(l.b)("li",{parentName:"ul"},"AC"),Object(l.b)("li",{parentName:"ul"},"AN"),Object(l.b)("li",{parentName:"ul"},"EAS_AN"),Object(l.b)("li",{parentName:"ul"},"AMR_AN"),Object(l.b)("li",{parentName:"ul"},"AFR_AN"),Object(l.b)("li",{parentName:"ul"},"EUR_AN"),Object(l.b)("li",{parentName:"ul"},"SAS_AN"),Object(l.b)("li",{parentName:"ul"},"EAS_AC"),Object(l.b)("li",{parentName:"ul"},"AMR_AC"),Object(l.b)("li",{parentName:"ul"},"AFR_AC"),Object(l.b)("li",{parentName:"ul"},"EUR_AC"),Object(l.b)("li",{parentName:"ul"},"SAS_AC")),Object(l.b)("h4",{id:"conflict-resolution"},"Conflict Resolution"),Object(l.b)("p",null,"We have observed conflicting allele frequency information in the source. Take the following example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"#CHROM  POS ID  REF ALT QUAL    FILTER  INFO\n1 20505705 rs35377696 C CTCTG,CTG,CTGTG 100 PASS AC=46,1513,152;AF=0.0091853,0.302117,0.0303514;\n1 20505705 rs35377696 C CTG 100 PASS AC=4;AF=0.000798722;\n")),Object(l.b)("p",null,"That is, the variant 1-20505705-C-CTG has conflicting entries. To get an idea of how frequently we observe this, here is a table summarizing ChrX and all chromosomes. Note that almost all such entries are found in ChrX."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Chromosome"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"#"," of alleles"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"#"," of conflicting alleles"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"percentage"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"chrX"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"834800"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"2733"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0.33%")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Total"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"21413098"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"2743"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0.013%")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Currently"),", we removed the allele frequency of the conflicting allele (i.e., insertion TG in the example) but keep allele frequencies of all other alleles in the VCF line."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Potential Alternate Solutions")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Remove all alleles that are contained in the vcf lines which have conflicting allele. (Recommended by 1000 genome group Holly Zheng-Bradley, 7/29/2015)"),Object(l.b)("li",{parentName:"ul"},"Recalculate the allele frequency for the conflicting allele."),Object(l.b)("li",{parentName:"ul"},"Pick the allele frequency that has the highest data support.")),Object(l.b)("h2",{id:"download-url"},"Download URL"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"ftp://ftp.1000genomes.ebi.ac.uk/vol1/ftp/release/20130502/"}),"GRCh37"),"\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://ftp.1000genomes.ebi.ac.uk/vol1/ftp/data_collections/1000_genomes_project/release/20190312_biallelic_SNV_and_INDEL/"}),"GRCh38")),Object(l.b)("h2",{id:"json-output"},"JSON Output"),Object(l.b)(b.default,{mdxType:"JSONSNV"}),Object(l.b)("h2",{id:"structural-variants"},"Structural Variants"),Object(l.b)("h3",{id:"vcf-file-parsing-1"},"VCF File Parsing"),Object(l.b)("p",null,"The VCF files contain entries like the following:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"#CHROM  POS     ID      REF     ALT     QUAL    FILTER  INFO    FORMAT  HG00096 HG00097 HG00099 HG00100 HG00101 HG00102 HG00103\n22      16050654        esv3647175;esv3647176;esv3647177;esv3647178     A       <CN0>,<CN2>,<CN3>,<CN4> 100     PASS  AC=9,87,599,20;AF=0.00179712,0.0173722,0.119609,0.00399361;AN=5008;CS=DUP_gs;END=16063474;NS=2504;SVTYPE=CNV;DP=22545;EAS_AF=0.001,0.0169,0.2361,0.0099;AMR_AF=0,0.0101,0.219,0.0072;AFR_AF=0.0061,0.0363,0.0053,0;EUR_AF=0,0.007,0.0944,0.003;SAS_AF=0,0.0082,0.1094,0.002;VT=SV       GT      3|0     0|0     0|0     0|0     0|0     0|0     0|4\n")),Object(l.b)("p",null,"Please note that, CNVs are allele-specific. For example, HG00096 is effectively copy number 4, which would be a net gain on chr22."),Object(l.b)("p",null,"1000 Genomes contains 5 types of structural variants:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"CNV"),Object(l.b)("li",{parentName:"ul"},"DEL"),Object(l.b)("li",{parentName:"ul"},"DUP"),Object(l.b)("li",{parentName:"ul"},"INS"),Object(l.b)("li",{parentName:"ul"},"INV")),Object(l.b)("p",null,"Since data of 1000 genomes is provided in VCF format, we assume that the coordinates follow the vcf format, i.e., there is a padding base for symbolic alleles. So all the interval can be interpreted as ","[BEGIN+1, END]",".\nSimilarly, for all other variant types except insertion, END is far larger than BEGIN. The distribution of BEGIN and END for insertions is summarized below."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Insertion issues")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"END = BEGIN for 6/165"),Object(l.b)("li",{parentName:"ul"},"END = BEGIN+2 for 93/165"),Object(l.b)("li",{parentName:"ul"},"END = BEGIN+3 for 11/165"),Object(l.b)("li",{parentName:"ul"},"END = BEGIN+4 for 11/165"),Object(l.b)("li",{parentName:"ul"},"END \u2013 BEGIN range from 5 to 1156 for others.")),Object(l.b)("h3",{id:"converting-vcf-svtypes-to-so-sequence-alterations"},"Converting VCF svTypes to SO sequence alterations"),Object(l.b)("p",null,"The svType will be captured in our JSON file under the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.sequenceontology.org/browser/current_svn/term/SO:0001059"}),"sequenceAlteration")," key. Here's the translation we'll use according to svType in 1000 Genomes."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"svType"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Alternative Alleles contain <CN","*",">"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"sequenceAlteration"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ALU"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FALSE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mobile_element_insertion")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DUP"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TRUE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"copy_number_gain")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CNV"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TRUE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"copy_number_gain (observed_gains >0 and observed_losses =0) ",Object(l.b)("br",null),"copy_number_loss\xa0(observed_gains = 0 and observed_losses > 0) ",Object(l.b)("br",null),"copy_number_variation (otherwise)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DEL"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TRUE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"copy_number_loss")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"LINE1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FALSE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mobile_element_insertion")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SVA"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FALSE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mobile_element_insertion")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"INV"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FALSE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"inversion")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"INS"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FALSE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"insertion")))),Object(l.b)("h4",{id:"exceptions"},"Exceptions"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"We discard structural variants without END")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"#CHROM  POS     ID      REF     ALT     QUAL    FILTER  INFO    FORMAT  HG00096 HG00097 HG00099 HG00100 HG00101 HG00102 HG00103\n21      9495848 esv3646347      A       <INS:ME:LINE1>  100     PASS   AC=1543;AF=0.308107;AN=5008;CS=L1_umary;MEINFO=LINE1,5669,6005,+;NS=2504;SVLEN=336;SVTYPE=LINE1;TSD=null;DP=20015;EAS_AF=0.3125;AMR_AF=0.2911;AFR_AF=0.3026;EUR_AF=0.2922;SAS_AF=0.3395;VT=SV   GT      0|0     1|1     1|0     0|1     1|0     1|0     0|0\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"CNVs in chrY")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"No other types of structural variants exist in chrY"),Object(l.b)("li",{parentName:"ul"},'Since copy number is provided in genotype field, we directly parse the copy number from "CN" field.'),Object(l.b)("li",{parentName:"ul"},"For most CNVs in chrY, the reference copy number is 1, but the refence number for CNVs in segmental duplication sites is 2 (<CN2",">"," in the 2nd example). All segmental duplication calls have identifiers starting with GS_SD_M2.")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"#CHROM  POS     ID      REF     ALT     QUAL    FILTER  INFO    FORMAT  HG00096 HG00101 HG00103 HG00105 HG00107 HG00108\nY       2888555 CNV_Y_2888555_3014661   T       <CN2>   100     PASS    AC=1;AF=0.000817661;AN=1223;END=3014661;NS=1233;SVTYPE=CNV;AMR_AF=0.0000;AFR_AF=0.0000;EUR_AF=0.0000;SAS_AF=0.0019;EAS_AF=0.0000;VT=SV  GT:CN:CNL:CNP:CNQ:GP:GQ:PL      0:1:-1000,0,-58.45:-1000,0,-61.55:99:0,-61.55:99:0,585  0:1:-296.36,0,-16.6:-300.46,0,-19.7:99:0,-19.7:99:0,166 0:1:-1000,0,-39.44:-1000,0,-42.54:99:0,-42.54:99:0,394\nY       6128381 GS_SD_M2_Y_6128381_6230094_Y_9650284_9752225    C       <CN1>,<CN3>     100     PASS    AC=4,2;AF=0.00327065,0.00163532;AN=1223;END=6230094;NS=1233;SVTYPE=CNV;AMR_AF=0.0029,0.0029;AFR_AF=0.0016,0.0016;EUR_AF=0.0000,0.0000;SAS_AF=0.0038,0.0000;EAS_AF=0.0000,0.0000;VT=SV;EX_TARGET GT:CN:CNL:CNP:CNQ:GP:GQ 0:2:-1000,-138.78,0,-38.53:-1000,-141.27,0,-41.33:99:0,-141.27,-41.33:99        0:2:-1000,-53.32,0,-17.85:-1000,-55.81,0,-20.64:99:0,-55.81,-20.64:99   0:2:-1000,-71.83,0,-32.5:-1000,-74.32,0,-35.29:99:0,-74.32,-35.29:99    0:2:-1000,-60.96,0,-20.29:-1000,-63.45,0,-23.08:99:0,-63.45,-23.08:99   0:2:-1000,-77.6,0,-31.45:-1000,-80.09,0,-34.24:99:0,-80.09,-34.24:99\n")),Object(l.b)("h2",{id:"json-output-1"},"JSON Output"),Object(l.b)(c.default,{mdxType:"JSONSV"}))}O.isMDXComponent=!0},165:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,j=s["".concat(b,".").concat(u)]||s[u]||O[u]||l;return a?r.a.createElement(j,c(c({ref:t},o),{},{components:a})):r.a.createElement(j,c({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var o=2;o<l;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},68:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(165)),b={},c={unversionedId:"data-sources/1000Genomes-sv-json",id:"data-sources/1000Genomes-sv-json",isDocsHomePage:!1,title:"1000Genomes-sv-json",description:"`json",source:"@site/docs/data-sources/1000Genomes-sv-json.md",slug:"/data-sources/1000Genomes-sv-json",permalink:"/NirvanaDocumentation/data-sources/1000Genomes-sv-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/1000Genomes-sv-json.md",version:"current"},i=[],o={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"oneKg":[\n   {\n      "chromosome":"1",\n      "begin":1595369,\n      "end":1612441,\n      "variantType": "copy_number_variation",\n      "id": "esv3635753;esv3635754;esv3635755;esv3635756;esv3635757",\n      "allAn": 5008,\n      "allAc": 2702,\n      "allAf": 0.539537,\n      "afrAf": 0.6052,\n      "amrAf": 0.3675,\n      "eurAf": 0.5357,\n      "easAf": 0.5368,\n      "sasAf": 0.5797,\n      "reciprocalOverlap": 0.07555\n   }\n],\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"chromosome"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"begin"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"end"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"variantType"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"allAn"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"floating point"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"allele number for all populations. Non-zero integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"allAc"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"floating point"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"allele count for all populations. Integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"allAf"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"floating point"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"allele frequency for all populations. Range: 0 - 1.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"afrAf"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"floating point"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"allele frequency for the African super population. Range: 0 - 1.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"amrAf"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"floating point"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"allele frequency for the Ad Mixed American super population. Range: 0 - 1.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"eurAf"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"floating point"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"allele frequency for the European super population. Range: 0 - 1.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"easAf"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"allele frequency for the East Asian super population. Range: 0 - 1.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sasAf"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"allele frequency for the South Asian super population. Range: 0 - 1.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"reciprocalOverlap"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"floating point"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"range: 0 - 1.")))))}p.isMDXComponent=!0},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(165)),b={},c={unversionedId:"data-sources/1000Genomes-snv-json",id:"data-sources/1000Genomes-snv-json",isDocsHomePage:!1,title:"1000Genomes-snv-json",description:"`json",source:"@site/docs/data-sources/1000Genomes-snv-json.md",slug:"/data-sources/1000Genomes-snv-json",permalink:"/NirvanaDocumentation/data-sources/1000Genomes-snv-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/1000Genomes-snv-json.md",version:"current"},i=[],o={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"oneKg":{\n   "allAf":0.200879,\n   "afrAf":0.210287,\n   "amrAf":0.139769,\n   "easAf":0.275794,\n   "eurAf":0.181909,\n   "sasAf":0.173824,\n   "allAn":5008,\n   "afrAn":1322,\n   "amrAn":694,\n   "easAn":1008,\n   "eurAn":1006,\n   "sasAn":978,\n   "allAc":1006,\n   "afrAc":278,\n   "amrAc":97,\n   "easAc":278,\n   "eurAc":183,\n   "sasAc":170\n}\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Field"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"allAf"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"float"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"allele frequency for all populations. Range: 0 - 1.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"allAc"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"allele count for all populations. Integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"allAn"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"allele number for all populations. Non-zero integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"afrAf"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"float"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"allele frequency for the African super population. Range: 0 - 1.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"afrAc"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"allele count for the African super population. Integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"afrAn"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"allele number for the African super population. Non-zero integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"amrAf"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"float"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"allele frequency for the Ad Mixed American super population. Range: 0 - 1.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"amrAc"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"allele count for the Ad Mixed American super population. Integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"amrAn"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"allele number for the Ad Mixed American super population. Non-zero integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"easAf"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"float"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"allele frequency for the East Asian super population. Range: 0 - 1.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"easAc"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"allele count for the East Asian super population. Integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"easAn"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"allele number for the East Asian super population. Non-zero integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"eurAf"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"float"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"allele frequency for the European super population. Range: 0 - 1.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"eurAc"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"allele count for the European super population. Integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"eurAn"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"allele number for the European super population. Non-zero integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"sasAf"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"float"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"allele frequency for the South Asian super population. Range: 0 - 1.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"sasAc"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"allele count for the South Asian super population. Integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"sasAn"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"allele number for the South Asian super population. Non-zero integer.")))))}p.isMDXComponent=!0}}]);