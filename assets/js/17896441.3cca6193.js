"use strict";(self.webpackChunksqb_docs=self.webpackChunksqb_docs||[]).push([[7918],{5452:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ve});var a=n(7294),r=n(9712),l=n(7806);const o=a.createContext(null);function c({children:e,content:t}){const n=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return a.createElement(o.Provider,{value:n},e)}function i(){const e=(0,a.useContext)(o);if(null===e)throw new l.i6("DocProvider");return e}function s(){const{metadata:e,frontMatter:t,assets:n}=i();var l;return a.createElement(r.d,{title:e.title,description:e.description,keywords:t.keywords,image:null!==(l=n.image)&&void 0!==l?l:t.image})}var d=n(6010),u=n(4683),m=n(2210),b=n(2574);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){p(e,t,n[t])}))}return e}function g(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function v(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(b.Z,g(f({},t),{subLabel:a.createElement(m.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(b.Z,g(f({},n),{subLabel:a.createElement(m.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function h(){const{metadata:e}=i();return a.createElement(v,{previous:e.previous,next:e.next})}var E=n(8241),y=n(1984),O=n(5995),w=n(5319),j=n(9085),P=n(7391);const k={unreleased:function({siteTitle:e,versionMetadata:t}){return a.createElement(m.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:a.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return a.createElement(m.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:a.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function _(e){const t=k[e.versionMetadata.banner];return a.createElement(t,e)}function N({versionLabel:e,to:t,onClick:n}){return a.createElement(m.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:a.createElement("b",null,a.createElement(y.Z,{to:t,onClick:n},a.createElement(m.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function Z({className:e,versionMetadata:t}){const{siteConfig:{title:n}}=(0,E.Z)(),{pluginId:r}=(0,O.gA)({failfast:!0}),{savePreferredVersionName:l}=(0,j.J)(r),{latestDocSuggestion:o,latestVersionSuggestion:c}=(0,O.Jo)(r),i=null!=o?o:(s=c).docs.find((e=>e.id===s.mainDocId));var s;return a.createElement("div",{className:(0,d.Z)(e,w.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(_,{siteTitle:n,versionMetadata:t})),a.createElement("div",{className:"margin-top--md"},a.createElement(N,{versionLabel:c.label,to:i.path,onClick:()=>l(c.name)})))}function C({className:e}){const t=(0,P.E)();return t.banner?a.createElement(Z,{className:e,versionMetadata:t}):null}function L({className:e}){const t=(0,P.E)();return t.badge?a.createElement("span",{className:(0,d.Z)(e,w.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(m.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label}},"Version: {versionLabel}")):null}function T({lastUpdatedAt:e,formattedLastUpdatedAt:t}){return a.createElement(m.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*e).toISOString()},t))}}," on {date}")}function U({lastUpdatedBy:e}){return a.createElement(m.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,e)}}," by {user}")}function x({lastUpdatedAt:e,formattedLastUpdatedAt:t,lastUpdatedBy:n}){return a.createElement("span",{className:w.k.common.lastUpdated},a.createElement(m.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:e&&t?a.createElement(T,{lastUpdatedAt:e,formattedLastUpdatedAt:t}):"",byUser:n?a.createElement(U,{lastUpdatedBy:n}):""}},"Last updated{atDate}{byUser}"),!1)}var S=n(5401),D=n(5845);const A={lastUpdated:"lastUpdated_vwxv"};function M(e){return a.createElement("div",{className:(0,d.Z)(w.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(D.Z,e)))}function B({editUrl:e,lastUpdatedAt:t,lastUpdatedBy:n,formattedLastUpdatedAt:r}){return a.createElement("div",{className:(0,d.Z)(w.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},e&&a.createElement(S.Z,{editUrl:e})),a.createElement("div",{className:(0,d.Z)("col",A.lastUpdated)},(t||n)&&a.createElement(x,{lastUpdatedAt:t,formattedLastUpdatedAt:r,lastUpdatedBy:n})))}function I(){const{metadata:e}=i(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l,tags:o}=e,c=o.length>0,s=!!(t||n||l);return c||s?a.createElement("footer",{className:(0,d.Z)(w.k.docs.docFooter,"docusaurus-mt-lg")},c&&a.createElement(M,{tags:o}),s&&a.createElement(B,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r})):null}var V=n(2647),H=n(5574);const F={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function q(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function G(e){var{collapsed:t}=e,n=q(e,["collapsed"]);return a.createElement("button",z(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){R(e,t,n[t])}))}return e}({type:"button"},n),{className:(0,d.Z)("clean-btn",F.tocCollapsibleButton,!t&&F.tocCollapsibleButtonExpanded,n.className)}),a.createElement(m.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const W={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function J({toc:e,className:t,minHeadingLevel:n,maxHeadingLevel:r}){const{collapsed:l,toggleCollapsed:o}=(0,V.u)({initialState:!0});return a.createElement("div",{className:(0,d.Z)(W.tocCollapsible,!l&&W.tocCollapsibleExpanded,t)},a.createElement(G,{collapsed:l,onClick:o}),a.createElement(V.z,{lazy:!0,className:W.tocCollapsibleContent,collapsed:l},a.createElement(H.Z,{toc:e,minHeadingLevel:n,maxHeadingLevel:r})))}const Q={tocMobile:"tocMobile_ITEo"};function X(){const{toc:e,frontMatter:t}=i();return a.createElement(J,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(w.k.docs.docTocMobile,Q.tocMobile)})}var Y=n(8704);function $(){const{toc:e,frontMatter:t}=i();return a.createElement(Y.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:w.k.docs.docTocDesktop})}var K=n(4999),ee=n(1346);function te({children:e}){const t=function(){const{metadata:e,frontMatter:t,contentTitle:n}=i();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.Z)(w.k.docs.docMarkdown,"markdown")},t&&a.createElement("header",null,a.createElement(K.Z,{as:"h1"},t)),a.createElement(ee.Z,null,e))}var ne=n(3964),ae=n(7275),re=n(676);function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oe(e){return a.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){le(e,t,n[t])}))}return e}({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const ce={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function ie(){const e=(0,re.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(y.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},a.createElement(oe,{className:ce.breadcrumbHomeIcon})))}const se={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ue(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function me({children:e,href:t,isLast:n}){const r="breadcrumbs__link";return n?a.createElement("span",{className:r,itemProp:"name"},e):t?a.createElement(y.Z,{className:r,href:t,itemProp:"item"},a.createElement("span",{itemProp:"name"},e)):a.createElement("span",{className:r},e)}function be({children:e,active:t,index:n,addMicrodata:r}){return a.createElement("li",ue(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){de(e,t,n[t])}))}return e}({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"}),{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":t})}),e,a.createElement("meta",{itemProp:"position",content:String(n+1)}))}function pe(){const e=(0,ne.s1)(),t=(0,ae.Ns)();return e?a.createElement("nav",{className:(0,d.Z)(w.k.docs.docBreadcrumbs,se.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(ie,null),e.map(((t,n)=>{const r=n===e.length-1;return a.createElement(be,{key:n,active:r,index:n,addMicrodata:!!t.href},a.createElement(me,{href:t.href,isLast:r},t.label))})))):null}const fe={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function ge({children:e}){const t=function(){const{frontMatter:e,toc:t}=i(),n=(0,u.i)(),r=e.hide_table_of_contents,l=!r&&t.length>0;return{hidden:r,mobile:l?a.createElement(X,null):void 0,desktop:!l||"desktop"!==n&&"ssr"!==n?void 0:a.createElement($,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!t.hidden&&fe.docItemCol)},a.createElement(C,null),a.createElement("div",{className:fe.docItemContainer},a.createElement("article",null,a.createElement(pe,null),a.createElement(L,null),t.mobile,a.createElement(te,null,e),a.createElement(I,null)),a.createElement(h,null))),t.desktop&&a.createElement("div",{className:"col col--3"},t.desktop))}function ve(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(c,{content:e.content},a.createElement(r.FG,{className:t},a.createElement(s,null),a.createElement(ge,null,a.createElement(n,null))))}},5401:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7294),r=n(2210),l=n(5319),o=n(6010);const c={iconEdit:"iconEdit_Z9Sw"};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function d(e){var{className:t}=e,n=s(e,["className"]);return a.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(c.iconEdit,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function u({editUrl:e}){return a.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener",className:l.k.common.editThisPage},a.createElement(d,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2574:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010),l=n(1984);function o(e){const{permalink:t,title:n,subLabel:o,isNext:c}=e;return a.createElement(l.Z,{className:(0,r.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&a.createElement("div",{className:"pagination-nav__sublabel"},o),a.createElement("div",{className:"pagination-nav__label"},n))}},4955:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),r=n(6010),l=n(1984);const o={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function c({permalink:e,label:t,count:n}){return a.createElement(l.Z,{href:e,className:(0,r.Z)(o.tag,n?o.tagWithCount:o.tagRegular)},t,n&&a.createElement("span",null,n))}},5845:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010),l=n(2210),o=n(4955);const c={tags:"tags_jXut",tag:"tag_QGVx"};function i({tags:e}){return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(c.tags,"padding--none","margin-left--sm")},e.map((({label:e,permalink:t})=>a.createElement("li",{key:t,className:c.tag},a.createElement(o.Z,{label:e,permalink:t}))))))}},7391:(e,t,n)=>{n.d(t,{E:()=>c,q:()=>o});var a=n(7294),r=n(7806);const l=a.createContext(null);function o({children:e,version:t}){return a.createElement(l.Provider,{value:t},e)}function c(){const e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);