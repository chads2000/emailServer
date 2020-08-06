(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homepage-homepage-module"],{

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/homepage/components/email/email.component.html":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/homepage/components/email/email.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-email-list [emails]=\"emails$ | async\"></app-email-list>\n<app-email-view\n  [ngClass]=\"{\n    show: !!(isViewOpen$ | async),\n    hide: !(isViewOpen$ | async)\n  }\"\n  [email]=\"email$ | async\"\n></app-email-view>\n");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/homepage/components/email_list/email_list.component.html":
/*!*****************************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/homepage/components/email_list/email_list.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"emails.length === 0\">\n  No Emails\n</div>\n<ul class=\"email_list\" *ngIf=\"emails.length > 0\">\n  <app-email-list-item *ngFor=\"let email of emails\" [email]=\"email\"></app-email-list-item>\n</ul>\n");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/homepage/components/email_list_item/email_list_item.component.html":
/*!***************************************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/homepage/components/email_list_item/email_list_item.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<li (click)=\"view()\" [ngClass]=\"{ active: isActive$ | async, read: read, unread: !read }\">\n  {{ subject\n  }}<span\n    ><br /><a href=\"mailto:{{ fromEmail }}\">{{ from }}</a\n    ><br />{{ date | date: 'medium' }}\n  </span>\n</li>\n");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/homepage/components/email_view/email_view.component.html":
/*!*****************************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/homepage/components/email_view/email_view.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"email_view\" *ngIf=\"loaded\">\n  <button class=\"btn_close\" (click)=\"close()\">close</button>\n  <h1>{{ subject }}</h1>\n  <p>\n    From: <a href=\"mailto:{{ fromEmail }}\">{{ from }}</a\n    ><br />\n    To: <a href=\"mailto:{{ toEmail }}\">{{ to }}</a>\n  </p>\n  <div class=\"email_view\" *ngIf=\"hasHtmlAndPlain\">\n    <button class=\"btn_html\" (click)=\"display('html')\">Html</button>\n    <button class=\"btn_plain\" (click)=\"display('plain')\">Plain</button>\n  </div>\n  <div\n    #htmlView\n    class=\"view_pane\"\n    [ngClass]=\"{ show: isHtml, hide: !isHtml }\"\n    [innerHTML]=\"html\"\n  ></div>\n  <div\n    #plainView\n    class=\"view_pane\"\n    [ngClass]=\"{ show: !isHtml, hide: isHtml }\"\n    [innerHTML]=\"plain\"\n  ></div>\n  <button class=\"btn_delete\" (click)=\"delete()\">Delete</button>\n</div>\n");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html":
/*!*****************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <app-email></app-email>\n</div>\n");

/***/ }),

/***/ "./src/app/homepage/components/email/email.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/homepage/components/email/email.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: stretch;\n  height: calc(100vh - 150px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUvc3JjL2FwcC9ob21lcGFnZS9jb21wb25lbnRzL2VtYWlsL2VtYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtBQUNGIiwiZmlsZSI6InNpdGUvc3JjL2FwcC9ob21lcGFnZS9jb21wb25lbnRzL2VtYWlsL2VtYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/homepage/components/email/email.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/homepage/components/email/email.component.ts ***!
  \**************************************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/email.service */ "./src/app/homepage/services/email.service.ts");




let EmailComponent = class EmailComponent {
    constructor(emailsService) {
        this.emailsService = emailsService;
        this.inited = false;
        this.emails$ = this.loadEmails();
        this.email$ = this.loadEmail();
        this.isViewOpen$ = this.emailsService.isViewOpen$;
    }
    ngAfterContentInit() {
        this.emailsService.init();
    }
    loadEmails() {
        return this.emailsService.emails$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((emails) => {
            return emails ? Object.values(emails) : [];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((emails) => {
            return this.sortEmails(emails);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((emails) => {
            if (emails && emails.length > 0) {
                if (!this.inited || this.emailsService.deleting) {
                    this.emailsService.get(emails[0].id);
                }
                this.emailsService.deleting = false;
                this.inited = true;
            }
        }));
    }
    loadEmail() {
        return this.emailsService.email$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((email) => {
            if (!!email) {
                this.emailsService.isViewOpen$.next(true);
            }
        }));
    }
    sortEmails(emails) {
        return emails.sort((emailA, emailB) => {
            if (emailA.date === emailB.date) {
                if (emailA.subject > emailB.subject) {
                    return 1;
                }
                if (emailA.subject < emailB.subject) {
                    return -1;
                }
                return 0;
            }
            return emailA.date.getTime() - emailB.date.getTime();
        });
    }
};
EmailComponent.ctorParameters = () => [
    { type: _services_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailsService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_services_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailsService"],] }] }
];
EmailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./email.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/homepage/components/email/email.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./email.component.scss */ "./src/app/homepage/components/email/email.component.scss")).default]
    })
], EmailComponent);



/***/ }),

/***/ "./src/app/homepage/components/email/email.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/homepage/components/email/email.module.ts ***!
  \***********************************************************/
/*! exports provided: EmailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailModule", function() { return EmailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _email_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email.component */ "./src/app/homepage/components/email/email.component.ts");
/* harmony import */ var _email_view_email_view_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../email_view/email_view.module */ "./src/app/homepage/components/email_view/email_view.module.ts");
/* harmony import */ var _email_list_email_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../email_list/email_list.module */ "./src/app/homepage/components/email_list/email_list.module.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/services.module */ "./src/app/homepage/services/services.module.ts");







