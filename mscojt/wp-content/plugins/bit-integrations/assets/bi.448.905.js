var d=Object.defineProperty,g=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var y=(e,a,t)=>a in e?d(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,s=(e,a)=>{for(var t in a||(a={}))k.call(a,t)&&y(e,t,a[t]);if(h)for(var t of h(a))f.call(a,t)&&y(e,t,a[t]);return e},r=(e,a)=>g(e,b(a));import{_ as n,c as p,d as c}from"./bi.126.82.js";const S=(e,a,t)=>{const l=s({},a),{name:i}=e.target;e.target.value!==""?l[i]=e.target.value:delete l[i],t(s({},l))},q=e=>{let a=[];e.actionName==="client"?a=e==null?void 0:e.clientFields:e.actionName==="contact"?a=e==null?void 0:e.contactFields:e.actionName==="opportunity"&&(a=e==null?void 0:e.opportunityFields);const t=a==null?void 0:a.filter(l=>l.required===!0);return t.length>0?t.map(l=>({formField:"",moxiecrmFormField:l.key})):[{formField:"",moxiecrmFormField:""}]},N=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.moxiecrmFormField||t.formField==="custom"&&!t.customValue||t.moxiecrmFormField==="customFieldKey"&&!t.customFieldKey):[]).length>0),v=(e,a,t,l,i,u)=>{if(!e.api_url||!e.api_key){t({api_url:e.api_url?"":n("API Url can't be empty","bit-integrations"),api_key:e.api_key?"":n("Api Key can't be empty","bit-integrations")});return}t({}),u(r(s({},i),{auth:!0}));const F={api_key:e.api_key,api_url:e.api_url};p(F,"moxiecrm_authentication").then(_=>{if(_&&_.success){l(!0),u(r(s({},i),{auth:!1})),c.success(n("Authorized successfully","bit-integrations"));return}u(r(s({},i),{auth:!1})),c.error(n("Authorized failed, Please enter valid api_url name & API key","bit-integrations"))})},w=(e,a,t)=>{t(r(s({},t),{clients:!0}));const l={api_key:e.api_key,api_url:e.api_url};p(l,"moxiecrm_fetch_all_clients").then(i=>{if(i&&i.success){const u=s({},e);i.data&&(u.clients=i.data),a(u),t(r(s({},t),{clients:!1})),c.success(n("Clients fetched successfully","bit-integrations"));return}t(r(s({},t),{clients:!1})),c.error(n("Clients fetching failed","bit-integrations"))})},I=(e,a,t)=>{t(r(s({},t),{pipelineStages:!0}));const l={api_key:e.api_key,api_url:e.api_url,action_name:e.actionName};p(l,"moxiecrm_fetch_all_pipelineStages").then(i=>{if(i&&i.success){const u=s({},e);i.data&&(u.pipelineStages=i.data),a(u),t(r(s({},t),{pipelineStages:!1})),c.success(n("PipelineStages fetched successfully","bit-integrations"));return}t(r(s({},t),{pipelineStages:!1})),c.error(n("PipelineStages fetching failed","bit-integrations"))})};export{I as a,q as b,N as c,w as g,S as h,v as m};
