var k=Object.defineProperty;var u=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var b=(a,s,e)=>s in a?k(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e,x=(a,s)=>{for(var e in s||(s={}))B.call(s,e)&&b(a,e,s[e]);if(u)for(var e of u(s))I.call(s,e)&&b(a,e,s[e]);return a};import{u as S,k as w,h as C,r as l,j as t}from"./main-390.js";import{l as N,e as y,_ as L,I as M,s as P}from"./bi.126.82.js";import{S as R}from"./bi.348.918.js";import A from"./bi.718.262.js";import{h as E,c as T,b as q}from"./bi.855.772.js";import{B as D}from"./bi.540.773.js";import"./bi.217.726.js";import"./bi.243.742.js";import"./bi.286.689.js";import"./bi.414.690.js";function X({formFields:a,setFlow:s,flow:e,allIntegURL:h}){const g=S(),{formID:p}=w(),j=C(N),{siteURL:v}=j,[n,r]=l.useState(!1),[c,f]=l.useState(1),[F,o]=l.useState({show:!1}),[i,d]=l.useState({name:"Bit Form",type:"Bit Form",domainName:v,api_key:"",id:"",field_map:[{formField:"",BitFormMapField:""}],address_field:[],actions:{}}),_=()=>{var m;if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),(m=i.actions)!=null&&m.address&&!T(i)){o({show:!0,msg:"Please map address required fields to continue."});return}if(!q(i)){o({show:!0,msg:"Please map fields to continue."});return}i.listId!==""&&f(3)};return t.jsxs("div",{children:[t.jsx(y,{snack:F,setSnackbar:o}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(R,{step:3,active:c})}),t.jsx(A,{formID:p,bitFormConf:i,setBitFormConf:d,step:c,setstep:f,isLoading:n,setIsLoading:r,setSnackbar:o}),t.jsxs("div",{className:"btcd-stp-page",style:x({},c===2&&{width:900,height:"auto",overflow:"visible"}),children:[t.jsx(D,{formFields:a,handleInput:m=>E(m,i,d,p,r),bitFormConf:i,setBitFormConf:d,isLoading:n,setIsLoading:r,setSnackbar:o}),!i.id&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{})]}),t.jsxs("button",{onClick:()=>_(),disabled:i.field_map.length<2||n,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[L("Next","bit-integrations")," "," ",t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(M,{step:c,saveConfig:()=>P({flow:e,setFlow:s,allIntegURL:h,navigate:g,conf:i,setIsLoading:r,setSnackbar:o}),isLoading:n,dataConf:i,setDataConf:d,formFields:a})]})}export{X as default};
