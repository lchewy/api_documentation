/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json */ \"./json/index.js\");\n\n\nwindow.onload = () => {\n  const ui = SwaggerUIBundle({\n    validatirUrl: undefined,\n    spec: _json__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    dom_id: \"#swagger-ui\",\n    deepLinking: true,\n    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],\n    plugins: [SwaggerUIBundle.plugins.DownloadUrl],\n    layout: \"StandaloneLayout\"\n  });\n\n  window.ui = ui;\n};\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./json/definitions/ArrayOfIntegers.js":
/*!*********************************************!*\
  !*** ./json/definitions/ArrayOfIntegers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Int32__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Int32 */ \"./json/definitions/Int32.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    type: \"array\",\n    items: _Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  });\n\n//# sourceURL=webpack:///./json/definitions/ArrayOfIntegers.js?");

/***/ }),

/***/ "./json/definitions/Formations.js":
/*!****************************************!*\
  !*** ./json/definitions/Formations.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Int32__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Int32 */ \"./json/definitions/Int32.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  type: \"object\",\n  properties: {\n    type: { type: \"string\" },\n    num_plays_lined_up: _Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    num_plays_lined_up_pct: { type: \"number\", format: \"float\" },\n    num_plays_lined_up_rnk: _Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    yards_play: { type: \"number\", format: \"float\" },\n    tds: _Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    tds_rnk: _Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    tds_rnk_desc: { type: \"string\" },\n    tds_rnk_img: { type: \"string\" }\n  }\n});\n\n\n\n//# sourceURL=webpack:///./json/definitions/Formations.js?");

/***/ }),

/***/ "./json/definitions/IdNameAlias.js":
/*!*****************************************!*\
  !*** ./json/definitions/IdNameAlias.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    type: \"object\",\n    properties: {\n      id: { type: \"string\" },\n      name: { type: \"string\" },\n      alias: { type: \"string\" }\n    }\n  });\n\n//# sourceURL=webpack:///./json/definitions/IdNameAlias.js?");

/***/ }),

/***/ "./json/definitions/Int32.js":
/*!***********************************!*\
  !*** ./json/definitions/Int32.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ type: \"integer\", format: \"int32\" });\n\n//# sourceURL=webpack:///./json/definitions/Int32.js?");

/***/ }),

/***/ "./json/definitions/PlayerTeam.js":
/*!****************************************!*\
  !*** ./json/definitions/PlayerTeam.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    type: \"object\",\n    properties: {\n      id: { type: \"string\" },\n      name: { type: \"string\" },\n      market: { type: \"string\" },\n      alias: { type: \"string\" }\n    }\n  });\n\n//# sourceURL=webpack:///./json/definitions/PlayerTeam.js?");

/***/ }),

/***/ "./json/definitions/Zone.js":
/*!**********************************!*\
  !*** ./json/definitions/Zone.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Int32__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Int32 */ \"./json/definitions/Int32.js\");\n/* harmony import */ var _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArrayOfIntegers */ \"./json/definitions/ArrayOfIntegers.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  type: \"object\",\n  properties: {\n    type: { type: \"string\", pattern: \"/^(3-zone)$|^(4-zone)$|^(12-zone)$/\" },\n    reception_desc: { type: \"string\" },\n    reception_img: { type: \"string\" },\n    reception_backfield: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    reception_0_10: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    reception_10_20: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    reception_20_plus: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    reception: _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    target_desc: { type: \"string\" },\n    target_img: { type: \"string\" },\n    target_backfield: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    target_0_10: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    target_10_20: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    target_20_plus: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    target: _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    reception_rate_desc: { type: \"string\" },\n    reception_rate_img: { type: \"string\" },\n    reception_rate_backfield: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    reception_rate_0_10: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    reception_rate_10_20: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    reception_rate_20_plus: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    yards_per_reception_desc: { type: \"string\" },\n    yards_per_reception_img: { type: \"string\" },\n    yards_per_reception_backfield: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    yards_per_reception_0_10: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    yards_per_reception_10_20: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    yards_per_reception_20_plus: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    reception_rate: _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    yards_per_target_desc: { type: \"string\" },\n    yards_per_target_img: { type: \"string\" },\n    yards_per_target_backfield: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    yards_per_target_0_10: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    yards_per_target_10_20: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    yards_per_target_20_plus: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    yards_per_target: _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }\n});\n\n\n//# sourceURL=webpack:///./json/definitions/Zone.js?");

