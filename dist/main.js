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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/DOMController.js":
/*!******************************!*\
  !*** ./src/DOMController.js ***!
  \******************************/
/*! exports provided: clearContent, renderProjectList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearContent\", function() { return clearContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProjectList\", function() { return renderProjectList; });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\nconst content = document.getElementById('content');\n\nconst clearContent = () => {\n    content.innerHTML = '';\n    const divList = document.createElement('div');\n    divList.id = 'div-list';\n    const divTitle = document.createElement('div');\n    divTitle.id = 'div-title';\n\n    const divItems = document.createElement('div');\n    divItems.id = 'div-items';\n\n    content.appendChild(divList);\n    content.appendChild(divItems);\n    \n}\n\nconst renderProjectList = () => {\n    const divList = document.getElementById('div-list');\n    clearDivItems();\n\n    const divListHead = document.createElement('div');\n    divListHead.id = 'div-list-head';\n\n    const projectsList = document.createElement('div');\n    projectsList.id = 'projects-list';\n\n    const addProjectSvg = document.createElement('svg');\n    addProjectSvg.className = 'svg-btn';\n    addProjectSvg.innerHTML = '<svg id=\"svg-add\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus-circle\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line></svg>'\n\n\n    const title = document.createElement('h2');\n    title.innerText = 'Projects';\n\n    divListHead.appendChild(title);\n    divListHead.appendChild(addProjectSvg);\n    divList.appendChild(divListHead);\n    divList.appendChild(projectsList);\n\n    _storage__WEBPACK_IMPORTED_MODULE_0__[\"projects\"].forEach(project => { \n        const divProject = document.createElement('div');\n        divProject.className = 'div-project';\n        const projectTitle = document.createElement('p');\n        projectTitle.innerText = project.title;\n        const projectDate = document.createElement('p');\n        projectDate.innerText = project.dueDate;\n        projectDate.className = 'project-date';\n\n        divProject.appendChild(projectTitle);\n        divProject.appendChild(projectDate);\n\n        projectsList.appendChild(divProject);\n        divProject.addEventListener('click', () => {\n            renderProjectTasks(project);\n        })\n    }); \n\n    addProjectSvg.addEventListener('click', () => {\n        console.log('WOOOO!');\n        renderPopUp(true);\n    })\n}\n\nconst renderProjectTasks = (project) => {\n    clearDivItems();\n    const divItems = document.getElementById('div-items');\n    const divItemsHeader = document.getElementById('div-items-header');\n    const addTaskSvg = document.createElement('svg');\n    addTaskSvg.id = 'addtask-btn'\n    addTaskSvg.className = 'svg-btn';\n    addTaskSvg.innerHTML = '<svg id=\"svg-add\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus-circle\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line></svg>' \n\n    const divTasks = document.createElement('div');\n    divTasks.id = 'div-tasks'\n\n    divItems.appendChild(divTasks);\n    //create each task in the DOM.\n    project.tasks.forEach(task => { \n        const divTask = document.createElement('div');\n        divTask.className = 'div-task';\n\n        const taskTitle = document.createElement('h3');\n        taskTitle.innerText = task.title;\n\n        const priority = document.createElement('p');\n        priority.innerText = task.priority;\n        divTask.appendChild(taskTitle);\n        divTask.appendChild(priority);\n        if(task.dueDate != null) {\n            const dueDate = document.createElement('p');\n            dueDate.innerText = task.dueDate;\n            divTask.appendChild(dueDate);\n        }\n        divTasks.appendChild(divTask);\n    })\n\n    divItemsHeader.appendChild(addTaskSvg);\n}\n\nconst clearDivItems = () => {\n    const divItems = document.getElementById('div-items');\n    divItems.innerHTML = '';\n    const divItemsTitle = document.createElement('h2');\n\n    const divItemsHeader = document.createElement('div');\n    divItemsHeader.id = 'div-items-header';\n\n    divItemsTitle.innerText = 'Tasks';\n\n    divItemsHeader.appendChild(divItemsTitle);\n\n    divItems.appendChild(divItemsHeader);\n}\n\nconst renderPopUp =  (isProject) => {\n    clearPopUp();\n    const divPopUp = document.createElement('div');\n    divPopUp.id= 'div-popup';\n    const itemTitle = document.createElement('p');\n    const itemTitleField = document.createElement('input');\n\n    const dueDateTitle = document.createElement('p');\n    dueDateTitle.innerText = 'Optional due date';\n    const dueDateField = document.createElement('input');\n    dueDateField.type = 'date';\n\n    const btnCreate = document.createElement('button');\n    btnCreate.innerText = 'Add';\n\n    const descriptionTitle = document.createElement('p');\n    descriptionTitle.innerText = 'Description';\n    const descriptionField = document.createElement('input');\n    descriptionField.placeholder = 'A description about some project.';\n\n    divPopUp.appendChild(itemTitle);\n    divPopUp.appendChild(itemTitleField);\n\n\n    if (isProject) {\n        console.log(isProject);\n        itemTitle.innerText = 'Project Title';\n        itemTitleField.placeholder = 'Some Project';\n\n        divPopUp.appendChild(descriptionTitle);\n        divPopUp.appendChild(descriptionField);\n    }\n    else {\n        itemTitle.innerText = 'Task Title';\n        itemTitleField.placeholder = 'Do laundry';\n        const priorityTitle = document.createElement('p');\n        priorityTitle.innerText = 'Priority';\n\n        const selectPriority = document.createElement('select');\n        const highPriority = document.createElement('option');\n        const medPriority = document.createElement('option');\n        const lowPriority = document.createElement('option');\n\n        highPriority.value = 'High';\n        highPriority.innerText = 'High';\n        medPriority.value = 'Medium';\n        medPriority.innerText = 'Medium';\n        lowPriority.value = 'Low';\n        lowPriority.innerText = 'Low';\n\n        selectPriority.appendChild(highPriority);\n        selectPriority.appendChild(medPriority);\n        selectPriority.appendChild(lowPriority);\n\n    }\n    divPopUp.appendChild(dueDateTitle);\n    divPopUp.appendChild(dueDateField);\n\n    const divButtons = document.createElement('div');\n    divButtons.id = 'div-popup-btns';\n    const acceptSvg = document.createElement('div');\n    acceptSvg.className = 'svg-btn';\n    const closeSvg = document.createElement('div');\n    closeSvg.className = 'svg-btn';\n    acceptSvg.innerHTML = '' + '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus-circle\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line></svg>'\n    closeSvg.innerHTML = '' + '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-x-circle\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line></svg>'\n    divButtons.appendChild(acceptSvg);\n    divButtons.appendChild(closeSvg);\n\n    divPopUp.appendChild(divButtons);\n    \n    document.body.appendChild(divPopUp);\n\n    acceptSvg.addEventListener('click', () => {\n        //This needs to handle TASK AND PROJECT creation. Currently it only handles creating new projects.\n        if (isProject) {\n            console.log('Adding new Project');\n            const newProject = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](itemTitleField.value, descriptionField.value, dueDateField.value );\n            console.log('newProject:', newProject);\n            Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"addProject\"])(newProject);\n        }\n        else {\n            console.log('Adding new Task.');\n        }\n        console.log('WOOO');\n\n        clearPopUp();\n        renderProjectList();\n    })\n\n    closeSvg.addEventListener('click', () => {\n        clearPopUp();\n    })\n}\n\nconst clearPopUp = () => {\n    const divPopUp = document.getElementById('div-popup');\n    if (divPopUp) {\n        document.body.removeChild(divPopUp);\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/DOMController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _DOMController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMController */ \"./src/DOMController.js\");\n\n\n\nObject(_storage__WEBPACK_IMPORTED_MODULE_0__[\"loadStorage\"])();\n\nconst btnProjects = document.getElementById('nav-projects');\n\nconst btnNotes = document.getElementById('nav-notes');\n\nbtnProjects.addEventListener('click', () => {\n    Object(_DOMController__WEBPACK_IMPORTED_MODULE_1__[\"clearContent\"])();\n    Object(_DOMController__WEBPACK_IMPORTED_MODULE_1__[\"renderProjectList\"])();\n})\n\nbtnNotes.addEventListener('click', () => {\n    Object(_DOMController__WEBPACK_IMPORTED_MODULE_1__[\"clearContent\"])();\n})\n\nObject(_DOMController__WEBPACK_IMPORTED_MODULE_1__[\"clearContent\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Project {\n    constructor(title, description, dueDate) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.tasks = [];\n    }\n\n    addTask(task) {\n        this.tasks.push(task);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/*! exports provided: printProject, printNotes, loadStorage, addProject, addNote, projects, notes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"printProject\", function() { return printProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"printNotes\", function() { return printNotes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadStorage\", function() { return loadStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProject\", function() { return addProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addNote\", function() { return addNote; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projects\", function() { return projects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"notes\", function() { return notes; });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\nlet projects = [];\nlet notes = [];\n\nconst addProject = (project) => {\n    console.log('addProject: adding ' + project);\n    projects.push(project);\n    localStorage.projects = JSON.stringify(projects);\n}\n\nconst addNote = (note) => {\n    console.log('addNote called');\n    notes.push(note);\n    localStorage.notes = JSON.stringify(notes);\n}\n\nconst addTask = (project, task) => {\n    console.log(`addTask(): adding ${task} to ${project}`);\n    project.tasks.push(task);\n    localStorage.projects = JSON.stringify(projects);\n}\n\n\nconst loadStorage = () => {\n    //first visit\n    if (localStorage.projects === undefined && localStorage.notes === undefined) {\n        console.log('first time visiting.'); //!\n        const sampleProject = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Todo List', 'Odin Project Todo list', '2020-07-15');\n        const sampleTask = new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Notes Section', 'medium', '2020-07-12');\n        sampleProject.addTask(sampleTask);\n        addProject(sampleProject);\n\n        const sampleNote = \"I've been watching a lot of videos about mechanical keyboards. There are so many kinds of switches with all of their different sounds and tactile feels. There are tons of keycaps which means that the customization and personalization is practically unlimited. However, most things are done in small batches when manufactured, which means that things are often really expensive.\";\n        addNote(sampleNote);\n\n    }\n    else {\n        projects = JSON.parse(localStorage.projects);\n        notes = JSON.parse(localStorage.notes);\n    }\n}\n\n//DEBUG\n\nconst printProject = () => {\n    console.log('Projects:');\n    console.table(projects);\n}\n\nconst printNotes = () => {\n    console.log('Notes:');\n    console.table(notes);\n}\n\n\n\n\n//# sourceURL=webpack:///./src/storage.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Task {\n    constructor(title, priority, dueDate, completed) {\n        this.title = title;\n        this.priority = priority;\n        this.dueDate = dueDate;\n        this.completed = completed;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\n\n//# sourceURL=webpack:///./src/task.js?");

/***/ })

/******/ });