let EmailModule = class EmailModule {
};
EmailModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_email_component__WEBPACK_IMPORTED_MODULE_3__["EmailComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _email_list_email_list_module__WEBPACK_IMPORTED_MODULE_5__["EmailListModule"], _email_view_email_view_module__WEBPACK_IMPORTED_MODULE_4__["EmailViewModule"], _services_services_module__WEBPACK_IMPORTED_MODULE_6__["ServicesModule"]],
        exports: [_email_component__WEBPACK_IMPORTED_MODULE_3__["EmailComponent"]],
    })
], EmailModule);



/***/ }),

/***/ "./src/app/homepage/components/email_list/email_list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/homepage/components/email_list/email_list.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  min-width: 100%;\n  height: inherit;\n  overflow: auto;\n  padding: 8px;\n  border: solid 1px #002422;\n}\n:host .email_list {\n  list-style: none;\n  width: 100%;\n  padding: 0px;\n  margin: 0px;\n}\n@media (min-width: 600px) {\n  :host {\n    min-width: 25%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUvc3JjL2FwcC9ob21lcGFnZS9jb21wb25lbnRzL2VtYWlsX2xpc3QvZW1haWxfbGlzdC5jb21wb25lbnQuc2NzcyIsInNpdGUvc3JjL2Nzcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFERjtBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFESjtBQ3VKRTtFRGpLRjtJQWVJLGNBQUE7RUFERjtBQUNGIiwiZmlsZSI6InNpdGUvc3JjL2FwcC9ob21lcGFnZS9jb21wb25lbnRzL2VtYWlsX2xpc3QvZW1haWxfbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Nzcy92YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCB0aGVtZS1jb2xvcigkdGhlbWUtcHJpbWFyeSwgOTAwKTtcblxuICAuZW1haWxfbGlzdCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cblxuICBAaW5jbHVkZSB0YWJsZXQoKSB7XG4gICAgbWluLXdpZHRoOiAyNSU7XG4gIH1cbn1cbiIsIkBmdW5jdGlvbiB0aGVtZS1jb2xvcigkcGFsZXR0ZSwgJGh1ZTogZGVmYXVsdCwgJG9wYWNpdHk6IG51bGwpIHtcbiAgLy8gSWYgaHVlS2V5IGlzIGEgbnVtYmVyIGJldHdlZW4gemVybyBhbmQgb25lLCB0aGVuIGl0IGFjdHVhbGx5IGNvbnRhaW5zIGFuXG4gIC8vIG9wYWNpdHkgdmFsdWUsIHNvIHJlY2FsbCB0aGlzIGZ1bmN0aW9uIHdpdGggdGhlIGRlZmF1bHQgaHVlIGFuZCB0aGF0IGdpdmVuIG9wYWNpdHkuXG4gIEBpZiB0eXBlLW9mKCRodWUpID09IG51bWJlciBhbmQgJGh1ZSA+PSAwIGFuZCAkaHVlIDw9IDEge1xuICAgIEByZXR1cm4gdGhlbWUtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQsICRodWUpO1xuICB9XG5cbiAgJGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLCAkaHVlKTtcbiAgJG9wYWNpdHk6IGlmKCRvcGFjaXR5ID09IG51bGwsIG9wYWNpdHkoJGNvbG9yKSwgJG9wYWNpdHkpO1xuXG4gIEByZXR1cm4gcmdiYSgkY29sb3IsICRvcGFjaXR5KTtcbn1cblxuJGRlZmF1bHQtcGl4ZWw6IDE2O1xuXG5AZnVuY3Rpb24gcmVtLWNhbCgkdGFyZ2V0LXBpeGVsKSB7XG4gIEByZXR1cm4gJHRhcmdldC1waXhlbC8kZGVmYXVsdC1waXhlbCArIHJlbTtcbn1cblxuQG1peGluIGFzcGVjdC1yYXRpby11cGRhdGUoJHdpZHRoLCAkaGVpZ2h0KSB7XG4gICY6YmVmb3JlIHtcbiAgICBwYWRkaW5nLXRvcDogKCRoZWlnaHQgLyAkd2lkdGgpICogMTAwJTtcbiAgfVxufVxuQG1peGluIGFzcGVjdC1yYXRpbygkd2lkdGgsICRoZWlnaHQpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOmJlZm9yZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29udGVudDogJyc7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6ICgkaGVpZ2h0IC8gJHdpZHRoKSAqIDEwMCU7XG4gIH1cbiAgPiAqIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICB9XG59XG5cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG59XG5cbkBtaXhpbiBvcGFjaXR5KCR2YWx1ZSkge1xuICAkSUVWYWx1ZTogJHZhbHVlICogMTAwO1xuICBvcGFjaXR5OiAkdmFsdWU7XG4gIC1tcy1maWx0ZXI6ICdwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0nICsgJElFVmFsdWUgKyAnKSc7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0kSUVWYWx1ZSk7XG59XG5cbi8vIEFkZHMgc2hhZG93IHRvIGEgYm94XG5AbWl4aW4gYm94LXNoYWRvdygkYXJndW1lbnRzLi4uKSB7XG4gIC1tb3otYm94LXNoYWRvdzogJGFyZ3VtZW50cztcbiAgLW8tYm94LXNoYWRvdzogJGFyZ3VtZW50cztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYXJndW1lbnRzO1xuICBib3gtc2hhZG93OiAkYXJndW1lbnRzO1xufVxuXG5AZnVuY3Rpb24gZ2V0LWJyZWFrLXBvaW50KCRzaXplOiBzbSkge1xuICAkbWVkaWEtc2l6ZTogbWFwLWdldCgkbWVkaWEtYnJlYWstcG9pbnRzLCAkc2l6ZSk7XG5cbiAgQHJldHVybiAkbWVkaWEtc2l6ZSArIHB4O1xufVxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KFxuICAkbmFtZSxcbiAgJGJyZWFrcG9pbnRzOiAkbWVkaWEtYnJlYWstcG9pbnRzLFxuICAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKVxuKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRtZWRpYS1icmVhay1wb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRtZWRpYS1icmVhay1wb2ludHMpIHtcbiAgLy8kbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAvL0ByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbiAgJG1heDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWF4ICE9IDAsICRtYXgsIG51bGwpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJG1lZGlhLWJyZWFrLXBvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkbWVkaWEtYnJlYWstcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkbWVkaWEtYnJlYWstcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJG1lZGlhLWJyZWFrLXBvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBFeHRyYSBzbWFsbCBkZXZpY2VzXG5AbWl4aW4geHMge1xuICBAbWVkaWEgKG1pbi13aWR0aDogI3tnZXQtYnJlYWstcG9pbnQoeHMpfSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIFNtYWxsIGRldmljZXNcbkBtaXhpbiBzbSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAje2dldC1icmVhay1wb2ludChzbSl9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaXVtIGRldmljZXNcbkBtaXhpbiBtZCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAje2dldC1icmVhay1wb2ludChtZCl9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTGFyZ2UgZGV2aWNlc1xuQG1peGluIGxnIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7Z2V0LWJyZWFrLXBvaW50KGxnKX0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBFeHRyYSBsYXJnZSBkZXZpY2VzXG5AbWl4aW4geGwge1xuICBAbWVkaWEgKG1pbi13aWR0aDogI3tnZXQtYnJlYWstcG9pbnQoeGwpfSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1vYmlsZSBEZXZpY2VcbkBtaXhpbiBtb2JpbGUge1xuICBAaW5jbHVkZSB4cygpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIHBob25lIHtcbiAgQGluY2x1ZGUgbW9iaWxlKCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIFRhYmxldCBEZXZpY2VcbkBtaXhpbiB0YWJsZXQge1xuICBAaW5jbHVkZSB4cygpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBEZXNrdG9wIERldmljZVxuQG1peGluIGRlc2t0b3Age1xuICBAaW5jbHVkZSBzbSgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBDdXN0b20gZGV2aWNlc1xuQG1peGluIHJ3ZCgkc2NyZWVuKSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuICsgJ3B4Jykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBmdW5jdGlvbiB0by1udW1iZXIoJHZhbHVlKSB7XG4gIEBpZiB0eXBlLW9mKCR2YWx1ZSkgPT0gJ251bWJlcicge1xuICAgIEByZXR1cm4gJHZhbHVlO1xuICB9IEBlbHNlIGlmIHR5cGUtb2YoJHZhbHVlKSAhPSAnc3RyaW5nJyB7XG4gICAgJF86IGxvZygnVmFsdWUgZm9yIGB0by1udW1iZXJgIHNob3VsZCBiZSBhIG51bWJlciBvciBhIHN0cmluZy4nKTtcbiAgfVxuXG4gICRyZXN1bHQ6IDA7XG4gICRkaWdpdHM6IDA7XG4gICRtaW51czogc3RyLXNsaWNlKCR2YWx1ZSwgMSwgMSkgPT0gJy0nO1xuICAkbnVtYmVyczogKFxuICAgICcwJzogMCxcbiAgICAnMSc6IDEsXG4gICAgJzInOiAyLFxuICAgICczJzogMyxcbiAgICAnNCc6IDQsXG4gICAgJzUnOiA1LFxuICAgICc2JzogNixcbiAgICAnNyc6IDcsXG4gICAgJzgnOiA4LFxuICAgICc5JzogOSxcbiAgKTtcblxuICBAZm9yICRpIGZyb20gaWYoJG1pbnVzLCAyLCAxKSB0aHJvdWdoIHN0ci1sZW5ndGgoJHZhbHVlKSB7XG4gICAgJGNoYXJhY3Rlcjogc3RyLXNsaWNlKCR2YWx1ZSwgJGksICRpKTtcblxuICAgIEBpZiBub3QoaW5kZXgobWFwLWtleXMoJG51bWJlcnMpLCAkY2hhcmFjdGVyKSBvciAkY2hhcmFjdGVyID09ICcuJykge1xuICAgICAgQHJldHVybiB0by1sZW5ndGgoaWYoJG1pbnVzLCAtJHJlc3VsdCwgJHJlc3VsdCksIHN0ci1zbGljZSgkdmFsdWUsICRpKSk7XG4gICAgfVxuXG4gICAgQGlmICRjaGFyYWN0ZXIgPT0gJy4nIHtcbiAgICAgICRkaWdpdHM6IDE7XG4gICAgfSBAZWxzZSBpZiAkZGlnaXRzID09IDAge1xuICAgICAgJHJlc3VsdDogJHJlc3VsdCAqIDEwICsgbWFwLWdldCgkbnVtYmVycywgJGNoYXJhY3Rlcik7XG4gICAgfSBAZWxzZSB7XG4gICAgICAkZGlnaXRzOiAkZGlnaXRzICogMTA7XG4gICAgICAkcmVzdWx0OiAkcmVzdWx0ICsgbWFwLWdldCgkbnVtYmVycywgJGNoYXJhY3RlcikgLyAkZGlnaXRzO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gaWYoJG1pbnVzLCAtJHJlc3VsdCwgJHJlc3VsdCk7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/homepage/components/email_list/email_list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/homepage/components/email_list/email_list.component.ts ***!
  \************************************************************************/
