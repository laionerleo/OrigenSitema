_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[65],{"3Xey":function(e,t,c){"use strict";c.r(t);c("z7pX"),c("cpVT");var s=c("xvhg"),i=c("jT3O"),l=c("nKUr"),a=c("q1tI"),r=c("jRMg"),n=c("nOHt"),o=c.n(n),d=c("YFqc"),b=c.n(d),j=c("DFyN"),x=c("VreA"),m=c("iX8M"),u=c("6nGu"),h=c("gWdR"),f=c("7qI8"),O=(c("B3WN"),c("TCCB")),v=c("wd/R"),p=c.n(v),g=c("z0WU"),N=c("qGs6"),w=c.n(N),y=c("qKvR"),z=c("FLf1"),D=c.n(z),E=(c("D1Df"),c("KRtS"),c("IGOO")),I=(c("FNPF"),c("2kOW")),C=c("YwrL"),T=(c("ojc3"),c("IqVg"));c("nyvF");function k(){var e=Object(i.a)(['\n  display: block;\n  margin: 0 auto;\n  border-color: "#000";\n']);return k=function(){return e},e}var S=Object(y.css)(k());t.default=Object(j.a)((function(){var e=Object(r.c)(x.f),t=Object(s.a)(e,1)[0],c=Object(r.d)(m.m),i=Object(s.a)(c,1)[0],d=Object(a.useState)(!1),j=(d[0],d[1],Object(a.useState)(null)),v=j[0],N=j[1],y=Object(a.useState)(null),z=y[0],k=y[1],_=Object(a.useState)(0),A=(_[0],_[1],Object(n.useRouter)()),F=A.query.id,L=(Object(O.b)().userInformation,[{title:"Inicio",url:"/dashboard",last:!1},{title:"Buscar Cotizacion",url:"/buscar-cotizacion",last:!1},{title:"Detalle Cotizacion",url:"".concat(F),last:!0}]);return Object(a.useEffect)((function(){A.query.id&&t({variables:{id:F}}).then((function(e){var t=e.data,c=e.error;if(c){var s="Hubo un error al crear el estudio.";c.graphQLErrors&&c.graphQLErrors.length>0&&c.graphQLErrors.map((function(e){s+="\n".concat(e.message," ")})),Object(T.a)("error",s)}if(!t.getCotizacion)return Object(T.a)("error","La Cotizacion consultada no existe."),void o.a.push("/buscar-cotizacion");t&&t.getCotizacionDetalles&&k(t.getCotizacionDetalles),t&&t.getCotizacion&&N(t.getCotizacion)}))}),[A.query]),v?Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"w-full px-4",children:[Object(l.jsx)("div",{className:"flex flex-row mb-4",children:Object(l.jsx)("div",{className:"w-full",children:Object(l.jsx)(u.a,{items:L,home:!0,icon:"arrow"})})}),Object(l.jsxs)("div",{className:"w-full py-2 px-0",children:[Object(l.jsx)(h.a,{title:"",description:Object(l.jsxs)("span",{children:["Datos de la Cotizacion ",v.cotizacionNumero]}),right:Object(l.jsx)(I.a,{permission:C.f.UPDATE_QUOTES,children:Object(l.jsx)(b.a,{href:"/cotizacion/edit/".concat(F),children:Object(l.jsx)("a",{className:"link self-end",children:"Editar Cotizacion"})})}),children:Object(l.jsxs)("div",{className:"flex flex-col lg:flex-row lg:flex-wrap w-full lg:space-x-4",children:[Object(l.jsxs)("div",{className:"flex flex-col w-3/4",children:[Object(l.jsxs)("div",{className:"text-sm mb-1",children:["No. de Cotizacion: ",v.cotizacionNumero]}),v.nombreMedico?Object(l.jsxs)("div",{className:"text-sm mb-1",children:["Medico Solicitante: ",v.nombreMedico]}):null,Object(l.jsxs)("div",{className:"text-sm mb-1",children:["Fecha Solicitud:"," ",p()(v.fechaSolicitud).utc().format("DD/MM/YYYY")]}),Object(l.jsx)(b.a,{href:"/proveedor/estudios/".concat(v.proveedorID.id),className:"text-sm mb-1",children:Object(l.jsxs)("div",{className:"text-sm mb-1",children:["Tipo de Cliente:",Object(l.jsxs)("a",{className:"link",children:[" ".concat(v.proveedorID.nombre)," ",v.contratista?"| ".concat(v.contratista):""]})]})}),Object(l.jsxs)("div",{className:"text-sm mb-1",children:["Descuento: ",v.porcentajeDescuento," %"]}),Object(l.jsxs)("div",{className:"text-sm mb-1",children:["Total Pagado: ",v.totalAPagar," Bs."]}),v.nota?Object(l.jsxs)("div",{className:"text-sm mb-1",children:["Nota/Informaci\xf3n clinica Relevante: ",v.nota]}):null]}),Object(l.jsx)("div",{className:"w-full mt-5",children:Object(l.jsx)("button",{onClick:function(e){Object(g.d)(v,z)},className:"inline-block px-6 py-1 mx-auto mb-3 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none",children:"Descargar Recibo"})}),Object(l.jsx)("div",{className:"w-full mt-2",children:Object(l.jsx)(I.a,{permission:C.f.DELETE_QUOTES,children:Object(l.jsx)("button",{onClick:function(e){Object(E.confirmAlert)({customUI:function(e){var t=e.onClose;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"modal-backdrop fade-in"}),Object(l.jsx)("div",{className:"modal show ","data-background":"light",children:Object(l.jsx)("div",{className:"relative w-auto lg:my-4 mx-auto lg:max-w-lg max-w-sm",children:Object(l.jsxs)("div",{className:"bg-white text-gray-900 border-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-700 border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none",children:[Object(l.jsx)("div",{className:"relative p-4 flex-auto",children:Object(l.jsx)("div",{className:"flex items-start justify-start p-2 space-x-4",children:Object(l.jsx)("div",{className:"flex flex-col w-full",children:Object(l.jsx)("div",{className:"text-lg mb-2 font-bold",children:"\xbfEstas seguro que deseas eliminar la cotizacion?"})})})}),Object(l.jsxs)("div",{className:"flex items-center justify-end p-4 border-t border-gray-200 dark:border-gray-700 border-solid rounded-b space-x-2",children:[Object(l.jsx)("button",{className:"btn btn-default btn-rounded bg-white hover:bg-gray-100 text-gray-900",type:"button",onClick:t,children:"Cancelar"}),Object(l.jsx)("button",{className:"btn btn-default btn-rounded bg-red-500 hover:bg-red-600 text-white",type:"button",onClick:function(){t(),i({variables:{id:v.id}}).then((function(e){var t=e.data,c=e.error;if(c){console.log(c);var s="Hubo un error al tratar de eliminar la cotizacion.";return c.graphQLErrors&&c.graphQLErrors.length>0&&c.graphQLErrors.map((function(e){s+="\n".concat(e.message," ")})),void Object(T.a)("error",s)}t.deleteCotizacion&&(Object(T.a)("success","La Cotizacion fue eliminada correctamente."),A.push("/buscar-cotizacion"))}))},children:"Eliminar"})]})]})})})]})}})},className:"inline-block px-6 py-1 mx-auto mb-3 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-700 rounded-full shadow ripple hover:shadow-lg hover:bg-red-800 focus:outline-none",children:"Eliminar Cotizacion"})})})]})}),Object(l.jsx)(h.a,{title:"",description:Object(l.jsx)("span",{children:"Datos del paciente"}),right:Object(l.jsx)(I.a,{permission:C.f.UPDATE_PATIENTS,children:Object(l.jsx)(b.a,{href:"/pacientes/edit/".concat(v.clientID.id),children:Object(l.jsx)("a",{className:"link self-end",children:"Editar Paciente"})})}),children:Object(l.jsx)("div",{className:"flex flex-col lg:flex-row lg:flex-wrap w-full lg:space-x-4",children:Object(l.jsxs)("div",{className:"flex flex-col w-3/4",children:[Object(l.jsxs)("div",{className:"text-sm mb-1",children:["Nombres: ",v.clientID.nombres]}),Object(l.jsxs)("div",{className:"text-sm mb-1",children:["Apellidos: ",v.clientID.apellidos]}),Object(l.jsxs)("div",{className:"text-sm mb-1",children:["DNI: ",v.clientID.ci]}),Object(l.jsxs)("div",{className:"text-sm mb-1",children:["Telefono: ",v.clientID.telefono]})]})})}),Object(l.jsxs)(h.a,{title:"",description:Object(l.jsx)("span",{children:"Estudios Realizados"}),children:[Object(l.jsx)("div",{className:"flex flex-col w-full",children:Object(l.jsx)("div",{className:"overflow-x-scroll lg:overflow-hidden",children:Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Nombre"}),Object(l.jsx)("th",{children:"Precio"})]})}),Object(l.jsx)("tbody",{children:z.map((function(e){var t=D.a.sign({ordenId:v.id},"Hnw5I!*GRV4thHlQSdA7r2YV*5uTSvpFDtAJztyu");"http://pacientes.origen.com.bo/resultados-orden?key=".concat(t);return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.estudioID.nombre}),Object(l.jsx)("td",{children:e.precio})]},e.id)}))})]})})}),Object(l.jsxs)("div",{className:"flex flex-col lg:flex-col lg:flex-wrap w-full mt-4 pr-5 justify-end",children:[Object(l.jsx)("div",{className:"d-flex flex-col ml-4",children:Object(l.jsxs)("h2",{className:"text-xl text-right self-end mb-2",children:["Sub Total: ",z.reduce((function(e,t){return Number(e+t.precio)}),0)," Bs"]})}),Object(l.jsx)("div",{className:"d-flex flex-col ml-4",children:Object(l.jsxs)("h2",{className:"text-xl text-right self-end mb-6",children:["Descuento: ",v.porcentajeDescuento," %"]})}),Object(l.jsx)("div",{className:"d-flex flex-col ml-4",children:Object(l.jsxs)("h2",{className:"text-xl text-right self-end mb-6",children:["Total a pagar: ",v.totalAPagar," Bs"]})})]})]}),Object(l.jsx)(I.a,{permission:C.f.READ_ACTIVITY_LOGS,children:Object(l.jsx)(h.a,{title:"",description:Object(l.jsx)("span",{children:"Historial"}),children:Object(l.jsx)(f.a,{documentId:F,documentType:"cotizaciones"})})})]})]})}):Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"flex flex-row mb-4",children:Object(l.jsx)("div",{className:"w-full",children:Object(l.jsx)(u.a,{items:L,home:!0,icon:"arrow"})})}),Object(l.jsx)("div",{className:"w-full px-4",children:Object(l.jsx)("div",{children:Object(l.jsx)(w.a,{css:S,size:80,color:"#000"})})})]})}))},FNPF:function(e,t,c){},G3l5:function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cotizacion/detail/[id]",function(){return c("3Xey")}])},gWdR:function(e,t,c){"use strict";var s=c("nKUr");t.a=function(e){var t=e.title,c=void 0===t?null:t,i=e.description,l=void 0===i?null:i,a=e.right,r=void 0===a?null:a,n=e.children;return Object(s.jsxs)("div",{className:"widget w-full p-4 mb-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800",children:[(c||l||r)&&Object(s.jsxs)("div",{className:"flex flex-row items-center justify-between mb-6",children:[Object(s.jsxs)("div",{className:"flex flex-col",children:[Object(s.jsx)("div",{className:"text-sm font-light text-gray-500",children:c}),Object(s.jsx)("div",{className:"text-sm font-bold",children:l})]}),r]}),n]})}},z7pX:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var s=c("6FTQ");var i=c("8rE2");function l(e){return function(e){if(Array.isArray(e))return Object(s.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(i.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["G3l5",0,1,4,10,5,11,7,22,2,3,6,8,9,12,14,13,26,28,27]]]);