/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/classes/Boid.js":
/*!*****************************!*\
  !*** ./src/classes/Boid.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @file Boid class file.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */

class Boid {
  position;

  vectors;

  acceleration;

  maxForce;

  perceptionRadius;

  constructor({ position, vectors, maxForce, perceptionRadius, maxSpeed }) {
    this.position = position;
    this.vectors = vectors;
    this.acceleration = {
      x: 0,
      y: 0,
    };
    this.maxForce = maxForce;
    this.maxSpeed = maxSpeed;
    this.perceptionRadius = perceptionRadius;
  }

  update(boids) {
    const vector = this.computeVector(boids);

    this.acceleration.x += vector.x;
    this.acceleration.y += vector.y;

    this.position.x += this.vectors.x;
    this.position.y += this.vectors.y;

    this.vectors.x += this.acceleration.x;
    this.vectors.y += this.acceleration.y;

    if (this.vectors.x > this.maxSpeed) this.vectors.x = this.maxSpeed;
    if (this.vectors.y > this.maxSpeed) this.vectors.y = this.maxSpeed;
    if (this.vectors.x < -this.maxSpeed) this.vectors.x = -this.maxSpeed;
    if (this.vectors.y < -this.maxSpeed) this.vectors.y = -this.maxSpeed;

    this.acceleration.x = 0;
    this.acceleration.y = 0;
  }

  computeVector(boids) {
    const vectors = [];

    vectors.push(...this.computeSeparationVector(boids));
    vectors.push(...this.computeAlignmentVector(boids));
    vectors.push(...this.computeCohesionVector(boids));

    if (!vectors.length) return this.vectors;

    const avgVector = {
      x: vectors.reduce((a, b) => a + b.x, 0) / vectors.length,
      y: vectors.reduce((a, b) => a + b.y, 0) / vectors.length,
    };

    return avgVector;
  }

  computeSeparationVector(boids) {
    const neighboursPositions = [];
    boids.forEach((boid) => {
      if (this === boid) return;
      const distance = Math.abs(boid.position.x - this.position.x) + Math.abs(boid.position.y - this.position.y);
      if (distance < this.perceptionRadius - 1) {
        const vector = {
          x: this.position.x - boid.position.x,
          y: this.position.y - boid.position.y,
        };

        vector.x /= distance * distance;
        vector.y /= distance * distance;

        neighboursPositions.push(vector);
      }
    });

    if (!neighboursPositions.length) return [];

    const avgNeighboursPositions = {
      x: neighboursPositions.reduce((a, b) => a + b.x, 0) / neighboursPositions.length,
      y: neighboursPositions.reduce((a, b) => a + b.y, 0) / neighboursPositions.length,
    };

    const avgNeighboursPositionsMagnitude = Math.sqrt(
      avgNeighboursPositions.x * avgNeighboursPositions.x + avgNeighboursPositions.y * avgNeighboursPositions.y,
    );

    avgNeighboursPositions.x = (avgNeighboursPositions.x / avgNeighboursPositionsMagnitude) * this.maxSpeed;
    avgNeighboursPositions.y = (avgNeighboursPositions.y / avgNeighboursPositionsMagnitude) * this.maxSpeed;

    avgNeighboursPositions.x -= this.vectors.x;
    avgNeighboursPositions.y -= this.vectors.y;

    if (avgNeighboursPositions.x > this.maxForce) avgNeighboursPositions.x = this.maxForce;
    if (avgNeighboursPositions.y > this.maxForce) avgNeighboursPositions.y = this.maxForce;
    if (avgNeighboursPositions.x < -this.maxForce) avgNeighboursPositions.x = -this.maxForce;
    if (avgNeighboursPositions.y < -this.maxForce) avgNeighboursPositions.y = -this.maxForce;

    return [
      {
        x: avgNeighboursPositions.x * Number(document.querySelector('[name="separation"]').value),
        y: avgNeighboursPositions.y * Number(document.querySelector('[name="separation"]').value),
      },
    ];
  }

