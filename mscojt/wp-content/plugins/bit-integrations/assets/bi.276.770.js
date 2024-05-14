var B=Object.defineProperty;var k=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var M=(e,t,l)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,m=(e,t)=>{for(var l in t||(t={}))L.call(t,l)&&M(e,l,t[l]);if(k)for(var l of k(t))R.call(t,l)&&M(e,l,t[l]);return e};import{r as I,j as s,L as y,h as q}from"./main-390.js";import{o as N,_ as c,f as u,p as O,l as V,m as P,n as E,q as G}from"./bi.126.82.js";import{s as T,g as $,a as H}from"./bi.73.771.js";import{T as z}from"./bi.286.689.js";function J({fluentSupportConf:e,setFluentSupportConf:t,formID:l,formFields:i,setSnackbar:d}){var w,F;const[r,x]=I.useState(!1),[h,o]=I.useState({show:!1}),b=(a,p)=>{const g=m({},e);p==="support_staff"?a!==""?g.actions.support_staff=a:delete g.actions.support_staff:p==="client_priority"?a!==""?g.actions.client_priority=a:delete g.actions.client_priority:p==="business_inbox"&&(a!==""?g.actions.business_inbox=a:delete g.actions.business_inbox),t(m({},g))},v=[{label:"Normal",value:"normal"},{label:"Critical",value:"critical"},{label:"Medium",value:"medium"}],n=()=>{var a;(a=e.default)!=null&&a.agents||T(l,e,t,x,d),o({show:"support_staff"})},_=()=>{var a;(a=e.default)!=null&&a.businessInboxes||$(l,e,t,x,d),o({show:"business_inboxes"})},j=()=>{o({show:!1})};return s.jsxs("div",{className:"pos-rel",children:[s.jsxs("div",{className:"d-flx flx-wrp",children:[s.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[s.jsx(N,{onChange:n,checked:"support_staff"in e.actions,className:"wdt-200 mt-4 mr-2",value:"support_staff",title:c("Support Staff","bit-integrations"),subTitle:c("Add a Support Staff to ticket pushed to fluentSupport.","bit-integrations")}),!e.actions.support_staff&&s.jsx("small",{style:{marginLeft:30,marginTop:10,color:"red"},children:c("Support Staff is required","bit-integrations")})]}),s.jsx(N,{onChange:_,checked:"business_inbox"in e.actions,className:"wdt-200 mt-4 mr-2",value:"business_inbox",title:c("Business Inbox","bit-integrations"),subTitle:c("Add Business Inbox on Ticket in fluentSupport.","bit-integrations")}),s.jsx(N,{onChange:()=>o({show:"client_priority"}),checked:"client_priority"in e.actions,className:"wdt-200 mt-4 mr-2",value:"client_priority",title:c("Client Priority","bit-integrations"),subTitle:c("Add Client Priority on Ticket in fluentSupport.","bit-integrations")})]}),s.jsxs(u,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:c("Ok","bit-integrations"),show:h.show==="support_staff",close:j,action:j,title:c("Ticket Owner","bit-integrations"),children:[s.jsx("div",{className:"btcd-hr mt-2"}),r?s.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):s.jsxs("div",{className:"flx flx-between mt-2",children:[s.jsxs("select",{value:e.actions.support_staff,className:"btcd-paper-inp",onChange:a=>b(a.target.value,"support_staff"),children:[s.jsx("option",{value:"",children:c("Select Support Staff","bit-integrations")}),((w=e==null?void 0:e.default)==null?void 0:w.agents)&&e.default.agents.map(a=>s.jsx("option",{value:`${a.id}`,children:`${a.first_name||a.last_name?a.first_name+" "+a.last_name:a.email}`},a.id))]}),s.jsx("button",{onClick:()=>T(l,e,t,x,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Support Staff"'},type:"button",disabled:r,children:"↻"})]})]}),s.jsxs(u,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:c("Ok","bit-integrations"),show:h.show==="client_priority",close:j,action:j,title:c("Select Priority","bit-integrations"),children:[s.jsx("div",{className:"btcd-hr mt-2"}),s.jsx("div",{className:"mt-2",children:c("Select client priority to ticket.","bit-integrations")}),s.jsx(O,{singleSelect:!0,defaultValue:e.actions.client_priority,className:"mt-2 w-9",onChange:a=>b(a,"client_priority"),options:v})]}),s.jsxs(u,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:c("Ok","bit-integrations"),show:h.show==="business_inboxes",close:j,action:j,title:c("Business Inbox","bit-integrations"),children:[s.jsx("div",{className:"btcd-hr mt-2"}),r?s.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):s.jsxs("div",{className:"flx flx-between mt-2",children:[s.jsxs("select",{value:e.actions.business_inbox,className:"btcd-paper-inp",onChange:a=>b(a.target.value,"business_inbox"),children:[s.jsx("option",{value:"",children:c("Select Business Inbox","bit-integrations")}),((F=e==null?void 0:e.default)==null?void 0:F.businessInboxes)&&e.default.businessInboxes.map(a=>s.jsx("option",{value:`${a.id}`,children:a.name},a.id))]}),s.jsx("button",{onClick:()=>$(l,e,t,x,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Support Staff"'},type:"button",disabled:r,children:"↻"})]})]})]})}const K=(e,t,l)=>{const i=m({},t);i.field_map.splice(e,0,{}),l(m({},i))},Q=(e,t,l)=>{const i=m({},t);i.field_map.length>1&&i.field_map.splice(e,1),l(m({},i))},A=(e,t,l,i)=>{const d=m({},l);d.field_map[t][e.target.name]=e.target.value,e.target.value==="custom"&&(d.field_map[t].customValue=""),i(m({},d))};function U({i:e,formFields:t,field:l,fluentSupportConf:i,setFluentSupportConf:d}){var b,v;if(((b=i==null?void 0:i.field_map)==null?void 0:b.length)===1&&l.fluentSupportFormField===""){const n=m({},i),_=H(n);n.field_map=_,d(n)}const r=(i==null?void 0:i.fluentSupportFields.filter(n=>n.required===!0))||[],x=(i==null?void 0:i.fluentSupportFields.filter(n=>n.required===!1))||[],h=q(V),{isPro:o}=h;return s.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:s.jsxs("div",{className:"pos-rel flx",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",onChange:n=>A(n,e,i,d),children:[s.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),s.jsx("optgroup",{label:"Form Fields",children:t==null?void 0:t.map(n=>s.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`))}),s.jsx("option",{value:"custom",children:c("Custom...","bit-integrations")}),s.jsx("optgroup",{label:`General Smart Codes ${o?"":"(PRO)"}`,children:o&&((v=P)==null?void 0:v.map(n=>s.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`)))})]}),l.formField==="custom"&&s.jsx(z,{onChange:n=>E(n,e,i,d),label:c("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:l.customValue,placeholder:c("Custom Value","bit-integrations"),formFields:t}),s.jsxs("select",{className:"btcd-paper-inp",disabled:e<r.length,name:"fluentSupportFormField",value:e<r.length?r[e].key||"":l.fluentSupportFormField||"",onChange:n=>A(n,e,i,d),children:[s.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),e<r.length?s.jsx("option",{value:r[e].key,children:r[e].label},r[e].key):x.map(({key:n,label:_})=>s.jsx("option",{value:n,children:_},n))]})]}),e>=r.length&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>K(e,i,d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),s.jsx("button",{onClick:()=>Q(e,i,d),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:s.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function f({formID:e,formFields:t,handleInput:l,fluentSupportConf:i,setFluentSupportConf:d,isLoading:r,setIsLoading:x,setSnackbar:h}){return s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsx("br",{}),r&&s.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),i.field_map&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:c("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:c("fluentSupport Fields","bit-integrations")})})]}),i.field_map.map((o,b)=>s.jsx(U,{i:b,field:o,fluentSupportConf:i,formFields:t,setFluentSupportConf:d},`desk-m-${b+9}`)),s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>G(i.field_map.length,i,d),className:"icn-btn sh-sm",type:"button",children:"+"})}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("div",{className:"mt-4",children:s.jsx("b",{className:"wdt-100",children:c("Actions","bit-integrations")})}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsx(J,{fluentSupportConf:i,setFluentSupportConf:d,formID:e,formFields:t,setSnackbar:h})]})]})}export{f as F};
