(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{59:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(84),c=a(88),m=a(92),o=a(87);t.default=function(){const{siteConfig:e}=Object(r.a)(),t=Object(o.useVersions)(),a=Object(o.useLatestVersion)(),n=t.find((e=>"current"===e.name)),i=t.filter((e=>e!==a&&"current"!==e.name)),s=i.shift(),u="https://github.com/Illumina/Nirvana";return l.a.createElement(m.a,{title:"Versions",permalink:"/versions",description:"Docusaurus 2 Versions page listing all documented site versions"},l.a.createElement("main",{className:"container margin-vert--lg"},l.a.createElement("h1",null,"Nirvana documentation versions"),s&&l.a.createElement("div",{className:"margin-bottom--lg"},l.a.createElement("h3",{id:"next"},"Current version (Stable)"),l.a.createElement("p",null,"Here you can find the documentation for current released version."),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,s.name),l.a.createElement("td",null,l.a.createElement(c.a,{to:s.path},"Documentation")),l.a.createElement("td",null,l.a.createElement("a",{href:`${u}/releases/tag/v${s.name}.0`},"Release Notes")))))),l.a.createElement("div",{className:"margin-bottom--lg"},l.a.createElement("h3",{id:"latest"},"Next version (Unreleased)"),l.a.createElement("p",null,"Here you can find the documentation for unreleased version currently in development."),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,a.label),l.a.createElement("td",null,l.a.createElement(c.a,{to:a.path},"Documentation")))))),n!==a&&l.a.createElement("div",{className:"margin-bottom--lg"},l.a.createElement("h3",{id:"next"},"Next version (Unreleased)"),l.a.createElement("p",null,"Here you can find the documentation for unreleased version."),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"master"),l.a.createElement("td",null,l.a.createElement(c.a,{to:n.path},"Documentation")),l.a.createElement("td",null,l.a.createElement("a",{href:u},"Source Code")))))),i.length>0&&l.a.createElement("div",{className:"margin-bottom--lg"},l.a.createElement("h3",{id:"archive"},"Past versions (Not maintained anymore)"),l.a.createElement("p",null,"Here you can find documentation for previous versions of Docusaurus."),l.a.createElement("table",null,l.a.createElement("tbody",null,i.map((e=>l.a.createElement("tr",{key:e.name},l.a.createElement("th",null,e.label),l.a.createElement("td",null,l.a.createElement(c.a,{to:e.path},"Documentation")),l.a.createElement("td",null,l.a.createElement("a",{href:`${u}/releases/tag/v${e.name}.0`},"Release Notes"))))))))))}}}]);