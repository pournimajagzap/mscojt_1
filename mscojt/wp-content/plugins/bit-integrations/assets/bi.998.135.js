import{u as h,k as b,d as c,h as j,r as l,j as e}from"./main-390.js";import{h as I,$ as C,i as _,e as w,_ as m,j as v,I as N,s as S}from"./bi.126.82.js";import{Z as k}from"./bi.117.768.js";import{h as f,c as y}from"./bi.490.769.js";import"./bi.286.689.js";import"./bi.414.690.js";function A({allIntegURL:p}){const x=h(),{formID:g}=b(),[t,s]=c(I),[i,F]=c(C),r=j(_),[n,d]=l.useState(!1),[u,a]=l.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(w,{snack:u,setSnackbar:a}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:m("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>f(o,t,s),name:"name",value:t.name,type:"text",placeholder:m("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(v,{entity:i.triggered_entity,setSnackbar:a}),e.jsx(k,{formID:g,formFields:r,handleInput:o=>f(o,t,s),zoomWebinarConf:t,setZoomWebinarConf:s,isLoading:n,setIsLoading:d,setSnackbar:a}),e.jsx(N,{edit:!0,saveConfig:()=>S({flow:i,allIntegURL:p,conf:t,navigate:x,edit:1,setIsLoading:d,setSnackbar:a}),disabled:t.field_map.length<2||n||!t.id||!y(t)||t.selectedActions==null,isLoading:n,dataConf:t,setDataConf:s,formFields:r}),e.jsx("br",{})]})}export{A as default};