/*! exports provided: EmailListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailListComponent", function() { return EmailListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let EmailListComponent = class EmailListComponent {
    constructor() { }
};
EmailListComponent.ctorParameters = () => [];
EmailListComponent.propDecorators = {
    emails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
EmailListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./email_list.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/homepage/components/email_list/email_list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./email_list.component.scss */ "./src/app/homepage/components/email_list/email_list.component.scss")).default]
    })
], EmailListComponent);



/***/ }),

/***/ "./src/app/homepage/components/email_list/email_list.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/homepage/components/email_list/email_list.module.ts ***!
  \*********************************************************************/
/*! exports provided: EmailListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailListModule", function() { return EmailListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _email_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email_list.component */ "./src/app/homepage/components/email_list/email_list.component.ts");
/* harmony import */ var _email_list_item_email_list_item_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../email_list_item/email_list_item.module */ "./src/app/homepage/components/email_list_item/email_list_item.module.ts");





let EmailListModule = class EmailListModule {
};
EmailListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_email_list_component__WEBPACK_IMPORTED_MODULE_3__["EmailListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _email_list_item_email_list_item_module__WEBPACK_IMPORTED_MODULE_4__["EmailListItemModule"]],
        exports: [_email_list_component__WEBPACK_IMPORTED_MODULE_3__["EmailListComponent"]],
    })
], EmailListModule);