  computeAlignmentVector(boids) {
    const vectors = [];
    boids.forEach((boid) => {
      if (this === boid) return;
      if (
        Math.abs(boid.position.x - this.position.x) < this.perceptionRadius / 2 &&
        Math.abs(boid.position.y - this.position.y) < this.perceptionRadius / 2
      ) {
        vectors.push(boid.vectors);
      }
    });

    if (!vectors.length) return [];

    const avgAlignmentVectors = {
      x: vectors.reduce((a, b) => a + b.x, 0) / vectors.length,
      y: vectors.reduce((a, b) => a + b.y, 0) / vectors.length,
    };

    const avgAlignmentVectorsMagnitude = Math.sqrt(
      avgAlignmentVectors.x * avgAlignmentVectors.x + avgAlignmentVectors.y * avgAlignmentVectors.y,
    );

    avgAlignmentVectors.x = (avgAlignmentVectors.x / avgAlignmentVectorsMagnitude) * this.maxSpeed;
    avgAlignmentVectors.y = (avgAlignmentVectors.y / avgAlignmentVectorsMagnitude) * this.maxSpeed;

    avgAlignmentVectors.x -= this.vectors.x;
    avgAlignmentVectors.y -= this.vectors.y;

    if (avgAlignmentVectors.x > 1) avgAlignmentVectors.x = this.maxForce;
    if (avgAlignmentVectors.y > 1) avgAlignmentVectors.y = this.maxForce;
    if (avgAlignmentVectors.x < -1) avgAlignmentVectors.x = -this.maxForce;
    if (avgAlignmentVectors.y < -1) avgAlignmentVectors.y = -this.maxForce;

    return [
      {
        x: avgAlignmentVectors.x * Number(document.querySelector('[name="alignment"]').value),
        y: avgAlignmentVectors.y * Number(document.querySelector('[name="alignment"]').value),
      },
    ];
  }

  computeCohesionVector(boids) {
    const neighboursPositions = [];
    boids.forEach((boid) => {
      if (this === boid) return;
      if (
        Math.abs(boid.position.x - this.position.x) < this.perceptionRadius &&
        Math.abs(boid.position.y - this.position.y) < this.perceptionRadius
      ) {
        neighboursPositions.push(boid.position);
      }
    });

    if (!neighboursPositions.length) return [];

    const avgNeighboursPositions = {
      x: neighboursPositions.reduce((a, b) => a + b.x, 0) / neighboursPositions.length,
      y: neighboursPositions.reduce((a, b) => a + b.y, 0) / neighboursPositions.length,
    };

    avgNeighboursPositions.x -= this.position.x;
    avgNeighboursPositions.y -= this.position.y;

    const avgNeighboursPositionsMagnitude = Math.sqrt(
      avgNeighboursPositions.x * avgNeighboursPositions.x + avgNeighboursPositions.y * avgNeighboursPositions.y,
    );

    avgNeighboursPositions.x = (avgNeighboursPositions.x / avgNeighboursPositionsMagnitude) * this.maxSpeed;
    avgNeighboursPositions.y = (avgNeighboursPositions.y / avgNeighboursPositionsMagnitude) * this.maxSpeed;

    avgNeighboursPositions.x -= this.vectors.x;
    avgNeighboursPositions.y -= this.vectors.y;

    if (avgNeighboursPositions.x > this.maxForce) avgNeighboursPositions.x = this.maxForce;
    if (avgNeighboursPositions.y > this.maxForce) avgNeighboursPositions.y = this.maxForce;
    if (avgNeighboursPositions.x < -this.maxForce) avgNeighboursPositions.x = -this.maxForce;
    if (avgNeighboursPositions.y < -this.maxForce) avgNeighboursPositions.y = -this.maxForce;

    return [
      {
        x: avgNeighboursPositions.x * Number(document.querySelector('[name="cohesion"]').value),
        y: avgNeighboursPositions.y * Number(document.querySelector('[name="cohesion"]').value),
      },
    ];
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Boid);


/***/ }),

/***/ "./src/classes/Flock.js":
/*!******************************!*\
  !*** ./src/classes/Flock.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @file Flock class file.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */

class Flock {
  cohesionForce;

  separationForce;

  alignmentForce;

  maxGridSize;

  boid;

  constructor({ cohesionForce, separationForce, alignmentForce, maxGridSize }) {
    this.cohesionForce = cohesionForce;
    this.separationForce = separationForce;
    this.alignmentForce = alignmentForce;
    this.maxGridSize = maxGridSize;
    this.boids = [];
  }

  insertBoid(boid) {
    this.boids.push(boid);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flock);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var $src_classes_Flock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $src/classes/Flock */ "./src/classes/Flock.js");
/* harmony import */ var $src_classes_Boid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $src/classes/Boid */ "./src/classes/Boid.js");
/* harmony import */ var $src_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! $src/style.css */ "./src/style.css");
/**
 * @file Entry point file.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */






let flock = null;

