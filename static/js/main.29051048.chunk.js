(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n(1),r=n(10),c=n.n(r),i=n(8),l=n(6),s=n(7),u=n(2),b=n(3),d=n(5),j=n(4),h=n(26),f=(n(17),function(t){var e=t.toDo,n=t.done;return Object(a.jsxs)("div",{className:"app-header d-flex",children:[Object(a.jsx)("h1",{children:"Todo List"}),Object(a.jsxs)("h2",{children:[e," more to do, ",n," done"]})]})}),m=n(11),p=(n(18),function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.onDeleted,o=t.onLabelClick,r=t.onMarkImportant,c="todo-list-item";return t.done&&(c+=" done"),t.important&&(c+=" important"),Object(a.jsxs)("span",{className:c,children:[Object(a.jsx)("span",{className:"todo-list-item-label",onClick:o,children:e}),Object(a.jsx)("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:r,children:Object(a.jsx)("i",{className:"fa fa-exclamation"})}),Object(a.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n,children:Object(a.jsx)("i",{className:"fa fa-trash-o"})})]})}}]),n}(o.Component)),O=(n(19),function(t){var e=t.todoData,n=t.onDeleted,o=t.onLabelClick,r=t.onMarkImportant,c=e.map((function(t){var e=t.id,c=Object(m.a)(t,["id"]);return Object(a.jsx)("li",{className:"list-group-item",children:Object(a.jsx)(p,Object(l.a)(Object(l.a)({},c),{},{onDeleted:function(){return n(e)},onLabelClick:function(){return o(e)},onMarkImportant:function(){return r(e)}}))},e)}));return Object(a.jsx)("ul",{className:"list-group todo-list",children:c})}),v=(n(20),function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={term:""},t.onSearch=function(e){var n=e.target.value;t.setState({term:n}),t.props.onSearchChange(n)},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsx)("input",{className:"search-input form-control",type:"text",placeholder:"Search..",value:this.state.term,onChange:this.onSearch})}}]),n}(o.Component)),x=(n(21),function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={filter:"All"},t.onSortDone=function(e){var n=e.target.value;t.setState({filter:n}),t.props.onSortChange(n)},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"btn-group",children:[Object(a.jsx)("button",{type:"button",className:"btn btn-info",value:"All",onClick:this.onSortDone,children:"All"}),Object(a.jsx)("button",{type:"button",className:"btn btn-outline-secondary",value:"Active",onClick:this.onSortDone,children:"Active"}),Object(a.jsx)("button",{type:"button",className:"btn btn-outline-secondary",value:"Done",onClick:this.onSortDone,children:"Done"})]})}}]),n}(o.Component)),g=(n(22),function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={label:""},t.onInputChange=function(e){t.setState({label:e.target.value})},t.onSubmitForm=function(e){e.preventDefault(),t.state.label&&t.props.onAdded(t.state.label),t.setState({label:""})},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:"item-add-form d-flex",onSubmit:this.onSubmitForm,children:[Object(a.jsx)("input",{type:"text",className:"form-control",onChange:this.onInputChange,placeholder:"What needs to be done",value:this.state.label}),Object(a.jsx)("button",{className:"btn btn-outline-secondary",children:"Add item"})]})}}]),n}(o.Component)),y=(n(23),function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={todoData:[t.createItem("Drink tea"),t.createItem("Create app"),t.createItem("Have a lunch")],term:"",filter:"All"},t.deleteItem=function(e){t.setState((function(t){var n=t.todoData,a=n.findIndex((function(t){return t.id===e}));return{todoData:[].concat(Object(s.a)(n.slice(0,a)),Object(s.a)(n.slice(a+1)))}}))},t.addItem=function(e){var n=t.createItem(e);t.setState((function(t){var e=t.todoData;return{todoData:[].concat(Object(s.a)(e),[n])}}))},t.onLabelClick=function(e){t.setState((function(n){var a=n.todoData;return{todoData:t.toggleProperty(a,e,"done")}}))},t.onMarkImportant=function(e){t.setState((function(n){var a=n.todoData;return{todoData:t.toggleProperty(a,e,"important")}}))},t.onSearchChange=function(e){t.setState({term:e})},t.onSortChange=function(e){t.setState({filter:e})},t}return Object(b.a)(n,[{key:"createItem",value:function(t){return{label:t,id:Object(h.a)(),important:!1,done:!1}}},{key:"toggleProperty",value:function(t,e,n){var a=t.findIndex((function(t){return t.id===e})),o=Object(l.a)(Object(l.a)({},t[a]),{},Object(i.a)({},n,!t[a][n]));return[].concat(Object(s.a)(t.slice(0,a)),[o],Object(s.a)(t.slice(a+1)))}},{key:"search",value:function(t,e){return 0===e.length?t:t.filter((function(t){return t.label.indexOf(e)>-1}))}},{key:"sortItems",value:function(t,e){return"All"===e?t:"Active"===e?t.filter((function(t){return!t.done})):"Done"===e?t.filter((function(t){return t.done})):void 0}},{key:"render",value:function(){var t=this.state,e=t.todoData,n=t.term,o=t.filter,r=e.filter((function(t){return t.done})).length,c=e.length-r,i=this.sortItems(this.search(e,n),o);return Object(a.jsxs)("div",{className:"todo-app",children:[Object(a.jsx)(f,{toDo:c,done:r}),Object(a.jsxs)("div",{className:"d-flex",children:[Object(a.jsx)(v,{onSearchChange:this.onSearchChange}),Object(a.jsx)(x,{onSortChange:this.onSortChange})]}),Object(a.jsx)(O,{todoData:i,onDeleted:this.deleteItem,onLabelClick:this.onLabelClick,onMarkImportant:this.onMarkImportant}),Object(a.jsx)(g,{onAdded:this.addItem})]})}}]),n}(o.Component));c.a.render(Object(a.jsx)(y,{}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.29051048.chunk.js.map