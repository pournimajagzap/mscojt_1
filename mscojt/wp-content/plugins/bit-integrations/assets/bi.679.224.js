import{u as h,k as j,d,h as b,r as l,j as a}from"./main-390.js";import{h as C,$ as I,i as w,e as _,k as c,j as v,I as N,s as S}from"./bi.126.82.js";import{h as k}from"./bi.4.915.js";import{Z as y}from"./bi.438.916.js";function L({allIntegURL:m}){const f=h(),{id:M,formID:g}=j(),[t,s]=d(C),[n,x]=d(I),o=b(w),[i,r]=l.useState(!1),[p,e]=l.useState({show:!1});return a.jsxs("div",{style:{width:900},children:[a.jsx(_,{snack:p,setSnackbar:e}),a.jsxs("div",{className:"flx mt-3",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),a.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>k(u,t,s),name:"name",value:t.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),a.jsx("br",{}),a.jsx(v,{entity:n.triggered_entity,setSnackbar:e}),a.jsx(y,{formID:g,formFields:o,zagoMailConf:t,setZagoMailConf:s,isLoading:i,setIsLoading:r,setSnackbar:e}),a.jsx(N,{edit:!0,saveConfig:()=>S({flow:n,setFlow:x,allIntegURL:m,navigate:f,conf:t,edit:1,setIsLoading:r,setSnackbar:e}),disabled:t.field_map.length<1,isLoading:i,dataConf:t,setDataConf:s,formFields:o}),a.jsx("br",{})]})}export{L as default};