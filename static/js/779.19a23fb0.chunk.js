"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{779:function(r,n,e){e.r(n),e.d(n,{default:function(){return k}});var t,c,a=e(439),u=e(791),o=e(689),s=e(593),i=e(168),f=e(444),p=f.ZP.h3(t||(t=(0,i.Z)(["\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]))),h=f.ZP.p(c||(c=(0,i.Z)(["\n  margin-top: 10px;\n  font-size: 20px;\n"]))),v=e(184),k=function(){var r=(0,u.useState)([]),n=(0,a.Z)(r,2),e=n[0],t=n[1],c=(0,o.UO)().movieId;return(0,u.useEffect)((function(){(0,s.Jh)(c).then((function(r){return t(r.results)})).catch((function(r){return console.log(r.message)}))}),[c]),0!==e.length?(0,v.jsx)("ul",{children:e.map((function(r){var n=r.author,e=r.content,t=r.id;return(0,v.jsxs)("li",{children:[(0,v.jsxs)(p,{children:["Author: ",n]}),(0,v.jsx)("p",{children:e})]},t)}))}):(0,v.jsx)(h,{children:"We dont have any reviews for this movie"})}},593:function(r,n,e){function t(r,n,e,t,c,a,u){try{var o=r[a](u),s=o.value}catch(i){return void e(i)}o.done?n(s):Promise.resolve(s).then(t,c)}function c(r){return function(){var n=this,e=arguments;return new Promise((function(c,a){var u=r.apply(n,e);function o(r){t(u,c,a,o,s,"next",r)}function s(r){t(u,c,a,o,s,"throw",r)}o(void 0)}))}}e.d(n,{IQ:function(){return l},s_:function(){return k},Jh:function(){return x},V0:function(){return h},PT:function(){return v},Hg:function(){return p}});var a=e(757),u=e.n(a),o="https://api.themoviedb.org/3/",s="a19b1687fe9e52121952a921faf7bb58",i="https://bazon.cc/api/",f="c69778ce88918520e7adb0dc758dbe37",p=function(){var r=c(u().mark((function r(){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("\n".concat(o,"trending/movie/week?api_key=").concat(s,"&language=ru"));case 2:if(!(n=r.sent).ok){r.next=8;break}return r.next=6,n.json("");case 6:return e=r.sent,r.abrupt("return",e);case 8:return r.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),h=function(){var r=c(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("\n       ".concat(o,"search/multi?api_key=").concat(s,"&language=en&query=").concat(n,"&page=1&include_adult=false\n    "));case 2:if(!(e=r.sent).ok){r.next=8;break}return r.next=6,e.json("");case 6:return t=r.sent,r.abrupt("return",t);case 8:return r.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),v=function(){var r=c(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("\n       ".concat(i,"search?token=").concat(f,"&title=").concat(n,"\n    "));case 2:if(!(e=r.sent).ok){r.next=8;break}return r.next=6,e.json("");case 6:return t=r.sent,r.abrupt("return",t);case 8:return r.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),k=function(){var r=c(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("".concat(i,"search?token=").concat(f,"&kp=").concat(n));case 2:if(!(e=r.sent).ok){r.next=8;break}return r.next=6,e.json("");case 6:return t=r.sent,r.abrupt("return",t);case 8:return r.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),l=function(){var r=c(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("\n".concat(o,"movie/").concat(n,"/credits?api_key=").concat(s,"&language=uk\n    "));case 2:if(!(e=r.sent).ok){r.next=8;break}return r.next=6,e.json("");case 6:return t=r.sent,r.abrupt("return",t);case 8:return r.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),x=function(){var r=c(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("\n".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(s,"&language=uk\n    "));case 2:if(!(e=r.sent).ok){r.next=8;break}return r.next=6,e.json("");case 6:return t=r.sent,r.abrupt("return",t);case 8:return r.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=779.19a23fb0.chunk.js.map