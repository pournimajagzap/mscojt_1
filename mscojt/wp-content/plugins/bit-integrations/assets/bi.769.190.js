import{u as j,k as b,d as c,r as o,h as I,j as t}from"./main-390.js";import{$ as _,h as w,i as P,e as v,_ as r,j as y,I as F,X as N,s as S}from"./bi.126.82.js";import{h as m,c as f}from"./bi.453.868.js";import{C as k}from"./bi.997.869.js";function A({allIntegURL:p}){const g=j();b();const[n,E]=c(_),[e,a]=c(w),[h,L]=o.useState(!1),[u,d]=o.useState({}),[x,s]=o.useState({show:!1}),l=I(P),C=()=>{if(!f(e)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="lead"&&!e.selectedCRMPipeline){N.error("Please select a pipeline");return}S({flow:n,allIntegURL:p,conf:e,navigate:g,edit:1,setLoading:d,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(v,{snack:x,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>m(i,e,a),name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(y,{entity:n.triggered_entity,setSnackbar:s}),t.jsx(k,{formID:n.triggered_entity_id,formFields:l,handleInput:i=>m(i,e,a),clinchPadConf:e,setClinchPadConf:a,loading:u,setLoading:d,setSnackbar:s}),t.jsx(F,{edit:!0,saveConfig:C,disabled:!f(e),isLoading:h,dataConf:e,setDataConf:a,formFields:l}),t.jsx("br",{})]})}export{A as default};