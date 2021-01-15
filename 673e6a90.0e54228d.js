(window.webpackJsonp=window.webpackJsonp||[]).push([[22,53],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(133)),c=n(58),l={title:"ClinVar"},s={unversionedId:"data-sources/clinvar",id:"version-3.13/data-sources/clinvar",isDocsHomePage:!1,title:"ClinVar",description:"Overview",source:"@site/versioned_docs/version-3.13/data-sources/clinvar.mdx",slug:"/data-sources/clinvar",permalink:"/NirvanaDocumentation/3.13/data-sources/clinvar",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.13/data-sources/clinvar.mdx",version:"3.13",sidebar:"version-3.13/docs",previous:{title:"Annotating COVID-19",permalink:"/NirvanaDocumentation/3.13/introduction/covid19"},next:{title:"dbSNP",permalink:"/NirvanaDocumentation/3.13/data-sources/dbsnp"}},o=[{value:"Overview",id:"overview",children:[]},{value:"RCV File",id:"rcv-file",children:[{value:"Example",id:"example",children:[]},{value:"Parsing",id:"parsing",children:[]}]},{value:"VCV File",id:"vcv-file",children:[{value:"Example",id:"example-1",children:[]},{value:"Parsing",id:"parsing-1",children:[]}]},{value:"Known Issues",id:"known-issues",children:[]},{value:"Download URL",id:"download-url",children:[]},{value:"JSON Output",id:"json-output",children:[]}],b={rightToc:o};function p(e){var t=e.components,l=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"ClinVar is a freely accessible, public archive of reports of the relationships among human variations and phenotypes, with supporting evidence. ClinVar thus facilitates access to and communication about the relationships asserted between human variation and observed health status, and the history of that interpretation."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Publication")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Melissa J Landrum, Jennifer M Lee, Mark Benson, Garth R Brown, Chen Chao, Shanmuga Chitipiralla, Baoshan Gu, Jennifer Hart, Douglas Hoffman, Wonhee Jang, Karen Karapetyan, Kenneth Katz, Chunlei Liu, Zenith Maddipatla, Adriana Malheiro, Kurt McDaniel, Michael Ovetsky, George Riley, George Zhou, J Bradley Holmes, Brandi L Kattman, Donna R Maglott, ClinVar: improving access to variant interpretations and supporting evidence, ",Object(r.b)("em",{parentName:"p"},"Nucleic Acids Research"),", ",Object(r.b)("strong",{parentName:"p"},"46"),", Issue D1, 4 January 2018, Pages D1062\u2013D1067, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://doi.org/10.1093/nar/gkx1153"}),"https://doi.org/10.1093/nar/gkx1153")))),Object(r.b)("h2",{id:"rcv-file"},"RCV File"),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("p",null,"Here's ",Object(r.b)("a",{target:"_blank",href:n(195).default},"a full RCV entry"),"."),Object(r.b)("h3",{id:"parsing"},"Parsing"),Object(r.b)("p",null,"In the following section, we discuss which field of the XML was used to extract information that is presented in the JSON output."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"ID")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:"{3}","{3}":!0}),'<ClinVarSet>\n   <ReferenceClinVarAssertion>    \n       <ClinVarAccession Acc="RCV000000001" Version="2">\n</ClinVarSet>\n')),Object(r.b)("p",null,"The Acc and Version fields are merged to form the ID (RCV000000001.2)"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"LastUpdatedDate")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:"{2}","{2}":!0}),'<ClinVarSet>\n   <ReferenceClinVarAssertion DateCreated="2012-08-13" DateLastUpdated="2016-02-17" ID="57604" >\n</ClinVarSet>\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Significance")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:"{5}","{5}":!0}),'<ClinVarSet>\n   <ReferenceClinVarAssertion>\n       <ClinicalSignificance DateLastEvaluated="1996-04-01">        \n           <ReviewStatus>no assertion criteria provided</ReviewStatus>              \n           <Description>Pathogenic</Description>            \n       </ClinicalSignificance>\n</ClinVarSet>\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"ReviewStatus")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:"{4}","{4}":!0}),'<ClinVarSet>\n   <ReferenceClinVarAssertion>    \n       <ClinicalSignificance DateLastEvaluated="1996-04-01">        \n           <ReviewStatus>no assertion criteria provided</ReviewStatus>             \n           <Description>Pathogenic</Description>            \n       </ClinicalSignificance>\n</ClinVarSet>\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Phenotypes")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:"{2-8}","{2-8}":!0}),'<ReferenceClinVarAssertion>\n   <TraitSet Type="Disease" ID="62">\n       <Trait Type="Disease">\n            <Name>\n               <ElementValue Type="Preferred">Joubert syndrome 9</ElementValue>\n            </Name>\n        </Trait>\n   </TraitSet>\n</ReferenceClinVarAssertion>\n')),Object(r.b)("p",null,'We only use the field with Type="Preferred". Multiple phenotypes may be reported'),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Location and Variant Id")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:"{3,5-12}","{3,5-12}":!0}),'<ReferenceClinVarAssertion>\n<GenotypeSet Type="CompoundHeterozygote" ID="424709">\n   <MeasureSet Type="Variant" ID="81">\n       <Measure Type="single nucleotide variant" ID="15120">\n        <SequenceLocation Assembly="GRCh38" AssemblyAccessionVersion="GCF_000001405.38"  \n          AssemblyStatus="current" Chr="10" Accession="NC_000010.11" start="89222510"  \n          stop="89222510" display_start="89222510" display_stop="89222510" variantLength="1"  \n          positionVCF="89222510" referenceAlleleVCF="C" alternateAlleleVCF="T"/>  \n        <SequenceLocation Assembly="GRCh37" AssemblyAccessionVersion="GCF_000001405.25"  \n          AssemblyStatus="previous" Chr="10" Accession="NC_000010.10" start="90982267"  \n          stop="90982267" display_start="90982267" display_stop="90982267" variantLength="1"  \n          positionVCF="90982267" referenceAlleleVCF="C" alternateAlleleVCF="T"/>\n       </Measure>\n   </MeasureSet>\n </GenotypeSet>\n</ReferenceClinVarAssertion>\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The variant position is extracted from the fields for their respective assemblies."),Object(r.b)("li",{parentName:"ul"},"Updated records contain positionVCF, referenceAlleleVCF and alternateAlleleVCF fields and when present, we use them to create the variant."),Object(r.b)("li",{parentName:"ul"},'For older records, since "start\' and "stop" fields are not always available, we use the "display_start" and "display_end" fields.'),Object(r.b)("li",{parentName:"ul"},"If a required allele is not available, we extract it from the reference sequence."),Object(r.b)("li",{parentName:"ul"},"Only variants having a dbSNP id are extracted."),Object(r.b)("li",{parentName:"ul"},"Note that a ClinVar accession may have multiple variants associated with it (possible in different locations)"),Object(r.b)("li",{parentName:"ul"},"VariantId is extracted from the MeasureSet attributes.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"MedGen, OMIM, Orphanet IDs")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:"{4-7}","{4-7}":!0}),'<ReferenceClinVarAssertion>\n   <TraitSet Type="Disease" ID="175">\n       <Trait ID="3036" Type="Disease">\n           <XRef ID="C0086651" DB="MedGen"/>\n           <XRef ID="309297" DB="Orphanet"/>\n           <XRef ID="582" DB="Orphanet"/>\n           <XRef Type="MIM" ID="253000" DB="OMIM"/>\n       </Trait>\n   </TraitSet>\n</ReferenceClinVarAssertion>\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"AlleleOrigins")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:"{2}","{2}":!0}),"<ClinVarAssertion>\n     <Origin>germline</Origin>\n</ClinVarAssertion>\n")),Object(r.b)("p",null,"We only extract all Allele Origins from Submissions (SCV) entries."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"PubMedIds")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:"{4,10,16,21}","{4,10,16,21}":!0}),'<ClinVarAssertion>\n   <ClinicalSignificance DateLastEvaluated="1996-04-01">\n       <Citation Type="general">\n           <ID Source="PubMed">12114475</ID>\n       </Citation>\n   </ClinicalSignificance>\n   <AttributeSet>\n       <Attribute Type="AssertionMethod">LMM Criteria</Attribute>\n       <Citation>\n            <ID Source="PubMed">24033266</ID>\n       </Citation>\n   </AttributeSet>\n   <ObservedIn>\n       <ObservedData ID="9727445">\n           <Citation Type="general">\n               <ID Source="PubMed">9113933</ID>\n           </Citation>\n       </ObservedData>\n   </ObservedIn>\n   <Citation Type="general">\n       <ID Source="PubMed">23757202</ID>\n   </Citation>\n</ClinVarAssertion>\n')),Object(r.b)("p",null,"We only extract all Pubmed Ids from Submissions (SCV) entries."),Object(r.b)("h4",{id:"parsing-significance"},"Parsing Significance"),Object(r.b)("p",null,"Extracting significance(s) may involve parsing multiple fields. Take the following snippets into consideration."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:"{3,8,13-14}","{3,8,13-14}":!0}),'<ClinicalSignificance DateLastEvaluated="1996-04-01">\n    <ReviewStatus>no assertion criteria provided</ReviewStatus>\n    <Description>Pathogenic</Description>\n</ClinicalSignificance>\n\n<ClinicalSignificance DateLastEvaluated="2016-10-13">\n    <ReviewStatus>criteria provided, multiple submitters, no conflicts</ReviewStatus>\n    <Description>Pathogenic/Likely pathogenic</Description>\n</ClinicalSignificance>\n\n<ClinicalSignificance DateLastEvaluated="2012-06-07">\n    <ReviewStatus>no assertion criteria provided</ReviewStatus>\n    <Description>Conflicting interpretations of pathogenicity</Description>\n    <Explanation DataSource="ClinVar" Type="public">Pathogenic(1);Uncertain significance(1)</Explanation>\n</ClinicalSignificance>\n')),Object(r.b)("p",null,"Given the evidence, we converted the significance field into an array of strings which may be parsed out of the ",Object(r.b)("inlineCode",{parentName:"p"},"Descriptions")," or ",Object(r.b)("inlineCode",{parentName:"p"},"Explanation")," fields. "),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Varying Delimiters")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The delimiters in each field may vary. Currently, the delimiters for ",Object(r.b)("inlineCode",{parentName:"p"},"Description")," are ",Object(r.b)("inlineCode",{parentName:"p"},",")," and ",Object(r.b)("inlineCode",{parentName:"p"},"/"),". The delimiters for ",Object(r.b)("inlineCode",{parentName:"p"},"Explanation")," are ",Object(r.b)("inlineCode",{parentName:"p"},";")," and ",Object(r.b)("inlineCode",{parentName:"p"},"/"),"."))),Object(r.b)("h2",{id:"vcv-file"},"VCV File"),Object(r.b)("h3",{id:"example-1"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<ClinVarVariationRelease xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://ftp.ncbi.nlm.nih.gov/pub/clinvar/xsd_public/clinvar_variation/variation_archive_1.4.xsd" ReleaseDate="2019-12-31">\n<VariationArchive VariationID="431749" VariationName="GRCh37/hg19 1p36.31(chr1:6051187-6158763)" VariationType="copy number gain" DateCreated="2017-08-12" DateLastUpdated="2019-09-10" Accession="VCV000431749" Version="1" RecordType="included" NumberOfSubmissions="0" NumberOfSubmitters="0">\n  <RecordStatus>current</RecordStatus>\n  <Species>Homo sapiens</Species>\n  <IncludedRecord>\n    <SimpleAllele AlleleID="425239" VariationID="431749">\n      <GeneList>\n        <Gene Symbol="KCNAB2" FullName="potassium voltage-gated channel subfamily A regulatory beta subunit 2" GeneID="8514" HGNC_ID="HGNC:6229" Source="calculated" RelationshipType="genes overlapped by variant">\n          <Location>\n            <CytogeneticLocation>1p36.31</CytogeneticLocation>\n            <SequenceLocation Assembly="GRCh38" AssemblyAccessionVersion="GCF_000001405.38" AssemblyStatus="current" Chr="1" Accession="NC_000001.11" start="5992639" stop="6101186" display_start="5992639" display_stop="6101186" Strand="+"/>\n            <SequenceLocation Assembly="GRCh37" AssemblyAccessionVersion="GCF_000001405.25" AssemblyStatus="previous" Chr="1" Accession="NC_000001.10" start="6052357" stop="6161252" display_start="6052357" display_stop="6161252" Strand="+"/>\n          </Location>\n          <OMIM>601142</OMIM>\n        </Gene>\n        <Gene Symbol="NPHP4" FullName="nephrocystin 4" GeneID="261734" HGNC_ID="HGNC:19104" Source="calculated" RelationshipType="genes overlapped by variant">\n          <Location>\n            <CytogeneticLocation>1p36.31</CytogeneticLocation>\n            <SequenceLocation Assembly="GRCh38" AssemblyAccessionVersion="GCF_000001405.38" AssemblyStatus="current" Chr="1" Accession="NC_000001.11" start="5862810" stop="5992425" display_start="5862810" display_stop="5992425" Strand="-"/>\n            <SequenceLocation Assembly="GRCh37" AssemblyAccessionVersion="GCF_000001405.25" AssemblyStatus="previous" Chr="1" Accession="NC_000001.10" start="5922869" stop="6052532" display_start="5922869" display_stop="6052532" Strand="-"/>\n          </Location>\n          <OMIM>607215</OMIM>\n        </Gene>\n      </GeneList>\n      <Name>GRCh37/hg19 1p36.31(chr1:6051187-6158763)</Name>\n      <VariantType>copy number gain</VariantType>\n      <Location>\n        <CytogeneticLocation>1p36.31</CytogeneticLocation>\n        <SequenceLocation Assembly="GRCh37" AssemblyAccessionVersion="GCF_000001405.25" forDisplay="true" AssemblyStatus="previous" Chr="1" Accession="NC_000001.10" start="6051187" stop="6158763" display_start="6051187" display_stop="6158763"/>      </Location>\n      <Interpretations>\n        <Interpretation NumberOfSubmissions="0" NumberOfSubmitters="0" Type="Clinical significance">\n          <Description>no interpretation for the single variant</Description>\n        </Interpretation>\n      </Interpretations>\n      <XRefList>\n        <XRef Type="Interpreted" ID="431733" DB="ClinVar"/>\n      </XRefList>\n    </SimpleAllele>\n    <ReviewStatus>no interpretation for the single variant</ReviewStatus>\n    <Interpretations>\n      <Interpretation NumberOfSubmissions="0" NumberOfSubmitters="0" Type="Clinical significance">\n        <Description>no interpretation for the single variant</Description>\n      </Interpretation>\n    </Interpretations>\n    <SubmittedInterpretationList>\n      <SCV Title="SUB1895145" Accession="SCV000296057" Version="1"/>\n    </SubmittedInterpretationList>\n    <InterpretedVariationList>\n      <InterpretedVariation VariationID="431733" Accession="VCV000431733" Version="1"/>\n    </InterpretedVariationList>\n  </IncludedRecord>\n</VariationArchive>\n</ClinVarVariationRelease>\n')),Object(r.b)("h3",{id:"parsing-1"},"Parsing"),Object(r.b)("p",null,"In the following section, we discuss which field of the XML was used to extract information that is presented in the JSON output."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"id")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<VariationArchive VariationID="431749" VariationName="GRCh37/hg19 1p36.31(chr1:6051187-6158763)" VariationType="copy number gain" DateCreated="2017-08-12" DateLastUpdated="2019-09-10" Accession="VCV000431749" Version="1" RecordType="included" NumberOfSubmissions="0" NumberOfSubmitters="0">\n')),Object(r.b)("p",null,"The Acc and Version fields are merged to form the ID (RCV000000001.2)"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"significance")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:"{7}","{7}":!0}),'<ClinVarVariationRelease>\n  <VariationArchive>\n    <IncludedRecord>\n      <SimpleAllele>\n        <Interpretations>\n          <Interpretation NumberOfSubmissions="0" NumberOfSubmitters="0" Type="Clinical significance">\n            <Description>no interpretation for the single variant</Description>\n          </Interpretation>\n        </Interpretations>\n      </SimpleAllele>\n    </IncludedRecord>\n  </VariationArchive>\n</ClinVarVariationRelease>\n')),Object(r.b)("p",null,"May have multiple significances listed."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"reviewStatus")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:"{4}","{4}":!0}),"<ClinVarVariationRelease>\n  <VariationArchive>\n    <IncludedRecord>\n      <ReviewStatus>no interpretation for the single variant</ReviewStatus>\n    </IncludedRecord>\n  </VariationArchive>\n</ClinVarVariationRelease>\n")),Object(r.b)("h2",{id:"known-issues"},"Known Issues"),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Known Issues")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"The XML file contains ~1k more entries (out of 162K) than the VCF file"),Object(r.b)("li",{parentName:"ul"},"The XML file does not have a field indicating that a record is associated with the reference base - something that was present in VCF"),Object(r.b)("li",{parentName:"ul"},'The XML file contains entries (e.g. RCV000016645 version=1) which have IUPAC ambiguous bases ("R", "Y", "H",\netc.) as their alternate allele')))),Object(r.b)("h2",{id:"download-url"},"Download URL"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"ftp://ftp.ncbi.nlm.nih.gov/pub/clinvar/xml/ClinVarFullRelease_00-latest.xml.gz"}),"ftp://ftp.ncbi.nlm.nih.gov/pub/clinvar/xml/ClinVarFullRelease_00-latest.xml.gz")),Object(r.b)("h2",{id:"json-output"},"JSON Output"),Object(r.b)(c.default,{mdxType:"JSON"}))}p.isMDXComponent=!0},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=i.a.createContext({}),b=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,u=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return n?i.a.createElement(u,l(l({ref:t},o),{},{components:n})):i.a.createElement(u,l({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<r;o++)c[o]=n[o];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},195:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/clinvar-rcv-example-4e0a2f2ac6c70acd0ce41410690b683b.xml"},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),r=(n(0),n(133)),c={},l={unversionedId:"data-sources/clinvar-json",id:"version-3.13/data-sources/clinvar-json",isDocsHomePage:!1,title:"clinvar-json",description:"`json",source:"@site/versioned_docs/version-3.13/data-sources/clinvar-json.md",slug:"/data-sources/clinvar-json",permalink:"/NirvanaDocumentation/3.13/data-sources/clinvar-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.13/data-sources/clinvar-json.md",version:"3.13"},s=[],o={rightToc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"clinvar":[\n   {\n      "id":"VCV000036581.3",\n      "reviewStatus":"reviewed by expert panel",\n      "significance":[\n         "benign"\n      ],\n      "refAllele":"G",\n      "altAllele":"A",\n      "lastUpdatedDate":"2020-03-01",\n      "isAlleleSpecific":true\n   },\n   {\n      "id":"RCV000030258.4",\n      "variationId":"VCV000036581.3",\n      "reviewStatus":"reviewed by expert panel",\n      "alleleOrigins":[\n         "germline"\n      ],\n      "refAllele":"G",\n      "altAllele":"A",\n      "phenotypes":[\n         "Lynch syndrome"\n      ],\n      "medGenIds":[\n         "C1333990"\n      ],\n      "omimIds":[\n         "120435"\n      ],\n      "significance":[\n         "benign"\n      ],\n      "lastUpdatedDate":"2017-05-01",\n      "isAlleleSpecific":true\n   }\n]\n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Field"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Notes"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"id"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"ClinVar ID")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"variationId"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"ClinVar VCV ID")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"reviewStatus"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"see possible values below")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"alleleOrigins"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string array"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"see possible values below")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"refAllele"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"altAllele"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"phenotypes"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string array"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"medGenIds"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string array"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"MedGen IDs")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"omimIds"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string array"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"OMIM IDs")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"orphanetIds"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string array"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Orphanet IDs")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"significance"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string array"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"see possible values below")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"lastUpdatedDate"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"yyyy-MM-dd")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"pubMedIds"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string array"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"PubMed IDs")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"isAlleleSpecific"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"bool"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"true when the current variant alternate allele matches the ClinVar alternate allele")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"reviewStatus:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"no assertion provided"),Object(r.b)("li",{parentName:"ul"},"no assertion criteria provided"),Object(r.b)("li",{parentName:"ul"},"criteria provided, single submitter"),Object(r.b)("li",{parentName:"ul"},"practice guideline"),Object(r.b)("li",{parentName:"ul"},"classified by multiple submitters"),Object(r.b)("li",{parentName:"ul"},"criteria provided, conflicting interpretations"),Object(r.b)("li",{parentName:"ul"},"criteria provided, multiple submitters, no conflicts"),Object(r.b)("li",{parentName:"ul"},"no interpretation for the single variant")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"alleleOrigins:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"unknown"),Object(r.b)("li",{parentName:"ul"},"other"),Object(r.b)("li",{parentName:"ul"},"germline"),Object(r.b)("li",{parentName:"ul"},"somatic"),Object(r.b)("li",{parentName:"ul"},"inherited"),Object(r.b)("li",{parentName:"ul"},"paternal"),Object(r.b)("li",{parentName:"ul"},"maternal"),Object(r.b)("li",{parentName:"ul"},"de-novo"),Object(r.b)("li",{parentName:"ul"},"biparental"),Object(r.b)("li",{parentName:"ul"},"uniparental"),Object(r.b)("li",{parentName:"ul"},"not-tested"),Object(r.b)("li",{parentName:"ul"},"tested-inconclusive")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"significance:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"uncertain significance"),Object(r.b)("li",{parentName:"ul"},"not provided"),Object(r.b)("li",{parentName:"ul"},"benign"),Object(r.b)("li",{parentName:"ul"},"likely benign"),Object(r.b)("li",{parentName:"ul"},"likely pathogenic"),Object(r.b)("li",{parentName:"ul"},"pathogenic"),Object(r.b)("li",{parentName:"ul"},"drug response"),Object(r.b)("li",{parentName:"ul"},"histocompatibility"),Object(r.b)("li",{parentName:"ul"},"association"),Object(r.b)("li",{parentName:"ul"},"risk factor"),Object(r.b)("li",{parentName:"ul"},"protective"),Object(r.b)("li",{parentName:"ul"},"affects"),Object(r.b)("li",{parentName:"ul"},"conflicting data from submitters"),Object(r.b)("li",{parentName:"ul"},"other"),Object(r.b)("li",{parentName:"ul"},"no interpretation for the single variant"),Object(r.b)("li",{parentName:"ul"},"conflicting interpretations of pathogenicity")))}b.isMDXComponent=!0}}]);