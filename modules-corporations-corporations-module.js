(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-corporations-corporations-module"],{

/***/ "3VFf":
/*!*******************************************************************************!*\
  !*** ./src/app/principal/modules/corporations/corporations-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CorporationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporationsRoutingModule", function() { return CorporationsRoutingModule; });
/* harmony import */ var _corporations_list_corporations_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./corporations-list/corporations-list.component */ "aOoM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _corporations_add_corporations_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./corporations-add/corporations-add.component */ "bFEY");
/* harmony import */ var _corporations_edit_corporations_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./corporations-edit/corporations-edit.component */ "MJiM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: '',
        component: _corporations_list_corporations_list_component__WEBPACK_IMPORTED_MODULE_0__["CorporationsListComponent"],
    },
    {
        path: 'add',
        component: _corporations_add_corporations_add_component__WEBPACK_IMPORTED_MODULE_2__["CorporationsAddComponent"],
    },
    {
        path: 'edit/:id',
        component: _corporations_edit_corporations_edit_component__WEBPACK_IMPORTED_MODULE_3__["CorporationsEditComponent"],
    },
];
class CorporationsRoutingModule {
}
CorporationsRoutingModule.??fac = function CorporationsRoutingModule_Factory(t) { return new (t || CorporationsRoutingModule)(); };
CorporationsRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: CorporationsRoutingModule });
CorporationsRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](CorporationsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "ERnB":
/*!*************************************************************************************************!*\
  !*** ./src/app/principal/modules/corporations/corporations-form/corporations-form.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: CorporationsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporationsFormComponent", function() { return CorporationsFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_scroll_view_scroll_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/scroll-view/scroll-view.component */ "pduZ");


class CorporationsFormComponent {
    constructor() { }
    ngOnInit() {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight - 156;
        // console.log(this.screenHeight + '  ' + this.screenWidth);
    }
    onResize(event) {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight - 156;
    }
}
CorporationsFormComponent.??fac = function CorporationsFormComponent_Factory(t) { return new (t || CorporationsFormComponent)(); };
CorporationsFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CorporationsFormComponent, selectors: [["app-corporations-form"]], hostBindings: function CorporationsFormComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("resize", function CorporationsFormComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resolveWindow"]);
    } }, decls: 32, vars: 0, consts: [[1, "d-flex", "flex-column"], [1, "form-container", "p-4", "mb-3"], [1, "mb-3"], [1, "d-flex"], [1, "form-group", "col-6", "anti-col", "pr-2"], ["type", "text", "placeholder", "Nombre", 1, "form-control"], [1, "form-group", "col-6", "anti-col"], ["type", "email", "placeholder", "Correo Electronico", 1, "form-control"], [1, "form-group"], ["type", "text", "placeholder", "Razon social", "rows", "5", 1, "form-control"], ["type", "text", "placeholder", "Direcci\u00F3n", 1, "form-control"], [1, "form-group", "col-4", "anti-col"], ["type", "number", "placeholder", "Telefono", 1, "form-control"], [1, "divider"], ["type", "text", "placeholder", "Apellidos", 1, "form-control"], ["type", "number", "placeholder", "DNI", 1, "form-control"]], template: function CorporationsFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-scroll-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Informaci\u00F3n de la Corporaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Datos del representante");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_shared_components_scroll_view_scroll_view_component__WEBPACK_IMPORTED_MODULE_1__["ScrollViewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Jwb3JhdGlvbnMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "MJiM":
/*!*************************************************************************************************!*\
  !*** ./src/app/principal/modules/corporations/corporations-edit/corporations-edit.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: CorporationsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporationsEditComponent", function() { return CorporationsEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/container/container.component */ "jfV7");
/* harmony import */ var _shared_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/toolbar/toolbar.component */ "2K2s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _corporations_form_corporations_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../corporations-form/corporations-form.component */ "ERnB");





