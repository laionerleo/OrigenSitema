_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[63],{TwBT:function(e,n,t){"use strict";t.r(n);var i=t("ODXe"),o=t("h4VS"),a=t("nKUr"),r=t("q1tI"),c=t("jRMg"),d=t("nOHt"),l=t.n(d),s=t("YFqc"),u=t.n(s),m=t("DFyN"),p=t("VreA"),f=t("iX8M"),j=t("6nGu"),h=t("gWdR"),b=(t("B3WN"),t("KYPV")),O=t("UGp+"),v=t("y2g3"),x=t.n(v),g=t("Cs6D"),P=t("wd/R"),D=t.n(P),$={NoFactura:"",estatusPago:"",formaDePago:"",referenciaDePago:"",observacionDePago:"",tipo_cliente_selected:"",tipo_cliente:{},fechaDePago:"",fechaFactura:"",nroAutorizacion:"",nroOrdenDeCompra:"",contratista:""},w=function(e){var n=e.orden,t=e.onSubmit,o=e.waiting,d=e.onChangeProvider,l=e.blockForm,s=Object(c.c)(p.Y),u=Object(i.a)(s,1)[0],m=Object(c.c)(p.V),f=Object(i.a)(m,1)[0],j=Object(r.useState)([]),h=j[0],v=j[1],P=Object(r.useState)([]),w=(P[0],P[1]),N=function(e){u({variables:{tipo:e}}).then((function(e){var n=e.data;n.getProveedoresByTipo&&v(n.getProveedoresByTipo)}))};Object(r.useEffect)((function(){n&&N(n.tipo_cliente_selected)}),[n]);var I=O.f({estatusPago:O.h().required("Este campo es requerido"),formaDePago:O.h().required("Este campo es requerido"),tipo_cliente_selected:O.h().required("Este campo es requerido"),tipo_cliente:O.f().required("Este campo es requerido"),referenciaDePago:O.h().when("formaDePago",(function(e,n){if("TARJETA"===e||"TRANSFERENCIA"===e)return n.required("Este campo es requerido")})),observacionDePago:O.h(),fechaFactura:O.c(),fechaDePago:O.c(),nroAutorizacion:O.h(),nroOrdenDeCompra:O.h(),contratista:O.h()}),E=Object(b.b)({initialValues:n||$,validationSchema:I,onSubmit:t});function C(e){return e.isBefore(D()())}return Object(a.jsxs)("form",{onSubmit:E.handleSubmit,className:"flex flex-col lg:flex-row lg:flex-wrap w-full",children:[Object(a.jsx)("div",{className:"w-full sm:w-full md:w-full lg:w-2/4 xl:w-1/4 pl-3",children:Object(a.jsxs)("div",{className:"form-element",children:[Object(a.jsx)("div",{className:"form-label",children:"Tipo de paciente"}),Object(a.jsxs)("select",{className:"form-select",name:"tipo_cliente_selected",placeholder:"Seleccione",onChange:function(e){E.handleChange(e),N(e.target.value),E.setFieldValue("tipo_cliente",{}),"EMPRESA"!==e.target.value&&E.setFieldValue("contratista","")},value:E.values.tipo_cliente_selected,children:[Object(a.jsx)("option",{value:"",children:"Seleccione una opcion"}),Object(a.jsx)("option",{value:"PARTICULAR",children:"Particular"}),Object(a.jsx)("option",{value:"EMPRESA",children:"Empresa"}),Object(a.jsx)("option",{value:"MEDICO",children:"Medico"}),Object(a.jsx)("option",{value:"CONVENIO",children:"Convenio"})]})]})}),Object(a.jsx)("div",{className:"w-full sm:w-full md:w-full lg:w-2/4 xl:w-1/4 pl-3",children:Object(a.jsxs)("div",{className:"form-element",children:[Object(a.jsxs)("div",{className:"form-label",children:["Lista de ",E.values.tipo_cliente_selected,"S "]}),Object(a.jsx)(g.a,{name:"tipo_cliente",options:h,getOptionLabel:function(e){return e.nombre},getOptionValue:function(e){return e.id},onChange:function(e){var n;E.values.tipo_cliente!==e&&(n=e.id,f({variables:{id:n}}).then((function(e){var n=e.data;e.error,n.getPreciosPorProveedor&&(w(n.getPreciosPorProveedor),d(n.getPreciosPorProveedor))})),E.setFieldValue("tipo_cliente",e))},value:E.values.tipo_cliente})]})}),"EMPRESA"===E.values.tipo_cliente_selected?Object(a.jsx)("div",{className:"w-full sm:w-full md:w-full lg:w-2/4 xl:w-1/4 pl-3",children:Object(a.jsxs)("div",{className:"form-element",children:[Object(a.jsx)("div",{className:"form-label",children:"Nombre de la contratista (Si aplica)"}),Object(a.jsx)("input",{name:"contratista",type:"text",className:"focus:outline-none form-input ".concat(E.errors.contratista?"form-input-invalid":""," "),placeholder:"",onChange:E.handleChange,value:E.values.contratista})]})}):null,Object(a.jsxs)("div",{className:"flex flex-col lg:flex-row lg:flex-wrap w-full",children:[Object(a.jsx)("div",{className:"w-full sm:w-full md:w-full lg:w-2/4 xl:w-1/4 pl-3",children:Object(a.jsxs)("div",{className:"form-element",children:[Object(a.jsx)("div",{className:"form-label",children:"Forma de Pago"}),Object(a.jsxs)("select",{className:"form-select",name:"formaDePago",placeholder:"Seleccione",onChange:function(e){E.handleChange(e),"EFECTIVO"!==e.target.value&&"OTRO"!==e.target.value||E.setFieldValue("referenciaDePago","")},value:E.values.formaDePago,children:[Object(a.jsx)("option",{value:"",children:"Seleccione una opcion"}),Object(a.jsx)("option",{value:"EFECTIVO",children:"Efectivo"}),Object(a.jsx)("option",{value:"TARJETA",children:"Tarjeta"}),Object(a.jsx)("option",{value:"TRANSFERENCIA",children:"Transferencia"}),Object(a.jsx)("option",{value:"CREDITO",children:"Credito"}),Object(a.jsx)("option",{value:"CHEQUE",children:"Cheque"}),Object(a.jsx)("option",{value:"OTRO",children:"Otro"})]}),E.errors.formaDePago&&E.touched.formaDePago?Object(a.jsx)("div",{className:"form-error",children:E.errors.formaDePago}):null]})}),"TARJETA"===E.values.formaDePago||"TRANSFERENCIA"===E.values.formaDePago||"CHEQUE"===E.values.formaDePago?Object(a.jsx)("div",{className:"w-full sm:w-full md:w-full lg:w-2/4 xl:w-1/4 pl-3",children:Object(a.jsxs)("div",{className:"form-element",children:[Object(a.jsx)("div",{className:"form-label",children:"No. de Referencia"}),Object(a.jsx)("input",{name:"referenciaDePago",type:"text",className:"focus:outline-none form-input ".concat(E.errors.referenciaDePago?"form-input-invalid":""," "),placeholder:"",onChange:E.handleChange,value:E.values.referenciaDePago}),E.errors.referenciaDePago&&E.touched.referenciaDePago?Object(a.jsx)("div",{className:"form-error",children:E.errors.referenciaDePago}):null]})}):null,Object(a.jsx)("div",{className:"w-full sm:w-full md:w-full lg:w-2/4 xl:w-1/4 pl-3",children:Object(a.jsxs)("div",{className:"form-element",children:[Object(a.jsx)("div",{className:"form-label",children:"No. Factura"}),Object(a.jsx)("input",{name:"NoFactura",type:"text",className:"focus:outline-none form-input ".concat(E.errors.NoFactura?"form-input-invalid":""," "),placeholder:"",onChange:E.handleChange,value:E.values.NoFactura})]})}),Object(a.jsx)("div",{className:"w-full sm:w-full md:w-full lg:w-2/4 xl:w-1/4 pl-3",children:Object(a.jsxs)("div",{className:"form-element",children:[Object(a.jsx)("div",{className:"form-label",children:"Fecha de la Factura"}),Object(a.jsx)(x.a,{locale:"es",name:"fechaFactura",dateFormat:"DD-MM-YYYY",timeFormat:!1,isValidDate:C,input:!0,closeOnSelect:!0,inputProps:{className:"form-input",placeholder:"Seleccione una fecha"},style:{width:"150px"},viewMode:"days",value:E.values.fechaFactura,onChange:function(e){E.setFieldValue("fechaFactura",e)}})]})}),Object(a.jsx)("div",{className:"w-full sm:w-full md:w-full lg:w-2/4 xl:w-1/4 pl-3",children:Object(a.jsxs)("div",{className:"form-element",children:[Object(a.jsx)("div",{className:"form-label",children:"Observacion de pago"}),Object(a.jsx)("input",{name:"observacionDePago",type:"text",className:"focus:outline-none form-input ".concat(E.errors.observacionDePago?"form-input-invalid":""," "),placeholder:"",onChange:E.handleChange,value:E.values.observacionDePago})]})}),Object(a.jsx)("div",{className:"w-full sm:w-full md:w-full lg:w-2/4 xl:w-1/4 pl-3",children:Object(a.jsxs)("div",{className:"form-element",children:[Object(a.jsx)("div",{className:"form-label",children:"Estatus pago"}),Object(a.jsxs)("select",{className:"form-select",name:"estatusPago",placeholder:"Seleccione",onChange:E.handleChange,value:E.values.estatusPago,children:[Object(a.jsx)("option",{value:"",children:"Seleccione una opcion"}),Object(a.jsx)("option",{value:"COBRADO",children:"Cobrado"}),Object(a.jsx)("option",{value:"POR COBRAR",children:"Por cobrar"})]}),E.errors.estatusPago&&E.touched.estatusPago?Object(a.jsx)("div",{className:"form-error",children:E.errors.estatusPago}):null]})}),Object(a.jsx)("div",{className:"w-full sm:w-full md:w-full lg:w-2/4 xl:w-1/4 pl-3",children:Object(a.jsxs)("div",{className:"form-element",children:[Object(a.jsx)("div",{className:"form-label",children:"Fecha del Pago"}),Object(a.jsx)(x.a,{locale:"es",name:"fechaDePago",dateFormat:"DD-MM-YYYY",timeFormat:!1,isValidDate:C,input:!0,closeOnSelect:!0,inputProps:{className:"form-input",placeholder:"Seleccione una fecha"},style:{width:"150px"},viewMode:"days",value:E.values.fechaDePago,onChange:function(e){E.setFieldValue("fechaDePago",e)}})]})}),Object(a.jsx)("div",{className:"w-full sm:w-full md:w-full lg:w-2/4 xl:w-1/4 pl-3",children:Object(a.jsxs)("div",{className:"form-element",children:[Object(a.jsx)("div",{className:"form-label",children:"Numero de Autorizacion"}),Object(a.jsx)("input",{name:"nroAutorizacion",type:"text",className:"focus:outline-none form-input ".concat(E.errors.nroAutorizacion?"form-input-invalid":""," "),placeholder:"",onChange:E.handleChange,value:E.values.nroAutorizacion})]})}),Object(a.jsx)("div",{className:"w-full sm:w-full md:w-full lg:w-2/4 xl:w-1/4 pl-3",children:Object(a.jsxs)("div",{className:"form-element",children:[Object(a.jsx)("div",{className:"form-label",children:"Numero de Orden de compra"}),Object(a.jsx)("input",{name:"nroOrdenDeCompra",type:"text",className:"focus:outline-none form-input ".concat(E.errors.nroOrdenDeCompra?"form-input-invalid":""," "),placeholder:"",onChange:E.handleChange,value:E.values.nroOrdenDeCompra})]})})]}),Object(a.jsx)("div",{className:"flex flex-col lg:flex-row lg:flex-wrap w-full mt-4 pr-5 justify-center",children:Object(a.jsxs)("button",{className:"inline-block px-6 py-2 my-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none disabled:opacity-50 mx-auto ",type:"submit",disabled:l,children:[o?Object(a.jsxs)("svg",{className:" inline-block animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[Object(a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),Object(a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):null,o?"Guardando ":"Guardar "]})})]})},N=t("IqVg"),I=t("qGs6"),E=t.n(I),C=t("qKvR");function F(){var e=Object(o.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: '#000';\n"]);return F=function(){return e},e}var S=Object(C.css)(F());n.default=Object(m.a)((function(){var e=Object(c.c)(p.h),n=Object(i.a)(e,1)[0],t=Object(c.d)(f.x),o=Object(i.a)(t,1)[0],s=Object(r.useState)(!1),m=s[0],b=s[1],O=Object(r.useState)(null),v=O[0],x=O[1],g=Object(r.useState)(!1),P=g[0],$=g[1],I=Object(r.useState)(null),C=I[0],F=I[1],A=Object(r.useState)(null),_=A[0],T=A[1],y=Object(r.useState)(null),R=y[0],M=y[1],z=Object(d.useRouter)(),Y=z.query.id,V=[{title:"Inicio",url:"/dashboard",last:!1},{title:"Conciliacion Ordenes",url:"/conciliacion-ordenes",last:!1},{title:"Detalle Orden",url:"".concat(Y),last:!0}],q=function(e){var n=0;e.map((function(e){n=Number(n)+Number(e.precio)})),M(n)};Object(r.useEffect)((function(){var e;z.query.id&&(e=z.query.id,n({variables:{id:e}}).then((function(e){var n=e.data,t=e.error;if(t){var i="Hubo un error al obtener los datos de la orden.";return t.graphQLErrors&&t.graphQLErrors.length>0&&t.graphQLErrors.map((function(e){i+="\n".concat(e.message," ")})),Object(N.a)("error",i),void l.a.push("/conciliacion-ordenes")}if(n&&n.getOrdenDetalles&&(T(n.getOrdenDetalles),q(n.getOrdenDetalles)),n&&n.getOrden){var o=n.getOrden,a=o.fechaSolicitud,r=o.NoFactura,c=o.estatusPago,d=o.formaDePago,s=o.referenciaDePago,u=o.observacionDePago,m=o.fechaFactura,p=o.fechaDePago,f=o.nroOrdenDeCompra,j=o.nroAutorizacion,h=o.contratista;F({fechaSolicitud:D()(a).utc(),NoFactura:r,estatusPago:c,formaDePago:d,referenciaDePago:s,observacionDePago:u,tipo_cliente_selected:n.getOrden.proveedorID.tipo,tipo_cliente:{nombre:n.getOrden.proveedorID.nombre,id:n.getOrden.proveedorID.id},fechaFactura:m?D()(m).utc():"",fechaDePago:p?D()(p).utc():"",nroOrdenDeCompra:f,nroAutorizacion:j,contratista:h}),x(n.getOrden)}})))}),[z.query]);return v?Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"w-full px-4",children:[Object(a.jsx)("div",{className:"flex flex-row mb-4",children:Object(a.jsx)("div",{className:"w-full",children:Object(a.jsx)(j.a,{items:V,home:!0,icon:"arrow"})})}),Object(a.jsxs)("div",{className:"w-full py-2 px-0",children:[Object(a.jsx)(h.a,{title:"",description:Object(a.jsx)("span",{children:"Datos de la orden"}),right:Object(a.jsx)(u.a,{href:"/pacientes/edit/".concat(v.clientID.id),children:Object(a.jsx)("a",{className:"link self-end",children:"Editar Paciente"})}),children:Object(a.jsxs)("div",{className:"flex flex-col lg:flex-row lg:flex-wrap w-full lg:space-x-4",children:[Object(a.jsxs)("div",{className:"flex flex-col w-3/4",children:[Object(a.jsxs)("div",{className:"text-sm mb-1",children:["No. de Orden: ",v.ordenNumero]}),Object(a.jsxs)("div",{className:"text-sm mb-1",children:["Fecha Solicitud: ",D()(v.fechaSolicitud).utc().format("DD/MM/YYYY")]}),Object(a.jsxs)("div",{className:"text-sm mb-1",children:["Nombres: ",v.clientID.nombres]}),Object(a.jsxs)("div",{className:"text-sm mb-1",children:["Apellidos: ",v.clientID.apellidos]}),Object(a.jsxs)("div",{className:"text-sm mb-1",children:["DNI: ",v.clientID.ci]}),v.clientID.fecha_nacimiento?Object(a.jsxs)("div",{className:"text-sm mb-1",children:["Fecha Nacimiento: ",v.clientID.fecha_nacimiento]}):null]}),Object(a.jsx)("div",{className:"flex flex-col w-1/4"})]})}),Object(a.jsxs)(h.a,{title:"",description:Object(a.jsx)("span",{children:"Estudios Realizados"}),children:[Object(a.jsx)("div",{className:"flex flex-col w-full",children:Object(a.jsx)("div",{className:"overflow-x-scroll lg:overflow-hidden",children:Object(a.jsxs)("table",{className:"table",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Codigo"}),Object(a.jsx)("th",{children:"Nombre"}),Object(a.jsx)("th",{children:"Precio"})]})}),Object(a.jsx)("tbody",{children:_.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{children:[e.codigoEstudio,e.estudioNumero]}),Object(a.jsx)("td",{children:e.estudioID.nombre}),Object(a.jsx)("td",{children:e.precio})]},e.id)}))})]})})}),Object(a.jsx)("div",{className:"flex flex-col lg:flex-row lg:flex-wrap w-full mt-4 pr-5 justify-end",children:Object(a.jsxs)("h2",{className:"text-xl text-right",children:["Total Pagado: ",R," Bs"]})})]}),Object(a.jsx)(h.a,{title:"",description:Object(a.jsx)("span",{children:"Informaci\xf3n Contable/Administrativa"}),children:Object(a.jsx)(w,{waiting:m,blockForm:P,orden:C,onSubmit:function(e){if(!m){b(!0);var n=e.NoFactura,t=e.estatusPago,i=e.formaDePago,a=e.observacionDePago,r=e.referenciaDePago,c=e.tipo_cliente,d=e.fechaSolicitud,l=e.fechaDePago,s=e.fechaFactura,u=e.nroAutorizacion,p=e.nroOrdenDeCompra,f=e.contratista,j={totalAPagar:R.toString(),NoFactura:n,estatusPago:t,formaDePago:i,referenciaDePago:r,observacionDePago:a,fechaSolicitud:d.format("YYYY-MM-DD"),clientID:v.clientID.id,proveedorID:c.id,nroAutorizacion:u,nroOrdenDeCompra:p,fechaDePago:l?l.format("YYYY-MM-DD"):"",fechaFactura:s?s.format("YYYY-MM-DD"):"",contratista:f},h=_.map((function(e){return{id:e.id,precio:e.precio}}));o({variables:{id:v.id,input:j,estudios:h}}).then((function(e){var n=e.error,t=e.data;if(n){var i="Hubo un problema actualizando la informacion de la Orden.";return n.graphQLErrors&&n.graphQLErrors.length>0&&n.graphQLErrors.map((function(e){i+="\n".concat(e.message," ")})),Object(N.a)("error",i),void b(!1)}if(t.editOrden)return Object(N.a)("success","La informacion fue actualizada correctamente."),void b(!1)}))}},onChangeProvider:function(e){var n=_.map((function(n){var t=e.filter((function(e){if(e.estudioID.id===n.estudioID.id)return e}));return t.length>0?(n.precio=t[0].precio,$(!1)):(Object(N.a)("error","El proveedor seleccionado no tiene un precio asignado para el estudio "+n.estudioID.nombre),$(!0)),n}));T(n),q(n)}})})]})]})}):Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"flex flex-row mb-4",children:Object(a.jsx)("div",{className:"w-full",children:Object(a.jsx)(j.a,{items:V,home:!0,icon:"arrow"})})}),Object(a.jsx)("div",{className:"w-full px-4",children:Object(a.jsx)("div",{children:Object(a.jsx)(E.a,{css:S,size:80,color:"#000"})})})]})}))},hqLi:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/conciliacion-ordenes/detalle/[id]",function(){return t("TwBT")}])},iX8M:function(e,n,t){"use strict";t.d(n,"B",(function(){return i})),t.d(n,"L",(function(){return o})),t.d(n,"J",(function(){return a})),t.d(n,"F",(function(){return r})),t.d(n,"c",(function(){return c})),t.d(n,"t",(function(){return d})),t.d(n,"T",(function(){return l})),t.d(n,"H",(function(){return s})),t.d(n,"G",(function(){return u})),t.d(n,"M",(function(){return m})),t.d(n,"D",(function(){return p})),t.d(n,"N",(function(){return f})),t.d(n,"S",(function(){return j})),t.d(n,"j",(function(){return h})),t.d(n,"z",(function(){return b})),t.d(n,"r",(function(){return O})),t.d(n,"e",(function(){return v})),t.d(n,"f",(function(){return x})),t.d(n,"k",(function(){return g})),t.d(n,"A",(function(){return P})),t.d(n,"h",(function(){return D})),t.d(n,"P",(function(){return $})),t.d(n,"v",(function(){return w})),t.d(n,"n",(function(){return N})),t.d(n,"p",(function(){return I})),t.d(n,"a",(function(){return E})),t.d(n,"s",(function(){return C})),t.d(n,"l",(function(){return F})),t.d(n,"i",(function(){return S})),t.d(n,"y",(function(){return A})),t.d(n,"q",(function(){return _})),t.d(n,"I",(function(){return T})),t.d(n,"Q",(function(){return y})),t.d(n,"R",(function(){return R})),t.d(n,"E",(function(){return M})),t.d(n,"g",(function(){return z})),t.d(n,"x",(function(){return Y})),t.d(n,"o",(function(){return V})),t.d(n,"w",(function(){return q})),t.d(n,"b",(function(){return U})),t.d(n,"C",(function(){return B})),t.d(n,"K",(function(){return k})),t.d(n,"O",(function(){return L})),t.d(n,"d",(function(){return H})),t.d(n,"u",(function(){return Q})),t.d(n,"m",(function(){return G}));var i="\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      id\n      token\n      email\n      nombre\n      apellido\n      role\n      compania\n      areasDeEstudio {\n        nombre\n        id\n      }\n    }\n  }\n",o="\n  mutation createUser($input: UserInput) {\n    createUser(input: $input)\n  }\n",a="\nmutation setPassword($hash: String!, $password: String!) {\n  setPassword(hash: $hash, password: $password)\n}\n",r="\nmutation forgotPassword($email: String!) {\n  forgotPassword(email: $email)\n}\n",c="\n  mutation addClient($input: ClientInput) {\n    addClient(input: $input) {\n      id\n      nombres\n      apellidos\n      ci\n      fecha_nacimiento\n      telefono\n      municipio\n      departamento\n      direccion\n      sexo\n      edad\n    }\n  }\n",d="\n  mutation editClient($input: ClientEditInput) {\n    editClient(input: $input) {\n      id\n      nombres\n      apellidos\n      ci\n      fecha_nacimiento\n      telefono\n      municipio\n      departamento\n      direccion\n      sexo\n      edad\n    }\n  }\n",l="\nmutation editTipoFicha($id: ID!, $tipoFicha: String!) {\n  editTipoFicha(id: $id, tipoFicha: $tipoFicha) {\n    codigo\n  }\n}\n",s="\nmutation setCodigoInterno($id: ID!, $codigoInterno: String!) {\n  setCodigoInterno(id: $id, codigoInterno: $codigoInterno) {\n    codigoInterno\n  }\n}\n",u="\n  mutation setConciliacionFicha($input: FichaConciliacionInput) {\n    setConciliacionFicha(input: $input) {\n      codigo\n    }\n  }\n",m="\nmutation loadReports($informes: [Reportes]) {\n  loadReports(informes: $informes)\n}\n",p="\n  mutation deleteClient($id: ID) {\n    deleteClient(id: $id)\n  }\n",f="\nmutation updateUser($input: UserEditInput) {\n  updateUser(input: $input) {\n    id\n    email\n    nombre\n    apellido\n    role\n    permissions\n    approved\n    compania\n    keywords\n  }\n}\n",j="\n  mutation updateSystemUserPrivilegesUser($input: UserPrivilegesInput) {\n    updateSystemUserPrivilegesUser(input: $input) {\n      id\n      nombre\n      role\n      approved\n    }\n  }\n",h="\nmutation addTipoDeMuestra($input: TipoDeMuestraInput) {\n  addTipoDeMuestra(input: $input) {\n    nombre\n    description\n    estatus\n    id\n  }\n}\n",b="\nmutation editTipoDeMuestra($id: ID!, $input: TipoDeMuestraInput) {\n  editTipoDeMuestra(id: $id, input: $input) {\n    nombre\n    description\n    id\n    estatus\n  }\n}\n",O="\nmutation deleteTipoDeMuestra($id: ID!) {\n  deleteTipoDeMuestra(id: $id)\n}\n",v="\nmutation addEstudio($input: EstudioInput) {\n  addEstudio(input: $input) {\n    id\n    nombre\n    codigo\n    description\n    metodo\n    estatus\n    areaDeEstudioID {\n      nombre\n    }\n    tipoDeMuestras {\n      nombre\n    }\n  }\n}\n",x="\nmutation addHistorial($input: HistorialPrecioPorProveedorInput) {\n    addHistorial(input: $input) {\n        id\n        precio\n        fecha_inicio    \n        fecha_limite    \n        estudioID\n        proveedorID\n  }\n}\n",g="\nmutation addVacuna($input: VacunaInput) {\n    addVacuna(input: $input) {\n        id\n        dosisPrimera\n        dosisSegunda\n        dosisUnica\n        dosisRefuerzoPrimero\n        dosisRefuerzoSegundo\n        clientID\n        fechaUltimoTest\n  }\n}\n",P="\nmutation editVacuna($input: VacunaEditInput) {\n    editVacuna(input: $input) {\n        id\n        dosisPrimera\n        dosisSegunda\n        dosisUnica\n        dosisRefuerzoPrimero\n        dosisRefuerzoSegundo\n        fechaUltimoTest\n    }\n}\n",D="\nmutation addPerfil($input: PerfilInput) {\n  addPerfil(input: $input) {\n    id\n    nombre\n    estatus\n    estudios {\n      id\n      nombre\n      precio\n    }\n  }\n}\n",$="\nmutation updatePerfil($id: ID!, $input: PerfilInput) {\n  updatePerfil(id: $id, input: $input) {\n    id\n    nombre\n    estatus\n    estudios {\n      id\n      nombre\n      precio\n    }\n  }\n}\n",w="\nmutation editEstudio($id: ID!, $input: EstudioInput) {\n  editEstudio(id: $id, input: $input) {\n    id\n    nombre\n    codigo\n    description\n    metodo\n    estatus\n    areaDeEstudioID {\n      nombre\n    }\n    tipoDeMuestras {\n      nombre\n    }\n  }\n}\n",N="\nmutation deleteEstudio($id: ID!) {\n  deleteEstudio(id: $id)\n}\n",I="\nmutation deletePerfil($id: ID!) {\n  deletePerfil(id: $id)\n}\n",E="\nmutation addAreaEstudio($input: AreaEstudioInput) {\n  addAreaEstudio(input: $input) {\n    nombre\n    id\n  }\n}\n",C="\nmutation editAreaEstudio($id: ID!, $input: AreaEstudioInput) {\n  editAreaEstudio(id: $id, input: $input) {\n    nombre\n    id\n  }\n}\n",F="\nmutation deleteAreaEstudio($id: ID!) {\n  deleteAreaEstudio(id: $id)\n}\n",S="\nmutation addProveedor($input: ProveedorInput) {\n  addProveedor(input: $input) {\n    id\n    nombre\n    description\n    estatus\n  }\n}\n",A="\nmutation editProveedor($id: ID!, $input: ProveedorInput) {\n  editProveedor(id: $id, input: $input) {\n    id\n    nombre\n    description\n    estatus\n  }\n}\n",_="\nmutation deleteProveedor($id: ID!) {\n  deleteProveedor(id: $id)\n}\n",T="\nmutation setPrecioEstudio($input: PreciosPorOrdenInput) {\n  setPrecioEstudio(input: $input) {\n    id\n  }\n}\n",y="\nmutation updatePrecioProveedor($id: ID!, $input: PreciosPorOrdenInput) {\n  updatePrecioProveedor(id: $id, input: $input) {\n    id\n  }\n}\n",R="\nmutation updatePrecioOrdenPorEstudio($id: ID!, $input: PreciosPorOrdenEstudioInput) {\n  updatePrecioOrdenPorEstudio(id: $id, input: $input) {\n    id\n  }\n}\n",M="\nmutation deleteItem($id: ID!) {\n  deleteItem(id: $id)\n}\n",z="\nmutation addOrden($input: OrdenInput, $estudios: [EstudioPorOrdenInput]) {\n  addOrden(input: $input, estudios: $estudios) {\n    id\n    fechaSolicitud\n  }\n}\n",Y="\nmutation editOrden($id: ID!, $input: OrdenInput, $estudios: [EstudioEditPrecio]) {\n  editOrden(id: $id, input: $input, estudios: $estudios) {\n    id\n  }\n}\n",V="\nmutation deleteOrden($id: ID!) {\n  deleteOrden(id: $id)\n}\n",q="\nmutation editDataEstudio($id: ID!, $input: EstudioPorOrdenEditSimpleInput) {\n  editDataEstudio(id: $id, input: $input) {\n    id\n    codigoEstudio\n  }\n}\n",U="\nmutation addAttachmentFileEstudioPorOrden($id: ID, $file: Upload) {\n  addAttachmentFileEstudioPorOrden(id: $id, file: $file) {\n    id\n    attachmentFiles {\n      id\n      name\n      mimeType\n      url\n    }\n  }\n}\n",B="\nmutation removeAttachmentFileEstudioPorOrden($id: ID, $fileId: ID) {\n  removeAttachmentFileEstudioPorOrden(id: $id, fileId: $fileId) {\n    id\n    attachmentFiles {\n      id\n      name\n      mimeType\n      url\n    }\n  }\n}\n",k="\nmutation setResultEstudio($id: ID!, $input: EstudioPorOrdenSetResultInput) {\n  setResultEstudio(id: $id, input: $input) {\n    id\n    codigoEstudio\n  }\n}\n",L="\nmutation updateOrderByFile($ordenes: [OrdenConciliacionByFileInput]) {\n  updateOrderByFile(ordenes: $ordenes)\n}\n",H="\nmutation addCotizacion($input: CotizacionInput, $estudios: [EstudioPorCotizacionInput]) {\n  addCotizacion(input: $input, estudios: $estudios) {\n    id\n    fechaSolicitud\n  }\n}\n",Q="\nmutation editCotizacion($id: ID!, $input: CotizacionInput, $estudios: [EstudioEditPrecio]) {\n  editCotizacion(id: $id, input: $input, estudios: $estudios) {\n    id\n  }\n}\n",G="\nmutation deleteCotizacion($id: ID!) {\n  deleteCotizacion(id: $id)\n}\n"}},[["hqLi",0,1,4,10,5,11,7,22,2,3,6,8,9,12,14,13,15,16,17,18,23,26,28]]]);