/***/ }),

/***/ "./json/definitions/index.js":
/*!***********************************!*\
  !*** ./json/definitions/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Formations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Formations */ \"./json/definitions/Formations.js\");\n/* harmony import */ var _PlayerTeam__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerTeam */ \"./json/definitions/PlayerTeam.js\");\n/* harmony import */ var _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArrayOfIntegers */ \"./json/definitions/ArrayOfIntegers.js\");\n/* harmony import */ var _Int32__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Int32 */ \"./json/definitions/Int32.js\");\n/* harmony import */ var _IdNameAlias__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IdNameAlias */ \"./json/definitions/IdNameAlias.js\");\n/* harmony import */ var _Zone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Zone */ \"./json/definitions/Zone.js\");\n\n\n\n\n\n\n\nconst definitions =  {\n    Formations: _Formations__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    PlayerTeam: _PlayerTeam__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    ArrayOfIntegers: _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    INT32: _Int32__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    IdNameAlias: _IdNameAlias__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    Zone: _Zone__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (definitions);\n\n\n//# sourceURL=webpack:///./json/definitions/index.js?");

/***/ }),

/***/ "./json/index.js":
/*!***********************!*\
  !*** ./json/index.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path */ \"./json/path/index.js\");\n/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ \"./json/definitions/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  swagger: \"2.0\",\n  info: {\n    description: \"NFL data\",\n    version: \"1.0.0\",\n    title: \"NFL Data\",\n    termsOfService: \"http://swagger.io/terms/\",\n    contact: { email: \"apiteam@swagger.io\" },\n    license: {\n      name: \"Apache 2.0\",\n      url: \"http://www.apache.org/licenses/LICENSE-2.0.html\"\n    }\n  },\n  host: \"localhost:2000/api\",\n  basePath: \"/v1\",\n  tags: [\n    {\n      name: \"NFL\",\n      description: \"NFL stuff\",\n      externalDocs: {\n        description: \"Find out more\",\n        url: \"http://nfl.com\"\n      }\n    }\n  ],\n  schemes: [\"http\", \"https\"],\n  paths: _path__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  definitions: _definitions__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n\n  externalDocs: {\n    description: \"Find out more about Swagger\",\n    url: \"http://swagger.io\"\n  }\n});\n\n\n//# sourceURL=webpack:///./json/index.js?");

/***/ }),

/***/ "./json/path/index.js":
/*!****************************!*\
  !*** ./json/path/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./json/path/player/index.js\");\n/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./team */ \"./json/path/team/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  \"/en_US/NFL/player/{playerId}\": _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  \"/en_US/NFL/team/{teamId}\": _team__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n\n//# sourceURL=webpack:///./json/path/index.js?");

/***/ }),

/***/ "./json/path/player/draft.js":
/*!***********************************!*\
  !*** ./json/path/player/draft.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _definitions_Int32__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../definitions/Int32 */ \"./json/definitions/Int32.js\");\n/* harmony import */ var _definitions_PlayerTeam__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../definitions/PlayerTeam */ \"./json/definitions/PlayerTeam.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  type: \"object\",\n  properties: {\n    year: _definitions_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    round: _definitions_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    number: _definitions_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    team: _definitions_PlayerTeam__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }\n});\n\n\n//# sourceURL=webpack:///./json/path/player/draft.js?");

/***/ }),

