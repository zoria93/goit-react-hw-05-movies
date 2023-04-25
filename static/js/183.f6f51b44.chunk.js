"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[183],{183:function(n,e,r){r.r(e),r.d(e,{default:function(){return w}});var t,o,c,a,u,i=r(439),s=r(87),f=r(689),p=r(791),l=r(593),h=r(168),d=r(444),b=d.ZP.input(t||(t=(0,h.Z)(["\n  height: 32px;\n  width: 250px;\n\n  border-radius: 8px;\n  border-color: deepskyblue;\n  &:hover,\n  &:focus,\n  &:active {\n    outline-color: orangered;\n  }\n"]))),v=d.ZP.button(o||(o=(0,h.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  margin-left: 3px;\n  text-decoration: none;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  background-color: deepskyblue;\n\n  &:hover,\n  &:focus,\n  &:active {\n    background-color: orangered;\n  }\n"]))),x=d.ZP.li(c||(c=(0,h.Z)(["\n  margin-top: 10px;\n"]))),k=(0,d.ZP)(s.rU)(a||(a=(0,h.Z)(["\n  color: black;\n  color: inherit;\n  font-size: 15px;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus,\n  &:active {\n    color: orangered;\n  }\n"]))),m=d.ZP.p(u||(u=(0,h.Z)(["\n  font-size: 20px;\n  margin-top: 10px;\n"]))),g=r(184),w=function(){var n,e=(0,p.useState)(""),r=(0,i.Z)(e,2),t=r[0],o=r[1],c=(0,p.useState)([]),a=(0,i.Z)(c,2),u=a[0],h=a[1],d=(0,p.useState)(!1),w=(0,i.Z)(d,2),y=w[0],j=w[1],P=(0,s.lr)(),Z=(0,i.Z)(P,2),_=Z[0],S=Z[1],z=null!==(n=_.get("query"))&&void 0!==n?n:"",E=(0,f.TH)();console.log(),(0,p.useEffect)((function(){""!==z&&(0,l.PT)(z).then((function(n){0!==n.results.length?(h(n.results),j(!1)):j(!0)})).catch((function(n){return console.log(n.message)}))}),[z]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("form",{onSubmit:function(n){n.preventDefault(),S({query:t}),o(""),h([])},action:"off",children:[(0,g.jsx)(b,{placeholder:"Search movies...",type:"text",value:t,onChange:function(n){o(n.target.value)}}),(0,g.jsx)(v,{type:"submit",children:"Search"})]}),u.length>0&&(0,g.jsx)("ul",{children:u.map((function(n){var e=n.kinopoisk_id,r=n.info.rus;return(0,g.jsx)(x,{children:(0,g.jsx)(k,{to:"/movies/".concat(e),state:{from:E},children:r})},function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_")}),"")}())}))}),y&&(0,g.jsx)(m,{children:"There is no movies on your query! Please try again!"})]})}},593:function(n,e,r){function t(n,e,r,t,o,c,a){try{var u=n[c](a),i=u.value}catch(s){return void r(s)}u.done?e(i):Promise.resolve(i).then(t,o)}function o(n){return function(){var e=this,r=arguments;return new Promise((function(o,c){var a=n.apply(e,r);function u(n){t(a,o,c,u,i,"next",n)}function i(n){t(a,o,c,u,i,"throw",n)}u(void 0)}))}}r.d(e,{IQ:function(){return b},s_:function(){return d},Jh:function(){return v},V0:function(){return l},PT:function(){return h},Hg:function(){return p}});var c=r(757),a=r.n(c),u="https://api.themoviedb.org/3/",i="a19b1687fe9e52121952a921faf7bb58",s="https://bazon.cc/api/",f="c69778ce88918520e7adb0dc758dbe37",p=function(){var n=o(a().mark((function n(){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("\n".concat(u,"trending/movie/week?api_key=").concat(i,"&language=ru"));case 2:if(!(e=n.sent).ok){n.next=8;break}return n.next=6,e.json("");case 6:return r=n.sent,n.abrupt("return",r);case 8:return n.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=o(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("\n       ".concat(u,"search/multi?api_key=").concat(i,"&language=en&query=").concat(e,"&page=1&include_adult=false\n    "));case 2:if(!(r=n.sent).ok){n.next=8;break}return n.next=6,r.json("");case 6:return t=n.sent,n.abrupt("return",t);case 8:return n.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=o(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("\n       ".concat(s,"search?token=").concat(f,"&title=").concat(e,"\n    "));case 2:if(!(r=n.sent).ok){n.next=8;break}return n.next=6,r.json("");case 6:return t=n.sent,n.abrupt("return",t);case 8:return n.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=o(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"search?token=").concat(f,"&kp=").concat(e));case 2:if(!(r=n.sent).ok){n.next=8;break}return n.next=6,r.json("");case 6:return t=n.sent,n.abrupt("return",t);case 8:return n.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),b=function(){var n=o(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("\n".concat(u,"movie/").concat(e,"/credits?api_key=").concat(i,"&language=uk\n    "));case 2:if(!(r=n.sent).ok){n.next=8;break}return n.next=6,r.json("");case 6:return t=n.sent,n.abrupt("return",t);case 8:return n.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=o(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("\n".concat(u,"movie/").concat(e,"/reviews?api_key=").concat(i,"&language=uk\n    "));case 2:if(!(r=n.sent).ok){n.next=8;break}return n.next=6,r.json("");case 6:return t=n.sent,n.abrupt("return",t);case 8:return n.abrupt("return",Promise.reject(new Error("error")));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=183.f6f51b44.chunk.js.map