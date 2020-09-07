(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-ui-module"],{

/***/ "./src/app/views/app/ui/ui.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/app/ui/ui.component.ts ***!
  \**********************************************/
/*! exports provided: UiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiComponent", function() { return UiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class UiComponent {
    constructor() { }
    ngOnInit() {
    }
}
UiComponent.ɵfac = function UiComponent_Factory(t) { return new (t || UiComponent)(); };
UiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UiComponent, selectors: [["app-ui"]], decls: 1, vars: 0, template: function UiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ui',
                templateUrl: './ui.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/app/ui/ui.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/app/ui/ui.module.ts ***!
  \*******************************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ui_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.routing */ "./src/app/views/app/ui/ui.routing.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ui_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui.component */ "./src/app/views/app/ui/ui.component.ts");
/* harmony import */ var src_app_containers_layout_layout_containers_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/containers/layout/layout.containers.module */ "./src/app/containers/layout/layout.containers.module.ts");






class UiModule {
}
UiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UiModule });
UiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UiModule_Factory(t) { return new (t || UiModule)(); }, imports: [[
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _ui_routing__WEBPACK_IMPORTED_MODULE_1__["UIRoutingModule"],
            src_app_containers_layout_layout_containers_module__WEBPACK_IMPORTED_MODULE_4__["LayoutContainersModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UiModule, { declarations: [_ui_component__WEBPACK_IMPORTED_MODULE_3__["UiComponent"]], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _ui_routing__WEBPACK_IMPORTED_MODULE_1__["UIRoutingModule"],
        src_app_containers_layout_layout_containers_module__WEBPACK_IMPORTED_MODULE_4__["LayoutContainersModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_ui_component__WEBPACK_IMPORTED_MODULE_3__["UiComponent"]],
                imports: [
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _ui_routing__WEBPACK_IMPORTED_MODULE_1__["UIRoutingModule"],
                    src_app_containers_layout_layout_containers_module__WEBPACK_IMPORTED_MODULE_4__["LayoutContainersModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/app/ui/ui.routing.ts":
/*!********************************************!*\
  !*** ./src/app/views/app/ui/ui.routing.ts ***!
  \********************************************/
/*! exports provided: UIRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIRoutingModule", function() { return UIRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.component */ "./src/app/views/app/ui/ui.component.ts");





const routes = [
    {
        path: '', component: _ui_component__WEBPACK_IMPORTED_MODULE_2__["UiComponent"],
        children: [
            { path: '', redirectTo: 'forms', pathMatch: 'full' },
            { path: 'datatables', loadChildren: () => Promise.all(/*! import() | datatables-datatables-module */[__webpack_require__.e("default~applications-applications-module~blog-blog-module~dashboards-dashboards-module~datatables-da~adce848a"), __webpack_require__.e("default~applications-applications-module~blog-blog-module~components-components-module~dashboards-da~b43c3d54"), __webpack_require__.e("default~blog-blog-module~components-components-module~dashboards-dashboards-module~datatables-datata~e4858844"), __webpack_require__.e("default~blog-blog-module~dashboards-dashboards-module~datatables-datatables-module~forms-forms-modul~7c25a96d"), __webpack_require__.e("default~blog-blog-module~dashboards-dashboards-module~datatables-datatables-module~miscellaneous-mis~efff8893"), __webpack_require__.e("default~blog-blog-module~components-components-module~dashboards-dashboards-module~datatables-datata~9930d6bf"), __webpack_require__.e("common"), __webpack_require__.e("datatables-datatables-module")]).then(__webpack_require__.bind(null, /*! ./datatables/datatables.module */ "./src/app/views/app/ui/datatables/datatables.module.ts")).then(m => m.DatatablesModule) },
            { path: 'components', loadChildren: () => Promise.all(/*! import() | components-components-module */[__webpack_require__.e("default~applications-applications-module~blog-blog-module~components-components-module~dashboards-da~b43c3d54"), __webpack_require__.e("default~blog-blog-module~components-components-module~dashboards-dashboards-module~datatables-datata~e4858844"), __webpack_require__.e("default~blog-blog-module~components-components-module~dashboards-dashboards-module~datatables-datata~9930d6bf"), __webpack_require__.e("default~applications-applications-module~components-components-module~dashboards-dashboards-module~p~4a26a4f2"), __webpack_require__.e("default~applications-applications-module~components-components-module~dashboards-dashboards-module"), __webpack_require__.e("default~components-components-module~user-user-module"), __webpack_require__.e("default~components-components-module~product-product-module"), __webpack_require__.e("components-components-module")]).then(__webpack_require__.bind(null, /*! ./components/components.module */ "./src/app/views/app/ui/components/components.module.ts")).then(m => m.ComponentsModule) },
            { path: 'forms', loadChildren: () => Promise.all(/*! import() | forms-forms-module */[__webpack_require__.e("default~applications-applications-module~blog-blog-module~dashboards-dashboards-module~datatables-da~adce848a"), __webpack_require__.e("default~blog-blog-module~dashboards-dashboards-module~datatables-datatables-module~forms-forms-modul~7c25a96d"), __webpack_require__.e("default~dashboards-dashboards-module~forms-forms-module"), __webpack_require__.e("forms-forms-module")]).then(__webpack_require__.bind(null, /*! ./forms/forms.module */ "./src/app/views/app/ui/forms/forms.module.ts")).then(m => m.FormsModule) },
        ]
    }
];
class UIRoutingModule {
}
UIRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UIRoutingModule });
UIRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UIRoutingModule_Factory(t) { return new (t || UIRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UIRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UIRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=ui-ui-module.js.map