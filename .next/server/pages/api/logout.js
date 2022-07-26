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
exports.id = "pages/api/logout";
exports.ids = ["pages/api/logout"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/logout.ts":
/*!*****************************!*\
  !*** ./pages/api/logout.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { token  } = req.cookies;\n    if (token) {\n        token.set(\"testtoken\", {\n            expires: Date.now()\n        });\n    } else {\n        res.json({});\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9nb3V0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUM2QztBQUM3QyxNQUFNQyxNQUFNLEdBQUcsSUFBSUQsd0RBQVksRUFBRTtBQUVqQyxpRUFBZSxPQUFPRSxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUNqQyxNQUFNLEVBQUVDLEtBQUssR0FBRSxHQUFHRixHQUFHLENBQUNHLE9BQU87SUFFN0IsSUFBSUQsS0FBSyxFQUFFO1FBRVBBLEtBQUssQ0FBQ0UsR0FBRyxDQUFDLFdBQVcsRUFBRTtZQUFDQyxPQUFPLEVBQUVDLElBQUksQ0FBQ0MsR0FBRyxFQUFFO1NBQUMsQ0FBQyxDQUFDO0tBQ2pELE1BQU07UUFDTE4sR0FBRyxDQUFDTyxJQUFJLENBQUMsRUFBRSxDQUFDO0tBQ2I7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Z1bGxzdGFjay10d2l0dGVyLWNsb25lLy4vcGFnZXMvYXBpL2xvZ291dC50cz8xMzgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiXHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgeyB0b2tlbiB9ID0gcmVxLmNvb2tpZXNcclxuXHJcbiAgaWYgKHRva2VuKSB7XHJcbiAgXHJcbiAgICAgIHRva2VuLnNldCgndGVzdHRva2VuJywge2V4cGlyZXM6IERhdGUubm93KCl9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLmpzb24oe30pXHJcbiAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwicmVxIiwicmVzIiwidG9rZW4iLCJjb29raWVzIiwic2V0IiwiZXhwaXJlcyIsIkRhdGUiLCJub3ciLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/logout.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/logout.ts"));
module.exports = __webpack_exports__;

})();