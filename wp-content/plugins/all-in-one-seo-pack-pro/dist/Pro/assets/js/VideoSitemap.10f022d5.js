import{A}from"./AddonConditions.5fda9fa9.js";import"./default-i18n.cb62c1e5.js";import"./constants.3cff9bad.js";import{n as C,d as O,u as B}from"./links.138c5ae5.js";import{r as a,o as d,c as v,g as s,w as i,d as u,B as R,a as r,y as l,C as c,b as _}from"./vue.runtime.esm-bundler.a2ae84e1.js";import{_ as f}from"./_plugin-vue_export-helper.d7c6d548.js";/* empty css                                              */import{u as x,B as I}from"./Blur.2f2f5de9.js";import{C as L}from"./Card.c35b3a6c.js";import{R as D}from"./RequiredPlans.57b9c43d.js";import{C as M}from"./ProBadge.fa206e5a.js";import{C as N}from"./Index.a392ec8a.js";import{C as U}from"./index.63c9ec9d.js";import"./Caret.833cbb47.js";/* empty css                                            *//* empty css                                              */import{J as H}from"./JsonValues.870a4901.js";import{u as F}from"./CommonSitemap.fda5f75e.js";import{B as E}from"./Checkbox.349747c9.js";import{B as W}from"./RadioToggle.48072aa8.js";import{C as z}from"./ExcludePosts.8f04d65e.js";import{C as K}from"./PostTypeOptions.9daaec29.js";import{C as Y}from"./SettingsRow.7db26b8a.js";import{S as q}from"./External.a8a08ac9.js";import"./addons.3740efb6.js";import"./upperFirst.fa56af60.js";import"./_stringToArray.4de3b1f3.js";import"./toString.55d4b1ab.js";import"./isArrayLikeObject.7cab3d31.js";import"./Blur.718f6c18.js";import"./Tooltip.f932ed03.js";import"./Slide.b264e916.js";import"./license.ff32fc77.js";import"./Row.eead99c7.js";import"./Checkmark.f214118b.js";import"./AddPlus.c4e409c7.js";import"./HighlightToggle.8b034f4a.js";import"./Radio.4c8191fb.js";const j={setup(){const{strings:t}=x();return{composableStrings:t}},mixins:[A],components:{Blur:I,CoreCard:L},data(){return{addonSlug:"aioseo-video-sitemap",strings:C(this.composableStrings,{videoSitemapHeader:this.$t.__("Enable Video Sitemap on your Site",this.$tdPro),learnMoreText:this.$t.__("Learn more about Video Sitemaps",this.$tdPro)})}},computed:{ctaButtonText(){return this.shouldShowUpdate?this.$t.__("Update Video Sitemap",this.$tdPro):this.$t.__("Activate Video Sitemap",this.$tdPro)}}};function J(t,n,b,e,o,g){const h=a("blur"),p=a("core-card");return d(),v("div",null,[s(p,{slug:"videoSitemap","header-text":o.strings.video},{default:i(()=>[s(h),(d(),u(R(t.ctaComponent),{"addon-slug":o.addonSlug,"cta-header":o.strings.videoSitemapHeader,"cta-description":o.strings.description,"cta-button-text":g.ctaButtonText,"learn-more-text":o.strings.learnMoreText,"learn-more-link":t.$links.getDocUrl("videoSitemaps"),"feature-list":[o.strings.customFieldSupport,o.strings.exclude]},null,8,["addon-slug","cta-header","cta-description","cta-button-text","learn-more-text","learn-more-link","feature-list"]))]),_:1},8,["header-text"])])}const Q=f(j,[["render",J]]);const X={setup(){const{strings:t}=x();return{strings:t}},components:{Blur:I,RequiredPlans:D,CoreCard:L,CoreProBadge:M,Cta:N}},Z={class:"aioseo-video-sitemap-lite"};function ee(t,n,b,e,o,g){const h=a("core-pro-badge"),p=a("blur"),S=a("required-plans"),P=a("cta"),y=a("core-card");return d(),v("div",Z,[s(y,{slug:"videoSitemap",noSlide:!0},{header:i(()=>[r("span",null,l(e.strings.video),1),s(h)]),default:i(()=>[s(p),s(P,{"feature-list":[e.strings.customFieldSupport,e.strings.exclude],"cta-link":t.$links.getPricingUrl("video-sitemap","video-sitemap-upsell"),"button-text":e.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("video-sitemap",null,"home")},{"header-text":i(()=>[c(l(e.strings.ctaHeader),1)]),description:i(()=>[s(S,{addon:"aioseo-video-sitemap"}),c(" "+l(e.strings.description),1)]),_:1},8,["feature-list","cta-link","button-text","learn-more-link"])]),_:1})])}const te=f(X,[["render",ee]]);const oe={setup(){const{validateLinksPerIndex:t}=F(),{strings:n}=x();return{optionsStore:O(),rootStore:B(),composableStrings:n,validateLinksPerIndex:t}},components:{BaseCheckbox:E,BaseRadioToggle:W,CoreAlert:U,CoreCard:L,CoreExcludePosts:z,CorePostTypeOptions:K,CoreSettingsRow:Y,SvgExternal:q},mixins:[H],data(){return{pagePostOptions:[],strings:C(this.composableStrings,{additionalPages:this.$t.__("Additional Pages",this.$tdPro),additionalPagesTooltip:this.$t.__("You can use this section to add any URLs to your sitemap which aren’t a part of your WordPress installation. For example, if you have a contact form that you would like to be included on your sitemap you can enter the information manually.",this.$tdPro),sitemapSettings:this.$t.__("Video Sitemap Settings",this.$tdPro),enableSitemapIndexes:this.$t.__("Enable Sitemap Indexes",this.$tdPro),sitemapIndexes:this.$t.__("Organize sitemap entries into distinct files in your sitemap. We recommend you enable this setting if your sitemap contains more than 1,000 URLs.",this.$tdPro),linksPerSitemap:this.$t.__("Links Per Sitemap",this.$tdPro),maxLinks:this.$t.__("Allows you to specify the maximum number of posts in a sitemap (up to 50,000).",this.$tdPro),postTypes:this.$t.__("Post Types",this.$tdPro),taxonomies:this.$t.__("Taxonomies",this.$tdPro),includeAllPostTypes:this.$t.__("Include All Post Types",this.$tdPro),selectPostTypes:this.$t.__("Select which Post Types appear in your sitemap.",this.$tdPro),includeAllTaxonomies:this.$t.__("Include All Taxonomies",this.$tdPro),selectTaxonomies:this.$t.__("Select which Taxonomies appear in your sitemap. Categories and Tags are excluded by default since these do not support video embedding.",this.$tdPro),includeCustomFields:this.$t.__("Include Custom Fields",this.$tdPro),includeCustomFieldsDescription:this.$t.__("Enable this option to look for videos in custom fields as well.",this.$tdPro),advancedSettings:this.$t.__("Advanced Settings",this.$tdPro),excludePostsPages:this.$t.__("Exclude Posts / Pages",this.$tdPro),excludeTerms:this.$t.__("Exclude Terms",this.$tdPro),excludeTermsDescription:this.$t.__("Any posts that are assigned to these terms will also be excluded from your sitemap.",this.$tdPro),priorityScore:this.$t.__("Priority Score",this.$tdPro),dynamicallyGenerate:this.$t.__("Dynamically Generate",this.$tdPro),dynamicallyGenerateDescription:this.$t.__("Dynamically creates the Video Sitemap instead of using a static file.",this.$tdPro),videoEmbedSettings:this.$t.__("Video Embed Settings",this.$tdPro),embedSettingsTooltip:this.$t.__("This section allows you to manage your video embeds, such as features for Facebook or making them responsive to automatically fit your content width.",this.$tdPro),embed:this.$t.__("Embed",this.$tdPro),playDirectly:this.$t.__("Allow videos to be played directly on other websites, such as Facebook or Twitter.",this.$tdPro),responsive:this.$t.sprintf(this.$t.__("Try to make videos responsive using %1$s?",this.$tdPro),'<a href="http://fitvidsjs.com/" target="_blank">FitVids.js</a>'),contentWidth:this.$t.__("Content Width",this.$tdPro),contentWidthDescription:this.$t.__("This defaults to your theme's content width, but if it's empty, setting a value here will make sure videos are embedded with the right width.",this.$tdPro),wistiaDomain:this.$t.__("Wistia Domain",this.$tdPro),wistiaDomainDescription:this.$t.__("If you use Wistia in combination with a custom domain, set this to the domain name you use for your Wistia videos. Don't include https: or slashes as they are not needed.",this.$tdPro),embedlyApiKey:this.$t.__("Embedly API Key",this.$tdPro),embedlyApiKeyDescription:this.$t.sprintf(this.$t.__("By default, we try to provide enriched information about your videos. A lot of video services are supported by default. For those services which aren't supported, we can try to retrieve enriched video information using %1$s. If you want to use this option, you'll need to sign up for a (free) %2$s account and provide the API key you receive.",this.$tdPro),'<a href="https://embed.ly/" target="_blank">embed.ly</a>','<a href="https://embed.ly/" target="_blank">embed.ly</a>'),warningLinksPerSitemap:this.$t.__("We recommend setting the amount of URLs per sitemap index to 1,000 or less. The more links, the longer it will take for the sitemap to load.",this.$tdPro),warningStaticRegeneration:this.$t.__("Your static sitemap is currently being regenerated. This may take some time based on the size of your site. This may also cause the sitemap content to look outdated.",this.$tdPro)})}},computed:{getFrequencyOptions(){return[{label:this.$t.__("default",this.$tdPro),value:"default"}].concat(this.$constants.FREQUENCY_OPTIONS)},getPriorityOptions(){return[{label:this.$t.__("default",this.$tdPro),value:"default"}].concat(this.$constants.PRIORITY_OPTIONS)},getExcludedTaxonomies(){return["category","post_tag"]},noOptions(){return this.type==="posts"?this.strings.noOptionsPosts:this.strings.noOptionsTerms}},methods:{processGetPagesPosts(t){return this.optionsStore.getObjects(t).then(n=>{this.pagePostOptions=n.body.posts})}}},se={class:"aioseo-video-sitemap"},ie={class:"aioseo-settings-row aioseo-section-description"},ne=["innerHTML"],ae={class:"aioseo-sitemap-preview"},re={class:"aioseo-description"},le=["innerHTML"],de={class:"aioseo-description"},pe=["innerHTML"],me={class:"aioseo-description"},ce=["innerHTML"],ue={class:"aioseo-description"},_e=["innerHTML"],he={class:"aioseo-description"},ge=["innerHTML"],Se={class:"aioseo-description"},ye={class:"aioseo-description"},ve=["innerHTML"],fe={class:"aioseo-description"},be=["innerHTML"];function Pe(t,n,b,e,o,g){const h=a("base-toggle"),p=a("core-settings-row"),S=a("svg-external"),P=a("base-button"),y=a("core-alert"),T=a("core-card"),k=a("base-radio-toggle"),G=a("base-input"),$=a("base-checkbox"),V=a("core-post-type-options"),w=a("core-exclude-posts");return d(),v("div",se,[s(T,{slug:"videoSitemap","header-text":o.strings.video},{default:i(()=>[r("div",ie,[c(l(o.strings.description)+" ",1),r("span",{innerHTML:t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"videoSitemaps",!0)},null,8,ne)]),s(p,{name:o.strings.enableSitemap},{content:i(()=>[s(h,{modelValue:e.optionsStore.options.sitemap.video.enable,"onUpdate:modelValue":n[0]||(n[0]=m=>e.optionsStore.options.sitemap.video.enable=m)},null,8,["modelValue"])]),_:1},8,["name"]),e.optionsStore.options.sitemap.video.enable?(d(),u(p,{key:0,name:t.$constants.GLOBAL_STRINGS.preview},{content:i(()=>[r("div",ae,[s(P,{size:"medium",type:"blue",tag:"a",href:e.rootStore.aioseo.urls.videoSitemapUrl,target:"_blank"},{default:i(()=>[s(S),c(" "+l(o.strings.openSitemap),1)]),_:1},8,["href"])]),r("div",re,[c(l(o.strings.noIndexDisplayed)+" "+l(o.strings.doYou404)+" ",1),r("span",{innerHTML:t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"blankSitemap",!0)},null,8,le)]),!e.optionsStore.options.deprecated.sitemap.video.advancedSettings.dynamic&&e.rootStore.aioseo.scheduledActions.sitemap&&e.rootStore.aioseo.scheduledActions.sitemap.includes("staticSitemapRegeneration")?(d(),u(y,{key:0,class:"static-regeneration-notice",type:"blue"},{default:i(()=>[c(l(o.strings.warningStaticRegeneration),1)]),_:1})):_("",!0)]),_:1},8,["name"])):_("",!0)]),_:1},8,["header-text"]),e.optionsStore.options.sitemap.video.enable?(d(),u(T,{key:0,slug:"videoSitemapSettings","header-text":o.strings.sitemapSettings},{default:i(()=>[s(p,{name:o.strings.enableSitemapIndexes},{content:i(()=>[s(k,{modelValue:e.optionsStore.options.sitemap.video.indexes,"onUpdate:modelValue":n[1]||(n[1]=m=>e.optionsStore.options.sitemap.video.indexes=m),name:"sitemapIndexes",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),r("div",de,[c(l(o.strings.sitemapIndexes)+" ",1),r("span",{innerHTML:t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"sitemapIndexes",!0)},null,8,pe)])]),_:1},8,["name"]),e.optionsStore.options.sitemap.video.indexes?(d(),u(p,{key:0,name:o.strings.linksPerSitemap},{content:i(()=>[s(G,{modelValue:e.optionsStore.options.sitemap.video.linksPerIndex,"onUpdate:modelValue":n[2]||(n[2]=m=>e.optionsStore.options.sitemap.video.linksPerIndex=m),class:"aioseo-links-per-site",type:"number",size:"medium",min:1,max:5e4,onKeyup:e.validateLinksPerIndex},null,8,["modelValue","onKeyup"]),r("div",me,[c(l(o.strings.maxLinks)+" ",1),r("span",{innerHTML:t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"maxLinks",!0)},null,8,ce)]),e.optionsStore.options.sitemap.video.indexes&&1e3<e.optionsStore.options.sitemap.video.linksPerIndex?(d(),u(y,{key:0,class:"index-notice",type:"yellow"},{default:i(()=>[c(l(o.strings.warningLinksPerSitemap),1)]),_:1})):_("",!0)]),_:1},8,["name"])):_("",!0),s(p,{name:o.strings.postTypes},{content:i(()=>[s($,{size:"medium",modelValue:e.optionsStore.options.sitemap.video.postTypes.all,"onUpdate:modelValue":n[3]||(n[3]=m=>e.optionsStore.options.sitemap.video.postTypes.all=m)},{default:i(()=>[c(l(o.strings.includeAllPostTypes),1)]),_:1},8,["modelValue"]),e.optionsStore.options.sitemap.video.postTypes.all?_("",!0):(d(),u(V,{key:0,options:e.optionsStore.options.sitemap.video,type:"postTypes"},null,8,["options"])),r("div",ue,[c(l(o.strings.selectPostTypes)+" ",1),r("span",{innerHTML:t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"selectPostTypesVideo",!0)},null,8,_e)])]),_:1},8,["name"]),s(p,{name:o.strings.taxonomies},{content:i(()=>[s($,{size:"medium",modelValue:e.optionsStore.options.sitemap.video.taxonomies.all,"onUpdate:modelValue":n[4]||(n[4]=m=>e.optionsStore.options.sitemap.video.taxonomies.all=m)},{default:i(()=>[c(l(o.strings.includeAllTaxonomies),1)]),_:1},8,["modelValue"]),e.optionsStore.options.sitemap.video.taxonomies.all?_("",!0):(d(),u(V,{key:0,options:e.optionsStore.options.sitemap.video,type:"taxonomies",excluded:g.getExcludedTaxonomies},null,8,["options","excluded"])),r("div",he,[c(l(o.strings.selectTaxonomies)+" ",1),r("span",{innerHTML:t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"selectTaxonomiesVideo",!0)},null,8,ge)])]),_:1},8,["name"])]),_:1},8,["header-text"])):_("",!0),e.optionsStore.options.sitemap.video.enable?(d(),u(T,{key:1,slug:"videoAdvancedSettings",toggles:e.optionsStore.options.sitemap.video.advancedSettings.enable},{header:i(()=>[s(h,{modelValue:e.optionsStore.options.sitemap.video.advancedSettings.enable,"onUpdate:modelValue":n[5]||(n[5]=m=>e.optionsStore.options.sitemap.video.advancedSettings.enable=m)},null,8,["modelValue"]),r("span",null,l(o.strings.advancedSettings),1)]),default:i(()=>[s(p,{name:o.strings.excludePostsPages,class:"aioseo-exclude-pages-posts",align:""},{content:i(()=>[s(w,{options:e.optionsStore.options.sitemap.video.advancedSettings,type:"posts"},null,8,["options"])]),_:1},8,["name"]),s(p,{name:o.strings.excludeTerms,class:"aioseo-exclude-terms",align:""},{content:i(()=>[s(w,{options:e.optionsStore.options.sitemap.video.advancedSettings,type:"terms"},null,8,["options"]),r("div",Se,l(o.strings.excludeTermsDescription),1)]),_:1},8,["name"]),e.optionsStore.internalOptions.internal.deprecatedOptions.includes("staticVideoSitemap")?(d(),u(p,{key:0,name:o.strings.dynamicallyGenerate},{content:i(()=>[s(k,{modelValue:e.optionsStore.options.deprecated.sitemap.video.advancedSettings.dynamic,"onUpdate:modelValue":n[6]||(n[6]=m=>e.optionsStore.options.deprecated.sitemap.video.advancedSettings.dynamic=m),name:"dynamic",options:[{label:t.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"]),r("div",ye,[c(l(o.strings.dynamicallyGenerateDescription)+" ",1),r("span",{innerHTML:t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"dynamicallyGenerateVideo",!0)},null,8,ve)])]),_:1},8,["name"])):_("",!0),s(p,{name:o.strings.includeCustomFields,align:""},{content:i(()=>[s(k,{modelValue:e.optionsStore.options.sitemap.video.advancedSettings.customFields,"onUpdate:modelValue":n[7]||(n[7]=m=>e.optionsStore.options.sitemap.video.advancedSettings.customFields=m),name:"includeCustomFields",options:[{label:t.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"]),r("div",fe,[c(l(o.strings.includeCustomFieldsDescription)+" ",1),r("span",{innerHTML:t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"includeCustomFields",!0)},null,8,be)])]),_:1},8,["name"])]),_:1},8,["toggles"])):_("",!0)])}const Te=f(oe,[["render",Pe]]);const ke={mixins:[A],components:{Cta:Q,Lite:te,VideoSitemap:Te},data(){return{addonSlug:"aioseo-video-sitemap"}}},xe={class:"aioseo-video-sitemap"};function Le(t,n,b,e,o,g){const h=a("video-sitemap",!0),p=a("cta"),S=a("lite");return d(),v("div",xe,[t.shouldShowMain?(d(),u(h,{key:0})):_("",!0),t.shouldShowUpdate||t.shouldShowActivate?(d(),u(p,{key:1})):_("",!0),t.shouldShowLite?(d(),u(S,{key:2})):_("",!0)])}const mt=f(ke,[["render",Le]]);export{mt as default};
