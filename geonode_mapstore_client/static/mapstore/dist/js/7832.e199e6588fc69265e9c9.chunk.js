(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7832],{15402:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(45697),o=r.n(n),c=r(24852),i=r.n(c);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function p(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=r(68195).FormattedHTMLMessage,y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(a,e);var t,r,n,o,c=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(n);if(o){var r=f(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return p(this,e)});function a(){return u(this,a),c.apply(this,arguments)}return t=a,(r=[{key:"render",value:function(){return this.context.intl?i().createElement(m,{id:this.props.msgId,values:this.props.msgParams}):i().createElement("span",null,this.props.msgId||"")}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(i().Component);d(y,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),d(y,"contextTypes",{intl:o().object});const b=y},11766:(e,t,r)=>{"use strict";r.d(t,{H:()=>w,Z:()=>P});var n=r(24852),o=r.n(n),c=r(12961),i=r(13218),a=r.n(i),u=r(17621),l=r.n(u),s=r(80681),p=r(38560),f=r(25288),d=r(45869),m=r(5346),y=r(15402),b=r(15135),g=["boxShadow","MozBoxShadow","WebkitBoxShadow"];function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S=(0,b.Z)(p.Z);function j(e){var t=e.themeStyle,r=e.disableBackgroundPicker,i=void 0!==r&&r,a=e.disableBackgroundAlpha,u=e.disableTextColor,p=e.disableShadow,b=e.onChange,v=void 0===b?function(){}:b,O=e.onOpen,j=void 0===O?function(){}:O,w=e.placement,P=(0,n.useRef)(),E=null==t?void 0:t.backgroundColor,I=null==t?void 0:t.color,C=!u&&E&&I&&!l().isReadable(I,E)?l().mostReadable(E,[I,"#000000","#ffffff"],{includeFallbackColors:!0}).toHexString():null;return o().createElement(o().Fragment,null,!i&&o().createElement("div",{className:"ms-custom-theme-picker-field"},o().createElement("div",null,o().createElement(m.Z,{msgId:"geostory.customizeTheme.backgroundColorLabel"})),o().createElement("div",null,o().createElement(c.Z,{placement:w,key:E,onOpen:j,color:E,format:a?"hex":"rgb",disableAlpha:a,presetColors:[],onChangeColor:function(e){var r=l()(e).isLight()?l()(e).darken(10).toHexString():l()(e).lighten(15).toHexString(),n=!u&&!(null!=t&&t.color)&&{color:l().mostReadable(e,["#000000","#ffffff"],{includeFallbackColors:!0}).toHexString()};v(h(h({},t),{},{backgroundColor:e,borderColor:r},!u&&n))}}))),!u&&o().createElement("div",{className:"ms-custom-theme-picker-field"},o().createElement("div",null,o().createElement("div",null,o().createElement(m.Z,{msgId:"geostory.customizeTheme.textColorLabel"})),o().createElement(f.Z,{className:"ms-custom-theme-picker-popover",ref:function(e){e&&(P.current=e.trigger)},placement:"top",content:o().createElement(o().Fragment,null,o().createElement(y.Z,{msgId:"geostory.customizeTheme.alternativeTextColorPopover",msgParams:{color:C}}),o().createElement(S,{bsSize:"xs",bsStyle:"primary",style:{margin:"auto",display:"block"},onClick:function(){var e,r;v(h(h({},t),{},{color:C})),null===(e=P.current)||void 0===e||null===(r=e.hide)||void 0===r||r.call(e)}},o().createElement(m.Z,{msgId:"geostory.customizeTheme.useAlternativeTextColor"})))},C&&o().createElement(S,{className:"square-button-md no-border",style:{display:C?"block":"none"}},o().createElement(s.Glyphicon,{glyph:"exclamation-mark"}))||o().createElement("div",null))),o().createElement("div",null,o().createElement(c.Z,{placement:w,key:I,color:I,onOpen:j,format:"hex",disableAlpha:!0,presetColors:[],onChangeColor:function(e){v(h(h({},t),{},{color:e}))}}))),!p&&o().createElement("div",{className:"ms-custom-theme-picker-field"},o().createElement("div",null,o().createElement(m.Z,{msgId:"geostory.customizeTheme.shadowLabel"})),o().createElement("div",null,o().createElement(d.Z,{checked:null==t?void 0:t.boxShadow,onChange:function(){var e=t||{},r=e.boxShadow,n=(e.MozBoxShadow,e.WebkitBoxShadow,function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,g));v(r?h({},n):h(h({},n),{},{boxShadow:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"}))}}))))}function w(e){var t=e.selected,r=e.value,n=e.storyTheme,c=e.onUpdate,i=e.onActive,u=e.disableBackgroundAlpha,l=e.disableTextColor,p=e.disableShadow,f=function(e,n){var o=a()(t)&&t;return c("theme",h(h({},o),{},n?O({value:e},r,h({},n)):{value:e}))},d=n||{},y=d.color,b=d.backgroundColor,g=b&&{backgroundColor:b},v=h(h({},!l&&y&&{color:y}),g),w=(null==t?void 0:t.value)===r,P=(null==t?void 0:t[r])||v;return o().createElement(o().Fragment,null,w?o().createElement("div",{className:"ms-custom-theme-picker-menuitem-header"},o().createElement("div",null,o().createElement(m.Z,{msgId:"geostory.contentToolbar.customizeThemeLabel"})),o().createElement(S,{tooltipId:"geostory.contentToolbar.customizeThemeRemoveLabel",className:"square-button-md no-border",onClick:function(e){e.stopPropagation(),f("")}},o().createElement(s.Glyphicon,{glyph:"trash"}))):o().createElement(o().Fragment,null,o().createElement(s.MenuItem,{active:w,onClick:function(){return f(r,P)}},o().createElement(m.Z,{msgId:"geostory.contentToolbar.customizeThemeLabel"}))),w&&o().createElement("div",{className:"ms-custom-theme-picker-menuitem"},o().createElement(j,{disableBackgroundAlpha:u,disableTextColor:l,disableShadow:p,themeStyle:P,onChange:function(e){return f(r,e)},onOpen:i})))}const P=j},25288:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(24852),o=r.n(n),c=r(45697),i=r.n(c),a=r(80681),u=r(37275);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function d(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(l,e);var t,r,n,c,i=(n=l,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(n);if(c){var r=y(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return d(this,e)});function l(){var e;s(this,l);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return b(m(e=i.call.apply(i,[this].concat(r))),"getContainerNode",(function(t){return t?document.body:e.parentNode||document.querySelector("."+(u.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body})),e}return t=l,(r=[{key:"render",value:function(){var e=this,t=this.getContainerNode(this.props.useBody);return o().createElement("div",{ref:function(t){e.parentNode=t&&t.parentNode},className:this.props.className,style:this.props.style},o().createElement(a.OverlayTrigger,{ref:function(t){e.trigger=t},trigger:["click"],container:t,placement:this.props.placement,rootClose:!0,overlay:o().createElement(a.Popover,{id:this.props.id,title:this.props.title,className:this.props.popoverClassName},this.props.content)},this.props.children))}}])&&p(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(o().Component);b(g,"propTypes",{id:i().string,style:i().object,className:i().string,popoverClassName:i().string,placement:i().string,title:i().node,content:i().node,useBody:i().bool}),b(g,"defaultProps",{id:"",useBody:!1});const v=g},25311:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(24852),o=r.n(n),c=r(90937),i=r(67076),a=["connectDragSource","connectDragPreview","connectDropTarget","isDragging","isOver"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p={beginDrag:function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)}};const f=(0,i.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isDraggable;return t}),(0,i.compose)((0,c.Ej)("row",p,(function(e,t){return{connectDragSource:e.dragSource(),connectDragPreview:e.dragPreview(),isDragging:t.isDragging(),draggingItem:t.getItem()||null}})),(0,c.GR)("row",{drop:function(e,t){var r=t.getItem();r.sortId!==e.sortId&&e.onSort(e.sortId,r.sortId,{id:e.id,containerId:e.containerId},{id:r.id,containerId:r.containerId})}},(function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver()}})),(function(e){return function(t){var r=t.connectDragSource,n=t.connectDragPreview,c=t.connectDropTarget,i=t.isDragging,l=t.isOver,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,a),p=s.draggingItem&&s.draggingItem.sortId<s.sortId,f=s.draggingItem&&s.draggingItem.containerId===s.containerId,d=f&&i?" ms-dragging":"",m=f&&l?" ms-over":"",y=f&&p?" ms-above":" ms-below";return n(c(o().createElement("div",{className:"ms-dragg".concat(d).concat(m," ").concat(y)},o().createElement("div",null,o().createElement(e,u({},s,{connectDragSource:r,isDragging:i,isOver:l,onDrop:function(e){return e.stopPropagation()}}))))))}})))},45567:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(24852),o=r.n(n),c=r(67076),i=["onSort","isDraggable","items","containerId"];function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const p=(0,c.compose)((0,c.branch)((function(e){var t=e.isDraggable;return void 0===t||t}),(function(e){return function(t){var r=t.onSort,n=t.isDraggable,c=t.items,u=void 0===c?[]:c,s=t.containerId,p=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,i),f=u.map((function(e,t){return l(l({},e),{},{onSort:r,isDraggable:n,sortId:t,key:e.id||t,containerId:s})}));return o().createElement(e,a({},l(l({},p),{},{isDraggable:n}),{items:f}))}})))},66190:(e,t,r)=>{"use strict";r.d(t,{Z:()=>N});var n=r(27361),o=r.n(n),c=r(47037),i=r.n(c),a=r(81763),u=r.n(a),l=r(30998),s=r.n(l),p=r(13311),f=r.n(p),d=r(68630),m=r.n(d),y=r(1469),b=r.n(y),g=r(84596),v=r.n(g),h=r(19155),O=r.n(h),S=r(61868),j=r(92579),w=r(34990);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){I(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function C(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var D=function(e,t){var r=e.length,n=0;return t||0===t||(n=r),i()(t)?n=s()(e,{id:t})+1:u()(t)&&(n=Math.min(t,e.length)),n},T=function e(t,r,n){var o=n.contents,c=n.background,i=n.id,a=n.resourceId,u=[],l=r+'{"id": "'.concat(i,'"}]');return a===t?[l]:(c&&c.resourceId===t&&u.push(l+".background"),o?o.reduce((function(r,n){return[].concat(C(r),C(e(t,l+".contents[",n)))}),u):u)},x={mode:"view",isCollapsed:!1,focusedContent:{},currentPage:{},settings:{},oldSettings:{},updateUrlOnScroll:!1};const N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.D7:var r=t.id,n=t.path,c=t.position,a=t.element,u=(0,j.Ll)("currentStory.".concat(n),e),l=o()(e,u,[]),s=D(l,c),p=l.slice();return p.splice(s,0,E({id:r},a)),(0,S.t8)(u,p,e);case w.mN:var d=t.id,y=t.mediaType,g=t.data;return(0,S.t8)("currentStory.resources",O()([{id:d,type:y,data:g}].concat(C(e.currentStory&&e.currentStory.resources||[])),"id"),e);case w.vb:return(0,S.t8)("mode",t.mode,e);case w.QK:var h=t.id,P=t.mediaType,k=t.data,N=(0,S.cc)("currentStory.resources",{id:h,type:P,data:k},{id:h},e);return P===j.Tr.MAP&&e.currentStory.sections.filter((function(e){return e.type!==j.ID.CAROUSEL})).reduce((function(e,t){return[].concat(C(e),C(T(h,"sections[",t)))}),[]).map((function(t){var r=(0,j.Ll)("currentStory.".concat(t,".map"),e);N=(0,S.t8)(r,void 0,N)})),N;case w.Ro:var Z=t.id,R=t.mediaType,_=(0,S.z6)("currentStory.resources",{id:Z},e);return e.currentStory.sections.reduce((function(e,t){return[].concat(C(e),C(T(Z,"sections[",t)))}),[]).map((function(t){var r=(0,j.Ll)("currentStory.".concat(t,".resourceId"),e);if(_=(0,S.zN)(r,_),R===j.Tr.MAP){var n=(0,j.Ll)("currentStory.".concat(t,".map"),e);_=(0,S.zN)(n,_)}})),_;case w.lX:return(0,S.t8)("loading"===t.name?"loading":"loadFlags.".concat(t.name),t.value,(0,S.t8)("loading",t.value,e));case w.Dq:var A=t.path,z=(0,j.Ll)("currentStory.".concat(A),e),B=C(z),L=B.pop(),F=o()(e,B);return b()(F)?(i()(L)&&(L=parseInt(L,10)),(0,S.t8)(B,[].concat(C(F.slice(0,L)),C(F.slice(L+1))),e)):(0,S.zN)(z,e);case w.ij:var M,q,H,U,W,G=e.defaultSettings||{},K=t.story.settings||G,Q=(null===(M=K)||void 0===M||null===(q=M.theme)||void 0===q?void 0:q.fontFamilies)||[],Y=null===(H=e.currentStory)||void 0===H||null===(U=H.settings)||void 0===U||null===(W=U.theme)||void 0===W?void 0:W.fontFamilies;return Y&&Y.length>0&&(K=(0,S.t8)("theme.fontFamilies",O()([].concat(C(Y),C(Q)),"family"),K)),(0,S.t8)("currentStory",E(E({},t.story),{},{settings:K}),e);case w.i2:return(0,S.t8)("selectedCard",e.selectedCard===t.card?"":t.card,e);case w.IY:var $=t.control,X=t.value;return(0,S.t8)("controls.".concat($),X,e);case w.Zf:var J=t.resource,V=e.currentStory&&e.currentStory.settings||{};return(0,S.qC)((0,S.t8)("resource",J),(0,S.t8)("currentStory.settings.storyTitle",V.storyTitle||J.name))(e);case w.si:case w.KT:return(0,S.zN)("errors.save",e);case w.SW:return(0,S.t8)("errors.save",v()(t.error),e);case w.Mk:return(0,S.t8)("isCollapsed",!e.isCollapsed,e);case w.NZ:var ee=o()(e,"currentStory.settings.".concat(t.option));return(0,S.t8)("currentStory.settings.".concat(t.option),!ee,e);case w.c:var te=!e.isSettingsEnabled,re=e.currentStory&&e.currentStory.settings||{};return(0,S.qC)((0,S.t8)("isSettingsEnabled",te),(0,S.t8)("oldSettings",te?re:{}),(0,S.t8)("currentStory.settings",te?E({},re):t.withSave?re:e.oldSettings))(e);case w.wb:var ne=t.path,oe=t.mode,ce=t.element,ie=(0,j.Ll)("currentStory.".concat(ne),e),ae=o()(e,ie);return m()(ae)&&m()(ce)&&"merge"===oe&&(ce=E(E({},ae),ce)),b()(ae)&&b()(ce)&&"merge"===oe&&(ce=[].concat(C(ae),C(ce))),(0,S.t8)(ie,ce,e);case w.km:return(0,S.t8)("currentStory.settings.".concat(t.prop),t.value,e);case w.un:if(t.columnId){var ue=f()(e.currentStory.sections,(function(e){return f()(e.contents,{id:t.columnId})}));return ue&&f()(ue.contents,{id:t.columnId})?(0,S.t8)("currentPage",E(E({},e.currentPage),{},{columns:E(E({},e.currentPage.columns),{},I({},ue.id,t.columnId))}),e):e}return(0,S.t8)("currentPage",E(E({},e.currentPage),{},{sectionId:t.sectionId}),e);case w.Cx:var le=t.status,se=t.target,pe=t.selector,fe=void 0===pe?"":pe,de=t.hideContent,me=void 0!==de&&de,ye=t.path,be=le?{target:se,selector:fe,hideContent:me,path:ye}:void 0;return(0,S.t8)("focusedContent",be,e);case w.jr:return(0,S.t8)("pendingChanges",t.value,e);case w.ZY:return(0,S.t8)("updateUrlOnScroll",t.value,e);case w.EQ:return(0,S.t8)("mediaEditorSettings",t.mediaEditorSettings,e);case w.W$:if(t.sectionId){var ge=f()(e.currentStory.sections,(function(e){return f()(e.contents,{id:t.showContentId})}));return ge&&f()(ge.contents,{id:t.showContentId})?(0,S.t8)("currentStory",E(E({},e.currentStory),{},{sections:(0,j.eI)(e.currentStory.sections,t)}),e):e}return e;case w.mk:return(0,S.t8)("drawOptions",t.drawOptions,e);default:return e}}},31398:(e,t,r)=>{"use strict";r.d(t,{d:()=>o});var n=r(97395),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.title,r=void 0===t?"notification.warning":t,o=e.autoDismiss,c=void 0===o?6:o,i=e.position,a=void 0===i?"tc":i,u=e.message,l=void 0===u?"Error":u;return(0,n.vU)({title:r,autoDismiss:c,position:a,message:l})}}}]);