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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swagger_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swagger.json */ \"./swagger.json\");\nvar _swagger_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./swagger.json */ \"./swagger.json\", 1);\n/* harmony import */ var _json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json */ \"./json/index.js\");\n\n\n\n\nconsole.log(\"KDASDFADSF \",_json__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n\nwindow.onload = () =>{\n    const ui = SwaggerUIBundle({\n        validatirUrl:undefined,\n        spec: _json__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        dom_id: '#swagger-ui',\n        deepLinking: true,\n        presets: [\n          SwaggerUIBundle.presets.apis,\n          SwaggerUIStandalonePreset\n        ],\n        plugins: [\n          SwaggerUIBundle.plugins.DownloadUrl\n        ],\n        layout: \"StandaloneLayout\"\n      })\n\n      window.ui = ui\n}\n\n//# sourceURL=webpack:///./index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Int32__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Int32 */ \"./json/definitions/Int32.js\");\n/* harmony import */ var _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArrayOfIntegers */ \"./json/definitions/ArrayOfIntegers.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  type: \"object\",\n  properties: {\n    type: { type: \"string\", pattern: \"\" },\n    reception_desc: { type: \"string\" },\n    reception_img: { type: \"string\" },\n    reception_backfield: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    reception_0_10: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    reception_10_20: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    reception_20_plus: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    reception: _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    target_desc: { type: \"string\" },\n    target_img: { type: \"string\" },\n    target_backfield: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    target_0_10: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    target_10_20: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    target_20_plus: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    target: _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    reception_rate_desc: { type: \"string\" },\n    reception_rate_img: { type: \"string\" },\n    reception_rate_backfield: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    reception_rate_0_10: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    reception_rate_10_20: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    reception_rate_20_plus: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    yards_per_reception_desc: { type: \"string\" },\n    yards_per_reception_img: { type: \"string\" },\n    yards_per_reception_backfield: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    yards_per_reception_0_10: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    yards_per_reception_10_20: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    yards_per_reception_20_plus: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    reception_rate: _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    yards_per_target_desc: { type: \"string\" },\n    yards_per_target_img: { type: \"string\" },\n    yards_per_target_backfield: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    yards_per_target_0_10: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    yards_per_target_10_20: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    yards_per_target_20_plus: {\n      oneOf: [_Int32__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n    },\n    yards_per_target: _ArrayOfIntegers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }\n});\n\n\n//# sourceURL=webpack:///./json/definitions/Zone.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _definitions_PlayerTeam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../definitions/PlayerTeam */ \"./json/definitions/PlayerTeam.js\");\n/* harmony import */ var _draft__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draft */ \"./json/path/player/draft.js\");\n/* harmony import */ var _statistics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statistics */ \"./json/path/player/statistics.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  get: {\n    tags: [\"NFL\"],\n    summary: \"a player's season data\",\n    description: \"return an individual player's stat in NFL\",\n    operationId: \"getPlayerById\",\n    produces: [\"application/json\"],\n    parameters: [\n      {\n        name: \"playerId\",\n        in: \"path\",\n        description: \"a player's id from SR model\",\n        type: \"string\",\n        required: true\n      }\n    ],\n    responses: {\n      \"200\": {\n        description: \"successful operations\",\n        schema: {\n          type: \"object\",\n          properties: {\n            success: { type: \"boolean\" },\n            response: {\n              type: \"object\",\n              properties: {\n                type: \"object\",\n                properties: {\n                  id: { type: \"string\" },\n                  last_name: { type: \"string\" },\n                  first_name: { type: \"string\" },\n                  birth_date: { type: \"string\" },\n                  weight: { type: \"integer\" },\n                  height: { type: \"integer\" },\n                  position: { type: \"string\" },\n                  birth_place: { type: \"string\" },\n                  high_school: { type: \"string\" },\n                  college: { type: \"string\" },\n                  college_conf: { type: \"string\" },\n                  rookie_year: { type: \"string\" },\n                  team: _definitions_PlayerTeam__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n                  draft: _draft__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                  statistics: _statistics__WEBPACK_IMPORTED_MODULE_2__[\"default\"] \n                }\n              }\n            }\n          }\n        }\n      },\n      \"400\": { description: \"Invalid ID supplied\" },\n      \"404\": { description: \"Player not found\" }\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./json/path/player/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _definitions_IdNameAlias__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../definitions/IdNameAlias */ \"./json/definitions/IdNameAlias.js\");\n/* harmony import */ var _definitions_Formations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../definitions/Formations */ \"./json/definitions/Formations.js\");\n/* harmony import */ var _definitions_Zone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../definitions/Zone */ \"./json/definitions/Zone.js\");\n\n\n\n\nconst responseProps = {\n    success: { type: \"boolean\" },\n    response: {\n      type: \"object\",\n      properties: {\n        team: {\n          allOf: [_definitions_IdNameAlias__WEBPACK_IMPORTED_MODULE_0__[\"default\"], { properties: { market: { type: \"string\" } } }]\n        },\n        conference: _definitions_IdNameAlias__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        division: _definitions_IdNameAlias__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        venue: {\n          type: \"object\",\n          properties: {\n            id: { type: \"string\" },\n            name: { type: \"string\" },\n            city: { type: \"string\" },\n            state: { type: \"string\" },\n            country: { type: \"string\" },\n            zip: { type: \"string\" },\n            address: { type: \"string\" },\n            capacity: { type: \"integer\" },\n            surface: { type: \"string\" },\n            roof_type: { type: \"string\" }\n          }\n        },\n        statistics: {\n          type: \"object\",\n          properties: {\n            offense: {\n              type: \"object\",\n              properties: {\n                formation: {\n                  type: \"array\",\n                  items: _definitions_Formations__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n                },\n                zone: {\n                  type: \"array\",\n                  items: _definitions_Zone__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n                }\n              }\n            }\n          }\n        },\n        defense: {\n          type: \"object\",\n          properties: {\n            formation: {\n              type: \"array\",\n              items: _definitions_Formations__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n            },\n            zone: {\n              type: \"array\",\n              items: _definitions_Zone__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n            }\n          }\n        }\n      }\n    }\n  };\n  \n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  get: {\n    tags: [\"NFL\"],\n    summary: \"a NFL team single season data\",\n    description: \"statistics for a single NFL team\",\n    operationId: \"getTeamById\",\n    produces: [\"application/json\"],\n    parameters: [\n      {\n        name: \"teamId\",\n        in: \"path\",\n        description: \"provide team id from SR model\",\n        type: \"string\",\n        // schema: { $ref: \"#/definitions/Team\" },\n        required: true\n      }\n    ],\n    responses: {\n      \"200\": {\n        description: \"successful operations\",\n        schema: {\n          type: \"object\",\n\n          properties: {\n            success: { type: \"boolean\" },\n            response: {\n              type: \"object\",\n              properties: responseProps\n            }\n          }\n        }\n      },\n      \"400\": { description: \"Invalid Id supplied\" },\n      \"404\": { description: \"Team not found\" }\n    }\n  }\n});\n\n\n\n//# sourceURL=webpack:///./json/path/team/index.js?");

