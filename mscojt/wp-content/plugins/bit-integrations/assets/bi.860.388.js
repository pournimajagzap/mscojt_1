import{u as x,k as w,r as n,j as t}from"./main-390.js";import{e as j,_ as v,I as S,s as I}from"./bi.126.82.js";import{B as C}from"./bi.217.726.js";import{S as _}from"./bi.348.918.js";import W from"./bi.480.261.js";import{h as q,c as b}from"./bi.490.769.js";import{Z as N}from"./bi.117.768.js";import"./bi.243.742.js";import"./bi.286.689.js";import"./bi.414.690.js";const Z=i=>{const r={},l=window.location.href.replace(`${window.opener.location.href}`,"").split("&");l&&l.forEach(d=>{const s=d.split("=");s[1]&&(r[s[0]]=s[1])}),localStorage.setItem(`__${i}`,JSON.stringify(r)),window.close()};function $({formFields:i,setFlow:r,flow:p,allIntegURL:l}){const d=x(),{formID:s}=w(),[c,u]=n.useState(!1),[a,f]=n.useState(1),[h,o]=n.useState({show:!1}),g=[{key:"first_name",label:"First Name",required:!0},{key:"last_name",label:"Last Name",required:!0},{key:"email",label:"Email",required:!0},{key:"city",label:"City",required:!1},{key:"country",label:"Country",required:!1},{key:"phone",label:"Phone",required:!1},{key:"job_title",label:"Job Title",required:!1},{key:"zip",label:"Zip",required:!1}],[e,m]=n.useState({name:"Zoom Webinar",type:"Zoom Webinar",clientId:"",clientSecret:"",zoomId:"",field_map:[{formField:"",zoomField:""}],zoomWebinarFields:g,allActions:[{value:"Create Attendee",key:1},{value:"Delete Attendee",key:2},{value:"Create User",key:3},{value:"Delete User",key:4}],selectedActions:null,actions:{}});n.useEffect(()=>{window.opener&&Z("zoom")},[]);const y=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!b(e)){o({show:!0,msg:"Please map fields to continue."});return}e.field_map.length>0&&f(3)};return t.jsxs("div",{children:[t.jsx(j,{snack:h,setSnackbar:o}),t.jsx("div",{className:"txt-center w-9 mt-2",children:t.jsx(_,{step:3,active:a})}),t.jsx(W,{formID:s,zoomWebinarConf:e,setZoomWebinarConf:m,step:a,setStep:f,setSnackbar:o,isLoading:c,setIsLoading:u}),t.jsxs("div",{className:"btcd-stp-page",style:{width:a===2&&900,height:a===2&&"100%"},children:[t.jsx(N,{formID:s,formFields:i,handleInput:k=>q(k,e,m),zoomWebinarConf:e,setZoomWebinarConf:m,isLoading:c,setIsLoading:u,setSnackbar:o}),t.jsxs("button",{onClick:()=>y(),disabled:e.field_map.length<2||c||!e.id||!b(e)||e.selectedActions==null,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[v("Next","bit-integrations"),t.jsx(C,{className:"ml-1 rev-icn"})]})]}),t.jsx(S,{step:a,saveConfig:()=>I({flow:p,setFlow:r,allIntegURL:l,navigate:d,conf:e,setIsLoading:u,setSnackbar:o}),isLoading:c,dataConf:e,setDataConf:m,formFields:i})]})}export{$ as default};
