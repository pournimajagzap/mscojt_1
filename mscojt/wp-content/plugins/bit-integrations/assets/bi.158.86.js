import{u as h,k as v,d as r,h as b,r as c,j as e}from"./main-390.js";import{h as w,$ as I,i as _,e as C,_ as d,j as N,I as S,s as y}from"./bi.126.82.js";import{h as D}from"./bi.429.695.js";import{O as k}from"./bi.339.696.js";function L({allIntegURL:l}){const m=h(),{id:f}=v(),[s,a]=r(w),[n,x]=r(I),g=b(_),[i,o]=c.useState(!1),[p,t]=c.useState({show:!1}),j=()=>{y({flow:n,setFlow:x,allIntegURL:l,conf:s,navigate:m,edit:1,setIsLoading:o,setSnackbar:t})};return e.jsxs("div",{style:{width:900},children:[e.jsx(C,{snack:p,setSnackbar:t}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>D(u,s,a),name:"name",value:s.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(N,{entity:n.triggered_entity,setSnackbar:t}),e.jsx(k,{flowID:f,formFields:g,oneDriveConf:s,setOneDriveConf:a,isLoading:i,setIsLoading:o,setSnackbar:t}),e.jsx(S,{edit:!0,saveConfig:j,disabled:!s.actions.attachments||!s.folder,isLoading:i}),e.jsx("br",{})]})}export{L as default};
