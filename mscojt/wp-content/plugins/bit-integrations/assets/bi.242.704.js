var N=Object.defineProperty;var j=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var p=(s,l,t)=>l in s?N(s,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[l]=t,d=(s,l)=>{for(var t in l||(l={}))_.call(l,t)&&p(s,t,l[t]);if(j)for(var t of j(l))w.call(l,t)&&p(s,t,l[t]);return s};import{h as k,j as e}from"./main-390.js";import{l as y,_ as r,m as $,n as M,o as A,k as g}from"./bi.126.82.js";import{g as R,a as S}from"./bi.99.703.js";import{T}from"./bi.286.689.js";const F=(s,l,t)=>{const n=d({},l);n.field_map.splice(s,0,{}),t(d({},n))},V=(s,l,t)=>{const n=d({},l);n.field_map.length>1&&n.field_map.splice(s,1),t(d({},n))},v=(s,l,t,n)=>{const i=d({},t);i.field_map[l][s.target.name]=s.target.value,s.target.value==="custom"&&(i.field_map[l].customValue=""),n(d({},i))};function q({i:s,formFields:l,field:t,rapidmailConf:n,setRapidmailConf:i}){var m,x;if(((m=n==null?void 0:n.field_map)==null?void 0:m.length)===1&&t.rapidmailFormField===""){const c=d({},n),h=R(c);c.field_map=h,i(c)}const a=(n==null?void 0:n.recipientsFields.filter(c=>c.required===!0))||[],o=(n==null?void 0:n.recipientsFields.filter(c=>c.required===!1))||[],u=k(y),{isPro:b}=u;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:c=>v(c,s,n,i),children:[e.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),e.jsx("optgroup",{label:"Form Fields",children:l==null?void 0:l.map(c=>e.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`))}),e.jsx("option",{value:"custom",children:r("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`General Smart Codes ${b?"":"(PRO)"}`,children:b&&((x=$)==null?void 0:x.map(c=>e.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`)))})]}),t.formField==="custom"&&e.jsx(T,{onChange:c=>M(c,s,n,i),label:r("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:t.customValue,placeholder:r("Custom Value","bit-integrations"),formFields:l}),e.jsxs("select",{className:"btcd-paper-inp",disabled:s<a.length,name:"rapidmailFormField",value:s<a?a[s].label||"":t.rapidmailFormField||"",onChange:c=>v(c,s,n,i),children:[e.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),s<a.length?e.jsx("option",{value:a[s].key,children:a[s].label},a[s].key):o.map(({key:c,label:h})=>e.jsx("option",{value:c,children:h},c))]})]}),s>=a.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>F(s,n,i),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>V(s,n,i),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function O({rapidmailConf:s,setRapidmailConf:l}){var n;const t=(i,a)=>{const o=d({},s);a==="send_activationmail"&&(i.target.checked?o.actions.send_activationmail=!0:delete o.actions.send_activationmail),l(d({},o))};return e.jsx("div",{className:"pos-rel d-flx w-8",children:e.jsx(A,{checked:((n=s.actions)==null?void 0:n.send_activationmail)||!1,onChange:i=>t(i,"send_activationmail"),className:"wdt-200 mt-4 mr-2",value:"user_share",title:g("Double Opt-in","bit-integrations"),subTitle:g("Add Double Opt-in","bit-integrations")})})}function G({formFields:s,handleInput:l,rapidmailConf:t,setRapidmailConf:n,isLoading:i,setIsLoading:a,setSnackbar:o}){var u;return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:r("Recipient:","bit-integrations")}),e.jsxs("select",{onChange:l,name:"recipient_id",value:t.recipient_id,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:r("Select Recipients","bit-integrations")}),((u=t==null?void 0:t.default)==null?void 0:u.recipientlists)&&t.default.recipientlists.map(({id:b,name:m})=>e.jsx("option",{value:b,children:m},b))]}),e.jsx("button",{onClick:()=>S(t,n,a),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Fetch All Recipients","bit-integrations")}'`},type:"button",disabled:i,children:"↻"}),e.jsx("br",{}),e.jsx("div",{className:"mt-5",children:e.jsx("b",{className:"wdt-100",children:r("Field Map","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:r("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:r("Rapidmail Fields","bit-integrations")})})]}),(t==null?void 0:t.recipient_id)&&(t==null?void 0:t.field_map.map((b,m)=>e.jsx(q,{i:m,field:b,rapidmailConf:t,formFields:s,setRapidmailConf:n,setSnackbar:o},`rp-m-${m+9}`))),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>F(t.field_map.length,t,n),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:r("Actions","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(O,{rapidmailConf:t,setRapidmailConf:n})]})}export{G as R};
