_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[54],{"2kOW":function(e,n,t){"use strict";t("q1tI");var i=t("17x9"),a=t.n(i),r=t("TCCB"),d=function(e){var n=e.children,t=e.failed,i=void 0===t?null:t,a=e.permission,d=void 0===a?null:a,o=e.user,u=(void 0===o?null:o)||Object(r.c)();return(null===u||void 0===u?void 0:u.permissions.includes(d))?n:i};d.propTypes={children:a.a.node,permission:a.a.string,failed:a.a.node},n.a=d},AaLZ:function(e,n,t){"use strict";var i=t("nKUr"),a=(t("q1tI"),t("qtta")),r=t("JrXF");n.a=function(){return Object(i.jsx)(r.a,{closeable:!1,color:"bg-red-500 text-white",icon:Object(i.jsx)(a.c,{className:"mr-2"}),children:"\xc1rea restringida."})}},FNPF:function(e,n,t){},Ht4S:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/areas",function(){return t("itGN")}])},IGOO:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i,a,r=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}();n.confirmAlert=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",n=document.createElementNS(e,"feGaussianBlur");n.setAttribute("stdDeviation","0.3");var t=document.createElementNS(e,"filter");t.setAttribute("id","gaussian-blur"),t.appendChild(n);var i=document.createElementNS(e,"svg");i.setAttribute("id","react-confirm-alert-firm-svg"),i.setAttribute("class","react-confirm-alert-svg"),i.appendChild(t),document.body.appendChild(i)}(),function(e){var n=document.getElementById("react-confirm-alert");n||(document.body.children[0].classList.add("react-confirm-alert-blur"),(n=document.createElement("div")).id="react-confirm-alert",document.body.appendChild(n)),(0,c.render)(o.default.createElement(E,e),n)}(e)};var d=t("q1tI"),o=l(d),u=l(t("17x9")),c=t("i8i4");function l(e){return e&&e.__esModule?e:{default:e}}function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function b(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}var E=(a=i=function(e){function n(){var e,t,i;s(this,n);for(var a=arguments.length,r=Array(a),d=0;d<a;d++)r[d]=arguments[d];return t=i=b(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(r))),i.handleClickButton=function(e){e.onClick&&e.onClick(),i.close()},i.handleClickOverlay=function(e){var n=i.props,t=n.closeOnClickOutside,a=n.onClickOutside,r=e.target===i.overlay;t&&r&&(a(),i.close())},i.close=function(){var e=i.props.afterClose;p(),m(),f(e)},i.keyboardClose=function(e){var n=i.props,t=n.closeOnEscape,a=n.onKeypressEscape,r=n.keyCodeForClose,d=e.keyCode,o=27===d;r.includes(d)&&i.close(),t&&o&&(a(e),i.close())},i.componentDidMount=function(){document.addEventListener("keydown",i.keyboardClose,!1)},i.componentWillUnmount=function(){document.removeEventListener("keydown",i.keyboardClose,!1),i.props.willUnmount()},i.renderCustomUI=function(){var e=i.props,n=e.title,t=e.message,a=e.buttons;return(0,e.customUI)({title:n,message:t,buttons:a,onClose:i.close})},b(i,t)}return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),r(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.title,i=n.message,a=n.buttons,r=n.childrenElement,d=n.customUI,u=n.overlayClassName;return o.default.createElement("div",{className:"react-confirm-alert-overlay "+u,ref:function(n){return e.overlay=n},onClick:this.handleClickOverlay},o.default.createElement("div",{className:"react-confirm-alert"},d?this.renderCustomUI():o.default.createElement("div",{className:"react-confirm-alert-body"},t&&o.default.createElement("h1",null,t),i,r(),o.default.createElement("div",{className:"react-confirm-alert-button-group"},a.map((function(n,t){return o.default.createElement("button",{key:t,onClick:function(){return e.handleClickButton(n)},className:n.className},n.label)}))))))}}]),n}(d.Component),i.propTypes={title:u.default.string,message:u.default.string,buttons:u.default.array.isRequired,childrenElement:u.default.func,customUI:u.default.func,closeOnClickOutside:u.default.bool,closeOnEscape:u.default.bool,keyCodeForClose:u.default.arrayOf(u.default.number),willUnmount:u.default.func,afterClose:u.default.func,onClickOutside:u.default.func,onKeypressEscape:u.default.func,overlayClassName:u.default.string},i.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,keyCodeForClose:[],willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},a);function f(e){var n=document.getElementById("react-confirm-alert-firm-svg");n&&n.parentNode.removeChild(n),document.body.children[0].classList.remove("react-confirm-alert-blur"),e()}function m(){var e=document.getElementById("react-confirm-alert");e&&((0,c.unmountComponentAtNode)(e),e.parentNode.removeChild(e))}function p(){document.body.classList.remove("react-confirm-alert-body-element")}n.default=E},IqVg:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));t("wd/R");var i=t("FGyW"),a=(t("jDDT"),function(e,n){i.b[e](n,{position:"top-right",autoClose:"error"===e?4e3:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,progress:void 0})})},JrXF:function(e,n,t){"use strict";var i=t("nKUr"),a=t("q1tI"),r=t("Tgqd");n.a=function(e){var n=e.outlined,t=void 0!==n&&n,d=e.raised,o=void 0!==d&&d,u=e.rounded,c=void 0!==u&&u,l=e.borderLeft,s=void 0!==l&&l,b=e.icon,E=void 0===b?null:b,f=e.size,m=void 0===f?"default":f,p=e.closeable,A=void 0===p||p,S=e.color,O=e.children,T=Object(a.useState)(!1),R=T[0],v=T[1],_=[];return _.push(S),t&&_.push("border border-current"),o&&_.push("shadow"),c&&_.push("rounded-lg"),R&&_.push("hidden"),s&&_.push("border-l-4 border-current"),"sm"===m?_.push("p-2"):_.push("p-4"),_=_.join(" "),Object(i.jsxs)("div",{className:"w-full flex items-center justify-start p-4 ".concat(_),children:[Object(i.jsx)("div",{className:"flex-shrink",children:E}),Object(i.jsx)("div",{className:"flex-grow",children:O}),A&&Object(i.jsx)("div",{className:"flex-shrink",children:Object(i.jsx)("button",{className:"ml-auto flex items-center justify-center",onClick:function(){return v(!R)},children:Object(i.jsx)(r.C,{className:"stroke-current h-4 w-4"})})})]})}},L4s6:function(e,n,t){"use strict";var i=t("nKUr");n.a=function(e){var n=e.title,t=e.subtitle,a=e.right,r=void 0===a?null:a;return Object(i.jsx)("div",{className:"section-title w-full mb-6 pt-3",children:Object(i.jsxs)("div",{className:"flex flex-row items-center justify-between mb-4",children:[Object(i.jsxs)("div",{className:"flex flex-col",children:[Object(i.jsx)("div",{className:"text-xs uppercase font-light text-gray-500",children:n}),Object(i.jsx)("div",{className:"text-xl font-bold",children:t})]}),r]})})}},YsTM:function(e,n,t){"use strict";var i=t("h4VS"),a=t("nKUr"),r=(t("q1tI"),t("qGs6")),d=t.n(r),o=t("qKvR"),u=t("qtta"),c=t("JrXF"),l=function(e){var n=e.message;return Object(a.jsx)(c.a,{closeable:!1,color:"bg-red-500 text-white",icon:Object(a.jsx)(u.b,{className:"mr-2"}),children:n})},s=t("AaLZ");function b(){var e=Object(i.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: '#000';\n"]);return b=function(){return e},e}var E=Object(o.css)(b());n.a=function(e){var n=e.children,t=e.loading,i=e.error;if(t)return Object(a.jsx)(d.a,{css:E,size:80,color:"#000"});if(null!=i){var r,o,u=null===(r=i.graphQLErrors)||void 0===r?void 0:r[0];return"FORBIDDEN"===(null===u||void 0===u||null===(o=u.extensions)||void 0===o?void 0:o.code)?Object(a.jsx)(s.a,{}):Object(a.jsx)(l,{message:u.message})}return n}},YwrL:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"h",(function(){return a})),t.d(n,"j",(function(){return r})),t.d(n,"i",(function(){return d})),t.d(n,"a",(function(){return o})),t.d(n,"c",(function(){return u})),t.d(n,"d",(function(){return c})),t.d(n,"e",(function(){return l})),t.d(n,"f",(function(){return s})),t.d(n,"g",(function(){return b}));var i="DD/MM/YYYY hh:mm:ss A",a=["611278e3823cb4b940865386","611278fb823cb4b940865387","6112790c823cb4b940865388","6131802b9873090004263279","61318052987309000426327a","61318089987309000426327b","61b0f4600ec50300045729ac","604120de37b33573a7b70c22","60b95853092ae30004224dd9","61c3bef00d058600044b12cb","6233aaf968373e00042105cf"],r=["614be1657245160004f3b6f6","6154e93ccd0f3600046433ac","604e2602cc5c345ec442f32e","60b959f6092ae30004224ddb","607d9d5c9e67bb0004a1b2da","628e4a415e631700045fcc7e","60576ed8e20e330004db6b19","6056102faddfb40004603a9d","607cad3ec27d670004bd40da","60569e072557ec00044b84af"],d=["6195941a1351a600049b8eea","619594c81351a600049b8eec","61a7fd50834304000486a2d9","61a7fe28834304000486a2e0","61a7ff55834304000486a2e4","61a8002a834304000486a2e9","61a80710834304000486a30b","61a80abb834304000486a312","61a80b36834304000486a313","61a80bac834304000486a314","61a80bfb834304000486a316","61a80c7f834304000486a317","61a80cf2834304000486a318","61a90d41de40b600047346a6","61a90dc2de40b600047346ad","61a9132fde40b600047346de","61b0fa6aa216590004772203","61b0faf0a21659000477220f","61b0fb59a216590004772212","61bbf2178c5bae00041b2b97","61bbf2d88c5bae00041b2b98","61bbf3938c5bae00041b2b99","61bbf4188c5bae00041b2b9a","61bbf4908c5bae00041b2b9b","61bbf5048c5bae00041b2b9c","61bbf5728c5bae00041b2b9d","61e9869f299eff00045d145e","620af9df172a5100047c012b","620b048d172a5100047c0142","620b06d9172a5100047c0143","620b0943172a5100047c0144","620b0a42172a5100047c0145","620b0ec3172a5100047c0147","620b0fdf172a5100047c0148","620b118d172a5100047c0149","620b12d8172a5100047c014a","620bd803d788d40004f7ede4","620bd8a1d788d40004f7edea","620bd92cd788d40004f7edeb","620bd98dd788d40004f7edec","620bd9fcd788d40004f7edf1","620bda64d788d40004f7edf9","620bdb06d788d40004f7edfb","620bdbb0d788d40004f7edfd","620bdc51d788d40004f7edff","620bdcafd788d40004f7ee00","620bdd0bd788d40004f7ee01","620d7de9a3e9b50004f158b7","6230da5fd9d7a00004540c42","6179d4ffa9e8d60004513e65","622b75a4a9171d000477d71d","622b76fda9171d000477d734","6228d6878d44e000049c98fd","621f8e3f46187c0004e233d3","6234d56812a59f0004228347","62584e9b2d93530004c3feb7","61b0facda21659000477220c","6233ab5d68373e00042105d0","61b0fb2fa216590004772211","622a5f0c3267af000427b378","62349b3a12a59f000422823a","620bdb71d788d40004f7edfc","620bdc02d788d40004f7edfe","623200aad9d7a00004540ff3","6267fd10ab268b000444840a","61b0faa1a21659000477220a","627ea3bd09c4cb0004207236","628452b3d51bcd00048a7d23","627d2dc28af1d50004e2b774","628e4a415e631700045fcc7e","622b8aa2a9171d000477d76e","6234ca9d12a59f0004228314","622b8010a9171d000477d75d","62a7b6ea5e3b5900047710d0","62a7b66d5e3b5900047710cf","622b7d0ca9171d000477d748","622ba7bba9171d000477d797","6233a38568373e00042105b7","62b9d4177e931800042a85cf","62a8fb0c29e4000004f4c2e7","622b77b3a9171d000477d737","62c33919c8b2340004177b23","622ba7bba9171d000477d797","62c2e668c8b2340004177915","62b5b1737bae350004c3c1d9","622b6fd8a9171d000477d6ec","622b8097a9171d000477d75e","622b73a6a9171d000477d70e","62be15dfdb6c70000427a8ff","622b7873a9171d000477d738","622baa7ba9171d000477d79a","62321452f2ab2400044a89fa","622b74c5a9171d000477d711","622b8934a9171d000477d76b","622b8983a9171d000477d76c","622b8a48a9171d000477d76d","62cc4cf3ac9bc6000476b62a","62cc4d40ac9bc6000476b62b","622b7da3a9171d000477d75a","622b7eb7a9171d000477d75c","618fb5f7237dc00004140ff8","61c395e00d058600044b11b0","62fbf9165a330c0004e50196","62fa5f25c0a2f700040412df","6257418b2d93530004c3f7e1","625744562d93530004c3f7f8","62fa59b0c0a2f700040412bd","63060ee3abe926000440facc","631293a828fe5b0004c27bdf","622b7695a9171d000477d733","6234fe9912a59f000422843a","62fbe9105a330c0004e50155","62573f742d93530004c3f7d5","6234ff7712a59f000422843c","6235027a12a59f0004228449","623501ec12a59f0004228441","62795d9b5a8bf10004761334","62fbeb0e5a330c0004e5016a","6234b9ce12a59f00042282a4","6335e8340f9ea400043a9abe","6345679ae897dc0004798666","633afdb1d2cdb60004b241e7","630f680bc3729e00049b3993","63400f2bbac79f0004ac178a","63400fc8bac79f0004ac178f","6374447b2c2b67000443bfde","63910c51e57aae0004617bde","638e03f49195ee000432e786","638e06f99195ee000432fc46","638f7c29a5d3a700048e4094","622b6d38a9171d000477d6cd","63890cc0ebfbd20004fa175f","63b5a5778eacef000454ed5c","63400fc8bac79f0004ac178f","63400f2bbac79f0004ac178a","634edc9fa37acf0004c81249","632dd81d9906e400046bab36","63acac604c9cab00044c8dbc","638e04da9195ee000432ee0a","638e05999195ee000432f2bb","63b5a4cd8eacef000454ea27","6415d18989ff4b00029b38d7","646be1148dd79f000217c923","646e87835154d800023e7988","647684e02b09e700024e4a23","64768ace2b09e700024e52de","646eac175154d800023ece7e","646ea4255154d800023ec867","646e9f6b5154d800023ec4e2","646ea96d5154d800023ecc85","6481f5f29ea0a60002acf62a","637ce8c042a7fe0004a08bb7","64a586ac2eb1df0002b65840","64ade99ed8b9860002381969","64ee75bcd6fbcd00025aad49","64848f559022b20002ee795d","62e83e1a573c4e0004724b83","6515d38aadb75f00022174b8","65d75b2d40ca86000235747e"],o=["PCRC","PCRCS","ASC","ANTU","AA"],u=["Sinopharm","Sputnik V","AstraZeneca","Pfizer","Moderna"],c=["Jhonson & Jhonson"],l=[{nombre:"Autocovid 4to Anillo",valor:"AUTOCOVID4TOANILLO"},{nombre:"Autocovid Urubo",valor:"AUTOCOVIDURUBO"},{nombre:"Lab. Central",valor:"LABCENTRAL"},{nombre:"Suc. Obrero",valor:"SUCOBRERO"},{nombre:"Ruta",valor:"RUTA"},{nombre:"Dr del solar",valor:"DRDELSOLAR"}],s={CREATE_AREAS:"CREATE_AREAS",READ_AREAS:"READ_AREAS",UPDATE_AREAS:"UPDATE_AREAS",DELETE_AREAS:"DELETE_AREAS",CREATE_CLIENTS:"CREATE_CLIENTS",READ_CLIENTS:"READ_CLIENTS",UPDATE_CLIENTS:"UPDATE_CLIENTS",DELETE_CLIENTS:"DELETE_CLIENTS",EXPORT_CLIENTS:"EXPORT_CLIENTS",CREATE_LABORATORY_TESTS:"CREATE_LABORATORY_TESTS",READ_LABORATORY_TESTS:"READ_LABORATORY_TESTS",UPDATE_LABORATORY_TESTS:"UPDATE_LABORATORY_TESTS",DELETE_LABORATORY_TESTS:"DELETE_LABORATORY_TESTS",CREATE_LABORATORY_SAMPLES:"CREATE_LABORATORY_SAMPLES",READ_LABORATORY_SAMPLES:"READ_LABORATORY_SAMPLES",UPDATE_LABORATORY_SAMPLES:"UPDATE_LABORATORY_SAMPLES",DELETE_LABORATORY_SAMPLES:"DELETE_LABORATORY_SAMPLES",CREATE_QUOTES:"CREATE_QUOTES",READ_QUOTES:"READ_QUOTES",UPDATE_QUOTES:"UPDATE_QUOTES",DELETE_QUOTES:"DELETE_QUOTES",CREATE_ORDERS:"CREATE_ORDERS",READ_ORDERS:"READ_ORDERS",UPDATE_ORDERS:"UPDATE_ORDERS",DELETE_ORDERS:"DELETE_ORDERS",CREATE_PATIENTS:"CREATE_PATIENTS",READ_PATIENTS:"READ_PATIENTS",UPDATE_PATIENTS:"UPDATE_PATIENTS",DELETE_PATIENTS:"DELETE_PATIENTS",CREATE_PROFILES:"CREATE_PROFILES",READ_PROFILES:"READ_PROFILES",UPDATE_PROFILES:"UPDATE_PROFILES",DELETE_PROFILES:"DELETE_PROFILES",CREATE_USERS:"CREATE_USERS",READ_USERS:"READ_USERS",UPDATE_USERS:"UPDATE_USERS",DELETE_USERS:"DELETE_USERS",CREATE_BUSINESS_USER:"CREATE_BUSINESS_USER",READ_BUSINESS_USER:"READ_BUSINESS_USER",UPDATE_BUSINESS_USER:"UPDATE_BUSINESS_USER",DELETE_BUSINESS_USER:"DELETE_BUSINESS_USER",DOWNLOAD_REPORTS:"DOWNLOAD_REPORTS",UPLOAD_REPORTS:"UPLOAD_REPORTS",ASSIGN_CODES:"ASSIGN_CODES",READ_ACTIVITY_LOGS:"READ_ACTIVITY_LOGS"},b=[{module:"AREAS",name:"\xc1reas",description:"Agregar, actualizar y eliminar \xe1reas",permissions:[{label:"Agregar",value:s.CREATE_AREAS},{label:"Buscar \xe1reas",value:s.READ_AREAS},{label:"Actualizar",value:s.UPDATE_AREAS},{label:"Eliminar",value:s.DELETE_AREAS}]},{module:"CLIENTS",name:"Clientes",description:"Agregar, actualizar y eliminar clientes",permissions:[{label:"Agregar",value:s.CREATE_CLIENTS},{label:"Buscar clientes",value:s.READ_CLIENTS},{label:"Actualizar",value:s.UPDATE_CLIENTS},{label:"Eliminar",value:s.DELETE_CLIENTS},{label:"Exportar",value:s.EXPORT_CLIENTS}]},{module:"QUOTES",name:"Cotizaciones",description:"Agregar, actualizar y eliminar cotizaciones",permissions:[{label:"Agregar",value:s.CREATE_QUOTES},{label:"Buscar \xf3rdenes",value:s.READ_QUOTES},{label:"Actualizar",value:s.UPDATE_QUOTES},{label:"Eliminar",value:s.DELETE_QUOTES}]},{module:"LABORATORY_TESTS",name:"Estudios",description:"Agregar, actualizar y eliminar estudios",permissions:[{label:"Agregar",value:s.CREATE_LABORATORY_TESTS},{label:"Buscar estudios",value:s.READ_LABORATORY_TESTS},{label:"Actualizar",value:s.UPDATE_LABORATORY_TESTS},{label:"Eliminar",value:s.DELETE_LABORATORY_TESTS}]},{module:"LABORATORY_SAMPLES",name:"Muestras",description:"Agregar, actualizar y eliminar muestras",permissions:[{label:"Agregar",value:s.CREATE_LABORATORY_SAMPLES},{label:"Buscar muestras",value:s.READ_LABORATORY_SAMPLES},{label:"Actualizar",value:s.UPDATE_LABORATORY_SAMPLES},{label:"Eliminar",value:s.DELETE_LABORATORY_SAMPLES}]},{module:"ORDERS",name:"\xd3rdenes",description:"Agregar, actualizar y eliminar \xf3rdenes",permissions:[{label:"Agregar",value:s.CREATE_ORDERS},{label:"Buscar \xf3rdenes",value:s.READ_ORDERS},{label:"Actualizar",value:s.UPDATE_ORDERS},{label:"Eliminar",value:s.DELETE_ORDERS}]},{module:"PATIENTS",name:"Pacientes",description:"Agregar, actualizar y eliminar pacientes",permissions:[{label:"Agregar",value:s.CREATE_PATIENTS},{label:"Buscar pacientes",value:s.READ_PATIENTS},{label:"Actualizar",value:s.UPDATE_PATIENTS},{label:"Eliminar",value:s.DELETE_PATIENTS}]},{module:"PROFILES",name:"Perfiles",description:"Agregar, actualizar y eliminar perfiles",permissions:[{label:"Agregar",value:s.CREATE_PROFILES},{label:"Buscar perfiles",value:s.READ_PROFILES},{label:"Actualizar",value:s.UPDATE_PROFILES},{label:"Eliminar",value:s.DELETE_PROFILES}]},{module:"REPORTS",name:"Reportes",description:"Cargar y descargar reportes",permissions:[{label:"Cargar",value:s.UPLOAD_REPORTS},{label:"Descargar",value:s.DOWNLOAD_REPORTS}]},{module:"USERS",name:"Usuarios Lab",description:"Agregar, actualizar y eliminar usuarios lab",permissions:[{label:"Agregar",value:s.CREATE_USERS},{label:"Buscar usuarios lab",value:s.READ_USERS},{label:"Actualizar",value:s.UPDATE_USERS},{label:"Eliminar",value:s.DELETE_USERS}]},{module:"BUSINESS_USER",name:"Usuarios Empresas",description:"Agregar, actualizar y eliminar usuarios empresas",permissions:[{label:"Agregar",value:s.CREATE_BUSINESS_USER},{label:"Buscar usuarios empresas",value:s.READ_BUSINESS_USER},{label:"Actualizar",value:s.UPDATE_BUSINESS_USER},{label:"Eliminar",value:s.DELETE_BUSINESS_USER}]},{module:"ACTIVITY_LOGS",name:"Historial de Actividades",description:"Visualizar historial de actividades",permissions:[{label:"Ver historial",value:s.READ_ACTIVITY_LOGS}]},{module:"ASSIGN_CODES",name:"Asignar C\xf3digos",description:"",permissions:[{label:"Actualizar",value:s.ASSIGN_CODES}]}]},iX8M:function(e,n,t){"use strict";t.d(n,"B",(function(){return i})),t.d(n,"L",(function(){return a})),t.d(n,"J",(function(){return r})),t.d(n,"F",(function(){return d})),t.d(n,"c",(function(){return o})),t.d(n,"t",(function(){return u})),t.d(n,"T",(function(){return c})),t.d(n,"H",(function(){return l})),t.d(n,"G",(function(){return s})),t.d(n,"M",(function(){return b})),t.d(n,"D",(function(){return E})),t.d(n,"N",(function(){return f})),t.d(n,"S",(function(){return m})),t.d(n,"j",(function(){return p})),t.d(n,"z",(function(){return A})),t.d(n,"r",(function(){return S})),t.d(n,"e",(function(){return O})),t.d(n,"f",(function(){return T})),t.d(n,"k",(function(){return R})),t.d(n,"A",(function(){return v})),t.d(n,"h",(function(){return _})),t.d(n,"P",(function(){return D})),t.d(n,"v",(function(){return h})),t.d(n,"n",(function(){return g})),t.d(n,"p",(function(){return I})),t.d(n,"a",(function(){return P})),t.d(n,"s",(function(){return C})),t.d(n,"l",(function(){return j})),t.d(n,"i",(function(){return L})),t.d(n,"y",(function(){return $})),t.d(n,"q",(function(){return U})),t.d(n,"I",(function(){return N})),t.d(n,"Q",(function(){return x})),t.d(n,"R",(function(){return y})),t.d(n,"E",(function(){return w})),t.d(n,"g",(function(){return B})),t.d(n,"x",(function(){return k})),t.d(n,"o",(function(){return F})),t.d(n,"w",(function(){return z})),t.d(n,"b",(function(){return Y})),t.d(n,"C",(function(){return M})),t.d(n,"K",(function(){return G})),t.d(n,"O",(function(){return V})),t.d(n,"d",(function(){return q})),t.d(n,"u",(function(){return Q})),t.d(n,"m",(function(){return X}));var i="\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      id\n      token\n      email\n      nombre\n      apellido\n      role\n      compania\n      areasDeEstudio {\n        nombre\n        id\n      }\n    }\n  }\n",a="\n  mutation createUser($input: UserInput) {\n    createUser(input: $input)\n  }\n",r="\nmutation setPassword($hash: String!, $password: String!) {\n  setPassword(hash: $hash, password: $password)\n}\n",d="\nmutation forgotPassword($email: String!) {\n  forgotPassword(email: $email)\n}\n",o="\n  mutation addClient($input: ClientInput) {\n    addClient(input: $input) {\n      id\n      nombres\n      apellidos\n      ci\n      fecha_nacimiento\n      telefono\n      municipio\n      departamento\n      direccion\n      sexo\n      edad\n    }\n  }\n",u="\n  mutation editClient($input: ClientEditInput) {\n    editClient(input: $input) {\n      id\n      nombres\n      apellidos\n      ci\n      fecha_nacimiento\n      telefono\n      municipio\n      departamento\n      direccion\n      sexo\n      edad\n    }\n  }\n",c="\nmutation editTipoFicha($id: ID!, $tipoFicha: String!) {\n  editTipoFicha(id: $id, tipoFicha: $tipoFicha) {\n    codigo\n  }\n}\n",l="\nmutation setCodigoInterno($id: ID!, $codigoInterno: String!) {\n  setCodigoInterno(id: $id, codigoInterno: $codigoInterno) {\n    codigoInterno\n  }\n}\n",s="\n  mutation setConciliacionFicha($input: FichaConciliacionInput) {\n    setConciliacionFicha(input: $input) {\n      codigo\n    }\n  }\n",b="\nmutation loadReports($informes: [Reportes]) {\n  loadReports(informes: $informes)\n}\n",E="\n  mutation deleteClient($id: ID) {\n    deleteClient(id: $id)\n  }\n",f="\nmutation updateUser($input: UserEditInput) {\n  updateUser(input: $input) {\n    id\n    email\n    nombre\n    apellido\n    role\n    permissions\n    approved\n    compania\n    keywords\n  }\n}\n",m="\n  mutation updateSystemUserPrivilegesUser($input: UserPrivilegesInput) {\n    updateSystemUserPrivilegesUser(input: $input) {\n      id\n      nombre\n      role\n      approved\n    }\n  }\n",p="\nmutation addTipoDeMuestra($input: TipoDeMuestraInput) {\n  addTipoDeMuestra(input: $input) {\n    nombre\n    description\n    estatus\n    id\n  }\n}\n",A="\nmutation editTipoDeMuestra($id: ID!, $input: TipoDeMuestraInput) {\n  editTipoDeMuestra(id: $id, input: $input) {\n    nombre\n    description\n    id\n    estatus\n  }\n}\n",S="\nmutation deleteTipoDeMuestra($id: ID!) {\n  deleteTipoDeMuestra(id: $id)\n}\n",O="\nmutation addEstudio($input: EstudioInput) {\n  addEstudio(input: $input) {\n    id\n    nombre\n    codigo\n    description\n    metodo\n    estatus\n    areaDeEstudioID {\n      nombre\n    }\n    tipoDeMuestras {\n      nombre\n    }\n  }\n}\n",T="\nmutation addHistorial($input: HistorialPrecioPorProveedorInput) {\n    addHistorial(input: $input) {\n        id\n        precio\n        fecha_inicio    \n        fecha_limite    \n        estudioID\n        proveedorID\n  }\n}\n",R="\nmutation addVacuna($input: VacunaInput) {\n    addVacuna(input: $input) {\n        id\n        dosisPrimera\n        dosisSegunda\n        dosisUnica\n        dosisRefuerzoPrimero\n        dosisRefuerzoSegundo\n        clientID\n        fechaUltimoTest\n  }\n}\n",v="\nmutation editVacuna($input: VacunaEditInput) {\n    editVacuna(input: $input) {\n        id\n        dosisPrimera\n        dosisSegunda\n        dosisUnica\n        dosisRefuerzoPrimero\n        dosisRefuerzoSegundo\n        fechaUltimoTest\n    }\n}\n",_="\nmutation addPerfil($input: PerfilInput) {\n  addPerfil(input: $input) {\n    id\n    nombre\n    estatus\n    estudios {\n      id\n      nombre\n      precio\n    }\n  }\n}\n",D="\nmutation updatePerfil($id: ID!, $input: PerfilInput) {\n  updatePerfil(id: $id, input: $input) {\n    id\n    nombre\n    estatus\n    estudios {\n      id\n      nombre\n      precio\n    }\n  }\n}\n",h="\nmutation editEstudio($id: ID!, $input: EstudioInput) {\n  editEstudio(id: $id, input: $input) {\n    id\n    nombre\n    codigo\n    description\n    metodo\n    estatus\n    areaDeEstudioID {\n      nombre\n    }\n    tipoDeMuestras {\n      nombre\n    }\n  }\n}\n",g="\nmutation deleteEstudio($id: ID!) {\n  deleteEstudio(id: $id)\n}\n",I="\nmutation deletePerfil($id: ID!) {\n  deletePerfil(id: $id)\n}\n",P="\nmutation addAreaEstudio($input: AreaEstudioInput) {\n  addAreaEstudio(input: $input) {\n    nombre\n    id\n  }\n}\n",C="\nmutation editAreaEstudio($id: ID!, $input: AreaEstudioInput) {\n  editAreaEstudio(id: $id, input: $input) {\n    nombre\n    id\n  }\n}\n",j="\nmutation deleteAreaEstudio($id: ID!) {\n  deleteAreaEstudio(id: $id)\n}\n",L="\nmutation addProveedor($input: ProveedorInput) {\n  addProveedor(input: $input) {\n    id\n    nombre\n    description\n    estatus\n  }\n}\n",$="\nmutation editProveedor($id: ID!, $input: ProveedorInput) {\n  editProveedor(id: $id, input: $input) {\n    id\n    nombre\n    description\n    estatus\n  }\n}\n",U="\nmutation deleteProveedor($id: ID!) {\n  deleteProveedor(id: $id)\n}\n",N="\nmutation setPrecioEstudio($input: PreciosPorOrdenInput) {\n  setPrecioEstudio(input: $input) {\n    id\n  }\n}\n",x="\nmutation updatePrecioProveedor($id: ID!, $input: PreciosPorOrdenInput) {\n  updatePrecioProveedor(id: $id, input: $input) {\n    id\n  }\n}\n",y="\nmutation updatePrecioOrdenPorEstudio($id: ID!, $input: PreciosPorOrdenEstudioInput) {\n  updatePrecioOrdenPorEstudio(id: $id, input: $input) {\n    id\n  }\n}\n",w="\nmutation deleteItem($id: ID!) {\n  deleteItem(id: $id)\n}\n",B="\nmutation addOrden($input: OrdenInput, $estudios: [EstudioPorOrdenInput]) {\n  addOrden(input: $input, estudios: $estudios) {\n    id\n    fechaSolicitud\n  }\n}\n",k="\nmutation editOrden($id: ID!, $input: OrdenInput, $estudios: [EstudioEditPrecio]) {\n  editOrden(id: $id, input: $input, estudios: $estudios) {\n    id\n  }\n}\n",F="\nmutation deleteOrden($id: ID!) {\n  deleteOrden(id: $id)\n}\n",z="\nmutation editDataEstudio($id: ID!, $input: EstudioPorOrdenEditSimpleInput) {\n  editDataEstudio(id: $id, input: $input) {\n    id\n    codigoEstudio\n  }\n}\n",Y="\nmutation addAttachmentFileEstudioPorOrden($id: ID, $file: Upload) {\n  addAttachmentFileEstudioPorOrden(id: $id, file: $file) {\n    id\n    attachmentFiles {\n      id\n      name\n      mimeType\n      url\n    }\n  }\n}\n",M="\nmutation removeAttachmentFileEstudioPorOrden($id: ID, $fileId: ID) {\n  removeAttachmentFileEstudioPorOrden(id: $id, fileId: $fileId) {\n    id\n    attachmentFiles {\n      id\n      name\n      mimeType\n      url\n    }\n  }\n}\n",G="\nmutation setResultEstudio($id: ID!, $input: EstudioPorOrdenSetResultInput) {\n  setResultEstudio(id: $id, input: $input) {\n    id\n    codigoEstudio\n  }\n}\n",V="\nmutation updateOrderByFile($ordenes: [OrdenConciliacionByFileInput]) {\n  updateOrderByFile(ordenes: $ordenes)\n}\n",q="\nmutation addCotizacion($input: CotizacionInput, $estudios: [EstudioPorCotizacionInput]) {\n  addCotizacion(input: $input, estudios: $estudios) {\n    id\n    fechaSolicitud\n  }\n}\n",Q="\nmutation editCotizacion($id: ID!, $input: CotizacionInput, $estudios: [EstudioEditPrecio]) {\n  editCotizacion(id: $id, input: $input, estudios: $estudios) {\n    id\n  }\n}\n",X="\nmutation deleteCotizacion($id: ID!) {\n  deleteCotizacion(id: $id)\n}\n"},itGN:function(e,n,t){"use strict";t.r(n);var i=t("ODXe"),a=t("nKUr"),r=(t("q1tI"),t("jRMg")),d=t("5zZm"),o=t("YFqc"),u=t.n(o),c=t("nOHt"),l=t("DFyN"),s=(t("b1/7"),t("nqad"),t("ma3e")),b=t("IqVg"),E=t("TCCB"),f=t("IGOO"),m=(t("FNPF"),t("6nGu")),p=t("L4s6"),A=t("iX8M"),S=t("VreA"),O=t("YsTM"),T=t("2kOW"),R=t("YwrL"),v={reactiveData:!0,layout:"fitColumns",pagination:"local",paginationSize:30},_=function(e){var n=e.cell._cell.row.data;return Object(a.jsxs)("div",{children:[Object(a.jsx)(T.a,{permission:R.f.UPDATE_AREAS,user:e.user,children:Object(a.jsx)("button",{className:"inline-block p-2 text-center mx-1 text-white transition bg-blue-500 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-600 focus:outline-none",onClick:function(){e.router.push("/areas/edit/".concat(n.id))},children:Object(a.jsx)(s.f,{size:16})})}),Object(a.jsx)(T.a,{permission:R.f.DELETE_AREAS,user:e.user,children:Object(a.jsx)("button",{className:"inline-block p-2 text-center mx-1 text-white transition bg-red-500 rounded-full shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none",onClick:function(){Object(f.confirmAlert)({customUI:function(t){var i=t.onClose;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"modal-backdrop fade-in"}),Object(a.jsx)("div",{className:"modal show ","data-background":"light",children:Object(a.jsx)("div",{className:"relative w-auto lg:my-4 mx-auto lg:max-w-lg max-w-sm",children:Object(a.jsxs)("div",{className:"bg-white text-gray-900 border-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-700 border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none",children:[Object(a.jsx)("div",{className:"relative p-4 flex-auto",children:Object(a.jsx)("div",{className:"flex items-start justify-start p-2 space-x-4",children:Object(a.jsx)("div",{className:"flex flex-col w-full",children:Object(a.jsx)("div",{className:"text-lg mb-2 font-bold",children:"\xbfEstas seguro que deseas eliminar el area de estudio?"})})})}),Object(a.jsxs)("div",{className:"flex items-center justify-end p-4 border-t border-gray-200 dark:border-gray-700 border-solid rounded-b space-x-2",children:[Object(a.jsx)("button",{className:"btn btn-default btn-rounded bg-white hover:bg-gray-100 text-gray-900",type:"button",onClick:i,children:"Cancelar"}),Object(a.jsx)("button",{className:"btn btn-default btn-rounded bg-red-500 hover:bg-red-600 text-white",type:"button",onClick:function(){i(),e.deleteAreaEstudio({variables:{id:n.id}}).then((function(n){var t=n.data,i=n.error;if(i){var a="No se pudo eliminar el \xe1rea de estudio.";return i.graphQLErrors&&i.graphQLErrors.length>0&&i.graphQLErrors.map((function(e){a+="\n".concat(e.message," ")})),void Object(b.a)("error",a)}t.deleteAreaEstudio&&(e.refetch(),Object(b.a)("success","El \xe1rea de estudio fue eliminado."))}))},children:"Eliminar"})]})]})})})]})}})},children:Object(a.jsx)(s.j,{size:16})})})]})};n.default=Object(l.a)((function(){var e,n=Object(E.c)(),t=Object(r.e)(S.u),o=t.loading,l=t.error,s=t.data,b=t.refetch,f=Object(r.d)(A.l),D=Object(i.a)(f,1)[0],h=Object(c.useRouter)(),g=[{title:"Nombre",field:"nombre",headerFilter:"input",headerFilterPlaceholder:"Filtrar"},{title:"Acciones",field:"custom",headerSort:!1,width:120,formatter:Object(d.reactFormatter)(Object(a.jsx)(_,{user:n,router:h,deleteAreaEstudio:D,refetch:b}))}];return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"w-full px-1",children:[Object(a.jsx)("div",{className:"flex flex-row mb-4",children:Object(a.jsx)("div",{className:"w-full",children:Object(a.jsx)(m.a,{items:[{title:"Inicio",url:"/dashboard",last:!1},{title:"Gestion de areas de estudio",url:"/areas",last:!0}],home:!0,icon:"arrow"})})}),Object(a.jsxs)(O.a,{loading:o,error:l,children:[Object(a.jsx)(p.a,{title:"",subtitle:"Gestion de areas del estudio"}),Object(a.jsx)("div",{className:"inputs w-full py-0 px-0",children:Object(a.jsx)(T.a,{permission:R.f.CREATE_AREAS,children:Object(a.jsx)("div",{className:"w-full px-3",children:Object(a.jsx)(u.a,{href:"/areas/nuevo",children:Object(a.jsx)("button",{className:"inline-block px-6 py-1 mt-0 mb-3 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none float-right",children:"Nuevo"})})})})}),Object(a.jsx)("div",{className:"w-full",children:Object(a.jsx)(d.ReactTabulator,{columns:g,data:null!==(e=null===s||void 0===s?void 0:s.getAreasEstudio)&&void 0!==e?e:[],options:v})})]})]})})}))}},[["Ht4S",0,1,4,10,5,11,7,20,25,24,2,3,6,8,9,12,14,13,19,21]]]);