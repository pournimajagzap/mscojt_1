import{u as I,k as S,r as d,j as t}from"./main-390.js";import{e as F,_ as v,I as y,G as C}from"./bi.126.82.js";import{B as k}from"./bi.217.726.js";import{S as W}from"./bi.348.918.js";import N from"./bi.276.241.js";import{W as L,h as P,c as o}from"./bi.887.722.js";import"./bi.243.742.js";import"./bi.286.689.js";import"./bi.414.690.js";function R({formFields:p,setFlow:g,flow:h,allIntegURL:M}){const x=I(),{formID:_}=S(),[l,r]=d.useState(!1),[i,c]=d.useState(1),[b,s]=d.useState({show:!1}),[e,n]=d.useState({name:"WooCommerce Integration",type:"WooCommerce",field_map:[],upload_field_map:[],line_field_map:[{formField:"",wcField:""}],actions:{}}),j=()=>{let a="";if((e==null?void 0:e.module)==="order"){const m=o(e.order.field_map),u=o(e.line_item.field_map),f=o(e.customer.field_map);a=m?u?f?"":"Customer Field Map":"Line Item Field Map":"Order Field Map",m&&u&&f||s({show:!0,msg:`${a} can'	 be empty`})}else(e==null?void 0:e.module)==="customer"?o(e.customer.field_map)||(a="Customer Field Map",s({show:!0,msg:"Customer Field Map can't be empty"})):(e==null?void 0:e.module)==="product"?o(e.product.field_map)||(a="Product Field Map",s({show:!0,msg:"Product Field Map can't be empty"})):(e==null?void 0:e.module)==="changestatus"&&(o(e.changestatus.field_map)||s({show:!0,msg:"Change Status Field Map can't be empty"}));setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),a===""&&c(3)};return t.jsxs("div",{children:[t.jsx(F,{snack:b,setSnackbar:s}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(W,{step:3,active:i})}),t.jsx(N,{formID:_,wcConf:e,setWcConf:n,step:i,setStep:c,isLoading:l,setIsLoading:r,setSnackbar:s}),t.jsxs("div",{className:"btcd-stp-page",style:{width:i===2&&1e3,height:i===2&&"auto"},children:[t.jsx(L,{wcConf:e,setWcConf:n,formFields:p,handleInput:a=>P(a,e,n,r,s),isLoading:l,setIsLoading:r}),t.jsxs("button",{onClick:j,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[v("Next","bit-integrations"),t.jsx(k,{className:"ml-1 rev-icn"})]})]}),t.jsx(y,{step:i,saveConfig:()=>C(h,g,M,e,x,"","",r),isLoading:l,dataConf:e,setDataConf:n,formFields:p})]})}export{R as default};
