_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[67],{"1OyB":function(e,t,a){"use strict";function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",(function(){return c}))},JX7q:function(e,t,a){"use strict";function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",(function(){return c}))},Ji7U:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a("s4An");function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Object(c.a)(e,t)}},L4s6:function(e,t,a){"use strict";var c=a("nKUr");t.a=function(e){var t=e.title,a=e.subtitle,r=e.right,o=void 0===r?null:r;return Object(c.jsx)("div",{className:"section-title w-full mb-6 pt-3",children:Object(c.jsxs)("div",{className:"flex flex-row items-center justify-between mb-4",children:[Object(c.jsxs)("div",{className:"flex flex-col",children:[Object(c.jsx)("div",{className:"text-xs uppercase font-light text-gray-500",children:t}),Object(c.jsx)("div",{className:"text-xl font-bold",children:a})]}),o]})})}},foSv:function(e,t,a){"use strict";function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a.d(t,"a",(function(){return c}))},ftaV:function(e,t,a){"use strict";var c=a("nKUr"),r=a("TSYQ"),o=a.n(r);t.a=function(e){var t=e.className,a=e.round,r=e.height,s=e.width;return Object(c.jsx)("div",{className:o()(t,"shimmer","shimmer-line",{"shimmer-round":a}),style:{height:r,width:s}})}},hKE6:function(e,t,a){"use strict";var c=a("ODXe"),r=a("nKUr"),o=a("q1tI"),s=a("jRMg"),i=function(e){var t=e.accept,a=void 0===t?[]:t,c=e.onChange;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer",children:[Object(r.jsx)("div",{className:"absolute",children:Object(r.jsx)("div",{className:"flex flex-col items-center",children:Object(r.jsx)("span",{className:"block text-blue-400 font-normal",children:"Haz click aqu\xed para cargar un archivo"})})}),Object(r.jsx)("input",{type:"file",className:"h-full w-full opacity-0",accept:a.join(","),onChange:c})]}),Object(r.jsxs)("div",{className:"flex justify-between items-center text-gray-400",children:[Object(r.jsx)("span",{children:"Solo se aceptan archivos de tipo: PDF, DOC, DOCX, JPG, PNG"}),Object(r.jsx)("span",{className:"flex items-center ",children:"Max. 5MB"})]})]})},n=a("ma3e"),l=a("ftaV"),u=a("n7fY"),d=function(e){var t=e.id,a=e.fileName,c=e.fileURL,s=e.loading,i=e.mimeType,d=e.onRemove,b=Object(o.useCallback)((function(){d&&d(t)}),[t]);return s?Object(r.jsxs)("div",{children:[Object(r.jsx)(l.a,{height:"10px",className:"mb-1"}),Object(r.jsx)(l.a,{height:"10px",width:"20%"})]}):Object(r.jsxs)("div",{className:"flex items-start justify-start p-2 space-x-4",children:[Object(r.jsxs)("div",{className:"flex flex-col w-full",children:[Object(r.jsx)("div",{className:"text-sm font-bold",children:a}),Object(r.jsx)("div",{className:"text-sm text-gray-500",children:i})]}),Object(r.jsxs)("div",{className:"flex-shrink-0",children:[Object(r.jsx)("a",{className:"btn btn-default bg-transparent bg-rounded hover:bg-blue-50 hover:text-blue-600 text-blue-500",href:c,target:"_blank",children:"DESCARGAR"}),Object(r.jsx)(u.a,{color:"danger",flat:!0,rounded:!0,onClick:b,children:Object(r.jsx)(n.i,{style:{display:"inline"}})})]})]})},b=a("VreA"),f=a("iX8M");t.a=function(e){var t=e.estudioOrderId,a=Object(o.useState)(),n=a[0],l=a[1],u=Object(s.e)(b.a,{variables:{id:t},refetchAfterMutations:[{mutation:f.b},{mutation:f.C}]}),m=(u.loading,u.data),j=Object(s.d)(f.b),h=Object(c.a)(j,2),O=h[0],v=h[1].loading,p=Object(s.d)(f.C),x=Object(c.a)(p,1)[0],g=Object(o.useCallback)((function(e){var a=e.target;a.validity&&O({variables:{id:t,file:a.files[0]}})}),[t]),D=Object(o.useCallback)((function(e){confirm("Estas seguro de eliminar?")&&(l(e),x({variables:{id:t,fileId:e}}))}),[t]),N=Object(o.useMemo)((function(){return(null===m||void 0===m?void 0:m.getEstudioPorOrden)?m.getEstudioPorOrden.attachmentFiles:[]}),[m]);return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"w-full mb-4",children:[N.map((function(e){return Object(r.jsx)(d,{id:e.id,fileName:e.name,fileURL:e.url,mimeType:e.mimeType,onRemove:D,loading:n===e.id})})),v&&Object(r.jsx)(d,{loading:!0})]}),Object(r.jsx)(i,{accept:[".pdf",".doc",".docx",".jpg",".png"],onChange:g})]})}},ioCw:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cotizacion/edit/[id]/edit/[estudioID]",function(){return a("tB1a")}])},md7G:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var c=a("U8pU"),r=a("JX7q");function o(e,t){if(t&&("object"==Object(c.a)(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Object(r.a)(e)}},n7fY:function(e,t,a){"use strict";var c=a("nKUr"),r=a("TSYQ"),o=a.n(r);t.a=function(e){var t=e.children,a=e.circle,r=e.color,s=e.flat,i=e.rounded,n=e.onClick;return Object(c.jsx)("button",{className:o()("btn btn-default",{"bg-blue-500":!s&&null==r,"bg-red-500":!s&&null!=r,"bg-transparent":s,"bg-rounded":i,"bg-circle":a,"hover:bg-blue-50":null==r,"hover:bg-red-50":"danger"===r,"hover:text-blue-600":null==r,"hover:text-red-600":"danger"===r,"text-blue-500":s&&null==r,"text-red-500":s&&"danger"===r,"text-white":!s}),onClick:n,children:t})}},tB1a:function(e,t,a){"use strict";a.r(t);var c=a("ODXe"),r=a("h4VS"),o=a("nKUr"),s=a("q1tI"),i=a("jRMg"),n=a("nOHt"),l=a("KYPV"),u=a("YFqc"),d=a.n(u),b=a("qGs6"),f=a.n(b),m=a("qKvR"),j=a("y2g3"),h=a.n(j),O=a("wd/R"),v=a.n(O),p=a("hKE6"),x=a("L4s6"),g=a("6nGu"),D=a("gWdR"),N=a("IqVg"),E=a("VreA"),w=a("iX8M"),y=a("DFyN"),M=a("TCCB"),Y=a("z0WU"),I=a("NRhA"),R=a.n(I),S=(a("5Buo"),a("1UYf"));function C(){var e=Object(r.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: '#000';\n"]);return C=function(){return e},e}Object(I.registerLocale)("es",S.a);var P=Object(m.css)(C());t.default=Object(y.a)((function(){var e=Object(s.useState)(!0),t=e[0],a=e[1],r=Object(s.useState)([]),u=r[0],b=r[1],m=Object(s.useState)([]),j=m[0],O=m[1],y=Object(s.useState)(null),I=(y[0],y[1]),S=Object(s.useState)({}),C=S[0],_=S[1],T=(Object(M.b)().userInformation,Object(n.useRouter)()),q=T.query,F=q.estudioID,k=q.id,V=Object(i.c)(E.i),L=Object(c.a)(V,1)[0],U=Object(i.d)(w.w),A=Object(c.a)(U,1)[0],H=Object(l.b)({initialValues:C,enableReinitialize:!0,onSubmit:function(e){var t=j.camposEstudio.map((function(t){return"observaciones"!==t.nombre&&"observacion"!==t.nombre||(t.valor=e.observaciones),t})),a=6e4*(new Date).getTimezoneOffset(),c=new Date(e.fechaTomaDeMuestra-a).toISOString().slice(0,-1),r=e.showObservation?{estadoEstudio:e.estadoEstudio,fechaTomaDeMuestra:c,fechaReporte:e.fechaReporte?v()(e.fechaReporte).utc().format("YYYY-MM-DD"):"",fechaSolicitud:v()(j.fechaSolicitud).utc().format("YYYY-MM-DD"),tipoDeMuestraID:e.tipoDeMuestraID,camposEstudio:t}:{estadoEstudio:e.estadoEstudio,fechaTomaDeMuestra:c,fechaReporte:e.fechaReporte?v()(e.fechaReporte).utc().format("YYYY-MM-DD"):"",fechaSolicitud:v()(j.fechaSolicitud).utc().format("YYYY-MM-DD"),tipoDeMuestraID:e.tipoDeMuestraID};A({variables:{id:j.id,input:r}}).then((function(e){var t=e.data,a=e.error;if(a){console.log(a);var c="Hubo un error al editar la informaci\xf3n del estudio.";return a.graphQLErrors&&a.graphQLErrors.length>0&&a.graphQLErrors.map((function(e){c+="\n".concat(e.message," ")})),Object(N.a)("error",c),void T.push("/orden/detail/".concat(k))}t.editDataEstudio&&(Object(N.a)("success","Los datos del estudio fueron actualizados correctamente."),T.push("/orden/detail/".concat(k)))}))}});var B=function(e){return!1!==Object(Y.r)(e,"observaciones")||!1!==Object(Y.r)(e,"observacion")};Object(s.useEffect)((function(){T.query.estudioID&&function(e){L({variables:{id:e}}).then((function(e){var t,c=e.data,r=e.error;if(r){console.log(r);var o="Hubo un error al obtener la informaci\xf3n del estudio.";return r.graphQLErrors&&r.graphQLErrors.length>0&&r.graphQLErrors.map((function(e){o+="\n".concat(e.message," ")})),Object(N.a)("error",o),void T.push("/buscar-orden")}if(!c.getEstudioPorOrden)return Object(N.a)("error","El estudio a editar no existe."),void T.push("/orden/edit/".concat(T.query.id));if(c&&c.getEstudioPorOrden){var s=new Date(v()(c.getEstudioPorOrden.fechaTomaDeMuestra).utcOffset(0,!1).format("MM/DD/YYYY HH:mm"));O(c.getEstudioPorOrden);var i=[];i.push({title:"Inicio",url:"/dashboard",last:!1}),i.push({title:"Buscar Orden",url:"/buscar-orden",last:!1}),i.push({title:"Editar Orden #".concat(c.getEstudioPorOrden.ordenNo),url:"/orden/edit/".concat(T.query.id),last:!1}),i.push({title:"Edici\xf3n estudio ".concat(c.getEstudioPorOrden.codigoEstudio).concat(c.getEstudioPorOrden.estudioNumero),url:"/orden/edit/".concat(T.query.id,"/edit/").concat(F),last:!0}),b(i),I(K(c.getEstudioPorOrden.camposEstudio)),_({estadoEstudio:c.getEstudioPorOrden.estadoEstudio,fechaReporte:c.getEstudioPorOrden.fechaReporte?v()(c.getEstudioPorOrden.fechaReporte).utc():"",tipoDeMuestraID:c.getEstudioPorOrden.tipoDeMuestraID.id,fechaTomaDeMuestra:s,observaciones:(t=c.getEstudioPorOrden.camposEstudio,!1===Object(Y.r)(t,"observaciones")?Object(Y.q)(t,"observacion"):Object(Y.q)(t,"observaciones")),showObservation:B(c.getEstudioPorOrden.camposEstudio)})}a(!1)}))}(T.query.estudioID)}),[T.query]),Object(s.useEffect)((function(){if(j&&j.estudioID)switch(j.estudioID.id){case"604e2602cc5c345ec442f32e":if(H.values.cutoff_igg&&H.values.cutoff_igm&&H.values.factor_multiplicador){if(H.values.valor_igg){var e=Number(Number(H.values.valor_igg)*Number(H.values.factor_multiplicador)/Number(H.values.cutoff_igg)).toFixed(1),t=Object(Y.q)(j.camposEstudio,"resultado_igg","unidad"),a=Object(Y.n)(e,Number(H.values.factor_multiplicador));H.setFieldValue("resultado_igg","".concat(e," ").concat(t," ").concat(a))}if(H.values.valor_igm){var c=Number(Number(H.values.valor_igm)*Number(H.values.factor_multiplicador)/Number(H.values.cutoff_igm)).toFixed(1),r=Object(Y.q)(j.camposEstudio,"resultado_igg","unidad"),o=Object(Y.n)(c,Number(H.values.factor_multiplicador));H.setFieldValue("resultado_igm","".concat(c," ").concat(r," ").concat(o))}}}}),[H.values]);var K=function(e,t){var a=[],c=[],r=0,o=e.filter((function(e){if("DIVISOR"==e.tipo)return r>0&&(a[r-1].campos=c),a.push({index:r,title:e.label,active:!1,campos:[],content:null}),c=[],r++,e;r>0&&c.push(e)}));return c.length>0&&a.length>0&&(a[r-1].campos=c),"count"===t?o.length:a};return t||!F?Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"flex flex-row mb-4",children:Object(o.jsx)("div",{className:"w-full",children:Object(o.jsx)(g.a,{items:u,home:!0,icon:"arrow"})})}),Object(o.jsx)("div",{className:"w-full px-4",children:Object(o.jsx)("div",{children:Object(o.jsx)(f.a,{css:P,size:80,color:"#000"})})})]}):Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"flex flex-row mb-4",children:Object(o.jsx)("div",{className:"w-full",children:Object(o.jsx)(g.a,{items:u,home:!0,icon:"arrow"})})}),Object(o.jsxs)("div",{className:"w-full px-4",children:[Object(o.jsx)(x.a,{title:"Orden No. ".concat(j.ordenNo," | Estudio: ").concat(j.estudioID.nombre," | ").concat(j.codigoEstudio).concat(j.estudioNumero),subtitle:Object(o.jsx)(d.a,{href:"/pacientes/detalle/".concat(j.ordenID.clientID.id),children:"Paciente: ".concat(j.ordenID.clientID.nombres," ").concat(j.ordenID.clientID.apellidos)})}),Object(o.jsx)(D.a,{title:"",description:Object(o.jsx)("span",{children:"Datos generales"}),children:Object(o.jsx)("div",{className:"flex flex-col lg:flex-row lg:flex-wrap w-full lg:space-x-4",children:Object(o.jsxs)("div",{className:"flex flex-col w-3/4",children:[Object(o.jsxs)("div",{className:"text-sm mb-1",children:["Fecha Solicitud: ","".concat(v()(j.fechaSolicitud).utc().format("DD/MM/YYYY"))]}),Object(o.jsxs)("div",{className:"text-sm mb-1",children:["Fecha Toma de muestra:","00:00"===v()(j.fechaTomaDeMuestra).utc().format("HH:mm")?" ".concat(v()(j.fechaTomaDeMuestra).utc().format("DD/MM/YYYY")):" ".concat(v()(j.fechaTomaDeMuestra).utc().format("DD/MM/YYYY HH:mm"))]}),Object(o.jsxs)("div",{className:"text-sm mb-1",children:["Tipo de muestra: ",j.tipoDeMuestraID.nombre]}),Object(o.jsxs)("div",{className:"text-sm mb-1",children:["Tipo de cliente: ",j.ordenID.proveedorID.nombre]}),Object(o.jsxs)("div",{className:"text-sm mb-1",children:["Nota/Informaci\xf3n clinica Relevante: ",j.ordenID.nota]})]})})}),Object(o.jsx)(D.a,{title:"",description:Object(o.jsx)("span",{children:"Datos del Estudio"}),children:Object(o.jsxs)("div",{className:"w-full sm:w-full md:w-full lg:w-2/4 xl:w-1/4 pl-3",children:[Object(o.jsxs)("div",{className:"form-element",children:[Object(o.jsx)("div",{className:"form-label",children:"Fecha de Toma de muestra"}),Object(o.jsx)(R.a,{showTimeSelect:!0,locale:"es",dateFormat:"dd-MM-yyyy",selected:H.values.fechaTomaDeMuestra,onChange:function(e){H.setFieldValue("fechaTomaDeMuestra",e)},className:"text-sm"})]}),j.fechaReporte?Object(o.jsxs)("div",{className:"form-element",children:[Object(o.jsx)("div",{className:"form-label",children:"Fecha del informe"}),Object(o.jsx)(h.a,{locale:"es",name:"fechaReporte",dateFormat:"DD-MM-YYYY",timeFormat:!1,isValidDate:function(e){return e.isBefore(v()())&&e.isSameOrAfter(v()(j.fechaSolicitud).utc())},input:!0,closeOnSelect:!0,inputProps:{className:"form-input",placeholder:"Seleccione una fecha"},viewMode:"days",value:H.values.fechaReporte,onChange:function(e){H.setFieldValue("fechaReporte",e)}})]}):null,j.estudioID.tipoDeMuestras.length>1?Object(o.jsxs)("div",{className:"form-element",children:[Object(o.jsx)("div",{className:"form-label",children:"Tipo de Muestra"}),Object(o.jsxs)("select",{className:"form-select",name:"tipoDeMuestraID",placeholder:"Seleccione",onChange:H.handleChange,value:H.values.tipoDeMuestraID,children:[Object(o.jsx)("option",{value:"",children:"Seleccione una opcion"}),j.estudioID.tipoDeMuestras.map((function(e,t){return Object(o.jsx)("option",{value:e.id,children:e.nombre},"tdm".concat(t))}))]})]}):null,Object(o.jsxs)("div",{className:"form-element",children:[Object(o.jsx)("div",{className:"form-label",children:"Estado del Estudio"}),Object(o.jsxs)("select",{className:"form-select",name:"estadoEstudio",placeholder:"Seleccione",onChange:H.handleChange,value:H.values.estadoEstudio,disabled:"PROCESADO"===j.estadoEstudio,children:[Object(o.jsx)("option",{value:"",children:"Seleccione una opcion"}),Object(o.jsx)("option",{value:"RECIBIDO",children:"Recibido"}),Object(o.jsx)("option",{value:"EN_PROCESO",children:"En Proceso"}),Object(o.jsx)("option",{value:"PROCESADO",children:"Procesado"}),Object(o.jsx)("option",{value:"CANCELADO",children:"Cancelado"})]})]}),H.values.showObservation?Object(o.jsxs)("div",{className:"form-element",children:[Object(o.jsx)("div",{className:"form-label",children:"Observaciones"}),Object(o.jsx)("textarea",{name:"observaciones",type:"text",rows:5,className:"form-select",placeholder:"",onChange:H.handleChange,value:H.values.observaciones})]}):null,Object(o.jsx)("div",{className:"form-element",children:Object(o.jsx)("button",{type:"submit",onClick:H.handleSubmit,className:"inline-block px-6 py-1 mt-2 mx-auto mb-3 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none",children:"Guardar"})})]})}),Object(o.jsx)(D.a,{description:"Documentos adjuntos",children:Object(o.jsx)(p.a,{estudioOrderId:F})})]})]})}))},vuIU:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var c=a("o46R");function r(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Object(c.a)(r.key),r)}}function o(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}}},[["ioCw",0,1,4,10,5,11,7,25,2,3,6,8,9,12,14,13,15,18,29,41,42]]]);