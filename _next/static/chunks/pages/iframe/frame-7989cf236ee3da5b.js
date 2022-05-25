(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[385],{1386:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/iframe/frame",function(){return n(6521)}])},638:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},u=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),u.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=o.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};a=e,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](a):a instanceof l)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=u({},r,e));var a,l;var s=r=u({},r,t);if(s.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(s.suspense)return n(s);r.loadableGenerated&&delete(r=u({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,i(n,r);delete r.ssr}return n(r)};a(n(7294));var o=a(n(4302));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}},6319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var u=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=u},4302:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},l=n(7161),s=n(6319);var c=[],f=[],d=!1;function _(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var p=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,u;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var u=this;this._timeout=setTimeout((function(){u._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),u&&r(t,u),e}();function b(e){return function(e,t){var n=function(){if(!u){var t=new p(e,r);u={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return u.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=i.default.lazy(r.loader));var u=null;if(!d&&!r.suspense){var a=r.webpack?r.webpack():r.modules;a&&f.push((function(e){var t=!0,r=!1,u=void 0;try{for(var o,i=a[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var l=o.value;if(-1!==e.indexOf(l))return n()}}catch(s){r=!0,u=s}finally{try{t||null==i.return||i.return()}finally{if(r)throw u}}}))}var c=r.suspense?function(e,t){return i.default.createElement(r.lazy,o({},e,{ref:t}))}:function(e,t){n();var o=i.default.useContext(s.LoadableContext),a=l.useSubscription(u);return i.default.useImperativeHandle(t,(function(){return{retry:u.retry}}),[]),o&&Array.isArray(r.modules)&&r.modules.forEach((function(e){o(e)})),i.default.useMemo((function(){return a.loading||a.error?i.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:u.retry}):a.loaded?i.default.createElement(function(e){return e&&e.__esModule?e.default:e}(a.loaded),e):null}),[e,a])};return c.preload=function(){return!r.suspense&&n()},c.displayName="LoadableComponent",i.default.forwardRef(c)}(_,e)}function m(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return m(e,t)}))}b.preloadAll=function(){return new Promise((function(e,t){m(c).then(e,t)}))},b.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return d=!0,t()};m(f,e).then(n,n)}))},window.__NEXT_PRELOADREADY=b.preloadReady;var y=b;t.default=y},6521:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(5893),u=n(5152),o=n(214),a=n.n(o),i=(0,u.default)((function(){return Promise.all([n.e(637),n.e(797)]).then(n.bind(n,7797))}),{loadableGenerated:{webpack:function(){return[7797]}},ssr:!1});function l(){return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:a().container,children:[(0,r.jsx)("h2",{children:"FRAME"}),(0,r.jsx)(i,{})]})})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},5152:function(e,t,n){e.exports=n(638)},8217:function(e,t,n){"use strict";var r=n(6086),u=n(7294);t.useSubscription=function(e){var t=e.getCurrentValue,n=e.subscribe,o=u.useState((function(){return{getCurrentValue:t,subscribe:n,value:t()}}));e=o[0];var a=o[1];return o=e.value,e.getCurrentValue===t&&e.subscribe===n||(o=t(),a({getCurrentValue:t,subscribe:n,value:o})),u.useDebugValue(o),u.useEffect((function(){function e(){if(!u){var e=t();a((function(u){return u.getCurrentValue!==t||u.subscribe!==n||u.value===e?u:r({},u,{value:e})}))}}var u=!1,o=n(e);return e(),function(){u=!0,o()}}),[t,n]),o}},7161:function(e,t,n){"use strict";e.exports=n(8217)}},function(e){e.O(0,[774,888,179],(function(){return t=1386,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=frame-7989cf236ee3da5b.js.map