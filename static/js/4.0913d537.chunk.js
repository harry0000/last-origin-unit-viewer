(this["webpackJsonplast-origin-unit-viewer"]=this["webpackJsonplast-origin-unit-viewer"]||[]).push([[4],{229:function(e,t,n){"use strict";var a=n(1),c=n(0),i=n.n(c),r=n(142),o=n(102),u=n(43),p=n(42),s=i.a.memo((function(e){var t=e.show,n=e.availableLv,c=Object(r.a)().t;return Object(p.b)(t,Object(a.a)("span",{css:{display:"inline-flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"absolute",inset:0,backgroundColor:"rgba(0, 0, 0, 0.75)"}},Object(a.a)(o.a,{css:{height:24,width:24}},Object(a.a)(u.h,null)),Object(a.a)("span",{css:{color:"#ccc",fontWeight:"bold"}},c("lv"),"\xa0",n)))}));t.a=s},232:function(e,t,n){},237:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(29),i=n(24),r=n(1),o=n(0),u=n.n(o),p=n(142),s=n(128),l=n(212),b=function(e){var t=e.equipmentId,n=e.equipmentType,a=e.equipmentRank,c=e.enhancementLv,i=Object(p.a)().t;return Object(r.a)("span",{css:{position:"relative",display:"inline-block"}},Object(r.a)(l.a,{fluid:!0,rounded:!0,draggable:"false",sizes:"(max-width: 480px) 47px, (min-width: 480px) 62px",alt:i("equipment:".concat(t)),src:"".concat("/last-origin-unit-viewer","/equip_icon/").concat(n,"_").concat(t,"_").concat(a,".webp")}),Object(r.a)(l.a,{draggable:"false",css:{position:"absolute",top:-10,left:-5},height:28,width:28,alt:"".concat(i("equipment:rank.".concat(a))," ").concat(i("equipment:type.".concat(n))),src:"".concat("/last-origin-unit-viewer","/icon/").concat(n,"_").concat(a,".webp")}),Object(r.a)("span",{css:{position:"absolute",top:-5,right:0,color:"#fff",fontSize:"0.9em",fontWeight:"bold",textShadow:["1px 1px 0px #000, -1px -1px 0px #000","-1px 1px 0px #000,  1px -1px 0px #000","1px 0px 0px #000, -1px  0px 0px #000","0px 1px 0px #000,  0px -1px 0px #000"].join()}},"+",c))},j=u.a.memo((function(e){var t=e.type,n=Object(p.a)().t;return Object(r.a)("span",{css:{display:"inline-flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",opacity:.5}},Object(r.a)(l.a,{rounded:!0,draggable:"false",height:32,width:32,alt:n("equipment:type.".concat(t)),src:"".concat("/last-origin-unit-viewer","/icon/placeholder_").concat(t,".webp")}))})),O=n(229),v=n(17),d=n(2),f=n(41),m=n(98);function h(e){return function(t){return Object(f.c)(e,t)}}var g=Object(d.e)(Object.values(m.a).filter((function(e){return e.type===f.b.Chip}))),y=Object(d.e)(Object.values(m.a).filter((function(e){return e.type===f.b.Os}))),x=Object(d.e)(Object.values(m.a).filter((function(e){return e.type===f.b.Gear}))),w=Object(d.g)({key:"availableChipEquipmentState",get:function(e){return function(t){return(0,t.get)(g).filter(h(e))}}}),q=Object(d.g)({key:"availableOsEquipmentState",get:function(e){return function(t){return(0,t.get)(y).filter(h(e))}}}),k=Object(d.g)({key:"availableGearEquipmentState",get:function(e){return function(t){return(0,t.get)(x).filter(h(e))}}});function S(e,t){switch(t){case"chip1":case"chip2":return Object(d.j)(w(e.no));case"os":return Object(d.j)(q(e.no));case"gear":return Object(d.j)(k(e.no))}}var _=n(23),C=n(42),N=(n(232),["eventKey","active","label","src"]),I=["active","type"],L=["type","value","items"],K=function(e){var t=e.eventKey,n=e.active,a=e.label,o=e.src,u=Object(i.a)(e,N);return Object(r.a)(s.a.Item,Object(c.a)({},u,{className:"equipment",eventKey:t,active:n}),Object(r.a)(l.a,{draggable:"false",height:48,width:48,alt:a,src:o}),Object(r.a)("span",{className:"label"},a))},E=function(e){var t=e.active,n=e.type,a=Object(i.a)(e,I),o=Object(p.a)().t;return Object(r.a)(K,Object(c.a)({},a,{active:t,label:o("status.remove_equipment"),src:"".concat("/last-origin-unit-viewer","/icon/placeholder_").concat(n,".webp")}))},R=function(e){var t=e.type,n=e.value,a=e.items,o=Object(i.a)(e,L),u=Object(p.a)().t;return Object(r.a)(s.a.Menu,Object(c.a)({},o,{className:"equipment"}),Object(r.a)("div",{className:"equipment-menu-grid"},Object(r.a)(E,{type:t,active:!(null===n||void 0===n?void 0:n.equipped.id)}),a.map((function(e){return Object(r.a)(K,{key:e.id,eventKey:e.id,active:e.id===(null===n||void 0===n?void 0:n.equipped.id),label:u("equipment:".concat(e.id)),src:"".concat("/last-origin-unit-viewer","/equip_icon/").concat(e.type,"_").concat(e.id,"_ss.webp")})}))))},T=function(e){var t=e.unit,n=e.slot,c=Object(v.k)(t,n),i=Object(a.a)(c,2),o=i[0],u=i[1];return Object(r.a)(O.a,{show:!o,availableLv:u})},z=u.a.forwardRef((function(e,t){var n=e.onClick,a=e.id,c=e.children;return Object(r.a)("a",{href:"",ref:t,id:a,onClick:function(e){e.preventDefault(),n(e)}},c)})),D=function(e){var t=e.id,n=e.unit,a=e.slot,c=e.type,i=e.value,o=e.onSelect,u=e.items;return Object(r.a)(s.a,{className:"slot equipment",onSelect:function(e){if(e){var t=u.find((function(t){return t.id===e}));t&&o(t)}else o(void 0)}},Object(r.a)(s.a.Toggle,{as:z,id:t},Object(r.a)("span",{className:"equipment-toggle-view"},i?Object(r.a)(b,{equipmentId:i.equipped.id,equipmentType:c,equipmentRank:i.rank,enhancementLv:i.enhanceLv}):Object(r.a)(j,{type:c}),Object(r.a)(T,{unit:n,slot:a}))),Object(r.a)(R,{type:c,value:i,items:u}))},G=function(e){var t=e.unit,n=S(t,"chip1"),c=Object(v.r)(t,"chip1"),i=Object(a.a)(c,3),o=i[0],u=i[1],p=i[2];return Object(r.a)(D,{id:"chip1-equipment-dropdown",unit:t,slot:"chip1",type:o,value:u,onSelect:p,items:n})},J=function(e){var t=e.unit,n=S(t,"chip2"),c=Object(v.r)(t,"chip2"),i=Object(a.a)(c,3),o=i[0],u=i[1],p=i[2];return Object(r.a)(D,{id:"chip2-equipment-dropdown",unit:t,slot:"chip2",type:o,value:u,onSelect:p,items:n})},W=function(e){var t=e.unit,n=S(t,"os"),c=Object(v.r)(t,"os"),i=Object(a.a)(c,3),o=i[0],u=i[1],p=i[2];return Object(r.a)(D,{id:"os-equipment-dropdown",unit:t,slot:"os",type:o,value:u,onSelect:p,items:n})},M=function(e){var t=e.unit,n=S(t,"gear"),c=Object(v.r)(t,"gear"),i=Object(a.a)(c,3),o=i[0],u=i[1],p=i[2];return Object(r.a)(D,{id:"gear-equipment-dropdown",unit:t,slot:"gear",type:o,value:u,onSelect:p,items:n})};t.default=function(e){var t=e.slot,n=Object(_.b)();return Object(C.a)(n,(function(e){switch(t){case"chip1":return Object(r.a)(G,{unit:e});case"chip2":return Object(r.a)(J,{unit:e});case"os":return Object(r.a)(W,{unit:e});case"gear":return Object(r.a)(M,{unit:e})}}))}}}]);
//# sourceMappingURL=4.0913d537.chunk.js.map