import{u as j,k as p,r as a,d as i,h as u,j as s}from"./main-390.js";import{$ as k,i as w,h as b,e as h,j as v,s as I}from"./bi.126.82.js";import S from"./bi.843.243.js";import{W as F}from"./bi.58.725.js";import"./bi.217.726.js";function $({allIntegURL:n}){const r=j(),{id:_,formID:c}=p(),[d,f]=a.useState(!1),[e,m]=i(k),l=u(w),[o,x]=i(b),[g,t]=a.useState({show:!1});return s.jsxs("div",{style:{width:900},children:[s.jsx(h,{snack:g,setSnackbar:t}),s.jsx(v,{entity:e.triggered_entity,setSnackbar:t}),s.jsx("div",{className:"mt-3",children:s.jsx(S,{formID:c,formFields:l,webHooks:o,setWebHooks:x,setSnackbar:t})}),s.jsx(F,{edit:!0,saveConfig:()=>I({flow:e,setFlow:m,allIntegURL:n,conf:o,navigate:r,edit:1,setIsLoading:f,setSnackbar:t}),isLoading:d}),s.jsx("br",{})]})}export{$ as default};