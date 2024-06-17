webpackHotUpdate_N_E("pages/reportes/descarga",{

/***/ "./src/components/forms-local/descarga-reportes.js":
/*!*********************************************************!*\
  !*** ./src/components/forms-local/descarga-reportes.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_PROYECTOS_admin_system_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_PROYECTOS_admin_system_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_PROYECTOS_admin_system_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widget */ "./src/components/widget/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var graphql_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-hooks */ "./node_modules/graphql-hooks/es/graphql-hooks.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-datetime */ "./node_modules/react-datetime/dist/react-datetime.cjs.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_datetime__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _functions_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../functions/common */ "./src/functions/common.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../queries */ "./src/queries/index.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-spinners/ClipLoader */ "./node_modules/react-spinners/ClipLoader.js");
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/common */ "./src/utils/common.js");






var _jsxFileName = "D:\\PROYECTOS\\admin-system\\src\\components\\forms-local\\descarga-reportes.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(D_PROYECTOS_admin_system_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: block;\n  margin: 0 auto;\n  border-color: \"#000\";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

















function valid(current) {
  return current.isBefore(moment__WEBPACK_IMPORTED_MODULE_11___default()());
}

var override = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["css"])(_templateObject());
var INITIAL_VALUES = {
  startDate: moment__WEBPACK_IMPORTED_MODULE_11___default()().subtract(1, "months").utcOffset(0, true),
  endDate: moment__WEBPACK_IMPORTED_MODULE_11___default()().utcOffset(0, true),
  estudio: {
    id: "all",
    nombre: "TODOS"
  },
  tipoFicha: {
    label: "Todos",
    value: "all"
  },
  tipoUsuario: {
    label: "Todos",
    value: "all"
  },
  tipoDescarga: "",
  tipoReporte: ""
};
var optionsEstudios = [{
  value: "all",
  label: "TODOS"
}, {
  value: "5f19c26822e6db619738813d",
  label: "PCR COVID-19"
}, {
  value: "5f1b35777cb6272305854ddb",
  label: "ELISA COVID-19"
}, {
  value: "60647bc51f5e76393874fc5e",
  label: "PCR Saliva COVID-19"
}, {
  value: "60b61774424baa2067ba3853",
  label: "Anticuerpos Neutralizantes"
}, {
  value: "60b7908efff81d7b9f1ec537",
  label: "Antigeno SARS-COV2"
}, {
  value: "612edfc79fbf1f7a80834d97",
  label: "Anticuerpos Neutralizantes (TOTAL)"
}];
var estudiosSNIS = [{
  id: "604d353635df190004250e5b",
  nombre: "PCR COVID-19"
}, {
  id: "604e2602cc5c345ec442f32e",
  nombre: "ELISA COVID-19"
}, {
  id: "60901bc42cd46b000451e5f6",
  nombre: "PCR Saliva COVID-19"
}, {
  id: "60b95bd9092ae30004224ddd",
  nombre: "Antigeno SARS-COV2"
}, {
  id: "614c5704c8eafb000459856f",
  nombre: "Antigeno SARS-COV2 (Urubo)"
}, {
  id: "614c5e7ec8eafb0004598575",
  nombre: "Antigeno SARS-COV2 (Autocovid 4to anillo)"
}, {
  id: "619bc84572419e0004835d80",
  nombre: "Panel Viral COVID-19, Influenza A, Influenza B"
}, {
  id: "all",
  nombre: "TODOS"
}];
var BusquedaClienteSchema = yup__WEBPACK_IMPORTED_MODULE_8__["object"]({
  startDate: yup__WEBPACK_IMPORTED_MODULE_8__["date"]().required(),
  endDate: yup__WEBPACK_IMPORTED_MODULE_8__["date"]().required(),
  estudio: yup__WEBPACK_IMPORTED_MODULE_8__["object"]().required("Este campo es requerido"),
  tipoFicha: yup__WEBPACK_IMPORTED_MODULE_8__["object"]().required("Este campo es requerido"),
  tipoUsuario: yup__WEBPACK_IMPORTED_MODULE_8__["object"]().required("Este campo es requerido"),
  tipoDescarga: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("Este campo es requerido"),
  tipoReporte: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("Este campo es requerido")
});

