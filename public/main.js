(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_lang_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/lang.service */ "./src/app/shared/lang.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _containers_layout_color_switcher_color_switcher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/layout/color-switcher/color-switcher.component */ "./src/app/containers/layout/color-switcher/color-switcher.component.ts");








function AppComponent_app_color_switcher_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-color-switcher");
} }
class AppComponent {
    constructor(langService, renderer) {
        this.langService = langService;
        this.renderer = renderer;
        this.isMultiColorActive = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].isMultiColorActive;
    }
    ngOnInit() {
        this.langService.init();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.renderer.addClass(document.body, 'show');
        }, 1000);
        setTimeout(() => {
            this.renderer.addClass(document.body, 'default-transition');
        }, 1500);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_lang_service__WEBPACK_IMPORTED_MODULE_2__["LangService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [[1, "h-100"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_color_switcher_1_Template, 1, 0, "app-color-switcher", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMultiColorActive);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _containers_layout_color_switcher_color_switcher_component__WEBPACK_IMPORTED_MODULE_5__["ColorSwitcherComponent"]], encapsulation: 2 });
AppComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppComponent, factory: AppComponent.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html'
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_lang_service__WEBPACK_IMPORTED_MODULE_2__["LangService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_views_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/views.module */ "./src/app/views/views.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _containers_layout_layout_containers_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers/layout/layout.containers.module */ "./src/app/containers/layout/layout.containers.module.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./item/item.component */ "./src/app/item/item.component.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/__ivy_ngcc__/fesm2015/angular2-notifications.js");
/* harmony import */ var _scanner_scan_scan_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./scanner/scan/scan.component */ "./src/app/scanner/scan/scan.component.ts");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @zxing/ngx-scanner */ "./node_modules/@zxing/ngx-scanner/__ivy_ngcc__/fesm2015/zxing-ngx-scanner.js");
/* harmony import */ var src_app_scanner_scan_app_ui_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/scanner/scan/app-ui.module */ "./src/app/scanner/scan/app-ui.module.ts");
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "./node_modules/@techiediaries/ngx-qrcode/__ivy_ngcc__/fesm2015/techiediaries-ngx-qrcode.js");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _views_views_module__WEBPACK_IMPORTED_MODULE_4__["ViewsModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_18__["NgxQRCodeModule"],
            _containers_layout_layout_containers_module__WEBPACK_IMPORTED_MODULE_10__["LayoutContainersModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__["NgxDatatableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_16__["ZXingScannerModule"], src_app_scanner_scan_app_ui_module__WEBPACK_IMPORTED_MODULE_17__["AppUiModule"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_14__["SimpleNotificationsModule"].forRoot(),
            _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _item_item_component__WEBPACK_IMPORTED_MODULE_11__["ItemComponent"],
        _scanner_scan_scan_component__WEBPACK_IMPORTED_MODULE_15__["ScanComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _views_views_module__WEBPACK_IMPORTED_MODULE_4__["ViewsModule"],
        _app_routing__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_18__["NgxQRCodeModule"],
        _containers_layout_layout_containers_module__WEBPACK_IMPORTED_MODULE_10__["LayoutContainersModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__["NgxDatatableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_16__["ZXingScannerModule"], src_app_scanner_scan_app_ui_module__WEBPACK_IMPORTED_MODULE_17__["AppUiModule"], angular2_notifications__WEBPACK_IMPORTED_MODULE_14__["SimpleNotificationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _views_views_module__WEBPACK_IMPORTED_MODULE_4__["ViewsModule"],
                    _app_routing__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_18__["NgxQRCodeModule"],
                    _containers_layout_layout_containers_module__WEBPACK_IMPORTED_MODULE_10__["LayoutContainersModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__["NgxDatatableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot(),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_16__["ZXingScannerModule"], src_app_scanner_scan_app_ui_module__WEBPACK_IMPORTED_MODULE_17__["AppUiModule"],
                    angular2_notifications__WEBPACK_IMPORTED_MODULE_14__["SimpleNotificationsModule"].forRoot(),
                    _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase)
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _item_item_component__WEBPACK_IMPORTED_MODULE_11__["ItemComponent"],
                    _scanner_scan_scan_component__WEBPACK_IMPORTED_MODULE_15__["ScanComponent"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: '', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./views/views.module */ "./src/app/views/views.module.ts")).then(m => m.ViewsModule) },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/carousel/components.carousel.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/carousel/components.carousel.module.ts ***!
  \*******************************************************************/
/*! exports provided: ComponentsCarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsCarouselModule", function() { return ComponentsCarouselModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _glide_glide_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glide/glide.component */ "./src/app/components/carousel/glide/glide.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _glide_thumbs_glide_thumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glide-thumbs/glide-thumbs.component */ "./src/app/components/carousel/glide-thumbs/glide-thumbs.component.ts");





class ComponentsCarouselModule {
}
ComponentsCarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsCarouselModule });
ComponentsCarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsCarouselModule_Factory(t) { return new (t || ComponentsCarouselModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsCarouselModule, { declarations: [_glide_glide_component__WEBPACK_IMPORTED_MODULE_1__["GlideComponent"],
        _glide_thumbs_glide_thumbs_component__WEBPACK_IMPORTED_MODULE_3__["GlideThumbsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]], exports: [_glide_glide_component__WEBPACK_IMPORTED_MODULE_1__["GlideComponent"],
        _glide_thumbs_glide_thumbs_component__WEBPACK_IMPORTED_MODULE_3__["GlideThumbsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsCarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _glide_glide_component__WEBPACK_IMPORTED_MODULE_1__["GlideComponent"],
                    _glide_thumbs_glide_thumbs_component__WEBPACK_IMPORTED_MODULE_3__["GlideThumbsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ],
                providers: [],
                exports: [
                    _glide_glide_component__WEBPACK_IMPORTED_MODULE_1__["GlideComponent"],
                    _glide_thumbs_glide_thumbs_component__WEBPACK_IMPORTED_MODULE_3__["GlideThumbsComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/carousel/glide-thumbs/glide-thumbs.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/carousel/glide-thumbs/glide-thumbs.component.ts ***!
  \****************************************************************************/
/*! exports provided: GlideThumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlideThumbsComponent", function() { return GlideThumbsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
/* harmony import */ var src_app_shared_lang_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/lang.service */ "./src/app/shared/lang.service.ts");
/* harmony import */ var src_app_containers_layout_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/containers/layout/sidebar/sidebar.service */ "./src/app/containers/layout/sidebar/sidebar.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = ["glideRef"];
const _c1 = ["glideThumbsRef"];
const _c2 = ["glideSlides"];
const _c3 = ["glideThumbs"];
function GlideThumbsComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r7.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GlideThumbsComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlideThumbsComponent_li_11_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onThumbClick(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r5.activeIndex == i_r9 ? "glide__slide active" : "glide__slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r8.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GlideThumbsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class GlideThumbsComponent {
    constructor(langService, sidebarService) {
        this.langService = langService;
        this.sidebarService = sidebarService;
        this.glideThumbCountMax = 5;
        this.glideCount = [];
        this.renderArrows = true;
        this.activeIndex = 0;
        this.sidebarSubscription = this.sidebarService.getSidebar().subscribe(res => {
            if (this.sidebar) {
                if (this.sidebar.containerClassnames !== res.containerClassnames) {
                    this.update();
                }
            }
            this.sidebar = res;
        }, err => {
            console.error(`An error occurred: ${err.message}`);
        });
    }
    ngOnInit() {
    }
    updateThumbBreakpoints() {
        const thumbBreakpoints = this.settingsThumbs.breakpoints;
        const newBreakpoints = {};
        for (const prop in thumbBreakpoints) {
            if (thumbBreakpoints[prop]) {
                newBreakpoints[prop] = { perView: Math.min(thumbBreakpoints[prop].perView, this.glideCount.length) };
            }
        }
        this.settingsThumbs.breakpoints = newBreakpoints;
    }
    ngAfterViewInit() {
        this.glideCount = Array(this.glideSlides.nativeElement.childNodes.length).fill(1).map((x, i) => i);
        this.updateThumbBreakpoints();
        this.glideCarouselImages = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__["default"](this.glideRef.nativeElement, Object.assign(Object.assign({}, this.settingsImages), { direction: this.langService.direction }));
        this.glideCarouselThumbs = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__["default"](this.glideThumbsRef.nativeElement, Object.assign(Object.assign({}, this.settingsThumbs), { direction: this.langService.direction }));
        this.glideCarouselThumbs.on('resize', () => { this.thumbsResize(); });
        this.glideCarouselImages.on('swipe.end', () => { this.imagesSwipeEnd(); });
        this.glideCarouselImages.mount();
        this.glideCarouselThumbs.mount();
        this.thumbsResize();
    }
    thumbsResize() {
        const perView = Math.min(this.glideCarouselThumbs.settings.perView, this.glideCount.length);
        this.thumbsPerView = perView;
        if (this.glideCount.length <= perView) {
            this.renderArrows = false;
        }
        this.glideCarouselImages.update();
        this.glideCarouselThumbs.update();
    }
    onThumbClick(index) {
        this.activeIndex = index;
        this.glideCarouselImages.go('=' + index);
    }
    imagesSwipeEnd() {
        const gap = this.glideCarouselThumbs.index + this.thumbsPerView;
        this.activeIndex = this.glideCarouselImages.index;
        if (this.activeIndex >= gap) {
            this.glideCarouselThumbs.go('>');
        }
        if (this.activeIndex < this.glideCarouselThumbs.index) {
            this.glideCarouselThumbs.go('<');
        }
    }
    ngOnDestroy() {
        clearTimeout(this.updateTimeout);
        this.updateTimeout = null;
        this.glideCarouselImages.destroy();
        this.glideCarouselThumbs.destroy();
        this.sidebarSubscription.unsubscribe();
    }
    update() {
        this.updateTimeout = setTimeout(() => {
            this.glideCarouselThumbs.update();
            this.glideCarouselImages.update();
        }, 500);
    }
}
GlideThumbsComponent.ɵfac = function GlideThumbsComponent_Factory(t) { return new (t || GlideThumbsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_lang_service__WEBPACK_IMPORTED_MODULE_2__["LangService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_containers_layout_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"])); };
GlideThumbsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GlideThumbsComponent, selectors: [["app-glide-thumbs"]], viewQuery: function GlideThumbsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c3, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.glideRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.glideThumbsRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.glideSlides = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.glideThumbs = _t.first);
    } }, inputs: { settingsImages: "settingsImages", settingsThumbs: "settingsThumbs", images: "images", thumbs: "thumbs" }, decls: 13, vars: 3, consts: [[1, "glide", "details"], ["glideRef", ""], ["data-glide-el", "track", 1, "glide__track"], [1, "glide__slides"], ["glideSlides", ""], ["class", "glide__slide", 4, "ngFor", "ngForOf"], [1, "glide", "thumbs"], ["glideThumbsRef", ""], ["glideThumbs", ""], [3, "class", "click", 4, "ngFor", "ngForOf"], ["class", "glide__arrows", "data-glide-el", "controls", 4, "ngIf"], [1, "glide__slide"], ["alt", "detail", 1, "responsive", "border-0", "border-radius", "img-fluid", "mb-3", 3, "src"], [3, "click"], ["alt", "thumb", 1, "responsive", "border-0", "border-radius", "img-fluid", 3, "src"], ["data-glide-el", "controls", 1, "glide__arrows"], ["data-glide-dir", "<", 1, "glide__arrow", "glide__arrow--left"], [1, "simple-icon-arrow-left"], ["data-glide-dir", ">", 1, "glide__arrow", "glide__arrow--right"], [1, "simple-icon-arrow-right"]], template: function GlideThumbsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GlideThumbsComponent_li_5_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GlideThumbsComponent_li_11_Template, 2, 3, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GlideThumbsComponent_div_12_Template, 5, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.thumbs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.renderArrows);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlideThumbsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-glide-thumbs',
                templateUrl: './glide-thumbs.component.html'
            }]
    }], function () { return [{ type: src_app_shared_lang_service__WEBPACK_IMPORTED_MODULE_2__["LangService"] }, { type: src_app_containers_layout_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"] }]; }, { glideRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['glideRef', { static: true }]
        }], glideThumbsRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['glideThumbsRef', { static: true }]
        }], glideSlides: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['glideSlides', { static: true }]
        }], glideThumbs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['glideThumbs', { static: true }]
        }], settingsImages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], settingsThumbs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], thumbs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/carousel/glide/glide.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/carousel/glide/glide.component.ts ***!
  \**************************************************************/
/*! exports provided: GlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlideComponent", function() { return GlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
/* harmony import */ var src_app_shared_lang_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/lang.service */ "./src/app/shared/lang.service.ts");
/* harmony import */ var src_app_containers_layout_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/containers/layout/sidebar/sidebar.service */ "./src/app/containers/layout/sidebar/sidebar.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = ["glideRef"];
const _c1 = ["glideSlides"];
function GlideComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlideComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onBulletClick(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function (a0) { return { "d-none": a0 }; };
const _c3 = ["*"];
class GlideComponent {
    constructor(langService, sidebarService) {
        this.langService = langService;
        this.sidebarService = sidebarService;
        this.glideCount = [];
        this.direction = 'ltr';
        this.direction = this.langService.direction;
        this.sidebarSubscription = this.sidebarService.getSidebar().subscribe(res => {
            if (this.sidebar) {
                if (this.sidebar.containerClassnames !== res.containerClassnames) {
                    this.update();
                }
            }
            this.sidebar = res;
        }, err => {
            console.error(`An error occurred: ${err.message}`);
        });
    }
    ngAfterContentInit() {
        this.glideCount = Array(this.glideSlides.nativeElement.childNodes.length - 1).fill(1).map((x, i) => i);
        this.glideCarousel = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__["default"](this.glideRef.nativeElement, Object.assign(Object.assign({}, this.settings), { direction: this.langService.direction }));
        this.glideCarousel.mount();
    }
    ngAfterViewInit() {
        const event = document.createEvent('HTMLEvents');
        event.initEvent('resize', false, false);
        window.dispatchEvent(event);
    }
    update() {
        this.updateTimeout = setTimeout(() => {
            this.glideCarousel.update();
        }, 500);
    }
    onBulletClick(bulletIndex) {
        this.glideCarousel.go('=' + bulletIndex);
    }
    ngOnDestroy() {
        clearTimeout(this.updateTimeout);
        this.updateTimeout = null;
        this.glideCarousel.destroy();
        this.sidebarSubscription.unsubscribe();
    }
}
GlideComponent.ɵfac = function GlideComponent_Factory(t) { return new (t || GlideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_lang_service__WEBPACK_IMPORTED_MODULE_2__["LangService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_containers_layout_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"])); };
GlideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GlideComponent, selectors: [["app-glide"]], viewQuery: function GlideComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.glideRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.glideSlides = _t.first);
    } }, inputs: { settings: "settings" }, ngContentSelectors: _c3, decls: 13, vars: 4, consts: [[1, "glide", "basic"], ["glideRef", ""], ["data-glide-el", "track", 1, "glide__track", "pb-3"], [1, "glide__slides"], ["glideSlides", ""], ["data-glide-el", "controls", 1, "glide__arrows", "slider-nav", 3, "ngClass"], ["data-glide-dir", "<", 1, "glide__arrow", "glide__arrow--left", "left-arrow", "btn", "btn-link"], [1, "simple-icon-arrow-left"], ["data-glide-el", "controls[nav]", 1, "glide__bullets", "slider-dot-container"], ["class", "glide__bullet slider-dot", 3, "click", 4, "ngFor", "ngForOf"], ["data-glide-dir", ">", 1, "glide__arrow", "glide__arrow--right", "right-arrow", "btn", "btn-link"], [1, "simple-icon-arrow-right"], [1, "glide__bullet", "slider-dot", 3, "click"]], template: function GlideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GlideComponent_button_10_Template, 1, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ctx.settings.hideNav));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.glideCount);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-glide',
                templateUrl: './glide.component.html'
            }]
    }], function () { return [{ type: src_app_shared_lang_service__WEBPACK_IMPORTED_MODULE_2__["LangService"] }, { type: src_app_containers_layout_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"] }]; }, { settings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], glideRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['glideRef', { static: true }]
        }], glideSlides: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['glideSlides', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/constants/menu.ts":
/*!***********************************!*\
  !*** ./src/app/constants/menu.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");

const adminRoot = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].adminRoot;
const data = [
    {
        icon: 'iconsminds-shop-4',
        label: 'Settings',
        to: `${adminRoot}/dashboards`,
        subs: [
            {
                icon: 'simple-icon-briefcase',
                label: 'Asset Category',
                to: `${adminRoot}/dashboards/asset`,
            },
            {
                icon: 'simple-icon-briefcase',
                label: 'Model',
                to: `${adminRoot}/dashboards/model`,
            },
            {
                icon: 'simple-icon-briefcase',
                label: 'Purchase Order Setting',
                to: `${adminRoot}/dashboards/purchase-order-setting`,
            },
            {
                icon: 'simple-icon-briefcase',
                label: 'Brand',
                to: `${adminRoot}/dashboards/brand`,
            },
            {
                icon: 'simple-icon-briefcase',
                label: 'Unit',
                to: `${adminRoot}/dashboards/unit`,
            },
            {
                icon: 'simple-icon-briefcase',
                label: 'Activity Type',
                to: `${adminRoot}/dashboards/activity-type`,
            },
            {
                icon: 'simple-icon-briefcase',
                label: 'Movement Status',
                to: `${adminRoot}/dashboards/movement-status`,
            },
            {
                icon: 'simple-icon-briefcase',
                label: 'Tax Settings',
                to: `${adminRoot}/dashboards/tax-settings`,
            },
            {
                icon: 'simple-icon-briefcase',
                label: 'Vendor Setting',
                to: `${adminRoot}/dashboards/vendor-setting`,
            },
            {
                icon: 'simple-icon-briefcase',
                label: 'Reason Settings',
                to: `${adminRoot}/dashboards/reason-settings`,
            },
            {
                icon: 'simple-icon-briefcase',
                label: 'Meter Type Settings',
                to: `${adminRoot}/dashboards/meter-type-settings`,
            },
            {
                icon: 'simple-icon-briefcase',
                label: 'Condition Setting',
                to: `${adminRoot}/dashboards/condition-settings`,
            },
            {
                icon: 'simple-icon-briefcase',
                label: 'Department',
                to: `${adminRoot}/dashboards/department`,
            },
            {
                icon: 'simple-icon-briefcase',
                label: 'Status',
                to: `${adminRoot}/dashboards/status`,
            },
            {
                icon: 'simple-icon-briefcase',
                label: 'Address',
                to: `${adminRoot}/dashboards/address`,
            },
            {
                icon: 'simple-icon-briefcase',
                label: 'Item Creation',
                to: `${adminRoot}/dashboards/item`,
            },
            {
                icon: 'simple-icon-briefcase',
                label: 'Generate QR Code',
                to: `${adminRoot}/dashboards/code`,
            },
        ],
    },
    {
        icon: 'iconsminds-digital-drawing',
        label: 'Reports',
        to: `${adminRoot}/pages`,
        subs: [
            {
                label: 'menu.authorization',
                to: '/user',
                subs: [
                    {
                        icon: 'simple-icon-user-following',
                        label: 'menu.login',
                        to: '/user/login',
                        newWindow: true,
                    },
                    {
                        icon: 'simple-icon-user-follow',
                        label: 'menu.register',
                        to: '/user/register',
                        newWindow: true,
                    },
                    {
                        icon: 'simple-icon-user-unfollow',
                        label: 'menu.forgot-password',
                        to: '/user/forgot-password',
                        newWindow: true,
                    },
                    {
                        icon: 'simple-icon-user-following',
                        label: 'menu.reset-password',
                        to: '/user/reset-password',
                        newWindow: true,
                    },
                ],
            },
            {
                label: 'menu.product',
                to: `${adminRoot}/pages/product`,
                subs: [
                    {
                        icon: 'simple-icon-credit-card',
                        label: 'menu.data-list',
                        to: `${adminRoot}/pages/product/data-list`,
                    },
                    {
                        icon: 'simple-icon-list',
                        label: 'menu.thumb-list',
                        to: `${adminRoot}/pages/product/thumb-list`,
                    },
                    {
                        icon: 'simple-icon-grid',
                        label: 'menu.image-list',
                        to: `${adminRoot}/pages/product/image-list`,
                    },
                    {
                        icon: 'simple-icon-picture',
                        label: 'menu.details',
                        to: `${adminRoot}/pages/product/details`,
                    },
                    {
                        icon: 'simple-icon-book-open',
                        label: 'menu.details-alt',
                        to: `${adminRoot}/pages/product/details-alt`,
                    },
                ],
            },
            {
                label: 'menu.profile',
                to: `${adminRoot}/pages/profile`,
                subs: [
                    {
                        icon: 'simple-icon-share',
                        label: 'menu.social',
                        to: `${adminRoot}/pages/profile/social`,
                    },
                    {
                        icon: 'simple-icon-link',
                        label: 'menu.portfolio',
                        to: `${adminRoot}/pages/profile/portfolio`,
                    },
                ],
            },
            {
                label: 'menu.blog',
                to: `${adminRoot}/pages/blog`,
                subs: [
                    {
                        icon: 'simple-icon-share',
                        label: 'menu.blog-list',
                        to: `${adminRoot}/pages/blog/blog-list`,
                    },
                    {
                        icon: 'simple-icon-link',
                        label: 'menu.blog-detail',
                        to: `${adminRoot}/pages/blog/blog-detail`,
                    },
                ],
            },
            {
                label: 'menu.miscellaneous',
                to: `${adminRoot}/pages/miscellaneous`,
                subs: [
                    {
                        icon: 'simple-icon-question',
                        label: 'menu.faq',
                        to: `${adminRoot}/pages/miscellaneous/faq`,
                    },
                    {
                        icon: 'simple-icon-graduation',
                        label: 'menu.knowledge-base',
                        to: `${adminRoot}/pages/miscellaneous/knowledge-base`,
                    },
                    {
                        icon: 'simple-icon-diamond',
                        label: 'menu.prices',
                        to: `${adminRoot}/pages/miscellaneous/prices`,
                    },
                    {
                        icon: 'simple-icon-magnifier',
                        label: 'menu.search',
                        to: `${adminRoot}/pages/miscellaneous/search`,
                    },
                    {
                        icon: 'simple-icon-envelope-open',
                        label: 'menu.mailing',
                        to: `${adminRoot}/pages/miscellaneous/mailing`,
                    },
                    {
                        icon: 'simple-icon-bag',
                        label: 'menu.invoice',
                        to: `${adminRoot}/pages/miscellaneous/invoice`,
                    },
                    {
                        icon: 'simple-icon-exclamation',
                        label: 'menu.error',
                        to: '/error',
                        newWindow: true,
                    },
                ],
            },
        ],
    },
    {
        icon: 'iconsminds-air-balloon-1',
        label: 'Maintenance',
        to: `${adminRoot}/applications`,
        subs: [
            {
                icon: 'simple-icon-check',
                label: 'menu.todo',
                to: `${adminRoot}/applications/todo`,
            },
            {
                icon: 'simple-icon-calculator',
                label: 'menu.survey',
                to: `${adminRoot}/applications/survey`,
            },
            // {
            //   icon: 'simple-icon-calculator',
            //   label: 'menu.survey-detail',
            //   to: `${adminRoot}/applications/survey-detai`'
            // },
            {
                icon: 'simple-icon-bubbles',
                label: 'menu.chat',
                to: `${adminRoot}/applications/chat`,
            },
        ],
    },
    {
        icon: 'iconsminds-pantone',
        label: 'Assets',
        to: `${adminRoot}/ui`,
        subs: [
            {
                label: 'menu.forms',
                to: `${adminRoot}/ui/forms`,
                subs: [
                    {
                        icon: 'simple-icon-notebook',
                        label: 'menu.layouts',
                        to: `${adminRoot}/ui/forms/layouts`,
                    },
                    {
                        icon: 'simple-icon-puzzle',
                        label: 'menu.components',
                        to: `${adminRoot}/ui/forms/components`,
                    },
                    {
                        icon: 'simple-icon-check',
                        label: 'menu.validations',
                        to: `${adminRoot}/ui/forms/validations`,
                    },
                    {
                        icon: 'simple-icon-magic-wand',
                        label: 'menu.wizard',
                        to: `${adminRoot}/ui/forms/wizard`,
                    },
                ],
            },
            {
                label: 'menu.datatables',
                to: `${adminRoot}/ui/datatables`,
                subs: [
                    {
                        icon: 'simple-icon-screen-desktop',
                        label: 'menu.fullpage',
                        to: `${adminRoot}/ui/datatables/fullpage`,
                    },
                    {
                        icon: 'simple-icon-mouse',
                        label: 'menu.scrollable',
                        to: `${adminRoot}/ui/datatables/scrollable`,
                    },
                    {
                        icon: 'simple-icon-notebook',
                        label: 'menu.responsive',
                        to: `${adminRoot}/ui/datatables/responsive`,
                    },
                ],
            },
            {
                label: 'menu.components',
                to: `${adminRoot}/ui/components`,
                subs: [
                    {
                        icon: 'simple-icon-layers',
                        label: 'menu.accordion',
                        to: `${adminRoot}/ui/components/accordion`,
                    },
                    {
                        icon: 'simple-icon-bell',
                        label: 'menu.alerts',
                        to: `${adminRoot}/ui/components/alerts`,
                    },
                    {
                        icon: 'simple-icon-badge',
                        label: 'menu.badges',
                        to: `${adminRoot}/ui/components/badges`,
                    },
                    {
                        icon: 'simple-icon-control-play',
                        label: 'menu.buttons',
                        to: `${adminRoot}/ui/components/buttons`,
                    },
                    {
                        icon: 'simple-icon-layers',
                        label: 'menu.cards',
                        to: `${adminRoot}/ui/components/cards`,
                    },
                    {
                        icon: 'simple-icon-picture',
                        label: 'menu.carousel',
                        to: `${adminRoot}/ui/components/carousel`,
                    },
                    {
                        icon: 'simple-icon-chart',
                        label: 'menu.charts',
                        to: `${adminRoot}/ui/components/charts`,
                    },
                    {
                        icon: 'simple-icon-arrow-up',
                        label: 'menu.collapse',
                        to: `${adminRoot}/ui/components/collapse`,
                    },
                    {
                        icon: 'simple-icon-arrow-down',
                        label: 'menu.dropdowns',
                        to: `${adminRoot}/ui/components/dropdowns`,
                    },
                    {
                        icon: 'simple-icon-book-open',
                        label: 'menu.editors',
                        to: `${adminRoot}/ui/components/editors`,
                    },
                    {
                        icon: 'simple-icon-star',
                        label: 'menu.icons',
                        to: `${adminRoot}/ui/components/icons`,
                    },
                    {
                        icon: 'simple-icon-note',
                        label: 'menu.input-groups',
                        to: `${adminRoot}/ui/components/input-groups`,
                    },
                    {
                        icon: 'simple-icon-screen-desktop',
                        label: 'menu.jumbotron',
                        to: `${adminRoot}/ui/components/jumbotron`,
                    },
                    {
                        icon: 'simple-icon-map',
                        label: 'menu.maps',
                        to: `${adminRoot}/ui/components/maps`,
                    },
                    {
                        icon: 'simple-icon-docs',
                        label: 'menu.modal',
                        to: `${adminRoot}/ui/components/modal`,
                    },
                    {
                        icon: 'simple-icon-cursor',
                        label: 'menu.navigation',
                        to: `${adminRoot}/ui/components/navigation`,
                    },
                    {
                        icon: 'simple-icon-options',
                        label: 'menu.pagination',
                        to: `${adminRoot}/ui/components/pagination`,
                    },
                    {
                        icon: 'simple-icon-pin',
                        label: 'menu.popover-tooltip',
                        to: `${adminRoot}/ui/components/popover-tooltip`,
                    },
                    {
                        icon: 'simple-icon-shuffle',
                        label: 'menu.sortable',
                        to: `${adminRoot}/ui/components/sortable`,
                    },
                    {
                        icon: 'simple-icon-grid',
                        label: 'menu.tables',
                        to: `${adminRoot}/ui/components/tables`,
                    },
                ],
            },
        ],
    },
];
/* harmony default export */ __webpack_exports__["default"] = (data);


/***/ }),

