"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{304:function(r,n,e){e.r(n),e.d(n,{default:function(){return k}});var t,c,o,a=e(439),u=e(791),i=e(593),s=e(168),f=e(444),p=e(87),h=f.ZP.h1(t||(t=(0,s.Z)(["\n  margin-bottom: 15px;\n"]))),b=f.ZP.li(c||(c=(0,s.Z)(["\n  margin-top: 10px;\n"]))),v=(0,f.ZP)(p.rU)(o||(o=(0,s.Z)(["\n  color: black;\n  color: inherit;\n  font-size: 15px;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus,\n  &:active {\n    color: orangered;\n  }\n"]))),l=e(184),k=function(){var r=(0,u.useState)([]),n=(0,a.Z)(r,2),e=n[0],t=n[1];return(0,u.useEffect)((function(){(0,i.Hg)().then((function(r){return t(r.results)})).catch((function(r){return console.log(r.message)}))}),[]),(0,l.jsxs)("div",{children:[(0,l.jsx)(h,{children:"Trending today"}),(0,l.jsx)("ul",{children:e.map((function(r){var n=r.title,e=r.id;return(0,l.jsx)(b,{children:(0,l.jsx)(v,{to:"/movies/".concat(e),children:n})},e)}))})]})}},593:function(r,n,e){function t(r,n,e,t,c,o,a){try{var u=r[o](a),i=u.value}catch(s){return void e(s)}u.done?n(i):Promise.resolve(i).then(t,c)}function c(r){return function(){var n=this,e=arguments;return new Promise((function(c,o){var a=r.apply(n,e);function u(r){t(a,c,o,u,i,"next",r)}function i(r){t(a,c,o,u,i,"throw",r)}u(void 0)}))}}e.d(n,{IQ:function(){return v},s_:function(){return b},Jh:function(){return l},PT:function(){return h},Hg:function(){return p}});var o=e(757),a=e.n(o),u="https://api.themoviedb.org/3/",i="a19b1687fe9e52121952a921faf7bb58",s="https://bazon.cc/api/",f="c69778ce88918520e7adb0dc758dbe37",p=function(){var r=c(a().mark((function r(){var n,e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("\n".concat(u,"trending/movie/week?api_key=").concat(i,"&language=ru"));case 2:if(!(n=r.sent).ok){r.next=8;break}return r.next=6,n.json("");case 6:return e=r.sent,r.abrupt("return",e);case 8:return r.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),h=function(){var r=c(a().mark((function r(n){var e,t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("\n       ".concat(s,"search?token=").concat(f,"&title=").concat(n,"\n    "));case 2:if(!(e=r.sent).ok){r.next=8;break}return r.next=6,e.json("");case 6:return t=r.sent,r.abrupt("return",t);case 8:return r.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),b=function(){var r=c(a().mark((function r(n){var e,t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("".concat(s,"search?token=").concat(f,"&kp=").concat(n));case 2:if(!(e=r.sent).ok){r.next=8;break}return r.next=6,e.json("");case 6:return t=r.sent,r.abrupt("return",t);case 8:return r.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),v=function(){var r=c(a().mark((function r(n){var e,t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("\n".concat(u,"movie/").concat(n,"/credits?api_key=").concat(i,"&language=uk\n    "));case 2:if(!(e=r.sent).ok){r.next=8;break}return r.next=6,e.json("");case 6:return t=r.sent,r.abrupt("return",t);case 8:return r.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),l=function(){var r=c(a().mark((function r(n){var e,t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("\n".concat(u,"movie/").concat(n,"/reviews?api_key=").concat(i,"&language=uk\n    "));case 2:if(!(e=r.sent).ok){r.next=8;break}return r.next=6,e.json("");case 6:return t=r.sent,r.abrupt("return",t);case 8:return r.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=304.1eaeb23a.chunk.js.map