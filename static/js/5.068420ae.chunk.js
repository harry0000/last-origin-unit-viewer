(this["webpackJsonplast-origin-unit-viewer"]=this["webpackJsonplast-origin-unit-viewer"]||[]).push([[5],{295:function(t,e,a){"use strict";var n=a(0),i=a(1),c=a.n(i),o=a(162),r=a(89),l=a(49),s=a(44),u=c.a.memo((function(t){var e=t.show,a=t.availableLv,i=Object(o.a)().t;return Object(s.b)(e,Object(n.a)("span",{css:{display:"inline-flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"absolute",inset:0,backgroundColor:"rgba(0, 0, 0, 0.75)"}},Object(n.a)(r.a,{css:{height:24,width:24}},Object(n.a)(l.h,null)),Object(n.a)("span",{css:{color:"#ccc",fontWeight:"bold"}},i("lv"),"\xa0",a)))}));e.a=u},298:function(t,e,a){},306:function(t,e,a){"use strict";a.r(e);var n=a(11),i=a(10),c=a(26),o=a(0),r=a(1),l=a.n(r),s=a(162),u=a(161),p=a(264),b=l.a.memo((function(t){var e=t.slot,a=Object(s.a)().t;return Object(o.a)("span",{css:{display:"inline-flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",opacity:.5}},Object(o.a)(p.a,{rounded:!0,draggable:"false",height:32,width:32,alt:a("status.core_link_".concat(e)),src:"".concat("/last-origin-unit-viewer","/icon/placeholder_core_link.webp")}))})),d=a(295),h=a(109),j=function(t){var e=t.unit,a=Object(s.a)().t;return Object(o.a)("span",{css:{display:"inline-block",height:"100%",width:"100%"}},Object(o.a)(p.a,{fluid:!0,rounded:!0,draggable:"false",sizes:"(max-width: 480px) 47px, (min-width: 480px) 62px",alt:a("unit:name.".concat(e)),src:"".concat("/last-origin-unit-viewer","/unit_icon/").concat(e,".webp")}))},O=function(t){var e=t.rank,a=t.type,n=t.role,i=t.rate,c=Object(s.a)().t;return Object(o.a)("span",{css:{display:"inline-block",height:"100%",width:"100%"}},Object(o.a)("span",{css:{display:"inline-flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingTop:10,"@media (max-width: 480px)":{height:47,width:47},"@media (min-width: 480px)":{height:62,width:62}}},Object(o.a)(h.a,{sizes:"(max-width: 480px) 24px, (min-width: 480px) 30px",rank:e,role:n}),Object(o.a)("span",{css:{color:"#ccc",fontWeight:"bold","@media (max-width: 480px)":{fontSize:"0.7em"},"@media (min-width: 480px)":{fontSize:"0.9em"}}},c("unit.type.".concat(a)))),Object(o.a)("span",{css:{position:"absolute",top:-5,right:0,color:"#0cf",fontWeight:"bold",textShadow:["1px 1px 0px #000, -1px -1px 0px #000","-1px 1px 0px #000,  1px -1px 0px #000","1px 0px 0px #000, -1px  0px 0px #000","0px 1px 0px #000,  0px -1px 0px #000"].join(),"@media (max-width: 480px)":{fontSize:"0.7em"},"@media (min-width: 480px)":{fontSize:"0.9em"}}},"+",i,"%"))},f=function(t){var e=t.linkedUnit;return"unit"in e?Object(o.a)(j,{unit:e.unit}):Object(o.a)(O,{rank:e.rank,type:e.type,role:e.role,rate:e.rate})},m=a(166),x=a(22),v=a(44),g=(a(298),["eventKey","active","unit"]),w=function(t){var e=t.eventKey,a=t.active,n=t.unit,r=Object(c.a)(t,g),l=Object(s.a)().t;return Object(o.a)(u.a.Item,Object(i.a)({},r,{className:"core-link",eventKey:e,active:a}),"unit"in n?Object(o.a)(p.a,{className:"unit",draggable:"false",height:48,width:48,alt:l("unit:name.".concat(n.unit)),src:"".concat("/last-origin-unit-viewer","/unit_icon/").concat(n.unit,".webp")}):Object(o.a)("span",{className:"partial-fit-unit"},Object(o.a)(p.a,{className:"basic-info-icon",draggable:"false",height:32,width:32,alt:"".concat(l("unit.rank.".concat(n.rank))," ").concat(l("unit.type.".concat(n.type))," ").concat(l("unit.role.".concat(n.role))),src:"".concat("/last-origin-unit-viewer","/icon/").concat(n.rank,"_").concat(n.role,".webp")}),Object(o.a)("span",{className:"unit-type"},l("unit.type.".concat(n.type)))),Object(o.a)("span",{className:"label"},"+\xa0",n.rate,"\xa0%"))},k=function(t){var e=t.active,a=(0,Object(s.a)().t)("status.unlink");return Object(o.a)(u.a.Item,{className:"core-link",active:e},Object(o.a)(p.a,{className:"unit",draggable:"false",height:48,width:48,alt:a,src:"".concat("/last-origin-unit-viewer","/icon/placeholder_core_link.webp")}),Object(o.a)("span",{className:"label"},a))},y=function(t){var e=t.value,a=t.items;return Object(o.a)(u.a.Menu,{className:"core-link"},Object(o.a)("div",{className:"core-link-unit-list"},Object(o.a)(k,{active:!e}),a.map((function(t,a){return Object(o.a)(w,{key:JSON.stringify(t),eventKey:a+"",active:t.rate===(null===e||void 0===e?void 0:e.rate),unit:t})}))))},N=l.a.forwardRef((function(t,e){var a=t.onClick,n=t.id,i=t.children;return Object(o.a)("a",{href:"",ref:e,id:n,onClick:function(t){t.preventDefault(),a(t)}},i)})),_=function(t){var e=t.unit,a=t.slot,i=Object(m.a)(e),c=Object(m.f)(e,a),r=Object(n.a)(c,4),l=r[0],s=r[1],p=r[2],h=r[3];return Object(o.a)(u.a,{className:"slot core-link",onSelect:function(t){s(t?i[+t]:void 0)}},Object(o.a)(u.a.Toggle,{as:N,id:"core-link-".concat(a,"-dropdown")},Object(o.a)("span",{className:"core-link-toggle-view"},l?Object(o.a)(f,{linkedUnit:l}):Object(o.a)(b,{slot:a}),Object(o.a)(d.a,{show:!p,availableLv:h}))),Object(o.a)(y,{value:l,items:i}))};e.default=function(t){var e=t.slot,a=Object(x.l)();return Object(v.a)(a,(function(t){return Object(o.a)(_,{unit:t,slot:e})}))}}}]);
//# sourceMappingURL=5.068420ae.chunk.js.map