(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{23:function(e,t,n){e.exports={list:"ContactList_list__3RUXu",text:"ContactList_text__284-x",text_d:"ContactList_text_d__2agB3",item:"ContactList_item__Q6Ijj",button:"ContactList_button__2ncds"}},58:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a,c=n(1),r=n.n(c),s=n(11),i=n.n(s),o=n(38),b=n(15),l=n(17),j=n(39),d=n.n(j),u=n(7),m=n(9),O=Object(b.b)("contact/add",(function(e,t){return{payload:{id:Object(b.d)(),name:e,number:t}}})),x=Object(b.b)("contact/delete"),h=Object(b.b)("contact/filter"),f=n(30),p=Object(b.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(a={},Object(u.a)(a,O,(function(e,t){return function(e,t){return e.some((function(e){return e.name===t.payload.name}))?(alert("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ".concat(t.payload.name," \u0443\u0436\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d")),e):[].concat(Object(f.a)(e),[t.payload])}(e,t)})),Object(u.a)(a,x,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),v=Object(b.c)("",Object(u.a)({},h,(function(e,t){return t.payload}))),g=Object(m.b)({items:p,filter:v}),C=n(40),_=n.n(C),y={key:"contacts",storage:d.a,blacklist:["filter"]},N=Object(b.a)({reducer:{contacts:Object(l.g)(y,g)},middleware:function(e){return e({serializableCheck:{ignoredActions:[l.a,l.f,l.b,l.c,l.d,l.e]}}).concat(_.a)},devTools:!1}),k=Object(l.h)(N),L=n(14),w=(n(58),n(59),n(35)),A=n(36),B=n(45),S=n(25),z=n(44),I=n(8),E=n(42),F=n(13),J=n(2);function Z(){var e=Object(c.useState)(""),t=Object(I.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(I.a)(r,2),i=s[0],o=s[1],b=Object(L.b)(),l=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":a(c);break;case"number":o(c);break;default:return}},j=function(){a(""),o("")};return Object(J.jsxs)(F.a,{onSubmit:function(e){e.preventDefault(),b(O(n,i)),console.log(n,i),j()},children:[Object(J.jsxs)(F.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(J.jsx)(F.a.Label,{children:"Name"}),Object(J.jsx)(F.a.Control,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:l})]}),Object(J.jsxs)(F.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(J.jsx)(F.a.Label,{children:"Number"}),Object(J.jsx)(F.a.Control,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:i,onChange:l})]}),Object(J.jsx)(E.a,{type:"submit",variant:"secondary",className:"mx-6",children:"Add contact"})]})}var q=n(23),G=n.n(q),M=n(37),P=n(43);function R(){var e=Object(L.c)((function(e){var t=e.contacts;return function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.trim().toLowerCase())}))}(t.items,t.filter)})),t=Object(L.b)();return Object(J.jsx)(M.a,{as:"ul",variant:"flush",children:e.map((function(e){var n=e.id,a=e.name,c=e.number;return Object(J.jsxs)(M.a.Item,{as:"li",className:G.a.item,children:[Object(J.jsxs)("div",{children:[Object(J.jsxs)("p",{className:G.a.text,children:["Name: ",Object(J.jsx)("span",{className:G.a.text_d,children:a})]}),Object(J.jsxs)("p",{className:G.a.text,children:["Number: ",Object(J.jsx)("span",{className:G.a.text_d,children:c})]})]}),Object(J.jsx)("button",{type:"button",id:n,className:G.a.button,onClick:function(){return t(x(n))},children:Object(J.jsx)(P.a,{})})]},n)}))})}function T(){var e=Object(L.c)((function(e){return e.contacts.filter})),t=Object(L.b)();return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(F.a.Label,{children:"Find contacts by name"}),Object(J.jsx)(F.a.Control,{type:"text",name:"filter",value:e,onChange:function(e){return t(h(e.currentTarget.value))}})]})}var D=function(){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(A.a,{bg:"dark",variant:"dark",children:Object(J.jsx)(w.a,{children:Object(J.jsxs)(A.a.Brand,{children:[Object(J.jsx)(z.a,{}),"Phonebook"]})})}),Object(J.jsx)(w.a,{className:"p-3",children:Object(J.jsxs)(B.a,{children:[Object(J.jsx)(S.a,{sm:4,children:Object(J.jsx)(Z,{})}),Object(J.jsxs)(S.a,{sm:8,children:[Object(J.jsx)(T,{}),Object(J.jsx)(R,{})]})]})})]})};n(61);console.log(N.getState()),i.a.render(Object(J.jsx)(r.a.StrictMode,{children:Object(J.jsx)(L.a,{store:N,children:Object(J.jsx)(o.a,{loading:null,persistor:k,children:Object(J.jsx)(D,{})})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.e108d653.chunk.js.map