import{u as I,k as _,d as l,r as o,h as w,j as t}from"./main-390.js";import{$ as C,h as S,i as N,e as k,_ as r,j as v,I as y,X as m,s as F}from"./bi.126.82.js";import{h as f,c as g}from"./bi.583.861.js";import{A}from"./bi.338.862.js";function M({allIntegURL:p}){const u=I();_();const[n,P]=l(C),[e,a]=l(S),[x,E]=o.useState(!1),[h,d]=o.useState({}),[j,s]=o.useState({show:!1}),c=w(N),b=()=>{if(!g(e)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="task"){if(!e.selectedProject){m.error("Please select a project");return}if(!e.selectedSections&&e.actionName==="task"){m.error("Please select a Section");return}}F({flow:n,allIntegURL:p,conf:e,navigate:u,edit:1,setLoading:d,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(k,{snack:j,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>f(i,e,a),name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(v,{entity:n.triggered_entity,setSnackbar:s}),t.jsx(A,{formID:n.triggered_entity_id,formFields:c,handleInput:i=>f(i,e,a),asanaConf:e,setAsanaConf:a,loading:h,setLoading:d,setSnackbar:s}),t.jsx(y,{edit:!0,saveConfig:b,disabled:!g(e),isLoading:x,dataConf:e,setDataConf:a,formFields:c}),t.jsx("br",{})]})}export{M as default};
