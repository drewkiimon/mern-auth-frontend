(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{34:function(e,t,a){e.exports=a(63)},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),o=a.n(c),s=a(4),u=a.n(s),l=a(10),i=a(2),m=a(11),p=a(1),d=a(6),h=a.n(d),f=Object(n.createContext)(null);function b(){var e=Object(n.useContext)(f),t=e.userData,a=e.setUserData,c=Object(p.f)();return r.a.createElement("nav",{className:"auth-options"},t.user?r.a.createElement("button",{onClick:function(){a({token:void 0,user:void 0}),localStorage.setItem("auth-token","")}},"Log Out"):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){c.push("/register")}},"Register"),r.a.createElement("button",{onClick:function(){c.push("/login")}},"Log In")))}function v(){return r.a.createElement("header",{id:"header"},r.a.createElement(m.b,{to:"/"},r.a.createElement("h1",{className:"title"},"MERN Auth Todo")),r.a.createElement(b,null))}var g=a(33),k=a(16),E=a.n(k);function O(e){return r.a.createElement("div",{className:"error-notice"},r.a.createElement("span",null,e.message),r.a.createElement("button",{onClick:e.clearError},"X"))}function j(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(!1),u=Object(i.a)(s,2),l=u[0],m=u[1],p=Object(n.useState)(e.title),d=Object(i.a)(p,2),h=d[0],f=d[1];return r.a.createElement("li",null,l?r.a.createElement("form",{className:"checkbox-form",onSubmit:function(t){t.preventDefault(),e.updateTodo(e.id,h),m(!1)}},r.a.createElement("input",{type:"text",id:"addTodo",value:h,onChange:function(e){return f(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Update Todo"})):r.a.createElement("form",{className:"checkbox-form"},r.a.createElement("input",{type:"checkbox",id:"todo",name:"todo",checked:c,onChange:function(){o(!0),e.deleteTodo(e.id)}}),r.a.createElement("label",{name:"todo",onClick:function(){return m(!0)}},e.title)))}function x(){var e=Object(n.useContext)(f).userData,t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(""),m=Object(i.a)(s,2),d=m[0],b=m[1],v=Object(n.useState)(),k=Object(i.a)(v,2),x=k[0],y=k[1],w=Object(p.f)();Object(n.useEffect)((function(){e.user||w.push("/login")}),[e]),Object(n.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("auth-token"),e.next=3,h.a.get("https://devistry-mern-backend.herokuapp.com/todos/",{headers:{"x-auth-token":t}});case 3:a=e.sent,o(a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var S=function(){var e=Object(l.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),a=localStorage.getItem("auth-token"),e.next=5,h.a.post("https://devistry-mern-backend.herokuapp.com/todos/",{title:d},{headers:{"x-auth-token":a}});case 5:n=e.sent,b(""),o([].concat(Object(g.a)(c),[n.data])),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),e.t0.response.data.msg&&y(e.t0.response.data.msg);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem("auth-token"),e.next=4,h.a.delete("https://devistry-mern-backend.herokuapp.com/todos/".concat(t),{headers:{"x-auth-token":a}});case 4:n=e.sent,o(E.a.filter(c,(function(e){return e._id!==n.data._id}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0.response.data.msg&&y(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(u.a.mark((function e(t,a){var n,r,s,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=localStorage.getItem("auth-token"),r=E.a.cloneDeep(c),e.next=4,h.a.patch("https://devistry-mern-backend.herokuapp.com/todos/".concat(t),{title:a},{headers:{"x-auth-token":n}});case 4:s=e.sent,l=E.a.findIndex(r,{_id:t}),r[l]=s.data,o(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),e.t0.response.data.msg&&y(e.t0.response.data.msg);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"page"},x&&r.a.createElement(O,{message:x,clearError:function(){return y(void 0)}}),r.a.createElement("form",{className:"form",onSubmit:S},r.a.createElement("label",{htmlFor:"addTodo"}),r.a.createElement("input",{type:"text",id:"addTodo",value:d,onChange:function(e){return b(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Add Todo"})),r.a.createElement("ul",null,c.length>0?c.map((function(e){return r.a.createElement(j,{key:e._id,id:e._id,title:e.title,updateTodo:N,deleteTodo:C,timestamp:e.createdAt})})):"You have nothing todo~"))}function y(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(),s=Object(i.a)(o,2),m=s[0],d=s[1],b=Object(n.useState)(),v=Object(i.a)(b,2),g=v[0],k=v[1],E=Object(n.useContext)(f),j=E.userData,x=E.setUserData,y=Object(p.f)();j.user&&y.push("/");var w=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),n={email:a,password:m},e.next=5,h.a.post("https://devistry-mern-backend.herokuapp.com/users/login",n);case 5:r=e.sent,x({token:r.data.token,user:r.data.user}),localStorage.setItem("auth-token",r.data.token),y.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0.response.data.msg&&k(e.t0.response.data.msg);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"page"},r.a.createElement("h2",null,"Log In"),g&&r.a.createElement(O,{message:g,clearError:function(){return k(void 0)}}),r.a.createElement("form",{className:"form",onSubmit:w},r.a.createElement("label",{htmlFor:"login-email"},"Email"),r.a.createElement("input",{id:"login-email",type:"email",onChange:function(e){return c(e.target.value)}}),r.a.createElement("label",{htmlFor:"login-password"},"Password"),r.a.createElement("input",{id:"login-password",type:"password",onChange:function(e){return d(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Login"})))}function w(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(),s=Object(i.a)(o,2),m=s[0],d=s[1],b=Object(n.useState)(),v=Object(i.a)(b,2),g=v[0],k=v[1],E=Object(n.useState)(),j=Object(i.a)(E,2),x=j[0],y=j[1],w=Object(n.useState)(),S=Object(i.a)(w,2),C=S[0],N=S[1],D=Object(n.useContext)(f).setUserData,I=Object(p.f)(),T=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),n={email:a,password:m,passwordCheck:g,displayName:x},e.next=5,h.a.post("https://devistry-mern-backend.herokuapp.com/users/register",n);case 5:return e.next=7,h.a.post("https://devistry-mern-backend.herokuapp.com/users/login",{email:a,password:m});case 7:r=e.sent,D({token:r.data.token,user:r.data.user}),localStorage.setItem("auth-token",r.data.token),I.push("/"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),e.t0.response.data.msg&&N(e.t0.response.data.msg);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"page"},r.a.createElement("h2",null,"Register"),C&&r.a.createElement(O,{message:C,clearError:function(){return N(void 0)}}),r.a.createElement("form",{className:"form",onSubmit:T},r.a.createElement("label",{htmlFor:"register-email"},"Email"),r.a.createElement("input",{id:"register-email",type:"email",onChange:function(e){return c(e.target.value)}}),r.a.createElement("label",{htmlFor:"register-password"},"Password"),r.a.createElement("input",{id:"register-password",type:"password",onChange:function(e){return d(e.target.value)}}),r.a.createElement("input",{type:"password",placeholder:"Verify Password",onChange:function(e){return k(e.target.value)}}),r.a.createElement("label",{htmlFor:"register-display-name"},"Display Name"),r.a.createElement("input",{id:"register-display-name",type:"text",onChange:function(e){return y(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Register"})))}a(62);function S(){var e=Object(n.useState)({token:void 0,user:void 0}),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===(t=localStorage.getItem("auth-token"))&&(localStorage.setItem("auth-token",""),t=""),e.next=4,h.a.post("https://devistry-mern-backend.herokuapp.com/users/tokenIsValid",null,{headers:{"x-auth-token":t}});case 4:if(!e.sent.data){e.next=10;break}return e.next=8,h.a.get("https://devistry-mern-backend.herokuapp.com/users/",{headers:{"x-auth-token":t}});case 8:a=e.sent,c({token:t,user:a.data});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(f.Provider,{value:{userData:a,setUserData:c}},r.a.createElement(v,null),r.a.createElement("div",{className:"container"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:x}),r.a.createElement(p.a,{path:"/login",component:y}),r.a.createElement(p.a,{path:"/register",component:w}))))))}o.a.render(r.a.createElement(S,null),document.querySelector("#root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.3d19d617.chunk.js.map