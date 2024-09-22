"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5C%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5C%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\auth\\[...nextauth].js */ \"(api)/./pages/api/auth/[...nextauth].js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/auth/[...nextauth]\",\n        pathname: \"/api/auth/[...nextauth]\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYXBpJTVDYXV0aCU1QyU1Qi4uLm5leHRhdXRoJTVELmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQ2lFO0FBQ2pFO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyx3REFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsd0RBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzYm5nbHIvPzNjZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNBUElSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3BhZ2VzXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF0uanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiBcIlwiLFxuICAgICAgICBmaWxlbmFtZTogXCJcIlxuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5C%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./lib/dbConnect.js":
/*!**************************!*\
  !*** ./lib/dbConnect.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst dbConnect = async ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState >= 1) return;\n    return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGJDb25uZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxZQUFZO0lBQ2hCLElBQUlELDREQUFtQixDQUFDRyxVQUFVLElBQUksR0FBRztJQUN6QyxPQUFPSCx1REFBZ0IsQ0FBQ0ssUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0FBQ2pEO0FBRUEsaUVBQWVOLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNibmdsci8uL2xpYi9kYkNvbm5lY3QuanM/MWQzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgZGJDb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUgPj0gMSkgcmV0dXJuO1xyXG4gIHJldHVybiBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDtcclxuICJdLCJuYW1lcyI6WyJtb25nb29zZSIsImRiQ29ubmVjdCIsImNvbm5lY3Rpb24iLCJyZWFkeVN0YXRlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/dbConnect.js\n");

/***/ }),

