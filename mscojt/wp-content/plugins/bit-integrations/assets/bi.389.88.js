import{u as _,k as I,d as p,r as d,h as w,j as e}from"./main-390.js";import{h as y,$ as v,i as S,e as N,_ as m,j as k,I as F,s as R}from"./bi.126.82.js";import{h as f,c as E}from"./bi.187.699.js";import{Z as M}from"./bi.819.700.js";import"./bi.935.701.js";import"./bi.85.702.js";import"./bi.863.686.js";import"./bi.286.689.js";import"./bi.414.690.js";function B({allIntegURL:g}){const u=_(),{id:h}=I(),[t,a]=p(y),[n,x]=p(v),[c,o]=d.useState(!1),[j,s]=d.useState({show:!1}),[i,C]=d.useState(0),l=w(S),b=()=>{if(!E(t)){s({show:!0,msg:m("Please map mandatory fields","bit-integrations")});return}R({flow:n,setFlow:x,allIntegURL:g,conf:t,navigate:u,id:h,edit:1,setIsLoading:o,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(N,{snack:j,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 ",children:m("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:r=>f(r,i,t,a),name:"name",value:t.name,type:"text",placeholder:m("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(k,{entity:n.triggered_entity,setSnackbar:s}),e.jsx(M,{tab:i,settab:C,formID:n.triggered_entity_id,formFields:l,handleInput:r=>f(r,i,t,a,o,s),crmConf:t,setCrmConf:a,isLoading:c,setIsLoading:o,setSnackbar:s}),e.jsx(F,{edit:!0,saveConfig:b,disabled:t.module===""||t.layout===""||t.field_map.length<1,isLoading:c,dataConf:t,setDataConf:a,formFields:l}),e.jsx("br",{})]})}export{B as default};
