"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[9552],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7229:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={title:"Getting Started"},s=void 0,c={unversionedId:"introduction/getting-started",id:"version-3.16/introduction/getting-started",title:"Getting Started",description:"Nirvana is written in C# using .NET Core (an amazing runtime environment that currently runs on Windows, Linux, Mac OS X, and in Docker images). Once .NET Core has been downloaded, all you need to do is grab the source, compile it, and grab the data files.",source:"@site/versioned_docs/version-3.16/introduction/getting-started.md",sourceDirName:"introduction",slug:"/introduction/getting-started",permalink:"/NirvanaDocumentation/3.16/introduction/getting-started",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.16/introduction/getting-started.md",tags:[],version:"3.16",frontMatter:{title:"Getting Started"},sidebar:"version-3.16/docs",previous:{title:"Dependencies",permalink:"/NirvanaDocumentation/3.16/introduction/dependencies"},next:{title:"Parsing Nirvana JSON",permalink:"/NirvanaDocumentation/3.16/introduction/parsing-json"}},d=[{value:"Quick Start",id:"quick-start",children:[],level:2},{value:"Getting Nirvana",id:"getting-nirvana",children:[{value:"Compile from Source",id:"compile-from-source",children:[],level:3},{value:"GitHub Release Notes",id:"github-release-notes",children:[],level:3},{value:"Docker",id:"docker",children:[],level:3}],level:2},{value:"Downloading the data files",id:"downloading-the-data-files",children:[],level:2},{value:"Download a test VCF file",id:"download-a-test-vcf-file",children:[],level:2},{value:"Running Nirvana",id:"running-nirvana",children:[],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Nirvana is written in C# using ",(0,r.kt)("a",{parentName:"p",href:"https://www.microsoft.com/net/download/core"},".NET Core")," (an amazing runtime environment that currently runs on Windows, Linux, Mac OS X, and in Docker images). Once .NET Core has been downloaded, all you need to do is grab the source, compile it, and grab the data files."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Nirvana currently uses .NET Core 3.1 or later. Please make sure that you have the most current runtime from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.microsoft.com/net/download/core"},".NET Core downloads")," page."))),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"If you want to get started right away, we've created ",(0,r.kt)("a",{parentName:"p",href:"https://illumina.github.io/NirvanaDocumentation/files/TestNirvana.sh"},"a script")," that downloads Nirvana, compiles it, and starts annotating a test file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O https://illumina.github.io/NirvanaDocumentation/files/TestNirvana.sh\nbash ./TestNirvana.sh\n")),(0,r.kt)("p",null,"We have verified that this script works on Windows (using Git Bash or WSL), Linux, and Mac OS X."),(0,r.kt)("h2",{id:"getting-nirvana"},"Getting Nirvana"),(0,r.kt)("h3",{id:"compile-from-source"},"Compile from Source"),(0,r.kt)("p",null,"The following will grab the latest version of Nirvana from GitHub and compile it using the .NET Core compiler:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Illumina/Nirvana.git\ncd Nirvana\ndotnet build -c Release\n")),(0,r.kt)("h3",{id:"github-release-notes"},"GitHub Release Notes"),(0,r.kt)("p",null,"Alternatively, you can grab the latest binaries from our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Illumina/Nirvana/releases"},"GitHub Releases")," page:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p Nirvana/Data\ncd Nirvana\nunzip Nirvana-3.16.1-dotnet-3.1.0.zip\n")),(0,r.kt)("h3",{id:"docker"},"Docker"),(0,r.kt)("p",null,"You can find us on ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/annotation/nirvana"},"Docker Hub")," under ",(0,r.kt)("inlineCode",{parentName:"p"},"annotation/nirvana"),":"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We think Docker is fantastic. However, because our data files are usually accessed through a Docker volume, there is a noticeable performance penalty when running Nirvana in Docker."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p Nirvana/Data\ncd Nirvana\ndocker pull annotation/nirvana:3.14\n")),(0,r.kt)("p",null,"For Docker, we have special instructions for running the Downloader:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker run --rm -it -v Data:/scratch annotation/nirvana:3.14 dotnet \\\n     /opt/nirvana/Downloader.dll --ga GRCh37 -o /scratch\n")),(0,r.kt)("p",null,"Similarly, we have special instructions for running Nirvana (Here's ",(0,r.kt)("a",{parentName:"p",href:"https://illumina.github.io/NirvanaDocumentation/files/HiSeq.10000.vcf.gz"},"a toy VCF")," in case you need it):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker run --rm -it -v Data:/scratch annotation/nirvana:3.14 dotnet \\\n     /opt/nirvana/Nirvana.dll -c /scratch/Cache/GRCh37/Both \\\n     -r /scratch/References/Homo_sapiens.GRCh37.Nirvana.dat \\\n     --sd /scratch/SupplementaryAnnotation/GRCh37 \\\n     -i /scratch/HiSeq.10000.vcf.gz -o /scratch/HiSeq\n")),(0,r.kt)("h2",{id:"downloading-the-data-files"},"Downloading the data files"),(0,r.kt)("p",null,"To download the latest data sources (or update the ones that you already have), use the following command to automate the download from S3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet bin/Release/netcoreapp3.1/Downloader.dll \\\n     --ga GRCh37 \\\n     -o Data\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"--ga")," argument specifies the genome assembly which can be ",(0,r.kt)("inlineCode",{parentName:"li"},"GRCh37"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"GRCh38"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"both"),"."),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"-o")," argument specifies the output directory")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Glitches in the Matrix")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Every once in a while, the download process does not go smoothly. Perhaps the internet connection cut out or you ran out of disk space. The Downloader attempts to detect these situations by checking the file sizes at the very end. If you see that a file was marked ",(0,r.kt)("inlineCode",{parentName:"p"},"truncated"),", try fixing the root cause and running the downloader again."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"From time to time, you can re-run the Downloader to get the latest annotation files. It will only download the files that changed."))),(0,r.kt)("h2",{id:"download-a-test-vcf-file"},"Download a test VCF file"),(0,r.kt)("p",null,"Here's ",(0,r.kt)("a",{parentName:"p",href:"https://illumina.github.io/NirvanaDocumentation/files/HiSeq.10000.vcf.gz"},"a toy VCF file")," you can play around with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O https://illumina.github.io/NirvanaDocumentation/files/HiSeq.10000.vcf.gz\n")),(0,r.kt)("h2",{id:"running-nirvana"},"Running Nirvana"),(0,r.kt)("p",null,"Once you have downloaded the data sets, use the following command to annotate your VCF:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet bin/Release/netcoreapp3.1/Nirvana.dll \\\n     -c Data/Cache/GRCh37/Both \\\n     --sd Data/SupplementaryAnnotation/GRCh37 \\\n     -r Data/References/Homo_sapiens.GRCh37.Nirvana.dat \\\n     -i HiSeq.10000.vcf.gz \\\n     -o HiSeq.10000\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"-c")," argument specifies the cache prefix"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"--sd")," argument specifies the supplementary annotation directory"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"-r")," argument specifies the compressed reference path"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"-i")," argument specifies the input VCF path"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"-o")," argument specifies the output filename prefix")),(0,r.kt)("p",null,"When running Nirvana, performance metrics are shown as it evaluates each chromosome in the input VCF file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"---------------------------------------------------------------------------\nNirvana                                             (c) 2021 Illumina, Inc.\nStromberg, Roy, Lajugie, Jiang, Li, and Kang                         3.16.1\n---------------------------------------------------------------------------\n\nInitialization                                         Time     Positions/s\n---------------------------------------------------------------------------\nCache                                               00:00:01.2\nSA Position Scan                                    00:00:00.1       55,270\n\nReference                                Preload    Annotation   Variants/s\n---------------------------------------------------------------------------\nchr1                                    00:00:00.1  00:00:01.5        6,323\n\nSummary                                                Time         Percent\n---------------------------------------------------------------------------\nInitialization                                      00:00:01.3       23.9 %\nPreload                                             00:00:00.1        2.9 %\nAnnotation                                          00:00:01.5       27.2 %\n\nPeak memory usage: 1.434 GB\nTime: 00:00:05.2\n")),(0,r.kt)("p",null,"The output will be a JSON file called ",(0,r.kt)("inlineCode",{parentName:"p"},"HiSeq.10000.json.gz"),". Here's ",(0,r.kt)("a",{parentName:"p",href:"https://illumina.github.io/NirvanaDocumentation/files/HiSeq.10000.json.gz"},"the full JSON file"),"."))}p.isMDXComponent=!0}}]);