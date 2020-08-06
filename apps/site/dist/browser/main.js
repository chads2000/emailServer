(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!***************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>Welcome to {{ title }}!</h1>\n</div>\n<router-outlet></router-outlet>\n\n<footer>&copy; Email Server</footer>\n");

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./homepage/homepage.module": [
		"./src/app/homepage/homepage.module.ts",
		"homepage-homepage-module"
	],
	"./not_found/not_found.module": [
		"./src/app/not_found/not_found.module.ts",
		"not_found-not_found-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const routes = [
    {
        path: '',
        loadChildren: './homepage/homepage.module#HomepageModule',
        pathMatch: 'full'
    },
    {
        path: '404',
        loadChildren: './not_found/not_found.module#NotFoundModule',
        pathMatch: 'full'
    },
    {
        path: '404/',
        loadChildren: './not_found/not_found.module#NotFoundModule',
        pathMatch: 'full'
    },
    {
        path: '**',
        loadChildren: './not_found/not_found.module#NotFoundModule'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaXRlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.pTitle = 'Email Server';
    }
    get title() {
        return this.pTitle;
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_apis_emails_emails_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/apis/emails/emails.module */ "./src/app/services/apis/emails/emails.module.ts");
/* harmony import */ var _store_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/effects */ "./src/app/store/effects.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/reducers */ "./src/app/store/reducers.ts");










const ApiModules = [_services_apis_emails_emails_module__WEBPACK_IMPORTED_MODULE_7__["EmailsAPIModule"]];
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserTransferStateModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forRoot(_store_effects__WEBPACK_IMPORTED_MODULE_8__["Effects"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["reducers"]),
            ...ApiModules,
        ],
        exports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/services/apis/emails/emails.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/apis/emails/emails.module.ts ***!
  \*******************************************************/
/*! exports provided: EmailsAPIModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailsAPIModule", function() { return EmailsAPIModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _emails_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emails.service */ "./src/app/services/apis/emails/emails.service.ts");



let EmailsAPIModule = class EmailsAPIModule {
};
EmailsAPIModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [_emails_service__WEBPACK_IMPORTED_MODULE_2__["EmailsApiService"]],
        exports: [_emails_service__WEBPACK_IMPORTED_MODULE_2__["EmailsApiService"]],
    })
], EmailsAPIModule);



/***/ }),

/***/ "./src/app/services/apis/emails/emails.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/apis/emails/emails.service.ts ***!
  \********************************************************/
/*! exports provided: EmailsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailsApiService", function() { return EmailsApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/ajax */ "../node_modules/rxjs/_esm2015/ajax/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm2015/operators/index.js");




let EmailsApiService = class EmailsApiService {
    constructor() {
        this.url = 'http://localhost:3030/emails';
    }
    all() {
        return Object(rxjs_ajax__WEBPACK_IMPORTED_MODULE_2__["ajax"])({
            url: this.url,
            method: 'GET',
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            return response.response.data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((emails) => {
            return emails.map((email) => {
                email.date = new Date(email.date);
                return email;
            });
        }));
    }
    get(id) {
        return Object(rxjs_ajax__WEBPACK_IMPORTED_MODULE_2__["ajax"])({
            url: `${this.url}/${id}`,
            method: 'GET',
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            return response.response.data[0];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((email) => {
            email.date = new Date(email.date);
            return email;
        }));
    }
    delete(id) {
        return Object(rxjs_ajax__WEBPACK_IMPORTED_MODULE_2__["ajax"])({
            url: `${this.url}/${id}`,
            method: 'DELETE',
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            return response.response.data[0];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((email) => {
            email.date = new Date(email.date);
            return email;
        }));
    }
};
EmailsApiService.ctorParameters = () => [];
EmailsApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], EmailsApiService);



/***/ }),

/***/ "./src/app/store/effects.ts":
/*!**********************************!*\
  !*** ./src/app/store/effects.ts ***!
  \**********************************/
/*! exports provided: Effects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Effects", function() { return Effects; });
/* harmony import */ var _emails_emails_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emails/emails.effects */ "./src/app/store/emails/emails.effects.ts");

const Effects = [_emails_emails_effects__WEBPACK_IMPORTED_MODULE_0__["EmailsEffects"]];


