/*! For license information please see 326.3b5782b6.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[326],{326:function(e,r,n){n.r(r),n.d(r,{default:function(){return f}});var t=n(439),a=n(791),o=n(593),u=n(433),c=n(725),l=n.n(c),s=function(e){for(var r=e.url,n=e.allowFullScreen,t=e.position,o=e.display,c=e.height,s=e.width,i=e.overflow,f=e.styles,p=e.onLoad,b=e.onMouseOver,h=e.onMouseOut,d=e.scrolling,v=e.id,y=e.frameBorder,w=e.ariaHidden,m=e.sandbox,k=e.allow,g=e.className,j=e.title,x=e.ariaLabel,O=e.ariaLabelledby,P=e.name,_=e.target,E=e.loading,S=e.importance,q=e.referrerpolicy,N=e.allowpaymentrequest,C=e.src,F=e.key,L=l()({src:C||r,target:_||null,style:{position:t||null,display:o||"initial",overflow:i||null},scrolling:d||null,allowpaymentrequest:N||null,importance:S||null,sandbox:m&&(0,u.Z)(m).join(" ")||null,loading:E||null,styles:f||null,name:P||null,className:g||null,allowFullScreen:"allowFullScreen",referrerpolicy:q||null,title:j||null,allow:k||null,id:v||null,"aria-labelledby":O||null,"aria-hidden":w||null,"aria-label":x||null,width:s||null,height:c||null,onLoad:p||null,onMouseOver:b||null,onMouseOut:h||null,key:F||"iframe"}),M=Object.create(null),T=0,H=Object.keys(L);T<H.length;T++){var I=H[T];null!=L[I]&&(M[I]=L[I])}for(var Z=0,z=Object.keys(M.style);Z<z.length;Z++){var B=z[Z];null==M.style[B]&&delete M.style[B]}if(M.styles)for(var J=0,Q=Object.keys(M.styles);J<Q.length;J++){var V=Q[J];M.styles.hasOwnProperty(V)&&(M.style[V]=M.styles[V]),Object.keys(M.styles).pop()==V&&delete M.styles}if(n)if("allow"in M){var A=M.allow.replace("fullscreen","");M.allow="fullscreen ".concat(A.trim()).trim()}else M.allow="fullscreen";return y>=0&&(M.style.hasOwnProperty("border")||(M.style.border=y)),a.createElement("iframe",Object.assign({},M))},i=n(184),f=function(e){var r=e.title,n=(0,a.useState)([]),u=(0,t.Z)(n,2),c=u[0],l=u[1];(0,a.useEffect)((function(){r&&(0,o.PT)(r).then((function(e){return e.results})).then((function(e){return l(e.find((function(e){return e.info.rus||e.info.alter||e.info.ukr||e.info.orig.includes(r)===r})))})).catch((function(e){return console.log(e.message)}))}),[r]);var f=(null!==c&&void 0!==c?c:"").link;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s,{url:f,width:"640px",height:"320px",id:"",className:"",display:"block",position:"relative"})})}},593:function(e,r,n){function t(e,r,n,t,a,o,u){try{var c=e[o](u),l=c.value}catch(s){return void n(s)}c.done?r(l):Promise.resolve(l).then(t,a)}function a(e){return function(){var r=this,n=arguments;return new Promise((function(a,o){var u=e.apply(r,n);function c(e){t(u,a,o,c,l,"next",e)}function l(e){t(u,a,o,c,l,"throw",e)}c(void 0)}))}}n.d(r,{IQ:function(){return b},s_:function(){return f},Jh:function(){return h},V0:function(){return i},PT:function(){return p},Hg:function(){return s}});var o=n(757),u=n.n(o),c="https://api.themoviedb.org/3/",l="a19b1687fe9e52121952a921faf7bb58",s=function(){var e=a(u().mark((function e(){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("\n".concat(c,"trending/movie/week?api_key=").concat(l,"&language=ru"));case 2:if(!(r=e.sent).ok){e.next=8;break}return e.next=6,r.json("");case 6:return n=e.sent,e.abrupt("return",n);case 8:return e.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=a(u().mark((function e(r){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("\n       ".concat(c,"search/movie?api_key=").concat(l,"&language=ru&query=").concat(r,"&page=1&include_adult=false\n    "));case 2:if(!(n=e.sent).ok){e.next=8;break}return e.next=6,n.json("");case 6:return t=e.sent,e.abrupt("return",t);case 8:return e.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=a(u().mark((function e(r){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"movie/").concat(r,"?api_key=").concat(l,"&language=ru"));case 2:if(!(n=e.sent).ok){e.next=8;break}return e.next=6,n.json("");case 6:return t=e.sent,e.abrupt("return",t);case 8:return e.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=a(u().mark((function e(r){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("\n       ".concat("https://bazon.cc/api/","search?token=").concat("c69778ce88918520e7adb0dc758dbe37","&title=").concat(r,"\n    "));case 2:if(!(n=e.sent).ok){e.next=8;break}return e.next=6,n.json("");case 6:return t=e.sent,e.abrupt("return",t);case 8:return e.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),b=function(){var e=a(u().mark((function e(r){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("\n".concat(c,"movie/").concat(r,"/credits?api_key=").concat(l,"&language=uk\n    "));case 2:if(!(n=e.sent).ok){e.next=8;break}return e.next=6,n.json("");case 6:return t=e.sent,e.abrupt("return",t);case 8:return e.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=a(u().mark((function e(r){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("\n".concat(c,"movie/").concat(r,"/reviews?api_key=").concat(l,"&language=uk\n    "));case 2:if(!(n=e.sent).ok){e.next=8;break}return e.next=6,n.json("");case 6:return t=e.sent,e.abrupt("return",t);case 8:return e.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},725:function(e){var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var u,c,l=a(e),s=1;s<arguments.length;s++){for(var i in u=Object(arguments[s]))n.call(u,i)&&(l[i]=u[i]);if(r){c=r(u);for(var f=0;f<c.length;f++)t.call(u,c[f])&&(l[c[f]]=u[c[f]])}}return l}}}]);
//# sourceMappingURL=326.3b5782b6.chunk.js.map