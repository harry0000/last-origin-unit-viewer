(this["webpackJsonplast-origin-unit-viewer"]=this["webpackJsonplast-origin-unit-viewer"]||[]).push([[6],{243:function(e,a,t){"use strict";var n,o=t(9),r=t(5),i=t(13),s=t.n(i),c=t(110),l=t(150),d=t(86),u=t(153);function f(e){if((!n&&0!==n||e)&&l.a){var a=document.createElement("div");a.style.position="absolute",a.style.top="-9999px",a.style.width="50px",a.style.height="50px",a.style.overflow="scroll",document.body.appendChild(a),n=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return n}var m=t(100),b=t(38),v=t(151),p=t(158),O=t(0),h=t.n(O);function g(e){void 0===e&&(e=Object(d.a)());try{var a=e.activeElement;return a&&a.nodeName?a:null}catch(t){return e.body}}var j=t(111),y=t(72),E=t(18),N=t.n(E),x=t(46),w=t.n(x),C=t(112),k=t(155),F=t(131);function P(e,a){e.classList?e.classList.add(a):Object(F.a)(e,a)||("string"===typeof e.className?e.className=e.className+" "+a:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+a))}function R(e,a){return e.replace(new RegExp("(^|\\s)"+a+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function I(e,a){e.classList?e.classList.remove(a):"string"===typeof e.className?e.className=R(e.className,a):e.setAttribute("class",R(e.className&&e.className.baseVal||"",a))}var S=t(75);function T(e){return"window"in e&&e.window===e?e:"nodeType"in(a=e)&&a.nodeType===document.DOCUMENT_NODE&&e.defaultView||!1;var a}function D(e){var a;return T(e)||(a=e)&&"body"===a.tagName.toLowerCase()?function(e){var a=T(e)?Object(d.a)():Object(d.a)(e),t=T(e)||a.defaultView;return a.body.clientWidth<t.innerWidth}(e):e.scrollHeight>e.clientHeight}var M=["template","script","style"],A=function(e,a,t){[].forEach.call(e.children,(function(e){-1===a.indexOf(e)&&function(e){var a=e.nodeType,t=e.tagName;return 1===a&&-1===M.indexOf(t.toLowerCase())}(e)&&t(e)}))};function H(e,a){a&&(e?a.setAttribute("aria-hidden","true"):a.removeAttribute("aria-hidden"))}var L,V=function(){function e(e){var a=void 0===e?{}:e,t=a.hideSiblingNodes,n=void 0===t||t,o=a.handleContainerOverflow,r=void 0===o||o;this.hideSiblingNodes=void 0,this.handleContainerOverflow=void 0,this.modals=void 0,this.containers=void 0,this.data=void 0,this.scrollbarSize=void 0,this.hideSiblingNodes=n,this.handleContainerOverflow=r,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=f()}var a=e.prototype;return a.isContainerOverflowing=function(e){var a=this.data[this.containerIndexFromModal(e)];return a&&a.overflowing},a.containerIndexFromModal=function(e){return function(e,a){var t=-1;return e.some((function(e,n){return!!a(e,n)&&(t=n,!0)})),t}(this.data,(function(a){return-1!==a.modals.indexOf(e)}))},a.setContainerStyle=function(e,a){var t={overflow:"hidden"};e.style={overflow:a.style.overflow,paddingRight:a.style.paddingRight},e.overflowing&&(t.paddingRight=parseInt(Object(S.a)(a,"paddingRight")||"0",10)+this.scrollbarSize+"px"),Object(S.a)(a,t)},a.removeContainerStyle=function(e,a){Object.assign(a.style,e.style)},a.add=function(e,a,t){var n=this.modals.indexOf(e),o=this.containers.indexOf(a);if(-1!==n)return n;if(n=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&function(e,a){var t=a.dialog,n=a.backdrop;A(e,[t,n],(function(e){return H(!0,e)}))}(a,e),-1!==o)return this.data[o].modals.push(e),n;var r={modals:[e],classes:t?t.split(/\s+/):[],overflowing:D(a)};return this.handleContainerOverflow&&this.setContainerStyle(r,a),r.classes.forEach(P.bind(null,a)),this.containers.push(a),this.data.push(r),n},a.remove=function(e){var a=this.modals.indexOf(e);if(-1!==a){var t=this.containerIndexFromModal(e),n=this.data[t],o=this.containers[t];if(n.modals.splice(n.modals.indexOf(e),1),this.modals.splice(a,1),0===n.modals.length)n.classes.forEach(I.bind(null,o)),this.handleContainerOverflow&&this.removeContainerStyle(n,o),this.hideSiblingNodes&&function(e,a){var t=a.dialog,n=a.backdrop;A(e,[t,n],(function(e){return H(!1,e)}))}(o,e),this.containers.splice(t,1),this.data.splice(t,1);else if(this.hideSiblingNodes){var r=n.modals[n.modals.length-1],i=r.backdrop;H(!1,r.dialog),H(!1,i)}}},a.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}(),B=t(143);function z(e){var a=e||(L||(L=new V),L),t=Object(O.useRef)({dialog:null,backdrop:null});return Object.assign(t.current,{add:function(e,n){return a.add(t.current,e,n)},remove:function(){return a.remove(t.current)},isTopModal:function(){return a.isTopModal(t.current)},setDialogRef:Object(O.useCallback)((function(e){t.current.dialog=e}),[]),setBackdropRef:Object(O.useCallback)((function(e){t.current.backdrop=e}),[])})}var K=Object(O.forwardRef)((function(e,a){var t=e.show,n=void 0!==t&&t,i=e.role,s=void 0===i?"dialog":i,c=e.className,d=e.style,u=e.children,f=e.backdrop,m=void 0===f||f,p=e.keyboard,E=void 0===p||p,N=e.onBackdropClick,x=e.onEscapeKeyDown,F=e.transition,P=e.backdropTransition,R=e.autoFocus,I=void 0===R||R,S=e.enforceFocus,T=void 0===S||S,D=e.restoreFocus,M=void 0===D||D,A=e.restoreFocusOptions,H=e.renderDialog,L=e.renderBackdrop,V=void 0===L?function(e){return h.a.createElement("div",e)}:L,K=e.manager,_=e.container,U=e.containerClassName,W=e.onShow,$=e.onHide,G=void 0===$?function(){}:$,J=e.onExit,q=e.onExited,Q=e.onExiting,X=e.onEnter,Y=e.onEntering,Z=e.onEntered,ee=Object(o.a)(e,["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","containerClassName","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"]),ae=Object(B.a)(_),te=z(K),ne=Object(C.a)(),oe=Object(k.a)(n),re=Object(O.useState)(!n),ie=re[0],se=re[1],ce=Object(O.useRef)(null);Object(O.useImperativeHandle)(a,(function(){return te}),[te]),l.a&&!oe&&n&&(ce.current=g()),F||n||ie?n&&ie&&se(!1):se(!0);var le=Object(b.a)((function(){if(te.add(ae,U),ve.current=Object(y.a)(document,"keydown",me),be.current=Object(y.a)(document,"focus",(function(){return setTimeout(ue)}),!0),W&&W(),I){var e=g(document);te.dialog&&e&&!Object(j.a)(te.dialog,e)&&(ce.current=e,te.dialog.focus())}})),de=Object(b.a)((function(){var e;(te.remove(),null==ve.current||ve.current(),null==be.current||be.current(),M)&&(null==(e=ce.current)||null==e.focus||e.focus(A),ce.current=null)}));Object(O.useEffect)((function(){n&&ae&&le()}),[n,ae,le]),Object(O.useEffect)((function(){ie&&de()}),[ie,de]),Object(v.a)((function(){de()}));var ue=Object(b.a)((function(){if(T&&ne()&&te.isTopModal()){var e=g();te.dialog&&e&&!Object(j.a)(te.dialog,e)&&te.dialog.focus()}})),fe=Object(b.a)((function(e){e.target===e.currentTarget&&(null==N||N(e),!0===m&&G())})),me=Object(b.a)((function(e){E&&27===e.keyCode&&te.isTopModal()&&(null==x||x(e),e.defaultPrevented||G())})),be=Object(O.useRef)(),ve=Object(O.useRef)(),pe=F;if(!ae||!(n||pe&&!ie))return null;var Oe=Object(r.a)({role:s,ref:te.setDialogRef,"aria-modal":"dialog"===s||void 0},ee,{style:d,className:c,tabIndex:-1}),he=H?H(Oe):h.a.createElement("div",Oe,h.a.cloneElement(u,{role:"document"}));pe&&(he=h.a.createElement(pe,{appear:!0,unmountOnExit:!0,in:!!n,onExit:J,onExiting:Q,onExited:function(){se(!0);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];null==q||q.apply(void 0,a)},onEnter:X,onEntering:Y,onEntered:Z},he));var ge=null;if(m){var je=P;ge=V({ref:te.setBackdropRef,onClick:fe}),je&&(ge=h.a.createElement(je,{appear:!0,in:!!n},ge))}return h.a.createElement(h.a.Fragment,null,w.a.createPortal(h.a.createElement(h.a.Fragment,null,ge,he),ae))})),_={show:N.a.bool,container:N.a.any,onShow:N.a.func,onHide:N.a.func,backdrop:N.a.oneOfType([N.a.bool,N.a.oneOf(["static"])]),renderDialog:N.a.func,renderBackdrop:N.a.func,onEscapeKeyDown:N.a.func,onBackdropClick:N.a.func,containerClassName:N.a.string,keyboard:N.a.bool,transition:N.a.elementType,backdropTransition:N.a.elementType,autoFocus:N.a.bool,enforceFocus:N.a.bool,restoreFocus:N.a.bool,restoreFocusOptions:N.a.shape({preventScroll:N.a.bool}),onEnter:N.a.func,onEntering:N.a.func,onEntered:N.a.func,onExit:N.a.func,onExiting:N.a.func,onExited:N.a.func,manager:N.a.instanceOf(V)};K.displayName="Modal",K.propTypes=_;var U=Object.assign(K,{Manager:V}),W=(t(95),t(37)),$=t(99),G=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",J=".sticky-top",q=".navbar-toggler",Q=function(e){function a(){return e.apply(this,arguments)||this}Object(W.a)(a,e);var t=a.prototype;return t.adjustAndStore=function(e,a,t){var n,o=a.style[e];a.dataset[e]=o,Object(S.a)(a,((n={})[e]=parseFloat(Object(S.a)(a,e))+t+"px",n))},t.restore=function(e,a){var t,n=a.dataset[e];void 0!==n&&(delete a.dataset[e],Object(S.a)(a,((t={})[e]=n,t)))},t.setContainerStyle=function(a,t){var n=this;if(e.prototype.setContainerStyle.call(this,a,t),a.overflowing){var o=f();Object($.a)(t,G).forEach((function(e){return n.adjustAndStore("paddingRight",e,o)})),Object($.a)(t,J).forEach((function(e){return n.adjustAndStore("marginRight",e,-o)})),Object($.a)(t,q).forEach((function(e){return n.adjustAndStore("marginRight",e,o)}))}},t.removeContainerStyle=function(a,t){var n=this;e.prototype.removeContainerStyle.call(this,a,t),Object($.a)(t,G).forEach((function(e){return n.restore("paddingRight",e)})),Object($.a)(t,J).forEach((function(e){return n.restore("marginRight",e)})),Object($.a)(t,q).forEach((function(e){return n.restore("marginRight",e)}))},a}(V),X=t(77),Y=t(42),Z=Object(Y.a)("modal-body"),ee=h.a.createContext({onHide:function(){}}),ae=t(17),te=["bsPrefix","className","contentClassName","centered","size","children","scrollable"],ne=h.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,i=e.contentClassName,c=e.centered,l=e.size,d=e.children,u=e.scrollable,f=Object(o.a)(e,te),m=(t=Object(ae.a)(t,"modal"))+"-dialog";return h.a.createElement("div",Object(r.a)({},f,{ref:a,className:s()(m,n,l&&t+"-"+l,c&&m+"-centered",u&&m+"-scrollable")}),h.a.createElement("div",{className:s()(t+"-content",i)},d))}));ne.displayName="ModalDialog";var oe=ne,re=Object(Y.a)("modal-footer"),ie=t(154),se=["bsPrefix","closeLabel","closeButton","onHide","className","children"],ce=h.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.closeLabel,i=e.closeButton,c=e.onHide,l=e.className,d=e.children,u=Object(o.a)(e,se);t=Object(ae.a)(t,"modal-header");var f=Object(O.useContext)(ee),m=Object(b.a)((function(){f&&f.onHide(),c&&c()}));return h.a.createElement("div",Object(r.a)({ref:a},u,{className:s()(l,t)}),d,i&&h.a.createElement(ie.a,{label:n,onClick:m}))}));ce.displayName="ModalHeader",ce.defaultProps={closeLabel:"Close",closeButton:!1};var le,de=ce,ue=t(142),fe=Object(ue.a)("h4"),me=Object(Y.a)("modal-title",{Component:fe}),be=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],ve={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:oe};function pe(e){return h.a.createElement(X.a,Object(r.a)({},e,{timeout:null}))}function Oe(e){return h.a.createElement(X.a,Object(r.a)({},e,{timeout:null}))}var he=h.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,i=e.style,g=e.dialogClassName,j=e.contentClassName,y=e.children,E=e.dialogAs,N=e["aria-labelledby"],x=e.show,w=e.animation,C=e.backdrop,k=e.keyboard,F=e.onEscapeKeyDown,P=e.onShow,R=e.onHide,I=e.container,S=e.autoFocus,T=e.enforceFocus,D=e.restoreFocus,M=e.restoreFocusOptions,A=e.onEntered,H=e.onExit,L=e.onExiting,V=e.onEnter,B=e.onEntering,z=e.onExited,K=e.backdropClassName,_=e.manager,W=Object(o.a)(e,be),$=Object(O.useState)({}),G=$[0],J=$[1],q=Object(O.useState)(!1),X=q[0],Y=q[1],Z=Object(O.useRef)(!1),te=Object(O.useRef)(!1),ne=Object(O.useRef)(null),oe=Object(m.a)(),re=oe[0],ie=oe[1],se=Object(b.a)(R);t=Object(ae.a)(t,"modal"),Object(O.useImperativeHandle)(a,(function(){return{get _modal(){return re}}}),[re]);var ce=Object(O.useMemo)((function(){return{onHide:se}}),[se]);function de(){return _||(le||(le=new Q),le)}function ue(e){if(l.a){var a=de().isContainerOverflowing(re),t=e.scrollHeight>Object(d.a)(e).documentElement.clientHeight;J({paddingRight:a&&!t?f():void 0,paddingLeft:!a&&t?f():void 0})}}var fe=Object(b.a)((function(){re&&ue(re.dialog)}));Object(v.a)((function(){Object(u.a)(window,"resize",fe),ne.current&&ne.current()}));var me=function(){Z.current=!0},ve=function(e){Z.current&&re&&e.target===re.dialog&&(te.current=!0),Z.current=!1},he=function(){Y(!0),ne.current=Object(p.a)(re.dialog,(function(){Y(!1)}))},ge=function(e){"static"!==C?te.current||e.target!==e.currentTarget?te.current=!1:null==R||R():function(e){e.target===e.currentTarget&&he()}(e)},je=Object(O.useCallback)((function(e){return h.a.createElement("div",Object(r.a)({},e,{className:s()(t+"-backdrop",K,!w&&"show")}))}),[w,K,t]),ye=Object(r.a)({},i,G);w||(ye.display="block");return h.a.createElement(ee.Provider,{value:ce},h.a.createElement(U,{show:x,ref:ie,backdrop:C,container:I,keyboard:!0,autoFocus:S,enforceFocus:T,restoreFocus:D,restoreFocusOptions:M,onEscapeKeyDown:function(e){k||"static"!==C?k&&F&&F(e):(e.preventDefault(),he())},onShow:P,onHide:R,onEnter:function(e,a){e&&(e.style.display="block",ue(e)),null==V||V(e,a)},onEntering:function(e,a){null==B||B(e,a),Object(c.a)(window,"resize",fe)},onEntered:A,onExit:function(e){null==ne.current||ne.current(),null==H||H(e)},onExiting:L,onExited:function(e){e&&(e.style.display=""),null==z||z(e),Object(u.a)(window,"resize",fe)},manager:de(),containerClassName:t+"-open",transition:w?pe:void 0,backdropTransition:w?Oe:void 0,renderBackdrop:je,renderDialog:function(e){return h.a.createElement("div",Object(r.a)({role:"dialog"},e,{style:ye,className:s()(n,t,X&&t+"-static"),onClick:C?ge:void 0,onMouseUp:ve,"aria-labelledby":N}),h.a.createElement(E,Object(r.a)({},W,{onMouseDown:me,className:g,contentClassName:j}),y))}}))}));he.displayName="Modal",he.defaultProps=ve,he.Body=Z,he.Header=de,he.Title=me,he.Footer=re,he.Dialog=oe,he.TRANSITION_DURATION=300,he.BACKDROP_TRANSITION_DURATION=150;a.a=he},244:function(e,a,t){"use strict";var n=t(5),o=t(9),r=t(13),i=t.n(r),s=t(0),c=t.n(s),l=(t(172),t(18)),d=t.n(l),u=["as","className","type","tooltip"],f={type:d.a.string,tooltip:d.a.bool,as:d.a.elementType},m=c.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,s=e.className,l=e.type,d=void 0===l?"valid":l,f=e.tooltip,m=void 0!==f&&f,b=Object(o.a)(e,u);return c.a.createElement(r,Object(n.a)({},b,{ref:a,className:i()(s,d+"-"+(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=f;var b=m,v=c.a.createContext({controlId:void 0}),p=t(17),O=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],h=c.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,l=e.bsCustomPrefix,d=e.className,u=e.type,f=void 0===u?"checkbox":u,m=e.isValid,b=void 0!==m&&m,h=e.isInvalid,g=void 0!==h&&h,j=e.isStatic,y=e.as,E=void 0===y?"input":y,N=Object(o.a)(e,O),x=Object(s.useContext)(v),w=x.controlId,C=x.custom?[l,"custom-control-input"]:[r,"form-check-input"],k=C[0],F=C[1];return r=Object(p.a)(k,F),c.a.createElement(E,Object(n.a)({},N,{ref:a,type:f,id:t||w,className:i()(d,r,b&&"is-valid",g&&"is-invalid",j&&"position-static")}))}));h.displayName="FormCheckInput";var g=h,j=["bsPrefix","bsCustomPrefix","className","htmlFor"],y=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,l=e.className,d=e.htmlFor,u=Object(o.a)(e,j),f=Object(s.useContext)(v),m=f.controlId,b=f.custom?[r,"custom-control-label"]:[t,"form-check-label"],O=b[0],h=b[1];return t=Object(p.a)(O,h),c.a.createElement("label",Object(n.a)({},u,{ref:a,htmlFor:d||m,className:i()(l,t)}))}));y.displayName="FormCheckLabel";var E=y,N=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],x=c.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,l=e.bsCustomPrefix,d=e.inline,u=void 0!==d&&d,f=e.disabled,m=void 0!==f&&f,O=e.isValid,h=void 0!==O&&O,j=e.isInvalid,y=void 0!==j&&j,x=e.feedbackTooltip,w=void 0!==x&&x,C=e.feedback,k=e.className,F=e.style,P=e.title,R=void 0===P?"":P,I=e.type,S=void 0===I?"checkbox":I,T=e.label,D=e.children,M=e.custom,A=e.as,H=void 0===A?"input":A,L=Object(o.a)(e,N),V="switch"===S||M,B=V?[l,"custom-control"]:[r,"form-check"],z=B[0],K=B[1];r=Object(p.a)(z,K);var _=Object(s.useContext)(v).controlId,U=Object(s.useMemo)((function(){return{controlId:t||_,custom:V}}),[_,V,t]),W=V||null!=T&&!1!==T&&!D,$=c.a.createElement(g,Object(n.a)({},L,{type:"switch"===S?"checkbox":S,ref:a,isValid:h,isInvalid:y,isStatic:!W,disabled:m,as:H}));return c.a.createElement(v.Provider,{value:U},c.a.createElement("div",{style:F,className:i()(k,r,V&&"custom-"+S,u&&r+"-inline")},D||c.a.createElement(c.a.Fragment,null,$,W&&c.a.createElement(E,{title:R},T),(h||y)&&c.a.createElement(b,{type:h?"valid":"invalid",tooltip:w},C))))}));x.displayName="FormCheck",x.Input=g,x.Label=E;var w=x,C=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],k=c.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,l=e.bsCustomPrefix,d=e.className,u=e.isValid,f=e.isInvalid,m=e.lang,b=e.as,O=void 0===b?"input":b,h=Object(o.a)(e,C),g=Object(s.useContext)(v),j=g.controlId,y=g.custom?[l,"custom-file-input"]:[r,"form-control-file"],E=y[0],N=y[1];return r=Object(p.a)(E,N),c.a.createElement(O,Object(n.a)({},h,{ref:a,id:t||j,type:"file",lang:m,className:i()(d,r,u&&"is-valid",f&&"is-invalid")}))}));k.displayName="FormFileInput";var F=k,P=["bsPrefix","bsCustomPrefix","className","htmlFor"],R=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,l=e.className,d=e.htmlFor,u=Object(o.a)(e,P),f=Object(s.useContext)(v),m=f.controlId,b=f.custom?[r,"custom-file-label"]:[t,"form-file-label"],O=b[0],h=b[1];return t=Object(p.a)(O,h),c.a.createElement("label",Object(n.a)({},u,{ref:a,htmlFor:d||m,className:i()(l,t),"data-browse":u["data-browse"]}))}));R.displayName="FormFileLabel";var I=R,S=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],T=c.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,l=e.bsCustomPrefix,d=e.disabled,u=void 0!==d&&d,f=e.isValid,m=void 0!==f&&f,O=e.isInvalid,h=void 0!==O&&O,g=e.feedbackTooltip,j=void 0!==g&&g,y=e.feedback,E=e.className,N=e.style,x=e.label,w=e.children,C=e.custom,k=e.lang,P=e["data-browse"],R=e.as,T=void 0===R?"div":R,D=e.inputAs,M=void 0===D?"input":D,A=Object(o.a)(e,S),H=C?[l,"custom"]:[r,"form-file"],L=H[0],V=H[1];r=Object(p.a)(L,V);var B=Object(s.useContext)(v).controlId,z=Object(s.useMemo)((function(){return{controlId:t||B,custom:C}}),[B,C,t]),K=null!=x&&!1!==x&&!w,_=c.a.createElement(F,Object(n.a)({},A,{ref:a,isValid:m,isInvalid:h,disabled:u,as:M,lang:k}));return c.a.createElement(v.Provider,{value:z},c.a.createElement(T,{style:N,className:i()(E,r,C&&"custom-file")},w||c.a.createElement(c.a.Fragment,null,C?c.a.createElement(c.a.Fragment,null,_,K&&c.a.createElement(I,{"data-browse":P},x)):c.a.createElement(c.a.Fragment,null,K&&c.a.createElement(I,null,x),_),(m||h)&&c.a.createElement(b,{type:m?"valid":"invalid",tooltip:j},y))))}));T.displayName="FormFile",T.Input=F,T.Label=I;var D=T,M=(t(95),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),A=c.a.forwardRef((function(e,a){var t,r,l=e.bsPrefix,d=e.bsCustomPrefix,u=e.type,f=e.size,m=e.htmlSize,b=e.id,O=e.className,h=e.isValid,g=void 0!==h&&h,j=e.isInvalid,y=void 0!==j&&j,E=e.plaintext,N=e.readOnly,x=e.custom,w=e.as,C=void 0===w?"input":w,k=Object(o.a)(e,M),F=Object(s.useContext)(v).controlId,P=x?[d,"custom"]:[l,"form-control"],R=P[0],I=P[1];if(l=Object(p.a)(R,I),E)(r={})[l+"-plaintext"]=!0,t=r;else if("file"===u){var S;(S={})[l+"-file"]=!0,t=S}else if("range"===u){var T;(T={})[l+"-range"]=!0,t=T}else if("select"===C&&x){var D;(D={})[l+"-select"]=!0,D[l+"-select-"+f]=f,t=D}else{var A;(A={})[l]=!0,A[l+"-"+f]=f,t=A}return c.a.createElement(C,Object(n.a)({},k,{type:u,size:m,ref:a,readOnly:N,id:b||F,className:i()(O,t,g&&"is-valid",y&&"is-invalid")}))}));A.displayName="FormControl";var H=Object.assign(A,{Feedback:b}),L=["bsPrefix","className","children","controlId","as"],V=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.children,d=e.controlId,u=e.as,f=void 0===u?"div":u,m=Object(o.a)(e,L);t=Object(p.a)(t,"form-group");var b=Object(s.useMemo)((function(){return{controlId:d}}),[d]);return c.a.createElement(v.Provider,{value:b},c.a.createElement(f,Object(n.a)({},m,{ref:a,className:i()(r,t)}),l))}));V.displayName="FormGroup";var B=V,z=t(212),K=["as","bsPrefix","column","srOnly","className","htmlFor"],_=c.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"label":t,l=e.bsPrefix,d=e.column,u=e.srOnly,f=e.className,m=e.htmlFor,b=Object(o.a)(e,K),O=Object(s.useContext)(v).controlId;l=Object(p.a)(l,"form-label");var h="col-form-label";"string"===typeof d&&(h=h+" "+h+"-"+d);var g=i()(f,l,u&&"sr-only",d&&h);return m=m||O,d?c.a.createElement(z.a,Object(n.a)({ref:a,as:"label",className:g,htmlFor:m},b)):c.a.createElement(r,Object(n.a)({ref:a,className:g,htmlFor:m},b))}));_.displayName="FormLabel",_.defaultProps={column:!1,srOnly:!1};var U=_,W=["bsPrefix","className","as","muted"],$=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,s=e.as,l=void 0===s?"small":s,d=e.muted,u=Object(o.a)(e,W);return t=Object(p.a)(t,"form-text"),c.a.createElement(l,Object(n.a)({},u,{ref:a,className:i()(r,t,d&&"text-muted")}))}));$.displayName="FormText";var G=$,J=c.a.forwardRef((function(e,a){return c.a.createElement(w,Object(n.a)({},e,{ref:a,type:"switch"}))}));J.displayName="Switch",J.Input=w.Input,J.Label=w.Label;var q=J,Q=t(42),X=["bsPrefix","inline","className","validated","as"],Y=Object(Q.a)("form-row"),Z=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.inline,s=e.className,l=e.validated,d=e.as,u=void 0===d?"form":d,f=Object(o.a)(e,X);return t=Object(p.a)(t,"form"),c.a.createElement(u,Object(n.a)({},f,{ref:a,className:i()(s,l&&"was-validated",r&&t+"-inline")}))}));Z.displayName="Form",Z.defaultProps={inline:!1},Z.Row=Y,Z.Group=B,Z.Control=H,Z.Check=w,Z.File=D,Z.Switch=q,Z.Label=U,Z.Text=G;a.a=Z}}]);
//# sourceMappingURL=6.7b7cc75f.chunk.js.map