var k=Object.defineProperty;var b=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var _=(e,i,t)=>i in e?k(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,c=(e,i)=>{for(var t in i||(i={}))g.call(i,t)&&_(e,t,i[t]);if(b)for(var t of b(i))q.call(i,t)&&_(e,t,i[t]);return e};import{_ as d,c as h,d as m}from"./bi.126.82.js";const z=(e,i,t,s,r,l)=>{const a=c({},i),{name:u}=e.target;e.target.value!==""?a[u]=e.target.value:delete a[u],a.mainAction==="2"&&F(a,t,s),t(c({},a))},F=(e,i,t,s)=>{t(!0);const r={access_token:e.access_token};h(r,"sendfox_fetch_all_list").then(l=>{if(l&&l.success){const a=c({},e);a.default||(a.default={}),l.data&&(a.default.allLists=l.data.data),i(c({},a)),t(!1),m.success(d("Lists fetched successfully","bit-integrations"));return}t(!1),m.error(d("Lists fetch failed. please try again","bit-integrations"))}).catch(()=>t(!1))},U=(e,i,t,s,r,l)=>{if(!e.access_token){t({access_token:e.access_token?"":d("Access Token can't be empty","bit-integrations")});return}t({}),r(!0);const a={access_token:e.access_token};h(a,"sendFox_authorize").then(u=>{if(u&&u.success){const p=c({},e);i(p),s(!0),r(!1),m.success(d("Authorized successfully","bit-integrations"));return}r(!1),m.error(d("Authorized failed","bit-integrations"))})},w=e=>{const i=e==null?void 0:e.contactFields.filter(t=>t.required===!0);return i.length>0?i.map(t=>({formField:"",sendFoxFormField:t.key})):[{formField:"",sendFoxFormField:""}]},f=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>{var s,r,l;return!t.formField&&t.sendFoxFormField&&((l=(r=(s=e==null?void 0:e.default)==null?void 0:s.allFields)==null?void 0:r[e.listId])==null?void 0:l.required.indexOf(t.sendFoxFormField))!==-1}):[]).length>0),O=e=>{const i=e==null?void 0:e.listFields.filter(t=>t.required===!0);return i.length>0?i.map(t=>({formField:"",sendFoxListFormField:t.key})):[{formField:"",sendFoxListFormField:""}]},A=e=>!((e!=null&&e.field_map_list?e.field_map_list.filter(t=>{var s,r,l;return!t.formField&&t.sendFoxListFormField&&((l=(r=(s=e==null?void 0:e.default)==null?void 0:s.allFields)==null?void 0:r[e.listId])==null?void 0:l.required.indexOf(t.sendFoxListFormField))!==-1}):[]).length>0),S=e=>{const i=e==null?void 0:e.unsubscribeFields.filter(t=>t.required===!0);return i.length>0?i.map(t=>({formField:"",sendFoxUnsubscribeFormField:t.key})):[{formField:"",sendFoxUnsubscribeFormField:""}]},y=e=>!((e!=null&&e.field_map_unsubscribe?e.field_map_unsubscribe.filter(t=>{var s,r,l;return!t.formField&&t.sendFoxUnsubscribeFormField&&((l=(r=(s=e==null?void 0:e.default)==null?void 0:s.allFields)==null?void 0:r[e.listId])==null?void 0:l.required.indexOf(t.sendFoxUnsubscribeFormField))!==-1}):[]).length>0),v=e=>e.mainAction==="1"?!A(e):e.mainAction==="2"?!f(e)||e.listId===void 0||e.listId==="":!y(e);export{O as a,S as b,U as c,F as f,w as g,z as h,v as i};
