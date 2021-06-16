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
CorporationsRoutingModule.ɵfac = function CorporationsRoutingModule_Factory(t) { return new (t || CorporationsRoutingModule)(); };
CorporationsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CorporationsRoutingModule });
CorporationsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CorporationsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


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
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "qFsG");



class CorporationsFormComponent {
    constructor() { }
    ngOnInit() {
    }
}
CorporationsFormComponent.ɵfac = function CorporationsFormComponent_Factory(t) { return new (t || CorporationsFormComponent)(); };
CorporationsFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CorporationsFormComponent, selectors: [["app-corporations-form"]], decls: 11, vars: 0, consts: [[1, "form-container", "d-flex", "flex-column", "flex-fill", "h-100"], [1, "flex-fill"], [1, "example-form", "d-flex", "flex-column"], [1, "example-full-width"], ["matInput", "", "placeholder", "Ej. Google"], ["matInput", "", "placeholder", "Descripci\u00F3n de la Corporaci\u00F3n", "rows", "5"]], template: function CorporationsFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Jwb3JhdGlvbnMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"] });


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

class CorporationsEditComponent {
    constructor() { }
    ngOnInit() {
    }
}
CorporationsEditComponent.ɵfac = function CorporationsEditComponent_Factory(t) { return new (t || CorporationsEditComponent)(); };
CorporationsEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CorporationsEditComponent, selectors: [["app-corporations-edit"]], decls: 2, vars: 0, template: function CorporationsEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "corporations-edit works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Jwb3JhdGlvbnMtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/container/container.component */ "jfV7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/toolbar/toolbar.component */ "2K2s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_empty_screen_empty_screen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/empty-screen/empty-screen.component */ "2OLK");







function CorporationsListComponent_app_toolbar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-toolbar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Agregar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CorporationsListComponent_app_empty_screen_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-empty-screen", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Agregar Corporaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CorporationsListComponent {
    constructor() {
        this.corporations = [];
    }
    ngOnInit() {
    }
}
CorporationsListComponent.ɵfac = function CorporationsListComponent_Factory(t) { return new (t || CorporationsListComponent)(); };
CorporationsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CorporationsListComponent, selectors: [["app-corporations-list"]], decls: 4, vars: 2, consts: [[1, "d-flex", "flex-column", "flex-fill"], ["title", "Corporaciones", "subtitle", "Listado de Corporaciones", 4, "ngIf"], ["class", "flex-fill", "svg", "../../../../../assets/svg/corporation.svg", "title", "No hay corporaciones agregadas", "subtitle", "Agregue corporaciones", 4, "ngIf"], ["title", "Corporaciones", "subtitle", "Listado de Corporaciones"], ["mat-stroked-button", "", "color", "primary", "routerLink", "add/"], ["svg", "../../../../../assets/svg/corporation.svg", "title", "No hay corporaciones agregadas", "subtitle", "Agregue corporaciones", 1, "flex-fill"], ["mat-button", "", "color", "primary", "routerLink", "add/"]], template: function CorporationsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CorporationsListComponent_app_toolbar_2_Template, 3, 0, "app-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CorporationsListComponent_app_empty_screen_3_Template, 3, 0, "app-empty-screen", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.corporations.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.corporations.length);
    } }, directives: [_shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__["ContainerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _shared_components_empty_screen_empty_screen_component__WEBPACK_IMPORTED_MODULE_6__["EmptyScreenComponent"]], styles: ["app-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvcnBvcmF0aW9ucy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJjb3Jwb3JhdGlvbnMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC10b29sYmFyIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4vLyBhcHAtZW1wdHktc2NyZWVuIGJ1dHRvbiB7XHJcbi8vICAgICBjb2xvcjogIzJGNDVDNTtcclxuLy8gfVxyXG4iXX0= */"] });


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
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/container/container.component */ "jfV7");
/* harmony import */ var _shared_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/toolbar/toolbar.component */ "2K2s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _corporations_form_corporations_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../corporations-form/corporations-form.component */ "ERnB");





class CorporationsAddComponent {
    constructor() { }
    ngOnInit() {
    }
}
CorporationsAddComponent.ɵfac = function CorporationsAddComponent_Factory(t) { return new (t || CorporationsAddComponent)(); };
CorporationsAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CorporationsAddComponent, selectors: [["app-corporations-add"]], decls: 9, vars: 1, consts: [[1, "d-flex", "flex-column", "flex-fill"], ["title", "Agregar Corporacion", 3, "back"], ["mat-flat-button", "", 1, "mr-2"], ["mat-flat-button", "", "color", "primary"], [1, "flex-fill"]], template: function CorporationsAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Agregar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-corporations-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("back", true);
    } }, directives: [_shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__["ContainerComponent"], _shared_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _corporations_form_corporations_form_component__WEBPACK_IMPORTED_MODULE_4__["CorporationsFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Jwb3JhdGlvbnMtYWRkLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
CorporationsModule.ɵfac = function CorporationsModule_Factory(t) { return new (t || CorporationsModule)(); };
CorporationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CorporationsModule });
CorporationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _corporations_routing_module__WEBPACK_IMPORTED_MODULE_2__["CorporationsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CorporationsModule, { declarations: [_corporations_list_corporations_list_component__WEBPACK_IMPORTED_MODULE_3__["CorporationsListComponent"],
        _corporations_add_corporations_add_component__WEBPACK_IMPORTED_MODULE_4__["CorporationsAddComponent"],
        _corporations_edit_corporations_edit_component__WEBPACK_IMPORTED_MODULE_5__["CorporationsEditComponent"],
        _corporations_form_corporations_form_component__WEBPACK_IMPORTED_MODULE_6__["CorporationsFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _corporations_routing_module__WEBPACK_IMPORTED_MODULE_2__["CorporationsRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-corporations-corporations-module.js.map