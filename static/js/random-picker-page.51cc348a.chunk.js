"use strict";(self.webpackChunkrandom_picker=self.webpackChunkrandom_picker||[]).push([[95],{5907:function(e,t,r){r.r(t),r.d(t,{RandomPickerPage:function(){return Z}});var a=r(2982),n=r(885),l=r(1889),o=r(890),i=r(9437),s=r(5523),c=r(97),u=r(6400),m=r(6151),d=r(6769),b=r.n(d),g=r(2791),h=r(184),v=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},x=function e(t,r,a){var n=v(t,r);return a.includes(n)?e(t,r,a):n},Z=function(){var e=(0,g.useState)(1),t=(0,n.Z)(e,2),r=t[0],d=t[1],Z=(0,g.useState)(10),j=(0,n.Z)(Z,2),S=j[0],f=j[1],p=(0,g.useState)(null),N=(0,n.Z)(p,2),I=N[0],P=N[1],k=(0,g.useState)(!0),C=(0,n.Z)(k,2),R=C[0],w=C[1],y=(0,g.useState)([]),E=(0,n.Z)(y,2),G=E[0],L=E[1],B=S<=r;(0,g.useEffect)((function(){var e,t=localStorage.getItem("randomNumber"),r=(null===(e=localStorage.getItem("randomNumberList"))||void 0===e?void 0:e.split(", ").map((function(e){return Number(e)})))||[],a=localStorage.getItem("repeat"),n=localStorage.getItem("startNumber"),l=localStorage.getItem("endNumber");!n&&localStorage.setItem("startNumber","1"),!l&&localStorage.setItem("endNumber","10"),!a&&localStorage.setItem("repeat","true"),d(b()(n)?Number(n):1),f(b()(l)?Number(l):10),P(b()(t)?Number(t):null),L(r),w("true"===a)}),[]);var D=function(e,t){var r=e.target.value;switch(t){case"start":d(Number(r)),localStorage.setItem("startNumber",r);break;case"end":f(Number(r)),localStorage.setItem("endNumber",r);break;default:return}};return(0,h.jsxs)(l.ZP,{container:!0,spacing:3,flexDirection:"column",children:[(0,h.jsx)(l.ZP,{item:!0,children:(0,h.jsx)(o.Z,{variant:"h4",children:"Random Picker"})}),(0,h.jsxs)(l.ZP,{item:!0,children:[(0,h.jsxs)(o.Z,{variant:"body2",marginBottom:1,children:["Closing the page will ",(0,h.jsx)("b",{children:"Reset"})," the data."]}),(0,h.jsxs)(i.Z,{row:!0,"aria-labelledby":"demo-radio-buttons-group-label",value:R,onChange:function(){w((function(e){return!e})),localStorage.setItem("repeat",String(!R))},children:[(0,h.jsx)(s.Z,{value:!0,control:(0,h.jsx)(c.Z,{}),label:"Repeat"}),(0,h.jsx)(s.Z,{value:!1,control:(0,h.jsx)(c.Z,{}),label:"Do Not Repeat"})]})]}),(0,h.jsxs)(l.ZP,{container:!0,item:!0,spacing:3,children:[(0,h.jsx)(l.ZP,{item:!0,sm:5,xs:5,children:(0,h.jsx)(u.Z,{error:B,label:"Start number",onChange:function(e){return D(e,"start")},type:"number",value:r,variant:"outlined",helperText:B?"End value cannot be less than start value":void 0})}),(0,h.jsx)(l.ZP,{item:!0,sm:5,xs:5,children:(0,h.jsx)(u.Z,{error:B,helperText:B?"End value cannot be less than start value":void 0,label:"End number",onChange:function(e){return D(e,"end")},type:"number",value:S,variant:"outlined"})})]}),(0,h.jsxs)(l.ZP,{container:!0,item:!0,spacing:3,children:[(0,h.jsx)(l.ZP,{item:!0,children:(0,h.jsx)(m.Z,{variant:"contained",onClick:function(){if(R){var e=v(r,S);P(e),localStorage.setItem("randomNumber",String(e))}else{var t=x(r,S,G),n=[].concat((0,a.Z)(G),[t]);L(n),localStorage.setItem("randomNumberList",n.join(", "))}},disabled:B||!R&&S===G.length,children:"Generate"})}),(0,h.jsx)(l.ZP,{item:!0,children:(0,h.jsx)(m.Z,{variant:"contained",onClick:function(){localStorage.removeItem("randomNumber"),localStorage.removeItem("randomNumberList"),localStorage.setItem("repeat","true"),localStorage.setItem("startNumber","1"),localStorage.setItem("endNumber","10"),w(!0),d(1),f(10),P(null),L([])},disabled:!(I||G),children:"Reset"})})]}),(R?I:G.length)&&(0,h.jsx)(l.ZP,{item:!0,children:(0,h.jsx)(o.Z,{variant:"body1",children:R?"Generated number is ".concat(I):"Generated numbers are ".concat(G.join(", "))})}),R||S!==G.length?null:(0,h.jsx)(l.ZP,{item:!0,children:(0,h.jsx)(o.Z,{variant:"h5",marginBottom:2,children:"All numbers are generated"})})]})}}}]);
//# sourceMappingURL=random-picker-page.51cc348a.chunk.js.map