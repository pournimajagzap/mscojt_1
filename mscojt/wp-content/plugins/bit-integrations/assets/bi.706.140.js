var C=Object.defineProperty;var x=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var f=(a,t,e)=>t in a?C(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,g=(a,t)=>{for(var e in t||(t={}))I.call(t,e)&&f(a,e,t[e]);if(x)for(var e of x(t))S.call(t,e)&&f(a,e,t[e]);return a};import{u as w,k as v,d as p,h as F,r as u,j as s}from"./main-390.js";import{h as _,$ as N,i as y,e as k,_ as j,j as E,I as $,s as L}from"./bi.126.82.js";import{h as R,i as D}from"./bi.955.778.js";import{S as A}from"./bi.992.779.js";import"./bi.286.689.js";import"./bi.414.690.js";function J({allIntegURL:a}){const t=w();v();const[e,n]=p(_),[d,M]=p(N),c=F(y),[l,r]=u.useState(!1),[h,o]=u.useState({show:!1}),b=i=>{const m=g({},e);m[i.target.name]=i.target.value,n(m)};return s.jsxs("div",{style:{width:900},children:[s.jsx(k,{snack:h,setSnackbar:o}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:j("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",onChange:b,name:"name",value:e.name,type:"text",placeholder:j("Integration Name...","bit-integrations")})]}),s.jsx("br",{}),s.jsx("br",{}),s.jsx(E,{entity:d.triggered_entity,setSnackbar:o}),s.jsx(A,{formFields:c,handleInput:i=>R(i,e,n,r),sendFoxConf:e,setSendFoxConf:n,isLoading:l,setIsLoading:r,setSnackbar:o}),s.jsx($,{edit:!0,saveConfig:()=>L({flow:d,allIntegURL:a,conf:e,navigate:t,edit:1,setIsLoading:r,setSnackbar:o}),disabled:D(e),isLoading:l,dataConf:e,setDataConf:n,formFields:c}),s.jsx("br",{})]})}export{J as default};