/***/ }),

/***/ "./src/app/store/emails/emails.actions.ts":
/*!************************************************!*\
  !*** ./src/app/store/emails/emails.actions.ts ***!
  \************************************************/
/*! exports provided: EmailsActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailsActions", function() { return EmailsActions; });
var EmailsActions;
(function (EmailsActions) {
    let ActionTypes;
    (function (ActionTypes) {
        ActionTypes["LOAD"] = "[Emails] Load";
        ActionTypes["LOADED"] = "[Emails] Loaded";
        ActionTypes["EMAIL_LOAD"] = "[Email] Load";
        ActionTypes["EMAIL_LOADED"] = "[Email] Loaded";
        ActionTypes["EMAIL_DELETE"] = "[Email] Delete";
        ActionTypes["EMAIL_DELETED"] = "[Email] Deleted";
    })(ActionTypes = EmailsActions.ActionTypes || (EmailsActions.ActionTypes = {}));
    class Load {
        constructor(payload) {
            this.payload = payload;
            this.type = ActionTypes.LOAD;
        }
    }
    EmailsActions.Load = Load;
    class Loaded {
        constructor(payload) {
            this.payload = payload;
            this.type = ActionTypes.LOADED;
        }
    }
    EmailsActions.Loaded = Loaded;
    class EmailLoad {
        constructor(payload) {
            this.payload = payload;
            this.type = ActionTypes.EMAIL_LOAD;
        }
    }
    EmailsActions.EmailLoad = EmailLoad;
    class EmailLoaded {
        constructor(payload) {
            this.payload = payload;
            this.type = ActionTypes.EMAIL_LOADED;
        }
    }
    EmailsActions.EmailLoaded = EmailLoaded;
    class EmailDelete {
        constructor(payload) {
            this.payload = payload;
            this.type = ActionTypes.EMAIL_DELETE;
        }
    }
    EmailsActions.EmailDelete = EmailDelete;
    class EmailDeleted {
        constructor(payload) {
            this.payload = payload;
            this.type = ActionTypes.EMAIL_DELETED;
        }
    }
    EmailsActions.EmailDeleted = EmailDeleted;
})(EmailsActions || (EmailsActions = {}));


/***/ }),

/***/ "./src/app/store/emails/emails.effects.ts":
/*!************************************************!*\
  !*** ./src/app/store/emails/emails.effects.ts ***!
  \************************************************/
/*! exports provided: EmailsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailsEffects", function() { return EmailsEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _emails_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emails.actions */ "./src/app/store/emails/emails.actions.ts");
/* harmony import */ var _emails_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./emails.reducers */ "./src/app/store/emails/emails.reducers.ts");
/* harmony import */ var _services_apis_emails_emails_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/apis/emails/emails.service */ "./src/app/services/apis/emails/emails.service.ts");









let EmailsEffects = class EmailsEffects {
    constructor(actions$, store, emailsApiService) {
        this.actions$ = actions$;
        this.store = store;
        this.emailsApiService = emailsApiService;
        this.load$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_emails_actions__WEBPACK_IMPORTED_MODULE_6__["EmailsActions"].ActionTypes.LOAD), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(() => {
            return this.loadEmails$();
        }));
        this.loadEmail$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_emails_actions__WEBPACK_IMPORTED_MODULE_6__["EmailsActions"].ActionTypes.EMAIL_LOAD), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])((action) => {
            return this.email$(action.payload.id);
        }));
        this.deleteEmail$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_emails_actions__WEBPACK_IMPORTED_MODULE_6__["EmailsActions"].ActionTypes.EMAIL_DELETE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])((action) => {
            return this.emailDelete$(action.payload.id);
        }));
    }
    loadEmails$() {
        return this.store.select(_emails_reducers__WEBPACK_IMPORTED_MODULE_7__["EmailsReducers"].getAllEmails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])((emails) => {
            if (Object.keys(!!emails ? emails : {}).length === 0) {
                return this.emailsApiService.all();
            }
            return Object.values(emails);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((emails) => {
            return new _emails_actions__WEBPACK_IMPORTED_MODULE_6__["EmailsActions"].Loaded({ emails });
        }));
    }
    email$(id) {
        return this.store.select(_emails_reducers__WEBPACK_IMPORTED_MODULE_7__["EmailsReducers"].getAllEmails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])((emails) => {
            if (!!emails[id] && !!emails[id].original) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(emails[id]);
            }
            return this.emailsApiService.get(id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((email) => {
            return new _emails_actions__WEBPACK_IMPORTED_MODULE_6__["EmailsActions"].EmailLoaded({ email });
        }));
    }
    emailDelete$(id) {
        return this.emailsApiService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((email) => {
            return new _emails_actions__WEBPACK_IMPORTED_MODULE_6__["EmailsActions"].EmailDeleted({ email });
        }));
    }
};
EmailsEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _services_apis_emails_emails_service__WEBPACK_IMPORTED_MODULE_8__["EmailsApiService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], EmailsEffects.prototype, "load$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], EmailsEffects.prototype, "loadEmail$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], EmailsEffects.prototype, "deleteEmail$", void 0);
EmailsEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], EmailsEffects);



