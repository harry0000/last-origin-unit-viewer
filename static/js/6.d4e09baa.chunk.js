(this["webpackJsonplast-origin-unit-viewer"]=this["webpackJsonplast-origin-unit-viewer"]||[]).push([[6],{307:function(e,a,t){},314:function(e,a,t){"use strict";t.r(a);var c=t(7),s=t(10),n=t(1),r=(t(0),t(134)),i=t(183),u=t(2),l=t(9),f=t(26),o=t(182);function b(e){return"".concat("/last-origin-unit-viewer","/effect_icon/").concat(e,".webp")}var p=["effect"],j={width:24,height:24},d=function(){return Object(n.a)("div",{css:j})},O=function(e){var a=e.effect,t=Object(f.a)(e,p),c=Object(i.a)().t,s=function(e){switch(e){case u.a.DamageMultiplierUpByStatus:case u.a.DamageMultiplierReductionByStatus:return b(u.a.DamageMultiplierUp);case u.a.AdditionalDamageFocusing:return b(u.a.AtkUp);case u.a.FixedDamage:return b(u.a.AdditionalDamage);case u.a.AtkValueUp:case u.a.AtkValueUpByUnitValue:return b(u.a.AtkUp);case u.a.DefValueUp:return b(u.a.DefUp);case u.a.SpdUp:case u.a.SetAp:case u.a.RefundAp:return b(u.a.ApUp);case u.a.SpdDown:return b(u.a.ApDown);case u.a.RangeDownActive1:return b(u.a.RangeDown);case u.a.RangeUpActive2:return b(u.a.RangeUp);case u.a.MinimizeDamage:case u.a.MinimizeDamageLessThanValue:return b(u.a.DamageReduction);case u.a.AreaDamageDispersion:return b(u.a.DefUp);case u.a.BuffRemoval:return b(u.a.AllBuffRemoval);case u.a.DebuffRemoval:return b(u.a.AllDebuffRemoval);case u.a.AbsolutelyActivated:return b(u.a.ActivationRatePercentageUp);case u.a.ReAttack:return b(u.a.FollowUpAttack);case u.a.AttackHit:return b(u.a.AccUp);case u.a.CriReductionByStatus:case u.a.AttackCritical:return b(u.a.CriUp);case u.a.IgnoreDef:return b(u.a.DefensePenetration);case u.a.FormRelease:return b(u.a.FormChange);case u.a.HpUp:case u.a.HpDown:case u.a.TagStack:case u.a.TagUnstack:case u.a.TagRelease:case u.a.AMG11Construction:case u.a.DeployRabbitDField:case u.a.SummonHologramTiger:case u.a.GoldenFactoryConstruction:return;default:return b(e)}}(a);return s?Object(n.a)(o.a,Object(l.a)({},t,{rounded:!0,draggable:"false",alt:c("effect:effect.name.".concat(a)),src:s,srcSet:"".concat(s," 48w")})):Object(n.a)(d,null)},m=t(274),v=t(270),g=t(275),h=t(159),w=t(127),y=t(140),k=t(34),N=t(95),A=(t(213),t(307),function(e){var a=e.status,t=e.children,c=Object(i.a)().t;return Object(n.a)(m.a,{placement:"top",overlay:Object(n.a)(v.a,{id:"tooltip-".concat(a,"-status-in-squad")},c("status.".concat(a)))},t)}),D=function(e){var a=e.status,t=Object(N.j)(a),c="cri"===a||"acc"===a||"eva"===a;return Object(n.a)("div",null,c?Object(k.a)(t):t)},U=function(e){var a=e.status;return Object(n.a)("div",{className:"status-parameter-col"},Object(n.a)(A,{status:a},Object(n.a)(y.a,{height:24,width:24,status:a})),Object(n.a)("div",{className:"status-parameter-body"},Object(n.a)("div",{className:"status-parameter-value"},Object(n.a)(D,{status:a}),Object(n.a)(w.b,{className:"effects",parameter:a}))))},R=function(){var e=Object(N.g)(),a=Object(s.a)(e,2),t=a[0],c=a[1];return Object(n.a)("div",{className:"hp-value"},t,"\xa0/\xa0",c)},_=function(){var e=Object(N.f)();return void 0===e?Object(n.a)("div",{className:"hp-bar nope"}):e?Object(n.a)("div",{className:"hp-bar damaged"}):Object(n.a)("div",{className:"hp-bar"})},S=function(){return Object(n.a)("div",{className:"status-parameter-col"},Object(n.a)(A,{status:"hp"},Object(n.a)(y.a,{height:24,width:24,status:"hp"})),Object(n.a)("div",{className:"status-parameter-body"},Object(n.a)(R,null),Object(n.a)(_,null)))},C=function(){var e=Object(N.c)();return Object(n.a)("div",{className:"status-parameter-col"},Object(n.a)("span",{className:"ap-label"},"AP"),Object(n.a)("div",{className:"status-parameter-body"},Object(n.a)("div",{className:"status-parameter-value ap-value"},Object(n.a)(w.a,null,Object(n.a)("span",null,e)))))},F=function(e){var a=e.effect.label,t=a.type,c=a.key,s=Object(i.a)().t,r="tag"===t?s("effect:with_tag_quotes",{value:s(c)}):s(c);return Object(n.a)("div",{className:"effect-label"},r,s("effect:tag_separator"))},B=function(e){var a=e.effect,t=a.description,s=t.key,r=t.options,l=a.additions,f=Object(i.a)().t;return Object(n.a)("div",{className:"effect-value"},s===u.a.PreventsEffect?f("effect:effect.description.".concat(s),Object(c.a)(Object(c.a)({},r),{},{effects:"effect"in r&&r.effect?f("effect:effect.name.".concat(r.effect)):"effects"in r&&r.effects?r.effects.map((function(e){return f("effect:effect.name.".concat(e))})).join(f("effect:separator")):""})):f("effect:effect.description.".concat(s),r),l.length>0?" (".concat(l.map((function(e){switch(e.type){case"rate":return f("status.effect.rate.".concat(e.key),e.options);case"times":return f("effect:times",{count:e.value});case"cannot_be_dispelled":return f("effect:cannot_be_dispelled");default:return e}})).join(f("effect:separator")),")"):null)},M=function(e){var a=e.effect.term,t=Object(i.a)().t;return Object(n.a)("div",{className:"effect-term"},a?t(a.key,a.options):"")},T=function(e){var a=e.effect,t=a.type,c=a.affected,r=Object(i.a)().t,u="ally"===c.type,l=r(c.source.key,c.source.options),f=u?["".concat("/last-origin-unit-viewer","/icon/placeholder_core_link.webp"),"64w"]:["".concat("/last-origin-unit-viewer","/icon/placeholder_").concat(c.type,".webp"),"96w"],b=Object(s.a)(f,2),p=b[0],j=b[1],d=Object(n.a)(g.a,{id:"popover-effect-source",className:"skill-effect-details"},Object(n.a)(g.a.Content,null,Object(n.a)("div",{className:"skill-effect-details-body"},Object(n.a)("div",null,l),u?Object(n.a)("div",null,r("status.effect.source.skill",{type:r("skill.type.".concat(c.skill.type)),name:r(c.skill.name),lv:c.skill.lv})):null,Object(n.a)("div",{className:"skill-effect-type"},r("skill.effect.type.".concat(t))))));return Object(n.a)("div",{className:"effect-source"},Object(n.a)(m.a,{placement:"bottom",overlay:d},Object(n.a)(o.a,{width:20,height:20,rounded:!0,draggable:"false",alt:l,src:p,srcSet:"".concat(p," ").concat(j)})))},V=function(e){var a=e.effect;return Object(n.a)("div",{className:"effect-row-in-squad"},Object(n.a)(O,{height:24,width:24,effect:a.effect}),Object(n.a)(F,{effect:a}),Object(n.a)(B,{effect:a}),Object(n.a)(M,{effect:a}),Object(n.a)(T,{effect:a}))},q=function(){var e=Object(N.d)();return Object(n.a)("div",{className:"effect-list-in-squad"},e.map((function(e){return Object(n.a)(V,{key:Object(r.a)(),effect:e})})))};a.default=function(){return Object(n.a)("div",{className:"status-parameter-container"},Object(n.a)("div",{className:"status-parameter-row"},Object(n.a)(S,null),Object(n.a)(C,null)),Object(n.a)("div",{className:"status-parameter-row"},Object(n.a)(U,{status:"atk"}),Object(n.a)(U,{status:"cri"})),Object(n.a)("div",{className:"status-parameter-row"},Object(n.a)(U,{status:"def"}),Object(n.a)(U,{status:"acc"})),Object(n.a)("div",{className:"status-parameter-row"},Object(n.a)(U,{status:"spd"}),Object(n.a)(U,{status:"eva"})),Object(n.a)("div",{className:"attribute-resist-row"},Object(n.a)(h.b,null),Object(n.a)(h.c,null),Object(n.a)(h.a,null)),Object(n.a)(q,null))}}}]);
//# sourceMappingURL=6.d4e09baa.chunk.js.map