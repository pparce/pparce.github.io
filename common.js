(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "CP4t":
/*!***************************************************!*\
  !*** ./src/shared/services/connection.service.ts ***!
  \***************************************************/
/*! exports provided: ConnectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionService", function() { return ConnectionService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ConnectionService {
    constructor(http) {
        this.http = http;
    }
    get(url) {
        let urlAux = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api_host + url;
        return this.http.get(urlAux, {
            reportProgress: true,
        });
    }
}
ConnectionService.CORPORATION = '/assets/utils/corporations.json';
ConnectionService.APPLICATIONS = '/assets/utils/applications.json';
ConnectionService.ɵfac = function ConnectionService_Factory(t) { return new (t || ConnectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ConnectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConnectionService, factory: ConnectionService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map