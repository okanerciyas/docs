"use strict";(self.webpackChunksqb_docs=self.webpackChunksqb_docs||[]).push([[9514,889],{1272:(e,t,n)=>{n.r(t),n.d(t,{default:()=>we});var r=n(7294),a=n(6010),o=n(9712),l=n(5319),c=n(6391),i=n(3964),s=n(7391),u=n(5682),d=n(3737),m=n(2210),b=n(6379),p=n(8010);const f={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function h(){const{shown:e,scrollToTop:t}=function({threshold:e}){const[t,n]=(0,r.useState)(!1),a=(0,r.useRef)(!1),{startScroll:o,cancelScroll:l}=(0,b.Ct)();return(0,b.RF)((({scrollY:t},r)=>{const o=null==r?void 0:r.scrollY;o&&(a.current?a.current=!1:t>=o?(l(),n(!1)):t<e?n(!1):t+window.innerHeight<document.documentElement.scrollHeight&&n(!0))})),(0,p.S)((e=>{e.location.hash&&(a.current=!0,n(!1))})),{shown:t,scrollToTop:()=>o(0)}}({threshold:300});return r.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,a.Z)("clean-btn",l.k.common.backToTopButton,f.backToTopButton,e&&f.backToTopButtonShow),type:"button",onClick:t})}var g=n(6550),v=n(4683),E=n(6016),y=n(9572);function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){return r.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){k(e,t,n[t])}))}return e}({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const S={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function _({onClick:e}){return r.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,a.Z)("button button--secondary button--outline",S.collapseSidebarButton),onClick:e},r.createElement(O,{className:S.collapseSidebarButtonIcon}))}var C=n(4738),w=n(7806);const I=Symbol("EmptyContext"),P=r.createContext(I);function x({children:e}){const[t,n]=(0,r.useState)(null),a=(0,r.useMemo)((()=>({expandedItem:t,setExpandedItem:n})),[t]);return r.createElement(P.Provider,{value:a},e)}var j=n(2647),N=n(7275),T=n(1984),B=n(358);function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function A({categoryLabel:e,onClick:t}){return r.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:e}),type:"button",className:"clean-btn menu__caret",onClick:t})}function M(e){var{item:t,onItemClick:n,activePath:o,level:c,index:s}=e,u=L(e,["item","onItemClick","activePath","level","index"]);const{items:d,label:m,collapsible:b,className:p,href:f}=t,{docs:{sidebar:{autoCollapseCategories:h}}}=(0,E.L)(),g=function(e){const t=(0,B.Z)();return(0,r.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),v=(0,i._F)(t,o),y=(0,N.Mg)(f,o),{collapsed:k,setCollapsed:O}=(0,j.u)({initialState:()=>!!b&&(!v&&t.collapsed)}),{expandedItem:S,setExpandedItem:_}=function(){const e=(0,r.useContext)(P);if(e===I)throw new w.i6("DocSidebarItemsExpandedStateProvider");return e}(),C=(e=!k)=>{_(e?null:s),O(e)};return function({isActive:e,collapsed:t,updateCollapsed:n}){const a=(0,w.D9)(e);(0,r.useEffect)((()=>{e&&!a&&t&&n(!1)}),[e,a,t,n])}({isActive:v,collapsed:k,updateCollapsed:C}),(0,r.useEffect)((()=>{b&&null!=S&&S!==s&&h&&O(!0)}),[b,S,s,O,h]),r.createElement("li",{className:(0,a.Z)(l.k.docs.docSidebarItemCategory,l.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":k},p)},r.createElement("div",{className:(0,a.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":y})},r.createElement(T.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Z(e,t,n[t])}))}return e}({className:(0,a.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!f&&b,"menu__link--active":v}),onClick:b?e=>{null==n||n(t),f?C(!1):(e.preventDefault(),C())}:()=>{null==n||n(t)},"aria-current":y?"page":void 0,"aria-expanded":b?!k:void 0,href:b?null!=g?g:"#":g},u),m),f&&b&&r.createElement(A,{categoryLabel:m,onClick:e=>{e.preventDefault(),C()}})),r.createElement(j.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},r.createElement($,{items:d,tabIndex:k?-1:0,onItemClick:n,activePath:o,level:c+1})))}var F=n(7785),H=n(379);const D={menuExternalLink:"menuExternalLink_NmtK"};function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function V(e){var{item:t,onItemClick:n,activePath:o,level:c,index:s}=e,u=R(e,["item","onItemClick","activePath","level","index"]);const{href:d,label:m,className:b,autoAddBaseUrl:p}=t,f=(0,i._F)(t,o),h=(0,F.Z)(d);return r.createElement("li",{className:(0,a.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:m},r.createElement(T.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){W(e,t,n[t])}))}return e}({className:(0,a.Z)("menu__link",!h&&D.menuExternalLink,{"menu__link--active":f}),autoAddBaseUrl:p,"aria-current":f?"page":void 0,to:d},h&&{onClick:n?()=>n(t):void 0},u),m,!h&&r.createElement(H.Z,null)))}const z={menuHtmlItem:"menuHtmlItem_M9Kj"};function U({item:e,level:t,index:n}){const{value:o,defaultStyle:c,className:i}=e;return r.createElement("li",{className:(0,a.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(t),c&&[z.menuHtmlItem,"menu__list-item"],i),key:n,dangerouslySetInnerHTML:{__html:o}})}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){q(e,t,n[t])}))}return e}function G(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Y(e){var{item:t}=e,n=G(e,["item"]);switch(t.type){case"category":return r.createElement(M,K({item:t},n));case"html":return r.createElement(U,K({item:t},n));default:return r.createElement(V,K({item:t},n))}}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Q(e){var{items:t}=e,n=J(e,["items"]);return r.createElement(x,null,t.map(((e,t)=>r.createElement(Y,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){X(e,t,n[t])}))}return e}({key:t,item:e,index:t},n)))))}const $=(0,r.memo)(Q),ee={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function te({path:e,sidebar:t,className:n}){const o=function(){const{isActive:e}=(0,C.nT)(),[t,n]=(0,r.useState)(e);return(0,b.RF)((({scrollY:t})=>{e&&n(0===t)}),[e]),e&&t}();return r.createElement("nav",{"aria-label":(0,m.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,a.Z)("menu thin-scrollbar",ee.menu,o&&ee.menuWithAnnouncementBar,n)},r.createElement("ul",{className:(0,a.Z)(l.k.docs.docSidebarMenu,"menu__list")},r.createElement($,{items:t,activePath:e,level:1})))}const ne="sidebar_njMd",re="sidebarWithHideableNavbar_wUlq",ae="sidebarHidden_VK0M",oe="sidebarLogo_isFc";function le({path:e,sidebar:t,onCollapse:n,isHidden:o}){const{navbar:{hideOnScroll:l},docs:{sidebar:{hideable:c}}}=(0,E.L)();return r.createElement("div",{className:(0,a.Z)(ne,l&&re,o&&ae)},l&&r.createElement(y.Z,{tabIndex:-1,className:oe}),r.createElement(te,{path:e,sidebar:t}),c&&r.createElement(_,{onClick:n}))}const ce=r.memo(le);var ie=n(6847),se=n(7796);const ue=({sidebar:e,path:t})=>{const n=(0,se.e)();return r.createElement("ul",{className:(0,a.Z)(l.k.docs.docSidebarMenu,"menu__list")},r.createElement($,{items:e,activePath:t,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1}))};function de(e){return r.createElement(ie.Zo,{component:ue,props:e})}const me=r.memo(de);function be(e){const t=(0,v.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(ce,e),a&&r.createElement(me,e))}const pe={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function fe({toggleSidebar:e}){return r.createElement("div",{className:pe.expandButton,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:e,onClick:e},r.createElement(O,{className:pe.expandButtonIcon}))}const he={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function ge({children:e}){const t=(0,u.V)();var n;return r.createElement(r.Fragment,{key:null!==(n=null==t?void 0:t.name)&&void 0!==n?n:"noSidebar"},e)}function ve({sidebar:e,hiddenSidebarContainer:t,setHiddenSidebarContainer:n}){const{pathname:o}=(0,g.TH)(),[c,i]=(0,r.useState)(!1),s=(0,r.useCallback)((()=>{c&&i(!1),n((e=>!e))}),[n,c]);return r.createElement("aside",{className:(0,a.Z)(l.k.docs.docSidebarContainer,he.docSidebarContainer,t&&he.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(he.docSidebarContainer)&&t&&i(!0)}},r.createElement(ge,null,r.createElement("div",{className:(0,a.Z)(he.sidebarViewport,c&&he.sidebarViewportHidden)},r.createElement(be,{sidebar:e,path:o,onCollapse:s,isHidden:c}),c&&r.createElement(fe,{toggleSidebar:s}))))}const Ee={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function ye({hiddenSidebarContainer:e,children:t}){const n=(0,u.V)();return r.createElement("main",{className:(0,a.Z)(Ee.docMainContainer,(e||!n)&&Ee.docMainContainerEnhanced)},r.createElement("div",{className:(0,a.Z)("container padding-top--md padding-bottom--lg",Ee.docItemWrapper,e&&Ee.docItemWrapperEnhanced)},t))}const ke={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX"};function Oe({children:e}){const t=(0,u.V)(),[n,a]=(0,r.useState)(!1);return r.createElement(d.Z,{wrapperClassName:ke.docsWrapper},r.createElement(h,null),r.createElement("div",{className:ke.docPage},t&&r.createElement(ve,{sidebar:t.items,hiddenSidebarContainer:n,setHiddenSidebarContainer:a}),r.createElement(ye,{hiddenSidebarContainer:n},e)))}var Se=n(889),_e=n(6894);function Ce(e){const{versionMetadata:t}=e;return r.createElement(r.Fragment,null,r.createElement(_e.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),r.createElement(o.d,null,t.noIndex&&r.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function we(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return r.createElement(Se.default,null);const{docElement:c,sidebarName:d,sidebarItems:m}=n;return r.createElement(r.Fragment,null,r.createElement(Ce,e),r.createElement(o.FG,{className:(0,a.Z)(l.k.wrapper.docsPages,l.k.page.docsDocPage,e.versionMetadata.className)},r.createElement(s.q,{version:t},r.createElement(u.b,{name:d,items:m},r.createElement(Oe,null,c)))))}},889:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(7294),a=n(2210),o=n(9712),l=n(3737);function c(){return r.createElement(r.Fragment,null,r.createElement(o.d,{title:(0,a.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),r.createElement(l.Z,null,r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(a.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(a.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(a.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},7391:(e,t,n)=>{n.d(t,{E:()=>c,q:()=>l});var r=n(7294),a=n(7806);const o=r.createContext(null);function l({children:e,version:t}){return r.createElement(o.Provider,{value:t},e)}function c(){const e=(0,r.useContext)(o);if(null===e)throw new a.i6("DocsVersionProvider");return e}}}]);