/***/ "./src/app/containers/layout/application-menu/application-menu.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/containers/layout/application-menu/application-menu.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ApplicationMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationMenuComponent", function() { return ApplicationMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a1) { return { "app-menu": true, "shown": a1 }; };
const _c1 = ["*"];
class ApplicationMenuComponent {
    constructor() {
        this.isOpen = false;
    }
    handleDocumentClick(event) {
        if (this.isOpen) {
            this.toggle();
        }
    }
    toggle() {
        this.isOpen = !this.isOpen;
    }
    menuClick(event) {
        event.stopPropagation();
    }
}
ApplicationMenuComponent.ɵfac = function ApplicationMenuComponent_Factory(t) { return new (t || ApplicationMenuComponent)(); };
ApplicationMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApplicationMenuComponent, selectors: [["app-application-menu"]], hostBindings: function ApplicationMenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationMenuComponent_click_HostBindingHandler($event) { return ctx.handleDocumentClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, ngContentSelectors: _c1, decls: 4, vars: 3, consts: [[3, "ngClass", "click"], ["href", "javascript:;", 1, "app-menu-button", "d-inline-block", "d-xl-none", 3, "click"], [1, "simple-icon-options"]], template: function ApplicationMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationMenuComponent_Template_div_click_0_listener($event) { return ctx.menuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationMenuComponent_Template_a_click_2_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.isOpen));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-application-menu',
                templateUrl: './application-menu.component.html'
            }]
    }], function () { return []; }, { handleDocumentClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/containers/layout/breadcrumb/breadcrumb.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/containers/layout/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_constants_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants/menu */ "./src/app/constants/menu.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");









const _c0 = function (a0) { return [a0]; };
function BreadcrumbComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", i_r2 >= ctx_r0.pathArr.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r0.getUrl(sub_r1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx_r0.getLabel(ctx_r0.getUrl(sub_r1))));
} }
class BreadcrumbComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = '';
        this.menuItems = src_app_constants_menu__WEBPACK_IMPORTED_MODULE_3__["default"];
        this.path = '';
        this.pathArr = [];
        this.getUrl = (sub) => {
            return '/' + this.path.split(sub)[0] + sub;
        };
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.activatedRoute), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((route) => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })).subscribe((event) => {
            this.path = this.router.url.slice(1, this.router.url.split('?')[0].length);
            const paramtersLen = Object.keys(event.snapshot.params).length;
            this.pathArr = this.path.split('/').slice(0, this.path.split('/').length - paramtersLen);
        });
    }
    getLabel(path) {
        if (path === src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].adminRoot) {
            return 'menu.home';
        }
        // step 0
        let foundedMenuItem = this.menuItems.find(x => x.to === path);
        if (!foundedMenuItem) {
            // step 1
            this.menuItems.map(menu => {
                if (!foundedMenuItem && menu.subs) {
                    foundedMenuItem = menu.subs.find(x => x.to === path);
                }
            });
            if (!foundedMenuItem) {
                // step 2
                this.menuItems.map(menu => {
                    if (menu.subs) {
                        menu.subs.map(sub => {
                            if (!foundedMenuItem && sub.subs) {
                                foundedMenuItem = sub.subs.find(x => x.to === path);
                            }
                        });
                    }
                });
                if (!foundedMenuItem) {
                    // step 3
                    this.menuItems.map(menu => {
                        if (menu.subs) {
                            menu.subs.map(sub => {
                                if (sub.subs) {
                                    sub.subs.map(deepSub => {
                                        if (!foundedMenuItem && deepSub.subs) {
                                            foundedMenuItem = deepSub.subs.find(x => x.to === path);
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            }
        }
        if (foundedMenuItem) {
            return foundedMenuItem.label;
        }
        else {
            return '';
        }
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], inputs: { title: "title" }, decls: 6, vars: 4, consts: [["aria-label", "breadcrumb", 1, "breadcrumb-container", "d-none", "d-sm-block", "d-lg-inline-block"], [1, "breadcrumb", "pt-0"], ["class", "breadcrumb-item", 3, "hidden", 4, "ngFor", "ngForOf"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "breadcrumb-item", 3, "hidden"], [3, "routerLink"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_li_2_Template, 4, 7, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pathArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.getLabel("/" + ctx.path)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-breadcrumb',
                templateUrl: './breadcrumb.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/containers/layout/color-switcher/color-switcher.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/containers/layout/color-switcher/color-switcher.component.ts ***!
  \******************************************************************************/
/*! exports provided: ColorSwitcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorSwitcherComponent", function() { return ColorSwitcherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils/util */ "./src/app/utils/util.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ColorSwitcherComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorSwitcherComponent_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const color_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.changeColor("light." + color_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("c-pointer theme-color theme-color-" + color_r4 + (ctx_r0.selectedColor === "light." + color_r4 ? " active" : ""));
} }
function ColorSwitcherComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorSwitcherComponent_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const color_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.changeColor("light." + color_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("c-pointer theme-color theme-color-" + color_r7 + (ctx_r1.selectedColor === "light." + color_r7 ? " active" : ""));
} }
function ColorSwitcherComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorSwitcherComponent_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const color_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.changeColor("dark." + color_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("c-pointer theme-color theme-color-" + color_r10 + (ctx_r2.selectedColor === "dark." + color_r10 ? " active" : ""));
} }
function ColorSwitcherComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorSwitcherComponent_a_13_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const color_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.changeColor("dark." + color_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r13 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("c-pointer theme-color theme-color-" + color_r13 + (ctx_r3.selectedColor === "dark." + color_r13 ? " active" : ""));
} }
class ColorSwitcherComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.colors = [
            'bluenavy',
            'blueyale',
            'blueolympic',
            'greenmoss',
            'greenlime',
            'purplemonster',
            'orangecarrot',
            'redruby',
            'yellowgranola',
            'greysteel',
        ];
        this.selectedColor = Object(src_app_utils_util__WEBPACK_IMPORTED_MODULE_1__["getThemeColor"])();
        this.isOpenSwitcher = false;
        this.toggleClass = 'theme-colors';
        this.radius = Object(src_app_utils_util__WEBPACK_IMPORTED_MODULE_1__["getThemeRadius"])();
        this.changeRadius(this.radius);
    }
    ngOnInit() { }
    changeColor(color) {
        this.selectedColor = color;
        Object(src_app_utils_util__WEBPACK_IMPORTED_MODULE_1__["setThemeColor"])(color);
        setTimeout(() => {
            window.location.reload();
        }, 500);
    }
    toggleSwitcher(event) {
        this.isOpenSwitcher = !this.isOpenSwitcher;
        this.toggleClass = this.isOpenSwitcher
            ? 'theme-colors shown'
            : 'theme-colors hidden';
        event.stopPropagation();
    }
    changeRadius(radius) {
        if (radius === 'flat') {
            this.renderer.removeClass(document.body, 'rounded');
        }
        else {
            this.renderer.addClass(document.body, 'rounded');
        }
        Object(src_app_utils_util__WEBPACK_IMPORTED_MODULE_1__["setThemeRadius"])(radius);
    }
    handleDocumentClick(event) {
        this.isOpenSwitcher = false;
        this.toggleClass = 'theme-colors hidden';
    }
}
ColorSwitcherComponent.ɵfac = function ColorSwitcherComponent_Factory(t) { return new (t || ColorSwitcherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ColorSwitcherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorSwitcherComponent, selectors: [["app-color-switcher"]], hostBindings: function ColorSwitcherComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorSwitcherComponent_click_HostBindingHandler($event) { return ctx.handleDocumentClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 27, vars: 9, consts: [[1, "p-4"], [1, "text-muted", "mb-2"], [1, "d-flex", "flex-row", "justify-content-between", "mb-3"], [3, "class", "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row", "justify-content-between", "mb-4"], [1, "d-flex", "flex-row", "justify-content-between"], [1, "custom-control", "custom-radio", "custom-control-inline"], ["type", "radio", "id", "ltrRadio", "name", "directionRadio", "value", "rounded", 1, "custom-control-input", "direction-radio", 3, "checked", "click"], ["for", "ltrRadio", 1, "custom-control-label"], ["type", "radio", "id", "rtlRadio", "name", "directionRadio", "value", "flat", 1, "custom-control-input", "direction-radio", 3, "checked", "click"], ["for", "rtlRadio", 1, "custom-control-label"], [1, "c-pointer", "theme-button", 3, "click"], [1, "simple-icon-magic-wand"], [3, "click"]], template: function ColorSwitcherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Light Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColorSwitcherComponent_a_5_Template, 1, 3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ColorSwitcherComponent_a_7_Template, 1, 3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Dark Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ColorSwitcherComponent_a_11_Template, 1, 3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ColorSwitcherComponent_a_13_Template, 1, 3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Border Radius");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorSwitcherComponent_Template_input_click_18_listener() { return ctx.changeRadius("rounded"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Rounded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorSwitcherComponent_Template_input_click_22_listener() { return ctx.changeRadius("flat"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Flat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorSwitcherComponent_Template_a_click_25_listener($event) { return ctx.toggleSwitcher($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.toggleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors.slice(0, 5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors.slice(5, 10));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors.slice(0, 5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors.slice(5, 10));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.radius === "rounded" ? true : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.radius === "rounded" ? false : true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorSwitcherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-color-switcher',
                templateUrl: './color-switcher.component.html',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { handleDocumentClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/containers/layout/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/containers/layout/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 18, vars: 0, consts: [[1, "page-footer"], [1, "footer-content"], [1, "container-fluid"], [1, "row"], [1, "col-12", "col-sm-6"], [1, "mb-0", "text-muted"], [1, "col-sm-6", "d-none", "d-sm-block"], [1, "breadcrumb", "pt-0", "pr-0", "float-right"], [1, "breadcrumb-item", "mb-0"], ["href", "javascript:;", 1, "btn-link"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ColoredStrategies 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Purchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Docs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/containers/layout/heading/heading.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/containers/layout/heading/heading.component.ts ***!
  \****************************************************************/
/*! exports provided: HeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingComponent", function() { return HeadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_constants_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants/menu */ "./src/app/constants/menu.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








class HeadingComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = '';
        this.menuItems = src_app_constants_menu__WEBPACK_IMPORTED_MODULE_3__["default"];
        this.path = '';
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.activatedRoute), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((route) => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })).subscribe((event) => {
            this.path = this.router.url.split('?')[0];
        });
    }
    getLabel(path) {
        if (path === src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].adminRoot) {
            return 'menu.home';
        }
        // step 0
        let foundedMenuItem = this.menuItems.find(x => x.to === path);
        if (!foundedMenuItem) {
            // step 1
            this.menuItems.map(menu => {
                if (!foundedMenuItem && menu.subs) {
                    foundedMenuItem = menu.subs.find(x => x.to === path);
                }
            });
            if (!foundedMenuItem) {
                // step 2
                this.menuItems.map(menu => {
                    if (menu.subs) {
                        menu.subs.map(sub => {
                            if (!foundedMenuItem && sub.subs) {
                                foundedMenuItem = sub.subs.find(x => x.to === path);
                            }
                        });
                    }
                });
                if (!foundedMenuItem) {
                    // step 3
                    this.menuItems.map(menu => {
                        if (menu.subs) {
                            menu.subs.map(sub => {
                                if (sub.subs) {
                                    sub.subs.map(deepSub => {
                                        if (!foundedMenuItem && deepSub.subs) {
                                            foundedMenuItem = deepSub.subs.find(x => x.to === path);
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            }
        }
        if (foundedMenuItem) {
            return foundedMenuItem.label;
        }
        else {
            return 'notFoundInMenu';
        }
    }
}
HeadingComponent.ɵfac = function HeadingComponent_Factory(t) { return new (t || HeadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
HeadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeadingComponent, selectors: [["app-heading"]], inputs: { title: "title" }, decls: 3, vars: 3, template: function HeadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.getLabel(ctx.path)));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-heading',
                templateUrl: './heading.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/containers/layout/layout.containers.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/containers/layout/layout.containers.module.ts ***!
  \***************************************************************/
/*! exports provided: LayoutContainersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutContainersModule", function() { return LayoutContainersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/containers/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/containers/layout/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _topnav_topnav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topnav/topnav.component */ "./src/app/containers/layout/topnav/topnav.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _color_switcher_color_switcher_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./color-switcher/color-switcher.component */ "./src/app/containers/layout/color-switcher/color-switcher.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/containers/layout/footer/footer.component.ts");
/* harmony import */ var _heading_heading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./heading/heading.component */ "./src/app/containers/layout/heading/heading.component.ts");
/* harmony import */ var _application_menu_application_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./application-menu/application-menu.component */ "./src/app/containers/layout/application-menu/application-menu.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");



















class LayoutContainersModule {
}
LayoutContainersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutContainersModule });
LayoutContainersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutContainersModule_Factory(t) { return new (t || LayoutContainersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_13__["CollapseModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_15__["TooltipModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutContainersModule, { declarations: [_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_5__["TopnavComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
        _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"],
        _color_switcher_color_switcher_component__WEBPACK_IMPORTED_MODULE_8__["ColorSwitcherComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _heading_heading_component__WEBPACK_IMPORTED_MODULE_10__["HeadingComponent"],
        _application_menu_application_menu_component__WEBPACK_IMPORTED_MODULE_11__["ApplicationMenuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
        ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_13__["CollapseModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__["BsDropdownModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_15__["TooltipModule"]], exports: [_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_5__["TopnavComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
        _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"],
        _color_switcher_color_switcher_component__WEBPACK_IMPORTED_MODULE_8__["ColorSwitcherComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _heading_heading_component__WEBPACK_IMPORTED_MODULE_10__["HeadingComponent"],
        _application_menu_application_menu_component__WEBPACK_IMPORTED_MODULE_11__["ApplicationMenuComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutContainersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _topnav_topnav_component__WEBPACK_IMPORTED_MODULE_5__["TopnavComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
                    _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"],
                    _color_switcher_color_switcher_component__WEBPACK_IMPORTED_MODULE_8__["ColorSwitcherComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                    _heading_heading_component__WEBPACK_IMPORTED_MODULE_10__["HeadingComponent"],
                    _application_menu_application_menu_component__WEBPACK_IMPORTED_MODULE_11__["ApplicationMenuComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                    ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_13__["CollapseModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__["BsDropdownModule"].forRoot(),
                    ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_15__["TooltipModule"].forRoot(),
                ],
                exports: [
                    _topnav_topnav_component__WEBPACK_IMPORTED_MODULE_5__["TopnavComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
                    _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"],
                    _color_switcher_color_switcher_component__WEBPACK_IMPORTED_MODULE_8__["ColorSwitcherComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                    _heading_heading_component__WEBPACK_IMPORTED_MODULE_10__["HeadingComponent"],
                    _application_menu_application_menu_component__WEBPACK_IMPORTED_MODULE_11__["ApplicationMenuComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/containers/layout/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/containers/layout/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_constants_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants/menu */ "./src/app/constants/menu.ts");
/* harmony import */ var _sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.service */ "./src/app/containers/layout/sidebar/sidebar.service.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");











function SidebarComponent_li_4_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r2.to, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, item_r2.label));
} }
function SidebarComponent_li_4_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_li_4_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r7.openSubMenu($event, item_r2); return false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r2.to, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, item_r2.label), "");
} }
function SidebarComponent_li_4_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_li_4_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r11.changeSelectedParentHasNoSubmenu(item_r2.to); return false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r2.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, item_r2.label), "");
} }
const _c0 = function (a0) { return { "active": a0 }; };
function SidebarComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_4_a_1_Template, 4, 5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_li_4_a_2_Template, 4, 5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_li_4_a_3_Template, 4, 5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.selectedParentMenu === item_r2.to && ctx_r0.viewingParentMenu === "" || ctx_r0.viewingParentMenu === item_r2.to));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.newWindow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r2.newWindow && item_r2.subs && item_r2.subs.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r2.newWindow && (!item_r2.subs || item_r2.subs && item_r2.subs.length === 0));
} }
function SidebarComponent_ul_7_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", sub_r17.to, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", sub_r17.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, sub_r17.label));
} }
const _c1 = function (a0) { return [a0]; };
function SidebarComponent_ul_7_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, sub_r17.to));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", sub_r17.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, sub_r17.label));
} }
const _c2 = function (a1) { return { "rotate-arrow-icon opacity-50 c-pointer": true, "collapsed": a1 }; };
function SidebarComponent_ul_7_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_ul_7_li_1_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const sub_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.toggleCollapse(sub_r17.to); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx_r20.closedCollapseList.includes(sub_r17.to)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, sub_r17.label));
} }
function SidebarComponent_ul_7_li_1_div_5_li_2_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const deepSub_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", deepSub_r29.to, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", deepSub_r29.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, deepSub_r29.label));
} }
function SidebarComponent_ul_7_li_1_div_5_li_2_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const deepSub_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, deepSub_r29.to));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", deepSub_r29.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, deepSub_r29.label));
} }
function SidebarComponent_ul_7_li_1_div_5_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_ul_7_li_1_div_5_li_2_a_1_Template, 5, 5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_ul_7_li_1_div_5_li_2_a_2_Template, 5, 7, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const deepSub_r29 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r28.currentUrl === deepSub_r29.to));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", deepSub_r29.newWindow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !deepSub_r29.newWindow && (!deepSub_r29.subs || deepSub_r29.subs.length <= 0));
} }
function SidebarComponent_ul_7_li_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_ul_7_li_1_div_5_li_2_Template, 3, 5, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sub_r17.subs);
} }
const _c3 = function (a0, a1) { return { "active": a0, "has-sub-item": a1 }; };
function SidebarComponent_ul_7_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_ul_7_li_1_a_1_Template, 5, 5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_ul_7_li_1_a_2_Template, 5, 7, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_ul_7_li_1_a_3_Template, 5, 6, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_ul_7_li_1_div_5_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r17 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c3, ctx_r16.currentUrl === sub_r17.to, sub_r17.subs && sub_r17.subs.length > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r17.newWindow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !sub_r17.newWindow && (!sub_r17.subs || sub_r17.subs.length <= 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r17.subs && sub_r17.subs.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", ctx_r16.closedCollapseList.includes(sub_r17.to))("isAnimated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r17.subs && sub_r17.subs.length > 0);
} }
const _c4 = function (a0) { return { "d-block": a0 }; };
function SidebarComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_ul_7_li_1_Template, 6, 10, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c4, ctx_r1.selectedParentMenu === item_r15.to && ctx_r1.viewingParentMenu === "" || ctx_r1.viewingParentMenu === item_r15.to));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-parent", item_r15.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r15.subs);
} }
const _c5 = function () { return { suppressScrollX: true }; };
class SidebarComponent {
    constructor(router, sidebarService, activatedRoute) {
        this.router = router;
        this.sidebarService = sidebarService;
        this.activatedRoute = activatedRoute;
        this.menuItems = src_app_constants_menu__WEBPACK_IMPORTED_MODULE_3__["default"];
        this.selectedParentMenu = '';
        this.viewingParentMenu = '';
        this.closedCollapseList = [];
        this.subscription = this.sidebarService.getSidebar().subscribe(res => {
            this.sidebar = res;
        }, err => {
            console.error(`An error occurred: ${err.message}`);
        });
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.activatedRoute), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((route) => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })).subscribe((event) => {
            const path = this.router.url.split('?')[0];
            const paramtersLen = Object.keys(event.snapshot.params).length;
            const pathArr = path.split('/').slice(0, path.split('/').length - paramtersLen);
            this.currentUrl = pathArr.join('/');
        });
        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])).subscribe((event) => {
            const { containerClassnames } = this.sidebar;
            this.selectMenu();
            this.toggle();
            this.sidebarService.setContainerClassnames(0, containerClassnames, this.sidebar.selectedMenuHasSubItems);
            window.scrollTo(0, 0);
        });
    }
    ngOnInit() {
        setTimeout(() => {
            this.selectMenu();
            const { containerClassnames } = this.sidebar;
            const nextClasses = this.getMenuClassesForResize(containerClassnames);
            this.sidebarService.setContainerClassnames(0, nextClasses.join(' '), this.sidebar.selectedMenuHasSubItems);
            this.isCurrentMenuHasSubItem();
        }, 100);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    selectMenu() {
        this.selectedParentMenu = this.findParentInPath(this.currentUrl) || '';
        this.isCurrentMenuHasSubItem();
    }
    findParentInPath(path) {
        const foundedMenuItem = this.menuItems.find(x => x.to === path);
        if (!foundedMenuItem) {
            if (path.split('/').length > 1) {
                const pathArr = path.split('/');
                return this.findParentInPath(pathArr.slice(0, pathArr.length - 1).join('/'));
            }
            else {
                return undefined;
            }
        }
        else {
            return path;
        }
    }
    isCurrentMenuHasSubItem() {
        const { containerClassnames } = this.sidebar;
        const menuItem = this.menuItems.find(x => x.to === this.selectedParentMenu);
        const isCurrentMenuHasSubItem = menuItem && menuItem.subs && menuItem.subs.length > 0 ? true : false;
        if (isCurrentMenuHasSubItem !== this.sidebar.selectedMenuHasSubItems) {
            if (!isCurrentMenuHasSubItem) {
                this.sidebarService.setContainerClassnames(0, containerClassnames, false);
            }
            else {
                this.sidebarService.setContainerClassnames(0, containerClassnames, true);
            }
        }
        return isCurrentMenuHasSubItem;
    }
    changeSelectedParentHasNoSubmenu(parentMenu) {
        const { containerClassnames } = this.sidebar;
        this.selectedParentMenu = parentMenu;
        this.viewingParentMenu = parentMenu;
        this.sidebarService.changeSelectedMenuHasSubItems(false);
        this.sidebarService.setContainerClassnames(0, containerClassnames, false);
    }
    openSubMenu(event, menuItem) {
        if (event) {
            event.stopPropagation();
        }
        const { containerClassnames, menuClickCount } = this.sidebar;
        const selectedParent = menuItem.to;
        const hasSubMenu = menuItem.subs && menuItem.subs.length > 0;
        this.sidebarService.changeSelectedMenuHasSubItems(hasSubMenu);
        if (!hasSubMenu) {
            this.viewingParentMenu = selectedParent;
            this.selectedParentMenu = selectedParent;
            this.toggle();
        }
        else {
            const currentClasses = containerClassnames ?
                containerClassnames.split(' ').filter(x => x !== '') :
                '';
            if (!currentClasses.includes('menu-mobile')) {
                if (currentClasses.includes('menu-sub-hidden') &&
                    (menuClickCount === 2 || menuClickCount === 0)) {
                    this.sidebarService.setContainerClassnames(3, containerClassnames, hasSubMenu);
                }
                else if (currentClasses.includes('menu-hidden') &&
                    (menuClickCount === 1 || menuClickCount === 3)) {
                    this.sidebarService.setContainerClassnames(2, containerClassnames, hasSubMenu);
                }
                else if (currentClasses.includes('menu-default') &&
                    !currentClasses.includes('menu-sub-hidden') &&
                    (menuClickCount === 1 || menuClickCount === 3)) {
                    this.sidebarService.setContainerClassnames(0, containerClassnames, hasSubMenu);
                }
            }
            else {
                this.sidebarService.addContainerClassname('sub-show-temporary', containerClassnames);
            }
            this.viewingParentMenu = selectedParent;
        }
    }
    toggle() {
        const { containerClassnames, menuClickCount } = this.sidebar;
        const currentClasses = containerClassnames.split(' ').filter(x => x !== '');
        if (currentClasses.includes('menu-sub-hidden') &&
            menuClickCount === 3) {
            this.sidebarService.setContainerClassnames(2, containerClassnames, this.sidebar.selectedMenuHasSubItems);
        }
        else if (currentClasses.includes('menu-hidden') ||
            currentClasses.includes('menu-mobile')) {
            if (!(menuClickCount === 1 && !this.sidebar.selectedMenuHasSubItems)) {
                this.sidebarService.setContainerClassnames(0, containerClassnames, this.sidebar.selectedMenuHasSubItems);
            }
        }
    }
    toggleCollapse(id) {
        if (this.closedCollapseList.includes(id)) {
            this.closedCollapseList = this.closedCollapseList.filter(x => x !== id);
        }
        else {
            this.closedCollapseList.push(id);
        }
    }
    getMenuClassesForResize(classes) {
        let nextClasses = classes.split(' ').filter((x) => x !== '');
        const windowWidth = window.innerWidth;
        if (windowWidth < this.sidebarService.menuHiddenBreakpoint) {
            nextClasses.push('menu-mobile');
        }
        else if (windowWidth < this.sidebarService.subHiddenBreakpoint) {
            nextClasses = nextClasses.filter((x) => x !== 'menu-mobile');
            if (nextClasses.includes('menu-default') &&
                !nextClasses.includes('menu-sub-hidden')) {
                nextClasses.push('menu-sub-hidden');
            }
        }
        else {
            nextClasses = nextClasses.filter((x) => x !== 'menu-mobile');
            if (nextClasses.includes('menu-default') &&
                nextClasses.includes('menu-sub-hidden')) {
                nextClasses = nextClasses.filter((x) => x !== 'menu-sub-hidden');
            }
        }
        return nextClasses;
    }
    handleDocumentClick(event) {
        this.viewingParentMenu = '';
        this.selectMenu();
        this.toggle();
    }
    handleWindowResize(event) {
        if (event && !event.isTrusted) {
            return;
        }
        const { containerClassnames } = this.sidebar;
        const nextClasses = this.getMenuClassesForResize(containerClassnames);
        this.sidebarService.setContainerClassnames(0, nextClasses.join(' '), this.sidebar.selectedMenuHasSubItems);
        this.isCurrentMenuHasSubItem();
    }
    menuClicked(e) {
        e.stopPropagation();
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], hostBindings: function SidebarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_click_HostBindingHandler($event) { return ctx.handleDocumentClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("resize", function SidebarComponent_resize_HostBindingHandler($event) { return ctx.handleWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 8, vars: 6, consts: [[1, "menu", 3, "click"], ["id", "second-element", 1, "main-menu"], [1, "scroll", 3, "config"], [1, "list-unstyled"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "sub-menu"], ["class", "list-unstyled", 3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["rel", "noopener noreferrer", "target", "_blank", 3, "href", 4, "ngIf"], [3, "href", "click", 4, "ngIf"], [3, "routerLink", "click", 4, "ngIf"], ["rel", "noopener noreferrer", "target", "_blank", 3, "href"], [3, "href", "click"], [3, "routerLink", "click"], [1, "list-unstyled", 3, "ngClass"], ["routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], [3, "ngClass", "click", 4, "ngIf"], [3, "collapse", "isAnimated"], [4, "ngIf"], [1, "d-inline-block"], ["routerLinkActive", "active", 3, "routerLink"], [3, "ngClass", "click"], [1, "simple-icon-arrow-down"], [1, "list-unstyled", "inner-level-menu"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_0_listener($event) { return ctx.menuClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "perfect-scrollbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_li_4_Template, 4, 6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "perfect-scrollbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidebarComponent_ul_7_Template, 2, 5, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__["CollapseDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { handleDocumentClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }], handleWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/containers/layout/sidebar/sidebar.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/containers/layout/sidebar/sidebar.service.ts ***!
  \**************************************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




class SidebarService {
    constructor() {
        this.initialSidebar = { containerClassnames: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].defaultMenuType, menuClickCount: 0, selectedMenuHasSubItems: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].defaultMenuType === 'menu-default' };
        this.sidebar = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.initialSidebar);
        this.subHiddenBreakpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].subHiddenBreakpoint;
        this.menuHiddenBreakpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].menuHiddenBreakpoint;
        this.clickOnMobileMenu = (strCurrentClasses) => {
            const before = this.sidebar.getValue();
            const currentClasses = strCurrentClasses ? strCurrentClasses.split(' ').filter(x => x !== '' && x !== 'sub-show-temporary') : [];
            let nextClasses = '';
            if (currentClasses.includes('main-show-temporary')) {
                nextClasses = (currentClasses.filter(x => x !== 'main-show-temporary')).join(' ');
            }
            else {
                nextClasses = currentClasses.join(' ') + ' main-show-temporary';
            }
            this.sidebar.next({ containerClassnames: nextClasses, menuClickCount: 0, selectedMenuHasSubItems: before.selectedMenuHasSubItems });
        };
    }
    getSidebar() {
        return this.sidebar.asObservable();
    }
    changeVal(str) {
        const before = this.sidebar.getValue();
        this.sidebar.next({ containerClassnames: str, menuClickCount: before.menuClickCount, selectedMenuHasSubItems: before.selectedMenuHasSubItems });
    }
    setContainerClassnames(clickIndex, strCurrentClasses, selectedMenuHasSubItems) {
        const currentClasses = strCurrentClasses ? strCurrentClasses.split(' ').filter(x => x !== '') : '';
        let nextClasses = '';
        if (!selectedMenuHasSubItems) {
            if (currentClasses.includes('menu-default') && (clickIndex % 4 === 0 || clickIndex % 4 === 3)) {
                clickIndex = 1;
            }
            if (currentClasses.includes('menu-sub-hidden') && (clickIndex % 4 === 2)) {
                clickIndex = 0;
            }
            if (currentClasses.includes('menu-hidden') && (clickIndex % 4 === 2 || clickIndex % 4 === 3)) {
                clickIndex = 0;
            }
        }
        if (clickIndex % 4 === 0) {
            if (currentClasses.includes('menu-default') && currentClasses.includes('menu-sub-hidden')) {
                nextClasses = 'menu-default menu-sub-hidden';
            }
            else if (currentClasses.includes('menu-default')) {
                nextClasses = 'menu-default';
            }
            else if (currentClasses.includes('menu-sub-hidden')) {
                nextClasses = 'menu-sub-hidden';
            }
            else if (currentClasses.includes('menu-hidden')) {
                nextClasses = 'menu-hidden';
            }
            clickIndex = 0;
        }
        else if (clickIndex % 4 === 1) {
            if (currentClasses.includes('menu-default') && currentClasses.includes('menu-sub-hidden')) {
                nextClasses = 'menu-default menu-sub-hidden main-hidden sub-hidden';
            }
            else if (currentClasses.includes('menu-default')) {
                nextClasses = 'menu-default sub-hidden';
            }
            else if (currentClasses.includes('menu-sub-hidden')) {
                nextClasses = 'menu-sub-hidden main-hidden sub-hidden';
            }
            else if (currentClasses.includes('menu-hidden')) {
                nextClasses = 'menu-hidden main-show-temporary';
            }
        }
        else if (clickIndex % 4 === 2) {
            if (currentClasses.includes('menu-default') && currentClasses.includes('menu-sub-hidden')) {
                nextClasses = 'menu-default menu-sub-hidden sub-hidden';
            }
            else if (currentClasses.includes('menu-default')) {
                nextClasses = 'menu-default main-hidden sub-hidden';
            }
            else if (currentClasses.includes('menu-sub-hidden')) {
                nextClasses = 'menu-sub-hidden sub-hidden';
            }
            else if (currentClasses.includes('menu-hidden')) {
                nextClasses = 'menu-hidden main-show-temporary sub-show-temporary';
            }
        }
        else if (clickIndex % 4 === 3) {
            if (currentClasses.includes('menu-default') && currentClasses.includes('menu-sub-hidden')) {
                nextClasses = 'menu-default menu-sub-hidden sub-show-temporary';
            }
            else if (currentClasses.includes('menu-default')) {
                nextClasses = 'menu-default sub-hidden';
            }
            else if (currentClasses.includes('menu-sub-hidden')) {
                nextClasses = 'menu-sub-hidden sub-show-temporary';
            }
            else if (currentClasses.includes('menu-hidden')) {
                nextClasses = 'menu-hidden main-show-temporary';
            }
        }
        if (currentClasses.includes('menu-mobile')) {
            nextClasses += ' menu-mobile';
        }
        this.sidebar.next({ containerClassnames: nextClasses, menuClickCount: clickIndex, selectedMenuHasSubItems });
    }
    addContainerClassname(classname, strCurrentClasses) {
        const newClasses = !(strCurrentClasses.indexOf(classname) > -1) ? strCurrentClasses + ' ' + classname : strCurrentClasses;
        const before = this.sidebar.getValue();
        this.sidebar.next({ containerClassnames: newClasses, menuClickCount: before.menuClickCount, selectedMenuHasSubItems: before.selectedMenuHasSubItems });
    }
    changeDefaultClassnames(strCurrentClasses) {
        const before = this.sidebar.getValue();
        this.sidebar.next({ containerClassnames: strCurrentClasses, menuClickCount: before.menuClickCount, selectedMenuHasSubItems: before.selectedMenuHasSubItems });
    }
    changeSelectedMenuHasSubItems(hasSubMenu = true) {
        const before = this.sidebar.getValue();
        this.sidebar.next({ containerClassnames: before.containerClassnames, menuClickCount: before.menuClickCount, selectedMenuHasSubItems: hasSubMenu });
    }
}
SidebarService.ɵfac = function SidebarService_Factory(t) { return new (t || SidebarService)(); };
SidebarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SidebarService, factory: SidebarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/containers/layout/topnav/topnav.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/containers/layout/topnav/topnav.component.ts ***!
  \**************************************************************/
/*! exports provided: TopnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopnavComponent", function() { return TopnavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_utils_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/util */ "./src/app/utils/util.js");
/* harmony import */ var _sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sidebar/sidebar.service */ "./src/app/containers/layout/sidebar/sidebar.service.ts");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_lang_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/lang.service */ "./src/app/shared/lang.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");













function TopnavComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Components");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Profits");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Surveys");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TopnavComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "perfect-scrollbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Joisse Kaycee just sent a new comment! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "09.04.2018 - 12:45");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " 1 item is out of stock! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "09.04.2018 - 12:45");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " New order received! It is total $147,20. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "09.04.2018 - 12:45");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " 3 items just added to wish list by a user! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "09.04.2018 - 12:45");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TopnavComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Features");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "History");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "li", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopnavComponent_div_52_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onSignOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Sign out");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class TopnavComponent {
    constructor(sidebarService, authService, router, langService) {
        this.sidebarService = sidebarService;
        this.authService = authService;
        this.router = router;
        this.langService = langService;
        //buyUrl = environment.buyUrl;
        this.adminRoot = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].adminRoot;
        this.displayName = 'John Doe';
        this.isFullScreen = false;
        this.isDarkModeActive = false;
        this.searchKey = '';
        this.menuButtonClick = (e, menuClickCount, containerClassnames) => {
            if (e) {
                e.stopPropagation();
            }
            setTimeout(() => {
                const event = document.createEvent('HTMLEvents');
                event.initEvent('resize', false, false);
                window.dispatchEvent(event);
            }, 350);
            this.sidebarService.setContainerClassnames(++menuClickCount, containerClassnames, this.sidebar.selectedMenuHasSubItems);
        };
        this.mobileMenuButtonClick = (event, containerClassnames) => {
            if (event) {
                event.stopPropagation();
            }
            this.sidebarService.clickOnMobileMenu(containerClassnames);
        };
        //this.languages = this.langService.supportedLanguages;
        //this.currentLanguage = this.langService.languageShorthand;
        this.isSingleLang = this.langService.isSingleLang;
        this.isDarkModeActive = Object(src_app_utils_util__WEBPACK_IMPORTED_MODULE_3__["getThemeColor"])().indexOf('dark') > -1 ? true : false;
    }
    onDarkModeChange(event) {
        let color = Object(src_app_utils_util__WEBPACK_IMPORTED_MODULE_3__["getThemeColor"])();
        if (color.indexOf('dark') > -1) {
            color = color.replace('dark', 'light');
        }
        else if (color.indexOf('light') > -1) {
            color = color.replace('light', 'dark');
        }
        Object(src_app_utils_util__WEBPACK_IMPORTED_MODULE_3__["setThemeColor"])(color);
        setTimeout(() => {
            window.location.reload();
        }, 200);
    }
    fullScreenClick() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
        else {
            document.documentElement.requestFullscreen();
        }
    }
    handleFullscreen(event) {
        if (document.fullscreenElement) {
            this.isFullScreen = true;
        }
        else {
            this.isFullScreen = false;
        }
    }
    onLanguageChange(lang) {
        this.langService.language = lang.code;
        //this.currentLanguage = this.langService.languageShorthand;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /*
            if (await this.authService.getUser()) {
              this.displayName = await this.authService.getUser().then((user) => {
                return user.displayName;
              });
            }
            */
            this.subscription = this.sidebarService.getSidebar().subscribe((res) => {
                this.sidebar = res;
            }, (err) => {
                console.error(`An error occurred: ${err.message}`);
            });
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onSignOut() {
        this.router.navigate(['/']);
        localStorage.removeItem('usr_token');
    }
    searchKeyUp(event) {
        if (event.key === 'Enter') {
            this.search();
        }
        else if (event.key === 'Escape') {
            const input = document.querySelector('.mobile-view');
            if (input && input.classList) {
                input.classList.remove('mobile-view');
            }
            this.searchKey = '';
        }
    }
    searchAreaClick(event) {
        event.stopPropagation();
    }
    searchClick(event) {
        if (window.innerWidth < src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].menuHiddenBreakpoint) {
            let elem = event.target;
            if (!event.target.classList.contains('search')) {
                if (event.target.parentElement.classList.contains('search')) {
                    elem = event.target.parentElement;
                }
                else if (event.target.parentElement.parentElement.classList.contains('search')) {
                    elem = event.target.parentElement.parentElement;
                }
            }
            if (elem.classList.contains('mobile-view')) {
                this.search();
                elem.classList.remove('mobile-view');
            }
            else {
                elem.classList.add('mobile-view');
            }
        }
        else {
            this.search();
        }
        event.stopPropagation();
    }
    search() {
        if (this.searchKey && this.searchKey.length > 1) {
            this.router.navigate([this.adminRoot + '/pages/miscellaneous/search'], {
                queryParams: { key: this.searchKey.toLowerCase().trim() },
            });
            this.searchKey = '';
        }
    }
    handleDocumentClick(event) {
        const input = document.querySelector('.mobile-view');
        if (input && input.classList) {
            input.classList.remove('mobile-view');
        }
        this.searchKey = '';
    }
}
TopnavComponent.ɵfac = function TopnavComponent_Factory(t) { return new (t || TopnavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_lang_service__WEBPACK_IMPORTED_MODULE_7__["LangService"])); };
TopnavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TopnavComponent, selectors: [["app-topnav"]], hostBindings: function TopnavComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("fullscreenchange", function TopnavComponent_fullscreenchange_HostBindingHandler($event) { return ctx.handleFullscreen($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"])("click", function TopnavComponent_click_HostBindingHandler($event) { return ctx.handleDocumentClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, decls: 53, vars: 5, consts: [[1, "navbar", "fixed-top"], [1, "d-flex", "align-items-center", "navbar-left"], ["href", "javascript:;", "id", "third-element", 1, "menu-button", "d-none", "d-md-block", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 9 17", 1, "main"], ["x", "0.48", "y", "0.5", "width", "7", "height", "1"], ["x", "0.48", "y", "7.5", "width", "7", "height", "1"], ["x", "0.48", "y", "15.5", "width", "7", "height", "1"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 18 17", 1, "sub"], ["x", "1.56", "y", "0.5", "width", "16", "height", "1"], ["x", "1.56", "y", "7.5", "width", "16", "height", "1"], ["x", "1.56", "y", "15.5", "width", "16", "height", "1"], ["href", "javascript:;", 1, "menu-button-mobile", "d-xs-block", "d-sm-block", "d-md-none", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 26 17"], ["x", "0.5", "y", "0.5", "width", "25", "height", "1"], ["x", "0.5", "y", "7.5", "width", "25", "height", "1"], ["x", "0.5", "y", "15.5", "width", "25", "height", "1"], [1, "search", 3, "click"], ["placeholder", "Search...", 3, "ngModel", "ngModelChange", "keyup"], [1, "search-icon", 3, "click"], [1, "simple-icon-magnifier"], [1, "navbar-logo", 3, "routerLink"], [1, "logo", "d-none", "d-xs-block"], [1, "logo-mobile", "d-block", "d-xs-none"], [1, "navbar-right"], [1, "header-icons", "d-inline-block", "align-middle"], [1, "d-none", "d-md-inline-block", "align-text-bottom", "mr-1"], ["tooltip", "Dark Mode", "placement", "left", 1, "custom-control", "custom-switch"], ["type", "checkbox", "id", "darkModeSwitch", 1, "custom-control-input", 3, "checked", "change"], ["for", "darkModeSwitch", 1, "custom-control-label"], ["routerLinkActive", "active", 1, "position-relative", "d-inline-block"], ["dropdown", ""], ["dropdownToggle", "", "type", "submit", "routerLink", "/app/dashboards/scan", 1, "btn", "btn-primary"], [1, "iconsminds-qr-code"], ["id", "fifth-element", 1, "position-relative", "d-none", "d-sm-inline-block"], ["dropdownToggle", "", "type", "button", 1, "header-icon", "btn", "btn-empty"], [1, "simple-icon-grid"], ["class", "dropdown-menu dropdown-menu-right mt-3", "role", "menu", "aria-labelledby", "button-basic", "id", "iconMenuDropdown", 4, "dropdownMenu"], [1, "position-relative", "d-inline-block"], ["id", "button-basic", "dropdownToggle", "", "type", "button", "id", "notificationButton", 1, "header-icon", "btn", "btn-empty"], [1, "simple-icon-bell"], [1, "count"], ["id", "dropdown-basic", "class", "dropdown-menu dropdown-menu-right mt-3", "id", "notificationDropdown", 4, "dropdownMenu"], ["dropdown", "", "id", "fourth-element", 1, "user", "d-inline-block"], ["type", "button", "dropdownToggle", "", 1, "btn", "btn-empty", "p-0"], [1, "name"], ["alt", "Profile Picture", "src", "/assets/img/profiles/l-1.jpg"], ["class", "dropdown-menu dropdown-menu-right mt-3", "role", "menu", 4, "dropdownMenu"], ["role", "menu", "aria-labelledby", "button-basic", "id", "iconMenuDropdown", 1, "dropdown-menu", "dropdown-menu-right", "mt-3"], ["href", "javascript:;", 1, "icon-menu-item"], [1, "iconsminds-equalizer", "d-block"], [1, "iconsminds-male-female", "d-block"], [1, "iconsminds-puzzle", "d-block"], [1, "iconsminds-bar-chart-4", "d-block"], [1, "iconsminds-file", "d-block"], [1, "iconsminds-suitcase", "d-block"], ["id", "dropdown-basic", "id", "notificationDropdown", 1, "dropdown-menu", "dropdown-menu-right", "mt-3"], [1, "d-flex", "flex-row", "mb-3", "pb-3", "border-bottom"], ["href", "javascript:;"], ["src", "/assets/img/profiles/l-2.jpg", "alt", "Notification Image", 1, "img-thumbnail", "list-thumbnail", "xsmall", "border-0", "rounded-circle"], [1, "pl-3"], [1, "font-weight-medium", "mb-1"], [1, "text-muted", "mb-0", "text-small"], ["src", "/assets/img/notifications/thumb-1.jpg", "alt", "Notification Image", 1, "img-thumbnail", "list-thumbnail", "xsmall", "border-0", "rounded-circle"], ["src", "/assets/img/notifications/thumb-2.jpg", "alt", "Notification Image", 1, "img-thumbnail", "list-thumbnail", "xsmall", "border-0", "rounded-circle"], [1, "d-flex", "flex-row", "mb-3", "pb-3"], ["src", "/assets/img/notifications/thumb-3.jpg", "alt", "Notification Image", 1, "img-thumbnail", "list-thumbnail", "xsmall", "border-0", "rounded-circle"], ["role", "menu", 1, "dropdown-menu", "dropdown-menu-right", "mt-3"], [1, "dropdown-item", "c-pointer"], [1, "divider", "dropdown-divider"], [1, "dropdown-item", "c-pointer", 3, "click"]], template: function TopnavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopnavComponent_Template_a_click_2_listener($event) { ctx.menuButtonClick($event, ctx.sidebar.menuClickCount, ctx.sidebar.containerClassnames); return false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "rect", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "rect", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "rect", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "rect", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "rect", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "rect", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopnavComponent_Template_a_click_12_listener($event) { return ctx.mobileMenuButtonClick($event, ctx.sidebar.containerClassnames); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "rect", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "rect", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "rect", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopnavComponent_Template_div_click_17_listener($event) { return ctx.searchAreaClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TopnavComponent_Template_input_ngModelChange_18_listener($event) { return ctx.searchKey = $event; })("keyup", function TopnavComponent_Template_input_keyup_18_listener($event) { return ctx.searchKeyUp($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopnavComponent_Template_span_click_19_listener($event) { return ctx.searchClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TopnavComponent_Template_input_change_28_listener($event) { return ctx.onDarkModeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, TopnavComponent_div_38_Template, 25, 0, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, TopnavComponent_div_45_Template, 38, 0, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, TopnavComponent_div_52_Template, 12, 0, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", " ", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.adminRoot);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.isDarkModeActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.displayName);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__["TooltipDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownToggleDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownMenuDirective"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TopnavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-topnav',
                templateUrl: './topnav.component.html',
            }]
    }], function () { return [{ type: _sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"] }, { type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_shared_lang_service__WEBPACK_IMPORTED_MODULE_7__["LangService"] }]; }, { handleFullscreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['document:fullscreenchange', ['$event']]
        }], handleDocumentClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/guard/user-auth.guard.ts":
/*!******************************************!*\
  !*** ./src/app/guard/user-auth.guard.ts ***!
  \******************************************/
/*! exports provided: UserAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthGuard", function() { return UserAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class UserAuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (localStorage.getItem('usr_token')) {
            return true;
        }
        else {
            this.router.navigateByUrl('/user');
        }
    }
}
UserAuthGuard.ɵfac = function UserAuthGuard_Factory(t) { return new (t || UserAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
UserAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserAuthGuard, factory: UserAuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserAuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/item/item.component.ts":
/*!****************************************!*\
  !*** ./src/app/item/item.component.ts ***!
  \****************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/__ivy_ngcc__/fesm2015/angular2-notifications.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _services_application_setting_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/application-setting/item.service */ "./src/app/services/application-setting/item.service.ts");
/* harmony import */ var _containers_layout_heading_heading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/layout/heading/heading.component */ "./src/app/containers/layout/heading/heading.component.ts");
/* harmony import */ var _containers_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/layout/breadcrumb/breadcrumb.component */ "./src/app/containers/layout/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");












const _c0 = ["form"];
const _c1 = ["myTable"];
function ItemComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Address_Id is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Item Name is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Quantity is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Address_Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r22 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r22.address_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r22.itemname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r22.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r22.quantity, " ");
} }
function ItemComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemComponent_ng_template_59_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const row_r24 = ctx.row; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.toggleExpandRow(row_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expanded_r25 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("datatable-icon-right", !expanded_r25)("datatable-icon-down", expanded_r25);
} }
function ItemComponent_ng_template_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r28 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r28.address_id);
} }
function ItemComponent_ng_template_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r30 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r30.itemname);
} }
function ItemComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r32 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r32.description);
} }
function ItemComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r34 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r34.quantity);
} }
function ItemComponent_ngx_datatable_footer_68_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pagination", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function ItemComponent_ngx_datatable_footer_68_ng_template_1_Template_pagination_pageChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r43.table.onFooterPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowCount_r37 = ctx.rowCount;
    const pageSize_r38 = ctx.pageSize;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](70);
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalItems", rowCount_r37)("itemsPerPage", pageSize_r38)("maxSize", 5)("customNextTemplate", _r17)("customPreviousTemplate", _r19);
} }
function ItemComponent_ngx_datatable_footer_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemComponent_ngx_datatable_footer_68_ng_template_1_Template, 2, 5, "ng-template", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemComponent_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 47);
} }
function ItemComponent_ng_template_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 48);
} }
class ItemComponent {
    constructor(item, notifications) {
        this.item = item;
        this.notifications = notifications;
        this.productItems = [];
        this.expanded = {};
        this.itemsPerPage = 5;
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["ColumnMode"];
        this.columns = [
            { prop: 'address_id', name: 'Address Id' },
            { prop: 'itemname', name: 'Item Name' },
            { prop: 'description', name: 'Description' },
            { prop: 'quantity', name: 'Quantity' },
        ];
    }
    ngOnInit() {
    }
    onSubmit() {
        console.log(this.form.value);
        this.form.value.username = localStorage.getItem('usr_name');
        if (this.form.valid) {
            console.log('item details saved');
            this.item.postData(this.form.value).subscribe((data) => {
                this.form.resetForm();
                this.notifications.create('Success', 'Record was saved successfully.', angular2_notifications__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].Success, {
                    theClass: 'outline success',
                    timeOut: 6000,
                    showProgressBar: false,
                });
                // this.getAssetData()
            });
        }
        else {
            this.notifications.create('Error', 'Form is not valid', angular2_notifications__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].Error, {
                theClass: 'outline danger',
                timeOut: 6000,
                showProgressBar: false,
            });
        }
    }
    onPage(event) { }
    toggleExpandRow(row) {
        this.table.rowDetail.toggleExpandRow(row);
    }
    onDetailToggle(event) { }
    updateFilter(event) {
        const val = event.target.value.toLowerCase().trim();
        const count = this.columns.length;
        const keys = Object.keys(this.temp[0]);
        const temp = this.temp.filter((item) => {
            for (let i = 0; i < count; i++) {
                if ((item[keys[i]] &&
                    item[keys[i]].toString().toLowerCase().indexOf(val) !== -1) ||
                    !val) {
                    return true;
                }
            }
        });
        this.rows = temp;
        this.table.offset = 0;
    }
}
ItemComponent.ɵfac = function ItemComponent_Factory(t) { return new (t || ItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_setting_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular2_notifications__WEBPACK_IMPORTED_MODULE_1__["NotificationsService"])); };
ItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemComponent, selectors: [["app-item"]], viewQuery: function ItemComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 74, vars: 28, consts: [[1, "row"], [1, "col-12"], [1, "separator", "mb-5"], [1, "card", "mb-4"], [1, "card-body"], [1, "mb-4"], ["novalidate", "", 1, "tooltip-label-right", 3, "ngSubmit"], ["form", "ngForm"], [1, "col-12", "col-lg-6"], [1, "form-group", "error-l-50"], ["type", "text", "name", "address_id", "ngModel", "", "required", "", 1, "form-control"], ["address_id", "ngModel"], ["class", "invalid-tooltip", 4, "ngIf"], ["type", "text", "name", "itemname", "ngModel", "", "required", "", 1, "form-control"], ["itemname", "ngModel"], ["type", "text", "name", "description", "ngModel", "", "required", "", 1, "form-control"], ["description", "ngModel"], ["type", "text", "name", "quantity", "ngModel", "", "required", "", 1, "form-control"], ["quantity", "ngModel"], [1, "col-12", "mt-2"], ["type", "reset", 1, "btn", "btn-light", "mr-2"], ["type", "submit", 1, "btn", "btn-primary"], [1, "card", "mb-4", "mb-4", "data-table-rows", "data-table-responsive"], [1, "col-12", "mb-4", "data-table-rows", "data-table-responsive"], [1, "expandable", 3, "columnMode", "rowHeight", "rows", "footerHeight", "limit", "headerHeight", "page"], ["myTable", ""], ["cellClass", "datatable-row-detail", 3, "rowHeight", "toggle"], ["ngx-datatable-row-detail-template", ""], ["headerClass", "expand-row-button", 1, "expand-row-button", 3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "Address_Id", 3, "flexGrow", "minWidth"], ["name", "Item Name", 3, "flexGrow", "minWidth"], ["name", "Description", 3, "flexGrow", "minWidth"], ["name", "Quantity", 3, "flexGrow", "minWidth"], [4, "ngIf"], ["nextTemplate", ""], ["prevTemplate", ""], [1, "invalid-tooltip"], [1, "detail-content"], [1, "d-flex", "flex-row"], [1, "text-muted", "mr-3"], ["title", "Expand/Collapse Row", 1, "d-block", "d-xl-none", "c-pointer", 3, "click"], [1, "glyph-icon", "simple-icon-arrow-down"], [1, "d-none", "d-xl-block"], ["ngx-datatable-footer-template", ""], [1, "w-100", "d-flex", "justify-content-center"], [3, "totalItems", "itemsPerPage", "maxSize", "customNextTemplate", "customPreviousTemplate", "pageChanged"], [1, "simple-icon-arrow-right"], [1, "simple-icon-arrow-left"]], template: function ItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Item Creation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ItemComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Address_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ItemComponent_div_20_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Item Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ItemComponent_div_27_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ItemComponent_div_34_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ItemComponent_div_41_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ngx-datatable", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ItemComponent_Template_ngx_datatable_page_54_listener($event) { return ctx.onPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ngx-datatable-row-detail", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggle", function ItemComponent_Template_ngx_datatable_row_detail_toggle_56_listener($event) { return ctx.onDetailToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ItemComponent_ng_template_57_Template, 26, 4, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ngx-datatable-column", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ItemComponent_ng_template_59_Template, 2, 4, "ng-template", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ngx-datatable-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ItemComponent_ng_template_61_Template, 2, 1, "ng-template", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "ngx-datatable-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ItemComponent_ng_template_63_Template, 2, 1, "ng-template", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ngx-datatable-column", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, ItemComponent_ng_template_65_Template, 2, 1, "ng-template", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ngx-datatable-column", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, ItemComponent_ng_template_67_Template, 2, 1, "ng-template", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ItemComponent_ngx_datatable_footer_68_Template, 2, 0, "ngx-datatable-footer", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ItemComponent_ng_template_69_Template, 1, 0, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ItemComponent_ng_template_71_Template, 1, 0, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "simple-notifications");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r1.valid && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r3.valid && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r5.valid && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r7.valid && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 26, "forms.submit"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnMode", ctx.ColumnMode.force)("rowHeight", 50)("rows", ctx.rows)("footerHeight", 100)("limit", ctx.itemsPerPage)("headerHeight", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowHeight", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 10)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flexGrow", 1.2)("minWidth", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flexGrow", 1.2)("minWidth", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flexGrow", 1.2)("minWidth", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flexGrow", 1.2)("minWidth", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
    } }, directives: [_containers_layout_heading_heading_component__WEBPACK_IMPORTED_MODULE_4__["HeadingComponent"], _containers_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DataTableColumnCellDirective"], angular2_notifications__WEBPACK_IMPORTED_MODULE_1__["SimpleNotificationsComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableFooterDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DataTableFooterTemplateDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0vaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-item',
                templateUrl: './item.component.html',
                styleUrls: ['./item.component.scss']
            }]
    }], function () { return [{ type: _services_application_setting_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] }, { type: angular2_notifications__WEBPACK_IMPORTED_MODULE_1__["NotificationsService"] }]; }, { form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['form']
        }], table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myTable']
        }] }); })();


