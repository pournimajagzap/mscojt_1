var I=Object.defineProperty;var F=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var _=(r,c,e)=>c in r?I(r,c,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[c]=e,h=(r,c)=>{for(var e in c||(c={}))R.call(c,e)&&_(r,e,c[e]);if(F)for(var e of F(c))k.call(c,e)&&_(r,e,c[e]);return r};import{j as t,h as $,L as U}from"./main-390.js";import{o as T,_ as l,l as O,m as M,n as V,T as L,p as q,q as D}from"./bi.126.82.js";import{r as y,a as S,b as z}from"./bi.853.720.js";import{T as A}from"./bi.286.689.js";function E({sendinBlueConf:r,setSendinBlueConf:c,setIsLoading:e,setSnackbar:s}){var b,x;const o=(d,n)=>{const m=h({},r);n==="update"&&(d.target.checked?m.actions.update=!0:delete m.actions.update),n==="double_optin"&&(d.target.checked?(m.actions.double_optin=!0,m.templateId="",m.redirectionUrl="",y(m,c,s)):(delete m.actions.double_optin,delete m.templateId,delete m.redirectionUrl)),c(h({},m))};return t.jsxs("div",{className:"pos-rel d-flx w-8",children:[t.jsx(T,{checked:((b=r.actions)==null?void 0:b.update)||!1,onChange:d=>o(d,"update"),className:"wdt-200 mt-4 mr-2",value:"user_share",title:l("Update Sendinblue","bit-integrations"),subTitle:l("Update Responses with Sendinblue existing email?","bit-integrations")}),t.jsx(T,{checked:((x=r.actions)==null?void 0:x.double_optin)||!1,onChange:d=>o(d,"double_optin"),className:"wdt-200 mt-4 mr-2",value:"double_optin",title:l("Double Opt-in","bit-integrations"),subTitle:l("Double Opt-In for confirm subscription.","bit-integrations")})]})}function H({i:r,formFields:c,field:e,sendinBlueConf:s,setSendinBlueConf:o}){var g,u,v,i;const b=e.required,x=((g=s==null?void 0:s.default)==null?void 0:g.fields)&&Object.values((u=s==null?void 0:s.default)==null?void 0:u.fields).filter(a=>!a.required),d=$(O),{isPro:n}=d,m=a=>{const p=h({},s);p.field_map.splice(a,0,{}),o(p)},N=a=>{const p=h({},s);p.field_map.length>1&&p.field_map.splice(a,1),o(p)},j=(a,p)=>{const w=h({},s);w.field_map[p][a.target.name]=a.target.value,a.target.value==="custom"&&(w.field_map[p].customValue=""),o(w)};return t.jsxs("div",{className:b?"mt-2 mr-1 flx w-9":"flx mt-2 mb-2 btcbi-field-map",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:a=>j(a,r),children:[t.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),t.jsx("optgroup",{label:"Form Fields",children:c.map(a=>a.type!=="file"&&t.jsx("option",{value:a.name,children:a.label},`ff-zhcrm-${a.name}`))}),t.jsx("option",{value:"custom",children:l("Custom...","bit-integrations")}),t.jsx("optgroup",{label:`General Smart Codes ${n?"":"(PRO)"}`,children:n&&((v=M)==null?void 0:v.map(a=>t.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`)))})]}),e.formField==="custom"&&t.jsx(A,{onChange:a=>V(a,r,s,o),label:l("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:e.customValue,placeholder:l("Custom Value","bit-integrations"),formFields:c}),t.jsxs("select",{className:"btcd-paper-inp",name:"sendinBlueField",value:e.sendinBlueField,onChange:a=>j(a,r),disabled:b,children:[t.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),b?((i=s==null?void 0:s.default)==null?void 0:i.fields)&&Object.values(s.default.fields).map(a=>t.jsx("option",{value:a.fieldId,children:a.fieldName},`${a.fieldId}-1`)):x&&x.map(a=>t.jsx("option",{value:a.fieldId,children:a.fieldName},`${a.fieldId}-1`))]}),!b&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>m(r),className:"icn-btn sh-sm ml-2",type:"button",children:"+"}),t.jsx("button",{onClick:()=>N(r),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:t.jsx(L,{})})]})]})}function J({formID:r,formFields:c,sendinBlueConf:e,setSendinBlueConf:s,isLoading:o,setIsLoading:b,setSnackbar:x,error:d,setError:n}){var g,u,v;const m=i=>{const a=h({},e);i?(a.lists=i?i.split(","):[],!a.default.fields&&z(a,s,b,x)):delete a.lists,s(h({},a))},N=()=>{var i;return(i=e==null?void 0:e.default)!=null&&i.sblueList?Object.values(e.default.sblueList).map(a=>({label:a.name,value:String(a.id)})):[]},j=i=>{const a=h({},e),p=h({},d);p[i.target.name]="",a[i.target.name]=i.target.value,n(p),s(h({},a))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("List: ","bit-integrations")}),t.jsx(q,{defaultValue:e==null?void 0:e.lists,className:"btcd-paper-drpdwn w-5",options:N(),onChange:i=>m(i)}),t.jsx("button",{onClick:()=>S(e,s,b,x),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Refresh Sendinblue Lists","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]}),t.jsx("br",{}),t.jsx("br",{}),o&&t.jsx(U,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),((g=e==null?void 0:e.lists)==null?void 0:g.length)!==0&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:l("Map Fields","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:l("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:l("Sendinblue Fields","bit-integrations")})})]}),e.field_map.map((i,a)=>t.jsx(H,{i:a,field:i,sendinBlueConf:e,formFields:c,setSendinBlueConf:s},`sendinblue-m-${a+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>D(e.field_map.length,e,s),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),((u=e.actions)==null?void 0:u.double_optin)&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-150 d-in-b",children:l("Template: ","bit-integrations")}),t.jsxs("div",{className:"w-5",children:[t.jsxs("select",{onChange:j,name:"templateId",value:e==null?void 0:e.templateId,className:"btcd-paper-inp",children:[t.jsx("option",{value:"",children:l("Select Template","bit-integrations")}),((v=e==null?void 0:e.default)==null?void 0:v.sblueTemplates)&&Object.values(e.default.sblueTemplates).map(i=>t.jsx("option",{value:i.id||e.templateId,children:i.name},`sendinblue-${i.id+2}`))]}),t.jsx("div",{style:{color:"red",fontSize:"15px",marginTop:"3px"},children:d.templateId})]}),t.jsx("button",{onClick:()=>y(e,s,x),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Refresh Sendinblue Templates","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]}),t.jsxs("small",{className:"d-blk mt-5 ml-30",children:[l("To create and activate double optin email template , Please follow","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://help.sendinblue.com/hc/en-us/articles/211244629#h_01EWZJQBND3M8XTA37V018WX62",target:"_blank",rel:"noreferrer",children:l("How to create and active doi template","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-150 d-in-b",children:l("RedirectionUrl:","bit-integrations")}),t.jsxs("div",{className:"w-5",children:[t.jsx("input",{type:"url",className:"btcd-paper-inp",placeholder:"Redirection URL",onChange:j,value:(e==null?void 0:e.redirectionUrl)||"",name:"redirectionUrl"}),t.jsx("div",{style:{color:"red",fontSize:"15px",marginTop:"3px"},children:d.redirectionUrl})]})]}),t.jsx("br",{}),t.jsx("br",{})]}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:l("Actions","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(E,{sendinBlueConf:e,setSendinBlueConf:s,setIsLoading:b,setSnackbar:x})]})]})}export{J as S};
