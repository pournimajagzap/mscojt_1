import{k as g,r as a,d as n,h as j,j as s}from"./main-390.js";import{$ as k,i as p,h as b,e as h,D as u,E as w,s as F}from"./bi.126.82.js";import I from"./bi.843.243.js";import{W as v}from"./bi.58.725.js";import"./bi.217.726.js";function $({allIntegURL:i}){const{formID:r}=g(),[d,o]=a.useState({show:!1}),[c,m]=a.useState(!1),[e,f]=n(k),l=j(p),[t,x]=n(b);return s.jsxs("div",{style:{width:900},children:[s.jsx(h,{snack:d,setSnackbar:o}),e.triggered_entity!=="Webhook"?s.jsx(u,{setSnackbar:o}):s.jsx(w,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(I,{formID:r,formFields:l,webHooks:t,setWebHooks:x,setSnackbar:o})}),s.jsx(v,{edit:!0,saveConfig:()=>F({flow:e,setFlow:f,allIntegURL:i,conf:t,edit:1,setIsLoading:m,setSnackbar:o}),isLoading:c}),s.jsx("br",{})]})}export{$ as default};
