/*! For license information please see 67.e0b9ac78.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[67],{822:function(e,t,r){r.d(t,{VL:function(){return Je}});var n=r(791),o={"aria-busy":!0,role:"status"},i=r(655),a=r(613),s=r.n(a);var c=function(e){function t(e,n,c,u,h){for(var d,p,v,g,b,k=0,w=0,E=0,_=0,A=0,I=0,N=v=d=0,F=0,W=0,H=0,L=0,z=c.length,$=z-1,K="",B="",U="",M="";F<z;){if(p=c.charCodeAt(F),F===$&&0!==w+_+E+k&&(0!==w&&(p=47===w?10:47),_=E=k=0,z++,$++),0===w+_+E+k){if(F===$&&(0<W&&(K=K.replace(f,"")),0<K.trim().length)){switch(p){case 32:case 9:case 59:case 13:case 10:break;default:K+=c.charAt(F)}p=59}switch(p){case 123:for(d=(K=K.trim()).charCodeAt(0),v=1,L=++F;F<z;){switch(p=c.charCodeAt(F)){case 123:v++;break;case 125:v--;break;case 47:switch(p=c.charCodeAt(F+1)){case 42:case 47:e:{for(N=F+1;N<$;++N)switch(c.charCodeAt(N)){case 47:if(42===p&&42===c.charCodeAt(N-1)&&F+2!==N){F=N+1;break e}break;case 10:if(47===p){F=N+1;break e}}F=N}}break;case 91:p++;case 40:p++;case 34:case 39:for(;F++<$&&c.charCodeAt(F)!==p;);}if(0===v)break;F++}if(v=c.substring(L,F),0===d&&(d=(K=K.replace(l,"").trim()).charCodeAt(0)),64===d){switch(0<W&&(K=K.replace(f,"")),p=K.charCodeAt(1)){case 100:case 109:case 115:case 45:W=n;break;default:W=P}if(L=(v=t(n,W,v,p,h+1)).length,0<D&&(b=s(3,v,W=r(P,K,H),n,T,O,L,p,h,u),K=W.join(""),void 0!==b&&0===(L=(v=b.trim()).length)&&(p=0,v="")),0<L)switch(p){case 115:K=K.replace(C,a);case 100:case 109:case 45:v=K+"{"+v+"}";break;case 107:v=(K=K.replace(m,"$1 $2"))+"{"+v+"}",v=1===R||2===R&&i("@"+v,3)?"@-webkit-"+v+"@"+v:"@"+v;break;default:v=K+v,112===u&&(B+=v,v="")}else v=""}else v=t(n,r(n,K,H),v,u,h+1);U+=v,v=H=W=N=d=0,K="",p=c.charCodeAt(++F);break;case 125:case 59:if(1<(L=(K=(0<W?K.replace(f,""):K).trim()).length))switch(0===N&&(d=K.charCodeAt(0),45===d||96<d&&123>d)&&(L=(K=K.replace(" ",":")).length),0<D&&void 0!==(b=s(1,K,n,e,T,O,B.length,u,h,u))&&0===(L=(K=b.trim()).length)&&(K="\0\0"),d=K.charCodeAt(0),p=K.charCodeAt(1),d){case 0:break;case 64:if(105===p||99===p){M+=K+c.charAt(F);break}default:58!==K.charCodeAt(L-1)&&(B+=o(K,d,p,K.charCodeAt(2)))}H=W=N=d=0,K="",p=c.charCodeAt(++F)}}switch(p){case 13:case 10:47===w?w=0:0===1+d&&107!==u&&0<K.length&&(W=1,K+="\0"),0<D*j&&s(0,K,n,e,T,O,B.length,u,h,u),O=1,T++;break;case 59:case 125:if(0===w+_+E+k){O++;break}default:switch(O++,g=c.charAt(F),p){case 9:case 32:if(0===_+k+w)switch(A){case 44:case 58:case 9:case 32:g="";break;default:32!==p&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===_+w+k&&(W=H=1,g="\f"+g);break;case 108:if(0===_+w+k+x&&0<N)switch(F-N){case 2:112===A&&58===c.charCodeAt(F-3)&&(x=A);case 8:111===I&&(x=I)}break;case 58:0===_+w+k&&(N=F);break;case 44:0===w+E+_+k&&(W=1,g+="\r");break;case 34:case 39:0===w&&(_=_===p?0:0===_?p:_);break;case 91:0===_+w+E&&k++;break;case 93:0===_+w+E&&k--;break;case 41:0===_+w+k&&E--;break;case 40:if(0===_+w+k){if(0===d)if(2*A+3*I===533);else d=1;E++}break;case 64:0===w+E+_+k+N+v&&(v=1);break;case 42:case 47:if(!(0<_+k+E))switch(w){case 0:switch(2*p+3*c.charCodeAt(F+1)){case 235:w=47;break;case 220:L=F,w=42}break;case 42:47===p&&42===A&&L+2!==F&&(33===c.charCodeAt(L+2)&&(B+=c.substring(L,F+1)),g="",w=0)}}0===w&&(K+=g)}I=A,A=p,F++}if(0<(L=B.length)){if(W=n,0<D&&(void 0!==(b=s(2,B,W,e,T,O,L,u,h,u))&&0===(B=b).length))return M+B+U;if(B=W.join(",")+"{"+B+"}",0!==R*x){switch(2!==R||i(B,2)||(x=0),x){case 111:B=B.replace(S,":-moz-$1")+B;break;case 112:B=B.replace(y,"::-webkit-input-$1")+B.replace(y,"::-moz-$1")+B.replace(y,":-ms-input-$1")+B}x=0}}return M+B+U}function r(e,t,r){var o=t.trim().split(v);t=o;var i=o.length,a=e.length;switch(a){case 0:case 1:var s=0;for(e=0===a?"":e[0]+" ";s<i;++s)t[s]=n(e,t[s],r).trim();break;default:var c=s=0;for(t=[];s<i;++s)for(var u=0;u<a;++u)t[c++]=n(e[u]+" ",o[s],r).trim()}return t}function n(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function o(e,t,r,n){var a=e+";",s=2*t+3*r+4*n;if(944===s){e=a.indexOf(":",9)+1;var c=a.substring(e,a.length-1).trim();return c=a.substring(0,e).trim()+c+";",1===R||2===R&&i(c,1)?"-webkit-"+c+c:c}if(0===R||2===R&&!i(a,1))return a;switch(s){case 1015:return 97===a.charCodeAt(10)?"-webkit-"+a+a:a;case 951:return 116===a.charCodeAt(3)?"-webkit-"+a+a:a;case 963:return 110===a.charCodeAt(5)?"-webkit-"+a+a:a;case 1009:if(100!==a.charCodeAt(4))break;case 969:case 942:return"-webkit-"+a+a;case 978:return"-webkit-"+a+"-moz-"+a+a;case 1019:case 983:return"-webkit-"+a+"-moz-"+a+"-ms-"+a+a;case 883:if(45===a.charCodeAt(8))return"-webkit-"+a+a;if(0<a.indexOf("image-set(",11))return a.replace(A,"$1-webkit-$2")+a;break;case 932:if(45===a.charCodeAt(4))switch(a.charCodeAt(5)){case 103:return"-webkit-box-"+a.replace("-grow","")+"-webkit-"+a+"-ms-"+a.replace("grow","positive")+a;case 115:return"-webkit-"+a+"-ms-"+a.replace("shrink","negative")+a;case 98:return"-webkit-"+a+"-ms-"+a.replace("basis","preferred-size")+a}return"-webkit-"+a+"-ms-"+a+a;case 964:return"-webkit-"+a+"-ms-flex-"+a+a;case 1023:if(99!==a.charCodeAt(8))break;return"-webkit-box-pack"+(c=a.substring(a.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+a+"-ms-flex-pack"+c+a;case 1005:return d.test(a)?a.replace(h,":-webkit-")+a.replace(h,":-moz-")+a:a;case 1e3:switch(t=(c=a.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(t)){case 226:c=a.replace(b,"tb");break;case 232:c=a.replace(b,"tb-rl");break;case 220:c=a.replace(b,"lr");break;default:return a}return"-webkit-"+a+"-ms-"+c+a;case 1017:if(-1===a.indexOf("sticky",9))break;case 975:switch(t=(a=e).length-10,s=(c=(33===a.charCodeAt(t)?a.substring(0,t):a).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(111>c.charCodeAt(8))break;case 115:a=a.replace(c,"-webkit-"+c)+";"+a;break;case 207:case 102:a=a.replace(c,"-webkit-"+(102<s?"inline-":"")+"box")+";"+a.replace(c,"-webkit-"+c)+";"+a.replace(c,"-ms-"+c+"box")+";"+a}return a+";";case 938:if(45===a.charCodeAt(5))switch(a.charCodeAt(6)){case 105:return c=a.replace("-items",""),"-webkit-"+a+"-webkit-box-"+c+"-ms-flex-"+c+a;case 115:return"-webkit-"+a+"-ms-flex-item-"+a.replace(w,"")+a;default:return"-webkit-"+a+"-ms-flex-line-pack"+a.replace("align-content","").replace(w,"")+a}break;case 973:case 989:if(45!==a.charCodeAt(3)||122===a.charCodeAt(4))break;case 931:case 953:if(!0===_.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?o(e.replace("stretch","fill-available"),t,r,n).replace(":fill-available",":stretch"):a.replace(c,"-webkit-"+c)+a.replace(c,"-moz-"+c.replace("fill-",""))+a;break;case 962:if(a="-webkit-"+a+(102===a.charCodeAt(5)?"-ms-"+a:"")+a,211===r+n&&105===a.charCodeAt(13)&&0<a.indexOf("transform",10))return a.substring(0,a.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+a}return a}function i(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),N(2!==t?n:n.replace(E,"$1"),r,t)}function a(e,t){var r=o(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(k," or ($1)").substring(4):"("+t+")"}function s(e,t,r,n,o,i,a,s,c,l){for(var f,h=0,d=t;h<D;++h)switch(f=I[h].call(u,e,d,r,n,o,i,a,s,c,l)){case void 0:case!1:case!0:case null:break;default:d=f}if(d!==t)return d}function c(e){return void 0!==(e=e.prefix)&&(N=null,e?"function"!==typeof e?R=1:(R=2,N=e):R=0),c}function u(e,r){var n=e;if(33>n.charCodeAt(0)&&(n=n.trim()),n=[n],0<D){var o=s(-1,r,n,n,T,O,0,0,0,0);void 0!==o&&"string"===typeof o&&(r=o)}var i=t(P,n,r,0,0);return 0<D&&(void 0!==(o=s(-2,i,n,n,T,O,i.length,0,0,0))&&(i=o)),"",x=0,O=T=1,i}var l=/^\0+/g,f=/[\0\r\f]/g,h=/: */g,d=/zoo|gra/,p=/([,: ])(transform)/g,v=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,S=/:(read-only)/g,b=/[svh]\w+-[tblr]{2}/,C=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,w=/-self|flex-/g,E=/[^]*?(:[rp][el]a[\w-]+)[^]*/,_=/stretch|:\s*\w+\-(?:conte|avail)/,A=/([^-])(image-set\()/,O=1,T=1,x=0,R=1,P=[],I=[],D=0,N=null,j=0;return u.use=function e(t){switch(t){case void 0:case null:D=I.length=0;break;default:if("function"===typeof t)I[D++]=t;else if("object"===typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else j=0|!!t}return e},u.set=c,void 0!==e&&c(e),u},u={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},l=r(58),f=r(110),h=r.n(f);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var p=function(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r},v=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,i.typeOf)(e)},g=Object.freeze([]),m=Object.freeze({});function y(e){return"function"==typeof e}function S(e){return e.displayName||e.name||"Component"}function b(e){return e&&"string"==typeof e.styledComponentId}var C="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-08-phonebook-test",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-08-phonebook-test",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-08-phonebook-test",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",k="undefined"!=typeof window&&"HTMLElement"in window,w=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-08-phonebook-test",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&(void 0!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-08-phonebook-test",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-08-phonebook-test",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-08-phonebook-test",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-08-phonebook-test",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:void 0!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-08-phonebook-test",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-08-phonebook-test",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-08-phonebook-test",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-08-phonebook-test",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)));function E(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var _=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)(o<<=1)<0&&E(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var i=n;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=0,c=t.length;s<c;s++)this.tag.insertRule(a,t[s])&&(this.groupSizes[e]++,a++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,i=n;i<o;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),A=new Map,O=new Map,T=1,x=function(e){if(A.has(e))return A.get(e);for(;O.has(T);)T++;var t=T++;return A.set(e,t),O.set(t,e),t},R=function(e){return O.get(e)},P=function(e,t){t>=T&&(T=t+1),A.set(e,t),O.set(t,e)},I="style["+C+'][data-styled-version="5.3.11"]',D=new RegExp("^"+C+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),N=function(e,t,r){for(var n,o=r.split(","),i=0,a=o.length;i<a;i++)(n=o[i])&&e.registerName(t,n)},j=function(e,t){for(var r=(t.textContent||"").split("/*!sc*/\n"),n=[],o=0,i=r.length;o<i;o++){var a=r[o].trim();if(a){var s=a.match(D);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(P(u,c),N(e,u,s[3]),e.getTag().insertRules(c,n)),n.length=0}else n.push(a)}}},F=function(){return r.nc},W=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(e){for(var t=e.childNodes,r=t.length;r>=0;r--){var n=t[r];if(n&&1===n.nodeType&&n.hasAttribute(C))return n}}(r),i=void 0!==o?o.nextSibling:null;n.setAttribute(C,"active"),n.setAttribute("data-styled-version","5.3.11");var a=F();return a&&n.setAttribute("nonce",a),r.insertBefore(n,i),n},H=function(){function e(e){var t=this.element=W(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var o=t[r];if(o.ownerNode===e)return o}E(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),L=function(){function e(e){var t=this.element=W(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t),n=this.nodes[e];return this.element.insertBefore(r,n||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),z=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),$=k,K={isServer:!k,useCSSOMInjection:!w},B=function(){function e(e,t,r){void 0===e&&(e=m),void 0===t&&(t={}),this.options=d({},K,{},e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&k&&$&&($=!1,function(e){for(var t=document.querySelectorAll(I),r=0,n=t.length;r<n;r++){var o=t[r];o&&"active"!==o.getAttribute(C)&&(j(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return x(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(d({},this.options,{},t),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(r=(t=this.options).isServer,n=t.useCSSOMInjection,o=t.target,e=r?new z(o):n?new H(o):new L(o),new _(e)));var e,t,r,n,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(x(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},t.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(x(e),r)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(x(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),r=t.length,n="",o=0;o<r;o++){var i=R(o);if(void 0!==i){var a=e.names.get(i),s=t.getGroup(o);if(a&&s&&a.size){var c=C+".g"+o+'[id="'+i+'"]',u="";void 0!==a&&a.forEach((function(e){e.length>0&&(u+=e+",")})),n+=""+s+c+'{content:"'+u+'"}/*!sc*/\n'}}}return n}(this)},e}(),U=/(a)(d)/gi,M=function(e){return String.fromCharCode(e+(e>25?39:97))};function G(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=M(t%52)+r;return(M(t%52)+r).replace(U,"$1-$2")}var V=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Y=function(e){return V(5381,e)};function q(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(y(r)&&!b(r))return!1}return!0}var Z=Y("5.3.11"),J=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&q(e),this.componentId=t,this.baseHash=V(Z,t),this.baseStyle=r,B.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(n,this.staticRulesId))o.push(this.staticRulesId);else{var i=ve(this.rules,e,t,r).join(""),a=G(V(this.baseHash,i)>>>0);if(!t.hasNameForId(n,a)){var s=r(i,"."+a,void 0,n);t.insertRules(n,a,s)}o.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,u=V(this.baseHash,r.hash),l="",f=0;f<c;f++){var h=this.rules[f];if("string"==typeof h)l+=h;else if(h){var d=ve(h,e,t,r),p=Array.isArray(d)?d.join(""):d;u=V(u,p+f),l+=p}}if(l){var v=G(u>>>0);if(!t.hasNameForId(n,v)){var g=r(l,"."+v,void 0,n);t.insertRules(n,v,g)}o.push(v)}}return o.join(" ")},e}(),Q=/^\s*\/\/.*$/gm,X=[":","[",".","#"];function ee(e){var t,r,n,o,i=void 0===e?m:e,a=i.options,s=void 0===a?m:a,u=i.plugins,l=void 0===u?g:u,f=new c(s),h=[],d=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(r,n,o,i,a,s,c,u,l,f){switch(r){case 1:if(0===l&&64===n.charCodeAt(0))return e(n+";"),"";break;case 2:if(0===u)return n+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+n),"";default:return n+(0===f?"/*|*/":"")}case-2:n.split("/*|*/}").forEach(t)}}}((function(e){h.push(e)})),p=function(e,n,i){return 0===n&&-1!==X.indexOf(i[r.length])||i.match(o)?e:"."+t};function v(e,i,a,s){void 0===s&&(s="&");var c=e.replace(Q,""),u=i&&a?a+" "+i+" { "+c+" }":c;return t=s,r=i,n=new RegExp("\\"+r+"\\b","g"),o=new RegExp("(\\"+r+"\\b){2,}"),f(a||!i?"":i,u)}return f.use([].concat(l,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(r)>0&&(o[0]=o[0].replace(n,p))},d,function(e){if(-2===e){var t=h;return h=[],t}}])),v.hash=l.length?l.reduce((function(e,t){return t.name||E(15),V(e,t.name)}),5381).toString():"",v}var te=n.createContext(),re=(te.Consumer,n.createContext()),ne=(re.Consumer,new B),oe=ee();function ie(){return(0,n.useContext)(te)||ne}function ae(){return(0,n.useContext)(re)||oe}function se(e){var t=(0,n.useState)(e.stylisPlugins),r=t[0],o=t[1],i=ie(),a=(0,n.useMemo)((function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),c=(0,n.useMemo)((function(){return ee({options:{prefix:!e.disableVendorPrefixes},plugins:r})}),[e.disableVendorPrefixes,r]);return(0,n.useEffect)((function(){s()(r,e.stylisPlugins)||o(e.stylisPlugins)}),[e.stylisPlugins]),n.createElement(te.Provider,{value:a},n.createElement(re.Provider,{value:c},e.children))}var ce=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=oe);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.toString=function(){return E(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=oe),this.name+e.hash},e}(),ue=/([A-Z])/,le=/([A-Z])/g,fe=/^ms-/,he=function(e){return"-"+e.toLowerCase()};function de(e){return ue.test(e)?e.replace(le,he).replace(fe,"-ms-"):e}var pe=function(e){return null==e||!1===e||""===e};function ve(e,t,r,n){if(Array.isArray(e)){for(var o,i=[],a=0,s=e.length;a<s;a+=1)""!==(o=ve(e[a],t,r,n))&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}return pe(e)?"":b(e)?"."+e.styledComponentId:y(e)?"function"!=typeof(c=e)||c.prototype&&c.prototype.isReactComponent||!t?e:ve(e(t),t,r,n):e instanceof ce?r?(e.inject(r,n),e.getName(n)):e:v(e)?function e(t,r){var n,o,i=[];for(var a in t)t.hasOwnProperty(a)&&!pe(t[a])&&(Array.isArray(t[a])&&t[a].isCss||y(t[a])?i.push(de(a)+":",t[a],";"):v(t[a])?i.push.apply(i,e(t[a],a)):i.push(de(a)+": "+(n=a,(null==(o=t[a])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||n in u||n.startsWith("--")?String(o).trim():o+"px")+";")));return r?[r+" {"].concat(i,["}"]):i}(e):e.toString();var c}var ge=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function me(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return y(e)||v(e)?ge(ve(p(g,[e].concat(r)))):0===r.length&&1===e.length&&"string"==typeof e[0]?e:ge(ve(p(e,r)))}new Set;var ye=function(e,t,r){return void 0===r&&(r=m),e.theme!==r.theme&&e.theme||t||r.theme},Se=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,be=/(^-|-$)/g;function Ce(e){return e.replace(Se,"-").replace(be,"")}var ke=function(e){return G(Y(e)>>>0)};function we(e){return"string"==typeof e&&!0}var Ee=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},_e=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Ae(e,t,r){var n=e[r];Ee(t)&&Ee(n)?Oe(n,t):e[r]=t}function Oe(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(var o=0,i=r;o<i.length;o++){var a=i[o];if(Ee(a))for(var s in a)_e(s)&&Ae(e,a[s],s)}return e}var Te=n.createContext();Te.Consumer;var xe={};function Re(e,t,r){var o=b(e),i=!we(e),a=t.attrs,s=void 0===a?g:a,c=t.componentId,u=void 0===c?function(e,t){var r="string"!=typeof e?"sc":Ce(e);xe[r]=(xe[r]||0)+1;var n=r+"-"+ke("5.3.11"+r+xe[r]);return t?t+"-"+n:n}(t.displayName,t.parentComponentId):c,f=t.displayName,p=void 0===f?function(e){return we(e)?"styled."+e:"Styled("+S(e)+")"}(e):f,v=t.displayName&&t.componentId?Ce(t.displayName)+"-"+t.componentId:t.componentId||u,C=o&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,k=t.shouldForwardProp;o&&e.shouldForwardProp&&(k=t.shouldForwardProp?function(r,n,o){return e.shouldForwardProp(r,n,o)&&t.shouldForwardProp(r,n,o)}:e.shouldForwardProp);var w,E=new J(r,v,o?e.componentStyle:void 0),_=E.isStatic&&0===s.length,A=function(e,t){return function(e,t,r,o){var i=e.attrs,a=e.componentStyle,s=e.defaultProps,c=e.foldedComponentIds,u=e.shouldForwardProp,f=e.styledComponentId,h=e.target,p=function(e,t,r){void 0===e&&(e=m);var n=d({},t,{theme:e}),o={};return r.forEach((function(e){var t,r,i,a=e;for(t in y(a)&&(a=a(n)),a)n[t]=o[t]="className"===t?(r=o[t],i=a[t],r&&i?r+" "+i:r||i):a[t]})),[n,o]}(ye(t,(0,n.useContext)(Te),s)||m,t,i),v=p[0],g=p[1],S=function(e,t,r,n){var o=ie(),i=ae();return t?e.generateAndInjectStyles(m,o,i):e.generateAndInjectStyles(r,o,i)}(a,o,v),b=r,C=g.$as||t.$as||g.as||t.as||h,k=we(C),w=g!==t?d({},t,{},g):t,E={};for(var _ in w)"$"!==_[0]&&"as"!==_&&("forwardedAs"===_?E.as=w[_]:(u?u(_,l.Z,C):!k||(0,l.Z)(_))&&(E[_]=w[_]));return t.style&&g.style!==t.style&&(E.style=d({},t.style,{},g.style)),E.className=Array.prototype.concat(c,f,S!==f?S:null,t.className,g.className).filter(Boolean).join(" "),E.ref=b,(0,n.createElement)(C,E)}(w,e,t,_)};return A.displayName=p,(w=n.forwardRef(A)).attrs=C,w.componentStyle=E,w.displayName=p,w.shouldForwardProp=k,w.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):g,w.styledComponentId=v,w.target=o?e.target:e,w.withComponent=function(e){var n=t.componentId,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(t,["componentId"]),i=n&&n+"-"+(we(e)?e:Ce(S(e)));return Re(e,d({},o,{attrs:C,componentId:i}),r)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Oe({},e.defaultProps,t):t}}),Object.defineProperty(w,"toString",{value:function(){return"."+w.styledComponentId}}),i&&h()(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var Pe=function(e){return function e(t,r,n){if(void 0===n&&(n=m),!(0,i.isValidElementType)(r))return E(1,String(r));var o=function(){return t(r,n,me.apply(void 0,arguments))};return o.withConfig=function(o){return e(t,r,d({},n,{},o))},o.attrs=function(o){return e(t,r,d({},n,{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},o}(Re,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){Pe[e]=Pe(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=q(e),B.registerId(this.componentId+1)}var t=e.prototype;t.createStyles=function(e,t,r,n){var o=n(ve(this.rules,t,r,n).join(""),""),i=this.componentId+e;r.insertRules(i,i,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,r,n){e>2&&B.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)}}();function Ie(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=me.apply(void 0,[e].concat(r)).join(""),i=ke(o);return new ce(i,o)}!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var r=F();return"<style "+[r&&'nonce="'+r+'"',C+'="true"','data-styled-version="5.3.11"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?E(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return E(2);var r=((t={})[C]="",t["data-styled-version"]="5.3.11",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=F();return o&&(r.nonce=o),[n.createElement("style",d({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new B({isServer:!0}),this.sealed=!1}var t=e.prototype;t.collectStyles=function(e){return this.sealed?E(2):n.createElement(se,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return E(3)}}();var De,Ne,je=Pe,Fe=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},We=242.776657104492,He=Ie(De||(De=Fe(["\n  12.5% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  43.75% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  100% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n"],["\n  12.5% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  43.75% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  100% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n"])),.14*We,We,.11*We,.35*We,We,.35*We,.01*We,We,.99*We),Le=(je.path(Ne||(Ne=Fe(["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"],["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"])),.01*We,We,He,1.6),function(e,t){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("undefined"!==typeof r[e])return r[e];if(e&&e.indexOf(".")>0){for(var n=e.split("."),o=n.length,i=r[n[0]],a=1;null!=i&&a<o;)i=i[n[a]],a+=1;if("undefined"!==typeof i)return i}return t}});var ze,$e,Ke,Be=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Ue=Ie(ze||(ze=Be(["\n to {\n    transform: rotate(360deg);\n  }\n"],["\n to {\n    transform: rotate(360deg);\n  }\n"])));je.svg($e||($e=Be(["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: ","s;\n"],["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: ","s;\n"])),Ue,Le("speed","0.75")),je.polyline(Ke||(Ke=Be(["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"],["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"])),(function(e){return e.width}));var Me,Ge,Ve,Ye=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},qe=Ie(Me||(Me=Ye(["\n to {\n    stroke-dashoffset: 136;\n  }\n"],["\n to {\n    stroke-dashoffset: 136;\n  }\n"]))),Ze=(je.polygon(Ge||(Ge=Ye(["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"],["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"])),qe),je.svg(Ve||(Ve=Ye(["\n  transform-origin: 50% 65%;\n"],["\n  transform-origin: 50% 65%;\n"]))),function(){return Ze=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Ze.apply(this,arguments)}),Je=function(e){var t=e.visible,r=void 0===t||t,i=e.height,a=void 0===i?"80":i,s=e.width,c=void 0===s?"80":s,u=e.ariaLabel,l=void 0===u?"vortex-loading":u,f=e.wrapperStyle,h=e.wrapperClass,d=e.colors,p=void 0===d?["#1B5299","#EF8354","#DB5461","#1B5299","#EF8354","#DB5461"]:d;return r?n.createElement("svg",Ze({height:a,width:c,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid","data-testid":"vortex-svg","aria-label":l,style:f,className:h},o),n.createElement("g",{transform:"translate(50,50)"},n.createElement("g",{transform:"scale(0.7)"},n.createElement("g",{transform:"translate(-50,-50)"},n.createElement("g",{transform:"rotate(137.831 50 50)"},n.createElement("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",values:"360 50 50;0 50 50",keyTimes:"0;1",dur:"1",keySplines:"0.5 0.5 0.5 0.5",calcMode:"spline"}),n.createElement("path",{fill:p[0],d:"M30.4,9.7c-7.4,10.9-11.8,23.8-12.3,37.9c0.2,1,0.5,1.9,0.7,2.8c1.4-5.2,3.4-10.3,6.2-15.1 c2.6-4.4,5.6-8.4,9-12c0.7-0.7,1.4-1.4,2.1-2.1c7.4-7,16.4-12,26-14.6C51.5,3.6,40.2,4.9,30.4,9.7z"}),n.createElement("path",{fill:p[1],d:"M24.8,64.2c-2.6-4.4-4.5-9.1-5.9-13.8c-0.3-0.9-0.5-1.9-0.7-2.8c-2.4-9.9-2.2-20.2,0.4-29.8 C10.6,25.5,6,36,5.3,46.8C11,58.6,20,68.9,31.9,76.3c0.9,0.3,1.9,0.5,2.8,0.8C31,73.3,27.6,69,24.8,64.2z"}),n.createElement("path",{fill:p[2],d:"M49.6,78.9c-5.1,0-10.1-0.6-14.9-1.8c-1-0.2-1.9-0.5-2.8-0.8c-9.8-2.9-18.5-8.2-25.6-15.2 c2.8,10.8,9.5,20,18.5,26c13.1,0.9,26.6-1.7,38.9-8.3c0.7-0.7,1.4-1.4,2.1-2.1C60.7,78.2,55.3,78.9,49.6,78.9z"}),n.createElement("path",{fill:p[3],d:"M81.1,49.6c-1.4,5.2-3.4,10.3-6.2,15.1c-2.6,4.4-5.6,8.4-9,12c-0.7,0.7-1.4,1.4-2.1,2.1 c-7.4,7-16.4,12-26,14.6c10.7,3,22.1,1.7,31.8-3.1c7.4-10.9,11.8-23.8,12.3-37.9C81.6,51.5,81.4,50.6,81.1,49.6z"}),n.createElement("path",{fill:p[4],d:"M75.2,12.9c-13.1-0.9-26.6,1.7-38.9,8.3c-0.7,0.7-1.4,1.4-2.1,2.1c5.2-1.4,10.6-2.2,16.2-2.2 c5.1,0,10.1,0.6,14.9,1.8c1,0.2,1.9,0.5,2.8,0.8c9.8,2.9,18.5,8.2,25.6,15.2C90.9,28.1,84.2,18.9,75.2,12.9z"}),n.createElement("path",{fill:p[5],d:"M94.7,53.2C89,41.4,80,31.1,68.1,23.7c-0.9-0.3-1.9-0.5-2.8-0.8c3.8,3.8,7.2,8.1,10,13 c2.6,4.4,4.5,9.1,5.9,13.8c0.3,0.9,0.5,1.9,0.7,2.8c2.4,9.9,2.2,20.2-0.4,29.8C89.4,74.5,94,64,94.7,53.2z"})))))):null}},816:function(e,t){var r,n=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),l=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function m(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case i:case s:case a:case h:case d:return e;default:switch(e=e&&e.$$typeof){case l:case u:case f:case v:case p:case c:return e;default:return t}}case o:return t}}}r=Symbol.for("react.module.reference"),t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===s||e===a||e===h||e===d||e===g||"object"===typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===p||e.$$typeof===c||e.$$typeof===u||e.$$typeof===f||e.$$typeof===r||void 0!==e.getModuleId)},t.typeOf=m},655:function(e,t,r){e.exports=r(816)},916:function(e,t,r){r.d(t,{P1:function(){return c}});var n="NOT_FOUND";var o=function(e,t){return e===t};function i(e,t){var r="object"===typeof t?t:{equalityCheck:t},i=r.equalityCheck,a=void 0===i?o:i,s=r.maxSize,c=void 0===s?1:s,u=r.resultEqualityCheck,l=function(e){return function(t,r){if(null===t||null===r||t.length!==r.length)return!1;for(var n=t.length,o=0;o<n;o++)if(!e(t[o],r[o]))return!1;return!0}}(a),f=1===c?function(e){var t;return{get:function(r){return t&&e(t.key,r)?t.value:n},put:function(e,r){t={key:e,value:r}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(l):function(e,t){var r=[];function o(e){var o=r.findIndex((function(r){return t(e,r.key)}));if(o>-1){var i=r[o];return o>0&&(r.splice(o,1),r.unshift(i)),i.value}return n}return{get:o,put:function(t,i){o(t)===n&&(r.unshift({key:t,value:i}),r.length>e&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(c,l);function h(){var t=f.get(arguments);if(t===n){if(t=e.apply(null,arguments),u){var r=f.getEntries(),o=r.find((function(e){return u(e.value,t)}));o&&(t=o.value)}f.put(arguments,t)}return t}return h.clearCache=function(){return f.clear()},h}function a(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var r=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return t}function s(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];var i,s=0,c={memoizeOptions:void 0},u=n.pop();if("object"===typeof u&&(c=u,u=n.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var l=c,f=l.memoizeOptions,h=void 0===f?r:f,d=Array.isArray(h)?h:[h],p=a(n),v=e.apply(void 0,[function(){return s++,u.apply(null,arguments)}].concat(d)),g=e((function(){for(var e=[],t=p.length,r=0;r<t;r++)e.push(p[r].apply(null,arguments));return i=v.apply(null,e)}));return Object.assign(g,{resultFunc:u,memoizedResultFunc:v,dependencies:p,lastResult:function(){return i},recomputations:function(){return s},resetRecomputations:function(){return s=0}}),g};return o}var c=s(i)}}]);
//# sourceMappingURL=67.e0b9ac78.chunk.js.map