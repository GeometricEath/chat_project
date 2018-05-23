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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_components_app_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/components/app/app.js */ \"./src/components/app/app.js\");\n/* harmony import */ var _src_mockdata_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/mockdata/data.js */ \"./src/mockdata/data.js\");\n/* harmony import */ var _src_modules_firebase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/modules/firebase.js */ \"./src/modules/firebase.js\");\n\n\n\n\nconst firebase = new _src_modules_firebase_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('-LCyXNQeY3GQJQuQQY8h');\nconst user = {\n    name: 'Генри',\n    photo: './src/img/people.png'\n};\n\nfirebase.getMessages().then(body => {\n    body = body || {};\n    console.dir(Object.values(body));\n    // aplication.chat.addMessage(Object.values(body))\n    const aplication = new _src_components_app_app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        el: document.querySelector('.app'),\n        data: Object.values(body),\n        user,\n        httpService: firebase\n    });\n    aplication.render();\n});\n\n// let mock = Object.values(mockdata);\n// mock.forEach(element => {\n//     firebase.sendMessage(element);\n// });\n\n// fetch('https://geochat-project.firebaseio.com/messages.json')\n// .then(response =>{\n//     return response.json();\n// }).then((date)=>{\n//     console.dir(Object.values(mockdata));\n// });\n\n// fetch('https://geochat-project.firebaseio.com/test/msg.json', {\n//     method: 'POST',\n//     headers: new Headers({\n//         'Content-Type': 'application/json'\n//     }),\n//     body: JSON.stringify(mockdata),\n// }).then(data =>{\n//     return data.json();\n// }).then(body =>{\n//     console.dir(body.name)\n// })\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/components/app/app.css":
/*!************************************!*\
  !*** ./src/components/app/app.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/app/app.css?");

/***/ }),

/***/ "./src/components/app/app.js":
/*!***********************************!*\
  !*** ./src/components/app/app.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _field_field_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../field/field.js */ \"./src/components/field/field.js\");\n/* harmony import */ var _chat_chat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat/chat.js */ \"./src/components/chat/chat.js\");\n/* harmony import */ var _message_message_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message/message.js */ \"./src/components/message/message.js\");\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.css */ \"./src/components/app/app.css\");\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nclass App {\n    constructor({\n        el,\n        data,\n        user,\n        httpService\n    }) {\n        this.app_elem = el;\n        this.data = data;\n        this.user = user;\n        this.httpService = httpService;\n\n        this.app_centrBlock = document.createElement('div');\n        this.app_centrBlock.className = 'app_centrBlock';\n\n        this.chat = new _chat_chat_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            el: this.app_centrBlock,\n            data: data || {}\n        });\n\n        this.field = new _field_field_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.app_centrBlock);\n\n        this.field.addEventListener('newMessage', this.onSubmit.bind(this));\n    }\n\n    render() {\n        this.app_elem.appendChild(this.app_centrBlock);\n        this.chat.render();\n        this.field.render();\n    }\n\n    onSubmit(ev) {\n        const message_Obj = {\n            user: {\n                name: this.user.name,\n                photo: this.user.photo\n            },\n            text: ev.date,\n            time: new Date().toLocaleTimeString()\n        };\n\n        this.httpService.sendMessage(message_Obj).then(() => {\n            this.chat.addMessage(message_Obj);\n        });\n    }\n}\n\n//# sourceURL=webpack:///./src/components/app/app.js?");

/***/ }),

/***/ "./src/components/chat/chat.css":
/*!**************************************!*\
  !*** ./src/components/chat/chat.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/chat/chat.css?");

/***/ }),

/***/ "./src/components/chat/chat.js":
/*!*************************************!*\
  !*** ./src/components/chat/chat.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Chat; });\n/* harmony import */ var _message_message_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../message/message.js */ \"./src/components/message/message.js\");\n/* harmony import */ var _chat_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.css */ \"./src/components/chat/chat.css\");\n/* harmony import */ var _chat_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chat_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass Chat {\n    constructor({\n        el,\n        data\n    }) {\n        this.elem = document.createElement('div');\n        this.elem.className = 'app_chat_container';\n        this.el = el;\n        this.data = data;\n\n        el.appendChild(this.elem);\n    }\n\n    render() {\n        this.elem.insertAdjacentHTML('afterbegin', this.template());\n        // this.message = new Message();\n        // el.innerHTML = this.template();\n        this.data.forEach(element => {\n            new _message_message_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](element);\n        });\n    }\n    template() {\n        return `\n            <div class=\"app_chat_title\">Your name</div>\n            <div class=\"app_chat_box\"></div>\n       `;\n    }\n\n    addMessage(message) {\n        new _message_message_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](message);\n    }\n}\n\n//# sourceURL=webpack:///./src/components/chat/chat.js?");

/***/ }),

/***/ "./src/components/field/field.css":
/*!****************************************!*\
  !*** ./src/components/field/field.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/field/field.css?");

/***/ }),

