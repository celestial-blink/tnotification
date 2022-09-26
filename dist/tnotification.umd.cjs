(function(c,g){typeof exports=="object"&&typeof module<"u"?g(exports):typeof define=="function"&&define.amd?define(["exports"],g):(c=typeof globalThis<"u"?globalThis:c||self,g(c.tnotification={}))})(this,function(c){"use strict";const g="",L='<div class="twrapper-message" id="{{data-position}}"></div>',k="",E=`<div class="tmessage {{data-theme}}">\r
    <i class="fas {{data-icon}} tmessage__icon"></i>\r
    <section class="tmessage__content" id="talk">\r
        <div>\r
            <h3>{{data-tittle-content}}</h3>\r
            <p>{{data-text-content}}</p>\r
        </div>\r
    </section>\r
    <button class="tmessage__close">\r
        <i class="fas fa-times-circle"></i>\r
    </button>\r
</div>`,p=({data:s={},template:e=""})=>{let r=e;return Object.entries(s).forEach(a=>{r=r.replaceAll(a[0],a[1])}),r},u=({title:s="",content:e="",type:r="",animateIn:a="",animateOut:n="",timeout:i=8e3,removeEmpty:l=!1})=>{var w,C,_;const o={error:"fa-times",warning:"fa-exclamation",success:"fa-check",info:"fa-info"},T={error:`tmessage--error ${a}`,warning:`tmessage--warning ${a}`,success:`tmessage--success ${a}`,info:`tmessage--info ${a}`},O=p({data:{"{{data-tittle-content}}":s,"{{data-text-content}}":e,"{{data-icon}}":(w=o[r==null?void 0:r.toLowerCase()])!=null?w:"","{{data-theme}}":(C=T[r==null?void 0:r.toLowerCase()])!=null?C:""},template:E}),d=new DOMParser().parseFromString(O,"text/html").body.firstChild,S=new Event("beginBuild"),f=t=>{t.classList.replace(a,n)},h=t=>{setTimeout(v=>{var m;((m=t==null?void 0:t.textContent)==null?void 0:m.trim())===""&&l&&t.remove()},100,t)},$=t=>{setTimeout(v=>{var m;(m=t.target.querySelector("button"))==null||m.removeEventListener("click",b),f(t.target),setTimeout(A=>{h(t.target.closest(".twrapper-message")),t.target.remove()},390,t)},i,t)},b=t=>{f(t.target.parentElement),setTimeout(v=>{h(t.target.closest(".twrapper-message")),t.target.parentElement.remove()},390,t)};return d.addEventListener("beginBuild",$,{once:!0}),(_=d.querySelector("button"))==null||_.addEventListener("click",b,{once:!0}),d.dispatchEvent(S),d};function x(s){var n;const r=(n={bottomleft:"twrapper-message--bottom-left",bottomcenter:"twrapper-message--bottom-center",bottomright:"twrapper-message--bottom-right",topleft:"twrapper-message--top-left",topcenter:"twrapper-message--top-center",topright:"twrapper-message--top-right"}[s==null?void 0:s.toLowerCase()])!=null?n:"twrapper-message--bottom-left";let a=document.getElementById(r);if(!a){const i=new DOMParser,l=p({data:{"{{data-position}}":r},template:L}),o=i.parseFromString(l,"text/html").body.firstChild;document.body.insertAdjacentElement("beforeend",o),a=o}return a}const M=({data:s={},position:e="bottomleft"})=>{const r={get left(){return"animate--in-left"},get right(){return"animate--in-right"},get bottomleft(){return this.left},get bottomright(){return this.right},bottomcenter:"animate--in-bottom-center",topcenter:"animate--in-top-center",get topleft(){return this.left},get topright(){return this.right}},a={get left(){return"animate--out-left"},get right(){return"animate--out-right"},get bottomleft(){return this.left},get bottomright(){return this.right},bottomcenter:"animate--out-bottom-center",topcenter:"animate--out-top-center",get topleft(){return this.left},get topright(){return this.right}},n=r[e==null?void 0:e.toLowerCase()],i=a[e==null?void 0:e.toLowerCase()],l={...s,...n&&{animateIn:n},...i&&{animateOut:i}},o=x(e);(e==null?void 0:e.toLocaleLowerCase())==="topcenter"?o.prepend(u(l)):o.appendChild(u(l))};c.addMessage=M,Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
