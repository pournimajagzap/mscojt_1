import{u as j,k as S,r as o,j as e}from"./main-390.js";import{e as v,G as b}from"./bi.126.82.js";import{S as T}from"./bi.348.918.js";import k from"./bi.843.243.js";import{W as y}from"./bi.58.725.js";import{T as r,t as w}from"./bi.243.742.js";import"./bi.217.726.js";function P({formFields:c,setFlow:n,flow:p,allIntegURL:u}){const m=j(),{formID:d}=S(),[s,l]=o.useState(1),[x,a]=o.useState({show:!1}),[f,g]=o.useState(!1),{albato:t}=w,[i,h]=o.useState({name:"Albato Web Hooks",type:"Albato",method:"POST",url:"",apiConsole:"https://albato.com/app/bundle"});return e.jsxs("div",{children:[e.jsx(v,{snack:x,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(T,{step:2,active:s})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&1100,height:s===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(r,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(r,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),e.jsx(k,{formID:d,formFields:c,webHooks:i,setWebHooks:h,step:s,setStep:l,setSnackbar:a,create:!0})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:s===2&&"100%",height:s===2&&"auto"},children:e.jsx(y,{step:s,saveConfig:()=>b(p,n,u,i,m,"","",g),isLoading:f})})]})}export{P as default};