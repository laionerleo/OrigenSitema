(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"27Ei":function(e,t,r){"use strict";e.exports=class{constructor({uri:e,name:t,type:r}){this.uri=e,this.name=t,this.type=r}}},Dtfp:function(e,t,r){"use strict";const n=r("27Ei");e.exports=function(e){return"undefined"!==typeof File&&e instanceof File||"undefined"!==typeof Blob&&e instanceof Blob||e instanceof n}},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),o=r("7KCV");t.__esModule=!0,t.default=void 0;var i=o(r("q1tI")),s=r("elyg"),a=r("nOHt"),c=r("vNVm"),u={};function f(e,t,r,n){if((0,s.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(o?"%"+o:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,r=(0,a.useRouter)(),o=r&&r.pathname||"/",l=i.default.useMemo((function(){var t=(0,s.resolveHref)(o,e.href,!0),r=n(t,2),i=r[0],a=r[1];return{href:i,as:e.as?(0,s.resolveHref)(o,e.as):a||i}}),[o,e.href,e.as]),p=l.href,h=l.as,d=e.children,y=e.replace,b=e.shallow,g=e.scroll,E=e.locale;"string"===typeof d&&(d=i.default.createElement("a",null,d));var m=i.Children.only(d),v=m&&"object"===typeof m&&m.ref,w=(0,c.useIntersection)({rootMargin:"200px"}),O=n(w,2),C=O[0],j=O[1],S=i.default.useCallback((function(e){C(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,C]);(0,i.useEffect)((function(){var e=j&&t&&(0,s.isLocalURL)(p),n="undefined"!==typeof E?E:r&&r.locale,o=u[p+"%"+h+(n?"%"+n:"")];e&&!o&&f(r,p,h,{locale:n})}),[h,p,j,E,t,r]);var L={ref:S,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(r))&&(e.preventDefault(),null==a&&(a=n.indexOf("#")<0),t[o?"replace":"push"](r,n,{shallow:i,locale:c}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,r,p,h,y,b,g,E)},onMouseEnter:function(e){(0,s.isLocalURL)(p)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),f(r,p,h,{priority:!0}))}};return(e.passHref||"a"===m.type&&!("href"in m.props))&&(L.href=(0,s.addBasePath)((0,s.addLocale)(h,"undefined"!==typeof E?E:r&&r.locale,r&&r.defaultLocale))),i.default.cloneElement(m,L)};t.default=l},fvjI:function(e,t,r){"use strict";const n=r("Dtfp");e.exports=function(e,t="",r=n){const o=new Map,i=new Map;return{clone:function e(t,n,s){let a=t;if(r(t)){a=null;const e=o.get(t);e?e.push(n):o.set(t,[n])}else{const r=Array.isArray(t)||"undefined"!==typeof FileList&&t instanceof FileList,o=t&&t.constructor===Object;if(r||o){const o=i.has(t);if(o?a=i.get(t):(a=r?[]:{},i.set(t,a)),!s.has(t)){const i=n?n+".":"",c=new Set(s).add(t);if(r){let r=0;for(const n of t){const t=e(n,i+r++,c);o||a.push(t)}}else for(const r in t){const n=e(t[r],i+r,c);o||(a[r]=n)}}}}return a}(e,t,new Set),files:o}}},jRMg:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return S})),r.d(t,"c",(function(){return ne})),r.d(t,"d",(function(){return oe})),r.d(t,"e",(function(){return $}));var n=r("q1tI"),o=r.n(n),i=r("+qE3"),s=r.n(i),a=r("Dtfp"),c=r.n(a),u=r("fvjI"),f=r.n(u),l=Object.prototype.hasOwnProperty;function p(e,t,r){for(r of e.keys())if(h(r,t))return r}function h(e,t){var r,n,o;if(e===t)return!0;if(e&&t&&(r=e.constructor)===t.constructor){if(r===Date)return e.getTime()===t.getTime();if(r===RegExp)return e.toString()===t.toString();if(r===Array){if((n=e.length)===t.length)for(;n--&&h(e[n],t[n]););return-1===n}if(r===Set){if(e.size!==t.size)return!1;for(n of e){if((o=n)&&"object"===typeof o&&!(o=p(t,o)))return!1;if(!t.has(o))return!1}return!0}if(r===Map){if(e.size!==t.size)return!1;for(n of e){if((o=n[0])&&"object"===typeof o&&!(o=p(t,o)))return!1;if(!h(n[1],t.get(o)))return!1}return!0}if(r===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(r===DataView){if((n=e.byteLength)===t.byteLength)for(;n--&&e.getInt8(n)===t.getInt8(n););return-1===n}if(ArrayBuffer.isView(e)){if((n=e.byteLength)===t.byteLength)for(;n--&&e[n]===t[n];);return-1===n}if(!r||"object"===typeof e){for(r in n=0,e){if(l.call(e,r)&&++n&&!l.call(t,r))return!1;if(!(r in t)||!h(e[r],t[r]))return!1}return Object.keys(t).length===n}}return e!==e&&t!==t}const d=o.a.createContext(null);d.displayName="ClientContext";const y=e=>c()(e)||null!==e&&"object"===typeof e&&"function"===typeof e.pipe||null!==e&&"object"===typeof e&&"function"===typeof e.stream;function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function g(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(e){if("string"===typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var E=function(){function e(e){var t=this;0===e.length&&e.push((function(e,t){return t()}));for(var r,n=function(){var e,n=r.value;if("function"!==typeof n)throw new Error("GraphQLClient Middleware: middleware has to be of type `function`");t.run=(e=t.run,function(r,o){e(r,(function(){n.apply(t,[r,o.bind.apply(o,[null,r])])}))})},o=g(e);!(r=o()).done;)n()}return e.prototype.run=function(e,t){t.apply(this,e)},e}();var m=Object.defineProperty,v=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,C=(e,t,r)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,j=(e,t)=>{for(var r in t||(t={}))w.call(t,r)&&C(e,r,t[r]);if(v)for(var r of v(t))O.call(t,r)&&C(e,r,t[r]);return e};class S{constructor(e){if(!e)throw new Error("GraphQLClient: config is required as first parameter");this.fullWsTransport=e.fullWsTransport,"function"===typeof e.subscriptionClient?this.subscriptionClient=e.subscriptionClient():this.subscriptionClient=e.subscriptionClient,this.verifyConfig(e),this.cache=e.cache,this.headers=e.headers||{},this.ssrMode=e.ssrMode,this.ssrPromises=[],this.url=e.url,this.fetch=e.fetch||("undefined"!==typeof fetch&&fetch?fetch.bind(void 0):void 0),this.fetchOptions=e.fetchOptions||{},this.FormData=e.FormData||("undefined"!==typeof FormData?FormData:void 0),this.logErrors=void 0===e.logErrors||e.logErrors,this.onError=e.onError,this.useGETForQueries=!0===e.useGETForQueries,this.middleware=new E(e.middleware||[]),this.mutationsEmitter=new s.a}verifyConfig(e){if(!e.url){if(!this.fullWsTransport)throw new Error("GraphQLClient: config.url is required");if(!this.subscriptionClient)throw new Error("GraphQLClient: subscriptionClient is required")}if(e.fetch&&"function"!==typeof e.fetch)throw new Error("GraphQLClient: config.fetch must be a function");if(("undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement||e.ssrMode)&&!e.fetch&&"function"!==typeof fetch)throw new Error("GraphQLClient: fetch must be polyfilled or passed in new GraphQLClient({ fetch })");if(e.ssrMode&&!e.cache)throw new Error("GraphQLClient: config.cache is required when in ssrMode")}setHeader(e,t){return this.headers[e]=t,this}setHeaders(e){return this.headers=e,this}removeHeader(e){return delete this.headers[e],this}logErrorResult({result:e,operation:t}){console.error("GraphQL Hooks Error"),console.groupCollapsed("---\x3e Full Error Details"),console.groupCollapsed("Operation:"),console.log(t),console.groupEnd();const r=e.error;r&&(r.fetchError&&(console.groupCollapsed("FETCH ERROR:"),console.log(r.fetchError),console.groupEnd()),r.httpError&&(console.groupCollapsed("HTTP ERROR:"),console.log(r.httpError),console.groupEnd()),r.graphQLErrors&&r.graphQLErrors.length>0&&(console.groupCollapsed("GRAPHQL ERROR:"),r.graphQLErrors.forEach(e=>console.log(e)),console.groupEnd())),console.groupEnd()}generateResult({fetchError:e,httpError:t,graphQLErrors:r,data:n}){return!!(r&&r.length>0||e||t)?{data:n,error:{fetchError:e,httpError:t,graphQLErrors:r}}:{data:n}}getCacheKey(e,t={}){return{operation:e,fetchOptions:j(j({},this.fetchOptions),t.fetchOptionsOverrides)}}getCache(e){const t=this.cache?this.cache.get(e):null;if(t)return t}saveCache(e,t){this.cache&&this.cache.set(e,t)}getFetchOptions(e,t={}){const r=j(j({method:"POST",headers:j({},this.headers)},this.fetchOptions),t);if("GET"===r.method)return r;const{clone:n,files:o}=f()(e,"",y),i=JSON.stringify(n);if(o.size){if(!this.FormData)throw new Error("GraphQLClient: FormData must be polyfilled or passed in new GraphQLClient({ FormData })");const e=new this.FormData;e.append("operations",i);const t={};let n=0;o.forEach(e=>{t[++n]=e}),e.append("map",JSON.stringify(t)),n=0,o.forEach((t,r)=>{e.append(""+ ++n,r,r.name)}),r.body=e}else r.headers["Content-Type"]="application/json",r.body=i;return r}request(e,t){const r=[],n=e=>r.push(e);return new Promise((o,i)=>this.middleware.run({operation:e,client:this,addResponseHook:n,resolve:o,reject:i},({operation:e})=>{const n=e=>{return r.length>0?(t=r,e=>t.reduce((e,t)=>e.then(t),Promise.resolve(e)))(e):e;var t};return this.fullWsTransport?this.requestViaWS(e).then(n).then(o).catch(i):this.url?this.requestViaHttp(e,t).then(n).then(o).catch(i):void i(new Error("GraphQLClient: config.url is required"))}))}requestViaHttp(e,t={}){let r=this.url;const n=this.getFetchOptions(e,t.fetchOptionsOverrides);if("GET"===n.method){r=r+"?"+Object.entries(e).filter(([,e])=>!!e).map(([e,t])=>("variables"!==e&&"extensions"!==e||(t=JSON.stringify(t)),`${e}=${encodeURIComponent(t)}`)).join("&")}return this.fetch(r,n).then(e=>e.ok?e.json().then(({errors:r,data:n})=>this.generateResult({graphQLErrors:r,data:"function"===typeof t.responseReducer&&t.responseReducer(n,e)||n})):e.text().then(t=>{const{status:r,statusText:n}=e;return this.generateResult({httpError:{status:r,statusText:n,body:t}})})).catch(e=>this.generateResult({fetchError:e})).then(t=>(t.error&&(this.logErrors&&this.logErrorResult({result:t,operation:e}),this.onError&&this.onError({result:t,operation:e})),t))}requestViaWS(e){return new Promise((t,r)=>{let n;try{const o=this.createSubscription(e).subscribe({next:e=>{n=e},error:r,complete:()=>{o.unsubscribe(),t(n)}})}catch(o){r(o)}})}createSubscription(e){if(!this.subscriptionClient)throw new Error("No SubscriptionClient! Please set in the constructor.");return"function"===typeof this.subscriptionClient.subscribe?{subscribe:t=>({unsubscribe:this.subscriptionClient.subscribe(e,t)})}:this.subscriptionClient.request(e)}}Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var L=Object.defineProperty,R=Object.defineProperties,M=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,k=(e,t,r)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,q=(e,t)=>{for(var r in t||(t={}))T.call(t,r)&&k(e,r,t[r]);if(P)for(var r of P(t))D.call(t,r)&&k(e,r,t[r]);return e},A=(e,t)=>R(e,M(t));const I="RESET_STATE",Q="LOADING",G="CACHE_HIT",H="REQUEST_RESULT";function F(e,t){switch(t.type){case I:return t.initialState;case Q:return e.error?A(q({},t.initialState),{data:e.data,loading:!0}):e.loading?e:A(q({},e),{loading:!0});case G:return e.cacheHit&&!t.resetState?e:A(q({},t.result),{cacheHit:!0,loading:!1});case H:return A(q({},t.result),{data:e.data&&t.result.data&&t.updateData?t.updateData(e.data,t.result.data):t.result.data,cacheHit:!1,loading:!1});default:return e}}function x(e,t={}){if("string"!==typeof e)throw new Error("Your query must be a string. If you are using the `gql` template literal from graphql-tag, remove it from your query.");const r=o.a.useContext(d),n=t.client||r;if(null===n||void 0===n)throw new Error("A client must be provided in order to use the useClientRequest hook.");const i=o.a.useRef(!0),s=o.a.useRef(null),a={query:e,variables:t.variables,operationName:t.operationName,persisted:t.persisted};(t.persisted||n.useGETForQueries&&!t.isMutation)&&(t.fetchOptionsOverrides=A(q({},t.fetchOptionsOverrides),{method:"GET"}));const c=n.getCacheKey(a,t),u=t.isMutation||t.isManual||t.skip,f=!t.skipCache&&n.cache&&c?n.cache.get(c):null,l=A(q({},f),{cacheHit:!!f,loading:!u&&!f}),[p,y]=o.a.useReducer(F,l),b=JSON.stringify(c);o.a.useEffect(()=>{t.updateData||y({type:I,initialState:l})},[b]),o.a.useEffect(()=>(i.current=!0,()=>{i.current=!1}),[]);const g=function(e,t){const r=o.a.useRef();return h(t,r.current)||(r.current=t),o.a.useCallback(e,r.current)}(r=>{const o=q(q({},t),r),c=A(q({},a),{variables:o.variables,operationName:o.operationName});if(!i.current)return Promise.resolve({error:{fetchError:new Error("fetchData should not be called after hook unmounted")},loading:!1,cacheHit:!1});const u=n.getCacheKey(c,o);s.current=u;const f=o.skipCache?null:n.getCache(u);return f?(y({type:G,result:f,resetState:b!==JSON.stringify(p.cacheKey)}),Promise.resolve(f)):(y({type:Q,initialState:l}),n.request(c,o).then(r=>{if(o.updateData&&"function"!==typeof o.updateData)throw new Error("options.updateData must be a function");const a=q({},r);if(o.useCache&&(a.useCache=!0,a.cacheKey=u,n.ssrMode)){const e={error:a.error,data:o.updateData?o.updateData(p.data,a.data):a.data};n.saveCache(u,e)}return i.current&&u===s.current&&y({type:H,updateData:o.updateData,result:a}),t.isMutation&&n.mutationsEmitter.emit(e,A(q({},c),{mutation:e,result:a})),r}))},[n,t,a]);o.a.useEffect(()=>{p.useCache&&!n.ssrMode&&n.saveCache(p.cacheKey,p)},[n,p]);return[g,p,(e={})=>y({type:I,initialState:q(q({},l),e)})]}var N=Object.defineProperty,J=Object.defineProperties,_=Object.getOwnPropertyDescriptors,K=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,z=(e,t,r)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,W=(e,t)=>{for(var r in t||(t={}))U.call(t,r)&&z(e,r,t[r]);if(K)for(var r of K(t))V.call(t,r)&&z(e,r,t[r]);return e};const B={useCache:!0,skip:!1,throwErrors:!1};function $(e,t={}){const r=W(W({},B),t),n=o.a.useContext(d),i=t.client||n,[s,a]=o.a.useState(!1),[c,u]=x(e,r);if(!i)throw new Error("useQuery() requires a client to be passed in the options or as a context value");if(i.ssrMode&&!1!==t.ssr&&!s&&!t.skipCache&&!t.skip){if(!u.data&&!u.error){const e=c();i.ssrPromises.push(e)}a(!0)}const f=JSON.stringify(r);o.a.useEffect(()=>{r.skip||c()},[e,f]),o.a.useEffect(()=>{if(u.error&&r.throwErrors)throw u.error},[u.error,r.throwErrors]);const l=o.a.useCallback((e={})=>c(W({skipCache:!0,updateData:(e,t)=>t},e)),[c]);return o.a.useEffect((function(){const e=function(e){var t=Array.isArray(e)?e:[e],r={};return t.forEach((function(e){if(null!=e){var t=typeof e;if("string"===t)r[e]={};else if("object"===t){var n=e.filter,o=e.mutation;r[o]={filter:n}}}})),r}(t.refetchAfterMutations),r=Object.keys(e),n=({mutation:t,variables:r})=>{const{filter:n}=e[t];(!n||r&&n(r))&&l()};return r.forEach(e=>{i.mutationsEmitter.on(e,n)}),()=>{r.forEach(e=>{i.mutationsEmitter.removeListener(e,n)})}}),[t.refetchAfterMutations,l,i.mutationsEmitter]),p=W({},u),J(p,_({refetch:l}));var p}var Y=Object.defineProperty,X=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,te=(e,t,r)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,re=(e,t)=>{for(var r in t||(t={}))Z.call(t,r)&&te(e,r,t[r]);if(X)for(var r of X(t))ee.call(t,r)&&te(e,r,t[r]);return e};const ne=(e,t={})=>x(e,re({useCache:!0,isManual:!0},t)),oe=(e,t={})=>x(e,re({isMutation:!0},t))},vNVm:function(e,t,r){"use strict";var n=r("J4zp"),o=r("AroE");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!a,o=(0,i.useRef)(),u=(0,i.useState)(!1),f=n(u,2),l=f[0],p=f[1],h=(0,i.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),r||l||e&&e.tagName&&(o.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,i=n.observer,s=n.elements;return s.set(e,t),i.observe(e),function(){i.unobserve(e),0===s.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[r,t,l]);return(0,i.useEffect)((function(){a||l||(0,s.default)((function(){return p(!0)}))}),[l]),[h,l]};var i=r("q1tI"),s=o(r("0G5g")),a="undefined"!==typeof IntersectionObserver;var c=new Map}}]);