/***/ }),

/***/ "./src/app/scanner/scan/app-ui.module.ts":
/*!***********************************************!*\
  !*** ./src/app/scanner/scan/app-ui.module.ts ***!
  \***********************************************/
/*! exports provided: AppUiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUiModule", function() { return AppUiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @zxing/ngx-scanner */ "./node_modules/@zxing/ngx-scanner/__ivy_ngcc__/fesm2015/zxing-ngx-scanner.js");












const UI_MODULES = [
    // Angular
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
    // Material
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
    // Local
    _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_10__["ZXingScannerModule"],
];
class AppUiModule {
}
AppUiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppUiModule });
AppUiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppUiModule_Factory(t) { return new (t || AppUiModule)(); }, imports: [
        // Angular
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        // Material
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        // Local
        _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_10__["ZXingScannerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppUiModule, { exports: [
        // Angular
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        // Material
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        // Local
        _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_10__["ZXingScannerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppUiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{ exports: UI_MODULES }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/scanner/scan/scan.component.ts":
/*!************************************************!*\
  !*** ./src/app/scanner/scan/scan.component.ts ***!
  \************************************************/
/*! exports provided: ZXingScannerComponent, ZXingScannerModule, ScanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanComponent", function() { return ScanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zxing/library */ "./node_modules/@zxing/library/esm5/index.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @zxing/ngx-scanner */ "./node_modules/@zxing/ngx-scanner/__ivy_ngcc__/fesm2015/zxing-ngx-scanner.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZXingScannerComponent", function() { return _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_10__["ZXingScannerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZXingScannerModule", function() { return _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_10__["ZXingScannerModule"]; });















function ScanComponent_mat_list_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScanComponent_mat_list_option_4_Template_mat_list_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.toggleTorch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enable Torch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r1.torchEnabled);
} }
function ScanComponent_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", device_r7.deviceId)("selected", ctx_r2.currentDevice && device_r7.deviceId === ctx_r2.currentDevice.deviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](device_r7.label);
} }
function ScanComponent_ng_container_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Couldn't check for devices.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ScanComponent_ng_container_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No camera was found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }

class ScanComponent {
    constructor(_dialog) {
        this._dialog = _dialog;
        // @ViewChild('form') form: NgForm;
        this.columns = [
            { prop: 'name', name: 'Name' },
            { prop: 'Email', name: 'Email' },
            { prop: 'phone_number', name: 'Phone Number' },
            { prop: 'Adress', name: 'Address' },
        ];
        this.currentDevice = null;
        this.formatsEnabled = [
            _zxing_library__WEBPACK_IMPORTED_MODULE_1__["BarcodeFormat"].CODE_128,
            _zxing_library__WEBPACK_IMPORTED_MODULE_1__["BarcodeFormat"].DATA_MATRIX,
            _zxing_library__WEBPACK_IMPORTED_MODULE_1__["BarcodeFormat"].EAN_13,
            _zxing_library__WEBPACK_IMPORTED_MODULE_1__["BarcodeFormat"].QR_CODE,
        ];
        this.arr = [];
        this.a = [];
        this.b = [];
        this.c = [];
        this.d = [];
        this.result = [];
        this.res = " ";
        this.torchEnabled = false;
        this.torchAvailable$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    clearResult() {
        this.form.reset();
    }
    onCamerasFound(devices) {
        this.availableDevices = devices;
        this.hasDevices = Boolean(devices && devices.length);
    }
    onCodeResult(resultString) {
        console.log('Result: ', resultString);
        this.qrResultString = resultString;
        if (this.qrResultString.charAt(5) == ':') {
            this.arr = this.qrResultString.trim().split(":");
            this.a = this.arr[3].split(";");
            this.b = this.arr[6].split(";;");
            this.c = this.arr[4].split("TEL");
            this.d = this.arr[5].split("ADR");
            this.result[0] = this.a[0].split("EMAIL");
            this.result[1] = this.c[0];
            this.result[2] = this.d[0];
            this.result[3] = this.b[1].split("END");
        }
        else {
            this.arr = this.qrResultString.trim().split(" ");
            this.result[0] = this.arr[0] + " " + this.arr[1];
            this.result[1] = this.arr[2];
            this.result[2] = this.arr[3];
            for (let i = 4; i < this.arr.length; i++)
                this.res += this.arr[i] + " ";
            this.result[3] = this.res;
        }
        // this.result[4]=this.b[1].split("");
        // if (this.arr.indexOf(this.qrResultString)==-1){
        //  this.arr.push(this.qrResultString);}
    }
    onDeviceSelectChange(selected) {
        const device = this.availableDevices.find(x => x.deviceId === selected);
        this.currentDevice = device || null;
    }
    onHasPermission(has) {
        this.hasPermission = has;
    }
    onTorchCompatible(isCompatible) {
        this.torchAvailable$.next(isCompatible || false);
    }
    toggleTorch() {
        this.torchEnabled = !this.torchEnabled;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''), phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''), Adress: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
}
ScanComponent.ɵfac = function ScanComponent_Factory(t) { return new (t || ScanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
ScanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScanComponent, selectors: [["app-scan"]], decls: 54, vars: 15, consts: [[1, "scanner-shell", 3, "hidden"], ["appMenu", "matMenu"], ["checkboxPosition", "start", 3, "selected", "click", 4, "ngIf"], ["appearance", "fill"], ["matNativeControl", "", "matInput", "", 3, "change"], ["value", "", 3, "selected"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "torch", "device", "deviceChange", "scanSuccess", "permissionResponse", "camerasFound", "torchCompatible"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-12", "col-lg-6"], [1, "form-group", "error-l-50"], ["type", "text", "formControlName", "name", 3, "value"], ["type", "text", "formControlName", "Email", 3, "value"], ["type", "text", "formControlName", "phone_number", 3, "value"], ["type", "text", "formControlName", "Adress", 3, "value"], ["type", "reset", 1, "btn", "btn-primary"], [4, "ngIf"], ["checkboxPosition", "start", 3, "selected", "click"], [3, "value", "selected"]], template: function ScanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-menu", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-selection-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ScanComponent_mat_list_option_4_Template, 2, 1, "mat-list-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ScanComponent_Template_select_change_8_listener($event) { return ctx.onDeviceSelectChange($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "No Device Selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ScanComponent_option_11_Template, 2, 3, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "zxing-scanner", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deviceChange", function ScanComponent_Template_zxing_scanner_deviceChange_12_listener($event) { return ctx.currentDevice = $event; })("scanSuccess", function ScanComponent_Template_zxing_scanner_scanSuccess_12_listener($event) { return ctx.onCodeResult($event); })("permissionResponse", function ScanComponent_Template_zxing_scanner_permissionResponse_12_listener($event) { return ctx.onHasPermission($event); })("camerasFound", function ScanComponent_Template_zxing_scanner_camerasFound_12_listener($event) { return ctx.onCamerasFound($event); })("torchCompatible", function ScanComponent_Template_zxing_scanner_torchCompatible_12_listener($event) { return ctx.onTorchCompatible($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ScanComponent_Template_form_ngSubmit_13_listener() { return ctx.clearResult(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Clear All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ScanComponent_ng_container_52_Template, 3, 0, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ScanComponent_ng_container_53_Template, 3, 0, "ng-container", 17);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.hasDevices);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 13, ctx.torchAvailable$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", !ctx.currentDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.availableDevices);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("torch", ctx.torchEnabled)("device", ctx.currentDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.result[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.result[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.result[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.result[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasDevices === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasDevices === false);
    } }, directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatSelectionList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_10__["ZXingScannerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["zxing-scanner[_ngcontent-%COMP%] {\n  max-width: 50%;\n  padding-left: 25%;\n}\n\nheader[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\nheader[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  max-width: 50%;\n  padding-left: 25%;\n  font-weight: bold;\n  background: #898b8b;\n}\n\nheader[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-form-field-wrapper {\n  padding: 0;\n}\n\nheader[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-form-field-wrapper .mat-form-field-flex {\n  padding-top: 0;\n}\n\nheader[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-form-field-underline {\n  bottom: 0;\n}\n\nheader[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  padding: 10px;\n  line-height: 2;\n  background: #474747;\n  color: #fff;\n}\n\n.results[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0;\n  padding: 15px;\n  background: #02c3c3;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.results[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  display: block;\n  font-size: 60%;\n  margin: -0.6em 0 0 0;\n}\n\n.results[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  line-height: 1;\n  font-weight: bolder;\n  font-size: 120%;\n  float: right;\n  color: #fff;\n  margin: -8px -8px -8px 8px;\n}\n\nh2[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Nhbm5lci9zY2FuL3NjYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBRUEsaUJBQUE7QUFBSjs7QUFNSTtFQUNFLGdCQUFBO0FBSE47O0FBT0k7RUFFRSxjQUFBO0VBRUYsaUJBQUE7RUFDRSxpQkFBQTtFQUVDLG1CQUFBO0FBUlA7O0FBVVE7RUFFRSxVQUFBO0FBVFY7O0FBV1U7RUFDRSxjQUFBO0FBVFo7O0FBWVE7RUFDRSxTQUFBO0FBVlY7O0FBY007RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQVpSOztBQWlCRTtFQUVFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBaEJKOztBQWtCSTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQWhCTjs7QUFtQkk7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSwwQkFBQTtBQWxCTjs7QUFzQkU7RUFDRSxlQUFBO0FBbkJKIiwiZmlsZSI6InNyYy9hcHAvc2Nhbm5lci9zY2FuL3NjYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ6eGluZy1zY2FubmVyIHtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1JTtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgaGVhZGVyIHtcclxuICBcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgbWF0LWZvcm0tZmllbGQge1xyXG4gIFxyXG4gICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgIFxyXG4gICAgcGFkZGluZy1sZWZ0OiAyNSU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBcclxuICAgICAgIGJhY2tncm91bmQ6IHJnYigxMzcsIDEzOSwgMTM5KTtcclxuICAgICAgOjpuZy1kZWVwIHtcclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgXHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gIFxyXG4gICAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIG9wdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNDc0NzQ3O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5yZXN1bHRzIHtcclxuICBcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAyYzNjMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgXHJcbiAgICBzbWFsbCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDYwJTtcclxuICAgICAgbWFyZ2luOiAtLjZlbSAwIDAgMDtcclxuICAgIH1cclxuICBcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTIwJTtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgJG1nOiA4cHg7XHJcbiAgICAgIG1hcmdpbjogKC0kbWcpICgtJG1nKSAoLSRtZykgJG1nO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBoMiB7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgfVxyXG4gICJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scan',
                templateUrl: './scan.component.html',
                styleUrls: ['./scan.component.scss'], changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/application-setting/final.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/application-setting/final.service.ts ***!
  \***************************************************************/
/*! exports provided: FinalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalService", function() { return FinalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FinalService {
    constructor() {
        this.a = "'https://assetcomply.thinkagainlab.com/api/v1/asset/";
        this.b = "https://assetcomply.thinkagainlab.com/api/v1/user/";
    }
}
FinalService.ɵfac = function FinalService_Factory(t) { return new (t || FinalService)(); };
FinalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FinalService, factory: FinalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/application-setting/item.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/application-setting/item.service.ts ***!
  \**************************************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _final_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./final.service */ "./src/app/services/application-setting/final.service.ts");





const token = 'Bearer' + ' ' + localStorage.getItem('usr_token');
let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
headers = headers
    .append('Content-Type', 'application/json')
    .append('Authorization', token);
class ItemService {
    // private getURL =
    //   'https://assetcomply.thinkagainlab.com/api/v1/asset/getAssetAddress';
    constructor(http, final) {
        this.http = http;
        this.final = final;
        this.postURL = this.final.a + 'setaddress';
    }
    postData(data) {
        return this.http.post(this.postURL, data, { headers: headers });
    }
}
ItemService.ɵfac = function ItemService_Factory(t) { return new (t || ItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_final_service__WEBPACK_IMPORTED_MODULE_2__["FinalService"])); };
ItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ItemService, factory: ItemService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ItemService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _final_service__WEBPACK_IMPORTED_MODULE_2__["FinalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_application_setting_final_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/application-setting/final.service */ "./src/app/services/application-setting/final.service.ts");




/*
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable, from } from 'rxjs';

export interface ISignInCredentials {
  email: string;
  password: string;
}

export interface ICreateCredentials {
  email: string;
  password: string;
  displayName: string;
}

export interface IPasswordReset {
  code: string;
  newPassword: string;
}
*/
class AuthService {
    constructor(http, final) {
        this.http = http;
        this.final = final;
        this.registerUrl = this.final.b + 'registration';
        this.loginUrl = this.final.b + 'login';
    }
    register(user) {
        return this.http.post(this.registerUrl, user);
    }
    login(user) {
        return this.http.post(this.loginUrl, user);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_application_setting_final_service__WEBPACK_IMPORTED_MODULE_2__["FinalService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_application_setting_final_service__WEBPACK_IMPORTED_MODULE_2__["FinalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/lang.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/lang.service.ts ***!
  \****************************************/
/*! exports provided: LangService, Language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangService", function() { return LangService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _lang_en_US_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lang/en-US.json */ "./src/lang/en-US.json");
var _lang_en_US_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../lang/en-US.json */ "./src/lang/en-US.json", 1);
/* harmony import */ var _lang_es_ES_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lang/es-ES.json */ "./src/lang/es-ES.json");
var _lang_es_ES_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../lang/es-ES.json */ "./src/lang/es-ES.json", 1);
/* harmony import */ var src_app_utils_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/util */ "./src/app/utils/util.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







const languageKey = '__lang';
class LangService {
    constructor(translate, rendererFactory, router) {
        this.translate = translate;
        this.rendererFactory = rendererFactory;
        this.router = router;
        this.isSingleLang = false;
        this.defaultLanguage = Object(src_app_utils_util__WEBPACK_IMPORTED_MODULE_3__["getThemeLang"])();
        this.supportedLanguages = [
            { code: 'en-US', direction: 'ltr', label: 'English', shorthand: 'en' },
            { code: 'es-ES', direction: 'ltr', label: 'Español', shorthand: 'es' },
            {
                code: 'en-EN',
                direction: 'rtl',
                label: 'English - RTL',
                shorthand: 'enrtl',
            },
        ];
        this.renderer = this.rendererFactory.createRenderer(null, null);
    }
    init() {
        this.translate.setTranslation('en-US', _lang_en_US_json__WEBPACK_IMPORTED_MODULE_1__);
        this.translate.setTranslation('es-ES', _lang_es_ES_json__WEBPACK_IMPORTED_MODULE_2__);
        this.translate.setTranslation('en-EN', _lang_en_US_json__WEBPACK_IMPORTED_MODULE_1__);
        this.translate.setDefaultLang(this.defaultLanguage);
        if (this.isSingleLang) {
            this.translate.use(this.defaultLanguage);
        }
        else {
            this.language = '';
        }
    }
    checkForDirectionChange() {
        this.renderer.removeClass(document.body, 'ltr');
        this.renderer.removeClass(document.body, 'rtl');
        this.renderer.addClass(document.body, this.direction);
        this.renderer.setAttribute(document.documentElement, 'direction', this.direction);
    }
    set language(lang) {
        let language = lang || Object(src_app_utils_util__WEBPACK_IMPORTED_MODULE_3__["getThemeLang"])();
        const isSupportedLanguage = this.supportedLanguages
            .map((item) => item.code)
            .includes(language);
        if (!isSupportedLanguage) {
            language = this.defaultLanguage;
        }
        if (lang !== '' &&
            this.supportedLanguages.map((item) => item.code).includes(lang) &&
            this.direction !==
                this.supportedLanguages.find((item) => item.code === lang).direction) {
            Object(src_app_utils_util__WEBPACK_IMPORTED_MODULE_3__["setThemeLang"])(lang);
            window.location.reload();
        }
        else {
            this.translate.use(language);
        }
        this.checkForDirectionChange();
        Object(src_app_utils_util__WEBPACK_IMPORTED_MODULE_3__["setThemeLang"])(language);
    }
    get language() {
        return this.translate.currentLang;
    }
    get languageShorthand() {
        return this.supportedLanguages.find((item) => item.code === this.translate.currentLang).shorthand;
    }
    get direction() {
        return this.supportedLanguages.find((item) => item.code === this.translate.currentLang).direction;
    }
    get languageLabel() {
        return this.supportedLanguages.find((item) => item.code === this.translate.currentLang).label;
    }
}
LangService.ɵfac = function LangService_Factory(t) { return new (t || LangService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
LangService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LangService, factory: LangService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LangService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();
class Language {
}


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _views_error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/error/error.component */ "./src/app/views/error/error.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");







class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
        ], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_views_error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"]], exports: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _views_error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_views_error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"]],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                ],
                exports: [
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _views_error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/utils/util.js":
/*!*******************************!*\
  !*** ./src/app/utils/util.js ***!
  \*******************************/
/*! exports provided: getThemeColor, setThemeColor, getThemeRadius, setThemeRadius, getThemeLang, setThemeLang */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getThemeColor", function() { return getThemeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setThemeColor", function() { return setThemeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getThemeRadius", function() { return getThemeRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setThemeRadius", function() { return setThemeRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getThemeLang", function() { return getThemeLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setThemeLang", function() { return setThemeLang; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



const getThemeColor = () => {
    let color = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].defaultColor;
    try {
        color = localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].themeColorStorageKey) || src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].defaultColor
    } catch (error) {
        console.log(">>>> src/app/utils/util.js : getThemeColor -> error", error)
        color = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].defaultColor
    }
    return color;
}
const setThemeColor = (color) => {
    try {
        if (color) {
            localStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].themeColorStorageKey, color);
        } else {
            localStorage.removeItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].themeColorStorageKey)
        }
    } catch (error) {
        console.log(">>>> src/app/utils/util.js : setThemeColor -> error", error)
    }
}
const getThemeRadius = () => {
    let radius = 'rounded';
    try {
        radius = localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].themeRadiusStorageKey) || 'rounded';
    } catch (error) {
        console.log(">>>> src/app/utils/util.js : getThemeRadius -> error", error)
        radius = 'rounded'
    }
    return radius;
}
const setThemeRadius = (radius) => {
    try {
        localStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].themeRadiusStorageKey, radius);
    } catch (error) {
        console.log(">>>> src/app/utils/util.js : setThemeRadius -> error", error)
    }
}