class CorporationsEditComponent {
    constructor() { }
    ngOnInit() {
    }
}
CorporationsEditComponent.??fac = function CorporationsEditComponent_Factory(t) { return new (t || CorporationsEditComponent)(); };
CorporationsEditComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CorporationsEditComponent, selectors: [["app-corporations-edit"]], decls: 9, vars: 1, consts: [[1, "d-flex", "flex-column", "flex-fill"], ["title", "Editar Corporacion", 3, "back"], ["routerLink", "../..", 1, "btn", "btn-light", "mr-2"], [1, "btn", "btn-primary", "primary"], [1, "flex-fill"]], template: function CorporationsEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "app-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "app-corporations-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("back", true);
    } }, directives: [_shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__["ContainerComponent"], _shared_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _corporations_form_corporations_form_component__WEBPACK_IMPORTED_MODULE_4__["CorporationsFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Jwb3JhdGlvbnMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "aOoM":
/*!*************************************************************************************************!*\
  !*** ./src/app/principal/modules/corporations/corporations-list/corporations-list.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: CorporationsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporationsListComponent", function() { return CorporationsListComponent; });
/* harmony import */ var _shared_services_connection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../shared/services/connection.service */ "CP4t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/container/container.component */ "jfV7");
/* harmony import */ var _shared_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/toolbar/toolbar.component */ "2K2s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_empty_screen_empty_screen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/empty-screen/empty-screen.component */ "2OLK");









function CorporationsListComponent_div_5_table_3_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](item_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate1"]("routerLink", "edit/", item_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](item_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate1"]("routerLink", "edit/", item_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](item_r4.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate1"]("routerLink", "edit/", item_r4.id, "");
} }
function CorporationsListComponent_div_5_table_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "thead", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Correo Electr\u00F3nico");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Acci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, CorporationsListComponent_div_5_table_3_tr_12_Template, 17, 6, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r2.corporations);
} }
function CorporationsListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Listado de Corporaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, CorporationsListComponent_div_5_table_3_Template, 13, 1, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.corporations.length);
} }
function CorporationsListComponent_app_empty_screen_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "app-empty-screen", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](1, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](4, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Agregar Corporaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
class CorporationsListComponent {
    constructor(connection, spinner) {
        this.connection = connection;
        this.spinner = spinner;
        this.loading = false;
        this.corporations = [];
    }
    ngOnInit() {
        this.getCorporations();
    }
    getCorporations() {
        this.loading = true;
        this.spinner.show();
        setTimeout(() => {
            this.connection.get(_shared_services_connection_service__WEBPACK_IMPORTED_MODULE_0__["ConnectionService"].CORPORATION).subscribe((response) => {
                this.loading = false;
                this.spinner.hide();
                this.corporations = response;
            }, (error) => {
                this.loading = false;
                this.spinner.hide();
                console.log(error);
            });
        }, 1000);
    }
}
CorporationsListComponent.??fac = function CorporationsListComponent_Factory(t) { return new (t || CorporationsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_services_connection_service__WEBPACK_IMPORTED_MODULE_0__["ConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"])); };
CorporationsListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: CorporationsListComponent, selectors: [["app-corporations-list"]], decls: 7, vars: 2, consts: [[1, "d-flex", "flex-column", "flex-fill"], ["title", "Corporaciones", "subtitle", "Listado de Corporaciones"], ["routerLink", "add", 1, "btn", "btn-outline-primary"], ["class", "my-card", 4, "ngIf"], ["class", "flex-fill", "svg", "../../../../../assets/svg/corporation.svg", "title", "No hay corporaciones agregadas", "subtitle", "Agregue corporaciones", 4, "ngIf"], [1, "my-card"], [1, "card-title", "mb-4"], ["class", "table table-hover", 4, "ngIf"], [1, "table", "table-hover"], [1, ""], [2, "width", "5%"], [2, "width", "20%"], [4, "ngFor", "ngForOf"], ["scope", "row"], [3, "routerLink"], [1, "dropdown", "abs-center", 2, "text-align", "center"], ["href", "javascript:;", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle"], [1, "bi", "bi-gear-fill"], [1, "caret"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-item", 3, "routerLink"], ["data-toggle", "modal", "data-target", "#exampleModal", 1, "dropdown-item"], ["svg", "../../../../../assets/svg/corporation.svg", "title", "No hay corporaciones agregadas", "subtitle", "Agregue corporaciones", 1, "flex-fill"], ["icon", ""], [1, "bi", "bi-building", "text-secondary", 2, "font-size", "64px"], ["button", ""], ["type", "button", "routerLink", "add/", 1, "btn", "btn-outline-primary"]], template: function CorporationsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "app-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "app-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, " Agregar Corporaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](5, CorporationsListComponent_div_5_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, CorporationsListComponent_app_empty_screen_6_Template, 7, 0, "app-empty-screen", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.corporations.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx.corporations.length && !ctx.loading);
    } }, directives: [_shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_3__["ContainerComponent"], _shared_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _shared_components_empty_screen_empty_screen_component__WEBPACK_IMPORTED_MODULE_7__["EmptyScreenComponent"]], styles: ["app-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvcnBvcmF0aW9ucy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJjb3Jwb3JhdGlvbnMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC10b29sYmFyIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4vLyBhcHAtZW1wdHktc2NyZWVuIGJ1dHRvbiB7XHJcbi8vICAgICBjb2xvcjogIzJGNDVDNTtcclxuLy8gfVxyXG4iXX0= */"] });


