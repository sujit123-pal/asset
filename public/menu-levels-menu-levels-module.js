(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-levels-menu-levels-module"],{

/***/ "./src/app/views/app/menu/menu-levels/menu-levels.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/app/menu/menu-levels/menu-levels.component.ts ***!
  \*********************************************************************/
/*! exports provided: MenuLevelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLevelsComponent", function() { return MenuLevelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class MenuLevelsComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuLevelsComponent.ɵfac = function MenuLevelsComponent_Factory(t) { return new (t || MenuLevelsComponent)(); };
MenuLevelsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuLevelsComponent, selectors: [["app-menu-levels"]], decls: 1, vars: 0, template: function MenuLevelsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuLevelsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-levels',
                templateUrl: './menu-levels.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/app/menu/menu-levels/menu-levels.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/app/menu/menu-levels/menu-levels.module.ts ***!
  \******************************************************************/
/*! exports provided: MenuLevelsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLevelsModule", function() { return MenuLevelsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_containers_layout_layout_containers_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/containers/layout/layout.containers.module */ "./src/app/containers/layout/layout.containers.module.ts");
/* harmony import */ var _menu_levels_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-levels.routing */ "./src/app/views/app/menu/menu-levels/menu-levels.routing.ts");
/* harmony import */ var _menu_levels_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-levels.component */ "./src/app/views/app/menu/menu-levels/menu-levels.component.ts");
/* harmony import */ var _third_level1_third_level1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./third-level1/third-level1.component */ "./src/app/views/app/menu/menu-levels/third-level1/third-level1.component.ts");
/* harmony import */ var _third_level2_third_level2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./third-level2/third-level2.component */ "./src/app/views/app/menu/menu-levels/third-level2/third-level2.component.ts");
/* harmony import */ var _third_level3_third_level3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./third-level3/third-level3.component */ "./src/app/views/app/menu/menu-levels/third-level3/third-level3.component.ts");









