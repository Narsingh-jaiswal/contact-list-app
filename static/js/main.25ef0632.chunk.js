(this["webpackJsonpcontact-list"]=this["webpackJsonpcontact-list"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var c,s=a(1),n=a.n(s),r=a(8),i=a.n(r),l=(a(13),a(4)),j=a(2),d=(a(14),a(0)),b=function(t){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"form-container",children:[Object(d.jsx)("h1",{children:"Registration Form"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.userFormHandler(Object(j.a)(Object(j.a)({},t.userFormData),{},{add:!0}))},children:[Object(d.jsx)("label",{children:"First Name :"}),Object(d.jsx)("input",{value:t.userFormData.firstName,onChange:function(e){return t.userFormHandler(Object(j.a)(Object(j.a)({},t.userFormData),{},{firstName:e.target.value.trim()}))},required:!0}),Object(d.jsx)("label",{children:"Last Name :"}),Object(d.jsx)("input",{value:t.userFormData.lastName,onChange:function(e){return t.userFormHandler(Object(j.a)(Object(j.a)({},t.userFormData),{},{lastName:e.target.value.trim()}))},required:!0}),Object(d.jsx)("label",{children:"Contact : "}),Object(d.jsx)("input",{value:t.userFormData.contact,onChange:function(e){isNaN(e.target.value)?alert("enter only numeric value"):t.userFormData.contact.length>10?alert("contact number limit exceeded"):t.userFormHandler(Object(j.a)(Object(j.a)({},t.userFormData),{},{contact:e.target.value.trim()}))},required:!0}),!t.edit&&Object(d.jsx)("button",{type:"submit",children:"Submit"}),t.edit&&Object(d.jsxs)("div",{className:"update-section",children:[Object(d.jsx)("button",{onClick:function(){t.setEdit(!1),t.userFormHandler({firstName:"",lastName:"",contact:""})},children:"Update"}),Object(d.jsx)("button",{onClick:function(){t.setEdit(!1),t.userFormHandler({firstName:"",lastName:"",contact:""})},children:"Cancel"})]})]})]})})},o=a(7),u=(a(16),function(t){var e=Object(s.useState)([]),a=Object(l.a)(e,2),n=a[0],r=a[1];function i(e){c=e.target.value,t.handler({firstName:n[c].firstName,lastName:n[c].lastName,contact:n[c].contact,add:!1}),t.setEdit(!0)}Object(s.useEffect)((function(){var e=t.userData;t.edit&&(n[c]={firstName:e.firstName,lastName:e.lastName,contact:e.contact}),t.userData.add&&(r([].concat(Object(o.a)(n),[t.userData])),t.handler({firstName:"",lastName:"",contact:""}))}));var j=function(t){n.splice(parseInt(t.target.value),1),r(Object(o.a)(n))},b=n.map((function(t,e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"table-data",children:Object(d.jsx)("p",{children:e+1})}),Object(d.jsx)("td",{className:"table-data",children:Object(d.jsx)("p",{children:t.firstName})}),Object(d.jsx)("td",{className:"table-data",children:Object(d.jsx)("p",{children:t.lastName})}),Object(d.jsx)("td",{className:"table-data",children:Object(d.jsx)("p",{children:t.contact})}),Object(d.jsx)("td",{className:"table-data",children:Object(d.jsx)("button",{value:e,onClick:i,children:"edit"})}),Object(d.jsx)("td",{className:"table-data",children:Object(d.jsx)("button",{value:e,onClick:j,children:"delete"})})]},e)}));return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"table-container",children:[Object(d.jsx)("h1",{children:"User list"}),Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{className:"table-head",children:[Object(d.jsx)("th",{className:"list-thead",children:"#"}),Object(d.jsx)("th",{className:"list-thead",children:"First Name"}),Object(d.jsx)("th",{className:"list-thead",children:"Last Name"}),Object(d.jsx)("th",{className:"list-thead",children:"Contact"}),Object(d.jsx)("th",{className:"list-thead",children:"Edit"}),Object(d.jsx)("th",{className:"list-thead",children:"Delete"})]})}),Object(d.jsx)("tbody",{children:b})]})]})})});a(17);var m=function(){var t=Object(s.useState)({firstName:"",lastName:"",contact:"",add:!1}),e=Object(l.a)(t,2),a=e[0],c=e[1],n=Object(s.useState)(!1),r=Object(l.a)(n,2),i=r[0],j=r[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"form-table-contaier",children:[Object(d.jsx)(b,{userFormData:a,userFormHandler:c,edit:i,setEdit:j}),Object(d.jsx)(u,{userData:a,handler:c,edit:i,setEdit:j})]})})},h=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(e){var a=e.getCLS,c=e.getFID,s=e.getFCP,n=e.getLCP,r=e.getTTFB;a(t),c(t),s(t),n(t),r(t)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),h()}],[[18,1,2]]]);
//# sourceMappingURL=main.25ef0632.chunk.js.map