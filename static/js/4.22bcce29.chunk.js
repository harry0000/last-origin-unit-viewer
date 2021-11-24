(this["webpackJsonplast-origin-unit-viewer"]=this["webpackJsonplast-origin-unit-viewer"]||[]).push([[4],{243:function(e,t,a){"use strict";var n=a(1),c=a(0),i=a.n(c),r=a(141),u=a(73),s=a(38),o=a(39),l=i.a.memo((function(e){var t=e.show,a=e.availableLv,c=Object(r.a)().t;return Object(o.b)(t,Object(n.a)("span",{css:{display:"inline-flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"absolute",inset:0,backgroundColor:"rgba(0, 0, 0, 0.75)"}},Object(n.a)(u.a,{css:{height:24,width:24}},Object(n.a)(s.h,null)),Object(n.a)("span",{css:{color:"#ccc",fontWeight:"bold"}},c("lv"),"\xa0",a)))}));t.a=l},246:function(e,t,a){},251:function(e,t,a){"use strict";a.r(t);var n=a(29),c=a(26),i=a(8),r=a(1),u=a(0),s=a.n(u),o=a(141),l=a(230),b=a(140),p=a(213),j=function(e){var t=e.equipmentId,a=e.equipmentType,n=e.equipmentRank,c=e.enhancementLv,i=Object(o.a)().t;return Object(r.a)("span",{css:{position:"relative",display:"inline-block"}},Object(r.a)(p.a,{fluid:!0,rounded:!0,draggable:"false",sizes:"(max-width: 480px) 47px, (min-width: 480px) 62px",alt:i("equipment:".concat(t)),src:"".concat("/last-origin-unit-viewer","/equip_icon/").concat(a,"_").concat(t,"_").concat(n,".webp")}),Object(r.a)(p.a,{draggable:"false",css:{position:"absolute",top:-10,left:-5},height:28,width:28,alt:"".concat(i("equipment:rank.".concat(n))," ").concat(i("equipment:type.".concat(a))),src:"".concat("/last-origin-unit-viewer","/icon/").concat(a,"_").concat(n,".webp")}),Object(r.a)("span",{css:{position:"absolute",top:-5,right:0,color:"#fff",fontSize:"0.9em",fontWeight:"bold",textShadow:["1px 1px 0px #000, -1px -1px 0px #000","-1px 1px 0px #000,  1px -1px 0px #000","1px 0px 0px #000, -1px  0px 0px #000","0px 1px 0px #000,  0px -1px 0px #000"].join()}},"+",c))},O=s.a.memo((function(e){var t=e.type,a=Object(o.a)().t;return Object(r.a)("span",{css:{display:"inline-flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",opacity:.5}},Object(r.a)(p.a,{rounded:!0,draggable:"false",height:32,width:32,alt:a("equipment:type.".concat(t)),src:"".concat("/last-origin-unit-viewer","/icon/placeholder_").concat(t,".webp")}))})),v=a(94),f=a(243),d=a(20),m=a(2),h=a(43),g=a(70);function y(e){return function(t){return Object(h.c)(e,t)}}var q=Object(m.e)(Object.values(g.a).filter((function(e){return e.type===h.b.Chip}))),w=Object(m.e)(Object.values(g.a).filter((function(e){return e.type===h.b.Os}))),x=Object(m.e)(Object.values(g.a).filter((function(e){return e.type===h.b.Gear}))),N=Object(m.g)({key:"availableChipEquipmentState",get:function(e){return function(t){return(0,t.get)(q).filter(y(e))}}}),k=Object(m.g)({key:"availableOsEquipmentState",get:function(e){return function(t){return(0,t.get)(w).filter(y(e))}}}),_=Object(m.g)({key:"availableGearEquipmentState",get:function(e){return function(t){return(0,t.get)(x).filter(y(e))}}});function S(e,t){switch(t){case"chip1":case"chip2":return Object(m.j)(N(e.no));case"os":return Object(m.j)(k(e.no));case"gear":return Object(m.j)(_(e.no))}}var C=a(21),L=a(39),I=(a(246),["slot","eventKey","active","label","src"]),K=["active","type"],E=["unit","slot","type","value","items"],J=function(e){var t=e.slot,a=e.unit,n=function(e){var n=e.enhanceLv,c=Object(d.o)(t,a,n),u=Object(i.a)(c,2),s=u[0],o=u[1];return Object(r.a)(v.a,{selected:s,onChange:o},"+\xa0",n)};return Object(r.a)("div",{className:"equipment-enhancement"},[0,1,2,3,4,5,6,7,8,9,10].map((function(e){return Object(r.a)(n,{key:e,enhanceLv:e})})))},R=function(e){var t=e.slot,a=e.equipment,n=Object(o.a)().t,c=Object(d.p)(t,a);return Object(r.a)("div",{className:"status-effects"},Object(r.a)("div",null,Object(r.a)(l.a,{pill:!0,variant:"light"},n("status.equipment_status_effect"))),Object(r.a)("div",{className:"details"},c))},T=function(e){var t=e.effects;return Object(r.a)(s.a.Fragment,null,t.map((function(e){var t=e.condition,a=e.details;return Object(r.a)("div",{key:JSON.stringify(e)},Object(L.a)(t,(function(e){return Object(r.a)("div",{className:"condition"},e)})),a.map((function(e){var t=e.detail,a=e.term;return Object(r.a)("div",{key:t,className:"detail"},Object(r.a)("div",null,t),Object(L.a)(a,(function(e){return Object(r.a)("div",{className:"term"},Object(r.a)("span",null,e))})))})))})))},z=function(e){var t=e.slot,a=e.equipment,n=Object(o.a)().t,c=Object(d.m)(t,a);return Object(L.a)(c,(function(e){return Object(r.a)("div",{className:"effects"},Object(r.a)("div",null,Object(r.a)(l.a,{pill:!0,variant:"light"},n("status.equipment_effect"))),Object(r.a)(T,{effects:e}))}))},D=function(e){var t=e.slot,a=e.equipment,n=Object(o.a)().t,c=Object(d.n)(t,a);return Object(L.a)(c,(function(e){return Object(r.a)("div",{className:"effects"},Object(r.a)("div",null,Object(r.a)(l.a,{pill:!0,variant:"light"},n("status.equipment_effect_as_skill"))),Object(r.a)(T,{effects:e}))}))},G=function(e){var t=e.slot,a=e.eventKey,i=e.active,u=e.label,s=e.src,o=Object(c.a)(e,I);return Object(r.a)(b.a.Item,Object(n.a)({},o,{className:"equipment",eventKey:a,active:i}),Object(r.a)("div",{className:"icon"},Object(r.a)(p.a,{draggable:"false",height:48,width:48,alt:u,src:s}),Object(r.a)("span",{className:"label"},u)),Object(r.a)("div",{className:"details"},Object(r.a)(R,{slot:t,equipment:a}),Object(r.a)(z,{slot:t,equipment:a}),Object(r.a)(D,{slot:t,equipment:a})))},W=function(e){var t=e.active,a=e.type,i=Object(c.a)(e,K),u=(0,Object(o.a)().t)("status.remove_equipment");return Object(r.a)(b.a.Item,Object(n.a)({},i,{className:"equipment remove",active:t}),Object(r.a)("div",{className:"icon"},Object(r.a)(p.a,{draggable:"false",height:48,width:48,alt:u,src:"".concat("/last-origin-unit-viewer","/icon/placeholder_").concat(a,".webp")})),Object(r.a)("div",{className:"details"},u))},F=function(e){var t=e.unit,a=e.slot,i=e.type,u=e.value,s=e.items,l=Object(c.a)(e,E),p=Object(o.a)().t;return Object(r.a)(b.a.Menu,Object(n.a)({},l,{className:"equipment"}),Object(r.a)(J,{slot:a,unit:t.no}),Object(r.a)("div",{className:"equipment-list"},Object(r.a)(W,{type:i,active:!(null===u||void 0===u?void 0:u.id)}),s.map((function(e){return Object(r.a)(G,{key:e.id,slot:a,eventKey:e.id,active:e.id===(null===u||void 0===u?void 0:u.id),label:p("equipment:".concat(e.id)),src:"".concat("/last-origin-unit-viewer","/equip_icon/").concat(e.type,"_").concat(e.id,"_ss.webp")})}))))},M=function(e){var t=e.unit,a=e.slot,n=Object(d.l)(t,a),c=Object(i.a)(n,2),u=c[0],s=c[1];return Object(r.a)(f.a,{show:!u,availableLv:s})},A=s.a.forwardRef((function(e,t){var a=e.onClick,n=e.id,c=e.children;return Object(r.a)("a",{href:"",ref:t,id:n,onClick:function(e){e.preventDefault(),a(e)}},c)})),B=function(e){var t=e.id,a=e.unit,n=e.slot,c=e.type,i=e.value,u=e.onSelect,s=e.items;return Object(r.a)(b.a,{className:"slot equipment",onSelect:function(e){if(e){var t=s.find((function(t){return t.id===e}));t&&u(t)}else u(void 0)}},Object(r.a)(b.a.Toggle,{as:A,id:t},Object(r.a)("span",{className:"equipment-toggle-view"},i?Object(r.a)(j,{equipmentId:i.id,equipmentType:c,equipmentRank:i.rank,enhancementLv:i.enhanceLv}):Object(r.a)(O,{type:c}),Object(r.a)(M,{unit:a,slot:n}))),Object(r.a)(F,{unit:a,slot:n,type:c,value:i,items:s}))},H=function(e){var t=e.unit,a=S(t,"chip1"),n=Object(d.w)(t,"chip1"),c=Object(i.a)(n,3),u=c[0],s=c[1],o=c[2];return Object(r.a)(B,{id:"chip1-equipment-dropdown",unit:t,slot:"chip1",type:u,value:s,onSelect:o,items:a})},P=function(e){var t=e.unit,a=S(t,"chip2"),n=Object(d.w)(t,"chip2"),c=Object(i.a)(n,3),u=c[0],s=c[1],o=c[2];return Object(r.a)(B,{id:"chip2-equipment-dropdown",unit:t,slot:"chip2",type:u,value:s,onSelect:o,items:a})},Q=function(e){var t=e.unit,a=S(t,"os"),n=Object(d.w)(t,"os"),c=Object(i.a)(n,3),u=c[0],s=c[1],o=c[2];return Object(r.a)(B,{id:"os-equipment-dropdown",unit:t,slot:"os",type:u,value:s,onSelect:o,items:a})},U=function(e){var t=e.unit,a=S(t,"gear"),n=Object(d.w)(t,"gear"),c=Object(i.a)(n,3),u=c[0],s=c[1],o=c[2];return Object(r.a)(B,{id:"gear-equipment-dropdown",unit:t,slot:"gear",type:u,value:s,onSelect:o,items:a})};t.default=function(e){var t=e.slot,a=Object(C.k)();return Object(L.a)(a,(function(e){switch(t){case"chip1":return Object(r.a)(H,{unit:e});case"chip2":return Object(r.a)(P,{unit:e});case"os":return Object(r.a)(Q,{unit:e});case"gear":return Object(r.a)(U,{unit:e})}}))}}}]);
//# sourceMappingURL=4.22bcce29.chunk.js.map