import{r as R,a as b}from"./index.5vR-3Izp.js";var c={exports:{}},t={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p;function j(){if(p)return t;p=1;var s=R(),i=Symbol.for("react.element"),u=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,h=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function m(a,e,f){var n,o={},l=null,d=null;f!==void 0&&(l=""+f),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(d=e.ref);for(n in e)_.call(e,n)&&!v.hasOwnProperty(n)&&(o[n]=e[n]);if(a&&a.defaultProps)for(n in e=a.defaultProps,e)o[n]===void 0&&(o[n]=e[n]);return{$$typeof:i,type:a,key:l,ref:d,props:o,_owner:h.current}}return t.Fragment=u,t.jsx=m,t.jsxs=m,t}var x;function N(){return x||(x=1,c.exports=j()),c.exports}var r=N();const g=()=>{const[s,i]=b.useState(!1),u=()=>{i(!s)};return r.jsxs("nav",{className:"navbar",children:[r.jsxs("div",{className:"navbar-brand",children:[r.jsx("a",{href:"/",className:"logo",children:"AstroSite"}),r.jsx("button",{className:"hamburger",onClick:u,"aria-label":"Toggle menu",children:r.jsx("span",{className:`hamburger-line ${s?"open":""}`})})]}),r.jsxs("div",{className:`navbar-menu ${s?"open":""}`,children:[r.jsx("a",{href:"/",className:"nav-link",children:"Home"}),r.jsx("a",{href:"/about",className:"nav-link",children:"About"}),r.jsx("a",{href:"/blog",className:"nav-link",children:"Blog"}),r.jsx("a",{href:"/contact",className:"nav-link",children:"Contact"})]})]})};export{g as default};
