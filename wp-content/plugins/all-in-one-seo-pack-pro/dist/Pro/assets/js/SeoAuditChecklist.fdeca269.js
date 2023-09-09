import{m as y,c as C,b as S}from"./vuex.esm-bundler.f966fce5.js";import{C as R}from"./Card.019b86ae.js";import{C as L}from"./Tabs.64ef3302.js";import{C as E}from"./SeoSiteAnalysisResults.26c0ecc7.js";import{p as I}from"./popup.b60b699f.js";import"./default-i18n.0e8bc810.js";import{u as B,S as M}from"./SeoSiteScore.85505ada.js";import"./WpTable.43babaf5.js";import"./constants.d64d7051.js";import{_ as f,q as t,o as i,c,z as n,b as u,a as s,t as a,j as g,k as r,x as k,B as G}from"./_plugin-vue_export-helper.299eda55.js";import"./index.c7acbe5b.js";import"./SaveChanges.176fcae6.js";import{C as w}from"./Blur.de294544.js";import{C as D}from"./Index.b7996ba0.js";import{S as H}from"./Book.5a25a725.js";import{C as K}from"./Tooltip.daabe115.js";import{S as N}from"./Refresh.d9d4e2fa.js";import{S as U}from"./index.f123d27f.js";import"./helpers.73050afe.js";import"./Caret.e5d23aaa.js";import"./Slide.46d23bfb.js";import"./TruSeoScore.1eab6bb1.js";import"./Information.9cd2e1af.js";import"./GoogleSearchPreview.4fcde61c.js";import"./html.5f1b4643.js";import"./index.ca21de53.js";import"./client.e7a26247.js";import"./_commonjsHelpers.f84db168.js";import"./Gear.3ba8042b.js";import"./params.597cd0f5.js";import"./Index.c0b708e6.js";import"./Row.0ab5735c.js";import"./RequiresUpdate.fe231e49.js";import"./postContent.42ceb47d.js";import"./cleanForSlug.a98315ee.js";import"./Index.60834494.js";import"./Index.10bfbea1.js";const P={components:{CoreSiteScore:D,SvgBook:H},props:{score:Number,loading:Boolean,description:String,summary:{type:Object,default(){return{}}}},data(){return{strings:{yourOverallSiteScore:this.$t.__("Your Overall Site Score",this.$td),goodResult:this.$t.sprintf(this.$t.__("A very good score is between %1$s%3$d and %4$d%2$s.",this.$td),"<strong>","</strong>",50,75),forBestResults:this.$t.sprintf(this.$t.__("For best results, you should strive for %1$s%3$d and above%2$s.",this.$td),"<strong>","</strong>",70),anErrorOccurred:this.$t.__("An error occurred while analyzing your site.",this.$td),criticalIssues:this.$t.__("Important Issues",this.$td),warnings:this.$t.__("Warnings",this.$td),recommendedImprovements:this.$t.__("Recommended Improvements",this.$td),goodResults:this.$t.__("Good Results",this.$td),completeSiteAuditChecklist:this.$t.__("Complete Site Audit Checklist",this.$td),readUltimateSeoGuide:this.$t.__("Read the Ultimate WordPress SEO Guide",this.$td)}}},computed:{...y(["analyzeError"]),getError(){switch(this.analyzeError){case"invalid-url":return this.$t.__("The URL provided is invalid.",this.$td);case"missing-content":return this.$t.sprintf("%1$s %2$s",this.$t.__("We were unable to parse the content for this site.",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"seoAnalyzerIssues",!0));case"invalid-token":return this.$t.sprintf(this.$t.__("Your site is not connected. Please connect to %1$s, then try again.",this.$td),"AIOSEO")}return this.analyzeError}}},W={class:"aioseo-site-score-analyze"},V={key:0,class:"aioseo-seo-site-score-score"},q={key:1,class:"aioseo-seo-site-score-description"},Y=["innerHTML"],j=["innerHTML"],F={class:"d-flex"},Q=["href"],J={key:2,class:"analyze-errors"},X=["innerHTML"];function Z(e,$,m,h,o,l){const d=t("core-site-score"),_=t("svg-book");return i(),c("div",W,[e.analyzeError?u("",!0):(i(),c("div",V,[n(d,{loading:m.loading,score:m.score,description:m.description,strokeWidth:1.75},null,8,["loading","score","description"])])),e.analyzeError?u("",!0):(i(),c("div",q,[s("h2",null,a(o.strings.yourOverallSiteScore),1),s("div",{innerHTML:o.strings.goodResult},null,8,Y),s("div",{innerHTML:o.strings.forBestResults},null,8,j),s("div",F,[n(_),s("a",{href:e.$links.getDocUrl("ultimateGuide"),target:"_blank"},a(o.strings.readUltimateSeoGuide),9,Q)])])),e.analyzeError?(i(),c("div",J,[s("h3",null,a(o.strings.anErrorOccurred),1),s("span",{innerHTML:l.getError},null,8,X)])):u("",!0)])}const x=f(P,[["render",Z]]);const ee={setup(){const{strings:e}=B();return{strings:e}},components:{CoreBlur:w,CoreSiteScoreAnalyze:x},mixins:[M],data(){return{score:0}},watch:{"internalOptions.internal.siteAnalysis.score"(e){this.score=e}},computed:{...y(["internalOptions","options","analyzing"]),...C(["goodCount","recommendedCount","criticalCount","licenseKey"]),getSummary(){return{recommended:this.recommendedCount(),critical:this.criticalCount(),good:this.goodCount()}}},methods:{...S(["saveConnectToken","runSiteAnalyzer"]),openPopup(e){I(e,this.connectWithAioseo,600,630,!0,["token"],this.completedCallback,this.closedCallback)},completedCallback(e){return this.saveConnectToken(e.token)},closedCallback(e){e&&this.runSiteAnalyzer(),this.$store.commit("analyzing",!0)}},mounted(){!this.internalOptions.internal.siteAnalysis.score&&this.licenseKey&&(this.$store.commit("analyzing",!0),this.runSiteAnalyzer()),this.score=this.internalOptions.internal.siteAnalysis.score}},te={class:"aioseo-seo-site-score"},se={key:1,class:"aioseo-seo-site-score-cta"},oe=["href"];function ne(e,$,m,h,o,l){const d=t("core-site-score-analyze"),_=t("core-blur");return i(),c("div",te,[e.licenseKey?u("",!0):(i(),g(_,{key:0},{default:r(()=>[n(d,{score:85,description:e.description},null,8,["description"])]),_:1})),e.licenseKey?u("",!0):(i(),c("div",se,[s("a",{href:e.$aioseo.urls.aio.settings},a(h.strings.enterLicenseKey),9,oe),k(" "+a(h.strings.toSeeYourSiteScore),1)])),e.licenseKey?(i(),g(d,{key:2,score:o.score,description:e.description,loading:e.analyzing,summary:l.getSummary},null,8,["score","description","loading","summary"])):u("",!0)])}const re=f(ee,[["render",ne]]);const ie={components:{CoreCard:R,CoreMainTabs:L,CoreSeoSiteAnalysisResults:E,CoreSeoSiteScoreAnalyze:re,CoreTooltip:K,SvgRefresh:N,SvgCircleQuestionMark:U},data(){return{internalDebounce:!1,strings:{completeSeoChecklist:this.$t.__("Complete SEO Checklist",this.$td),refreshResults:this.$t.__("Refresh Results",this.$td),cardDescription:this.$t.__("These are the results our SEO Analzyer has generated after analyzing the homepage of your website.",this.$td)+" "+this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"seoAnalyzer",!0)}}},computed:{...y(["internalOptions","options","settings","analyzing"]),...C(["getSiteAnalysisResults","allItemsCount","criticalCount","recommendedCount","goodCount","licenseKey"]),tabs(){const e=this.internalOptions.internal.siteAnalysis;return[{slug:"all-items",label:this.$t.__("All Items",this.$td),analyze:{classColor:"black",count:e.score?this.allItemsCount():0}},{slug:"critical",label:this.$t.__("Important Issues",this.$td),analyze:{classColor:"red",count:e.score?this.criticalCount():0}},{slug:"recommended-improvements",label:this.$t.__("Recommended Improvements",this.$td),analyze:{classColor:"blue",count:e.score?this.recommendedCount():0}},{slug:"good-results",label:this.$t.__("Good Results",this.$td),analyze:{classColor:"green",count:e.score?this.goodCount():0}}]}},methods:{...S(["changeTab","runSiteAnalyzer"]),processChangeTab(e){this.internalDebounce||(this.internalDebounce=!0,this.changeTab({slug:"seoAuditChecklist",value:e}),setTimeout(()=>{this.internalDebounce=!1},50))},refresh(){this.$store.commit("analyzing",!0),this.runSiteAnalyzer({refresh:!0})}}},ae={class:"aioseo-seo-audit-checklist"},le=["innerHTML"],ce={class:"label"};function ue(e,$,m,h,o,l){const d=t("core-seo-site-score-analyze"),_=t("core-card"),b=t("svg-circle-question-mark"),v=t("core-tooltip"),z=t("svg-refresh"),A=t("base-button"),T=t("core-main-tabs"),O=t("core-seo-site-analysis-results");return i(),c("div",ae,[n(_,{slug:"connectOrScore","hide-header":"","no-slide":"",toggles:!1},{default:r(()=>[n(d)]),_:1}),(e.$isPro&&e.licenseKey||e.internalOptions.internal.siteAnalysis.connectToken)&&e.internalOptions.internal.siteAnalysis.score?(i(),g(_,{key:0,slug:"completeSeoChecklist","no-slide":"",toggles:!1},{header:r(()=>[s("span",null,a(o.strings.completeSeoChecklist),1),n(v,null,{tooltip:r(()=>[s("span",{innerHTML:o.strings.cardDescription},null,8,le)]),default:r(()=>[n(b)]),_:1})]),"header-extra":r(()=>[n(A,{class:"refresh-results",type:"gray",size:"small",onClick:l.refresh,loading:e.analyzing},{default:r(()=>[n(z),k(" "+a(o.strings.refreshResults),1)]),_:1},8,["onClick","loading"])]),tabs:r(()=>[n(T,{tabs:l.tabs,showSaveButton:!1,active:e.settings.internalTabs.seoAuditChecklist,internal:"",onChanged:l.processChangeTab,"skinny-tabs":""},{"var-tab":r(({tab:p})=>[s("span",{class:G(["round",p.analyze.classColor])},a(p.analyze.count||0),3),s("span",ce,a(p.label),1)]),_:1},8,["tabs","active","onChanged"])]),default:r(()=>[n(O,{section:e.settings.internalTabs.seoAuditChecklist,"all-results":e.getSiteAnalysisResults,"show-instructions":""},null,8,["section","all-results"])]),_:1})):u("",!0)])}const Fe=f(ie,[["render",ue]]);export{Fe as default};
