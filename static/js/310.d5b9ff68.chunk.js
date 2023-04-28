"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{770:function(n,r,e){e.r(r),e.d(r,{default:function(){return y}});var t,o,c,u,a,i=e(439),s=e(87),f=e(689),p=e(791),l=e(593),h=e(168),d=e(444),b=d.ZP.input(t||(t=(0,h.Z)(["\n  height: 32px;\n  width: 250px;\n\n  border-radius: 8px;\n  border-color: deepskyblue;\n  &:hover,\n  &:focus,\n  &:active {\n    outline-color: orangered;\n  }\n"]))),v=d.ZP.button(o||(o=(0,h.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  margin-left: 3px;\n  text-decoration: none;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  background-color: deepskyblue;\n\n  &:hover,\n  &:focus,\n  &:active {\n    background-color: orangered;\n  }\n"]))),x=d.ZP.li(c||(c=(0,h.Z)(["\n  margin-top: 10px;\n"]))),k=(0,d.ZP)(s.rU)(u||(u=(0,h.Z)(["\n  color: black;\n  color: inherit;\n  font-size: 15px;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus,\n  &:active {\n    color: orangered;\n  }\n"]))),m=d.ZP.p(a||(a=(0,h.Z)(["\n  font-size: 20px;\n  margin-top: 10px;\n"]))),g=e(984),w=e(184),y=function(){var n,r=(0,p.useState)(""),e=(0,i.Z)(r,2),t=e[0],o=e[1],c=(0,p.useState)([]),u=(0,i.Z)(c,2),a=u[0],h=u[1],d=(0,p.useState)(!1),y=(0,i.Z)(d,2),j=y[0],P=y[1],Z=(0,s.lr)(),_=(0,i.Z)(Z,2),S=_[0],z=_[1],E=null!==(n=S.get("query"))&&void 0!==n?n:"",q=(0,f.TH)();console.log(),(0,p.useEffect)((function(){""!==E&&(0,l.PT)(E).then((function(n){0!==n.results.length?(h(n.results),P(!1)):P(!0)})).catch((function(n){return console.log(n.message)}))}),[E]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("form",{onSubmit:function(n){n.preventDefault(),z({query:t}),o(""),h([])},action:"off",children:[(0,w.jsx)(b,{placeholder:"Search movies...",type:"text",value:t,onChange:function(n){o(n.target.value)}}),(0,w.jsx)(v,{type:"submit",children:"Search"})]}),a.length>0&&(0,w.jsx)("ul",{children:a.map((function(n){var r=n.kinopoisk_id,e=n.info.rus;return(0,w.jsx)(x,{children:(0,w.jsx)(k,{to:"/movies/".concat(r),state:{from:q},children:e})},(0,g.x0)())}))}),j&&(0,w.jsx)(m,{children:"There is no movies on your query! Please try again!"})]})}},593:function(n,r,e){function t(n,r,e,t,o,c,u){try{var a=n[c](u),i=a.value}catch(s){return void e(s)}a.done?r(i):Promise.resolve(i).then(t,o)}function o(n){return function(){var r=this,e=arguments;return new Promise((function(o,c){var u=n.apply(r,e);function a(n){t(u,o,c,a,i,"next",n)}function i(n){t(u,o,c,a,i,"throw",n)}a(void 0)}))}}e.d(r,{IQ:function(){return b},s_:function(){return d},Jh:function(){return v},V0:function(){return l},PT:function(){return h},Hg:function(){return p}});var c=e(757),u=e.n(c),a="https://api.themoviedb.org/3/",i="a19b1687fe9e52121952a921faf7bb58",s="https://bazon.cc/api/",f="c69778ce88918520e7adb0dc758dbe37",p=function(){var n=o(u().mark((function n(){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("\n".concat(a,"trending/movie/week?api_key=").concat(i,"&language=ru"));case 2:if(!(r=n.sent).ok){n.next=8;break}return n.next=6,r.json("");case 6:return e=n.sent,n.abrupt("return",e);case 8:return n.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=o(u().mark((function n(r){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("\n       ".concat(a,"search/multi?api_key=").concat(i,"&language=en&query=").concat(r,"&page=1&include_adult=false\n    "));case 2:if(!(e=n.sent).ok){n.next=8;break}return n.next=6,e.json("");case 6:return t=n.sent,n.abrupt("return",t);case 8:return n.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),h=function(){var n=o(u().mark((function n(r){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("\n       ".concat(s,"search?token=").concat(f,"&title=").concat(r,"\n    "));case 2:if(!(e=n.sent).ok){n.next=8;break}return n.next=6,e.json("");case 6:return t=n.sent,n.abrupt("return",t);case 8:return n.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=o(u().mark((function n(r){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"search?token=").concat(f,"&kp=").concat(r));case 2:if(!(e=n.sent).ok){n.next=8;break}return n.next=6,e.json("");case 6:return t=n.sent,n.abrupt("return",t);case 8:return n.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),b=function(){var n=o(u().mark((function n(r){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("\n".concat(a,"movie/").concat(r,"/credits?api_key=").concat(i,"&language=uk\n    "));case 2:if(!(e=n.sent).ok){n.next=8;break}return n.next=6,e.json("");case 6:return t=n.sent,n.abrupt("return",t);case 8:return n.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),v=function(){var n=o(u().mark((function n(r){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("\n".concat(a,"movie/").concat(r,"/reviews?api_key=").concat(i,"&language=uk\n    "));case 2:if(!(e=n.sent).ok){n.next=8;break}return n.next=6,e.json("");case 6:return t=n.sent,n.abrupt("return",t);case 8:return n.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},984:function(n,r,e){e.d(r,{x0:function(){return t}});var t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,r){return n+=(r&=63)<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=310.d5b9ff68.chunk.js.map