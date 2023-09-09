import{S as n}from"./LogoGear.5137790f.js";import{_ as o,q as i,c as r,a as t,z as a,o as c}from"./_plugin-vue_export-helper.299eda55.js";const p={components:{SvgAioseoLogoGear:n},data(){return{strings:{boldText:this.$t.sprintf("<strong>%1$s %2$s</strong>","AIOSEO",this.$isPro?"Pro":""),linkText:this.$t.__("Click here to learn more",this.$td)}}},computed:{link(){return this.$t.sprintf('<strong><a href="%1$s" target="_blank" class="text-white">%2$s</a></strong>',this.$links.getDocUrl("restApi"),this.strings.linkText)},upgradeText(){return this.$t.sprintf(this.$t.__("%1$s relies on the WordPress Rest API and your site might have it disabled. %2$s.",this.$td),this.strings.boldText,this.link)}},mounted(){document.body.classList.add("aioseo-has-bar")},beforeUnmount(){document.body.classList.remove("aioseo-has-bar")}},$={class:"aioseo-api-bar"},g={class:"upgrade-text"},m=["innerHTML"];function x(l,_,u,d,h,s){const e=i("svg-aioseo-logo-gear");return c(),r("div",$,[t("div",g,[a(e),t("div",{innerHTML:s.upgradeText},null,8,m)])])}const w=o(p,[["render",x]]);const f={components:{SvgAioseoLogoGear:n},data(){return{strings:{boldText:this.$t.sprintf("<strong>%1$s %2$s</strong>","All in One SEO","Pro"),linkText:this.$t.__("license key now",this.$tdPro),renewLinkText:this.$t.__("Renew your license now",this.$tdPro)}}},computed:{link(){return this.$t.sprintf('<strong><a href="%1$s" class="text-white">%2$s</a></strong>',this.$aioseo.data.isNetworkAdmin?this.$aioseo.urls.aio.networkSettings:this.$aioseo.urls.aio.settings,this.strings.linkText)},renewLink(){return this.$t.sprintf('<strong><a href="%1$s" class="text-white" target="_blank">%2$s</a></strong>',this.$links.utmUrl("expired-license-key-bar","","https://aioseo.com/account/downloads/"),this.strings.renewLinkText)},upgradeText(){return this.$aioseo.license.isExpired?this.$t.sprintf(this.$t.__("You're using %1$s but your license has expired. %2$s.",this.$tdPro),this.strings.boldText,this.renewLink):this.$t.sprintf(this.$t.__("You're using %1$s but no license key has been entered. Add your %2$s.",this.$tdPro),this.strings.boldText,this.link)}},mounted(){document.body.classList.add("aioseo-has-bar")},beforeUnmount(){document.body.classList.remove("aioseo-has-bar")}},k={class:"aioseo-license-key-bar"},y={class:"upgrade-text"},b=["innerHTML"];function v(l,_,u,d,h,s){const e=i("svg-aioseo-logo-gear");return c(),r("div",k,[t("div",y,[a(e),t("div",{innerHTML:s.upgradeText},null,8,b)])])}const A=o(f,[["render",v]]);export{w as C,A as a};