/***/ }),

/***/ "./src/app/store/emails/emails.reducers.ts":
/*!*************************************************!*\
  !*** ./src/app/store/emails/emails.reducers.ts ***!
  \*************************************************/
/*! exports provided: EmailsReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailsReducers", function() { return EmailsReducers; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _emails_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emails.actions */ "./src/app/store/emails/emails.actions.ts");
/* harmony import */ var _emails_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emails.state */ "./src/app/store/emails/emails.state.ts");



const emails = (state, payloadEmails) => {
    const emails = {};
    payloadEmails.forEach((email) => {
        emails[email.id] = email;
    });
    return { emails };
};
const email = (state, email) => {
    const emails = Object.assign({}, state.emails);
    const newEmail = Object.assign({}, email, { read: true });
    emails[email.id] = newEmail;
    return { emails, email: newEmail };
};
const deleteEmail = (state, email) => {
    const emails = Object.assign({}, state.emails);
    delete emails[email.id];
    const newEmail = Object.assign({}, email, { deleted: true });
    return { emails, email: newEmail };
};
var EmailsReducers;
(function (EmailsReducers) {
    function reducer(state = _emails_state__WEBPACK_IMPORTED_MODULE_2__["EmailsState"].initial, action) {
        switch (action.type) {
            case _emails_actions__WEBPACK_IMPORTED_MODULE_1__["EmailsActions"].ActionTypes.LOADED:
                return emails(state, action.payload.emails);
            case _emails_actions__WEBPACK_IMPORTED_MODULE_1__["EmailsActions"].ActionTypes.EMAIL_LOADED:
                return email(state, action.payload.email);
            case _emails_actions__WEBPACK_IMPORTED_MODULE_1__["EmailsActions"].ActionTypes.EMAIL_DELETED:
                return deleteEmail(state, action.payload.email);
            default:
                return state;
        }
    }
    EmailsReducers.reducer = reducer;
    EmailsReducers.getEmails = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('emails');
    EmailsReducers.getAllEmails = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(EmailsReducers.getEmails, state => state.emails);
    EmailsReducers.getEmail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('email');
    EmailsReducers.getLoadedEmail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(EmailsReducers.getEmail, state => state.email);
})(EmailsReducers || (EmailsReducers = {}));


/***/ }),

/***/ "./src/app/store/emails/emails.state.ts":
/*!**********************************************!*\
  !*** ./src/app/store/emails/emails.state.ts ***!
  \**********************************************/
/*! exports provided: EmailsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailsState", function() { return EmailsState; });
var EmailsState;
(function (EmailsState) {
    EmailsState.initial = {
        emails: null,
        email: null,
    };
})(EmailsState || (EmailsState = {}));


/***/ }),

/***/ "./src/app/store/reducers.ts":
/*!***********************************!*\
  !*** ./src/app/store/reducers.ts ***!
  \***********************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _emails_emails_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emails/emails.reducers */ "./src/app/store/emails/emails.reducers.ts");

const reducers = {
    emails: _emails_emails_reducers__WEBPACK_IMPORTED_MODULE_0__["EmailsReducers"].reducer,
    email: _emails_emails_reducers__WEBPACK_IMPORTED_MODULE_0__["EmailsReducers"].reducer,
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chadserpan/Documents/DevShare/email_server/apps/site/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map