const getThemeLang = () => {
    let lang = 'en-US';
    try {
        lang = localStorage.getItem('theme_lang') || 'en-US';
    } catch (error) {
        console.log(">>>> src/app/utils/util.js : getThemeLang -> error", error)
        lang = 'en-US'
    }
    return lang;
}
const setThemeLang = (lang) => {
    try {
        localStorage.setItem('theme_lang', lang);
    } catch (error) {
        console.log(">>>> src/app/utils/util.js : setThemeLang -> error", lang)
    }
}

/***/ }),

/***/ "./src/app/views/error/error.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/error/error.component.ts ***!
  \************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




class ErrorComponent {
    constructor() { }
    ngOnInit() {
        document.body.classList.add('background');
    }
    ngOnDestroy() {
        document.body.classList.remove('background');
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 26, vars: 9, consts: [["id", "root"], [1, "fixed-background"], [1, "container"], [1, "row", "h-100"], [1, "col-12", "col-md-10", "mx-auto", "my-auto"], [1, "card", "auth-card"], [1, "position-relative", "image-side"], [1, "text-white", "h2"], [1, "white", "mb-0"], [1, "form-side"], ["routerLink", "/"], [1, "logo-single"], [1, "mb-4"], [1, "mb-0", "text-muted", "text-small", "mb-0"], [1, "display-1", "font-weight-bold", "mb-5"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-shadow"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "MAGIC IS IN THE DETAILS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Yes, it is indeed!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 3, "pages.error-title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 5, "pages.error-code"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 7, "pages.go-back-home"), " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error',
                templateUrl: './error.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/__ivy_ngcc__/fesm2015/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ctrl_ngx_headroom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ctrl/ngx-headroom */ "./node_modules/@ctrl/ngx-headroom/__ivy_ngcc__/fesm2015/ctrl-ngx-headroom.js");
/* harmony import */ var _components_carousel_glide_glide_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/carousel/glide/glide.component */ "./src/app/components/carousel/glide/glide.component.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









function HomeComponent_div_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](f_r5.icon + " large-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r5.detail);
} }
function HomeComponent_div_96_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feature_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", feature_r6.detail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", feature_r6.title)("src", feature_r6.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_div_96_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", feature_r6.title)("src", feature_r6.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feature_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", feature_r6.detail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function HomeComponent_div_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_96_div_1_Template, 8, 4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_96_div_2_Template, 8, 4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r7 % 2 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r7 % 2 == 1);
} }
function HomeComponent_div_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", l_r12.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](l_r12.title);
} }
function HomeComponent_tab_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tab", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", app_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", app_r13.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", app_r13.title)("src", app_r13.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_div_141_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const align_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const t_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](t_r14.class + "-light-" + (i_r18 + 1) + " color-" + align_r17);
} }
function HomeComponent_div_141_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const align_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    const t_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](t_r14.class + "-dark-" + (i_r21 + 1) + " color-" + align_r20);
} }
const _c0 = function () { return ["left", "center", "right"]; };
function HomeComponent_div_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_141_div_6_Template, 1, 3, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_div_141_div_9_Template, 1, 3, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r14.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
} }
const _c1 = function (a1) { return { "landing-page": true, "show-mobile-menu": a1 }; };
class HomeComponent {
    constructor(renderer, elRef, scrollToService) {
        this.renderer = renderer;
        this.elRef = elRef;
        this.scrollToService = scrollToService;
        this.showMobileMenu = false;
        this.buyUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].buyUrl;
        this.adminRoot = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].adminRoot;
        this.slideSettings = {
            type: "carousel",
            gap: 30,
            perView: 4,
            hideNav: true,
            peek: { before: 10, after: 10 },
            breakpoints: {
                "600": { perView: 1 },
                "992": { perView: 2 },
                "1200": { perView: 3 },
            },
        };
        this.slideItems = [
            {
                icon: "iconsminds-mouse-3",
                title: "Right Click Menu",
                detail: "Increases overall usability of the project by providing additional actions menu.",
            },
            {
                icon: "iconsminds-electric-guitar",
                title: "Video Player",
                detail: "Carefully themed multimedia players powered by Video.js library with Youtube support.",
            },
            {
                icon: "iconsminds-keyboard",
                title: "Keyboard Shortcuts",
                detail: "Easily configurable keyboard shortcuts plugin that highly improves user experience.",
            },
            {
                icon: "iconsminds-three-arrow-fork ",
                title: "Two Panels Menu",
                detail: "Three states two panels icon menu that looks good, auto resizes and does the job well.",
            },
            {
                icon: "iconsminds-deer",
                title: "Icons Mind",
                detail: "1040 icons in 53 different categories, designed pixel perfect and ready for your project.",
            },
            {
                icon: "iconsminds-palette",
                title: "20 Color Schemes",
                detail: "Colors, icons and design harmony that creates excellent themes to cover entire project.",
            },
            {
                icon: "iconsminds-air-balloon-1",
                title: "3 Applications",
                detail: "Applications that mostly made of components are the way to get started to create something similar.",
            },
            {
                icon: "iconsminds-resize",
                title: "Extra Responsive",
                detail: "Custom Bootstrap 4 xxs & xxl classes delivers better experiences for smaller and larger screens.",
            },
        ];
        this.features = [
            {
                title: "Pleasant Design",
                img: "/assets/img/landing-page/features/pleasant-design.png",
                detail: "As a web developer we enjoy to work on something looks nice. It is not an absolute necessity but it really motivates us that final product will look good for user point of view. <br /><br />So we put a lot of work into colors, icons, composition and design harmony. Themed components and layouts with same design language. <br /><br />We kept user experience principles always at the heart of the design process.",
            },
            {
                title: "Extra Responsive",
                img: "/assets/img/landing-page/features/extra-responsive.png",
                detail: "Xxs breakpoint is for smaller screens that has a resolution lower than 420px. Xs works between 576px and 420px. Xxl breakpoint is for larger screens that has a resolution higher than 1440px. Xl works between 1200px and 1440px.<br><br>With this approach we were able to create better experiences for smaller and larger screens.",
            },
            {
                title: "Superfine Charts",
                img: "/assets/img/landing-page/features/superfine-charts.png",
                detail: "Using charts is a good way to visualize data but they often look ugly and break the rhythm of design. <br /><br />We concentrated on a single chart library and tried to create charts that look good with color, opacity, border and shadow. <br /><br />Used certain plugins and created some to make charts even more useful and beautiful.",
            },
            {
                title: "Layouts for the Job",
                img: "/assets/img/landing-page/features/layouts-for-the-job.png",
                detail: "Layouts are the real thing, they need to be accurate and right for the job. They should be functional for both user and developer. <br /><br />We created lots of different layouts for different jobs.<br /><br />Listing pages with view mode changing capabilities, shift select and select all functionality, application layouts with an additional menu, authentication and error layouts which has a different design than the other pages were our main focus. We also created details page with tabs that can hold many components.",
            },
            {
                title: "Smart Menu",
                img: "/assets/img/landing-page/features/smart-menu.png",
                detail: "Instead of good old single panel menus with accordion structure that looks over complicated, we created 2 panels and categorized pages accordingly.<br><br>The default menu auto hides sub panel when resolution is under some breakpoint to open some space. You may also hide menu completely or use only main panel open only.",
            },
        ];
        this.layouts = [
            { title: "Menu Default", img: "/assets/img/landing-page/layouts/menu-default.jpg" },
            { title: "Menu Subhidden", img: "/assets/img/landing-page/layouts/menu-subhidden.jpg" },
            { title: "Menu Hidden", img: "/assets/img/landing-page/layouts/menu-hidden.jpg" },
            { title: "Image List", img: "/assets/img/landing-page/layouts/image-list.jpg" },
            { title: "Thumb List", img: "/assets/img/landing-page/layouts/thumb-list.jpg" },
            { title: "Data List", img: "/assets/img/landing-page/layouts/data-list.jpg" },
            { title: "Details", img: "/assets/img/landing-page/layouts/details.jpg" },
            { title: "Authentication", img: "/assets/img/landing-page/layouts/authentication.jpg" },
            { title: "Search Results", img: "/assets/img/landing-page/layouts/search-result.jpg" },
            {
                title: "Single Page Application",
                img: "/assets/img/landing-page/layouts/spa.jpg",
            },
            {
                title: "Data List App Menu Hidden",
                img: "/assets/img/landing-page/layouts/data-list-app-menu-hidden.jpg",
            },
            { title: "Tabs", img: "/assets/img/landing-page/layouts/tabs.jpg" },
        ];
        this.applications = [
            {
                title: "Survey",
                path: `${this.adminRoot}/applications/survey`,
                img: "/assets/img/landing-page/applications/survey.jpg",
            },
            {
                title: "Chat",
                path: `${this.adminRoot}/applications/chat`,
                img: "/assets/img/landing-page/applications/chat.jpg",
            },
            {
                title: "Todo",
                path: `${this.adminRoot}/applications/todo`,
                img: "/assets/img/landing-page/applications/todo.jpg",
            },
        ];
        this.themes = [
            { title: "Navy Blue", class: "bluenavy" },
            { title: "Olympic Blue", class: "blueolympic" },
            { title: "Yale Blue", class: "blueyale" },
            { title: "Moss Green", class: "greenmoss" },
            { title: "Lime Green", class: "greenlime" },
            { title: "Carrot Orange", class: "carrotorange" },
            { title: "Ruby Red", class: "rubyred" },
            { title: "Monster Purple", class: "monsterpurple" },
            { title: "Steel Grey", class: "steelgrey" },
            { title: "Granola Yellow", class: "granolayellow" },
        ];
    }
    ngOnInit() {
        this.renderer.addClass(document.body, "no-footer");
    }
    ngOnDestroy() {
        this.renderer.removeClass(document.body, "no-footer");
    }
    onResize(event) {
        const homeRect = this.elRef.nativeElement
            .querySelector(".home-row")
            .getBoundingClientRect();
        const homeSection = this.elRef.nativeElement.querySelector(".landing-page .section.home");
        homeSection.style.backgroundPositionX = homeRect.x - 580 + "px";
        const footerSection = this.elRef.nativeElement.querySelector(".landing-page .section.footer");
        footerSection.style.backgroundPositionX = event.target.innerWidth - homeRect.x - 2000 + "px";
        if (event.target.innerWidth >= 992) {
            this.renderer.removeClass(this.elRef.nativeElement.querySelector(".landing-page"), "show-mobile-menu");
        }
    }
    onClick(event) {
        this.showMobileMenu = false;
    }
    onScroll(event) {
        this.showMobileMenu = false;
    }
    scrollTo(target) {
        const config = {
            target,
            offset: -150
        };
        this.scrollToService.scrollTo(config);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function HomeComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("click", function HomeComponent_click_HostBindingHandler($event) { return ctx.onClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("scroll", function HomeComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 169, vars: 15, consts: [[3, "ngClass"], [1, "mobile-menu", 3, "click"], ["href", "javascript:;", 1, "logo-mobile", 3, "click"], [1, "navbar-nav"], [1, "nav-item"], ["href", "javascript:;", 3, "click"], [1, "separator"], [1, "nav-item", "text-center"], ["target", "_blank", 1, "btn", "btn-outline-primary", "btn-sm", "mobile-menu-cta", 3, "href"], [1, "main-container"], [1, "landing-page-nav"], [1, "container", "d-flex", "align-items-center", "justify-content-between"], ["href", "javascript:;", 1, "navbar-logo", "pull-left", 3, "click"], [1, "white"], [1, "dark"], [1, "navbar-nav", "d-none", "d-lg-flex", "flex-row"], [1, "nav-item", "pl-4"], ["target", "_blank", 1, "btn", "btn-outline-semi-light", "btn-sm", "pr-4", "pl-4", 3, "href"], [1, "mobile-menu-button", 3, "click"], [1, "simple-icon-menu"], ["id", "home", 1, "content-container"], [1, "section", "home"], [1, "container"], [1, "row", "home-row"], [1, "col-12", "d-block", "d-md-none"], ["target", "_blank", 3, "href"], ["alt", "mobile hero", "src", "/assets/img/landing-page/home-hero-mobile.png", 1, "mobile-hero"], [1, "col-12", "col-xl-4", "col-lg-5", "col-md-6"], [1, "home-text"], [1, "display-1"], [1, "white", "mb-5"], ["target", "_blank", 1, "btn", "btn-light", "btn-xl", "mr-2", "mb-2", 3, "href"], [1, "simple-icon-arrow-right"], [1, "col-12", "col-xl-7", "offset-xl-1", "col-lg-7", "col-md-6", "d-none", "d-md-block"], ["alt", "hero", "src", "/assets/img/landing-page/home-hero.png"], [1, "row"], [1, "col-12", "p-0"], [1, "home-carousel"], [3, "settings"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "btn", "btn-circle", "btn-outline-semi-light", "hero-circle-button", 3, "click"], [1, "simple-icon-arrow-down"], [1, "section"], ["id", "features", 1, "container"], [1, "col-12", "offset-0", "col-lg-8", "offset-lg-2", "text-center"], [4, "ngFor", "ngForOf"], [1, "section", "background"], ["id", "layouts", 1, "container"], [1, "row", "pt-5"], ["class", "col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5", 4, "ngFor", "ngForOf"], [1, "section", "mb-0"], ["id", "components", 1, "container"], [1, "row", "mb-5"], ["src", "/assets/img/landing-page/components.jpg", 1, "components-image", "mb-5", "pb-5"], ["id", "apps", 1, "container"], [1, "col-12", "offset-0", "col-lg-8", "offset-lg-2", "text-center", "mb-4"], [1, "section-text"], [1, "row", "screenshots"], [1, "col-12", "text-center", "mb-4"], [1, "nav", "nav-tabs", "justify-content-center"], ["class", "card-body pt-0", 3, "heading", 4, "ngFor", "ngForOf"], ["id", "themes", 1, "container"], ["class", "row mb-5", 4, "ngFor", "ngForOf"], [1, "section", "background", "background-no-bottom", "mb-0", "pb-0"], [1, "col-12", "offset-0", "col-lg-6", "offset-lg-3", "newsletter-input-container"], [1, "text-center", "mb-3"], ["target", "_blank", 1, "btn", "btn-secondary", "btn-xl", 3, "href"], [1, "section", "footer", "mb-0"], [1, "row", "footer-row"], [1, "col-12", "text-right"], ["href", "javascript:;", 1, "btn", "btn-circle", "btn-outline-semi-light", "footer-circle-button", 3, "click"], [1, "simple-icon-arrow-up"], [1, "col-12", "text-center", "footer-content"], ["alt", "footer logo", "src", "/assets/logos/white-full.svg", 1, "footer-logo"], [1, "container", "copyright", "pt-5", "pb-5"], [1, "col-12"], [1, "col-12", "text-center"], [1, "mb-0"], [1, "card"], [1, "card-body", "text-center"], [1, "mb-3", "font-weight-semibold"], [1, "detail-text"], ["class", "row feature-row", 4, "ngIf"], [1, "row", "feature-row"], [1, "col-12", "col-md-6", "col-lg-5", "d-flex", "align-items-center"], [1, "feature-text-container"], [3, "innerHTML"], [1, "col-12", "col-md-6", "col-lg-6", "offset-lg-1", "offset-md-0", "position-relative"], [1, "feature-image-right", "feature-image-charts", "position-relative", 3, "alt", "src"], [1, "col-12", "col-md-6", "col-lg-6", "order-2", "order-md-1"], [1, "feature-image-left", "feature-image-charts", 3, "alt", "src"], [1, "col-12", "col-md-6", "offset-md-0", "col-lg-5", "offset-lg-1", "d-flex", "align-items-center", "order-1", "order-md-2"], [1, "col-12", "col-xs-6", "col-sm-6", "col-md-4", "col-lg-3", "mb-5"], [1, "img-fluid", "border-radius", "depth-2", "mb-3", "semi-rounded", 3, "src"], [1, "text-center"], [1, "card-body", "pt-0", 3, "heading"], [3, "routerLink"], [1, "app-image", 3, "alt", "src"], [1, "col-12", "text-center", "mb-3"], [1, "col-12", "col-md-6", "col-lg-4", "offset-lg-2", "mb-3"], [1, "depth-2", "color-container"], [3, "class", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6", "col-lg-4", "mb-3"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_2_listener() { return ctx.scrollTo("#home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_6_listener() { return ctx.scrollTo("#features"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "FEATURES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_9_listener() { return ctx.scrollTo("#layouts"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "LAYOUTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_12_listener() { return ctx.scrollTo("#components"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "COMPONENTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_15_listener() { return ctx.scrollTo("#apps"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "APPS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_18_listener() { return ctx.scrollTo("#themes"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "THEMES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "BUY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ngx-headroom", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_29_listener() { return ctx.scrollTo("#home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_34_listener() { return ctx.scrollTo("#features"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "FEATURES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_37_listener() { return ctx.scrollTo("#layouts"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "LAYOUTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_40_listener() { return ctx.scrollTo("#components"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "COMPONENTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_43_listener() { return ctx.scrollTo("#apps"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "APPS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_46_listener() { return ctx.scrollTo("#themes"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "THEMES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "BUY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_span_click_51_listener($event) { ctx.showMobileMenu = !ctx.showMobileMenu; return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "MAGIC IS IN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "THE DETAILS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Vien is the combination of good design, quality code and attention for details.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " We used same design language for components, layouts, apps and other parts of the template. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Hope you enjoy it! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " VIEW NOW ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "app-glide", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, HomeComponent_div_84_Template, 9, 5, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_86_listener() { return ctx.scrollTo("#features"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Features At a Glance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " We tried to create an admin theme that we would like to use ourselves so we listed our priorities. We would like to have a theme that is not over complicated to use, does the job well, contains must have components and looks really nice. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, HomeComponent_div_96_Template, 3, 2, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Structures & Layouts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " We did our best to create layouts for various needs that developers might have and best experience for users. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " They are clean and slick. They function well and look good at the same time. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, HomeComponent_div_108_Template, 4, 2, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " We used most popular and well managed open source components with bootstrap components. Combined them into even more useful ones. Themed them with same design principles and created a design harmony between components and layouts. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " From carousels to charts, switches to list we tried to provide components that we like to use on our development processes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " With the help of components and layouts, we created four different applications. They are a good way to get you started if you want to build something similar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "tabset", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](132, HomeComponent_tab_132_Template, 3, 4, "tab", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Themes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " We carefully choosed colors and created 10 different themes with dark and light versions. You may also create your own themes easily since all the theme related styling is managed by Sass variables. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](141, HomeComponent_div_141_Template, 10, 5, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Enjoying so Far?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " Purchase Vien to get a fresh start with your new project. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "BUY NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_158_listener() { return ctx.scrollTo("#home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_161_listener() { return ctx.scrollTo("#home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "2020 \u00A9 ColoredStrategies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.showMobileMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.buyUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.buyUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.adminRoot, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.adminRoot, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.adminRoot, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.slideSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slideItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.features);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.layouts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.applications);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.themes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.buyUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _ctrl_ngx_headroom__WEBPACK_IMPORTED_MODULE_4__["HeadroomComponent"], _components_carousel_glide_glide_component__WEBPACK_IMPORTED_MODULE_5__["GlideComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToService"] }]; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:resize", ["$event"]]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:click", ["$event"]]
        }], onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll", ["$event"]]
        }] }); })();


