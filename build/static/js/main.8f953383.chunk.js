(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(t,e,n){t.exports={conteinerStatistics:"Statistics_conteinerStatistics__3H_Ec",fedbackStatistics:"Statistics_fedbackStatistics__27D7d",list:"Statistics_list__3oKT7"}},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(2),s=n(4),a=n.n(s),i=n(5),r=n(6),o=n(7),l=n(11),j=n(10),b=n(8),d=n.n(b),u=n(0),h=function(t){var e=t.options,n=t.plusFeedback;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:d.a.conteiner,children:e.map((function(t){return Object(u.jsx)("button",{type:"button",onClick:function(){return n(t)},name:t,children:t},t)}))})})},p=n(9),O=n.n(p),x=function(t){var e=t.titel,n=t.children;return Object(u.jsxs)("section",{className:O.a.sectionConteiner,children:[Object(u.jsx)("h2",{children:e}),n]})},f=function(t){var e=t.message;return Object(u.jsx)("p",{children:e})},m=n(1),g=n.n(m),k=function(t){var e=t.good,n=t.neutral,c=t.bad,s=t.total,a=t.positivePercentage;return Object(u.jsxs)("ul",{className:g.a.list,children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:"\u041e\u0442\u043b\u0438\u0447\u043d\u043e -"}),Object(u.jsx)("span",{className:g.a.fedbackStatistics,children:e})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:"\u0421\u0440\u0435\u0434\u043d\u0435 -"}),Object(u.jsx)("span",{className:g.a.fedbackStatistics,children:n})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:"\u041f\u043b\u043e\u0445\u043e -"}),Object(u.jsx)("span",{className:g.a.fedbackStatistics,children:c})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:"\u0412\u0441\u0435\u0433\u043e -"}),Object(u.jsx)("span",{className:g.a.fedbackStatistics,children:s})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:"\u041f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u044b\u0445 \u043e\u0442\u0437\u044b\u0432\u043e\u0432 -"}),Object(u.jsxs)("span",{className:g.a.fedbackStatistics,children:[Number.parseInt(a),"%"]})]})]})},v=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={good:0,neutral:0,bad:0},t.plusFeedback=function(e){t.setState((function(n){return t.total(),Object(i.a)({},e,n[e]+1)}))},t.total=function(){var e=t.state;return e.good+e.neutral+e.bad},t.positivePercentage=function(){return Number.parseInt(t.state.good)/Number.parseInt(t.total())*100},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,c=t.bad;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"\u041e\u0442\u0437\u044b\u0432\u044b \u043e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}),Object(u.jsx)(x,{titel:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043e\u0441\u0442\u0430\u0432\u0442\u0435 \u0441\u0432\u043e\u0439 \u043e\u0442\u0437\u044b\u0432",children:Object(u.jsx)(h,{options:["good","neutral","bad"],plusFeedback:this.plusFeedback})}),Object(u.jsx)(x,{titel:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043e\u0441\u0442\u0430\u0432\u0442\u0435 \u0441\u0432\u043e\u0439 \u043e\u0442\u0437\u044b\u0432",children:this.total()?Object(u.jsx)(k,{good:e,neutral:n,bad:c,total:this.total(),positivePercentage:this.positivePercentage()}):Object(u.jsx)(f,{message:"\u041d\u0435\u0442 \u043e\u0442\u0437\u044b\u0432\u043e\u0432 \u043e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"})})]})}}]),n}(c.Component);n(17);a.a.render(Object(u.jsx)(v,{}),document.getElementById("#root"))},8:function(t,e,n){t.exports={conteiner:"FeedbackOptions_conteiner__1fpCX"}},9:function(t,e,n){t.exports={sectionConteiner:"Section_sectionConteiner__2YvRc"}}},[[18,1,2]]]);
//# sourceMappingURL=main.8f953383.chunk.js.map