/***/ }),

/***/ "./src/app/homepage/components/email_list_item/email_list_item.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/homepage/components/email_list_item/email_list_item.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host li {\n  cursor: pointer;\n  padding: 8px;\n  border-bottom: solid 1px #002422;\n}\n:host li:hover, :host li:focus {\n  background-color: #ccf0ee;\n}\n:host li.active {\n  background-color: #99e0dd;\n}\n:host li.unread {\n  font-weight: bold;\n}\n:host li span {\n  font-size: 0.625rem;\n  color: #6c757d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUvc3JjL2FwcC9ob21lcGFnZS9jb21wb25lbnRzL2VtYWlsX2xpc3RfaXRlbS9lbWFpbF9saXN0X2l0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBRko7QUFJSTtFQUVFLHlCQUFBO0FBSE47QUFLSTtFQUNFLHlCQUFBO0FBSE47QUFLSTtFQUNFLGlCQUFBO0FBSE47QUFNSTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUpOIiwiZmlsZSI6InNpdGUvc3JjL2FwcC9ob21lcGFnZS9jb21wb25lbnRzL2VtYWlsX2xpc3RfaXRlbS9lbWFpbF9saXN0X2l0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9jc3MvdmFyaWFibGVzJztcblxuOmhvc3Qge1xuICBsaSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggdGhlbWUtY29sb3IoJHRoZW1lLXByaW1hcnksIDkwMCk7XG5cbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUtY29sb3IoJHRoZW1lLXByaW1hcnksIDEwMCk7XG4gICAgfVxuICAgICYuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lLWNvbG9yKCR0aGVtZS1wcmltYXJ5LCAyMDApO1xuICAgIH1cbiAgICAmLnVucmVhZCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogcmVtLWNhbCgxMCk7XG4gICAgICBjb2xvcjogdGhlbWUtY29sb3IoJHRoZW1lLWdyYXlzLCA2MDApO1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/homepage/components/email_list_item/email_list_item.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/homepage/components/email_list_item/email_list_item.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EmailListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailListItemComponent", function() { return EmailListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/email.service */ "./src/app/homepage/services/email.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm2015/operators/index.js");




let EmailListItemComponent = class EmailListItemComponent {
    constructor(emailsService) {
        this.emailsService = emailsService;
        this.isActive$ = emailsService.email$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((email) => {
            return email && this.email && email.id === this.email.id;
        }));
    }
    get id() {
        var _a;
        return (_a = this.email.id) !== null && _a !== void 0 ? _a : null;
    }
    get subject() {
        var _a;
        return (_a = this.email.subject) !== null && _a !== void 0 ? _a : null;
    }
    get from() {
        return this.emailsService.contactName(this.email.from);
    }
    get fromEmail() {
        var _a;
        return (_a = this.email.from.email) !== null && _a !== void 0 ? _a : null;
    }
    get date() {
        return this.email.date ? this.email.date : null;
    }
    get read() {
        var _a;
        return (_a = this.email.read) !== null && _a !== void 0 ? _a : null;
    }
    view() {
        this.emailsService.get(this.id);
    }
};
EmailListItemComponent.ctorParameters = () => [
    { type: _services_email_service__WEBPACK_IMPORTED_MODULE_2__["EmailsService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_services_email_service__WEBPACK_IMPORTED_MODULE_2__["EmailsService"],] }] }
];
EmailListItemComponent.propDecorators = {
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
EmailListItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email-list-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./email_list_item.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/homepage/components/email_list_item/email_list_item.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./email_list_item.component.scss */ "./src/app/homepage/components/email_list_item/email_list_item.component.scss")).default]
    })
], EmailListItemComponent);



/***/ }),

/***/ "./src/app/homepage/components/email_list_item/email_list_item.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/homepage/components/email_list_item/email_list_item.module.ts ***!
  \*******************************************************************************/
/*! exports provided: EmailListItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailListItemModule", function() { return EmailListItemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _email_list_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email_list_item.component */ "./src/app/homepage/components/email_list_item/email_list_item.component.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/services.module */ "./src/app/homepage/services/services.module.ts");





