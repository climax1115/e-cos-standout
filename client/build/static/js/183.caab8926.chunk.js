(self.webpackChunkclient=self.webpackChunkclient||[]).push([[183],{2183:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(1413),o=r(9439),i=r(2791),a=r(1363),s=r(7689),c=r(1243),u=r(9331),l=r(184);var f=function(){var e=(0,s.s0)(),t=(0,i.useState)(""),r=(0,o.Z)(t,2),f=r[0],p=r[1],d=(0,i.useContext)(u.St).user,b=(0,i.useState)({}),y=(0,o.Z)(b,2),m=y[0],h=y[1],v=(0,i.useState)(!1),O=(0,o.Z)(v,2),g=O[0],j=O[1],x=(0,i.useState)(""),w=(0,o.Z)(x,2),k=w[0],P=w[1],S=(0,i.useState)(""),_=(0,o.Z)(S,2),T=_[0],N=_[1],E=(0,i.useState)(!1),I=(0,o.Z)(E,2),C=I[0],Z=I[1],A=(0,i.useState)(!1),D=(0,o.Z)(A,2),R=D[0],W=D[1],z=(0,i.useState)(!1),U=(0,o.Z)(z,2),F=U[0],G=U[1];return(0,i.useEffect)((function(){document.title="Update Orders | Stand Out"}),[]),(0,i.useEffect)((function(){if(""!==k){var e=setTimeout((function(){P("")}),3400),t=setTimeout((function(){Z(!0)}),1),r=setTimeout((function(){Z(!1)}),3e3);return function(){clearTimeout(e),clearTimeout(t),clearTimeout(r)}}}),[k]),(0,i.useEffect)((function(){if(""!==T){var e=setTimeout((function(){N("")}),3400),t=setTimeout((function(){Z(!0)}),1),r=setTimeout((function(){Z(!1)}),3e3);return function(){clearTimeout(e),clearTimeout(t),clearTimeout(r)}}}),[T]),(0,i.useEffect)((function(){"undefined"!==typeof d.name?c.Z.get("/user/is-admin").then((function(t){if(200!==t.status)throw new Error;"admin"!==t.data&&e("/404")})).catch((function(e){console.log(e)})):e("/404",{replace:!0})}),[d.name,e]),(0,l.jsxs)("div",{children:[R&&(0,l.jsx)("div",{className:"loader-container",children:(0,l.jsx)("div",{className:"loader"})}),(0,l.jsxs)("div",{className:"update-order",children:[""!==k&&(0,l.jsxs)("div",{className:C?"msg msg--visible":"msg",children:[(0,l.jsx)(a.G,{icon:["far","times-circle"],className:"icon",onClick:function(){N("")}}),(0,l.jsx)("p",{children:k})]}),""!==T&&(0,l.jsxs)("div",{className:C?"msg msg--visible":"msg",children:[(0,l.jsx)(a.G,{icon:["far","check-circle"],className:"icon",onClick:function(){N("")}}),(0,l.jsx)("p",{children:T})]}),(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==f&&(W(!0),c.Z.get("/user/delivered/".concat(f)).then((function(e){if(200!==e.status)throw new Error;h(e.data),W(!1),j(e.data.delivered)})).catch((function(e){W(!1),P("No orders found")})))},children:[(0,l.jsx)("input",{className:"update-order__search",placeholder:"Search with order id",value:f,onChange:function(e){return p(e.target.value)}}),(0,l.jsx)("button",{type:"submit",children:(0,l.jsx)(a.G,{icon:"search",className:"update-order__search-icon"})})]}),"undefined"!==typeof m._id?(0,l.jsxs)("div",{className:"update-order__order",children:[(0,l.jsxs)("div",{className:"update-order__order__delivered",children:[(0,l.jsx)("p",{children:"delivered"}),(0,l.jsx)("input",{type:"checkbox",checked:m.delivered,onChange:function(){h((function(e){return(0,n.Z)((0,n.Z)({},e),{},{delivered:!e.delivered})}))}})]}),g!==m.delivered&&(0,l.jsx)("div",{children:F?(0,l.jsx)("button",{type:"button",className:"update-order__button--loading",children:(0,l.jsx)("div",{className:"update-order__button__loading"})}):(0,l.jsx)("button",{onClick:function(){G(!0),c.Z.put("/user/order",{order:m}).then((function(e){if(200!==e.status)throw new Error;p(""),h({}),G(!1),N("order updated successfully")})).catch((function(e){P("something went wrong. please try again"),G(!1)}))},children:"update"})})]}):(0,l.jsx)("p",{className:"update-order__no-order",children:"search for orders"})]})]})}},1363:function(e,t,r){"use strict";r.d(t,{G:function(){return O}});var n=r(942),o=r(2007),i=r.n(o),a=r(2791);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var y=["style"];var m=!1;try{m=!0}catch(j){}function h(e){return e&&"object"===u(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===u(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function v(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?l({},e,t):{}}var O=a.forwardRef((function(e,t){var r=e.icon,o=e.mask,i=e.symbol,a=e.className,s=e.title,u=e.titleId,f=e.maskId,d=h(r),b=v("classes",[].concat(p(function(e){var t,r=e.beat,n=e.fade,o=e.beatFade,i=e.bounce,a=e.shake,s=e.flash,c=e.spin,u=e.spinPulse,f=e.spinReverse,p=e.pulse,d=e.fixedWidth,b=e.inverse,y=e.border,m=e.listItem,h=e.flip,v=e.size,O=e.rotation,g=e.pull,j=(l(t={"fa-beat":r,"fa-fade":n,"fa-beat-fade":o,"fa-bounce":i,"fa-shake":a,"fa-flash":s,"fa-spin":c,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":p,"fa-fw":d,"fa-inverse":b,"fa-border":y,"fa-li":m,"fa-flip":!0===h,"fa-flip-horizontal":"horizontal"===h||"both"===h,"fa-flip-vertical":"vertical"===h||"both"===h},"fa-".concat(v),"undefined"!==typeof v&&null!==v),l(t,"fa-rotate-".concat(O),"undefined"!==typeof O&&null!==O&&0!==O),l(t,"fa-pull-".concat(g),"undefined"!==typeof g&&null!==g),l(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(j).map((function(e){return j[e]?e:null})).filter((function(e){return e}))}(e)),p(a.split(" ")))),y=v("transform","string"===typeof e.transform?n.Qc.transform(e.transform):e.transform),j=v("mask",h(o)),x=(0,n.qv)(d,c(c(c(c({},b),y),j),{},{symbol:i,title:s,titleId:u,maskId:f}));if(!x)return function(){var e;!m&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",d),null;var w=x.abstract,k={ref:t};return Object.keys(e).forEach((function(t){O.defaultProps.hasOwnProperty(t)||(k[t]=e[t])})),g(w[0],k)}));O.displayName="FontAwesomeIcon",O.propTypes={beat:i().bool,border:i().bool,beatFade:i().bool,bounce:i().bool,className:i().string,fade:i().bool,flash:i().bool,mask:i().oneOfType([i().object,i().array,i().string]),maskId:i().string,fixedWidth:i().bool,inverse:i().bool,flip:i().oneOf([!0,!1,"horizontal","vertical","both"]),icon:i().oneOfType([i().object,i().array,i().string]),listItem:i().bool,pull:i().oneOf(["right","left"]),pulse:i().bool,rotation:i().oneOf([0,90,180,270]),shake:i().bool,size:i().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i().bool,spinPulse:i().bool,spinReverse:i().bool,symbol:i().oneOfType([i().bool,i().string]),title:i().string,titleId:i().string,transform:i().oneOfType([i().string,i().object]),swapOpacity:i().bool},O.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var g=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof r)return r;var o=(r.children||[]).map((function(r){return e(t,r)})),i=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=n.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),o=b(t.slice(0,n)),i=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=i:e[o]=i,e}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[b(t)]=n}return e}),{attrs:{}}),a=n.style,s=void 0===a?{}:a,u=f(n,y);return i.attrs.style=c(c({},i.attrs.style),s),t.apply(void 0,[r.tag,c(c({},i.attrs),u)].concat(p(o)))}.bind(null,a.createElement)},888:function(e,t,r){"use strict";var n=r(9047);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},2007:function(e,t,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4942:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(9142);function o(e,t,r){return(t=(0,n.Z)(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},1413:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(4942);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}}}]);
//# sourceMappingURL=183.caab8926.chunk.js.map