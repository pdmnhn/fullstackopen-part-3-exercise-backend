(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var r=t(16),c=t.n(r),o=t(3),a=t(1),i=t.n(a),u=t(0);function s(e){var n=e.filterText,t=e.changeFilterText;return Object(u.jsxs)("div",{children:["filter shown with ",Object(u.jsx)("input",{value:n,onChange:t})]})}function d(e){var n=e.addPerson,t=e.newName,r=e.changeName,c=e.newNumber,o=e.changeNumber;return Object(u.jsxs)("form",{onSubmit:n,children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{value:t,onChange:r})]}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{value:c,onChange:o})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})}function l(e){var n=e.persons,t=e.deletePerson;return n.map((function(e){var n=e.name,r=e.number,c=e.id;return Object(u.jsxs)("div",{children:[n," ",r," ",Object(u.jsx)("button",{onClick:function(){return t(n,c)},children:"delete"})]},c)}))}var b=t(4),j=t.n(b),f="/api/persons",h={getAll:function(){return j.a.get(f).then((function(e){return e.data}))},create:function(e){return j.a.post(f,e).then((function(e){return e.data}))},deletePerson:function(e){return j.a.delete("".concat(f,"/").concat(e))},modifyPerson:function(e,n){return j.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))}},m={color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},O=function(e){var n=e.message;return null===n?null:Object(u.jsx)("div",{style:m,className:"error",children:n})},p=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),i=Object(o.a)(c,2),b=i[0],j=i[1],f=Object(a.useState)(""),m=Object(o.a)(f,2),p=m[0],x=m[1],v=Object(a.useState)(""),g=Object(o.a)(v,2),w=g[0],C=g[1],N=Object(a.useState)(null),S=Object(o.a)(N,2),P=S[0],k=S[1],y=Object(a.useState)(null),L=Object(o.a)(y,2),T=L[0],A=L[1],D=function(e){clearTimeout(T),k(e),A(setTimeout((function(){k(null)}),5e3))};Object(a.useEffect)((function(){h.getAll().then((function(e){r(e)}))}),[]);var B=""===w?t:t.filter((function(e){return e.name.toLowerCase().includes(w.toLowerCase())}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(O,{message:P}),Object(u.jsx)(s,{filterText:w,changeFilterText:function(e){C(e.target.value)}}),Object(u.jsx)("h1",{children:"add a new"}),Object(u.jsx)(d,{addPerson:function(e){if(e.preventDefault(),t.map((function(e){return e.name.toLowerCase()})).includes(b.toLowerCase())){if(!0===window.confirm("".concat(b," is already added to phonebook, replace the old number with a new one?"))){var n=t.find((function(e){return e.name.toLowerCase()===b.toLowerCase()}));h.modifyPerson(n.id,{name:b,number:p,id:n.id}).then((function(e){r(t.map((function(n){return n.id!==e.id?n:e}))),D("Changed ".concat(b))})).catch((function(e){D(e.response.data.error)}))}}else{var c={name:b,number:p};h.create(c).then((function(e){r(t.concat(e)),D("Added ".concat(b))})).catch((function(e){D(e.response.data.error)}))}j(""),x("")},newName:b,changeName:function(e){j(e.target.value)},newNumber:p,changeNumber:function(e){x(e.target.value)}}),Object(u.jsx)("h1",{children:"Numbers"}),Object(u.jsx)(l,{persons:B,deletePerson:function(e,n){!1!==window.confirm("Delete ".concat(e,"?"))&&(h.deletePerson(n),r(t.filter((function(e){return e.id!==n}))),D("Deleted ".concat(e)))}})]})};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.5bad9490.chunk.js.map