/***/ "./src/components/field/field.js":
/*!***************************************!*\
  !*** ./src/components/field/field.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Field; });\n/* harmony import */ var _modules_eventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/eventEmitter.js */ \"./src/modules/eventEmitter.js\");\n/* harmony import */ var _field_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field.css */ \"./src/components/field/field.css\");\n/* harmony import */ var _field_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_field_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass Field extends _modules_eventEmitter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(el) {\n        super();\n\n        this.elem = document.createElement('form');\n        this.elem.className = 'app_field';\n        el.appendChild(this.elem);\n\n        this.elem.addEventListener('submit', this.submit.bind(this));\n    }\n\n    render() {\n        // this.elem.insertAdjacentHTML('beforeend', this.template());\n        this.elem.innerHTML = this.template();\n    }\n\n    template() {\n        return `\n        <input name=\"inp\" type=\"text\" class=\"app_field_inp\" placeholder=\"type your message\">\n        <input type=\"submit\" class=\"app_field_submit\" value=\"Отправить\">     \n       `;\n    }\n\n    submit(event) {\n        event.preventDefault();\n        const form = event.target;\n        const message = event.target.inp.value;\n\n        let new_event = new Event('newMessage', { bubbles: true });\n        new_event.date = message;\n\n        this.dispatchEvent(new_event);\n\n        form.reset();\n    }\n\n}\n\n//# sourceURL=webpack:///./src/components/field/field.js?");

/***/ }),

/***/ "./src/components/message/message.css":
/*!********************************************!*\
  !*** ./src/components/message/message.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/message/message.css?");

/***/ }),

/***/ "./src/components/message/message.js":
/*!*******************************************!*\
  !*** ./src/components/message/message.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Message; });\n/* harmony import */ var _message_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.css */ \"./src/components/message/message.css\");\n/* harmony import */ var _message_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_message_css__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Message {\n    constructor(date) {\n        this.parent = document.querySelector('.app_chat_box');\n        this.conteiner = document.createElement('div');\n        this.conteiner.classList = 'message_box';\n        this.parent.appendChild(this.conteiner);\n\n        this.date = date;\n        this.render();\n    }\n\n    render() {\n        this.conteiner.insertAdjacentHTML('beforeend', this.template(this.date));\n        this.conteiner.scrollIntoView(false);\n    }\n\n    template(options) {\n        return `\n    <img src=\"${options.user.photo}\" alt=\"\">\n    <div class=\"message\">\n    <h2 class=\"app_chat_message_sender\">${options.user.name + ':'}</h2>\n    <p class=\"app_chat_message_text\">${options.text}</p>\n    <span class=\"app_chat_message_time\">${options.time}</span>\n    </div>`;\n    }\n}\n\n//# sourceURL=webpack:///./src/components/message/message.js?");

/***/ }),

/***/ "./src/mockdata/data.js":
/*!******************************!*\
  !*** ./src/mockdata/data.js ***!
  \******************************/
/*! exports provided: mockdata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mockdata\", function() { return mockdata; });\nconst mockdata = {\n    message: {\n        user: {\n            name: 'Генри',\n            photo: './src/img/people.png'\n        },\n        text: 'Первое сообщение!',\n        time: new Date().toLocaleTimeString()\n    },\n    message1: {\n        user: {\n            name: 'Джейн',\n            photo: './src/img/people.png'\n        },\n        text: 'Второе сообщение',\n        time: new Date().toLocaleTimeString()\n    },\n    message2: {\n        user: {\n            name: 'Генри',\n            photo: './src/img/people.png'\n        },\n        text: 'И еще одно',\n        time: new Date().toLocaleTimeString()\n    }\n};\n\n//# sourceURL=webpack:///./src/mockdata/data.js?");

/***/ }),

/***/ "./src/modules/eventEmitter.js":
/*!*************************************!*\
  !*** ./src/modules/eventEmitter.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EventEmitter; });\nclass EventEmitter {\n    constructor() {\n        this.events = {};\n    }\n\n    dispatchEvent(evt) {\n        const listners = this.events[evt.type];\n        listners.forEach(listner => {\n            listner.call(this, evt);\n        });\n    }\n\n    addEventListener(evt, listner) {\n        if (evt && listner) {\n            if (!this.events[evt]) {\n                this.events[evt] = [];\n            }\n            this.events[evt].push(listner);\n        } else console.error('некорректные аргументы. Ожидалось evt=string, listner=function');\n    }\n}\n\n//# sourceURL=webpack:///./src/modules/eventEmitter.js?");

/***/ }),

/***/ "./src/modules/firebase.js":
/*!*********************************!*\
  !*** ./src/modules/firebase.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Firebase; });\nclass Firebase {\n    constructor(chat_id, baseUrl) {\n        this.chat_id = chat_id || this.initChat();\n        this.baseUrl = baseUrl || 'https://geochat-project.firebaseio.com/test/chat/';\n    }\n\n    initChat() {\n        const data = {\n            users: {\n                user1: {\n                    name: 'Генри',\n                    photo: './src/img/people.png'\n                },\n                user2: {\n                    name: 'Джейн',\n                    photo: './src/img/people.png'\n                }\n            }\n        };\n\n        this.request({\n            url: '/chat.json',\n            method: \"POST\",\n            data\n        }).then(body => {\n            this.chat_id = body.name;\n            console.log(this.chat_id);\n        });\n    }\n\n    getMessages() {\n        return this.request({\n            url: this.chat_id + '/messages.json',\n            method: 'GET'\n        });\n    }\n\n    sendMessage(data) {\n        return this.request({\n            url: this.chat_id + '/messages.json',\n            method: 'POST',\n            data\n        });\n    }\n\n    request({\n        url = '',\n        method = 'GET',\n        data\n    }) {\n        const params = {\n            method,\n            headers: new Headers({\n                'Content-Type': 'application/json'\n            })\n        };\n\n        if (data) {\n            params.body = JSON.stringify(data);\n        }\n\n        return this.transport(this.baseUrl + url, params);\n    }\n\n    transport(url, params) {\n        return fetch(url, params).then(response => response.json());\n    }\n}\n\n//# sourceURL=webpack:///./src/modules/firebase.js?");

/***/ })

/******/ });