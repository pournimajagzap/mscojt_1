import{u as g,k as S,r as o,j as e}from"./main-390.js";import{e as b,s as L}from"./bi.126.82.js";import{S as d}from"./bi.348.918.js";import v from"./bi.843.243.js";import{W as y}from"./bi.58.725.js";import{T as r,t as T}from"./bi.243.742.js";import"./bi.217.726.js";function P({formFields:c,setFlow:m,flow:n,allIntegURL:u}){const l=g(),{formID:k}=S(),[s,x]=o.useState(1),[f,a]=o.useState({show:!1}),[h,j]=o.useState(!1),{antsAndApps:t}=T,[i,p]=o.useState({name:"Ants & Apps",type:"Ant Apps",method:"POST",url:"",apiConsole:"https://my.antsandapps.com/"});return e.jsxs("div",{children:[e.jsx(b,{snack:f,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(d,{step:2,active:s})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&1100,height:s===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(r,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(r,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),e.jsx(v,{formID:k,formFields:c,webHooks:i,setWebHooks:p,step:s,setStep:x,setSnackbar:a,create:!0})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:e.jsx(y,{step:s,saveConfig:()=>L({flow:n,setFlow:m,allIntegURL:u,conf:i,navigate:l,setIsLoading:j,setSnackbar:a}),isLoading:h})})]})}export{P as default};
