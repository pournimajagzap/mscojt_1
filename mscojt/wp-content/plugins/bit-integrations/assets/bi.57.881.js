var q=Object.defineProperty;var w=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var y=(t,s,d)=>s in t?q(t,s,{enumerable:!0,configurable:!0,writable:!0,value:d}):t[s]=d,m=(t,s)=>{for(var d in s||(s={}))$.call(s,d)&&y(t,d,s[d]);if(w)for(var d of w(s))V.call(s,d)&&y(t,d,s[d]);return t};import{j as e,h as g,L}from"./main-390.js";import{o as S,k as c,l as T,m as A,J as P,T as U,q as B}from"./bi.126.82.js";import{g as E,r as G,a as I}from"./bi.10.880.js";function H({campaignMonitorConf:t,setCampaignMonitorConf:s}){var i;const d=(r,h)=>{const a=m({},t);h==="update"&&(r.target.checked?a.actions.update=!0:delete a.actions.update),s(m({},a))};return e.jsx("div",{className:"pos-rel d-flx w-8",children:e.jsx(S,{checked:((i=t.actions)==null?void 0:i.update)||!1,onChange:r=>d(r,"update"),className:"wdt-200 mt-4 mr-2",value:"user_share",title:c("Update CampaignMonitor","bit-integrations"),subTitle:c("Update Responses with CampaignMonitor existing email?","bit-integrations")})})}function J({i:t,formFields:s,field:d,campaignMonitorConf:i,setCampaignMonitorConf:r}){var v,_;let h=i.subscriberFields;const a=h.filter(l=>l.required===!0)||[],p=[...h.filter(l=>l.required===!1)||[],...(i==null?void 0:i.customFields)||[]],b=g(T),{isPro:n}=b;((v=i==null?void 0:i.field_map)==null?void 0:v.length)===1&&d.campaignMonitorField===""&&r(l=>(l.field_map=E(l),l));const j=l=>{const u=m({},i);u.field_map.splice(l,0,{}),r(u)},k=l=>{const u=m({},i);u.field_map.length>1&&u.field_map.splice(l,1),r(u)},N=(l,u)=>{const x=m({},i);x.field_map[u][l.target.name]=l.target.value,l.target.value==="custom"&&(x.field_map[u].customValue=""),r(x)},R=(l,u)=>{const x=m({},i);x.field_map[u].customValue=l.target.value,r(x)};return e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:d.formField||"",onChange:l=>N(l,t),children:[e.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),e.jsx("optgroup",{label:"List Fields",children:s==null?void 0:s.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`))}),e.jsx("option",{value:"custom",children:c("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`General Smart Codes ${n?"":"(PRO)"}`,children:n&&((_=A)==null?void 0:_.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`)))})]}),d.formField==="custom"&&e.jsx(P,{onChange:l=>R(l,t),label:c("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:d.customValue,placeholder:c("Custom Value","bit-integrations")}),e.jsxs("select",{className:"btcd-paper-inp",name:"campaignMonitorField",value:t<a.length?a[t].key||"":d.campaignMonitorField||"",onChange:l=>N(l,t),disabled:t<a.length,children:[e.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),t<a.length?e.jsx("option",{value:a[t].key,children:a[t].label},a[t].key):p.map(({key:l,label:u})=>e.jsx("option",{value:l,children:u},l))]})]}),t>=a.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>j(t),className:"icn-btn sh-sm ml-2",type:"button",children:"+"}),e.jsx("button",{onClick:()=>k(t),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:e.jsx(U,{})})]})]})}function Q({formFields:t,campaignMonitorConf:s,setCampaignMonitorConf:d,isLoading:i,setIsLoading:r,setSnackbar:h}){var F,p;const a=b=>{const n=b.target.value,j=m({},s);n&&(j.listId=n),d(j),I(j,d,r,h)};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:c("Subscriber List:","bit-integrations")}),e.jsxs("select",{value:s==null?void 0:s.listId,name:"listId",id:"",className:"btcd-paper-inp w-5",onChange:a,children:[e.jsx("option",{value:"",children:c("Select Subscriber List","bit-integrations")}),((F=s==null?void 0:s.default)==null?void 0:F.campaignMonitorLists)&&s.default.campaignMonitorLists.map(b=>e.jsx("option",{value:b.listId,children:b.listName},`${b.listId}`))]}),e.jsx("button",{onClick:()=>G(s,d,r,h),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh CampaignMonitor campaign"'},type:"button",disabled:i,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),i&&e.jsx(L,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,translist:"scale(0.7)"}}),e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{className:"wdt-100",children:c("Map Fields","bit-integrations")}),e.jsx("button",{onClick:()=>I(s,d,r,h),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh CampaignMonitor Field","bit-integrations")}'`},type:"button",disabled:i,children:"↻"})]}),!i&&((s==null?void 0:s.listId)||((p=s==null?void 0:s.default)==null?void 0:p.fields))&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:c("List Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:c("CampaignMonitor Fields","bit-integrations")})})]}),s.field_map.map((b,n)=>e.jsx(J,{i:n,field:b,campaignMonitorConf:s,formFields:t,setCampaignMonitorConf:d},`CampaignMonitor-m-${n+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>B(s.field_map.length,s,d),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:c("Actions","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(H,{campaignMonitorConf:s,setCampaignMonitorConf:d})]})]})}export{Q as C};
