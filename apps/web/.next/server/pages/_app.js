/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_ConfigProvider_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ConfigProvider!=!antd */ \"__barrel_optimize__?names=ConfigProvider!=!../../node_modules/.pnpm/antd@5.29.3_react-dom@18.3.1_react@18.3.1/node_modules/antd/es/index.js\");\n/* harmony import */ var antd_locale_zh_CN__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/locale/zh_CN */ \"../../node_modules/.pnpm/antd@5.29.3_react-dom@18.3.1_react@18.3.1/node_modules/antd/locale/zh_CN.js\");\n/* harmony import */ var antd_locale_zh_CN__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_locale_zh_CN__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__]);\n_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient({\n    defaultOptions: {\n        queries: {\n            refetchOnWindowFocus: false,\n            retry: 1\n        }\n    }\n});\nconst RootLayout = ({ children })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"UEAI Studio\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\DEV\\\\demo\\\\ueai-studio\\\\apps\\\\web\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"UEAI Studio - 多平台AI对话、编程、工具平台\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\DEV\\\\demo\\\\ueai-studio\\\\apps\\\\web\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\DEV\\\\demo\\\\ueai-studio\\\\apps\\\\web\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\DEV\\\\demo\\\\ueai-studio\\\\apps\\\\web\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\DEV\\\\demo\\\\ueai-studio\\\\apps\\\\web\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {\n                client: queryClient,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ConfigProvider_antd__WEBPACK_IMPORTED_MODULE_4__.ConfigProvider, {\n                    locale: (antd_locale_zh_CN__WEBPACK_IMPORTED_MODULE_5___default()),\n                    children: children\n                }, void 0, false, {\n                    fileName: \"D:\\\\DEV\\\\demo\\\\ueai-studio\\\\apps\\\\web\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\DEV\\\\demo\\\\ueai-studio\\\\apps\\\\web\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RootLayout);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzZCO0FBQ1M7QUFDRDtBQUNvQztBQUMxQztBQUUvQixNQUFNSyxjQUFjLElBQUlGLDhEQUFXQSxDQUFDO0lBQ2xDRyxnQkFBZ0I7UUFDZEMsU0FBUztZQUNQQyxzQkFBc0I7WUFDdEJDLE9BQU87UUFDVDtJQUNGO0FBQ0Y7QUFFQSxNQUFNQyxhQUFzRCxDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUN2RSxxQkFDRTs7MEJBQ0UsOERBQUNYLGtEQUFJQTs7a0NBQ0gsOERBQUNZO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNkLHNFQUFtQkE7Z0JBQUNlLFFBQVFkOzBCQUMzQiw0RUFBQ0osc0ZBQWNBO29CQUFDbUIsUUFBUWxCLDBEQUFJQTs4QkFDekJTOzs7Ozs7Ozs7Ozs7O0FBS1g7QUFFQSxpRUFBZUQsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0B1ZWFpL3dlYi8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgQ29uZmlnUHJvdmlkZXIgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHpoQ04gZnJvbSAnYW50ZC9sb2NhbGUvemhfQ04nO1xyXG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuXHJcbmNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KHtcclxuICBkZWZhdWx0T3B0aW9uczoge1xyXG4gICAgcXVlcmllczoge1xyXG4gICAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXHJcbiAgICAgIHJldHJ5OiAxXHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IFJvb3RMYXlvdXQ6IE5leHRQYWdlPHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9PiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlVFQUkgU3R1ZGlvPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVUVBSSBTdHVkaW8gLSDlpJrlubPlj7BBSeWvueivneOAgee8lueoi+OAgeW3peWFt+W5s+WPsFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XHJcbiAgICAgICAgPENvbmZpZ1Byb3ZpZGVyIGxvY2FsZT17emhDTn0+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Db25maWdQcm92aWRlcj5cclxuICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvb3RMYXlvdXQ7XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiQ29uZmlnUHJvdmlkZXIiLCJ6aENOIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwicXVlcnlDbGllbnQiLCJkZWZhdWx0T3B0aW9ucyIsInF1ZXJpZXMiLCJyZWZldGNoT25XaW5kb3dGb2N1cyIsInJldHJ5IiwiUm9vdExheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImNsaWVudCIsImxvY2FsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "__barrel_optimize__?names=ConfigProvider!=!../../node_modules/.pnpm/antd@5.29.3_react-dom@18.3.1_react@18.3.1/node_modules/antd/es/index.js":
/*!***************************************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=ConfigProvider!=!../../node_modules/.pnpm/antd@5.29.3_react-dom@18.3.1_react@18.3.1/node_modules/antd/es/index.js ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConfigProvider: () => (/* reexport safe */ _config_provider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config-provider */ \"../../node_modules/.pnpm/antd@5.29.3_react-dom@18.3.1_react@18.3.1/node_modules/antd/es/config-provider/index.js\");\n/* __next_internal_client_entry_do_not_use__ ConfigProvider auto */ \n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1Db25maWdQcm92aWRlciE9IS4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9hbnRkQDUuMjkuM19yZWFjdC1kb21AMTguMy4xX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvYW50ZC9lcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztvRUFFNkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdWVhaS93ZWIvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2FudGRANS4yOS4zX3JlYWN0LWRvbUAxOC4zLjFfcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9hbnRkL2VzL2luZGV4LmpzPzI3N2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29uZmlnUHJvdmlkZXIgfSBmcm9tIFwiLi9jb25maWctcHJvdmlkZXJcIiJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiQ29uZmlnUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=ConfigProvider!=!../../node_modules/.pnpm/antd@5.29.3_react-dom@18.3.1_react@18.3.1/node_modules/antd/es/index.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@ant-design+cssinjs@1.24.0_react-dom@18.3.1_react@18.3.1","vendor-chunks/antd@5.29.3_react-dom@18.3.1_react@18.3.1","vendor-chunks/rc-motion@2.9.5_react-dom@18.3.1_react@18.3.1","vendor-chunks/rc-util@5.44.4_react-dom@18.3.1_react@18.3.1","vendor-chunks/@ant-design+cssinjs-utils@1.1.3_react-dom@18.3.1_react@18.3.1","vendor-chunks/@babel+runtime@7.28.6","vendor-chunks/@ant-design+fast-color@2.0.6","vendor-chunks/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1","vendor-chunks/stylis@4.3.6","vendor-chunks/@ant-design+colors@7.2.1","vendor-chunks/react-is@18.3.1","vendor-chunks/rc-picker@4.11.3_dayjs@1.11.20_react-dom@18.3.1_react@18.3.1","vendor-chunks/@emotion+hash@0.8.0","vendor-chunks/classnames@2.5.1","vendor-chunks/@emotion+unitless@0.7.5","vendor-chunks/rc-pagination@5.1.0_react-dom@18.3.1_react@18.3.1"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();