(this["webpackJsonpreact-homework-template"]=this["webpackJsonpreact-homework-template"]||[]).push([[0],{23:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n.n(o),r=n(6),d=n.n(r),i=n(4),a=n(8),u=Object(a.b)({name:"todos",initialState:{todos:[]},reducers:{addTodo:function(t,e){t.todos.push({id:(new Date).toISOString(),text:e.payload.text,completed:!1})},toggleComplete:function(t,e){var n=t.todos.find((function(t){return t.id===e.payload.id}));n.completed=!n.completed},removeTodo:function(t,e){t.todos=t.todos.filter((function(t){return t.id!==e.payload.id}))}}}),s=u.actions,l=s.addTodo,j=s.toggleComplete,b=s.removeTodo,p=u.reducer,h=Object(a.a)({reducer:{todos:p}}),O=(n(23),n(13)),f=n(1),x=function(t){var e=t.value,n=t.updateText,o=t.handleAction;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{placeholer:"new todo",value:e,onChange:function(t){return n(t.target.value)}}),Object(f.jsx)("button",{onClick:o,children:"Add todo"})]})})},m=n(5),g=function(t){var e=t.id,n=t.text,o=t.completed,c=Object(i.b)();return Object(f.jsxs)("li",{children:[Object(f.jsx)("input",{type:"checkbox",checked:o,onChange:function(){return c(j({id:e}))}}),Object(f.jsx)("span",{children:n}),Object(f.jsx)("span",{onClick:function(){return c(b({id:e}))},children:"\xd7"})]})},v=function(){var t=Object(i.c)((function(t){return t.todos.todos}));return Object(f.jsx)("ul",{children:t.map((function(t){return Object(f.jsx)(g,Object(m.a)({},t),t.id)}))})};n(25);var C=function(){var t=Object(o.useState)(""),e=Object(O.a)(t,2),n=e[0],c=e[1],r=Object(i.b)();return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(x,{value:n,updateText:c,handleAction:function(){n.trim().length&&(r(l({text:n})),c(""))}}),Object(f.jsx)(v,{})]})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,r=e.getLCP,d=e.getTTFB;n(t),o(t),c(t),r(t),d(t)}))};d.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(i.a,{store:h,children:Object(f.jsx)(C,{})})}),document.getElementById("root")),k()}},[[26,1,2]]]);
//# sourceMappingURL=main.571f8534.chunk.js.map