var w=Object.defineProperty;var k=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var f=(r,s,i)=>s in r?w(r,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[s]=i,d=(r,s)=>{for(var i in s||(s={}))P.call(s,i)&&f(r,i,s[i]);if(k)for(var i of k(s))T.call(s,i)&&f(r,i,s[i]);return r};import{r as u,j as t}from"./main-390.js";import{B as E}from"./bi.217.726.js";import{_ as a,L as N,c as B}from"./bi.126.82.js";import{r as C}from"./bi.799.733.js";import{T as A,t as K}from"./bi.243.742.js";function q({formID:r,enchargeConf:s,setEnchargeConf:i,step:x,setstep:_,setSnackbar:y,isInfo:p}){const[l,z]=u.useState(!1),[b,g]=u.useState({name:"",api_key:""}),[I,v]=u.useState(!1),[c,h]=u.useState(!1),{encharge:e}=K,L=()=>{const n=d({},s);if(!n.name||!n.api_key){g({name:n.name?"":a("Integration name cann't be empty","bit-integrations"),api_key:n.api_key?"":a("API Key cann't be empty","bit-integrations")});return}h("auth");const m={api_key:n.api_key};B(m,"encharge_authorize").then(o=>{o!=null&&o.success&&(z(!0),y({show:!0,msg:a("Authorized Successfully","bit-integrations")})),v(!0),h(!1)})},j=n=>{const m=d({},s),o=d({},b);o[n.target.name]="",m[n.target.name]=n.target.value,g(o),i(m)},S=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),_(2),C(s,i,h,y)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:x===1&&900,height:x===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(A,{title:e==null?void 0:e.title,youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(A,{title:e==null?void 0:e.title,docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"name",value:s.name,type:"text",placeholder:a("Integration Name...","bit-integrations"),disabled:p}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:b.name}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"api_key",value:s.api_key,type:"text",placeholder:a("API key","bit-integrations"),disabled:p}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:b.api_key}),t.jsxs("small",{className:"d-blk mt-5",children:[a("To get API , Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.encharge.io/account/info",target:"_blank",rel:"noreferrer",children:a("Encharge API Console","bit-integrations")})]}),c==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(N,{size:25,clr:"#022217",className:"mr-2"}),"Checking API Key!!!"]}),I&&!l&&!c&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),"Sorry, API key is invalid"]}),!p&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:L,className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:l||c,children:[l?a("Authorized ✔","bit-integrations"):a("Authorize","bit-integrations"),c&&t.jsx(N,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>S(),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!l,children:[a("Next","bit-integrations"),t.jsx(E,{className:"ml-1 rev-icn"})]})]})]})}export{q as default};
