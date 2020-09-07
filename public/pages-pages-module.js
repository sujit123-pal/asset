(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/views/app/pages/pages.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/app/pages/pages.component.ts ***!
  \****************************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PagesComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagesComponent.ɵfac = function PagesComponent_Factory(t) { return new (t || PagesComponent)(); };
PagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagesComponent, selectors: [["app-pages"]], decls: 3, vars: 0, consts: [[1, "row"], [1, "col-12"]], template: function PagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pages',
                templateUrl: './pages.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/app/pages/pages.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/app/pages/pages.module.ts ***!
  \*************************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component */ "./src/app/views/app/pages/pages.component.ts");
/* harmony import */ var _pages_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.routing */ "./src/app/views/app/pages/pages.routing.ts");





class PagesModule {
}
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _pages_routing__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _pages_routing__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _pages_routing__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/app/pages/pages.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/views/app/pages/pages.routing.ts ***!
  \**************************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component */ "./src/app/views/app/pages/pages.component.ts");





const routes = [
    {
        path: '', component: _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
        children: [
            { path: '', redirectTo: 'product', pathMatch: 'full' },
            { path: 'product', loadChildren: () => Promise.all(/*! import() | product-product-module */[__webpack_require__.e("default~applications-applications-module~blog-blog-module~dashboards-dashboards-module~datatables-da~adce848a"), __webpack_require__.e("default~applications-applications-module~blog-blog-module~components-components-module~dashboards-da~b43c3d54"), __webpack_require__.e("default~blog-blog-module~components-components-module~dashboards-dashboards-module~datatables-datata~e4858844"), __webpack_require__.e("default~blog-blog-module~dashboards-dashboards-module~datatables-datatables-module~forms-forms-modul~7c25a96d"), __webpack_require__.e("default~blog-blog-module~dashboards-dashboards-module~datatables-datatables-module~miscellaneous-mis~efff8893"), __webpack_require__.e("default~blog-blog-module~components-components-module~dashboards-dashboards-module~datatables-datata~9930d6bf"), __webpack_require__.e("default~applications-applications-module~components-components-module~dashboards-dashboards-module~p~4a26a4f2"), __webpack_require__.e("default~applications-applications-module~product-product-module"), __webpack_require__.e("default~components-components-module~product-product-module"), __webpack_require__.e("common"), __webpack_require__.e("product-product-module")]).then(__webpack_require__.bind(null, /*! ./product/product.module */ "./src/app/views/app/pages/product/product.module.ts")).then(m => m.ProductModule) },
            { path: 'blog', loadChildren: () => Promise.all(/*! import() | blog-blog-module */[__webpack_require__.e("default~applications-applications-module~blog-blog-module~dashboards-dashboards-module~datatables-da~adce848a"), __webpack_require__.e("default~applications-applications-module~blog-blog-module~components-components-module~dashboards-da~b43c3d54"), __webpack_require__.e("default~blog-blog-module~components-components-module~dashboards-dashboards-module~datatables-datata~e4858844"), __webpack_require__.e("default~blog-blog-module~dashboards-dashboards-module~datatables-datatables-module~forms-forms-modul~7c25a96d"), __webpack_require__.e("default~blog-blog-module~dashboards-dashboards-module~datatables-datatables-module~miscellaneous-mis~efff8893"), __webpack_require__.e("default~blog-blog-module~components-components-module~dashboards-dashboards-module~datatables-datata~9930d6bf"), __webpack_require__.e("blog-blog-module")]).then(__webpack_require__.bind(null, /*! ./blog/blog.module */ "./src/app/views/app/pages/blog/blog.module.ts")).then(m => m.BlogModule) },
            { path: 'profile', loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("default~applications-applications-module~blog-blog-module~dashboards-dashboards-module~datatables-da~adce848a"), __webpack_require__.e("default~applications-applications-module~blog-blog-module~components-components-module~dashboards-da~b43c3d54"), __webpack_require__.e("default~blog-blog-module~components-components-module~dashboards-dashboards-module~datatables-datata~e4858844"), __webpack_require__.e("default~blog-blog-module~dashboards-dashboards-module~datatables-datatables-module~forms-forms-modul~7c25a96d"), __webpack_require__.e("default~blog-blog-module~dashboards-dashboards-module~datatables-datatables-module~miscellaneous-mis~efff8893"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "./src/app/views/app/pages/profile/profile.module.ts")).then(m => m.ProfileModule) },
            { path: 'miscellaneous', loadChildren: () => Promise.all(/*! import() | miscellaneous-miscellaneous-module */[__webpack_require__.e("default~applications-applications-module~blog-blog-module~dashboards-dashboards-module~datatables-da~adce848a"), __webpack_require__.e("default~applications-applications-module~blog-blog-module~components-components-module~dashboards-da~b43c3d54"), __webpack_require__.e("default~blog-blog-module~components-components-module~dashboards-dashboards-module~datatables-datata~e4858844"), __webpack_require__.e("default~blog-blog-module~dashboards-dashboards-module~datatables-datatables-module~forms-forms-modul~7c25a96d"), __webpack_require__.e("default~blog-blog-module~dashboards-dashboards-module~datatables-datatables-module~miscellaneous-mis~efff8893"), __webpack_require__.e("default~blog-blog-module~components-components-module~dashboards-dashboards-module~datatables-datata~9930d6bf"), __webpack_require__.e("miscellaneous-miscellaneous-module")]).then(__webpack_require__.bind(null, /*! ./miscellaneous/miscellaneous.module */ "./src/app/views/app/pages/miscellaneous/miscellaneous.module.ts")).then(m => m.MiscellaneousModule) }
        ]
    }
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map