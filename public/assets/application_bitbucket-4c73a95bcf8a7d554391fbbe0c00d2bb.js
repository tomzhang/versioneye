/*
 RequireJS 2.1.6 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
var requirejs,require,define;!function(ba){function J(e){return"[object Function]"===N.call(e)}function K(e){return"[object Array]"===N.call(e)}function z(e,t){if(e){var n;for(n=0;n<e.length&&(!e[n]||!t(e[n],n,e));n+=1);}}function O(e,t){if(e){var n;for(n=e.length-1;n>-1&&(!e[n]||!t(e[n],n,e));n-=1);}}function t(e,t){return ha.call(e,t)}function m(e,n){return t(e,n)&&e[n]}function H(e,n){for(var i in e)if(t(e,i)&&n(e[i],i))break}function S(e,n,i,r){return n&&H(n,function(n,o){(i||!t(e,o))&&(r&&"string"!=typeof n?(e[o]||(e[o]={}),S(e[o],n,i,r)):e[o]=n)}),e}function v(e,t){return function(){return t.apply(e,arguments)}}function ca(e){throw e}function da(e){if(!e)return e;var t=ba;return z(e.split("."),function(e){t=t[e]}),t}function B(e,t,n,i){return t=Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e),t.requireType=e,t.requireModules=i,n&&(t.originalError=n),t}function ia(e){function n(e,t,n){var i,r,o,s,a,u,l,c=t&&t.split("/");i=c;var d=T.map,f=d&&d["*"];if(e&&"."===e.charAt(0))if(t){for(i=m(T.pkgs,t)?c=[t]:c.slice(0,c.length-1),t=e=i.concat(e.split("/")),i=0;t[i];i+=1)if(r=t[i],"."===r)t.splice(i,1),i-=1;else if(".."===r){if(1===i&&(".."===t[2]||".."===t[0]))break;i>0&&(t.splice(i-1,2),i-=2)}i=m(T.pkgs,t=e[0]),e=e.join("/"),i&&e===t+"/"+i.main&&(e=t)}else 0===e.indexOf("./")&&(e=e.substring(2));if(n&&d&&(c||f)){for(t=e.split("/"),i=t.length;i>0;i-=1){if(o=t.slice(0,i).join("/"),c)for(r=c.length;r>0;r-=1)if((n=m(d,c.slice(0,r).join("/")))&&(n=m(n,o))){s=n,a=i;break}if(s)break;!u&&f&&m(f,o)&&(u=m(f,o),l=i)}!s&&u&&(s=u,a=l),s&&(t.splice(0,a,s),e=t.join("/"))}return e}function i(e){A&&z(document.getElementsByTagName("script"),function(t){return t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===k.contextName?(t.parentNode.removeChild(t),!0):void 0})}function r(e){var t=m(T.paths,e);return t&&K(t)&&1<t.length?(i(e),t.shift(),k.require.undef(e),k.require([e]),!0):void 0}function o(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function s(e,t,i,r){var s,a,u=null,l=t?t.name:null,c=e,d=!0,f="";return e||(d=!1,e="_@r"+(q+=1)),e=o(e),u=e[0],e=e[1],u&&(u=n(u,l,r),a=m(M,u)),e&&(u?f=a&&a.normalize?a.normalize(e,function(e){return n(e,l,r)}):n(e,l,r):(f=n(e,l,r),e=o(f),u=e[0],f=e[1],i=!0,s=k.nameToUrl(f))),i=!u||a||i?"":"_unnormalized"+(L+=1),{prefix:u,name:f,parentMap:t,unnormalized:!!i,url:s,originalName:c,isDefine:d,id:(u?u+"!"+f:f)+i}}function a(e){var t=e.id,n=m(E,t);return n||(n=E[t]=new k.Module(e)),n}function u(e,n,i){var r=e.id,o=m(E,r);!t(M,r)||o&&!o.defineEmitComplete?(o=a(e),o.error&&"error"===n?i(o.error):o.on(n,i)):"defined"===n&&i(M[r])}function l(e,t){var n=e.requireModules,i=!1;t?t(e):(z(n,function(t){(t=m(E,t))&&(t.error=e,t.events.error&&(i=!0,t.emit("error",e)))}),i||h.onError(e))}function c(){U.length&&(ja.apply($,[$.length-1,0].concat(U)),U=[])}function d(e){delete E[e],delete j[e]}function f(e,t,n){var i=e.map.id;e.error?e.emit("error",e.error):(t[i]=!0,z(e.depMaps,function(i,r){var o=i.id,s=m(E,o);s&&!e.depMatched[r]&&!n[o]&&(m(t,o)?(e.defineDep(r,M[o]),e.check()):f(s,t,n))}),n[i]=!0)}function p(){var e,t,n,o,s=(n=1e3*T.waitSeconds)&&k.startTime+n<(new Date).getTime(),a=[],u=[],c=!1,d=!0;if(!x){if(x=!0,H(j,function(n){if(e=n.map,t=e.id,n.enabled&&(e.isDefine||u.push(n),!n.error))if(!n.inited&&s)r(t)?c=o=!0:(a.push(t),i(t));else if(!n.inited&&n.fetched&&e.isDefine&&(c=!0,!e.prefix))return d=!1}),s&&a.length)return n=B("timeout","Load timeout for modules: "+a,null,a),n.contextName=k.contextName,l(n);d&&z(u,function(e){f(e,{},{})}),s&&!o||!c||!A&&!ea||C||(C=setTimeout(function(){C=0,p()},50)),x=!1}}function g(e){t(M,e[0])||a(s(e[0],null,!0)).init(e[1],e[2])}function y(e){var e=e.currentTarget||e.srcElement,t=k.onScriptLoad;return e.detachEvent&&!Z?e.detachEvent("onreadystatechange",t):e.removeEventListener("load",t,!1),t=k.onScriptError,(!e.detachEvent||Z)&&e.removeEventListener("error",t,!1),{node:e,id:e&&e.getAttribute("data-requiremodule")}}function b(){var e;for(c();$.length;){if(e=$.shift(),null===e[0])return l(B("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));g(e)}}var x,w,k,_,C,T={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},shim:{},config:{}},E={},j={},D={},$=[],M={},N={},q=1,L=1;return _={require:function(e){return e.require?e.require:e.require=k.makeRequire(e.map)},exports:function(e){return e.usingExports=!0,e.map.isDefine?e.exports?e.exports:e.exports=M[e.map.id]={}:void 0},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){var t=m(T.pkgs,e.map.id);return(t?m(T.config,e.map.id+"/"+t.main):m(T.config,e.map.id))||{}},exports:M[e.map.id]}}},w=function(e){this.events=m(D,e.id)||{},this.map=e,this.shim=m(T.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},w.prototype={init:function(e,t,n,i){i=i||{},this.inited||(this.factory=t,n?this.on("error",n):this.events.error&&(n=v(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=n,this.inited=!0,this.ignore=i.ignore,i.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,k.startTime=(new Date).getTime();var e=this.map;if(!this.shim)return e.prefix?this.callPlugin():this.load();k.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],v(this,function(){return e.prefix?this.callPlugin():this.load()}))}},load:function(){var e=this.map.url;N[e]||(N[e]=!0,k.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var e,t,n=this.map.id;t=this.depExports;var i=this.exports,r=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,1>this.depCount&&!this.defined){if(J(r)){if(this.events.error&&this.map.isDefine||h.onError!==ca)try{i=k.execCb(n,r,t,i)}catch(o){e=o}else i=k.execCb(n,r,t,i);if(this.map.isDefine&&((t=this.module)&&void 0!==t.exports&&t.exports!==this.exports?i=t.exports:void 0===i&&this.usingExports&&(i=this.exports)),e)return e.requireMap=this.map,e.requireModules=this.map.isDefine?[this.map.id]:null,e.requireType=this.map.isDefine?"define":"require",l(this.error=e)}else i=r;this.exports=i,this.map.isDefine&&!this.ignore&&(M[n]=i,h.onResourceLoad)&&h.onResourceLoad(k,this.map,this.depMaps),d(n),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var e=this.map,i=e.id,r=s(e.prefix);this.depMaps.push(r),u(r,"defined",v(this,function(r){var o,c;c=this.map.name;var f=this.map.parentMap?this.map.parentMap.name:null,p=k.makeRequire(e.parentMap,{enableBuildCallback:!0});this.map.unnormalized?(r.normalize&&(c=r.normalize(c,function(e){return n(e,f,!0)})||""),r=s(e.prefix+"!"+c,this.map.parentMap),u(r,"defined",v(this,function(e){this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),(c=m(E,r.id))&&(this.depMaps.push(r),this.events.error&&c.on("error",v(this,function(e){this.emit("error",e)})),c.enable())):(o=v(this,function(e){this.init([],function(){return e},null,{enabled:!0})}),o.error=v(this,function(e){this.inited=!0,this.error=e,e.requireModules=[i],H(E,function(e){0===e.map.id.indexOf(i+"_unnormalized")&&d(e.map.id)}),l(e)}),o.fromText=v(this,function(n,r){var u=e.name,c=s(u),d=Q;r&&(n=r),d&&(Q=!1),a(c),t(T.config,i)&&(T.config[u]=T.config[i]);try{h.exec(n)}catch(f){return l(B("fromtexteval","fromText eval for "+i+" failed: "+f,f,[i]))}d&&(Q=!0),this.depMaps.push(c),k.completeLoad(u),p([u],o)}),r.load(e.name,p,o,T))})),k.enable(r,this),this.pluginMaps[r.id]=r},enable:function(){j[this.map.id]=this,this.enabling=this.enabled=!0,z(this.depMaps,v(this,function(e,n){var i,r;if("string"==typeof e){if(e=s(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[n]=e,i=m(_,e.id))return void(this.depExports[n]=i(this));this.depCount+=1,u(e,"defined",v(this,function(e){this.defineDep(n,e),this.check()})),this.errback&&u(e,"error",v(this,this.errback))}i=e.id,r=E[i],!t(_,i)&&r&&!r.enabled&&k.enable(e,this)})),H(this.pluginMaps,v(this,function(e){var t=m(E,e.id);t&&!t.enabled&&k.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var n=this.events[e];n||(n=this.events[e]=[]),n.push(t)},emit:function(e,t){z(this.events[e],function(e){e(t)}),"error"===e&&delete this.events[e]}},k={config:T,contextName:e,registry:E,defined:M,urlFetched:N,defQueue:$,Module:w,makeModuleMap:s,nextTick:h.nextTick,onError:l,configure:function(e){e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/");var t=T.pkgs,n=T.shim,i={paths:!0,config:!0,map:!0};H(e,function(e,t){i[t]?"map"===t?(T.map||(T.map={}),S(T[t],e,!0,!0)):S(T[t],e,!0):T[t]=e}),e.shim&&(H(e.shim,function(e,t){K(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=k.makeShimExports(e)),n[t]=e}),T.shim=n),e.packages&&(z(e.packages,function(e){e="string"==typeof e?{name:e}:e,t[e.name]={name:e.name,location:e.location||e.name,main:(e.main||"main").replace(ka,"").replace(fa,"")}}),T.pkgs=t),H(E,function(e,t){!e.inited&&!e.map.unnormalized&&(e.map=s(t))}),(e.deps||e.callback)&&k.require(e.deps||[],e.callback)},makeShimExports:function(e){return function(){var t;return e.init&&(t=e.init.apply(ba,arguments)),t||e.exports&&da(e.exports)}},makeRequire:function(i,r){function o(n,u,c){var d,f;return r.enableBuildCallback&&u&&J(u)&&(u.__requireJsBuild=!0),"string"==typeof n?J(u)?l(B("requireargs","Invalid require call"),c):i&&t(_,n)?_[n](E[i.id]):h.get?h.get(k,n,i,o):(d=s(n,i,!1,!0),d=d.id,t(M,d)?M[d]:l(B("notloaded",'Module name "'+d+'" has not been loaded yet for context: '+e+(i?"":". Use require([])")))):(b(),k.nextTick(function(){b(),f=a(s(null,i)),f.skipMap=r.skipMap,f.init(n,u,c,{enabled:!0}),p()}),o)}return r=r||{},S(o,{isBrowser:A,toUrl:function(e){var t,r=e.lastIndexOf("."),o=e.split("/")[0];return-1!==r&&("."!==o&&".."!==o||r>1)&&(t=e.substring(r,e.length),e=e.substring(0,r)),k.nameToUrl(n(e,i&&i.id,!0),t,!0)},defined:function(e){return t(M,s(e,i,!1,!0).id)},specified:function(e){return e=s(e,i,!1,!0).id,t(M,e)||t(E,e)}}),i||(o.undef=function(e){c();var t=s(e,i,!0),n=m(E,e);delete M[e],delete N[t.url],delete D[e],n&&(n.events.defined&&(D[e]=n.events),d(e))}),o},enable:function(e){m(E,e.id)&&a(e).enable()},completeLoad:function(e){var n,i,o=m(T.shim,e)||{},s=o.exports;for(c();$.length;){if(i=$.shift(),null===i[0]){if(i[0]=e,n)break;n=!0}else i[0]===e&&(n=!0);g(i)}if(i=m(E,e),!n&&!t(M,e)&&i&&!i.inited){if(T.enforceDefine&&(!s||!da(s)))return r(e)?void 0:l(B("nodefine","No define call for "+e,null,[e]));g([e,o.deps||[],o.exportsFn])}p()},nameToUrl:function(e,t,n){var i,r,o,s,a,u;if(h.jsExtRegExp.test(e))s=e+(t||"");else{for(i=T.paths,r=T.pkgs,s=e.split("/"),a=s.length;a>0;a-=1){if(u=s.slice(0,a).join("/"),o=m(r,u),u=m(i,u)){K(u)&&(u=u[0]),s.splice(0,a,u);break}if(o){e=e===o.name?o.location+"/"+o.main:o.location,s.splice(0,a,e);break}}s=s.join("/"),s+=t||(/\?/.test(s)||n?"":".js"),s=("/"===s.charAt(0)||s.match(/^[\w\+\.\-]+:/)?"":T.baseUrl)+s}return T.urlArgs?s+((-1===s.indexOf("?")?"?":"&")+T.urlArgs):s},load:function(e,t){h.load(k,e,t)},execCb:function(e,t,n,i){return t.apply(i,n)},onScriptLoad:function(e){("load"===e.type||la.test((e.currentTarget||e.srcElement).readyState))&&(R=null,e=y(e),k.completeLoad(e.id))},onScriptError:function(e){var t=y(e);return r(t.id)?void 0:l(B("scripterror","Script error for: "+t.id,e,[t.id]))}},k.require=k.makeRequire(),k}var h,x,y,E,L,F,R,M,s,ga,ma=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,na=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,fa=/\.js$/,ka=/^\.\//;x=Object.prototype;var N=x.toString,ha=x.hasOwnProperty,ja=Array.prototype.splice,A=!("undefined"==typeof window||!navigator||!window.document),ea=!A&&"undefined"!=typeof importScripts,la=A&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,Z="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),G={},u={},U=[],Q=!1;if("undefined"==typeof define){if("undefined"!=typeof requirejs){if(J(requirejs))return;u=requirejs,requirejs=void 0}"undefined"!=typeof require&&!J(require)&&(u=require,require=void 0),h=requirejs=function(e,t,n,i){var r,o="_";return!K(e)&&"string"!=typeof e&&(r=e,K(t)?(e=t,t=n,n=i):e=[]),r&&r.context&&(o=r.context),(i=m(G,o))||(i=G[o]=h.s.newContext(o)),r&&i.configure(r),i.require(e,t,n)},h.config=function(e){return h(e)},h.nextTick="undefined"!=typeof setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=h),h.version="2.1.6",h.jsExtRegExp=/^\/|:|\?|\.js$/,h.isBrowser=A,x=h.s={contexts:G,newContext:ia},h({}),z(["toUrl","undef","defined","specified"],function(e){h[e]=function(){var t=G._;return t.require[e].apply(t,arguments)}}),A&&(y=x.head=document.getElementsByTagName("head")[0],E=document.getElementsByTagName("base")[0])&&(y=x.head=E.parentNode),h.onError=ca,h.load=function(e,t,n){var i,r=e&&e.config||{};if(A)return i=r.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script"),i.type=r.scriptType||"text/javascript",i.charset="utf-8",i.async=!0,i.setAttribute("data-requirecontext",e.contextName),i.setAttribute("data-requiremodule",t),!i.attachEvent||i.attachEvent.toString&&0>i.attachEvent.toString().indexOf("[native code")||Z?(i.addEventListener("load",e.onScriptLoad,!1),i.addEventListener("error",e.onScriptError,!1)):(Q=!0,i.attachEvent("onreadystatechange",e.onScriptLoad)),i.src=n,M=i,E?y.insertBefore(i,E):y.appendChild(i),M=null,i;if(ea)try{importScripts(n),e.completeLoad(t)}catch(o){e.onError(B("importscripts","importScripts failed for "+t+" at "+n,o,[t]))}},A&&O(document.getElementsByTagName("script"),function(e){return y||(y=e.parentNode),(L=e.getAttribute("data-main"))?(s=L,u.baseUrl||(F=s.split("/"),s=F.pop(),ga=F.length?F.join("/")+"/":"./",u.baseUrl=ga),s=s.replace(fa,""),h.jsExtRegExp.test(s)&&(s=L),u.deps=u.deps?u.deps.concat(s):[s],!0):void 0}),define=function(e,t,n){var i,r;"string"!=typeof e&&(n=t,t=e,e=null),K(t)||(n=t,t=null),!t&&J(n)&&(t=[],n.length&&(n.toString().replace(ma,"").replace(na,function(e,n){t.push(n)}),t=(1===n.length?["require"]:["require","exports","module"]).concat(t))),Q&&((i=M)||(R&&"interactive"===R.readyState||O(document.getElementsByTagName("script"),function(e){return"interactive"===e.readyState?R=e:void 0}),i=R),i&&(e||(e=i.getAttribute("data-requiremodule")),r=G[i.getAttribute("data-requirecontext")])),(r?r.defQueue:U).push([e,t,n])},define.amd={jQuery:!0},h.exec=function(b){return eval(b)},h(u)}}(this),require.config({paths:{underscore:"/assets/libs/underscore-min",backbone:"/assets/libs/backbone-min",moment:"/assets/libs/moment.min"},shim:{underscore:{exports:"_"},backbone:{deps:["underscore"],exports:"Backbone"}}}),jQuery(document).ready(function(){jQuery("#q").tbHinter({text:"json"}),jQuery("#tabs").length>0&&jQuery("#tabs").tabs(),require(["underscore","backbone","/assets/scm_app/main"],function(e,t,n){var i=new n({name:"SCMApp for Bitbucket",repo_urls:{root:"/user/bitbucket_repos",clear:"/user/bitbucket/clear",menu:"/user/bitbucket/menu"}});i.start()})});