var q=Object.defineProperty,J=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var I=(d,c,i)=>c in d?q(d,c,{enumerable:!0,configurable:!0,writable:!0,value:i}):d[c]=i,b=(d,c)=>{for(var i in c||(c={}))Q.call(c,i)&&I(d,i,c[i]);if(T)for(var i of T(c))X.call(c,i)&&I(d,i,c[i]);return d},C=(d,c)=>J(d,K(c));import{j as e,d as M,h as y,r as w,u as Y}from"./main-390.js";import{p as Z,$ as tt,h as et,l as k,i as at,e as st,_ as l,E as it,D as nt,m as lt,o as ot,F as ct,L as A,G as rt,d as _}from"./bi.126.82.js";import{T as dt}from"./bi.87.729.js";import{T as R,t as mt}from"./bi.243.742.js";/* empty css          */function h({options:d,placeholder:c,action:i,className:j,isMultiple:v,allowCustomOpt:n,value:N,addable:a,titleClassName:m,title:g,jsonValue:u}){return e.jsxs("div",{className:`${m}`,children:[e.jsx("span",{children:g}),e.jsx(Z,{width:"100%",defaultValue:N,className:`btcd-paper-drpdwn msl-wrp-options ${j}`,onChange:i,singleSelect:!v,customValue:n||a,placeholder:c,jsonValue:u,options:d||[]})]})}function jt({allIntegURL:d,isInfo:c,edit:i,isLearnDash:j=!1,learnDashConf:v}){var S,$,E;const[n,N]=M(tt),[a,m]=M(et),{userMail:g}=y(k),u=y(at),[B,D]=w.useState(!1),W=Y(),[P,x]=w.useState({show:!1}),{mailLinks:r}=mt,V=y(k),{isPro:F}=V,f=()=>{const t=[];if(G()){const s=[];u.map(o=>{o.type==="email"&&s.push({label:o.label,value:`\${${o.name}}`})}),t.push({title:"Form Fields",type:"group",childs:s})}return g&&Array.isArray(g)&&t.push({title:"WP Emails",type:"group",childs:g}),t};w.useEffect(()=>{if(n!=null&&n.flow_details||i){const t=b({},n==null?void 0:n.flow_details);m(t)}else{const t=b({},a);a&&!(a!=null&&a.type)&&(t.type=j?"LearnDash":"Mail"),a&&!(a!=null&&a.condition)&&(t.name=j?"Send Email Leader":"Mail Integrations",t.condition={action_behavior:"",actions:[{field:"",action:"value"}],logics:[{field:"",logic:"",val:""},"or",{field:"",logic:"",val:""}]},m(t))}},[]);const z=(t,s)=>{const o=b({},a);s?o.condition.action_behavior=t:o.condition.action_behavior="",m(o)},p=(t,s)=>{const o=b({},a);t==="to"?o.to=s?s.split(","):[]:t==="cc"?o.cc=s?s.split(","):[]:t==="bcc"?o.bcc=s?s.split(","):[]:t==="replyto"?o.replyto=s?s.split(","):[]:t==="attachment"?o.attachment=s?s.split(","):[]:o[t]=s,m(o)},G=()=>{for(const t of u)if(t.type==="email")return!0;return!1},H=()=>{const t=[];for(const s of u)s.type==="file"&&t.push({label:s.label,value:s.name});return t},O=({target:{value:t}})=>{m(s=>C(b({},s),{subject:(s.subject!==void 0?s.subject:"")+t})),setTimeout(()=>{t=""},100)},U=()=>{if(!a.name){x({show:!0,msg:l("Integration Name cann't be empty","bit-integrations")});return}if(!a.to){x({show:!0,msg:l("Email Receiver cann't be empty","bit-integrations")});return}const t=C(b({},a),{learnDashConf:v});rt(n,N,d,t,W,"",i,D).then(o=>{o.success?(i&&_.success("Integration Updated Successfully"),_.success("Integration Created Successfully")):_.error(o.data||o)})},L=t=>{m(s=>C(b({},s),{body:t}))};return e.jsxs("div",{children:[e.jsx(st,{snack:P,setSnackbar:x}),(r==null?void 0:r.youTubeLink)&&e.jsx(R,{title:r==null?void 0:r.title,youTubeLink:r==null?void 0:r.youTubeLink}),(r==null?void 0:r.docLink)&&e.jsx(R,{title:r==null?void 0:r.title,docLink:r==null?void 0:r.docLink}),e.jsx("span",{className:"f-m wdt-200 d-in-b",children:l("Integration Name","bit-integration")}),e.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:t=>p("name",t.target.value),name:"name",value:a.name,type:"text",placeholder:l("Integration Name...","bit-integrations"),disabled:c}),e.jsx("br",{}),e.jsx("br",{}),n.triggered_entity==="Webhook"&&(n==null?void 0:n.flow_details)&&e.jsx(it,{setSnackbar:x}),n.triggered_entity!=="Webhook"&&(n==null?void 0:n.flow_details)&&e.jsx(nt,{setSnackbar:x}),e.jsx(h,{action:t=>p("from",t),placeholder:l("Add mail from address","bit-integrations"),value:a.from,title:e.jsx("span",{className:"f-m wdt-200 d-in-b",children:l("From","bit-integrations")}),titleClassName:"mt-2 flx",className:"w-5",addable:!0,options:f(a.from)}),e.jsx(h,{action:t=>p("to",t),value:a.to,placeholder:l("Add Email Receiver","bit-integrations"),title:e.jsx("span",{className:"f-m wdt-200 d-in-b",children:l("To","bit-integrations")}),isMultiple:!0,titleClassName:"mt-2 flx",className:"w-5",addable:!0,options:f(a.to)}),e.jsx(h,{action:t=>p("cc",t),value:a.cc,placeholder:l("Add Email CC","bit-integrations"),title:e.jsx("span",{className:"f-m wdt-200 d-in-b",children:l("CC","bit-integrations")}),isMultiple:!0,titleClassName:"mt-2 flx",className:"w-5",addable:!0,options:f(a.cc)}),e.jsx(h,{action:t=>p("bcc",t),placeholder:l("Add Email BCC","bit-integrations"),value:a.bcc,title:e.jsx("span",{className:"f-m wdt-200 d-in-b",children:l("BCC","bit-integrations")}),isMultiple:!0,titleClassName:"mt-2 flx",className:"w-5",addable:!0,options:f(a.bcc)}),e.jsx(h,{action:t=>p("replyto",t),placeholder:l("Reply To","bit-integrations"),value:a.replyto,title:e.jsx("span",{className:"f-m wdt-200 d-in-b",children:l("Reply To","bit-integrations")}),isMultiple:!0,titleClassName:"mt-2 flx",className:"w-5",addable:!0,options:f(a.replyto)}),e.jsx(h,{action:t=>p("attachment",t),placeholder:l("Attachment","bit-integrations"),value:(a==null?void 0:a.attachment)||[],title:e.jsx("span",{className:"f-m wdt-200 d-in-b",children:l("Attachment","bit-integrations")}),isMultiple:!0,disableChip:!1,customValue:!1,addable:!0,titleClassName:"mt-2 flx",className:"w-5",options:H()}),e.jsxs("div",{className:"mt-2 mb-4 flx",children:[e.jsx("span",{className:"f-m wdt-200 d-in-b",children:"Subject:"}),e.jsx("input",{onChange:t=>p("subject",t.target.value),name:"sub",type:"text",className:"btcd-paper-inp w-5",placeholder:"Email Subject Here",value:a.subject}),e.jsxs("select",{onChange:O,className:"btcd-paper-inp ml-2",style:{width:"20%"},children:[e.jsx("option",{value:"",children:l("Add field","bit-integrations")}),e.jsx("optgroup",{label:"Form Fields",children:u!==null&&u.map(t=>t.type!==void 0&&!t.type.match(/^(file|recaptcha)$/)&&e.jsx("option",{value:`\${${t.name}}`,children:t.label},t.name))}),e.jsx("optgroup",{label:`General Smart Codes ${F?"":"(PRO)"}`,children:F&&((S=lt)==null?void 0:S.map(t=>e.jsx("option",{value:`\${${t.name}}`,children:t.label},`ff-rm-${t.name}`)))})]})]}),e.jsx(dt,{id:"conf-mail",formFields:u,value:a.body,onChangeHandler:L,width:"100%"}),(a==null?void 0:a.condition)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flx",children:e.jsx(ot,{onChange:t=>z(t.target.value,t.target.checked),checked:(($=a==null?void 0:a.condition)==null?void 0:$.action_behavior)==="cond",className:"wdt-200 mt-4 mr-2",value:"cond",title:l("Conditional Logics","bit_integration")})}),e.jsx("br",{}),((E=a==null?void 0:a.condition)==null?void 0:E.action_behavior)==="cond"&&e.jsx(ct,{formFields:u,dataConf:a,setDataConf:m})]}),e.jsx(ut,{saveConfig:U,isLoading:B,edit:(n==null?void 0:n.flow_details)&&!0})]})}const ut=({saveConfig:d,edit:c,isLoading:i})=>c?e.jsx("div",{className:"txt-center w-9 mt-3",children:e.jsxs("button",{onClick:d,className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:i,children:[l("Update","bit-integrations"),i&&e.jsx(A,{size:20,clr:"#022217",className:"ml-2"})]})}):e.jsx("div",{className:"btcd-stp-page txt-center",style:{width:"100%",height:"auto"},children:e.jsxs("button",{onClick:d,className:"btn btcd-btn-lg green sh-sm",type:"button",disabled:i,children:[l("Save ","bit-integrations"),"✔",i&&e.jsx(A,{size:20,clr:"#022217",className:"ml-2"})]})});export{jt as default};
