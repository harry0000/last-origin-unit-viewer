(this["webpackJsonplast-origin-unit-viewer"]=this["webpackJsonplast-origin-unit-viewer"]||[]).push([[5],{235:function(e,t,a){},241:function(e,t,a){"use strict";a.r(t);var c,n,r,i=a(5),s=a(21),o=a(29),f=a(26),l=a(7),u=a(1),b=a(0),O=a.n(b),j=a(133),d=a(6),p=a(90),m=a(230),g=a(218),v=a(55),_=a(40),k=["selected","type"],y=["skillType","unit"],h=(c={},Object(d.a)(c,p.a.Effective,"#d0191d"),Object(d.a)(c,p.a.High,"#ff8f03"),Object(d.a)(c,p.a.Middle,"#ba5a03"),Object(d.a)(c,p.a.Weak,"#763316"),Object(d.a)(c,p.a.None,"#4b4b4d"),c),T=function(e){return e!==p.a.None?{borderRadius:2,position:"absolute",top:-3,bottom:4,left:-3,right:4,opacity:.8,backgroundColor:h[e]}:{}},w=function(e){var t=e.selected,a=e.type,c=Object(f.a)(e,k),n=Object(j.a)().t;return Object(u.a)("td",{css:{border:"5px solid transparent",width:"33%",position:"relative","&::after":{content:'" "',display:"block",marginTop:"100%"}}},Object(u.a)("div",{css:{borderRadius:2,position:"absolute",inset:0,backgroundColor:t?"#16d4d4":h[p.a.None]}}),a===p.a.High||a===p.a.Middle||a===p.a.Weak?Object(u.a)(m.a,Object(o.a)({},c,{placement:"auto",overlay:Object(u.a)(g.a,{id:"tooltip-aoe-cell"},n("skill.effective_rate.".concat(a)))}),Object(u.a)("div",{css:T(a)})):Object(u.a)("div",{css:T(a)}))},S=function(e){var t=e.skillType,a=e.unit,c=Object(f.a)(e,y),n=Object(j.a)().t,r=Object(v.j)(t,a);return Object(_.a)(r,(function(e){return Object(u.a)("div",c,Object(u.a)("table",{css:{borderCollapse:"collapse",width:"100%",transform:"skewX(-9deg)"}},Object(u.a)("tbody",null,Object(u.a)("tr",null,Object(u.a)(w,{selected:7===e.select,type:e.area[0]}),Object(u.a)(w,{selected:8===e.select,type:e.area[1]}),Object(u.a)(w,{selected:9===e.select,type:e.area[2]})),Object(u.a)("tr",null,Object(u.a)(w,{selected:4===e.select,type:e.area[3]}),Object(u.a)(w,{selected:5===e.select,type:e.area[4]}),Object(u.a)(w,{selected:6===e.select,type:e.area[5]})),Object(u.a)("tr",null,Object(u.a)(w,{selected:1===e.select,type:e.area[6]}),Object(u.a)(w,{selected:2===e.select,type:e.area[7]}),Object(u.a)(w,{selected:3===e.select,type:e.area[8]})))),Object(u.a)("span",{css:{color:"#16d4d4"}},e.select?"\xa0":n("skill.fixed_area")))}))},x=a(223),N=a(221),F=a(229),A=a(222),D=a(206),R=a(17),q=a(10),C=a(60),U=(n={},Object(d.a)(n,C.a.Fire,"#c33"),Object(d.a)(n,C.a.Ice,"#0cf"),Object(d.a)(n,C.a.Electric,"#fc0"),n),P=function(e){var t=e.skillType,a=e.unit,c=Object(j.a)().t,n=Object(v.c)(t,a);if(!n[0])return null;var r=Object(i.a)(n,2),s=r[0],o=r[1];return Object(u.a)("div",{css:{color:"#ccc",marginTop:10}},Object(u.a)("span",null,o===R.a.Single?c("effect:damage_deal.target.single"):c("effect:damage_deal.target.area")),Object(_.a)(s.effective,(function(e){return Object(u.a)("span",null,c("effect:effective.".concat(e)),c("effect:separator"))})),Object(u.a)("span",null,c("status.atk")),Object(u.a)("span",{css:{margin:"0 5px",color:"#fc0",fontWeight:"bold"}},Object(q.d)(s),"%"),Object(u.a)("span",null,c("effect:as_preposition")),Object(_.a)(s.attribute,(function(e){return Object(u.a)("span",{css:{margin:"0 5px",color:U[e],fontWeight:600}},c("effect:attribute.".concat(e)))})),Object(u.a)("span",null,c("effect:damage")))},z=function(e){var t=e.skillType,a=e.unit,c=Object(j.a)().t,n=Object(v.d)(t,a);return Object(_.b)(n,Object(u.a)("div",{css:{color:"#ccc",fontSize:"0.9em",marginTop:10}},Object(u.a)("span",null,c("effect:effects_as_equipment.description.prefix")),Object(u.a)(m.a,{placement:"auto",overlay:Object(u.a)(g.a,{id:"tooltip-effects-as-equipment"},c("effect:effects_as_equipment.annotation"))},Object(u.a)("span",{css:{cursor:"help",textDecoration:"underline"}},c("effect:effects_as_equipment.description.as_equipment"))),Object(u.a)("span",null,c("effect:effects_as_equipment.description.suffix"))))},W=a(154),E=a(231),I="electric_active",B="artillery_type_active",J="squad_21",M="companion_series",H="steel_line",L="sisters_of_valhalla",G="anger_of_horde",K="aa_cannonier",X="armored_maiden",Q="mongoose_team",V="horizon",Y="tomos_friends",Z="city_guard",$="spartan_series",ee=(r={},Object(d.a)(r,I,new Set([6,11,75,84,113,115,132,174,201,221])),Object(d.a)(r,B,new Set([22,51,202])),Object(d.a)(r,J,new Set([2,3,85,92,118,121])),Object(d.a)(r,M,new Set([16,17,18,19,183])),Object(d.a)(r,H,new Set([21,22,23,24,25,26,27,28,29])),Object(d.a)(r,L,new Set([31,32,33,34,35,36,37])),Object(d.a)(r,G,new Set([41,42,43,44])),Object(d.a)(r,K,new Set([60,67,68,69,70])),Object(d.a)(r,X,new Set([61,62,65,66])),Object(d.a)(r,Q,new Set([80,81,82,83,84])),Object(d.a)(r,V,new Set([85,87,88,89,90])),Object(d.a)(r,Y,new Set([25,43,81,125])),Object(d.a)(r,Z,new Set([111,112,113,114,115])),Object(d.a)(r,$,new Set([215,216,217])),r);var te=function(e){var t=e.unitAlias,a=e.selfUnitNumber,c=Object(j.a)().t,n=Object(u.a)(E.a,{id:"popover-unit-alias",css:{opacity:"0.9"}},Object(u.a)(E.a.Content,null,Object(s.a)(ee[t]).filter((function(e){return e!==a})).map((function(e){return Object(u.a)("div",{key:e,css:{textAlign:"left"}},c("unit:display",{number:e}))}))));return Object(u.a)(m.a,{placement:"auto",overlay:n},Object(u.a)("span",{css:{cursor:"help",textDecoration:"underline"}},c("effect:unit.".concat(t))))},ae=a(13);function ce(e,t){return e.length>1&&t+1<e.length}function ne(e,t,a,c){if("number"===typeof t)return Object(u.a)("span",null,c("effect:condition.state.".concat(e),{unit:c("effect:with_quotes",{value:c("unit:display",{number:t})})}));if("string"!==typeof t){if("alias"in t){var n=c("effect:unit.".concat("type"in t?t.type:t.role));return Object(u.a)(O.a.Fragment,null,Object(u.a)(te,{unitAlias:t.alias,selfUnitNumber:a}),Object(u.a)("span",null,c("effect:of_preposition"),c("effect:condition.state.".concat(e),{unit:n})))}var r=t.type,i=t.role,s="".concat(c("effect:unit.".concat(r))).concat(c("effect:unit.".concat(i)));return Object(u.a)("span",null,c("effect:condition.state.".concat(e),{unit:s}))}switch(t){case ae.a.AGS:case ae.a.Bioroid:case ae.e.Light:case ae.e.Heavy:case ae.e.Flying:case ae.d.Attacker:case ae.d.Defender:case ae.d.Supporter:return Object(u.a)("span",null,c("effect:condition.state.".concat(e),{unit:c("effect:unit.".concat(t))}));case I:case B:case J:case M:case H:case L:case G:case K:case X:case Q:case V:case Y:case Z:case $:return Object(u.a)(O.a.Fragment,null,Object(u.a)(te,{unitAlias:t,selfUnitNumber:a}),Object(u.a)("span",null,c("effect:condition.state.".concat(e),{unit:""})));default:return t}}function re(e,t,a,c){return t.map((function(e,n){return Object(u.a)(O.a.Fragment,{key:JSON.stringify(e)},Object.entries(e).map((function(e,t,n){return Object(u.a)(O.a.Fragment,{key:e[0]},function(e,t,a){switch(e[0]){case"hp_greater_or_equal":case"hp_less_or_equal":case"hp_greater_than":case"hp_less_than":return Object(u.a)("span",null,a("effect:condition.state.".concat(e[0]),{value:e[1]}));case"effected":return Object(u.a)("span",null,a("effect:condition.state.".concat(e[0]),{effect:e[1]}));case"tagged":return Object(u.a)("span",null,a("effect:condition.state.".concat(e[0]),{tag:e[1]}));case"stack_ge":return"effect"in e[1]?a("effect:condition.state.tag_effect_stack_ge",{tag:e[1].tag,effect:e[1].effect,value:e[1].value}):a("effect:condition.state.tag_stack_ge",{tag:e[1].tag,value:e[1].value});case"form":return Object(u.a)("span",null,a("effect:condition.state.".concat(e[0]),{form:e[1]}));case"unit":return ne(e[0],e[1],t,a);case"in_squad":case"effected_by":return ne(e[0],e[1],t,a);case"equipped":return Object(u.a)("span",null,a("effect:condition.state.".concat(e[0]),{equipment:a("equipment:".concat(e[1]))}));case"protected":case"in_front_line":case"in_mid_line":case"in_back_line":return Object(u.a)("span",null,a("effect:condition.state.".concat(e[0])));default:return e}}(e,a,c),Object(_.b)(ce(n,t),Object(u.a)("span",null,c("effect:and_separator"))))})),Object(_.b)(ce(t,n),Object(u.a)("span",null,c("effect:or_separator"))))}))}var ie=function(e){var t=e.state,a=e.unitNumber,c=Object(j.a)().t,n=Object.entries(t).map((function(e){return{key:e[0],node:re(e[0],e[1],a,c)}}));return Object(u.a)(O.a.Fragment,null,n.map((function(e,t){var a=e.key,r=e.node;return Object(u.a)(O.a.Fragment,{key:a},Object(u.a)("span",null,c("effect:condition.target.".concat(a))),r,Object(_.b)(ce(n,t),Object(u.a)("span",null,c("effect:and_separator"))))})),Object(u.a)("span",null,c("effect:case")))},se=function(e){var t=e.condition,a=e.unitNumber,c=Object(j.a)().t,n=function(e,t){return"trigger"in e?"start_round"===e.trigger?Object(u.a)("span",null,e.round?t("effect:condition.round.until",{round:e.round.until}):"",t("effect:condition.trigger.start_round")):Object(u.a)("span",null,t("effect:condition.trigger.".concat(e.trigger))):null}(t,c),r="state"in t?Object(u.a)(ie,{state:t.state,unitNumber:a}):null;return Object(u.a)("div",null,n,Object(_.b)(!!n&&!!r,Object(u.a)("span",null,c("effect:separator"))),Object(u.a)("span",null,r))},oe=function(e){var t=e.conditions,a=e.effective,c=e.scale_factor,n=e.unitNumber,r=Object(j.a)().t;return Object(u.a)(O.a.Fragment,null,Object(u.a)((function(){return Object(_.a)(t,(function(e){return Object(u.a)("div",null,1===e.length?Object(u.a)(se,{condition:e[0],unitNumber:n}):Object(u.a)(O.a.Fragment,null,Object(u.a)(se,{condition:e[0],unitNumber:n}),Object(u.a)("div",{css:{fontSize:"0.7em"}},r("effect:or_conjunction")),Object(u.a)(se,{condition:e[1],unitNumber:n})))}))}),null),Object(u.a)((function(){return Object(_.b)(!!a||!!c,Object(u.a)("div",null,Object(_.a)(a,(function(e){return Object(u.a)("span",null,r("effect:effective.".concat(e)),r("effect:separator"))})),Object(_.a)(c,(function(e){return"per_stack"in e?Object(u.a)("span",null,r("effect:scale_factor.per_stack",{tag:e.per_stack.tag})):(t=e.num_of_units,Object.keys(ee).some((function(e){return e===t}))?Object(u.a)(O.a.Fragment,null,Object(u.a)(te,{unitAlias:e.num_of_units,selfUnitNumber:n}),Object(u.a)("span",null,r("effect:scale_factor.num_of_allies"))):Object(u.a)("span",null,r("effect:unit.".concat(e.num_of_units)),r("effect:scale_factor.num_of_allies")));var t})),Object(u.a)("span",null,r("effect:below_effects"))))}),null))},fe=a(8),le=a(30);function ue(e,t,a){var c="rate"in t&&t.rate?"string"===typeof t.rate?"".concat(a("effect:rate.".concat(t.rate))).concat(a("effect:separator")):"".concat(a("effect:rate.percentage",{value:Object(q.d)(t.rate)})).concat(a("effect:separator")):"",n=["times"in t&&t.times?a("effect:times",{count:t.times}):void 0,"max_stack"in t&&"number"===typeof t.max_stack?1===t.max_stack?a("effect:does_not_stack"):a("effect:max_stack",{count:t.max_stack}):void 0,"cannot_be_dispelled"in t&&t.cannot_be_dispelled?a("effect:cannot_be_dispelled"):void 0].filter((function(e){return!!e})).join(a("effect:separator"));return"".concat(c).concat(e).concat(n?" (".concat(n,")"):"")}function be(e,t){return"term"in e?"string"===typeof e.term?t("effect:term.".concat(e.term)):e.term&&t("effect:term.for_rounds",{value:e.term.for_rounds}):void 0}function Oe(e,t){return"tag"in e?e.tag&&t("effect:tag.".concat(e.tag)):void 0}function je(e,t,a){return{tag:Oe(t,a),detail:ue(a("effect:effect.description.".concat(e),{value:Object(q.d)(t)}),t,a),term:be(t,a)}}var de=function(e){var t=e.tag,a=e.detail,c=e.term,n=Object(j.a)().t;return Object(u.a)("div",{css:{display:"flex",fontWeight:"bold",borderRadius:3,backgroundColor:"#1c3042",padding:"3px 8px",marginTop:5}},Object(u.a)("div",null,Object(_.a)(t,(function(e){return Object(u.a)("span",null,e,n("effect:tag_separator"))})),Object(u.a)("span",null,a)),Object(u.a)("div",{css:{marginLeft:"auto",textAlign:"right",flexShrink:0}},Object(_.a)(c,(function(e){return Object(u.a)("span",{css:{marginLeft:10}},e)}))))},pe=function(e){var t=function(e,t){var a=be(e[1],t);switch(e[0]){case fe.a.MinimizeDamage:case fe.a.NullifyDamage:case fe.a.AllBuffRemoval:case fe.a.AllDebuffRemoval:case fe.a.ColumnProtect:case fe.a.RowProtect:case fe.a.TargetProtect:case fe.a.FollowUpAttack:case fe.a.IgnoreBarrierDr:case fe.a.IgnoreDr:case fe.a.IgnoreProtect:case fe.a.Reconnaissance:case fe.a.Marked:case fe.a.Provoked:case fe.a.Immovable:case fe.a.Silenced:case fe.a.Stunned:case fe.a.RefundAp:case fe.a.AttackCritical:case fe.a.CounterattackCritical:return{tag:Oe(e[1],t),detail:ue(t("effect:effect.description.".concat(e[0])),e[1],t),term:a};case fe.a.DeployDefensiveWall:case fe.a.AMG11Construction:case fe.a.DeployRabbitDField:case fe.a.SummonHologramTiger:return{tag:Oe(e[1],t),detail:t("effect:effect.description.".concat(e[0]),{times:e[1].times}),term:a};case fe.a.CooperativeAttack:var c=e[1],n=c.unit,r=c.active;return{tag:Oe(e[1],t),detail:Object(le.e)(n)?t("effect:effect.description.cooperative_attack_form_active",{unit:n,no:r,form:le.b[n].default}):t("effect:effect.description.cooperative_attack",{unit:n,no:r}),term:a};case fe.a.Push:case fe.a.Pull:case fe.a.RangeUp:case fe.a.RangeDown:case fe.a.FixedDamageOverTime:case fe.a.FixedFireDamageOverTime:case fe.a.FixedIceDamageOverTime:case fe.a.FixedElectricDamageOverTime:case fe.a.Barrier:case fe.a.BattleContinuation:return{tag:Oe(e[1],t),detail:ue(t("effect:effect.description.".concat(e[0]),{value:e[1].value}),e[1],t),term:a};case fe.a.ApUp:case fe.a.ApDown:case fe.a.SetAp:return{tag:Oe(e[1],t),detail:ue(t("effect:effect.description.".concat(e[0]),{value:Object(q.d)(e[1])}),e[1],t),term:a};case fe.a.EffectRemoval:var i="effect"in e[1]?t("effect:effect.name.".concat(e[1].effect)):e[1].effects.map((function(e){return t("effect:effect.name.".concat(e))})).join(t("effect:separator"));return{detail:ue(e[1].tag?t("effect:effect.description.tagged_effect_removal",{tag:e[1].tag,effects:i}):t("effect:effect.description.effect_removal",{effects:i}),e[1],t),term:a};case fe.a.PreventsEffect:var s=t("effect:effect.name.".concat(e[1].effect));return{tag:Oe(e[1],t),detail:ue(t("effect:effect.description.".concat(e[0]),{effect:s}),e[1],t),term:a};case fe.a.ActivationRatePercentageUp:var o=Object(q.d)(e[1]),f=e[1].effect;return{detail:ue(e[1].tag?t("effect:effect.description.tagged_activation_rate_percentage_up",{tag:e[1].tag,effect:f,value:o}):t("effect:effect.description.activation_rate_percentage_up",{effect:f,value:o}),e[1],t),term:a};case fe.a.FormChange:case fe.a.FormRelease:return{tag:Oe(e[1],t),detail:ue(t("effect:effect.description.".concat(e[0]),{form:e[1].form}),e[1],t),term:a};case fe.a.TagStack:case fe.a.TagRelease:return{detail:ue(t("effect:effect.description.".concat(e[0]),{tag:e[1].tag}),e[1],t),term:a};case fe.a.TagUnstack:return{detail:ue(t("effect:effect.description.".concat(e[0]),{tag:e[1].tag,value:e[1].value}),e[1],t),term:a};case fe.a.DefDown:case fe.a.EvaUp:case fe.a.StatusResistUp:return"length"in e[1]?e[1].map((function(a){return je(e[0],a,t)})):je(e[0],e[1],t);default:return je(e[0],e[1],t)}}(e.entry,Object(j.a)().t);return"length"in t?Object(u.a)(O.a.Fragment,null,t.map((function(e){return Object(u.a)(de,Object(o.a)({key:JSON.stringify(e)},e))}))):Object(u.a)(de,t)},me=function(e){var t=e.className,a=e.target,c=e.details,n=e.area,r=Object(j.a)().t,i="target"===a?"single"===n?"single":"area":a;return Object(u.a)("div",{className:t},Object(u.a)("div",null,Object(u.a)(N.a,{variant:"light"},r("effect:effect.target.".concat(i)))),Object.entries(c).map((function(e){return Object(u.a)(pe,{key:e[0],entry:e})})))},ge=function(e){var t=e.effect,a=e.unitNumber,c=e.area;return Object(u.a)("div",{css:{border:"1px solid rgba(255, 255, 255, 0.3)",borderRadius:5,marginTop:10,padding:5,"& > .skill-effect-details:not(:first-of-type)":{marginTop:10}}},Object(u.a)(oe,Object(o.a)({},t,{unitNumber:a})),Object(_.a)(t.details.self,(function(e){return Object(u.a)(me,{className:"skill-effect-details",target:"self",details:e,area:c})})),Object(_.a)(t.details.target,(function(e){return Object(u.a)(me,{className:"skill-effect-details",target:"target",details:e,area:c})})),Object(_.a)(t.details.around,(function(e){return Object(u.a)(me,{className:"skill-effect-details",target:"around",details:e,area:c})})))},ve=function(e){var t=e.skillType,a=e.unit,c=Object(v.l)(t,a);return Object(_.a)(c,(function(e){var t=Object(i.a)(e,3),a=t[0],c=t[1],n=t[2];return Object(u.a)("div",{css:{color:"#ccc",fontSize:"0.8em"}},a.map((function(e){return Object(u.a)(ge,{key:JSON.stringify(e),effect:e,unitNumber:n,area:c})})))}))},_e=a(24),ke=(a(235),["children"]),ye={fontSize:"1.2em",fontWeight:"bold"},he=Object(l.a)(Object(l.a)({},{fontSize:"1.2em",color:"#ccc"}),{},{display:"inline-block",width:"4em"}),Te={fontSize:"1.2em"},we=function(e){var t=e.children,a=Object(f.a)(e,ke);return Object(u.a)(x.a,Object(o.a)({},a,{fluid:!0,css:{padding:0}}),t)},Se=function(e){var t=e.skillType,a=e.unit,c=Object(v.n)(t,a);return Object(u.a)("div",{css:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},title:c},c)},xe=function(e){var t=e.skillType,a=e.unit,c=Object(v.k)(t,a);return Object(u.a)("span",{css:Object(l.a)(Object(l.a)({},ye),{},{color:"#0af"})},c)},Ne=function(e){var t=e.skillType,a=e.unit,c=Object(v.o)(t,a);return Object(u.a)("span",{css:Object(l.a)(Object(l.a)({},ye),{},{color:"#cc0"})},c)},Fe=function(e){var t=e.skillType,a=e.unit,c=Object(j.a)().t,n=Object(v.i)(t,a);return Object(_.b)(n,Object(u.a)("div",{css:Te},Object(u.a)(N.a,{variant:"rank-up-skill"},c("skill.rank_up"))))},Ae=function(e){var t=e.skillType,a=e.unit,c=Object(j.a)().t,n=Object(v.e)(t,a);return Object(_.a)(n,(function(e){return Object(u.a)("div",{css:Te},Object(u.a)(N.a,{variant:"secondary"},c("effect:form.".concat(e))))}))},De=Object(s.a)(Array(10)).map((function(e,t){return 10-t})),Re=function(e){var t=e.skillType,a=e.unit,c=Object(j.a)().t,n=Object(v.m)(t,a),r=Object(i.a)(n,2),s=r[0],o=r[1];return Object(u.a)("div",{css:{display:"flex",userSelect:"none"}},Object(u.a)("span",{css:{marginRight:5}},c("lv")),Object(u.a)(W.a,{css:{flexShrink:0},id:"skill-lv-dropdown",items:De,value:s,onChange:o}))};t.default=function(e){var t=e.eventKey,a=Object(j.a)().t,c=Object(_e.b)();return Object(u.a)(F.a.Pane,{eventKey:t},Object(_.a)(c,(function(e){return Object(u.a)(x.a,{fluid:!0,css:{paddingTop:5}},Object(u.a)(A.a,{css:{fontSize:"1.4em",color:"#eee"}},Object(u.a)(D.a,{xs:8,sm:9},Object(u.a)(Se,{skillType:t,unit:e})),Object(u.a)(D.a,{xs:4,sm:3},Object(u.a)(Re,{skillType:t,unit:e}))),Object(u.a)(A.a,null,Object(u.a)(D.a,{xs:{order:"last",span:12},sm:{order:"first",span:9}},Object(u.a)(P,{skillType:t,unit:e}),Object(u.a)(z,{skillType:t,unit:e}),Object(u.a)(ve,{skillType:t,unit:e})),Object(u.a)(D.a,{xs:{order:"first",span:12},sm:{order:"last",span:3}},Object(u.a)(we,{css:{userSelect:"none"}},Object(u.a)(A.a,null,Object(u.a)(D.a,{xs:8,sm:12},Object(u.a)(we,null,Object(u.a)(A.a,{css:{"& > div":{marginTop:5}}},Object(u.a)(D.a,{xs:{order:1,span:12},sm:{order:2,span:12}},Object(u.a)("span",{css:he},a("skill.ap")),Object(u.a)(xe,{skillType:t,unit:e})),Object(u.a)(D.a,{xs:{order:2,span:12},sm:{order:3,span:12}},Object(u.a)("span",{css:he},a("skill.range")),Object(u.a)(Ne,{skillType:t,unit:e})),Object(u.a)(D.a,{xs:{order:3,span:12},sm:{order:1,span:12}},Object(u.a)(Ae,{skillType:t,unit:e}),Object(u.a)(Fe,{skillType:t,unit:e}))))),Object(u.a)(D.a,{xs:4,sm:12,css:{"& > div":{marginTop:5}}},Object(u.a)("div",null,Object(u.a)("span",{css:{color:"#ccc"}},a("skill.area"))),Object(u.a)(S,{css:{width:100},skillType:t,unit:e})))))))})))}}}]);
//# sourceMappingURL=5.ce1bdbd9.chunk.js.map