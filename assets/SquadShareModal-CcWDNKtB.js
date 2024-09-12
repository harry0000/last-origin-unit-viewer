import{P as v,R as r,_ as $,a as g,c as P,r as c,u as D,b as Se,d as Ke,o as we,h as xa,s as pe,e as ga,f as ya,g as Ca,i as _,l as Ye,j as Je,k as _e,m as Ea,n as Na,q as re,C as wa,p as Fa,t as ka,v as Qe,F as ea,w as Sa,x as Pa,y as qe,z as Ia,A as Ta,B as N,D as $a,T as aa,O as ta,S as oa,E as Ma,G as Ra}from"./index-TbyaKuQD.js";import{C as Oa}from"./Col-B2jLPOtu.js";var Ba=["as","className","type","tooltip"],Da={type:v.string,tooltip:v.bool,as:v.elementType},je=r.forwardRef(function(e,t){var a=e.as,o=a===void 0?"div":a,n=e.className,i=e.type,s=i===void 0?"valid":i,l=e.tooltip,d=l===void 0?!1:l,u=$(e,Ba);return r.createElement(o,g({},u,{ref:t,className:P(n,s+"-"+(d?"tooltip":"feedback"))}))});je.displayName="Feedback";je.propTypes=Da;const Ge=je;var La=r.createContext({controlId:void 0});const q=La;var Ha=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],na=r.forwardRef(function(e,t){var a=e.id,o=e.bsPrefix,n=e.bsCustomPrefix,i=e.className,s=e.type,l=s===void 0?"checkbox":s,d=e.isValid,u=d===void 0?!1:d,m=e.isInvalid,h=m===void 0?!1:m,p=e.isStatic,x=e.as,F=x===void 0?"input":x,I=$(e,Ha),C=c.useContext(q),T=C.controlId,y=C.custom,L=y?[n,"custom-control-input"]:[o,"form-check-input"],H=L[0],k=L[1];return o=D(H,k),r.createElement(F,g({},I,{ref:t,type:l,id:a||T,className:P(i,o,u&&"is-valid",h&&"is-invalid",p&&"position-static")}))});na.displayName="FormCheckInput";const ia=na;var Aa=["bsPrefix","bsCustomPrefix","className","htmlFor"],ra=r.forwardRef(function(e,t){var a=e.bsPrefix,o=e.bsCustomPrefix,n=e.className,i=e.htmlFor,s=$(e,Aa),l=c.useContext(q),d=l.controlId,u=l.custom,m=u?[o,"custom-control-label"]:[a,"form-check-label"],h=m[0],p=m[1];return a=D(h,p),r.createElement("label",g({},s,{ref:t,htmlFor:i||d,className:P(n,a)}))});ra.displayName="FormCheckLabel";const sa=ra;var Va=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],Pe=r.forwardRef(function(e,t){var a=e.id,o=e.bsPrefix,n=e.bsCustomPrefix,i=e.inline,s=i===void 0?!1:i,l=e.disabled,d=l===void 0?!1:l,u=e.isValid,m=u===void 0?!1:u,h=e.isInvalid,p=h===void 0?!1:h,x=e.feedbackTooltip,F=x===void 0?!1:x,I=e.feedback,C=e.className,T=e.style,y=e.title,L=y===void 0?"":y,H=e.type,k=H===void 0?"checkbox":H,z=e.label,K=e.children,M=e.custom,R=e.as,A=R===void 0?"input":R,V=$(e,Va),S=k==="switch"?!0:M,O=S?[n,"custom-control"]:[o,"form-check"],X=O[0],G=O[1];o=D(X,G);var Q=c.useContext(q),U=Q.controlId,Y=c.useMemo(function(){return{controlId:a||U,custom:S}},[U,S,a]),te=S||z!=null&&z!==!1&&!K,oe=r.createElement(ia,g({},V,{type:k==="switch"?"checkbox":k,ref:t,isValid:m,isInvalid:p,isStatic:!te,disabled:d,as:A}));return r.createElement(q.Provider,{value:Y},r.createElement("div",{style:T,className:P(C,o,S&&"custom-"+k,s&&o+"-inline")},K||r.createElement(r.Fragment,null,oe,te&&r.createElement(sa,{title:L},z),(m||p)&&r.createElement(Ge,{type:m?"valid":"invalid",tooltip:F},I))))});Pe.displayName="FormCheck";Pe.Input=ia;Pe.Label=sa;const Ie=Pe;var za=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],la=r.forwardRef(function(e,t){var a=e.id,o=e.bsPrefix,n=e.bsCustomPrefix,i=e.className,s=e.isValid,l=e.isInvalid,d=e.lang,u=e.as,m=u===void 0?"input":u,h=$(e,za),p=c.useContext(q),x=p.controlId,F=p.custom,I="file",C=F?[n,"custom-file-input"]:[o,"form-control-file"],T=C[0],y=C[1];return o=D(T,y),r.createElement(m,g({},h,{ref:t,id:a||x,type:I,lang:d,className:P(i,o,s&&"is-valid",l&&"is-invalid")}))});la.displayName="FormFileInput";const da=la;var Ka=["bsPrefix","bsCustomPrefix","className","htmlFor"],ca=r.forwardRef(function(e,t){var a=e.bsPrefix,o=e.bsCustomPrefix,n=e.className,i=e.htmlFor,s=$(e,Ka),l=c.useContext(q),d=l.controlId,u=l.custom,m=u?[o,"custom-file-label"]:[a,"form-file-label"],h=m[0],p=m[1];return a=D(h,p),r.createElement("label",g({},s,{ref:t,htmlFor:i||d,className:P(n,a),"data-browse":s["data-browse"]}))});ca.displayName="FormFileLabel";const Ve=ca;var qa=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],Te=r.forwardRef(function(e,t){var a=e.id,o=e.bsPrefix,n=e.bsCustomPrefix,i=e.disabled,s=i===void 0?!1:i,l=e.isValid,d=l===void 0?!1:l,u=e.isInvalid,m=u===void 0?!1:u,h=e.feedbackTooltip,p=h===void 0?!1:h,x=e.feedback,F=e.className,I=e.style,C=e.label,T=e.children,y=e.custom,L=e.lang,H=e["data-browse"],k=e.as,z=k===void 0?"div":k,K=e.inputAs,M=K===void 0?"input":K,R=$(e,qa),A=y?[n,"custom"]:[o,"form-file"],V=A[0],S=A[1];o=D(V,S);var O="file",X=c.useContext(q),G=X.controlId,Q=c.useMemo(function(){return{controlId:a||G,custom:y}},[G,y,a]),U=C!=null&&C!==!1&&!T,Y=r.createElement(da,g({},R,{ref:t,isValid:d,isInvalid:m,disabled:s,as:M,lang:L}));return r.createElement(q.Provider,{value:Q},r.createElement(z,{style:I,className:P(F,o,y&&"custom-"+O)},T||r.createElement(r.Fragment,null,y?r.createElement(r.Fragment,null,Y,U&&r.createElement(Ve,{"data-browse":H},C)):r.createElement(r.Fragment,null,U&&r.createElement(Ve,null,C),Y),(d||m)&&r.createElement(Ge,{type:d?"valid":"invalid",tooltip:p},x))))});Te.displayName="FormFile";Te.Input=da;Te.Label=Ve;const ja=Te;var Ga=["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"],ua=r.forwardRef(function(e,t){var a=e.bsPrefix,o=e.bsCustomPrefix,n=e.type,i=e.size,s=e.htmlSize,l=e.id,d=e.className,u=e.isValid,m=u===void 0?!1:u,h=e.isInvalid,p=h===void 0?!1:h,x=e.plaintext,F=e.readOnly,I=e.custom,C=e.as,T=C===void 0?"input":C,y=$(e,Ga),L=c.useContext(q),H=L.controlId,k=I?[o,"custom"]:[a,"form-control"],z=k[0],K=k[1];a=D(z,K);var M;if(x){var R;M=(R={},R[a+"-plaintext"]=!0,R)}else if(n==="file"){var A;M=(A={},A[a+"-file"]=!0,A)}else if(n==="range"){var V;M=(V={},V[a+"-range"]=!0,V)}else if(T==="select"&&I){var S;M=(S={},S[a+"-select"]=!0,S[a+"-select-"+i]=i,S)}else{var O;M=(O={},O[a]=!0,O[a+"-"+i]=i,O)}return r.createElement(T,g({},y,{type:n,size:s,ref:t,readOnly:F,id:l||H,className:P(d,M,m&&"is-valid",p&&"is-invalid")}))});ua.displayName="FormControl";const Ua=Object.assign(ua,{Feedback:Ge});var Wa=["bsPrefix","className","children","controlId","as"],ma=r.forwardRef(function(e,t){var a=e.bsPrefix,o=e.className,n=e.children,i=e.controlId,s=e.as,l=s===void 0?"div":s,d=$(e,Wa);a=D(a,"form-group");var u=c.useMemo(function(){return{controlId:i}},[i]);return r.createElement(q.Provider,{value:u},r.createElement(l,g({},d,{ref:t,className:P(o,a)}),n))});ma.displayName="FormGroup";const Xa=ma;var Ya=["as","bsPrefix","column","srOnly","className","htmlFor"],Ja={column:!1,srOnly:!1},Ue=r.forwardRef(function(e,t){var a=e.as,o=a===void 0?"label":a,n=e.bsPrefix,i=e.column,s=e.srOnly,l=e.className,d=e.htmlFor,u=$(e,Ya),m=c.useContext(q),h=m.controlId;n=D(n,"form-label");var p="col-form-label";typeof i=="string"&&(p=p+" "+p+"-"+i);var x=P(l,n,s&&"sr-only",i&&p);return d=d||h,i?r.createElement(Oa,g({ref:t,as:"label",className:x,htmlFor:d},u)):r.createElement(o,g({ref:t,className:x,htmlFor:d},u))});Ue.displayName="FormLabel";Ue.defaultProps=Ja;const Qa=Ue;var Za=["bsPrefix","className","as","muted"],fa=r.forwardRef(function(e,t){var a=e.bsPrefix,o=e.className,n=e.as,i=n===void 0?"small":n,s=e.muted,l=$(e,Za);return a=D(a,"form-text"),r.createElement(i,g({},l,{ref:t,className:P(o,a,s&&"text-muted")}))});fa.displayName="FormText";const _a=fa;var $e=r.forwardRef(function(e,t){return r.createElement(Ie,g({},e,{ref:t,type:"switch"}))});$e.displayName="Switch";$e.Input=Ie.Input;$e.Label=Ie.Label;const et=$e;var at=["bsPrefix","inline","className","validated","as"],tt=Se("form-row"),ot={inline:!1},j=r.forwardRef(function(e,t){var a=e.bsPrefix,o=e.inline,n=e.className,i=e.validated,s=e.as,l=s===void 0?"form":s,d=$(e,at);return a=D(a,"form"),r.createElement(l,g({},d,{ref:t,className:P(n,i&&"was-validated",o&&a+"-inline")}))});j.displayName="Form";j.defaultProps=ot;j.Row=tt;j.Group=Xa;j.Control=Ua;j.Check=Ie;j.File=ja;j.Switch=et;j.Label=Qa;j.Text=_a;const nt=j;var Ne;function Fe(e){if((!Ne&&Ne!==0||e)&&Ke){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),Ne=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return Ne}function Le(e){e===void 0&&(e=we());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function it(e,t){e.classList?e.classList.add(t):xa(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function Ze(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function rt(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=Ze(e.className,t):e.setAttribute("class",Ze(e.className&&e.className.baseVal||"",t))}function st(e){return"nodeType"in e&&e.nodeType===document.DOCUMENT_NODE}function ze(e){return"window"in e&&e.window===e?e:st(e)&&e.defaultView||!1}function lt(e){return e&&e.tagName.toLowerCase()==="body"}function dt(e){var t=ze(e)?we():we(e),a=ze(e)||t.defaultView;return t.body.clientWidth<a.innerWidth}function ct(e){var t=ze(e);return t||lt(e)?dt(e):e.scrollHeight>e.clientHeight}var ut=["template","script","style"],mt=function(t){var a=t.nodeType,o=t.tagName;return a===1&&ut.indexOf(o.toLowerCase())===-1},va=function(t,a,o){[].forEach.call(t.children,function(n){a.indexOf(n)===-1&&mt(n)&&o(n)})};function ke(e,t){t&&(e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden"))}function ft(e,t){var a=t.dialog,o=t.backdrop;va(e,[a,o],function(n){return ke(!0,n)})}function vt(e,t){var a=t.dialog,o=t.backdrop;va(e,[a,o],function(n){return ke(!1,n)})}function pt(e,t){var a=-1;return e.some(function(o,n){return t(o,n)?(a=n,!0):!1}),a}var bt=function(){function e(a){var o=a===void 0?{}:a,n=o.hideSiblingNodes,i=n===void 0?!0:n,s=o.handleContainerOverflow,l=s===void 0?!0:s;this.hideSiblingNodes=void 0,this.handleContainerOverflow=void 0,this.modals=void 0,this.containers=void 0,this.data=void 0,this.scrollbarSize=void 0,this.hideSiblingNodes=i,this.handleContainerOverflow=l,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=Fe()}var t=e.prototype;return t.isContainerOverflowing=function(o){var n=this.data[this.containerIndexFromModal(o)];return n&&n.overflowing},t.containerIndexFromModal=function(o){return pt(this.data,function(n){return n.modals.indexOf(o)!==-1})},t.setContainerStyle=function(o,n){var i={overflow:"hidden"};o.style={overflow:n.style.overflow,paddingRight:n.style.paddingRight},o.overflowing&&(i.paddingRight=parseInt(pe(n,"paddingRight")||"0",10)+this.scrollbarSize+"px"),pe(n,i)},t.removeContainerStyle=function(o,n){Object.assign(n.style,o.style)},t.add=function(o,n,i){var s=this.modals.indexOf(o),l=this.containers.indexOf(n);if(s!==-1)return s;if(s=this.modals.length,this.modals.push(o),this.hideSiblingNodes&&ft(n,o),l!==-1)return this.data[l].modals.push(o),s;var d={modals:[o],classes:i?i.split(/\s+/):[],overflowing:ct(n)};return this.handleContainerOverflow&&this.setContainerStyle(d,n),d.classes.forEach(it.bind(null,n)),this.containers.push(n),this.data.push(d),s},t.remove=function(o){var n=this.modals.indexOf(o);if(n!==-1){var i=this.containerIndexFromModal(o),s=this.data[i],l=this.containers[i];if(s.modals.splice(s.modals.indexOf(o),1),this.modals.splice(n,1),s.modals.length===0)s.classes.forEach(rt.bind(null,l)),this.handleContainerOverflow&&this.removeContainerStyle(s,l),this.hideSiblingNodes&&vt(l,o),this.containers.splice(i,1),this.data.splice(i,1);else if(this.hideSiblingNodes){var d=s.modals[s.modals.length-1],u=d.backdrop,m=d.dialog;ke(!1,m),ke(!1,u)}}},t.isTopModal=function(o){return!!this.modals.length&&this.modals[this.modals.length-1]===o},e}();const Me=bt;var He;function ht(){return He||(He=new Me),He}function xt(e){var t=e||ht(),a=c.useRef({dialog:null,backdrop:null});return Object.assign(a.current,{add:function(n,i){return t.add(a.current,n,i)},remove:function(){return t.remove(a.current)},isTopModal:function(){return t.isTopModal(a.current)},setDialogRef:c.useCallback(function(o){a.current.dialog=o},[]),setBackdropRef:c.useCallback(function(o){a.current.backdrop=o},[])})}var We=c.forwardRef(function(e,t){var a=e.show,o=a===void 0?!1:a,n=e.role,i=n===void 0?"dialog":n,s=e.className,l=e.style,d=e.children,u=e.backdrop,m=u===void 0?!0:u,h=e.keyboard,p=h===void 0?!0:h,x=e.onBackdropClick,F=e.onEscapeKeyDown,I=e.transition,C=e.backdropTransition,T=e.autoFocus,y=T===void 0?!0:T,L=e.enforceFocus,H=L===void 0?!0:L,k=e.restoreFocus,z=k===void 0?!0:k,K=e.restoreFocusOptions,M=e.renderDialog,R=e.renderBackdrop,A=R===void 0?function(b){return r.createElement("div",b)}:R,V=e.manager,S=e.container,O=e.containerClassName,X=e.onShow,G=e.onHide,Q=G===void 0?function(){}:G,U=e.onExit,Y=e.onExited,te=e.onExiting,oe=e.onEnter,Re=e.onEntering,be=e.onEntered,le=$(e,["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","containerClassName","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"]),J=ga(S),E=xt(V),he=ya(),W=Ca(o),xe=c.useState(!o),Z=xe[0],de=xe[1],ee=c.useRef(null);c.useImperativeHandle(t,function(){return E},[E]),Ke&&!W&&o&&(ee.current=Le()),!I&&!o&&!Z?de(!0):o&&Z&&de(!1);var ce=_(function(){if(E.add(J,O),me.current=Ye(document,"keydown",ge),ue.current=Ye(document,"focus",function(){return setTimeout(Oe)},!0),X&&X(),y){var b=Le(document);E.dialog&&b&&!Je(E.dialog,b)&&(ee.current=b,E.dialog.focus())}}),ae=_(function(){if(E.remove(),me.current==null||me.current(),ue.current==null||ue.current(),z){var b;(b=ee.current)==null||b.focus==null||b.focus(K),ee.current=null}});c.useEffect(function(){!o||!J||ce()},[o,J,ce]),c.useEffect(function(){Z&&ae()},[Z,ae]),_e(function(){ae()});var Oe=_(function(){if(!(!H||!he()||!E.isTopModal())){var b=Le();E.dialog&&b&&!Je(E.dialog,b)&&E.dialog.focus()}}),Be=_(function(b){b.target===b.currentTarget&&(x==null||x(b),m===!0&&Q())}),ge=_(function(b){p&&b.keyCode===27&&E.isTopModal()&&(F==null||F(b),b.defaultPrevented||Q())}),ue=c.useRef(),me=c.useRef(),De=function(){de(!0);for(var Ee=arguments.length,w=new Array(Ee),f=0;f<Ee;f++)w[f]=arguments[f];Y==null||Y.apply(void 0,w)},fe=I;if(!J||!(o||fe&&!Z))return null;var ye=g({role:i,ref:E.setDialogRef,"aria-modal":i==="dialog"?!0:void 0},le,{style:l,className:s,tabIndex:-1}),ve=M?M(ye):r.createElement("div",ye,r.cloneElement(d,{role:"document"}));fe&&(ve=r.createElement(fe,{appear:!0,unmountOnExit:!0,in:!!o,onExit:U,onExiting:te,onExited:De,onEnter:oe,onEntering:Re,onEntered:be},ve));var ne=null;if(m){var Ce=C;ne=A({ref:E.setBackdropRef,onClick:Be}),Ce&&(ne=r.createElement(Ce,{appear:!0,in:!!o},ne))}return r.createElement(r.Fragment,null,Ea.createPortal(r.createElement(r.Fragment,null,ne,ve),J))}),gt={show:v.bool,container:v.any,onShow:v.func,onHide:v.func,backdrop:v.oneOfType([v.bool,v.oneOf(["static"])]),renderDialog:v.func,renderBackdrop:v.func,onEscapeKeyDown:v.func,onBackdropClick:v.func,containerClassName:v.string,keyboard:v.bool,transition:v.elementType,backdropTransition:v.elementType,autoFocus:v.bool,enforceFocus:v.bool,restoreFocus:v.bool,restoreFocusOptions:v.shape({preventScroll:v.bool}),onEnter:v.func,onEntering:v.func,onEntered:v.func,onExit:v.func,onExiting:v.func,onExited:v.func,manager:v.instanceOf(Me)};We.displayName="Modal";We.propTypes=gt;const yt=Object.assign(We,{Manager:Me});var se={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},Ct=function(e){Na(t,e);function t(){return e.apply(this,arguments)||this}var a=t.prototype;return a.adjustAndStore=function(n,i,s){var l,d=i.style[n];i.dataset[n]=d,pe(i,(l={},l[n]=parseFloat(pe(i,n))+s+"px",l))},a.restore=function(n,i){var s=i.dataset[n];if(s!==void 0){var l;delete i.dataset[n],pe(i,(l={},l[n]=s,l))}},a.setContainerStyle=function(n,i){var s=this;if(e.prototype.setContainerStyle.call(this,n,i),!!n.overflowing){var l=Fe();re(i,se.FIXED_CONTENT).forEach(function(d){return s.adjustAndStore("paddingRight",d,l)}),re(i,se.STICKY_CONTENT).forEach(function(d){return s.adjustAndStore("marginRight",d,-l)}),re(i,se.NAVBAR_TOGGLER).forEach(function(d){return s.adjustAndStore("marginRight",d,l)})}},a.removeContainerStyle=function(n,i){var s=this;e.prototype.removeContainerStyle.call(this,n,i),re(i,se.FIXED_CONTENT).forEach(function(l){return s.restore("paddingRight",l)}),re(i,se.STICKY_CONTENT).forEach(function(l){return s.restore("marginRight",l)}),re(i,se.NAVBAR_TOGGLER).forEach(function(l){return s.restore("marginRight",l)})},t}(Me);const Et=Se("modal-body");var Nt=r.createContext({onHide:function(){}});const pa=Nt;var wt=["bsPrefix","className","contentClassName","centered","size","children","scrollable"],ba=r.forwardRef(function(e,t){var a=e.bsPrefix,o=e.className,n=e.contentClassName,i=e.centered,s=e.size,l=e.children,d=e.scrollable,u=$(e,wt);a=D(a,"modal");var m=a+"-dialog";return r.createElement("div",g({},u,{ref:t,className:P(m,o,s&&a+"-"+s,i&&m+"-centered",d&&m+"-scrollable")}),r.createElement("div",{className:P(a+"-content",n)},l))});ba.displayName="ModalDialog";const ha=ba,Ft=Se("modal-footer");var kt=["bsPrefix","closeLabel","closeButton","onHide","className","children"],St={closeLabel:"Close",closeButton:!1},Xe=r.forwardRef(function(e,t){var a=e.bsPrefix,o=e.closeLabel,n=e.closeButton,i=e.onHide,s=e.className,l=e.children,d=$(e,kt);a=D(a,"modal-header");var u=c.useContext(pa),m=_(function(){u&&u.onHide(),i&&i()});return r.createElement("div",g({ref:t},d,{className:P(s,a)}),l,n&&r.createElement(wa,{label:o,onClick:m}))});Xe.displayName="ModalHeader";Xe.defaultProps=St;const Pt=Xe;var It=Fa("h4");const Tt=Se("modal-title",{Component:It});var $t=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],Ae,Mt={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:ha};function Rt(e){return r.createElement(ea,g({},e,{timeout:null}))}function Ot(e){return r.createElement(ea,g({},e,{timeout:null}))}var B=r.forwardRef(function(e,t){var a=e.bsPrefix,o=e.className,n=e.style,i=e.dialogClassName,s=e.contentClassName,l=e.children,d=e.dialogAs,u=e["aria-labelledby"],m=e["aria-describedby"],h=e["aria-label"],p=e.show,x=e.animation,F=e.backdrop,I=e.keyboard,C=e.onEscapeKeyDown,T=e.onShow,y=e.onHide,L=e.container,H=e.autoFocus,k=e.enforceFocus,z=e.restoreFocus,K=e.restoreFocusOptions,M=e.onEntered,R=e.onExit,A=e.onExiting,V=e.onEnter,S=e.onEntering,O=e.onExited,X=e.backdropClassName,G=e.manager,Q=$(e,$t),U=c.useState({}),Y=U[0],te=U[1],oe=c.useState(!1),Re=oe[0],be=oe[1],le=c.useRef(!1),J=c.useRef(!1),E=c.useRef(null),he=ka(),W=he[0],xe=he[1],Z=_(y);a=D(a,"modal"),c.useImperativeHandle(t,function(){return{get _modal(){return W}}},[W]);var de=c.useMemo(function(){return{onHide:Z}},[Z]);function ee(){return G||(Ae||(Ae=new Ct),Ae)}function ce(w){if(Ke){var f=ee().isContainerOverflowing(W),ie=w.scrollHeight>we(w).documentElement.clientHeight;te({paddingRight:f&&!ie?Fe():void 0,paddingLeft:!f&&ie?Fe():void 0})}}var ae=_(function(){W&&ce(W.dialog)});_e(function(){Qe(window,"resize",ae),E.current&&E.current()});var Oe=function(){le.current=!0},Be=function(f){le.current&&W&&f.target===W.dialog&&(J.current=!0),le.current=!1},ge=function(){be(!0),E.current=Pa(W.dialog,function(){be(!1)})},ue=function(f){f.target===f.currentTarget&&ge()},me=function(f){if(F==="static"){ue(f);return}if(J.current||f.target!==f.currentTarget){J.current=!1;return}y==null||y()},De=function(f){!I&&F==="static"?(f.preventDefault(),ge()):I&&C&&C(f)},fe=function(f,ie){f&&(f.style.display="block",ce(f)),V==null||V(f,ie)},ye=function(f){E.current==null||E.current(),R==null||R(f)},ve=function(f,ie){S==null||S(f,ie),Sa(window,"resize",ae)},ne=function(f){f&&(f.style.display=""),O==null||O(f),Qe(window,"resize",ae)},Ce=c.useCallback(function(w){return r.createElement("div",g({},w,{className:P(a+"-backdrop",X,!x&&"show")}))},[x,X,a]),b=g({},n,Y);x||(b.display="block");var Ee=function(f){return r.createElement("div",g({role:"dialog"},f,{style:b,className:P(o,a,Re&&a+"-static"),onClick:F?me:void 0,onMouseUp:Be,"aria-label":h,"aria-labelledby":u,"aria-describedby":m}),r.createElement(d,g({},Q,{onMouseDown:Oe,className:i,contentClassName:s}),l))};return r.createElement(pa.Provider,{value:de},r.createElement(yt,{show:p,ref:xe,backdrop:F,container:L,keyboard:!0,autoFocus:H,enforceFocus:k,restoreFocus:z,restoreFocusOptions:K,onEscapeKeyDown:De,onShow:T,onHide:y,onEnter:fe,onEntering:ve,onEntered:M,onExit:ye,onExiting:A,onExited:ne,manager:ee(),containerClassName:a+"-open",transition:x?Rt:void 0,backdropTransition:x?Ot:void 0,renderBackdrop:Ce,renderDialog:Ee}))});B.displayName="Modal";B.defaultProps=Mt;B.Body=Et;B.Header=Pt;B.Title=Tt;B.Footer=Ft;B.Dialog=ha;B.TRANSITION_DURATION=300;B.BACKDROP_TRANSITION_DURATION=150;const Bt=e=>c.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 400 400",style:{enableBackground:"new 0 0 400 400"},xmlSpace:"preserve",...e},c.createElement("style",{type:"text/css"},`
	.st0{fill:#1D9BF0;}
	.st1{fill:#FFFFFF;}
`),c.createElement("g",{id:"Dark_Blue"},c.createElement("path",{className:"st0",d:"M350,400H50c-27.6,0-50-22.4-50-50V50C0,22.4,22.4,0,50,0h300c27.6,0,50,22.4,50,50v300 C400,377.6,377.6,400,350,400z"})),c.createElement("g",{id:"Logo__x2014__FIXED"},c.createElement("path",{className:"st1",d:"M153.6,301.6c94.3,0,145.9-78.2,145.9-145.9c0-2.2,0-4.4-0.1-6.6c10-7.2,18.7-16.3,25.6-26.6 c-9.2,4.1-19.1,6.8-29.5,8.1c10.6-6.3,18.7-16.4,22.6-28.4c-9.9,5.9-20.9,10.1-32.6,12.4c-9.4-10-22.7-16.2-37.4-16.2 c-28.3,0-51.3,23-51.3,51.3c0,4,0.5,7.9,1.3,11.7c-42.6-2.1-80.4-22.6-105.7-53.6c-4.4,7.6-6.9,16.4-6.9,25.8 c0,17.8,9.1,33.5,22.8,42.7c-8.4-0.3-16.3-2.6-23.2-6.4c0,0.2,0,0.4,0,0.7c0,24.8,17.7,45.6,41.1,50.3c-4.3,1.2-8.8,1.8-13.5,1.8 c-3.3,0-6.5-0.3-9.6-0.9c6.5,20.4,25.5,35.2,47.9,35.6c-17.6,13.8-39.7,22-63.7,22c-4.1,0-8.2-0.2-12.2-0.7 C97.7,293.1,124.7,301.6,153.6,301.6"}))),Dt=({disabled:e,onClick:t})=>{const{t:a}=qe();return N(ta,{placement:"left",overlay:N(aa,{id:"tooltip-copy-url-to-clipboard"},a("squad.copy_url_to_clipboard"))},N(oa,{"aria-label":"Copy squad url",variant:"secondary",svg:N(Ma,null),disabled:e,onClick:t}))},Lt=({url:e,disabled:t})=>{const{t:a}=qe(),o=Ra(e);return N(ta,{placement:"left",overlay:N(aa,{id:"tooltip-share-url-to-twitter"},a("squad.share_url_to_twitter"))},N(oa,{"aria-label":"Share squad url to Twitter",fluidSvg:!0,svg:N(Bt,null),disabled:t,onClick:o}))},Vt=()=>{const{t:e}=qe(),[t,a,o]=Ia(),[n,i]=Ta();return N(B,{show:t,centered:!0,"aria-labelledby":"share-squad-modal",onHide:a},N(B.Header,{closeButton:!0,onHide:a},N(B.Title,{id:"share-squad-modal-title"},e("squad.share_squad_modal_title"))),N(B.Body,null,N("div",{css:{display:"flex","& > button":{flexShrink:0}}},N(nt.Control,{css:{marginRight:15},ref:i,size:"sm",type:"text",readOnly:!0,placeholder:"Loading...",value:o}),N(Dt,{disabled:!o,onClick:n})),N("div",{css:{display:"flex",justifyContent:"flex-end",marginTop:15,"& > button":{flexShrink:0}}},N(Lt,{url:o,disabled:!o}))),N(B.Footer,null,N($a,{onClick:a},"Close")))};export{Vt as default};