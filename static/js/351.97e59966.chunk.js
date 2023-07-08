"use strict";(self.webpackChunklast_origin_unit_viewer=self.webpackChunklast_origin_unit_viewer||[]).push([[351],{5351:function(t,e,n){n.r(e),n.d(e,{default:function(){return ue}});var a,i=n(9439),c=n(9449),r=n(2791),s=n(6052),o=n(7563),f=n(6080),u=n(7462),l=n(5987),d=n(1413),p=n(9230),Z=n(4942),m=n(605),g=n(8434),v=n(2576),_=n(3766),y=n(7259),k=["selected","type"],b=["skillType","unit"],h=(a={},(0,Z.Z)(a,m._.Effective,"#d0191d"),(0,Z.Z)(a,m._.High,"#ff8f03"),(0,Z.Z)(a,m._.Middle,"#ba5a03"),(0,Z.Z)(a,m._.Low,"#763316"),(0,Z.Z)(a,m._.Weak,"#6b3f31"),(0,Z.Z)(a,m._.None,"#4b4b4d"),a),N=function(t){return t!==m._.None?{borderRadius:2,position:"absolute",top:-3,bottom:4,left:-3,right:4,opacity:.8,backgroundColor:h[t]}:{}},x=function(t){var e=t.selected,n=t.type,a=(0,l.Z)(t,k),i=(0,p.$G)().t;return(0,c.tZ)("td",{css:{border:"5px solid transparent",width:"33%",position:"relative","&::after":{content:'" "',display:"block",marginTop:"100%"}}},(0,c.tZ)("div",{css:{borderRadius:2,position:"absolute",inset:0,backgroundColor:e?"#16d4d4":h[m._.None]}}),n===m._.High||n===m._.Middle||n===m._.Low||n===m._.Weak?(0,c.tZ)(g.Z,(0,u.Z)({},a,{placement:"auto",overlay:(0,c.tZ)(v.Z,{id:"tooltip-aoe-cell"},i("skill.effective_rate.".concat(n)))}),(0,c.tZ)("div",{css:N(n)})):(0,c.tZ)("div",{css:N(n)}))},Q=function(t){var e=t.skillType,n=t.unit,a=(0,l.Z)(t,b),i=(0,p.$G)().t,r=(0,_.Sd)(e,n);return(0,y.t)(r,(function(t){return(0,c.tZ)("div",a,(0,c.tZ)("table",{css:{borderCollapse:"collapse",width:"100%",transform:"skewX(-9deg)"}},(0,c.tZ)("tbody",null,(0,c.tZ)("tr",null,(0,c.tZ)(x,{selected:7===t.select,type:t.area[0]}),(0,c.tZ)(x,{selected:8===t.select,type:t.area[1]}),(0,c.tZ)(x,{selected:9===t.select,type:t.area[2]})),(0,c.tZ)("tr",null,(0,c.tZ)(x,{selected:4===t.select,type:t.area[3]}),(0,c.tZ)(x,{selected:5===t.select,type:t.area[4]}),(0,c.tZ)(x,{selected:6===t.select,type:t.area[5]})),(0,c.tZ)("tr",null,(0,c.tZ)(x,{selected:1===t.select,type:t.area[6]}),(0,c.tZ)(x,{selected:2===t.select,type:t.area[7]}),(0,c.tZ)(x,{selected:3===t.select,type:t.area[8]})))),(0,c.tZ)("span",{css:{color:"#16d4d4"}},t.select?"\xa0":i("skill.fixed_area")))}))},T=n(3366),w=n(1694),F=n.n(w),S=n(162),q=["bsPrefix","fluid","as","className"],A=r.forwardRef((function(t,e){var n=t.bsPrefix,a=t.fluid,i=t.as,c=void 0===i?"div":i,s=t.className,o=(0,T.Z)(t,q),f=(0,S.vE)(n,"container"),l="string"===typeof a?"-"+a:"-fluid";return r.createElement(c,(0,u.Z)({ref:e},o,{className:F()(s,a?""+f+l:f)}))}));A.displayName="Container",A.defaultProps={fluid:!1};var X=A,D=n(5736),C=["bsPrefix","className","noGutters","as"],G=["xl","lg","md","sm","xs"],R=r.forwardRef((function(t,e){var n=t.bsPrefix,a=t.className,i=t.noGutters,c=t.as,s=void 0===c?"div":c,o=(0,T.Z)(t,C),f=(0,S.vE)(n,"row"),l=f+"-cols",d=[];return G.forEach((function(t){var e,n=o[t];delete o[t];var a="xs"!==t?"-"+t:"";null!=(e=null!=n&&"object"===typeof n?n.cols:n)&&d.push(""+l+a+"-"+e)})),r.createElement(s,(0,u.Z)({ref:e},o,{className:F().apply(void 0,[a,f,i&&"no-gutters"].concat(d))}))}));R.displayName="Row",R.defaultProps={noGutters:!1};var O,U=R,P=n(2677),E=n(6717),$=n(410),j=n(9842),I=(O={},(0,Z.Z)(O,j.w.Fire,"#c33"),(0,Z.Z)(O,j.w.Ice,"#0cf"),(0,Z.Z)(O,j.w.Electric,"#fc0"),O),K=function(t){var e=t.skillType,n=t.unit,a=(0,p.$G)().t,r=(0,_.wd)(e,n);if(!r[0])return null;var s=(0,i.Z)(r,2),o=s[0],f=s[1];return(0,c.tZ)("div",{css:{color:"#ccc",marginTop:10}},(0,c.tZ)("span",null,f===E.J.Single?a("effect:damage_deal.target.single"):a("effect:damage_deal.target.area")),(0,y.t)(o.effective,(function(t){return(0,c.tZ)("span",null,a("effect:effective.".concat(t)),a("effect:separator"))})),(0,c.tZ)("span",null,a("status.atk")),(0,c.tZ)("span",{css:{margin:"0 5px",color:"#fc0",fontWeight:"bold"}},(0,$.Mz)(o),"%"),(0,c.tZ)("span",null,a("effect:as_preposition")),(0,y.t)(o.attribute,(function(t){return(0,c.tZ)("span",{css:{margin:"0 5px",color:I[t],fontWeight:600}},a("effect:attribute.".concat(t)))})),(0,c.tZ)("span",null,a("effect:damage")))},z=function(t){var e=t.skillType,n=t.unit,a=(0,p.$G)().t,i=(0,_.B)(e,n);return(0,y.c)(i,(0,c.tZ)("div",{css:{color:"#ccc",fontSize:"0.9em",marginTop:10}},(0,c.tZ)("span",null,a("effect:effects_as_equipment.description.prefix")),(0,c.tZ)(g.Z,{placement:"auto",overlay:(0,c.tZ)(v.Z,{id:"tooltip-effects-as-equipment"},a("effect:effects_as_equipment.annotation"))},(0,c.tZ)("span",{css:{cursor:"help",textDecoration:"underline"}},a("effect:effects_as_equipment.description.as_equipment"))),(0,c.tZ)("span",null,a("effect:effects_as_equipment.description.suffix"))))},B=n(2035),H=n(3433),L=n(3307),W=n(8992),J=function(t){var e=t.unitAlias,n=t.exceptUnit,a=(0,p.$G)().t,i=(0,c.tZ)(L.Z,{id:"popover-unit-alias",css:{opacity:"0.9"}},(0,c.tZ)(L.Z.Content,null,(0,H.Z)(W.PO[e]).filter((function(t){return t!==n})).map((function(t){return(0,c.tZ)("div",{key:t,css:{textAlign:"left"}},a("unit:display",{number:t}))}))));return(0,c.tZ)(g.Z,{placement:"auto",overlay:i},(0,c.tZ)("span",{css:{display:"inline-block",cursor:"help",textDecoration:"underline"}},a("effect:unit.".concat(e))))},M=n(6498),V=function(t){var e=t.target,n=t.selfUnitNumber,a=(0,p.$G)().t;return(0,c.tZ)(r.Fragment,null,a("effect:effect.target.kind.".concat(e.kind)),"conditions"in e?a("effect:of_preposition"):null,"conditions"in e&&e.conditions?e.conditions.map((function(t,i,s){var o=++i<s.length?a("effect:unit_separator"):"";if("number"===typeof t)return a("effect:with_quotes",{value:a("unit:display",{number:t})})+o;if("string"===typeof t)return(0,W.JX)(t)?(0,c.tZ)(r.Fragment,{key:t},(0,c.tZ)(J,{unitAlias:t,exceptUnit:e.kind===M.y.AllyExceptSelf?n:void 0}),o):a("effect:unit.".concat(t))+o;if("alias"in t){var f="type"in t?a("effect:unit.".concat(t.type)):"role"in t?a("effect:unit.".concat(t.role)):null,u="except"in t?t.except:void 0;return(0,c.tZ)(r.Fragment,{key:JSON.stringify(t)},(0,y.t)(u,(function(t){return(0,c.tZ)(r.Fragment,null,t===n?a("effect:unit.self"):a("effect:with_quotes",{value:a("unit:display",{number:t})}),a("effect:except_preposition"))})),(0,c.tZ)(J,{unitAlias:t.alias,exceptUnit:u}),f?a("effect:of_preposition"):null,f,o)}return"not_alias"in t?(0,c.tZ)(r.Fragment,{key:JSON.stringify(t)},(0,c.tZ)(J,{unitAlias:t.not_alias}),a("effect:negative_form"),a("type"in t?"effect:unit.".concat(t.type):"role"in t?"effect:unit.".concat(t.role):"effect:unit.unit"),o):"except"in t?(0,c.tZ)(r.Fragment,{key:JSON.stringify(t)},a("effect:with_quotes",{value:a("unit:display",{number:t.except})}),a("effect:except_preposition"),a("effect:unit.unit"),o):a("effect:unit.".concat(t.type))+a("effect:unit.".concat(t.role))+o})):null)},Y=n(1326),tt=n(5875),et=n(7236),nt=n(3634),at=n(5671),it=n(3144),ct=n(6274),rt=n(9359),st=n(9389),ot=(0,rt.Z)("effect"),ft=function(){function t(e){(0,at.Z)(this,t),Object.defineProperty(this,ot,{writable:!0,value:void 0}),(0,ct.Z)(this,ot)[ot]=e}return(0,it.Z)(t,[{key:"enemyTargetConditions",get:function(){var t=!(0,ct.Z)(this,ot)[ot].conditions||(0,ct.Z)(this,ot)[ot].conditions.every((function(t){return!("state"in t)||!("target"in t.state)})),e=!(0,nt.oD)((0,ct.Z)(this,ot)[ot].details);if(t&&e&&(0,st.fA)((0,ct.Z)(this,ot)[ot])&&(0,ct.Z)(this,ot)[ot].target.kind===M.y.Enemy){var n=(0,ct.Z)(this,ot)[ot].target,a=n.kind,i=n.conditions;return i&&{kind:a,conditions:i}}}},{key:"hasAnyConditions",get:function(){return!!(0,ct.Z)(this,ot)[ot].conditions||!!this.enemyTargetConditions}},{key:"hasMultipleConditions",get:function(){var t,e;return(null!==(t=null===(e=(0,ct.Z)(this,ot)[ot].conditions)||void 0===e?void 0:e.length)&&void 0!==t?t:0)>1}},{key:"effective",get:function(){return"effective"in(0,ct.Z)(this,ot)[ot]?(0,ct.Z)(this,ot)[ot].effective:void 0}},{key:"scaleFactor",get:function(){return"scale_factor"in(0,ct.Z)(this,ot)[ot]?(0,ct.Z)(this,ot)[ot].scale_factor:void 0}},{key:"effectTargets",get:function(){var t=(0,nt.rs)((0,ct.Z)(this,ot)[ot].details);if((0,nt.oD)((0,ct.Z)(this,ot)[ot].details)&&(0,st.fA)((0,ct.Z)(this,ot)[ot])){var e,n=null===(e=(0,ct.Z)(this,ot)[ot].conditions)||void 0===e?void 0:e.some((function(t){return"state"in t&&"target"in t.state}));return Object.assign(t?{self:!0}:{},(0,d.Z)({target:!0},n?{}:(0,ct.Z)(this,ot)[ot].target))}return t?{self:!0}:{around:!0}}}]),t}(),ut=n(5056),lt=n(4468);function dt(t,e){return++e<t.length}function pt(t,e,n){switch(t[0]){case tt.X.HpGreaterOrEqual:case tt.X.HpLessOrEqual:case tt.X.HpGreaterThan:case tt.X.HpLessThan:return(0,c.tZ)("span",null,n("effect:condition.state.".concat(t[0]),{value:t[1]}));case tt.X.HpRateGreaterOrEqualThanSelf:return(0,c.tZ)("span",null,n("effect:condition.state.".concat(t[0])));case tt.X.StatusGreaterThanSelf:case tt.X.StatusLessThanSelf:case tt.X.StatusGreaterOrEqualThan:return(0,c.tZ)("span",null,n("effect:condition.state.".concat(t[0]),t[1]));case tt.X.RankGreaterOrEqual:return(0,c.tZ)("span",null,n("effect:condition.state.".concat(t[0]),{rank:t[1]}));case tt.X.Affected:var a=t[1];return(0,lt.D)(a)?(0,c.tZ)("span",null,n("effect:condition.state.affected_both",{effect:{0:a[0],1:a[1]}})):(0,c.tZ)("span",null,n("effect:condition.state.".concat(t[0]),{effect:a}));case tt.X.NotAffected:var i=t[1].map((function(t){return n("effect:effect.name.".concat(t))})).join(n("effect:and_symbolic_separator"));return(0,c.tZ)("span",null,n("effect:condition.state.".concat(t[0]),{effects:i}));case tt.X.AffectedBy:return function(t,e){if("alias"in t)return(0,c.tZ)(r.Fragment,null,e("effect:with_quotes",{value:e("unit:display",{number:t.except})}),e("effect:except_preposition"),(0,c.tZ)(J,{unitAlias:t.alias,exceptUnit:t.except}),e("effect:condition.state.affected_by_alias"));if("effect"in t){var n="unit"in t?"affected_effect_by":"affected_equipment_effect_by";return(0,c.tZ)("span",null,e("effect:condition.state.".concat(n),t))}return(0,c.tZ)("span",null,e("effect:condition.state.affected_by",t))}(t[1],n);case tt.X.Tagged:var s=t[1];return(0,lt.D)(s)?(0,c.tZ)("span",null,n("effect:condition.state.multiple_tagged",{tag1:s[0],tag2:s[1]})):(0,c.tZ)("span",null,n("effect:condition.state.".concat(t[0]),{tag:s}));case tt.X.NotTagged:return(0,c.tZ)("span",null,n("effect:condition.state.".concat(t[0]),{tag:t[1]}));case tt.X.TaggedAffected:case tt.X.NotTaggedAffected:return(0,c.tZ)("span",null,n("effect:condition.state.".concat(t[0]),t[1]));case tt.X.Stack:if("effect"in t[1])return n("effect:condition.state.tag_effect_stack_ge",t[1]);if("equal"in t[1])return n("effect:condition.state.tag_stack_eq",t[1]);var o=t[1].tag,f=(0,lt.D)(o),u=f?"tags_":"tag_",l="greater_or_equal"in t[1]?"stack_ge":"stack_le",p=(0,d.Z)((0,d.Z)({},t[1]),f?{tags:o.map((function(t){return n("effect:tag.format",{tag:t})})).join(n("effect:or_symbolic_separator"))}:{});return n("effect:condition.state.".concat(u).concat(l),p);case tt.X.Form:return(0,c.tZ)("span",null,n("effect:condition.state.".concat(t[0]),{form:t[1]}));case tt.X.Equipped:var Z=n("equipment:".concat(t[1]));return(0,c.tZ)("span",null,n("effect:condition.state.".concat(t[0]),{equipment:Z}));case tt.X.NotEquipped:var m=t[1].map((function(t){return"".concat(n("effect:with_quotes",{value:n("equipment:".concat(t))}))})).join(n("effect:unit_separator"));return(0,c.tZ)("span",null,n("effect:condition.state.".concat(t[0]),{equipments:m}));case tt.X.Grid:return(0,c.tZ)("span",null,n("effect:condition.state.".concat(t[0]),{grid:t[1]}));case tt.X.Unit:return Zt(t[0],t[1],e,n);default:return t}}function Zt(t,e,n,a){function i(t){return a("effect:with_quotes",{value:a("unit:display",{number:t})})}if("number"===typeof e)return(0,c.tZ)("span",null,a("effect:condition.state.".concat(t),{unit:i(e)}));if((0,lt.D)(e)){var s;if((0,Y.aq)(e))s="".concat(a("effect:unit.".concat(e[0]))).concat(a("effect:unit_separator")).concat(a("effect:unit.".concat(e[1])));else{var o=t===tt.X.NotInSquad?a("effect:and_separator"):a("effect:unit_separator");s=e.map((function(t){return i(t)})).join(o)}return(0,c.tZ)("span",null,a("effect:condition.state.".concat(t),{unit:s}))}if("string"===typeof e){var f=t===tt.X.InSquad||t===tt.X.NotInSquad;if((0,W.JX)(e))return(0,c.tZ)(r.Fragment,null,(0,y.c)(f&&W.PO[e].has(n),(0,c.tZ)("span",null,a("effect:unit.self"),a("effect:except_preposition"))),(0,c.tZ)(J,{unitAlias:e,exceptUnit:f?n:void 0}),(0,c.tZ)("span",null,a("effect:condition.state.".concat(t),{unit:""})));var u="cross_adjacent"!==e&&"golden_factory"!==e;return(0,c.tZ)(r.Fragment,null,(0,y.c)(f&&u,(0,c.tZ)("span",null,a("effect:unit.self"),a("effect:except_preposition"))),(0,c.tZ)("span",null,a("effect:condition.state.".concat(t),{unit:a("effect:unit.".concat(e))})))}return"alias"in e?(0,c.tZ)(r.Fragment,null,(0,c.tZ)(J,{unitAlias:e.alias}),a("effect:of_preposition"),a("effect:unit.".concat(e.role)),a("effect:condition.state.".concat(t),{unit:""})):"equipment"in e?(0,c.tZ)("span",null,a("effect:condition.state.affected_equipment_effect_by",e)):tt.X.Tagged in e?(0,c.tZ)("span",null,a("effect:condition.state.tagged",{tag:e.tagged}),a("effect:condition.state.in_squad",{unit:a("effect:unit.ally")})):(0,c.tZ)("span",null,a("effect:condition.state.affected_effect_by",e.affected_by),a("effect:condition.state.in_squad",{unit:a("effect:unit.ally")}))}var mt=function(t){var e=(0,p.$G)().t,n=t.state,a=t.unitNumber;return(0,c.tZ)(r.Fragment,null,"target"in t?(0,c.tZ)(r.Fragment,null,(0,c.tZ)(V,{target:t.target,selfUnitNumber:a}),e("effect:case_particle")):e("effect:condition.target.self"),n.map((function(t,i){return(0,c.tZ)(r.Fragment,{key:JSON.stringify(t)},(0,ut.FR)(t).map((function(t,n,i){return(0,c.tZ)(r.Fragment,{key:t[0]},pt(t,a,e),(0,y.c)(dt(i,n),(0,c.tZ)("span",null,e("effect:and_symbolic_separator"))))})),(0,y.c)(dt(n,i),(0,c.tZ)("span",null,e("effect:or_symbolic_separator"))))})))};var gt=function(t){var e=t.state,n=t.unitNumber,a=(0,p.$G)().t;return(0,lt.D)(e)?(0,c.tZ)(r.Fragment,null,a("effect:condition.target.squad"),(0,Y.D6)(e)?Zt(tt.X.InSquad,e.map((function(t){return t.in_squad})),n,a):(0,c.tZ)(r.Fragment,null,Zt(tt.X.NotInSquad,e[0].not_in_squad,n,a),(0,c.tZ)("span",null,a("effect:or_symbolic_separator")),Zt(tt.X.InSquad,e[1].in_squad,n,a))):tt.X.NumOfUnitsLessThanEnemies in e?(0,c.tZ)("span",null,a("effect:condition.state.".concat(tt.X.NumOfUnitsLessThanEnemies))):(0,c.tZ)(r.Fragment,null,a("effect:condition.target.squad"),(0,ut.FR)(e).map((function(t,e,i){var s=function(){return(0,c.tZ)(r.Fragment,null,(0,y.c)(dt(i,e),a("effect:and_symbolic_separator")))};switch(t[0]){case tt.X.InSquad:return(0,c.tZ)(r.Fragment,{key:t[0]},Zt(tt.X.InSquad,t[1],n,a),(0,c.tZ)(s,null));case tt.X.NotInSquad:return(0,c.tZ)(r.Fragment,{key:t[0]},Zt(tt.X.NotInSquad,t[1],n,a),(0,c.tZ)(s,null));case tt.X.NumOfUnits:var o=t[1];return(0,c.tZ)(r.Fragment,{key:t[0]},o.unit===E.J.CrossAdjacent?function(t){return a("equal"in t?"effect:condition.state.cross_adjacent_eq":"less_or_equal"in t?"effect:condition.state.cross_adjacent":"effect:condition.state.cross_adjacent_ge",t)}(o):function(t){return(0,Y.aq)(t.unit)}(o)?function(t){return a("effect:condition.state.num_of_defender_armored_bulgasari",t)}(o):a("equal"in o?"effect:condition.state.num_of_units_eq":"greater_or_equal"in o?"effect:condition.state.num_of_units_ge":"effect:condition.state.num_of_units_le",o),(0,c.tZ)(s,null));default:return t}})))},vt=function(t){var e=t.state,n=(0,p.$G)().t,a=e.num_of_units;return(0,c.tZ)(r.Fragment,null,"unit"in a?n("effect:condition.target.enemy_unit",a):n("effect:condition.target.enemy"),n("equal"in a?"effect:condition.state.num_of_enemies_eq":"less_or_equal"in a?"effect:condition.state.num_of_enemies":"effect:condition.state.num_of_enemies_ge",a))},_t=function(t){var e=t.condition,n=t.unitNumber,a=(0,p.$G)().t;if(!("trigger"in e))return null;switch(e.trigger){case et.O.StartRound:return(0,c.tZ)(r.Fragment,null,e.round?"at"in e.round?a("effect:condition.trigger.round.at",{round:e.round.at}):"from"in e.round?a("effect:condition.trigger.round.from",{round:e.round.from}):a("effect:condition.trigger.round.until",{round:e.round.until}):a("effect:condition.trigger.start_round"));case et.O.UseActive1:case et.O.UseActive2:case et.O.HitActive1:case et.O.HitActive2:return(0,c.tZ)(r.Fragment,null,[].concat((0,H.Z)("round"in e?[a("effect:condition.trigger.round.".concat(e.round))]:[]),[a("effect:condition.trigger.".concat(e.trigger),{unit:n})]).join(""));case et.O.SeizeOpportunity:return(0,c.tZ)(r.Fragment,null,(0,H.Z)(W.PO[W.nd.NotApplicableForSeizeOpportunity]).map((function(t){return a("effect:with_quotes",{value:a("unit:display",{number:t})})})).join(a("effect:unit_separator")),a("effect:except_preposition"),(0,c.tZ)(J,{unitAlias:W.nd.ApplicableForSeizeOpportunity}),a("effect:case_particle"),a("effect:condition.trigger.".concat(e.trigger)));default:return(0,c.tZ)(r.Fragment,null,a("effect:condition.trigger.".concat(e.trigger)))}},yt=function(t){var e=(0,p.$G)().t,n=t.unitNumber;if(!("state"in t.condition))return null;var a=function(t){var n=t.show;return(0,c.tZ)(r.Fragment,null,(0,y.c)(n,e("effect:and_symbolic_separator")))},s=function(t){var e=t.entry,n=t.unitNumber,s=t.needSeparator,o=(0,i.Z)(e,2),f=o[0],u=o[1];return"self"===f?(0,c.tZ)(r.Fragment,{key:f},(0,c.tZ)(mt,{state:u,unitNumber:n}),(0,c.tZ)(a,{show:s})):"squad"===f?(0,c.tZ)(r.Fragment,{key:f},(0,c.tZ)(gt,{key:f,state:u,unitNumber:n}),(0,c.tZ)(a,{show:s})):(0,c.tZ)(r.Fragment,{key:f},(0,c.tZ)(vt,{state:u}),(0,c.tZ)(a,{show:s}))};return(0,c.tZ)(r.Fragment,null,"target"in t?(0,ut.FR)(t.condition.state).map((function(e,i,o){return"target"===e[0]?(0,c.tZ)(r.Fragment,{key:e[0]},(0,c.tZ)(mt,{state:e[1],target:t.target,unitNumber:n}),(0,c.tZ)(a,{show:dt(o,i)})):"squad"===e[0]?(0,c.tZ)(r.Fragment,{key:e[0]},(0,c.tZ)(gt,{state:e[1],unitNumber:n}),(0,c.tZ)(a,{show:dt(o,i)})):(0,c.tZ)(s,{key:e[0],entry:e,unitNumber:n,needSeparator:dt(o,i)})})):(0,ut.FR)(t.condition.state).map((function(t,e,a){return(0,c.tZ)(s,{key:t[0],entry:t,unitNumber:n,needSeparator:dt(a,e)})})),e("effect:case"))},kt=function(t){var e=(0,p.$G)().t,n=t.condition,a=t.unitNumber,i="trigger"in n&&"state"in n;return(0,c.tZ)("span",null,(0,c.tZ)(_t,{condition:n,unitNumber:a}),(0,y.c)(i,e("effect:separator")),"target"in t?(0,c.tZ)(yt,{condition:t.condition,target:t.target,unitNumber:a}):(0,c.tZ)(yt,{condition:t.condition,unitNumber:a}))},bt=function(t){var e=t.target,n=(0,p.$G)().t,a=e.conditions.map((function(t){return n("effect:unit.".concat(t))})).join(n("effect:unit_separator"));return(0,c.tZ)(r.Fragment,null,n("effect:effect.target.kind.enemy"),n("effect:case_particle"),n("effect:condition.state.unit",{unit:a}),n("effect:case"))},ht=function(t){var e=t.effective,n=(0,p.$G)().t;return(0,y.t)(e,(function(t){return(0,c.tZ)("span",null,n("effect:effective.".concat(t)))}))},Nt=function(t){var e=t.scaleFactor,n=t.unitNumber,a=(0,p.$G)().t;return(0,y.t)(e,(function(t){if("per_stack"in t){var e="effect"in t.per_stack?"effect:scale_factor.per_stack_effect":"effect:scale_factor.per_stack";return(0,c.tZ)("span",null,a(e,t.per_stack))}switch(t.per_units.type){case"all":return(0,c.tZ)("span",null,a("effect:scale_factor.per_units"));case"squad":var i=t.per_units,s=i.unit,o=void 0===s?"ally":s,f=!!i.except;return(0,c.tZ)(r.Fragment,null,(0,y.c)(f,(0,c.tZ)("span",null,a("effect:unit.self"),a("effect:except_preposition"))),(0,lt.D)(o)?(0,c.tZ)(r.Fragment,null,(0,c.tZ)(J,{unitAlias:o[0],exceptUnit:f?n:void 0}),(0,c.tZ)("span",null,"\xa0",a("effect:unit_separator"),"\xa0"),(0,c.tZ)(J,{unitAlias:o[1],exceptUnit:f?n:void 0})):(0,W.JX)(o)?(0,c.tZ)(J,{unitAlias:o,exceptUnit:f?n:void 0}):(0,c.tZ)("span",null,a("effect:unit.".concat(o))),(0,c.tZ)("span",null,a("effect:scale_factor.num_of_allies")));case"enemy":return(0,c.tZ)("span",null,a("effect:unit.enemy"),(0,y.t)(t.per_units.unit,(function(t){return a("effect:unit.".concat(t))})),a("effect:scale_factor.".concat(t.per_units.variation)))}}))},xt=function(t){var e=t.targets,n=t.unitNumber,a=(0,p.$G)().t;return(0,c.tZ)("span",null,(0,y.c)("self"in e,a("effect:effect.target.self")),(0,y.c)("self"in e&&"target"in e,a("effect:and_separator")),"target"in e?"kind"in e?(0,c.tZ)(V,{target:e,selfUnitNumber:n}):a("effect:effect.target.target"):null,(0,y.c)("around"in e,a("effect:effect.target.around")),a("effect:to_preposition"))},Qt=function(t){var e=t.effect,n=t.unitNumber,a=(0,p.$G)().t,i=new ft(e),s=function(){return(0,c.tZ)("div",{css:{fontSize:"0.7em"}},a("effect:or_conjunction"))};return(0,c.tZ)("div",null,(0,c.tZ)((function(){if((0,nt.Kr)(e)){var t=e.conditions?1===e.conditions.length?(0,c.tZ)(kt,{condition:e.conditions[0],target:e.target,unitNumber:n}):(0,c.tZ)(r.Fragment,null,(0,c.tZ)(kt,{condition:e.conditions[0],target:e.target,unitNumber:n}),(0,c.tZ)(s,null),(0,c.tZ)(kt,{condition:e.conditions[1],target:e.target,unitNumber:n})):null;return(0,c.tZ)(r.Fragment,null,t,(0,y.t)(i.enemyTargetConditions,(function(e){return(0,c.tZ)(r.Fragment,null,(0,y.c)(!!t,a("effect:separator")),(0,c.tZ)(bt,{target:e}))})))}return(0,y.t)(e.conditions,(function(t){return 1===t.length?(0,c.tZ)(kt,{condition:t[0],unitNumber:n}):(0,c.tZ)(r.Fragment,null,(0,c.tZ)(kt,{condition:t[0],unitNumber:n}),(0,c.tZ)(s,null),(0,c.tZ)(kt,{condition:t[1],unitNumber:n}))}))}),null),(0,c.tZ)((function(t){var e=t.children;return i.hasAnyConditions?i.hasMultipleConditions?(0,c.tZ)("div",{css:{marginTop:5}},e):(0,c.tZ)("span",null,a("effect:separator"),e):(0,c.tZ)("span",null,e)}),null,(0,c.tZ)(ht,{effective:i.effective}),(0,c.tZ)(Nt,{scaleFactor:i.scaleFactor,unitNumber:n}),(0,c.tZ)(xt,{targets:i.effectTargets,unitNumber:n}),a("effect:below_effects")))},Tt=n(8370),wt=n(7665);function Ft(t,e,n){var a="rate"in e&&e.rate?"string"===typeof e.rate?"".concat(n("effect:rate.".concat(e.rate))).concat(n("effect:separator")):"".concat(n("effect:rate.percentage",{value:(0,$.S4)(e.rate)})).concat(n("effect:separator")):"",i=["times"in e&&e.times?n("effect:times",{count:e.times}):void 0,"max_stack"in e&&"number"===typeof e.max_stack?1===e.max_stack?n("effect:does_not_stack"):n("effect:max_stack",{count:e.max_stack}):void 0,"cannot_be_dispelled"in e&&e.cannot_be_dispelled?n("effect:cannot_be_dispelled"):void 0].filter(lt.N).join(n("effect:separator"));return"".concat(a).concat(t).concat(i?" (".concat(i,")"):"")}function St(t,e){return"term"in t?"string"===typeof t.term?e("effect:term.".concat(t.term)):t.term&&e("effect:term.for_rounds",{value:t.term.for_rounds}):void 0}function qt(t,e){return"tag"in t?t.tag&&e("effect:tag.format",{tag:t.tag}):void 0}function At(t,e,n){return{tag:qt(e,n),detail:Ft(n("effect:effect.description.".concat(t),{value:(0,$.S4)(e)}),e,n),term:St(e,n)}}function Xt(t,e,n){return{detail:Ft(n("effect:effect.description.".concat(t),{tag:e.tag}),e,n),term:St(e,n)}}function Dt(t,e){return"effect"in t?e("effect:effect.name.".concat(t.effect)):t.effects.map((function(t){return e("effect:effect.name.".concat(t))})).join(e("effect:separator"))}var Ct=function(t){var e=t.tag,n=t.detail,a=t.term,i=(0,p.$G)().t;return(0,c.tZ)("div",{css:{display:"flex",fontWeight:"bold",borderRadius:3,backgroundColor:"#1c3042",padding:"3px 8px",marginTop:5}},(0,c.tZ)("div",null,(0,y.t)(e,(function(t){return(0,c.tZ)("span",null,t,i("effect:tag_separator"))})),(0,c.tZ)("span",null,n)),(0,c.tZ)("div",{css:{marginLeft:"auto",textAlign:"right",flexShrink:0}},(0,y.t)(a,(function(t){return(0,c.tZ)("span",{css:{marginLeft:10,color:"#aaa",fontSize:"0.9em"}},t)}))))},Gt=function(t){var e=function(t,e){var n=St(t[1],e);switch(t[0]){case Tt.Q.ActionCountUp:case Tt.Q.ActionCountDown:case Tt.Q.MinimizeDamage:case Tt.Q.NullifyDamage:case Tt.Q.AllBuffBlocking:case Tt.Q.AllBuffRemoval:case Tt.Q.AllDebuffRemoval:case Tt.Q.ColumnProtect:case Tt.Q.RowProtect:case Tt.Q.TargetProtect:case Tt.Q.ReAttack:case Tt.Q.FollowUpAttack:case Tt.Q.IgnoreBarrierDr:case Tt.Q.IgnoreProtect:case Tt.Q.IgnoreProtectDeactivate:case Tt.Q.Reconnaissance:case Tt.Q.Marked:case Tt.Q.Provoked:case Tt.Q.Immovable:case Tt.Q.Silenced:case Tt.Q.Stunned:case Tt.Q.RefundAp:case Tt.Q.AttackHit:case Tt.Q.AttackCritical:case Tt.Q.IgnoreDef:return{tag:qt(t[1],e),detail:Ft(e("effect:effect.description.".concat(t[0])),t[1],e),term:n};case Tt.Q.AMG11Construction:case Tt.Q.DeployRabbitDField:case Tt.Q.SummonHologramTiger:case Tt.Q.GoldenFactoryConstruction:return{tag:qt(t[1],e),detail:e("effect:effect.description.".concat(t[0]),{times:t[1].times}),term:n};case Tt.Q.CooperativeAttack:var a=t[1],i=a.unit,c=a.active;return{tag:qt(t[1],e),detail:(0,wt.Ut)(i)?e("effect:effect.description.cooperative_attack_form_active",{unit:i,no:c,form:wt.wk[i].default}):e("effect:effect.description.cooperative_attack",{unit:i,no:c}),term:n};case Tt.Q.Push:case Tt.Q.Pull:case Tt.Q.RangeUp:case Tt.Q.RangeDown:case Tt.Q.RangeUpActive2:case Tt.Q.FixedDamageOverTime:case Tt.Q.FixedFireDamageOverTime:case Tt.Q.FixedIceDamageOverTime:case Tt.Q.FixedElectricDamageOverTime:case Tt.Q.MinimizeDamageLessThanValue:case Tt.Q.Barrier:return{tag:qt(t[1],e),detail:Ft(e("effect:effect.description.".concat(t[0]),{value:t[1].value}),t[1],e),term:n};case Tt.Q.BattleContinuation:var r="value"in t[1]?e("effect:effect.description.battle_continuation",{value:t[1].value}):e("effect:effect.description.battle_continuation_with_hp_rate",{value:(0,$.S4)(t[1])});return{tag:qt(t[1],e),detail:Ft(r,t[1],e),term:n};case Tt.Q.AtkValueUp:case Tt.Q.DefValueUp:return{tag:qt(t[1],e),detail:Ft(e("effect:effect.description.".concat(t[0]),{value:(0,$.kB)(t[1])}),t[1],e),term:n};case Tt.Q.ApUp:case Tt.Q.ApDown:case Tt.Q.SetAp:return{tag:qt(t[1],e),detail:Ft(e("effect:effect.description.".concat(t[0]),{value:(0,$.W9)(t[1])}),t[1],e),term:n};case Tt.Q.BuffRemoval:case Tt.Q.DebuffRemoval:case Tt.Q.EffectRemoval:var s=Dt(t[1],e);return{detail:Ft(t[1].tag?e("effect:effect.description.tagged_".concat(t[0]),{tag:t[1].tag,effects:s}):e("effect:effect.description.".concat(t[0]),{effects:s}),t[1],e),term:n};case Tt.Q.PreventsEffect:return{tag:qt(t[1],e),detail:Ft(e("effect:effect.description.".concat(t[0]),{effects:Dt(t[1],e)}),t[1],e),term:n};case Tt.Q.ActivationRatePercentageUp:var o=(0,$.S4)(t[1]),f=t[1].effect;return{detail:Ft(t[1].tag?e("effect:effect.description.tagged_activation_rate_percentage_up",{tag:t[1].tag,effect:f,value:o}):e("effect:effect.description.activation_rate_percentage_up",{effect:f,value:o}),t[1],e),term:n};case Tt.Q.AbsolutelyActivated:return{detail:Ft(e("effect:effect.description.".concat(t[0]),t[1]),t[1],e),term:n};case Tt.Q.FormChange:case Tt.Q.FormRelease:return{tag:qt(t[1],e),detail:Ft(e("effect:effect.description.".concat(t[0]),{form:t[1].form}),t[1],e),term:n};case Tt.Q.TagStack:case Tt.Q.TagRelease:return"length"in t[1]?t[1].map((function(n){return Xt(t[0],n,e)})):Xt(t[0],t[1],e);case Tt.Q.TagUnstack:return{detail:Ft(e("effect:effect.description.".concat(t[0]),{tag:t[1].tag,value:t[1].value}),t[1],e),term:n};case Tt.Q.DamageMultiplierUpByStatus:case Tt.Q.DamageMultiplierReductionByStatus:case Tt.Q.CriReductionByStatus:return{tag:qt(t[1],e),detail:Ft(e("effect:effect.description.".concat(t[0]),{status:t[1].status,value:(0,$.S4)(t[1])}),t[1],e),term:n};case Tt.Q.AtkValueUpByUnitValue:return{tag:qt(t[1],e),detail:Ft(e("effect:effect.description.".concat(t[0]),{unit:t[1].unit,value:(0,$.S4)(t[1])}),t[1],e),term:n};case Tt.Q.DamageMultiplierDown:case Tt.Q.DefDown:case Tt.Q.AccDown:case Tt.Q.CriDown:case Tt.Q.EvaUp:case Tt.Q.StatusResistUp:case Tt.Q.DamageReductionUp:return"length"in t[1]?t[1].map((function(n){return At(t[0],n,e)})):At(t[0],t[1],e);default:return At(t[0],t[1],e)}}(t.entry,(0,p.$G)().t);return"length"in e?(0,c.tZ)(r.Fragment,null,e.map((function(t){return(0,c.tZ)(Ct,(0,u.Z)({key:JSON.stringify(t)},t))}))):(0,c.tZ)(Ct,e)},Rt=function(t){var e=t.className,n=t.target,a=t.details,i=t.area,r=(0,p.$G)().t,s="target"===n?"single"===i?"single":"area":n;return(0,c.tZ)("div",{className:e},(0,c.tZ)("div",null,(0,c.tZ)(D.Z,{variant:"light"},r("effect:effect.target.".concat(s)))),(0,ut.FR)(a).map((function(t){return(0,c.tZ)(Gt,{key:t[0],entry:t})})))},Ot=function(t){var e=t.effect,n=t.unitNumber,a=t.area,i="self"in e.details?e.details.self:void 0,r="target"in e.details?e.details.target:void 0,s="around"in e.details?e.details.around:void 0;return(0,c.tZ)("div",{css:{border:"1px solid rgba(255, 255, 255, 0.3)",borderRadius:5,marginTop:10,padding:5,"& > .skill-effect-details":{marginTop:10}}},(0,c.tZ)(Qt,{effect:e,unitNumber:n}),(0,y.t)(i,(function(t){return(0,c.tZ)(Rt,{className:"skill-effect-details",target:"self",details:t,area:a})})),(0,y.t)(r,(function(t){return(0,c.tZ)(Rt,{className:"skill-effect-details",target:"target",details:t,area:a})})),(0,y.t)(s,(function(t){return(0,c.tZ)(Rt,{className:"skill-effect-details",target:"around",details:t,area:a})})))},Ut=function(t){var e=t.skillType,n=t.unit,a=(0,_.CS)(e,n);return(0,y.t)(a,(function(t){var e=(0,i.Z)(t,3),n=e[0],a=e[1],r=e[2];return(0,c.tZ)("div",{css:{color:"#ccc",fontSize:"0.8em"}},n.map((function(t){return(0,c.tZ)(Ot,{key:JSON.stringify(t),effect:t,unitNumber:r,area:a})})))}))},Pt=n(5459),Et=["children"],$t={fontSize:"1.2em",fontWeight:"bold"},jt=(0,d.Z)((0,d.Z)({},{fontSize:"1.2em",color:"#ccc"}),{},{display:"inline-block",width:"4em"}),It=(0,d.Z)((0,d.Z)({},{fontSize:"1.2em"}),{},{"& > .badge":{whiteSpace:"normal"}}),Kt=function(t){var e=t.children,n=(0,l.Z)(t,Et);return(0,c.tZ)(X,(0,u.Z)({},n,{fluid:!0,css:{padding:0}}),e)},zt=function(t){var e=t.skillType,n=t.unit,a=(0,_.Jl)(e,n);return(0,c.tZ)("div",{css:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},title:a},a)},Bt=function(t){var e=t.skillType,n=t.unit,a=(0,_.sL)(e,n);return(0,c.tZ)("span",{css:(0,d.Z)((0,d.Z)({},$t),{},{color:"#0af"})},a)},Ht=function(t){var e=t.skillType,n=t.unit,a=(0,_.lH)(e,n);return(0,c.tZ)("span",{css:(0,d.Z)((0,d.Z)({},$t),{},{color:"#cc0"})},a)},Lt=function(t){var e=t.skillType,n=t.unit,a=(0,p.$G)().t,i=(0,_.xn)(e,n);return(0,y.c)(i,(0,c.tZ)("div",{css:It},(0,c.tZ)(D.Z,{variant:"rank-up-skill"},a("skill.rank_up"))))},Wt=function(t){var e=t.skillType,n=t.unit,a=(0,p.$G)().t,i=(0,_.uQ)(e,n);return(0,y.t)(i,(function(t){return(0,c.tZ)("div",{css:It},(0,c.tZ)(D.Z,{variant:"secondary"},a("effect:form.".concat(t))))}))},Jt=[10,9,8,7,6,5,4,3,2,1],Mt=function(t){var e=t.skillType,n=t.unit,a=(0,p.$G)().t,r=(0,_.VC)(e,n),s=(0,i.Z)(r,2),o=s[0],f=s[1];return(0,c.tZ)("div",{css:{display:"flex",userSelect:"none","& > .dropdown.numeric":{flexShrink:0,width:70}}},(0,c.tZ)("span",{css:{marginRight:5}},a("lv")),(0,c.tZ)(B.Z,{id:"skill-lv-dropdown",items:Jt,value:o,onChange:f}))},Vt=function(t){var e=t.eventKey,n=(0,p.$G)().t,a=(0,Pt.Br)();return(0,c.tZ)(f.Z.Pane,{eventKey:e},(0,y.t)(a,(function(t){return(0,c.tZ)(X,{fluid:!0,css:{paddingTop:5}},(0,c.tZ)(U,{css:{fontSize:"1.4em",color:"#eee"}},(0,c.tZ)(P.Z,{xs:8,sm:9},(0,c.tZ)(zt,{skillType:e,unit:t})),(0,c.tZ)(P.Z,{xs:4,sm:3},(0,c.tZ)(Mt,{skillType:e,unit:t}))),(0,c.tZ)(U,null,(0,c.tZ)(P.Z,{xs:{order:"last",span:12},sm:{order:"first",span:9}},(0,c.tZ)(K,{skillType:e,unit:t}),(0,c.tZ)(z,{skillType:e,unit:t}),(0,c.tZ)(Ut,{skillType:e,unit:t})),(0,c.tZ)(P.Z,{xs:{order:"first",span:12},sm:{order:"last",span:3}},(0,c.tZ)(Kt,{css:{userSelect:"none"}},(0,c.tZ)(U,null,(0,c.tZ)(P.Z,{xs:8,sm:12},(0,c.tZ)(Kt,null,(0,c.tZ)(U,{css:{"& > div":{marginTop:5}}},(0,c.tZ)(P.Z,{xs:{order:1,span:12},sm:{order:2,span:12}},(0,c.tZ)("span",{css:jt},n("skill.ap")),(0,c.tZ)(Bt,{skillType:e,unit:t})),(0,c.tZ)(P.Z,{xs:{order:2,span:12},sm:{order:3,span:12}},(0,c.tZ)("span",{css:jt},n("skill.range")),(0,c.tZ)(Ht,{skillType:e,unit:t})),(0,c.tZ)(P.Z,{xs:{order:3,span:12},sm:{order:1,span:12}},(0,c.tZ)(Wt,{skillType:e,unit:t}),(0,c.tZ)(Lt,{skillType:e,unit:t}))))),(0,c.tZ)(P.Z,{xs:4,sm:12,css:{"& > div":{marginTop:5}}},(0,c.tZ)("div",null,(0,c.tZ)("span",{css:{color:"#ccc"}},n("skill.area"))),(0,c.tZ)(Q,{css:{width:100},skillType:e,unit:t})))))))})))},Yt=n(7089),te=n(379),ee=function(){var t=(0,p.$G)().t,e=(0,_.JA)(),n=(0,i.Z)(e,2),a=n[0],r=n[1];return(0,y.t)(a,(function(e){return(0,c.tZ)("div",{css:{display:"flex",alignItems:"center",padding:"10px 8px"}},(0,c.tZ)(g.Z,{placement:"top",overlay:(0,c.tZ)(v.Z,{id:"tooltip-form-change"},t("form_change"))},(0,c.tZ)(te.Z,{"aria-label":"Change unit form",variant:"secondary",svg:(0,c.tZ)(Yt.zc,null),onClick:r})),(0,c.tZ)("span",{css:{color:"#eee",marginLeft:10}},t("effect:form.".concat(e.unitForm()))))}))},ne=n(4501),ae=n(9430),ie=function(t){var e=t.eventKey,n=t.active,a=t.disabled,i=t.children,r=e.startsWith("active")?"active-skill":"passive-skill";return(0,c.tZ)(o.Z.Item,null,(0,c.tZ)(o.Z.Link,{className:r,eventKey:e,active:n,disabled:a},(0,c.tZ)("span",{css:{display:"inline-block","@media (max-width: 480px)":{width:32},"@media (min-width: 480px)":{width:50}}},i)))},ce=function(){var t=(0,_.OP)(),e=(0,i.Z)(t,3),n=e[0],a=e[1],r=e[2];return(0,c.tZ)(ie,{eventKey:n,active:a,disabled:!r},r?(0,c.tZ)(s.VT,{skillType:ne.W.Active1}):(0,c.tZ)(s.bp,null),(0,c.tZ)("span",{className:"sr-only"},"Active skill 1"))},re=function(){var t=(0,_.Zf)(),e=(0,i.Z)(t,3),n=e[0],a=e[1],r=e[2];return(0,c.tZ)(ie,{eventKey:n,active:a,disabled:!r},r?(0,c.tZ)(s.VT,{skillType:ne.W.Active2}):(0,c.tZ)(s.bp,null),(0,c.tZ)("span",{className:"sr-only"},"Active skill 2"))},se=function(){var t=(0,_.XH)(),e=(0,i.Z)(t,3),n=e[0],a=e[1],r=e[2];return(0,c.tZ)(ie,{eventKey:n,active:a,disabled:!r},r?(0,c.tZ)(s.t,{skillType:ne.W.Passive1}):(0,c.tZ)(s.Ct,null),(0,c.tZ)("span",{className:"sr-only"},"Passive skill 1"))},oe=function(){var t=(0,_.YL)(),e=(0,i.Z)(t,3),n=e[0],a=e[1],r=e[2];return(0,c.tZ)(ie,{eventKey:n,active:a,disabled:!r},r?(0,c.tZ)(s.t,{skillType:ne.W.Passive2}):(0,c.tZ)(s.Ct,null),(0,c.tZ)("span",{className:"sr-only"},"Passive skill 2"))},fe=function(){var t=(0,_.DZ)(),e=(0,i.Z)(t,3),n=e[0],a=e[1],r=e[2];return(0,c.tZ)(ie,{eventKey:n,active:a,disabled:!r},r?(0,c.tZ)(s.t,{skillType:ne.W.Passive3}):(0,c.tZ)(s.Ct,null),(0,c.tZ)("span",{className:"sr-only"},"Passive skill 3"))},ue=function(t){var e=(0,ae._T)(),n=(0,i.Z)(e,2),a=n[0],r=n[1];return(0,c.tZ)("div",t,(0,c.tZ)(ee,null),(0,c.tZ)(f.Z.Container,{id:"unit-skill-viewer",activeKey:a,onSelect:function(t){r(null!==t&&void 0!==t?t:void 0)}},(0,c.tZ)(o.Z,{variant:"tabs",className:"skill ".concat(a?a.startsWith("active")?"active-skill":"passive-skill":"")},(0,c.tZ)(ce,null),(0,c.tZ)(re,null),(0,c.tZ)(se,null),(0,c.tZ)(oe,null),(0,c.tZ)(fe,null)),(0,c.tZ)(f.Z.Content,{css:{minHeight:300}},(0,c.tZ)(Vt,{eventKey:"active1"}),(0,c.tZ)(Vt,{eventKey:"active2"}),(0,c.tZ)(Vt,{eventKey:"passive1"}),(0,c.tZ)(Vt,{eventKey:"passive2"}),(0,c.tZ)(Vt,{eventKey:"passive3"}))))}},2677:function(t,e,n){var a=n(7462),i=n(3366),c=n(1694),r=n.n(c),s=n(2791),o=n(162),f=["bsPrefix","className","as"],u=["xl","lg","md","sm","xs"],l=s.forwardRef((function(t,e){var n=t.bsPrefix,c=t.className,l=t.as,d=void 0===l?"div":l,p=(0,i.Z)(t,f),Z=(0,o.vE)(n,"col"),m=[],g=[];return u.forEach((function(t){var e,n,a,i=p[t];if(delete p[t],"object"===typeof i&&null!=i){var c=i.span;e=void 0===c||c,n=i.offset,a=i.order}else e=i;var r="xs"!==t?"-"+t:"";e&&m.push(!0===e?""+Z+r:""+Z+r+"-"+e),null!=a&&g.push("order"+r+"-"+a),null!=n&&g.push("offset"+r+"-"+n)})),m.length||m.push(Z),s.createElement(d,(0,a.Z)({},p,{ref:e,className:r().apply(void 0,[c].concat(m,g))}))}));l.displayName="Col",e.Z=l}}]);
//# sourceMappingURL=351.97e59966.chunk.js.map