/***/ "./json/path/player/index.js":
/*!***********************************!*\
  !*** ./json/path/player/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _definitions_PlayerTeam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../definitions/PlayerTeam */ \"./json/definitions/PlayerTeam.js\");\n/* harmony import */ var _draft__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draft */ \"./json/path/player/draft.js\");\n/* harmony import */ var _statistics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statistics */ \"./json/path/player/statistics.js\");\n/* harmony import */ var _definitions_Int32__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../definitions/Int32 */ \"./json/definitions/Int32.js\");\n\n\n\n\nconst responseProps = {\n  // success: { type: \"boolean\" },\n  // response: {\n  //   type: \"object\",\n  //   properties: {\n  //     player: {\n  //       type: \"object\",\n  //       properties: {\n player:{ id: { type: \"string\" },\n  last_name: { type: \"string\" },\n  first_name: { type: \"string\" },\n  birth_date: { type: \"string\" },\n  weight: _definitions_Int32__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  height: _definitions_Int32__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  position: { type: \"string\" },\n  birth_place: { type: \"string\" },\n  high_school: { type: \"string\" },\n  college: { type: \"string\" },\n  college_conf: { type: \"string\" },\n  rookie_year: _definitions_Int32__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  team: _definitions_PlayerTeam__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  draft: _draft__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  statistics: _statistics__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}\n};\n//     }\n//   }\n// }\n// };\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  get: {\n    tags: [\"NFL\"],\n    summary: \"a player's season data\",\n    description: \"return an individual player's stat in NFL\",\n    operationId: \"getPlayerById\",\n    produces: [\"application/json\"],\n    parameters: [\n      {\n        name: \"playerId\",\n        in: \"path\",\n        description: \"a player's id from SR model\",\n        type: \"string\",\n        required: true\n      }\n    ],\n    responses: {\n      \"200\": {\n        description: \"successful operations\",\n        schema: {\n          type: \"object\",\n          properties: {\n            success: { type: \"boolean\" },\n            response: {\n              type: \"object\",\n              properties:  responseProps\n\n            }\n          }\n        }\n      },\n      \"400\": { description: \"Invalid ID supplied\" },\n      \"404\": { description: \"Player not found\" }\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./json/path/player/index.js?");

/***/ }),

/***/ "./json/path/player/statistics.js":
/*!****************************************!*\
  !*** ./json/path/player/statistics.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _definitions_Int32__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../definitions/Int32 */ \"./json/definitions/Int32.js\");\n/* harmony import */ var _definitions_Zone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../definitions/Zone */ \"./json/definitions/Zone.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  type: \"object\",\n  properties: {\n    offense: {\n      type: \"object\",\n      properties: {\n        player_run: {\n          type: \"object\",\n          properties: {\n            player_name: { type: \"string\" },\n            left_pct: { type: \"number\", format: \"float\" },\n            left_yard_per_run: { type: \"string\" },\n            right_pct: { type: \"number\", format: \"float\" },\n            right_yard_per_run: { type: \"string\" },\n            player_total_runs_across_all_zones: _definitions_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n            outside_left_pct: _definitions_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n            outside_left_ypc: {\n              type: \"number\",\n              format: \"float\"\n            },\n            between_the_tackles_pct: _definitions_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n            between_the_tackles_ypc: _definitions_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n            outside_right_pct: _definitions_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n            outside_right_ypc: {\n              type: \"number\",\n              format: \"float\"\n            },\n            outside_between_tackles_text_desc: {\n              type: \"string\"\n            }\n          }\n        },\n        league_run: {\n          type: \"object\",\n          properties: {\n            outside_left_pct: _definitions_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n            outside_left_ypc: {\n              type: \"number\",\n              format: \"float\"\n            },\n            between_the_tackles_pct: _definitions_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n            between_the_tackles_ypc: {\n              type: \"number\",\n              format: \"float\"\n            },\n            outside_right_pct: _definitions_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n            outside_right_ypc: {\n              type: \"number\",\n              format: \"float\"\n            }\n          }\n        },\n        zone: _definitions_Zone__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n      }\n    },\n    most_run_routes: { type: \"array\" },\n    routes: {\n      type: \"array\",\n      items: {\n        type: \"object\",\n        properties: {\n          season: _definitions_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n          date_string: { type: \"string\" },\n          player_positon: { type: \"string\" },\n          targets: _definitions_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n          receptions: _definitions_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n          total_yards: _definitions_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n          touchdowns: _definitions_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n          game_ID: {\n            type: \"array\",\n            items: _definitions_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n          },\n          routes: {\n            type: \"array\",\n            items: {\n              type: \"object\",\n              properties: {\n                pass_caught: { type: \"boolean\" },\n                yardage_gained: _definitions_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n                play_ID: _definitions_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n                pass_caught_index: _definitions_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n                touchdown: { type: \"boolean\" },\n                coords: {\n                  type: \"array\",\n                  items: {\n                    type: \"object\",\n                    properties: {\n                      x: { type: \"number\", format: \"float\" },\n                      y: { type: \"number\", format: \"float\" }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./json/path/player/statistics.js?");