/***/ "(api)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    email: {\n        type: String,\n        required: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    role: {\n        type: String,\n        enum: [\n            \"admin\",\n            \"user\"\n        ],\n        default: \"user\"\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFDO0lBQ3JDRyxPQUFPO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN0Q0MsVUFBVTtRQUFFSCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDekNFLE1BQU07UUFBRUosTUFBTUM7UUFBUUksTUFBTTtZQUFDO1lBQVM7U0FBTztRQUFFQyxTQUFTO0lBQU87QUFDakU7QUFFQSxpRUFBZVYsd0RBQWUsQ0FBQ1ksSUFBSSxJQUFJWixxREFBYyxDQUFDLFFBQVFDLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNibmdsci8uL21vZGVscy9Vc2VyLmpzPzczNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgcGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIHJvbGU6IHsgdHlwZTogU3RyaW5nLCBlbnVtOiBbJ2FkbWluJywgJ3VzZXInXSwgZGVmYXVsdDogJ3VzZXInIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ1VzZXInLCBVc2VyU2NoZW1hKTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiVXNlclNjaGVtYSIsIlNjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJyb2xlIiwiZW51bSIsImRlZmF1bHQiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/dbConnect */ \"(api)/./lib/dbConnect.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_4__);\n // Import NextAuth\n // Import CredentialsProvider\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            async authorize (credentials) {\n                await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n                    email: credentials.email\n                });\n                if (!user) {\n                    throw new Error(\"No user found with this email\");\n                }\n                const isValidPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_4___default().compare(credentials.password, user.password);\n                if (!isValidPassword) {\n                    throw new Error(\"Invalid email or password\");\n                }\n                // Return only the necessary user data\n                return {\n                    email: user.email,\n                    role: user.role\n                };\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/auth/signin\"\n    },\n    secret: process.env.NEXTAUTH_SECRET,\n    callbacks: {\n        async jwt ({ token, user }) {\n            // Add the user role to the token if the user is available\n            if (user) {\n                token.role = user.role;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            // Pass the user role to the session\n            session.user.role = token.role;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpQyxDQUFDLGtCQUFrQjtBQUNjLENBQUMsNkJBQTZCO0FBQ3hEO0FBQ087QUFDakI7QUFFOUIsaUVBQWVBLGdEQUFRQSxDQUFDO0lBQ3RCSyxXQUFXO1FBQ1RKLHNFQUFtQkEsQ0FBQztZQUNsQixNQUFNSyxXQUFVQyxXQUFXO2dCQUN6QixNQUFNSiwwREFBU0E7Z0JBRWYsTUFBTUssT0FBTyxNQUFNTiw0REFBWSxDQUFDO29CQUFFUSxPQUFPSCxZQUFZRyxLQUFLO2dCQUFDO2dCQUUzRCxJQUFJLENBQUNGLE1BQU07b0JBQ1QsTUFBTSxJQUFJRyxNQUFNO2dCQUNsQjtnQkFFQSxNQUFNQyxrQkFBa0IsTUFBTVIsdURBQWMsQ0FBQ0csWUFBWU8sUUFBUSxFQUFFTixLQUFLTSxRQUFRO2dCQUNoRixJQUFJLENBQUNGLGlCQUFpQjtvQkFDcEIsTUFBTSxJQUFJRCxNQUFNO2dCQUNsQjtnQkFFQSxzQ0FBc0M7Z0JBQ3RDLE9BQU87b0JBQUVELE9BQU9GLEtBQUtFLEtBQUs7b0JBQUVLLE1BQU1QLEtBQUtPLElBQUk7Z0JBQUM7WUFDOUM7UUFDRjtLQUNEO0lBQ0RDLE9BQU87UUFDTEMsUUFBUTtJQUNWO0lBQ0FDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtJQUVuQ0MsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFaEIsSUFBSSxFQUFFO1lBQ3ZCLDBEQUEwRDtZQUMxRCxJQUFJQSxNQUFNO2dCQUNSZ0IsTUFBTVQsSUFBSSxHQUFHUCxLQUFLTyxJQUFJO1lBQ3hCO1lBQ0EsT0FBT1M7UUFDVDtRQUNBLE1BQU1DLFNBQVEsRUFBRUEsT0FBTyxFQUFFRCxLQUFLLEVBQUU7WUFDOUIsb0NBQW9DO1lBQ3BDQyxRQUFRakIsSUFBSSxDQUFDTyxJQUFJLEdBQUdTLE1BQU1ULElBQUk7WUFDOUIsT0FBT1U7UUFDVDtJQUNGO0FBQ0YsRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzYm5nbHIvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7IC8vIEltcG9ydCBOZXh0QXV0aFxyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJzsgLy8gSW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXJcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL1VzZXInO1xyXG5pbXBvcnQgZGJDb25uZWN0IGZyb20gJy4uLy4uLy4uL2xpYi9kYkNvbm5lY3QnO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcclxuICAgICAgICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCB9KTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHVzZXIgZm91bmQgd2l0aCB0aGlzIGVtYWlsJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpc1ZhbGlkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShjcmVkZW50aWFscy5wYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XHJcbiAgICAgICAgaWYgKCFpc1ZhbGlkUGFzc3dvcmQpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmV0dXJuIG9ubHkgdGhlIG5lY2Vzc2FyeSB1c2VyIGRhdGFcclxuICAgICAgICByZXR1cm4geyBlbWFpbDogdXNlci5lbWFpbCwgcm9sZTogdXNlci5yb2xlIH07XHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHBhZ2VzOiB7XHJcbiAgICBzaWduSW46ICcvYXV0aC9zaWduaW4nLFxyXG4gIH0sXHJcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXHJcblxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xyXG4gICAgICAvLyBBZGQgdGhlIHVzZXIgcm9sZSB0byB0aGUgdG9rZW4gaWYgdGhlIHVzZXIgaXMgYXZhaWxhYmxlXHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgdG9rZW4ucm9sZSA9IHVzZXIucm9sZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuICAgICAgLy8gUGFzcyB0aGUgdXNlciByb2xlIHRvIHRoZSBzZXNzaW9uXHJcbiAgICAgIHNlc3Npb24udXNlci5yb2xlID0gdG9rZW4ucm9sZTtcclxuICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4gICJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJVc2VyIiwiZGJDb25uZWN0IiwiYmNyeXB0IiwicHJvdmlkZXJzIiwiYXV0aG9yaXplIiwiY3JlZGVudGlhbHMiLCJ1c2VyIiwiZmluZE9uZSIsImVtYWlsIiwiRXJyb3IiLCJpc1ZhbGlkUGFzc3dvcmQiLCJjb21wYXJlIiwicGFzc3dvcmQiLCJyb2xlIiwicGFnZXMiLCJzaWduSW4iLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJzZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5C%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();