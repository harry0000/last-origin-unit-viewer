(this["webpackJsonplast-origin-unit-viewer"]=this["webpackJsonplast-origin-unit-viewer"]||[]).push([[5],{248:function(e,t,a){},254:function(e,t,a){"use strict";a.r(t);var n,c,i,r=a(9),o=a(14),s=a(29),f=a(26),u=a(7),l=a(1),b=a(0),d=a.n(b),O=a(220),j=a(3),p=a(102),g=a(243),m=a(233),v=a(60),_=a(37),y=["selected","type"],k=["skillType","unit"],h=(n={},Object(j.a)(n,p.a.Effective,"#d0191d"),Object(j.a)(n,p.a.High,"#ff8f03"),Object(j.a)(n,p.a.Middle,"#ba5a03"),Object(j.a)(n,p.a.Weak,"#763316"),Object(j.a)(n,p.a.None,"#4b4b4d"),n),w=function(e){return e!==p.a.None?{borderRadius:2,position:"absolute",top:-3,bottom:4,left:-3,right:4,opacity:.8,backgroundColor:h[e]}:{}},S=function(e){var t=e.selected,a=e.type,n=Object(f.a)(e,y),c=Object(O.a)().t;return Object(l.a)("td",{css:{border:"5px solid transparent",width:"33%",position:"relative","&::after":{content:'" "',display:"block",marginTop:"100%"}}},Object(l.a)("div",{css:{borderRadius:2,position:"absolute",inset:0,backgroundColor:t?"#16d4d4":h[p.a.None]}}),a===p.a.High||a===p.a.Middle||a===p.a.Weak?Object(l.a)(g.a,Object(s.a)({},n,{placement:"auto",overlay:Object(l.a)(m.a,{id:"tooltip-aoe-cell"},c("skill.effective_rate.".concat(a)))}),Object(l.a)("div",{css:w(a)})):Object(l.a)("div",{css:w(a)}))},T=function(e){var t=e.skillType,a=e.unit,n=Object(f.a)(e,k),c=Object(O.a)().t,i=Object(v.j)(t,a);return Object(_.a)(i,(function(e){return Object(l.a)("div",n,Object(l.a)("table",{css:{borderCollapse:"collapse",width:"100%",transform:"skewX(-9deg)"}},Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)(S,{selected:7===e.select,type:e.area[0]}),Object(l.a)(S,{selected:8===e.select,type:e.area[1]}),Object(l.a)(S,{selected:9===e.select,type:e.area[2]})),Object(l.a)("tr",null,Object(l.a)(S,{selected:4===e.select,type:e.area[3]}),Object(l.a)(S,{selected:5===e.select,type:e.area[4]}),Object(l.a)(S,{selected:6===e.select,type:e.area[5]})),Object(l.a)("tr",null,Object(l.a)(S,{selected:1===e.select,type:e.area[6]}),Object(l.a)(S,{selected:2===e.select,type:e.area[7]}),Object(l.a)(S,{selected:3===e.select,type:e.area[8]})))),Object(l.a)("span",{css:{color:"#16d4d4"}},e.select?"\xa0":c("skill.fixed_area")))}))},x=a(235),N=a(236),F=a(242),A=a(234),q=a(221),U=a(15),D=a(12),C=a(77),R=(c={},Object(j.a)(c,C.a.Fire,"#c33"),Object(j.a)(c,C.a.Ice,"#0cf"),Object(j.a)(c,C.a.Electric,"#fc0"),c),E=function(e){var t=e.skillType,a=e.unit,n=Object(O.a)().t,c=Object(v.c)(t,a);if(!c[0])return null;var i=Object(r.a)(c,2),o=i[0],s=i[1];return Object(l.a)("div",{css:{color:"#ccc",marginTop:10}},Object(l.a)("span",null,s===U.a.Single?n("effect:damage_deal.target.single"):n("effect:damage_deal.target.area")),Object(_.a)(o.effective,(function(e){return Object(l.a)("span",null,n("effect:effective.".concat(e)),n("effect:separator"))})),Object(l.a)("span",null,n("status.atk")),Object(l.a)("span",{css:{margin:"0 5px",color:"#fc0",fontWeight:"bold"}},Object(D.d)(o),"%"),Object(l.a)("span",null,n("effect:as_preposition")),Object(_.a)(o.attribute,(function(e){return Object(l.a)("span",{css:{margin:"0 5px",color:R[e],fontWeight:600}},n("effect:attribute.".concat(e)))})),Object(l.a)("span",null,n("effect:damage")))},I=function(e){var t=e.skillType,a=e.unit,n=Object(O.a)().t,c=Object(v.d)(t,a);return Object(_.b)(c,Object(l.a)("div",{css:{color:"#ccc",fontSize:"0.9em",marginTop:10}},Object(l.a)("span",null,n("effect:effects_as_equipment.description.prefix")),Object(l.a)(g.a,{placement:"auto",overlay:Object(l.a)(m.a,{id:"tooltip-effects-as-equipment"},n("effect:effects_as_equipment.annotation"))},Object(l.a)("span",{css:{cursor:"help",textDecoration:"underline"}},n("effect:effects_as_equipment.description.as_equipment"))),Object(l.a)("span",null,n("effect:effects_as_equipment.description.suffix"))))},P=a(160),z=a(244),H="bioroid_under_145cm_tall",B="electric_active",G="artillery_type_active",M="squad_21",W="companion_series",J="steel_line",L="sisters_of_valhalla",K="anger_of_horde",V="doom_bringer",X="aa_cannonier",Q="armored_maiden",Y="mongoose_team",Z="horizon",$="tomos_friends",ee="city_guard",te="d_entertainment",ae="magical_girl",ne="kouhei_church",ce="smart_enjoy",ie="spartan_series",re=(i={},Object(j.a)(i,H,new Set([9,22,26,37,51,76,84,90,102,108,118,123,141,161,177,188,206])),Object(j.a)(i,B,new Set([6,11,75,84,113,115,132,139,174,179,201,221,231,235])),Object(j.a)(i,G,new Set([22,51,202])),Object(j.a)(i,M,new Set([2,3,85,92,118,121,187])),Object(j.a)(i,W,new Set([16,17,18,19,183])),Object(j.a)(i,J,new Set([21,22,23,24,25,26,27,28,29])),Object(j.a)(i,L,new Set([31,32,33,34,35,36,37,177])),Object(j.a)(i,K,new Set([40,41,42,43,44,192,194])),Object(j.a)(i,V,new Set([51,52,53,54,55,56,182])),Object(j.a)(i,X,new Set([60,67,68,69,70])),Object(j.a)(i,Q,new Set([61,62,65,66])),Object(j.a)(i,Y,new Set([80,81,82,83,84])),Object(j.a)(i,Z,new Set([85,87,88,89,90])),Object(j.a)(i,$,new Set([25,43,81,125])),Object(j.a)(i,ee,new Set([111,112,113,114,115,179,184])),Object(j.a)(i,te,new Set([121,123,124,125,127,128,129,171,174,178])),Object(j.a)(i,ae,new Set([123,127])),Object(j.a)(i,ne,new Set([126,138,139])),Object(j.a)(i,ce,new Set([205,206])),Object(j.a)(i,ie,new Set([215,216,217])),i);function oe(e){return Object.keys(re).some((function(t){return t===e}))}var se=function(e){var t=e.unitAlias,a=e.exceptUnit,n=Object(O.a)().t,c=Object(l.a)(z.a,{id:"popover-unit-alias",css:{opacity:"0.9"}},Object(l.a)(z.a.Content,null,Object(o.a)(re[t]).filter((function(e){return e!==a})).map((function(e){return Object(l.a)("div",{key:e,css:{textAlign:"left"}},n("unit:display",{number:e}))}))));return Object(l.a)(g.a,{placement:"auto",overlay:c},Object(l.a)("span",{css:{display:"inline-block",cursor:"help",textDecoration:"underline"}},n("effect:unit.".concat(t))))},fe=function(e){var t=e.target,a=e.selfUnitNumber,n=Object(O.a)().t;return Object(l.a)(d.a.Fragment,null,n("effect:effect.target.kind.".concat(t.kind)),"conditions"in t?n("effect:of_preposition"):null,"conditions"in t&&t.conditions?t.conditions.map((function(e,t,c){var i=++t<c.length?n("effect:unit_separator"):"";if("number"===typeof e)return n("effect:with_quotes",{value:n("unit:display",{number:e})})+i;if("string"===typeof e)return oe(e)?Object(l.a)(d.a.Fragment,{key:e},Object(l.a)(se,{unitAlias:e}),i):n("effect:unit.".concat(e))+i;if("alias"in e){var r="type"in e?n("effect:unit.".concat(e.type)):"role"in e?n("effect:unit.".concat(e.role)):null,o="except"in e?e.except:void 0;return Object(l.a)(d.a.Fragment,{key:e.alias},Object(_.a)(o,(function(e){return Object(l.a)(d.a.Fragment,null,e===a?n("effect:unit.self"):n("effect:with_quotes",{value:n("unit:display",{number:e})}),n("effect:except_preposition"))})),Object(l.a)(se,{unitAlias:e.alias,exceptUnit:o}),r?n("effect:of_preposition"):null,r,i)}return"not_alias"in e?Object(l.a)(d.a.Fragment,{key:e.not_alias},Object(l.a)(se,{unitAlias:e.not_alias}),n("effect:negative_form"),n("type"in e?"effect:unit.".concat(e.type):"effect:unit.unit"),i):n("effect:unit.".concat(e.type))+n("effect:unit.".concat(e.role))+i})):null)},ue=a(101),le=a(145),be=a(4);a(175);function de(e){return"target"in e}var Oe=a(10),je=a(16),pe=a(5),ge=a(28),me=a(114),ve=Object(ge.a)("effect"),_e=function(){function e(t){Object(Oe.a)(this,e),Object.defineProperty(this,ve,{writable:!0,value:void 0}),Object(pe.a)(this,ve)[ve]=t}return Object(je.a)(e,[{key:"enemyTargetConditions",get:function(){return!Object(pe.a)(this,ve)[ve].conditions&&!("target"in Object(pe.a)(this,ve)[ve].details)&&Object(me.d)(Object(pe.a)(this,ve)[ve])&&Object(pe.a)(this,ve)[ve].target.kind===me.a.Enemy&&"conditions"in Object(pe.a)(this,ve)[ve].target&&Object(pe.a)(this,ve)[ve].target.conditions?{kind:Object(pe.a)(this,ve)[ve].target.kind,conditions:Object(pe.a)(this,ve)[ve].target.conditions}:void 0}},{key:"onlyAdditional",get:function(){return!Object(pe.a)(this,ve)[ve].conditions&&!this.enemyTargetConditions}},{key:"hasMultipleConditions",get:function(){var e,t;return(null!==(e=null===(t=Object(pe.a)(this,ve)[ve].conditions)||void 0===t?void 0:t.length)&&void 0!==e?e:0)>1}},{key:"effective",get:function(){return"effective"in Object(pe.a)(this,ve)[ve]?Object(pe.a)(this,ve)[ve].effective:void 0}},{key:"scaleFactor",get:function(){return"scale_factor"in Object(pe.a)(this,ve)[ve]?Object(pe.a)(this,ve)[ve].scale_factor:void 0}},{key:"effectTargets",get:function(){var e="self"in Object(pe.a)(this,ve)[ve].details;if("target"in Object(pe.a)(this,ve)[ve].details&&Object(me.d)(Object(pe.a)(this,ve)[ve])){var t,a=null===(t=Object(pe.a)(this,ve)[ve].conditions)||void 0===t?void 0:t.some((function(e){return"state"in e&&"target"in e.state}));return Object.assign(e?{self:!0}:{},Object(u.a)({target:!0},a?{}:Object(pe.a)(this,ve)[ve].target))}return e?{self:!0}:{around:!0}}}]),e}(),ye=a(44),ke=a(118);function he(e,t){return++t<e.length}function we(e,t,a,n){function c(e){return n("effect:with_quotes",{value:n("unit:display",{number:e})})}if("number"===typeof t)return Object(l.a)("span",null,n("effect:condition.state.".concat(e),{unit:c(t)}));if(Object(ke.a)(t)){var i=t.map((function(e){return c(e)})).join(n("effect:unit_separator"));return Object(l.a)("span",null,n("effect:condition.state.".concat(e),{unit:i}))}return"string"===typeof t?oe(t)?Object(l.a)(d.a.Fragment,null,Object(_.b)(e===ue.a.InSquad,Object(l.a)("span",null,n("effect:unit.self"),n("effect:except_preposition"))),Object(l.a)(se,{unitAlias:t,exceptUnit:e===ue.a.InSquad?a:void 0}),Object(l.a)("span",null,n("effect:condition.state.".concat(e),{unit:""}))):Object(l.a)("span",null,n("effect:condition.state.".concat(e),{unit:n("effect:unit.".concat(t))})):"alias"in t?Object(l.a)(d.a.Fragment,null,n("effect:with_quotes",{value:n("unit:display",{number:t.except})}),n("effect:except_preposition"),Object(l.a)(se,{unitAlias:t.alias,exceptUnit:t.except}),n("effect:condition.state.".concat(e),{unit:""})):Object(l.a)("span",null,n("effect:condition.state.affected_effect_by",t))}var Se=function(e){var t=Object(O.a)().t,a=e.state,n=e.unitNumber;return Object(l.a)(d.a.Fragment,null,"target"in e?Object(l.a)(d.a.Fragment,null,Object(l.a)(fe,{target:e.target,selfUnitNumber:n}),t("effect:case_particle")):t("effect:condition.target.self"),a.map((function(e,c){return Object(l.a)(d.a.Fragment,{key:JSON.stringify(e)},Object(ye.c)(e).map((function(e,a,c){return Object(l.a)(d.a.Fragment,{key:e[0]},function(e,t,a){switch(e[0]){case ue.a.HpGreaterOrEqual:case ue.a.HpLessOrEqual:case ue.a.HpGreaterThan:case ue.a.HpLessThan:return Object(l.a)("span",null,a("effect:condition.state.".concat(e[0]),{value:e[1]}));case ue.a.StatusGreaterThanSelf:case ue.a.StatusLessThanSelf:case ue.a.StatusGreaterOrEqualThan:return Object(l.a)("span",null,a("effect:condition.state.".concat(e[0]),e[1]));case ue.a.Affected:return Object(l.a)("span",null,a("effect:condition.state.".concat(e[0]),{effect:e[1]}));case ue.a.NotAffected:var n=e[1].map((function(e){return a("effect:effect.name.".concat(e))})).join(a("effect:and_symbolic_separator"));return Object(l.a)("span",null,a("effect:condition.state.".concat(e[0]),{effects:n}));case ue.a.AffectedBy:return we(e[0],e[1],t,a);case ue.a.Tagged:case ue.a.NotTagged:return Object(l.a)("span",null,a("effect:condition.state.".concat(e[0]),{tag:e[1]}));case ue.a.TaggedAffected:return Object(l.a)("span",null,a("effect:condition.state.".concat(e[0]),{tag:e[1].tag,effect:e[1].effects.map((function(e){return a("effect:effect.name.".concat(e))})).join(a("effect:and_symbolic_separator"))}));case ue.a.StackGe:return"effect"in e[1]?a("effect:condition.state.tag_effect_stack_ge",{tag:e[1].tag,effect:e[1].effect,value:e[1].value}):a("effect:condition.state.tag_stack_ge",{tag:e[1].tag,value:e[1].value});case ue.a.Form:return Object(l.a)("span",null,a("effect:condition.state.".concat(e[0]),{form:e[1]}));case ue.a.Unit:return we(e[0],e[1],t,a);case ue.a.Equipped:var c=a("equipment:".concat(e[1]));return Object(l.a)("span",null,a("effect:condition.state.".concat(e[0]),{equipment:c}));case ue.a.NotEquipped:var i=e[1].map((function(e){return"".concat(a("effect:with_quotes",{value:a("equipment:".concat(e))}))})).join(a("effect:unit_separator"));return Object(l.a)("span",null,a("effect:condition.state.".concat(e[0]),{equipments:i}));case ue.a.Grid:return Object(l.a)("span",null,a("effect:condition.state.".concat(e[0]),{grid:e[1]}));default:return e}}(e,n,t),Object(_.b)(he(c,a),Object(l.a)("span",null,t("effect:and_symbolic_separator"))))})),Object(_.b)(he(a,c),Object(l.a)("span",null,t("effect:or_symbolic_separator"))))})))},Te=function(e){var t=e.state,a=e.unitNumber,n=Object(O.a)().t;return Object(l.a)(d.a.Fragment,null,n("effect:condition.target.squad"),Object(ke.a)(t)?we(ue.a.InSquad,t.map((function(e){return e.in_squad})),a,n):"num_of_units"in t?"greater_or_equal"in t.num_of_units?n("effect:condition.state.num_of_units_ge",t.num_of_units):n("effect:condition.state.num_of_units_le",t.num_of_units):"not_in_squad"in t?we(ue.a.NotInSquad,t.not_in_squad,a,n):we(ue.a.InSquad,t.in_squad,a,n))},xe=function(e){var t=e.state,a=Object(O.a)().t,n=t.num_of_units;return Object(l.a)(d.a.Fragment,null,"unit"in n?a("effect:condition.target.enemy_unit",n):a("effect:condition.target.enemy"),a("less_or_equal"in n?"effect:condition.state.num_of_enemies":"effect:condition.state.num_of_enemies_ge",n))},Ne=function(e){var t=e.condition,a=e.unitNumber,n=Object(O.a)().t;if(!("trigger"in t))return null;switch(t.trigger){case le.a.StartRound:return t.round?"at"in t.round?n("effect:condition.trigger.round.at",{round:t.round.at}):"from"in t.round?n("effect:condition.trigger.round.from",{round:t.round.from}):n("effect:condition.trigger.round.until",{round:t.round.until}):n("effect:condition.trigger.start_round");case le.a.UseActive2:case le.a.HitActive1:case le.a.HitActive2:return n("effect:condition.trigger.".concat(t.trigger),{unit:a});default:return n("effect:condition.trigger.".concat(t.trigger))}},Fe=function(e){var t=Object(O.a)().t,a=e.unitNumber;if(!("state"in e.condition))return null;var n=function(e){var a=e.show;return Object(_.b)(a,t("effect:and_symbolic_separator"))},c=function(e){var t=e.entry,a=e.unitNumber,c=e.needSeparator,i=Object(r.a)(t,2),o=i[0],s=i[1];return"self"===o?Object(l.a)(d.a.Fragment,{key:o},Object(l.a)(Se,{state:s,unitNumber:a}),Object(l.a)(n,{show:c})):"squad"===o?Object(l.a)(d.a.Fragment,{key:o},Object(l.a)(Te,{key:o,state:s,unitNumber:a}),Object(l.a)(n,{show:c})):Object(l.a)(d.a.Fragment,{key:o},Object(l.a)(xe,{state:s}),Object(l.a)(n,{show:c}))};return Object(l.a)(d.a.Fragment,null,"target"in e?Object(ye.c)(e.condition.state).map((function(t,i,r){return"target"===t[0]?Object(l.a)(d.a.Fragment,{key:t[0]},Object(l.a)(Se,{state:t[1],target:e.target,unitNumber:a}),Object(l.a)(n,{show:he(r,i)})):"squad"===t[0]?Object(l.a)(d.a.Fragment,{key:t[0]},Object(l.a)(Te,{state:t[1],unitNumber:a}),Object(l.a)(n,{show:he(r,i)})):Object(l.a)(c,{key:t[0],entry:t,unitNumber:a,needSeparator:he(r,i)})})):Object(ye.c)(e.condition.state).map((function(e,t,n){return Object(l.a)(c,{key:e[0],entry:e,unitNumber:a,needSeparator:he(n,t)})})),t("effect:case"))},Ae=function(e){var t=Object(O.a)().t,a=e.condition,n=e.unitNumber,c="trigger"in a&&"state"in a;return Object(l.a)("span",null,Object(l.a)(Ne,{condition:a,unitNumber:n}),Object(_.b)(c,t("effect:separator")),"target"in e?Object(l.a)(Fe,{condition:e.condition,target:e.target,unitNumber:n}):Object(l.a)(Fe,{condition:e.condition,unitNumber:n}))},qe=function(e){var t=e.target,a=Object(O.a)().t,n=t.conditions.map((function(e){return a("effect:unit.".concat(e))})).join(a("effect:unit_separator"));return Object(l.a)(d.a.Fragment,null,a("effect:effect.target.kind.enemy"),a("effect:case_particle"),a("effect:condition.state.unit",{unit:n}),a("effect:case"))},Ue=function(e){var t=e.effective,a=Object(O.a)().t;return Object(_.a)(t,(function(e){return Object(l.a)("span",null,a("effect:effective.".concat(e)))}))},De=function(e){var t=e.scaleFactor,a=e.unitNumber,n=Object(O.a)().t;return Object(_.a)(t,(function(e){if("per_stack"in e)return Object(l.a)("span",null,n("effect:scale_factor.per_stack",{tag:e.per_stack.tag}));switch(e.per_units.type){case"all":return Object(l.a)("span",null,n("effect:scale_factor.per_units"));case"squad":var t=e.per_units,c=t.unit,i=void 0===c?"ally":c,r=!!t.except;return Object(l.a)(d.a.Fragment,null,Object(_.b)(r,Object(l.a)("span",null,n("effect:unit.self"),n("effect:except_preposition"))),Object(ke.a)(i)?Object(l.a)(d.a.Fragment,null,Object(l.a)(se,{unitAlias:i[0],exceptUnit:r?a:void 0}),Object(l.a)("span",null,"\xa0",n("effect:unit_separator"),"\xa0"),Object(l.a)(se,{unitAlias:i[1],exceptUnit:r?a:void 0})):oe(i)?Object(l.a)(se,{unitAlias:i,exceptUnit:r?a:void 0}):Object(l.a)("span",null,n("effect:unit.".concat(i))),Object(l.a)("span",null,n("effect:scale_factor.num_of_allies")));case"enemy":return Object(l.a)("span",null,n("effect:unit.enemy"),Object(_.a)(e.per_units.unit,(function(e){return n("effect:unit.".concat(e))})),n("effect:scale_factor.".concat(e.per_units.variation)))}}))},Ce=function(e){var t=e.targets,a=e.unitNumber,n=Object(O.a)().t;return Object(l.a)("span",null,Object(_.b)("self"in t,n("effect:effect.target.self")),Object(_.b)("self"in t&&"target"in t,n("effect:and_separator")),"target"in t?"kind"in t?Object(l.a)(fe,{target:t,selfUnitNumber:a}):n("effect:effect.target.target"):null,Object(_.b)("around"in t,n("effect:effect.target.around")),n("effect:to_preposition"))},Re=function(e){var t=e.effect,a=e.unitNumber,n=Object(O.a)().t,c=new _e(t),i=function(){return Object(l.a)("div",{css:{fontSize:"0.7em"}},n("effect:or_conjunction"))};return Object(l.a)("div",null,Object(l.a)((function(){return de(t)?t.conditions?1===t.conditions.length?Object(l.a)(Ae,{condition:t.conditions[0],target:t.target,unitNumber:a}):Object(l.a)(d.a.Fragment,null,Object(l.a)(Ae,{condition:t.conditions[0],target:t.target,unitNumber:a}),Object(l.a)(i,null),Object(l.a)(Ae,{condition:t.conditions[1],target:t.target,unitNumber:a})):Object(_.a)(c.enemyTargetConditions,(function(e){return Object(l.a)(qe,{target:e})})):Object(_.a)(t.conditions,(function(e){return 1===e.length?Object(l.a)(Ae,{condition:e[0],unitNumber:a}):Object(l.a)(d.a.Fragment,null,Object(l.a)(Ae,{condition:e[0],unitNumber:a}),Object(l.a)(i,null),Object(l.a)(Ae,{condition:e[1],unitNumber:a}))}))}),null),Object(l.a)((function(e){var t=e.children;return c.onlyAdditional?Object(l.a)("span",null,t):c.hasMultipleConditions?Object(l.a)("div",{css:{marginTop:5}},t):Object(l.a)("span",null,n("effect:separator"),t)}),null,Object(l.a)(Ue,{effective:c.effective}),Object(l.a)(De,{scaleFactor:c.scaleFactor,unitNumber:a}),Object(l.a)(Ce,{targets:c.effectTargets,unitNumber:a}),n("effect:below_effects")))},Ee=a(30);function Ie(e,t,a){var n="rate"in t&&t.rate?"string"===typeof t.rate?"".concat(a("effect:rate.".concat(t.rate))).concat(a("effect:separator")):"".concat(a("effect:rate.percentage",{value:Object(D.b)(t.rate)})).concat(a("effect:separator")):"",c=["times"in t&&t.times?a("effect:times",{count:t.times}):void 0,"max_stack"in t&&"number"===typeof t.max_stack?1===t.max_stack?a("effect:does_not_stack"):a("effect:max_stack",{count:t.max_stack}):void 0,"cannot_be_dispelled"in t&&t.cannot_be_dispelled?a("effect:cannot_be_dispelled"):void 0].filter(ke.b).join(a("effect:separator"));return"".concat(n).concat(e).concat(c?" (".concat(c,")"):"")}function Pe(e,t){return"term"in e?"string"===typeof e.term?t("effect:term.".concat(e.term)):e.term&&t("effect:term.for_rounds",{value:e.term.for_rounds}):void 0}function ze(e,t){return"tag"in e?e.tag&&t("effect:tag.".concat(e.tag)):void 0}function He(e,t,a){return{tag:ze(t,a),detail:Ie(a("effect:effect.description.".concat(e),{value:Object(D.b)(t)}),t,a),term:Pe(t,a)}}function Be(e,t,a){return{detail:Ie(a("effect:effect.description.".concat(e),{tag:t.tag}),t,a),term:Pe(t,a)}}var Ge=function(e){var t=e.tag,a=e.detail,n=e.term,c=Object(O.a)().t;return Object(l.a)("div",{css:{display:"flex",fontWeight:"bold",borderRadius:3,backgroundColor:"#1c3042",padding:"3px 8px",marginTop:5}},Object(l.a)("div",null,Object(_.a)(t,(function(e){return Object(l.a)("span",null,e,c("effect:tag_separator"))})),Object(l.a)("span",null,a)),Object(l.a)("div",{css:{marginLeft:"auto",textAlign:"right",flexShrink:0}},Object(_.a)(n,(function(e){return Object(l.a)("span",{css:{marginLeft:10,color:"#aaa",fontSize:"0.9em"}},e)}))))},Me=function(e){var t=function(e,t){var a=Pe(e[1],t);switch(e[0]){case be.a.ActionCountUp:case be.a.MinimizeDamage:case be.a.NullifyDamage:case be.a.AllBuffBlocking:case be.a.AllBuffRemoval:case be.a.AllDebuffRemoval:case be.a.ColumnProtect:case be.a.RowProtect:case be.a.TargetProtect:case be.a.ReAttack:case be.a.FollowUpAttack:case be.a.IgnoreBarrierDr:case be.a.IgnoreProtect:case be.a.IgnoreProtectDeactivate:case be.a.Reconnaissance:case be.a.Marked:case be.a.Provoked:case be.a.Immovable:case be.a.Silenced:case be.a.Stunned:case be.a.RefundAp:case be.a.AttackHit:case be.a.AttackCritical:case be.a.IgnoreDef:return{tag:ze(e[1],t),detail:Ie(t("effect:effect.description.".concat(e[0])),e[1],t),term:a};case be.a.AMG11Construction:case be.a.DeployRabbitDField:case be.a.SummonHologramTiger:case be.a.GoldenFactoryConstruction:return{tag:ze(e[1],t),detail:t("effect:effect.description.".concat(e[0]),{times:e[1].times}),term:a};case be.a.CooperativeAttack:var n=e[1],c=n.unit,i=n.active;return{tag:ze(e[1],t),detail:Object(Ee.e)(c)?t("effect:effect.description.cooperative_attack_form_active",{unit:c,no:i,form:Ee.b[c].default}):t("effect:effect.description.cooperative_attack",{unit:c,no:i}),term:a};case be.a.Push:case be.a.Pull:case be.a.RangeUp:case be.a.RangeDown:case be.a.FixedDamageOverTime:case be.a.FixedFireDamageOverTime:case be.a.FixedIceDamageOverTime:case be.a.FixedElectricDamageOverTime:case be.a.Barrier:return{tag:ze(e[1],t),detail:Ie(t("effect:effect.description.".concat(e[0]),{value:e[1].value}),e[1],t),term:a};case be.a.BattleContinuation:var r="value"in e[1]?t("effect:effect.description.battle_continuation",{value:e[1].value}):t("effect:effect.description.battle_continuation_with_hp_rate",{value:Object(D.b)(e[1])});return{tag:ze(e[1],t),detail:Ie(r,e[1],t),term:a};case be.a.AtkValueUp:case be.a.DefValueUp:return{tag:ze(e[1],t),detail:Ie(t("effect:effect.description.".concat(e[0]),{value:Object(D.c)(e[1])}),e[1],t),term:a};case be.a.ApUp:case be.a.ApDown:case be.a.SetAp:return{tag:ze(e[1],t),detail:Ie(t("effect:effect.description.".concat(e[0]),{value:Object(D.a)(e[1])}),e[1],t),term:a};case be.a.EffectRemoval:var o="effect"in e[1]?t("effect:effect.name.".concat(e[1].effect)):e[1].effects.map((function(e){return t("effect:effect.name.".concat(e))})).join(t("effect:separator"));return{detail:Ie(e[1].tag?t("effect:effect.description.tagged_effect_removal",{tag:e[1].tag,effects:o}):t("effect:effect.description.effect_removal",{effects:o}),e[1],t),term:a};case be.a.PreventsEffect:return{tag:ze(e[1],t),detail:Ie(t("effect:effect.description.".concat(e[0]),e[1]),e[1],t),term:a};case be.a.ActivationRatePercentageUp:var s=Object(D.b)(e[1]),f=e[1].effect;return{detail:Ie(e[1].tag?t("effect:effect.description.tagged_activation_rate_percentage_up",{tag:e[1].tag,effect:f,value:s}):t("effect:effect.description.activation_rate_percentage_up",{effect:f,value:s}),e[1],t),term:a};case be.a.AbsolutelyActivated:return{detail:Ie(t("effect:effect.description.".concat(e[0]),e[1]),e[1],t),term:a};case be.a.FormChange:case be.a.FormRelease:return{tag:ze(e[1],t),detail:Ie(t("effect:effect.description.".concat(e[0]),{form:e[1].form}),e[1],t),term:a};case be.a.TagStack:case be.a.TagRelease:return"length"in e[1]?e[1].map((function(a){return Be(e[0],a,t)})):Be(e[0],e[1],t);case be.a.TagUnstack:return{detail:Ie(t("effect:effect.description.".concat(e[0]),{tag:e[1].tag,value:e[1].value}),e[1],t),term:a};case be.a.DamageMultiplierUpByStatus:return{tag:ze(e[1],t),detail:Ie(t("effect:effect.description.".concat(e[0]),{status:e[1].status,value:Object(D.b)(e[1])}),e[1],t),term:a};case be.a.DefDown:case be.a.AccDown:case be.a.CriDown:case be.a.EvaUp:case be.a.StatusResistUp:return"length"in e[1]?e[1].map((function(a){return He(e[0],a,t)})):He(e[0],e[1],t);default:return He(e[0],e[1],t)}}(e.entry,Object(O.a)().t);return"length"in t?Object(l.a)(d.a.Fragment,null,t.map((function(e){return Object(l.a)(Ge,Object(s.a)({key:JSON.stringify(e)},e))}))):Object(l.a)(Ge,t)},We=function(e){var t=e.className,a=e.target,n=e.details,c=e.area,i=Object(O.a)().t,r="target"===a?"single"===c?"single":"area":a;return Object(l.a)("div",{className:t},Object(l.a)("div",null,Object(l.a)(N.a,{variant:"light"},i("effect:effect.target.".concat(r)))),Object(ye.c)(n).map((function(e){return Object(l.a)(Me,{key:e[0],entry:e})})))},Je=function(e){var t=e.effect,a=e.unitNumber,n=e.area,c="self"in t.details?t.details.self:void 0,i="target"in t.details?t.details.target:void 0,r="around"in t.details?t.details.around:void 0;return Object(l.a)("div",{css:{border:"1px solid rgba(255, 255, 255, 0.3)",borderRadius:5,marginTop:10,padding:5,"& > .skill-effect-details":{marginTop:10}}},Object(l.a)(Re,{effect:t,unitNumber:a}),Object(_.a)(c,(function(e){return Object(l.a)(We,{className:"skill-effect-details",target:"self",details:e,area:n})})),Object(_.a)(i,(function(e){return Object(l.a)(We,{className:"skill-effect-details",target:"target",details:e,area:n})})),Object(_.a)(r,(function(e){return Object(l.a)(We,{className:"skill-effect-details",target:"around",details:e,area:n})})))},Le=function(e){var t=e.skillType,a=e.unit,n=Object(v.l)(t,a);return Object(_.a)(n,(function(e){var t=Object(r.a)(e,3),a=t[0],n=t[1],c=t[2];return Object(l.a)("div",{css:{color:"#ccc",fontSize:"0.8em"}},a.map((function(e){return Object(l.a)(Je,{key:JSON.stringify(e),effect:e,unitNumber:c,area:n})})))}))},Ke=a(22),Ve=(a(248),["children"]),Xe={fontSize:"1.2em",fontWeight:"bold"},Qe=Object(u.a)(Object(u.a)({},{fontSize:"1.2em",color:"#ccc"}),{},{display:"inline-block",width:"4em"}),Ye={fontSize:"1.2em","& > .badge":{whiteSpace:"normal"}},Ze=function(e){var t=e.children,a=Object(f.a)(e,Ve);return Object(l.a)(x.a,Object(s.a)({},a,{fluid:!0,css:{padding:0}}),t)},$e=function(e){var t=e.skillType,a=e.unit,n=Object(v.n)(t,a);return Object(l.a)("div",{css:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},title:n},n)},et=function(e){var t=e.skillType,a=e.unit,n=Object(v.k)(t,a);return Object(l.a)("span",{css:Object(u.a)(Object(u.a)({},Xe),{},{color:"#0af"})},n)},tt=function(e){var t=e.skillType,a=e.unit,n=Object(v.o)(t,a);return Object(l.a)("span",{css:Object(u.a)(Object(u.a)({},Xe),{},{color:"#cc0"})},n)},at=function(e){var t=e.skillType,a=e.unit,n=Object(O.a)().t,c=Object(v.i)(t,a);return Object(_.b)(c,Object(l.a)("div",{css:Ye},Object(l.a)(N.a,{variant:"rank-up-skill"},n("skill.rank_up"))))},nt=function(e){var t=e.skillType,a=e.unit,n=Object(O.a)().t,c=Object(v.e)(t,a);return Object(_.a)(c,(function(e){return Object(l.a)("div",{css:Ye},Object(l.a)(N.a,{variant:"secondary"},n("effect:form.".concat(e))))}))},ct=Object(o.a)(Array(10)).map((function(e,t){return 10-t})),it=function(e){var t=e.skillType,a=e.unit,n=Object(O.a)().t,c=Object(v.m)(t,a),i=Object(r.a)(c,2),o=i[0],s=i[1];return Object(l.a)("div",{css:{display:"flex",userSelect:"none"}},Object(l.a)("span",{css:{marginRight:5}},n("lv")),Object(l.a)(P.a,{css:{flexShrink:0},id:"skill-lv-dropdown",items:ct,value:o,onChange:s}))};t.default=function(e){var t=e.eventKey,a=Object(O.a)().t,n=Object(Ke.l)();return Object(l.a)(F.a.Pane,{eventKey:t},Object(_.a)(n,(function(e){return Object(l.a)(x.a,{fluid:!0,css:{paddingTop:5}},Object(l.a)(A.a,{css:{fontSize:"1.4em",color:"#eee"}},Object(l.a)(q.a,{xs:8,sm:9},Object(l.a)($e,{skillType:t,unit:e})),Object(l.a)(q.a,{xs:4,sm:3},Object(l.a)(it,{skillType:t,unit:e}))),Object(l.a)(A.a,null,Object(l.a)(q.a,{xs:{order:"last",span:12},sm:{order:"first",span:9}},Object(l.a)(E,{skillType:t,unit:e}),Object(l.a)(I,{skillType:t,unit:e}),Object(l.a)(Le,{skillType:t,unit:e})),Object(l.a)(q.a,{xs:{order:"first",span:12},sm:{order:"last",span:3}},Object(l.a)(Ze,{css:{userSelect:"none"}},Object(l.a)(A.a,null,Object(l.a)(q.a,{xs:8,sm:12},Object(l.a)(Ze,null,Object(l.a)(A.a,{css:{"& > div":{marginTop:5}}},Object(l.a)(q.a,{xs:{order:1,span:12},sm:{order:2,span:12}},Object(l.a)("span",{css:Qe},a("skill.ap")),Object(l.a)(et,{skillType:t,unit:e})),Object(l.a)(q.a,{xs:{order:2,span:12},sm:{order:3,span:12}},Object(l.a)("span",{css:Qe},a("skill.range")),Object(l.a)(tt,{skillType:t,unit:e})),Object(l.a)(q.a,{xs:{order:3,span:12},sm:{order:1,span:12}},Object(l.a)(nt,{skillType:t,unit:e}),Object(l.a)(at,{skillType:t,unit:e}))))),Object(l.a)(q.a,{xs:4,sm:12,css:{"& > div":{marginTop:5}}},Object(l.a)("div",null,Object(l.a)("span",{css:{color:"#ccc"}},a("skill.area"))),Object(l.a)(T,{css:{width:100},skillType:t,unit:e})))))))})))}}}]);
//# sourceMappingURL=5.a10817fd.chunk.js.map