import{c as ar,g as or,d as ir,o as ur,a as cr,b as sr,e as lr,f as b,h as j,u as A,m as fr,i as dr,n as mr,j as vr,p as pr,k as hr,_ as gr}from"./--5e376394.js";import{I as H}from"./ImmersiveButton-85e85c92.js";var O={exports:{}};(function(v,S){(function(p,x){v.exports=x()})(ar,function(){var p=document,x=p.createTextNode.bind(p);function y(r,n,t){r.style.setProperty(n,t)}function P(r,n){return r.appendChild(n)}function h(r,n,t,e){var a=p.createElement("span");return n&&(a.className=n),t&&(!e&&a.setAttribute("data-"+n,t),a.textContent=t),r&&P(r,a)||a}function C(r,n){return r.getAttribute("data-"+n)}function _(r,n){return!r||r.length==0?[]:r.nodeName?[r]:[].slice.call(r[0].nodeName?r:(n||p).querySelectorAll(r))}function k(r){for(var n=[];r--;)n[r]=[];return n}function f(r,n){r&&r.some(n)}function M(r){return function(n){return r[n]}}function B(r,n,t){var e="--"+n,a=e+"-index";f(t,function(o,i){Array.isArray(o)?f(o,function(u){y(u,a,i)}):y(o,a,i)}),y(r,e+"-total",t.length)}var T={};function I(r,n,t){var e=t.indexOf(r);if(e==-1)t.unshift(r),f(T[r].depends,function(o){I(o,r,t)});else{var a=t.indexOf(n);t.splice(e,1),t.splice(a,0,r)}return t}function l(r,n,t,e){return{by:r,depends:n,key:t,split:e}}function V(r){return I(r,0,[]).map(M(T))}function s(r){T[r.by]=r}function E(r,n,t,e,a){r.normalize();var o=[],i=document.createDocumentFragment();e&&o.push(r.previousSibling);var u=[];return _(r.childNodes).some(function(c){if(c.tagName&&!c.hasChildNodes()){u.push(c);return}if(c.childNodes&&c.childNodes.length){u.push(c),o.push.apply(o,E(c,n,t,e,a));return}var m=c.wholeText||"",D=m.trim();D.length&&(m[0]===" "&&u.push(x(" ")),f(D.split(t),function(tr,er){er&&a&&u.push(h(i,"whitespace"," ",a));var F=h(i,n,tr);o.push(F),u.push(F)}),m[m.length-1]===" "&&u.push(x(" ")))}),f(u,function(c){P(i,c)}),r.innerHTML="",P(r,i),o}var d=0;function z(r,n){for(var t in n)r[t]=n[t];return r}var w="words",G=l(w,d,"word",function(r){return E(r,"word",/\s+/,0,1)}),R="chars",U=l(R,[w],"char",function(r,n,t){var e=[];return f(t[w],function(a,o){e.push.apply(e,E(a,"char","",n.whitespace&&o))}),e});function N(r){r=r||{};var n=r.key;return _(r.target||"[data-splitting]").map(function(t){var e=t["🍌"];if(!r.force&&e)return e;e=t["🍌"]={el:t};var a=V(r.by||C(t,"splitting")||R),o=z({},r);return f(a,function(i){if(i.split){var u=i.by,c=(n?"-"+n:"")+i.key,m=i.split(t,o,e);c&&B(t,c,m),e[u]=m,t.classList.add(u)}}),t.classList.add("splitting"),e})}function q(r){r=r||{};var n=r.target=h();return n.innerHTML=r.content,N(r),n.outerHTML}N.html=q,N.add=s;function L(r,n,t){var e=_(n.matching||r.children,r),a={};return f(e,function(o){var i=Math.round(o[t]);(a[i]||(a[i]=[])).push(o)}),Object.keys(a).map(Number).sort(J).map(M(a))}function J(r,n){return r-n}var Y=l("lines",[w],"line",function(r,n,t){return L(r,{matching:t[w]},"offsetTop")}),$=l("items",d,"item",function(r,n){return _(n.matching||r.children,r)}),K=l("rows",d,"row",function(r,n){return L(r,n,"offsetTop")}),Q=l("cols",d,"col",function(r,n){return L(r,n,"offsetLeft")}),X=l("grid",["rows","cols"]),g="layout",Z=l(g,d,d,function(r,n){var t=n.rows=+(n.rows||C(r,"rows")||1),e=n.columns=+(n.columns||C(r,"columns")||1);if(n.image=n.image||C(r,"image")||r.currentSrc||r.src,n.image){var a=_("img",r)[0];n.image=a&&(a.currentSrc||a.src)}n.image&&y(r,"background-image","url("+n.image+")");for(var o=t*e,i=[],u=h(d,"cell-grid");o--;){var c=h(u,"cell");h(c,"cell-inner"),i.push(c)}return P(r,u),i}),W=l("cellRows",[g],"row",function(r,n,t){var e=n.rows,a=k(e);return f(t[g],function(o,i,u){a[Math.floor(i/(u.length/e))].push(o)}),a}),rr=l("cellColumns",[g],"col",function(r,n,t){var e=n.columns,a=k(e);return f(t[g],function(o,i){a[i%e].push(o)}),a}),nr=l("cells",["cellRows","cellColumns"],"cell",function(r,n,t){return t[g]});return s(G),s(U),s(Y),s($),s(K),s(Q),s(X),s(Z),s(W),s(rr),s(nr),N})})(O);var _r=O.exports;const wr=or(_r),br=v=>(pr("data-v-d0e5593e"),v=v(),hr(),v),xr={class:"main-wrapper"},yr=br(()=>b("div",{class:"error-wrapper"},[b("span",{"data-splitting":"chars"},"404 Not Found"),b("span",{class:"subtext"},"页面不见了，返回首页重试一下吧")],-1)),Pr={class:"btn-wrapper"},Cr=ir({__name:"ErrorPage",setup(v){return ur(()=>{const S=cr();S.value=!1,wr()}),(S,p)=>(sr(),lr("div",{class:mr(["wrapper",A(vr)()?"mobile":""])},[b("div",xr,[yr,b("div",Pr,[j(H,{style:{background:"white !important"},text:"返回首页",path:A(fr)("index")},null,8,["path"]),j(H,{style:{background:"white !important"},text:"找点乐子",path:A(dr)()},null,8,["path"])])])],2))}});const Tr=gr(Cr,[["__scopeId","data-v-d0e5593e"]]);export{Tr as default};
