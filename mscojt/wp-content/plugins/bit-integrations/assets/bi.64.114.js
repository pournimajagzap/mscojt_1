import{u as g,k as j,r as a,d as i,h as u,j as s}from"./main-390.js";import{$ as k,i as w,h as b,e as h,j as v,s as S}from"./bi.126.82.js";import _ from"./bi.843.243.js";import{W as C}from"./bi.58.725.js";import"./bi.217.726.js";function y({allIntegURL:n}){const r=g(),{id:E,formID:c}=j(),[d,m]=a.useState(!1),[t,f]=i(k),l=u(w),[o,p]=i(b),[x,e]=a.useState({show:!1});return s.jsxs("div",{style:{width:900},children:[s.jsx(h,{snack:x,setSnackbar:e}),s.jsx(v,{entity:t.triggered_entity,setSnackbar:e}),s.jsx("div",{className:"mt-3",children:s.jsx(_,{formID:c,formFields:l,webHooks:o,setWebHooks:p,setSnackbar:e})}),s.jsx(C,{edit:!0,saveConfig:()=>S({flow:t,setFlow:f,allIntegURL:n,conf:o,navigate:r,edit:1,setIsLoading:m,setSnackbar:e}),isLoading:d}),s.jsx("br",{})]})}export{y as default};