"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[5490,3232],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=i,g=d["".concat(o,".").concat(u)]||d[u]||m[u]||r;return t?a.createElement(g,l(l({ref:n},c),{},{components:t})):a.createElement(g,l({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},212:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),l=["components"],s={},o=void 0,p={unversionedId:"data-sources/clinvar-json",id:"data-sources/clinvar-json",title:"clinvar-json",description:"small variants:",source:"@site/docs/data-sources/clinvar-json.md",sourceDirName:"data-sources",slug:"/data-sources/clinvar-json",permalink:"/NirvanaDocumentation/data-sources/clinvar-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/clinvar-json.md",tags:[],version:"current",frontMatter:{}},c=[],m={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"small variants:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"clinvar":[\n   {\n      "id":"VCV000036581.3",\n      "reviewStatus":"reviewed by expert panel",\n      "significance":[\n         "benign"\n      ],\n      "refAllele":"G",\n      "altAllele":"A",\n      "lastUpdatedDate":"2020-03-01",\n      "isAlleleSpecific":true\n   },\n   {\n      "id":"RCV000030258.4",\n      "variationId":"VCV000036581.3",\n      "reviewStatus":"reviewed by expert panel",\n      "alleleOrigins":[\n         "germline"\n      ],\n      "refAllele":"G",\n      "altAllele":"A",\n      "phenotypes":[\n         "Lynch syndrome"\n      ],\n      "medGenIds":[\n         "C1333990"\n      ],\n      "omimIds":[\n         "120435"\n      ],\n      "significance":[\n         "benign"\n      ],\n      "lastUpdatedDate":"2017-05-01",\n      "isAlleleSpecific":true\n   }\n]\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"large variants:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"clinvar":[\n  {\n    "chromosome":"1",\n    "begin":629025,\n    "end":8537745,\n    "variantType":"copy_number_loss",\n    "id":"RCV000051993.4",\n    "variationId":"VCV000058242.1",\n    "reviewStatus":"criteria provided, single submitter",\n    "alleleOrigins":["not provided"],\n    "phenotypes":["See cases"],\n    "significance":["pathogenic"],\n    "lastUpdatedDate":"2022-04-21",\n    "pubMedIds":["21844811"]\n  },\n        ......\n]\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ClinVar ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"variationId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ClinVar VCV ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"variantType"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"variant type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"reviewStatus"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"see possible values below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"alleleOrigins"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"see possible values below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"refAllele"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"altAllele"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"phenotypes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"medGenIds"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MedGen IDs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"omimIds"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"OMIM IDs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"orphanetIds"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Orphanet IDs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"significance"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"see possible values below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"lastUpdatedDate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yyyy-MM-dd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pubMedIds"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"PubMed IDs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"isAlleleSpecific"),(0,r.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true when the current variant alternate allele matches the ClinVar alternate allele")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"reviewStatus:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"no assertion provided"),(0,r.kt)("li",{parentName:"ul"},"no assertion criteria provided"),(0,r.kt)("li",{parentName:"ul"},"criteria provided, single submitter"),(0,r.kt)("li",{parentName:"ul"},"practice guideline"),(0,r.kt)("li",{parentName:"ul"},"classified by multiple submitters"),(0,r.kt)("li",{parentName:"ul"},"criteria provided, conflicting interpretations"),(0,r.kt)("li",{parentName:"ul"},"criteria provided, multiple submitters, no conflicts"),(0,r.kt)("li",{parentName:"ul"},"no interpretation for the single variant")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"alleleOrigins:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"unknown"),(0,r.kt)("li",{parentName:"ul"},"other"),(0,r.kt)("li",{parentName:"ul"},"germline"),(0,r.kt)("li",{parentName:"ul"},"somatic"),(0,r.kt)("li",{parentName:"ul"},"inherited"),(0,r.kt)("li",{parentName:"ul"},"paternal"),(0,r.kt)("li",{parentName:"ul"},"maternal"),(0,r.kt)("li",{parentName:"ul"},"de-novo"),(0,r.kt)("li",{parentName:"ul"},"biparental"),(0,r.kt)("li",{parentName:"ul"},"uniparental"),(0,r.kt)("li",{parentName:"ul"},"not-tested"),(0,r.kt)("li",{parentName:"ul"},"tested-inconclusive")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"significance:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"uncertain significance"),(0,r.kt)("li",{parentName:"ul"},"not provided"),(0,r.kt)("li",{parentName:"ul"},"benign"),(0,r.kt)("li",{parentName:"ul"},"likely benign"),(0,r.kt)("li",{parentName:"ul"},"likely pathogenic"),(0,r.kt)("li",{parentName:"ul"},"pathogenic"),(0,r.kt)("li",{parentName:"ul"},"drug response"),(0,r.kt)("li",{parentName:"ul"},"histocompatibility"),(0,r.kt)("li",{parentName:"ul"},"association"),(0,r.kt)("li",{parentName:"ul"},"risk factor"),(0,r.kt)("li",{parentName:"ul"},"protective"),(0,r.kt)("li",{parentName:"ul"},"affects"),(0,r.kt)("li",{parentName:"ul"},"conflicting data from submitters"),(0,r.kt)("li",{parentName:"ul"},"other"),(0,r.kt)("li",{parentName:"ul"},"no interpretation for the single variant"),(0,r.kt)("li",{parentName:"ul"},"conflicting interpretations of pathogenicity")))}d.isMDXComponent=!0},1396:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),l=t(212),s=["components"],o={title:"ClinVar"},p=void 0,c={unversionedId:"data-sources/clinvar",id:"data-sources/clinvar",title:"ClinVar",description:"Overview",source:"@site/docs/data-sources/clinvar.mdx",sourceDirName:"data-sources",slug:"/data-sources/clinvar",permalink:"/NirvanaDocumentation/data-sources/clinvar",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/clinvar.mdx",tags:[],version:"current",frontMatter:{title:"ClinVar"},sidebar:"docs",previous:{title:"ClinGen",permalink:"/NirvanaDocumentation/data-sources/clingen"},next:{title:"COSMIC",permalink:"/NirvanaDocumentation/data-sources/cosmic"}},m=[{value:"Overview",id:"overview",children:[],level:2},{value:"RCV File",id:"rcv-file",children:[{value:"Example",id:"example",children:[],level:3},{value:"Parsing",id:"parsing",children:[{value:"Parsing Significance",id:"parsing-significance",children:[],level:4}],level:3}],level:2},{value:"VCV File",id:"vcv-file",children:[{value:"Example",id:"example-1",children:[],level:3},{value:"Parsing",id:"parsing-1",children:[],level:3}],level:2},{value:"Known Issues",id:"known-issues",children:[],level:2},{value:"Download URLs",id:"download-urls",children:[],level:2},{value:"JSON Output",id:"json-output",children:[],level:2},{value:"Building the supplementary files",id:"building-the-supplementary-files",children:[{value:"Source data files",id:"source-data-files",children:[],level:3}],level:2}],d={toc:m};function u(e){var n=e.components,o=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"ClinVar is a freely accessible, public archive of reports of the relationships among human variations and phenotypes, with supporting evidence. ClinVar thus facilitates access to and communication about the relationships asserted between human variation and observed health status, and the history of that interpretation."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Melissa J Landrum, Jennifer M Lee, Mark Benson, Garth R Brown, Chen Chao, Shanmuga Chitipiralla, Baoshan Gu, Jennifer Hart, Douglas Hoffman, Wonhee Jang, Karen Karapetyan, Kenneth Katz, Chunlei Liu, Zenith Maddipatla, Adriana Malheiro, Kurt McDaniel, Michael Ovetsky, George Riley, George Zhou, J Bradley Holmes, Brandi L Kattman, Donna R Maglott, ClinVar: improving access to variant interpretations and supporting evidence, ",(0,r.kt)("em",{parentName:"p"},"Nucleic Acids Research"),", ",(0,r.kt)("strong",{parentName:"p"},"46"),", Issue D1, 4 January 2018, Pages D1062\u2013D1067, ",(0,r.kt)("a",{parentName:"p",href:"https://doi.org/10.1093/nar/gkx1153"},"https://doi.org/10.1093/nar/gkx1153")))),(0,r.kt)("h2",{id:"rcv-file"},"RCV File"),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Here's ",(0,r.kt)("a",{target:"_blank",href:t(1507).Z},"a full RCV entry"),"."),(0,r.kt)("h3",{id:"parsing"},"Parsing"),(0,r.kt)("p",null,"In the following section, we discuss which field of the XML was used to extract information that is presented in the JSON output."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ID")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{3}","{3}":!0},'<ClinVarSet>\n   <ReferenceClinVarAssertion>\n       <ClinVarAccession Acc="RCV000000001" Version="2">\n</ClinVarSet>\n')),(0,r.kt)("p",null,"The Acc and Version fields are merged to form the ID (RCV000000001.2)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"LastUpdatedDate")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{2}","{2}":!0},'<ClinVarSet>\n   <ReferenceClinVarAssertion DateCreated="2012-08-13" DateLastUpdated="2016-02-17" ID="57604" >\n</ClinVarSet>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Significance")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{5}","{5}":!0},'<ClinVarSet>\n   <ReferenceClinVarAssertion>\n       <ClinicalSignificance DateLastEvaluated="1996-04-01">\n           <ReviewStatus>no assertion criteria provided</ReviewStatus>\n           <Description>Pathogenic</Description>\n       </ClinicalSignificance>\n</ClinVarSet>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ReviewStatus")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{4}","{4}":!0},'<ClinVarSet>\n   <ReferenceClinVarAssertion>\n       <ClinicalSignificance DateLastEvaluated="1996-04-01">\n           <ReviewStatus>no assertion criteria provided</ReviewStatus>\n           <Description>Pathogenic</Description>\n       </ClinicalSignificance>\n</ClinVarSet>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Phenotypes")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{2-8}","{2-8}":!0},'<ReferenceClinVarAssertion>\n   <TraitSet Type="Disease" ID="62">\n       <Trait Type="Disease">\n            <Name>\n               <ElementValue Type="Preferred">Joubert syndrome 9</ElementValue>\n            </Name>\n        </Trait>\n   </TraitSet>\n</ReferenceClinVarAssertion>\n')),(0,r.kt)("p",null,'We only use the field with Type="Preferred". Multiple phenotypes may be reported'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Location and Variant Id")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{3,5-12}","{3,5-12}":!0},'<ReferenceClinVarAssertion>\n<GenotypeSet Type="CompoundHeterozygote" ID="424709">\n   <MeasureSet Type="Variant" ID="81">\n       <Measure Type="single nucleotide variant" ID="15120">\n        <SequenceLocation Assembly="GRCh38" AssemblyAccessionVersion="GCF_000001405.38"\n          AssemblyStatus="current" Chr="10" Accession="NC_000010.11" start="89222510"\n          stop="89222510" display_start="89222510" display_stop="89222510" variantLength="1"\n          positionVCF="89222510" referenceAlleleVCF="C" alternateAlleleVCF="T"/>\n        <SequenceLocation Assembly="GRCh37" AssemblyAccessionVersion="GCF_000001405.25"\n          AssemblyStatus="previous" Chr="10" Accession="NC_000010.10" start="90982267"\n          stop="90982267" display_start="90982267" display_stop="90982267" variantLength="1"\n          positionVCF="90982267" referenceAlleleVCF="C" alternateAlleleVCF="T"/>\n       </Measure>\n   </MeasureSet>\n </GenotypeSet>\n</ReferenceClinVarAssertion>\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The variant position is extracted from the fields for their respective assemblies."),(0,r.kt)("li",{parentName:"ul"},"Updated records contain positionVCF, referenceAlleleVCF and alternateAlleleVCF fields and when present, we use them to create the variant."),(0,r.kt)("li",{parentName:"ul"},'For older records, since "start\' and "stop" fields are not always available, we use the "display_start" and "display_end" fields.'),(0,r.kt)("li",{parentName:"ul"},"If a required allele is not available, we extract it from the reference sequence."),(0,r.kt)("li",{parentName:"ul"},"Only variants having a dbSNP id are extracted."),(0,r.kt)("li",{parentName:"ul"},"Note that a ClinVar accession may have multiple variants associated with it (possible in different locations)"),(0,r.kt)("li",{parentName:"ul"},"VariantId is extracted from the MeasureSet attributes.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MedGen, OMIM, Orphanet IDs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{4-7}","{4-7}":!0},'<ReferenceClinVarAssertion>\n   <TraitSet Type="Disease" ID="175">\n       <Trait ID="3036" Type="Disease">\n           <XRef ID="C0086651" DB="MedGen"/>\n           <XRef ID="309297" DB="Orphanet"/>\n           <XRef ID="582" DB="Orphanet"/>\n           <XRef Type="MIM" ID="253000" DB="OMIM"/>\n       </Trait>\n   </TraitSet>\n</ReferenceClinVarAssertion>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AlleleOrigins")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{2}","{2}":!0},"<ClinVarAssertion>\n     <Origin>germline</Origin>\n</ClinVarAssertion>\n")),(0,r.kt)("p",null,"We only extract all Allele Origins from Submissions (SCV) entries."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PubMedIds")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{4,10,16,21}","{4,10,16,21}":!0},'<ClinVarAssertion>\n   <ClinicalSignificance DateLastEvaluated="1996-04-01">\n       <Citation Type="general">\n           <ID Source="PubMed">12114475</ID>\n       </Citation>\n   </ClinicalSignificance>\n   <AttributeSet>\n       <Attribute Type="AssertionMethod">LMM Criteria</Attribute>\n       <Citation>\n            <ID Source="PubMed">24033266</ID>\n       </Citation>\n   </AttributeSet>\n   <ObservedIn>\n       <ObservedData ID="9727445">\n           <Citation Type="general">\n               <ID Source="PubMed">9113933</ID>\n           </Citation>\n       </ObservedData>\n   </ObservedIn>\n   <Citation Type="general">\n       <ID Source="PubMed">23757202</ID>\n   </Citation>\n</ClinVarAssertion>\n')),(0,r.kt)("p",null,"We only extract all Pubmed Ids from Submissions (SCV) entries."),(0,r.kt)("h4",{id:"parsing-significance"},"Parsing Significance"),(0,r.kt)("p",null,"Extracting significance(s) may involve parsing multiple fields. Take the following snippets into consideration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{3,8,13-14}","{3,8,13-14}":!0},'<ClinicalSignificance DateLastEvaluated="1996-04-01">\n    <ReviewStatus>no assertion criteria provided</ReviewStatus>\n    <Description>Pathogenic</Description>\n</ClinicalSignificance>\n\n<ClinicalSignificance DateLastEvaluated="2016-10-13">\n    <ReviewStatus>criteria provided, multiple submitters, no conflicts</ReviewStatus>\n    <Description>Pathogenic/Likely pathogenic</Description>\n</ClinicalSignificance>\n\n<ClinicalSignificance DateLastEvaluated="2012-06-07">\n    <ReviewStatus>no assertion criteria provided</ReviewStatus>\n    <Description>Conflicting interpretations of pathogenicity</Description>\n    <Explanation DataSource="ClinVar" Type="public">Pathogenic(1);Uncertain significance(1)</Explanation>\n</ClinicalSignificance>\n')),(0,r.kt)("p",null,"Given the evidence, we converted the significance field into an array of strings which may be parsed out of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Descriptions")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Explanation")," fields."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Varying Delimiters")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The delimiters in each field may vary. Currently, the delimiters for ",(0,r.kt)("inlineCode",{parentName:"p"},"Description")," are ",(0,r.kt)("inlineCode",{parentName:"p"},",")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),". The delimiters for ",(0,r.kt)("inlineCode",{parentName:"p"},"Explanation")," are ",(0,r.kt)("inlineCode",{parentName:"p"},";")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),"."))),(0,r.kt)("h2",{id:"vcv-file"},"VCV File"),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<ClinVarVariationRelease xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://ftp.ncbi.nlm.nih.gov/pub/clinvar/xsd_public/clinvar_variation/variation_archive_1.4.xsd" ReleaseDate="2019-12-31">\n<VariationArchive VariationID="431749" VariationName="GRCh37/hg19 1p36.31(chr1:6051187-6158763)" VariationType="copy number gain" DateCreated="2017-08-12" DateLastUpdated="2019-09-10" Accession="VCV000431749" Version="1" RecordType="included" NumberOfSubmissions="0" NumberOfSubmitters="0">\n  <RecordStatus>current</RecordStatus>\n  <Species>Homo sapiens</Species>\n  <IncludedRecord>\n    <SimpleAllele AlleleID="425239" VariationID="431749">\n      <GeneList>\n        <Gene Symbol="KCNAB2" FullName="potassium voltage-gated channel subfamily A regulatory beta subunit 2" GeneID="8514" HGNC_ID="HGNC:6229" Source="calculated" RelationshipType="genes overlapped by variant">\n          <Location>\n            <CytogeneticLocation>1p36.31</CytogeneticLocation>\n            <SequenceLocation Assembly="GRCh38" AssemblyAccessionVersion="GCF_000001405.38" AssemblyStatus="current" Chr="1" Accession="NC_000001.11" start="5992639" stop="6101186" display_start="5992639" display_stop="6101186" Strand="+"/>\n            <SequenceLocation Assembly="GRCh37" AssemblyAccessionVersion="GCF_000001405.25" AssemblyStatus="previous" Chr="1" Accession="NC_000001.10" start="6052357" stop="6161252" display_start="6052357" display_stop="6161252" Strand="+"/>\n          </Location>\n          <OMIM>601142</OMIM>\n        </Gene>\n        <Gene Symbol="NPHP4" FullName="nephrocystin 4" GeneID="261734" HGNC_ID="HGNC:19104" Source="calculated" RelationshipType="genes overlapped by variant">\n          <Location>\n            <CytogeneticLocation>1p36.31</CytogeneticLocation>\n            <SequenceLocation Assembly="GRCh38" AssemblyAccessionVersion="GCF_000001405.38" AssemblyStatus="current" Chr="1" Accession="NC_000001.11" start="5862810" stop="5992425" display_start="5862810" display_stop="5992425" Strand="-"/>\n            <SequenceLocation Assembly="GRCh37" AssemblyAccessionVersion="GCF_000001405.25" AssemblyStatus="previous" Chr="1" Accession="NC_000001.10" start="5922869" stop="6052532" display_start="5922869" display_stop="6052532" Strand="-"/>\n          </Location>\n          <OMIM>607215</OMIM>\n        </Gene>\n      </GeneList>\n      <Name>GRCh37/hg19 1p36.31(chr1:6051187-6158763)</Name>\n      <VariantType>copy number gain</VariantType>\n      <Location>\n        <CytogeneticLocation>1p36.31</CytogeneticLocation>\n        <SequenceLocation Assembly="GRCh37" AssemblyAccessionVersion="GCF_000001405.25" forDisplay="true" AssemblyStatus="previous" Chr="1" Accession="NC_000001.10" start="6051187" stop="6158763" display_start="6051187" display_stop="6158763"/>      </Location>\n      <Interpretations>\n        <Interpretation NumberOfSubmissions="0" NumberOfSubmitters="0" Type="Clinical significance">\n          <Description>no interpretation for the single variant</Description>\n        </Interpretation>\n      </Interpretations>\n      <XRefList>\n        <XRef Type="Interpreted" ID="431733" DB="ClinVar"/>\n      </XRefList>\n    </SimpleAllele>\n    <ReviewStatus>no interpretation for the single variant</ReviewStatus>\n    <Interpretations>\n      <Interpretation NumberOfSubmissions="0" NumberOfSubmitters="0" Type="Clinical significance">\n        <Description>no interpretation for the single variant</Description>\n      </Interpretation>\n    </Interpretations>\n    <SubmittedInterpretationList>\n      <SCV Title="SUB1895145" Accession="SCV000296057" Version="1"/>\n    </SubmittedInterpretationList>\n    <InterpretedVariationList>\n      <InterpretedVariation VariationID="431733" Accession="VCV000431733" Version="1"/>\n    </InterpretedVariationList>\n  </IncludedRecord>\n</VariationArchive>\n</ClinVarVariationRelease>\n')),(0,r.kt)("h3",{id:"parsing-1"},"Parsing"),(0,r.kt)("p",null,"In the following section, we discuss which field of the XML was used to extract information that is presented in the JSON output."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"id")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<VariationArchive VariationID="431749" VariationName="GRCh37/hg19 1p36.31(chr1:6051187-6158763)" VariationType="copy number gain" DateCreated="2017-08-12" DateLastUpdated="2019-09-10" Accession="VCV000431749" Version="1" RecordType="included" NumberOfSubmissions="0" NumberOfSubmitters="0">\n')),(0,r.kt)("p",null,"The Acc and Version fields are merged to form the ID (RCV000000001.2)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"significance")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{7}","{7}":!0},'<ClinVarVariationRelease>\n  <VariationArchive>\n    <IncludedRecord>\n      <SimpleAllele>\n        <Interpretations>\n          <Interpretation NumberOfSubmissions="0" NumberOfSubmitters="0" Type="Clinical significance">\n            <Description>no interpretation for the single variant</Description>\n          </Interpretation>\n        </Interpretations>\n      </SimpleAllele>\n    </IncludedRecord>\n  </VariationArchive>\n</ClinVarVariationRelease>\n')),(0,r.kt)("p",null,"May have multiple significances listed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"reviewStatus")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{4}","{4}":!0},"<ClinVarVariationRelease>\n  <VariationArchive>\n    <IncludedRecord>\n      <ReviewStatus>no interpretation for the single variant</ReviewStatus>\n    </IncludedRecord>\n  </VariationArchive>\n</ClinVarVariationRelease>\n")),(0,r.kt)("h2",{id:"known-issues"},"Known Issues"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Known Issues")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"The XML file contains ~1k more entries (out of 162K) than the VCF file"),(0,r.kt)("li",{parentName:"ul"},"The XML file does not have a field indicating that a record is associated with the reference base - something that was present in VCF"),(0,r.kt)("li",{parentName:"ul"},'The XML file contains entries (e.g. RCV000016645 version=1) which have IUPAC ambiguous bases ("R", "Y", "H",\netc.) as their alternate allele')))),(0,r.kt)("h2",{id:"download-urls"},"Download URLs"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"ftp://ftp.ncbi.nlm.nih.gov/pub/clinvar/xml/ClinVarFullRelease_00-latest.xml.gz"},"ftp://ftp.ncbi.nlm.nih.gov/pub/clinvar/xml/ClinVarFullRelease_00-latest.xml.gz")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ftp.ncbi.nlm.nih.gov/pub/clinvar/xml/clinvar_variation/ClinVarVariationRelease_00-latest.xml.gz"},"https://ftp.ncbi.nlm.nih.gov/pub/clinvar/xml/clinvar_variation/ClinVarVariationRelease_00-latest.xml.gz")),(0,r.kt)("h2",{id:"json-output"},"JSON Output"),(0,r.kt)(l.default,{mdxType:"JSON"}),(0,r.kt)("h2",{id:"building-the-supplementary-files"},"Building the supplementary files"),(0,r.kt)("p",null,"The ClinVar ",(0,r.kt)("inlineCode",{parentName:"p"},".nsa")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".nsi")," for Nirvana can be built using the ",(0,r.kt)("inlineCode",{parentName:"p"},"SAUtils")," command's ",(0,r.kt)("inlineCode",{parentName:"p"},"clinvar")," subcommand."),(0,r.kt)("h3",{id:"source-data-files"},"Source data files"),(0,r.kt)("p",null,"Two input ",(0,r.kt)("inlineCode",{parentName:"p"},".xml")," files and a ",(0,r.kt)("inlineCode",{parentName:"p"},".version")," file are required in order to build the ",(0,r.kt)("inlineCode",{parentName:"p"},".nsa")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".nsi")," file. You should have the following files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"ClinVarFullRelease_2021-06.xml.gz       ClinVarVariationRelease_2021-06.xml.gz\nClinVarFullRelease_2021-06.xml.gz.version\n")),(0,r.kt)("p",null,"The version file is a text file with the follwoing format."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"NAME=ClinVar\nVERSION=20210603\nDATE=2021-06-03\nDESCRIPTION=A freely accessible, public archive of reports of the relationships among human variations and phenotypes, with supporting evidence\n")),(0,r.kt)("p",null,"The help menu for the utility is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"dotnet SAUtils.dll clinvar\n---------------------------------------------------------------------------\nSAUtils                                             (c) 2021 Illumina, Inc.\nStromberg, Roy, Lajugie, Jiang, Li, and Kang                         3.15.0\n---------------------------------------------------------------------------\n\nUSAGE: dotnet SAUtils.dll clinvar [options]\nCreates a supplementary database with ClinVar annotations\n\nOPTIONS:\n      --ref, -r <VALUE>      compressed reference sequence file\n      --rcv, -i <VALUE>      ClinVar Full release XML file\n      --vcv, -c <VALUE>      ClinVar Variation release XML file\n      --out, -o <VALUE>      output directory\n      --help, -h             displays the help menu\n      --version, -v          displays the version\n\ndotnet SAUtils.dll clinvar\n")),(0,r.kt)("p",null,"Here is a sample execution:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"dotnet ~/development/Nirvana/bin/Debug/netcoreapp3.1/SAUtils.dll clinvar \\\\\n--ref ~/development/References/7/Homo_sapiens.GRCh38.Nirvana.dat --rcv ClinVarFullRelease_2021-06.xml.gz \\\\\n--vcv ClinVarVariationRelease_2021-06.xml.gz --out ~/development/SupplementaryDatabase/63/GRCh38\n---------------------------------------------------------------------------\nSAUtils                                             (c) 2020 Illumina, Inc.\nStromberg, Roy, Lajugie, Jiang, Li, and Kang                         3.13.0\n---------------------------------------------------------------------------\n\nFound 983417 VCV records\nChromosome 1 completed in 00:09:46.2\nChromosome 2 completed in 00:00:16.4\nChromosome 3 completed in 00:00:06.9\nUnknown vcv id:982521 found in RCV001262095.1\nChromosome 4 completed in 00:00:03.9\nChromosome 5 completed in 00:00:07.1\nChromosome 6 completed in 00:00:05.7\nChromosome 7 completed in 00:00:06.6\nUnknown vcv id:430873 found in RCV000493222.1\nChromosome 8 completed in 00:00:04.6\nChromosome 9 completed in 00:00:06.2\nChromosome 10 completed in 00:00:05.6\nChromosome 11 completed in 00:00:10.2\nChromosome 12 completed in 00:00:06.9\nChromosome 13 completed in 00:00:05.9\nChromosome 14 completed in 00:00:04.9\nChromosome 15 completed in 00:00:05.4\nChromosome 16 completed in 00:00:08.9\nChromosome 17 completed in 00:00:13.1\nChromosome 18 completed in 00:00:02.4\nChromosome 19 completed in 00:00:07.6\nChromosome 20 completed in 00:00:02.4\nChromosome 21 completed in 00:00:01.6\nChromosome 22 completed in 00:00:02.6\nChromosome MT completed in 00:00:00.3\nChromosome X completed in 00:00:05.5\n2 unknown VCVs found in RCVs.\n982521,430873\nChromosome Y completed in 00:00:00.0\n\nTime: 00:12:08.2\n\n")))}u.isMDXComponent=!0},1507:function(e,n,t){n.Z=t.p+"assets/files/clinvar-rcv-example-4e0a2f2ac6c70acd0ce41410690b683b.xml"}}]);