/***/ }),

/***/ "./json/path/team/index.js":
/*!*********************************!*\
  !*** ./json/path/team/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _definitions_IdNameAlias__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../definitions/IdNameAlias */ \"./json/definitions/IdNameAlias.js\");\n/* harmony import */ var _definitions_Formations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../definitions/Formations */ \"./json/definitions/Formations.js\");\n/* harmony import */ var _definitions_Zone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../definitions/Zone */ \"./json/definitions/Zone.js\");\n\n\n\n\nconst responseProps = {\n    success: { type: \"boolean\" },\n    response: {\n      type: \"object\",\n      properties: {\n        team: {\n          allOf: [_definitions_IdNameAlias__WEBPACK_IMPORTED_MODULE_0__[\"default\"], { properties: { market: { type: \"string\" } } }]\n        },\n        conference: _definitions_IdNameAlias__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        division: _definitions_IdNameAlias__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        venue: {\n          type: \"object\",\n          properties: {\n            id: { type: \"string\" },\n            name: { type: \"string\" },\n            city: { type: \"string\" },\n            state: { type: \"string\" },\n            country: { type: \"string\" },\n            zip: { type: \"string\" },\n            address: { type: \"string\" },\n            capacity: { type: \"integer\" },\n            surface: { type: \"string\" },\n            roof_type: { type: \"string\" }\n          }\n        },\n        statistics: {\n          type: \"object\",\n          properties: {\n            offense: {\n              type: \"object\",\n              properties: {\n                formation: {\n                  type: \"array\",\n                  items: _definitions_Formations__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n                },\n                zone: {\n                  type: \"array\",\n                  items: _definitions_Zone__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n                }\n              }\n            }\n          }\n        },\n        defense: {\n          type: \"object\",\n          properties: {\n            formation: {\n              type: \"array\",\n              items: _definitions_Formations__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n            },\n            zone: {\n              type: \"array\",\n              items: _definitions_Zone__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n            }\n          }\n        }\n      }\n    }\n  };\n  \n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  get: {\n    tags: [\"NFL\"],\n    summary: \"a NFL team single season data\",\n    description: \"statistics for a single NFL team\",\n    operationId: \"getTeamById\",\n    produces: [\"application/json\"],\n    parameters: [\n      {\n        name: \"teamId\",\n        in: \"path\",\n        description: \"provide team id from SR model\",\n        type: \"string\",\n        // schema: { $ref: \"#/definitions/Team\" },\n        required: true\n      }\n    ],\n    responses: {\n      \"200\": {\n        description: \"successful operations\",\n        schema: {\n          type: \"object\",\n\n          properties: responseProps\n          // {\n          //   success: { type: \"boolean\" },\n          //   response: {\n          //     type: \"object\",\n          //     properties: responseProps\n          //   }\n          // }\n        }\n      },\n      \"400\": { description: \"Invalid Id supplied\" },\n      \"404\": { description: \"Team not found\" }\n    }\n  }\n});\n\n\n\n//# sourceURL=webpack:///./json/path/team/index.js?");

/***/ })

/******/ });