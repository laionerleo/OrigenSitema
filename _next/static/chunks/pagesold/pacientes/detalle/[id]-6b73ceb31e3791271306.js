_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[89],{IqVg:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));s("wd/R");var c=s("FGyW"),i=(s("jDDT"),function(e,t){c.b[e](t,{position:"top-right",autoClose:"error"===e?4e3:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,progress:void 0})})},UjRO:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pacientes/detalle/[id]",function(){return s("e17U")}])},e17U:function(e,t,s){"use strict";s.r(t);var c=s("ODXe"),i=s("h4VS"),r=s("nKUr"),n=s("q1tI"),l=s("jRMg"),a=s("nOHt"),d=s("DFyN"),o=s("VreA"),j=s("YFqc"),b=s.n(j),h=s("6nGu"),u=s("gWdR"),x=s("wd/R"),O=s.n(x),m=s("DSWd"),f=s("IqVg"),p=s("qGs6"),g=s.n(p),v=s("qKvR");function N(){var e=Object(i.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: '#000';\n"]);return N=function(){return e},e}var w=Object(v.css)(N());t.default=Object(d.a)((function(){var e=Object(l.c)(o.P),t=Object(c.a)(e,1)[0],s=Object(l.c)(o.D),i=Object(c.a)(s,1)[0],d=Object(l.c)(o.G),j=Object(c.a)(d,1)[0],x=Object(n.useState)(!1),p=(x[0],x[1],Object(n.useState)(!1)),v=p[0],N=p[1],S=Object(n.useState)(!1),D=S[0],y=S[1],U=Object(n.useState)(null),E=U[0],R=U[1],P=Object(n.useState)([]),_=P[0],C=P[1],z=Object(n.useState)([]),F=z[0],I=z[1],q=Object(n.useState)([]),L=q[0],Q=q[1],T=Object(l.c)(o.eb),V=Object(c.a)(T,1)[0],Y=Object(n.useState)(null),B=Y[0],k=Y[1],A=Object(a.useRouter)(),H=function(e){i({variables:{clientId:e}}).then((function(t){var s=t.data,c=t.error;if(c){var i="Hubo un problema con consultar los estudios del paciente.";return c.graphQLErrors&&c.graphQLErrors.length>0&&c.graphQLErrors.map((function(e){i+="\n".concat(e.message," ")})),void Object(f.a)("error",i)}s.getOrdenesByUser&&(I(s.getOrdenesByUser),function(e){j({variables:{id:e}}).then((function(e){var t=e.data,s=e.error;if(s){var c="Hubo un problema con consultar los estudios del paciente.";return s.graphQLErrors&&s.graphQLErrors.length>0&&s.graphQLErrors.map((function(e){c+="\n".concat(e.message," ")})),void Object(f.a)("error",c)}t.getFichasByClient&&(y(!0),Q(t.getFichasByClient))}))}(e)),N(!0)}))};return Object(n.useEffect)((function(){var e,s;A.query.id&&(s=A.query.id,V({variables:{id:s}}).then((function(e){var t=e.data,s=e.error;if(t&&t.getVacunaByUser){var c=t.getVacunaByUser,i=(c.id,c.dosisPrimera),r=c.dosisSegunda,n=c.dosisUnica,l=c.dosisRefuerzoPrimero,a=c.dosisRefuerzoSegundo,d=c.fechaUltimoTest,o=d?new Date(d):null,j=o?O()(o.toLocaleDateString("en-US")):null,b=j?j.format("DD-MM-YYYY"):"";k({dosisPrimera:i||"",dosisSegunda:r||"",dosisUnica:n||"",dosisRefuerzoPrimero:l||"",dosisRefuerzoSegundo:a||"",fechaUltimoTest:b})}s&&console.log(s)})),e=A.query.id,t({variables:{input:{id:e}}}).then((function(t){var s=t.data,c=t.error;if(s&&s.getClient){R(s.getClient),H(s.getClient.id);var i=[];i.push({title:"Inicio",url:"/dashboard",last:!1}),i.push({title:"Gestion de pacientes",url:"/pacientes",last:!1}),i.push({title:"Historial de ".concat(s.getClient.nombres," ").concat(s.getClient.apellidos),url:"".concat(e),last:!0}),C(i)}if(c){console.log(c);var r="Hubo un problema con consultar la informaci\xf3n del paciente.";c.graphQLErrors&&c.graphQLErrors.length>0&&c.graphQLErrors.map((function(e){r+="\n".concat(e.message," ")})),Object(f.a)("error",r),A.push("/pacientes")}})))}),[A.query]),E?Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"w-full px-4",children:[Object(r.jsx)("div",{className:"flex flex-row mb-4",children:Object(r.jsx)("div",{className:"w-full",children:Object(r.jsx)(h.a,{items:_,home:!0,icon:"arrow"})})}),Object(r.jsxs)("div",{className:"w-full py-2 px-0",children:[Object(r.jsx)(u.a,{title:"",description:Object(r.jsx)("span",{children:"Datos del paciente"}),right:Object(r.jsx)(b.a,{href:"/pacientes/edit/".concat(E.id),children:Object(r.jsx)("a",{className:"link self-end",children:"Editar Paciente"})}),children:Object(r.jsx)("div",{className:"flex flex-col lg:flex-row lg:flex-wrap w-full",children:Object(r.jsxs)("div",{className:"flex flex-col w-3/4",children:[Object(r.jsxs)("div",{className:"text-sm mb-1",children:["Nombres: ",E.nombres]}),Object(r.jsxs)("div",{className:"text-sm mb-1",children:["Apellidos: ",E.apellidos]}),Object(r.jsxs)("div",{className:"text-sm mb-1",children:["DNI: ",E.ci]}),E.passport?Object(r.jsxs)("div",{className:"text-sm mb-1",children:["Nro. de Pasaporte: ",E.passport]}):null,E.fecha_nacimiento?Object(r.jsxs)("div",{className:"text-sm mb-1",children:["Fecha Nacimiento: ",E.fecha_nacimiento]}):null,B?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"text-sm mt-2 mb-4",children:Object(r.jsx)("b",{children:"Vacunas suministradas COVID"})}),B.dosisPrimera?Object(r.jsxs)("div",{className:"text-sm mb-1",children:["1ra Dosis: ",Object(r.jsx)("i",{children:B.dosisPrimera})]}):null,B.dosisSegunda?Object(r.jsxs)("div",{className:"text-sm mb-1",children:["2da Dosis: ",Object(r.jsx)("i",{children:B.dosisSegunda})]}):null,B.dosisUnica?Object(r.jsxs)("div",{className:"text-sm mb-1",children:["Dosis unica: ",Object(r.jsx)("i",{children:B.dosisUnica})]}):null,B.dosisRefuerzoPrimero?Object(r.jsxs)("div",{className:"text-sm mb-1",children:["1ra dosis refuerzo: ",Object(r.jsx)("i",{children:B.dosisRefuerzoPrimero})]}):null,B.dosisRefuerzoSegundo?Object(r.jsxs)("div",{className:"text-sm mb-1",children:["2da dosis refuerzo: ",Object(r.jsx)("i",{children:B.dosisRefuerzoSegundo})]}):null,Object(r.jsxs)("div",{className:"text-sm mb-1",children:["Fecha de ultima dosis: ",Object(r.jsx)("i",{children:B.fechaUltimoTest?B.fechaUltimoTest:"-- Sin registro --"})]})]}):null]})})}),v&&F.length>0?Object(r.jsx)(u.a,{title:"",description:Object(r.jsx)("span",{children:"Ordenes"}),children:Object(r.jsx)("div",{className:"flex flex-col w-full",children:Object(r.jsx)("div",{className:"overflow-x-scroll lg:overflow-hidden",children:Object(r.jsxs)("table",{className:"table striped",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Fecha Solicitud"}),Object(r.jsx)("th",{children:"Orden #"}),Object(r.jsx)("th",{children:"Tipo Cliente"}),Object(r.jsx)("th",{children:"Monto"}),Object(r.jsx)("th",{children:"Acciones"})]})}),Object(r.jsx)("tbody",{children:F.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:O()(e.fechaSolicitud).utc().format("DD/MM/YYYY")}),Object(r.jsx)("td",{children:e.ordenNumero}),Object(r.jsx)("td",{children:e.proveedorID.nombre}),Object(r.jsxs)("td",{children:[e.totalAPagar," Bs"]}),Object(r.jsx)("td",{children:Object(r.jsx)(b.a,{href:"/pacientes/detalle/[pacientID]/[id]",as:"/pacientes/detalle/".concat(E.id,"/").concat(e.id),children:Object(r.jsx)("a",{children:"Ver Analisis"})})})]},e.id)}))})]})})})}):null,D&&L.length>0?Object(r.jsx)(u.a,{title:"",description:Object(r.jsx)("span",{children:"Analisis sistema anterior"}),children:Object(r.jsx)("div",{className:"flex flex-col w-full",children:Object(r.jsx)("div",{className:"overflow-x-scroll lg:overflow-hidden",children:Object(r.jsxs)("table",{className:"table striped",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Fecha Solicitud"}),Object(r.jsx)("th",{children:"Estudio"}),Object(r.jsx)("th",{children:"Codigo Estudio"}),Object(r.jsx)("th",{children:"Tipo Cliente"}),Object(r.jsx)("th",{children:"Acciones"})]})}),Object(r.jsx)("tbody",{children:L.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.fechaSolicitud}),Object(r.jsx)("td",{children:e.testID.nombre}),Object(r.jsx)("td",{children:e.codigo}),Object(r.jsx)("td",{children:e.tipoFicha}),Object(r.jsx)("td",{children:Object(r.jsx)(m.a,{rowData:e,test:e.testID})})]},e._id)}))})]})})})}):null]})]})}):Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"flex flex-row mb-4",children:Object(r.jsx)("div",{className:"w-full",children:Object(r.jsx)(h.a,{items:_,home:!0,icon:"arrow"})})}),Object(r.jsx)("div",{className:"w-full px-4",children:Object(r.jsx)("div",{children:Object(r.jsx)(g.a,{css:w,size:80,color:"#000"})})})]})}))},gWdR:function(e,t,s){"use strict";var c=s("nKUr");t.a=function(e){var t=e.title,s=void 0===t?null:t,i=e.description,r=void 0===i?null:i,n=e.right,l=void 0===n?null:n,a=e.children;return Object(c.jsxs)("div",{className:"widget w-full p-4 mb-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800",children:[(s||r||l)&&Object(c.jsxs)("div",{className:"flex flex-row items-center justify-between mb-6",children:[Object(c.jsxs)("div",{className:"flex flex-col",children:[Object(c.jsx)("div",{className:"text-sm font-light text-gray-500",children:s}),Object(c.jsx)("div",{className:"text-sm font-bold",children:r})]}),l]}),a]})}}},[["UjRO",0,1,4,10,5,11,7,22,2,3,6,8,9,12,14,13,26,43]]]);