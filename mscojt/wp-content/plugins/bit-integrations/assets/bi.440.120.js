import{k as x,r as a,d as n,h as j,j as s}from"./main-390.js";import{$ as k,i as g,h as b,e as h,D as u,E as w,s as E}from"./bi.126.82.js";import W from"./bi.843.243.js";import{W as F}from"./bi.58.725.js";import"./bi.217.726.js";function H({allIntegURL:i}){const{formID:r}=x(),[c,o]=a.useState({show:!1}),[d,m]=a.useState(!1),[t,f]=n(k),p=j(g),[e,l]=n(b);return s.jsxs("div",{style:{width:900},children:[s.jsx(h,{snack:c,setSnackbar:o}),t.triggered_entity!=="Webhook"?s.jsx(u,{setSnackbar:o}):s.jsx(w,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(W,{formID:r,formFields:p,webHooks:e,setWebHooks:l,setSnackbar:o})}),s.jsx(F,{edit:!0,saveConfig:()=>E({flow:t,setFlow:f,allIntegURL:i,conf:e,edit:1,setIsLoading:m,setSnackbar:o}),isLoading:d}),s.jsx("br",{})]})}export{H as default};
