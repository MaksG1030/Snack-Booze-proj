(this["webpackJsonpsnack-or-booze"]=this["webpackJsonpsnack-or-booze"]||[]).push([[0],{43:function(e,t,n){},45:function(e,t,n){},67:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(13),a=n.n(r),s=(n(43),n(44),n(27)),i=n(16),j=n(8),o=n(14),d=n(20),b=n(12),u=n(5),l=(n(45),n(4)),h=n(3);var O=function(e,t){return Object(h.jsx)("section",{className:"col-md-8",children:Object(h.jsx)(l.a,{children:Object(h.jsx)(l.b,{className:"text-center",children:Object(h.jsx)(l.d,{children:Object(h.jsxs)("h3",{className:"font-weight-bold",children:["Welcome to Silicon Valley's premier dive cafe!",Object(h.jsxs)("h4",{children:["There are ",e.length," snacks and ",t.length," drinks."]})]})})})})})},x=n(36),p=n(37),f=n(18),k=n.n(f),m={mode:"cors"},v=function(){function e(){Object(x.a)(this,e)}return Object(p.a)(e,null,[{key:"getSnacks",value:function(){var e=Object(o.a)(Object(j.a)().mark((function e(){var t;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(m,"/snacks"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getDrinks",value:function(){var e=Object(o.a)(Object(j.a)().mark((function e(){var t;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(m,"/drinks"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"addSnack",value:function(){var e=Object(o.a)(Object(j.a)().mark((function e(t){var n;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("".concat(m,"/snacks"),Object(i.a)({},t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"addDrink",value:function(){var e=Object(o.a)(Object(j.a)().mark((function e(t){var n;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("".concat(m,"/drinks"),Object(i.a)({},t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),w=v;n(67);var g=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(l.i,{expand:"md",children:[Object(h.jsx)(b.c,{exact:!0,to:"/",className:"navbar-brand",children:"Snack or Booze"}),Object(h.jsxs)(l.g,{className:"ml-auto",navbar:!0,children:[Object(h.jsx)(l.h,{children:Object(h.jsx)(b.c,{to:"/snacks",children:"Snacks"})}),Object(h.jsx)(l.h,{children:Object(h.jsx)(b.c,{to:"/drinks",children:"Drinks"})}),Object(h.jsx)(l.h,{children:Object(h.jsx)(b.c,{to:"/add",children:" Add "})})]})]})})};n(73);var y=function(e){var t=e.items,n=e.title;return Object(h.jsx)("section",{className:"col-md-4",children:Object(h.jsx)(l.a,{children:Object(h.jsxs)(l.b,{children:[Object(h.jsxs)(l.d,{className:"font-weight-bold text-center",children:[n,"Menu"]}),Object(h.jsx)(l.c,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(h.jsx)(l.e,{children:t.map((function(e){return Object(h.jsx)(b.b,{to:"/items/".concat(e.id),children:Object(h.jsx)(l.f,{children:e.name})},e.id)}))})]})})})};var S=function(e){var t=e.items,n=e.cantFind,c=Object(u.g)().id,r=t.find((function(e){return e.id===c}));return r?Object(h.jsx)("section",{children:Object(h.jsx)(l.a,{children:Object(h.jsxs)(l.b,{children:[Object(h.jsx)(l.d,{className:"font-weight-bold text-center",children:r.name}),Object(h.jsx)(l.c,{className:"font-italic",children:r.description}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Recipe:"})," ",r.recipe]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Serve:"})," ",r.serve]})]})})}):Object(h.jsx)(u.a,{to:n})},N=n.p+"static/media/AddForm.d1f6668f.bin";var D=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),l=Object(d.a)(a,2),x=l[0],p=l[1],f=Object(c.useState)([]),k=Object(d.a)(f,2),m=k[0],v=k[1];Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(Object(j.a)().mark((function e(){var t,n;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getSnacks([]);case 2:return t=e.sent,e.next=5,w.getDrinks([]);case 5:n=e.sent,p(t),v(n),r(!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var D=function(){var e=Object(o.a)(Object(j.a)().mark((function e(t){var n;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(i.a)(Object(i.a)({},t),{},{id:t.name.toLowerCase().replace(" ","-"),userAdd:!0}),"snack"!==t.type){e.next=7;break}return e.next=4,w.addSnack(n);case 4:p((function(e){return[].concat(Object(s.a)(e),[n])})),e.next=11;break;case 7:if("drink"!==t.type){e.next=11;break}return e.next=10,w.addDrink(n);case 10:v((function(e){return[].concat(Object(s.a)(e),[n])}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n?Object(h.jsx)("p",{style:{color:"white"},children:"Loading \u2026"}):Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(b.a,{children:[Object(h.jsx)(g,{}),Object(h.jsx)("main",{children:Object(h.jsxs)(u.d,{children:[Object(h.jsx)(u.b,{exact:!0,path:"/",children:Object(h.jsx)(O,{snacks:x})}),Object(h.jsx)(u.b,{exact:!0,path:"/snacks/",children:Object(h.jsx)(y,{items:x,title:"Snacks"})}),Object(h.jsx)(u.b,{path:"/snacks/:id",children:Object(h.jsx)(S,{items:x,cantFind:"/snacks"})}),Object(h.jsx)(u.b,{exact:!0,path:"/drinks",children:Object(h.jsx)(y,{items:m,title:"Drinks"})}),Object(h.jsx)(u.b,{path:"/drinks/:id",children:Object(h.jsx)(S,{items:m,cantFind:"/drinks"})}),Object(h.jsx)(u.b,{exact:!0,path:"/add",children:Object(h.jsx)(N,{add:D,toggleLoad:r})}),Object(h.jsx)(u.b,{children:Object(h.jsx)("p",{children:"Hmmm. I can't seem to find what you want."})})]})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(h.jsx)(D,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[74,1,2]]]);
//# sourceMappingURL=main.555ca2ad.chunk.js.map