(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1205],{75140:(t,e,r)=>{"use strict";r.d(e,{Z:()=>B});var o=r(24852),n=r.n(o),i=r(45697),l=r.n(i),p=r(80681),c=r(50966),s=r(38560),u=r(27418),a=r.n(u);function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function g(t,e){if(e&&("object"===f(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return h(t)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}function v(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(p,t);var e,r,o,i,l=(o=p,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(o);if(i){var r=m(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return g(this,t)});function p(){var t;y(this,p);for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return v(h(t=l.call.apply(l,[this].concat(r))),"getStyle",(function(){var e={cursor:t.props.disabled?"not-allowed":"pointer",margin:0,padding:0,display:"inline-block"};return t.props.image?a()(e,{overflow:"hidden"}):a()(e,{height:"48px",width:"48px",border:"1px solid grey",borderRadius:"4px",backgroundColor:"rgb(250, 250, 250)"}),a()(e,t.props.style),e})),t}return e=p,(r=[{key:"render",value:function(){return n().createElement("img",{className:this.props.className,id:this.props.id,title:this.props.tooltip,style:this.getStyle(),src:this.props.image,onClick:this.props.disabled?null:this.props.onClick})}}])&&b(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),p}(n().Component);v(O,"propTypes",{id:l().string,image:l().string,onClick:l().func,style:l().object,disabled:l().bool,tooltip:l().string,className:l().string}),v(O,"defaultProps",{disabled:!1,tooltip:null,className:void 0});const w=O;function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function P(){return P=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},P.apply(this,arguments)}function k(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function C(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function S(t,e){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},S(t,e)}function _(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return x(t)}function x(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}function T(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&S(t,e)}(u,t);var e,r,o,i,l=(o=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(o);if(i){var r=E(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return _(this,t)});function u(){var t;k(this,u);for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return T(x(t=l.call.apply(l,[this].concat(r))),"onClick",(function(){t.props.onClick(!t.props.pressed,t.props.options)})),T(x(t),"renderNormalButton",(function(){return n().createElement(s.Z,P({id:t.props.id},t.props.btnConfig,{onClick:t.onClick,bsStyle:t.props.pressed?t.props.pressedStyle:t.props.defaultStyle,style:t.props.style}),t.props.glyphicon?n().createElement(p.Glyphicon,{glyph:t.props.glyphicon}):null,t.props.glyphicon&&t.props.text&&!n().isValidElement(t.props.text)?" ":null,t.props.text,t.props.help)})),T(x(t),"renderImageButton",(function(){return n().createElement(w,{id:t.props.id,image:t.props.image,onClick:t.onClick,style:t.props.style})})),T(x(t),"addTooltip",(function(e){return n().createElement(c.Z,{placement:t.props.tooltipPlace,key:"overlay-trigger."+t.props.id,overlay:t.props.tooltip},e)})),t}return e=u,(r=[{key:"render",value:function(){var t="normal"===this.props.btnType?this.renderNormalButton():this.renderImageButton();return this.props.tooltip?this.addTooltip(t):t}}])&&C(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(n().Component);T(R,"propTypes",{id:l().string,btnConfig:l().object,options:l().object,text:l().oneOfType([l().string,l().element]),help:l().oneOfType([l().string,l().element]),glyphicon:l().string,pressed:l().bool,onClick:l().func,tooltip:l().element,tooltipPlace:l().string,style:l().object,btnType:l().oneOf(["normal","image"]),image:l().string,pressedStyle:l().string,defaultStyle:l().string}),T(R,"defaultProps",{onClick:function(){},options:{},pressed:!1,tooltipPlace:"top",style:{},btnType:"normal",pressedStyle:"primary",defaultStyle:"default"});const B=R},50966:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var o=r(61365),n=r(80681);const i=(0,o.Z)(n.OverlayTrigger)},61365:(t,e,r)=>{"use strict";r.d(e,{Z:()=>p});var o=r(24852),n=r.n(o),i=r(37275);function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},l.apply(this,arguments)}const p=function(t){return function(e){return n().createElement(t,l({},e,{container:document.querySelector("."+(i.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body}))}}},63277:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>s});var o=r(24852),n=r.n(o),i=r(80681),l=r(27418),p=r.n(l),c=r(75140);const s={ExpanderPlugin:p()(c.Z,{Toolbar:{name:"expand",position:1e4,alwaysVisible:!0,tooltip:"expandtoolbar.tooltip",showWhen:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.items,r=void 0===e?[]:e;return r.filter((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"expand"!==!t.name&&!t.alwaysVisible})).length>1},icon:n().createElement(i.Glyphicon,{glyph:"option-horizontal"}),toggle:!0,toggleControl:"toolbar",toggleProperty:"expanded",priority:1}}),reducers:{}}}}]);