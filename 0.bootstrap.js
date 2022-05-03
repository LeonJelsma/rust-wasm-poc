(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/rust_wasm_list_sorting.js":
/*!****************************************!*\
  !*** ../pkg/rust_wasm_list_sorting.js ***!
  \****************************************/
/*! exports provided: greet, sort_array, __wbg_alert_27461dc61cf7b381 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rust_wasm_list_sorting_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rust_wasm_list_sorting_bg.wasm */ \"../pkg/rust_wasm_list_sorting_bg.wasm\");\n/* harmony import */ var _rust_wasm_list_sorting_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rust_wasm_list_sorting_bg.js */ \"../pkg/rust_wasm_list_sorting_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return _rust_wasm_list_sorting_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"greet\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"sort_array\", function() { return _rust_wasm_list_sorting_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"sort_array\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_27461dc61cf7b381\", function() { return _rust_wasm_list_sorting_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_alert_27461dc61cf7b381\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/rust_wasm_list_sorting.js?");

/***/ }),

/***/ "../pkg/rust_wasm_list_sorting_bg.js":
/*!*******************************************!*\
  !*** ../pkg/rust_wasm_list_sorting_bg.js ***!
  \*******************************************/
/*! exports provided: greet, sort_array, __wbg_alert_27461dc61cf7b381 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return greet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sort_array\", function() { return sort_array; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_27461dc61cf7b381\", function() { return __wbg_alert_27461dc61cf7b381; });\n/* harmony import */ var _rust_wasm_list_sorting_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rust_wasm_list_sorting_bg.wasm */ \"../pkg/rust_wasm_list_sorting_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _rust_wasm_list_sorting_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_rust_wasm_list_sorting_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n/**\n* @param {string} name\n* @param {string} last_name\n*/\nfunction greet(name, last_name) {\n    const ptr0 = passStringToWasm0(name, _rust_wasm_list_sorting_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _rust_wasm_list_sorting_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    const len0 = WASM_VECTOR_LEN;\n    const ptr1 = passStringToWasm0(last_name, _rust_wasm_list_sorting_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _rust_wasm_list_sorting_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    const len1 = WASM_VECTOR_LEN;\n    _rust_wasm_list_sorting_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"greet\"](ptr0, len0, ptr1, len1);\n}\n\nlet cachegetUint32Memory0 = null;\nfunction getUint32Memory0() {\n    if (cachegetUint32Memory0 === null || cachegetUint32Memory0.buffer !== _rust_wasm_list_sorting_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory0 = new Uint32Array(_rust_wasm_list_sorting_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory0;\n}\n\nfunction passArray32ToWasm0(arg, malloc) {\n    const ptr = malloc(arg.length * 4);\n    getUint32Memory0().set(arg, ptr / 4);\n    WASM_VECTOR_LEN = arg.length;\n    return ptr;\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _rust_wasm_list_sorting_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_rust_wasm_list_sorting_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nfunction getArrayI32FromWasm0(ptr, len) {\n    return getInt32Memory0().subarray(ptr / 4, ptr / 4 + len);\n}\n/**\n* @param {Int32Array} array\n* @returns {Int32Array}\n*/\nfunction sort_array(array) {\n    try {\n        const retptr = _rust_wasm_list_sorting_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n        const ptr0 = passArray32ToWasm0(array, _rust_wasm_list_sorting_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"]);\n        const len0 = WASM_VECTOR_LEN;\n        _rust_wasm_list_sorting_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"sort_array\"](retptr, ptr0, len0);\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        var v1 = getArrayI32FromWasm0(r0, r1).slice();\n        _rust_wasm_list_sorting_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1 * 4);\n        return v1;\n    } finally {\n        _rust_wasm_list_sorting_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n    }\n}\n\nfunction __wbg_alert_27461dc61cf7b381(arg0, arg1) {\n    alert(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/rust_wasm_list_sorting_bg.js?");

/***/ }),

/***/ "../pkg/rust_wasm_list_sorting_bg.wasm":
/*!*********************************************!*\
  !*** ../pkg/rust_wasm_list_sorting_bg.wasm ***!
  \*********************************************/
/*! exports provided: memory, greet, sort_array, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_add_to_stack_pointer, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./rust_wasm_list_sorting_bg.js */ \"../pkg/rust_wasm_list_sorting_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/rust_wasm_list_sorting_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rust_list_sorting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rust-list-sorting */ \"../pkg/rust_wasm_list_sorting.js\");\n\r\n\r\n\r\nfunction generateScrambledArray(length) {\r\n    const newArray = [];\r\n    for (let i = 1; i <= length; i++) {\r\n        newArray.push(i);\r\n    }\r\n    return shuffle(newArray)\r\n}\r\n\r\n\r\n// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array\r\nfunction shuffle(array) {\r\n    let currentIndex = array.length, randomIndex;\r\n\r\n    // While there remain elements to shuffle.\r\n    while (currentIndex != 0) {\r\n\r\n        // Pick a remaining element.\r\n        randomIndex = Math.floor(Math.random() * currentIndex);\r\n        currentIndex--;\r\n\r\n        // And swap it with the current element.\r\n        [array[currentIndex], array[randomIndex]] = [\r\n            array[randomIndex], array[currentIndex]];\r\n    }\r\n\r\n    return array;\r\n}\r\n\r\nfunction jsSort(array) {\r\n    let start = Date.now();\r\n    const sorted = array.sort()\r\n    let end = Date.now();\r\n    const ms = end - start\r\n    document.getElementById('jsResult').textContent = ms + \" Milliseconds\"\r\n    console.log('Sorted with JS in ' + ms + ' milliseconds')\r\n    return ms\r\n}\r\n\r\nfunction wasmSort(array) {\r\n    let start = Date.now();\r\n    const sorted = rust_list_sorting__WEBPACK_IMPORTED_MODULE_0__[\"sort_array\"](array)\r\n    let end = Date.now();\r\n    const ms = end - start\r\n    document.getElementById('wasmResult').textContent = ms + \" Milliseconds\"\r\n    console.log('Sorted with WASM in ' + ms + ' milliseconds')\r\n    return ms\r\n\r\n}\r\n\r\nlet scrambledArray = generateScrambledArray(document.getElementById(\"arraySize\").value)\r\n\r\n\r\ndocument.getElementById(\"jsButton\").onclick = () => jsSort([...scrambledArray])\r\ndocument.getElementById(\"wasmButton\").onclick = () => wasmSort([...scrambledArray])\r\n\r\ndocument.getElementById(\"arraySize\").oninput = () => {\r\n    const newValue = document.getElementById(\"arraySize\").value\r\n    scrambledArray = generateScrambledArray(newValue)\r\n    document.getElementById('jsResult').textContent = \"Press sort...\"\r\n    document.getElementById('wasmResult').textContent = \"Press sort...\"\r\n}\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);