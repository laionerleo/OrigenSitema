_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[88],{IqVg:function(e,t,l){"use strict";l.d(t,"a",(function(){return s}));l("wd/R");var a=l("FGyW"),s=(l("jDDT"),function(e,t){a.b[e](t,{position:"top-right",autoClose:"error"===e?4e3:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,progress:void 0})})},UjRO:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pacientes/detalle/[id]",function(){return l("e17U")}])},e17U:function(e,t,l){"use strict";l.r(t);var a=l("xvhg"),s=l("jT3O"),i=l("q1tI"),n=l.n(i),r=l("jRMg"),o=l("nOHt"),c=l("DFyN"),u=l("VreA"),d=l("YFqc"),m=l.n(d),f=l("6nGu"),b=l("gWdR"),p=l("wd/R"),g=l.n(p),v=l("DSWd"),h=l("IqVg"),N=l("qGs6"),x=l.n(N),w=l("qKvR"),O=n.a.createElement;function j(){var e=Object(s.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: '#000';\n"]);return j=function(){return e},e}var S=Object(w.css)(j());t.default=Object(c.a)((function(){var e=Object(r.c)(u.P),t=Object(a.a)(e,1)[0],l=Object(r.c)(u.D),s=Object(a.a)(l,1)[0],c=Object(r.c)(u.G),d=Object(a.a)(c,1)[0],p=Object(i.useState)(!1),N=(p[0],p[1],Object(i.useState)(!1)),w=N[0],j=N[1],y=Object(i.useState)(!1),D=y[0],E=y[1],R=Object(i.useState)(null),U=R[0],P=R[1],_=Object(i.useState)([]),C=_[0],I=_[1],q=Object(i.useState)([]),z=q[0],F=q[1],L=Object(i.useState)([]),T=L[0],k=L[1],Q=Object(r.c)(u.eb),Y=Object(a.a)(Q,1)[0],B=Object(i.useState)(null),V=B[0],A=B[1],H=Object(o.useRouter)(),M=function(e){s({variables:{clientId:e}}).then((function(t){var l=t.data,a=t.error;if(a){var s="Hubo un problema con consultar los estudios del paciente.";return a.graphQLErrors&&a.graphQLErrors.length>0&&a.graphQLErrors.map((function(e){s+="\n".concat(e.message," ")})),void Object(h.a)("error",s)}l.getOrdenesByUser&&(F(l.getOrdenesByUser),function(e){d({variables:{id:e}}).then((function(e){var t=e.data,l=e.error;if(l){var a="Hubo un problema con consultar los estudios del paciente.";return l.graphQLErrors&&l.graphQLErrors.length>0&&l.graphQLErrors.map((function(e){a+="\n".concat(e.message," ")})),void Object(h.a)("error",a)}t.getFichasByClient&&(E(!0),k(t.getFichasByClient))}))}(e)),j(!0)}))};return Object(i.useEffect)((function(){var e,l;H.query.id&&(l=H.query.id,Y({variables:{id:l}}).then((function(e){var t=e.data,l=e.error;if(t&&t.getVacunaByUser){var a=t.getVacunaByUser,s=(a.id,a.dosisPrimera),i=a.dosisSegunda,n=a.dosisUnica,r=a.dosisRefuerzoPrimero,o=a.dosisRefuerzoSegundo,c=a.fechaUltimoTest,u=c?new Date(c):null,d=u?g()(u.toLocaleDateString("en-US")):null,m=d?d.format("DD-MM-YYYY"):"";A({dosisPrimera:s||"",dosisSegunda:i||"",dosisUnica:n||"",dosisRefuerzoPrimero:r||"",dosisRefuerzoSegundo:o||"",fechaUltimoTest:m})}l&&console.log(l)})),e=H.query.id,t({variables:{input:{id:e}}}).then((function(t){var l=t.data,a=t.error;if(l&&l.getClient){P(l.getClient),M(l.getClient.id);var s=[];s.push({title:"Inicio",url:"/dashboard",last:!1}),s.push({title:"Gestion de pacientes",url:"/pacientes",last:!1}),s.push({title:"Historial de ".concat(l.getClient.nombres," ").concat(l.getClient.apellidos),url:"".concat(e),last:!0}),I(s)}if(a){console.log(a);var i="Hubo un problema con consultar la informaci\xf3n del paciente.";a.graphQLErrors&&a.graphQLErrors.length>0&&a.graphQLErrors.map((function(e){i+="\n".concat(e.message," ")})),Object(h.a)("error",i),H.push("/pacientes")}})))}),[H.query]),U?O("div",null,O("div",{className:"w-full px-4"},O("div",{className:"flex flex-row mb-4"},O("div",{className:"w-full"},O(f.a,{items:C,home:!0,icon:"arrow"}))),O("div",{className:"w-full py-2 px-0"},O(b.a,{title:"",description:O("span",null,"Datos del paciente"),right:O(m.a,{href:"/pacientes/edit/".concat(U.id)},O("a",{className:"link self-end"},"Editar Paciente"))},O("div",{className:"flex flex-col lg:flex-row lg:flex-wrap w-full"},O("div",{className:"flex flex-col w-3/4"},O("div",{className:"text-sm mb-1"},"Nombres: ",U.nombres),O("div",{className:"text-sm mb-1"},"Apellidos: ",U.apellidos),O("div",{className:"text-sm mb-1"},"DNI: ",U.ci),U.passport?O("div",{className:"text-sm mb-1"},"Nro. de Pasaporte: ",U.passport):null,U.fecha_nacimiento?O("div",{className:"text-sm mb-1"},"Fecha Nacimiento: ",U.fecha_nacimiento):null,V?O(n.a.Fragment,null,O("div",{className:"text-sm mt-2 mb-4"},O("b",null,"Vacunas suministradas COVID")),V.dosisPrimera?O("div",{className:"text-sm mb-1"},"1ra Dosis: ",O("i",null,V.dosisPrimera)):null,V.dosisSegunda?O("div",{className:"text-sm mb-1"},"2da Dosis: ",O("i",null,V.dosisSegunda)):null,V.dosisUnica?O("div",{className:"text-sm mb-1"},"Dosis unica: ",O("i",null,V.dosisUnica)):null,V.dosisRefuerzoPrimero?O("div",{className:"text-sm mb-1"},"1ra dosis refuerzo: ",O("i",null,V.dosisRefuerzoPrimero)):null,V.dosisRefuerzoSegundo?O("div",{className:"text-sm mb-1"},"2da dosis refuerzo: ",O("i",null,V.dosisRefuerzoSegundo)):null,O("div",{className:"text-sm mb-1"},"Fecha de ultima dosis: ",O("i",null,V.fechaUltimoTest?V.fechaUltimoTest:"-- Sin registro --"))):null))),w&&z.length>0?O(b.a,{title:"",description:O("span",null,"Ordenes")},O("div",{className:"flex flex-col w-full"},O("div",{className:"overflow-x-scroll lg:overflow-hidden"},O("table",{className:"table striped"},O("thead",null,O("tr",null,O("th",null,"Fecha Solicitud"),O("th",null,"Orden #"),O("th",null,"Tipo Cliente"),O("th",null,"Monto"),O("th",null,"Acciones"))),O("tbody",null,z.map((function(e){return O("tr",{key:e.id},O("td",null,g()(e.fechaSolicitud).utc().format("DD/MM/YYYY")),O("td",null,e.ordenNumero),O("td",null,e.proveedorID.nombre),O("td",null,e.totalAPagar," Bs"),O("td",null,O(m.a,{href:"/pacientes/detalle/[pacientID]/[id]",as:"/pacientes/detalle/".concat(U.id,"/").concat(e.id)},O("a",null,"Ver Analisis"))))}))))))):null,D&&T.length>0?O(b.a,{title:"",description:O("span",null,"Analisis sistema anterior")},O("div",{className:"flex flex-col w-full"},O("div",{className:"overflow-x-scroll lg:overflow-hidden"},O("table",{className:"table striped"},O("thead",null,O("tr",null,O("th",null,"Fecha Solicitud"),O("th",null,"Estudio"),O("th",null,"Codigo Estudio"),O("th",null,"Tipo Cliente"),O("th",null,"Acciones"))),O("tbody",null,T.map((function(e){return O("tr",{key:e._id},O("td",null,e.fechaSolicitud),O("td",null,e.testID.nombre),O("td",null,e.codigo),O("td",null,e.tipoFicha),O("td",null,O(v.a,{rowData:e,test:e.testID})))}))))))):null))):O("div",null,O("div",{className:"flex flex-row mb-4"},O("div",{className:"w-full"},O(f.a,{items:C,home:!0,icon:"arrow"}))),O("div",{className:"w-full px-4"},O("div",null,O(x.a,{css:S,size:80,color:"#000"}))))}))},gWdR:function(e,t,l){"use strict";var a=l("q1tI"),s=l.n(a).a.createElement;t.a=function(e){var t=e.title,l=void 0===t?null:t,a=e.description,i=void 0===a?null:a,n=e.right,r=void 0===n?null:n,o=e.children;return s("div",{className:"widget w-full p-4 mb-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800"},(l||i||r)&&s("div",{className:"flex flex-row items-center justify-between mb-6"},s("div",{className:"flex flex-col"},s("div",{className:"text-sm font-light text-gray-500"},l),s("div",{className:"text-sm font-bold"},i)),r),o)}}},[["UjRO",0,1,4,10,5,11,7,22,2,3,6,8,9,12,14,13,26,42]]]);