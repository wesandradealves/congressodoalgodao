import{m as b}from"./vuex.esm-bundler.f966fce5.js";import{B}from"./Textarea.1b60c17b.js";import{C as _}from"./index.f123d27f.js";import{C as g}from"./Card.019b86ae.js";import{C as f}from"./SettingsRow.7f1477b7.js";import{_ as h,q as a,c as V,z as s,k as l,o as c,j as d,b as p}from"./_plugin-vue_export-helper.299eda55.js";import"./default-i18n.0e8bc810.js";import"./_commonjsHelpers.f84db168.js";import"./helpers.73050afe.js";import"./Caret.e5d23aaa.js";import"./Tooltip.daabe115.js";import"./Slide.46d23bfb.js";import"./Row.0ab5735c.js";const $={components:{BaseTextarea:B,CoreAlert:_,CoreCard:g,CoreSettingsRow:f},data(){return{strings:{badBotBlocker:this.$t.__("Bad Bot Blocker",this.$td),blockBadBotsHttp:this.$t.__("Block Bad Bots using HTTP",this.$td),blockReferralSpamHttp:this.$t.__("Block Referral Spam using HTTP",this.$td),trackBlockedBots:this.$t.__("Track Blocked Bots",this.$td),useCustomBlocklists:this.$t.__("Use Custom Blocklists",this.$td),userAgentBlocklist:this.$t.__("User Agent Blocklist",this.$td),refererBlockList:this.$t.__("Referer Blocklist",this.$td),blockedBotsLog:this.$t.__("Blocked Bots Log",this.$td),logLocation:this.$t.sprintf(this.$t.__("The log for the blocked bots is located here: %1$s",this.$td),'<br><a href="'+this.$aioseo.urls.blockedBotsLogUrl+'" target="_blank">'+this.$aioseo.urls.blockedBotsLogUrl+"</a>")}}},computed:{...b(["options"])}},y={class:"aioseo-tools-bad-bot-blocker"};function C(o,e,H,L,r,R){const i=a("base-toggle"),n=a("core-settings-row"),m=a("base-textarea"),u=a("core-alert"),k=a("core-card");return c(),V("div",y,[s(k,{slug:"badBotBlocker","header-text":r.strings.badBotBlocker},{default:l(()=>[s(n,{name:r.strings.blockBadBotsHttp},{content:l(()=>[s(i,{modelValue:o.options.deprecated.tools.blocker.blockBots,"onUpdate:modelValue":e[0]||(e[0]=t=>o.options.deprecated.tools.blocker.blockBots=t)},null,8,["modelValue"])]),_:1},8,["name"]),s(n,{name:r.strings.blockReferralSpamHttp},{content:l(()=>[s(i,{modelValue:o.options.deprecated.tools.blocker.blockReferer,"onUpdate:modelValue":e[1]||(e[1]=t=>o.options.deprecated.tools.blocker.blockReferer=t)},null,8,["modelValue"])]),_:1},8,["name"]),o.options.deprecated.tools.blocker.blockBots||o.options.deprecated.tools.blocker.blockReferer?(c(),d(n,{key:0,name:r.strings.useCustomBlocklists},{content:l(()=>[s(i,{modelValue:o.options.deprecated.tools.blocker.custom.enable,"onUpdate:modelValue":e[2]||(e[2]=t=>o.options.deprecated.tools.blocker.custom.enable=t)},null,8,["modelValue"])]),_:1},8,["name"])):p("",!0),o.options.deprecated.tools.blocker.blockBots&&o.options.deprecated.tools.blocker.custom.enable?(c(),d(n,{key:1,name:r.strings.userAgentBlocklist},{content:l(()=>[s(m,{minHeight:200,maxHeight:200,modelValue:o.options.deprecated.tools.blocker.custom.bots,"onUpdate:modelValue":e[3]||(e[3]=t=>o.options.deprecated.tools.blocker.custom.bots=t)},null,8,["modelValue"])]),_:1},8,["name"])):p("",!0),o.options.deprecated.tools.blocker.blockReferer&&o.options.deprecated.tools.blocker.custom.enable?(c(),d(n,{key:2,name:r.strings.refererBlockList},{content:l(()=>[s(m,{minHeight:200,maxHeight:200,modelValue:o.options.deprecated.tools.blocker.custom.referer,"onUpdate:modelValue":e[4]||(e[4]=t=>o.options.deprecated.tools.blocker.custom.referer=t)},null,8,["modelValue"])]),_:1},8,["name"])):p("",!0),o.options.deprecated.tools.blocker.blockBots||o.options.deprecated.tools.blocker.blockReferer?(c(),d(n,{key:3,name:r.strings.trackBlockedBots},{content:l(()=>[s(i,{modelValue:o.options.deprecated.tools.blocker.track,"onUpdate:modelValue":e[5]||(e[5]=t=>o.options.deprecated.tools.blocker.track=t)},null,8,["modelValue"]),s(u,{type:"blue",innerHTML:r.strings.logLocation},null,8,["innerHTML"])]),_:1},8,["name"])):p("",!0)]),_:1},8,["header-text"])])}const D=h($,[["render",C]]);export{D as default};