/***/ }),

/***/ "./swagger.json":
/*!**********************!*\
  !*** ./swagger.json ***!
  \**********************/
/*! exports provided: swagger, info, host, basePath, tags, schemes, paths, definitions, externalDocs, default */
/***/ (function(module) {

eval("module.exports = {\"swagger\":\"2.0\",\"info\":{\"description\":\"NFL data\",\"version\":\"1.0.0\",\"title\":\"NFL Data\",\"termsOfService\":\"http://swagger.io/terms/\",\"contact\":{\"email\":\"apiteam@swagger.io\"},\"license\":{\"name\":\"Apache 2.0\",\"url\":\"http://www.apache.org/licenses/LICENSE-2.0.html\"}},\"host\":\"localhost:2000/api\",\"basePath\":\"/v1\",\"tags\":[{\"name\":\"NFL\",\"description\":\"NFL stuff\",\"externalDocs\":{\"description\":\"Find out more\",\"url\":\"http://nfl.com\"}}],\"schemes\":[\"http\",\"https\"],\"paths\":{\"/en_US/NFL/player/{playerId}\":{\"get\":{\"tags\":[\"NFL\"],\"summary\":\"a player's season data\",\"description\":\"return an individual player's stat in NFL\",\"operationId\":\"getPlayerById\",\"produces\":[\"application/json\"],\"parameters\":[{\"name\":\"playerId\",\"in\":\"path\",\"description\":\"a player's id from SR model\",\"type\":\"string\",\"required\":true}],\"responses\":{\"200\":{\"description\":\"successful operations\",\"schema\":{\"$ref\":\"#/definitions/Player\"}},\"400\":{\"description\":\"Invalid ID supplied\"},\"404\":{\"description\":\"Player not found\"}}}},\"/en_US/NFL/team/{teamId}\":{\"get\":{\"tags\":[\"NFL\"],\"summary\":\"a NFL team single season data\",\"description\":\"statistics for a single NFL team\",\"operationId\":\"getTeamById\",\"produces\":[\"application/json\"],\"parameters\":[{\"name\":\"teamId\",\"in\":\"path\",\"description\":\"provide team id from SR model\",\"type\":\"string\",\"schema\":{\"$ref\":\"#/definitions/Team\"},\"required\":true}],\"responses\":{\"200\":{\"description\":\"successful operations\",\"schema\":{\"$ref\":\"#/definitions/Team\"}},\"400\":{\"description\":\"Invalid Id supplied\"},\"404\":{\"description\":\"Team not found\"}}}}},\"definitions\":{\"Player\":{\"success\":{\"type\":\"boolean\"},\"response\":{\"type\":\"object\",\"properties\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\"},\"last_name\":{\"type\":\"string\"},\"first_name\":{\"type\":\"string\"},\"birth_date\":{\"type\":\"string\"},\"weight\":{\"type\":\"integer\"},\"height\":{\"type\":\"integer\"},\"position\":{\"type\":\"string\"},\"birth_place\":{\"type\":\"string\"},\"high_school\":{\"type\":\"string\"},\"college\":{\"type\":\"string\"},\"college_conf\":{\"type\":\"string\"},\"rookie_year\":{\"type\":\"string\"},\"$ref\":\"#/definitions/PlayerTeam\",\"draft\":{\"type\":\"object\",\"required\":[\"#/definitions/PlayerTeam\"],\"properties\":{\"year\":{\"$ref\":\"#/definitions/INT32\"},\"round\":{\"$ref\":\"#/definitions/INT32\"},\"number\":{\"$ref\":\"#/definitions/INT32\"},\"$ref\":\"#/definitions/PlayerTeam\"}},\"statistics\":{\"type\":\"object\",\"properties\":{\"offense\":{\"type\":\"object\",\"properties\":{\"player_run\":{\"type\":\"object\",\"properties\":{\"player_name\":{\"type\":\"string\"},\"left_pct\":{\"type\":\"number\",\"format\":\"float\"},\"left_yard_per_run\":{\"type\":\"string\"},\"right_pct\":{\"type\":\"number\",\"format\":\"float\"},\"right_yard_per_run\":{\"type\":\"string\"},\"player_total_runs_across_all_zones\":{\"$ref\":\"#/definitions/INT32\"},\"outside_left_pct\":{\"$ref\":\"#/definitions/INT32\"},\"outside_left_ypc\":{\"type\":\"number\",\"format\":\"float\"},\"between_the_tackles_pct\":{\"$ref\":\"#/definitions/INT32\"},\"between_the_tackles_ypc\":{\"$ref\":\"#/definitions/INT32\"},\"outside_right_pct\":{\"$ref\":\"#/definitions/INT32\"},\"outside_right_ypc\":{\"type\":\"number\",\"format\":\"float\"},\"outside_between_tackles_text_desc\":{\"type\":\"string\"}}},\"league_run\":{\"type\":\"object\",\"properties\":{\"outside_left_pct\":{\"$ref\":\"#/definitions/INT32\"},\"outside_left_ypc\":{\"type\":\"number\",\"format\":\"float\"},\"between_the_tackles_pct\":{\"$ref\":\"#/definitions/INT32\"},\"between_the_tackles_ypc\":{\"type\":\"number\",\"format\":\"float\"},\"outside_right_pct\":{\"$ref\":\"#/definitions/INT32\"},\"outside_right_ypc\":{\"type\":\"number\",\"format\":\"float\"}}},\"zone\":{\"$ref\":\"#/definitions/Zone\"}}},\"most_run_routes\":{\"type\":\"array\"},\"routes\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"season\":{\"$ref\":\"#/definitions/INT32\"},\"date_string\":{\"type\":\"string\"},\"player_positon\":{\"type\":\"string\"},\"targets\":{\"$ref\":\"#/definitions/INT32\"},\"receptions\":{\"$ref\":\"#/definitions/INT32\"},\"total_yards\":{\"$ref\":\"#/definitions/INT32\"},\"touchdowns\":{\"$ref\":\"#/definitions/INT32\"},\"game_ID\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/INT32\"}},\"routes\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"pass_caught\":{\"type\":\"boolean\"},\"yardage_gained\":{\"$ref\":\"#/definitions/INT32\"},\"play_ID\":{\"$ref\":\"#/definitions/INT32\"},\"pass_caught_index\":{\"$ref\":\"#/definitions/INT32\"},\"touchdown\":{\"type\":\"boolean\"},\"coords\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"x\":{\"type\":\"number\",\"format\":\"float\"},\"y\":{\"type\":\"number\",\"format\":\"float\"}}}}}}}}}}}}}}}},\"Team\":{\"success\":{\"type\":\"boolean\"},\"response\":{\"type\":\"object\",\"properties\":{\"team\":{\"allOf\":[{\"$ref\":\"#/definitions/INA\"},{\"properties\":{\"market\":{\"type\":\"string\"}}}]},\"conference\":{\"$ref\":\"#/definitions/INA\"},\"division\":{\"$ref\":\"#/definitions/INA\"},\"venue\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"city\":{\"type\":\"string\"},\"state\":{\"type\":\"string\"},\"country\":{\"type\":\"string\"},\"zip\":{\"type\":\"string\"},\"address\":{\"type\":\"string\"},\"capacity\":{\"type\":\"integer\"},\"surface\":{\"type\":\"string\"},\"roof_type\":{\"type\":\"string\"}}},\"statistics\":{\"type\":\"object\",\"properties\":{\"offense\":{\"type\":\"object\",\"properties\":{\"formation\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/Formations\"}},\"zone\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/Zone\"}}}}}},\"defense\":{\"type\":\"object\",\"properties\":{\"formation\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/Formations\"}},\"zone\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/Zone\"}}}}}}},\"Formations\":{\"type\":\"object\",\"properties\":{\"type\":{\"type\":\"string\"},\"num_plays_lined_up\":{\"$ref\":\"#/definitions/INT32\"},\"num_plays_lined_up_pct\":{\"type\":\"number\",\"format\":\"float\"},\"num_plays_lined_up_rnk\":{\"$ref\":\"#/definitions/INT32\"},\"yards_play\":{\"type\":\"number\",\"format\":\"float\"},\"tds\":{\"$ref\":\"#/definitions/INT32\"},\"tds_rnk\":{\"$ref\":\"#/definitions/INT32\"},\"tds_rnk_desc\":{\"type\":\"string\"},\"tds_rnk_img\":{\"type\":\"string\"}}},\"PlayerTeam\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"market\":{\"type\":\"string\"},\"alias\":{\"type\":\"string\"}}},\"ArrayOfIntegers\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/INT32\"}},\"INT32\":{\"type\":\"integer\",\"format\":\"int32\"},\"INA\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"alias\":{\"type\":\"string\"}}},\"Zone\":{\"type\":\"object\",\"properties\":{\"type\":{\"type\":\"string\",\"pattern\":\"\"},\"reception_desc\":{\"type\":\"string\"},\"reception_img\":{\"type\":\"string\"},\"reception_backfield\":{\"oneOf\":[{\"$ref\":\"#/definitions/INT32\"},{\"$ref\":\"#/definitions/ArrayOfIntegers\"}]},\"reception_0_10\":{\"oneOf\":[{\"$ref\":\"#/definitions/INT32\"},{\"$ref\":\"#/definitions/ArrayOfIntegers\"}]},\"reception_10_20\":{\"oneOf\":[{\"$ref\":\"#/definitions/INT32\"},{\"$ref\":\"#/definitions/ArrayOfIntegers\"}]},\"reception_20_plus\":{\"oneOf\":[{\"$ref\":\"#/definitions/INT32\"},{\"$ref\":\"#/definitions/ArrayOfIntegers\"}]},\"reception\":{\"$ref\":\"#/definitions/ArrayOfIntegers\"},\"target_desc\":{\"type\":\"string\"},\"target_img\":{\"type\":\"string\"},\"target_backfield\":{\"oneOf\":[{\"$ref\":\"#/definitions/INT32\"},{\"$ref\":\"#/definitions/ArrayOfIntegers\"}]},\"target_0_10\":{\"oneOf\":[{\"$ref\":\"#/definitions/INT32\"},{\"$ref\":\"#/definitions/ArrayOfIntegers\"}]},\"target_10_20\":{\"oneOf\":[{\"$ref\":\"#/definitions/INT32\"},{\"$ref\":\"#/definitions/ArrayOfIntegers\"}]},\"target_20_plus\":{\"oneOf\":[{\"$ref\":\"#/definitions/INT32\"},{\"$ref\":\"#/definitions/ArrayOfIntegers\"}]},\"target\":{\"$ref\":\"#/definitions/ArrayOfIntegers\"},\"reception_rate_desc\":{\"type\":\"string\"},\"reception_rate_img\":{\"type\":\"string\"},\"reception_rate_backfield\":{\"oneOf\":[{\"$ref\":\"#/definitions/INT32\"},{\"$ref\":\"#/definitions/ArrayOfIntegers\"}]},\"reception_rate_0_10\":{\"oneOf\":[{\"$ref\":\"#/definitions/INT32\"},{\"$ref\":\"#/definitions/ArrayOfIntegers\"}]},\"reception_rate_10_20\":{\"oneOf\":[{\"$ref\":\"#/definitions/INT32\"},{\"$ref\":\"#/definitions/ArrayOfIntegers\"}]},\"reception_rate_20_plus\":{\"oneOf\":[{\"$ref\":\"#/definitions/INT32\"},{\"$ref\":\"#/definitions/ArrayOfIntegers\"}]},\"yards_per_reception_desc\":{\"type\":\"string\"},\"yards_per_reception_img\":{\"type\":\"string\"},\"yards_per_reception_backfield\":{\"oneOf\":[{\"$ref\":\"#/definitions/INT32\"},{\"$ref\":\"#/definitions/ArrayOfIntegers\"}]},\"yards_per_reception_0_10\":{\"oneOf\":[{\"$ref\":\"#/definitions/INT32\"},{\"$ref\":\"#/definitions/ArrayOfIntegers\"}]},\"yards_per_reception_10_20\":{\"oneOf\":[{\"$ref\":\"#/definitions/INT32\"},{\"$ref\":\"#/definitions/ArrayOfIntegers\"}]},\"yards_per_reception_20_plus\":{\"oneOf\":[{\"$ref\":\"#/definitions/INT32\"},{\"$ref\":\"#/definitions/ArrayOfIntegers\"}]},\"reception_rate\":{\"$ref\":\"#/definitions/ArrayOfIntegers\"},\"yards_per_target_desc\":{\"type\":\"string\"},\"yards_per_target_img\":{\"type\":\"string\"},\"yards_per_target_backfield\":{\"oneOf\":[{\"$ref\":\"#/definitions/INT32\"},{\"$ref\":\"#/definitions/ArrayOfIntegers\"}]},\"yards_per_target_0_10\":{\"oneOf\":[{\"$ref\":\"#/definitions/INT32\"},{\"$ref\":\"#/definitions/ArrayOfIntegers\"}]},\"yards_per_target_10_20\":{\"oneOf\":[{\"$ref\":\"#/definitions/INT32\"},{\"$ref\":\"#/definitions/ArrayOfIntegers\"}]},\"yards_per_target_20_plus\":{\"oneOf\":[{\"$ref\":\"#/definitions/INT32\"},{\"$ref\":\"#/definitions/ArrayOfIntegers\"}]},\"yards_per_target\":{\"$ref\":\"#/definitions/ArrayOfIntegers\"}}}},\"externalDocs\":{\"description\":\"Find out more about Swagger\",\"url\":\"http://swagger.io\"}};\n\n//# sourceURL=webpack:///./swagger.json?");

/***/ })

/******/ });