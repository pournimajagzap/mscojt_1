import{u as v,k as j,r as o,j as e}from"./main-390.js";import{e as b,k as C,I,G as S}from"./bi.126.82.js";import{B as k}from"./bi.217.726.js";import{S as N}from"./bi.348.918.js";import _ from"./bi.710.294.js";import{c as w}from"./bi.182.838.js";import{C as y}from"./bi.653.839.js";import"./bi.243.742.js";function M({formFields:m,setFlow:d,flow:p,allIntegURL:f}){const u=v(),{formID:c}=j(),[i,n]=o.useState(!1),[s,l]=o.useState(1),[g,a]=o.useState({show:!1}),[t,r]=o.useState({name:"ConvertKit",type:"ConvertKit",api_secret:"",field_map:[{formField:"",convertKitField:""}],actions:{}}),x=h=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),h===3){if(!w(t)){a({show:!0,msg:"Please map all required fields to continue."});return}if(!(t!=null&&t.formId)){a({show:!0,msg:"Please select form to continue."});return}t.name!==""&&t.field_map.length>0&&l(3)}};return e.jsxs("div",{children:[e.jsx(b,{snack:g,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(N,{step:3,active:s})}),e.jsx(_,{formID:c,convertKitConf:t,setConvertKitConf:r,step:s,setstep:l,isLoading:i,setIsLoading:n,setSnackbar:a}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:[e.jsx(y,{formID:c,formFields:m,convertKitConf:t,setConvertKitConf:r,isLoading:i,setIsLoading:n,setSnackbar:a}),e.jsxs("button",{onClick:()=>x(3),disabled:!(t!=null&&t.formId)||t.field_map.length<1,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[C("Next","bit-integrations")," "," ",e.jsx(k,{className:"ml-1 rev-icn"})]})]}),e.jsx(I,{step:s,saveConfig:()=>S(p,d,f,t,u,"","",n),isLoading:i,dataConf:t,setDataConf:r,formFields:m})]})}export{M as default};