let EmailListItemModule = class EmailListItemModule {
};
EmailListItemModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_email_list_item_component__WEBPACK_IMPORTED_MODULE_3__["EmailListItemComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _services_services_module__WEBPACK_IMPORTED_MODULE_4__["ServicesModule"]],
        exports: [_email_list_item_component__WEBPACK_IMPORTED_MODULE_3__["EmailListItemComponent"]],
    })
], EmailListItemModule);



/***/ }),

/***/ "./src/app/homepage/components/email_view/email_view.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/homepage/components/email_view/email_view.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  background-color: white;\n  padding: 8px;\n  border: solid 1px #002422;\n}\n:host .email_view {\n  padding: 8px;\n}\n:host .email_view h1 {\n  max-height: 30px;\n  overflow: hidden;\n}\n:host .email_view .btn_delete,\n:host .email_view .btn_html,\n:host .email_view .btn_plain {\n  background-color: #ccf0ee;\n  width: 75px;\n  border: none;\n  margin: 0px 16px;\n  cursor: pointer;\n}\n:host .email_view .btn_delete:hover, :host .email_view .btn_delete:active,\n:host .email_view .btn_html:hover,\n:host .email_view .btn_html:active,\n:host .email_view .btn_plain:hover,\n:host .email_view .btn_plain:active {\n  background-color: #99e0dd;\n}\n:host .email_view .btn_delete {\n  float: right;\n  margin: 16px 0px;\n}\n:host .email_view .btn_close {\n  position: absolute;\n  right: 8px;\n  top: 8px;\n}\n:host .view_pane {\n  max-height: 375px;\n  height: 100vh;\n  width: 100%;\n  overflow: scroll;\n  border: solid 1px #002422;\n  padding: 8px;\n}\n@media (min-width: 600px) {\n  :host .view_pane {\n    max-height: 450px;\n  }\n}\n@media (min-width: 600px) {\n  :host {\n    position: relative;\n    min-width: 75%;\n    display: block !important;\n    border-left: none;\n  }\n  :host .btn_close {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUvc3JjL2FwcC9ob21lcGFnZS9jb21wb25lbnRzL2VtYWlsX3ZpZXcvZW1haWxfdmlldy5jb21wb25lbnQuc2NzcyIsInNpdGUvc3JjL2Nzcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFFQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUZGO0FBSUU7RUFDRSxZQUFBO0FBRko7QUFHSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQUlJOzs7RUFHRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRk47QUFHTTs7Ozs7RUFFRSx5QkFBQTtBQUVSO0FBRUk7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFBTjtBQUdJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQUROO0FBS0U7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFISjtBQ2tIRTtFRHJIQTtJQVNJLGlCQUFBO0VBRko7QUFDRjtBQzZHRTtFRGpLRjtJQTBESSxrQkFBQTtJQUNBLGNBQUE7SUFDQSx5QkFBQTtJQUNBLGlCQUFBO0VBRkY7RUFJRTtJQUNFLGFBQUE7RUFGSjtBQUNGIiwiZmlsZSI6InNpdGUvc3JjL2FwcC9ob21lcGFnZS9jb21wb25lbnRzL2VtYWlsX3ZpZXcvZW1haWxfdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Nzcy92YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUtY29sb3IoJHRoZW1lLWdyYXlzLCA1MCk7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggdGhlbWUtY29sb3IoJHRoZW1lLXByaW1hcnksIDkwMCk7XG5cbiAgLmVtYWlsX3ZpZXcge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBoMSB7XG4gICAgICBtYXgtaGVpZ2h0OiAzMHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAuYnRuX2RlbGV0ZSxcbiAgICAuYnRuX2h0bWwsXG4gICAgLmJ0bl9wbGFpbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZS1jb2xvcigkdGhlbWUtcHJpbWFyeSwgMTAwKTtcbiAgICAgIHdpZHRoOiA3NXB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgbWFyZ2luOiAwcHggMTZweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lLWNvbG9yKCR0aGVtZS1wcmltYXJ5LCAyMDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5idG5fZGVsZXRlIHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIG1hcmdpbjogMTZweCAwcHg7XG4gICAgfVxuXG4gICAgLmJ0bl9jbG9zZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogOHB4O1xuICAgICAgdG9wOiA4cHg7XG4gICAgfVxuICB9XG5cbiAgLnZpZXdfcGFuZSB7XG4gICAgbWF4LWhlaWdodDogMzc1cHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIGJvcmRlcjogc29saWQgMXB4IHRoZW1lLWNvbG9yKCR0aGVtZS1wcmltYXJ5LCA5MDApO1xuICAgIHBhZGRpbmc6IDhweDtcblxuICAgIEBpbmNsdWRlIHRhYmxldCgpIHtcbiAgICAgIG1heC1oZWlnaHQ6IDQ1MHB4O1xuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIHRhYmxldCgpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLXdpZHRoOiA3NSU7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcblxuICAgIC5idG5fY2xvc2Uge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiIsIkBmdW5jdGlvbiB0aGVtZS1jb2xvcigkcGFsZXR0ZSwgJGh1ZTogZGVmYXVsdCwgJG9wYWNpdHk6IG51bGwpIHtcbiAgLy8gSWYgaHVlS2V5IGlzIGEgbnVtYmVyIGJldHdlZW4gemVybyBhbmQgb25lLCB0aGVuIGl0IGFjdHVhbGx5IGNvbnRhaW5zIGFuXG4gIC8vIG9wYWNpdHkgdmFsdWUsIHNvIHJlY2FsbCB0aGlzIGZ1bmN0aW9uIHdpdGggdGhlIGRlZmF1bHQgaHVlIGFuZCB0aGF0IGdpdmVuIG9wYWNpdHkuXG4gIEBpZiB0eXBlLW9mKCRodWUpID09IG51bWJlciBhbmQgJGh1ZSA+PSAwIGFuZCAkaHVlIDw9IDEge1xuICAgIEByZXR1cm4gdGhlbWUtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQsICRodWUpO1xuICB9XG5cbiAgJGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLCAkaHVlKTtcbiAgJG9wYWNpdHk6IGlmKCRvcGFjaXR5ID09IG51bGwsIG9wYWNpdHkoJGNvbG9yKSwgJG9wYWNpdHkpO1xuXG4gIEByZXR1cm4gcmdiYSgkY29sb3IsICRvcGFjaXR5KTtcbn1cblxuJGRlZmF1bHQtcGl4ZWw6IDE2O1xuXG5AZnVuY3Rpb24gcmVtLWNhbCgkdGFyZ2V0LXBpeGVsKSB7XG4gIEByZXR1cm4gJHRhcmdldC1waXhlbC8kZGVmYXVsdC1waXhlbCArIHJlbTtcbn1cblxuQG1peGluIGFzcGVjdC1yYXRpby11cGRhdGUoJHdpZHRoLCAkaGVpZ2h0KSB7XG4gICY6YmVmb3JlIHtcbiAgICBwYWRkaW5nLXRvcDogKCRoZWlnaHQgLyAkd2lkdGgpICogMTAwJTtcbiAgfVxufVxuQG1peGluIGFzcGVjdC1yYXRpbygkd2lkdGgsICRoZWlnaHQpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOmJlZm9yZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29udGVudDogJyc7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6ICgkaGVpZ2h0IC8gJHdpZHRoKSAqIDEwMCU7XG4gIH1cbiAgPiAqIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICB9XG59XG5cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG59XG5cbkBtaXhpbiBvcGFjaXR5KCR2YWx1ZSkge1xuICAkSUVWYWx1ZTogJHZhbHVlICogMTAwO1xuICBvcGFjaXR5OiAkdmFsdWU7XG4gIC1tcy1maWx0ZXI6ICdwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0nICsgJElFVmFsdWUgKyAnKSc7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0kSUVWYWx1ZSk7XG59XG5cbi8vIEFkZHMgc2hhZG93IHRvIGEgYm94XG5AbWl4aW4gYm94LXNoYWRvdygkYXJndW1lbnRzLi4uKSB7XG4gIC1tb3otYm94LXNoYWRvdzogJGFyZ3VtZW50cztcbiAgLW8tYm94LXNoYWRvdzogJGFyZ3VtZW50cztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYXJndW1lbnRzO1xuICBib3gtc2hhZG93OiAkYXJndW1lbnRzO1xufVxuXG5AZnVuY3Rpb24gZ2V0LWJyZWFrLXBvaW50KCRzaXplOiBzbSkge1xuICAkbWVkaWEtc2l6ZTogbWFwLWdldCgkbWVkaWEtYnJlYWstcG9pbnRzLCAkc2l6ZSk7XG5cbiAgQHJldHVybiAkbWVkaWEtc2l6ZSArIHB4O1xufVxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KFxuICAkbmFtZSxcbiAgJGJyZWFrcG9pbnRzOiAkbWVkaWEtYnJlYWstcG9pbnRzLFxuICAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKVxuKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRtZWRpYS1icmVhay1wb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRtZWRpYS1icmVhay1wb2ludHMpIHtcbiAgLy8kbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAvL0ByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbiAgJG1heDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWF4ICE9IDAsICRtYXgsIG51bGwpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJG1lZGlhLWJyZWFrLXBvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkbWVkaWEtYnJlYWstcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkbWVkaWEtYnJlYWstcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJG1lZGlhLWJyZWFrLXBvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBFeHRyYSBzbWFsbCBkZXZpY2VzXG5AbWl4aW4geHMge1xuICBAbWVkaWEgKG1pbi13aWR0aDogI3tnZXQtYnJlYWstcG9pbnQoeHMpfSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIFNtYWxsIGRldmljZXNcbkBtaXhpbiBzbSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAje2dldC1icmVhay1wb2ludChzbSl9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaXVtIGRldmljZXNcbkBtaXhpbiBtZCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAje2dldC1icmVhay1wb2ludChtZCl9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTGFyZ2UgZGV2aWNlc1xuQG1peGluIGxnIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7Z2V0LWJyZWFrLXBvaW50KGxnKX0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBFeHRyYSBsYXJnZSBkZXZpY2VzXG5AbWl4aW4geGwge1xuICBAbWVkaWEgKG1pbi13aWR0aDogI3tnZXQtYnJlYWstcG9pbnQoeGwpfSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1vYmlsZSBEZXZpY2VcbkBtaXhpbiBtb2JpbGUge1xuICBAaW5jbHVkZSB4cygpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIHBob25lIHtcbiAgQGluY2x1ZGUgbW9iaWxlKCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIFRhYmxldCBEZXZpY2VcbkBtaXhpbiB0YWJsZXQge1xuICBAaW5jbHVkZSB4cygpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBEZXNrdG9wIERldmljZVxuQG1peGluIGRlc2t0b3Age1xuICBAaW5jbHVkZSBzbSgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBDdXN0b20gZGV2aWNlc1xuQG1peGluIHJ3ZCgkc2NyZWVuKSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuICsgJ3B4Jykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBmdW5jdGlvbiB0by1udW1iZXIoJHZhbHVlKSB7XG4gIEBpZiB0eXBlLW9mKCR2YWx1ZSkgPT0gJ251bWJlcicge1xuICAgIEByZXR1cm4gJHZhbHVlO1xuICB9IEBlbHNlIGlmIHR5cGUtb2YoJHZhbHVlKSAhPSAnc3RyaW5nJyB7XG4gICAgJF86IGxvZygnVmFsdWUgZm9yIGB0by1udW1iZXJgIHNob3VsZCBiZSBhIG51bWJlciBvciBhIHN0cmluZy4nKTtcbiAgfVxuXG4gICRyZXN1bHQ6IDA7XG4gICRkaWdpdHM6IDA7XG4gICRtaW51czogc3RyLXNsaWNlKCR2YWx1ZSwgMSwgMSkgPT0gJy0nO1xuICAkbnVtYmVyczogKFxuICAgICcwJzogMCxcbiAgICAnMSc6IDEsXG4gICAgJzInOiAyLFxuICAgICczJzogMyxcbiAgICAnNCc6IDQsXG4gICAgJzUnOiA1LFxuICAgICc2JzogNixcbiAgICAnNyc6IDcsXG4gICAgJzgnOiA4LFxuICAgICc5JzogOSxcbiAgKTtcblxuICBAZm9yICRpIGZyb20gaWYoJG1pbnVzLCAyLCAxKSB0aHJvdWdoIHN0ci1sZW5ndGgoJHZhbHVlKSB7XG4gICAgJGNoYXJhY3Rlcjogc3RyLXNsaWNlKCR2YWx1ZSwgJGksICRpKTtcblxuICAgIEBpZiBub3QoaW5kZXgobWFwLWtleXMoJG51bWJlcnMpLCAkY2hhcmFjdGVyKSBvciAkY2hhcmFjdGVyID09ICcuJykge1xuICAgICAgQHJldHVybiB0by1sZW5ndGgoaWYoJG1pbnVzLCAtJHJlc3VsdCwgJHJlc3VsdCksIHN0ci1zbGljZSgkdmFsdWUsICRpKSk7XG4gICAgfVxuXG4gICAgQGlmICRjaGFyYWN0ZXIgPT0gJy4nIHtcbiAgICAgICRkaWdpdHM6IDE7XG4gICAgfSBAZWxzZSBpZiAkZGlnaXRzID09IDAge1xuICAgICAgJHJlc3VsdDogJHJlc3VsdCAqIDEwICsgbWFwLWdldCgkbnVtYmVycywgJGNoYXJhY3Rlcik7XG4gICAgfSBAZWxzZSB7XG4gICAgICAkZGlnaXRzOiAkZGlnaXRzICogMTA7XG4gICAgICAkcmVzdWx0OiAkcmVzdWx0ICsgbWFwLWdldCgkbnVtYmVycywgJGNoYXJhY3RlcikgLyAkZGlnaXRzO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gaWYoJG1pbnVzLCAtJHJlc3VsdCwgJHJlc3VsdCk7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/homepage/components/email_view/email_view.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/homepage/components/email_view/email_view.component.ts ***!
  \************************************************************************/
