/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/auth/signin"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=F%3A%5CAssignments%5CNextjsBnglr%5Cpages%5Cauth%5Csignin.js&page=%2Fauth%2Fsignin!":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=F%3A%5CAssignments%5CNextjsBnglr%5Cpages%5Cauth%5Csignin.js&page=%2Fauth%2Fsignin! ***!
  \**************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/auth/signin\",\n      function () {\n        return __webpack_require__(/*! ./pages/auth/signin.js */ \"./pages/auth/signin.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/auth/signin\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1GJTNBJTVDQXNzaWdubWVudHMlNUNOZXh0anNCbmdsciU1Q3BhZ2VzJTVDYXV0aCU1Q3NpZ25pbi5qcyZwYWdlPSUyRmF1dGglMkZzaWduaW4hIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsc0RBQXdCO0FBQy9DO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz8wNzA0Il0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvYXV0aC9zaWduaW5cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL2F1dGgvc2lnbmluLmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9hdXRoL3NpZ25pblwiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=F%3A%5CAssignments%5CNextjsBnglr%5Cpages%5Cauth%5Csignin.js&page=%2Fauth%2Fsignin!\n"));

/***/ }),

/***/ "./pages/auth/signin.js":
/*!******************************!*\
  !*** ./pages/auth/signin.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignInPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SignInPage() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setIsSubmitting(true);\n        const res = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"credentials\", {\n            redirect: false,\n            email,\n            password\n        });\n        if (res.ok) {\n            var _session_user;\n            const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();\n            if ((session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.role) === \"admin\") {\n                router.push(\"/admin\");\n            } else {\n                router.push(\"/user\");\n            }\n        } else {\n            setError(\"Invalid email or password\");\n        }\n        setIsSubmitting(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white shadow-xl rounded-lg p-8 w-full max-w-sm md:max-w-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-semibold text-gray-800 text-center\",\n                    children: \"Sign In\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\Assignments\\\\NextjsBnglr\\\\pages\\\\auth\\\\signin.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"mt-6 space-y-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            value: email,\n                            onChange: (e)=>setEmail(e.target.value),\n                            placeholder: \"Email\",\n                            className: \"w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Assignments\\\\NextjsBnglr\\\\pages\\\\auth\\\\signin.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            value: password,\n                            onChange: (e)=>setPassword(e.target.value),\n                            placeholder: \"Password\",\n                            className: \"w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Assignments\\\\NextjsBnglr\\\\pages\\\\auth\\\\signin.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-red-500 text-sm text-center\",\n                            children: error\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Assignments\\\\NextjsBnglr\\\\pages\\\\auth\\\\signin.js\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 \".concat(isSubmitting ? \"opacity-50 cursor-not-allowed\" : \"\"),\n                            disabled: isSubmitting,\n                            children: isSubmitting ? \"Signing In...\" : \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Assignments\\\\NextjsBnglr\\\\pages\\\\auth\\\\signin.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\Assignments\\\\NextjsBnglr\\\\pages\\\\auth\\\\signin.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\Assignments\\\\NextjsBnglr\\\\pages\\\\auth\\\\signin.js\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\Assignments\\\\NextjsBnglr\\\\pages\\\\auth\\\\signin.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(SignInPage, \"DCsCgeqrXfVDeeFK8lfz+8y2Eio=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = SignInPage;\nvar _c;\n$RefreshReg$(_c, \"SignInPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ25pbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUNwQjtBQUNPO0FBRXpCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDSyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNTLGNBQWNDLGdCQUFnQixHQUFHViwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNVyxTQUFTVixzREFBU0E7SUFFeEIsTUFBTVcsZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUNoQkosZ0JBQWdCO1FBRWhCLE1BQU1LLE1BQU0sTUFBTWpCLHVEQUFNQSxDQUFDLGVBQWU7WUFDdENrQixVQUFVO1lBQ1ZiO1lBQ0FFO1FBQ0Y7UUFFQSxJQUFJVSxJQUFJRSxFQUFFLEVBQUU7Z0JBRU5DO1lBREosTUFBTUEsVUFBVSxNQUFNbkIsMkRBQVVBO1lBQ2hDLElBQUltQixDQUFBQSxvQkFBQUEsK0JBQUFBLGdCQUFBQSxRQUFTQyxJQUFJLGNBQWJELG9DQUFBQSxjQUFlRSxJQUFJLE1BQUssU0FBUztnQkFDbkNULE9BQU9VLElBQUksQ0FBQztZQUNkLE9BQU87Z0JBQ0xWLE9BQU9VLElBQUksQ0FBQztZQUNkO1FBQ0YsT0FBTztZQUNMYixTQUFTO1FBQ1g7UUFFQUUsZ0JBQWdCO0lBQ2xCO0lBRUEscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBbUQ7Ozs7Ozs4QkFDakUsOERBQUNFO29CQUFLQyxVQUFVZDtvQkFBY1csV0FBVTs7c0NBQ3RDLDhEQUFDSTs0QkFDQ0MsTUFBSzs0QkFDTEMsT0FBTzFCOzRCQUNQMkIsVUFBVSxDQUFDakIsSUFBTVQsU0FBU1MsRUFBRWtCLE1BQU0sQ0FBQ0YsS0FBSzs0QkFDeENHLGFBQVk7NEJBQ1pULFdBQVU7NEJBQ1ZVLFFBQVE7Ozs7OztzQ0FFViw4REFBQ047NEJBQ0NDLE1BQUs7NEJBQ0xDLE9BQU94Qjs0QkFDUHlCLFVBQVUsQ0FBQ2pCLElBQU1QLFlBQVlPLEVBQUVrQixNQUFNLENBQUNGLEtBQUs7NEJBQzNDRyxhQUFZOzRCQUNaVCxXQUFVOzRCQUNWVSxRQUFROzs7Ozs7d0JBRVQxQix1QkFBUyw4REFBQzJCOzRCQUFFWCxXQUFVO3NDQUFvQ2hCOzs7Ozs7c0NBQzNELDhEQUFDNEI7NEJBQ0NQLE1BQUs7NEJBQ0xMLFdBQVcscUdBRVYsT0FEQ2QsZUFBZSxrQ0FBa0M7NEJBRW5EMkIsVUFBVTNCO3NDQUVUQSxlQUFlLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNOUM7R0FsRXdCUDs7UUFLUEQsa0RBQVNBOzs7S0FMRkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9zaWduaW4uanM/ZDM0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaWduSW4sIGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluUGFnZSgpIHtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc1N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJc1N1Ym1pdHRpbmcodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgc2lnbkluKCdjcmVkZW50aWFscycsIHtcclxuICAgICAgcmVkaXJlY3Q6IGZhbHNlLFxyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKCk7XHJcbiAgICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9hZG1pbicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvdXNlcicpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFcnJvcignSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldElzU3VibWl0dGluZyhmYWxzZSk7XHJcbiAgfTsgXHJcbiAgIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS01MDAgdG8tYmx1ZS03MDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3cteGwgcm91bmRlZC1sZyBwLTggdy1mdWxsIG1heC13LXNtIG1kOm1heC13LW1kXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTgwMCB0ZXh0LWNlbnRlclwiPlNpZ24gSW48L2gxPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIm10LTYgc3BhY2UteS00XCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50XCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50XCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQtc20gdGV4dC1jZW50ZXJcIj57ZXJyb3J9PC9wPn1cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIHB5LTIgcm91bmRlZC1sZyBzaGFkb3ctbWQgaG92ZXI6YmctYmx1ZS03MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgJHtcclxuICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmcgPyAnb3BhY2l0eS01MCBjdXJzb3Itbm90LWFsbG93ZWQnIDogJydcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpc1N1Ym1pdHRpbmcgPyAnU2lnbmluZyBJbi4uLicgOiAnU2lnbiBJbid9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSAiXSwibmFtZXMiOlsic2lnbkluIiwiZ2V0U2Vzc2lvbiIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiU2lnbkluUGFnZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyb3IiLCJzZXRFcnJvciIsImlzU3VibWl0dGluZyIsInNldElzU3VibWl0dGluZyIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsInJlZGlyZWN0Iiwib2siLCJzZXNzaW9uIiwidXNlciIsInJvbGUiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInAiLCJidXR0b24iLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth/signin.js\n"));

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/router */ \"./node_modules/next/dist/client/router.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMiLCJtYXBwaW5ncyI6IkFBQUEsNkdBQWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L3JvdXRlci5qcz8xYmI2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9yb3V0ZXInKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/router.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=F%3A%5CAssignments%5CNextjsBnglr%5Cpages%5Cauth%5Csignin.js&page=%2Fauth%2Fsignin!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);