function loop() {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');

  context.clearRect(0, 0, canvas.width, canvas.height);

  /* eslint-disable */
  for (const boid of flock.boids) {
    boid.update(flock.boids);
    if (boid.position.x > flock.maxGridSize) boid.position.x = 0;
    if (boid.position.x < 0) boid.position.x = flock.maxGridSize;
    if (boid.position.y > flock.maxGridSize) boid.position.y = 0;
    if (boid.position.y < 0) boid.position.y = flock.maxGridSize;

    context.beginPath();
    context.moveTo(boid.position.x, boid.position.y);
    context.arc(boid.position.x, boid.position.y, 3, 0, 2 * Math.PI);
    context.fill();
  }

  return requestAnimationFrame(loop);
}

function initializeFlock() {
  flock = new $src_classes_Flock__WEBPACK_IMPORTED_MODULE_0__["default"]({
    maxGridSize: 1000,
  });
  const quantity = Number(document.querySelector('[name="count"]').value);

  for (let number = 0; number < quantity; number += 1) {
    const boid = new $src_classes_Boid__WEBPACK_IMPORTED_MODULE_1__["default"]({
      position: {
        x: Math.random() * flock.maxGridSize,
        y: Math.random() * flock.maxGridSize,
      },
      vectors: {
        x: Math.random() * (1 - -1) + -1,
        y: Math.random() * (1 - -1) + -1,
      },
      maxForce: 0.4,
      maxSpeed: 4,
      perceptionRadius: 150,
    });
    flock.insertBoid(boid);
  }

  if (window.loop) window.clearAnimationFrame(window.loop);
  window.loop = loop();
}

initializeFlock();
document.querySelector('[name="count"]').addEventListener('change', initializeFlock);