/*! exports provided: EmailViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailViewComponent", function() { return EmailViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/email.service */ "./src/app/homepage/services/email.service.ts");



let EmailViewComponent = class EmailViewComponent {
    constructor(emailsService, cd) {
        this.emailsService = emailsService;
        this.cd = cd;
        this.isHtml = true;
    }
    get loaded() {
        var _a;
        return !!this.email && ((_a = this.email) === null || _a === void 0 ? void 0 : _a.deleted) === false;
    }
    get id() {
        var _a, _b;
        return (_b = (_a = this.email) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : null;
    }
    get subject() {
        var _a, _b;
        return (_b = (_a = this.email) === null || _a === void 0 ? void 0 : _a.subject) !== null && _b !== void 0 ? _b : null;
    }
    get to() {
        var _a, _b;
        return this.emailsService.contactName((_b = (_a = this.email) === null || _a === void 0 ? void 0 : _a.from) !== null && _b !== void 0 ? _b : null);
    }
    get toEmail() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.email) === null || _a === void 0 ? void 0 : _a.from) === null || _b === void 0 ? void 0 : _b.email) !== null && _c !== void 0 ? _c : null;
    }
    get from() {
        var _a, _b;
        return this.emailsService.contactName((_b = (_a = this.email) === null || _a === void 0 ? void 0 : _a.to) !== null && _b !== void 0 ? _b : null);
    }
    get fromEmail() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.email) === null || _a === void 0 ? void 0 : _a.to) === null || _b === void 0 ? void 0 : _b.email) !== null && _c !== void 0 ? _c : null;
    }
    get hasHtmlAndPlain() {
        return this.hasHtml && this.hasPlain;
    }
    get hasHtml() {
        var _a;
        return !!((_a = this.email) === null || _a === void 0 ? void 0 : _a.html);
    }
    get html() {
        var _a, _b;
        return (_b = (_a = this.email) === null || _a === void 0 ? void 0 : _a.html) !== null && _b !== void 0 ? _b : null;
    }
    get hasPlain() {
        var _a;
        return !!((_a = this.email) === null || _a === void 0 ? void 0 : _a.plain);
    }
    get plain() {
        var _a, _b;
        return (_b = (_a = this.email) === null || _a === void 0 ? void 0 : _a.plain) !== null && _b !== void 0 ? _b : null;
    }
    ngOnChanges() {
        this.isHtml = this.hasHtml;
        this.cd.detectChanges();
    }
    display(panel) {
        if (panel === 'html') {
            this.isHtml = true;
        }
        else {
            this.isHtml = false;
        }
    }
    close() {
        this.emailsService.isViewOpen$.next(false);
    }
    delete() {
        this.emailsService.delete(this.id);
    }
};
EmailViewComponent.ctorParameters = () => [
    { type: _services_email_service__WEBPACK_IMPORTED_MODULE_2__["EmailsService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_services_email_service__WEBPACK_IMPORTED_MODULE_2__["EmailsService"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
EmailViewComponent.propDecorators = {
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
EmailViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./email_view.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/homepage/components/email_view/email_view.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./email_view.component.scss */ "./src/app/homepage/components/email_view/email_view.component.scss")).default]
    })
], EmailViewComponent);



