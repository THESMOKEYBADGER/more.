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

/***/ "./styles/app.module.css":
/*!*******************************!*\
  !*** ./styles/app.module.css ***!
  \*******************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"loadingContainer\": \"app_loadingContainer__pVxZc\",\n\t\"spinner\": \"app_spinner__psXx3\",\n\t\"spin\": \"app_spin__2qXmy\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvYXBwLm1vZHVsZS5jc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9yZS8uL3N0eWxlcy9hcHAubW9kdWxlLmNzcz9mYTE3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvYWRpbmdDb250YWluZXJcIjogXCJhcHBfbG9hZGluZ0NvbnRhaW5lcl9fcFZ4WmNcIixcblx0XCJzcGlubmVyXCI6IFwiYXBwX3NwaW5uZXJfX3BzWHgzXCIsXG5cdFwic3BpblwiOiBcImFwcF9zcGluX18ycVhteVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/app.module.css\n");

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"@mantine/core\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mantine_core__WEBPACK_IMPORTED_MODULE_3__]);\n_mantine_core__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction Layout({ children }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const isLoginPath = router.pathname.startsWith(\"/login\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleRouteChange = (url)=>{\n            if (url.startsWith(\"/login\")) {\n                window.location.reload();\n            }\n        };\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router\n    ]);\n    if (isLoginPath) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: children\n        }, void 0, false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.MantineProvider, {\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/gabe/Desktop/MORE/components/layout.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDTjtBQUNjO0FBRWpDLFNBQVNHLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQ3pDLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUN4QixNQUFNTSxjQUFjRCxPQUFPRSxRQUFRLENBQUNDLFVBQVUsQ0FBQztJQUUvQ1AsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxvQkFBb0IsQ0FBQ0M7WUFDekIsSUFBSUEsSUFBSUYsVUFBVSxDQUFDLFdBQVc7Z0JBQzVCRyxPQUFPQyxRQUFRLENBQUNDLE1BQU07WUFDeEI7UUFDRjtRQUVBUixPQUFPUyxNQUFNLENBQUNDLEVBQUUsQ0FBQyx1QkFBdUJOO1FBRXhDLE9BQU87WUFDTEosT0FBT1MsTUFBTSxDQUFDRSxHQUFHLENBQUMsdUJBQXVCUDtRQUMzQztJQUNGLEdBQUc7UUFBQ0o7S0FBTztJQUVYLElBQUlDLGFBQWE7UUFDZixxQkFBTztzQkFBR0Y7O0lBQ1o7SUFFQSxxQkFDRSw4REFBQ0YsMERBQWVBO2tCQUNiRTs7Ozs7O0FBR1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3JlLy4vY29tcG9uZW50cy9sYXlvdXQuanM/MjlhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNYW50aW5lUHJvdmlkZXIgfSBmcm9tICdAbWFudGluZS9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgaXNMb2dpblBhdGggPSByb3V0ZXIucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2xvZ2luJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmwpID0+IHtcbiAgICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnL2xvZ2luJykpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpO1xuICAgIH07XG4gIH0sIFtyb3V0ZXJdKTtcblxuICBpZiAoaXNMb2dpblBhdGgpIHtcbiAgICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TWFudGluZVByb3ZpZGVyPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTWFudGluZVByb3ZpZGVyPlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJNYW50aW5lUHJvdmlkZXIiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInJvdXRlciIsImlzTG9naW5QYXRoIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImV2ZW50cyIsIm9uIiwib2ZmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _styles_app_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/app.module.css */ \"./styles/app.module.css\");\n/* harmony import */ var _styles_app_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_app_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout__WEBPACK_IMPORTED_MODULE_4__]);\n_components_layout__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// pages/_app.js\n\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleStart = ()=>setLoading(true);\n        const handleComplete = ()=>setLoading(false);\n        router.events.on(\"routeChangeStart\", handleStart);\n        router.events.on(\"routeChangeComplete\", handleComplete);\n        router.events.on(\"routeChangeError\", handleComplete);\n        // Expose setLoading function globally\n        window.setGlobalLoading = setLoading;\n        return ()=>{\n            router.events.off(\"routeChangeStart\", handleStart);\n            router.events.off(\"routeChangeComplete\", handleComplete);\n            router.events.off(\"routeChangeError\", handleComplete);\n            delete window.setGlobalLoading;\n        };\n    }, [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"icon\",\n                    href: \"/images/new-favicon.png\"\n                }, void 0, false, {\n                    fileName: \"/Users/gabe/Desktop/MORE/pages/_app.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/gabe/Desktop/MORE/pages/_app.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: [\n                    loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_app_module_css__WEBPACK_IMPORTED_MODULE_5___default().loadingContainer),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_app_module_css__WEBPACK_IMPORTED_MODULE_5___default().spinner)\n                        }, void 0, false, {\n                            fileName: \"/Users/gabe/Desktop/MORE/pages/_app.js\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/gabe/Desktop/MORE/pages/_app.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/gabe/Desktop/MORE/pages/_app.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gabe/Desktop/MORE/pages/_app.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0JBQWdCOztBQUM0QjtBQUNKO0FBQ1g7QUFDYTtBQUNJO0FBQ2Y7QUFFL0IsU0FBU00sTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUM7SUFDdkMsTUFBTVcsU0FBU1Qsc0RBQVNBO0lBRXhCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1XLGNBQWMsSUFBTUYsV0FBVztRQUNyQyxNQUFNRyxpQkFBaUIsSUFBTUgsV0FBVztRQUV4Q0MsT0FBT0csTUFBTSxDQUFDQyxFQUFFLENBQUMsb0JBQW9CSDtRQUNyQ0QsT0FBT0csTUFBTSxDQUFDQyxFQUFFLENBQUMsdUJBQXVCRjtRQUN4Q0YsT0FBT0csTUFBTSxDQUFDQyxFQUFFLENBQUMsb0JBQW9CRjtRQUVyQyxzQ0FBc0M7UUFDdENHLE9BQU9DLGdCQUFnQixHQUFHUDtRQUUxQixPQUFPO1lBQ0xDLE9BQU9HLE1BQU0sQ0FBQ0ksR0FBRyxDQUFDLG9CQUFvQk47WUFDdENELE9BQU9HLE1BQU0sQ0FBQ0ksR0FBRyxDQUFDLHVCQUF1Qkw7WUFDekNGLE9BQU9HLE1BQU0sQ0FBQ0ksR0FBRyxDQUFDLG9CQUFvQkw7WUFDdEMsT0FBT0csT0FBT0MsZ0JBQWdCO1FBQ2hDO0lBQ0YsR0FBRztRQUFDTjtLQUFPO0lBRVgscUJBQ0U7OzBCQUNFLDhEQUFDUixrREFBSUE7MEJBQ0gsNEVBQUNnQjtvQkFBS0MsS0FBSTtvQkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDakIsMERBQU1BOztvQkFDSksseUJBQ0MsOERBQUNhO3dCQUFJQyxXQUFXbEIsZ0ZBQXVCO2tDQUNyQyw0RUFBQ2lCOzRCQUFJQyxXQUFXbEIsdUVBQWM7Ozs7Ozs7Ozs7O2tDQUdsQyw4REFBQ0U7d0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7QUFJaEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vcmUvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvX2FwcC5qc1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2FwcC5tb2R1bGUuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTdGFydCA9ICgpID0+IHNldExvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgaGFuZGxlQ29tcGxldGUgPSAoKSA9PiBzZXRMb2FkaW5nKGZhbHNlKTtcblxuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVTdGFydCk7XG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZUNvbXBsZXRlKTtcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgaGFuZGxlQ29tcGxldGUpO1xuXG4gICAgLy8gRXhwb3NlIHNldExvYWRpbmcgZnVuY3Rpb24gZ2xvYmFsbHlcbiAgICB3aW5kb3cuc2V0R2xvYmFsTG9hZGluZyA9IHNldExvYWRpbmc7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVTdGFydCk7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZUNvbXBsZXRlKTtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUVycm9yJywgaGFuZGxlQ29tcGxldGUpO1xuICAgICAgZGVsZXRlIHdpbmRvdy5zZXRHbG9iYWxMb2FkaW5nO1xuICAgIH07XG4gIH0sIFtyb3V0ZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvaW1hZ2VzL25ldy1mYXZpY29uLnBuZ1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmdDb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zcGlubmVyfT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkhlYWQiLCJMYXlvdXQiLCJzdHlsZXMiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwiaGFuZGxlU3RhcnQiLCJoYW5kbGVDb21wbGV0ZSIsImV2ZW50cyIsIm9uIiwid2luZG93Iiwic2V0R2xvYmFsTG9hZGluZyIsIm9mZiIsImxpbmsiLCJyZWwiLCJocmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwibG9hZGluZ0NvbnRhaW5lciIsInNwaW5uZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

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

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@mantine/core":
/*!********************************!*\
  !*** external "@mantine/core" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mantine/core");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();