/***/ }),

/***/ "./src/app/views/views.module.ts":
/*!***************************************!*\
  !*** ./src/app/views/views.module.ts ***!
  \***************************************/
/*! exports provided: ViewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsModule", function() { return ViewsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _views_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views.routing */ "./src/app/views/views.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js");
/* harmony import */ var src_app_components_carousel_components_carousel_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/carousel/components.carousel.module */ "./src/app/components/carousel/components.carousel.module.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _ctrl_ngx_headroom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ctrl/ngx-headroom */ "./node_modules/@ctrl/ngx-headroom/__ivy_ngcc__/fesm2015/ctrl-ngx-headroom.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/__ivy_ngcc__/fesm2015/nicky-lenaers-ngx-scroll-to.js");















class ViewsModule {
}
ViewsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewsModule });
ViewsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewsModule_Factory(t) { return new (t || ViewsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _views_routing__WEBPACK_IMPORTED_MODULE_2__["ViewRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"],
            _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthGuardModule"],
            src_app_components_carousel_components_carousel_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsCarouselModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _ctrl_ngx_headroom__WEBPACK_IMPORTED_MODULE_9__["HeadroomModule"],
            _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__["ScrollToModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewsModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _views_routing__WEBPACK_IMPORTED_MODULE_2__["ViewRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"],
        _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthGuardModule"],
        src_app_components_carousel_components_carousel_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsCarouselModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _ctrl_ngx_headroom__WEBPACK_IMPORTED_MODULE_9__["HeadroomModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__["ScrollToModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _views_routing__WEBPACK_IMPORTED_MODULE_2__["ViewRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"],
                    _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthGuardModule"],
                    src_app_components_carousel_components_carousel_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsCarouselModule"],
                    ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _ctrl_ngx_headroom__WEBPACK_IMPORTED_MODULE_9__["HeadroomModule"],
                    _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__["ScrollToModule"].forRoot()
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/views.routing.ts":
/*!****************************************!*\
  !*** ./src/app/views/views.routing.ts ***!
  \****************************************/
/*! exports provided: ViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRoutingModule", function() { return ViewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/error.component */ "./src/app/views/error/error.component.ts");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _guard_user_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../guard/user-auth.guard */ "./src/app/guard/user-auth.guard.ts");









const redirectUnauthorizedToLogin = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["redirectUnauthorizedTo"])(['/user']);
const redirectLoggedInToItems = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["redirectLoggedInTo"])(['/']);
const adminRoot = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].adminRoot.substr(1); // path cannot start with a slash 
let routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        pathMatch: 'full',
    },
    { path: 'app', loadChildren: () => __webpack_require__.e(/*! import() | app-app-module */ "app-app-module").then(__webpack_require__.bind(null, /*! ./app/app.module */ "./src/app/views/app/app.module.ts")).then(m => m.AppModule), canActivate: [_guard_user_auth_guard__WEBPACK_IMPORTED_MODULE_6__["UserAuthGuard"]] },
    { path: 'user', loadChildren: () => Promise.all(/*! import() | user-user-module */[__webpack_require__.e("default~components-components-module~user-user-module"), __webpack_require__.e("user-user-module")]).then(__webpack_require__.bind(null, /*! ./user/user.module */ "./src/app/views/user/user.module.ts")).then(m => m.UserModule), data: { authGuardPipe: redirectLoggedInToItems } },
    { path: 'error', component: _error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"] },
    { path: '**', redirectTo: '/error' }
];
if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].isAuthGuardActive) {
    routes = [
        {
            path: '',
            component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            pathMatch: 'full',
        },
        { path: 'app', loadChildren: () => __webpack_require__.e(/*! import() | app-app-module */ "app-app-module").then(__webpack_require__.bind(null, /*! ./app/app.module */ "./src/app/views/app/app.module.ts")).then(m => m.AppModule) },
        { path: 'user', loadChildren: () => Promise.all(/*! import() | user-user-module */[__webpack_require__.e("default~components-components-module~user-user-module"), __webpack_require__.e("user-user-module")]).then(__webpack_require__.bind(null, /*! ./user/user.module */ "./src/app/views/user/user.module.ts")).then(m => m.UserModule) },
        { path: 'error', component: _error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"] },
        { path: '**', redirectTo: '/error' }
    ];
}
class ViewRoutingModule {
}
ViewRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewRoutingModule });
ViewRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewRoutingModule_Factory(t) { return new (t || ViewRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/assets/css/sass/themes lazy recursive ^\\.\\/vien\\..*\\.scss$":
/*!*******************************************************************************!*\
  !*** ./src/assets/css/sass/themes lazy ^\.\/vien\..*\.scss$ namespace object ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./vien.dark.bluenavy.scss": [
		"./src/assets/css/sass/themes/vien.dark.bluenavy.scss",
		0
	],
	"./vien.dark.blueolympic.scss": [
		"./src/assets/css/sass/themes/vien.dark.blueolympic.scss",
		1
	],
	"./vien.dark.blueyale.scss": [
		"./src/assets/css/sass/themes/vien.dark.blueyale.scss",
		2
	],
	"./vien.dark.greenlime.scss": [
		"./src/assets/css/sass/themes/vien.dark.greenlime.scss",
		3
	],
	"./vien.dark.greenmoss.scss": [
		"./src/assets/css/sass/themes/vien.dark.greenmoss.scss",
		4
	],
	"./vien.dark.greysteel.scss": [
		"./src/assets/css/sass/themes/vien.dark.greysteel.scss",
		5
	],
	"./vien.dark.orangecarrot.scss": [
		"./src/assets/css/sass/themes/vien.dark.orangecarrot.scss",
		6
	],
	"./vien.dark.purplemonster.scss": [
		"./src/assets/css/sass/themes/vien.dark.purplemonster.scss",
		7
	],
	"./vien.dark.redruby.scss": [
		"./src/assets/css/sass/themes/vien.dark.redruby.scss",
		8
	],
	"./vien.dark.yellowgranola.scss": [
		"./src/assets/css/sass/themes/vien.dark.yellowgranola.scss",
		9
	],
	"./vien.light.bluenavy.scss": [
		"./src/assets/css/sass/themes/vien.light.bluenavy.scss",
		10
	],
	"./vien.light.blueolympic.scss": [
		"./src/assets/css/sass/themes/vien.light.blueolympic.scss",
		11
	],
	"./vien.light.blueyale.scss": [
		"./src/assets/css/sass/themes/vien.light.blueyale.scss",
		12
	],
	"./vien.light.greenlime.scss": [
		"./src/assets/css/sass/themes/vien.light.greenlime.scss",
		13
	],
	"./vien.light.greenmoss.scss": [
		"./src/assets/css/sass/themes/vien.light.greenmoss.scss",
		14
	],
	"./vien.light.greysteel.scss": [
		"./src/assets/css/sass/themes/vien.light.greysteel.scss",
		15
	],
	"./vien.light.orangecarrot.scss": [
		"./src/assets/css/sass/themes/vien.light.orangecarrot.scss",
		16
	],
	"./vien.light.purplemonster.scss": [
		"./src/assets/css/sass/themes/vien.light.purplemonster.scss",
		17
	],
	"./vien.light.redruby.scss": [
		"./src/assets/css/sass/themes/vien.light.redruby.scss",
		18
	],
	"./vien.light.yellowgranola.scss": [
		"./src/assets/css/sass/themes/vien.light.yellowgranola.scss",
		19
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
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/assets/css/sass/themes lazy recursive ^\\.\\/vien\\..*\\.scss$";
module.exports = webpackAsyncContext;

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
    buyUrl: "https://1.envato.market/6NV1b",
    SCARF_ANALYTICS: false,
    adminRoot: '/app',
    apiUrl: 'https://api.coloredstrategies.com',
    defaultMenuType: 'menu-default',
    subHiddenBreakpoint: 1440,
    menuHiddenBreakpoint: 768,
    themeColorStorageKey: 'vien-themecolor',
    isMultiColorActive: true,
    /*
    Color Options:
    'light.blueyale', 'light.blueolympic', 'light.bluenavy', 'light.greenmoss', 'light.greenlime', 'light.yellowgranola', 'light.greysteel', 'light.orangecarrot', 'light.redruby', 'light.purplemonster'
    'dark.blueyale', 'dark.blueolympic', 'dark.bluenavy', 'dark.greenmoss', 'dark.greenlime', 'dark.yellowgranola', 'dark.greysteel', 'dark.orangecarrot', 'dark.redruby', 'dark.purplemonster'
    */
    defaultColor: 'light.blueyale',
    isDarkSwitchActive: true,
    defaultDirection: 'ltr',
    themeRadiusStorageKey: 'vien-themeradius',
    isAuthGuardActive: true,
    firebase: {
        apiKey: 'AIzaSyCqoNLB_jTw4nncO12qR-eDH9gAeWiZVaw',
        authDomain: 'vien-angular-login.firebaseapp.com',
        databaseURL: 'https://vien-angular-login.firebaseio.com',
        projectId: 'vien-angular-login',
        storageBucket: 'vien-angular-login.appspot.com',
        messagingSenderId: '16217062888',
        appId: '1:16217062888:web:6b08232ca0c9662fedb85d',
        measurementId: 'G-8ETT79WRRN'
    }
};


/***/ }),

/***/ "./src/lang/en-US.json":
/*!*****************************!*\
  !*** ./src/lang/en-US.json ***!
  \*****************************/
