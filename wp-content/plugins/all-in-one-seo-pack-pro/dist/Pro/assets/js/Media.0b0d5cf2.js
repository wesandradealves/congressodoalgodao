import{b as D,m as O}from"./vuex.esm-bundler.f966fce5.js";import{A as I}from"./WpTable.43babaf5.js";import"./default-i18n.0e8bc810.js";import"./constants.d64d7051.js";import{_ as L,q as c,o as n,j as h,k as s,a as r,z as o,b as p,x as $,t as l,c as _,E as A,F as k,l as x,P as F,B as M,T as z}from"./_plugin-vue_export-helper.299eda55.js";import"./index.c7acbe5b.js";import"./SaveChanges.176fcae6.js";import{A as H,T as q}from"./TitleDescription.2414ab3e.js";import{B}from"./RadioToggle.3d6c7d41.js";import{C as W}from"./Card.019b86ae.js";import{C as j}from"./Tabs.64ef3302.js";import{C as J}from"./ProBadge.bec762d2.js";import{C as V}from"./SettingsRow.7f1477b7.js";import{B as G}from"./Checkbox.a2fb80a8.js";import{C as Q}from"./Blur.de294544.js";import{C as E}from"./HtmlTagsEditor.5fcdcecc.js";import{G as K,a as R}from"./Row.0ab5735c.js";import{C as X,S as Y}from"./Schema.5ff23747.js";import{B as Z}from"./Textarea.1b60c17b.js";import{C as tt}from"./ExcludePosts.a62d4c92.js";import{C as et}from"./Tooltip.daabe115.js";import{R as st}from"./RequiredPlans.2bef7818.js";import{C as at}from"./Index.c0b708e6.js";import"./helpers.73050afe.js";import"./index.f123d27f.js";import"./Caret.e5d23aaa.js";import"./RequiresUpdate.fe231e49.js";import"./postContent.42ceb47d.js";import"./cleanForSlug.a98315ee.js";import"./html.5f1b4643.js";import"./Index.60834494.js";import"./_commonjsHelpers.f84db168.js";import"./JsonValues.870a4901.js";import"./MaxCounts.12b45bab.js";import"./RobotsMeta.4d20b246.js";import"./GoogleSearchPreview.4fcde61c.js";import"./Slide.46d23bfb.js";import"./TruSeoScore.1eab6bb1.js";import"./Information.9cd2e1af.js";import"./Checkmark.18246889.js";import"./Editor.0df59dfe.js";import"./UnfilteredHtml.996ede2f.js";import"./AddPlus.ab45af7d.js";import"./External.5324db54.js";const it={components:{BaseCheckbox:G,BaseRadioToggle:B,CoreBlur:Q,CoreHtmlTagsEditor:E,CoreSettingsRow:V,GridColumn:K,GridRow:R},data(){return{stripPunctuationSettings:[{value:"dashes",label:this.$t.__("Dashes (-)",this.$td)},{value:"underscores",label:this.$t.__("Underscores (_)",this.$td)},{value:"numbers",label:this.$t.__("Numbers (0-9)",this.$td)},{value:"plus",label:this.$t.__("Plus (+)",this.$td)},{value:"apostrophe",label:this.$t.__("Apostrophe (')",this.$td)},{value:"pound",label:this.$t.__("Pound (#)",this.$td)},{value:"ampersand",label:this.$t.__("Ampersand (&)",this.$td)}],strings:{attributeFormat:this.$t.sprintf(this.$t.__("%1$s Format",this.$td),this.$t.__("Title",this.$td)),clickToAddTags:this.$t.sprintf(this.$t.__("Click on the tags below to insert variables into your %1$s attribute.",this.$td),this.$t.__("Title",this.$td).toLowerCase()),stripPunctuation:this.$t.__("Strip Punctuation",this.$td),punctuationCharactersToKeep:this.$t.__("Punctuation Characters to Keep:",this.$td),casing:this.$t.__("Casing",this.$td),casingDescription:this.$t.__("Choose which casing should be applied to the attribute.",this.$td),wordsToStrip:this.$t.__("Words to Strip",this.$td),autogenerate:this.$t.sprintf(this.$t.__("Autogenerate %1$s on Upload",this.$td),this.$t.__("Title",this.$td))},tags:{title:{context:"imageSeoTitle",default:["image_title","separator_sa","site_title"]},altTag:{context:"imageSeoAlt",default:["alt_tag","separator_sa","site_title"]},caption:{context:"imageSeoCaption",default:["attachment_caption","separator_sa","site_title"]},description:{context:"imageSeoDescription",default:["attachment_description","separator_sa","site_title"]}},casings:{lowerCase:{label:this.$t.__("Lower Case",this.$td),description:this.$t.__("All letters are converted to lower case (small) letters.",this.$td)},titleCase:{label:this.$t.__("Title Case",this.$td),description:this.$t.__("Major words are capitalized and minor words remain in their original casing.",this.$td)},sentenceCase:{label:this.$t.__("Sentence Case",this.$td),description:this.$t.__("The first word of each sentence starts with a capital.",this.$td)}}}},props:{activeTab:Object}},ot={class:"aioseo-sa-image-seo"},nt={class:"global-robots-settings aioseo-description"},rt={class:"aioseo-description"},lt=r("br",null,null,-1),ct={class:"casing-options"};function dt(t,d,a,U,e,u){const g=c("base-radio-toggle"),m=c("core-settings-row"),T=c("core-html-tags-editor"),v=c("base-checkbox"),y=c("grid-column"),C=c("grid-row"),P=c("core-blur");return n(),h(P,null,{default:s(()=>[r("div",ot,[["caption","description"].includes("title")?(n(),h(m,{key:0,name:e.strings.autogenerate,align:""},{content:s(()=>[o(g,{name:"autogenerate",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["options"])]),_:1},8,["name"])):p("",!0),o(m,{name:e.strings.attributeFormat},{content:s(()=>[o(T,{"line-numbers":!1,single:"","tags-context":e.tags.title.context,"default-tags":e.tags.title.default},{"tags-description":s(()=>[$(l(e.strings.clickToAddTags),1)]),_:1},8,["tags-context","default-tags"])]),_:1},8,["name"]),o(m,{name:e.strings.stripPunctuation,align:""},{content:s(()=>[o(g,{name:"stripPunctuation",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["options"]),r("div",nt,[r("strong",null,l(e.strings.punctuationCharactersToKeep),1),o(C,{class:"settings"},{default:s(()=>[(n(!0),_(k,null,A(e.stripPunctuationSettings,(f,b)=>(n(),h(y,{key:b,xl:"3",md:"4",sm:"6"},{default:s(()=>[o(v,{size:"medium"},{default:s(()=>[$(l(f.label),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),_:1},8,["name"]),o(m,{name:e.strings.casing,align:""},{content:s(()=>[o(g,{name:"casing",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:"",activeClass:"dark"},{label:e.casings.lowerCase.label,value:"lower"},{label:e.casings.titleCase.label,value:"title"},{label:e.casings.sentenceCase.label,value:"sentence"}]},null,8,["options"]),r("div",rt,[r("span",null,l(e.strings.casingDescription),1),lt,r("ul",ct,[(n(!0),_(k,null,A(e.casings,(f,b)=>(n(),_("li",{key:b},[r("span",null,l(f.label),1),r("span",null,l(f.description),1)]))),128))])])]),_:1},8,["name"])])]),_:1})}const N=L(it,[["render",dt]]),ut={mixins:[I],components:{Blur:N},data(){return{addonSlug:"aioseo-image-seo",strings:{imageSeoHeader:this.$t.__("Enable Advanced SEO for Images on your Site",this.$tdPro),ctaDescription:this.$t.__("The Image SEO module is a premium feature that enables you to globally control the title, alt tag, caption, description and filename of the images on your site.",this.$tdPro),learnMoreText:this.$t.__("Learn more about Image SEO",this.$tdPro),features:[this.$t.__("Autogenerate image attributes",this.$tdPro),this.$t.__("Clean uploaded image filenames",this.$tdPro),this.$t.__("Strip punctuation from image attributes",this.$tdPro),this.$t.__("Convert casing of image attributes",this.$tdPro)]}}},computed:{ctaButtonText(){return this.shouldShowUpdate?this.$t.__("Update Image SEO",this.$tdPro):this.$t.__("Activate Image SEO",this.$tdPro)}},methods:{...D(["getTags"])}},ht={class:"aioseo-sa-image-seo"};function mt(t,d,a,U,e,u){const g=c("blur");return n(),_("div",ht,[o(g),(n(),h(x(t.ctaComponent),{"addon-slug":e.addonSlug,"cta-header":e.strings.imageSeoHeader,"cta-description":e.strings.ctaDescription,"cta-button-text":u.ctaButtonText,"learn-more-text":e.strings.learnMoreText,"learn-more-link":t.$links.getDocUrl("imageSeo"),"feature-list":e.strings.features,"post-activation-promises":[t.getTags]},null,8,["addon-slug","cta-header","cta-description","cta-button-text","learn-more-text","learn-more-link","feature-list","post-activation-promises"]))])}const pt=L(ut,[["render",mt]]);const _t={components:{BaseCheckbox:G,BaseRadioToggle:B,BaseTextarea:Z,CoreExcludePosts:tt,CoreHtmlTagsEditor:E,CoreSettingsRow:V,CoreTooltip:et,GridColumn:K,GridRow:R},data(){return{strings:{attributeFormat:this.$t.sprintf(this.$t.__("%1$s Format",this.$tdPro),this.activeTab.name),clickToAddTags:this.$t.sprintf(this.$t.__("Click on the tags below to insert variables into your %1$s attribute.",this.$tdPro),this.activeTab.name.toLowerCase()),stripPunctuation:this.$t.__("Strip Punctuation",this.$tdPro),charactersToKeep:this.$t.__("Characters to Exclude from Being Stripped:",this.$tdPro),charactersToConvert:this.$t.__("Characters to Convert to Spaces:",this.$tdPro),casing:this.$t.__("Casing",this.$tdPro),casingDescription:this.$t.__("Choose which casing should be applied to the attribute.",this.$tdPro),wordsToStrip:this.$t.__("Words to Strip",this.$tdPro),wordsToStripDescription:this.$t.__("Here you can add words that should be stripped from the filename, separated by a new line.",this.$tdPro),excludePostsPages:this.$t.__("Exclude Posts / Pages",this.$tdPro),excludeTerms:this.$t.__("Exclude Terms",this.$tdPro),excludeTermsDescription:this.$t.__("Any posts that are assigned to these terms will also be excluded.",this.$tdPro),autogenerate:this.$t.sprintf(this.$t.__("Autogenerate %1$s on Upload",this.$tdPro),this.activeTab.name),autogenerateDescriptions:{caption:this.$t.sprintf(this.$t.__("Choose whether %1$s should automatically generate a %2$s when new images are uploaded. If you disable this setting, you can still generate %3$s in the Media Library via our bulk action.",this.$tdPro),"AIOSEO",this.$t.__("caption",this.$tdPro),this.$t.__("captions",this.$tdPro)),description:this.$t.sprintf(this.$t.__("Choose whether %1$s should automatically generate a %2$s when new images are uploaded. If you disable this setting, you can still generate %3$s in the Media Library via our bulk action.",this.$tdPro),"AIOSEO",this.$t.__("description",this.$tdPro),this.$t.__("descriptions",this.$tdPro))},attributeDescriptions:{title:{first:this.$t.__("The title attribute is used to provide additional information about an image and can be viewed when you hover over the image.",this.$tdPro),second:this.$t.sprintf(this.$t.__("Below you can control how your %1$s look like by setting a format (similar to the SEO title/description formats), stripping punctuation and converting the casing.",this.$tdPro),this.$t.__("title attributes",this.$tdPro))},altTag:{first:this.$t.__("The alt tag attribute is used to display text that describes the image if it cannot be rendered by the browser. Its primary goal is to make images more accessible to visually impaired users, but it also used as a ranking factor by search engines.",this.$tdPro),second:this.$t.sprintf(this.$t.__("Below you can control how your %1$s look like by setting a format (similar to the SEO title/description formats), stripping punctuation and converting the casing.",this.$tdPro),this.$t.__("alt tag attributes",this.$tdPro))},caption:{first:this.$t.__("The caption is usually a few lines of text that are displayed underneath an image to provide more context or explain what can be seen in the picture.",this.$tdPro),second:this.$t.sprintf(this.$t.__("Below you can control how your %1$s look like by setting a format (similar to the SEO title/description formats), stripping punctuation and converting the casing.",this.$tdPro),this.$t.__("image captions",this.$tdPro))},description:{first:this.$t.__("The description is the text that is displayed on an image's attachment page",this.$tdPro),second:this.$t.sprintf(this.$t.__("Below you can control how your %1$s look like by setting a format (similar to the SEO title/description formats), stripping punctuation and converting the casing.",this.$tdPro),this.$t.__("attachment page descriptions",this.$tdPro))},filename:{first:this.$t.__("The filename is name of the image file when it is uploaded to the Media Library. The more descriptive and relevant the filename is, the more likely search engines will include in their results.",this.$tdPro),second:this.$t.sprintf(this.$t.__("Below you can control how your %1$s look like by stripping punctuation, specific words and converting the casing.",this.$tdPro),this.$t.__("filenames",this.$tdPro))}}},charactersToKeep:[{value:"dashes",label:this.$t.__("Dashes (-)",this.$tdPro)},{value:"underscores",label:this.$t.__("Underscores (_)",this.$tdPro)},{value:"numbers",label:this.$t.__("Numbers (0-9)",this.$tdPro)},{value:"plus",label:this.$t.__("Plus (+)",this.$tdPro)},{value:"apostrophe",label:this.$t.__("Apostrophe (')",this.$tdPro)},{value:"pound",label:this.$t.__("Pound (#)",this.$tdPro)},{value:"ampersand",label:this.$t.__("Ampersand (&)",this.$tdPro)}],charactersToConvert:[{value:"dashes",label:this.$t.__("Dashes (-)",this.$tdPro)},{value:"underscores",label:this.$t.__("Underscores (_)",this.$tdPro)}],casings:{lowerCase:{label:this.$t.__("Lower Case",this.$tdPro),description:this.$t.__("All letters are converted to lower case (small) letters.",this.$tdPro)},titleCase:{label:this.$t.__("Title Case",this.$tdPro),description:this.$t.__("Major words are capitalized and minor words remain in their original casing.",this.$tdPro)},sentenceCase:{label:this.$t.__("Sentence Case",this.$tdPro),description:this.$t.__("The first word of each sentence starts with a capital.",this.$tdPro)}},tags:{title:{context:"imageSeoTitle",default:["image_title","separator_sa","site_title"]},altTag:{context:"imageSeoAlt",default:["alt_tag","separator_sa","site_title"]},caption:{context:"imageSeoCaption",default:["attachment_caption","separator_sa","site_title"]},description:{context:"imageSeoDescription",default:["attachment_description","separator_sa","site_title"]}}}},computed:{...O(["options"]),isFilenameTab(){return this.activeTab.slug==="filename"},filteredCharactersToKeep(){const t=["plus","apostrophe","pound","ampersand"];return this.charactersToKeep.filter(a=>this.activeTab.slug!=="filename"?!0:!t.includes(a.value)).map(a=>(this.options.image[this.activeTab.slug].charactersToConvert&&this.options.image[this.activeTab.slug].charactersToConvert[a.value]?a.disabled=!0:a.disabled=!1,a))},filteredCharactersToConvert(){return this.charactersToConvert.map(t=>(this.options.image[this.activeTab.slug].charactersToKeep[t.value]?t.disabled=!0:t.disabled=!1,t))}},methods:{charactersToKeepTooltipText(t){return this.$t.sprintf(this.$t.__("Excluding %1$s is disabled when converting to spaces is enabled.",this.$tdPro),t.toLowerCase())},charactersToConvertTooltipText(t){return this.$t.sprintf(this.$t.__("Converting %1$s to spaces is disabled when excluding from stripping.",this.$tdPro),t.toLowerCase())}},props:{activeTab:Object}},gt={class:"aioseo-sa-image-seo"},bt={class:"aioseo-settings-row aioseo-section-description"},$t=["innerHTML"],vt={class:"aioseo-description"},Tt={key:0,class:"global-robots-settings aioseo-description"},ft={key:0},St={class:"aioseo-description"},yt=r("br",null,null,-1),Ct={class:"casing-options"},Pt={class:"aioseo-description"},wt={key:3,slug:"advancedSettings"},At={class:"aioseo-description"};function kt(t,d,a,U,e,u){const g=c("base-radio-toggle"),m=c("core-settings-row"),T=c("core-html-tags-editor"),v=c("base-checkbox"),y=c("core-tooltip"),C=c("grid-column"),P=c("grid-row"),f=c("base-textarea"),b=c("core-exclude-posts");return n(),_("div",gt,[r("div",bt,[r("div",null,l(e.strings.attributeDescriptions[a.activeTab.slug].first),1),r("div",null,[$(l(e.strings.attributeDescriptions[a.activeTab.slug].second)+" ",1),r("span",{innerHTML:t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"imageSeo",!0)},null,8,$t)])]),["caption","description"].includes(a.activeTab.slug)?(n(),h(m,{key:0,name:e.strings.autogenerate,align:""},{content:s(()=>[o(g,{modelValue:t.options.image[a.activeTab.slug].autogenerate,"onUpdate:modelValue":d[0]||(d[0]=i=>t.options.image[a.activeTab.slug].autogenerate=i),name:"autogenerate",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),r("div",vt,l(e.strings.autogenerateDescriptions[a.activeTab.slug]),1)]),_:1},8,["name"])):p("",!0),u.isFilenameTab?p("",!0):(n(),h(m,{key:1,name:e.strings.attributeFormat},{content:s(()=>[o(T,{modelValue:t.options.image[a.activeTab.slug].format,"onUpdate:modelValue":d[1]||(d[1]=i=>t.options.image[a.activeTab.slug].format=i),"line-numbers":!1,single:"","tags-context":e.tags[a.activeTab.slug].context,"default-tags":e.tags[a.activeTab.slug].default,"disable-emoji":""},{"tags-description":s(()=>[$(l(e.strings.clickToAddTags),1)]),_:1},8,["modelValue","tags-context","default-tags"])]),_:1},8,["name"])),o(m,{name:e.strings.stripPunctuation,align:""},{content:s(()=>[o(g,{modelValue:t.options.image[a.activeTab.slug].stripPunctuation,"onUpdate:modelValue":d[2]||(d[2]=i=>t.options.image[a.activeTab.slug].stripPunctuation=i),name:"stripPunctuation",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),t.options.image[a.activeTab.slug].stripPunctuation?(n(),_("div",Tt,[r("div",null,[r("strong",null,l(e.strings.charactersToKeep),1),o(P,{class:"characters-to-keep"},{default:s(()=>[(n(!0),_(k,null,A(u.filteredCharactersToKeep,(i,w)=>(n(),h(C,{class:"characters-grid",key:w,xl:"3",md:"4",sm:"6"},{default:s(()=>[i.disabled?(n(),h(y,{key:0},{tooltip:s(()=>[$(l(u.charactersToKeepTooltipText(i.value)),1)]),default:s(()=>[o(v,{size:"medium",modelValue:t.options.image[a.activeTab.slug].charactersToKeep[i.value],"onUpdate:modelValue":S=>t.options.image[a.activeTab.slug].charactersToKeep[i.value]=S,disabled:i.disabled},{default:s(()=>[$(l(i.label),1)]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1024)):p("",!0),i.disabled?p("",!0):(n(),h(v,{key:1,size:"medium",modelValue:t.options.image[a.activeTab.slug].charactersToKeep[i.value],"onUpdate:modelValue":S=>t.options.image[a.activeTab.slug].charactersToKeep[i.value]=S,disabled:i.disabled},{default:s(()=>[$(l(i.label),1)]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"]))]),_:2},1024))),128))]),_:1})]),!u.isFilenameTab&&u.filteredCharactersToConvert.length?(n(),_("div",ft,[r("strong",null,l(e.strings.charactersToConvert),1),o(P,{class:"characters-to-convert"},{default:s(()=>[(n(!0),_(k,null,A(u.filteredCharactersToConvert,(i,w)=>(n(),h(C,{class:"characters-grid",key:w,xl:"3",md:"4",sm:"6"},{default:s(()=>[i.disabled?(n(),h(y,{key:0},{tooltip:s(()=>[$(l(u.charactersToConvertTooltipText(i.value)),1)]),default:s(()=>[o(v,{size:"medium",modelValue:t.options.image[a.activeTab.slug].charactersToConvert[i.value],"onUpdate:modelValue":S=>t.options.image[a.activeTab.slug].charactersToConvert[i.value]=S,disabled:i.disabled},{default:s(()=>[$(l(i.label),1)]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1024)):p("",!0),i.disabled?p("",!0):(n(),h(v,{key:1,size:"medium",modelValue:t.options.image[a.activeTab.slug].charactersToConvert[i.value],"onUpdate:modelValue":S=>t.options.image[a.activeTab.slug].charactersToConvert[i.value]=S,disabled:i.disabled},{default:s(()=>[$(l(i.label),1)]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"]))]),_:2},1024))),128))]),_:1})])):p("",!0)])):p("",!0)]),_:1},8,["name"]),o(m,{name:e.strings.casing,align:""},{content:s(()=>[o(g,{modelValue:t.options.image[a.activeTab.slug].casing,"onUpdate:modelValue":d[3]||(d[3]=i=>t.options.image[a.activeTab.slug].casing=i),name:"casing",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:"",activeClass:"dark"},{label:e.casings.lowerCase.label,value:"lower"},{label:e.casings.titleCase.label,value:"title"},{label:e.casings.sentenceCase.label,value:"sentence"}]},null,8,["modelValue","options"]),r("div",St,[r("span",null,l(e.strings.casingDescription),1),yt,r("ul",Ct,[(n(!0),_(k,null,A(e.casings,(i,w)=>(n(),_("li",{key:w},[r("span",null,l(i.label),1),r("span",null,l(i.description),1)]))),128))])])]),_:1},8,["name"]),u.isFilenameTab?(n(),h(m,{key:2,name:e.strings.wordsToStrip,align:""},{content:s(()=>[o(f,{minHeight:200,modelValue:t.options.image[a.activeTab.slug].wordsToStrip,"onUpdate:modelValue":d[4]||(d[4]=i=>t.options.image[a.activeTab.slug].wordsToStrip=i)},null,8,["modelValue"]),r("div",Pt,l(e.strings.wordsToStripDescription),1)]),_:1},8,["name"])):p("",!0),["title","altTag"].includes(a.activeTab.slug)?(n(),_("div",wt,[o(m,{name:e.strings.excludePostsPages,class:"aioseo-exclude-pages-posts",align:""},{content:s(()=>[o(b,{options:t.options.image[a.activeTab.slug].advancedSettings,type:"posts"},null,8,["options"])]),_:1},8,["name"]),o(m,{name:e.strings.excludeTerms,class:"aioseo-exclude-terms",align:""},{content:s(()=>[o(b,{options:t.options.image[a.activeTab.slug].advancedSettings,type:"terms"},null,8,["options"]),r("div",At,l(e.strings.excludeTermsDescription),1)]),_:1},8,["name"])])):p("",!0)])}const Lt=L(_t,[["render",kt]]);const Ut={components:{Blur:N,RequiredPlans:st,Cta:at},data(){return{strings:{titleAttributeFormat:this.$t.__("Title Attribute Format",this.$td),ctaDescription:this.$t.__("The Image SEO module is a premium feature that enables you to globally control the title, alt tag, caption, description and filename of the images on your site.",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Image SEO",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Image SEO is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")},features:[this.$t.__("Autogenerate image attributes",this.$td),this.$t.__("Clean uploaded image filenames",this.$td),this.$t.__("Strip punctuation from image attributes",this.$td),this.$t.__("Convert casing of image attributes",this.$td)]}}},Bt={class:"aioseo-sa-image-seo"};function Vt(t,d,a,U,e,u){const g=c("blur"),m=c("required-plans"),T=c("cta");return n(),_("div",Bt,[o(g),o(T,{"cta-link":t.$links.getPricingUrl("image-seo","image-seo-upsell"),"button-text":e.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("image-seo",null,"home"),"feature-list":e.features},{"header-text":s(()=>[$(l(e.strings.ctaHeader),1)]),description:s(()=>[o(m,{addon:"aioseo-image-seo"}),$(" "+l(e.strings.ctaDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list"])])}const Dt=L(Ut,[["render",Vt],["__scopeId","data-v-1f4e62b0"]]);const Ot={mixins:[I],components:{Advanced:H,BaseRadioToggle:B,CoreCard:W,CoreMainTabs:j,CoreProBadge:J,CoreSettingsRow:V,Cta:pt,CustomFields:X,ImageSeo:Lt,Lite:Dt,Schema:Y,TitleDescription:q},data(){return{imageSeoKey:0,addonSlug:"aioseo-image-seo",internalDebounce:!1,imageSeoActiveTab:{slug:"title",name:this.$t.__("Title",this.$td),pro:!0},strings:{redirectAttachmentUrls:this.$t.__("Redirect Attachment URLs",this.$td),attachment:this.$t.__("Attachment",this.$td),attachmentParent:this.$t.__("Attachment Parent",this.$td),attachmentUrlsDescription:this.$t.__("We recommended redirecting attachment URLs back to the attachment since the default WordPress attachment pages have little SEO value.",this.$td),imageSeo:this.$t.__("Image SEO",this.$td),advancedSettings:this.$t.__("Advanced Settings",this.$td)},tabs:{attachments:[{slug:"title-description",name:this.$t.__("Title & Description",this.$td),access:"aioseo_search_appearance_settings",pro:!1},{slug:"Schema",name:this.$t.__("Schema Markup",this.$td),access:"aioseo_search_appearance_settings",pro:!0},{slug:"advanced",name:this.$t.__("Advanced",this.$td),access:"aioseo_search_appearance_settings",pro:!1}],imageSeo:[{slug:"title",name:this.$t.__("Title",this.$td),pro:!0},{slug:"altTag",name:this.$t.__("Alt Tag",this.$td),pro:!0},{slug:"caption",name:this.$t.__("Caption",this.$td),pro:!0},{slug:"description",name:this.$t.__("Description",this.$td),pro:!0},{slug:"filename",name:this.$t.__("Filename",this.$td),pro:!0}]}}},computed:{...O(["options","dynamicOptions","settings"]),postType(){return this.$aioseo.postData.postTypes.filter(t=>t.name==="attachment")[0]}},methods:{...D(["changeTab"]),processChangeTab(t,d){this.internalDebounce||(this.internalDebounce=!0,this.changeTab({slug:`${t}SA`,value:d}),setTimeout(()=>{this.internalDebounce=!1},50))},setImageSeoActiveTab(t){this.imageSeoActiveTab=this.tabs.imageSeo.find(d=>d.slug===t),this.imageSeoKey++}}},It={class:"aioseo-search-appearance-content-types"},xt={class:"aioseo-description"};function Gt(t,d,a,U,e,u){const g=c("base-radio-toggle"),m=c("core-settings-row"),T=c("core-main-tabs"),v=c("core-card"),y=c("core-pro-badge"),C=c("image-seo"),P=c("cta"),f=c("lite");return n(),_("div",It,[o(v,{slug:`${u.postType.name}SA`},F({header:s(()=>[r("div",{class:M(["icon dashicons",`${u.postType.icon||"dashicons-admin-post"}`])},null,2),r("div",null,l(u.postType.label),1)]),"before-tabs":s(()=>[o(m,{name:e.strings.redirectAttachmentUrls,align:""},{content:s(()=>[o(g,{modelValue:t.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls,"onUpdate:modelValue":d[0]||(d[0]=b=>t.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls=b),name:"redirectAttachmentUrls",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:"disabled",activeClass:"dark"},{label:e.strings.attachment,value:"attachment"},{label:e.strings.attachmentParent,value:"attachment_parent"}]},null,8,["modelValue","options"]),r("div",xt,l(e.strings.attachmentUrlsDescription),1)]),_:1},8,["name"])]),default:s(()=>[t.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls==="disabled"?(n(),h(z,{key:0,name:"route-fade",mode:"out-in"},{default:s(()=>[(n(),h(x(t.settings.internalTabs[`${u.postType.name}SA`]),{object:u.postType,separator:t.options.searchAppearance.global.separator,options:t.dynamicOptions.searchAppearance.postTypes[u.postType.name],type:"postTypes"},null,8,["object","separator","options"]))]),_:1})):p("",!0)]),_:2},[t.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls==="disabled"?{name:"tabs",fn:s(()=>[o(T,{tabs:e.tabs.attachments,showSaveButton:!1,active:t.settings.internalTabs[`${u.postType.name}SA`],internal:"",onChanged:d[1]||(d[1]=b=>u.processChangeTab(u.postType.name,b))},null,8,["tabs","active"])]),key:"0"}:void 0]),1032,["slug"]),o(v,{slug:"imageSeo",noSlide:!t.shouldShowMain},{header:s(()=>[r("span",null,l(e.strings.imageSeo),1),o(y)]),tabs:s(()=>[o(T,{tabs:e.tabs.imageSeo,showSaveButton:!1,active:e.imageSeoActiveTab.slug,internal:"",onChanged:d[2]||(d[2]=b=>u.setImageSeoActiveTab(b))},null,8,["tabs","active"])]),default:s(()=>[t.shouldShowMain?(n(),h(C,{activeTab:e.imageSeoActiveTab,key:e.imageSeoKey},null,8,["activeTab"])):p("",!0),t.shouldShowUpdate||t.shouldShowActivate?(n(),h(P,{key:1})):p("",!0),t.shouldShowLite?(n(),h(f,{key:2})):p("",!0)]),_:1},8,["noSlide"])])}const ke=L(Ot,[["render",Gt]]);export{ke as default};