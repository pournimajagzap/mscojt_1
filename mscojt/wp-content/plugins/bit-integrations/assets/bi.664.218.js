import{u as b,k as I,d as c,r as o,h as _,j as e}from"./main-390.js";import{$ as w,h as M,i as v,e as y,_ as r,j as F,I as S,s as N}from"./bi.126.82.js";import{h as l,c as m}from"./bi.448.905.js";import{M as R}from"./bi.317.906.js";function P({allIntegURL:f}){const g=b();I();const[n,k]=c(w),[t,a]=c(M),[x,p]=o.useState(!1),[u,h]=o.useState({}),[j,s]=o.useState({show:!1}),d=_(v),C=()=>{if(!m(t)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}N({flow:n,allIntegURL:f,conf:t,navigate:g,edit:1,setIsLoading:p,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(y,{snack:j,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>l(i,t,a),name:"name",value:t.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(F,{entity:n.triggered_entity,setSnackbar:s}),e.jsx(R,{formID:n.triggered_entity_id,formFields:d,handleInput:i=>l(i,t,a),moxiecrmConf:t,setMoxieCRMConf:a,loading:u,setLoading:h,setSnackbar:s}),e.jsx(S,{edit:!0,saveConfig:C,disabled:!m(t),isLoading:x,dataConf:t,setDataConf:a,formFields:d}),e.jsx("br",{})]})}export{P as default};