/*! exports provided: general, user, menu, dashboards, pages, chat, survey, todo, alert, badge, button, cards, carousel, charts, collapse, dropdowns, editors, forms, form-components, icons, input-groups, jumbotron, modal, pagination, nav, popover-tooltip, sortable, maps, table, wizard, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"general\":{\"copyright\":\"Vien Angular © 2020 All Rights Reserved.\"},\"user\":{\"login-title\":\"Login\",\"register\":\"Register\",\"forgot-password\":\"Forgot Password\",\"email\":\"E-mail\",\"password\":\"Password\",\"password-again\":\"Password Again\",\"forgot-password-question\":\"Forget password?\",\"fullname\":\"Full Name\",\"login-button\":\"Login\",\"register-button\":\"Register\",\"reset-password-button\":\"Reset\",\"buy\":\"BUY\",\"username\":\"Username\",\"code\":\"Reset Code\"},\"menu\":{\"home\":\"Home\",\"app\":\"Home\",\"dashboards\":\"Dashboards\",\"default\":\"Default\",\"analytics\":\"Analytics\",\"ecommerce\":\"Ecommerce\",\"content\":\"Content\",\"pages\":\"Pages\",\"data-list\":\"Data List\",\"thumb-list\":\"Thumb List\",\"image-list\":\"Image List\",\"details\":\"Details\",\"search\":\"Search\",\"invoice\":\"Invoice\",\"mailing\":\"Mailing\",\"login\":\"Login\",\"register\":\"Register\",\"forgot-password\":\"Forgot Password\",\"reset-password\":\"Reset Password\",\"error\":\"Error\",\"applications\":\"Applications\",\"todo\":\"To-do List\",\"library\":\"Library\",\"survey\":\"Survey\",\"survey-detail\":\"Survey Detail\",\"chat\":\"Chat\",\"ui\":\"UI\",\"alerts\":\"Alerts\",\"accordion\":\"Accordion\",\"badges\":\"Badges\",\"buttons\":\"Buttons\",\"cards\":\"Cards\",\"carousel\":\"Carousel\",\"charts\":\"Charts\",\"collapse\":\"Collapse\",\"datatables\":\"Datatables\",\"fullpage\":\"Full Page\",\"scrollable\":\"Scrollable\",\"responsive\":\"Responsive\",\"dropdowns\":\"Dropdowns\",\"editors\":\"Editors\",\"forms\":\"Forms\",\"form-components\":\"Form Components\",\"icons\":\"Icons\",\"input-groups\":\"Input Groups\",\"jumbotron\":\"Jumbotron\",\"modal\":\"Modal\",\"navigation\":\"Navigation\",\"pagination\":\"Pagination\",\"popover-tooltip\":\"Popover & Tooltip\",\"sortable\":\"Sortable\",\"menu\":\"Menu\",\"subhidden\":\"Subhidden\",\"hidden\":\"Hidden\",\"visible\":\"Visible\",\"tables\":\"Tables\",\"maps\":\"Maps\",\"landingpage\":\"Landing Page\",\"multipage-home\":\"Multipage Home\",\"singlepage-home\":\"Singlepage Home\",\"about\":\"About\",\"auth-login\":\"Auth Login\",\"auth-register\":\"Auth Register\",\"blog\":\"Blog\",\"blog-list\":\"Blog List\",\"blog-detail\":\"Blog Detail\",\"careers\":\"Careers\",\"confirmation\":\"Confirmation\",\"contact\":\"Contact\",\"docs\":\"Docs\",\"features\":\"Features\",\"prices\":\"Prices\",\"videos\":\"Videos\",\"blank-page\":\"Blank Page\",\"types\":\"Menu Types\",\"levels\":\"Menu Levels\",\"third-level-1\":\"Third Level 1\",\"third-level-2\":\"Third Level 2\",\"third-level-3\":\"Third Level 3\",\"faq\":\"Faq\",\"knowledge-base\":\"Knowledge Base\",\"authorization\":\"Authorization\",\"profile\":\"Profile\",\"product\":\"Product\",\"miscellaneous\":\"Miscellaneous\",\"portfolio\":\"Portfolio\",\"social\":\"Social\",\"details-alt\":\"Details Alt\",\"components\":\"Components\",\"layouts\":\"Layouts\",\"validations\":\"Validations\",\"wizard\":\"Wizard\",\"form-layouts\":\"Form Layouts\",\"form-validations\":\"Form Validations\",\"form-wizard\":\"Form Wizard\"},\"dashboards\":{\"pending-orders\":\"Pending Orders\",\"completed-orders\":\"Completed Orders\",\"refund-requests\":\"Refund Requests\",\"new-comments\":\"New Comments\",\"sales\":\"Sales\",\"orders\":\"Orders\",\"refunds\":\"Refunds\",\"recent-orders\":\"Recent Orders\",\"product-categories\":\"Product Categories\",\"cakes\":\"Cakes\",\"tickets\":\"Tickets\",\"calendar\":\"Calendar\",\"best-sellers\":\"Best Sellers\",\"website-visits\":\"Website Visits\",\"unique-visitors\":\"Unique Visitors\",\"this-week\":\"This Week\",\"last-week\":\"Lat Week\",\"this-month\":\"This Month\",\"conversion-rates\":\"Conversion Rates\",\"per-session\":\"Per Session\",\"profile-status\":\"Profile Status\",\"payment-status\":\"Payment Status\",\"work-progress\":\"Work Progress\",\"tasks-completed\":\"Tasks Completed\",\"payments-done\":\"Payments Done\",\"order-stock\":\"Order - Stock\",\"categories\":\"Categories\",\"quick-post\":\"Quick Post\",\"title\":\"Title\",\"content\":\"Content\",\"category\":\"Category\",\"save-and-publish\":\"Save and Publish\",\"top-viewed-posts\":\"Top Viewed Posts\",\"posts\":\"Posts\",\"pending-for-publish\":\"Pending for publish\",\"users\":\"Users\",\"on-approval-process\":\"On approval process\",\"alerts\":\"Alerts\",\"waiting-for-notice\":\"Waiting for notice\",\"files\":\"Files\",\"pending-for-print\":\"Pending for print\",\"logs\":\"Logs\",\"vien\":\"VIEN\",\"magic-is-in-the-details\":\"MAGIC IS IN THE DETAILS\",\"yes-it-is-indeed\":\"Yes, it is indeed!\",\"advanced-search\":\"Advanced Search\",\"toppings\":\"Toppings\",\"type\":\"Type\",\"keyword\":\"Keyword\",\"search\":\"Search\",\"top-rated-items\":\"Top Rated Items\"},\"pages\":{\"add-new\":\"ADD NEW\",\"add-new-modal-title\":\"Add New Item\",\"display-options\":\"Display Options\",\"orderby\":\"Order By : \",\"product-name\":\"Product Name\",\"category\":\"Category\",\"description\":\"Description\",\"status\":\"Status\",\"cancel\":\"Cancel\",\"submit\":\"Submit\",\"delete\":\"Delete\",\"move\":\"Move\",\"action\":\"Action\",\"another-action\":\"Another action\",\"actions\":\"ACTIONS\",\"header\":\"Header\",\"details\":\"DETAILS\",\"orders\":\"ORDERS\",\"rating\":\"Rating\",\"price\":\"Price\",\"ingredients\":\"Ingredients\",\"is-vegan\":\"Is Vegan\",\"order-status\":\"Order Status\",\"bake-progress\":\"Bake Progress\",\"popularity\":\"Popularity\",\"comments\":\"Comments\",\"error-title\":\"Ooops... looks like an error occurred!\",\"error-code\":\"Error code\",\"go-back-home\":\"GO BACK HOME\",\"invoice-info\":\"Invoice template has an inline styled version for usage outside of the project as well as Angular version.\",\"angular-version\":\"Angular Version\",\"inline-version\":\"Inline Styled Html Version\",\"mailing-info\":\"Mailing templates use inline styling and table layout to be displayed well at various service providers. To provide better usability we include it as regular html with dangerouslySetInnerHTML.\",\"like\":\"Like\",\"likes\":\"Likes\",\"details-title\":\"Details\",\"comments-title\":\"Comments\",\"questions-title\":\"Questions\",\"similar-projects\":\"Similar Projects\",\"send\":\"Send\",\"addComment\":\"Add a comment\",\"location\":\"Location\",\"contact\":\"Contact\",\"responsibilities\":\"Responsibilities\",\"photos\":\"Photos\",\"who-to-follow\":\"Who to Follow\",\"follow\":\"FOLLOW\",\"followers\":\"FOLLOWERS\",\"recent-posts\":\"Recent Posts\",\"profile\":\"PROFILE\",\"friends\":\"FRIENDS\",\"images\":\"IMAGES\",\"purchase\":\"PURCHASE\",\"view-all\":\"View All\",\"prices\":{\"developer\":\"DEVELOPER\",\"team\":\"TEAM\",\"enterprise\":\"ENTERPRISE\",\"twofactorauthentication\":\"Two factor authentication\",\"teampermissions\":\"Team permissions\",\"245Support\":\"24/5 Support\",\"247Support\":\"24/7 Support\",\"useractionsauditlog\":\"User actions audit log\",\"featurecomparison\":\"Feature Comparison\",\"pricecomparison\":\"Price Comparison\"}},\"chat\":{\"messages\":\"Messages\",\"contacts\":\"Contacts\",\"saysomething\":\"Say something..\"},\"survey\":{\"delete\":\"Delete\",\"edit\":\"Edit\",\"add-new\":\"ADD NEW\",\"save\":\"SAVE\",\"add-new-title\":\"Add New Survey\",\"title\":\"Title\",\"category\":\"Category\",\"label\":\"Label\",\"status\":\"Status\",\"cancel\":\"Cancel\",\"submit\":\"Submit\",\"another-action\":\"Another action\",\"display-options\":\"Display Options\",\"orderby\":\"Order By : \",\"all-surveys\":\"All Surveys\",\"completed-surveys\":\"Completed Surveys\",\"categories\":\"Categories\",\"active-surveys\":\"Active Surveys\",\"labels\":\"Labels\",\"details\":\"DETAILS\",\"results\":\"RESULTS\",\"summary\":\"Summary\",\"details-lowercase\":\"Details\",\"add-question\":\"Add Question\",\"quota\":\"Quota\"},\"todo\":{\"add-new\":\"ADD NEW\",\"add-new-title\":\"Add New Todo\",\"title\":\"Title\",\"detail\":\"Detail\",\"category\":\"Category\",\"label\":\"Label\",\"status\":\"Status\",\"cancel\":\"Cancel\",\"submit\":\"Submit\",\"action\":\"Action\",\"another-action\":\"Another action\",\"display-options\":\"Display Options\",\"orderby\":\"Order By : \",\"all-tasks\":\"All Tasks\",\"pending-tasks\":\"Pending Tasks\",\"completed-tasks\":\"Completed Tasks\",\"categories\":\"Categories\",\"labels\":\"Labels\"},\"alert\":{\"rounded\":\"Rounded Alert\",\"react-notifications\":\"React Notifications\",\"outline\":\"Outline\",\"primary\":\"Primary\",\"secondary\":\"Secondary\",\"info\":\"Info\",\"success\":\"Success\",\"warning\":\"Warning\",\"error\":\"Error\",\"filled\":\"Filled\",\"primary-text\":\"This is a primary alert—check it out!\",\"secondary-text\":\"This is a secondary alert—check it out!\",\"success-text\":\"This is a success alert—check it out!\",\"danger-text\":\"This is a danger alert—check it out!\",\"warning-text\":\"This is a warning alert—check it out!\",\"info-text\":\"This is a info alert—check it out!\",\"light-text\":\"This is a light alert—check it out!\",\"dark-text\":\"This is a dark alert—check it out!\",\"default\":\"Default Alert\",\"success-alert\":\"Success Alert\",\"success-alert-text\":\"Works in AfterViewInit\",\"dismissing\":\"Dismissing Alert\",\"dismissing-text\":\"Holy guacamole! You should check in on some of those fields below.\",\"dismissing-without-animate-text\":\"I am an alert and I can be dismissed without animating!\",\"additional-content\":\"Additional Content\",\"well-done\":\"Well done\",\"bootstrap-alerts\":\"Bootstrap Alerts\",\"angular-notifications\":\"Angular 2 Notifications\",\"notification-content\":\"Notification content!\"},\"badge\":{\"sizes\":\"Sizes\",\"colors\":\"Colors\",\"outline\":\"Outline\",\"links\":\"Links\",\"counter-badges\":\"Counter Badges\",\"bootstrap-default\":\"Bootstrap Default\",\"primary\":\"Primary\",\"secondary\":\"Secondary\",\"success\":\"Success\",\"danger\":\"Danger\",\"warning\":\"Warning\",\"info\":\"Info\",\"light\":\"Light\",\"dark\":\"Dark\",\"heading\":\"Example Heading\",\"new\":\"New\"},\"button\":{\"default\":\"Bootstrap Default\",\"colors\":\"Colors\",\"rounded\":\"Rounded\",\"outline\":\"Outline\",\"states\":\"States\",\"sizes\":\"Sizes\",\"button-groups\":\"Button Groups\",\"large-button\":\"Large Button\",\"small-button\":\"Small Button\",\"extra-small-button\":\"Extra Small Button\",\"block-button\":\"Block Button\",\"active\":\"Active\",\"disabled\":\"Disabled\",\"basic\":\"Basic\",\"toolbar\":\"Toolbar\",\"nesting\":\"Nesting\",\"vertical-variation\":\"Vertical Variation\",\"checkbox-radio-button\":\"Checkbox and Radio Button\",\"checkbox\":\"Checkbox\",\"checkbox-single\":\"Checkbox Single\",\"radio\":\"Radio\",\"radio-button\":\"Radio Button\",\"radio-button-uncheckable\":\"Radio Button Uncheckable\",\"primary\":\"Primary\",\"secondary\":\"Secondary\",\"success\":\"Success\",\"danger\":\"Danger\",\"warning\":\"Warning\",\"info\":\"Info\",\"light\":\"Light\",\"dark\":\"Dark\",\"states-text\":\"This button shows a spinner for 2 seconds and an error icon for 3 seconds before switching to normal state.\",\"click-here\":\"Click Here\",\"states-text-alternate\":\"This button shows a spinner for 2 seconds and an error icon for 3 seconds before switching to normal state.\",\"primary-link\":\"Primary Link\",\"link\":\"Link\",\"primary-button\":\"Primary Button\",\"button\":\"Button\",\"left\":\"Left\",\"middle\":\"Middle\",\"right\":\"Right\",\"dropdown\":\"Dropdown\",\"single\":\"Single\",\"dropdown-link\":\"Dropdown Link\"},\"cards\":{\"icon-card\":\"Icon Card\",\"image-card\":\"Image Card\",\"image-overlay-card\":\"Image Overlay Card\",\"image-card-list\":\"Image Card List\",\"tab-card\":\"Tab Card\",\"user-card\":\"User Card\",\"cake-text-1\":\"Chocolate Cake\",\"cake-text-2\":\"Homemade Cheesecake with Fresh Berries and Mint\",\"cake-text-3\":\"Fruitcake\",\"cake-text-4\":\"Cupcakes\",\"cake-text-5\":\"Wedding Cake with Flowers Macarons and Blueberries\",\"cake-text-6\":\"Cheesecake with Chocolate Cookies and Cream Biscuits\",\"badge-1\":\"NEW\",\"badge-2\":\"TRENDING\",\"badge-3\":\"ON HOLD\",\"edit\":\"Edit\"},\"carousel\":{\"glide-basic\":\"Glide Basic\",\"glide-centered\":\"Glide Centered\",\"glide-single\":\"Glide Single\",\"without-controls\":\"Carousel Without Controls\"},\"charts\":{\"line\":\"Line Chart\",\"polar\":\"Polar Chart\",\"area\":\"Area Chart\",\"scatter\":\"Scatter Chart\",\"bar\":\"Bar Chart\",\"radar\":\"Radar Chart\",\"pie\":\"Pie Chart\",\"doughnut\":\"Doughnut Chart\",\"shadow\":\"Shadow\",\"no-shadow\":\"No Shadow\"},\"collapse\":{\"basic\":\"Basic\",\"toggle\":\"Toggle\",\"accordion\":\"Accordion\",\"animation\":\"Animation\",\"manual-toggle\":\"Manual Toggle\",\"dynamic-accordion\":\"Dynamic Accordion\",\"close-others\":\"Close Others\",\"add-group-item\":\"Add Group Item\",\"first-group\":\"First Group\",\"second-group\":\"Second Group\",\"third-group\":\"Third Group\",\"events\":\"Events\",\"event\":\"Event\",\"inline\":\"Inline\",\"show\":\"Show\",\"hide\":\"Hide\"},\"dropdowns\":{\"basic\":\"Basic\",\"controlled\":\"Controlled\",\"uncontrolled\":\"Uncontrolled\",\"dropdown\":\"Dropdown\",\"header\":\"Header\",\"action\":\"Action\",\"another-action\":\"Another Action\",\"right\":\"Right\",\"left\":\"Left\",\"drop-directions\":\"Drop Directions\",\"dropright\":\"Dropright\",\"dropleft\":\"Dropleft\",\"small-button\":\"Small Button\",\"large-button\":\"Large Button\",\"sizing\":\"Sizing\",\"split\":\"Split\",\"split-button\":\"Split Button Dropdowns\",\"dropup\":\"Dropup\",\"anchor\":\"Anchor\",\"manual-triggering\":\"Manual Triggering\",\"trigger-isopen\":\"Trigger isOpen\",\"disabled\":\"Disabled\",\"alignment\":\"Alignment\"},\"editors\":{\"quill-standart\":\"Quill Standard\",\"quill-bubble\":\"Quill Bubble\"},\"forms\":{\"basic\":\"Basic\",\"email\":\"E-mail\",\"email-muted\":\"We'll never share your email with anyone else.\",\"password\":\"Password\",\"custom-checkbox\":\"Check this custom checkbox\",\"age\":\"Age\",\"submit\":\"Submit\",\"horizontal\":\"Horizontal\",\"radios\":\"Radios\",\"first-radio\":\"First radio\",\"second-radio\":\"Second radio\",\"third-radio-disabled\":\"Third disabled radio\",\"checkbox\":\"Checkbox\",\"checkbox-example\":\"Checkbox example\",\"signin\":\"Sign in\",\"top-labels-over-line\":\"Top Labels Over Line\",\"tags\":\"Tags\",\"date\":\"Date\",\"state\":\"State\",\"top-labels-in-input\":\"Top Labels In Input\",\"email-u\":\"E-MAIL\",\"password-u\":\"PASSWORD\",\"tags-u\":\"TAGS\",\"date-u\":\"DATE\",\"state-u\":\"STATE\",\"grid\":\"Form Grid\",\"address\":\"Address\",\"address2\":\"Address 2\",\"city\":\"City\",\"city-message\":\"Please select a city!\",\"state-message\":\"Please select a state!\",\"zip\":\"Zip\",\"signup\":\"Signup\",\"inline\":\"Inline\",\"validation\":\"Validation\",\"default\":\"Default\",\"firstname\":\"First name\",\"firstname-message\":\"Please enter your first name!\",\"lastname\":\"Last name\",\"lastname-message\":\"Please enter your last name!\",\"password-confirm\":\"Confirm Password\",\"validation-bootstrap\":\"Bootstrap Validation\",\"name\":\"Name\",\"remember-me\":\"Remember me\",\"details\":\"Details\",\"options\":\"Options\",\"rank\":\"Rank\",\"common-rules\":\"Common Rules\",\"email-confirm\":\"Email Confirm\",\"external-components\":\"External Components\"},\"form-components\":{\"custom-inputs\":\"Custom Inputs\",\"checkboxes\":\"Checkboxes\",\"radios\":\"Radios\",\"inline\":\"Inline\",\"date-picker\":\"Date Picker\",\"date\":\"Date\",\"date-range\":\"Date Range\",\"disabled-dates\":\"Disabled Dates\",\"embedded\":\"Embedded\",\"drop-files-here\":\"Drop Files Here\",\"tags\":\"Tags\",\"switch\":\"Switch\",\"primary\":\"Primary\",\"secondary\":\"Secondary\",\"primary-inverse\":\"Primary Inverse\",\"secondary-inverse\":\"Secondary Inverse\",\"slider\":\"Slider\",\"double-slider\":\"Double Slider\",\"single-slider\":\"Single Slider\",\"rating\":\"Rating\",\"interactive\":\"Interactive\",\"readonly\":\"Readonly\",\"type-a-cake\":\"Type a Cake\",\"start\":\"Start\",\"end\":\"End\",\"disabled\":\"Disabled\",\"select\":\"NgSelect\",\"basic\":\"Basic\",\"single\":\"Single\",\"multiple\":\"Multiple\",\"async\":\"Async\",\"ajax\":\"Ajax\",\"search\":\"Search\",\"search-async\":\"Search Async\",\"locale\":\"Locale\",\"timepicker\":\"Timepicker\",\"seconds\":\"Seconds\",\"mouse-wheel\":\"Mouse Wheel\",\"custom-steps\":\"Custom Steps\",\"dropzone\":\"Dropzone\",\"dropzone-message\":\"Click or drag images here to upload\"},\"icons\":{\"simplelineicons\":\"Simple Line Icons\",\"iconsmind\":\"Iconsmind Icons\"},\"input-groups\":{\"basic\":\"Basic\",\"sizing\":\"Sizing\",\"small\":\"Small\",\"default\":\"Default\",\"large\":\"Large\",\"checkboxes-and-radios\":\"Checkboxes and radios\",\"multiple-inputs\":\"Multiple Inputs\",\"first-and-last-name\":\"First and last name\",\"multiple-addons\":\"Multiple Addons\",\"button-addons\":\"Button Addons\",\"button\":\"Button\",\"buttons-with-dropdowns\":\"Buttons with Dropdowns\",\"segmented-buttons\":\"Segmented Buttons\",\"dropdown\":\"Dropdown\",\"header\":\"Header\",\"action\":\"Action\",\"another-action\":\"Another Action\",\"custom-select\":\"Custom Select\",\"options\":\"Options\",\"choose\":\"Choose...\",\"custom-file-input\":\"Custom File Input\",\"upload\":\"Upload\",\"choose-file\":\"Choose a file\",\"with-text-area\":\"With textarea\"},\"jumbotron\":{\"hello-world\":\"Hello, world!\",\"lead\":\"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.\",\"lead-detail\":\"It uses utility classes for typography and spacing to space content out within the larger container.\",\"learn-more\":\"Learn more\"},\"modal\":{\"basic\":\"Basic\",\"modal-title\":\"Modal Title\",\"modal-content\":\"Modal Content\",\"launch-demo-modal\":\"Launch Demo Modal\",\"scrolling-long-content\":\"Scrolling Long Content\",\"backdrop\":\"Backdrop\",\"disable-backdrop\":\"Disable Backdrop\",\"enable-backdrop\":\"Enable Backdrop\",\"disable-backdrop-click\":\"Disable Backdrop Click\",\"enable-backdrop-click\":\"Enable Backdrop Click\",\"right-modal\":\"Right Modal\",\"launch-right-modal\":\"Launch Right Modal\",\"nested\":\"Nested\",\"size\":\"Size\",\"launch-large-modal\":\"Launch Large Modal\",\"launch-small-modal\":\"Launch Small Modal\",\"template\":\"Template\",\"component\":\"Component\",\"events\":\"Events\",\"confirm\":\"Confirm\",\"custom-css\":\"Custom CSS\",\"animation\":\"Animation\",\"disable-animation\":\"Disable Animation\",\"enable-animation\":\"Enable Animation\",\"esc\":\"Esc\",\"disable-esc\":\"Disable Esc\",\"enable-esc\":\"Enable Esc\",\"popover-tooltip\":\"Popover & Tooltip\",\"popover\":\"Popover\",\"tooltip\":\"Tooltip\",\"change-class\":\"Change Class\",\"directive\":\"Directive\",\"child\":\"Child\",\"create-template\":\"Create Template\",\"create-component\":\"Create Component\",\"first-modal\":\"First Modal\",\"second-modal\":\"Second Modal\",\"open-first-modal\":\"Open First Modal\",\"open-second-modal\":\"Open Second Modal\",\"close-first-modal\":\"Close First Modal\",\"close\":\"Close\",\"open-modal\":\"Open Modal\",\"confirm-message\":\"Do you want to confirm?\",\"yes\":\"Yes\",\"no\":\"No\",\"view-child\":\"ViewChild\"},\"pagination\":{\"basic\":\"Basic\",\"manual-switch\":\"Manual Switching Page\",\"change-event\":\"Page Change Event\",\"boundary-links\":\"Boundary Links\",\"direction-links\":\"Direction Links\",\"disabled\":\"Disabled\",\"limits\":\"Limits\",\"centering\":\"Centering\",\"small\":\"Small\"},\"nav\":{\"basic\":\"Nav Basic\",\"active\":\"Active\",\"disabled\":\"Disabled\",\"disabled-link\":\"Disabled Link\",\"link\":\"Link\",\"longer-link\":\"Longer nav link\",\"another-link\":\"Another Link\",\"right\":\"Right\",\"dropdown\":\"Dropdown\",\"header\":\"Header\",\"action\":\"Action\",\"another-action\":\"Another Action\",\"horizontal-alignment\":\"Nav Horizontal Alignment\",\"vertical-alignment\":\"Nav Vertical Alignment\",\"pills\":\"Nav Pills\",\"fill-justify\":\"Nav Fill and Justify\",\"pills-dropdowns\":\"Nav Pills with Dropdowns\",\"large\":\"Large\",\"small\":\"Small\",\"center\":\"Center\",\"breadcrumb-basic\":\"Breadcrumb Basic\"},\"popover-tooltip\":{\"popover\":\"Popover\",\"tooltip\":\"Tooltip\",\"top\":\"Top\",\"bottom\":\"Bottom\",\"right\":\"Right\",\"left\":\"Left\",\"auto\":\"Auto\"},\"sortable\":{\"columns\":\"Sorting Columns\",\"basic\":\"Basic\",\"handles\":\"Handles\",\"event\":\"Event\"},\"maps\":{\"google\":\"Google\",\"yandex\":\"Yandex\"},\"table\":{\"bootstrap-tables\":\"Bootstrap Tables\",\"bootstrap-basic\":\"Basic Table\",\"bootstrap-light\":\"Light Heading\",\"bootstrap-striped\":\"Striped Rows\",\"bootstrap-bordered\":\"Bordered Table\",\"bootstrap-borderless\":\"Borderless Table\",\"bootstrap-hoverable\":\"Hoverable Rows\"},\"wizard\":{\"step-name-1\":\"Step 1\",\"step-name-2\":\"Step 2\",\"step-name-3\":\"Step 3\",\"step-desc-1\":\"First step description\",\"step-desc-2\":\"Second step description\",\"step-desc-3\":\"Third step description\",\"content-1\":\"Step content for first step.\",\"content-2\":\"Step content for second step.\",\"content-3\":\"Last step content!\",\"content-thanks\":\"Thank You!\",\"next\":\"Next\",\"prev\":\"Back\",\"registered\":\"Your registration completed successfully!\",\"validation\":\"Validation\",\"basic\":\"Basic\",\"last-end\":\"Last Step End\",\"done\":\"Done\",\"icons\":\"Icons\",\"saving\":\"Saving...\",\"vertical\":\"Vertical\"}}");

/***/ }),

/***/ "./src/lang/es-ES.json":
/*!*****************************!*\
  !*** ./src/lang/es-ES.json ***!
  \*****************************/