/***/ }),

/***/ "./src/app/homepage/components/email_view/email_view.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/homepage/components/email_view/email_view.module.ts ***!
  \*********************************************************************/
/*! exports provided: EmailViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailViewModule", function() { return EmailViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _email_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email_view.component */ "./src/app/homepage/components/email_view/email_view.component.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/services.module */ "./src/app/homepage/services/services.module.ts");





let EmailViewModule = class EmailViewModule {
};
EmailViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_email_view_component__WEBPACK_IMPORTED_MODULE_3__["EmailViewComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _services_services_module__WEBPACK_IMPORTED_MODULE_4__["ServicesModule"]],
        exports: [_email_view_component__WEBPACK_IMPORTED_MODULE_3__["EmailViewComponent"]],
    })
], EmailViewModule);



/***/ }),

/***/ "./src/app/homepage/homepage-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/homepage/homepage-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HomepageRoutes, HomepageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageRoutes", function() { return HomepageRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageRoutingModule", function() { return HomepageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage.component */ "./src/app/homepage/homepage.component.ts");




const HomepageRoutes = [
    { path: '', component: _homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] },
    { path: '**', component: _homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] }
];
let HomepageRoutingModule = class HomepageRoutingModule {
};
HomepageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(HomepageRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomepageRoutingModule);