var DescargaReportes = function DescargaReportes(_ref) {
  _s();

  var CBSetRows = _ref.CBSetRows,
      CBLoading = _ref.CBLoading,
      busy = _ref.busy,
      CBNoResult = _ref.CBNoResult,
      currentUser = _ref.currentUser;

  var _useManualQuery = Object(graphql_hooks__WEBPACK_IMPORTED_MODULE_9__["useManualQuery"])(_queries__WEBPACK_IMPORTED_MODULE_13__["INFORMES"]),
      _useManualQuery2 = Object(D_PROYECTOS_admin_system_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useManualQuery, 1),
      generateReport = _useManualQuery2[0];

  var _useManualQuery3 = Object(graphql_hooks__WEBPACK_IMPORTED_MODULE_9__["useManualQuery"])(_queries__WEBPACK_IMPORTED_MODULE_13__["GET_PROVEEDORES"]),
      _useManualQuery4 = Object(D_PROYECTOS_admin_system_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useManualQuery3, 1),
      getProveedores = _useManualQuery4[0];

  var _useManualQuery5 = Object(graphql_hooks__WEBPACK_IMPORTED_MODULE_9__["useManualQuery"])(_queries__WEBPACK_IMPORTED_MODULE_13__["GET_ESTUDIOS_SIMPLE"]),
      _useManualQuery6 = Object(D_PROYECTOS_admin_system_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useManualQuery5, 1),
      getEstudios = _useManualQuery6[0];

  var _useManualQuery7 = Object(graphql_hooks__WEBPACK_IMPORTED_MODULE_9__["useManualQuery"])(_queries__WEBPACK_IMPORTED_MODULE_13__["GET_FICHAS_BY_TEST_POR_CONCILIAR"]),
      _useManualQuery8 = Object(D_PROYECTOS_admin_system_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useManualQuery7, 1),
      getFichasByTestPorConciliar = _useManualQuery8[0];

  var _useManualQuery9 = Object(graphql_hooks__WEBPACK_IMPORTED_MODULE_9__["useManualQuery"])(_queries__WEBPACK_IMPORTED_MODULE_13__["REPORTES_ORDENES"]),
      _useManualQuery10 = Object(D_PROYECTOS_admin_system_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useManualQuery9, 1),
      generateReportOrdenes = _useManualQuery10[0];

  var _useManualQuery11 = Object(graphql_hooks__WEBPACK_IMPORTED_MODULE_9__["useManualQuery"])(_queries__WEBPACK_IMPORTED_MODULE_13__["GET_TODOS_USUARIOS"]),
      _useManualQuery12 = Object(D_PROYECTOS_admin_system_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useManualQuery11, 1),
      getAllUsers = _useManualQuery12[0];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      showDownloadBtn = _useState[0],
      setDownloadBtn = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      proveedores = _useState2[0],
      setProveedores = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      listaEstudios = _useState3[0],
      setListaEstudios = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      listaDeUsuarios = _useState4[0],
      setListaDeUsuarios = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      busyDownloading = _useState5[0],
      setBusyDownloading = _useState5[1];

  var fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  var fileExtension = ".xlsx";

  var fetchEstudiosNuevos = function fetchEstudiosNuevos() {
    getEstudios().then(function (_ref2) {
      var data = _ref2.data,
          error = _ref2.error;

      if (data.getEstudios) {
        setListaEstudios([].concat(Object(D_PROYECTOS_admin_system_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.getEstudios), [{
          id: "all",
          nombre: "Todos"
        }]));
      }
    });
  };

  var getResultado = function getResultado(codigo, camposEstudios) {
    if (codigo === "C" || codigo === "PCRCS" || codigo === "PCRC" || codigo === "ASC" || codigo === "ANTU" || codigo === "AA" || codigo === "AN") {
      return Object(_utils_common__WEBPACK_IMPORTED_MODULE_18__["getValueField"])(camposEstudios, "resultado");
    }

    if (codigo === "ELICOV") {
      return "IGG: ".concat(Object(_utils_common__WEBPACK_IMPORTED_MODULE_18__["getValueField"])(camposEstudios, "resultado_igg"), " | IGM: ").concat(Object(_utils_common__WEBPACK_IMPORTED_MODULE_18__["getValueField"])(camposEstudios, "resultado_igm"));
    }

    if (codigo === "CAB") {
      return Object(_utils_common__WEBPACK_IMPORTED_MODULE_18__["getValueField"])(camposEstudios, "sars");
    }

    return "";
  };

  var getResultadoInfluenza = function getResultadoInfluenza(codigo, camposEstudios, tipo) {
    if (codigo === "CAB") {
      return Object(_utils_common__WEBPACK_IMPORTED_MODULE_18__["getValueField"])(camposEstudios, "influ_".concat(tipo));
    }

    return "";
  };

  var getResultadoOld = function getResultadoOld(codigo, resultado) {
    var CODIGO_ESTUDIO = codigo.replace(/[0-9]/g, "");

    if (CODIGO_ESTUDIO === "C" || CODIGO_ESTUDIO === "CS" || CODIGO_ESTUDIO === "A") {
      return resultado ? resultado.trim().toUpperCase() : "";
    }

    if (CODIGO_ESTUDIO === "E") {
      var elisa_result = resultado ? resultado.split("|") : "";
      if (elisa_result === "") return "";
      return "muestraIGg: ".concat(elisa_result[0], " puntoDeCorteIGg: ").concat(elisa_result[1], " || muestraIMg: ").concat(elisa_result[2], " PuntodeCorteIGm: ").concat(elisa_result[3]);
    }

    if (CODIGO_ESTUDIO === "N") {
      var result = resultado ? resultado.split("|") : "";
      if (result === "") return "";
      var AN_RESULT = Object(_utils_common__WEBPACK_IMPORTED_MODULE_18__["calculateResultAN"])(result[0], result[1]);
      return "".concat(AN_RESULT, " (").concat(Object(_utils_common__WEBPACK_IMPORTED_MODULE_18__["getANResult"])(AN_RESULT), ")");
    }

    if (CODIGO_ESTUDIO === "O") {
      var _result = resultado ? resultado.split("|") : "";

      if (_result === "") return "";

      var _AN_RESULT = Object(_utils_common__WEBPACK_IMPORTED_MODULE_18__["calculateResultO"])(_result[0], _result[1]);

      return "".concat(_AN_RESULT, " % (").concat(Object(_utils_common__WEBPACK_IMPORTED_MODULE_18__["getOResult"])(_AN_RESULT), ")");
    }
  };

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_7__["useFormik"])({
    initialValues: INITIAL_VALUES,
    validationSchema: BusquedaClienteSchema,
    onSubmit: function onSubmit(values) {
      if (!busyDownloading) {
        var opciones = {};
        var nombreArchivo = "".concat(values.tipoReporte);
        var tipoDescarga = values.tipoDescarga;
        setBusyDownloading(true);

        if (tipoDescarga === "viejo") {
          if (values.tipoReporte === "old-snis") {
            nombreArchivo = "SNIS-".concat(values.startDate.format("YYYY-MM-DD"), " - ").concat(values.endDate.format("YYYY-MM-DD"));
            opciones = {
              start: values.startDate.format("YYYY-MM-DD"),
              end: values.endDate.format("YYYY-MM-DD"),
              tipoInforme: "snis",
              testId: values.estudio.value === "all" ? "" : values.estudio.value
            };
          }

          if (values.tipoReporte === "old-conciliacion") {
            nombreArchivo = "conciliacion-".concat(values.startDate.format("YYYY-MM-DD"), " - ").concat(values.endDate.format("YYYY-MM-DD"));
            opciones = {
              start: values.startDate.format("YYYY-MM-DD"),
              end: values.endDate.format("YYYY-MM-DD"),
              tipoInforme: "conciliacion",
              testId: values.estudio.value === "all" ? "" : values.estudio.value,
              tipoPaciente: values.tipoFicha.value
            };
          }

          generateReport({
            variables: opciones
          }).then(function (_ref3) {
            var data = _ref3.data,
                error = _ref3.error;

            if (error) {
              console.log(error);
              setBusyDownloading(false);
              return;
            }

            if (data.generateReport && data.generateReport.length > 0) {
              if (values.tipoReporte === "old-conciliacion") {
                var informeData = data.generateReport.map(function (item) {
                  var codigo = item.codigo,
                      fechaSolicitud = item.fechaSolicitud,
                      tipoFicha = item.tipoFicha,
                      noFactura = item.noFactura,
                      montoPagado = item.montoPagado,
                      pagoStatus = item.pagoStatus,
                      noComprobante = item.noComprobante,
                      conciliacionMadeBy = item.conciliacionMadeBy,
                      fechaFactura = item.fechaFactura,
                      ordenNumero = item.ordenNumero,
                      numeroDeAutorizacion = item.numeroDeAutorizacion,
                      _item$clientID = item.clientID,
                      nombres = _item$clientID.nombres,
                      apellidos = _item$clientID.apellidos,
                      ci = _item$clientID.ci;
                  return {
                    codigo: codigo,
                    fechaSolicitud: moment__WEBPACK_IMPORTED_MODULE_11___default()(fechaSolicitud, "DD/MM/YYYY").format("DD/MM/YY"),
                    tipo_cliente: tipoFicha,
                    nombres: nombres,
                    apellidos: apellidos,
                    ci: ci,
                    montoPagado: montoPagado,
                    factura_no: noFactura,
                    ordenNumero: ordenNumero,
                    numeroDeAutorizacion: numeroDeAutorizacion,
                    fechaFactura: fechaFactura,
                    estatus_pago: pagoStatus,
                    referencia: noComprobante,
                    conciliaciado_por: conciliacionMadeBy
                  };
                });
                exportToCSV(informeData, nombreArchivo);
              }

              if (values.tipoReporte === "old-snis") {
                var _informeData = data.generateReport.map(function (item) {
                  var codigo = item.codigo,
                      fechaSolicitud = item.fechaSolicitud,
                      fechaReporte = item.fechaReporte,
                      inicioSintomas = item.inicioSintomas,
                      resultado = item.resultado,
                      _item$clientID2 = item.clientID,
                      nombres = _item$clientID2.nombres,
                      apellidos = _item$clientID2.apellidos,
                      ci = _item$clientID2.ci,
                      telefono = _item$clientID2.telefono,
                      departamento = _item$clientID2.departamento,
                      municipio = _item$clientID2.municipio,
                      direccion = _item$clientID2.direccion,
                      fecha_nacimiento = _item$clientID2.fecha_nacimiento;
                  return {
                    codigo: codigo,
                    fechaSolicitud: fechaSolicitud,
                    fechaReporte: fechaReporte,
                    nombres: nombres,
                    apellidos: apellidos,
                    ci: ci,
                    telefono: telefono,
                    fecha_nacimiento: fecha_nacimiento,
                    edad: Object(_utils_common__WEBPACK_IMPORTED_MODULE_18__["getEdad"])(fecha_nacimiento, ""),
                    departamento: departamento,
                    municipio: municipio,
                    direccion: direccion,
                    inicioSintomas: inicioSintomas,
                    resultado: getResultadoOld(codigo, resultado)
                  };
                });

                exportToCSV(_informeData, nombreArchivo);
              }
            } else {
              Object(_functions_common__WEBPACK_IMPORTED_MODULE_12__["showNotification"])("error", "No se encontró informacion con los parametros enviados.");
            }

            setBusyDownloading(false);
          });
        } else if (tipoDescarga === "nuevo") {
          if (values.tipoReporte === "snis") {
            nombreArchivo = "SNIS-".concat(values.startDate.format("YYYY-MM-DD"), " - ").concat(values.endDate.format("YYYY-MM-DD"));
            opciones = {
              start: values.startDate.format("YYYY-MM-DD"),
              end: values.endDate.format("YYYY-MM-DD"),
              tipoInforme: "snis",
              testId: values.estudio.id === "all" ? "" : values.estudio.id
            };
          }

          if (values.tipoReporte === "conciliacion") {
            nombreArchivo = "conciliacion-".concat(values.startDate.format("YYYY-MM-DD"), " - ").concat(values.endDate.format("YYYY-MM-DD"));
            opciones = {
              start: values.startDate.format("YYYY-MM-DD"),
              end: values.endDate.format("YYYY-MM-DD"),
              tipoInforme: "conciliacion",
              testId: values.estudio.id === "all" ? "" : values.estudio.id,
              proveedorID: values.tipoFicha.value,
              usuarioID: values.tipoUsuario.value
            };
          }

          generateReportOrdenes({
            variables: opciones
          }).then(function (_ref4) {
            var data = _ref4.data,
                error = _ref4.error;

            if (error) {
              console.log(error);
              setBusyDownloading(false);
              return;
            }

            if (data.generateReportOrdenes && data.generateReportOrdenes.length > 0) {
              if (values.tipoReporte === "conciliacion") {
                var informeData = data.generateReportOrdenes.map(function (item) {
                  var _estudioID$areaDeEstu, _estudioID$areaDeEstu2;

                  var fechaSolicitud = item.fechaSolicitud,
                      ordenNo = item.ordenNo,
                      codigoEstudio = item.codigoEstudio,
                      codigoInterno = item.codigoInterno,
                      estudioNumero = item.estudioNumero,
                      precio = item.precio,
                      _item$ordenID = item.ordenID,
                      _item$ordenID$clientI = _item$ordenID.clientID,
                      nombres = _item$ordenID$clientI.nombres,
                      apellidos = _item$ordenID$clientI.apellidos,
                      ci = _item$ordenID$clientI.ci,
                      fecha_nacimiento = _item$ordenID$clientI.fecha_nacimiento,
                      telefono = _item$ordenID$clientI.telefono,
                      sexo = _item$ordenID$clientI.sexo,
                      _item$ordenID$created = _item$ordenID.createdBy,
                      nombre = _item$ordenID$created.nombre,
                      apellido = _item$ordenID$created.apellido,
                      totalAPagar = _item$ordenID.totalAPagar,
                      contratista = _item$ordenID.contratista,
                      formaDePago = _item$ordenID.formaDePago,
                      listaSucursal = _item$ordenID.listaSucursal,
                      estatusPago = _item$ordenID.estatusPago,
                      NoFactura = _item$ordenID.NoFactura,
                      nroOrdenDeCompra = _item$ordenID.nroOrdenDeCompra,
                      nroAutorizacion = _item$ordenID.nroAutorizacion,
                      fechaFactura = _item$ordenID.fechaFactura,
                      referenciaDePago = _item$ordenID.referenciaDePago,
                      proveedorID = _item$ordenID.proveedorID,
                      fechaDePago = _item$ordenID.fechaDePago,
                      estudioID = item.estudioID;
                  var PROVEEDOR = contratista ? "".concat(proveedorID.nombre, " / ").concat(contratista, " ") : proveedorID.nombre;
                  return {
                    ordenNo: ordenNo,
                    nombreEstudio: estudioID.nombre,
                    codigoEstudio: "".concat(codigoEstudio).concat(estudioNumero),
                    areaEstudio: (_estudioID$areaDeEstu = estudioID === null || estudioID === void 0 ? void 0 : (_estudioID$areaDeEstu2 = estudioID.areaDeEstudioID) === null || _estudioID$areaDeEstu2 === void 0 ? void 0 : _estudioID$areaDeEstu2.nombre) !== null && _estudioID$areaDeEstu !== void 0 ? _estudioID$areaDeEstu : '',
                    codigoInterno: codigoInterno,
                    precioUnitario: precio,
                    fechaSolicitud: moment__WEBPACK_IMPORTED_MODULE_11___default()(fechaSolicitud).utc().format("DD/MM/YYYY"),
                    tipoDeCliente: PROVEEDOR,
                    sucursal: listaSucursal,
                    nombres: nombres,
                    apellidos: apellidos,
                    ci: ci,
                    telefono: telefono,
                    edad: Object(_utils_common__WEBPACK_IMPORTED_MODULE_18__["getEdad"])(fecha_nacimiento, ""),
                    sexo: sexo === "F" ? "Femenino" : sexo === "M" ? "Masculino" : "",
                    montoTotalPagado: totalAPagar,
                    factura_no: NoFactura,
                    nroOrdenDeCompra: nroOrdenDeCompra,
                    nroAutorizacion: nroAutorizacion,
                    fechaFactura: fechaFactura ? moment__WEBPACK_IMPORTED_MODULE_11___default()(fechaFactura).utc().format("DD/MM/YYYY") : "",
                    fechaDePago: fechaDePago ? moment__WEBPACK_IMPORTED_MODULE_11___default()(fechaDePago).utc().format("DD/MM/YYYY") : "",
                    formaDePago: formaDePago,
                    estatusPago: estatusPago,
                    referenciaDePago: referenciaDePago,
                    creadoPor: "".concat(nombre, " ").concat(apellido)
                  };
                });
                exportToCSV(informeData, nombreArchivo, {
                  title: 'INFORME DE CONCILIACIÓN',
                  startAt: values.startDate.format("YYYY-MM-DD"),
                  endAt: values.endDate.format("YYYY-MM-DD")
                });
              }

              if (values.tipoReporte === "snis") {
                var _informeData2 = data.generateReportOrdenes.map(function (item) {
                  var codigoEstudio = item.codigoEstudio,
                      estudioNumero = item.estudioNumero,
                      fechaSolicitud = item.fechaSolicitud,
                      fechaReporte = item.fechaReporte,
                      camposEstudio = item.camposEstudio,
                      _item$ordenID2 = item.ordenID,
                      _item$ordenID2$client = _item$ordenID2.clientID,
                      nombres = _item$ordenID2$client.nombres,
                      apellidos = _item$ordenID2$client.apellidos,
                      ci = _item$ordenID2$client.ci,
                      telefono = _item$ordenID2$client.telefono,
                      departamento = _item$ordenID2$client.departamento,
                      municipio = _item$ordenID2$client.municipio,
                      direccion = _item$ordenID2$client.direccion,
                      fecha_nacimiento = _item$ordenID2$client.fecha_nacimiento,
                      proveedorID = _item$ordenID2.proveedorID;

                  if (currentUser.role === "doc") {
                    return {
                      codigoEstudio: "".concat(codigoEstudio).concat(estudioNumero),
                      fechaSolicitud: moment__WEBPACK_IMPORTED_MODULE_11___default()(fechaSolicitud).utc().format("DD/MM/YYYY"),
                      fechaReporte: fechaReporte ? moment__WEBPACK_IMPORTED_MODULE_11___default()(fechaReporte).utc().format("DD/MM/YYYY") : "",
                      nombres: nombres,
                      apellidos: apellidos,
                      ci: ci,
                      telefono: telefono,
                      fecha_nacimiento: fecha_nacimiento,
                      edad: Object(_utils_common__WEBPACK_IMPORTED_MODULE_18__["getEdad"])(fecha_nacimiento, ""),
                      tipoDeCliente: proveedorID.nombre,
                      departamento: departamento,
                      municipio: municipio,
                      direccion: direccion,
                      resultado: getResultado(codigoEstudio, camposEstudio),
                      "Influenza A": getResultadoInfluenza(codigoEstudio, camposEstudio, "a"),
                      "Influenza B": getResultadoInfluenza(codigoEstudio, camposEstudio, "b"),
                      VacunaDosisPrimera: item.ordenID.clientID.vacunas && item.ordenID.clientID.vacunas.dosisPrimera,
                      VacunaDosisRefuerzoPrimera: item.ordenID.clientID.vacunas && item.ordenID.clientID.vacunas.dosisRefuerzoPrimero,
                      VacunaDosisRefuerzoSegundo: item.ordenID.clientID.vacunas && item.ordenID.clientID.vacunas.dosisRefuerzoSegundo,
                      VacunaDosisSegunda: item.ordenID.clientID.vacunas && item.ordenID.clientID.vacunas.dosisSegunda,
                      VacunaDosisUnica: item.ordenID.clientID.vacunas && item.ordenID.clientID.vacunas.dosisUnica,
                      VacunaFechaUltimoTest: item.ordenID.clientID.vacunas && item.ordenID.clientID.vacunas.fechaUltimoTest && moment__WEBPACK_IMPORTED_MODULE_11___default()(item.ordenID.clientID.vacunas.fechaUltimoTest).format('YYYY-MM-DD')
                    };
                  }

                  return {
                    codigoEstudio: "".concat(codigoEstudio).concat(estudioNumero),
                    fechaSolicitud: moment__WEBPACK_IMPORTED_MODULE_11___default()(fechaSolicitud).utc().format("DD/MM/YYYY"),
                    fechaReporte: fechaReporte ? moment__WEBPACK_IMPORTED_MODULE_11___default()(fechaReporte).utc().format("DD/MM/YYYY") : "",
                    nombres: nombres,
                    apellidos: apellidos,
                    ci: ci,
                    telefono: telefono,
                    fecha_nacimiento: fecha_nacimiento,
                    edad: Object(_utils_common__WEBPACK_IMPORTED_MODULE_18__["getEdad"])(fecha_nacimiento, ""),
                    tipoDeCliente: proveedorID.nombre,
                    departamento: departamento,
                    municipio: municipio,
                    direccion: direccion,
                    resultado: getResultado(codigoEstudio, camposEstudio)
                  };
                });

                exportToCSV(_informeData2, nombreArchivo);
              }
            } else {
              Object(_functions_common__WEBPACK_IMPORTED_MODULE_12__["showNotification"])("error", "No se encontró informacion con los parametros enviados.");
            }

            setBusyDownloading(false);
          });
        }
      }
    }
  });

  var fetchProveedores = function fetchProveedores() {
    getProveedores({
      useCache: true
    }).then(function (_ref5) {
      var data = _ref5.data,
          error = _ref5.error;

      if (data.getProveedores) {
        var opciones = data.getProveedores.map(function (i) {
          return {
            label: i.nombre,
            value: i.id
          };
        });
        setProveedores([].concat(Object(D_PROYECTOS_admin_system_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(opciones), [{
          label: "Todos",
          value: "all"
        }]));
      }
    });
  };

  var fetchUsuarios = function fetchUsuarios() {
    getAllUsers({
      useCache: true
    }).then(function (_ref6) {
      var data = _ref6.data,
          error = _ref6.error;

      if (data.getAllUsers) {
        var opciones = data.getAllUsers.map(function (i) {
          return {
            label: "".concat(i.nombre, " ").concat(i.apellido),
            value: i.id
          };
        });
        setListaDeUsuarios([].concat(Object(D_PROYECTOS_admin_system_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(opciones), [{
          label: "Todos",
          value: "all"
        }]));
      }
    });
  };

  var exportToCSV = function exportToCSV(csvData, fileName, preHeader) {
    var ws = preHeader == null ? xlsx__WEBPACK_IMPORTED_MODULE_17__["utils"].json_to_sheet(csvData) : xlsx__WEBPACK_IMPORTED_MODULE_17__["utils"].json_to_sheet([], {});

    if (preHeader != null) {
      xlsx__WEBPACK_IMPORTED_MODULE_17__["utils"].sheet_add_json(ws, [{
        A: preHeader.title,
        B: ''
      }, {
        A: 'Fecha Inicio',
        B: preHeader.startAt
      }, {
        A: 'Fecha Fin',
        B: preHeader.endAt
      }], {
        skipHeader: true,
        origin: 'A1'
      });
      xlsx__WEBPACK_IMPORTED_MODULE_17__["utils"].sheet_add_json(ws, csvData, {
        skipHeader: false,
        origin: 'A4'
      });
    }

    var wb = {
      Sheets: {
        data: ws
      },
      SheetNames: ["data"]
    };
    var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_17__["write"](wb, {
      bookType: "xlsx",
      type: "array"
    });
    var data = new Blob([excelBuffer], {
      type: fileType
    });
    file_saver__WEBPACK_IMPORTED_MODULE_14__["saveAs"](data, fileName + fileExtension);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (currentUser && currentUser.role !== "doc") {
      fetchProveedores();
      fetchEstudiosNuevos();
      fetchUsuarios();
    }
  }, [currentUser]);

  function validEnd(current) {
    var start = moment__WEBPACK_IMPORTED_MODULE_11___default()(formik.values.startDate).subtract(1, "day");
    return current.isBetween(start, moment__WEBPACK_IMPORTED_MODULE_11___default()());
  }

  function showFilterByLabUser() {
    var roles = ["admin", "super_admin", "contabilidad", "contabilidad_", "default"];
    return roles.includes(currentUser.role);
  }

  if (!currentUser) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "w-full px-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_15___default.a, {
            css: override,
            size: 80,
            color: "#000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 611,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 610,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 609,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 608,
      columnNumber: 7
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_widget__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Filtrar Estudios",
    description: "",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
      onSubmit: formik.handleSubmit,
      className: "flex flex-col lg:flex-row lg:flex-wrap w-full",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 pl-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "form-element",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "form-label",
              children: "Origen Informaci\xF3n"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 627,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("select", {
              className: "form-select ".concat(formik.errors.tipoDescarga ? "form-input-invalid" : ""),
              name: "tipoDescarga",
              placeholder: "Seleccione",
              onChange: function onChange(e) {
                formik.handleChange(e);

                if (e.target.value === "nuevo") {
                  formik.setFieldValue("estudio", {
                    nombre: "TODOS",
                    id: "all"
                  });
                }

                if (e.target.value === "viejo") {
                  formik.setFieldValue("estudio", {
                    value: "all",
                    label: "TODOS"
                  });
                }

                formik.setFieldValue("tipoReporte", "");
              },
              value: formik.values.tipoDescarga,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("option", {
                value: "",
                children: "Selecciona una opcion"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 652,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("option", {
                value: "viejo",
                children: "Sistema anterior"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 653,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("option", {
                value: "nuevo",
                children: "Sistema nuevo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 654,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 628,
              columnNumber: 15
            }, _this), formik.errors.tipoDescarga && formik.touched.tipoDescarga ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "form-error",
              children: "Este campo es requerido"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 657,
              columnNumber: 17
            }, _this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 626,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 625,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 pl-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "form-element",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "form-label",
              children: "Inicio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 663,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_datetime__WEBPACK_IMPORTED_MODULE_10___default.a, {
              locale: "es",
              name: "startDate",
              dateFormat: "DD-MM-YYYY",
              timeFormat: false,
              isValidDate: valid,
              input: true,
              closeOnSelect: true,
              inputProps: {
                className: "form-input",
                placeholder: "Fecha Inicio"
              },
              style: {
                width: "150px"
              },
              viewMode: "days",
              value: formik.values.startDate,
              onChange: function onChange(v) {
                formik.setFieldValue("startDate", v);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 664,
              columnNumber: 15
            }, _this), formik.errors.startDate && formik.touched.startDate ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "form-error",
              children: "Este campo es requerido"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 684,
              columnNumber: 17
            }, _this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 662,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 661,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 pl-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "form-element",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "form-label",
              children: "Fin"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 690,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_datetime__WEBPACK_IMPORTED_MODULE_10___default.a, {
              locale: "es",
              name: "endDate",
              dateFormat: "DD-MM-YYYY",
              timeFormat: false,
              isValidDate: validEnd,
              input: true,
              closeOnSelect: true,
              inputProps: {
                className: "form-input",
                placeholder: "Fecha Fin"
              },
              viewMode: "days",
              value: formik.values.endDate,
              onChange: function onChange(v) {
                formik.setFieldValue("endDate", v);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 691,
              columnNumber: 15
            }, _this), formik.errors.endDate && formik.touched.endDate ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "form-error",
              children: "Este campo es requerido"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 710,
              columnNumber: 17
            }, _this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 689,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 688,
          columnNumber: 11
        }, _this)]
      }, void 0, true), formik.values.tipoDescarga === "nuevo" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 pl-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "form-element",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "form-label",
              children: "Tipo de Informe"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 719,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("select", {
              className: "form-select ".concat(formik.errors.tipoReporte ? "form-input-invalid" : ""),
              name: "tipoReporte",
              placeholder: "Seleccione",
              onChange: function onChange(e) {
                formik.handleChange(e);
                formik.setFieldValue("estudio", {
                  id: "all",
                  nombre: "TODOS"
                });
              },
              value: formik.values.tipoReporte,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("option", {
                value: "",
                children: "Selecciona una opcion"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 735,
                columnNumber: 19
              }, _this), currentUser.role !== "doc" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("option", {
                  value: "conciliacion",
                  children: "Informe de conciliaci\xF3n"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 738,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("option", {
                  value: "snis",
                  children: "SNIS"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 741,
                  columnNumber: 23
                }, _this)]
              }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("option", {
                value: "snis",
                children: "Reporte de Estudio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 744,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 720,
              columnNumber: 17
            }, _this), formik.errors.tipoReporte && formik.touched.tipoReporte ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "form-error",
              children: "Este campo es requerido"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 748,
              columnNumber: 19
            }, _this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 718,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 717,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 pl-3 self-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "form-element",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "form-label",
              children: "Seleccione el tipo de prueba:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 754,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_6__["default"], {
              name: "estudio",
              placeholder: "Seleccione un estudio...",
              options: formik.values.tipoReporte === "snis" ? estudiosSNIS : listaEstudios,
              value: formik.values.estudio,
              getOptionLabel: function getOptionLabel(opts) {
                return opts.nombre;
              },
              getOptionValue: function getOptionValue(opts) {
                return opts.id;
              },
              onChange: function onChange(value) {
                if (value) {
                  formik.setFieldValue("estudio", value);
                } else {
                  formik.setFieldValue("estudio", null);
                }
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 755,
              columnNumber: 17
            }, _this), formik.errors.estudio && formik.touched.estudio ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "form-error",
              children: "Este campo es requerido"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 775,
              columnNumber: 19
            }, _this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 753,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 752,
          columnNumber: 13
        }, _this)]
      }, void 0, true) : null, formik.values.tipoDescarga === "viejo" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 pl-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "form-element",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "form-label",
              children: "Tipo de Informe"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 785,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("select", {
              className: "form-select ".concat(formik.errors.tipoReporte ? "form-input-invalid" : ""),
              name: "tipoReporte",
              placeholder: "Seleccione",
              onChange: function onChange(e) {
                formik.handleChange(e);
              },
              value: formik.values.tipoReporte,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("option", {
                value: "",
                children: "Selecciona una opcion"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 797,
                columnNumber: 19
              }, _this), currentUser.role !== "doc" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("option", {
                  value: "old-conciliacion",
                  children: "Informe de conciliaci\xF3n"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 800,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("option", {
                  value: "old-snis",
                  children: "SNIS"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 803,
                  columnNumber: 23
                }, _this)]
              }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("option", {
                value: "old-snis",
                children: "Reporte de Estudio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 806,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 786,
              columnNumber: 17
            }, _this), formik.errors.tipoReporte && formik.touched.tipoReporte ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "form-error",
              children: "Este campo es requerido"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 810,
              columnNumber: 19
            }, _this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 784,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 783,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 pl-3 self-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "form-element",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "form-label",
              children: "Seleccione el tipo de prueba:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 816,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_6__["default"], {
              name: "estudio",
              placeholder: "Seleccione un estudio...",
              options: optionsEstudios,
              value: formik.values.estudio,
              onChange: function onChange(value) {
                if (value) {
                  formik.setFieldValue("estudio", value);
                } else {
                  formik.setFieldValue("estudio", null);
                }
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 817,
              columnNumber: 17
            }, _this), formik.errors.estudio && formik.touched.estudio ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "form-error",
              children: "Este campo es requerido"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 831,
              columnNumber: 19
            }, _this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 815,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 814,
          columnNumber: 13
        }, _this)]
      }, void 0, true) : null, formik.values.tipoReporte === "old-conciliacion" || formik.values.tipoReporte === "conciliacion" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 pl-3 self-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "form-element",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "form-label",
            children: "Filtrar por tipo de paciente:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 841,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "tipoFicha",
            placeholder: "Seleccione uno...",
            options: proveedores,
            value: formik.values.tipoFicha,
            onChange: function onChange(value) {
              if (value) {
                formik.setFieldValue("tipoFicha", value);
              } else {
                formik.setFieldValue("tipoFicha", null);
              }
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 842,
            columnNumber: 15
          }, _this), formik.errors.tipoFicha && formik.touched.tipoFicha ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "form-error",
            children: "Este campo es requerido"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 856,
            columnNumber: 17
          }, _this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 840,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 839,
        columnNumber: 11
      }, _this) : null, formik.values.tipoReporte === "conciliacion" && showFilterByLabUser() === true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 pl-3 self-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "form-element",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "form-label",
            children: "Filtrar por Usuario Lab:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 865,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "tipoUsuario",
            placeholder: "Seleccione uno...",
            options: listaDeUsuarios,
            value: formik.values.tipoUsuario,
            onChange: function onChange(value) {
              if (value) {
                formik.setFieldValue("tipoUsuario", value);
              } else {
                formik.setFieldValue("tipoUsuario", null);
              }
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 866,
            columnNumber: 17
          }, _this), formik.errors.tipoUsuario && formik.touched.tipoUsuario ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "form-error",
            children: "Este campo es requerido"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 880,
            columnNumber: 19
          }, _this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 864,
          columnNumber: 15
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 863,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "w-full sm:w-full md:w-full lg:w-2/4 xl:w-1/4 pt-3 pl-3 self-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "m-auto",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
            disabled: busyDownloading,
            className: "inline-block px-6 py-2 my-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none mx-auto disabled:opacity-50",
            type: "submit",
            children: [busyDownloading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("svg", {
              className: " inline-block animate-spin -ml-1 mr-3 h-5 w-5 text-white",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("circle", {
                className: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 899,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                className: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 907,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 893,
              columnNumber: 17
            }, _this) : null, busyDownloading ? "Descargando" : "Descargar "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 887,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 886,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 885,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 620,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 619,
    columnNumber: 5
  }, _this);
};

