webpackHotUpdate_N_E("pages/reportes/descarga",{

/***/ "./src/components/forms-local/descarga-reportes.js":
/*!*********************************************************!*\
  !*** ./src/components/forms-local/descarga-reportes.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_PC_Documents_SISTEMASORIGEN_OrigenAdmin_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_PC_Documents_SISTEMASORIGEN_OrigenAdmin_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_PC_Documents_SISTEMASORIGEN_OrigenAdmin_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
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






var _jsxFileName = "C:\\Users\\PC\\Documents\\SISTEMASORIGEN\\OrigenAdmin\\src\\components\\forms-local\\descarga-reportes.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_Users_PC_Documents_SISTEMASORIGEN_OrigenAdmin_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: block;\n  margin: 0 auto;\n  border-color: \"#000\";\n"]);

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
      _useManualQuery2 = Object(C_Users_PC_Documents_SISTEMASORIGEN_OrigenAdmin_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useManualQuery, 1),
      generateReport = _useManualQuery2[0];

  var _useManualQuery3 = Object(graphql_hooks__WEBPACK_IMPORTED_MODULE_9__["useManualQuery"])(_queries__WEBPACK_IMPORTED_MODULE_13__["GET_PROVEEDORES"]),
      _useManualQuery4 = Object(C_Users_PC_Documents_SISTEMASORIGEN_OrigenAdmin_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useManualQuery3, 1),
      getProveedores = _useManualQuery4[0];

  var _useManualQuery5 = Object(graphql_hooks__WEBPACK_IMPORTED_MODULE_9__["useManualQuery"])(_queries__WEBPACK_IMPORTED_MODULE_13__["GET_ESTUDIOS_SIMPLE"]),
      _useManualQuery6 = Object(C_Users_PC_Documents_SISTEMASORIGEN_OrigenAdmin_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useManualQuery5, 1),
      getEstudios = _useManualQuery6[0];

  var _useManualQuery7 = Object(graphql_hooks__WEBPACK_IMPORTED_MODULE_9__["useManualQuery"])(_queries__WEBPACK_IMPORTED_MODULE_13__["GET_FICHAS_BY_TEST_POR_CONCILIAR"]),
      _useManualQuery8 = Object(C_Users_PC_Documents_SISTEMASORIGEN_OrigenAdmin_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useManualQuery7, 1),
      getFichasByTestPorConciliar = _useManualQuery8[0];

  var _useManualQuery9 = Object(graphql_hooks__WEBPACK_IMPORTED_MODULE_9__["useManualQuery"])(_queries__WEBPACK_IMPORTED_MODULE_13__["REPORTES_ORDENES"]),
      _useManualQuery10 = Object(C_Users_PC_Documents_SISTEMASORIGEN_OrigenAdmin_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useManualQuery9, 1),
      generateReportOrdenes = _useManualQuery10[0];

  var _useManualQuery11 = Object(graphql_hooks__WEBPACK_IMPORTED_MODULE_9__["useManualQuery"])(_queries__WEBPACK_IMPORTED_MODULE_13__["GET_TODOS_USUARIOS"]),
      _useManualQuery12 = Object(C_Users_PC_Documents_SISTEMASORIGEN_OrigenAdmin_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useManualQuery11, 1),
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
        setListaEstudios([].concat(Object(C_Users_PC_Documents_SISTEMASORIGEN_OrigenAdmin_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.getEstudios), [{
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
                      createdBy = _item$ordenID.createdBy,
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
        setProveedores([].concat(Object(C_Users_PC_Documents_SISTEMASORIGEN_OrigenAdmin_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(opciones), [{
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
        setListaDeUsuarios([].concat(Object(C_Users_PC_Documents_SISTEMASORIGEN_OrigenAdmin_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(opciones), [{
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
            lineNumber: 612,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 611,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 610,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 609,
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
              lineNumber: 628,
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
                lineNumber: 653,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("option", {
                value: "viejo",
                children: "Sistema anterior"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 654,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("option", {
                value: "nuevo",
                children: "Sistema nuevo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 655,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 629,
              columnNumber: 15
            }, _this), formik.errors.tipoDescarga && formik.touched.tipoDescarga ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "form-error",
              children: "Este campo es requerido"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 658,
              columnNumber: 17
            }, _this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 627,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 626,
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
              lineNumber: 664,
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
              lineNumber: 665,
              columnNumber: 15
            }, _this), formik.errors.startDate && formik.touched.startDate ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "form-error",
              children: "Este campo es requerido"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 685,
              columnNumber: 17
            }, _this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 663,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 662,
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
              lineNumber: 691,
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
              lineNumber: 692,
              columnNumber: 15
            }, _this), formik.errors.endDate && formik.touched.endDate ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "form-error",
              children: "Este campo es requerido"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 711,
              columnNumber: 17
            }, _this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 690,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 689,
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
              lineNumber: 720,
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
                lineNumber: 736,
                columnNumber: 19
              }, _this), currentUser.role !== "doc" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("option", {
                  value: "conciliacion",
                  children: "Informe de conciliaci\xF3n"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 739,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("option", {
                  value: "snis",
                  children: "SNIS"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 742,
                  columnNumber: 23
                }, _this)]
              }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("option", {
                value: "snis",
                children: "Reporte de Estudio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 745,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 721,
              columnNumber: 17
            }, _this), formik.errors.tipoReporte && formik.touched.tipoReporte ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "form-error",
              children: "Este campo es requerido"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 749,
              columnNumber: 19
            }, _this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 719,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 718,
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
              lineNumber: 755,
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
              lineNumber: 756,
              columnNumber: 17
            }, _this), formik.errors.estudio && formik.touched.estudio ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "form-error",
              children: "Este campo es requerido"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 776,
              columnNumber: 19
            }, _this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 754,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 753,
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
              lineNumber: 786,
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
                lineNumber: 798,
                columnNumber: 19
              }, _this), currentUser.role !== "doc" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("option", {
                  value: "old-conciliacion",
                  children: "Informe de conciliaci\xF3n"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 801,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("option", {
                  value: "old-snis",
                  children: "SNIS"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 804,
                  columnNumber: 23
                }, _this)]
              }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("option", {
                value: "old-snis",
                children: "Reporte de Estudio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 807,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 787,
              columnNumber: 17
            }, _this), formik.errors.tipoReporte && formik.touched.tipoReporte ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "form-error",
              children: "Este campo es requerido"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 811,
              columnNumber: 19
            }, _this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 785,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 784,
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
              lineNumber: 817,
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
              lineNumber: 818,
              columnNumber: 17
            }, _this), formik.errors.estudio && formik.touched.estudio ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "form-error",
              children: "Este campo es requerido"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 832,
              columnNumber: 19
            }, _this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 816,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 815,
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
            lineNumber: 842,
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
            lineNumber: 843,
            columnNumber: 15
          }, _this), formik.errors.tipoFicha && formik.touched.tipoFicha ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "form-error",
            children: "Este campo es requerido"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 857,
            columnNumber: 17
          }, _this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 841,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 840,
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
            lineNumber: 866,
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
            lineNumber: 867,
            columnNumber: 17
          }, _this), formik.errors.tipoUsuario && formik.touched.tipoUsuario ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "form-error",
            children: "Este campo es requerido"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 881,
            columnNumber: 19
          }, _this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 865,
          columnNumber: 15
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 864,
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
                lineNumber: 900,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("path", {
                className: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 908,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 894,
              columnNumber: 17
            }, _this) : null, busyDownloading ? "Descargando" : "Descargar "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 888,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 887,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 886,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 621,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 620,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9ybXMtbG9jYWwvZGVzY2FyZ2EtcmVwb3J0ZXMuanMiXSwibmFtZXMiOlsidmFsaWQiLCJjdXJyZW50IiwiaXNCZWZvcmUiLCJtb21lbnQiLCJvdmVycmlkZSIsImNzcyIsIklOSVRJQUxfVkFMVUVTIiwic3RhcnREYXRlIiwic3VidHJhY3QiLCJ1dGNPZmZzZXQiLCJlbmREYXRlIiwiZXN0dWRpbyIsImlkIiwibm9tYnJlIiwidGlwb0ZpY2hhIiwibGFiZWwiLCJ2YWx1ZSIsInRpcG9Vc3VhcmlvIiwidGlwb0Rlc2NhcmdhIiwidGlwb1JlcG9ydGUiLCJvcHRpb25zRXN0dWRpb3MiLCJlc3R1ZGlvc1NOSVMiLCJCdXNxdWVkYUNsaWVudGVTY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIkRlc2NhcmdhUmVwb3J0ZXMiLCJDQlNldFJvd3MiLCJDQkxvYWRpbmciLCJidXN5IiwiQ0JOb1Jlc3VsdCIsImN1cnJlbnRVc2VyIiwidXNlTWFudWFsUXVlcnkiLCJJTkZPUk1FUyIsImdlbmVyYXRlUmVwb3J0IiwiR0VUX1BST1ZFRURPUkVTIiwiZ2V0UHJvdmVlZG9yZXMiLCJHRVRfRVNUVURJT1NfU0lNUExFIiwiZ2V0RXN0dWRpb3MiLCJHRVRfRklDSEFTX0JZX1RFU1RfUE9SX0NPTkNJTElBUiIsImdldEZpY2hhc0J5VGVzdFBvckNvbmNpbGlhciIsIlJFUE9SVEVTX09SREVORVMiLCJnZW5lcmF0ZVJlcG9ydE9yZGVuZXMiLCJHRVRfVE9ET1NfVVNVQVJJT1MiLCJnZXRBbGxVc2VycyIsInVzZVN0YXRlIiwic2hvd0Rvd25sb2FkQnRuIiwic2V0RG93bmxvYWRCdG4iLCJwcm92ZWVkb3JlcyIsInNldFByb3ZlZWRvcmVzIiwibGlzdGFFc3R1ZGlvcyIsInNldExpc3RhRXN0dWRpb3MiLCJsaXN0YURlVXN1YXJpb3MiLCJzZXRMaXN0YURlVXN1YXJpb3MiLCJidXN5RG93bmxvYWRpbmciLCJzZXRCdXN5RG93bmxvYWRpbmciLCJmaWxlVHlwZSIsImZpbGVFeHRlbnNpb24iLCJmZXRjaEVzdHVkaW9zTnVldm9zIiwidGhlbiIsImRhdGEiLCJlcnJvciIsImdldFJlc3VsdGFkbyIsImNvZGlnbyIsImNhbXBvc0VzdHVkaW9zIiwiZ2V0VmFsdWVGaWVsZCIsImdldFJlc3VsdGFkb0luZmx1ZW56YSIsInRpcG8iLCJnZXRSZXN1bHRhZG9PbGQiLCJyZXN1bHRhZG8iLCJDT0RJR09fRVNUVURJTyIsInJlcGxhY2UiLCJ0cmltIiwidG9VcHBlckNhc2UiLCJlbGlzYV9yZXN1bHQiLCJzcGxpdCIsInJlc3VsdCIsIkFOX1JFU1VMVCIsImNhbGN1bGF0ZVJlc3VsdEFOIiwiZ2V0QU5SZXN1bHQiLCJjYWxjdWxhdGVSZXN1bHRPIiwiZ2V0T1Jlc3VsdCIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJ2YWxpZGF0aW9uU2NoZW1hIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJvcGNpb25lcyIsIm5vbWJyZUFyY2hpdm8iLCJmb3JtYXQiLCJzdGFydCIsImVuZCIsInRpcG9JbmZvcm1lIiwidGVzdElkIiwidGlwb1BhY2llbnRlIiwidmFyaWFibGVzIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImluZm9ybWVEYXRhIiwibWFwIiwiaXRlbSIsImZlY2hhU29saWNpdHVkIiwibm9GYWN0dXJhIiwibW9udG9QYWdhZG8iLCJwYWdvU3RhdHVzIiwibm9Db21wcm9iYW50ZSIsImNvbmNpbGlhY2lvbk1hZGVCeSIsImZlY2hhRmFjdHVyYSIsIm9yZGVuTnVtZXJvIiwibnVtZXJvRGVBdXRvcml6YWNpb24iLCJjbGllbnRJRCIsIm5vbWJyZXMiLCJhcGVsbGlkb3MiLCJjaSIsInRpcG9fY2xpZW50ZSIsImZhY3R1cmFfbm8iLCJlc3RhdHVzX3BhZ28iLCJyZWZlcmVuY2lhIiwiY29uY2lsaWFjaWFkb19wb3IiLCJleHBvcnRUb0NTViIsImZlY2hhUmVwb3J0ZSIsImluaWNpb1NpbnRvbWFzIiwidGVsZWZvbm8iLCJkZXBhcnRhbWVudG8iLCJtdW5pY2lwaW8iLCJkaXJlY2Npb24iLCJmZWNoYV9uYWNpbWllbnRvIiwiZWRhZCIsImdldEVkYWQiLCJzaG93Tm90aWZpY2F0aW9uIiwicHJvdmVlZG9ySUQiLCJ1c3VhcmlvSUQiLCJvcmRlbk5vIiwiY29kaWdvRXN0dWRpbyIsImNvZGlnb0ludGVybm8iLCJlc3R1ZGlvTnVtZXJvIiwicHJlY2lvIiwib3JkZW5JRCIsInNleG8iLCJjcmVhdGVkQnkiLCJ0b3RhbEFQYWdhciIsImNvbnRyYXRpc3RhIiwiZm9ybWFEZVBhZ28iLCJsaXN0YVN1Y3Vyc2FsIiwiZXN0YXR1c1BhZ28iLCJOb0ZhY3R1cmEiLCJucm9PcmRlbkRlQ29tcHJhIiwibnJvQXV0b3JpemFjaW9uIiwicmVmZXJlbmNpYURlUGFnbyIsImZlY2hhRGVQYWdvIiwiZXN0dWRpb0lEIiwiUFJPVkVFRE9SIiwibm9tYnJlRXN0dWRpbyIsImFyZWFFc3R1ZGlvIiwiYXJlYURlRXN0dWRpb0lEIiwicHJlY2lvVW5pdGFyaW8iLCJ1dGMiLCJ0aXBvRGVDbGllbnRlIiwic3VjdXJzYWwiLCJtb250b1RvdGFsUGFnYWRvIiwiY3JlYWRvUG9yIiwiYXBlbGxpZG8iLCJ0aXRsZSIsInN0YXJ0QXQiLCJlbmRBdCIsImNhbXBvc0VzdHVkaW8iLCJyb2xlIiwiVmFjdW5hRG9zaXNQcmltZXJhIiwidmFjdW5hcyIsImRvc2lzUHJpbWVyYSIsIlZhY3VuYURvc2lzUmVmdWVyem9QcmltZXJhIiwiZG9zaXNSZWZ1ZXJ6b1ByaW1lcm8iLCJWYWN1bmFEb3Npc1JlZnVlcnpvU2VndW5kbyIsImRvc2lzUmVmdWVyem9TZWd1bmRvIiwiVmFjdW5hRG9zaXNTZWd1bmRhIiwiZG9zaXNTZWd1bmRhIiwiVmFjdW5hRG9zaXNVbmljYSIsImRvc2lzVW5pY2EiLCJWYWN1bmFGZWNoYVVsdGltb1Rlc3QiLCJmZWNoYVVsdGltb1Rlc3QiLCJmZXRjaFByb3ZlZWRvcmVzIiwidXNlQ2FjaGUiLCJpIiwiZmV0Y2hVc3VhcmlvcyIsImNzdkRhdGEiLCJmaWxlTmFtZSIsInByZUhlYWRlciIsIndzIiwiWExTWCIsImpzb25fdG9fc2hlZXQiLCJzaGVldF9hZGRfanNvbiIsIkEiLCJCIiwic2tpcEhlYWRlciIsIm9yaWdpbiIsIndiIiwiU2hlZXRzIiwiU2hlZXROYW1lcyIsImV4Y2VsQnVmZmVyIiwiYm9va1R5cGUiLCJ0eXBlIiwiQmxvYiIsIkZpbGVTYXZlciIsInVzZUVmZmVjdCIsInZhbGlkRW5kIiwiaXNCZXR3ZWVuIiwic2hvd0ZpbHRlckJ5TGFiVXNlciIsInJvbGVzIiwiaW5jbHVkZXMiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJlIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0Iiwic2V0RmllbGRWYWx1ZSIsInRvdWNoZWQiLCJjbGFzc05hbWUiLCJwbGFjZWhvbGRlciIsIndpZHRoIiwidiIsIm9wdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFTQSxTQUFTQSxLQUFULENBQWVDLE9BQWYsRUFBd0I7QUFDdEIsU0FBT0EsT0FBTyxDQUFDQyxRQUFSLENBQWlCQyw4Q0FBTSxFQUF2QixDQUFQO0FBQ0Q7O0FBRUQsSUFBTUMsUUFBUSxHQUFHQywwREFBSCxtQkFBZDtBQU1BLElBQU1DLGNBQWMsR0FBRztBQUNyQkMsV0FBUyxFQUFFSiw4Q0FBTSxHQUFHSyxRQUFULENBQWtCLENBQWxCLEVBQXFCLFFBQXJCLEVBQStCQyxTQUEvQixDQUF5QyxDQUF6QyxFQUE0QyxJQUE1QyxDQURVO0FBRXJCQyxTQUFPLEVBQUVQLDhDQUFNLEdBQUdNLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsSUFBdEIsQ0FGWTtBQUdyQkUsU0FBTyxFQUFFO0FBQUVDLE1BQUUsRUFBRSxLQUFOO0FBQWFDLFVBQU0sRUFBRTtBQUFyQixH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ZjhkYmUyOGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuLi93aWRnZXRcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcbmltcG9ydCB7IHVzZU1hbnVhbFF1ZXJ5IH0gZnJvbSBcImdyYXBocWwtaG9va3NcIjtcbmltcG9ydCBEYXRldGltZSBmcm9tIFwicmVhY3QtZGF0ZXRpbWVcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHsgc2hvd05vdGlmaWNhdGlvbiB9IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvY29tbW9uXCI7XG5pbXBvcnQge1xuICBHRVRfUFJPVkVFRE9SRVMsXG4gIEdFVF9GSUNIQVNfQllfVEVTVF9QT1JfQ09OQ0lMSUFSLFxuICBJTkZPUk1FUyxcbiAgR0VUX0VTVFVESU9TX1NJTVBMRSxcbiAgUkVQT1JURVNfT1JERU5FUyxcbiAgR0VUX1RPRE9TX1VTVUFSSU9TLFxufSBmcm9tIFwiLi4vLi4vcXVlcmllc1wiO1xuaW1wb3J0ICogYXMgRmlsZVNhdmVyIGZyb20gXCJmaWxlLXNhdmVyXCI7XG5pbXBvcnQgQ2xpcExvYWRlciBmcm9tIFwicmVhY3Qtc3Bpbm5lcnMvQ2xpcExvYWRlclwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSBcInhsc3hcIjtcbmltcG9ydCB7XG4gIGdldFZhbHVlRmllbGQsXG4gIGdldEVkYWQsXG4gIGNhbGN1bGF0ZVJlc3VsdEFOLFxuICBnZXRBTlJlc3VsdCxcbiAgY2FsY3VsYXRlUmVzdWx0TyxcbiAgZ2V0T1Jlc3VsdCxcbn0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vblwiO1xuXG5mdW5jdGlvbiB2YWxpZChjdXJyZW50KSB7XG4gIHJldHVybiBjdXJyZW50LmlzQmVmb3JlKG1vbWVudCgpKTtcbn1cblxuY29uc3Qgb3ZlcnJpZGUgPSBjc3NgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLWNvbG9yOiBcIiMwMDBcIjtcbmA7XG5cbmNvbnN0IElOSVRJQUxfVkFMVUVTID0ge1xuICBzdGFydERhdGU6IG1vbWVudCgpLnN1YnRyYWN0KDEsIFwibW9udGhzXCIpLnV0Y09mZnNldCgwLCB0cnVlKSxcbiAgZW5kRGF0ZTogbW9tZW50KCkudXRjT2Zmc2V0KDAsIHRydWUpLFxuICBlc3R1ZGlvOiB7IGlkOiBcImFsbFwiLCBub21icmU6IFwiVE9ET1NcIiB9LFxuICB0aXBvRmljaGE6IHsgbGFiZWw6IFwiVG9kb3NcIiwgdmFsdWU6IFwiYWxsXCIgfSxcbiAgdGlwb1VzdWFyaW86IHsgbGFiZWw6IFwiVG9kb3NcIiwgdmFsdWU6IFwiYWxsXCIgfSxcbiAgdGlwb0Rlc2NhcmdhOiBcIlwiLFxuICB0aXBvUmVwb3J0ZTogXCJcIixcbn07XG5cbmNvbnN0IG9wdGlvbnNFc3R1ZGlvcyA9IFtcbiAgeyB2YWx1ZTogXCJhbGxcIiwgbGFiZWw6IFwiVE9ET1NcIiB9LFxuICB7IHZhbHVlOiBcIjVmMTljMjY4MjJlNmRiNjE5NzM4ODEzZFwiLCBsYWJlbDogXCJQQ1IgQ09WSUQtMTlcIiB9LFxuICB7IHZhbHVlOiBcIjVmMWIzNTc3N2NiNjI3MjMwNTg1NGRkYlwiLCBsYWJlbDogXCJFTElTQSBDT1ZJRC0xOVwiIH0sXG4gIHsgdmFsdWU6IFwiNjA2NDdiYzUxZjVlNzYzOTM4NzRmYzVlXCIsIGxhYmVsOiBcIlBDUiBTYWxpdmEgQ09WSUQtMTlcIiB9LFxuICB7IHZhbHVlOiBcIjYwYjYxNzc0NDI0YmFhMjA2N2JhMzg1M1wiLCBsYWJlbDogXCJBbnRpY3VlcnBvcyBOZXV0cmFsaXphbnRlc1wiIH0sXG4gIHsgdmFsdWU6IFwiNjBiNzkwOGVmZmY4MWQ3YjlmMWVjNTM3XCIsIGxhYmVsOiBcIkFudGlnZW5vIFNBUlMtQ09WMlwiIH0sXG4gIHtcbiAgICB2YWx1ZTogXCI2MTJlZGZjNzlmYmYxZjdhODA4MzRkOTdcIixcbiAgICBsYWJlbDogXCJBbnRpY3VlcnBvcyBOZXV0cmFsaXphbnRlcyAoVE9UQUwpXCIsXG4gIH0sXG5dO1xuXG5jb25zdCBlc3R1ZGlvc1NOSVMgPSBbXG4gIHsgaWQ6IFwiNjA0ZDM1MzYzNWRmMTkwMDA0MjUwZTViXCIsIG5vbWJyZTogXCJQQ1IgQ09WSUQtMTlcIiB9LFxuICB7IGlkOiBcIjYwNGUyNjAyY2M1YzM0NWVjNDQyZjMyZVwiLCBub21icmU6IFwiRUxJU0EgQ09WSUQtMTlcIiB9LFxuICB7IGlkOiBcIjYwOTAxYmM0MmNkNDZiMDAwNDUxZTVmNlwiLCBub21icmU6IFwiUENSIFNhbGl2YSBDT1ZJRC0xOVwiIH0sXG4gIHsgaWQ6IFwiNjBiOTViZDkwOTJhZTMwMDA0MjI0ZGRkXCIsIG5vbWJyZTogXCJBbnRpZ2VubyBTQVJTLUNPVjJcIiB9LFxuICB7IGlkOiBcIjYxNGM1NzA0YzhlYWZiMDAwNDU5ODU2ZlwiLCBub21icmU6IFwiQW50aWdlbm8gU0FSUy1DT1YyIChVcnVibylcIiB9LFxuICB7XG4gICAgaWQ6IFwiNjE0YzVlN2VjOGVhZmIwMDA0NTk4NTc1XCIsXG4gICAgbm9tYnJlOiBcIkFudGlnZW5vIFNBUlMtQ09WMiAoQXV0b2NvdmlkIDR0byBhbmlsbG8pXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCI2MTliYzg0NTcyNDE5ZTAwMDQ4MzVkODBcIixcbiAgICBub21icmU6IFwiUGFuZWwgVmlyYWwgQ09WSUQtMTksIEluZmx1ZW56YSBBLCBJbmZsdWVuemEgQlwiLFxuICB9LFxuICB7IGlkOiBcImFsbFwiLCBub21icmU6IFwiVE9ET1NcIiB9LFxuXTtcblxuY29uc3QgQnVzcXVlZGFDbGllbnRlU2NoZW1hID0gWXVwLm9iamVjdCh7XG4gIHN0YXJ0RGF0ZTogWXVwLmRhdGUoKS5yZXF1aXJlZCgpLFxuICBlbmREYXRlOiBZdXAuZGF0ZSgpLnJlcXVpcmVkKCksXG4gIGVzdHVkaW86IFl1cC5vYmplY3QoKS5yZXF1aXJlZChcIkVzdGUgY2FtcG8gZXMgcmVxdWVyaWRvXCIpLFxuICB0aXBvRmljaGE6IFl1cC5vYmplY3QoKS5yZXF1aXJlZChcIkVzdGUgY2FtcG8gZXMgcmVxdWVyaWRvXCIpLFxuICB0aXBvVXN1YXJpbzogWXVwLm9iamVjdCgpLnJlcXVpcmVkKFwiRXN0ZSBjYW1wbyBlcyByZXF1ZXJpZG9cIiksXG4gIHRpcG9EZXNjYXJnYTogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwiRXN0ZSBjYW1wbyBlcyByZXF1ZXJpZG9cIiksXG4gIHRpcG9SZXBvcnRlOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJFc3RlIGNhbXBvIGVzIHJlcXVlcmlkb1wiKSxcbn0pO1xuXG5jb25zdCBEZXNjYXJnYVJlcG9ydGVzID0gKHtcbiAgQ0JTZXRSb3dzLFxuICBDQkxvYWRpbmcsXG4gIGJ1c3ksXG4gIENCTm9SZXN1bHQsXG4gIGN1cnJlbnRVc2VyLFxufSkgPT4ge1xuICBjb25zdCBbZ2VuZXJhdGVSZXBvcnRdID0gdXNlTWFudWFsUXVlcnkoSU5GT1JNRVMpO1xuICBjb25zdCBbZ2V0UHJvdmVlZG9yZXNdID0gdXNlTWFudWFsUXVlcnkoR0VUX1BST1ZFRURPUkVTKTtcbiAgY29uc3QgW2dldEVzdHVkaW9zXSA9IHVzZU1hbnVhbFF1ZXJ5KEdFVF9FU1RVRElPU19TSU1QTEUpO1xuICBjb25zdCBbZ2V0RmljaGFzQnlUZXN0UG9yQ29uY2lsaWFyXSA9IHVzZU1hbnVhbFF1ZXJ5KFxuICAgIEdFVF9GSUNIQVNfQllfVEVTVF9QT1JfQ09OQ0lMSUFSXG4gICk7XG4gIGNvbnN0IFtnZW5lcmF0ZVJlcG9ydE9yZGVuZXNdID0gdXNlTWFudWFsUXVlcnkoUkVQT1JURVNfT1JERU5FUyk7XG4gIGNvbnN0IFtnZXRBbGxVc2Vyc10gPSB1c2VNYW51YWxRdWVyeShHRVRfVE9ET1NfVVNVQVJJT1MpO1xuXG4gIGNvbnN0IFtzaG93RG93bmxvYWRCdG4sIHNldERvd25sb2FkQnRuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Byb3ZlZWRvcmVzLCBzZXRQcm92ZWVkb3Jlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsaXN0YUVzdHVkaW9zLCBzZXRMaXN0YUVzdHVkaW9zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xpc3RhRGVVc3Vhcmlvcywgc2V0TGlzdGFEZVVzdWFyaW9zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2J1c3lEb3dubG9hZGluZywgc2V0QnVzeURvd25sb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBmaWxlVHlwZSA9XG4gICAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldDtjaGFyc2V0PVVURi04XCI7XG4gIGNvbnN0IGZpbGVFeHRlbnNpb24gPSBcIi54bHN4XCI7XG5cbiAgY29uc3QgZmV0Y2hFc3R1ZGlvc051ZXZvcyA9ICgpID0+IHtcbiAgICBnZXRFc3R1ZGlvcygpLnRoZW4oKHsgZGF0YSwgZXJyb3IgfSkgPT4ge1xuICAgICAgaWYgKGRhdGEuZ2V0RXN0dWRpb3MpIHtcbiAgICAgICAgc2V0TGlzdGFFc3R1ZGlvcyhbLi4uZGF0YS5nZXRFc3R1ZGlvcywgeyBpZDogXCJhbGxcIiwgbm9tYnJlOiBcIlRvZG9zXCIgfV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldFJlc3VsdGFkbyA9IChjb2RpZ28sIGNhbXBvc0VzdHVkaW9zKSA9PiB7XG4gICAgaWYgKFxuICAgICAgY29kaWdvID09PSBcIkNcIiB8fFxuICAgICAgY29kaWdvID09PSBcIlBDUkNTXCIgfHxcbiAgICAgIGNvZGlnbyA9PT0gXCJQQ1JDXCIgfHxcbiAgICAgIGNvZGlnbyA9PT0gXCJBU0NcIiB8fFxuICAgICAgY29kaWdvID09PSBcIkFOVFVcIiB8fFxuICAgICAgY29kaWdvID09PSBcIkFBXCIgfHxcbiAgICAgIGNvZGlnbyA9PT0gXCJBTlwiXG4gICAgKSB7XG4gICAgICByZXR1cm4gZ2V0VmFsdWVGaWVsZChjYW1wb3NFc3R1ZGlvcywgXCJyZXN1bHRhZG9cIik7XG4gICAgfVxuICAgIGlmIChjb2RpZ28gPT09IFwiRUxJQ09WXCIpIHtcbiAgICAgIHJldHVybiBgSUdHOiAke2dldFZhbHVlRmllbGQoXG4gICAgICAgIGNhbXBvc0VzdHVkaW9zLFxuICAgICAgICBcInJlc3VsdGFkb19pZ2dcIlxuICAgICAgKX0gfCBJR006ICR7Z2V0VmFsdWVGaWVsZChjYW1wb3NFc3R1ZGlvcywgXCJyZXN1bHRhZG9faWdtXCIpfWA7XG4gICAgfVxuICAgIGlmIChjb2RpZ28gPT09IFwiQ0FCXCIpIHtcbiAgICAgIHJldHVybiBnZXRWYWx1ZUZpZWxkKGNhbXBvc0VzdHVkaW9zLCBcInNhcnNcIik7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9O1xuXG4gIGNvbnN0IGdldFJlc3VsdGFkb0luZmx1ZW56YSA9IChjb2RpZ28sIGNhbXBvc0VzdHVkaW9zLCB0aXBvKSA9PiB7XG4gICAgaWYgKGNvZGlnbyA9PT0gXCJDQUJcIikge1xuICAgICAgcmV0dXJuIGdldFZhbHVlRmllbGQoY2FtcG9zRXN0dWRpb3MsIGBpbmZsdV8ke3RpcG99YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiXCI7XG4gIH07XG5cbiAgY29uc3QgZ2V0UmVzdWx0YWRvT2xkID0gKGNvZGlnbywgcmVzdWx0YWRvKSA9PiB7XG4gICAgY29uc3QgQ09ESUdPX0VTVFVESU8gPSBjb2RpZ28ucmVwbGFjZSgvWzAtOV0vZywgXCJcIik7XG5cbiAgICBpZiAoXG4gICAgICBDT0RJR09fRVNUVURJTyA9PT0gXCJDXCIgfHxcbiAgICAgIENPRElHT19FU1RVRElPID09PSBcIkNTXCIgfHxcbiAgICAgIENPRElHT19FU1RVRElPID09PSBcIkFcIlxuICAgICkge1xuICAgICAgcmV0dXJuIHJlc3VsdGFkbyA/IHJlc3VsdGFkby50cmltKCkudG9VcHBlckNhc2UoKSA6IFwiXCI7XG4gICAgfVxuXG4gICAgaWYgKENPRElHT19FU1RVRElPID09PSBcIkVcIikge1xuICAgICAgY29uc3QgZWxpc2FfcmVzdWx0ID0gcmVzdWx0YWRvID8gcmVzdWx0YWRvLnNwbGl0KFwifFwiKSA6IFwiXCI7XG4gICAgICBpZiAoZWxpc2FfcmVzdWx0ID09PSBcIlwiKSByZXR1cm4gXCJcIjtcbiAgICAgIHJldHVybiBgbXVlc3RyYUlHZzogJHtlbGlzYV9yZXN1bHRbMF19IHB1bnRvRGVDb3J0ZUlHZzogJHtlbGlzYV9yZXN1bHRbMV19IHx8IG11ZXN0cmFJTWc6ICR7ZWxpc2FfcmVzdWx0WzJdfSBQdW50b2RlQ29ydGVJR206ICR7ZWxpc2FfcmVzdWx0WzNdfWA7XG4gICAgfVxuXG4gICAgaWYgKENPRElHT19FU1RVRElPID09PSBcIk5cIikge1xuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzdWx0YWRvID8gcmVzdWx0YWRvLnNwbGl0KFwifFwiKSA6IFwiXCI7XG4gICAgICBpZiAocmVzdWx0ID09PSBcIlwiKSByZXR1cm4gXCJcIjtcbiAgICAgIGNvbnN0IEFOX1JFU1VMVCA9IGNhbGN1bGF0ZVJlc3VsdEFOKHJlc3VsdFswXSwgcmVzdWx0WzFdKTtcbiAgICAgIHJldHVybiBgJHtBTl9SRVNVTFR9ICgke2dldEFOUmVzdWx0KEFOX1JFU1VMVCl9KWA7XG4gICAgfVxuICAgIGlmIChDT0RJR09fRVNUVURJTyA9PT0gXCJPXCIpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3VsdGFkbyA/IHJlc3VsdGFkby5zcGxpdChcInxcIikgOiBcIlwiO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gXCJcIikgcmV0dXJuIFwiXCI7XG4gICAgICBjb25zdCBBTl9SRVNVTFQgPSBjYWxjdWxhdGVSZXN1bHRPKHJlc3VsdFswXSwgcmVzdWx0WzFdKTtcbiAgICAgIHJldHVybiBgJHtBTl9SRVNVTFR9ICUgKCR7Z2V0T1Jlc3VsdChBTl9SRVNVTFQpfSlgO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgIGluaXRpYWxWYWx1ZXM6IElOSVRJQUxfVkFMVUVTLFxuICAgIHZhbGlkYXRpb25TY2hlbWE6IEJ1c3F1ZWRhQ2xpZW50ZVNjaGVtYSxcbiAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4ge1xuICAgICAgaWYgKCFidXN5RG93bmxvYWRpbmcpIHtcbiAgICAgICAgbGV0IG9wY2lvbmVzID0ge307XG4gICAgICAgIGxldCBub21icmVBcmNoaXZvID0gYCR7dmFsdWVzLnRpcG9SZXBvcnRlfWA7XG4gICAgICAgIGNvbnN0IHsgdGlwb0Rlc2NhcmdhIH0gPSB2YWx1ZXM7XG4gICAgICAgIHNldEJ1c3lEb3dubG9hZGluZyh0cnVlKTtcbiAgICAgICAgaWYgKHRpcG9EZXNjYXJnYSA9PT0gXCJ2aWVqb1wiKSB7XG4gICAgICAgICAgaWYgKHZhbHVlcy50aXBvUmVwb3J0ZSA9PT0gXCJvbGQtc25pc1wiKSB7XG4gICAgICAgICAgICBub21icmVBcmNoaXZvID0gYFNOSVMtJHt2YWx1ZXMuc3RhcnREYXRlLmZvcm1hdChcbiAgICAgICAgICAgICAgXCJZWVlZLU1NLUREXCJcbiAgICAgICAgICAgICl9IC0gJHt2YWx1ZXMuZW5kRGF0ZS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfWA7XG4gICAgICAgICAgICBvcGNpb25lcyA9IHtcbiAgICAgICAgICAgICAgc3RhcnQ6IHZhbHVlcy5zdGFydERhdGUuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICAgICAgICAgICAgZW5kOiB2YWx1ZXMuZW5kRGF0ZS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxuICAgICAgICAgICAgICB0aXBvSW5mb3JtZTogXCJzbmlzXCIsXG4gICAgICAgICAgICAgIHRlc3RJZDpcbiAgICAgICAgICAgICAgICB2YWx1ZXMuZXN0dWRpby52YWx1ZSA9PT0gXCJhbGxcIiA/IFwiXCIgOiB2YWx1ZXMuZXN0dWRpby52YWx1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhbHVlcy50aXBvUmVwb3J0ZSA9PT0gXCJvbGQtY29uY2lsaWFjaW9uXCIpIHtcbiAgICAgICAgICAgIG5vbWJyZUFyY2hpdm8gPSBgY29uY2lsaWFjaW9uLSR7dmFsdWVzLnN0YXJ0RGF0ZS5mb3JtYXQoXG4gICAgICAgICAgICAgIFwiWVlZWS1NTS1ERFwiXG4gICAgICAgICAgICApfSAtICR7dmFsdWVzLmVuZERhdGUuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKX1gO1xuICAgICAgICAgICAgb3BjaW9uZXMgPSB7XG4gICAgICAgICAgICAgIHN0YXJ0OiB2YWx1ZXMuc3RhcnREYXRlLmZvcm1hdChcIllZWVktTU0tRERcIiksXG4gICAgICAgICAgICAgIGVuZDogdmFsdWVzLmVuZERhdGUuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICAgICAgICAgICAgdGlwb0luZm9ybWU6IFwiY29uY2lsaWFjaW9uXCIsXG4gICAgICAgICAgICAgIHRlc3RJZDpcbiAgICAgICAgICAgICAgICB2YWx1ZXMuZXN0dWRpby52YWx1ZSA9PT0gXCJhbGxcIiA/IFwiXCIgOiB2YWx1ZXMuZXN0dWRpby52YWx1ZSxcbiAgICAgICAgICAgICAgdGlwb1BhY2llbnRlOiB2YWx1ZXMudGlwb0ZpY2hhLnZhbHVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBnZW5lcmF0ZVJlcG9ydCh7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IG9wY2lvbmVzLFxuICAgICAgICAgIH0pLnRoZW4oKHsgZGF0YSwgZXJyb3IgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgc2V0QnVzeURvd25sb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGF0YS5nZW5lcmF0ZVJlcG9ydCAmJiBkYXRhLmdlbmVyYXRlUmVwb3J0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlcy50aXBvUmVwb3J0ZSA9PT0gXCJvbGQtY29uY2lsaWFjaW9uXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmZvcm1lRGF0YSA9IGRhdGEuZ2VuZXJhdGVSZXBvcnQubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGlnbyxcbiAgICAgICAgICAgICAgICAgICAgZmVjaGFTb2xpY2l0dWQsXG4gICAgICAgICAgICAgICAgICAgIHRpcG9GaWNoYSxcbiAgICAgICAgICAgICAgICAgICAgbm9GYWN0dXJhLFxuICAgICAgICAgICAgICAgICAgICBtb250b1BhZ2FkbyxcbiAgICAgICAgICAgICAgICAgICAgcGFnb1N0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgbm9Db21wcm9iYW50ZSxcbiAgICAgICAgICAgICAgICAgICAgY29uY2lsaWFjaW9uTWFkZUJ5LFxuICAgICAgICAgICAgICAgICAgICBmZWNoYUZhY3R1cmEsXG4gICAgICAgICAgICAgICAgICAgIG9yZGVuTnVtZXJvLFxuICAgICAgICAgICAgICAgICAgICBudW1lcm9EZUF1dG9yaXphY2lvbixcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50SUQ6IHsgbm9tYnJlcywgYXBlbGxpZG9zLCBjaSB9LFxuICAgICAgICAgICAgICAgICAgfSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjb2RpZ28sXG4gICAgICAgICAgICAgICAgICAgIGZlY2hhU29saWNpdHVkOiBtb21lbnQoZmVjaGFTb2xpY2l0dWQsIFwiREQvTU0vWVlZWVwiKS5mb3JtYXQoXG4gICAgICAgICAgICAgICAgICAgICAgXCJERC9NTS9ZWVwiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIHRpcG9fY2xpZW50ZTogdGlwb0ZpY2hhLFxuICAgICAgICAgICAgICAgICAgICBub21icmVzLFxuICAgICAgICAgICAgICAgICAgICBhcGVsbGlkb3MsXG4gICAgICAgICAgICAgICAgICAgIGNpLFxuICAgICAgICAgICAgICAgICAgICBtb250b1BhZ2FkbzogbW9udG9QYWdhZG8sXG4gICAgICAgICAgICAgICAgICAgIGZhY3R1cmFfbm86IG5vRmFjdHVyYSxcbiAgICAgICAgICAgICAgICAgICAgb3JkZW5OdW1lcm8sXG4gICAgICAgICAgICAgICAgICAgIG51bWVyb0RlQXV0b3JpemFjaW9uLFxuICAgICAgICAgICAgICAgICAgICBmZWNoYUZhY3R1cmEsXG4gICAgICAgICAgICAgICAgICAgIGVzdGF0dXNfcGFnbzogcGFnb1N0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNpYTogbm9Db21wcm9iYW50ZSxcbiAgICAgICAgICAgICAgICAgICAgY29uY2lsaWFjaWFkb19wb3I6IGNvbmNpbGlhY2lvbk1hZGVCeSxcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZXhwb3J0VG9DU1YoaW5mb3JtZURhdGEsIG5vbWJyZUFyY2hpdm8pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh2YWx1ZXMudGlwb1JlcG9ydGUgPT09IFwib2xkLXNuaXNcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZm9ybWVEYXRhID0gZGF0YS5nZW5lcmF0ZVJlcG9ydC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICAgICAgY29kaWdvLFxuICAgICAgICAgICAgICAgICAgICBmZWNoYVNvbGljaXR1ZCxcbiAgICAgICAgICAgICAgICAgICAgZmVjaGFSZXBvcnRlLFxuICAgICAgICAgICAgICAgICAgICBpbmljaW9TaW50b21hcyxcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0YWRvLFxuICAgICAgICAgICAgICAgICAgICBjbGllbnRJRDoge1xuICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZXMsXG4gICAgICAgICAgICAgICAgICAgICAgYXBlbGxpZG9zLFxuICAgICAgICAgICAgICAgICAgICAgIGNpLFxuICAgICAgICAgICAgICAgICAgICAgIHRlbGVmb25vLFxuICAgICAgICAgICAgICAgICAgICAgIGRlcGFydGFtZW50byxcbiAgICAgICAgICAgICAgICAgICAgICBtdW5pY2lwaW8sXG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWNjaW9uLFxuICAgICAgICAgICAgICAgICAgICAgIGZlY2hhX25hY2ltaWVudG8sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9ID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGlnbyxcbiAgICAgICAgICAgICAgICAgICAgZmVjaGFTb2xpY2l0dWQsXG4gICAgICAgICAgICAgICAgICAgIGZlY2hhUmVwb3J0ZSxcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlcyxcbiAgICAgICAgICAgICAgICAgICAgYXBlbGxpZG9zLFxuICAgICAgICAgICAgICAgICAgICBjaSxcbiAgICAgICAgICAgICAgICAgICAgdGVsZWZvbm8sXG4gICAgICAgICAgICAgICAgICAgIGZlY2hhX25hY2ltaWVudG8sXG4gICAgICAgICAgICAgICAgICAgIGVkYWQ6IGdldEVkYWQoZmVjaGFfbmFjaW1pZW50bywgXCJcIiksXG4gICAgICAgICAgICAgICAgICAgIGRlcGFydGFtZW50byxcbiAgICAgICAgICAgICAgICAgICAgbXVuaWNpcGlvLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY2Npb24sXG4gICAgICAgICAgICAgICAgICAgIGluaWNpb1NpbnRvbWFzLFxuICAgICAgICAgICAgICAgICAgICByZXN1bHRhZG86IGdldFJlc3VsdGFkb09sZChjb2RpZ28sIHJlc3VsdGFkbyksXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGV4cG9ydFRvQ1NWKGluZm9ybWVEYXRhLCBub21icmVBcmNoaXZvKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbihcbiAgICAgICAgICAgICAgICBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgXCJObyBzZSBlbmNvbnRyw7MgaW5mb3JtYWNpb24gY29uIGxvcyBwYXJhbWV0cm9zIGVudmlhZG9zLlwiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRCdXN5RG93bmxvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRpcG9EZXNjYXJnYSA9PT0gXCJudWV2b1wiKSB7XG4gICAgICAgICAgaWYgKHZhbHVlcy50aXBvUmVwb3J0ZSA9PT0gXCJzbmlzXCIpIHtcbiAgICAgICAgICAgIG5vbWJyZUFyY2hpdm8gPSBgU05JUy0ke3ZhbHVlcy5zdGFydERhdGUuZm9ybWF0KFxuICAgICAgICAgICAgICBcIllZWVktTU0tRERcIlxuICAgICAgICAgICAgKX0gLSAke3ZhbHVlcy5lbmREYXRlLmZvcm1hdChcIllZWVktTU0tRERcIil9YDtcbiAgICAgICAgICAgIG9wY2lvbmVzID0ge1xuICAgICAgICAgICAgICBzdGFydDogdmFsdWVzLnN0YXJ0RGF0ZS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxuICAgICAgICAgICAgICBlbmQ6IHZhbHVlcy5lbmREYXRlLmZvcm1hdChcIllZWVktTU0tRERcIiksXG4gICAgICAgICAgICAgIHRpcG9JbmZvcm1lOiBcInNuaXNcIixcbiAgICAgICAgICAgICAgdGVzdElkOiB2YWx1ZXMuZXN0dWRpby5pZCA9PT0gXCJhbGxcIiA/IFwiXCIgOiB2YWx1ZXMuZXN0dWRpby5pZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhbHVlcy50aXBvUmVwb3J0ZSA9PT0gXCJjb25jaWxpYWNpb25cIikge1xuICAgICAgICAgICAgbm9tYnJlQXJjaGl2byA9IGBjb25jaWxpYWNpb24tJHt2YWx1ZXMuc3RhcnREYXRlLmZvcm1hdChcbiAgICAgICAgICAgICAgXCJZWVlZLU1NLUREXCJcbiAgICAgICAgICAgICl9IC0gJHt2YWx1ZXMuZW5kRGF0ZS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfWA7XG4gICAgICAgICAgICBvcGNpb25lcyA9IHtcbiAgICAgICAgICAgICAgc3RhcnQ6IHZhbHVlcy5zdGFydERhdGUuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICAgICAgICAgICAgZW5kOiB2YWx1ZXMuZW5kRGF0ZS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxuICAgICAgICAgICAgICB0aXBvSW5mb3JtZTogXCJjb25jaWxpYWNpb25cIixcbiAgICAgICAgICAgICAgdGVzdElkOiB2YWx1ZXMuZXN0dWRpby5pZCA9PT0gXCJhbGxcIiA/IFwiXCIgOiB2YWx1ZXMuZXN0dWRpby5pZCxcbiAgICAgICAgICAgICAgcHJvdmVlZG9ySUQ6IHZhbHVlcy50aXBvRmljaGEudmFsdWUsXG4gICAgICAgICAgICAgIHVzdWFyaW9JRDogdmFsdWVzLnRpcG9Vc3VhcmlvLnZhbHVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZ2VuZXJhdGVSZXBvcnRPcmRlbmVzKHtcbiAgICAgICAgICAgIHZhcmlhYmxlczogb3BjaW9uZXMsXG4gICAgICAgICAgfSkudGhlbigoeyBkYXRhLCBlcnJvciB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICBzZXRCdXN5RG93bmxvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgZGF0YS5nZW5lcmF0ZVJlcG9ydE9yZGVuZXMgJiZcbiAgICAgICAgICAgICAgZGF0YS5nZW5lcmF0ZVJlcG9ydE9yZGVuZXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGlmICh2YWx1ZXMudGlwb1JlcG9ydGUgPT09IFwiY29uY2lsaWFjaW9uXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmZvcm1lRGF0YSA9IGRhdGEuZ2VuZXJhdGVSZXBvcnRPcmRlbmVzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgICAgICBmZWNoYVNvbGljaXR1ZCxcbiAgICAgICAgICAgICAgICAgICAgb3JkZW5ObyxcbiAgICAgICAgICAgICAgICAgICAgY29kaWdvRXN0dWRpbyxcbiAgICAgICAgICAgICAgICAgICAgY29kaWdvSW50ZXJubyxcbiAgICAgICAgICAgICAgICAgICAgZXN0dWRpb051bWVybyxcbiAgICAgICAgICAgICAgICAgICAgcHJlY2lvLFxuICAgICAgICAgICAgICAgICAgICBvcmRlbklEOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpZW50SUQ6IHsgbm9tYnJlcywgYXBlbGxpZG9zLCBjaSwgZmVjaGFfbmFjaW1pZW50bywgdGVsZWZvbm8sIHNleG8gfSxcbiAgICAgICAgICAgICAgICAgICAgICAvL3NjcmVhdGVkQnk6IHsgbm9tYnJlPVwiXCIsIGFwZWxsaWRvPVwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQnksIC8vIERcbiAgICAgICAgICAgICAgICAgICAgICB0b3RhbEFQYWdhcixcbiAgICAgICAgICAgICAgICAgICAgICBjb250cmF0aXN0YSxcbiAgICAgICAgICAgICAgICAgICAgICBmb3JtYURlUGFnbyxcbiAgICAgICAgICAgICAgICAgICAgICBsaXN0YVN1Y3Vyc2FsLFxuICAgICAgICAgICAgICAgICAgICAgIGVzdGF0dXNQYWdvLFxuICAgICAgICAgICAgICAgICAgICAgIE5vRmFjdHVyYSxcbiAgICAgICAgICAgICAgICAgICAgICBucm9PcmRlbkRlQ29tcHJhLFxuICAgICAgICAgICAgICAgICAgICAgIG5yb0F1dG9yaXphY2lvbixcbiAgICAgICAgICAgICAgICAgICAgICBmZWNoYUZhY3R1cmEsXG4gICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNpYURlUGFnbyxcbiAgICAgICAgICAgICAgICAgICAgICBwcm92ZWVkb3JJRCxcbiAgICAgICAgICAgICAgICAgICAgICBmZWNoYURlUGFnbyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXN0dWRpb0lELFxuICAgICAgICAgICAgICAgICAgfSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICBjb25zdCBQUk9WRUVET1IgPSBjb250cmF0aXN0YVxuICAgICAgICAgICAgICAgICAgICA/IGAke3Byb3ZlZWRvcklELm5vbWJyZX0gLyAke2NvbnRyYXRpc3RhfSBgXG4gICAgICAgICAgICAgICAgICAgIDogcHJvdmVlZG9ySUQubm9tYnJlO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZW5ObyxcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlRXN0dWRpbzogZXN0dWRpb0lELm5vbWJyZSxcbiAgICAgICAgICAgICAgICAgICAgY29kaWdvRXN0dWRpbzogYCR7Y29kaWdvRXN0dWRpb30ke2VzdHVkaW9OdW1lcm99YCxcbiAgICAgICAgICAgICAgICAgICAgYXJlYUVzdHVkaW86IGVzdHVkaW9JRD8uYXJlYURlRXN0dWRpb0lEPy5ub21icmUgPz8gJycsXG4gICAgICAgICAgICAgICAgICAgIGNvZGlnb0ludGVybm8sXG4gICAgICAgICAgICAgICAgICAgIHByZWNpb1VuaXRhcmlvOiBwcmVjaW8sXG4gICAgICAgICAgICAgICAgICAgIGZlY2hhU29saWNpdHVkOiBtb21lbnQoZmVjaGFTb2xpY2l0dWQpXG4gICAgICAgICAgICAgICAgICAgICAgLnV0YygpXG4gICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIkREL01NL1lZWVlcIiksXG4gICAgICAgICAgICAgICAgICAgIHRpcG9EZUNsaWVudGU6IFBST1ZFRURPUixcbiAgICAgICAgICAgICAgICAgICAgc3VjdXJzYWw6IGxpc3RhU3VjdXJzYWwsXG4gICAgICAgICAgICAgICAgICAgIG5vbWJyZXMsXG4gICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvcyxcbiAgICAgICAgICAgICAgICAgICAgY2ksXG4gICAgICAgICAgICAgICAgICAgIHRlbGVmb25vLFxuICAgICAgICAgICAgICAgICAgICBlZGFkOiBnZXRFZGFkKGZlY2hhX25hY2ltaWVudG8sIFwiXCIpLFxuICAgICAgICAgICAgICAgICAgICBzZXhvOiBzZXhvPT09XCJGXCI/XCJGZW1lbmlub1wiOnNleG89PT1cIk1cIj9cIk1hc2N1bGlub1wiOlwiXCIsXG4gICAgICAgICAgICAgICAgICAgIG1vbnRvVG90YWxQYWdhZG86IHRvdGFsQVBhZ2FyLFxuICAgICAgICAgICAgICAgICAgICBmYWN0dXJhX25vOiBOb0ZhY3R1cmEsXG4gICAgICAgICAgICAgICAgICAgIG5yb09yZGVuRGVDb21wcmEsXG4gICAgICAgICAgICAgICAgICAgIG5yb0F1dG9yaXphY2lvbixcbiAgICAgICAgICAgICAgICAgICAgZmVjaGFGYWN0dXJhOiBmZWNoYUZhY3R1cmFcbiAgICAgICAgICAgICAgICAgICAgICA/IG1vbWVudChmZWNoYUZhY3R1cmEpLnV0YygpLmZvcm1hdChcIkREL01NL1lZWVlcIilcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGZlY2hhRGVQYWdvOiBmZWNoYURlUGFnb1xuICAgICAgICAgICAgICAgICAgICAgID8gbW9tZW50KGZlY2hhRGVQYWdvKS51dGMoKS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBmb3JtYURlUGFnbyxcbiAgICAgICAgICAgICAgICAgICAgZXN0YXR1c1BhZ28sICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNpYURlUGFnbyxcbiAgICAgICAgICAgICAgICAgICAgY3JlYWRvUG9yOiBgJHtub21icmV9ICR7YXBlbGxpZG99YCxcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZXhwb3J0VG9DU1YoXG4gICAgICAgICAgICAgICAgICBpbmZvcm1lRGF0YSxcbiAgICAgICAgICAgICAgICAgIG5vbWJyZUFyY2hpdm8sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnSU5GT1JNRSBERSBDT05DSUxJQUNJw5NOJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRBdDogdmFsdWVzLnN0YXJ0RGF0ZS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxuICAgICAgICAgICAgICAgICAgICBlbmRBdDogdmFsdWVzLmVuZERhdGUuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodmFsdWVzLnRpcG9SZXBvcnRlID09PSBcInNuaXNcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZm9ybWVEYXRhID0gZGF0YS5nZW5lcmF0ZVJlcG9ydE9yZGVuZXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGlnb0VzdHVkaW8sXG4gICAgICAgICAgICAgICAgICAgIGVzdHVkaW9OdW1lcm8sXG4gICAgICAgICAgICAgICAgICAgIGZlY2hhU29saWNpdHVkLFxuICAgICAgICAgICAgICAgICAgICBmZWNoYVJlcG9ydGUsXG4gICAgICAgICAgICAgICAgICAgIGNhbXBvc0VzdHVkaW8sXG4gICAgICAgICAgICAgICAgICAgIG9yZGVuSUQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGllbnRJRDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVsZWZvbm8sXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXBhcnRhbWVudG8sXG4gICAgICAgICAgICAgICAgICAgICAgICBtdW5pY2lwaW8sXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY2Npb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWNoYV9uYWNpbWllbnRvLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgcHJvdmVlZG9ySUQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9ID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VXNlci5yb2xlID09PSBcImRvY1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29kaWdvRXN0dWRpbzogYCR7Y29kaWdvRXN0dWRpb30ke2VzdHVkaW9OdW1lcm99YCxcbiAgICAgICAgICAgICAgICAgICAgICBmZWNoYVNvbGljaXR1ZDogbW9tZW50KGZlY2hhU29saWNpdHVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnV0YygpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiREQvTU0vWVlZWVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBmZWNoYVJlcG9ydGU6IGZlY2hhUmVwb3J0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBtb21lbnQoZmVjaGFSZXBvcnRlKS51dGMoKS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbm9tYnJlcyxcbiAgICAgICAgICAgICAgICAgICAgICBhcGVsbGlkb3MsXG4gICAgICAgICAgICAgICAgICAgICAgY2ksXG4gICAgICAgICAgICAgICAgICAgICAgdGVsZWZvbm8sXG4gICAgICAgICAgICAgICAgICAgICAgZmVjaGFfbmFjaW1pZW50byxcbiAgICAgICAgICAgICAgICAgICAgICBlZGFkOiBnZXRFZGFkKGZlY2hhX25hY2ltaWVudG8sIFwiXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIHRpcG9EZUNsaWVudGU6IHByb3ZlZWRvcklELm5vbWJyZSxcbiAgICAgICAgICAgICAgICAgICAgICBkZXBhcnRhbWVudG8sXG4gICAgICAgICAgICAgICAgICAgICAgbXVuaWNpcGlvLFxuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjY2lvbixcbiAgICAgICAgICAgICAgICAgICAgICByZXN1bHRhZG86IGdldFJlc3VsdGFkbyhjb2RpZ29Fc3R1ZGlvLCBjYW1wb3NFc3R1ZGlvKSxcbiAgICAgICAgICAgICAgICAgICAgICBcIkluZmx1ZW56YSBBXCI6IGdldFJlc3VsdGFkb0luZmx1ZW56YShcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGlnb0VzdHVkaW8sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1wb3NFc3R1ZGlvLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIFwiSW5mbHVlbnphIEJcIjogZ2V0UmVzdWx0YWRvSW5mbHVlbnphKFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kaWdvRXN0dWRpbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbXBvc0VzdHVkaW8sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgVmFjdW5hRG9zaXNQcmltZXJhOiBpdGVtLm9yZGVuSUQuY2xpZW50SUQudmFjdW5hcyAmJiBpdGVtLm9yZGVuSUQuY2xpZW50SUQudmFjdW5hcy5kb3Npc1ByaW1lcmEsXG4gICAgICAgICAgICAgICAgICAgICAgVmFjdW5hRG9zaXNSZWZ1ZXJ6b1ByaW1lcmE6IGl0ZW0ub3JkZW5JRC5jbGllbnRJRC52YWN1bmFzICYmIGl0ZW0ub3JkZW5JRC5jbGllbnRJRC52YWN1bmFzLmRvc2lzUmVmdWVyem9QcmltZXJvLFxuICAgICAgICAgICAgICAgICAgICAgIFZhY3VuYURvc2lzUmVmdWVyem9TZWd1bmRvOiBpdGVtLm9yZGVuSUQuY2xpZW50SUQudmFjdW5hcyAmJiBpdGVtLm9yZGVuSUQuY2xpZW50SUQudmFjdW5hcy5kb3Npc1JlZnVlcnpvU2VndW5kbyxcbiAgICAgICAgICAgICAgICAgICAgICBWYWN1bmFEb3Npc1NlZ3VuZGE6IGl0ZW0ub3JkZW5JRC5jbGllbnRJRC52YWN1bmFzICYmIGl0ZW0ub3JkZW5JRC5jbGllbnRJRC52YWN1bmFzLmRvc2lzU2VndW5kYSxcbiAgICAgICAgICAgICAgICAgICAgICBWYWN1bmFEb3Npc1VuaWNhOiBpdGVtLm9yZGVuSUQuY2xpZW50SUQudmFjdW5hcyAmJiBpdGVtLm9yZGVuSUQuY2xpZW50SUQudmFjdW5hcy5kb3Npc1VuaWNhLFxuICAgICAgICAgICAgICAgICAgICAgIFZhY3VuYUZlY2hhVWx0aW1vVGVzdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ub3JkZW5JRC5jbGllbnRJRC52YWN1bmFzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm9yZGVuSUQuY2xpZW50SUQudmFjdW5hcy5mZWNoYVVsdGltb1Rlc3QgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICBtb21lbnQoaXRlbS5vcmRlbklELmNsaWVudElELnZhY3VuYXMuZmVjaGFVbHRpbW9UZXN0KS5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGlnb0VzdHVkaW86IGAke2NvZGlnb0VzdHVkaW99JHtlc3R1ZGlvTnVtZXJvfWAsXG4gICAgICAgICAgICAgICAgICAgIGZlY2hhU29saWNpdHVkOiBtb21lbnQoZmVjaGFTb2xpY2l0dWQpXG4gICAgICAgICAgICAgICAgICAgICAgLnV0YygpXG4gICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIkREL01NL1lZWVlcIiksXG4gICAgICAgICAgICAgICAgICAgIGZlY2hhUmVwb3J0ZTogZmVjaGFSZXBvcnRlXG4gICAgICAgICAgICAgICAgICAgICAgPyBtb21lbnQoZmVjaGFSZXBvcnRlKS51dGMoKS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBub21icmVzLFxuICAgICAgICAgICAgICAgICAgICBhcGVsbGlkb3MsXG4gICAgICAgICAgICAgICAgICAgIGNpLFxuICAgICAgICAgICAgICAgICAgICB0ZWxlZm9ubyxcbiAgICAgICAgICAgICAgICAgICAgZmVjaGFfbmFjaW1pZW50byxcbiAgICAgICAgICAgICAgICAgICAgZWRhZDogZ2V0RWRhZChmZWNoYV9uYWNpbWllbnRvLCBcIlwiKSxcbiAgICAgICAgICAgICAgICAgICAgdGlwb0RlQ2xpZW50ZTogcHJvdmVlZG9ySUQubm9tYnJlLFxuICAgICAgICAgICAgICAgICAgICBkZXBhcnRhbWVudG8sXG4gICAgICAgICAgICAgICAgICAgIG11bmljaXBpbyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWNjaW9uLFxuICAgICAgICAgICAgICAgICAgICByZXN1bHRhZG86IGdldFJlc3VsdGFkbyhjb2RpZ29Fc3R1ZGlvLCBjYW1wb3NFc3R1ZGlvKSxcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZXhwb3J0VG9DU1YoaW5mb3JtZURhdGEsIG5vbWJyZUFyY2hpdm8pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFxuICAgICAgICAgICAgICAgIFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICBcIk5vIHNlIGVuY29udHLDsyBpbmZvcm1hY2lvbiBjb24gbG9zIHBhcmFtZXRyb3MgZW52aWFkb3MuXCJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEJ1c3lEb3dubG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBmZXRjaFByb3ZlZWRvcmVzID0gKCkgPT4ge1xuICAgIGdldFByb3ZlZWRvcmVzKHsgdXNlQ2FjaGU6IHRydWUgfSkudGhlbigoeyBkYXRhLCBlcnJvciB9KSA9PiB7XG4gICAgICBpZiAoZGF0YS5nZXRQcm92ZWVkb3Jlcykge1xuICAgICAgICBjb25zdCBvcGNpb25lcyA9IGRhdGEuZ2V0UHJvdmVlZG9yZXMubWFwKChpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgbGFiZWw6IGkubm9tYnJlLCB2YWx1ZTogaS5pZCB9O1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0UHJvdmVlZG9yZXMoWy4uLm9wY2lvbmVzLCB7IGxhYmVsOiBcIlRvZG9zXCIsIHZhbHVlOiBcImFsbFwiIH1dKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBmZXRjaFVzdWFyaW9zID0gKCkgPT4ge1xuICAgIGdldEFsbFVzZXJzKHsgdXNlQ2FjaGU6IHRydWUgfSkudGhlbigoeyBkYXRhLCBlcnJvciB9KSA9PiB7XG4gICAgICBpZiAoZGF0YS5nZXRBbGxVc2Vycykge1xuICAgICAgICBjb25zdCBvcGNpb25lcyA9IGRhdGEuZ2V0QWxsVXNlcnMubWFwKChpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgbGFiZWw6IGAke2kubm9tYnJlfSAke2kuYXBlbGxpZG99YCwgdmFsdWU6IGkuaWQgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldExpc3RhRGVVc3VhcmlvcyhbLi4ub3BjaW9uZXMsIHsgbGFiZWw6IFwiVG9kb3NcIiwgdmFsdWU6IFwiYWxsXCIgfV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGV4cG9ydFRvQ1NWID0gKGNzdkRhdGEsIGZpbGVOYW1lLCBwcmVIZWFkZXIpID0+IHtcbiAgICBjb25zdCB3cyA9IHByZUhlYWRlciA9PSBudWxsXG4gICAgICA/IFhMU1gudXRpbHMuanNvbl90b19zaGVldChjc3ZEYXRhKVxuICAgICAgOiBYTFNYLnV0aWxzLmpzb25fdG9fc2hlZXQoW10sIHt9KTtcblxuICAgIGlmIChwcmVIZWFkZXIgIT0gbnVsbCkge1xuICAgICAgWExTWC51dGlscy5zaGVldF9hZGRfanNvbih3cywgW1xuICAgICAgICB7XG4gICAgICAgICAgQTogcHJlSGVhZGVyLnRpdGxlLFxuICAgICAgICAgIEI6ICcnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgQTogJ0ZlY2hhIEluaWNpbycsXG4gICAgICAgICAgQjogcHJlSGVhZGVyLnN0YXJ0QXQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBBOiAnRmVjaGEgRmluJyxcbiAgICAgICAgICBCOiBwcmVIZWFkZXIuZW5kQXQsXG4gICAgICAgIH0sXG4gICAgICBdLCB7IHNraXBIZWFkZXI6IHRydWUsIG9yaWdpbjogJ0ExJyB9KTtcblxuICAgICAgWExTWC51dGlscy5zaGVldF9hZGRfanNvbih3cywgY3N2RGF0YSwgeyBza2lwSGVhZGVyOiBmYWxzZSwgb3JpZ2luOiAnQTQnIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHdiID0geyBTaGVldHM6IHsgZGF0YTogd3MgfSwgU2hlZXROYW1lczogW1wiZGF0YVwiXSB9O1xuICAgIGNvbnN0IGV4Y2VsQnVmZmVyID0gWExTWC53cml0ZSh3YiwgeyBib29rVHlwZTogXCJ4bHN4XCIsIHR5cGU6IFwiYXJyYXlcIiB9KTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEJsb2IoW2V4Y2VsQnVmZmVyXSwgeyB0eXBlOiBmaWxlVHlwZSB9KTtcbiAgICBGaWxlU2F2ZXIuc2F2ZUFzKGRhdGEsIGZpbGVOYW1lICsgZmlsZUV4dGVuc2lvbik7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIucm9sZSAhPT0gXCJkb2NcIikge1xuICAgICAgZmV0Y2hQcm92ZWVkb3JlcygpO1xuICAgICAgZmV0Y2hFc3R1ZGlvc051ZXZvcygpO1xuICAgICAgZmV0Y2hVc3VhcmlvcygpO1xuICAgIH1cbiAgfSwgW2N1cnJlbnRVc2VyXSk7XG5cbiAgZnVuY3Rpb24gdmFsaWRFbmQoY3VycmVudCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gbW9tZW50KGZvcm1pay52YWx1ZXMuc3RhcnREYXRlKS5zdWJ0cmFjdCgxLCBcImRheVwiKTtcbiAgICByZXR1cm4gY3VycmVudC5pc0JldHdlZW4oc3RhcnQsIG1vbWVudCgpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dGaWx0ZXJCeUxhYlVzZXIoKSB7XG4gICAgY29uc3Qgcm9sZXMgPSBbXG4gICAgICBcImFkbWluXCIsXG4gICAgICBcInN1cGVyX2FkbWluXCIsXG4gICAgICBcImNvbnRhYmlsaWRhZFwiLFxuICAgICAgXCJjb250YWJpbGlkYWRfXCIsXG4gICAgICBcImRlZmF1bHRcIixcbiAgICBdO1xuICAgIHJldHVybiByb2xlcy5pbmNsdWRlcyhjdXJyZW50VXNlci5yb2xlKTtcbiAgfVxuXG4gIGlmICghY3VycmVudFVzZXIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Q2xpcExvYWRlciBjc3M9e292ZXJyaWRlfSBzaXplPXs4MH0gY29sb3I9e1wiIzAwMFwifSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxXaWRnZXQgdGl0bGU9XCJGaWx0cmFyIEVzdHVkaW9zXCIgZGVzY3JpcHRpb249XCJcIj5cbiAgICAgIDxmb3JtXG4gICAgICAgIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fVxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGxnOmZsZXgtd3JhcCB3LWZ1bGxcIlxuICAgICAgPlxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctZnVsbCBtZDp3LWZ1bGwgbGc6dy0xLzQgeGw6dy0xLzQgcGwtM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVsZW1lbnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+T3JpZ2VuIEluZm9ybWFjacOzbjwvZGl2PlxuICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1zZWxlY3QgJHtcbiAgICAgICAgICAgICAgICAgIGZvcm1pay5lcnJvcnMudGlwb0Rlc2NhcmdhID8gXCJmb3JtLWlucHV0LWludmFsaWRcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICBuYW1lPVwidGlwb0Rlc2NhcmdhXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjY2lvbmVcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgZm9ybWlrLmhhbmRsZUNoYW5nZShlKTtcbiAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJudWV2b1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwiZXN0dWRpb1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgbm9tYnJlOiBcIlRPRE9TXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcInZpZWpvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJlc3R1ZGlvXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJhbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJUT0RPU1wiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwidGlwb1JlcG9ydGVcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy50aXBvRGVzY2FyZ2F9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWNjaW9uYSB1bmEgb3BjaW9uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInZpZWpvXCI+U2lzdGVtYSBhbnRlcmlvcjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJudWV2b1wiPlNpc3RlbWEgbnVldm88L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLnRpcG9EZXNjYXJnYSAmJiBmb3JtaWsudG91Y2hlZC50aXBvRGVzY2FyZ2EgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+RXN0ZSBjYW1wbyBlcyByZXF1ZXJpZG88L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWZ1bGwgbWQ6dy1mdWxsIGxnOnctMS80IHhsOnctMS80IHBsLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1lbGVtZW50XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkluaWNpbzwvZGl2PlxuICAgICAgICAgICAgICA8RGF0ZXRpbWVcbiAgICAgICAgICAgICAgICBsb2NhbGU9XCJlc1wiXG4gICAgICAgICAgICAgICAgbmFtZT1cInN0YXJ0RGF0ZVwiXG4gICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIkRELU1NLVlZWVlcIlxuICAgICAgICAgICAgICAgIHRpbWVGb3JtYXQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGlzVmFsaWREYXRlPXt2YWxpZH1cbiAgICAgICAgICAgICAgICBpbnB1dD17dHJ1ZX1cbiAgICAgICAgICAgICAgICBjbG9zZU9uU2VsZWN0PXt0cnVlfVxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmb3JtLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJGZWNoYSBJbmljaW9cIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE1MHB4XCIgfX1cbiAgICAgICAgICAgICAgICB2aWV3TW9kZT17XCJkYXlzXCJ9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuc3RhcnREYXRlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4ge1xuICAgICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJzdGFydERhdGVcIiwgdik7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2Zvcm1pay5lcnJvcnMuc3RhcnREYXRlICYmIGZvcm1pay50b3VjaGVkLnN0YXJ0RGF0ZSA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj5Fc3RlIGNhbXBvIGVzIHJlcXVlcmlkbzwvZGl2PlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctZnVsbCBtZDp3LWZ1bGwgbGc6dy0xLzQgeGw6dy0xLzQgcGwtM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVsZW1lbnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+RmluPC9kaXY+XG4gICAgICAgICAgICAgIDxEYXRldGltZVxuICAgICAgICAgICAgICAgIGxvY2FsZT1cImVzXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW5kRGF0ZVwiXG4gICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIkRELU1NLVlZWVlcIlxuICAgICAgICAgICAgICAgIHRpbWVGb3JtYXQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGlzVmFsaWREYXRlPXt2YWxpZEVuZH1cbiAgICAgICAgICAgICAgICBpbnB1dD17dHJ1ZX1cbiAgICAgICAgICAgICAgICBjbG9zZU9uU2VsZWN0PXt0cnVlfVxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmb3JtLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJGZWNoYSBGaW5cIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHZpZXdNb2RlPXtcImRheXNcIn1cbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5lbmREYXRlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4ge1xuICAgICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJlbmREYXRlXCIsIHYpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLmVuZERhdGUgJiYgZm9ybWlrLnRvdWNoZWQuZW5kRGF0ZSA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj5Fc3RlIGNhbXBvIGVzIHJlcXVlcmlkbzwvZGl2PlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICAge2Zvcm1pay52YWx1ZXMudGlwb0Rlc2NhcmdhID09PSBcIm51ZXZvXCIgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctZnVsbCBtZDp3LWZ1bGwgbGc6dy0xLzQgeGw6dy0xLzQgcGwtM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZWxlbWVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlRpcG8gZGUgSW5mb3JtZTwvZGl2PlxuICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tc2VsZWN0ICR7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1pay5lcnJvcnMudGlwb1JlcG9ydGUgPyBcImZvcm0taW5wdXQtaW52YWxpZFwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwidGlwb1JlcG9ydGVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY2Npb25lXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmb3JtaWsuaGFuZGxlQ2hhbmdlKGUpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcImVzdHVkaW9cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImFsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZTogXCJUT0RPU1wiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy50aXBvUmVwb3J0ZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWNjaW9uYSB1bmEgb3BjaW9uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICB7Y3VycmVudFVzZXIucm9sZSAhPT0gXCJkb2NcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY29uY2lsaWFjaW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBJbmZvcm1lIGRlIGNvbmNpbGlhY2nDs25cbiAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic25pc1wiPlNOSVM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic25pc1wiPlJlcG9ydGUgZGUgRXN0dWRpbzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy50aXBvUmVwb3J0ZSAmJiBmb3JtaWsudG91Y2hlZC50aXBvUmVwb3J0ZSA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1lcnJvclwiPkVzdGUgY2FtcG8gZXMgcmVxdWVyaWRvPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWZ1bGwgbWQ6dy1mdWxsIGxnOnctMS8zIHhsOnctMS8zIHBsLTMgc2VsZi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVsZW1lbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5TZWxlY2Npb25lIGVsIHRpcG8gZGUgcHJ1ZWJhOjwvZGl2PlxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlc3R1ZGlvXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWNjaW9uZSB1biBlc3R1ZGlvLi4uXCJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e1xuICAgICAgICAgICAgICAgICAgICBmb3JtaWsudmFsdWVzLnRpcG9SZXBvcnRlID09PSBcInNuaXNcIlxuICAgICAgICAgICAgICAgICAgICAgID8gZXN0dWRpb3NTTklTXG4gICAgICAgICAgICAgICAgICAgICAgOiBsaXN0YUVzdHVkaW9zXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5lc3R1ZGlvfVxuICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRzKSA9PiBvcHRzLm5vbWJyZX1cbiAgICAgICAgICAgICAgICAgIGdldE9wdGlvblZhbHVlPXsob3B0cykgPT4gb3B0cy5pZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJlc3R1ZGlvXCIsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcImVzdHVkaW9cIiwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5lc3R1ZGlvICYmIGZvcm1pay50b3VjaGVkLmVzdHVkaW8gPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj5Fc3RlIGNhbXBvIGVzIHJlcXVlcmlkbzwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAge2Zvcm1pay52YWx1ZXMudGlwb0Rlc2NhcmdhID09PSBcInZpZWpvXCIgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctZnVsbCBtZDp3LWZ1bGwgbGc6dy0xLzQgeGw6dy0xLzQgcGwtM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZWxlbWVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlRpcG8gZGUgSW5mb3JtZTwvZGl2PlxuICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tc2VsZWN0ICR7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1pay5lcnJvcnMudGlwb1JlcG9ydGUgPyBcImZvcm0taW5wdXQtaW52YWxpZFwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwidGlwb1JlcG9ydGVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY2Npb25lXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmb3JtaWsuaGFuZGxlQ2hhbmdlKGUpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnRpcG9SZXBvcnRlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY2Npb25hIHVuYSBvcGNpb248L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIHtjdXJyZW50VXNlci5yb2xlICE9PSBcImRvY1wiID8gKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvbGQtY29uY2lsaWFjaW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBJbmZvcm1lIGRlIGNvbmNpbGlhY2nDs25cbiAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib2xkLXNuaXNcIj5TTklTPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9sZC1zbmlzXCI+UmVwb3J0ZSBkZSBFc3R1ZGlvPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLnRpcG9SZXBvcnRlICYmIGZvcm1pay50b3VjaGVkLnRpcG9SZXBvcnRlID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+RXN0ZSBjYW1wbyBlcyByZXF1ZXJpZG88L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctZnVsbCBtZDp3LWZ1bGwgbGc6dy0xLzMgeGw6dy0xLzMgcGwtMyBzZWxmLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZWxlbWVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlNlbGVjY2lvbmUgZWwgdGlwbyBkZSBwcnVlYmE6PC9kaXY+XG4gICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVzdHVkaW9cIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY2Npb25lIHVuIGVzdHVkaW8uLi5cIlxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc0VzdHVkaW9zfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuZXN0dWRpb31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJlc3R1ZGlvXCIsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcImVzdHVkaW9cIiwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy5lc3R1ZGlvICYmIGZvcm1pay50b3VjaGVkLmVzdHVkaW8gPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj5Fc3RlIGNhbXBvIGVzIHJlcXVlcmlkbzwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAge2Zvcm1pay52YWx1ZXMudGlwb1JlcG9ydGUgPT09IFwib2xkLWNvbmNpbGlhY2lvblwiIHx8XG4gICAgICAgIGZvcm1pay52YWx1ZXMudGlwb1JlcG9ydGUgPT09IFwiY29uY2lsaWFjaW9uXCIgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1mdWxsIG1kOnctZnVsbCBsZzp3LTEvNCB4bDp3LTEvNCBwbC0zIHNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZWxlbWVudFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5GaWx0cmFyIHBvciB0aXBvIGRlIHBhY2llbnRlOjwvZGl2PlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgbmFtZT1cInRpcG9GaWNoYVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY2Npb25lIHVuby4uLlwiXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17cHJvdmVlZG9yZXN9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMudGlwb0ZpY2hhfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcInRpcG9GaWNoYVwiLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcInRpcG9GaWNoYVwiLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7Zm9ybWlrLmVycm9ycy50aXBvRmljaGEgJiYgZm9ybWlrLnRvdWNoZWQudGlwb0ZpY2hhID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1lcnJvclwiPkVzdGUgY2FtcG8gZXMgcmVxdWVyaWRvPC9kaXY+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICB7Zm9ybWlrLnZhbHVlcy50aXBvUmVwb3J0ZSA9PT0gXCJjb25jaWxpYWNpb25cIiAmJlxuICAgICAgICAgIHNob3dGaWx0ZXJCeUxhYlVzZXIoKSA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWZ1bGwgbWQ6dy1mdWxsIGxnOnctMS80IHhsOnctMS80IHBsLTMgc2VsZi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVsZW1lbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5GaWx0cmFyIHBvciBVc3VhcmlvIExhYjo8L2Rpdj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICBuYW1lPVwidGlwb1VzdWFyaW9cIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY2Npb25lIHVuby4uLlwiXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtsaXN0YURlVXN1YXJpb3N9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy50aXBvVXN1YXJpb31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJ0aXBvVXN1YXJpb1wiLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJ0aXBvVXN1YXJpb1wiLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtmb3JtaWsuZXJyb3JzLnRpcG9Vc3VhcmlvICYmIGZvcm1pay50b3VjaGVkLnRpcG9Vc3VhcmlvID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+RXN0ZSBjYW1wbyBlcyByZXF1ZXJpZG88L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWZ1bGwgbWQ6dy1mdWxsIGxnOnctMi80IHhsOnctMS80IHB0LTMgcGwtMyBzZWxmLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtidXN5RG93bmxvYWRpbmd9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweC02IHB5LTIgbXktMiB0ZXh0LXhzIGZvbnQtbWVkaXVtIGxlYWRpbmctNiB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIHVwcGVyY2FzZSB0cmFuc2l0aW9uIGJnLWJsdWUtNzAwIHJvdW5kZWQtZnVsbCBzaGFkb3cgcmlwcGxlIGhvdmVyOnNoYWRvdy1sZyBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpvdXRsaW5lLW5vbmUgbXgtYXV0byBkaXNhYmxlZDpvcGFjaXR5LTUwXCJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtidXN5RG93bmxvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGlubGluZS1ibG9jayBhbmltYXRlLXNwaW4gLW1sLTEgbXItMyBoLTUgdy01IHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9wYWNpdHktMjVcIlxuICAgICAgICAgICAgICAgICAgICBjeD1cIjEyXCJcbiAgICAgICAgICAgICAgICAgICAgY3k9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgIHI9XCIxMFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNFwiXG4gICAgICAgICAgICAgICAgICA+PC9jaXJjbGU+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcGFjaXR5LTc1XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNNCAxMmE4IDggMCAwMTgtOFYwQzUuMzczIDAgMCA1LjM3MyAwIDEyaDR6bTIgNS4yOTFBNy45NjIgNy45NjIgMCAwMTQgMTJIMGMwIDMuMDQyIDEuMTM1IDUuODI0IDMgNy45MzhsMy0yLjY0N3pcIlxuICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIHtidXN5RG93bmxvYWRpbmcgPyBcIkRlc2NhcmdhbmRvXCIgOiBcIkRlc2NhcmdhciBcIn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L1dpZGdldD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlc2NhcmdhUmVwb3J0ZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9