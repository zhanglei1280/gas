(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(t,e,n){t.exports=n(28)},27:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(14),l=n(5),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SETBOX":return e.data;default:return t}},s=Object(l.c)(Object(l.b)({box:o})),i=n(3),u=n(2),d=n(7),m=n(6),f=n(8),b=n(16),p=function(){function t(e,n){Object(u.a)(this,t),this.list=new Array(n-e+1).fill(0).map(function(t,n){return e+n}),this.shuffle()}return Object(b.a)(t,[{key:"getList",value:function(){return this.list}},{key:"shuffle",value:function(){var t=this;this.list.forEach(function(e,n){!function(t,e,n){var a=t[e];t[e]=t[n],t[n]=a}(t.list,n,function(t,e){var n=(e-t)*Math.random()+t;return Math.floor(n)}(0,t.list.length))})}},{key:"pick",value:function(){return this.list.shift()}}]),t}(),v=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(d.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).state={num:0,locked:!1},n.add=function(){n.setState(function(){return{locked:!0}});var t=n.props.box,e=t.start,a=t.end,r=t.box;a-e<25&&(a=e+25);var c=new p(e,a).getList(),l=1,o=setInterval(function(){n.setState(function(){return{num:c.shift()}}),++l>=20&&(clearInterval(o),setTimeout(function(){n.setState(function(){return{num:r.pick(),locked:!1}})},0))},50)},n.render=function(){return r.a.createElement("div",null,n.props.box?r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},n.state.num),r.a.createElement("div",{className:"field"},r.a.createElement("div",null,n.state.locked?"locked":"not locked"),r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-primary",onClick:n.state.locked?null:n.add,disabled:n.state.locked},"Submit")))):"")},n}return Object(f.a)(e,t),e}(a.Component),h=Object(i.b)(function(t){return{box:t.box}})(v),E=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(d.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).state={start:1,end:50},n.onInput=function(t){return function(e){var a=parseInt(e.target.value);"start"==t?n.setState(function(){return{start:a}}):n.setState(function(){return{end:a}})}},n.onOK=function(t){t.preventDefault();var e=n.state,a=e.start,r=e.end,c=new p(a,r);n.props.dispatch({type:"SETBOX",data:{start:a,end:r,box:c}})},n.render=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Start"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",type:"text",value:n.state.start,onChange:n.onInput("start")}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"End"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",type:"text",value:n.state.end,onChange:n.onInput("end")}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-link",onClick:n.onOK},"ok"))))},n}return Object(f.a)(e,t),e}(a.Component),k=Object(i.b)(function(t){return{box:t.box}})(E),O=(n(26),n(27),new p(1,50),r.a.createElement("div",{className:"padding"},r.a.createElement(i.a,{store:s},r.a.createElement(k,null),r.a.createElement(h,null))));Object(c.render)(O,document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5f4c8562.chunk.js.map