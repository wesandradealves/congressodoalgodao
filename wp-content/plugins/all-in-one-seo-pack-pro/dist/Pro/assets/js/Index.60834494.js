import{S as d}from"./Caret.e5d23aaa.js";import{_ as m,q as u,j as p,k as _,T as f,o as a,a as o,c as l,m as n,C as v,z as h,b as r,B as y}from"./_plugin-vue_export-helper.299eda55.js";const C={emits:["close"],components:{SvgClose:d},props:{classes:{type:Array,default(){return[]}},noHeader:Boolean,isolate:Boolean,allowOverflow:Boolean,confirmation:Boolean},methods:{scrollToElement(){const e=this.$el.getElementsByClassName("component-wrapper")[0];setTimeout(()=>{e&&(e.firstChild.scrollTop=0)},10)},escapeListener(e){e.key==="Escape"&&!this.confirmation&&this.$emit("close")}},mounted(){document.addEventListener("keydown",this.escapeListener),this.scrollToElement(),this.isolate&&document.body.appendChild(this.$el)},beforeUnmount(){document.removeEventListener("click",this.escapeListener)}},k={class:"modal-mask"},$={class:"modal-wrapper"},w={class:"modal-container"},B={key:0,class:"modal-header"},g={class:"modal-body"},E={key:1,class:"modal-container__footer"};function L(e,s,t,T,b,A){const i=u("svg-close");return a(),p(f,{name:"modal"},{default:_(()=>[o("div",{class:y(["aioseo-modal",[{"aioseo-app":t.isolate,"allow-overflow":t.allowOverflow},...t.classes]])},[o("div",k,[o("div",$,[o("div",w,[t.noHeader?r("",!0):(a(),l("div",B,[n(e.$slots,"header",{},()=>[n(e.$slots,"headerTitle"),o("button",{class:"close",onClick:s[1]||(s[1]=v(c=>e.$emit("close"),["stop"]))},[h(i,{onClick:s[0]||(s[0]=c=>e.$emit("close"))})])])])),o("div",g,[n(e.$slots,"body")]),e.$slots.footer?(a(),l("div",E,[n(e.$slots,"footer")])):r("",!0)])])])],2)]),_:3})}const V=m(C,[["render",L]]);export{V as C};