_s(DescargaReportes, "VRQwJRKKmwHz6yxzm/PWh0q+NzQ=", false, function () {
  return [graphql_hooks__WEBPACK_IMPORTED_MODULE_9__["useManualQuery"], graphql_hooks__WEBPACK_IMPORTED_MODULE_9__["useManualQuery"], graphql_hooks__WEBPACK_IMPORTED_MODULE_9__["useManualQuery"], graphql_hooks__WEBPACK_IMPORTED_MODULE_9__["useManualQuery"], graphql_hooks__WEBPACK_IMPORTED_MODULE_9__["useManualQuery"], graphql_hooks__WEBPACK_IMPORTED_MODULE_9__["useManualQuery"], formik__WEBPACK_IMPORTED_MODULE_7__["useFormik"]];
});

_c = DescargaReportes;
/* harmony default export */ __webpack_exports__["default"] = (DescargaReportes);

var _c;

$RefreshReg$(_c, "DescargaReportes");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9ybXMtbG9jYWwvZGVzY2FyZ2EtcmVwb3J0ZXMuanMiXSwibmFtZXMiOlsidmFsaWQiLCJjdXJyZW50IiwiaXNCZWZvcmUiLCJtb21lbnQiLCJvdmVycmlkZSIsImNzcyIsIklOSVRJQUxfVkFMVUVTIiwic3RhcnREYXRlIiwic3VidHJhY3QiLCJ1dGNPZmZzZXQiLCJlbmREYXRlIiwiZXN0dWRpbyIsImlkIiwibm9tYnJlIiwidGlwb0ZpY2hhIiwibGFiZWwiLCJ2YWx1ZSIsInRpcG9Vc3VhcmlvIiwidGlwb0Rlc2NhcmdhIiwidGlwb1JlcG9ydGUiLCJvcHRpb25zRXN0dWRpb3MiLCJlc3R1ZGlvc1NOSVMiLCJCdXNxdWVkYUNsaWVudGVTY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIkRlc2NhcmdhUmVwb3J0ZXMiLCJDQlNldFJvd3MiLCJDQkxvYWRpbmciLCJidXN5IiwiQ0JOb1Jlc3VsdCIsImN1cnJlbnRVc2VyIiwidXNlTWFudWFsUXVlcnkiLCJJTkZPUk1FUyIsImdlbmVyYXRlUmVwb3J0IiwiR0VUX1BST1ZFRURPUkVTIiwiZ2V0UHJvdmVlZG9yZXMiLCJHRVRfRVNUVURJT1NfU0lNUExFIiwiZ2V0RXN0dWRpb3MiLCJHRVRfRklDSEFTX0JZX1RFU1RfUE9SX0NPTkNJTElBUiIsImdldEZpY2hhc0J5VGVzdFBvckNvbmNpbGlhciIsIlJFUE9SVEVTX09SREVORVMiLCJnZW5lcmF0ZVJlcG9ydE9yZGVuZXMiLCJHRVRfVE9ET1NfVVNVQVJJT1MiLCJnZXRBbGxVc2VycyIsInVzZVN0YXRlIiwic2hvd0Rvd25sb2FkQnRuIiwic2V0RG93bmxvYWRCdG4iLCJwcm92ZWVkb3JlcyIsInNldFByb3ZlZWRvcmVzIiwibGlzdGFFc3R1ZGlvcyIsInNldExpc3RhRXN0dWRpb3MiLCJsaXN0YURlVXN1YXJpb3MiLCJzZXRMaXN0YURlVXN1YXJpb3MiLCJidXN5RG93bmxvYWRpbmciLCJzZXRCdXN5RG93bmxvYWRpbmciLCJmaWxlVHlwZSIsImZpbGVFeHRlbnNpb24iLCJmZXRjaEVzdHVkaW9zTnVldm9zIiwidGhlbiIsImRhdGEiLCJlcnJvciIsImdldFJlc3VsdGFkbyIsImNvZGlnbyIsImNhbXBvc0VzdHVkaW9zIiwiZ2V0VmFsdWVGaWVsZCIsImdldFJlc3VsdGFkb0luZmx1ZW56YSIsInRpcG8iLCJnZXRSZXN1bHRhZG9PbGQiLCJyZXN1bHRhZG8iLCJDT0RJR09fRVNUVURJTyIsInJlcGxhY2UiLCJ0cmltIiwidG9VcHBlckNhc2UiLCJlbGlzYV9yZXN1bHQiLCJzcGxpdCIsInJlc3VsdCIsIkFOX1JFU1VMVCIsImNhbGN1bGF0ZVJlc3VsdEFOIiwiZ2V0QU5SZXN1bHQiLCJjYWxjdWxhdGVSZXN1bHRPIiwiZ2V0T1Jlc3VsdCIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJ2YWxpZGF0aW9uU2NoZW1hIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJvcGNpb25lcyIsIm5vbWJyZUFyY2hpdm8iLCJmb3JtYXQiLCJzdGFydCIsImVuZCIsInRpcG9JbmZvcm1lIiwidGVzdElkIiwidGlwb1BhY2llbnRlIiwidmFyaWFibGVzIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImluZm9ybWVEYXRhIiwibWFwIiwiaXRlbSIsImZlY2hhU29saWNpdHVkIiwibm9GYWN0dXJhIiwibW9udG9QYWdhZG8iLCJwYWdvU3RhdHVzIiwibm9Db21wcm9iYW50ZSIsImNvbmNpbGlhY2lvbk1hZGVCeSIsImZlY2hhRmFjdHVyYSIsIm9yZGVuTnVtZXJvIiwibnVtZXJvRGVBdXRvcml6YWNpb24iLCJjbGllbnRJRCIsIm5vbWJyZXMiLCJhcGVsbGlkb3MiLCJjaSIsInRpcG9fY2xpZW50ZSIsImZhY3R1cmFfbm8iLCJlc3RhdHVzX3BhZ28iLCJyZWZlcmVuY2lhIiwiY29uY2lsaWFjaWFkb19wb3IiLCJleHBvcnRUb0NTViIsImZlY2hhUmVwb3J0ZSIsImluaWNpb1NpbnRvbWFzIiwidGVsZWZvbm8iLCJkZXBhcnRhbWVudG8iLCJtdW5pY2lwaW8iLCJkaXJlY2Npb24iLCJmZWNoYV9uYWNpbWllbnRvIiwiZWRhZCIsImdldEVkYWQiLCJzaG93Tm90aWZpY2F0aW9uIiwicHJvdmVlZG9ySUQiLCJ1c3VhcmlvSUQiLCJvcmRlbk5vIiwiY29kaWdvRXN0dWRpbyIsImNvZGlnb0ludGVybm8iLCJlc3R1ZGlvTnVtZXJvIiwicHJlY2lvIiwib3JkZW5JRCIsInNleG8iLCJjcmVhdGVkQnkiLCJhcGVsbGlkbyIsInRvdGFsQVBhZ2FyIiwiY29udHJhdGlzdGEiLCJmb3JtYURlUGFnbyIsImxpc3RhU3VjdXJzYWwiLCJlc3RhdHVzUGFnbyIsIk5vRmFjdHVyYSIsIm5yb09yZGVuRGVDb21wcmEiLCJucm9BdXRvcml6YWNpb24iLCJyZWZlcmVuY2lhRGVQYWdvIiwiZmVjaGFEZVBhZ28iLCJlc3R1ZGlvSUQiLCJQUk9WRUVET1IiLCJub21icmVFc3R1ZGlvIiwiYXJlYUVzdHVkaW8iLCJhcmVhRGVFc3R1ZGlvSUQiLCJwcmVjaW9Vbml0YXJpbyIsInV0YyIsInRpcG9EZUNsaWVudGUiLCJzdWN1cnNhbCIsIm1vbnRvVG90YWxQYWdhZG8iLCJjcmVhZG9Qb3IiLCJ0aXRsZSIsInN0YXJ0QXQiLCJlbmRBdCIsImNhbXBvc0VzdHVkaW8iLCJyb2xlIiwiVmFjdW5hRG9zaXNQcmltZXJhIiwidmFjdW5hcyIsImRvc2lzUHJpbWVyYSIsIlZhY3VuYURvc2lzUmVmdWVyem9QcmltZXJhIiwiZG9zaXNSZWZ1ZXJ6b1ByaW1lcm8iLCJWYWN1bmFEb3Npc1JlZnVlcnpvU2VndW5kbyIsImRvc2lzUmVmdWVyem9TZWd1bmRvIiwiVmFjdW5hRG9zaXNTZWd1bmRhIiwiZG9zaXNTZWd1bmRhIiwiVmFjdW5hRG9zaXNVbmljYSIsImRvc2lzVW5pY2EiLCJWYWN1bmFGZWNoYVVsdGltb1Rlc3QiLCJmZWNoYVVsdGltb1Rlc3QiLCJmZXRjaFByb3ZlZWRvcmVzIiwidXNlQ2FjaGUiLCJpIiwiZmV0Y2hVc3VhcmlvcyIsImNzdkRhdGEiLCJmaWxlTmFtZSIsInByZUhlYWRlciIsIndzIiwiWExTWCIsImpzb25fdG9fc2hlZXQiLCJzaGVldF9hZGRfanNvbiIsIkEiLCJCIiwic2tpcEhlYWRlciIsIm9yaWdpbiIsIndiIiwiU2hlZXRzIiwiU2hlZXROYW1lcyIsImV4Y2VsQnVmZmVyIiwiYm9va1R5cGUiLCJ0eXBlIiwiQmxvYiIsIkZpbGVTYXZlciIsInVzZUVmZmVjdCIsInZhbGlkRW5kIiwiaXNCZXR3ZWVuIiwic2hvd0ZpbHRlckJ5TGFiVXNlciIsInJvbGVzIiwiaW5jbHVkZXMiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJlIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0Iiwic2V0RmllbGRWYWx1ZSIsInRvdWNoZWQiLCJjbGFzc05hbWUiLCJwbGFjZWhvbGRlciIsIndpZHRoIiwidiIsIm9wdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFTQSxTQUFTQSxLQUFULENBQWVDLE9BQWYsRUFBd0I7QUFDdEIsU0FBT0EsT0FBTyxDQUFDQyxRQUFSLENBQWlCQyw4Q0FBTSxFQUF2QixDQUFQO0FBQ0Q7O0FBRUQsSUFBTUMsUUFBUSxHQUFHQywwREFBSCxtQkFBZDtBQU1BLElBQU1DLGNBQWMsR0FBRztBQUNyQkMsV0FBUyxFQUFFSiw4Q0FBTSxHQUFHSyxRQUFULENBQWtCLENBQWxCLEVBQXFCLFFBQXJCLEVBQStCQyxTQUEvQixDQUF5QyxDQUF6QyxFQUE0QyxJQUE1QyxDQURVO0FBRXJCQyxTQUFPLEVBQUVQLDhDQUFNLEdBQUdNLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsSUFBdEIsQ0FGWTtBQUdyQkUsU0FBTyxFQUFFO0FBQUVDLE1BQUUsRUFBRSxLQUFOO0FBQWFDLFVBQU0sRUFBRTtBQUFyQixH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dGF0aWMvd2VicGFjay9wYWdlcy9yZXBvcnRlcy9kZXNjYXJnYS41Njk4YWQyZDRjMTIxZmQxMzc2ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBXaWRnZXQgZnJvbSBcIi4uL3dpZGdldFwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xuaW1wb3J0IHsgdXNlTWFudWFsUXVlcnkgfSBmcm9tIFwiZ3JhcGhxbC1ob29rc1wiO1xuaW1wb3J0IERhdGV0aW1lIGZyb20gXCJyZWFjdC1kYXRldGltZVwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgeyBzaG93Tm90aWZpY2F0aW9uIH0gZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9jb21tb25cIjtcbmltcG9ydCB7XG4gIEdFVF9QUk9WRUVET1JFUyxcbiAgR0VUX0ZJQ0hBU19CWV9URVNUX1BPUl9DT05DSUxJQVIsXG4gIElORk9STUVTLFxuICBHRVRfRVNUVURJT1NfU0lNUExFLFxuICBSRVBPUlRFU19PUkRFTkVTLFxuICBHRVRfVE9ET1NfVVNVQVJJT1MsXG59IGZyb20gXCIuLi8uLi9xdWVyaWVzXCI7XG5pbXBvcnQgKiBhcyBGaWxlU2F2ZXIgZnJvbSBcImZpbGUtc2F2ZXJcIjtcbmltcG9ydCBDbGlwTG9hZGVyIGZyb20gXCJyZWFjdC1zcGlubmVycy9DbGlwTG9hZGVyXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuaW1wb3J0ICogYXMgWExTWCBmcm9tIFwieGxzeFwiO1xuaW1wb3J0IHtcbiAgZ2V0VmFsdWVGaWVsZCxcbiAgZ2V0RWRhZCxcbiAgY2FsY3VsYXRlUmVzdWx0QU4sXG4gIGdldEFOUmVzdWx0LFxuICBjYWxjdWxhdGVSZXN1bHRPLFxuICBnZXRPUmVzdWx0LFxufSBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uXCI7XG5cbmZ1bmN0aW9uIHZhbGlkKGN1cnJlbnQpIHtcbiAgcmV0dXJuIGN1cnJlbnQuaXNCZWZvcmUobW9tZW50KCkpO1xufVxuXG5jb25zdCBvdmVycmlkZSA9IGNzc2BcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItY29sb3I6IFwiIzAwMFwiO1xuYDtcblxuY29uc3QgSU5JVElBTF9WQUxVRVMgPSB7XG4gIHN0YXJ0RGF0ZTogbW9tZW50KCkuc3VidHJhY3QoMSwgXCJtb250aHNcIikudXRjT2Zmc2V0KDAsIHRydWUpLFxuICBlbmREYXRlOiBtb21lbnQoKS51dGNPZmZzZXQoMCwgdHJ1ZSksXG4gIGVzdHVkaW86IHsgaWQ6IFwiYWxsXCIsIG5vbWJyZTogXCJUT0RPU1wiIH0sXG4gIHRpcG9GaWNoYTogeyBsYWJlbDogXCJUb2Rvc1wiLCB2YWx1ZTogXCJhbGxcIiB9LFxuICB0aXBvVXN1YXJpbzogeyBsYWJlbDogXCJUb2Rvc1wiLCB2YWx1ZTogXCJhbGxcIiB9LFxuICB0aXBvRGVzY2FyZ2E6IFwiXCIsXG4gIHRpcG9SZXBvcnRlOiBcIlwiLFxufTtcblxuY29uc3Qgb3B0aW9uc0VzdHVkaW9zID0gW1xuICB7IHZhbHVlOiBcImFsbFwiLCBsYWJlbDogXCJUT0RPU1wiIH0sXG4gIHsgdmFsdWU6IFwiNWYxOWMyNjgyMmU2ZGI2MTk3Mzg4MTNkXCIsIGxhYmVsOiBcIlBDUiBDT1ZJRC0xOVwiIH0sXG4gIHsgdmFsdWU6IFwiNWYxYjM1Nzc3Y2I2MjcyMzA1ODU0ZGRiXCIsIGxhYmVsOiBcIkVMSVNBIENPVklELTE5XCIgfSxcbiAgeyB2YWx1ZTogXCI2MDY0N2JjNTFmNWU3NjM5Mzg3NGZjNWVcIiwgbGFiZWw6IFwiUENSIFNhbGl2YSBDT1ZJRC0xOVwiIH0sXG4gIHsgdmFsdWU6IFwiNjBiNjE3NzQ0MjRiYWEyMDY3YmEzODUzXCIsIGxhYmVsOiBcIkFudGljdWVycG9zIE5ldXRyYWxpemFudGVzXCIgfSxcbiAgeyB2YWx1ZTogXCI2MGI3OTA4ZWZmZjgxZDdiOWYxZWM1MzdcIiwgbGFiZWw6IFwiQW50aWdlbm8gU0FSUy1DT1YyXCIgfSxcbiAge1xuICAgIHZhbHVlOiBcIjYxMmVkZmM3OWZiZjFmN2E4MDgzNGQ5N1wiLFxuICAgIGxhYmVsOiBcIkFudGljdWVycG9zIE5ldXRyYWxpemFudGVzIChUT1RBTClcIixcbiAgfSxcbl07XG5cbmNvbnN0IGVzdHVkaW9zU05JUyA9IFtcbiAgeyBpZDogXCI2MDRkMzUzNjM1ZGYxOTAwMDQyNTBlNWJcIiwgbm9tYnJlOiBcIlBDUiBDT1ZJRC0xOVwiIH0sXG4gIHsgaWQ6IFwiNjA0ZTI2MDJjYzVjMzQ1ZWM0NDJmMzJlXCIsIG5vbWJyZTogXCJFTElTQSBDT1ZJRC0xOVwiIH0sXG4gIHsgaWQ6IFwiNjA5MDFiYzQyY2Q0NmIwMDA0NTFlNWY2XCIsIG5vbWJyZTogXCJQQ1IgU2FsaXZhIENPVklELTE5XCIgfSxcbiAgeyBpZDogXCI2MGI5NWJkOTA5MmFlMzAwMDQyMjRkZGRcIiwgbm9tYnJlOiBcIkFudGlnZW5vIFNBUlMtQ09WMlwiIH0sXG4gIHsgaWQ6IFwiNjE0YzU3MDRjOGVhZmIwMDA0NTk4NTZmXCIsIG5vbWJyZTogXCJBbnRpZ2VubyBTQVJTLUNPVjIgKFVydWJvKVwiIH0sXG4gIHtcbiAgICBpZDogXCI2MTRjNWU3ZWM4ZWFmYjAwMDQ1OTg1NzVcIixcbiAgICBub21icmU6IFwiQW50aWdlbm8gU0FSUy1DT1YyIChBdXRvY292aWQgNHRvIGFuaWxsbylcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcIjYxOWJjODQ1NzI0MTllMDAwNDgzNWQ4MFwiLFxuICAgIG5vbWJyZTogXCJQYW5lbCBWaXJhbCBDT1ZJRC0xOSwgSW5mbHVlbnphIEEsIEluZmx1ZW56YSBCXCIsXG4gIH0sXG4gIHsgaWQ6IFwiYWxsXCIsIG5vbWJyZTogXCJUT0RPU1wiIH0sXG5dO1xuXG5jb25zdCBCdXNxdWVkYUNsaWVudGVTY2hlbWEgPSBZdXAub2JqZWN0KHtcbiAgc3RhcnREYXRlOiBZdXAuZGF0ZSgpLnJlcXVpcmVkKCksXG4gIGVuZERhdGU6IFl1cC5kYXRlKCkucmVxdWlyZWQoKSxcbiAgZXN0dWRpbzogWXVwLm9iamVjdCgpLnJlcXVpcmVkKFwiRXN0ZSBjYW1wbyBlcyByZXF1ZXJpZG9cIiksXG4gIHRpcG9GaWNoYTogWXVwLm9iamVjdCgpLnJlcXVpcmVkKFwiRXN0ZSBjYW1wbyBlcyByZXF1ZXJpZG9cIiksXG4gIHRpcG9Vc3VhcmlvOiBZdXAub2JqZWN0KCkucmVxdWlyZWQoXCJFc3RlIGNhbXBvIGVzIHJlcXVlcmlkb1wiKSxcbiAgdGlwb0Rlc2NhcmdhOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJFc3RlIGNhbXBvIGVzIHJlcXVlcmlkb1wiKSxcbiAgdGlwb1JlcG9ydGU6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIkVzdGUgY2FtcG8gZXMgcmVxdWVyaWRvXCIpLFxufSk7XG5cbmNvbnN0IERlc2NhcmdhUmVwb3J0ZXMgPSAoe1xuICBDQlNldFJvd3MsXG4gIENCTG9hZGluZyxcbiAgYnVzeSxcbiAgQ0JOb1Jlc3VsdCxcbiAgY3VycmVudFVzZXIsXG59KSA9PiB7XG4gIGNvbnN0IFtnZW5lcmF0ZVJlcG9ydF0gPSB1c2VNYW51YWxRdWVyeShJTkZPUk1FUyk7XG4gIGNvbnN0IFtnZXRQcm92ZWVkb3Jlc10gPSB1c2VNYW51YWxRdWVyeShHRVRfUFJPVkVFRE9SRVMpO1xuICBjb25zdCBbZ2V0RXN0dWRpb3NdID0gdXNlTWFudWFsUXVlcnkoR0VUX0VTVFVESU9TX1NJTVBMRSk7XG4gIGNvbnN0IFtnZXRGaWNoYXNCeVRlc3RQb3JDb25jaWxpYXJdID0gdXNlTWFudWFsUXVlcnkoXG4gICAgR0VUX0ZJQ0hBU19CWV9URVNUX1BPUl9DT05DSUxJQVJcbiAgKTtcbiAgY29uc3QgW2dlbmVyYXRlUmVwb3J0T3JkZW5lc10gPSB1c2VNYW51YWxRdWVyeShSRVBPUlRFU19PUkRFTkVTKTtcbiAgY29uc3QgW2dldEFsbFVzZXJzXSA9IHVzZU1hbnVhbFF1ZXJ5KEdFVF9UT0RPU19VU1VBUklPUyk7XG5cbiAgY29uc3QgW3Nob3dEb3dubG9hZEJ0biwgc2V0RG93bmxvYWRCdG5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcHJvdmVlZG9yZXMsIHNldFByb3ZlZWRvcmVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xpc3RhRXN0dWRpb3MsIHNldExpc3RhRXN0dWRpb3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbGlzdGFEZVVzdWFyaW9zLCBzZXRMaXN0YURlVXN1YXJpb3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYnVzeURvd25sb2FkaW5nLCBzZXRCdXN5RG93bmxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGZpbGVUeXBlID1cbiAgICBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0O2NoYXJzZXQ9VVRGLThcIjtcbiAgY29uc3QgZmlsZUV4dGVuc2lvbiA9IFwiLnhsc3hcIjtcblxuICBjb25zdCBmZXRjaEVzdHVkaW9zTnVldm9zID0gKCkgPT4ge1xuICAgIGdldEVzdHVkaW9zKCkudGhlbigoeyBkYXRhLCBlcnJvciB9KSA9PiB7XG4gICAgICBpZiAoZGF0YS5nZXRFc3R1ZGlvcykge1xuICAgICAgICBzZXRMaXN0YUVzdHVkaW9zKFsuLi5kYXRhLmdldEVzdHVkaW9zLCB7IGlkOiBcImFsbFwiLCBub21icmU6IFwiVG9kb3NcIiB9XSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UmVzdWx0YWRvID0gKGNvZGlnbywgY2FtcG9zRXN0dWRpb3MpID0+IHtcbiAgICBpZiAoXG4gICAgICBjb2RpZ28gPT09IFwiQ1wiIHx8XG4gICAgICBjb2RpZ28gPT09IFwiUENSQ1NcIiB8fFxuICAgICAgY29kaWdvID09PSBcIlBDUkNcIiB8fFxuICAgICAgY29kaWdvID09PSBcIkFTQ1wiIHx8XG4gICAgICBjb2RpZ28gPT09IFwiQU5UVVwiIHx8XG4gICAgICBjb2RpZ28gPT09IFwiQUFcIiB8fFxuICAgICAgY29kaWdvID09PSBcIkFOXCJcbiAgICApIHtcbiAgICAgIHJldHVybiBnZXRWYWx1ZUZpZWxkKGNhbXBvc0VzdHVkaW9zLCBcInJlc3VsdGFkb1wiKTtcbiAgICB9XG4gICAgaWYgKGNvZGlnbyA9PT0gXCJFTElDT1ZcIikge1xuICAgICAgcmV0dXJuIGBJR0c6ICR7Z2V0VmFsdWVGaWVsZChcbiAgICAgICAgY2FtcG9zRXN0dWRpb3MsXG4gICAgICAgIFwicmVzdWx0YWRvX2lnZ1wiXG4gICAgICApfSB8IElHTTogJHtnZXRWYWx1ZUZpZWxkKGNhbXBvc0VzdHVkaW9zLCBcInJlc3VsdGFkb19pZ21cIil9YDtcbiAgICB9XG4gICAgaWYgKGNvZGlnbyA9PT0gXCJDQUJcIikge1xuICAgICAgcmV0dXJuIGdldFZhbHVlRmllbGQoY2FtcG9zRXN0dWRpb3MsIFwic2Fyc1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH07XG5cbiAgY29uc3QgZ2V0UmVzdWx0YWRvSW5mbHVlbnphID0gKGNvZGlnbywgY2FtcG9zRXN0dWRpb3MsIHRpcG8pID0+IHtcbiAgICBpZiAoY29kaWdvID09PSBcIkNBQlwiKSB7XG4gICAgICByZXR1cm4gZ2V0VmFsdWVGaWVsZChjYW1wb3NFc3R1ZGlvcywgYGluZmx1XyR7dGlwb31gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJcIjtcbiAgfTtcblxuICBjb25zdCBnZXRSZXN1bHRhZG9PbGQgPSAoY29kaWdvLCByZXN1bHRhZG8pID0+IHtcbiAgICBjb25zdCBDT0RJR09fRVNUVURJTyA9IGNvZGlnby5yZXBsYWNlKC9bMC05XS9nLCBcIlwiKTtcblxuICAgIGlmIChcbiAgICAgIENPRElHT19FU1RVRElPID09PSBcIkNcIiB8fFxuICAgICAgQ09ESUdPX0VTVFVESU8gPT09IFwiQ1NcIiB8fFxuICAgICAgQ09ESUdPX0VTVFVESU8gPT09IFwiQVwiXG4gICAgKSB7XG4gICAgICByZXR1cm4gcmVzdWx0YWRvID8gcmVzdWx0YWRvLnRyaW0oKS50b1VwcGVyQ2FzZSgpIDogXCJcIjtcbiAgICB9XG5cbiAgICBpZiAoQ09ESUdPX0VTVFVESU8gPT09IFwiRVwiKSB7XG4gICAgICBjb25zdCBlbGlzYV9yZXN1bHQgPSByZXN1bHRhZG8gPyByZXN1bHRhZG8uc3BsaXQoXCJ8XCIpIDogXCJcIjtcbiAgICAgIGlmIChlbGlzYV9yZXN1bHQgPT09IFwiXCIpIHJldHVybiBcIlwiO1xuICAgICAgcmV0dXJuIGBtdWVzdHJhSUdnOiAke2VsaXNhX3Jlc3VsdFswXX0gcHVudG9EZUNvcnRlSUdnOiAke2VsaXNhX3Jlc3VsdFsxXX0gfHwgbXVlc3RyYUlNZzogJHtlbGlzYV9yZXN1bHRbMl19IFB1bnRvZGVDb3J0ZUlHbTogJHtlbGlzYV9yZXN1bHRbM119YDtcbiAgICB9XG5cbiAgICBpZiAoQ09ESUdPX0VTVFVESU8gPT09IFwiTlwiKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSByZXN1bHRhZG8gPyByZXN1bHRhZG8uc3BsaXQoXCJ8XCIpIDogXCJcIjtcbiAgICAgIGlmIChyZXN1bHQgPT09IFwiXCIpIHJldHVybiBcIlwiO1xuICAgICAgY29uc3QgQU5fUkVTVUxUID0gY2FsY3VsYXRlUmVzdWx0QU4ocmVzdWx0WzBdLCByZXN1bHRbMV0pO1xuICAgICAgcmV0dXJuIGAke0FOX1JFU1VMVH0gKCR7Z2V0QU5SZXN1bHQoQU5fUkVTVUxUKX0pYDtcbiAgICB9XG4gICAgaWYgKENPRElHT19FU1RVRElPID09PSBcIk9cIikge1xuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzdWx0YWRvID8gcmVzdWx0YWRvLnNwbGl0KFwifFwiKSA6IFwiXCI7XG4gICAgICBpZiAocmVzdWx0ID09PSBcIlwiKSByZXR1cm4gXCJcIjtcbiAgICAgIGNvbnN0IEFOX1JFU1VMVCA9IGNhbGN1bGF0ZVJlc3VsdE8ocmVzdWx0WzBdLCByZXN1bHRbMV0pO1xuICAgICAgcmV0dXJuIGAke0FOX1JFU1VMVH0gJSAoJHtnZXRPUmVzdWx0KEFOX1JFU1VMVCl9KWA7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG4gICAgaW5pdGlhbFZhbHVlczogSU5JVElBTF9WQUxVRVMsXG4gICAgdmFsaWRhdGlvblNjaGVtYTogQnVzcXVlZGFDbGllbnRlU2NoZW1hLFxuICAgIG9uU3VibWl0OiAodmFsdWVzKSA9PiB7XG4gICAgICBpZiAoIWJ1c3lEb3dubG9hZGluZykge1xuICAgICAgICBsZXQgb3BjaW9uZXMgPSB7fTtcbiAgICAgICAgbGV0IG5vbWJyZUFyY2hpdm8gPSBgJHt2YWx1ZXMudGlwb1JlcG9ydGV9YDtcbiAgICAgICAgY29uc3QgeyB0aXBvRGVzY2FyZ2EgfSA9IHZhbHVlcztcbiAgICAgICAgc2V0QnVzeURvd25sb2FkaW5nKHRydWUpO1xuICAgICAgICBpZiAodGlwb0Rlc2NhcmdhID09PSBcInZpZWpvXCIpIHtcbiAgICAgICAgICBpZiAodmFsdWVzLnRpcG9SZXBvcnRlID09PSBcIm9sZC1zbmlzXCIpIHtcbiAgICAgICAgICAgIG5vbWJyZUFyY2hpdm8gPSBgU05JUy0ke3ZhbHVlcy5zdGFydERhdGUuZm9ybWF0KFxuICAgICAgICAgICAgICBcIllZWVktTU0tRERcIlxuICAgICAgICAgICAgKX0gLSAke3ZhbHVlcy5lbmREYXRlLmZvcm1hdChcIllZWVktTU0tRERcIil9YDtcbiAgICAgICAgICAgIG9wY2lvbmVzID0ge1xuICAgICAgICAgICAgICBzdGFydDogdmFsdWVzLnN0YXJ0RGF0ZS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxuICAgICAgICAgICAgICBlbmQ6IHZhbHVlcy5lbmREYXRlLmZvcm1hdChcIllZWVktTU0tRERcIiksXG4gICAgICAgICAgICAgIHRpcG9JbmZvcm1lOiBcInNuaXNcIixcbiAgICAgICAgICAgICAgdGVzdElkOlxuICAgICAgICAgICAgICAgIHZhbHVlcy5lc3R1ZGlvLnZhbHVlID09PSBcImFsbFwiID8gXCJcIiA6IHZhbHVlcy5lc3R1ZGlvLnZhbHVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsdWVzLnRpcG9SZXBvcnRlID09PSBcIm9sZC1jb25jaWxpYWNpb25cIikge1xuICAgICAgICAgICAgbm9tYnJlQXJjaGl2byA9IGBjb25jaWxpYWNpb24tJHt2YWx1ZXMuc3RhcnREYXRlLmZvcm1hdChcbiAgICAgICAgICAgICAgXCJZWVlZLU1NLUREXCJcbiAgICAgICAgICAgICl9IC0gJHt2YWx1ZXMuZW5kRGF0ZS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfWA7XG4gICAgICAgICAgICBvcGNpb25lcyA9IHtcbiAgICAgICAgICAgICAgc3RhcnQ6IHZhbHVlcy5zdGFydERhdGUuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICAgICAgICAgICAgZW5kOiB2YWx1ZXMuZW5kRGF0ZS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxuICAgICAgICAgICAgICB0aXBvSW5mb3JtZTogXCJjb25jaWxpYWNpb25cIixcbiAgICAgICAgICAgICAgdGVzdElkOlxuICAgICAgICAgICAgICAgIHZhbHVlcy5lc3R1ZGlvLnZhbHVlID09PSBcImFsbFwiID8gXCJcIiA6IHZhbHVlcy5lc3R1ZGlvLnZhbHVlLFxuICAgICAgICAgICAgICB0aXBvUGFjaWVudGU6IHZhbHVlcy50aXBvRmljaGEudmFsdWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGdlbmVyYXRlUmVwb3J0KHtcbiAgICAgICAgICAgIHZhcmlhYmxlczogb3BjaW9uZXMsXG4gICAgICAgICAgfSkudGhlbigoeyBkYXRhLCBlcnJvciB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICBzZXRCdXN5RG93bmxvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkYXRhLmdlbmVyYXRlUmVwb3J0ICYmIGRhdGEuZ2VuZXJhdGVSZXBvcnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICBpZiAodmFsdWVzLnRpcG9SZXBvcnRlID09PSBcIm9sZC1jb25jaWxpYWNpb25cIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZm9ybWVEYXRhID0gZGF0YS5nZW5lcmF0ZVJlcG9ydC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICAgICAgY29kaWdvLFxuICAgICAgICAgICAgICAgICAgICBmZWNoYVNvbGljaXR1ZCxcbiAgICAgICAgICAgICAgICAgICAgdGlwb0ZpY2hhLFxuICAgICAgICAgICAgICAgICAgICBub0ZhY3R1cmEsXG4gICAgICAgICAgICAgICAgICAgIG1vbnRvUGFnYWRvLFxuICAgICAgICAgICAgICAgICAgICBwYWdvU3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICBub0NvbXByb2JhbnRlLFxuICAgICAgICAgICAgICAgICAgICBjb25jaWxpYWNpb25NYWRlQnksXG4gICAgICAgICAgICAgICAgICAgIGZlY2hhRmFjdHVyYSxcbiAgICAgICAgICAgICAgICAgICAgb3JkZW5OdW1lcm8sXG4gICAgICAgICAgICAgICAgICAgIG51bWVyb0RlQXV0b3JpemFjaW9uLFxuICAgICAgICAgICAgICAgICAgICBjbGllbnRJRDogeyBub21icmVzLCBhcGVsbGlkb3MsIGNpIH0sXG4gICAgICAgICAgICAgICAgICB9ID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGlnbyxcbiAgICAgICAgICAgICAgICAgICAgZmVjaGFTb2xpY2l0dWQ6IG1vbWVudChmZWNoYVNvbGljaXR1ZCwgXCJERC9NTS9ZWVlZXCIpLmZvcm1hdChcbiAgICAgICAgICAgICAgICAgICAgICBcIkREL01NL1lZXCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgdGlwb19jbGllbnRlOiB0aXBvRmljaGEsXG4gICAgICAgICAgICAgICAgICAgIG5vbWJyZXMsXG4gICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvcyxcbiAgICAgICAgICAgICAgICAgICAgY2ksXG4gICAgICAgICAgICAgICAgICAgIG1vbnRvUGFnYWRvOiBtb250b1BhZ2FkbyxcbiAgICAgICAgICAgICAgICAgICAgZmFjdHVyYV9ubzogbm9GYWN0dXJhLFxuICAgICAgICAgICAgICAgICAgICBvcmRlbk51bWVybyxcbiAgICAgICAgICAgICAgICAgICAgbnVtZXJvRGVBdXRvcml6YWNpb24sXG4gICAgICAgICAgICAgICAgICAgIGZlY2hhRmFjdHVyYSxcbiAgICAgICAgICAgICAgICAgICAgZXN0YXR1c19wYWdvOiBwYWdvU3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2lhOiBub0NvbXByb2JhbnRlLFxuICAgICAgICAgICAgICAgICAgICBjb25jaWxpYWNpYWRvX3BvcjogY29uY2lsaWFjaW9uTWFkZUJ5LFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBleHBvcnRUb0NTVihpbmZvcm1lRGF0YSwgbm9tYnJlQXJjaGl2byk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHZhbHVlcy50aXBvUmVwb3J0ZSA9PT0gXCJvbGQtc25pc1wiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5mb3JtZURhdGEgPSBkYXRhLmdlbmVyYXRlUmVwb3J0Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgICAgICBjb2RpZ28sXG4gICAgICAgICAgICAgICAgICAgIGZlY2hhU29saWNpdHVkLFxuICAgICAgICAgICAgICAgICAgICBmZWNoYVJlcG9ydGUsXG4gICAgICAgICAgICAgICAgICAgIGluaWNpb1NpbnRvbWFzLFxuICAgICAgICAgICAgICAgICAgICByZXN1bHRhZG8sXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudElEOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbm9tYnJlcyxcbiAgICAgICAgICAgICAgICAgICAgICBhcGVsbGlkb3MsXG4gICAgICAgICAgICAgICAgICAgICAgY2ksXG4gICAgICAgICAgICAgICAgICAgICAgdGVsZWZvbm8sXG4gICAgICAgICAgICAgICAgICAgICAgZGVwYXJ0YW1lbnRvLFxuICAgICAgICAgICAgICAgICAgICAgIG11bmljaXBpbyxcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY2Npb24sXG4gICAgICAgICAgICAgICAgICAgICAgZmVjaGFfbmFjaW1pZW50byxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0gPSBpdGVtO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY29kaWdvLFxuICAgICAgICAgICAgICAgICAgICBmZWNoYVNvbGljaXR1ZCxcbiAgICAgICAgICAgICAgICAgICAgZmVjaGFSZXBvcnRlLFxuICAgICAgICAgICAgICAgICAgICBub21icmVzLFxuICAgICAgICAgICAgICAgICAgICBhcGVsbGlkb3MsXG4gICAgICAgICAgICAgICAgICAgIGNpLFxuICAgICAgICAgICAgICAgICAgICB0ZWxlZm9ubyxcbiAgICAgICAgICAgICAgICAgICAgZmVjaGFfbmFjaW1pZW50byxcbiAgICAgICAgICAgICAgICAgICAgZWRhZDogZ2V0RWRhZChmZWNoYV9uYWNpbWllbnRvLCBcIlwiKSxcbiAgICAgICAgICAgICAgICAgICAgZGVwYXJ0YW1lbnRvLFxuICAgICAgICAgICAgICAgICAgICBtdW5pY2lwaW8sXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjY2lvbixcbiAgICAgICAgICAgICAgICAgICAgaW5pY2lvU2ludG9tYXMsXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdGFkbzogZ2V0UmVzdWx0YWRvT2xkKGNvZGlnbywgcmVzdWx0YWRvKSxcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZXhwb3J0VG9DU1YoaW5mb3JtZURhdGEsIG5vbWJyZUFyY2hpdm8pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFxuICAgICAgICAgICAgICAgIFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICBcIk5vIHNlIGVuY29udHLDsyBpbmZvcm1hY2lvbiBjb24gbG9zIHBhcmFtZXRyb3MgZW52aWFkb3MuXCJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEJ1c3lEb3dubG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGlwb0Rlc2NhcmdhID09PSBcIm51ZXZvXCIpIHtcbiAgICAgICAgICBpZiAodmFsdWVzLnRpcG9SZXBvcnRlID09PSBcInNuaXNcIikge1xuICAgICAgICAgICAgbm9tYnJlQXJjaGl2byA9IGBTTklTLSR7dmFsdWVzLnN0YXJ0RGF0ZS5mb3JtYXQoXG4gICAgICAgICAgICAgIFwiWVlZWS1NTS1ERFwiXG4gICAgICAgICAgICApfSAtICR7dmFsdWVzLmVuZERhdGUuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKX1gO1xuICAgICAgICAgICAgb3BjaW9uZXMgPSB7XG4gICAgICAgICAgICAgIHN0YXJ0OiB2YWx1ZXMuc3RhcnREYXRlLmZvcm1hdChcIllZWVktTU0tRERcIiksXG4gICAgICAgICAgICAgIGVuZDogdmFsdWVzLmVuZERhdGUuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICAgICAgICAgICAgdGlwb0luZm9ybWU6IFwic25pc1wiLFxuICAgICAgICAgICAgICB0ZXN0SWQ6IHZhbHVlcy5lc3R1ZGlvLmlkID09PSBcImFsbFwiID8gXCJcIiA6IHZhbHVlcy5lc3R1ZGlvLmlkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsdWVzLnRpcG9SZXBvcnRlID09PSBcImNvbmNpbGlhY2lvblwiKSB7XG4gICAgICAgICAgICBub21icmVBcmNoaXZvID0gYGNvbmNpbGlhY2lvbi0ke3ZhbHVlcy5zdGFydERhdGUuZm9ybWF0KFxuICAgICAgICAgICAgICBcIllZWVktTU0tRERcIlxuICAgICAgICAgICAgKX0gLSAke3ZhbHVlcy5lbmREYXRlLmZvcm1hdChcIllZWVktTU0tRERcIil9YDtcbiAgICAgICAgICAgIG9wY2lvbmVzID0ge1xuICAgICAgICAgICAgICBzdGFydDogdmFsdWVzLnN0YXJ0RGF0ZS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxuICAgICAgICAgICAgICBlbmQ6IHZhbHVlcy5lbmREYXRlLmZvcm1hdChcIllZWVktTU0tRERcIiksXG4gICAgICAgICAgICAgIHRpcG9JbmZvcm1lOiBcImNvbmNpbGlhY2lvblwiLFxuICAgICAgICAgICAgICB0ZXN0SWQ6IHZhbHVlcy5lc3R1ZGlvLmlkID09PSBcImFsbFwiID8gXCJcIiA6IHZhbHVlcy5lc3R1ZGlvLmlkLFxuICAgICAgICAgICAgICBwcm92ZWVkb3JJRDogdmFsdWVzLnRpcG9GaWNoYS52YWx1ZSxcbiAgICAgICAgICAgICAgdXN1YXJpb0lEOiB2YWx1ZXMudGlwb1VzdWFyaW8udmFsdWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBnZW5lcmF0ZVJlcG9ydE9yZGVuZXMoe1xuICAgICAgICAgICAgdmFyaWFibGVzOiBvcGNpb25lcyxcbiAgICAgICAgICB9KS50aGVuKCh7IGRhdGEsIGVycm9yIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgIHNldEJ1c3lEb3dubG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBkYXRhLmdlbmVyYXRlUmVwb3J0T3JkZW5lcyAmJlxuICAgICAgICAgICAgICBkYXRhLmdlbmVyYXRlUmVwb3J0T3JkZW5lcy5sZW5ndGggPiAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlcy50aXBvUmVwb3J0ZSA9PT0gXCJjb25jaWxpYWNpb25cIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZm9ybWVEYXRhID0gZGF0YS5nZW5lcmF0ZVJlcG9ydE9yZGVuZXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgICAgIGZlY2hhU29saWNpdHVkLFxuICAgICAgICAgICAgICAgICAgICBvcmRlbk5vLFxuICAgICAgICAgICAgICAgICAgICBjb2RpZ29Fc3R1ZGlvLFxuICAgICAgICAgICAgICAgICAgICBjb2RpZ29JbnRlcm5vLFxuICAgICAgICAgICAgICAgICAgICBlc3R1ZGlvTnVtZXJvLFxuICAgICAgICAgICAgICAgICAgICBwcmVjaW8sXG4gICAgICAgICAgICAgICAgICAgIG9yZGVuSUQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGllbnRJRDogeyBub21icmVzLCBhcGVsbGlkb3MsIGNpLCBmZWNoYV9uYWNpbWllbnRvLCB0ZWxlZm9ubywgc2V4byB9LFxuICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRCeTogeyBub21icmUsIGFwZWxsaWRvIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdG90YWxBUGFnYXIsXG4gICAgICAgICAgICAgICAgICAgICAgY29udHJhdGlzdGEsXG4gICAgICAgICAgICAgICAgICAgICAgZm9ybWFEZVBhZ28sXG4gICAgICAgICAgICAgICAgICAgICAgbGlzdGFTdWN1cnNhbCxcbiAgICAgICAgICAgICAgICAgICAgICBlc3RhdHVzUGFnbyxcbiAgICAgICAgICAgICAgICAgICAgICBOb0ZhY3R1cmEsXG4gICAgICAgICAgICAgICAgICAgICAgbnJvT3JkZW5EZUNvbXByYSxcbiAgICAgICAgICAgICAgICAgICAgICBucm9BdXRvcml6YWNpb24sXG4gICAgICAgICAgICAgICAgICAgICAgZmVjaGFGYWN0dXJhLFxuICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jaWFEZVBhZ28sXG4gICAgICAgICAgICAgICAgICAgICAgcHJvdmVlZG9ySUQsXG4gICAgICAgICAgICAgICAgICAgICAgZmVjaGFEZVBhZ28sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVzdHVkaW9JRCxcbiAgICAgICAgICAgICAgICAgIH0gPSBpdGVtO1xuICAgICAgICAgICAgICAgICAgY29uc3QgUFJPVkVFRE9SID0gY29udHJhdGlzdGFcbiAgICAgICAgICAgICAgICAgICAgPyBgJHtwcm92ZWVkb3JJRC5ub21icmV9IC8gJHtjb250cmF0aXN0YX0gYFxuICAgICAgICAgICAgICAgICAgICA6IHByb3ZlZWRvcklELm5vbWJyZTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVuTm8sXG4gICAgICAgICAgICAgICAgICAgIG5vbWJyZUVzdHVkaW86IGVzdHVkaW9JRC5ub21icmUsXG4gICAgICAgICAgICAgICAgICAgIGNvZGlnb0VzdHVkaW86IGAke2NvZGlnb0VzdHVkaW99JHtlc3R1ZGlvTnVtZXJvfWAsXG4gICAgICAgICAgICAgICAgICAgIGFyZWFFc3R1ZGlvOiBlc3R1ZGlvSUQ/LmFyZWFEZUVzdHVkaW9JRD8ubm9tYnJlID8/ICcnLFxuICAgICAgICAgICAgICAgICAgICBjb2RpZ29JbnRlcm5vLFxuICAgICAgICAgICAgICAgICAgICBwcmVjaW9Vbml0YXJpbzogcHJlY2lvLFxuICAgICAgICAgICAgICAgICAgICBmZWNoYVNvbGljaXR1ZDogbW9tZW50KGZlY2hhU29saWNpdHVkKVxuICAgICAgICAgICAgICAgICAgICAgIC51dGMoKVxuICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpLFxuICAgICAgICAgICAgICAgICAgICB0aXBvRGVDbGllbnRlOiBQUk9WRUVET1IsXG4gICAgICAgICAgICAgICAgICAgIHN1Y3Vyc2FsOiBsaXN0YVN1Y3Vyc2FsLFxuICAgICAgICAgICAgICAgICAgICBub21icmVzLFxuICAgICAgICAgICAgICAgICAgICBhcGVsbGlkb3MsXG4gICAgICAgICAgICAgICAgICAgIGNpLFxuICAgICAgICAgICAgICAgICAgICB0ZWxlZm9ubyxcbiAgICAgICAgICAgICAgICAgICAgZWRhZDogZ2V0RWRhZChmZWNoYV9uYWNpbWllbnRvLCBcIlwiKSxcbiAgICAgICAgICAgICAgICAgICAgc2V4bzogc2V4bz09PVwiRlwiP1wiRmVtZW5pbm9cIjpzZXhvPT09XCJNXCI/XCJNYXNjdWxpbm9cIjpcIlwiLFxuICAgICAgICAgICAgICAgICAgICBtb250b1RvdGFsUGFnYWRvOiB0b3RhbEFQYWdhcixcbiAgICAgICAgICAgICAgICAgICAgZmFjdHVyYV9ubzogTm9GYWN0dXJhLFxuICAgICAgICAgICAgICAgICAgICBucm9PcmRlbkRlQ29tcHJhLFxuICAgICAgICAgICAgICAgICAgICBucm9BdXRvcml6YWNpb24sXG4gICAgICAgICAgICAgICAgICAgIGZlY2hhRmFjdHVyYTogZmVjaGFGYWN0dXJhXG4gICAgICAgICAgICAgICAgICAgICAgPyBtb21lbnQoZmVjaGFGYWN0dXJhKS51dGMoKS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBmZWNoYURlUGFnbzogZmVjaGFEZVBhZ29cbiAgICAgICAgICAgICAgICAgICAgICA/IG1vbWVudChmZWNoYURlUGFnbykudXRjKCkuZm9ybWF0KFwiREQvTU0vWVlZWVwiKVxuICAgICAgICAgICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZm9ybWFEZVBhZ28sXG4gICAgICAgICAgICAgICAgICAgIGVzdGF0dXNQYWdvLCAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jaWFEZVBhZ28sXG4gICAgICAgICAgICAgICAgICAgIGNyZWFkb1BvcjogYCR7bm9tYnJlfSAke2FwZWxsaWRvfWAsXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGV4cG9ydFRvQ1NWKFxuICAgICAgICAgICAgICAgICAgaW5mb3JtZURhdGEsXG4gICAgICAgICAgICAgICAgICBub21icmVBcmNoaXZvLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0lORk9STUUgREUgQ09OQ0lMSUFDScOTTicsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0QXQ6IHZhbHVlcy5zdGFydERhdGUuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICAgICAgICAgICAgICAgICAgZW5kQXQ6IHZhbHVlcy5lbmREYXRlLmZvcm1hdChcIllZWVktTU0tRERcIiksXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHZhbHVlcy50aXBvUmVwb3J0ZSA9PT0gXCJzbmlzXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmZvcm1lRGF0YSA9IGRhdGEuZ2VuZXJhdGVSZXBvcnRPcmRlbmVzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgICAgICBjb2RpZ29Fc3R1ZGlvLFxuICAgICAgICAgICAgICAgICAgICBlc3R1ZGlvTnVtZXJvLFxuICAgICAgICAgICAgICAgICAgICBmZWNoYVNvbGljaXR1ZCxcbiAgICAgICAgICAgICAgICAgICAgZmVjaGFSZXBvcnRlLFxuICAgICAgICAgICAgICAgICAgICBjYW1wb3NFc3R1ZGlvLFxuICAgICAgICAgICAgICAgICAgICBvcmRlbklEOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpZW50SUQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGVsbGlkb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbGVmb25vLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwYXJ0YW1lbnRvLFxuICAgICAgICAgICAgICAgICAgICAgICAgbXVuaWNpcGlvLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWNjaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmVjaGFfbmFjaW1pZW50byxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHByb3ZlZWRvcklELFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFVzZXIucm9sZSA9PT0gXCJkb2NcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvZGlnb0VzdHVkaW86IGAke2NvZGlnb0VzdHVkaW99JHtlc3R1ZGlvTnVtZXJvfWAsXG4gICAgICAgICAgICAgICAgICAgICAgZmVjaGFTb2xpY2l0dWQ6IG1vbWVudChmZWNoYVNvbGljaXR1ZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC51dGMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIkREL01NL1lZWVlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgZmVjaGFSZXBvcnRlOiBmZWNoYVJlcG9ydGVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbW9tZW50KGZlY2hhUmVwb3J0ZSkudXRjKCkuZm9ybWF0KFwiREQvTU0vWVlZWVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZXMsXG4gICAgICAgICAgICAgICAgICAgICAgYXBlbGxpZG9zLFxuICAgICAgICAgICAgICAgICAgICAgIGNpLFxuICAgICAgICAgICAgICAgICAgICAgIHRlbGVmb25vLFxuICAgICAgICAgICAgICAgICAgICAgIGZlY2hhX25hY2ltaWVudG8sXG4gICAgICAgICAgICAgICAgICAgICAgZWRhZDogZ2V0RWRhZChmZWNoYV9uYWNpbWllbnRvLCBcIlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICB0aXBvRGVDbGllbnRlOiBwcm92ZWVkb3JJRC5ub21icmUsXG4gICAgICAgICAgICAgICAgICAgICAgZGVwYXJ0YW1lbnRvLFxuICAgICAgICAgICAgICAgICAgICAgIG11bmljaXBpbyxcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY2Npb24sXG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0YWRvOiBnZXRSZXN1bHRhZG8oY29kaWdvRXN0dWRpbywgY2FtcG9zRXN0dWRpbyksXG4gICAgICAgICAgICAgICAgICAgICAgXCJJbmZsdWVuemEgQVwiOiBnZXRSZXN1bHRhZG9JbmZsdWVuemEoXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RpZ29Fc3R1ZGlvLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FtcG9zRXN0dWRpbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBcIkluZmx1ZW56YSBCXCI6IGdldFJlc3VsdGFkb0luZmx1ZW56YShcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGlnb0VzdHVkaW8sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1wb3NFc3R1ZGlvLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIFZhY3VuYURvc2lzUHJpbWVyYTogaXRlbS5vcmRlbklELmNsaWVudElELnZhY3VuYXMgJiYgaXRlbS5vcmRlbklELmNsaWVudElELnZhY3VuYXMuZG9zaXNQcmltZXJhLFxuICAgICAgICAgICAgICAgICAgICAgIFZhY3VuYURvc2lzUmVmdWVyem9QcmltZXJhOiBpdGVtLm9yZGVuSUQuY2xpZW50SUQudmFjdW5hcyAmJiBpdGVtLm9yZGVuSUQuY2xpZW50SUQudmFjdW5hcy5kb3Npc1JlZnVlcnpvUHJpbWVybyxcbiAgICAgICAgICAgICAgICAgICAgICBWYWN1bmFEb3Npc1JlZnVlcnpvU2VndW5kbzogaXRlbS5vcmRlbklELmNsaWVudElELnZhY3VuYXMgJiYgaXRlbS5vcmRlbklELmNsaWVudElELnZhY3VuYXMuZG9zaXNSZWZ1ZXJ6b1NlZ3VuZG8sXG4gICAgICAgICAgICAgICAgICAgICAgVmFjdW5hRG9zaXNTZWd1bmRhOiBpdGVtLm9yZGVuSUQuY2xpZW50SUQudmFjdW5hcyAmJiBpdGVtLm9yZGVuSUQuY2xpZW50SUQudmFjdW5hcy5kb3Npc1NlZ3VuZGEsXG4gICAgICAgICAgICAgICAgICAgICAgVmFjdW5hRG9zaXNVbmljYTogaXRlbS5vcmRlbklELmNsaWVudElELnZhY3VuYXMgJiYgaXRlbS5vcmRlbklELmNsaWVudElELnZhY3VuYXMuZG9zaXNVbmljYSxcbiAgICAgICAgICAgICAgICAgICAgICBWYWN1bmFGZWNoYVVsdGltb1Rlc3Q6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm9yZGVuSUQuY2xpZW50SUQudmFjdW5hcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5vcmRlbklELmNsaWVudElELnZhY3VuYXMuZmVjaGFVbHRpbW9UZXN0ICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9tZW50KGl0ZW0ub3JkZW5JRC5jbGllbnRJRC52YWN1bmFzLmZlY2hhVWx0aW1vVGVzdCkuZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjb2RpZ29Fc3R1ZGlvOiBgJHtjb2RpZ29Fc3R1ZGlvfSR7ZXN0dWRpb051bWVyb31gLFxuICAgICAgICAgICAgICAgICAgICBmZWNoYVNvbGljaXR1ZDogbW9tZW50KGZlY2hhU29saWNpdHVkKVxuICAgICAgICAgICAgICAgICAgICAgIC51dGMoKVxuICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpLFxuICAgICAgICAgICAgICAgICAgICBmZWNoYVJlcG9ydGU6IGZlY2hhUmVwb3J0ZVxuICAgICAgICAgICAgICAgICAgICAgID8gbW9tZW50KGZlY2hhUmVwb3J0ZSkudXRjKCkuZm9ybWF0KFwiREQvTU0vWVlZWVwiKVxuICAgICAgICAgICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlcyxcbiAgICAgICAgICAgICAgICAgICAgYXBlbGxpZG9zLFxuICAgICAgICAgICAgICAgICAgICBjaSxcbiAgICAgICAgICAgICAgICAgICAgdGVsZWZvbm8sXG4gICAgICAgICAgICAgICAgICAgIGZlY2hhX25hY2ltaWVudG8sXG4gICAgICAgICAgICAgICAgICAgIGVkYWQ6IGdldEVkYWQoZmVjaGFfbmFjaW1pZW50bywgXCJcIiksXG4gICAgICAgICAgICAgICAgICAgIHRpcG9EZUNsaWVudGU6IHByb3ZlZWRvcklELm5vbWJyZSxcbiAgICAgICAgICAgICAgICAgICAgZGVwYXJ0YW1lbnRvLFxuICAgICAgICAgICAgICAgICAgICBtdW5pY2lwaW8sXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjY2lvbixcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0YWRvOiBnZXRSZXN1bHRhZG8oY29kaWdvRXN0dWRpbywgY2FtcG9zRXN0dWRpbyksXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGV4cG9ydFRvQ1NWKGluZm9ybWVEYXRhLCBub21icmVBcmNoaXZvKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbihcbiAgICAgICAgICAgICAgICBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgXCJObyBzZSBlbmNvbnRyw7MgaW5mb3JtYWNpb24gY29uIGxvcyBwYXJhbWV0cm9zIGVudmlhZG9zLlwiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRCdXN5RG93bmxvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgZmV0Y2hQcm92ZWVkb3JlcyA9ICgpID0+IHtcbiAgICBnZXRQcm92ZWVkb3Jlcyh7IHVzZUNhY2hlOiB0cnVlIH0pLnRoZW4oKHsgZGF0YSwgZXJyb3IgfSkgPT4ge1xuICAgICAgaWYgKGRhdGEuZ2V0UHJvdmVlZG9yZXMpIHtcbiAgICAgICAgY29uc3Qgb3BjaW9uZXMgPSBkYXRhLmdldFByb3ZlZWRvcmVzLm1hcCgoaSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7IGxhYmVsOiBpLm5vbWJyZSwgdmFsdWU6IGkuaWQgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFByb3ZlZWRvcmVzKFsuLi5vcGNpb25lcywgeyBsYWJlbDogXCJUb2Rvc1wiLCB2YWx1ZTogXCJhbGxcIiB9XSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hVc3VhcmlvcyA9ICgpID0+IHtcbiAgICBnZXRBbGxVc2Vycyh7IHVzZUNhY2hlOiB0cnVlIH0pLnRoZW4oKHsgZGF0YSwgZXJyb3IgfSkgPT4ge1xuICAgICAgaWYgKGRhdGEuZ2V0QWxsVXNlcnMpIHtcbiAgICAgICAgY29uc3Qgb3BjaW9uZXMgPSBkYXRhLmdldEFsbFVzZXJzLm1hcCgoaSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7IGxhYmVsOiBgJHtpLm5vbWJyZX0gJHtpLmFwZWxsaWRvfWAsIHZhbHVlOiBpLmlkIH07XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRMaXN0YURlVXN1YXJpb3MoWy4uLm9wY2lvbmVzLCB7IGxhYmVsOiBcIlRvZG9zXCIsIHZhbHVlOiBcImFsbFwiIH1dKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBleHBvcnRUb0NTViA9IChjc3ZEYXRhLCBmaWxlTmFtZSwgcHJlSGVhZGVyKSA9PiB7XG4gICAgY29uc3Qgd3MgPSBwcmVIZWFkZXIgPT0gbnVsbFxuICAgICAgPyBYTFNYLnV0aWxzLmpzb25fdG9fc2hlZXQoY3N2RGF0YSlcbiAgICAgIDogWExTWC51dGlscy5qc29uX3RvX3NoZWV0KFtdLCB7fSk7XG5cbiAgICBpZiAocHJlSGVhZGVyICE9IG51bGwpIHtcbiAgICAgIFhMU1gudXRpbHMuc2hlZXRfYWRkX2pzb24od3MsIFtcbiAgICAgICAge1xuICAgICAgICAgIEE6IHByZUhlYWRlci50aXRsZSxcbiAgICAgICAgICBCOiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIEE6ICdGZWNoYSBJbmljaW8nLFxuICAgICAgICAgIEI6IHByZUhlYWRlci5zdGFydEF0LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgQTogJ0ZlY2hhIEZpbicsXG4gICAgICAgICAgQjogcHJlSGVhZGVyLmVuZEF0LFxuICAgICAgICB9LFxuICAgICAgXSwgeyBza2lwSGVhZGVyOiB0cnVlLCBvcmlnaW46ICdBMScgfSk7XG5cbiAgICAgIFhMU1gudXRpbHMuc2hlZXRfYWRkX2pzb24od3MsIGNzdkRhdGEsIHsgc2tpcEhlYWRlcjogZmFsc2UsIG9yaWdpbjogJ0E0JyB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB3YiA9IHsgU2hlZXRzOiB7IGRhdGE6IHdzIH0sIFNoZWV0TmFtZXM6IFtcImRhdGFcIl0gfTtcbiAgICBjb25zdCBleGNlbEJ1ZmZlciA9IFhMU1gud3JpdGUod2IsIHsgYm9va1R5cGU6IFwieGxzeFwiLCB0eXBlOiBcImFycmF5XCIgfSk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBCbG9iKFtleGNlbEJ1ZmZlcl0sIHsgdHlwZTogZmlsZVR5cGUgfSk7XG4gICAgRmlsZVNhdmVyLnNhdmVBcyhkYXRhLCBmaWxlTmFtZSArIGZpbGVFeHRlbnNpb24pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyLnJvbGUgIT09IFwiZG9jXCIpIHtcbiAgICAgIGZldGNoUHJvdmVlZG9yZXMoKTtcbiAgICAgIGZldGNoRXN0dWRpb3NOdWV2b3MoKTtcbiAgICAgIGZldGNoVXN1YXJpb3MoKTtcbiAgICB9XG4gIH0sIFtjdXJyZW50VXNlcl0pO1xuXG4gIGZ1bmN0aW9uIHZhbGlkRW5kKGN1cnJlbnQpIHtcbiAgICBjb25zdCBzdGFydCA9IG1vbWVudChmb3JtaWsudmFsdWVzLnN0YXJ0RGF0ZSkuc3VidHJhY3QoMSwgXCJkYXlcIik7XG4gICAgcmV0dXJuIGN1cnJlbnQuaXNCZXR3ZWVuKHN0YXJ0LCBtb21lbnQoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBzaG93RmlsdGVyQnlMYWJVc2VyKCkge1xuICAgIGNvbnN0IHJvbGVzID0gW1xuICAgICAgXCJhZG1pblwiLFxuICAgICAgXCJzdXBlcl9hZG1pblwiLFxuICAgICAgXCJjb250YWJpbGlkYWRcIixcbiAgICAgIFwiY29udGFiaWxpZGFkX1wiLFxuICAgICAgXCJkZWZhdWx0XCIsXG4gICAgXTtcbiAgICByZXR1cm4gcm9sZXMuaW5jbHVkZXMoY3VycmVudFVzZXIucm9sZSk7XG4gIH1cblxuICBpZiAoIWN1cnJlbnRVc2VyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTRcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPENsaXBMb2FkZXIgY3NzPXtvdmVycmlkZX0gc2l6ZT17ODB9IGNvbG9yPXtcIiMwMDBcIn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8V2lkZ2V0IHRpdGxlPVwiRmlsdHJhciBFc3R1ZGlvc1wiIGRlc2NyaXB0aW9uPVwiXCI+XG4gICAgICA8Zm9ybVxuICAgICAgICBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH1cbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBsZzpmbGV4LXdyYXAgdy1mdWxsXCJcbiAgICAgID5cbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWZ1bGwgbWQ6dy1mdWxsIGxnOnctMS80IHhsOnctMS80IHBsLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1lbGVtZW50XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPk9yaWdlbiBJbmZvcm1hY2nDs248L2Rpdj5cbiAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tc2VsZWN0ICR7XG4gICAgICAgICAgICAgICAgICBmb3JtaWsuZXJyb3JzLnRpcG9EZXNjYXJnYSA/IFwiZm9ybS1pbnB1dC1pbnZhbGlkXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgbmFtZT1cInRpcG9EZXNjYXJnYVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY2Npb25lXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGZvcm1pay5oYW5kbGVDaGFuZ2UoZSk7XG4gICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwibnVldm9cIikge1xuICAgICAgICAgICAgICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcImVzdHVkaW9cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZTogXCJUT0RPU1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImFsbFwiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJ2aWVqb1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwiZXN0dWRpb1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVE9ET1NcIixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcInRpcG9SZXBvcnRlXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMudGlwb0Rlc2NhcmdhfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjY2lvbmEgdW5hIG9wY2lvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ2aWVqb1wiPlNpc3RlbWEgYW50ZXJpb3I8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibnVldm9cIj5TaXN0ZW1hIG51ZXZvPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy50aXBvRGVzY2FyZ2EgJiYgZm9ybWlrLnRvdWNoZWQudGlwb0Rlc2NhcmdhID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1lcnJvclwiPkVzdGUgY2FtcG8gZXMgcmVxdWVyaWRvPC9kaXY+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1mdWxsIG1kOnctZnVsbCBsZzp3LTEvNCB4bDp3LTEvNCBwbC0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZWxlbWVudFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5JbmljaW88L2Rpdj5cbiAgICAgICAgICAgICAgPERhdGV0aW1lXG4gICAgICAgICAgICAgICAgbG9jYWxlPVwiZXNcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdGFydERhdGVcIlxuICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJERC1NTS1ZWVlZXCJcbiAgICAgICAgICAgICAgICB0aW1lRm9ybWF0PXtmYWxzZX1cbiAgICAgICAgICAgICAgICBpc1ZhbGlkRGF0ZT17dmFsaWR9XG4gICAgICAgICAgICAgICAgaW5wdXQ9e3RydWV9XG4gICAgICAgICAgICAgICAgY2xvc2VPblNlbGVjdD17dHJ1ZX1cbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZm9ybS1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRmVjaGEgSW5pY2lvXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNTBweFwiIH19XG4gICAgICAgICAgICAgICAgdmlld01vZGU9e1wiZGF5c1wifVxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnN0YXJ0RGF0ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IHtcbiAgICAgICAgICAgICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwic3RhcnREYXRlXCIsIHYpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLnN0YXJ0RGF0ZSAmJiBmb3JtaWsudG91Y2hlZC5zdGFydERhdGUgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+RXN0ZSBjYW1wbyBlcyByZXF1ZXJpZG88L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWZ1bGwgbWQ6dy1mdWxsIGxnOnctMS80IHhsOnctMS80IHBsLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1lbGVtZW50XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkZpbjwvZGl2PlxuICAgICAgICAgICAgICA8RGF0ZXRpbWVcbiAgICAgICAgICAgICAgICBsb2NhbGU9XCJlc1wiXG4gICAgICAgICAgICAgICAgbmFtZT1cImVuZERhdGVcIlxuICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJERC1NTS1ZWVlZXCJcbiAgICAgICAgICAgICAgICB0aW1lRm9ybWF0PXtmYWxzZX1cbiAgICAgICAgICAgICAgICBpc1ZhbGlkRGF0ZT17dmFsaWRFbmR9XG4gICAgICAgICAgICAgICAgaW5wdXQ9e3RydWV9XG4gICAgICAgICAgICAgICAgY2xvc2VPblNlbGVjdD17dHJ1ZX1cbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZm9ybS1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRmVjaGEgRmluXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB2aWV3TW9kZT17XCJkYXlzXCJ9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuZW5kRGF0ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IHtcbiAgICAgICAgICAgICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwiZW5kRGF0ZVwiLCB2KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5lbmREYXRlICYmIGZvcm1pay50b3VjaGVkLmVuZERhdGUgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+RXN0ZSBjYW1wbyBlcyByZXF1ZXJpZG88L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICAgIHtmb3JtaWsudmFsdWVzLnRpcG9EZXNjYXJnYSA9PT0gXCJudWV2b1wiID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWZ1bGwgbWQ6dy1mdWxsIGxnOnctMS80IHhsOnctMS80IHBsLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVsZW1lbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5UaXBvIGRlIEluZm9ybWU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLXNlbGVjdCAke1xuICAgICAgICAgICAgICAgICAgICBmb3JtaWsuZXJyb3JzLnRpcG9SZXBvcnRlID8gXCJmb3JtLWlucHV0LWludmFsaWRcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInRpcG9SZXBvcnRlXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWNjaW9uZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWlrLmhhbmRsZUNoYW5nZShlKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJlc3R1ZGlvXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZDogXCJhbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICBub21icmU6IFwiVE9ET1NcIixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMudGlwb1JlcG9ydGV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjY2lvbmEgdW5hIG9wY2lvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAge2N1cnJlbnRVc2VyLnJvbGUgIT09IFwiZG9jXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNvbmNpbGlhY2lvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSW5mb3JtZSBkZSBjb25jaWxpYWNpw7NuXG4gICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNuaXNcIj5TTklTPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNuaXNcIj5SZXBvcnRlIGRlIEVzdHVkaW88L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMudGlwb1JlcG9ydGUgJiYgZm9ybWlrLnRvdWNoZWQudGlwb1JlcG9ydGUgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj5Fc3RlIGNhbXBvIGVzIHJlcXVlcmlkbzwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1mdWxsIG1kOnctZnVsbCBsZzp3LTEvMyB4bDp3LTEvMyBwbC0zIHNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1lbGVtZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+U2VsZWNjaW9uZSBlbCB0aXBvIGRlIHBydWViYTo8L2Rpdj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZXN0dWRpb1wiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjY2lvbmUgdW4gZXN0dWRpby4uLlwiXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWlrLnZhbHVlcy50aXBvUmVwb3J0ZSA9PT0gXCJzbmlzXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IGVzdHVkaW9zU05JU1xuICAgICAgICAgICAgICAgICAgICAgIDogbGlzdGFFc3R1ZGlvc1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuZXN0dWRpb31cbiAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0cykgPT4gb3B0cy5ub21icmV9XG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17KG9wdHMpID0+IG9wdHMuaWR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwiZXN0dWRpb1wiLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJlc3R1ZGlvXCIsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMuZXN0dWRpbyAmJiBmb3JtaWsudG91Y2hlZC5lc3R1ZGlvID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+RXN0ZSBjYW1wbyBlcyByZXF1ZXJpZG88L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHtmb3JtaWsudmFsdWVzLnRpcG9EZXNjYXJnYSA9PT0gXCJ2aWVqb1wiID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWZ1bGwgbWQ6dy1mdWxsIGxnOnctMS80IHhsOnctMS80IHBsLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVsZW1lbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5UaXBvIGRlIEluZm9ybWU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLXNlbGVjdCAke1xuICAgICAgICAgICAgICAgICAgICBmb3JtaWsuZXJyb3JzLnRpcG9SZXBvcnRlID8gXCJmb3JtLWlucHV0LWludmFsaWRcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInRpcG9SZXBvcnRlXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWNjaW9uZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWlrLmhhbmRsZUNoYW5nZShlKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy50aXBvUmVwb3J0ZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWNjaW9uYSB1bmEgb3BjaW9uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICB7Y3VycmVudFVzZXIucm9sZSAhPT0gXCJkb2NcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib2xkLWNvbmNpbGlhY2lvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSW5mb3JtZSBkZSBjb25jaWxpYWNpw7NuXG4gICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9sZC1zbmlzXCI+U05JUzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvbGQtc25pc1wiPlJlcG9ydGUgZGUgRXN0dWRpbzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy50aXBvUmVwb3J0ZSAmJiBmb3JtaWsudG91Y2hlZC50aXBvUmVwb3J0ZSA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1lcnJvclwiPkVzdGUgY2FtcG8gZXMgcmVxdWVyaWRvPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWZ1bGwgbWQ6dy1mdWxsIGxnOnctMS8zIHhsOnctMS8zIHBsLTMgc2VsZi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVsZW1lbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5TZWxlY2Npb25lIGVsIHRpcG8gZGUgcHJ1ZWJhOjwvZGl2PlxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlc3R1ZGlvXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWNjaW9uZSB1biBlc3R1ZGlvLi4uXCJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnNFc3R1ZGlvc31cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmVzdHVkaW99XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwiZXN0dWRpb1wiLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJlc3R1ZGlvXCIsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMuZXN0dWRpbyAmJiBmb3JtaWsudG91Y2hlZC5lc3R1ZGlvID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+RXN0ZSBjYW1wbyBlcyByZXF1ZXJpZG88L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHtmb3JtaWsudmFsdWVzLnRpcG9SZXBvcnRlID09PSBcIm9sZC1jb25jaWxpYWNpb25cIiB8fFxuICAgICAgICBmb3JtaWsudmFsdWVzLnRpcG9SZXBvcnRlID09PSBcImNvbmNpbGlhY2lvblwiID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctZnVsbCBtZDp3LWZ1bGwgbGc6dy0xLzQgeGw6dy0xLzQgcGwtMyBzZWxmLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVsZW1lbnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+RmlsdHJhciBwb3IgdGlwbyBkZSBwYWNpZW50ZTo8L2Rpdj5cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXBvRmljaGFcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWNjaW9uZSB1bm8uLi5cIlxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3Byb3ZlZWRvcmVzfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnRpcG9GaWNoYX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJ0aXBvRmljaGFcIiwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJ0aXBvRmljaGFcIiwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMudGlwb0ZpY2hhICYmIGZvcm1pay50b3VjaGVkLnRpcG9GaWNoYSA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj5Fc3RlIGNhbXBvIGVzIHJlcXVlcmlkbzwvZGl2PlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAge2Zvcm1pay52YWx1ZXMudGlwb1JlcG9ydGUgPT09IFwiY29uY2lsaWFjaW9uXCIgJiZcbiAgICAgICAgICBzaG93RmlsdGVyQnlMYWJVc2VyKCkgPT09IHRydWUgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1mdWxsIG1kOnctZnVsbCBsZzp3LTEvNCB4bDp3LTEvNCBwbC0zIHNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1lbGVtZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+RmlsdHJhciBwb3IgVXN1YXJpbyBMYWI6PC9kaXY+XG4gICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgbmFtZT1cInRpcG9Vc3VhcmlvXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWNjaW9uZSB1bm8uLi5cIlxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17bGlzdGFEZVVzdWFyaW9zfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMudGlwb1VzdWFyaW99XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwidGlwb1VzdWFyaW9cIiwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwidGlwb1VzdWFyaW9cIiwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy50aXBvVXN1YXJpbyAmJiBmb3JtaWsudG91Y2hlZC50aXBvVXN1YXJpbyA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1lcnJvclwiPkVzdGUgY2FtcG8gZXMgcmVxdWVyaWRvPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1mdWxsIG1kOnctZnVsbCBsZzp3LTIvNCB4bDp3LTEvNCBwdC0zIHBsLTMgc2VsZi1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0b1wiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBkaXNhYmxlZD17YnVzeURvd25sb2FkaW5nfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHgtNiBweS0yIG15LTIgdGV4dC14cyBmb250LW1lZGl1bSBsZWFkaW5nLTYgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSB1cHBlcmNhc2UgdHJhbnNpdGlvbiBiZy1ibHVlLTcwMCByb3VuZGVkLWZ1bGwgc2hhZG93IHJpcHBsZSBob3ZlcjpzaGFkb3ctbGcgaG92ZXI6YmctYmx1ZS04MDAgZm9jdXM6b3V0bGluZS1ub25lIG14LWF1dG8gZGlzYWJsZWQ6b3BhY2l0eS01MFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7YnVzeURvd25sb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBpbmxpbmUtYmxvY2sgYW5pbWF0ZS1zcGluIC1tbC0xIG1yLTMgaC01IHctNSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcGFjaXR5LTI1XCJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTJcIlxuICAgICAgICAgICAgICAgICAgICByPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjRcIlxuICAgICAgICAgICAgICAgICAgPjwvY2lyY2xlPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3BhY2l0eS03NVwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTQgMTJhOCA4IDAgMDE4LThWMEM1LjM3MyAwIDAgNS4zNzMgMCAxMmg0em0yIDUuMjkxQTcuOTYyIDcuOTYyIDAgMDE0IDEySDBjMCAzLjA0MiAxLjEzNSA1LjgyNCAzIDcuOTM4bDMtMi42NDd6XCJcbiAgICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICB7YnVzeURvd25sb2FkaW5nID8gXCJEZXNjYXJnYW5kb1wiIDogXCJEZXNjYXJnYXIgXCJ9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9XaWRnZXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXNjYXJnYVJlcG9ydGVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==