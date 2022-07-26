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
exports.id = "pages/api/me";
exports.ids = ["pages/api/me"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "(api)/./pages/api/me.ts":
/*!*************************!*\
  !*** ./pages/api/me.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { token  } = req.cookies;\n    if (token) {\n        const { id , username  } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.JWT_SECRET);\n        const me = await prisma.user.findUnique({\n            where: {\n                id\n            }\n        });\n        res.json(me);\n    } else {\n        res.json({});\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEI7QUFDZTtBQUM3QyxNQUFNRSxNQUFNLEdBQUcsSUFBSUQsd0RBQVksRUFBRTtBQUVqQyxpRUFBZSxPQUFPRSxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUNqQyxNQUFNLEVBQUVDLEtBQUssR0FBRSxHQUFHRixHQUFHLENBQUNHLE9BQU87SUFFN0IsSUFBSUQsS0FBSyxFQUFFO1FBQ1QsTUFBTSxFQUFFRSxFQUFFLEdBQUVDLFFBQVEsR0FBRSxHQUFHUiwwREFBVSxDQUFDSyxLQUFLLEVBQUVLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7UUFDbEUsTUFBTUMsRUFBRSxHQUFHLE1BQU1YLE1BQU0sQ0FBQ1ksSUFBSSxDQUFDQyxVQUFVLENBQUM7WUFBRUMsS0FBSyxFQUFFO2dCQUFFVCxFQUFFO2FBQUU7U0FBRSxDQUFDO1FBQzFESCxHQUFHLENBQUNhLElBQUksQ0FBQ0osRUFBRSxDQUFDO0tBQ2IsTUFBTTtRQUNMVCxHQUFHLENBQUNhLElBQUksQ0FBQyxFQUFFLENBQUM7S0FDYjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnVsbHN0YWNrLXR3aXR0ZXItY2xvbmUvLi9wYWdlcy9hcGkvbWUudHM/N2MyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIlxyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHsgdG9rZW4gfSA9IHJlcS5jb29raWVzXHJcblxyXG4gIGlmICh0b2tlbikge1xyXG4gICAgY29uc3QgeyBpZCwgdXNlcm5hbWUgfSA9IGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQpXHJcbiAgICBjb25zdCBtZSA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZCB9IH0pXHJcbiAgICByZXMuanNvbihtZSlcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLmpzb24oe30pXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbImp3dCIsIlByaXNtYUNsaWVudCIsInByaXNtYSIsInJlcSIsInJlcyIsInRva2VuIiwiY29va2llcyIsImlkIiwidXNlcm5hbWUiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsIm1lIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/me.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/me.ts"));
module.exports = __webpack_exports__;

})();