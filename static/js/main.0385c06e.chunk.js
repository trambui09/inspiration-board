(this["webpackJsonpinspiration-board"]=this["webpackJsonpinspiration-board"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},48:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e){e.exports=JSON.parse("{}")},58:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(3),o=n(20),r=n.n(o),i=(n(28),n(29),n(21)),s=n(5),d=n(7),l=n.n(d),u=(n(48),n(2)),j=n.n(u),h=(n(55),function(e){return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsxs)("div",{className:"card__content",children:[Object(a.jsx)("p",{className:"card__content-text",children:e.text}),Object(a.jsx)("p",{className:"card__content-emoji",children:j.a.getUnicode("".concat(e.emojiText))})]}),Object(a.jsx)("button",{onClick:function(){return e.onDeleteCard(e.id)},className:"card__delete",children:"Delete"})]})}),f=n(22),b=(n(56),function(e){var t=Object(c.useState)({text:"",emoji:""}),n=Object(s.a)(t,2),o=n[0],r=n[1],i=function(e){var t=e.target,n=t.name,a=t.value,c=Object(f.a)({},o);c[n]=a,r(c)};return Object(a.jsxs)("form",{className:"new-card-form",onSubmit:function(t){t.preventDefault(),e.onAddCard(o),r({text:"",emoji:""})},children:[Object(a.jsx)("p",{className:"new-card-form__header",children:"Submit a Card!"}),Object(a.jsx)("div",{className:"new-card-form__form",children:Object(a.jsxs)("label",{className:"new-card-form__form-label",children:["Text:",Object(a.jsx)("textarea",{value:o.text,name:"text",onChange:i,className:"new-card-form__form-textarea"})]})}),Object(a.jsx)("div",{className:"new-card-form__form",children:Object(a.jsxs)("label",{className:"new-card-form__form-label",children:["Emoji",Object(a.jsxs)("select",{value:o.emoji,name:"emoji",onChange:i,className:"new-card-form__form-select",children:[Object(a.jsx)("option",{value:""}),Object(a.jsx)("option",{value:"heart_eyes",children:j.a.getUnicode("heart_eyes")}),Object(a.jsx)("option",{value:"beer",children:j.a.getUnicode("beer")}),Object(a.jsx)("option",{value:"clap",children:j.a.getUnicode("clap")}),Object(a.jsx)("option",{value:"sparkling_heart",children:j.a.getUnicode("sparkling_heart")}),Object(a.jsx)("option",{value:"heart_eyes_cat",children:j.a.getUnicode("heart_eyes_cat")}),Object(a.jsx)("option",{value:"dog",children:j.a.getUnicode("dog")})]})]})}),Object(a.jsx)("input",{type:"submit",value:"Add Card",className:"new-card-form__form-button"})]})}),m=(n(57),function(e){var t=Object(c.useState)([]),n=Object(s.a)(t,2),o=n[0],r=n[1],d=Object(c.useState)(null),u=Object(s.a)(d,2),j=u[0],f=u[1];Object(c.useEffect)((function(){l.a.get("".concat(e.url).concat(e.boardName,"/cards")).then((function(e){var t=e.data;r(t)})).catch((function(e){f(e.message)}))}),[]);var m=function(e){var t=o.filter((function(t){return t.card.id!==e}));t.length<o.length&&(l.a.delete("".concat("https://inspiration-board.herokuapp.com/cards","/").concat(e)).then((function(t){f("Card #".concat(e," deleted!"))})).catch((function(t){f("Unable to delete card #".concat(e))})),r(t))},p=o.map((function(e){return Object(a.jsx)(h,{id:e.card.id,text:e.card.text,emojiText:e.card.emoji,onDeleteCard:m},e.card.id)}));return Object(a.jsxs)("div",{children:[Object(a.jsx)(b,{onAddCard:function(t){l.a.post("".concat(e.url).concat(e.boardName,"/cards"),t).then((function(e){var t=[].concat(Object(i.a)(o),[e.data]);r(t),f("")})).catch((function(e){f(j)}))}}),p]})}),p=function(){return Object(a.jsxs)("section",{children:[Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("h1",{className:"header__h1",children:Object(a.jsxs)("span",{className:"header__text",children:[j.a.getUnicode("heart_eyes")," Inspiration Board ",j.a.getUnicode("heart_eyes")]})})}),Object(a.jsx)(m,{url:"https://inspiration-board.herokuapp.com/boards/",boardName:"tram-bui"})]})},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(a.jsx)(p,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/inspiration-board",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/inspiration-board","/service-worker.js");x?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):v(e)}))}}()}},[[58,1,2]]]);
//# sourceMappingURL=main.0385c06e.chunk.js.map