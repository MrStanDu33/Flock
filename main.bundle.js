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






const flock = new $src_classes_Flock__WEBPACK_IMPORTED_MODULE_0__["default"]({
  maxGridSize: 1000,
});

for (let number = 0; number < 100; number += 1) {
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

window.loop = function () {
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

  requestAnimationFrame(loop);
};

loop();

window.flock = flock;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMU1wQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGdCQUFnQiw2REFBNkQ7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7OztVQzdCckI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRXVDO0FBQ0Y7O0FBRWI7O0FBRXhCLGtCQUFrQiwwREFBSztBQUN2QjtBQUNBLENBQUM7O0FBRUQscUJBQXFCLGNBQWM7QUFDbkMsbUJBQW1CLHlEQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2NrLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9mbG9jay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZmxvY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9mbG9jay8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9mbG9jay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9mbG9jay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZmxvY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZmxvY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZmxvY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9mbG9jay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Zsb2NrLy4vc3JjL2NsYXNzZXMvQm9pZC5qcyIsIndlYnBhY2s6Ly9mbG9jay8uL3NyYy9jbGFzc2VzL0Zsb2NrLmpzIiwid2VicGFjazovL2Zsb2NrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zsb2NrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Zsb2NrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mbG9jay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zsb2NrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmxvY2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Zsb2NrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKipcbiAqIEBmaWxlIEJvaWQgY2xhc3MgZmlsZS5cbiAqIEBhdXRob3IgREFOSUVMUy1ST1RIIFN0YW4gPGNvbnRhY3RAZGFuaWVscy1yb3RoLXN0YW4uZnI+XG4gKi9cblxuY2xhc3MgQm9pZCB7XG4gIHBvc2l0aW9uO1xuXG4gIHZlY3RvcnM7XG5cbiAgYWNjZWxlcmF0aW9uO1xuXG4gIG1heEZvcmNlO1xuXG4gIHBlcmNlcHRpb25SYWRpdXM7XG5cbiAgY29uc3RydWN0b3IoeyBwb3NpdGlvbiwgdmVjdG9ycywgbWF4Rm9yY2UsIHBlcmNlcHRpb25SYWRpdXMsIG1heFNwZWVkIH0pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy52ZWN0b3JzID0gdmVjdG9ycztcbiAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH07XG4gICAgdGhpcy5tYXhGb3JjZSA9IG1heEZvcmNlO1xuICAgIHRoaXMubWF4U3BlZWQgPSBtYXhTcGVlZDtcbiAgICB0aGlzLnBlcmNlcHRpb25SYWRpdXMgPSBwZXJjZXB0aW9uUmFkaXVzO1xuICB9XG5cbiAgdXBkYXRlKGJvaWRzKSB7XG4gICAgY29uc3QgdmVjdG9yID0gdGhpcy5jb21wdXRlVmVjdG9yKGJvaWRzKTtcblxuICAgIHRoaXMuYWNjZWxlcmF0aW9uLnggKz0gdmVjdG9yLng7XG4gICAgdGhpcy5hY2NlbGVyYXRpb24ueSArPSB2ZWN0b3IueTtcblxuICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlY3RvcnMueDtcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy52ZWN0b3JzLnk7XG5cbiAgICB0aGlzLnZlY3RvcnMueCArPSB0aGlzLmFjY2VsZXJhdGlvbi54O1xuICAgIHRoaXMudmVjdG9ycy55ICs9IHRoaXMuYWNjZWxlcmF0aW9uLnk7XG5cbiAgICBpZiAodGhpcy52ZWN0b3JzLnggPiB0aGlzLm1heFNwZWVkKSB0aGlzLnZlY3RvcnMueCA9IHRoaXMubWF4U3BlZWQ7XG4gICAgaWYgKHRoaXMudmVjdG9ycy55ID4gdGhpcy5tYXhTcGVlZCkgdGhpcy52ZWN0b3JzLnkgPSB0aGlzLm1heFNwZWVkO1xuICAgIGlmICh0aGlzLnZlY3RvcnMueCA8IC10aGlzLm1heFNwZWVkKSB0aGlzLnZlY3RvcnMueCA9IC10aGlzLm1heFNwZWVkO1xuICAgIGlmICh0aGlzLnZlY3RvcnMueSA8IC10aGlzLm1heFNwZWVkKSB0aGlzLnZlY3RvcnMueSA9IC10aGlzLm1heFNwZWVkO1xuXG4gICAgdGhpcy5hY2NlbGVyYXRpb24ueCA9IDA7XG4gICAgdGhpcy5hY2NlbGVyYXRpb24ueSA9IDA7XG4gIH1cblxuICBjb21wdXRlVmVjdG9yKGJvaWRzKSB7XG4gICAgY29uc3QgdmVjdG9ycyA9IFtdO1xuXG4gICAgdmVjdG9ycy5wdXNoKC4uLnRoaXMuY29tcHV0ZVNlcGFyYXRpb25WZWN0b3IoYm9pZHMpKTtcbiAgICB2ZWN0b3JzLnB1c2goLi4udGhpcy5jb21wdXRlQWxpZ25tZW50VmVjdG9yKGJvaWRzKSk7XG4gICAgdmVjdG9ycy5wdXNoKC4uLnRoaXMuY29tcHV0ZUNvaGVzaW9uVmVjdG9yKGJvaWRzKSk7XG5cbiAgICBpZiAoIXZlY3RvcnMubGVuZ3RoKSByZXR1cm4gdGhpcy52ZWN0b3JzO1xuXG4gICAgY29uc3QgYXZnVmVjdG9yID0ge1xuICAgICAgeDogdmVjdG9ycy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLngsIDApIC8gdmVjdG9ycy5sZW5ndGgsXG4gICAgICB5OiB2ZWN0b3JzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIueSwgMCkgLyB2ZWN0b3JzLmxlbmd0aCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGF2Z1ZlY3RvcjtcbiAgfVxuXG4gIGNvbXB1dGVTZXBhcmF0aW9uVmVjdG9yKGJvaWRzKSB7XG4gICAgY29uc3QgbmVpZ2hib3Vyc1Bvc2l0aW9ucyA9IFtdO1xuICAgIGJvaWRzLmZvckVhY2goKGJvaWQpID0+IHtcbiAgICAgIGlmICh0aGlzID09PSBib2lkKSByZXR1cm47XG4gICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguYWJzKGJvaWQucG9zaXRpb24ueCAtIHRoaXMucG9zaXRpb24ueCkgKyBNYXRoLmFicyhib2lkLnBvc2l0aW9uLnkgLSB0aGlzLnBvc2l0aW9uLnkpO1xuICAgICAgaWYgKGRpc3RhbmNlIDwgdGhpcy5wZXJjZXB0aW9uUmFkaXVzIC0gMSkge1xuICAgICAgICBjb25zdCB2ZWN0b3IgPSB7XG4gICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54IC0gYm9pZC5wb3NpdGlvbi54LFxuICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSAtIGJvaWQucG9zaXRpb24ueSxcbiAgICAgICAgfTtcblxuICAgICAgICB2ZWN0b3IueCAvPSBkaXN0YW5jZSAqIGRpc3RhbmNlO1xuICAgICAgICB2ZWN0b3IueSAvPSBkaXN0YW5jZSAqIGRpc3RhbmNlO1xuXG4gICAgICAgIG5laWdoYm91cnNQb3NpdGlvbnMucHVzaCh2ZWN0b3IpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFuZWlnaGJvdXJzUG9zaXRpb25zLmxlbmd0aCkgcmV0dXJuIFtdO1xuXG4gICAgY29uc3QgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucyA9IHtcbiAgICAgIHg6IG5laWdoYm91cnNQb3NpdGlvbnMucmVkdWNlKChhLCBiKSA9PiBhICsgYi54LCAwKSAvIG5laWdoYm91cnNQb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgeTogbmVpZ2hib3Vyc1Bvc2l0aW9ucy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLnksIDApIC8gbmVpZ2hib3Vyc1Bvc2l0aW9ucy5sZW5ndGgsXG4gICAgfTtcblxuICAgIGNvbnN0IGF2Z05laWdoYm91cnNQb3NpdGlvbnNNYWduaXR1ZGUgPSBNYXRoLnNxcnQoXG4gICAgICBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnggKiBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnggKyBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnkgKiBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnksXG4gICAgKTtcblxuICAgIGF2Z05laWdoYm91cnNQb3NpdGlvbnMueCA9IChhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnggLyBhdmdOZWlnaGJvdXJzUG9zaXRpb25zTWFnbml0dWRlKSAqIHRoaXMubWF4U3BlZWQ7XG4gICAgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy55ID0gKGF2Z05laWdoYm91cnNQb3NpdGlvbnMueSAvIGF2Z05laWdoYm91cnNQb3NpdGlvbnNNYWduaXR1ZGUpICogdGhpcy5tYXhTcGVlZDtcblxuICAgIGF2Z05laWdoYm91cnNQb3NpdGlvbnMueCAtPSB0aGlzLnZlY3RvcnMueDtcbiAgICBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnkgLT0gdGhpcy52ZWN0b3JzLnk7XG5cbiAgICBpZiAoYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy54ID4gdGhpcy5tYXhGb3JjZSkgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy54ID0gdGhpcy5tYXhGb3JjZTtcbiAgICBpZiAoYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy55ID4gdGhpcy5tYXhGb3JjZSkgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy55ID0gdGhpcy5tYXhGb3JjZTtcbiAgICBpZiAoYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy54IDwgLXRoaXMubWF4Rm9yY2UpIGF2Z05laWdoYm91cnNQb3NpdGlvbnMueCA9IC10aGlzLm1heEZvcmNlO1xuICAgIGlmIChhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnkgPCAtdGhpcy5tYXhGb3JjZSkgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy55ID0gLXRoaXMubWF4Rm9yY2U7XG5cbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICB4OiBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnggKiBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJzZXBhcmF0aW9uXCJdJykudmFsdWUpLFxuICAgICAgICB5OiBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnkgKiBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJzZXBhcmF0aW9uXCJdJykudmFsdWUpLFxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cbiAgY29tcHV0ZUFsaWdubWVudFZlY3Rvcihib2lkcykge1xuICAgIGNvbnN0IHZlY3RvcnMgPSBbXTtcbiAgICBib2lkcy5mb3JFYWNoKChib2lkKSA9PiB7XG4gICAgICBpZiAodGhpcyA9PT0gYm9pZCkgcmV0dXJuO1xuICAgICAgaWYgKFxuICAgICAgICBNYXRoLmFicyhib2lkLnBvc2l0aW9uLnggLSB0aGlzLnBvc2l0aW9uLngpIDwgdGhpcy5wZXJjZXB0aW9uUmFkaXVzIC8gMiAmJlxuICAgICAgICBNYXRoLmFicyhib2lkLnBvc2l0aW9uLnkgLSB0aGlzLnBvc2l0aW9uLnkpIDwgdGhpcy5wZXJjZXB0aW9uUmFkaXVzIC8gMlxuICAgICAgKSB7XG4gICAgICAgIHZlY3RvcnMucHVzaChib2lkLnZlY3RvcnMpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCF2ZWN0b3JzLmxlbmd0aCkgcmV0dXJuIFtdO1xuXG4gICAgY29uc3QgYXZnQWxpZ25tZW50VmVjdG9ycyA9IHtcbiAgICAgIHg6IHZlY3RvcnMucmVkdWNlKChhLCBiKSA9PiBhICsgYi54LCAwKSAvIHZlY3RvcnMubGVuZ3RoLFxuICAgICAgeTogdmVjdG9ycy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLnksIDApIC8gdmVjdG9ycy5sZW5ndGgsXG4gICAgfTtcblxuICAgIGNvbnN0IGF2Z0FsaWdubWVudFZlY3RvcnNNYWduaXR1ZGUgPSBNYXRoLnNxcnQoXG4gICAgICBhdmdBbGlnbm1lbnRWZWN0b3JzLnggKiBhdmdBbGlnbm1lbnRWZWN0b3JzLnggKyBhdmdBbGlnbm1lbnRWZWN0b3JzLnkgKiBhdmdBbGlnbm1lbnRWZWN0b3JzLnksXG4gICAgKTtcblxuICAgIGF2Z0FsaWdubWVudFZlY3RvcnMueCA9IChhdmdBbGlnbm1lbnRWZWN0b3JzLnggLyBhdmdBbGlnbm1lbnRWZWN0b3JzTWFnbml0dWRlKSAqIHRoaXMubWF4U3BlZWQ7XG4gICAgYXZnQWxpZ25tZW50VmVjdG9ycy55ID0gKGF2Z0FsaWdubWVudFZlY3RvcnMueSAvIGF2Z0FsaWdubWVudFZlY3RvcnNNYWduaXR1ZGUpICogdGhpcy5tYXhTcGVlZDtcblxuICAgIGF2Z0FsaWdubWVudFZlY3RvcnMueCAtPSB0aGlzLnZlY3RvcnMueDtcbiAgICBhdmdBbGlnbm1lbnRWZWN0b3JzLnkgLT0gdGhpcy52ZWN0b3JzLnk7XG5cbiAgICBpZiAoYXZnQWxpZ25tZW50VmVjdG9ycy54ID4gMSkgYXZnQWxpZ25tZW50VmVjdG9ycy54ID0gdGhpcy5tYXhGb3JjZTtcbiAgICBpZiAoYXZnQWxpZ25tZW50VmVjdG9ycy55ID4gMSkgYXZnQWxpZ25tZW50VmVjdG9ycy55ID0gdGhpcy5tYXhGb3JjZTtcbiAgICBpZiAoYXZnQWxpZ25tZW50VmVjdG9ycy54IDwgLTEpIGF2Z0FsaWdubWVudFZlY3RvcnMueCA9IC10aGlzLm1heEZvcmNlO1xuICAgIGlmIChhdmdBbGlnbm1lbnRWZWN0b3JzLnkgPCAtMSkgYXZnQWxpZ25tZW50VmVjdG9ycy55ID0gLXRoaXMubWF4Rm9yY2U7XG5cbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICB4OiBhdmdBbGlnbm1lbnRWZWN0b3JzLnggKiBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJhbGlnbm1lbnRcIl0nKS52YWx1ZSksXG4gICAgICAgIHk6IGF2Z0FsaWdubWVudFZlY3RvcnMueSAqIE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImFsaWdubWVudFwiXScpLnZhbHVlKSxcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuXG4gIGNvbXB1dGVDb2hlc2lvblZlY3Rvcihib2lkcykge1xuICAgIGNvbnN0IG5laWdoYm91cnNQb3NpdGlvbnMgPSBbXTtcbiAgICBib2lkcy5mb3JFYWNoKChib2lkKSA9PiB7XG4gICAgICBpZiAodGhpcyA9PT0gYm9pZCkgcmV0dXJuO1xuICAgICAgaWYgKFxuICAgICAgICBNYXRoLmFicyhib2lkLnBvc2l0aW9uLnggLSB0aGlzLnBvc2l0aW9uLngpIDwgdGhpcy5wZXJjZXB0aW9uUmFkaXVzICYmXG4gICAgICAgIE1hdGguYWJzKGJvaWQucG9zaXRpb24ueSAtIHRoaXMucG9zaXRpb24ueSkgPCB0aGlzLnBlcmNlcHRpb25SYWRpdXNcbiAgICAgICkge1xuICAgICAgICBuZWlnaGJvdXJzUG9zaXRpb25zLnB1c2goYm9pZC5wb3NpdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIW5laWdoYm91cnNQb3NpdGlvbnMubGVuZ3RoKSByZXR1cm4gW107XG5cbiAgICBjb25zdCBhdmdOZWlnaGJvdXJzUG9zaXRpb25zID0ge1xuICAgICAgeDogbmVpZ2hib3Vyc1Bvc2l0aW9ucy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLngsIDApIC8gbmVpZ2hib3Vyc1Bvc2l0aW9ucy5sZW5ndGgsXG4gICAgICB5OiBuZWlnaGJvdXJzUG9zaXRpb25zLnJlZHVjZSgoYSwgYikgPT4gYSArIGIueSwgMCkgLyBuZWlnaGJvdXJzUG9zaXRpb25zLmxlbmd0aCxcbiAgICB9O1xuXG4gICAgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy54IC09IHRoaXMucG9zaXRpb24ueDtcbiAgICBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnkgLT0gdGhpcy5wb3NpdGlvbi55O1xuXG4gICAgY29uc3QgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9uc01hZ25pdHVkZSA9IE1hdGguc3FydChcbiAgICAgIGF2Z05laWdoYm91cnNQb3NpdGlvbnMueCAqIGF2Z05laWdoYm91cnNQb3NpdGlvbnMueCArIGF2Z05laWdoYm91cnNQb3NpdGlvbnMueSAqIGF2Z05laWdoYm91cnNQb3NpdGlvbnMueSxcbiAgICApO1xuXG4gICAgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy54ID0gKGF2Z05laWdoYm91cnNQb3NpdGlvbnMueCAvIGF2Z05laWdoYm91cnNQb3NpdGlvbnNNYWduaXR1ZGUpICogdGhpcy5tYXhTcGVlZDtcbiAgICBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnkgPSAoYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy55IC8gYXZnTmVpZ2hib3Vyc1Bvc2l0aW9uc01hZ25pdHVkZSkgKiB0aGlzLm1heFNwZWVkO1xuXG4gICAgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy54IC09IHRoaXMudmVjdG9ycy54O1xuICAgIGF2Z05laWdoYm91cnNQb3NpdGlvbnMueSAtPSB0aGlzLnZlY3RvcnMueTtcblxuICAgIGlmIChhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnggPiB0aGlzLm1heEZvcmNlKSBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnggPSB0aGlzLm1heEZvcmNlO1xuICAgIGlmIChhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnkgPiB0aGlzLm1heEZvcmNlKSBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnkgPSB0aGlzLm1heEZvcmNlO1xuICAgIGlmIChhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnggPCAtdGhpcy5tYXhGb3JjZSkgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy54ID0gLXRoaXMubWF4Rm9yY2U7XG4gICAgaWYgKGF2Z05laWdoYm91cnNQb3NpdGlvbnMueSA8IC10aGlzLm1heEZvcmNlKSBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnkgPSAtdGhpcy5tYXhGb3JjZTtcblxuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHg6IGF2Z05laWdoYm91cnNQb3NpdGlvbnMueCAqIE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImNvaGVzaW9uXCJdJykudmFsdWUpLFxuICAgICAgICB5OiBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnkgKiBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJjb2hlc2lvblwiXScpLnZhbHVlKSxcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2lkO1xuIiwiLyoqXG4gKiBAZmlsZSBGbG9jayBjbGFzcyBmaWxlLlxuICogQGF1dGhvciBEQU5JRUxTLVJPVEggU3RhbiA8Y29udGFjdEBkYW5pZWxzLXJvdGgtc3Rhbi5mcj5cbiAqL1xuXG5jbGFzcyBGbG9jayB7XG4gIGNvaGVzaW9uRm9yY2U7XG5cbiAgc2VwYXJhdGlvbkZvcmNlO1xuXG4gIGFsaWdubWVudEZvcmNlO1xuXG4gIG1heEdyaWRTaXplO1xuXG4gIGJvaWQ7XG5cbiAgY29uc3RydWN0b3IoeyBjb2hlc2lvbkZvcmNlLCBzZXBhcmF0aW9uRm9yY2UsIGFsaWdubWVudEZvcmNlLCBtYXhHcmlkU2l6ZSB9KSB7XG4gICAgdGhpcy5jb2hlc2lvbkZvcmNlID0gY29oZXNpb25Gb3JjZTtcbiAgICB0aGlzLnNlcGFyYXRpb25Gb3JjZSA9IHNlcGFyYXRpb25Gb3JjZTtcbiAgICB0aGlzLmFsaWdubWVudEZvcmNlID0gYWxpZ25tZW50Rm9yY2U7XG4gICAgdGhpcy5tYXhHcmlkU2l6ZSA9IG1heEdyaWRTaXplO1xuICAgIHRoaXMuYm9pZHMgPSBbXTtcbiAgfVxuXG4gIGluc2VydEJvaWQoYm9pZCkge1xuICAgIHRoaXMuYm9pZHMucHVzaChib2lkKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbG9jaztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxuICogQGZpbGUgRW50cnkgcG9pbnQgZmlsZS5cbiAqIEBhdXRob3IgREFOSUVMUy1ST1RIIFN0YW4gPGNvbnRhY3RAZGFuaWVscy1yb3RoLXN0YW4uZnI+XG4gKi9cblxuaW1wb3J0IEZsb2NrIGZyb20gJyRzcmMvY2xhc3Nlcy9GbG9jayc7XG5pbXBvcnQgQm9pZCBmcm9tICckc3JjL2NsYXNzZXMvQm9pZCc7XG5cbmltcG9ydCAnJHNyYy9zdHlsZS5jc3MnO1xuXG5jb25zdCBmbG9jayA9IG5ldyBGbG9jayh7XG4gIG1heEdyaWRTaXplOiAxMDAwLFxufSk7XG5cbmZvciAobGV0IG51bWJlciA9IDA7IG51bWJlciA8IDEwMDsgbnVtYmVyICs9IDEpIHtcbiAgY29uc3QgYm9pZCA9IG5ldyBCb2lkKHtcbiAgICBwb3NpdGlvbjoge1xuICAgICAgeDogTWF0aC5yYW5kb20oKSAqIGZsb2NrLm1heEdyaWRTaXplLFxuICAgICAgeTogTWF0aC5yYW5kb20oKSAqIGZsb2NrLm1heEdyaWRTaXplLFxuICAgIH0sXG4gICAgdmVjdG9yczoge1xuICAgICAgeDogTWF0aC5yYW5kb20oKSAqICgxIC0gLTEpICsgLTEsXG4gICAgICB5OiBNYXRoLnJhbmRvbSgpICogKDEgLSAtMSkgKyAtMSxcbiAgICB9LFxuICAgIG1heEZvcmNlOiAwLjQsXG4gICAgbWF4U3BlZWQ6IDQsXG4gICAgcGVyY2VwdGlvblJhZGl1czogMTUwLFxuICB9KTtcbiAgZmxvY2suaW5zZXJ0Qm9pZChib2lkKTtcbn1cblxud2luZG93Lmxvb3AgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xuICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICBmb3IgKGNvbnN0IGJvaWQgb2YgZmxvY2suYm9pZHMpIHtcbiAgICBib2lkLnVwZGF0ZShmbG9jay5ib2lkcyk7XG4gICAgaWYgKGJvaWQucG9zaXRpb24ueCA+IGZsb2NrLm1heEdyaWRTaXplKSBib2lkLnBvc2l0aW9uLnggPSAwO1xuICAgIGlmIChib2lkLnBvc2l0aW9uLnggPCAwKSBib2lkLnBvc2l0aW9uLnggPSBmbG9jay5tYXhHcmlkU2l6ZTtcbiAgICBpZiAoYm9pZC5wb3NpdGlvbi55ID4gZmxvY2subWF4R3JpZFNpemUpIGJvaWQucG9zaXRpb24ueSA9IDA7XG4gICAgaWYgKGJvaWQucG9zaXRpb24ueSA8IDApIGJvaWQucG9zaXRpb24ueSA9IGZsb2NrLm1heEdyaWRTaXplO1xuXG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0Lm1vdmVUbyhib2lkLnBvc2l0aW9uLngsIGJvaWQucG9zaXRpb24ueSk7XG4gICAgY29udGV4dC5hcmMoYm9pZC5wb3NpdGlvbi54LCBib2lkLnBvc2l0aW9uLnksIDMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICBjb250ZXh0LmZpbGwoKTtcbiAgfVxuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbn07XG5cbmxvb3AoKTtcblxud2luZG93LmZsb2NrID0gZmxvY2s7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=