/*! exports provided: general, user, menu, dashboards, pages, chat, survey, todo, alert, badge, button, cards, carousel, charts, collapse, dropdowns, editors, forms, form-components, icons, input-groups, jumbotron, modal, pagination, nav, popover-tooltip, sortable, maps, table, wizard, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"general\":{\"copyright\":\"Vien Angular © 2020 All Rights Reserved.\"},\"user\":{\"login-title\":\"Iniciar sesión\",\"register\":\"Registro\",\"forgot-password\":\"Se te olvidó tu contraseña\",\"email\":\"E-mail\",\"password\":\"Contraseña\",\"password-again\":\"Contraseña Again\",\"forgot-password-question\":\"¿Contraseña olvidada?\",\"fullname\":\"Nombre completo\",\"login-button\":\"Iniciar sesión\",\"register-button\":\"Registiro\",\"reset-password-button\":\"Reiniciar\",\"buy\":\"COMPRAR\",\"username\":\"Nombre de Usuario\",\"code\":\"Restablecer Código\"},\"menu\":{\"home\":\"Inicio\",\"app\":\"Inicio\",\"dashboards\":\"Tableros\",\"default\":\"Defecto\",\"analytics\":\"Analítica\",\"ecommerce\":\"Comercio electrónico\",\"content\":\"Contenido\",\"pages\":\"Páginas\",\"data-list\":\"Lista Datos\",\"thumb-list\":\"Lista Pulgares\",\"image-list\":\"Lista Imagen\",\"details\":\"Detalles\",\"search\":\"Búsqueda\",\"invoice\":\"Factura\",\"mailing\":\"Envío\",\"login\":\"Iniciar sesión\",\"register\":\"Registro\",\"forgot-password\":\"Olvidé mi contraseña\",\"reset-password\":\"Reiniciar contraseña\",\"error\":\"Error\",\"applications\":\"Aplicaciones\",\"todo\":\"Notas\",\"library\":\"Library\",\"survey\":\"Encuesta\",\"survey-detail\":\"Encuesta Detalle\",\"chat\":\"Chatea\",\"ui\":\"IU\",\"alerts\":\"Alertas\",\"badges\":\"Badges\",\"buttons\":\"Botones\",\"cards\":\"Tarjetas\",\"carousel\":\"Carrusel\",\"charts\":\"Gráficos\",\"collapse\":\"Colapso\",\"datatables\":\"Datatables\",\"fullpage\":\"Página Completa\",\"scrollable\":\"Desplazable\",\"responsive\":\"Responsivo\",\"dropdowns\":\"Menús Desplegables\",\"editors\":\"Editores\",\"forms\":\"Formularios\",\"form-components\":\"Componentes\",\"icons\":\"Iconos\",\"input-groups\":\"Grupos de Entrada\",\"jumbotron\":\"Jumbotron\",\"modal\":\"Modal\",\"navigation\":\"Navegación\",\"pagination\":\"Paginación\",\"popover-tooltip\":\"Tooltips y Popovers\",\"sortable\":\"Ordenable\",\"menu\":\"Menú\",\"subhidden\":\"Sub Oculto\",\"hidden\":\"Oculto\",\"visible\":\"Visible\",\"tables\":\"Tables\",\"maps\":\"Maps\",\"landingpage\":\"Página de Destino\",\"multipage-home\":\"Múltiple Página\",\"singlepage-home\":\"Una Página\",\"about\":\"Acerca de\",\"auth-login\":\"Autenticación\",\"auth-register\":\"Registro\",\"blog\":\"Blog\",\"blog-list\":\"Blog List\",\"blog-detail\":\"Detalle del Blog\",\"careers\":\"Carrera\",\"confirmation\":\"Confirmación\",\"contact\":\"Contacto\",\"docs\":\"Docs\",\"features\":\"Caracteristicas\",\"prices\":\"Precios\",\"videos\":\"Videos\",\"blank-page\":\"Blank Page\",\"types\":\"Menu Types\",\"levels\":\"Menu Levels\",\"third-level-1\":\"Third Level 1\",\"third-level-2\":\"Third Level 2\",\"third-level-3\":\"Third Level 3\",\"faq\":\"Pmf\",\"knowledge-base\":\"Base de Conocimientos\",\"authorization\":\"Authorization\",\"profile\":\"Profile\",\"product\":\"Producto\",\"miscellaneous\":\"Diversa\",\"portfolio\":\"Portafolio\",\"social\":\"Social\",\"details-alt\":\"Detalles Alt\",\"components\":\"Componentes\",\"layouts\":\"Diseños\",\"validations\":\"Validaciones\",\"wizard\":\"Mago\",\"form-layouts\":\"Diseños de Formulario\",\"form-validations\":\"Validaciones de Formulario\",\"form-wizard\":\"Asistente de Formulario\"},\"dashboards\":{\"pending-orders\":\"Pedidos Pendientes\",\"completed-orders\":\"Pedidos Completados\",\"refund-requests\":\"Petición de Reembolso\",\"new-comments\":\"Nuevos Comentarios\",\"sales\":\"Ventas\",\"orders\":\"Pedidos\",\"refunds\":\"Reembolso\",\"recent-orders\":\"Pedidos Recientas\",\"product-categories\":\"Categorías de Producto\",\"cakes\":\"Tortas\",\"tickets\":\"Entradas\",\"calendar\":\"Calendario\",\"best-sellers\":\"Mejores Vendidos\",\"website-visits\":\"Visitas al sitio web\",\"unique-visitors\":\"Visitantes únicos\",\"this-week\":\"Esta Semana\",\"last-week\":\"La Semana Pasada\",\"this-month\":\"Este Mes\",\"conversion-rates\":\"Medidas de Conversión\",\"per-session\":\"Por Sección\",\"profile-status\":\"Estado del Perfil\",\"payment-status\":\"Estado del Pago\",\"work-progress\":\"Trabajo en Progreso\",\"tasks-completed\":\"Tareas Completadas\",\"payments-done\":\"Pagos Realizados\",\"order-stock\":\"Pedidos - Valores\",\"categories\":\"Categorías\",\"quick-post\":\"Publicación Rápida\",\"title\":\"Título\",\"content\":\"Contenido\",\"category\":\"Categoría\",\"save-and-publish\":\"Guardar y Publicar\",\"top-viewed-posts\":\"Publicaciones Más Vistas\",\"posts\":\"Puestos\",\"pending-for-publish\":\"Pendiente de Publicación\",\"users\":\"Usuarios\",\"on-approval-process\":\"En Proceso de Aprobación\",\"alerts\":\"Alertas\",\"accordion\":\"Accordion\",\"waiting-for-notice\":\"Esperando Aviso\",\"files\":\"Archivos\",\"pending-for-print\":\"Pendiente para imprimir\",\"logs\":\"Troncos\",\"vien\":\"VIEN\",\"magic-is-in-the-details\":\"LA MAGIA ESTA EN LOS DETALLES\",\"yes-it-is-indeed\":\"¡Si es verdad!\",\"advanced-search\":\"Búsqueda Avanzada\",\"toppings\":\"Coberturas\",\"type\":\"Categoría\",\"keyword\":\"Palabra Clave\",\"search\":\"Búsqueda\",\"top-rated-items\":\"Artículos Mejores Valorados\"},\"pages\":{\"add-new\":\"AGREGAR NUEVO\",\"add-new-modal-title\":\"Agregar ítem nuevo\",\"display-options\":\"Opciones de Pantalla\",\"orderby\":\"Ordenar por : \",\"product-name\":\"Nombre del Producto\",\"category\":\"Categoría\",\"description\":\"Descripción\",\"status\":\"Estado\",\"cancel\":\"Cancelar\",\"submit\":\"Enviar\",\"delete\":\"Borrar\",\"move\":\"Moverse\",\"action\":\"Accion\",\"another-action\":\"Otra accion\",\"actions\":\"ACCIONES\",\"header\":\"Encabezado\",\"details\":\"DETALLES\",\"orders\":\"PEDIDOS\",\"rating\":\"Clasificación\",\"price\":\"Precio\",\"ingredients\":\"Ingredients\",\"is-vegan\":\"Es Vegano\",\"order-status\":\"Estado del Pedido\",\"bake-progress\":\"Progreso de Hornear\",\"popularity\":\"Popularidad\",\"comments\":\"Comentarios\",\"error-title\":\"Vaya, parece que ha ocurrido un error!\",\"error-code\":\"Código de error\",\"go-back-home\":\"REGRESAR A INICIO\",\"invoice-info\":\"Invoice template has an inline styled version for usage outside of the project as well as Anguular version.\",\"angular-version\":\"Angular Version\",\"inline-version\":\"Inline Styled Html Version\",\"mailing-info\":\"Mailing templates use inline styling and table layout to be displayed well at various service providers. To provide better usability we include it as regular html with dangerouslySetInnerHTML.\",\"like\":\"Me gusta\",\"likes\":\"Me gusta\",\"details-title\":\"Detalles\",\"comments-title\":\"Comentarios\",\"questions-title\":\"Preguntas\",\"similar-projects\":\"Proyectos Similares\",\"send\":\"Enviar\",\"addComment\":\"Añadir un comentario\",\"contact\":\"Contacto\",\"location\":\"Ubicación\",\"responsibilities\":\"Responsabilidades\",\"photos\":\"Fotos\",\"who-to-follow\":\"A quién seguir\",\"follow\":\"SEGUIR\",\"followers\":\"SEGUIDORES\",\"recent-posts\":\"Mensajes Recientes\",\"profile\":\"PERFIL\",\"friends\":\"AMIGOS\",\"images\":\"IMAGENES\",\"purchase\":\"COMPRA\",\"view-all\":\"Ver Todo\",\"prices\":{\"developer\":\"REVELADOR\",\"team\":\"EQUIPO\",\"enterprise\":\"EMPRESA\",\"twofactorauthentication\":\"Autenticación de dos factores\",\"teampermissions\":\"Permisos del equipo\",\"245Support\":\"24/5 Soporte\",\"247Support\":\"24/7 Soporte\",\"useractionsauditlog\":\"Registro de acciones del usuario\",\"featurecomparison\":\"Comparación de Características\",\"pricecomparison\":\"Comparación de Precios\"}},\"chat\":{\"messages\":\"Mensajes\",\"contacts\":\"Contactos\",\"saysomething\":\"Di algo..\"},\"survey\":{\"delete\":\"Borrar\",\"edit\":\"Edit\",\"add-new\":\"AGREGAR NUEVO\",\"add-new-title\":\"Add New Encuesta\",\"title\":\"Título\",\"category\":\"Categoría\",\"label\":\"Etiqueta\",\"status\":\"Estado\",\"cancel\":\"Cancelar\",\"submit\":\"Enviar\",\"another-action\":\"Otra accion\",\"display-options\":\"Opciones de Pantalla\",\"orderby\":\"Ordenar por : \",\"all-surveys\":\"Todas las Encuestas\",\"completed-surveys\":\"Encuestas Completadas\",\"categories\":\"Categorías\",\"active-surveys\":\"Encuestas Activas\",\"labels\":\"Etiquetas\",\"save\":\"SAVE\",\"details\":\"DETALLES\",\"results\":\"RESULTS\",\"summary\":\"Summary\",\"details-lowercase\":\"Detalles\",\"add-question\":\"Add Question\",\"quota\":\"Quota\"},\"todo\":{\"add-new\":\"AGREGAR NUEVO\",\"add-new-title\":\"Añadir Nuevo\",\"title\":\"Título\",\"detail\":\"Detalle\",\"category\":\"Categoría\",\"label\":\"Etiqueta\",\"status\":\"Estado\",\"cancel\":\"Cancelar\",\"submit\":\"Enviar\",\"action\":\"Accion\",\"another-action\":\"Otra accion\",\"display-options\":\"Opciones de Pantalla\",\"orderby\":\"Ordenar por : \",\"all-tasks\":\"Todas las Tareas\",\"pending-tasks\":\"Tareas Pendientes\",\"completed-tasks\":\"Tareas Completadas\",\"categories\":\"Categorías\",\"labels\":\"Etiquetas\"},\"alert\":{\"rounded\":\"Alerta Redondeado\",\"react-notifications\":\"React Notificaciones\",\"outline\":\"Contorno\",\"primary\":\"Primary\",\"secondary\":\"Secondary\",\"info\":\"Info\",\"success\":\"Success\",\"warning\":\"Warning\",\"error\":\"Error\",\"filled\":\"Lleno\",\"primary-text\":\"¡Esto es un primary alert—check fuera!\",\"secondary-text\":\"¡Esto es un secondary alert—check fuera!\",\"success-text\":\"¡Esto es un success alert—check fuera!\",\"danger-text\":\"¡Esto es un danger alert—check fuera!\",\"warning-text\":\"¡Esto es un warning alert—check fuera!\",\"info-text\":\"¡Esto es un info alert—check fuera!\",\"light-text\":\"¡Esto es un light alert—check fuera!\",\"dark-text\":\"¡Esto es un dark alert—check fuera!\",\"default\":\"Alerta por Defecto\",\"success-alert\":\"Alerta de Éxito\",\"success-alert-text\":\"Funciona en AfterViewInit\",\"dismissing\":\"Despido de Alerta\",\"dismissing-text\":\"¡Santo guacamole! Debes revisar algunos de esos campos a continuación.\",\"dismissing-without-animate-text\":\"¡Estoy alerta y me pueden despedir sin animarme!\",\"additional-content\":\"Contenido Adicional\",\"well-done\":\"Bien hecho\",\"bootstrap-alerts\":\"Bootstrap Alerta\",\"angular-notifications\":\"Angular 2 Notifications\",\"notification-content\":\"¡Contenido de la notificación!\"},\"badge\":{\"sizes\":\"Tamaños\",\"colors\":\"Colores\",\"outline\":\"Contorno\",\"links\":\"Enlaces\",\"counter-badges\":\"Mostrador Badges\",\"bootstrap-default\":\"Bootstrap Defecto\",\"primary\":\"Primary\",\"secondary\":\"Secondary\",\"success\":\"Success\",\"danger\":\"Danger\",\"warning\":\"Warning\",\"info\":\"Info\",\"light\":\"Light\",\"dark\":\"Dark\",\"heading\":\"Encabezado de Ejemplo\",\"new\":\"Nueva\"},\"button\":{\"default\":\"Bootstrap Defecto\",\"colors\":\"Colores\",\"rounded\":\"Botones Redondeado\",\"outline\":\"Contorno\",\"states\":\"Estados\",\"sizes\":\"Tamaños\",\"button-groups\":\"Grupos de Botones\",\"large-button\":\"Botón Grande\",\"small-button\":\"Botón Pequeño\",\"extra-small-button\":\"Botón Extra Pequeño\",\"block-button\":\"Botón de Bloqueo\",\"active\":\"Activo\",\"disabled\":\"Discapacitado\",\"basic\":\"Básico\",\"toolbar\":\"Barra de Herramientas\",\"nesting\":\"Anidando\",\"vertical-variation\":\"Variación Vertical\",\"checkbox-radio-button\":\"Checkbox  y Radio Buttons\",\"checkbox\":\"Checkbox\",\"checkbox-single\":\"Checkbox Solo\",\"radio\":\"Radio\",\"radio-button\":\"Radio Button\",\"radio-button-uncheckable\":\"Radio Button No Verificable\",\"primary\":\"Primary\",\"secondary\":\"Secondary\",\"success\":\"Success\",\"danger\":\"Danger\",\"warning\":\"Warning\",\"info\":\"Info\",\"light\":\"Light\",\"dark\":\"Dark\",\"states-text\":\"Este botón muestra una rueda giratoria durante 2 segundos y un icono de error durante 3 segundos antes de cambiar al estado normal.\",\"click-here\":\"Haga clic aquí\",\"states-text-alternate\":\"Este botón muestra una rueda giratoria durante 2 segundos y un icono de error durante 3 segundos antes de cambiar al estado normal.\",\"primary-link\":\"Primary Enlace\",\"link\":\"Enlace\",\"primary-button\":\"Primary Botón\",\"button\":\"Botón\",\"left\":\"Izquierda\",\"middle\":\"Centro\",\"right\":\"Derecha\",\"dropdown\":\"Desplegable\",\"single\":\"Solo\",\"dropdown-link\":\"Enlace Desplegable\"},\"cards\":{\"icon-card\":\"Tarjeta de Icono\",\"image-card\":\"Tarjeta de Imagen\",\"image-overlay-card\":\"Tarjeta de Superposición de Imágenes\",\"image-card-list\":\"Lista de Tarjetas de Imagen\",\"tab-card\":\"Tarjeta de Tab\",\"user-card\":\"Tarjeta de Usuario\",\"cake-text-1\":\"Pastel de Chocolate\",\"cake-text-2\":\"Tarta de Queso Casera Con Bayas Frescas y Menta\",\"cake-text-3\":\"Pastel de Frutas\",\"cake-text-4\":\"Magdalenas\",\"cake-text-5\":\"Pastel de Bodas Con Macarons de Flores y Arándanos\",\"cake-text-6\":\"Tarta de Queso con Galletas de Chocolate y Galletas de Crema\",\"badge-1\":\"NUEVO\",\"badge-2\":\"TENDENCIAS\",\"badge-3\":\"EN ESPERA\",\"edit\":\"Editar\"},\"carousel\":{\"glide-basic\":\"Glide Básico\",\"glide-centered\":\"Glide Centrado\",\"glide-single\":\"Glide Sola\",\"without-controls\":\"Carrusel sin Control\"},\"charts\":{\"line\":\"Gráfico de Linea\",\"polar\":\"Gráfico de Polar\",\"area\":\"Gráfico de Área\",\"scatter\":\"Gráfico de Dispersión\",\"bar\":\"Gráfico de Barras\",\"radar\":\"Gráfico de Radar\",\"pie\":\"Gráfico de Circular\",\"doughnut\":\"Gráfico de Rosquilla\",\"shadow\":\"Sombra\",\"no-shadow\":\"Sin Sombra\"},\"collapse\":{\"basic\":\"Básico\",\"toggle\":\"Palanca\",\"accordion\":\"Acordeón\",\"manual-toggle\":\"Palanca Manual\",\"animation\":\"Animación\",\"dynamic-accordion\":\"Dinámico Acordeón\",\"close-others\":\"Cerrar Otros\",\"add-group-item\":\"Agregar elemento de grupo\",\"first-group\":\"Primer Grupo\",\"second-group\":\"Segundo Grupo\",\"third-group\":\"Tercer Grupo\",\"events\":\"Eventos\",\"event\":\"Evento\",\"inline\":\"En Línea\",\"show\":\"Mostrar\",\"hide\":\"Esconder\"},\"dropdowns\":{\"basic\":\"Básico\",\"controlled\":\"Revisado\",\"uncontrolled\":\"Sin Control\",\"dropdown\":\"Desplegable\",\"header\":\"Encabezado\",\"action\":\"Accion\",\"another-action\":\"Otra accion\",\"right\":\"Derecha\",\"left\":\"Izquierda\",\"drop-directions\":\"Direcciones de drop\",\"dropright\":\"Drop Derecha\",\"dropleft\":\"Drop Izquierda\",\"small-button\":\"Botón Pequeño\",\"large-button\":\"Botón Grande\",\"sizing\":\"Dimensionamiento\",\"split\":\"Split\",\"split-button\":\"División\",\"dropup\":\"Dropup\",\"anchor\":\"Ancla\",\"manual-triggering\":\"Disparo Manual\",\"trigger-isopen\":\"Disparo isOpen\",\"disabled\":\"Discapacitado\",\"alignment\":\"Alineación\"},\"editors\":{\"quill-standart\":\"Quill Estándar\",\"quill-bubble\":\"Quill Burbuja\"},\"forms\":{\"basic\":\"Básico\",\"email\":\"Email\",\"email-muted\":\"Nunca compartiremos tu email con nadie más.\",\"password\":\"Contraseña\",\"submit\":\"Enviar\",\"horizontal\":\"Horizontal\",\"radios\":\"Radios\",\"first-radio\":\"Primero radio\",\"second-radio\":\"Segundo radio\",\"third-radio-disabled\":\"Tercera radio deshabilitada\",\"checkbox\":\"Checkbox\",\"checkbox-example\":\"Checkbox ejemplo\",\"signin\":\"Registrarse\",\"top-labels-over-line\":\"Etiquetas Superiores Sobre la Línea\",\"tags\":\"Etiquetas\",\"date\":\"Fecha\",\"state\":\"Estado\",\"top-labels-in-input\":\"Etiquetas Superiores Sobre la Entrada\",\"email-u\":\"EMAIL\",\"password-u\":\"CONTRASEÑA\",\"tags-u\":\"ETIQUETAS\",\"date-u\":\"FECHA\",\"state-u\":\"ESTADO\",\"grid\":\"Cuadrícula de Formulario\",\"address\":\"Dirección\",\"address2\":\"Dirección 2\",\"city\":\"Ciudad\",\"city-message\":\"Por favor seleccione una ciudad!\",\"state-message\":\"Por favor seleccione un estado!\",\"zip\":\"Código Postal\",\"signup\":\"Regístrate\",\"inline\":\"Inline\",\"validation\":\"Validación\",\"default\":\"Defecto\",\"firstname\":\"Nombre de Pila\",\"firstname-message\":\"¡Por favor, introduzca su nombre de pila!\",\"lastname\":\"Apellido\",\"lastname-message\":\"¡Por favor ingrese su apellido!\",\"custom-checkbox\":\"Marque esta casilla de verificación personalizada\",\"age\":\"Años\",\"password-confirm\":\"Confirm Password\",\"validation-bootstrap\":\"Bootstrap Validation\",\"name\":\"Name\",\"remember-me\":\"Recuérdame\",\"details\":\"Detalles\",\"options\":\"Opciones\",\"rank\":\"Rango\",\"common-rules\":\"Reglas Comunes\",\"email-confirm\":\"Email Confirmar\",\"external-components\":\"Componentes Externos\"},\"form-components\":{\"custom-inputs\":\"Entrada Personalizada\",\"checkboxes\":\"Checkboxes\",\"radios\":\"Radios\",\"inline\":\"Inline\",\"date-picker\":\"Selector de Fechas\",\"date\":\"Fecha\",\"date-range\":\"Rango de Fechas\",\"disabled-dates\":\"Discapacitado Fechas\",\"embedded\":\"Incrustado\",\"fine-uploader\":\"Fine Uploader\",\"drop-files-here\":\"Soltar Archivos Aquí\",\"tags\":\"Etiquetas\",\"switch\":\"Cambiar\",\"primary\":\"Primary\",\"secondary\":\"Secondary\",\"primary-inverse\":\"Primary Inverso\",\"secondary-inverse\":\"Secondary Inverso\",\"slider\":\"Deslizador\",\"double-slider\":\"Doble Deslizador\",\"single-slider\":\"Único Deslizador\",\"rating\":\"Clasificación\",\"interactive\":\"Interactivo\",\"readonly\":\"Solo Lectura\",\"type-a-cake\":\"Escribe un pastel\",\"start\":\"Comienzo\",\"end\":\"Fin\",\"disabled\":\"Discapacitado\",\"select\":\"Select\",\"basic\":\"Básico\",\"single\":\"Soltero\",\"multiple\":\"Múltiple\",\"async\":\"Async\",\"ajax\":\"Ajax\",\"search\":\"Buscar\",\"search-async\":\"Buscar Async\",\"locale\":\"Localización\",\"timepicker\":\"Timepicker\",\"seconds\":\"Segundos\",\"mouse-wheel\":\"Mouse Wheel\",\"custom-steps\":\"Rueda de Ratón\",\"dropzone\":\"Dropzone\",\"dropzone-message\":\"Haga clic o arrastre las imágenes aquí para cargar\"},\"icons\":{\"simplelineicons\":\"Simple Line Iconos\",\"iconsmind\":\"Iconsmind Iconos\"},\"input-groups\":{\"basic\":\"Básico\",\"sizing\":\"Dimensionamiento\",\"small\":\"Pequeño\",\"default\":\"Defecto\",\"large\":\"Grande\",\"checkboxes-and-radios\":\"Checkboxes y radios\",\"multiple-inputs\":\"Entradas Múltiples\",\"first-and-last-name\":\"Nombre y apellido\",\"multiple-addons\":\"Complementos Múltiples\",\"button-addons\":\"Complementos Botón\",\"button\":\"Botón\",\"buttons-with-dropdowns\":\"Botones y Desplegables\",\"dropdown\":\"Desplegable\",\"header\":\"Encabezado\",\"action\":\"Accion\",\"another-action\":\"Otra accion\",\"custom-select\":\"Personalizada Select\",\"options\":\"Opciones\",\"choose\":\"Escoger...\",\"custom-file-input\":\"Entrada de Archivo Personalizada\",\"segmented-buttons\":\"Segmented Buttons\",\"upload\":\"Upload\",\"choose-file\":\"Escoge un archivo\",\"with-text-area\":\"Con textarea\"},\"jumbotron\":{\"hello-world\":\"¡Hola Mundo!\",\"lead\":\"Esta es una unidad de héroe simple, un componente de estilo jumbotron simple para llamar la atención extra al contenido o información destacados.\",\"lead-detail\":\"Utiliza clases de utilidad para tipografía y espaciado para espaciar el contenido dentro del contenedor más grande.\",\"learn-more\":\"Aprende más\"},\"modal\":{\"basic\":\"Básico\",\"modal-title\":\"Título Modal\",\"modal-content\":\"Contenido Modal\",\"launch-demo-modal\":\"Lanzar Demo Modal\",\"scrolling-long-content\":\"Contenido de Desplazamiento Largo\",\"backdrop\":\"Fondo\",\"disable-backdrop\":\"Desactivar Fondo\",\"enable-backdrop\":\"Habilitar Fondo\",\"disable-backdrop-click\":\"Desactivar Clic de Fondo\",\"enable-backdrop-click\":\"Habilitar Clic de Fondo\",\"right-modal\":\"Derecha Modal\",\"launch-right-modal\":\"Launch Derecha Modal\",\"nested\":\"Anidado\",\"size\":\"Tamaño\",\"launch-large-modal\":\"Lanzar Grande Modal\",\"launch-small-modal\":\"Lanzar Pequeño Modal\",\"template\":\"Template\",\"component\":\"Component\",\"events\":\"Eventos\",\"confirm\":\"Confirmar\",\"custom-css\":\"CSS Personalizado\",\"animation\":\"Animación\",\"disable-animation\":\"Desactivar Animación\",\"enable-animation\":\"Habilitar Animación\",\"esc\":\"Esc\",\"disable-esc\":\"Desactivar Esc\",\"enable-esc\":\"Habilitar Esc\",\"popover-tooltip\":\"Tooltips y Popovers\",\"popover\":\"Popover\",\"tooltip\":\"Tooltip\",\"change-class\":\"Cambio de Clase\",\"directive\":\"Directive\",\"child\":\"Niño\",\"create-template\":\"Crear Plantilla\",\"create-component\":\"Crear Componente\",\"first-modal\":\"Primer Modal\",\"second-modal\":\"Segundo Modal\",\"open-first-modal\":\"Abrir Primer Modal\",\"open-second-modal\":\"Abrir Segundo Modal\",\"close-first-modal\":\"Cerrar Primer Modal\",\"close\":\"Cerrar\",\"open-modal\":\"Modal Abierto\",\"confirm-message\":\"¿Quieres confirmar?\",\"yes\":\"Si\",\"no\":\"No\",\"view-child\":\"ViewChild\"},\"pagination\":{\"basic\":\"Básico\",\"manual-switch\":\"Página de Cambio Manual\",\"change-event\":\"Evento de Cambio de Página\",\"boundary-links\":\"Enlaces Limítrofes\",\"direction-links\":\"Enlaces de Dirección\",\"disabled\":\"Discapacitado\",\"limits\":\"Límites\",\"centering\":\"Centrado\",\"small\":\"Pequeño\"},\"nav\":{\"basic\":\"Navegación Básico\",\"active\":\"Activo\",\"disabled\":\"Discapacitado\",\"disabled-link\":\"Enlace Discapacitado\",\"link\":\"Enlace\",\"longer-link\":\"Enlace de navegación más largo\",\"another-link\":\"Otro Enlace\",\"right\":\"Derecha\",\"dropdown\":\"Desplegable\",\"header\":\"Encabezado\",\"action\":\"Accion\",\"another-action\":\"Otra accion\",\"horizontal-alignment\":\"Alineación Horizontal\",\"vertical-alignment\":\"Alineación Vertical\",\"pills\":\"Navegación Píldoras\",\"fill-justify\":\"Navegación Llenar y Justify\",\"pills-dropdowns\":\"Nav Pills with Dropdowns\",\"large\":\"Grande\",\"small\":\"Pequeño\",\"center\":\"Centro\",\"breadcrumb-basic\":\"Migas de Pan Básico\"},\"popover-tooltip\":{\"popover\":\"Popovers\",\"tooltip\":\"Tooltips\",\"top\":\"Tope\",\"bottom\":\"Fondo\",\"right\":\"Derecho\",\"left\":\"Izquierda\",\"auto\":\"Auto\"},\"sortable\":{\"columns\":\"Clasificar Columnas\",\"basic\":\"Básico\",\"handles\":\"Handles\",\"event\":\"Evento\"},\"maps\":{\"google\":\"Google\",\"yandex\":\"Yandex\"},\"table\":{\"bootstrap-tables\":\"Bootstrap Tables\",\"bootstrap-basic\":\"Basic Table\",\"bootstrap-light\":\"Light Heading\",\"bootstrap-striped\":\"Striped Rows\",\"bootstrap-bordered\":\"Bordered Table\",\"bootstrap-borderless\":\"Borderless Table\",\"bootstrap-hoverable\":\"Hoverable Rows\"},\"wizard\":{\"step-name-1\":\"Paso 1\",\"step-name-2\":\"Paso 2\",\"step-name-3\":\"Paso 3\",\"step-desc-1\":\"Descripción del primer paso\",\"step-desc-2\":\"Descripción del segundo paso\",\"step-desc-3\":\"Descripción del tercer paso\",\"content-1\":\"Contenido para el primer paso.\",\"content-2\":\"Contenido para el segundo paso.\",\"content-3\":\"Contenido del último paso!\",\"content-thanks\":\"Gracias!\",\"next\":\"Entrante\",\"prev\":\"Anterior\",\"registered\":\"¡Su registro se completó con éxito!\",\"validation\":\"Validación\",\"basic\":\"Básico\",\"last-end\":\"Último Paso Final\",\"done\":\"Hecho\",\"icons\":\"Íconos\",\"saving\":\"Ahorro...\",\"vertical\":\"Vertical\"}}");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_utils_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/utils/util */ "./src/app/utils/util.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
const color = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].isMultiColorActive || _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].isDarkSwitchActive
    ? Object(_app_utils_util__WEBPACK_IMPORTED_MODULE_2__["getThemeColor"])()
    : _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].defaultColor;
__webpack_require__("./src/assets/css/sass/themes lazy recursive ^\\.\\/vien\\..*\\.scss$")("./vien." + color + ".scss")
    .then((x) => {
    Object(_app_utils_util__WEBPACK_IMPORTED_MODULE_2__["setThemeColor"])(color);
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
        .catch((err) => console.error(err));
})
    .catch(() => {
    Object(_app_utils_util__WEBPACK_IMPORTED_MODULE_2__["setThemeColor"])(null);
    window.location.reload();
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Desktop\h\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map