import{u as j,d,h,r as c,j as e}from"./main-390.js";import{h as w,$ as C,i as b,e as _,_ as l,j as I,I as v,s as y}from"./bi.126.82.js";import{h as N,W as S}from"./bi.294.749.js";function $({allIntegURL:f}){const m=j(),[t,a]=d(w),[n,g]=d(C),o=h(b),[i,r]=c.useState(!1),[x,s]=c.useState({show:!1}),u=()=>{y({flow:n,setFlow:g,allIntegURL:f,conf:t,navigate:m,edit:1,setIsLoading:r,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(_,{snack:x,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:p=>N(p,t,a),name:"name",value:t.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(I,{entity:n.triggered_entity,setSnackbar:s}),e.jsx(S,{formID:n.triggered_entity_id,formFields:o,wpCoursewareConf:t,setWPCoursewareConf:a,isLoading:i,step:2,setIsLoading:r,setSnackbar:s}),e.jsx(v,{edit:!0,saveConfig:u,disabled:t.action===""||t.course.length===0,isLoading:i,dataConf:t,setDataConf:a,formFields:o}),e.jsx("br",{})]})}export{$ as default};