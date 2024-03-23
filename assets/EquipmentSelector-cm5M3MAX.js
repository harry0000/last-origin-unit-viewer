import{y as r,B as e,aM as m,R as p,aR as R,aS as D,aT as O,aU as x,aV as C,aW as T,aX as B,aY as w,aZ as k,a_ as I,a$ as j,b0 as E,ap as G,I as l,b1 as q,aQ as d,b2 as L,b3 as A,b4 as F,b5 as U,b6 as z,b7 as M,b8 as V,b9 as W,ba as H,bb as J,bc as P,an as $}from"./index-e_857GK2.js";import{S as Q}from"./SlotUnavailableOverlay-wWWvM_SY.js";const X=({equipmentId:t,equipmentType:n,equipmentRank:s,enhancementLv:a})=>{const{t:i}=r();return e("span",{css:{position:"relative",display:"inline-block"}},e(m,{fluid:!0,rounded:!0,draggable:"false",sizes:"(max-width: 480px) 47px, (min-width: 480px) 62px",alt:i(`equipment:${t}`),src:`/last-origin-unit-viewer/equip_icon/${n}_${t}_${s}.webp`}),e(m,{draggable:"false",css:{position:"absolute",top:-10,left:-5},height:28,width:28,alt:`${i(`equipment:rank.${s}`)} ${i(`equipment:type.${n}`)}`,src:`/last-origin-unit-viewer/icon/${n}_${s}.webp`}),e("span",{css:{position:"absolute",top:-5,right:0,color:"#fff",fontSize:"0.9em",fontWeight:"bold",textShadow:["1px 1px 0px #000, -1px -1px 0px #000","-1px 1px 0px #000,  1px -1px 0px #000","1px 0px 0px #000, -1px  0px 0px #000","0px 1px 0px #000,  0px -1px 0px #000"].join()}},"+",a))},Y=p.memo(({type:t})=>{const{t:n}=r();return e("span",{css:{display:"inline-flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",opacity:.5}},e(m,{rounded:!0,draggable:"false",height:32,width:32,alt:n(`equipment:type.${t}`),src:`/last-origin-unit-viewer/icon/placeholder_${t}.webp`}))}),b=({slot:t,rank:n})=>{const{t:s}=r(),[a,i]=R(t,n);return e(O,{toggle:!0},e(D,{type:"checkbox",variant:"equipment-rank",className:n,value:1,checked:a,onChange:i},s(`equipment.rank.${n}`)))};function S(t,n){return function(s){return I(t,s)&&j(s,n)}}const Z=Object.values(x).filter(C),K=Object.values(x).filter(T),ee=Object.values(x).filter(B),te=w({key:"availableChipEquipmentState",get:([t,n])=>({get:s})=>{const a=s(k(n));return Z.filter(S(t,a))}}),ne=w({key:"availableOsEquipmentState",get:t=>({get:n})=>{const s=n(k("os"));return K.filter(S(t,s))}}),se=w({key:"availableGearEquipmentState",get:t=>({get:n})=>{const s=n(k("gear"));return ee.filter(S(t,s))}});function g(t,n){switch(n){case"chip1":case"chip2":return E(te([t.no,n]));case"os":return E(ne(t.no));case"gear":return E(se(t.no))}}const N=({children:t})=>e("div",{className:"header"},t),ae=({slot:t,unit:n})=>{const s=({enhanceLv:a})=>{const[i,c]=F(t,n,a);return e(U,{selected:i,onChange:c},"+ ",a)};return e("div",{className:"equipment-enhancement"},[0,1,2,3,4,5,6,7,8,9,10].map(a=>e(s,{key:a,enhanceLv:a})))},ie=({slot:t})=>e("div",{className:"equipment-rank"},(()=>{switch(t){case"chip1":case"chip2":return V.map(s=>e(b,{key:s,slot:t,rank:s}));case"os":return M.map(s=>e(b,{key:s,slot:t,rank:s}));case"gear":return z.map(s=>e(b,{key:s,slot:t,rank:s}))}})()),ce=({slot:t,equipment:n})=>{const{t:s}=r(),a=W(t,n);return e("div",{className:"status-effects"},e(N,null,s("status.equipment_status_effect")),e("div",{className:"details"},a))},_=({effects:t})=>{const{t:n}=r();return e(p.Fragment,null,t.map(s=>{const{condition:a,details:i}=s;return e("div",{key:JSON.stringify(s)},l(a,c=>e("div",{className:"condition"},c)),P(i)?e(p.Fragment,null,l("self"in i?i.self:void 0,c=>e(p.Fragment,null,e($,{variant:"light"},n("effect:effect.target.self")),e(v,{details:c}))),l("target"in i?i.target:void 0,c=>e(p.Fragment,null,e($,{variant:"light"},n("effect:effect.target.target")),e(v,{details:c})))):e(v,{details:i}))}))},v=({details:t})=>e(p.Fragment,null,t.map(({detail:n,term:s})=>e("div",{key:n,className:"detail"},e("div",null,n),l(s,a=>e("div",{className:"term"},e("span",{css:{color:"#aaa",fontSize:"0.9em"}},a)))))),oe=({slot:t,equipment:n})=>{const{t:s}=r(),a=H(t,n);return l(a,i=>e("div",{className:"effects"},e(N,null,s("status.equipment_effect")),e(_,{effects:i})))},re=({slot:t,equipment:n})=>{const{t:s}=r(),a=J(t,n);return l(a,i=>e("div",{className:"effects"},e(N,null,s("status.equipment_effect_as_skill")),e(_,{effects:i})))},pe=({slot:t,eventKey:n,active:s,label:a,src:i,...c})=>e(d.Item,{...c,className:"equipment",eventKey:n,active:s},e("div",{className:"icon"},e(m,{draggable:"false",height:48,width:48,alt:a,src:i}),e("span",{className:"label"},a)),e("div",{className:"details"},e(ce,{slot:t,equipment:n}),e(oe,{slot:t,equipment:n}),e(re,{slot:t,equipment:n}))),le=({active:t,type:n,...s})=>{const{t:a}=r(),i=a("status.remove_equipment");return e(d.Item,{...s,className:"equipment remove",active:t},e("div",{className:"icon"},e(m,{draggable:"false",height:48,width:48,alt:i,src:`/last-origin-unit-viewer/icon/placeholder_${n}.webp`})),e("div",{className:"details"},i))},ue=({unit:t,slot:n,type:s,value:a,items:i,...c})=>{const{t:f}=r(),u=L(n);return e(d.Menu,{...c,className:"equipment"},e(ae,{slot:n,unit:t.no}),e(ie,{slot:n}),e("div",{className:"equipment-list"},e(le,{type:s,active:!(a!=null&&a.id)}),i.map(o=>e(pe,{key:o.id,slot:n,eventKey:o.id,active:o.id===(a==null?void 0:a.id)&&u===(a==null?void 0:a.rank),label:f(`equipment:${o.id}`),src:`/last-origin-unit-viewer/equip_icon/${o.type}_${o.id}_${u}.webp`}))))},me=({unit:t,slot:n})=>{const[s,a]=A(t,n);return e(Q,{show:!s,availableLv:a})},de=p.forwardRef(({onClick:t,id:n,children:s},a)=>e("a",{href:"",ref:a,id:n,onClick:i=>{i.preventDefault(),t(i)}},s)),h=({id:t,unit:n,slot:s,type:a,value:i,onSelect:c,items:f})=>e(d,{className:"slot equipment",onSelect:u=>{if(u){const o=f.find(y=>y.id===u);o&&c(o)}else c(void 0)}},e(d.Toggle,{as:de,id:t},e("span",{className:"equipment-toggle-view"},i?e(X,{equipmentId:i.id,equipmentType:a,equipmentRank:i.rank,enhancementLv:i.enhanceLv}):e(Y,{type:a}),e(me,{unit:n,slot:s}))),e(ue,{unit:n,slot:s,type:a,value:i,items:f})),fe=({unit:t})=>{const n=g(t,"chip1"),[s,a,i]=q(t,"chip1");return e(h,{id:"chip1-equipment-dropdown",unit:t,slot:"chip1",type:s,value:a,onSelect:i,items:n})},qe=({unit:t})=>{const n=g(t,"chip2"),[s,a,i]=q(t,"chip2");return e(h,{id:"chip2-equipment-dropdown",unit:t,slot:"chip2",type:s,value:a,onSelect:i,items:n})},ge=({unit:t})=>{const n=g(t,"os"),[s,a,i]=q(t,"os");return e(h,{id:"os-equipment-dropdown",unit:t,slot:"os",type:s,value:a,onSelect:i,items:n})},he=({unit:t})=>{const n=g(t,"gear"),[s,a,i]=q(t,"gear");return e(h,{id:"gear-equipment-dropdown",unit:t,slot:"gear",type:s,value:a,onSelect:i,items:n})},ve=({slot:t})=>{const n=G();return l(n,s=>{switch(t){case"chip1":return e(fe,{unit:s});case"chip2":return e(qe,{unit:s});case"os":return e(ge,{unit:s});case"gear":return e(he,{unit:s})}})};export{ve as default};