window.flock = flock;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGlEQUFpRCxrRUFBa0U7QUFDbkg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGdCQUFnQix5REFBeUQ7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMU1wQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGdCQUFnQiw2REFBNkQ7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7OztVQzdCckI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRXVDO0FBQ0Y7O0FBRWI7O0FBRXhCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLDBEQUFLO0FBQ25CO0FBQ0EsR0FBRztBQUNIOztBQUVBLHVCQUF1QixtQkFBbUI7QUFDMUMscUJBQXFCLHlEQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9jay8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZmxvY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Zsb2NrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZmxvY2svLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZmxvY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZmxvY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Zsb2NrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Zsb2NrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Zsb2NrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZmxvY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9mbG9jay8uL3NyYy9jbGFzc2VzL0JvaWQuanMiLCJ3ZWJwYWNrOi8vZmxvY2svLi9zcmMvY2xhc3Nlcy9GbG9jay5qcyIsIndlYnBhY2s6Ly9mbG9jay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mbG9jay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mbG9jay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmxvY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mbG9jay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zsb2NrL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9mbG9jay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyoqXG4gKiBAZmlsZSBCb2lkIGNsYXNzIGZpbGUuXG4gKiBAYXV0aG9yIERBTklFTFMtUk9USCBTdGFuIDxjb250YWN0QGRhbmllbHMtcm90aC1zdGFuLmZyPlxuICovXG5cbmNsYXNzIEJvaWQge1xuICBwb3NpdGlvbjtcblxuICB2ZWN0b3JzO1xuXG4gIGFjY2VsZXJhdGlvbjtcblxuICBtYXhGb3JjZTtcblxuICBwZXJjZXB0aW9uUmFkaXVzO1xuXG4gIGNvbnN0cnVjdG9yKHsgcG9zaXRpb24sIHZlY3RvcnMsIG1heEZvcmNlLCBwZXJjZXB0aW9uUmFkaXVzLCBtYXhTcGVlZCB9KSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMudmVjdG9ycyA9IHZlY3RvcnM7XG4gICAgdGhpcy5hY2NlbGVyYXRpb24gPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICB9O1xuICAgIHRoaXMubWF4Rm9yY2UgPSBtYXhGb3JjZTtcbiAgICB0aGlzLm1heFNwZWVkID0gbWF4U3BlZWQ7XG4gICAgdGhpcy5wZXJjZXB0aW9uUmFkaXVzID0gcGVyY2VwdGlvblJhZGl1cztcbiAgfVxuXG4gIHVwZGF0ZShib2lkcykge1xuICAgIGNvbnN0IHZlY3RvciA9IHRoaXMuY29tcHV0ZVZlY3Rvcihib2lkcyk7XG5cbiAgICB0aGlzLmFjY2VsZXJhdGlvbi54ICs9IHZlY3Rvci54O1xuICAgIHRoaXMuYWNjZWxlcmF0aW9uLnkgKz0gdmVjdG9yLnk7XG5cbiAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy52ZWN0b3JzLng7XG4gICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMudmVjdG9ycy55O1xuXG4gICAgdGhpcy52ZWN0b3JzLnggKz0gdGhpcy5hY2NlbGVyYXRpb24ueDtcbiAgICB0aGlzLnZlY3RvcnMueSArPSB0aGlzLmFjY2VsZXJhdGlvbi55O1xuXG4gICAgaWYgKHRoaXMudmVjdG9ycy54ID4gdGhpcy5tYXhTcGVlZCkgdGhpcy52ZWN0b3JzLnggPSB0aGlzLm1heFNwZWVkO1xuICAgIGlmICh0aGlzLnZlY3RvcnMueSA+IHRoaXMubWF4U3BlZWQpIHRoaXMudmVjdG9ycy55ID0gdGhpcy5tYXhTcGVlZDtcbiAgICBpZiAodGhpcy52ZWN0b3JzLnggPCAtdGhpcy5tYXhTcGVlZCkgdGhpcy52ZWN0b3JzLnggPSAtdGhpcy5tYXhTcGVlZDtcbiAgICBpZiAodGhpcy52ZWN0b3JzLnkgPCAtdGhpcy5tYXhTcGVlZCkgdGhpcy52ZWN0b3JzLnkgPSAtdGhpcy5tYXhTcGVlZDtcblxuICAgIHRoaXMuYWNjZWxlcmF0aW9uLnggPSAwO1xuICAgIHRoaXMuYWNjZWxlcmF0aW9uLnkgPSAwO1xuICB9XG5cbiAgY29tcHV0ZVZlY3Rvcihib2lkcykge1xuICAgIGNvbnN0IHZlY3RvcnMgPSBbXTtcblxuICAgIHZlY3RvcnMucHVzaCguLi50aGlzLmNvbXB1dGVTZXBhcmF0aW9uVmVjdG9yKGJvaWRzKSk7XG4gICAgdmVjdG9ycy5wdXNoKC4uLnRoaXMuY29tcHV0ZUFsaWdubWVudFZlY3Rvcihib2lkcykpO1xuICAgIHZlY3RvcnMucHVzaCguLi50aGlzLmNvbXB1dGVDb2hlc2lvblZlY3Rvcihib2lkcykpO1xuXG4gICAgaWYgKCF2ZWN0b3JzLmxlbmd0aCkgcmV0dXJuIHRoaXMudmVjdG9ycztcblxuICAgIGNvbnN0IGF2Z1ZlY3RvciA9IHtcbiAgICAgIHg6IHZlY3RvcnMucmVkdWNlKChhLCBiKSA9PiBhICsgYi54LCAwKSAvIHZlY3RvcnMubGVuZ3RoLFxuICAgICAgeTogdmVjdG9ycy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLnksIDApIC8gdmVjdG9ycy5sZW5ndGgsXG4gICAgfTtcblxuICAgIHJldHVybiBhdmdWZWN0b3I7XG4gIH1cblxuICBjb21wdXRlU2VwYXJhdGlvblZlY3Rvcihib2lkcykge1xuICAgIGNvbnN0IG5laWdoYm91cnNQb3NpdGlvbnMgPSBbXTtcbiAgICBib2lkcy5mb3JFYWNoKChib2lkKSA9PiB7XG4gICAgICBpZiAodGhpcyA9PT0gYm9pZCkgcmV0dXJuO1xuICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmFicyhib2lkLnBvc2l0aW9uLnggLSB0aGlzLnBvc2l0aW9uLngpICsgTWF0aC5hYnMoYm9pZC5wb3NpdGlvbi55IC0gdGhpcy5wb3NpdGlvbi55KTtcbiAgICAgIGlmIChkaXN0YW5jZSA8IHRoaXMucGVyY2VwdGlvblJhZGl1cyAtIDEpIHtcbiAgICAgICAgY29uc3QgdmVjdG9yID0ge1xuICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCAtIGJvaWQucG9zaXRpb24ueCxcbiAgICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnkgLSBib2lkLnBvc2l0aW9uLnksXG4gICAgICAgIH07XG5cbiAgICAgICAgdmVjdG9yLnggLz0gZGlzdGFuY2UgKiBkaXN0YW5jZTtcbiAgICAgICAgdmVjdG9yLnkgLz0gZGlzdGFuY2UgKiBkaXN0YW5jZTtcblxuICAgICAgICBuZWlnaGJvdXJzUG9zaXRpb25zLnB1c2godmVjdG9yKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghbmVpZ2hib3Vyc1Bvc2l0aW9ucy5sZW5ndGgpIHJldHVybiBbXTtcblxuICAgIGNvbnN0IGF2Z05laWdoYm91cnNQb3NpdGlvbnMgPSB7XG4gICAgICB4OiBuZWlnaGJvdXJzUG9zaXRpb25zLnJlZHVjZSgoYSwgYikgPT4gYSArIGIueCwgMCkgLyBuZWlnaGJvdXJzUG9zaXRpb25zLmxlbmd0aCxcbiAgICAgIHk6IG5laWdoYm91cnNQb3NpdGlvbnMucmVkdWNlKChhLCBiKSA9PiBhICsgYi55LCAwKSAvIG5laWdoYm91cnNQb3NpdGlvbnMubGVuZ3RoLFxuICAgIH07XG5cbiAgICBjb25zdCBhdmdOZWlnaGJvdXJzUG9zaXRpb25zTWFnbml0dWRlID0gTWF0aC5zcXJ0KFxuICAgICAgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy54ICogYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy54ICsgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy55ICogYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy55LFxuICAgICk7XG5cbiAgICBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnggPSAoYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy54IC8gYXZnTmVpZ2hib3Vyc1Bvc2l0aW9uc01hZ25pdHVkZSkgKiB0aGlzLm1heFNwZWVkO1xuICAgIGF2Z05laWdoYm91cnNQb3NpdGlvbnMueSA9IChhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnkgLyBhdmdOZWlnaGJvdXJzUG9zaXRpb25zTWFnbml0dWRlKSAqIHRoaXMubWF4U3BlZWQ7XG5cbiAgICBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnggLT0gdGhpcy52ZWN0b3JzLng7XG4gICAgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy55IC09IHRoaXMudmVjdG9ycy55O1xuXG4gICAgaWYgKGF2Z05laWdoYm91cnNQb3NpdGlvbnMueCA+IHRoaXMubWF4Rm9yY2UpIGF2Z05laWdoYm91cnNQb3NpdGlvbnMueCA9IHRoaXMubWF4Rm9yY2U7XG4gICAgaWYgKGF2Z05laWdoYm91cnNQb3NpdGlvbnMueSA+IHRoaXMubWF4Rm9yY2UpIGF2Z05laWdoYm91cnNQb3NpdGlvbnMueSA9IHRoaXMubWF4Rm9yY2U7XG4gICAgaWYgKGF2Z05laWdoYm91cnNQb3NpdGlvbnMueCA8IC10aGlzLm1heEZvcmNlKSBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnggPSAtdGhpcy5tYXhGb3JjZTtcbiAgICBpZiAoYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy55IDwgLXRoaXMubWF4Rm9yY2UpIGF2Z05laWdoYm91cnNQb3NpdGlvbnMueSA9IC10aGlzLm1heEZvcmNlO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgeDogYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy54ICogTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwic2VwYXJhdGlvblwiXScpLnZhbHVlKSxcbiAgICAgICAgeTogYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy55ICogTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwic2VwYXJhdGlvblwiXScpLnZhbHVlKSxcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuXG4gIGNvbXB1dGVBbGlnbm1lbnRWZWN0b3IoYm9pZHMpIHtcbiAgICBjb25zdCB2ZWN0b3JzID0gW107XG4gICAgYm9pZHMuZm9yRWFjaCgoYm9pZCkgPT4ge1xuICAgICAgaWYgKHRoaXMgPT09IGJvaWQpIHJldHVybjtcbiAgICAgIGlmIChcbiAgICAgICAgTWF0aC5hYnMoYm9pZC5wb3NpdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54KSA8IHRoaXMucGVyY2VwdGlvblJhZGl1cyAvIDIgJiZcbiAgICAgICAgTWF0aC5hYnMoYm9pZC5wb3NpdGlvbi55IC0gdGhpcy5wb3NpdGlvbi55KSA8IHRoaXMucGVyY2VwdGlvblJhZGl1cyAvIDJcbiAgICAgICkge1xuICAgICAgICB2ZWN0b3JzLnB1c2goYm9pZC52ZWN0b3JzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghdmVjdG9ycy5sZW5ndGgpIHJldHVybiBbXTtcblxuICAgIGNvbnN0IGF2Z0FsaWdubWVudFZlY3RvcnMgPSB7XG4gICAgICB4OiB2ZWN0b3JzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIueCwgMCkgLyB2ZWN0b3JzLmxlbmd0aCxcbiAgICAgIHk6IHZlY3RvcnMucmVkdWNlKChhLCBiKSA9PiBhICsgYi55LCAwKSAvIHZlY3RvcnMubGVuZ3RoLFxuICAgIH07XG5cbiAgICBjb25zdCBhdmdBbGlnbm1lbnRWZWN0b3JzTWFnbml0dWRlID0gTWF0aC5zcXJ0KFxuICAgICAgYXZnQWxpZ25tZW50VmVjdG9ycy54ICogYXZnQWxpZ25tZW50VmVjdG9ycy54ICsgYXZnQWxpZ25tZW50VmVjdG9ycy55ICogYXZnQWxpZ25tZW50VmVjdG9ycy55LFxuICAgICk7XG5cbiAgICBhdmdBbGlnbm1lbnRWZWN0b3JzLnggPSAoYXZnQWxpZ25tZW50VmVjdG9ycy54IC8gYXZnQWxpZ25tZW50VmVjdG9yc01hZ25pdHVkZSkgKiB0aGlzLm1heFNwZWVkO1xuICAgIGF2Z0FsaWdubWVudFZlY3RvcnMueSA9IChhdmdBbGlnbm1lbnRWZWN0b3JzLnkgLyBhdmdBbGlnbm1lbnRWZWN0b3JzTWFnbml0dWRlKSAqIHRoaXMubWF4U3BlZWQ7XG5cbiAgICBhdmdBbGlnbm1lbnRWZWN0b3JzLnggLT0gdGhpcy52ZWN0b3JzLng7XG4gICAgYXZnQWxpZ25tZW50VmVjdG9ycy55IC09IHRoaXMudmVjdG9ycy55O1xuXG4gICAgaWYgKGF2Z0FsaWdubWVudFZlY3RvcnMueCA+IDEpIGF2Z0FsaWdubWVudFZlY3RvcnMueCA9IHRoaXMubWF4Rm9yY2U7XG4gICAgaWYgKGF2Z0FsaWdubWVudFZlY3RvcnMueSA+IDEpIGF2Z0FsaWdubWVudFZlY3RvcnMueSA9IHRoaXMubWF4Rm9yY2U7XG4gICAgaWYgKGF2Z0FsaWdubWVudFZlY3RvcnMueCA8IC0xKSBhdmdBbGlnbm1lbnRWZWN0b3JzLnggPSAtdGhpcy5tYXhGb3JjZTtcbiAgICBpZiAoYXZnQWxpZ25tZW50VmVjdG9ycy55IDwgLTEpIGF2Z0FsaWdubWVudFZlY3RvcnMueSA9IC10aGlzLm1heEZvcmNlO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgeDogYXZnQWxpZ25tZW50VmVjdG9ycy54ICogTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiYWxpZ25tZW50XCJdJykudmFsdWUpLFxuICAgICAgICB5OiBhdmdBbGlnbm1lbnRWZWN0b3JzLnkgKiBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJhbGlnbm1lbnRcIl0nKS52YWx1ZSksXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuICBjb21wdXRlQ29oZXNpb25WZWN0b3IoYm9pZHMpIHtcbiAgICBjb25zdCBuZWlnaGJvdXJzUG9zaXRpb25zID0gW107XG4gICAgYm9pZHMuZm9yRWFjaCgoYm9pZCkgPT4ge1xuICAgICAgaWYgKHRoaXMgPT09IGJvaWQpIHJldHVybjtcbiAgICAgIGlmIChcbiAgICAgICAgTWF0aC5hYnMoYm9pZC5wb3NpdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54KSA8IHRoaXMucGVyY2VwdGlvblJhZGl1cyAmJlxuICAgICAgICBNYXRoLmFicyhib2lkLnBvc2l0aW9uLnkgLSB0aGlzLnBvc2l0aW9uLnkpIDwgdGhpcy5wZXJjZXB0aW9uUmFkaXVzXG4gICAgICApIHtcbiAgICAgICAgbmVpZ2hib3Vyc1Bvc2l0aW9ucy5wdXNoKGJvaWQucG9zaXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFuZWlnaGJvdXJzUG9zaXRpb25zLmxlbmd0aCkgcmV0dXJuIFtdO1xuXG4gICAgY29uc3QgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucyA9IHtcbiAgICAgIHg6IG5laWdoYm91cnNQb3NpdGlvbnMucmVkdWNlKChhLCBiKSA9PiBhICsgYi54LCAwKSAvIG5laWdoYm91cnNQb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgeTogbmVpZ2hib3Vyc1Bvc2l0aW9ucy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLnksIDApIC8gbmVpZ2hib3Vyc1Bvc2l0aW9ucy5sZW5ndGgsXG4gICAgfTtcblxuICAgIGF2Z05laWdoYm91cnNQb3NpdGlvbnMueCAtPSB0aGlzLnBvc2l0aW9uLng7XG4gICAgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy55IC09IHRoaXMucG9zaXRpb24ueTtcblxuICAgIGNvbnN0IGF2Z05laWdoYm91cnNQb3NpdGlvbnNNYWduaXR1ZGUgPSBNYXRoLnNxcnQoXG4gICAgICBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnggKiBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnggKyBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnkgKiBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnksXG4gICAgKTtcblxuICAgIGF2Z05laWdoYm91cnNQb3NpdGlvbnMueCA9IChhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnggLyBhdmdOZWlnaGJvdXJzUG9zaXRpb25zTWFnbml0dWRlKSAqIHRoaXMubWF4U3BlZWQ7XG4gICAgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy55ID0gKGF2Z05laWdoYm91cnNQb3NpdGlvbnMueSAvIGF2Z05laWdoYm91cnNQb3NpdGlvbnNNYWduaXR1ZGUpICogdGhpcy5tYXhTcGVlZDtcblxuICAgIGF2Z05laWdoYm91cnNQb3NpdGlvbnMueCAtPSB0aGlzLnZlY3RvcnMueDtcbiAgICBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnkgLT0gdGhpcy52ZWN0b3JzLnk7XG5cbiAgICBpZiAoYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy54ID4gdGhpcy5tYXhGb3JjZSkgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy54ID0gdGhpcy5tYXhGb3JjZTtcbiAgICBpZiAoYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy55ID4gdGhpcy5tYXhGb3JjZSkgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy55ID0gdGhpcy5tYXhGb3JjZTtcbiAgICBpZiAoYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy54IDwgLXRoaXMubWF4Rm9yY2UpIGF2Z05laWdoYm91cnNQb3NpdGlvbnMueCA9IC10aGlzLm1heEZvcmNlO1xuICAgIGlmIChhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnkgPCAtdGhpcy5tYXhGb3JjZSkgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy55ID0gLXRoaXMubWF4Rm9yY2U7XG5cbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICB4OiBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnggKiBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJjb2hlc2lvblwiXScpLnZhbHVlKSxcbiAgICAgICAgeTogYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy55ICogTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiY29oZXNpb25cIl0nKS52YWx1ZSksXG4gICAgICB9LFxuICAgIF07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9pZDtcbiIsIi8qKlxuICogQGZpbGUgRmxvY2sgY2xhc3MgZmlsZS5cbiAqIEBhdXRob3IgREFOSUVMUy1ST1RIIFN0YW4gPGNvbnRhY3RAZGFuaWVscy1yb3RoLXN0YW4uZnI+XG4gKi9cblxuY2xhc3MgRmxvY2sge1xuICBjb2hlc2lvbkZvcmNlO1xuXG4gIHNlcGFyYXRpb25Gb3JjZTtcblxuICBhbGlnbm1lbnRGb3JjZTtcblxuICBtYXhHcmlkU2l6ZTtcblxuICBib2lkO1xuXG4gIGNvbnN0cnVjdG9yKHsgY29oZXNpb25Gb3JjZSwgc2VwYXJhdGlvbkZvcmNlLCBhbGlnbm1lbnRGb3JjZSwgbWF4R3JpZFNpemUgfSkge1xuICAgIHRoaXMuY29oZXNpb25Gb3JjZSA9IGNvaGVzaW9uRm9yY2U7XG4gICAgdGhpcy5zZXBhcmF0aW9uRm9yY2UgPSBzZXBhcmF0aW9uRm9yY2U7XG4gICAgdGhpcy5hbGlnbm1lbnRGb3JjZSA9IGFsaWdubWVudEZvcmNlO1xuICAgIHRoaXMubWF4R3JpZFNpemUgPSBtYXhHcmlkU2l6ZTtcbiAgICB0aGlzLmJvaWRzID0gW107XG4gIH1cblxuICBpbnNlcnRCb2lkKGJvaWQpIHtcbiAgICB0aGlzLmJvaWRzLnB1c2goYm9pZCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxvY2s7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKipcbiAqIEBmaWxlIEVudHJ5IHBvaW50IGZpbGUuXG4gKiBAYXV0aG9yIERBTklFTFMtUk9USCBTdGFuIDxjb250YWN0QGRhbmllbHMtcm90aC1zdGFuLmZyPlxuICovXG5cbmltcG9ydCBGbG9jayBmcm9tICckc3JjL2NsYXNzZXMvRmxvY2snO1xuaW1wb3J0IEJvaWQgZnJvbSAnJHNyYy9jbGFzc2VzL0JvaWQnO1xuXG5pbXBvcnQgJyRzcmMvc3R5bGUuY3NzJztcblxubGV0IGZsb2NrID0gbnVsbDtcblxuZnVuY3Rpb24gbG9vcCgpIHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XG4gIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gIC8qIGVzbGludC1kaXNhYmxlICovXG4gIGZvciAoY29uc3QgYm9pZCBvZiBmbG9jay5ib2lkcykge1xuICAgIGJvaWQudXBkYXRlKGZsb2NrLmJvaWRzKTtcbiAgICBpZiAoYm9pZC5wb3NpdGlvbi54ID4gZmxvY2subWF4R3JpZFNpemUpIGJvaWQucG9zaXRpb24ueCA9IDA7XG4gICAgaWYgKGJvaWQucG9zaXRpb24ueCA8IDApIGJvaWQucG9zaXRpb24ueCA9IGZsb2NrLm1heEdyaWRTaXplO1xuICAgIGlmIChib2lkLnBvc2l0aW9uLnkgPiBmbG9jay5tYXhHcmlkU2l6ZSkgYm9pZC5wb3NpdGlvbi55ID0gMDtcbiAgICBpZiAoYm9pZC5wb3NpdGlvbi55IDwgMCkgYm9pZC5wb3NpdGlvbi55ID0gZmxvY2subWF4R3JpZFNpemU7XG5cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQubW92ZVRvKGJvaWQucG9zaXRpb24ueCwgYm9pZC5wb3NpdGlvbi55KTtcbiAgICBjb250ZXh0LmFyYyhib2lkLnBvc2l0aW9uLngsIGJvaWQucG9zaXRpb24ueSwgMywgMCwgMiAqIE1hdGguUEkpO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUZsb2NrKCkge1xuICBmbG9jayA9IG5ldyBGbG9jayh7XG4gICAgbWF4R3JpZFNpemU6IDEwMDAsXG4gIH0pO1xuICBjb25zdCBxdWFudGl0eSA9IE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImNvdW50XCJdJykudmFsdWUpO1xuXG4gIGZvciAobGV0IG51bWJlciA9IDA7IG51bWJlciA8IHF1YW50aXR5OyBudW1iZXIgKz0gMSkge1xuICAgIGNvbnN0IGJvaWQgPSBuZXcgQm9pZCh7XG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB4OiBNYXRoLnJhbmRvbSgpICogZmxvY2subWF4R3JpZFNpemUsXG4gICAgICAgIHk6IE1hdGgucmFuZG9tKCkgKiBmbG9jay5tYXhHcmlkU2l6ZSxcbiAgICAgIH0sXG4gICAgICB2ZWN0b3JzOiB7XG4gICAgICAgIHg6IE1hdGgucmFuZG9tKCkgKiAoMSAtIC0xKSArIC0xLFxuICAgICAgICB5OiBNYXRoLnJhbmRvbSgpICogKDEgLSAtMSkgKyAtMSxcbiAgICAgIH0sXG4gICAgICBtYXhGb3JjZTogMC40LFxuICAgICAgbWF4U3BlZWQ6IDQsXG4gICAgICBwZXJjZXB0aW9uUmFkaXVzOiAxNTAsXG4gICAgfSk7XG4gICAgZmxvY2suaW5zZXJ0Qm9pZChib2lkKTtcbiAgfVxuXG4gIGlmICh3aW5kb3cubG9vcCkgd2luZG93LmNsZWFyQW5pbWF0aW9uRnJhbWUod2luZG93Lmxvb3ApO1xuICB3aW5kb3cubG9vcCA9IGxvb3AoKTtcbn1cblxuaW5pdGlhbGl6ZUZsb2NrKCk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImNvdW50XCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaW5pdGlhbGl6ZUZsb2NrKTtcblxud2luZG93LmZsb2NrID0gZmxvY2s7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=