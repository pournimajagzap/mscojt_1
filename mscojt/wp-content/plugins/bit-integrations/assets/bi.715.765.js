var h=Object.defineProperty;var d=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var l=(e,a,t)=>a in e?h(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,c=(e,a)=>{for(var t in a||(a={}))g.call(a,t)&&l(e,t,a[t]);if(d)for(var t of d(a))m.call(a,t)&&l(e,t,a[t]);return e};import{_ as o,c as k}from"./bi.126.82.js";const b=(e,a,t)=>{const r=c({},a),{name:n}=e.target;e.target.value!==""?r[n]=e.target.value:delete r[n],t(c({},r))},q=(e,a,t,r,n,s)=>{if(!e.api_key){t({api_key:e.api_key?"":o("Api Key can't be empty","bit-integrations")});return}t({}),n(!0);const u={app_domain:e.app_domain,api_key:e.api_key};k(u,"freshdesk_authorization_and_fetch_tickets").then(i=>i).then(i=>{if(i&&i.success){const F=c({},e);F.tokenDetails=i.data,a(F),r(!0),s({show:!0,msg:o("Authorized Successfully","bit-integrations")})}else i&&i.data&&i.data.data||!i.success&&typeof i.data=="string"?s({show:!0,msg:`${o("Authorization failed Cause:","bit-integrations")}${i.data.data||i.data}. ${o("please try again","bit-integrations")}`}):s({show:!0,msg:o("Authorization failed. please try again","bit-integrations")});n(!1)})},w=e=>!((e?e==null?void 0:e.filter(t=>!t.formField||!t.freshdeskFormField):[]).length>0),z=e=>!((e?e==null?void 0:e.filter(t=>!t.formField||!t.contactFreshdeskFormField):[]).length>0),A=e=>{const a=e==null?void 0:e.ticketFields.filter(t=>t.required===!0);return a.length>0?a.map(t=>({formField:"",freshdeskFormField:t.key})):[{formField:"",freshdeskFormField:""}]},p=e=>{const a=e==null?void 0:e.contactFields.filter(t=>t.required===!0);return a.length>0?a.map(t=>({formField:"",contactFreshdeskFormField:t.key})):[{formField:"",contactFreshdeskFormField:""}]};export{z as a,p as b,w as c,q as d,A as g,b as h};
