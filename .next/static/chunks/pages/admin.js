/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/admin"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=F%3A%5CAssignments%5CNextjsBnglr%5Cpages%5Cadmin%5Cindex.js&page=%2Fadmin!":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=F%3A%5CAssignments%5CNextjsBnglr%5Cpages%5Cadmin%5Cindex.js&page=%2Fadmin! ***!
  \******************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/admin\",\n      function () {\n        return __webpack_require__(/*! ./pages/admin/index.js */ \"./pages/admin/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/admin\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1GJTNBJTVDQXNzaWdubWVudHMlNUNOZXh0anNCbmdsciU1Q3BhZ2VzJTVDYWRtaW4lNUNpbmRleC5qcyZwYWdlPSUyRmFkbWluISIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLHNEQUF3QjtBQUMvQztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/ODc2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL2FkbWluXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9hZG1pbi9pbmRleC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvYWRtaW5cIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=F%3A%5CAssignments%5CNextjsBnglr%5Cpages%5Cadmin%5Cindex.js&page=%2Fadmin!\n"));

/***/ }),

/***/ "./pages/admin/index.js":
/*!******************************!*\
  !*** ./pages/admin/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst AdminPage = ()=>{\n    _s();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (status === \"loading\") return; // Wait for session check\n        if (!session) {\n            router.push(\"/auth/signin\");\n        } else if (session.user.role !== \"admin\") {\n            router.push(\"/user\");\n        }\n    }, [\n        session,\n        status,\n        router\n    ]);\n    if (!session || session.user.role !== \"admin\") {\n        return null;\n    }\n    const handleLogout = async ()=>{\n        await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)({\n            callbackUrl: \"/auth/signin\"\n        }); // Redirect to sign-in after logout\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col items-center justify-center bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold text-gray-800\",\n                children: \"Admin Dashboard\"\n            }, void 0, false, {\n                fileName: \"F:\\\\Assignments\\\\NextjsBnglr\\\\pages\\\\admin\\\\index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-4 text-gray-600\",\n                children: [\n                    \"Welcome, \",\n                    session.user.email,\n                    \"!\"\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Assignments\\\\NextjsBnglr\\\\pages\\\\admin\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6 bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xl\",\n                    children: \"Admin tools and analytics go here.\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\Assignments\\\\NextjsBnglr\\\\pages\\\\admin\\\\index.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\Assignments\\\\NextjsBnglr\\\\pages\\\\admin\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleLogout,\n                className: \"mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300\",\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"F:\\\\Assignments\\\\NextjsBnglr\\\\pages\\\\admin\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\Assignments\\\\NextjsBnglr\\\\pages\\\\admin\\\\index.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AdminPage, \"IsB+X4/uCtap/BkD4g9WA4/8vZ8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AdminPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdminPage);\nvar _c;\n$RefreshReg$(_c, \"AdminPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRDtBQUNkO0FBQ047QUFFbEMsTUFBTUksWUFBWTs7SUFDaEIsTUFBTSxFQUFFQyxNQUFNQyxPQUFPLEVBQUVDLE1BQU0sRUFBRSxHQUFHUCwyREFBVUE7SUFDNUMsTUFBTVEsU0FBU04sc0RBQVNBO0lBRXhCQyxnREFBU0EsQ0FBQztRQUNSLElBQUlJLFdBQVcsV0FBVyxRQUFRLHlCQUF5QjtRQUUzRCxJQUFJLENBQUNELFNBQVM7WUFDWkUsT0FBT0MsSUFBSSxDQUFDO1FBQ2QsT0FBTyxJQUFJSCxRQUFRSSxJQUFJLENBQUNDLElBQUksS0FBSyxTQUFTO1lBQ3hDSCxPQUFPQyxJQUFJLENBQUM7UUFDZDtJQUNGLEdBQUc7UUFBQ0g7UUFBU0M7UUFBUUM7S0FBTztJQUU1QixJQUFJLENBQUNGLFdBQVdBLFFBQVFJLElBQUksQ0FBQ0MsSUFBSSxLQUFLLFNBQVM7UUFDN0MsT0FBTztJQUNUO0lBRUEsTUFBTUMsZUFBZTtRQUNuQixNQUFNWCx3REFBT0EsQ0FBQztZQUFFWSxhQUFhO1FBQWUsSUFBSSxtQ0FBbUM7SUFDckY7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFtQzs7Ozs7OzBCQUNqRCw4REFBQ0U7Z0JBQUVGLFdBQVU7O29CQUFxQjtvQkFBVVQsUUFBUUksSUFBSSxDQUFDUSxLQUFLO29CQUFDOzs7Ozs7OzBCQUUvRCw4REFBQ0o7Z0JBQUlDLFdBQVU7MEJBRWIsNEVBQUNFO29CQUFFRixXQUFVOzhCQUFVOzs7Ozs7Ozs7OzswQkFJekIsOERBQUNJO2dCQUNDQyxTQUFTUjtnQkFDVEcsV0FBVTswQkFDWDs7Ozs7Ozs7Ozs7O0FBS1A7R0F6Q01YOztRQUM4QkosdURBQVVBO1FBQzdCRSxrREFBU0E7OztLQUZwQkU7QUEyQ04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vaW5kZXguanM/OGMyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduT3V0IH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBBZG1pblBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdGF0dXMgPT09ICdsb2FkaW5nJykgcmV0dXJuOyAvLyBXYWl0IGZvciBzZXNzaW9uIGNoZWNrXHJcblxyXG4gICAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvYXV0aC9zaWduaW4nKTtcclxuICAgIH0gZWxzZSBpZiAoc2Vzc2lvbi51c2VyLnJvbGUgIT09ICdhZG1pbicpIHtcclxuICAgICAgcm91dGVyLnB1c2goJy91c2VyJyk7XHJcbiAgICB9XHJcbiAgfSwgW3Nlc3Npb24sIHN0YXR1cywgcm91dGVyXSk7XHJcblxyXG4gIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXIucm9sZSAhPT0gJ2FkbWluJykge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBzaWduT3V0KHsgY2FsbGJhY2tVcmw6ICcvYXV0aC9zaWduaW4nIH0pOyAvLyBSZWRpcmVjdCB0byBzaWduLWluIGFmdGVyIGxvZ291dFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5LTEwMFwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDBcIj5BZG1pbiBEYXNoYm9hcmQ8L2gxPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJtdC00IHRleHQtZ3JheS02MDBcIj5XZWxjb21lLCB7c2Vzc2lvbi51c2VyLmVtYWlsfSE8L3A+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgYmctd2hpdGUgcC02IHJvdW5kZWQtbGcgc2hhZG93LWxnIHctZnVsbCBtYXgtdy00eGxcIj5cclxuICAgICAgICB7LyogQWRtaW4tc3BlY2lmaWMgY29udGVudCAqL31cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+QWRtaW4gdG9vbHMgYW5kIGFuYWx5dGljcyBnbyBoZXJlLjwvcD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogTG9nb3V0IGJ1dHRvbiAqL31cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH1cclxuICAgICAgICBjbGFzc05hbWU9XCJtdC02IHB4LTQgcHktMiBiZy1yZWQtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1sZyBob3ZlcjpiZy1yZWQtNjAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwXCJcclxuICAgICAgPlxyXG4gICAgICAgIExvZ291dFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pblBhZ2U7XHJcbiAiXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsInNpZ25PdXQiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJBZG1pblBhZ2UiLCJkYXRhIiwic2Vzc2lvbiIsInN0YXR1cyIsInJvdXRlciIsInB1c2giLCJ1c2VyIiwicm9sZSIsImhhbmRsZUxvZ291dCIsImNhbGxiYWNrVXJsIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiZW1haWwiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin/index.js\n"));

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
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=F%3A%5CAssignments%5CNextjsBnglr%5Cpages%5Cadmin%5Cindex.js&page=%2Fadmin!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);