class MenuLevelsModule {
}
MenuLevelsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MenuLevelsModule });
MenuLevelsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MenuLevelsModule_Factory(t) { return new (t || MenuLevelsModule)(); }, imports: [[
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _menu_levels_routing__WEBPACK_IMPORTED_MODULE_3__["MenuLevelsRoutingModule"],
            src_app_containers_layout_layout_containers_module__WEBPACK_IMPORTED_MODULE_2__["LayoutContainersModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuLevelsModule, { declarations: [_menu_levels_component__WEBPACK_IMPORTED_MODULE_4__["MenuLevelsComponent"], _third_level1_third_level1_component__WEBPACK_IMPORTED_MODULE_5__["ThirdLevel1Component"], _third_level2_third_level2_component__WEBPACK_IMPORTED_MODULE_6__["ThirdLevel2Component"], _third_level3_third_level3_component__WEBPACK_IMPORTED_MODULE_7__["ThirdLevel3Component"]], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _menu_levels_routing__WEBPACK_IMPORTED_MODULE_3__["MenuLevelsRoutingModule"],
        src_app_containers_layout_layout_containers_module__WEBPACK_IMPORTED_MODULE_2__["LayoutContainersModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuLevelsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_menu_levels_component__WEBPACK_IMPORTED_MODULE_4__["MenuLevelsComponent"], _third_level1_third_level1_component__WEBPACK_IMPORTED_MODULE_5__["ThirdLevel1Component"], _third_level2_third_level2_component__WEBPACK_IMPORTED_MODULE_6__["ThirdLevel2Component"], _third_level3_third_level3_component__WEBPACK_IMPORTED_MODULE_7__["ThirdLevel3Component"]],
                imports: [
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                    _menu_levels_routing__WEBPACK_IMPORTED_MODULE_3__["MenuLevelsRoutingModule"],
                    src_app_containers_layout_layout_containers_module__WEBPACK_IMPORTED_MODULE_2__["LayoutContainersModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/app/menu/menu-levels/menu-levels.routing.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/app/menu/menu-levels/menu-levels.routing.ts ***!
  \*******************************************************************/
/*! exports provided: MenuLevelsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLevelsRoutingModule", function() { return MenuLevelsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _menu_levels_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-levels.component */ "./src/app/views/app/menu/menu-levels/menu-levels.component.ts");
/* harmony import */ var _third_level1_third_level1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./third-level1/third-level1.component */ "./src/app/views/app/menu/menu-levels/third-level1/third-level1.component.ts");
/* harmony import */ var _third_level2_third_level2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./third-level2/third-level2.component */ "./src/app/views/app/menu/menu-levels/third-level2/third-level2.component.ts");
/* harmony import */ var _third_level3_third_level3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./third-level3/third-level3.component */ "./src/app/views/app/menu/menu-levels/third-level3/third-level3.component.ts");








const routes = [
    {
        path: '', component: _menu_levels_component__WEBPACK_IMPORTED_MODULE_2__["MenuLevelsComponent"],
        children: [
            { path: '', redirectTo: 'third-level-1', pathMatch: 'full' },
            { path: 'third-level-1', component: _third_level1_third_level1_component__WEBPACK_IMPORTED_MODULE_3__["ThirdLevel1Component"] },
            { path: 'third-level-2', component: _third_level2_third_level2_component__WEBPACK_IMPORTED_MODULE_4__["ThirdLevel2Component"] },
            { path: 'third-level-3', component: _third_level3_third_level3_component__WEBPACK_IMPORTED_MODULE_5__["ThirdLevel3Component"] },
        ]
    }
];
class MenuLevelsRoutingModule {
}
MenuLevelsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MenuLevelsRoutingModule });
MenuLevelsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MenuLevelsRoutingModule_Factory(t) { return new (t || MenuLevelsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuLevelsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuLevelsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/app/menu/menu-levels/third-level1/third-level1.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/app/menu/menu-levels/third-level1/third-level1.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ThirdLevel1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdLevel1Component", function() { return ThirdLevel1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _containers_layout_heading_heading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../containers/layout/heading/heading.component */ "./src/app/containers/layout/heading/heading.component.ts");
/* harmony import */ var _containers_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../containers/layout/breadcrumb/breadcrumb.component */ "./src/app/containers/layout/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





class ThirdLevel1Component {
    constructor() { }
    ngOnInit() {
    }
}
ThirdLevel1Component.ɵfac = function ThirdLevel1Component_Factory(t) { return new (t || ThirdLevel1Component)(); };
ThirdLevel1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThirdLevel1Component, selectors: [["app-third-level1"]], decls: 10, vars: 3, consts: [[1, "row"], [1, "col-12"], [1, "separator", "mb-5"], [1, "col-12", "mb-4"]], template: function ThirdLevel1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 1, "menu.third-level-1"));
    } }, directives: [_containers_layout_heading_heading_component__WEBPACK_IMPORTED_MODULE_1__["HeadingComponent"], _containers_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThirdLevel1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-third-level1',
                templateUrl: './third-level1.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/app/menu/menu-levels/third-level2/third-level2.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/app/menu/menu-levels/third-level2/third-level2.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ThirdLevel2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdLevel2Component", function() { return ThirdLevel2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _containers_layout_heading_heading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../containers/layout/heading/heading.component */ "./src/app/containers/layout/heading/heading.component.ts");
/* harmony import */ var _containers_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../containers/layout/breadcrumb/breadcrumb.component */ "./src/app/containers/layout/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





class ThirdLevel2Component {
    constructor() { }
    ngOnInit() {
    }
}
ThirdLevel2Component.ɵfac = function ThirdLevel2Component_Factory(t) { return new (t || ThirdLevel2Component)(); };
ThirdLevel2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThirdLevel2Component, selectors: [["app-third-level2"]], decls: 10, vars: 3, consts: [[1, "row"], [1, "col-12"], [1, "separator", "mb-5"], [1, "col-12", "mb-4"]], template: function ThirdLevel2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 1, "menu.third-level-2"));
    } }, directives: [_containers_layout_heading_heading_component__WEBPACK_IMPORTED_MODULE_1__["HeadingComponent"], _containers_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThirdLevel2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-third-level2',
                templateUrl: './third-level2.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/app/menu/menu-levels/third-level3/third-level3.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/app/menu/menu-levels/third-level3/third-level3.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ThirdLevel3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdLevel3Component", function() { return ThirdLevel3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _containers_layout_heading_heading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../containers/layout/heading/heading.component */ "./src/app/containers/layout/heading/heading.component.ts");
/* harmony import */ var _containers_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../containers/layout/breadcrumb/breadcrumb.component */ "./src/app/containers/layout/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





class ThirdLevel3Component {
    constructor() { }
    ngOnInit() {
    }
}
ThirdLevel3Component.ɵfac = function ThirdLevel3Component_Factory(t) { return new (t || ThirdLevel3Component)(); };
ThirdLevel3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThirdLevel3Component, selectors: [["app-third-level3"]], decls: 10, vars: 3, consts: [[1, "row"], [1, "col-12"], [1, "separator", "mb-5"], [1, "col-12", "mb-4"]], template: function ThirdLevel3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 1, "menu.third-level-3"));
    } }, directives: [_containers_layout_heading_heading_component__WEBPACK_IMPORTED_MODULE_1__["HeadingComponent"], _containers_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThirdLevel3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-third-level3',
                templateUrl: './third-level3.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=menu-levels-menu-levels-module.js.map