/***/ }),

/***/ "bFEY":
/*!***********************************************************************************************!*\
  !*** ./src/app/principal/modules/corporations/corporations-add/corporations-add.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CorporationsAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporationsAddComponent", function() { return CorporationsAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/container/container.component */ "jfV7");
/* harmony import */ var _shared_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/toolbar/toolbar.component */ "2K2s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _corporations_form_corporations_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../corporations-form/corporations-form.component */ "ERnB");






class CorporationsAddComponent {
    constructor(toastService) {
        this.toastService = toastService;
    }
    ngOnInit() {
    }
    addCorporation() {
        this.toastService.success('Datos subidos satisfactoriamente');
    }
}
CorporationsAddComponent.??fac = function CorporationsAddComponent_Factory(t) { return new (t || CorporationsAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
CorporationsAddComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CorporationsAddComponent, selectors: [["app-corporations-add"]], decls: 9, vars: 1, consts: [[1, "d-flex", "flex-column", "flex-fill"], ["title", "Agregar Corporacion", 3, "back"], ["routerLink", "..", 1, "btn", "btn-light", "mr-2"], [1, "btn", "btn-primary", "primary", 3, "click"], [1, "flex-fill"]], template: function CorporationsAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "app-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CorporationsAddComponent_Template_button_click_5_listener() { return ctx.addCorporation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "app-corporations-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("back", true);
    } }, directives: [_shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__["ContainerComponent"], _shared_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _corporations_form_corporations_form_component__WEBPACK_IMPORTED_MODULE_5__["CorporationsFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Jwb3JhdGlvbnMtYWRkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "kj+O":
/*!***********************************************************************!*\
  !*** ./src/app/principal/modules/corporations/corporations.module.ts ***!
  \***********************************************************************/
/*! exports provided: CorporationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporationsModule", function() { return CorporationsModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../shared/shared.module */ "KZX/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _corporations_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./corporations-routing.module */ "3VFf");
/* harmony import */ var _corporations_list_corporations_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./corporations-list/corporations-list.component */ "aOoM");
/* harmony import */ var _corporations_add_corporations_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./corporations-add/corporations-add.component */ "bFEY");
/* harmony import */ var _corporations_edit_corporations_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./corporations-edit/corporations-edit.component */ "MJiM");
/* harmony import */ var _corporations_form_corporations_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./corporations-form/corporations-form.component */ "ERnB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class CorporationsModule {
}
CorporationsModule.??fac = function CorporationsModule_Factory(t) { return new (t || CorporationsModule)(); };
CorporationsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineNgModule"]({ type: CorporationsModule });
CorporationsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _corporations_routing_module__WEBPACK_IMPORTED_MODULE_2__["CorporationsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["????setNgModuleScope"](CorporationsModule, { declarations: [_corporations_list_corporations_list_component__WEBPACK_IMPORTED_MODULE_3__["CorporationsListComponent"],
        _corporations_add_corporations_add_component__WEBPACK_IMPORTED_MODULE_4__["CorporationsAddComponent"],
        _corporations_edit_corporations_edit_component__WEBPACK_IMPORTED_MODULE_5__["CorporationsEditComponent"],
        _corporations_form_corporations_form_component__WEBPACK_IMPORTED_MODULE_6__["CorporationsFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _corporations_routing_module__WEBPACK_IMPORTED_MODULE_2__["CorporationsRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-corporations-corporations-module.js.map