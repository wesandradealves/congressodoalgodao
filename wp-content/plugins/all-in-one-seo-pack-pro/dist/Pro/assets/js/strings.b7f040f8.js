import{d as r}from"./isArrayLikeObject.7cab3d31.js";import{i as t}from"./isString.d9467ca2.js";const a=n=>t(n)?o(r(n)):"",o=n=>t(n)?n.replace(/(<([^>]+)>)/gi,""):"",i=n=>typeof n!="string"?n:n.replace(/(<|&lt;).*?\bon\w+=.*?(&gt;|>)/gmi,"");export{o as a,i as b,a as s};
