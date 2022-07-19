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
    const neighboursSeparation = [];
    const neighboursAlignment = [];
    const neighboursCohesion = [];

    boids.forEach((boid) => {
      if (this === boid) return;

      const distance = Math.abs(boid.position.x - this.position.x) + Math.abs(boid.position.y - this.position.y);

      if (distance < this.perceptionRadius) {
        neighboursCohesion.push(boid.position);
      }

      if (distance < this.perceptionRadius / 2) {
        neighboursAlignment.push(boid.vectors);
      }

      if (distance < this.perceptionRadius - 1) {
        neighboursSeparation.push({
          x: ((this.position.x - boid.position.x) / distance) * distance,
          y: ((this.position.y - boid.position.y) / distance) * distance,
        });
      }
    });

    vectors.push(...this.computeSeparationVector(neighboursSeparation));
    vectors.push(...this.computeAlignmentVector(neighboursAlignment));
    vectors.push(...this.computeCohesionVector(neighboursCohesion));

    if (!vectors.length) return this.vectors;

    const avgVector = {
      x: vectors.reduce((a, b) => a + b.x, 0) / vectors.length,
      y: vectors.reduce((a, b) => a + b.y, 0) / vectors.length,
    };

    return avgVector;
  }

  computeSeparationVector(neighboursPositions) {
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

  computeAlignmentVector(neighboursAlignment) {
    if (!neighboursAlignment.length) return [];

    const avgAlignmentVectors = {
      x: neighboursAlignment.reduce((a, b) => a + b.x, 0) / neighboursAlignment.length,
      y: neighboursAlignment.reduce((a, b) => a + b.y, 0) / neighboursAlignment.length,
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

  computeCohesionVector(neighboursCohesion) {
    if (!neighboursCohesion.length) return [];

    const avgNeighboursPositions = {
      x: neighboursCohesion.reduce((a, b) => a + b.x, 0) / neighboursCohesion.length,
      y: neighboursCohesion.reduce((a, b) => a + b.y, 0) / neighboursCohesion.length,
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

  // eslint-disable-next-line no-restricted-syntax
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

  if (window.loop) window.cancelAnimationFrame(window.loop);
  window.loop = loop();
}

initializeFlock();
document.querySelector('[name="count"]').addEventListener('change', initializeFlock);

window.flock = flock;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNMcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxnQkFBZ0IsNkRBQTZEO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7VUM3QnJCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQUV1QztBQUNGOztBQUViOztBQUV4Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsY0FBYywwREFBSztBQUNuQjtBQUNBLEdBQUc7QUFDSDs7QUFFQSx1QkFBdUIsbUJBQW1CO0FBQzFDLHFCQUFxQix5REFBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvY2svLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2Zsb2NrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mbG9jay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Zsb2NrLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2Zsb2NrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Zsb2NrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9mbG9jay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mbG9jay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9mbG9jay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Zsb2NrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZmxvY2svLi9zcmMvY2xhc3Nlcy9Cb2lkLmpzIiwid2VicGFjazovL2Zsb2NrLy4vc3JjL2NsYXNzZXMvRmxvY2suanMiLCJ3ZWJwYWNrOi8vZmxvY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmxvY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZmxvY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zsb2NrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmxvY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mbG9jay93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZmxvY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qKlxuICogQGZpbGUgQm9pZCBjbGFzcyBmaWxlLlxuICogQGF1dGhvciBEQU5JRUxTLVJPVEggU3RhbiA8Y29udGFjdEBkYW5pZWxzLXJvdGgtc3Rhbi5mcj5cbiAqL1xuXG5jbGFzcyBCb2lkIHtcbiAgcG9zaXRpb247XG5cbiAgdmVjdG9ycztcblxuICBhY2NlbGVyYXRpb247XG5cbiAgbWF4Rm9yY2U7XG5cbiAgcGVyY2VwdGlvblJhZGl1cztcblxuICBjb25zdHJ1Y3Rvcih7IHBvc2l0aW9uLCB2ZWN0b3JzLCBtYXhGb3JjZSwgcGVyY2VwdGlvblJhZGl1cywgbWF4U3BlZWQgfSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLnZlY3RvcnMgPSB2ZWN0b3JzO1xuICAgIHRoaXMuYWNjZWxlcmF0aW9uID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgfTtcbiAgICB0aGlzLm1heEZvcmNlID0gbWF4Rm9yY2U7XG4gICAgdGhpcy5tYXhTcGVlZCA9IG1heFNwZWVkO1xuICAgIHRoaXMucGVyY2VwdGlvblJhZGl1cyA9IHBlcmNlcHRpb25SYWRpdXM7XG4gIH1cblxuICB1cGRhdGUoYm9pZHMpIHtcbiAgICBjb25zdCB2ZWN0b3IgPSB0aGlzLmNvbXB1dGVWZWN0b3IoYm9pZHMpO1xuXG4gICAgdGhpcy5hY2NlbGVyYXRpb24ueCArPSB2ZWN0b3IueDtcbiAgICB0aGlzLmFjY2VsZXJhdGlvbi55ICs9IHZlY3Rvci55O1xuXG4gICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMudmVjdG9ycy54O1xuICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnZlY3RvcnMueTtcblxuICAgIHRoaXMudmVjdG9ycy54ICs9IHRoaXMuYWNjZWxlcmF0aW9uLng7XG4gICAgdGhpcy52ZWN0b3JzLnkgKz0gdGhpcy5hY2NlbGVyYXRpb24ueTtcblxuICAgIGlmICh0aGlzLnZlY3RvcnMueCA+IHRoaXMubWF4U3BlZWQpIHRoaXMudmVjdG9ycy54ID0gdGhpcy5tYXhTcGVlZDtcbiAgICBpZiAodGhpcy52ZWN0b3JzLnkgPiB0aGlzLm1heFNwZWVkKSB0aGlzLnZlY3RvcnMueSA9IHRoaXMubWF4U3BlZWQ7XG4gICAgaWYgKHRoaXMudmVjdG9ycy54IDwgLXRoaXMubWF4U3BlZWQpIHRoaXMudmVjdG9ycy54ID0gLXRoaXMubWF4U3BlZWQ7XG4gICAgaWYgKHRoaXMudmVjdG9ycy55IDwgLXRoaXMubWF4U3BlZWQpIHRoaXMudmVjdG9ycy55ID0gLXRoaXMubWF4U3BlZWQ7XG5cbiAgICB0aGlzLmFjY2VsZXJhdGlvbi54ID0gMDtcbiAgICB0aGlzLmFjY2VsZXJhdGlvbi55ID0gMDtcbiAgfVxuXG4gIGNvbXB1dGVWZWN0b3IoYm9pZHMpIHtcbiAgICBjb25zdCB2ZWN0b3JzID0gW107XG4gICAgY29uc3QgbmVpZ2hib3Vyc1NlcGFyYXRpb24gPSBbXTtcbiAgICBjb25zdCBuZWlnaGJvdXJzQWxpZ25tZW50ID0gW107XG4gICAgY29uc3QgbmVpZ2hib3Vyc0NvaGVzaW9uID0gW107XG5cbiAgICBib2lkcy5mb3JFYWNoKChib2lkKSA9PiB7XG4gICAgICBpZiAodGhpcyA9PT0gYm9pZCkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguYWJzKGJvaWQucG9zaXRpb24ueCAtIHRoaXMucG9zaXRpb24ueCkgKyBNYXRoLmFicyhib2lkLnBvc2l0aW9uLnkgLSB0aGlzLnBvc2l0aW9uLnkpO1xuXG4gICAgICBpZiAoZGlzdGFuY2UgPCB0aGlzLnBlcmNlcHRpb25SYWRpdXMpIHtcbiAgICAgICAgbmVpZ2hib3Vyc0NvaGVzaW9uLnB1c2goYm9pZC5wb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXN0YW5jZSA8IHRoaXMucGVyY2VwdGlvblJhZGl1cyAvIDIpIHtcbiAgICAgICAgbmVpZ2hib3Vyc0FsaWdubWVudC5wdXNoKGJvaWQudmVjdG9ycyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXN0YW5jZSA8IHRoaXMucGVyY2VwdGlvblJhZGl1cyAtIDEpIHtcbiAgICAgICAgbmVpZ2hib3Vyc1NlcGFyYXRpb24ucHVzaCh7XG4gICAgICAgICAgeDogKCh0aGlzLnBvc2l0aW9uLnggLSBib2lkLnBvc2l0aW9uLngpIC8gZGlzdGFuY2UpICogZGlzdGFuY2UsXG4gICAgICAgICAgeTogKCh0aGlzLnBvc2l0aW9uLnkgLSBib2lkLnBvc2l0aW9uLnkpIC8gZGlzdGFuY2UpICogZGlzdGFuY2UsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmVjdG9ycy5wdXNoKC4uLnRoaXMuY29tcHV0ZVNlcGFyYXRpb25WZWN0b3IobmVpZ2hib3Vyc1NlcGFyYXRpb24pKTtcbiAgICB2ZWN0b3JzLnB1c2goLi4udGhpcy5jb21wdXRlQWxpZ25tZW50VmVjdG9yKG5laWdoYm91cnNBbGlnbm1lbnQpKTtcbiAgICB2ZWN0b3JzLnB1c2goLi4udGhpcy5jb21wdXRlQ29oZXNpb25WZWN0b3IobmVpZ2hib3Vyc0NvaGVzaW9uKSk7XG5cbiAgICBpZiAoIXZlY3RvcnMubGVuZ3RoKSByZXR1cm4gdGhpcy52ZWN0b3JzO1xuXG4gICAgY29uc3QgYXZnVmVjdG9yID0ge1xuICAgICAgeDogdmVjdG9ycy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLngsIDApIC8gdmVjdG9ycy5sZW5ndGgsXG4gICAgICB5OiB2ZWN0b3JzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIueSwgMCkgLyB2ZWN0b3JzLmxlbmd0aCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGF2Z1ZlY3RvcjtcbiAgfVxuXG4gIGNvbXB1dGVTZXBhcmF0aW9uVmVjdG9yKG5laWdoYm91cnNQb3NpdGlvbnMpIHtcbiAgICBpZiAoIW5laWdoYm91cnNQb3NpdGlvbnMubGVuZ3RoKSByZXR1cm4gW107XG5cbiAgICBjb25zdCBhdmdOZWlnaGJvdXJzUG9zaXRpb25zID0ge1xuICAgICAgeDogbmVpZ2hib3Vyc1Bvc2l0aW9ucy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLngsIDApIC8gbmVpZ2hib3Vyc1Bvc2l0aW9ucy5sZW5ndGgsXG4gICAgICB5OiBuZWlnaGJvdXJzUG9zaXRpb25zLnJlZHVjZSgoYSwgYikgPT4gYSArIGIueSwgMCkgLyBuZWlnaGJvdXJzUG9zaXRpb25zLmxlbmd0aCxcbiAgICB9O1xuXG4gICAgY29uc3QgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9uc01hZ25pdHVkZSA9IE1hdGguc3FydChcbiAgICAgIGF2Z05laWdoYm91cnNQb3NpdGlvbnMueCAqIGF2Z05laWdoYm91cnNQb3NpdGlvbnMueCArIGF2Z05laWdoYm91cnNQb3NpdGlvbnMueSAqIGF2Z05laWdoYm91cnNQb3NpdGlvbnMueSxcbiAgICApO1xuXG4gICAgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy54ID0gKGF2Z05laWdoYm91cnNQb3NpdGlvbnMueCAvIGF2Z05laWdoYm91cnNQb3NpdGlvbnNNYWduaXR1ZGUpICogdGhpcy5tYXhTcGVlZDtcbiAgICBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnkgPSAoYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy55IC8gYXZnTmVpZ2hib3Vyc1Bvc2l0aW9uc01hZ25pdHVkZSkgKiB0aGlzLm1heFNwZWVkO1xuXG4gICAgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy54IC09IHRoaXMudmVjdG9ycy54O1xuICAgIGF2Z05laWdoYm91cnNQb3NpdGlvbnMueSAtPSB0aGlzLnZlY3RvcnMueTtcblxuICAgIGlmIChhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnggPiB0aGlzLm1heEZvcmNlKSBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnggPSB0aGlzLm1heEZvcmNlO1xuICAgIGlmIChhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnkgPiB0aGlzLm1heEZvcmNlKSBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnkgPSB0aGlzLm1heEZvcmNlO1xuICAgIGlmIChhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnggPCAtdGhpcy5tYXhGb3JjZSkgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy54ID0gLXRoaXMubWF4Rm9yY2U7XG4gICAgaWYgKGF2Z05laWdoYm91cnNQb3NpdGlvbnMueSA8IC10aGlzLm1heEZvcmNlKSBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnkgPSAtdGhpcy5tYXhGb3JjZTtcblxuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHg6IGF2Z05laWdoYm91cnNQb3NpdGlvbnMueCAqIE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInNlcGFyYXRpb25cIl0nKS52YWx1ZSksXG4gICAgICAgIHk6IGF2Z05laWdoYm91cnNQb3NpdGlvbnMueSAqIE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInNlcGFyYXRpb25cIl0nKS52YWx1ZSksXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuICBjb21wdXRlQWxpZ25tZW50VmVjdG9yKG5laWdoYm91cnNBbGlnbm1lbnQpIHtcbiAgICBpZiAoIW5laWdoYm91cnNBbGlnbm1lbnQubGVuZ3RoKSByZXR1cm4gW107XG5cbiAgICBjb25zdCBhdmdBbGlnbm1lbnRWZWN0b3JzID0ge1xuICAgICAgeDogbmVpZ2hib3Vyc0FsaWdubWVudC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLngsIDApIC8gbmVpZ2hib3Vyc0FsaWdubWVudC5sZW5ndGgsXG4gICAgICB5OiBuZWlnaGJvdXJzQWxpZ25tZW50LnJlZHVjZSgoYSwgYikgPT4gYSArIGIueSwgMCkgLyBuZWlnaGJvdXJzQWxpZ25tZW50Lmxlbmd0aCxcbiAgICB9O1xuXG4gICAgY29uc3QgYXZnQWxpZ25tZW50VmVjdG9yc01hZ25pdHVkZSA9IE1hdGguc3FydChcbiAgICAgIGF2Z0FsaWdubWVudFZlY3RvcnMueCAqIGF2Z0FsaWdubWVudFZlY3RvcnMueCArIGF2Z0FsaWdubWVudFZlY3RvcnMueSAqIGF2Z0FsaWdubWVudFZlY3RvcnMueSxcbiAgICApO1xuXG4gICAgYXZnQWxpZ25tZW50VmVjdG9ycy54ID0gKGF2Z0FsaWdubWVudFZlY3RvcnMueCAvIGF2Z0FsaWdubWVudFZlY3RvcnNNYWduaXR1ZGUpICogdGhpcy5tYXhTcGVlZDtcbiAgICBhdmdBbGlnbm1lbnRWZWN0b3JzLnkgPSAoYXZnQWxpZ25tZW50VmVjdG9ycy55IC8gYXZnQWxpZ25tZW50VmVjdG9yc01hZ25pdHVkZSkgKiB0aGlzLm1heFNwZWVkO1xuXG4gICAgYXZnQWxpZ25tZW50VmVjdG9ycy54IC09IHRoaXMudmVjdG9ycy54O1xuICAgIGF2Z0FsaWdubWVudFZlY3RvcnMueSAtPSB0aGlzLnZlY3RvcnMueTtcblxuICAgIGlmIChhdmdBbGlnbm1lbnRWZWN0b3JzLnggPiAxKSBhdmdBbGlnbm1lbnRWZWN0b3JzLnggPSB0aGlzLm1heEZvcmNlO1xuICAgIGlmIChhdmdBbGlnbm1lbnRWZWN0b3JzLnkgPiAxKSBhdmdBbGlnbm1lbnRWZWN0b3JzLnkgPSB0aGlzLm1heEZvcmNlO1xuICAgIGlmIChhdmdBbGlnbm1lbnRWZWN0b3JzLnggPCAtMSkgYXZnQWxpZ25tZW50VmVjdG9ycy54ID0gLXRoaXMubWF4Rm9yY2U7XG4gICAgaWYgKGF2Z0FsaWdubWVudFZlY3RvcnMueSA8IC0xKSBhdmdBbGlnbm1lbnRWZWN0b3JzLnkgPSAtdGhpcy5tYXhGb3JjZTtcblxuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHg6IGF2Z0FsaWdubWVudFZlY3RvcnMueCAqIE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImFsaWdubWVudFwiXScpLnZhbHVlKSxcbiAgICAgICAgeTogYXZnQWxpZ25tZW50VmVjdG9ycy55ICogTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiYWxpZ25tZW50XCJdJykudmFsdWUpLFxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cbiAgY29tcHV0ZUNvaGVzaW9uVmVjdG9yKG5laWdoYm91cnNDb2hlc2lvbikge1xuICAgIGlmICghbmVpZ2hib3Vyc0NvaGVzaW9uLmxlbmd0aCkgcmV0dXJuIFtdO1xuXG4gICAgY29uc3QgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucyA9IHtcbiAgICAgIHg6IG5laWdoYm91cnNDb2hlc2lvbi5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLngsIDApIC8gbmVpZ2hib3Vyc0NvaGVzaW9uLmxlbmd0aCxcbiAgICAgIHk6IG5laWdoYm91cnNDb2hlc2lvbi5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLnksIDApIC8gbmVpZ2hib3Vyc0NvaGVzaW9uLmxlbmd0aCxcbiAgICB9O1xuXG4gICAgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy54IC09IHRoaXMucG9zaXRpb24ueDtcbiAgICBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnkgLT0gdGhpcy5wb3NpdGlvbi55O1xuXG4gICAgY29uc3QgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9uc01hZ25pdHVkZSA9IE1hdGguc3FydChcbiAgICAgIGF2Z05laWdoYm91cnNQb3NpdGlvbnMueCAqIGF2Z05laWdoYm91cnNQb3NpdGlvbnMueCArIGF2Z05laWdoYm91cnNQb3NpdGlvbnMueSAqIGF2Z05laWdoYm91cnNQb3NpdGlvbnMueSxcbiAgICApO1xuXG4gICAgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy54ID0gKGF2Z05laWdoYm91cnNQb3NpdGlvbnMueCAvIGF2Z05laWdoYm91cnNQb3NpdGlvbnNNYWduaXR1ZGUpICogdGhpcy5tYXhTcGVlZDtcbiAgICBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnkgPSAoYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy55IC8gYXZnTmVpZ2hib3Vyc1Bvc2l0aW9uc01hZ25pdHVkZSkgKiB0aGlzLm1heFNwZWVkO1xuXG4gICAgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy54IC09IHRoaXMudmVjdG9ycy54O1xuICAgIGF2Z05laWdoYm91cnNQb3NpdGlvbnMueSAtPSB0aGlzLnZlY3RvcnMueTtcblxuICAgIGlmIChhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnggPiB0aGlzLm1heEZvcmNlKSBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnggPSB0aGlzLm1heEZvcmNlO1xuICAgIGlmIChhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnkgPiB0aGlzLm1heEZvcmNlKSBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnkgPSB0aGlzLm1heEZvcmNlO1xuICAgIGlmIChhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnggPCAtdGhpcy5tYXhGb3JjZSkgYXZnTmVpZ2hib3Vyc1Bvc2l0aW9ucy54ID0gLXRoaXMubWF4Rm9yY2U7XG4gICAgaWYgKGF2Z05laWdoYm91cnNQb3NpdGlvbnMueSA8IC10aGlzLm1heEZvcmNlKSBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnkgPSAtdGhpcy5tYXhGb3JjZTtcblxuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHg6IGF2Z05laWdoYm91cnNQb3NpdGlvbnMueCAqIE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImNvaGVzaW9uXCJdJykudmFsdWUpLFxuICAgICAgICB5OiBhdmdOZWlnaGJvdXJzUG9zaXRpb25zLnkgKiBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJjb2hlc2lvblwiXScpLnZhbHVlKSxcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2lkO1xuIiwiLyoqXG4gKiBAZmlsZSBGbG9jayBjbGFzcyBmaWxlLlxuICogQGF1dGhvciBEQU5JRUxTLVJPVEggU3RhbiA8Y29udGFjdEBkYW5pZWxzLXJvdGgtc3Rhbi5mcj5cbiAqL1xuXG5jbGFzcyBGbG9jayB7XG4gIGNvaGVzaW9uRm9yY2U7XG5cbiAgc2VwYXJhdGlvbkZvcmNlO1xuXG4gIGFsaWdubWVudEZvcmNlO1xuXG4gIG1heEdyaWRTaXplO1xuXG4gIGJvaWQ7XG5cbiAgY29uc3RydWN0b3IoeyBjb2hlc2lvbkZvcmNlLCBzZXBhcmF0aW9uRm9yY2UsIGFsaWdubWVudEZvcmNlLCBtYXhHcmlkU2l6ZSB9KSB7XG4gICAgdGhpcy5jb2hlc2lvbkZvcmNlID0gY29oZXNpb25Gb3JjZTtcbiAgICB0aGlzLnNlcGFyYXRpb25Gb3JjZSA9IHNlcGFyYXRpb25Gb3JjZTtcbiAgICB0aGlzLmFsaWdubWVudEZvcmNlID0gYWxpZ25tZW50Rm9yY2U7XG4gICAgdGhpcy5tYXhHcmlkU2l6ZSA9IG1heEdyaWRTaXplO1xuICAgIHRoaXMuYm9pZHMgPSBbXTtcbiAgfVxuXG4gIGluc2VydEJvaWQoYm9pZCkge1xuICAgIHRoaXMuYm9pZHMucHVzaChib2lkKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbG9jaztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxuICogQGZpbGUgRW50cnkgcG9pbnQgZmlsZS5cbiAqIEBhdXRob3IgREFOSUVMUy1ST1RIIFN0YW4gPGNvbnRhY3RAZGFuaWVscy1yb3RoLXN0YW4uZnI+XG4gKi9cblxuaW1wb3J0IEZsb2NrIGZyb20gJyRzcmMvY2xhc3Nlcy9GbG9jayc7XG5pbXBvcnQgQm9pZCBmcm9tICckc3JjL2NsYXNzZXMvQm9pZCc7XG5cbmltcG9ydCAnJHNyYy9zdHlsZS5jc3MnO1xuXG5sZXQgZmxvY2sgPSBudWxsO1xuXG5mdW5jdGlvbiBsb29wKCkge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcbiAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gIGZvciAoY29uc3QgYm9pZCBvZiBmbG9jay5ib2lkcykge1xuICAgIGJvaWQudXBkYXRlKGZsb2NrLmJvaWRzKTtcbiAgICBpZiAoYm9pZC5wb3NpdGlvbi54ID4gZmxvY2subWF4R3JpZFNpemUpIGJvaWQucG9zaXRpb24ueCA9IDA7XG4gICAgaWYgKGJvaWQucG9zaXRpb24ueCA8IDApIGJvaWQucG9zaXRpb24ueCA9IGZsb2NrLm1heEdyaWRTaXplO1xuICAgIGlmIChib2lkLnBvc2l0aW9uLnkgPiBmbG9jay5tYXhHcmlkU2l6ZSkgYm9pZC5wb3NpdGlvbi55ID0gMDtcbiAgICBpZiAoYm9pZC5wb3NpdGlvbi55IDwgMCkgYm9pZC5wb3NpdGlvbi55ID0gZmxvY2subWF4R3JpZFNpemU7XG5cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQubW92ZVRvKGJvaWQucG9zaXRpb24ueCwgYm9pZC5wb3NpdGlvbi55KTtcbiAgICBjb250ZXh0LmFyYyhib2lkLnBvc2l0aW9uLngsIGJvaWQucG9zaXRpb24ueSwgMywgMCwgMiAqIE1hdGguUEkpO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUZsb2NrKCkge1xuICBmbG9jayA9IG5ldyBGbG9jayh7XG4gICAgbWF4R3JpZFNpemU6IDEwMDAsXG4gIH0pO1xuICBjb25zdCBxdWFudGl0eSA9IE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImNvdW50XCJdJykudmFsdWUpO1xuXG4gIGZvciAobGV0IG51bWJlciA9IDA7IG51bWJlciA8IHF1YW50aXR5OyBudW1iZXIgKz0gMSkge1xuICAgIGNvbnN0IGJvaWQgPSBuZXcgQm9pZCh7XG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB4OiBNYXRoLnJhbmRvbSgpICogZmxvY2subWF4R3JpZFNpemUsXG4gICAgICAgIHk6IE1hdGgucmFuZG9tKCkgKiBmbG9jay5tYXhHcmlkU2l6ZSxcbiAgICAgIH0sXG4gICAgICB2ZWN0b3JzOiB7XG4gICAgICAgIHg6IE1hdGgucmFuZG9tKCkgKiAoMSAtIC0xKSArIC0xLFxuICAgICAgICB5OiBNYXRoLnJhbmRvbSgpICogKDEgLSAtMSkgKyAtMSxcbiAgICAgIH0sXG4gICAgICBtYXhGb3JjZTogMC40LFxuICAgICAgbWF4U3BlZWQ6IDQsXG4gICAgICBwZXJjZXB0aW9uUmFkaXVzOiAxNTAsXG4gICAgfSk7XG4gICAgZmxvY2suaW5zZXJ0Qm9pZChib2lkKTtcbiAgfVxuXG4gIGlmICh3aW5kb3cubG9vcCkgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHdpbmRvdy5sb29wKTtcbiAgd2luZG93Lmxvb3AgPSBsb29wKCk7XG59XG5cbmluaXRpYWxpemVGbG9jaygpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJjb3VudFwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGluaXRpYWxpemVGbG9jayk7XG5cbndpbmRvdy5mbG9jayA9IGZsb2NrO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9