var I=Object.defineProperty;var u=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var f=(a,e,t)=>e in a?I(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,b=(a,e)=>{for(var t in e||(e={}))S.call(e,t)&&f(a,t,e[t]);if(u)for(var t of u(e))E.call(e,t)&&f(a,t,e[t]);return a};import{u as N,k as A,r as m,j as i}from"./main-390.js";import{e as K,_,I as C,s as F}from"./bi.126.82.js";import{S as w}from"./bi.348.918.js";import{h as T,c as q}from"./bi.819.793.js";import{B}from"./bi.217.726.js";import L from"./bi.299.271.js";import{K as D}from"./bi.256.792.js";import"./bi.243.742.js";import"./bi.286.689.js";import"./bi.414.690.js";function W({formFields:a,setFlow:e,flow:t,allIntegURL:g}){const x=N(),{formID:h}=A(),[r,c]=m.useState(!1),[o,d]=m.useState(1),[v,n]=m.useState({show:!1}),k=[{key:"full_name",label:"Full Name",required:!0},{key:"email",label:"Email ",required:!0},{key:"tags",label:"Tags ",required:!1}],j=[{key:"1",label:"Add Subscriber"},{key:"2",label:"Remove Subscriber"}],[s,l]=m.useState({name:"Kirim Email",type:"Kirim Email",mainAction:"",userName:"vaishak",api_key:"",field_map:[{formField:"",kirimEmailFormField:""}],subscriberFields:k,allActions:j,actions:{}}),y=p=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),d(3)};return i.jsxs("div",{children:[i.jsx(K,{snack:v,setSnackbar:n}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(w,{step:3,active:o})}),i.jsx(L,{formID:h,kirimEmailConf:s,setKirimEmailConf:l,step:o,setstep:d,isLoading:r,setIsLoading:c,setSnackbar:n}),i.jsxs("div",{className:"btcd-stp-page",style:b({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(D,{formFields:a,handleInput:p=>T(p,s,l),kirimEmailConf:s,setKirimEmailConf:l,isLoading:r,setIsLoading:c,setSnackbar:n}),i.jsxs("button",{onClick:()=>y(),disabled:!q(s==null?void 0:s.field_map)||s.mainAction===""||r||s.mainAction==="1"&&(s.listId===""||s.listId===void 0),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[_("Next","bit-integrations"),i.jsx(B,{className:"ml-1 rev-icn"})]})]}),i.jsx(C,{step:o,saveConfig:()=>F({flow:t,setFlow:e,allIntegURL:g,conf:s,navigate:x,setIsLoading:c,setSnackbar:n}),isLoading:r,dataConf:s,setDataConf:l,formFields:a})]})}export{W as default};
