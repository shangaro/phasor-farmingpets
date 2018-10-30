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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//phaser\r\n\r\nvar game = new Phaser.Game(640,360,Phaser.AUTO);\r\n\r\nvar GameState={\r\n   preload: function(){\r\n    this.load.image('background',\"./src/assets/background.png\");\r\n    this.load.image('chicken',\"./src/assets/chicken.png\");\r\n    this.load.image('horse',\"./src/assets/horse.png\");\r\n    this.load.image('pig',\"./src/assets/pig.png\");\r\n    this.load.image('sheep',\"./src/assets/sheep3.png\");\r\n    this.load.image('arrow',\"./src/assets/arrow.png\");\r\n\r\n   },\r\n   //executed after everything is loaded\r\n   create:function(){\r\n\r\n    this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;\r\n    this.scale.pageAlignHorizontally=true;\r\n    this.scale.pageAlignVertically=true;\r\n\r\n    this.background=this.game.add.sprite(0,0,'background');\r\n    //center of the world\r\n    // this.chicken=this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'chicken');\r\n    // //place the sprite by its center not the top-left corner\r\n    // this.chicken.anchor.setTo(0.5,0.5);\r\n    // this.chicken.scale.setTo(0.75,0.75);\r\n\r\n    //animalData\r\n    var animalData=[\r\n        { key:'chicken',text:'CHICKEN'},\r\n        { key:'pig', text:'PIG'},\r\n        {key:'sheep',text:'SHEEP'},\r\n        {key:'horse',text:'HORSE'}\r\n    ];\r\n    this.animals=this.game.add.group();\r\n    var self=this;\r\n    var animal;\r\n    animalData.forEach(function(element){\r\n       animal= self.animals.create(-1000,self.game.world.centerY,element.key);\r\n       animal.customParams={text:element.text};\r\n       animal.anchor.setTo(0.5);\r\n       animal.inputEnabled=true;\r\n       animal.input.pixelPerfectClick=true;\r\n       animal.events.onInputDown.add(self.animateAnimal,self);\r\n\r\n    });\r\n    this.currentAnimal=this.animals.previous();\r\n\r\n    this.currentAnimal.position.set(this.game.world.centerX,this.game.world.centerY);\r\n    // right arrow\r\n    this.rightArrow=this.game.add.sprite(580,this.game.world.centerY,'arrow');\r\n    this.rightArrow.scale.setTo(0.5);\r\n    this.rightArrow.anchor.setTo(0.5);\r\n    this.rightArrow.customParams={direction:1};\r\n    this.rightArrow.inputEnabled=true;\r\n    this.rightArrow.input.pixelPerfectClick=true;\r\n    this.rightArrow.events.onInputDown.add(this.switchAnimal,this);\r\n\r\n    //left arrow;\r\n    this.leftArrow=this.game.add.sprite(60,this.game.world.centerY,'arrow');\r\n    this.leftArrow.anchor.setTo(0.5);\r\n    this.leftArrow.scale.setTo(-0.5,0.5);\r\n    this.leftArrow.customParams={direction:-1};\r\n    this.leftArrow.inputEnabled=true;\r\n    this.leftArrow.pixelPerfectClick=true;\r\n    this.leftArrow.events.onInputDown.add(this.switchAnimal,this);\r\n    \r\n\r\n    // // horse\r\n    // this.horse=this.game.add.sprite(120,10,'horse');\r\n    // this.horse.scale.setTo(0.5);\r\n\r\n    //pig\r\n    // this.pig=this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'pig');\r\n    // this.pig.anchor.setTo(0.5);\r\n    \r\n\r\n    //sheep\r\n    // this.sheep=this.game.add.sprite(100,250,'sheep');\r\n    // this.sheep.anchor.setTo(0.5);\r\n    // this.sheep.scale.setTo(0.75,0.75);\r\n    // this.sheep.angle=45;\r\n\r\n    //left arrow\r\n\r\n   },\r\n\r\n   update:function(){\r\n   },\r\n   switchAnimal:function(sprite,event){\r\n       console.log(\"move animal\");\r\n   },\r\n   animateAnimal:function(sprite,event){\r\n    console.log(\"animate animal\");\r\n   }\r\n\r\n\r\n\r\n};\r\ngame.state.add('GameState',GameState);\r\ngame.state.start('GameState');\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });