var z=Object.defineProperty;var x=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var g=(e,s,i)=>s in e?z(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i,m=(e,s)=>{for(var i in s||(s={}))L.call(s,i)&&g(e,i,s[i]);if(x)for(var i of x(s))_.call(s,i)&&g(e,i,s[i]);return e};import{r as j,j as t}from"./main-390.js";import{_ as r,L as w}from"./bi.126.82.js";import{m as E}from"./bi.828.817.js";import{T as k,t as I}from"./bi.243.742.js";function G({mailRelayConf:e,setMailRelayConf:s,step:i,setStep:N,loading:o,setLoading:v,isInfo:a}){const[c,A]=j.useState(!1),[d,h]=j.useState({name:"",auth_token:""}),{mailRelay:n}=I,T=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,N(2)},b=u=>{const l=m({},e),p=m({},d);p[u.target.name]="",l[u.target.name]=u.target.value,h(p),s(l)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:i===1&&900,height:i===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(k,{title:n==null?void 0:n.title,youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(k,{title:n==null?void 0:n.title,docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations"),disabled:a}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("Your Domain Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"domain",value:e.domain,type:"text",placeholder:r("Your Account","bit-integrations"),disabled:a}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.domain}),t.jsx("small",{className:"d-blk mt-3",children:r("Example: bitapps.ipzmarketing.com","bit-integrations")}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("API Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"auth_token",value:e.auth_token,type:"text",placeholder:r("API Token...","bit-integrations"),disabled:a}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.auth_token}),e.domain&&t.jsxs("small",{className:"d-blk mt-3",children:[r("To Get API token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:`https://${e.domain}.ipzmarketing.com/admin/api_keys`,target:"_blank",rel:"noreferrer",children:r("MailRelay API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!a&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>E(e,s,h,A,o,v,"authentication"),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:c||o.auth,children:[c?r("Authorized ✔","bit-integrations"):r("Authorize","bit-integrations"),o.auth&&t.jsx(w,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:T,className:"btn ml-auto btcd-btn-lg green sh-sm flx",type:"button",disabled:!c,children:[r("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{G as default};
