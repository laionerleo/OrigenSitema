_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[100],{"6Rqd":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a("nKUr"),o=a("q1tI"),s=function(e){var t=e.tabs,a=Object(o.useState)(0),s=a[0],n=a[1];return Object(r.jsxs)("div",{className:"flex flex-wrap flex-col w-full tabs",children:[Object(r.jsx)("div",{className:"flex lg:flex-wrap flex-row lg:space-x-2",children:t.map((function(e,t){return Object(r.jsx)("div",{className:"flex-none",children:Object(r.jsx)("button",{onClick:function(){n(e.index)},className:s===e.index?"tab tab-underline tab-active":"tab tab-underline",type:"button",children:e.title})},t)}))}),t.map((function(e,t){return Object(r.jsx)("div",{className:"tab-content ".concat(s!==e.index?"hidden":"block"),children:e.content},t)}))]})}},Cao4:function(e,t,a){"use strict";a.r(t);var r=a("ODXe"),o=a("h4VS"),s=a("nKUr"),n=a("q1tI"),l=a("jRMg"),c=a("nOHt"),i=a("IqVg"),u=a("qKvR"),d=a("wd/R"),b=a.n(d),m=a("VreA"),f=a("DFyN"),j=a("TCCB"),v=a("6nGu"),O=a("L4s6"),h=a("YFqc"),x=a.n(h),p=a("qGs6"),g=a.n(p),_=a("gWdR"),N=a("rePB"),E=a("KYPV"),D=a("y2g3"),y=a.n(D),w=a("IGOO"),I=a("Tgqd"),P=a("hKE6"),R=a("02nw"),S=a("iX8M"),C=a("B3WN"),Y=a("6Rqd"),k=a("z0WU");function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(Object(a),!0).forEach((function(t){Object(N.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function V(){var e=Object(o.a)(['\n  display: block;\n  margin: 0 auto;\n  border-color: "#000";\n']);return V=function(){return e},e}var A=Object(u.css)(V()),L=function(e){var t=e.id,a=Object(n.useState)(!0),o=a[0],c=a[1],u=Object(n.useState)([]),d=u[0],f=u[1],v=Object(n.useState)(null),O=v[0],h=v[1],p=Object(n.useState)({}),N=p[0],D=p[1],M=Object(n.useState)([]),V=M[0],L=M[1],q=Object(n.useState)([]),Q=(q[0],q[1],Object(j.b)().userInformation,Object(l.c)(m.i)),T=Object(r.a)(Q,1)[0],U=Object(l.c)(m.x),z=Object(r.a)(U,1)[0],K=Object(l.c)(m.lb),B=Object(r.a)(K,1)[0],G=Object(l.d)(S.K),H=Object(r.a)(G,1)[0],X=function(e,t){"PARTICULAR"!==t&&z({variables:{id:e}}).then((function(e){var t=e.data;e.eror;t.findUsersOfProvider&&t.findUsersOfProvider.length>0&&L(t.findUsersOfProvider)}))},J=function(){var e=[];V.map((function(t){e.push(t.email)})),B({variables:{emails:e,compania:d.ordenID.proveedorID.nombre}}).then((function(){Object(i.a)("success","Email enviado.")}))},W=Object(n.useCallback)((function(e){var t,a,r,o=F(F({},e),{},{fechaReporte:(t=d.estadoEstudio,a=e.estadoEstudio,r=e.fechaReporte,"PROCESADO"===a?t!=a?b()().format("YYYY-MM-DD"):r.format("YYYY-MM-DD"):"")});H({variables:{id:d.id,input:o}}).then((function(t){var a=t.data,r=t.error;if(r){var o="Hubo un error al actualizar la informacion.";return r.graphQLErrors&&r.graphQLErrors.length>0&&r.graphQLErrors.map((function(e){o+="\n".concat(e.message," ")})),void Object(i.a)("error",o)}a.setResultEstudio&&(Object(i.a)("success","Los datos del estudio fueron actualizados correctamente."),V.length>0&&"PROCESADO"===e.estadoEstudio&&Object(w.confirmAlert)({customUI:function(e){var t=e.onClose;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"modal-backdrop fade-in"}),Object(s.jsx)("div",{className:"modal show ","data-background":"light",children:Object(s.jsx)("div",{className:"relative w-auto lg:my-4 mx-auto lg:max-w-lg max-w-sm",children:Object(s.jsxs)("div",{className:"bg-white text-gray-900 border-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-700 border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none",children:[Object(s.jsx)("div",{className:"relative p-4 flex-auto",children:Object(s.jsx)("div",{className:"flex items-start justify-start p-2 space-x-4",children:Object(s.jsx)("div",{className:"flex flex-col w-full",children:Object(s.jsxs)("div",{className:"text-lg mb-2 font-bold",children:["\xbfDeseas informar via email a la empresa"," ",d.ordenID.proveedorID.nombre," sobre el resultado de este estudio ?"]})})})}),Object(s.jsxs)("div",{className:"flex items-center justify-end p-4 border-t border-gray-200 dark:border-gray-700 border-solid rounded-b space-x-2",children:[Object(s.jsxs)("button",{className:"btn btn-default btn-rounded bg-white hover:bg-gray-100 text-gray-900",type:"button",onClick:t,children:[" ","No"," "]}),Object(s.jsxs)("button",{className:"btn btn-default btn-rounded bg-green-500 hover:bg-green-600 text-white",type:"button",onClick:function(){J(),t()},children:[" ","Si"," "]})]})]})})})]})}}))}))}),[d,H]),Z=Object(E.b)({initialValues:N,enableReinitialize:!0,onSubmit:function(e){var t={camposEstudio:d.camposEstudio.map((function(t){for(var a in e)if(a===t.nombre)return"FECHA"===t.tipo?e[a]?F(F({},t),{},{valor:e[a].format("DD/MM/YYYY")}):F({},t):F(F({},t),{},{valor:e[a].toString()})}))};H({variables:{id:d.id,input:t}}).then((function(e){var t=e.data,a=e.error;if(a){var r="Hubo un error al actualizar la informacion.";return a.graphQLErrors&&a.graphQLErrors.length>0&&a.graphQLErrors.map((function(e){r+="\n".concat(e.message," ")})),void Object(i.a)("error",r)}t.setResultEstudio&&(Object(i.a)("success","Los datos del estudio fueron actualizados correctamente."),ee(t.setResultEstudio.id))}))}});function $(e){return e.isBefore(b()())&&e.isSameOrAfter(b()(d.fechaSolicitud).utc())}var ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];T({variables:{id:e},useCache:!1}).then((function(e){var a=e.data,r=e.error;if(r){console.log(r);var o="Hubo un error al obtener la informaci\xf3n del estudio.";return r.graphQLErrors&&r.graphQLErrors.length>0&&r.graphQLErrors.map((function(e){o+="\n".concat(e.message," ")})),void Object(i.a)("error",o)}a&&a.getEstudioPorOrden&&(t?(X(a.getEstudioPorOrden.ordenID.proveedorID.id,a.getEstudioPorOrden.ordenID.proveedorID.tipo),f(a.getEstudioPorOrden),h(re(a.getEstudioPorOrden.camposEstudio)),D(F(F({},te(a.getEstudioPorOrden.camposEstudio,a.getEstudioPorOrden.estudioID.camposEstudio,a.getEstudioPorOrden.estadoEstudio)),{},{estadoEstudio:a.getEstudioPorOrden.estadoEstudio,fechaReporte:a.getEstudioPorOrden.fechaReporte?b()(a.getEstudioPorOrden.fechaReporte).utc():"",tipoDeMuestraID:a.getEstudioPorOrden.tipoDeMuestraID.id,codigoInterno:a.getEstudioPorOrden.codigoInterno}))):(Z.setFieldValue("fechaReporte",a.getEstudioPorOrden.fechaReporte?b()(a.getEstudioPorOrden.fechaReporte).utc():""),f(F(F({},d),{},{estadoEstudio:a.getEstudioPorOrden.estadoEstudio,fechaReporte:a.getEstudioPorOrden.fechaReporte?b()(a.getEstudioPorOrden.fechaReporte).utc():"",camposEstudio:a.getEstudioPorOrden.camposEstudio})))),c(!1)}))};Object(n.useEffect)((function(){t&&ee(t,!0)}),[t]),Object(n.useEffect)((function(){if(d&&d.estudioID)switch(d.estudioID.id){case"604e2602cc5c345ec442f32e":if(Z.values.cutoff_igg&&Z.values.cutoff_igm&&Z.values.factor_multiplicador){var e=b()(d.fechaSolicitud).utc();if(b()(e.format("YYYY-MM-DD")).isSameOrBefore("2022-01-14")){if(Z.values.valor_igg){var t=Number(Number(Z.values.valor_igg)*Number(Z.values.factor_multiplicador)/Number(Z.values.cutoff_igg)).toFixed(1),a=Object(k.q)(d.camposEstudio,"resultado_igg","unidad"),r=Object(k.n)(t,Number(Z.values.factor_multiplicador));Z.setFieldValue("resultado_igg","".concat(t," ").concat(a," ").concat(r))}if(Z.values.valor_igm){var o=Number(Number(Z.values.valor_igm)*Number(Z.values.factor_multiplicador)/Number(Z.values.cutoff_igm)).toFixed(1),s=Object(k.q)(d.camposEstudio,"resultado_igg","unidad"),n=Object(k.n)(o,Number(Z.values.factor_multiplicador));Z.setFieldValue("resultado_igm","".concat(o," ").concat(s," ").concat(n))}}if(b()(e.format("YYYY-MM-DD")).isSameOrAfter("2022-01-15")){if(Z.values.valor_igg){var l=.02*Number(Z.values.cutoff_igg)+.36,c=Number(Number(Z.values.valor_igg)/Number(l)).toFixed(1),i=Object(k.o)(c,Number(Z.values.factor_multiplicador));Z.setFieldValue("resultado_igg","".concat(c," ").concat(i))}if(Z.values.valor_igm){var u=.02*Number(Z.values.cutoff_igm)+.16,m=Number(Number(Z.values.valor_igm)/Number(u)).toFixed(1),f=Object(k.o)(m,Number(Z.values.factor_multiplicador));Z.setFieldValue("resultado_igm","".concat(m," ").concat(f))}}}break;case"6136babfce956300042d7537":if(Z.values.cutoff&&Z.values.valor_muestra){var j=Object(k.b)(Z.values.valor_muestra,Z.values.cutoff),v=Object(k.k)(j);Z.setFieldValue("resultado","".concat(j,"% (").concat(v,")"))}break;case"60b7eda8cae2e600045e04e9":if(Z.values.total_normales_13&&Z.values.total_13){var O=Number(Z.values.total_13)-Number(Z.values.total_normales_13);Z.setFieldValue("total_anormales_13",O)}if(Z.values.total_normales_21&&Z.values.total_21){var h=Number(Z.values.total_21)-Number(Z.values.total_normales_21);Z.setFieldValue("total_anormales_21",h)}if(Z.values.total_normales_18&&Z.values.total_18){var x=Number(Z.values.total_18)-Number(Z.values.total_normales_18);Z.setFieldValue("total_anormales_18",x)}if(Z.values.total_normales_xy&&Z.values.total_xy){var p=Number(Z.values.total_xy)-Number(Z.values.total_normales_xy);Z.setFieldValue("total_anormales_xy",p)}if(Z.values.total_anormales_13&&Z.values.anormales_d_13){var g=Number(Z.values.total_anormales_13)-Number(Z.values.anormales_d_13);Z.setFieldValue("anormales_n_13",g)}if(Z.values.total_anormales_21&&Z.values.anormales_d_21){var _=Number(Z.values.total_anormales_21)-Number(Z.values.anormales_d_21);Z.setFieldValue("anormales_n_21",_)}if(Z.values.total_anormales_18&&Z.values.anormales_d_18){var N=Number(Z.values.total_anormales_18)-Number(Z.values.anormales_d_18);Z.setFieldValue("anormales_n_18",N)}if(Z.values.total_anormales_xy&&Z.values.anormales_d_xy){var E=Number(Z.values.total_anormales_xy)-Number(Z.values.anormales_d_xy);Z.setFieldValue("anormales_n_xy",E)}if(Z.values.total_normales_13&&Z.values.total_13&&Z.values.total_normales_21&&Z.values.total_21&&Z.values.total_normales_18&&Z.values.total_18&&Z.values.total_normales_xy&&Z.values.total_xy){var D=Number(Z.values.total_normales_13)/Number(Z.values.total_13),y=Number(Z.values.total_normales_21)/Number(Z.values.total_21),w=Number(Z.values.total_normales_18)/Number(Z.values.total_18),I=Number(Z.values.total_normales_xy)/Number(Z.values.total_xy),P=D*y*w,R=Math.pow(P,1/3),S=I*Math.pow(R,22)*100;Z.setFieldValue("interpretacion","Se estima un: ".concat(Number(S).toFixed(2)," % De espermatozoides sin aberraci\xf3n cromos\xf3mica alguna."))}break;case"60b959f6092ae30004224ddb":var C=b()(d.fechaSolicitud).utc();if(b()(C.format("YYYY-MM-DD")).isSameOrBefore("2021-11-25")){if(Z.values.cutoff&&Z.values.valor_muestra){var Y=Object(k.a)(Z.values.valor_muestra,Z.values.cutoff),M=Object(k.g)(Y);Z.setFieldValue("resultado","".concat(Y," (").concat(M,")"))}}else if(Z.values.cutoff&&Z.values.valor_muestra){var F=Object(k.b)(Z.values.valor_muestra,Z.values.cutoff),V=Object(k.k)(F);Z.setFieldValue("resultado","".concat(F,"% (").concat(V,")"))}break;case"614b01eb3eb6000004ce023c":if(Z.values.b_directa&&Z.values.b_indirecta){var A=Number(Z.values.b_directa)+Number(Z.values.b_indirecta);Z.setFieldValue("b_total",A)}case"6156725908b9d500040b0dc6":if(Z.values.polimorfonucleares){var L=100-Number(Z.values.polimorfonucleares);Z.setFieldValue("mononucleares",L)}}}),[Z.values]);var te=function(e,t,a){var r={},o=t.filter((function(e){if(e.esCambiante)return e}));return"RECIBIDO"===a&&(o.length>0&&o.forEach((function(t){e.forEach((function(a,r){a.nombre===t.nombre&&(t.valorPorDefecto&&(e[r].valorPorDefecto=t.valorPorDefecto,e[r].valor=t.valorPorDefecto),e[r].unidad=t.unidad)}))})),t.forEach((function(t){e.forEach((function(a,r){a.nombre===t.nombre&&(e[r].referencia=t.referencia,e[r].unidad=t.unidad,e[r].opciones=t.opciones,e[r].formulaValidation=t.formulaValidation)}))}))),e.map((function(e){r[e.nombre]=e.valor?ae(e.valor,e.tipo):e.valorPorDefecto})),r},ae=function(e,t){return"FECHA"===t?e?b()(e,"DD/MM/YYYY").utc():"":e},re=function(e,t){var a=[],r=[],o=0,s=e.filter((function(e){if("DIVISOR"==e.tipo)return o>0&&(a[o-1].campos=r),a.push({index:o,title:e.label,active:!1,campos:[],content:null}),r=[],o++,e;o>0&&r.push(e)}));return r.length>0&&a.length>0&&(a[o-1].campos=r),"count"===t?s.length:a};if(o||!t)return Object(s.jsx)(_.a,{title:"",description:"",children:Object(s.jsx)(g.a,{css:A,size:80,color:"#000"})});var oe=[{index:0,title:"Datos del Estudio",content:Object(s.jsx)(E.a,{initialValues:{estadoEstudio:d.estadoEstudio,fechaReporte:d.fechaReporte?b()(d.fechaReporte).utc():"",tipoDeMuestraID:d.tipoDeMuestraID.id,codigoInterno:d.codigoInterno},onSubmit:W,children:function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsxs)("div",{className:"w-full sm:w-full md:w-full lg:w-2/4 xl:w-1/4 mb-2",children:[d.fechaReporte?Object(s.jsxs)("div",{className:"form-element",children:[Object(s.jsx)("div",{className:"form-label",children:"Fecha del informe"}),Object(s.jsx)(y.a,{locale:"es",name:"fechaReporte",dateFormat:"DD-MM-YYYY",timeFormat:!1,isValidDate:$,input:!0,closeOnSelect:!0,inputProps:{className:"form-input",placeholder:"Seleccione una fecha"},viewMode:"days",value:e.values.fechaReporte,onChange:function(t){e.setFieldValue("fechaReporte",t)}})]}):null,d.estudioID.tipoDeMuestras.length>1?Object(s.jsxs)("div",{className:"form-element",children:[Object(s.jsx)("div",{className:"form-label",children:"Tipo de Muestra"}),Object(s.jsxs)("select",{className:"form-select",name:"tipoDeMuestraID",placeholder:"Seleccione",onChange:e.handleChange,value:e.values.tipoDeMuestraID,children:[Object(s.jsx)("option",{value:"",children:"Seleccione una opcion"}),d.estudioID.tipoDeMuestras.map((function(e,t){return Object(s.jsx)("option",{value:e.id,children:e.nombre},"tdm".concat(t))}))]})]}):null,Object(s.jsxs)("div",{className:"form-element",children:[Object(s.jsx)("div",{className:"form-label",children:"Estado del Estudio"}),Object(s.jsxs)("select",{className:"form-select",name:"estadoEstudio",placeholder:"Seleccione una opcion",onChange:e.handleChange,value:e.values.estadoEstudio,children:[Object(s.jsx)("option",{value:"RECIBIDO",children:"Recibido"}),Object(s.jsx)("option",{value:"EN_PROCESO",children:"En Proceso"}),Object(s.jsx)("option",{value:"PROCESADO",children:"Procesado"}),Object(s.jsx)("option",{value:"CANCELADO",children:"Cancelado"}),Object(s.jsx)("option",{value:"NO_PROCESADO",children:"No Procesado"})]})]}),d.codigoInterno?Object(s.jsxs)("div",{className:"form-element",children:[Object(s.jsx)("div",{className:"form-label",children:"Codigo Interno"}),Object(s.jsx)("input",{name:"codigoInterno",type:"text",className:"focus:outline-none form-input ".concat(e.errors.codigoInterno?"form-input-invalid":""," "),placeholder:"",onChange:e.handleChange,value:e.values.codigoInterno})]}):null]}),d.ordenID.nota?Object(s.jsxs)("div",{className:"text-base mb-1 pl-3 mt-5",children:[Object(s.jsx)("span",{className:"mr-1",children:"Nota/Informaci\xf3n clinica Relevante:"}),Object(s.jsx)("span",{className:"font-bold text-red-500",children:d.ordenID.nota})]}):null,Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{type:"submit",disabled:!e.isValid,className:"btn btn-default bg-blue-600 mx-auto hover:bg-blue-700 text-white btn-rounded mr-2",children:"Guardar"}),d.fechaReporte?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(C.a,{size:"big",disabled:!1,estudio:d,cliente:d.ordenID.clientID,showConfirm:!0}),V.length>0?Object(s.jsx)("div",{children:Object(s.jsxs)("button",{className:"btn btn-default bg-blue-600 hover:bg-blue-700 text-white btn-rounded btn-icon",onClick:function(e){J()},children:[Object(s.jsx)("span",{className:"mr-2",children:"Notificar Resultado"}),Object(s.jsx)(I.o,{className:"stroke-current",size:20})]})}):null]}):null]})]})}})},{index:1,title:"Emisi\xf3n de Resultados",content:Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{className:"text-right mb-2",children:Object(s.jsx)(x.a,{href:"/estudios/edit/".concat(d.estudioID.id),children:Object(s.jsx)("a",{className:"link self-end",children:"Editar Valores Estudio"})})}),Object(s.jsxs)("div",{className:"flex bg-white flex-col lg:flex-row lg:flex-wrap w-full mb-5",children:[Object(s.jsx)(R.a,{tabs:O,config:d.camposEstudio,formik:Z,editable:"PROCESADO"===d.estadoEstudio}),Object(s.jsx)("button",{type:"submit",disabled:!Z.isValid,onClick:function(e){return Z.handleSubmit(Z.values)},className:"btn btn-default bg-blue-600 mx-auto hover:bg-blue-700 text-white btn-rounded",children:"Guardar"})]})]})},{index:2,title:"Documentos adjuntos",content:Object(s.jsx)(P.a,{estudioOrderId:t})}];return Object(s.jsx)(_.a,{description:"Estudio: ".concat(d.estudioID.nombre," | ").concat(d.codigoEstudio).concat(d.estudioNumero),children:Object(s.jsx)(Y.a,{tabs:oe})})};function q(){var e=Object(o.a)(['\n  display: block;\n  margin: 0 auto;\n  border-color: "#000";\n']);return q=function(){return e},e}var Q=Object(u.css)(q());t.default=Object(f.a)((function(){Object(j.b)().userInformation;var e=Object(n.useState)(!0),t=e[0],a=e[1],o=Object(c.useRouter)(),u=o.query.id,d=Object(n.useState)([]),f=d[0],h=d[1],p=Object(n.useState)(null),N=p[0],E=p[1],D=Object(n.useState)(null),y=D[0],w=D[1],I=Object(l.c)(m.j),P=Object(r.a)(I,1)[0];return Object(n.useEffect)((function(){var e;o.query.id&&(e=o.query.id,P({variables:{id:e}}).then((function(e){var t=e.data,r=e.error;if(r){var o="Hubo un error al obtener los datos de la orden.";return r.graphQLErrors&&r.graphQLErrors.length>0&&r.graphQLErrors.map((function(e){o+="\n".concat(e.message," ")})),void Object(i.a)("error",o)}if(t&&t.getOrdenDetalles){var s=[];s.push({title:"Inicio",url:"/dashboard",last:!1}),s.push({title:"Proceso de Resultados Orden ".concat(t.getOrden.ordenNumero),url:"/processing/orden/".concat(t.getOrden.id),last:!0}),h(s),E(t.getOrdenDetalles),w(t.getOrden)}a(!1)})))}),[o.query]),Object(n.useEffect)((function(){}),[]),t||!u?Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"flex flex-row mb-4",children:Object(s.jsx)("div",{className:"w-full",children:Object(s.jsx)(v.a,{items:f,home:!0,icon:"arrow"})})}),Object(s.jsx)("div",{className:"w-full px-4",children:Object(s.jsx)("div",{children:Object(s.jsx)(g.a,{css:Q,size:80,color:"#000"})})})]}):Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"flex flex-row mb-4",children:Object(s.jsx)("div",{className:"w-full",children:Object(s.jsx)(v.a,{items:f,home:!0,icon:"arrow"})})}),Object(s.jsxs)("div",{className:"w-full px-4",children:[Object(s.jsx)(O.a,{title:"Orden No. ".concat(y.ordenNumero," "),subtitle:Object(s.jsx)(x.a,{href:"/pacientes/detalle/".concat(y.clientID.id),children:Object(s.jsxs)("div",{className:"text-xl font-bold",children:["Paciente:",Object(s.jsx)("a",{className:"link",children:" ".concat(y.clientID.nombres," ").concat(y.clientID.apellidos)})]})})}),Object(s.jsx)(_.a,{title:"",description:Object(s.jsx)("span",{children:"Datos generales"}),children:Object(s.jsx)("div",{className:"flex flex-col lg:flex-row lg:flex-wrap w-full lg:space-x-4",children:Object(s.jsxs)("div",{className:"flex flex-col w-3/4",children:[Object(s.jsx)(x.a,{href:"/orden/detail/".concat(y.id),children:Object(s.jsxs)("div",{className:"text-sm mb-1",children:["Orden No:",Object(s.jsx)("a",{className:"link",children:" ".concat(y.ordenNumero)})]})}),Object(s.jsxs)("div",{className:"text-sm mb-1",children:["Fecha Solicitud:"," ","".concat(b()(y.fechaSolicitud).utc().format("DD/MM/YYYY"))]}),Object(s.jsxs)("div",{className:"text-sm mb-1",children:["Tipo de cliente: ",y.proveedorID.nombre]}),y.nota?Object(s.jsxs)("div",{className:"text-sm mb-1",children:["Nota/Informaci\xf3n clinica Relevante: ",estudio.ordenID.nota]}):null]})})}),N.map((function(e){return Object(s.jsx)(L,{id:e.id},e.id)}))]})]})}))},Ifti:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/processing/orden/[id]",function(){return a("Cao4")}])},TSYQ:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var a=arguments[t];a&&(e=n(e,s(a)))}return e}function s(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)a.call(e,r)&&e[r]&&(t=n(t,r));return t}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},ftaV:function(e,t,a){"use strict";var r=a("nKUr"),o=a("TSYQ"),s=a.n(o);t.a=function(e){var t=e.className,a=e.round,o=e.height,n=e.width;return Object(r.jsx)("div",{className:s()(t,"shimmer","shimmer-line",{"shimmer-round":a}),style:{height:o,width:n}})}},hKE6:function(e,t,a){"use strict";var r=a("ODXe"),o=a("nKUr"),s=a("q1tI"),n=a("jRMg"),l=function(e){var t=e.accept,a=void 0===t?[]:t,r=e.onChange;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer",children:[Object(o.jsx)("div",{className:"absolute",children:Object(o.jsx)("div",{className:"flex flex-col items-center",children:Object(o.jsx)("span",{className:"block text-blue-400 font-normal",children:"Haz click aqu\xed para cargar un archivo"})})}),Object(o.jsx)("input",{type:"file",className:"h-full w-full opacity-0",accept:a.join(","),onChange:r})]}),Object(o.jsxs)("div",{className:"flex justify-between items-center text-gray-400",children:[Object(o.jsx)("span",{children:"Solo se aceptan archivos de tipo: PDF, DOC, DOCX, JPG, PNG"}),Object(o.jsx)("span",{className:"flex items-center ",children:"Max. 5MB"})]})]})},c=a("ma3e"),i=a("ftaV"),u=a("n7fY"),d=function(e){var t=e.id,a=e.fileName,r=e.fileURL,n=e.loading,l=e.mimeType,d=e.onRemove,b=Object(s.useCallback)((function(){d&&d(t)}),[t]);return n?Object(o.jsxs)("div",{children:[Object(o.jsx)(i.a,{height:"10px",className:"mb-1"}),Object(o.jsx)(i.a,{height:"10px",width:"20%"})]}):Object(o.jsxs)("div",{className:"flex items-start justify-start p-2 space-x-4",children:[Object(o.jsxs)("div",{className:"flex flex-col w-full",children:[Object(o.jsx)("div",{className:"text-sm font-bold",children:a}),Object(o.jsx)("div",{className:"text-sm text-gray-500",children:l})]}),Object(o.jsxs)("div",{className:"flex-shrink-0",children:[Object(o.jsx)("a",{className:"btn btn-default bg-transparent bg-rounded hover:bg-blue-50 hover:text-blue-600 text-blue-500",href:r,target:"_blank",children:"DESCARGAR"}),Object(o.jsx)(u.a,{color:"danger",flat:!0,rounded:!0,onClick:b,children:Object(o.jsx)(c.i,{style:{display:"inline"}})})]})]})},b=a("VreA"),m=a("iX8M");t.a=function(e){var t=e.estudioOrderId,a=Object(s.useState)(),c=a[0],i=a[1],u=Object(n.e)(b.a,{variables:{id:t},refetchAfterMutations:[{mutation:m.b},{mutation:m.C}]}),f=(u.loading,u.data),j=Object(n.d)(m.b),v=Object(r.a)(j,2),O=v[0],h=v[1].loading,x=Object(n.d)(m.C),p=Object(r.a)(x,1)[0],g=Object(s.useCallback)((function(e){var a=e.target;a.validity&&O({variables:{id:t,file:a.files[0]}})}),[t]),_=Object(s.useCallback)((function(e){confirm("Estas seguro de eliminar?")&&(i(e),p({variables:{id:t,fileId:e}}))}),[t]),N=Object(s.useMemo)((function(){return(null===f||void 0===f?void 0:f.getEstudioPorOrden)?f.getEstudioPorOrden.attachmentFiles:[]}),[f]);return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"w-full mb-4",children:[N.map((function(e){return Object(o.jsx)(d,{id:e.id,fileName:e.name,fileURL:e.url,mimeType:e.mimeType,onRemove:_,loading:c===e.id})})),h&&Object(o.jsx)(d,{loading:!0})]}),Object(o.jsx)(l,{accept:[".pdf",".doc",".docx",".jpg",".png"],onChange:g})]})}},n7fY:function(e,t,a){"use strict";var r=a("nKUr"),o=a("TSYQ"),s=a.n(o);t.a=function(e){var t=e.children,a=e.circle,o=e.color,n=e.flat,l=e.rounded,c=e.onClick;return Object(r.jsx)("button",{className:s()("btn btn-default",{"bg-blue-500":!n&&null==o,"bg-red-500":!n&&null!=o,"bg-transparent":n,"bg-rounded":l,"bg-circle":a,"hover:bg-blue-50":null==o,"hover:bg-red-50":"danger"===o,"hover:text-blue-600":null==o,"hover:text-red-600":"danger"===o,"text-blue-500":n&&null==o,"text-red-500":n&&"danger"===o,"text-white":!n}),onClick:c,children:t})}}},[["Ifti",0,1,4,10,5,11,7,22,25,2,3,6,8,9,12,14,13,15,18,26,28,33]]]);