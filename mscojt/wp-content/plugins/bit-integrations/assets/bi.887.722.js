var ee=Object.defineProperty;var Q=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var X=(r,d,e)=>d in r?ee(r,d,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[d]=e,v=(r,d)=>{for(var e in d||(d={}))te.call(d,e)&&X(r,e,d[e]);if(Q)for(var e of Q(d))ie.call(d,e)&&X(r,e,d[e]);return r};import{j as t,r as O,L as le}from"./main-390.js";import{A as x,c as Z,_ as u,J as se,T as W,B as ae,p as re}from"./bi.126.82.js";import{T as de}from"./bi.286.689.js";const be=(r,d,e,m,l)=>{let o=x(d);const{name:p,value:f}=r.target;switch(o[p]=f,p){case"module":o=me(o,e,m,l);break}e(o)},me=(r,d,e,m)=>{var o,p;let l=x(r);return l[r.module]||(l[r.module]={}),l[r.module].field_map=[],(p=(o=l==null?void 0:l.default)==null?void 0:o.fields)!=null&&p[r.module]?l=y(l):r.module!=="cancelSubscription"?S(l,d,e,m):w(r,d,e,m),(l==null?void 0:l.module)!=="changestatus"&&(l!=null&&l.filterstatus&&delete l.filterstatus,l!=null&&l.orderchange&&delete l.orderchange),l},S=(r,d,e,m)=>{const{module:l}=r;l&&(e(!0),Z({module:l},"wc_refresh_fields").then(o=>{var p,f,F,_,s,b,a;if(o&&o.success){let i=x(r);o.data&&(i.default||(i.default={}),i.default.fields||(i.default.fields={}),l==="order"?([i.default.fields.order,i.default.fields.customer,i.default.fields.line_item]=o.data,i!=null&&i.order||(i.order={}),i!=null&&i.customer||(i.customer={}),i!=null&&i.line_item||(i.line_item={}),(p=i==null?void 0:i.order)!=null&&p.field_map||(i.order.field_map=[{formField:"",wcField:""}]),(f=i==null?void 0:i.customer)!=null&&f.field_map||(i.customer.field_map=[{formField:"",wcField:""}]),(F=i==null?void 0:i.line_item)!=null&&F.field_map||(i.line_item.field_map=[{formField:"",wcField:""}]),(_=i==null?void 0:i.order)!=null&&_.upload_field_map||(i.order.upload_field_map=[{formField:"",wcField:""}]),(s=i==null?void 0:i.customer)!=null&&s.upload_field_map||(i.customer.upload_field_map=[{formField:"",wcField:""}]),i=y(i,"order"),i=y(i,"customer"),i=ne(i,"line_item"),d(i),m({show:!0,msg:u("Fields refreshed","bit-integrations")})):(i.default.fields[l]=o.data,i!=null&&i[l]||(i[l]={}),(b=i==null?void 0:i[l])!=null&&b.field_map||(i[l].field_map=[{formField:"",wcField:""}]),(a=i==null?void 0:i[l])!=null&&a.upload_field_map||(i[l].upload_field_map=[{formField:"",wcField:""}]),i=y(i,l),d(i),m({show:!0,msg:u("Fields refreshed","bit-integrations")})))}else m({show:!0,msg:u("Fields refresh failed. please try again","bit-integrations")});e(!1)}).catch(()=>e(!1)))},ne=(r,d)=>{const e=x(r);return e.default.fields[d].required.forEach(m=>{e[d].field_map.find(l=>l.wcField===m)||e[d].field_map.unshift({formField:"",wcField:m,required:!0})}),e[d].field_map.length||(e[d].field_map=[{formField:"",wcField:""}]),e},y=(r,d="")=>{const e=x(r);return d===""&&(d=e.module),e.default.fields[d].required.forEach(m=>{e[d].field_map.find(l=>l.wcField===m)||e[d].field_map.unshift({formField:"",wcField:m,required:!0})}),e[d].field_map.length||(e[d].field_map=[{formField:"",wcField:""}]),e},fe=r=>!((r?r.filter(e=>!e.formField||!e.wcField||!e.formField==="custom"&&!e.customValue):[]).length>0),w=(r,d,e,m)=>{e(!0),Z({},"wc_get_all_subscriptions_products").then(l=>{if(l&&l.success){const o=x(r);o.default||(o.default={}),l.data&&(o.default.allSubscriptionProducts=l.data),d(v({},o)),m({show:!0,msg:u("Subscription product refreshed","bit-integrations")})}else m({show:!0,msg:u("Failed to fetching subscription product. please try again","bit-integrations")});e(!1)}).catch(()=>e(!1))};function ce({i:r,formFields:d,field:e,wcConf:m,setWcConf:l}){const o=e.required===!0,p=s=>{const b=v({},m);b.line_item.field_map.splice(s,0,{}),l(b)},f=s=>{const b=x(m);b.line_item.field_map.splice(s,1),l(b)},F=(s,b)=>{const a=x(m);a.line_item.field_map[b][s.target.name]=s.target.value,s.target.value==="custom"&&(a.line_item.field_map[b].customValue=""),l(a)},_=(s,b)=>{const a=x(m);a.line_item.field_map[b].customValue=s.target.value,l(a)};return t.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:s=>F(s,r),children:[t.jsx("option",{value:"",children:u("Select Field","bit-integrations")}),d.map(s=>s.type!=="file"&&t.jsx("option",{value:s.name,children:s.label},`ff-zhcrm-${s.name}`)),t.jsx("option",{value:"custom",children:u("Custom...","bit-integrations")})]}),e.formField==="custom"&&t.jsx(se,{onChange:s=>_(s,r),label:u("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:e.customValue,placeholder:u("Custom Value","bit-integrations")}),t.jsxs("select",{className:"btcd-paper-inp",name:"wcField",value:e.wcField||"",onChange:s=>F(s,r),disabled:o,children:[t.jsx("option",{value:"",children:u("Select Field","bit-integrations")}),Object.values(m.default.fields.line_item.fields).map(s=>{if(o){if(s.required&&s.fieldKey===e.wcField)return t.jsx("option",{value:s.fieldKey,children:s.fieldName},`${s.fieldKey}-1`)}else if(!s.required)return t.jsx("option",{value:s.fieldKey,children:s.fieldName},`${s.fieldKey}-1`)})]})]}),!o&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>p(r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>f(r),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:t.jsx(W,{})})]})]})}function Y({i:r,formFields:d,field:e,wcConf:m,setWcConf:l,uploadFields:o,module:p}){const f=e.required===!0,F=a=>{const i=v({},m);o?i[p].upload_field_map.splice(a,0,{}):i[p].field_map.splice(a,0,{}),l(i)},_=a=>{const i=x(m);o?i[p].upload_field_map.length>1&&i[p].upload_field_map.splice(a,1):i[p].field_map.length>1&&i[p].field_map.splice(a,1),l(i)},s=(a,i)=>{const j=x(m);o?j[p].upload_field_map[i][a.target.name]=a.target.value:j[p].field_map[i][a.target.name]=a.target.value,a.target.value==="custom"&&(j[p].field_map[i].customValue=""),l(j)},b=(a,i)=>{l(j=>ae(j,N=>{N[p].field_map[i].customValue=a}))};return t.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:a=>s(a,r),children:[t.jsx("option",{value:"",children:u("Select Field","bit-integrations")}),o?d.map(a=>a.type==="file"&&t.jsx("option",{value:a.name,children:a.label},`ff-zhcrm-${a.name}`)):d.map(a=>a.type!=="file"&&t.jsx("option",{value:a.name,children:a.label},`ff-zhcrm-${a.name}`)),!o&&t.jsx("option",{value:"custom",children:u("Custom...","bit-integrations")})]}),e.formField==="custom"&&t.jsx(de,{onChange:a=>b(a,r),label:u("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:e.customValue,placeholder:u("Custom Value","bit-integrations"),formFields:d}),t.jsxs("select",{className:"btcd-paper-inp",name:"wcField",value:e.wcField||"",onChange:a=>s(a,r),disabled:f,children:[t.jsx("option",{value:"",children:u("Select Field","bit-integrations")}),Object.values(m.default.fields[p][o?"uploadFields":"fields"]).map(a=>{if(f){if(a.required&&a.fieldKey===e.wcField)return t.jsx("option",{value:a.fieldKey,children:a.fieldName},`${a.fieldKey}-1`)}else if(!a.required)return t.jsx("option",{value:a.fieldKey,children:a.fieldName},`${a.fieldKey}-1`)})]})]}),!f&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>F(r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>_(r),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:t.jsx(W,{})})]})]})}function xe({formFields:r,handleInput:d,wcConf:e,setWcConf:m,isLoading:l,setIsLoading:o,setSnackbar:p}){var $,k,V,K,P,R,E,I,T,A,D,L,z,B,H,J,U;const f=(n,c,h="")=>{var G;const g=v({},e);h==="line_item"?(g.line_item.field_map.splice(n,0,{}),m(g)):c?(G=g[s])==null||G.upload_field_map.splice(n,0,{}):g[s].field_map.splice(n,0,{}),m(g)},[F,_]=O.useState({customer:!1,order:!0}),[s,b]=O.useState(e.module);O.useEffect(()=>{b(e.module)},[e==null?void 0:e.module]);const a=n=>{b(n),_({[n]:!0,[n==="customer"?"order":"customer"]:!1})},i=n=>{const{value:c}=n.target,h=v({},e);if(c==="order-id")h.changestatus.field_map=[{formField:"",wcField:"order_id",required:!0},{formField:"",wcField:"order_status",required:!0}];else if(c==="email")h.changestatus.field_map=[{formField:"",wcField:"email",required:!0},{formField:"",wcField:"order_status",required:!0}],h!=null&&h.orderchange&&delete h.orderchange;else if(c==="n-days"||c==="n-weeks"||c==="n-months"){const g=c[2]==="d"?"n_days":c[2]==="w"?"n_weeks":"n_months";h.changestatus.field_map=[{formField:"",wcField:"order_status",required:!0},{formField:"",wcField:g,required:!0}]}else c==="prev-months"?h.changestatus.field_map=[{formField:"",wcField:"order_status",required:!0}]:c==="n-prev-months"?h.changestatus.field_map=[{formField:"",wcField:"order_status",required:!0},{formField:"",wcField:"n_months",required:!0}]:h.changestatus.field_map=[{formField:"",wcField:"order_status",required:!0},{formField:"",wcField:"from_date",required:!0},{formField:"",wcField:"to_date",required:!0}];h.filterstatus=c,m(h)},j=n=>{const{value:c}=n.target,h=v({},e);if(c==="date-order")h.changestatus.field_map=[{formField:"",wcField:"email",required:!0},{formField:"",wcField:"order_status",required:!0},{formField:"",wcField:"from_date",required:!0},{formField:"",wcField:"to_date",required:!0}];else if(c==="n-days-order"||c==="n-weeks-order"||c==="n-months-order"||c==="n-prev-months-order"){const g=c[2]==="d"?"n_days":c[2]==="w"?"n_weeks":"n_months";h.changestatus.field_map=[{formField:"",wcField:"email",required:!0},{formField:"",wcField:"order_status",required:!0},{formField:"",wcField:g,required:!0}]}else h.changestatus.field_map=[{formField:"",wcField:"email",required:!0},{formField:"",wcField:"order_status",required:!0}];h.orderchange=c,m(h)},N=[{name:"customer",label:"Create-Customer"},{name:"product",label:"Create-Product"},{name:"order",label:"Create-Order"},{name:"changestatus",label:"Change Order Status"},{name:"cancelSubscription",label:"Cancel Subscription"}],q=[{name:"order-id",label:"Specific Order ID"},{name:"email",label:"Specific Customer Email"},{name:"date-range",label:"Specific Date Range"},{name:"n-days",label:"Last N Day's Orders"},{name:"n-weeks",label:"Last N Week's Orders"},{name:"n-months",label:"Last N Month's Orders"},{name:"prev-months",label:"Previous Month's Orders"},{name:"n-prev-months",label:"Previous N Month's Orders"}],M=[{name:"latest-order",label:"Latest Order"},{name:"all-order",label:"All Orders"},{name:"date-order",label:"Specific Date Range"},{name:"n-days-order",label:"Last N Day's Orders"},{name:"n-weeks-order",label:"Last N Week's Orders"},{name:"n-months-order",label:"Last N Month's Orders"},{name:"prev-months-order",label:"Previous Month's Orders"},{name:"n-prev-months-order",label:"Previous N Month's Orders"}],C=(n,c)=>{const h=v({},e);c==="productId"&&(n!==""?h[c]=n:delete h[c]),m(h)};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:u("Module:","bit-integrations")}),t.jsxs("select",{onChange:d,name:"module",value:e.module,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:u("Select Module","bit-integrations")}),N==null?void 0:N.map(n=>t.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`))]}),t.jsx("br",{}),s==="changestatus"&&((V=(k=($=e.default)==null?void 0:$.fields)==null?void 0:k.changestatus)==null?void 0:V.fields)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:u("Filter:","bit-integrations")}),t.jsxs("select",{onChange:i,name:"filterstatus",value:e.filterstatus,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:u("Select Filter Type","bit-integrations")}),q==null?void 0:q.map(n=>t.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`))]}),t.jsx("br",{})]}),e.filterstatus==="email"&&(e==null?void 0:e.module)==="changestatus"&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:u("Order Change:","bit-integrations")}),t.jsxs("select",{onChange:j,name:"orderchange",value:e==null?void 0:e.orderchange,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:u("Select Order Change Type","bit-integrations")}),M==null?void 0:M.map(n=>t.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`))]}),t.jsx("br",{})]}),t.jsx("br",{}),l&&t.jsx(le,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.module==="order"&&t.jsxs("div",{className:"tab-box",children:[t.jsx("span",{className:`tab-item ${F.order&&"active"}`,onClick:()=>a("order"),children:"Order"}),t.jsx("span",{className:`tab-item ${F.customer&&"active"}`,onClick:()=>a("customer"),children:"Customer"})]}),e.module==="cancelSubscription"&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx mt-1",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:u("Select Product: ","bit-integrations")}),t.jsx(re,{className:"w-5",defaultValue:e==null?void 0:e.productId,options:((K=e==null?void 0:e.default)==null?void 0:K.allSubscriptionProducts)&&e.default.allSubscriptionProducts.map(n=>({label:n.product_name,value:n.product_id})),onChange:n=>C(n,"productId"),singleSelect:!0}),t.jsx("button",{onClick:()=>w(e,m,o,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${u("Fetch All Subscription product","bit-integrations")}'`},type:"button",disabled:l,children:"↻"})]})]}),(((E=(R=(P=e.default)==null?void 0:P.fields)==null?void 0:R[s])==null?void 0:E.fields)&&s!=="changestatus"||((A=(T=(I=e.default)==null?void 0:I.fields)==null?void 0:T[s])==null?void 0:A.fields)&&s==="changestatus"&&(e==null?void 0:e.filterstatus)!=="email"&&(e==null?void 0:e.filterstatus)||((z=(L=(D=e.default)==null?void 0:D.fields)==null?void 0:L[s])==null?void 0:z.fields)&&s==="changestatus"&&e.filterstatus==="email"&&(e==null?void 0:e.orderchange))&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"mt-4",children:[t.jsx("b",{className:"wdt-100",children:u("Map Fields","bit-integrations")}),t.jsx("button",{onClick:()=>S(e,m,o,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${u("Refresh Fields","bit-integrations")}'`},type:"button",disabled:l,children:"↻"})]}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:u("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:u("WooCommerce Fields","bit-integrations")})})]}),e[s].field_map.map((n,c)=>t.jsx(Y,{i:c,field:n,wcConf:e,formFields:r,setWcConf:m,module:s},`wc-m-${c+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>f(e[s].field_map.length),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),((J=(H=(B=e.default)==null?void 0:B.fields)==null?void 0:H[s])==null?void 0:J.uploadFields)&&s==="product"&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"mt-4",children:[t.jsx("b",{className:"wdt-100",children:u("Map File Upload Fields","bit-integrations")}),t.jsx("button",{onClick:()=>S(e,m,o,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${u("Refresh Fields","bit-integrations")}'`},type:"button",disabled:l,children:"↻"})]}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:u("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:u("WooCommerce Fields","bit-integrations")})})]}),e[s].upload_field_map.map((n,c)=>t.jsx(Y,{i:c,field:n,wcConf:e,formFields:r,setWcConf:m,uploadFields:!0,module:s},`wc-m-${c+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>f(e[s].field_map.length,!0),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),s==="order"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:u("Map Line Items Fields","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:u("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:u("WooCommerce Line Items Fields","bit-integrations")})})]}),(U=e==null?void 0:e.line_item)==null?void 0:U.field_map.map((n,c)=>t.jsx(ce,{i:c,field:n,wcConf:e,formFields:r,setWcConf:m},`wc-m-${c+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>f(e.line_item.field_map.length,!1,"line_item"),className:"icn-btn sh-sm",type:"button",children:"+"})})]})]})}export{xe as W,fe as c,be as h};
