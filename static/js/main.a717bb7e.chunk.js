(this["webpackJsonpcontact-list"]=this["webpackJsonpcontact-list"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var c,n=a(1),s=a.n(n),r=a(8),l=a.n(r),i=(a(13),a(4)),j=a(2),d=(a(14),a(0)),o=function(t){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"form-container",children:[Object(d.jsx)("h1",{children:"Enter Contact Detail"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=t.userFormData;a.firstName||a.lastName||a.contact?t.userFormHandler(Object(j.a)(Object(j.a)({},t.userFormData),{},{add:!0})):alert("form is empty")},children:[Object(d.jsx)("label",{children:"First Name :"}),Object(d.jsx)("input",{value:t.userFormData.firstName,onChange:function(e){return t.userFormHandler(Object(j.a)(Object(j.a)({},t.userFormData),{},{firstName:e.target.value.trimStart()}))}}),Object(d.jsx)("label",{children:"Last Name :"}),Object(d.jsx)("input",{value:t.userFormData.lastName,onChange:function(e){return t.userFormHandler(Object(j.a)(Object(j.a)({},t.userFormData),{},{lastName:e.target.value.trimStart()}))}}),Object(d.jsx)("label",{children:"Contact : "}),Object(d.jsx)("input",{value:t.userFormData.contact,onChange:function(e){console.log(parseInt(e.target.value)),isNaN(parseInt(e.target.value))?alert("enter only numeric value"):t.userFormData.contact.length>10?alert("contact number limit exceeded"):t.userFormHandler(Object(j.a)(Object(j.a)({},t.userFormData),{},{contact:e.target.value.trimStart()}))}}),!t.edit&&Object(d.jsx)("button",{type:"submit",children:"Submit"}),t.edit&&Object(d.jsxs)("div",{className:"update-section",children:[Object(d.jsx)("button",{onClick:function(){t.setEdit(!1),t.userFormHandler({firstName:"",lastName:"",contact:""})},children:"Update"}),Object(d.jsx)("button",{onClick:function(){t.setEdit(!1),t.userFormHandler({firstName:"",lastName:"",contact:""})},children:"Cancel"})]})]})]})})},b=a(7),u=(a(16),function(t){var e=Object(n.useState)([]),a=Object(i.a)(e,2),s=a[0],r=a[1];function l(e){c=e.target.value,t.handler({firstName:s[c].firstName,lastName:s[c].lastName,contact:s[c].contact,add:!1}),t.setEdit(!0)}Object(n.useEffect)((function(){var e=t.userData;t.edit&&(s[c]={firstName:e.firstName,lastName:e.lastName,contact:e.contact}),t.userData.add&&(r([].concat(Object(b.a)(s),[t.userData])),t.handler({firstName:"",lastName:"",contact:""}))}));var j=function(t){s.splice(parseInt(t.target.value),1),r(Object(b.a)(s))},o=s.map((function(t,e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"table-data",children:Object(d.jsx)("p",{children:e+1})}),Object(d.jsx)("td",{className:"table-data",children:Object(d.jsx)("p",{children:t.firstName})}),Object(d.jsx)("td",{className:"table-data",children:Object(d.jsx)("p",{children:t.lastName})}),Object(d.jsx)("td",{className:"table-data",children:Object(d.jsx)("p",{children:t.contact})}),Object(d.jsx)("td",{className:"table-data",children:Object(d.jsx)("button",{value:e,onClick:l,children:"Edit"})}),Object(d.jsx)("td",{className:"table-data",children:Object(d.jsx)("button",{value:e,onClick:j,children:"Delete"})})]},e)}));return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"table-container",children:[Object(d.jsx)("h1",{children:"Contact list"}),Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"list-thead",children:"#"}),Object(d.jsx)("th",{className:"list-thead",children:"First Name"}),Object(d.jsx)("th",{className:"list-thead",children:"Last Name"}),Object(d.jsx)("th",{className:"list-thead",children:"Contact"}),Object(d.jsx)("th",{className:"list-thead",children:"Edit"}),Object(d.jsx)("th",{className:"list-thead",children:"Delete"})]})}),Object(d.jsx)("tbody",{children:o})]})]})})});a(17);var m=function(){var t=Object(n.useState)({firstName:"",lastName:"",contact:"",add:!1}),e=Object(i.a)(t,2),a=e[0],c=e[1],s=Object(n.useState)(!1),r=Object(i.a)(s,2),l=r[0],j=r[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"form-table-contaier",children:[Object(d.jsx)(o,{userFormData:a,userFormHandler:c,edit:l,setEdit:j}),Object(d.jsx)(u,{userData:a,handler:c,edit:l,setEdit:j})]})})},h=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,r=e.getTTFB;a(t),c(t),n(t),s(t),r(t)}))};l.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),h()}],[[18,1,2]]]);
//# sourceMappingURL=main.a717bb7e.chunk.js.map