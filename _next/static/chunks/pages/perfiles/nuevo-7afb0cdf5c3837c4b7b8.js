_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[95],{HnSC:function(n,i,t){"use strict";t.r(i);var e=t("xvhg"),o=t("jT3O"),d=t("q1tI"),u=t.n(d),r=t("jRMg"),a=t("nOHt"),s=t("qGs6"),p=t.n(s),c=t("qKvR"),l=t("IqVg"),m=t("DFyN"),$=t("EA43"),f=t("6nGu"),I=t("gWdR"),P=t("iX8M"),E=t("VreA"),b=u.a.createElement;function D(){var n=Object(o.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: '#000';\n"]);return D=function(){return n},n}var v=Object(c.css)(D());i.default=Object(m.a)((function(){var n=Object(r.d)(P.e),i=(Object(e.a)(n,1)[0],Object(r.c)(E.B)),t=(Object(e.a)(i,1)[0],Object(r.d)(P.h)),o=Object(e.a)(t,1)[0],u=Object(d.useState)(!1),s=u[0],c=(u[1],Object(d.useState)(!1)),m=c[0],D=c[1],g=Object(a.useRouter)(),O=Object(d.useState)([]),h=(O[0],O[1],[{title:"Inicio",url:"/dashboard",last:!1},{title:"Gestion de Perfiles",url:"/perfiles",last:!1},{title:"Nuevo",url:"/perfiles/nuevo",last:!0}]);Object(d.useEffect)((function(){}),[]);return s?b("div",null,b("div",{className:"flex flex-row mb-4"},b("div",{className:"w-full"},b(f.a,{items:h,home:!0,icon:"arrow"}))),b("div",{className:"w-full px-4"},b("div",null,b(p.a,{css:v,size:80,color:"#000"})))):b("div",null,b("div",{className:"w-full px-0"},b("div",{className:"flex flex-row mb-4"},b("div",{className:"w-full"},b(f.a,{items:h,home:!0,icon:"arrow"}))),b("div",{className:"w-full py-2 px-0"},b(I.a,{title:"",description:b("span",null,"Detalle del Perfil")},b("div",{className:"flex flex-col lg:flex-row lg:flex-wrap w-full lg:space-x-4"},b($.a,{onSubmit:function(n){var i=n.estatus,t=n.estudios,e={nombre:n.nombre,estatus:i,estudios:t,proveedorID:n.tipo_cliente.id};D(!0),o({variables:{input:e}}).then((function(n){var i=n.data,t=n.error;if(i&&i.addPerfil&&(Object(l.a)("success","El perfil se creo correctamente"),setTimeout((function(){g.push("/perfiles")}),100)),t){var e="Hubo un error al crear el perfil.";t.graphQLErrors&&t.graphQLErrors.length>0&&t.graphQLErrors.map((function(n){e+="\n".concat(n.message," ")})),Object(l.a)("error",e)}D(!1)}))},loading:m,estudios:[]}))))))}))},OjUw:function(n,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/perfiles/nuevo",function(){return t("HnSC")}])},iX8M:function(n,i,t){"use strict";t.d(i,"B",(function(){return e})),t.d(i,"L",(function(){return o})),t.d(i,"J",(function(){return d})),t.d(i,"F",(function(){return u})),t.d(i,"c",(function(){return r})),t.d(i,"t",(function(){return a})),t.d(i,"T",(function(){return s})),t.d(i,"H",(function(){return p})),t.d(i,"G",(function(){return c})),t.d(i,"M",(function(){return l})),t.d(i,"D",(function(){return m})),t.d(i,"N",(function(){return $})),t.d(i,"S",(function(){return f})),t.d(i,"j",(function(){return I})),t.d(i,"z",(function(){return P})),t.d(i,"r",(function(){return E})),t.d(i,"e",(function(){return b})),t.d(i,"f",(function(){return D})),t.d(i,"k",(function(){return v})),t.d(i,"A",(function(){return g})),t.d(i,"h",(function(){return O})),t.d(i,"P",(function(){return h})),t.d(i,"v",(function(){return w})),t.d(i,"n",(function(){return C})),t.d(i,"p",(function(){return S})),t.d(i,"a",(function(){return j})),t.d(i,"s",(function(){return F})),t.d(i,"l",(function(){return T})),t.d(i,"i",(function(){return U})),t.d(i,"y",(function(){return _})),t.d(i,"q",(function(){return x})),t.d(i,"I",(function(){return N})),t.d(i,"Q",(function(){return z})),t.d(i,"R",(function(){return A})),t.d(i,"E",(function(){return R})),t.d(i,"g",(function(){return M})),t.d(i,"x",(function(){return y})),t.d(i,"o",(function(){return H})),t.d(i,"w",(function(){return V})),t.d(i,"b",(function(){return k})),t.d(i,"C",(function(){return q})),t.d(i,"K",(function(){return B})),t.d(i,"O",(function(){return G})),t.d(i,"d",(function(){return L})),t.d(i,"u",(function(){return Q})),t.d(i,"m",(function(){return X}));var e="\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      id\n      token\n      email\n      nombre\n      apellido\n      role\n      compania\n      areasDeEstudio {\n        nombre\n        id\n      }\n    }\n  }\n",o="\n  mutation createUser($input: UserInput) {\n    createUser(input: $input)\n  }\n",d="\nmutation setPassword($hash: String!, $password: String!) {\n  setPassword(hash: $hash, password: $password)\n}\n",u="\nmutation forgotPassword($email: String!) {\n  forgotPassword(email: $email)\n}\n",r="\n  mutation addClient($input: ClientInput) {\n    addClient(input: $input) {\n      id\n      nombres\n      apellidos\n      ci\n      fecha_nacimiento\n      telefono\n      municipio\n      departamento\n      direccion\n      sexo\n      edad\n    }\n  }\n",a="\n  mutation editClient($input: ClientEditInput) {\n    editClient(input: $input) {\n      id\n      nombres\n      apellidos\n      ci\n      fecha_nacimiento\n      telefono\n      municipio\n      departamento\n      direccion\n      sexo\n      edad\n    }\n  }\n",s="\nmutation editTipoFicha($id: ID!, $tipoFicha: String!) {\n  editTipoFicha(id: $id, tipoFicha: $tipoFicha) {\n    codigo\n  }\n}\n",p="\nmutation setCodigoInterno($id: ID!, $codigoInterno: String!) {\n  setCodigoInterno(id: $id, codigoInterno: $codigoInterno) {\n    codigoInterno\n  }\n}\n",c="\n  mutation setConciliacionFicha($input: FichaConciliacionInput) {\n    setConciliacionFicha(input: $input) {\n      codigo\n    }\n  }\n",l="\nmutation loadReports($informes: [Reportes]) {\n  loadReports(informes: $informes)\n}\n",m="\n  mutation deleteClient($id: ID) {\n    deleteClient(id: $id)\n  }\n",$="\nmutation updateUser($input: UserEditInput) {\n  updateUser(input: $input) {\n    id\n    email\n    nombre\n    apellido\n    role\n    permissions\n    approved\n    compania\n    keywords\n  }\n}\n",f="\n  mutation updateSystemUserPrivilegesUser($input: UserPrivilegesInput) {\n    updateSystemUserPrivilegesUser(input: $input) {\n      id\n      nombre\n      role\n      approved\n    }\n  }\n",I="\nmutation addTipoDeMuestra($input: TipoDeMuestraInput) {\n  addTipoDeMuestra(input: $input) {\n    nombre\n    description\n    estatus\n    id\n  }\n}\n",P="\nmutation editTipoDeMuestra($id: ID!, $input: TipoDeMuestraInput) {\n  editTipoDeMuestra(id: $id, input: $input) {\n    nombre\n    description\n    id\n    estatus\n  }\n}\n",E="\nmutation deleteTipoDeMuestra($id: ID!) {\n  deleteTipoDeMuestra(id: $id)\n}\n",b="\nmutation addEstudio($input: EstudioInput) {\n  addEstudio(input: $input) {\n    id\n    nombre\n    codigo\n    description\n    metodo\n    estatus\n    areaDeEstudioID {\n      nombre\n    }\n    tipoDeMuestras {\n      nombre\n    }\n  }\n}\n",D="\nmutation addHistorial($input: HistorialPrecioPorProveedorInput) {\n    addHistorial(input: $input) {\n        id\n        precio\n        fecha_inicio    \n        fecha_limite    \n        estudioID\n        proveedorID\n  }\n}\n",v="\nmutation addVacuna($input: VacunaInput) {\n    addVacuna(input: $input) {\n        id\n        dosisPrimera\n        dosisSegunda\n        dosisUnica\n        dosisRefuerzoPrimero\n        dosisRefuerzoSegundo\n        clientID\n        fechaUltimoTest\n  }\n}\n",g="\nmutation editVacuna($input: VacunaEditInput) {\n    editVacuna(input: $input) {\n        id\n        dosisPrimera\n        dosisSegunda\n        dosisUnica\n        dosisRefuerzoPrimero\n        dosisRefuerzoSegundo\n        fechaUltimoTest\n    }\n}\n",O="\nmutation addPerfil($input: PerfilInput) {\n  addPerfil(input: $input) {\n    id\n    nombre\n    estatus\n    estudios {\n      id\n      nombre\n      precio\n    }\n  }\n}\n",h="\nmutation updatePerfil($id: ID!, $input: PerfilInput) {\n  updatePerfil(id: $id, input: $input) {\n    id\n    nombre\n    estatus\n    estudios {\n      id\n      nombre\n      precio\n    }\n  }\n}\n",w="\nmutation editEstudio($id: ID!, $input: EstudioInput) {\n  editEstudio(id: $id, input: $input) {\n    id\n    nombre\n    codigo\n    description\n    metodo\n    estatus\n    areaDeEstudioID {\n      nombre\n    }\n    tipoDeMuestras {\n      nombre\n    }\n  }\n}\n",C="\nmutation deleteEstudio($id: ID!) {\n  deleteEstudio(id: $id)\n}\n",S="\nmutation deletePerfil($id: ID!) {\n  deletePerfil(id: $id)\n}\n",j="\nmutation addAreaEstudio($input: AreaEstudioInput) {\n  addAreaEstudio(input: $input) {\n    nombre\n    id\n  }\n}\n",F="\nmutation editAreaEstudio($id: ID!, $input: AreaEstudioInput) {\n  editAreaEstudio(id: $id, input: $input) {\n    nombre\n    id\n  }\n}\n",T="\nmutation deleteAreaEstudio($id: ID!) {\n  deleteAreaEstudio(id: $id)\n}\n",U="\nmutation addProveedor($input: ProveedorInput) {\n  addProveedor(input: $input) {\n    id\n    nombre\n    description\n    estatus\n  }\n}\n",_="\nmutation editProveedor($id: ID!, $input: ProveedorInput) {\n  editProveedor(id: $id, input: $input) {\n    id\n    nombre\n    description\n    estatus\n  }\n}\n",x="\nmutation deleteProveedor($id: ID!) {\n  deleteProveedor(id: $id)\n}\n",N="\nmutation setPrecioEstudio($input: PreciosPorOrdenInput) {\n  setPrecioEstudio(input: $input) {\n    id\n  }\n}\n",z="\nmutation updatePrecioProveedor($id: ID!, $input: PreciosPorOrdenInput) {\n  updatePrecioProveedor(id: $id, input: $input) {\n    id\n  }\n}\n",A="\nmutation updatePrecioOrdenPorEstudio($id: ID!, $input: PreciosPorOrdenEstudioInput) {\n  updatePrecioOrdenPorEstudio(id: $id, input: $input) {\n    id\n  }\n}\n",R="\nmutation deleteItem($id: ID!) {\n  deleteItem(id: $id)\n}\n",M="\nmutation addOrden($input: OrdenInput, $estudios: [EstudioPorOrdenInput]) {\n  addOrden(input: $input, estudios: $estudios) {\n    id\n    fechaSolicitud\n  }\n}\n",y="\nmutation editOrden($id: ID!, $input: OrdenInput, $estudios: [EstudioEditPrecio]) {\n  editOrden(id: $id, input: $input, estudios: $estudios) {\n    id\n  }\n}\n",H="\nmutation deleteOrden($id: ID!) {\n  deleteOrden(id: $id)\n}\n",V="\nmutation editDataEstudio($id: ID!, $input: EstudioPorOrdenEditSimpleInput) {\n  editDataEstudio(id: $id, input: $input) {\n    id\n    codigoEstudio\n  }\n}\n",k="\nmutation addAttachmentFileEstudioPorOrden($id: ID, $file: Upload) {\n  addAttachmentFileEstudioPorOrden(id: $id, file: $file) {\n    id\n    attachmentFiles {\n      id\n      name\n      mimeType\n      url\n    }\n  }\n}\n",q="\nmutation removeAttachmentFileEstudioPorOrden($id: ID, $fileId: ID) {\n  removeAttachmentFileEstudioPorOrden(id: $id, fileId: $fileId) {\n    id\n    attachmentFiles {\n      id\n      name\n      mimeType\n      url\n    }\n  }\n}\n",B="\nmutation setResultEstudio($id: ID!, $input: EstudioPorOrdenSetResultInput) {\n  setResultEstudio(id: $id, input: $input) {\n    id\n    codigoEstudio\n  }\n}\n",G="\nmutation updateOrderByFile($ordenes: [OrdenConciliacionByFileInput]) {\n  updateOrderByFile(ordenes: $ordenes)\n}\n",L="\nmutation addCotizacion($input: CotizacionInput, $estudios: [EstudioPorCotizacionInput]) {\n  addCotizacion(input: $input, estudios: $estudios) {\n    id\n    fechaSolicitud\n  }\n}\n",Q="\nmutation editCotizacion($id: ID!, $input: CotizacionInput, $estudios: [EstudioEditPrecio]) {\n  editCotizacion(id: $id, input: $input, estudios: $estudios) {\n    id\n  }\n}\n",X="\nmutation deleteCotizacion($id: ID!) {\n  deleteCotizacion(id: $id)\n}\n"}},[["OjUw",0,1,4,10,5,11,7,2,3,6,8,9,12,14,13,15,16,17,23,34,37]]]);