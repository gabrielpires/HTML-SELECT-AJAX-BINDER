//HTML SELECT BINDER
//Author: Gabriel Pires - gabriel@sintese.info
//Version: 1.0
//Release Date: 2010-09-01
//The ajax handler is Ajax Requester - MyLib JS - Developed by David Mark - <a href="http://www.cinsoft.net/">http://www.cinsoft.net/

function bindList(a){this._control=a;this._source=null;this._type=null;this._load="Waiting, loading...";this._nodeLoad=null;this._empty="No item(s)";this._success=this.Success;this._fail=this.Fail}bindList.prototype.fill=function(a){this._type=typeof(a.source);this._source=a.source;if(typeof(a.success)=="function"){this._success=a.success}if(typeof(a.fail)=="function"){this._fail=a.fail}try{if(this.verifyValue(a.load)){this._load=a.load}if(this.verifyValue(a.empty)){this._empty=a.empty}this.removeAll();this._nodeLoad=this.addItem({value:"0",text:this._load,seleted:"selected"});if(this._type=="string"){this.request()}else{this.applyResult(a.source)}}catch(b){console.log(b);this._fail()}};bindList.prototype.verifyValue=function(a){if(a!=undefined&&a!=null&&a!=""){return true}else{return false}};bindList.prototype.request=function(){var b=this;var a=new API.Requester();a.onsuccess=function(d,c){b.applyResult(c)};a.onfail=function(c,d){this._fail()};a.get(this._source,true)};bindList.prototype.applyResult=function(b){for(var a=0;a<b.length;a++){var c=b[a];this.addItem(c)}this._control.removeChild(this._nodeLoad);if(b.length==0){this.additem({value:"0",text:this._empty,selected:"selected"})}this._success()};bindList.prototype.removeAll=function(){while(this._control.firstChild){this._control.removeChild(this._control.firstChild)}};bindList.prototype.addItem=function(b){var a=document.createElement("option");a.setAttribute("value",b.value);if(this.verifyValue(b.selected)){a.setAttribute("selected","selected")}a.innerHTML=b.text;this._control.appendChild(a);return a};bindList.prototype.Success=function(){alert("The Load has been completed")};bindList.prototype.Fail=function(){alert("An error occour in the process, verify your data or webservice")};var API,global=this;API=API||{};(function(){var u,l;var m=new RegExp("^(function|object)$","i");var h=function(w,v){return !!(typeof w[v]=="object"&&w[v])};API.isRealObjectProperty=h;var k=function(x,v){var w=typeof x[v];return !!((m.test(w)&&x[v])||w=="unknown")};API.isHostMethod=k;var t=function(x,w){var v=typeof x[w];return !!(m.test(v)&&x[w])};API.isHostObjectProperty=t;var f=function(){var v=arguments.length;while(v--){if(!API[arguments[v]]){return false}}return true};API.areFeatures=f;var e=function(w,v){var x=w.constructor.prototype[v];return typeof x=="undefined"||x!==w[v]};API.isOwnProperty=e;if(h(this,"document")){u=this.document}var q=(function(){var v=function(){};return function(w,x){v.prototype=x.prototype;w.prototype=new v();w.prototype.superConstructor=x;w.prototype.constructor=w}})();API.inherit=q;var s=(function(){var v=0;return function(w){return w.uniqueID||(w.uniqueID="_api"+v++)}})();API.elementUniqueId=s;var i,p,b,c,r=[];var o,g,j;if(u){o=k(u,"addEventListener");g=k(this,"addEventListener");j=k(this,"attachEvent");p=false;b=function(){return p};c=function(x){if(!p){p=true;var w=r.length;var v=w-1;while(w--){r[v-w](x)}}};i=function(x,v){var w=function(A){if(o){v.addEventListener("DOMContentLoaded",c,false)}if(g){global.addEventListener("load",c,false)}else{if(j){global.attachEvent("onload",c)}else{var z=global.onload;global.onload=function(B){if(z){z(B)}c()}}}};v=v||global.document;if(v==global.document){if(!r.length){w(global)}r[r.length]=x;return true}if(getDocumentWindow){var y=getDocumentWindow(v);if(y){w(y);return true}}return false};API.documentReady=b;API.documentReadyListener=c;API.attachDocumentReadyListener=i}var n,d;if(i){i(function(){var v,w;n=function(x){x=x||global.document;if(h(x,"body")){return x.body}if(typeof getEBTN=="function"){return getEBTN("body",x)[0]||null}return null};API.getBodyElement=n;v=n();d=function(x){x=x||global.document;return(x.documentElement&&(!x.compatMode||x.compatMode.indexOf("CSS")!=-1))?x.documentElement:n(x)};API.getContainerElement=d;w=d();v=w=null})}var a=(function(){var w,v=[function(){return new global.ActiveXObject("Microsoft.XMLHTTP")},function(){return new global.ActiveXObject("Msxml2.XMLHTTP.3.0")},function(){return new global.ActiveXObject("Msxml2.XMLHTTP.6.0")},function(){var y=new global.XMLHttpRequest();if(API.requireMimeTypeOverride){if(!k(y,"overrideMimeType")){y=null}}return y}];if(API.requireLocalXhr&&k(global,"ActiveXObject")){v.reverse()}for(w=v.length;w--;){try{if(v[w]()){return v[w]}}catch(x){}}})();API.createXmlHttpRequest=a;if(a&&Function.prototype.apply&&k(global,"setTimeout")){API.ajax=(function(){var w,z=0,G={};var B=30000;var F,I;var A=(function(){if(h(global,"JSON")&&typeof global.JSON.parse=="function"){return function(J){return global.JSON.parse(J)}}else{return function(J){return(new Function("return ("+J+")"))()}}})();API.parseJson=A;var E=function(){};function H(N,M,K){var L=M.callbackContext||M;var J=M["on"+N];if(J){J.apply(L,K)}}function v(L,K,J){J=J||[];H(L,API.ajax,[K.id(),K.group()].concat(J))}function D(K,L,N){var J;var M=K.length;while(M--){J="on"+K[M];L[J]=N[J]}}function y(K){var J=K.group();z++;if(z==1){v("start",K)}if(J){if(typeof G[J]=="undefined"){G[J]=0}G[J]++;if(G[J]==1){v("groupstart",K)}}}function x(K){var J=K.group();z--;if(J){G[J]--;if(!G[J]){v("groupfinish",K)}}if(!z){v("finish",K)}}function C(M,S,K,T,Q,N,R,L){var J,P,O=K.responseText;var U=O;if(K.responseXML&&K.responseXML.childNodes&&K.responseXML.childNodes.length){P=K.responseXML}if(T){U=T.call(L||S,O,P)}if(typeof U=="string"){J=(Q)?addElementHtml:setElementHtml}else{if(typeof addElementNodes=="function"){J=(Q)?addElementNodes:setElementNodes}}if(U){J(M,U,N,R)}}w=a();if(w&&k(w,"setRequestHeader")){I=function(M,W){var U,L,V;var K=a();var P=true;var T=this;var R={"1":"loading","2":"loaded","3":"interactive"};var J=[];var S=B;function O(){var X=K.readyState;if(X==4){if(!P){P=true;K.onreadystatechange=E;global.clearTimeout(U);x(T);if(K.status>=200&&K.status<300||K.status==1223||(typeof K.status=="undefined"&&K.responseText)||(!K.status&&V)){T.dispatch("success",[K,(L&&K.responseText)?A(K.responseText):null])}else{T.dispatch("fail",[K])}}}else{if(!J[X]){T.dispatch(R[X],[K]);J[X]=true}}}function Q(){if(!P){P=true;global.clearTimeout(U);K.onreadystatechange=E;K.abort();x(T);T.dispatch("cancel",[K])}}function N(ad,ab,X,Y,aa,Z){if(P){try{K.open(ad,ab,true,T.username,T.password)}catch(ae){v("error",T,[K,ae,ab]);return false}V=!ab.indexOf("file:");Y=Y||"application/x-www-form-urlencoded";K.setRequestHeader("Content-Type",Y);K.setRequestHeader("X-Requested-With","XMLHttpRequest");if(aa&&ad=="GET"){K.setRequestHeader("If-Modified-Since","Sat, 1 Jan 1990 00:00:00 GMT");K.setRequestHeader("Cache-Control","no-cache")}T.dispatch("send",[K,ab]);K.onreadystatechange=O;y(T);J=[];P=false;L=Z;try{K.send((ad=="POST"||ad=="PUT")?X:null);if(!P){U=global.setTimeout(Q,S)}}catch(ac){K.onreadystatechange=E;P=true;x(T);v("error",T,[K,ac,ab]);return false}return true}return false}this.busy=function(){return !P};this.cancel=function(){Q()};if(k(K,"overrideMimeType")){this.overrideMimeType=function(X){K.overrideMimeType(X)}}this.get=function(Y,X,Z){return N("GET",Y,null,null,!Z,X)};this.head=function(X){return N("HEAD",X)};this.post=function(Z,aa,Y,X){return N("POST",Z,aa,Y,false,X)};this.put=function(Z,aa,Y,X){return N("PUT",Z,aa,Y,false,X)};this.group=function(){return W};this.id=function(){return M};this.setTimeoutTime=function(X){S=X}};I.prototype.bindToObject=function(K,J){D(["send","success","fail","cancel","loading","loaded","interactive"],this,K);this.callbackContext=(typeof J=="undefined"||J)?K:null};I.prototype.dispatch=function(K,J){H(K,this,J)};API.Requester=I;return{getPendingRequests:function(){return z},bindToObject:function(K,J){D(["start","finish","error","groupstart","groupfinish"],this,K);this.callbackContext=(typeof J=="undefined"||J)?K:null},setTimeoutTime:function(J){B=J},setJsonFilter:function(J){F=J}}}w=null})()}u=null;l=null})();