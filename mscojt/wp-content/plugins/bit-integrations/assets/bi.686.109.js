import{u as h,k as v,d as o,h as b,r as i,j as e}from"./main-390.js";import{h as w,$ as I,i as _,e as C,_ as r,j as N,I as S,s as y}from"./bi.126.82.js";import{h as D}from"./bi.375.738.js";import{G as k}from"./bi.499.739.js";function L({allIntegURL:l}){const d=h(),{id:c}=v(),[s,a]=o(w),[n,m]=o(I),g=b(_),[f,x]=i.useState(!1),[p,t]=i.useState({show:!1}),j=()=>{y({flow:n,setFlow:m,allIntegURL:l,conf:s,navigate:d,edit:1,setIsLoading:x,setSnackbar:t})};return e.jsxs("div",{style:{width:900},children:[e.jsx(C,{snack:p,setSnackbar:t}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>D(u,s,a),name:"name",value:s.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(N,{entity:n.triggered_entity,setSnackbar:t}),e.jsx(k,{flowID:c,formFields:g,googleDriveConf:s,setGoogleDriveConf:a}),e.jsx(S,{edit:!0,saveConfig:j,disabled:s.field_map.length<1,isLoading:f}),e.jsx("br",{})]})}export{L as default};
