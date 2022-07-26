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
exports.id = "pages/api/feed";
exports.ids = ["pages/api/feed"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/feed.ts":
/*!***************************!*\
  !*** ./pages/api/feed.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const tweets = await prisma.tweet.findMany({\n        orderBy: {\n            createdAt: \"desc\"\n        },\n        include: {\n            author: true\n        }\n    });\n    res.json(tweets);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmVlZC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFDN0MsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFZLEVBQUU7QUFFakMsaUVBQWUsT0FBT0UsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDakMsTUFBTUMsTUFBTSxHQUFHLE1BQU1ILE1BQU0sQ0FBQ0ksS0FBSyxDQUFDQyxRQUFRLENBQUM7UUFDekNDLE9BQU8sRUFBRTtZQUFFQyxTQUFTLEVBQUUsTUFBTTtTQUFFO1FBQzlCQyxPQUFPLEVBQUU7WUFBRUMsTUFBTSxFQUFFLElBQUk7U0FBRTtLQUMxQixDQUFDO0lBQ0ZQLEdBQUcsQ0FBQ1EsSUFBSSxDQUFDUCxNQUFNLENBQUM7Q0FDakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdWxsc3RhY2stdHdpdHRlci1jbG9uZS8uL3BhZ2VzL2FwaS9mZWVkLnRzP2JkZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCB0d2VldHMgPSBhd2FpdCBwcmlzbWEudHdlZXQuZmluZE1hbnkoe1xyXG4gICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXHJcbiAgICBpbmNsdWRlOiB7IGF1dGhvcjogdHJ1ZSB9LFxyXG4gIH0pXHJcbiAgcmVzLmpzb24odHdlZXRzKVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwicmVxIiwicmVzIiwidHdlZXRzIiwidHdlZXQiLCJmaW5kTWFueSIsIm9yZGVyQnkiLCJjcmVhdGVkQXQiLCJpbmNsdWRlIiwiYXV0aG9yIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/feed.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/feed.ts"));
module.exports = __webpack_exports__;

})();