/***/ }),

/***/ "./src/app/homepage/homepage.component.scss":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaXRlL3NyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HomepageComponent = class HomepageComponent {
    constructor() { }
    ngOnInit() { }
};
HomepageComponent.ctorParameters = () => [];
HomepageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./homepage.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./homepage.component.scss */ "./src/app/homepage/homepage.component.scss")).default]
    })
], HomepageComponent);



/***/ }),

/***/ "./src/app/homepage/homepage.module.ts":
/*!*********************************************!*\
  !*** ./src/app/homepage/homepage.module.ts ***!
  \*********************************************/
/*! exports provided: HomepageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageModule", function() { return HomepageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _homepage_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage-routing.module */ "./src/app/homepage/homepage-routing.module.ts");
/* harmony import */ var _components_email_email_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/email/email.module */ "./src/app/homepage/components/email/email.module.ts");






let HomepageModule = class HomepageModule {
};
HomepageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_email_email_module__WEBPACK_IMPORTED_MODULE_5__["EmailModule"], _homepage_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomepageRoutingModule"]],
        exports: [_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"]],
    })
], HomepageModule);



/***/ }),

/***/ "./src/app/homepage/services/email.service.ts":
/*!****************************************************!*\
  !*** ./src/app/homepage/services/email.service.ts ***!
  \****************************************************/
/*! exports provided: EmailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailsService", function() { return EmailsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _store_emails_emails_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/emails/emails.actions */ "./src/app/store/emails/emails.actions.ts");
/* harmony import */ var _store_emails_emails_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/emails/emails.reducers */ "./src/app/store/emails/emails.reducers.ts");






let EmailsService = class EmailsService {
    constructor(store) {
        this.store = store;
        this.isViewOpen$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.deleting = false;
        this.emails$ = this.store.select(_store_emails_emails_reducers__WEBPACK_IMPORTED_MODULE_5__["EmailsReducers"].getAllEmails);
        this.email$ = this.store.select(_store_emails_emails_reducers__WEBPACK_IMPORTED_MODULE_5__["EmailsReducers"].getLoadedEmail);
    }
    init() {
        this.store.dispatch(new _store_emails_emails_actions__WEBPACK_IMPORTED_MODULE_4__["EmailsActions"].Load(null));
    }
    get(id) {
        this.store.dispatch(new _store_emails_emails_actions__WEBPACK_IMPORTED_MODULE_4__["EmailsActions"].EmailLoad({ id }));
    }
    delete(id) {
        this.deleting = true;
        this.store.dispatch(new _store_emails_emails_actions__WEBPACK_IMPORTED_MODULE_4__["EmailsActions"].EmailDelete({ id }));
    }
    contactName(contact) {
        var _a, _b;
        const name = (_a = contact === null || contact === void 0 ? void 0 : contact.name) !== null && _a !== void 0 ? _a : null;
        const email = (_b = contact === null || contact === void 0 ? void 0 : contact.email) !== null && _b !== void 0 ? _b : null;
        if (name && email) {
            return `${name} <${email}>`;
        }
        return email;
    }
};
EmailsService.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
EmailsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], EmailsService);



/***/ }),

/***/ "./src/app/homepage/services/services.module.ts":
/*!******************************************************!*\
  !*** ./src/app/homepage/services/services.module.ts ***!
  \******************************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email.service */ "./src/app/homepage/services/email.service.ts");



let ServicesModule = class ServicesModule {
};
ServicesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [_email_service__WEBPACK_IMPORTED_MODULE_2__["EmailsService"]],
        exports: [_email_service__WEBPACK_IMPORTED_MODULE_2__["EmailsService"]],
    })
], ServicesModule);



/***/ })

}]);
//# sourceMappingURL=homepage-homepage-module.js.map