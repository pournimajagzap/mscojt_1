var A=Object.defineProperty;var j=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var v=(i,s,a)=>s in i?A(i,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[s]=a,h=(i,s)=>{for(var a in s||(s={}))_.call(s,a)&&v(i,a,s[a]);if(j)for(var a of j(s))M.call(s,a)&&v(i,a,s[a]);return i};import{h as S,j as e,r as N}from"./main-390.js";import{l as y,_ as c,m as k,n as T,o as V,f as $}from"./bi.126.82.js";import{g as q}from"./bi.239.790.js";import{T as P}from"./bi.286.689.js";const F=(i,s,a)=>{const t=h({},s);t.field_map.splice(i,0,{}),a(h({},t))},R=(i,s,a)=>{const t=h({},s);t.field_map.length>1&&t.field_map.splice(i,1),a(h({},t))},w=(i,s,a,t)=>{const r=h({},a);r.field_map[s][i.target.name]=i.target.value,i.target.value==="custom"&&(r.field_map[s].customValue=""),t(h({},r))};function I({i,formFields:s,field:a,googleContactsConf:t,setGoogleContactsConf:r}){var p,x;if(((p=t==null?void 0:t.field_map)==null?void 0:p.length)===1&&a.googleContactsFormField===""){const l=h({},t),b=q(l);l.field_map=b,r(l)}const n=(t==null?void 0:t.default.filter(l=>l.required===!0))||[],m=(t==null?void 0:t.default.filter(l=>l.required===!1))||[],d=S(y),{isPro:u}=d;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:a.formField||"",onChange:l=>w(l,i,t,r),children:[e.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),e.jsx("optgroup",{label:"Form Fields",children:s==null?void 0:s.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`))}),e.jsx("option",{value:"custom",children:c("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`General Smart Codes ${u?"":"(PRO)"}`,children:u&&((x=k)==null?void 0:x.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`)))})]}),a.formField==="custom"&&e.jsx(P,{onChange:l=>T(l,i,t,r),label:c("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:a.customValue,placeholder:c("Custom Value","bit-integrations"),formFields:s}),e.jsxs("select",{className:"btcd-paper-inp",disabled:i<n.length,name:"googleContactsFormField",value:i<n.length?n[i].key||"":a.googleContactsFormField||"",onChange:l=>w(l,i,t,r),children:[e.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),i<n.length?e.jsx("option",{value:n[i].key,children:n[i].label},n[i].key):m.map(({key:l,label:b})=>e.jsx("option",{value:l,children:b},l))]})]}),i>=n.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>F(i,t,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>R(i,t,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function E({googleContactsConf:i,setGoogleContactsConf:s,formFields:a}){var m;N.useState(!1);const[t,r]=N.useState({show:!1,action:()=>{}}),n=(d,u)=>{const p=h({},i);u==="Attachments"&&(d.target.value!==""?p.actions.attachments=d.target.value:delete p.actions.attachments),s(h({},p))};return e.jsx("div",{className:"d-flx wdt-200",children:e.jsxs("div",{className:"pos-rel d-flx w-8l",children:[e.jsx("div",{className:"d-flx flx-wrp",children:e.jsx(V,{onChange:()=>r({show:"attachments"}),checked:"attachments"in i.actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:c("Photo","bit-integrations"),subTitle:c("Add picture on google contact account.","bit-integrations")})}),e.jsxs($,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:"Ok",show:t.show==="attachments",close:()=>r({show:!1}),action:()=>r({show:!1}),title:c("Select Attachment","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2"}),e.jsx("div",{className:"mt-2",children:c("Please select file upload fields","bit-integrations")}),e.jsxs("select",{onChange:d=>n(d,"Attachments"),name:"attachments",value:(m=i.actions)==null?void 0:m.attachments,className:"btcd-paper-inp w-10 mt-2",children:[e.jsx("option",{value:"",children:c("Select file upload field","bit-integrations")}),a==null?void 0:a.filter(d=>d.type==="file").map(d=>e.jsx("option",{value:d.name,children:d.label},d.name+1))]})]})]})})}function L({flowID:i,formFields:s,googleContactsConf:a,setGoogleContactsConf:t}){const r=n=>{const m=h({},a),{name:d}=n.target;n.target.value!==""?m[d]=n.target.value:delete m[d],m[n.target.name]=n.target.value,t(h({},m))};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:c("Actions:","bit-integrations")}),e.jsxs("select",{onChange:r,name:"mainAction",value:a==null?void 0:a.mainAction,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:c("Select Actions","bit-integrations")}),(a==null?void 0:a.allActions)&&a.allActions.map(({key:n,label:m})=>e.jsx("option",{value:n,children:m},n))]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-5",children:e.jsx("b",{className:"wdt-100",children:c("Field Map","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:c("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:c("Google Contacts Fields","bit-integrations")})})]}),a==null?void 0:a.field_map.map((n,m)=>e.jsx(I,{i:m,field:n,formFields:s,googleContactsConf:a,setGoogleContactsConf:t},`rp-m-${m+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>F(a.field_map.length,a,t),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:c("Actions","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(E,{googleContactsConf:a,setGoogleContactsConf:t,formFields:s})]})}export{L as G};
