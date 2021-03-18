(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-home-page-home-page-module"],{

/***/ "Cy07":
/*!***********************************************************!*\
  !*** ./src/app/src/home-page/home-page-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var _description_description_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./description/description.component */ "UjCK");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "yJYt");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page.component */ "NNAg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: '',
        component: _home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
            },
            {
                path: 'description',
                component: _description_description_component__WEBPACK_IMPORTED_MODULE_0__["DescriptionComponent"]
            }
        ]
    }
];
class HomePageRoutingModule {
}
HomePageRoutingModule.ɵfac = function HomePageRoutingModule_Factory(t) { return new (t || HomePageRoutingModule)(); };
HomePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: HomePageRoutingModule });
HomePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HomePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();


/***/ }),

/***/ "DRHX":
/*!***************************************************!*\
  !*** ./src/app/src/home-page/home-page.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page-routing.module */ "Cy07");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page.component */ "NNAg");
/* harmony import */ var _componets_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componets/header/header.component */ "yqEI");
/* harmony import */ var _description_description_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./description/description.component */ "UjCK");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "yJYt");
/* harmony import */ var _componets_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componets/footer/footer.component */ "FaY5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class HomePageModule {
}
HomePageModule.ɵfac = function HomePageModule_Factory(t) { return new (t || HomePageModule)(); };
HomePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: HomePageModule });
HomePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomePageRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](HomePageModule, { declarations: [_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"], _componets_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _description_description_component__WEBPACK_IMPORTED_MODULE_5__["DescriptionComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _componets_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomePageRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesomeModule"]] }); })();


/***/ }),

/***/ "FaY5":
/*!********************************************************************!*\
  !*** ./src/app/src/home-page/componets/footer/footer.component.ts ***!
  \********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 11, vars: 0, consts: [[1, "container"], [1, "d-flex", "flex-column"], [1, "mb-4"], [1, "text-muted"], [1, "form-inline"], [1, "form-group", "mb-2"], ["type", "password", "id", "inputPassword2", "placeholder", "Correo Electr\u00F3nico", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "ml-2", "mb-2"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ScoutFrame");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Subscribirse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ENVIAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "NNAg":
/*!******************************************************!*\
  !*** ./src/app/src/home-page/home-page.component.ts ***!
  \******************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _componets_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componets/header/header.component */ "yqEI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _componets_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componets/footer/footer.component */ "FaY5");




class HomePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 4, vars: 0, consts: [[1, "overflow-auto", "mt-5"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_componets_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _componets_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".global-container[_ngcontent-%COMP%] {\r\n    \r\n    height: 100%;\r\n    background: url('background.png') no-repeat center center fixed;\r\n    background-size: cover;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\nimg.bg[_ngcontent-%COMP%] {\r\n    \r\n    min-height: 100%;\r\n    min-width: 1024px;\r\n\r\n    \r\n    width: 100%;\r\n    height: auto;\r\n\r\n    \r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    \r\n    img.bg[_ngcontent-%COMP%] {\r\n        left: 50%;\r\n        margin-left: -512px; \r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkRBQTZEO0lBQzdELFlBQVk7SUFDWiwrREFBK0U7SUFDL0Usc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7SUFFakIsaUNBQWlDO0lBQ2pDLFdBQVc7SUFDWCxZQUFZOztJQUVaLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87QUFDWDs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QztRQUNJLFNBQVM7UUFDVCxtQkFBbUIsRUFBRSxRQUFRO0lBQ2pDO0FBQ0oiLCJmaWxlIjoiaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2xvYmFsLWNvbnRhaW5lciB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC5wbmdcIik7ICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuaW1nLmJnIHtcclxuICAgIC8qIFNldCBydWxlcyB0byBmaWxsIGJhY2tncm91bmQgKi9cclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDEwMjRweDtcclxuXHJcbiAgICAvKiBTZXQgdXAgcHJvcG9ydGlvbmF0ZSBzY2FsaW5nICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgICAvKiBTZXQgdXAgcG9zaXRpb25pbmcgKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgLyogU3BlY2lmaWMgdG8gdGhpcyBwYXJ0aWN1bGFyIGltYWdlICovXHJcbiAgICBpbWcuYmcge1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTUxMnB4OyAvKiA1MCUgKi9cclxuICAgIH1cclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "UjCK":
/*!********************************************************************!*\
  !*** ./src/app/src/home-page/description/description.component.ts ***!
  \********************************************************************/
/*! exports provided: DescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function() { return DescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/home"]; };
class DescriptionComponent {
    constructor() { }
    ngOnInit() {
    }
}
DescriptionComponent.ɵfac = function DescriptionComponent_Factory(t) { return new (t || DescriptionComponent)(); };
DescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DescriptionComponent, selectors: [["app-description"]], decls: 18, vars: 2, consts: [[1, "container", "animate__animated", "animate__fadeIn"], [1, "mt-5"], ["href", "javascript:;", 1, "btn", "btn-dark", 3, "routerLink"], [1, "fa", "fa-arrow-left"], [1, "d-flex", "flex-column", "mt-5"]], template: function DescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Atras");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Descripcion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit ultricies interdum. Donec commodo nulla sapien, sed accumsan velit pretium ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at luctus augue, in aliquet massa. Mauris vitae lacus malesuada, dictum urna at, tincidunt neque. Proin eget magna ac elit convallis dapibus sollicitudin vel massa. Praesent quam elit, imperdiet tempus justo id, rhoncus aliquam felis. Curabitur id accumsan risus, nec volutpat arcu. Nullam sodales eget massa sit amet rutrum. Fusce vitae eros mollis, dapibus ante eu, malesuada arcu. Aenean elit nisl, aliquam dignissim eleifend quis, bibendum ut lectus. Mauris varius nisl turpis, quis tempus metus hendrerit a. Duis et ipsum ac dolor egestas mollis. Vestibulum consequat, odio sed fringilla condimentum, nibh ante maximus ante, at malesuada lectus dui non turpis. Suspendisse potenti. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Mauris sit amet placerat elit, vel elementum urna. Aliquam sit amet finibus lacus. Vestibulum laoreet mi auctor, pulvinar ex sed, semper nunc. Fusce nec nisi rhoncus, maximus sem a, ultrices justo. Morbi ullamcorper, justo ut porta rutrum, libero nulla feugiat diam, eu aliquam libero tellus nec massa. Nunc placerat dictum gravida. Vestibulum congue gravida elit, non pharetra odio vehicula ut. Suspendisse non fringilla arcu. Duis ut orci metus. Sed hendrerit mattis tincidunt. Mauris eu metus fringilla nisi consequat malesuada at non risus. In imperdiet ligula et molestie sagittis. Duis dui lectus, hendrerit ac velit sit amet, molestie cursus est. Pellentesque eu justo ut arcu commodo cursus eu a orci. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus nunc nulla, dapibus sed imperdiet et, ullamcorper id sapien. Aliquam placerat odio eu mi auctor, at luctus turpis luctus. Cras nisi arcu, ornare at risus ac, bibendum imperdiet odio. Nulla a dui vitae nulla sollicitudin mollis a eget dui. Ut mattis nunc ac metus pulvinar, sed varius quam euismod. Cras euismod tempus semper. Praesent vel ligula vitae metus lacinia sagittis. Proin laoreet mattis orci eget ultrices. Suspendisse porttitor lacus lacus, ac laoreet est dignissim nec. Nulla tincidunt dictum velit, dictum iaculis libero pulvinar nec. Maecenas volutpat, arcu id elementum bibendum, sapien erat tristique dolor, quis accumsan nunc justo nec erat. Vestibulum enim justo, condimentum eget consectetur non, maximus maximus tortor. Donec dignissim tortor nunc, sit amet volutpat nisi posuere ut. Sed id lectus consequat, venenatis elit non, ultricies elit. Nulla placerat quam mauris, in fermentum erat scelerisque ut. Donec euismod, risus convallis rutrum lobortis, sapien ligula ornare augue, at ultrices libero augue ut ante. Sed volutpat mauris a est placerat, id rutrum orci interdum. Quisque elit nibh, venenatis nec nunc sit amet, bibendum pharetra diam. Vestibulum vehicula rutrum risus, eget varius ligula convallis vel. Maecenas id orci vel nisl egestas accumsan in eget nisi. Maecenas dui diam, congue quis viverra quis, iaculis tempus magna. Etiam turpis augue, convallis vel lorem non, dapibus interdum risus. Vivamus malesuada faucibus justo ut rutrum. Vivamus ullamcorper in quam vel lobortis. Donec ultrices aliquet pellentesque. Pellentesque interdum consequat accumsan. Nunc placerat hendrerit nibh, non finibus lorem mattis vel. Aliquam sagittis feugiat dignissim. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXNjcmlwdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "yJYt":
/*!******************************************************!*\
  !*** ./src/app/src/home-page/home/home.component.ts ***!
  \******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/description"]; };
class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 54, vars: 2, consts: [[1, "container", "container", "animate__animated", "animate__fadeIn"], ["id", "home", 1, "mt-5"], [1, "d-flex", "justify-content-between"], [1, "d-flex", "flex-column", "flex-fill"], [2, "width", "90%"], [1, "d-flex"], [1, "btn", "btn-dark", 3, "routerLink"], [1, "d-flex", "flex-fill"], ["src", "../../../../assets/img/fondo.png", "alt", "Responsive image", 1, "img-fluid"], ["id", "services"], [1, "d-flex", "flex-column"], ["href", ""], [1, "fa", "fa-arrow-right"], [1, "d-flex", "justify-content-between", "mt-4"], [1, "card", 2, "width", "30%"], ["src", "../../../../assets/img/servicio1.jpg", "height", "180px", "alt", "...", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["href", "#", 1, "my-auto"], ["src", "../../../../assets/img/computer-2838920_1920.jpg", "height", "180px", "alt", "...", 1, "card-img-top"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Desarrollo de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "software");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Somos una empresa expecialiazada en desarrollo de software de ultima generacion. Contamos con mas de 10 a\u00F1os de experiencia en la industria del software.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "COMO LO HACEMOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Servicios Destacados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "VER TODOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "LEER M\u00C1S ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "LEER M\u00C1S ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "LEER M\u00C1S ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".stack[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    position: relative;\r\n}\r\n\r\n.stack-child[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n}\r\n\r\n.image-header[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n    margin-top: 100px;\r\n    margin-bottom: 100px;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n}\r\n\r\ni[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFjayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc3RhY2stY2hpbGQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uaW1hZ2UtaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuYXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuaSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "yqEI":
/*!********************************************************************!*\
  !*** ./src/app/src/home-page/componets/header/header.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
    onWindowScroll(e) {
        let element = document.querySelector('.navbar');
        console.log(element);
        if (window.pageYOffset > element.clientHeight) {
            element.classList.add('sticky');
        }
        else {
            element.classList.remove('sticky');
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 23, vars: 0, consts: [["id", "mainNav", 1, "navbar", "navbar-light", "navbar-expand-lg", "fixed-top", "sticky-top", 3, "scroll"], [1, "container"], ["href", "#page-top", 1, "navbar-brand"], ["src", "assets/img/logo.png", "width", "150px"], ["data-toggle", "collapse", "data-target", "#navbarResponsive", "type", "button", "data-toogle", "collapse", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "navbar-toggler-right"], [1, "fa", "fa-bars"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav", "ml-auto", "text-uppercase"], ["role", "presentation", 1, "nav-item"], ["href", "#services", 1, "nav-link", "js-scroll-trigger"], ["href", "#portfolio", 1, "nav-link", "js-scroll-trigger"], ["href", "#about", 1, "nav-link", "js-scroll-trigger"], ["href", "#team", 1, "nav-link", "js-scroll-trigger"], ["href", "#contact", 1, "nav-link", "js-scroll-trigger"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_Template_nav_scroll_0_listener($event) { return ctx.onWindowScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Acerca de");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Equipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contactos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media (min-width:992px) {\r\n  #mainNav[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    transition: padding-top .3s,padding-bottom .3s;\r\n    border: none;\r\n    background-color: transparent;\r\n  }\r\n}\r\n\r\n#mainNav[_ngcontent-%COMP%] {\r\n  background-color: #ffffff00;\r\n}\r\n\r\n.fixed-bottom[_ngcontent-%COMP%], .fixed-top[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 1030;\r\n}\r\n\r\n.fixed-top[_ngcontent-%COMP%] {\r\n  top: 0;\r\n}\r\n\r\n.sticky[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    height: 50px;\r\n    background-color: rgba(255, 255, 255, 1) !important;\r\n    box-shadow: 1px 1px 10px #bdbdbd;\r\n    \r\n    z-index: 1030;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLDhDQUE4QztJQUM5QyxZQUFZO0lBQ1osNkJBQTZCO0VBQy9CO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLE9BQU87RUFDUCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxNQUFNO0FBQ1I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFFBQVE7SUFDUixPQUFPO0lBQ1AsWUFBWTtJQUNaLG1EQUFtRDtJQUNuRCxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDo5OTJweCkge1xyXG4gICNtYWluTmF2IHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBwYWRkaW5nLXRvcCAuM3MscGFkZGluZy1ib3R0b20gLjNzO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4jbWFpbk5hdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwO1xyXG59XHJcblxyXG4uZml4ZWQtYm90dG9tLCAuZml4ZWQtdG9wIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDMwO1xyXG59XHJcblxyXG4uZml4ZWQtdG9wIHtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi5zdGlja3kge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4ICNiZGJkYmQ7XHJcbiAgICAvKiBoZWlnaHQ6IDMwcHg7ICovXHJcbiAgICB6LWluZGV4OiAxMDMwO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src-home-page-home-page-module.js.map