(this["webpackJsonplast-origin-unit-viewer"]=this["webpackJsonplast-origin-unit-viewer"]||[]).push([[9],{316:function(e,u,a){"use strict";a.r(u);var n=a(11),t=a(0),l=a(1),i=a.n(l),c=a(124),b=a(176),o=a(9),r=a(180),_=a(40),f=(a(193),function(e){var u,a=e.bonus,n=Object(c.a)().t;return u=a?"sortie_cost"in a?n("form.full_link_bonus.sortie_cost",{value:Object(o.b)(a.sortie_cost)}):"damage_multiplier"in a?n("form.full_link_bonus.damage_multiplier",{value:Object(o.b)(a.damage_multiplier)}):"buff_debuff_lv_up"in a?n("form.full_link_bonus.buff_debuff_lv_up",{value:a.buff_debuff_lv_up.value}):"hp_up"in a?n("form.full_link_bonus.hp_up",{value:Object(o.b)(a.hp_up)}):"acc_up"in a?n("form.full_link_bonus.acc_up",{value:Object(o.b)(a.acc_up)}):"eva_up"in a?n("form.full_link_bonus.eva_up",{value:Object(o.b)(a.eva_up)}):"cri_up"in a?n("form.full_link_bonus.cri_up",{value:Object(o.b)(a.cri_up)}):"spd_up"in a?n("form.full_link_bonus.spd_up",{value:Object(o.a)(a.spd_up)}):n("form.full_link_bonus.range_up",{value:a.range_up.value}):"\xa0",Object(t.a)("span",null,u)}),s=function(e){var u=e.active;return Object(t.a)(b.a.Item,{active:u},"\xa0")},p=function(e){var u=e.bonus,a=e.eventKey,n=e.active;return Object(t.a)(b.a.Item,{eventKey:a,active:n},Object(t.a)(f,{bonus:u}))},v=i.a.forwardRef((function(e,u){var a=e.id,n=e.onClick,l=e.available,i=e.children;return Object(t.a)("a",{href:"",ref:u,id:a,onClick:function(e){e.preventDefault(),n(e)}},i,Object(t.a)("span",{className:"toggle"}),Object(_.b)(!l,Object(t.a)("span",{className:"unavailable"})))}));u.default=function(e){var u=e.unit,a=Object(r.b)(u),l=Object(r.e)(u),i=Object(n.a)(l,3),c=i[0],o=i[1],_=i[2];return Object(t.a)(b.a,{className:"unit-state",onSelect:function(e){o(e?a[+e]:void 0)}},Object(t.a)(b.a.Toggle,{as:v,id:"full-link-bonus-dropdown",available:_},Object(t.a)(f,{bonus:c})),Object(t.a)(b.a.Menu,null,Object(t.a)(s,{active:!c}),a.map((function(e,u){return Object(t.a)(p,{key:JSON.stringify(e),bonus:e,eventKey:u,active:e===c})}))))}}}]);
//# sourceMappingURL=9.300f2a29.chunk.js.map