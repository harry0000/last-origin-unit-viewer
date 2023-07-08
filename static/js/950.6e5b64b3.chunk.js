"use strict";(self.webpackChunklast_origin_unit_viewer=self.webpackChunklast_origin_unit_viewer||[]).push([[950],{2677:function(e,t,n){var a=n(7462),o=n(3366),r=n(1694),i=n.n(r),s=n(2791),l=n(162),c=["bsPrefix","className","as"],d=["xl","lg","md","sm","xs"],u=s.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,u=e.as,f=void 0===u?"div":u,m=(0,o.Z)(e,c),v=(0,l.vE)(n,"col"),p=[],b=[];return d.forEach((function(e){var t,n,a,o=m[e];if(delete m[e],"object"===typeof o&&null!=o){var r=o.span;t=void 0===r||r,n=o.offset,a=o.order}else t=o;var i="xs"!==e?"-"+e:"";t&&p.push(!0===t?""+v+i:""+v+i+"-"+t),null!=a&&b.push("order"+i+"-"+a),null!=n&&b.push("offset"+i+"-"+n)})),p.length||p.push(v),s.createElement(f,(0,a.Z)({},m,{ref:t,className:i().apply(void 0,[r].concat(p,b))}))}));u.displayName="Col",t.Z=u},6149:function(e,t,n){n.d(t,{Z:function(){return Y}});var a=n(7462),o=n(3366),r=n(1694),i=n.n(r),s=n(2791),l=(n(3573),n(2007)),c=n.n(l),d=["as","className","type","tooltip"],u={type:c().string,tooltip:c().bool,as:c().elementType},f=s.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,l=e.className,c=e.type,u=void 0===c?"valid":c,f=e.tooltip,m=void 0!==f&&f,v=(0,o.Z)(e,d);return s.createElement(r,(0,a.Z)({},v,{ref:t,className:i()(l,u+"-"+(m?"tooltip":"feedback"))}))}));f.displayName="Feedback",f.propTypes=u;var m=f,v=s.createContext({controlId:void 0}),p=n(162),b=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],h=s.forwardRef((function(e,t){var n=e.id,r=e.bsPrefix,l=e.bsCustomPrefix,c=e.className,d=e.type,u=void 0===d?"checkbox":d,f=e.isValid,m=void 0!==f&&f,h=e.isInvalid,g=void 0!==h&&h,y=e.isStatic,E=e.as,N=void 0===E?"input":E,x=(0,o.Z)(e,b),Z=(0,s.useContext)(v),w=Z.controlId,C=Z.custom?[l,"custom-control-input"]:[r,"form-check-input"],k=C[0],F=C[1];return r=(0,p.vE)(k,F),s.createElement(N,(0,a.Z)({},x,{ref:t,type:u,id:n||w,className:i()(c,r,m&&"is-valid",g&&"is-invalid",y&&"position-static")}))}));h.displayName="FormCheckInput";var g=h,y=["bsPrefix","bsCustomPrefix","className","htmlFor"],E=s.forwardRef((function(e,t){var n=e.bsPrefix,r=e.bsCustomPrefix,l=e.className,c=e.htmlFor,d=(0,o.Z)(e,y),u=(0,s.useContext)(v),f=u.controlId,m=u.custom?[r,"custom-control-label"]:[n,"form-check-label"],b=m[0],h=m[1];return n=(0,p.vE)(b,h),s.createElement("label",(0,a.Z)({},d,{ref:t,htmlFor:c||f,className:i()(l,n)}))}));E.displayName="FormCheckLabel";var N=E,x=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],Z=s.forwardRef((function(e,t){var n=e.id,r=e.bsPrefix,l=e.bsCustomPrefix,c=e.inline,d=void 0!==c&&c,u=e.disabled,f=void 0!==u&&u,b=e.isValid,h=void 0!==b&&b,y=e.isInvalid,E=void 0!==y&&y,Z=e.feedbackTooltip,w=void 0!==Z&&Z,C=e.feedback,k=e.className,F=e.style,P=e.title,R=void 0===P?"":P,I=e.type,O=void 0===I?"checkbox":I,S=e.label,T=e.children,D=e.custom,M=e.as,A=void 0===M?"input":M,H=(0,o.Z)(e,x),L="switch"===O||D,V=L?[l,"custom-control"]:[r,"form-check"],B=V[0],z=V[1];r=(0,p.vE)(B,z);var _=(0,s.useContext)(v).controlId,j=(0,s.useMemo)((function(){return{controlId:n||_,custom:L}}),[_,L,n]),K=L||null!=S&&!1!==S&&!T,U=s.createElement(g,(0,a.Z)({},H,{type:"switch"===O?"checkbox":O,ref:t,isValid:h,isInvalid:E,isStatic:!K,disabled:f,as:A}));return s.createElement(v.Provider,{value:j},s.createElement("div",{style:F,className:i()(k,r,L&&"custom-"+O,d&&r+"-inline")},T||s.createElement(s.Fragment,null,U,K&&s.createElement(N,{title:R},S),(h||E)&&s.createElement(m,{type:h?"valid":"invalid",tooltip:w},C))))}));Z.displayName="FormCheck",Z.Input=g,Z.Label=N;var w=Z,C=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],k=s.forwardRef((function(e,t){var n=e.id,r=e.bsPrefix,l=e.bsCustomPrefix,c=e.className,d=e.isValid,u=e.isInvalid,f=e.lang,m=e.as,b=void 0===m?"input":m,h=(0,o.Z)(e,C),g=(0,s.useContext)(v),y=g.controlId,E=g.custom?[l,"custom-file-input"]:[r,"form-control-file"],N=E[0],x=E[1];return r=(0,p.vE)(N,x),s.createElement(b,(0,a.Z)({},h,{ref:t,id:n||y,type:"file",lang:f,className:i()(c,r,d&&"is-valid",u&&"is-invalid")}))}));k.displayName="FormFileInput";var F=k,P=["bsPrefix","bsCustomPrefix","className","htmlFor"],R=s.forwardRef((function(e,t){var n=e.bsPrefix,r=e.bsCustomPrefix,l=e.className,c=e.htmlFor,d=(0,o.Z)(e,P),u=(0,s.useContext)(v),f=u.controlId,m=u.custom?[r,"custom-file-label"]:[n,"form-file-label"],b=m[0],h=m[1];return n=(0,p.vE)(b,h),s.createElement("label",(0,a.Z)({},d,{ref:t,htmlFor:c||f,className:i()(l,n),"data-browse":d["data-browse"]}))}));R.displayName="FormFileLabel";var I=R,O=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],S=s.forwardRef((function(e,t){var n=e.id,r=e.bsPrefix,l=e.bsCustomPrefix,c=e.disabled,d=void 0!==c&&c,u=e.isValid,f=void 0!==u&&u,b=e.isInvalid,h=void 0!==b&&b,g=e.feedbackTooltip,y=void 0!==g&&g,E=e.feedback,N=e.className,x=e.style,Z=e.label,w=e.children,C=e.custom,k=e.lang,P=e["data-browse"],R=e.as,S=void 0===R?"div":R,T=e.inputAs,D=void 0===T?"input":T,M=(0,o.Z)(e,O),A=C?[l,"custom"]:[r,"form-file"],H=A[0],L=A[1];r=(0,p.vE)(H,L);var V=(0,s.useContext)(v).controlId,B=(0,s.useMemo)((function(){return{controlId:n||V,custom:C}}),[V,C,n]),z=null!=Z&&!1!==Z&&!w,_=s.createElement(F,(0,a.Z)({},M,{ref:t,isValid:f,isInvalid:h,disabled:d,as:D,lang:k}));return s.createElement(v.Provider,{value:B},s.createElement(S,{style:x,className:i()(N,r,C&&"custom-file")},w||s.createElement(s.Fragment,null,C?s.createElement(s.Fragment,null,_,z&&s.createElement(I,{"data-browse":P},Z)):s.createElement(s.Fragment,null,z&&s.createElement(I,null,Z),_),(f||h)&&s.createElement(m,{type:f?"valid":"invalid",tooltip:y},E))))}));S.displayName="FormFile",S.Input=F,S.Label=I;var T=S,D=(n(2391),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),M=s.forwardRef((function(e,t){var n,r,l=e.bsPrefix,c=e.bsCustomPrefix,d=e.type,u=e.size,f=e.htmlSize,m=e.id,b=e.className,h=e.isValid,g=void 0!==h&&h,y=e.isInvalid,E=void 0!==y&&y,N=e.plaintext,x=e.readOnly,Z=e.custom,w=e.as,C=void 0===w?"input":w,k=(0,o.Z)(e,D),F=(0,s.useContext)(v).controlId,P=Z?[c,"custom"]:[l,"form-control"],R=P[0],I=P[1];if(l=(0,p.vE)(R,I),N)(r={})[l+"-plaintext"]=!0,n=r;else if("file"===d){var O;(O={})[l+"-file"]=!0,n=O}else if("range"===d){var S;(S={})[l+"-range"]=!0,n=S}else if("select"===C&&Z){var T;(T={})[l+"-select"]=!0,T[l+"-select-"+u]=u,n=T}else{var M;(M={})[l]=!0,M[l+"-"+u]=u,n=M}return s.createElement(C,(0,a.Z)({},k,{type:d,size:f,ref:t,readOnly:x,id:m||F,className:i()(b,n,g&&"is-valid",E&&"is-invalid")}))}));M.displayName="FormControl";var A=Object.assign(M,{Feedback:m}),H=["bsPrefix","className","children","controlId","as"],L=s.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,l=e.children,c=e.controlId,d=e.as,u=void 0===d?"div":d,f=(0,o.Z)(e,H);n=(0,p.vE)(n,"form-group");var m=(0,s.useMemo)((function(){return{controlId:c}}),[c]);return s.createElement(v.Provider,{value:m},s.createElement(u,(0,a.Z)({},f,{ref:t,className:i()(r,n)}),l))}));L.displayName="FormGroup";var V=L,B=n(2677),z=["as","bsPrefix","column","srOnly","className","htmlFor"],_=s.forwardRef((function(e,t){var n=e.as,r=void 0===n?"label":n,l=e.bsPrefix,c=e.column,d=e.srOnly,u=e.className,f=e.htmlFor,m=(0,o.Z)(e,z),b=(0,s.useContext)(v).controlId;l=(0,p.vE)(l,"form-label");var h="col-form-label";"string"===typeof c&&(h=h+" "+h+"-"+c);var g=i()(u,l,d&&"sr-only",c&&h);return f=f||b,c?s.createElement(B.Z,(0,a.Z)({ref:t,as:"label",className:g,htmlFor:f},m)):s.createElement(r,(0,a.Z)({ref:t,className:g,htmlFor:f},m))}));_.displayName="FormLabel",_.defaultProps={column:!1,srOnly:!1};var j=_,K=["bsPrefix","className","as","muted"],U=s.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,l=e.as,c=void 0===l?"small":l,d=e.muted,u=(0,o.Z)(e,K);return n=(0,p.vE)(n,"form-text"),s.createElement(c,(0,a.Z)({},u,{ref:t,className:i()(r,n,d&&"text-muted")}))}));U.displayName="FormText";var W=U,$=s.forwardRef((function(e,t){return s.createElement(w,(0,a.Z)({},e,{ref:t,type:"switch"}))}));$.displayName="Switch",$.Input=w.Input,$.Label=w.Label;var G=$,q=n(6543),J=["bsPrefix","inline","className","validated","as"],Q=(0,q.Z)("form-row"),X=s.forwardRef((function(e,t){var n=e.bsPrefix,r=e.inline,l=e.className,c=e.validated,d=e.as,u=void 0===d?"form":d,f=(0,o.Z)(e,J);return n=(0,p.vE)(n,"form"),s.createElement(u,(0,a.Z)({},f,{ref:t,className:i()(l,c&&"was-validated",r&&n+"-inline")}))}));X.displayName="Form",X.defaultProps={inline:!1},X.Row=Q,X.Group=V,X.Control=A,X.Check=w,X.File=T,X.Switch=G,X.Label=j,X.Text=W;var Y=X},2961:function(e,t,n){n.d(t,{Z:function(){return be}});var a,o=n(3366),r=n(7462),i=n(1694),s=n.n(i),l=n(3070),c=n(7357),d=n(8376),u=n(6382);function f(e){if((!a&&0!==a||e)&&c.Z){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),a=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return a}var m=n(8633),v=n(2134),p=n(1683),b=n(3690),h=n(2791);function g(e){void 0===e&&(e=(0,d.Z)());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(n){return e.body}}var y=n(3189),E=n(2899),N=n(2007),x=n.n(N),Z=n(4164),w=n(5746),C=n(2803),k=n(6755);function F(e,t){e.classList?e.classList.add(t):(0,k.Z)(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function P(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function R(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=P(e.className,t):e.setAttribute("class",P(e.className&&e.className.baseVal||"",t))}var I=n(5427);function O(e){return"window"in e&&e.window===e?e:"nodeType"in(t=e)&&t.nodeType===document.DOCUMENT_NODE&&e.defaultView||!1;var t}function S(e){var t;return O(e)||(t=e)&&"body"===t.tagName.toLowerCase()?function(e){var t=O(e)?(0,d.Z)():(0,d.Z)(e),n=O(e)||t.defaultView;return t.body.clientWidth<n.innerWidth}(e):e.scrollHeight>e.clientHeight}var T=["template","script","style"],D=function(e,t,n){[].forEach.call(e.children,(function(e){-1===t.indexOf(e)&&function(e){var t=e.nodeType,n=e.tagName;return 1===t&&-1===T.indexOf(n.toLowerCase())}(e)&&n(e)}))};function M(e,t){t&&(e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden"))}var A,H=function(){function e(e){var t=void 0===e?{}:e,n=t.hideSiblingNodes,a=void 0===n||n,o=t.handleContainerOverflow,r=void 0===o||o;this.hideSiblingNodes=void 0,this.handleContainerOverflow=void 0,this.modals=void 0,this.containers=void 0,this.data=void 0,this.scrollbarSize=void 0,this.hideSiblingNodes=a,this.handleContainerOverflow=r,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=f()}var t=e.prototype;return t.isContainerOverflowing=function(e){var t=this.data[this.containerIndexFromModal(e)];return t&&t.overflowing},t.containerIndexFromModal=function(e){return function(e,t){var n=-1;return e.some((function(e,a){return!!t(e,a)&&(n=a,!0)})),n}(this.data,(function(t){return-1!==t.modals.indexOf(e)}))},t.setContainerStyle=function(e,t){var n={overflow:"hidden"};e.style={overflow:t.style.overflow,paddingRight:t.style.paddingRight},e.overflowing&&(n.paddingRight=parseInt((0,I.Z)(t,"paddingRight")||"0",10)+this.scrollbarSize+"px"),(0,I.Z)(t,n)},t.removeContainerStyle=function(e,t){Object.assign(t.style,e.style)},t.add=function(e,t,n){var a=this.modals.indexOf(e),o=this.containers.indexOf(t);if(-1!==a)return a;if(a=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&function(e,t){var n=t.dialog,a=t.backdrop;D(e,[n,a],(function(e){return M(!0,e)}))}(t,e),-1!==o)return this.data[o].modals.push(e),a;var r={modals:[e],classes:n?n.split(/\s+/):[],overflowing:S(t)};return this.handleContainerOverflow&&this.setContainerStyle(r,t),r.classes.forEach(F.bind(null,t)),this.containers.push(t),this.data.push(r),a},t.remove=function(e){var t=this.modals.indexOf(e);if(-1!==t){var n=this.containerIndexFromModal(e),a=this.data[n],o=this.containers[n];if(a.modals.splice(a.modals.indexOf(e),1),this.modals.splice(t,1),0===a.modals.length)a.classes.forEach(R.bind(null,o)),this.handleContainerOverflow&&this.removeContainerStyle(a,o),this.hideSiblingNodes&&function(e,t){var n=t.dialog,a=t.backdrop;D(e,[n,a],(function(e){return M(!1,e)}))}(o,e),this.containers.splice(n,1),this.data.splice(n,1);else if(this.hideSiblingNodes){var r=a.modals[a.modals.length-1],i=r.backdrop;M(!1,r.dialog),M(!1,i)}}},t.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}(),L=n(8171);function V(e){var t=e||(A||(A=new H),A),n=(0,h.useRef)({dialog:null,backdrop:null});return Object.assign(n.current,{add:function(e,a){return t.add(n.current,e,a)},remove:function(){return t.remove(n.current)},isTopModal:function(){return t.isTopModal(n.current)},setDialogRef:(0,h.useCallback)((function(e){n.current.dialog=e}),[]),setBackdropRef:(0,h.useCallback)((function(e){n.current.backdrop=e}),[])})}var B=(0,h.forwardRef)((function(e,t){var n=e.show,a=void 0!==n&&n,i=e.role,s=void 0===i?"dialog":i,l=e.className,d=e.style,u=e.children,f=e.backdrop,m=void 0===f||f,b=e.keyboard,N=void 0===b||b,x=e.onBackdropClick,k=e.onEscapeKeyDown,F=e.transition,P=e.backdropTransition,R=e.autoFocus,I=void 0===R||R,O=e.enforceFocus,S=void 0===O||O,T=e.restoreFocus,D=void 0===T||T,M=e.restoreFocusOptions,A=e.renderDialog,H=e.renderBackdrop,B=void 0===H?function(e){return h.createElement("div",e)}:H,z=e.manager,_=e.container,j=e.containerClassName,K=e.onShow,U=e.onHide,W=void 0===U?function(){}:U,$=e.onExit,G=e.onExited,q=e.onExiting,J=e.onEnter,Q=e.onEntering,X=e.onEntered,Y=(0,o.Z)(e,["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","containerClassName","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"]),ee=(0,L.Z)(_),te=V(z),ne=(0,w.Z)(),ae=(0,C.Z)(a),oe=(0,h.useState)(!a),re=oe[0],ie=oe[1],se=(0,h.useRef)(null);(0,h.useImperativeHandle)(t,(function(){return te}),[te]),c.Z&&!ae&&a&&(se.current=g()),F||a||re?a&&re&&ie(!1):ie(!0);var le=(0,v.Z)((function(){if(te.add(ee,j),ve.current=(0,E.Z)(document,"keydown",fe),me.current=(0,E.Z)(document,"focus",(function(){return setTimeout(de)}),!0),K&&K(),I){var e=g(document);te.dialog&&e&&!(0,y.Z)(te.dialog,e)&&(se.current=e,te.dialog.focus())}})),ce=(0,v.Z)((function(){var e;(te.remove(),null==ve.current||ve.current(),null==me.current||me.current(),D)&&(null==(e=se.current)||null==e.focus||e.focus(M),se.current=null)}));(0,h.useEffect)((function(){a&&ee&&le()}),[a,ee,le]),(0,h.useEffect)((function(){re&&ce()}),[re,ce]),(0,p.Z)((function(){ce()}));var de=(0,v.Z)((function(){if(S&&ne()&&te.isTopModal()){var e=g();te.dialog&&e&&!(0,y.Z)(te.dialog,e)&&te.dialog.focus()}})),ue=(0,v.Z)((function(e){e.target===e.currentTarget&&(null==x||x(e),!0===m&&W())})),fe=(0,v.Z)((function(e){N&&27===e.keyCode&&te.isTopModal()&&(null==k||k(e),e.defaultPrevented||W())})),me=(0,h.useRef)(),ve=(0,h.useRef)(),pe=F;if(!ee||!(a||pe&&!re))return null;var be=(0,r.Z)({role:s,ref:te.setDialogRef,"aria-modal":"dialog"===s||void 0},Y,{style:d,className:l,tabIndex:-1}),he=A?A(be):h.createElement("div",be,h.cloneElement(u,{role:"document"}));pe&&(he=h.createElement(pe,{appear:!0,unmountOnExit:!0,in:!!a,onExit:$,onExiting:q,onExited:function(){ie(!0);for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];null==G||G.apply(void 0,t)},onEnter:J,onEntering:Q,onEntered:X},he));var ge=null;if(m){var ye=P;ge=B({ref:te.setBackdropRef,onClick:ue}),ye&&(ge=h.createElement(ye,{appear:!0,in:!!a},ge))}return h.createElement(h.Fragment,null,Z.createPortal(h.createElement(h.Fragment,null,ge,he),ee))})),z={show:x().bool,container:x().any,onShow:x().func,onHide:x().func,backdrop:x().oneOfType([x().bool,x().oneOf(["static"])]),renderDialog:x().func,renderBackdrop:x().func,onEscapeKeyDown:x().func,onBackdropClick:x().func,containerClassName:x().string,keyboard:x().bool,transition:x().elementType,backdropTransition:x().elementType,autoFocus:x().bool,enforceFocus:x().bool,restoreFocus:x().bool,restoreFocusOptions:x().shape({preventScroll:x().bool}),onEnter:x().func,onEntering:x().func,onEntered:x().func,onExit:x().func,onExiting:x().func,onExited:x().func,manager:x().instanceOf(H)};B.displayName="Modal",B.propTypes=z;var _=Object.assign(B,{Manager:H}),j=(n(2391),n(4578)),K=n(3808),U=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",W=".sticky-top",$=".navbar-toggler",G=function(e){function t(){return e.apply(this,arguments)||this}(0,j.Z)(t,e);var n=t.prototype;return n.adjustAndStore=function(e,t,n){var a,o=t.style[e];t.dataset[e]=o,(0,I.Z)(t,((a={})[e]=parseFloat((0,I.Z)(t,e))+n+"px",a))},n.restore=function(e,t){var n,a=t.dataset[e];void 0!==a&&(delete t.dataset[e],(0,I.Z)(t,((n={})[e]=a,n)))},n.setContainerStyle=function(t,n){var a=this;if(e.prototype.setContainerStyle.call(this,t,n),t.overflowing){var o=f();(0,K.Z)(n,U).forEach((function(e){return a.adjustAndStore("paddingRight",e,o)})),(0,K.Z)(n,W).forEach((function(e){return a.adjustAndStore("marginRight",e,-o)})),(0,K.Z)(n,$).forEach((function(e){return a.adjustAndStore("marginRight",e,o)}))}},n.removeContainerStyle=function(t,n){var a=this;e.prototype.removeContainerStyle.call(this,t,n),(0,K.Z)(n,U).forEach((function(e){return a.restore("paddingRight",e)})),(0,K.Z)(n,W).forEach((function(e){return a.restore("marginRight",e)})),(0,K.Z)(n,$).forEach((function(e){return a.restore("marginRight",e)}))},t}(H),q=n(2709),J=n(6543),Q=(0,J.Z)("modal-body"),X=h.createContext({onHide:function(){}}),Y=n(162),ee=["bsPrefix","className","contentClassName","centered","size","children","scrollable"],te=h.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,i=e.contentClassName,l=e.centered,c=e.size,d=e.children,u=e.scrollable,f=(0,o.Z)(e,ee),m=(n=(0,Y.vE)(n,"modal"))+"-dialog";return h.createElement("div",(0,r.Z)({},f,{ref:t,className:s()(m,a,c&&n+"-"+c,l&&m+"-centered",u&&m+"-scrollable")}),h.createElement("div",{className:s()(n+"-content",i)},d))}));te.displayName="ModalDialog";var ne=te,ae=(0,J.Z)("modal-footer"),oe=n(473),re=["bsPrefix","closeLabel","closeButton","onHide","className","children"],ie=h.forwardRef((function(e,t){var n=e.bsPrefix,a=e.closeLabel,i=e.closeButton,l=e.onHide,c=e.className,d=e.children,u=(0,o.Z)(e,re);n=(0,Y.vE)(n,"modal-header");var f=(0,h.useContext)(X),m=(0,v.Z)((function(){f&&f.onHide(),l&&l()}));return h.createElement("div",(0,r.Z)({ref:t},u,{className:s()(c,n)}),d,i&&h.createElement(oe.Z,{label:a,onClick:m}))}));ie.displayName="ModalHeader",ie.defaultProps={closeLabel:"Close",closeButton:!1};var se,le=ie,ce=(0,n(7472).Z)("h4"),de=(0,J.Z)("modal-title",{Component:ce}),ue=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],fe={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:ne};function me(e){return h.createElement(q.Z,(0,r.Z)({},e,{timeout:null}))}function ve(e){return h.createElement(q.Z,(0,r.Z)({},e,{timeout:null}))}var pe=h.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,i=e.style,g=e.dialogClassName,y=e.contentClassName,E=e.children,N=e.dialogAs,x=e["aria-labelledby"],Z=e["aria-describedby"],w=e["aria-label"],C=e.show,k=e.animation,F=e.backdrop,P=e.keyboard,R=e.onEscapeKeyDown,I=e.onShow,O=e.onHide,S=e.container,T=e.autoFocus,D=e.enforceFocus,M=e.restoreFocus,A=e.restoreFocusOptions,H=e.onEntered,L=e.onExit,V=e.onExiting,B=e.onEnter,z=e.onEntering,j=e.onExited,K=e.backdropClassName,U=e.manager,W=(0,o.Z)(e,ue),$=(0,h.useState)({}),q=$[0],J=$[1],Q=(0,h.useState)(!1),ee=Q[0],te=Q[1],ne=(0,h.useRef)(!1),ae=(0,h.useRef)(!1),oe=(0,h.useRef)(null),re=(0,m.Z)(),ie=re[0],le=re[1],ce=(0,v.Z)(O);n=(0,Y.vE)(n,"modal"),(0,h.useImperativeHandle)(t,(function(){return{get _modal(){return ie}}}),[ie]);var de=(0,h.useMemo)((function(){return{onHide:ce}}),[ce]);function fe(){return U||(se||(se=new G),se)}function pe(e){if(c.Z){var t=fe().isContainerOverflowing(ie),n=e.scrollHeight>(0,d.Z)(e).documentElement.clientHeight;J({paddingRight:t&&!n?f():void 0,paddingLeft:!t&&n?f():void 0})}}var be=(0,v.Z)((function(){ie&&pe(ie.dialog)}));(0,p.Z)((function(){(0,u.Z)(window,"resize",be),oe.current&&oe.current()}));var he=function(){ne.current=!0},ge=function(e){ne.current&&ie&&e.target===ie.dialog&&(ae.current=!0),ne.current=!1},ye=function(){te(!0),oe.current=(0,b.Z)(ie.dialog,(function(){te(!1)}))},Ee=function(e){"static"!==F?ae.current||e.target!==e.currentTarget?ae.current=!1:null==O||O():function(e){e.target===e.currentTarget&&ye()}(e)},Ne=(0,h.useCallback)((function(e){return h.createElement("div",(0,r.Z)({},e,{className:s()(n+"-backdrop",K,!k&&"show")}))}),[k,K,n]),xe=(0,r.Z)({},i,q);k||(xe.display="block");return h.createElement(X.Provider,{value:de},h.createElement(_,{show:C,ref:le,backdrop:F,container:S,keyboard:!0,autoFocus:T,enforceFocus:D,restoreFocus:M,restoreFocusOptions:A,onEscapeKeyDown:function(e){P||"static"!==F?P&&R&&R(e):(e.preventDefault(),ye())},onShow:I,onHide:O,onEnter:function(e,t){e&&(e.style.display="block",pe(e)),null==B||B(e,t)},onEntering:function(e,t){null==z||z(e,t),(0,l.ZP)(window,"resize",be)},onEntered:H,onExit:function(e){null==oe.current||oe.current(),null==L||L(e)},onExiting:V,onExited:function(e){e&&(e.style.display=""),null==j||j(e),(0,u.Z)(window,"resize",be)},manager:fe(),containerClassName:n+"-open",transition:k?me:void 0,backdropTransition:k?ve:void 0,renderBackdrop:Ne,renderDialog:function(e){return h.createElement("div",(0,r.Z)({role:"dialog"},e,{style:xe,className:s()(a,n,ee&&n+"-static"),onClick:F?Ee:void 0,onMouseUp:ge,"aria-label":w,"aria-labelledby":x,"aria-describedby":Z}),h.createElement(N,(0,r.Z)({},W,{onMouseDown:he,className:g,contentClassName:y}),E))}}))}));pe.displayName="Modal",pe.defaultProps=fe,pe.Body=Q,pe.Header=le,pe.Title=de,pe.Footer=ae,pe.Dialog=ne,pe.TRANSITION_DURATION=300,pe.BACKDROP_TRANSITION_DURATION=150;var be=pe}}]);
//# sourceMappingURL=950.6e5b64b3.chunk.js.map