import{k as u,r as a,d as i,h as j,j as s}from"./main-390.js";import{$ as k,i as g,h as p,e as W,D as b,E as h,s as w}from"./bi.126.82.js";import E from"./bi.843.243.js";import{W as F}from"./bi.58.725.js";import"./bi.217.726.js";function P({allIntegURL:r}){const{formID:n}=u(),[m,o]=a.useState({show:!1}),[c,d]=a.useState(!1),[t,f]=i(k),l=j(g),[e,x]=i(p);return s.jsxs("div",{style:{width:900},children:[s.jsx(W,{snack:m,setSnackbar:o}),t.triggered_entity!=="Webhook"?s.jsx(b,{setSnackbar:o}):s.jsx(h,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(E,{formID:n,formFields:l,webHooks:e,setWebHooks:x,setSnackbar:o})}),s.jsx(F,{edit:!0,saveConfig:()=>w({flow:t,setFlow:f,allIntegURL:r,conf:e,edit:1,setIsLoading:d,setSnackbar:o}),isLoading:c}),s.jsx("br",{})]})}export{P as default};