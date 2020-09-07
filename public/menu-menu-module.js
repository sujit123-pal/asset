(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "./src/app/views/app/menu/menu-types/menu-types.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/app/menu/menu-types/menu-types.component.ts ***!
  \*******************************************************************/
/*! exports provided: MenuTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuTypesComponent", function() { return MenuTypesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_containers_layout_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/containers/layout/sidebar/sidebar.service */ "./src/app/containers/layout/sidebar/sidebar.service.ts");
/* harmony import */ var _containers_layout_heading_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../containers/layout/heading/heading.component */ "./src/app/containers/layout/heading/heading.component.ts");
/* harmony import */ var _containers_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../containers/layout/breadcrumb/breadcrumb.component */ "./src/app/containers/layout/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






class MenuTypesComponent {
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
    }
    ngOnInit() {
        this.subscription = this.sidebarService.getSidebar().subscribe(res => {
            this.sidebar = res;
        }, err => {
            console.error(`An error occurred: ${err.message}`);
        });
    }
    changeDefaultMenuType(containerClassnames) {
        const nextClasses = this.getMenuClassesForResize(containerClassnames);
        this.sidebarService.setContainerClassnames(0, nextClasses.join(' '), this.sidebar.selectedMenuHasSubItems);
    }
    getMenuClassesForResize(classes) {
        let nextClasses = classes.split(' ').filter(x => x !== '');
        const windowWidth = window.innerWidth;
        if (windowWidth < this.sidebarService.menuHiddenBreakpoint) {
            nextClasses.push('menu-mobile');
        }
        else if (windowWidth < this.sidebarService.subHiddenBreakpoint) {
            nextClasses = nextClasses.filter(x => x !== 'menu-mobile');
            if (nextClasses.includes('menu-default') &&
                !nextClasses.includes('menu-sub-hidden')) {
                nextClasses.push('menu-sub-hidden');
            }
        }
        else {
            nextClasses = nextClasses.filter(x => x !== 'menu-mobile');
            if (nextClasses.includes('menu-default') &&
                nextClasses.includes('menu-sub-hidden')) {
                nextClasses = nextClasses.filter(x => x !== 'menu-sub-hidden');
            }
        }
        return nextClasses;
    }
}
MenuTypesComponent.ɵfac = function MenuTypesComponent_Factory(t) { return new (t || MenuTypesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_containers_layout_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"])); };
MenuTypesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuTypesComponent, selectors: [["app-menu-types"]], decls: 16, vars: 9, consts: [[1, "row"], [1, "col-12"], [1, "separator", "mb-5"], [1, "col-12", "mb-4"], [1, "btn", "btn-outline-primary", "mb-1", "mr-1", 3, "click"]], template: function MenuTypesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuTypesComponent_Template_button_click_7_listener() { return ctx.changeDefaultMenuType("menu-default"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuTypesComponent_Template_button_click_10_listener() { return ctx.changeDefaultMenuType("menu-sub-hidden"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuTypesComponent_Template_button_click_13_listener() { return ctx.changeDefaultMenuType("menu-hidden"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 3, "menu.default"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 5, "menu.subhidden"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 7, "menu.hidden"));
    } }, directives: [_containers_layout_heading_heading_component__WEBPACK_IMPORTED_MODULE_2__["HeadingComponent"], _containers_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuTypesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-types',
                templateUrl: './menu-types.component.html'
            }]
    }], function () { return [{ type: src_app_containers_layout_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/app/menu/menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/app/menu/menu.component.ts ***!
  \**************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 1, vars: 0, template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/app/menu/menu.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/app/menu/menu.module.ts ***!
  \***********************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.component */ "./src/app/views/app/menu/menu.component.ts");
/* harmony import */ var _menu_types_menu_types_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-types/menu-types.component */ "./src/app/views/app/menu/menu-types/menu-types.component.ts");
/* harmony import */ var _menu_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.routing */ "./src/app/views/app/menu/menu.routing.ts");
/* harmony import */ var src_app_containers_layout_layout_containers_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/containers/layout/layout.containers.module */ "./src/app/containers/layout/layout.containers.module.ts");







class MenuModule {
}
MenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MenuModule });
MenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MenuModule_Factory(t) { return new (t || MenuModule)(); }, imports: [[
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _menu_routing__WEBPACK_IMPORTED_MODULE_4__["MenuRoutingModule"],
            src_app_containers_layout_layout_containers_module__WEBPACK_IMPORTED_MODULE_5__["LayoutContainersModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuModule, { declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _menu_types_menu_types_component__WEBPACK_IMPORTED_MODULE_3__["MenuTypesComponent"]], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _menu_routing__WEBPACK_IMPORTED_MODULE_4__["MenuRoutingModule"],
        src_app_containers_layout_layout_containers_module__WEBPACK_IMPORTED_MODULE_5__["LayoutContainersModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _menu_types_menu_types_component__WEBPACK_IMPORTED_MODULE_3__["MenuTypesComponent"]],
                imports: [
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                    _menu_routing__WEBPACK_IMPORTED_MODULE_4__["MenuRoutingModule"],
                    src_app_containers_layout_layout_containers_module__WEBPACK_IMPORTED_MODULE_5__["LayoutContainersModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/app/menu/menu.routing.ts":
/*!************************************************!*\
  !*** ./src/app/views/app/menu/menu.routing.ts ***!
  \************************************************/
/*! exports provided: MenuRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuRoutingModule", function() { return MenuRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.component */ "./src/app/views/app/menu/menu.component.ts");
/* harmony import */ var _menu_types_menu_types_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-types/menu-types.component */ "./src/app/views/app/menu/menu-types/menu-types.component.ts");






const routes = [
    {
        path: '', component: _menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"],
        children: [
            { path: '', redirectTo: 'types', pathMatch: 'full' },
            { path: 'types', component: _menu_types_menu_types_component__WEBPACK_IMPORTED_MODULE_3__["MenuTypesComponent"] },
            { path: 'levels', loadChildren: () => __webpack_require__.e(/*! import() | menu-levels-menu-levels-module */ "menu-levels-menu-levels-module").then(__webpack_require__.bind(null, /*! ./menu-levels/menu-levels.module */ "./src/app/views/app/menu/menu-levels/menu-levels.module.ts")).then(m => m.MenuLevelsModule) },
        ]
    }
];
class MenuRoutingModule {
}
MenuRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MenuRoutingModule });
MenuRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MenuRoutingModule_Factory(t) { return new (t || MenuRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=menu-menu-module.js.map