(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"],{

/***/ "./node_modules/ngx-contextmenu/__ivy_ngcc__/fesm2015/ngx-contextmenu.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ngx-contextmenu/__ivy_ngcc__/fesm2015/ngx-contextmenu.js ***!
  \*******************************************************************************/
/*! exports provided: ContextMenuComponent, ContextMenuModule, ContextMenuService, ɵa, ɵb, ɵc, ɵd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuComponent", function() { return ContextMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuModule", function() { return ContextMenuModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuService", function() { return ContextMenuService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ContextMenuAttachDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ContextMenuItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CONTEXT_MENU_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ContextMenuContentComponent; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




const _c0 = ["menu"];
const _c1 = ["li"];
function ContextMenuContentComponent_li_3_a_2_ng_template_1_Template(rf, ctx) { }
const _c2 = function (a0) { return { $implicit: a0 }; };
function ContextMenuContentComponent_li_3_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContextMenuContentComponent_li_3_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.onMenuItemSelect(menuItem_r2, $event); })("mouseenter", function ContextMenuContentComponent_li_3_a_2_Template_a_mouseenter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.onOpenSubMenu(menuItem_r2, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContextMenuContentComponent_li_3_a_2_ng_template_1_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("dropdown-item", ctx_r5.useBootstrap4)("active", menuItem_r2.isActive && ctx_r5.isMenuItemEnabled(menuItem_r2))("disabled", ctx_r5.useBootstrap4 && !ctx_r5.isMenuItemEnabled(menuItem_r2))("hasSubMenu", !!menuItem_r2.subMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", menuItem_r2.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c2, ctx_r5.item));
} }
function ContextMenuContentComponent_li_3_span_3_ng_template_1_Template(rf, ctx) { }
function ContextMenuContentComponent_li_3_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContextMenuContentComponent_li_3_span_3_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r15.stopEvent($event); })("contextmenu", function ContextMenuContentComponent_li_3_span_3_Template_span_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r17.stopEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContextMenuContentComponent_li_3_span_3_ng_template_1_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("dropdown-item", ctx_r6.useBootstrap4)("disabled", ctx_r6.useBootstrap4 && !ctx_r6.isMenuItemEnabled(menuItem_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", menuItem_r2.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c2, ctx_r6.item));
} }
function ContextMenuContentComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ContextMenuContentComponent_li_3_a_2_Template, 2, 12, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ContextMenuContentComponent_li_3_span_3_Template, 2, 8, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("disabled", !ctx_r1.isMenuItemEnabled(menuItem_r2))("divider", menuItem_r2.divider)("dropdown-divider", ctx_r1.useBootstrap4 && menuItem_r2.divider)("active", menuItem_r2.isActive && ctx_r1.isMenuItemEnabled(menuItem_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("role", menuItem_r2.divider ? "separator" : undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !menuItem_r2.divider && !menuItem_r2.passive);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !menuItem_r2.divider && menuItem_r2.passive);
} }
class ContextMenuItemDirective {
    /**
     * @param {?} template
     * @param {?} elementRef
     */
    constructor(template, elementRef) {
        this.template = template;
        this.elementRef = elementRef;
        this.divider = false;
        this.enabled = true;
        this.passive = false;
        this.visible = true;
        this.execute = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.isActive = false;
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this.passive ||
            this.divider ||
            !this.evaluateIfFunction(this.enabled, this.currentItem);
    }
    /**
     * @param {?} value
     * @param {?} item
     * @return {?}
     */
    evaluateIfFunction(value, item) {
        if (value instanceof Function) {
            return value(item);
        }
        return value;
    }
    /**
     * @return {?}
     */
    setActiveStyles() {
        this.isActive = true;
    }
    /**
     * @return {?}
     */
    setInactiveStyles() {
        this.isActive = false;
    }
    /**
     * @param {?} item
     * @param {?=} $event
     * @return {?}
     */
    triggerExecute(item, $event) {
        if (!this.evaluateIfFunction(this.enabled, item)) {
            return;
        }
        this.execute.emit({ event: $event, item });
    }
}
ContextMenuItemDirective.ɵfac = function ContextMenuItemDirective_Factory(t) { return new (t || ContextMenuItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); };
ContextMenuItemDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ContextMenuItemDirective, selectors: [["", "contextMenuItem", ""]], inputs: { divider: "divider", enabled: "enabled", passive: "passive", visible: "visible", subMenu: "subMenu" }, outputs: { execute: "execute" } });
/** @nocollapse */
ContextMenuItemDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
ContextMenuItemDirective.propDecorators = {
    subMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    divider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    enabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    passive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    execute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ContextMenuItemDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                /* tslint:disable:directive-selector-type */
                selector: '[contextMenuItem]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }]; }, { divider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], enabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], passive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], execute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], subMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CONTEXT_MENU_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('CONTEXT_MENU_OPTIONS');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ILinkConfig() { }
if (false) {}
/** @type {?} */
const ARROW_LEFT_KEYCODE = 37;
class ContextMenuContentComponent {
    /**
     * @param {?} changeDetector
     * @param {?} elementRef
     * @param {?} options
     */
    constructor(changeDetector, elementRef, options) {
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.options = options;
        this.menuItems = [];
        this.isLeaf = false;
        this.execute = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.openSubMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.closeLeafMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.closeAllMenus = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.autoFocus = false;
        this.useBootstrap4 = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        if (options) {
            this.autoFocus = options.autoFocus;
            this.useBootstrap4 = options.useBootstrap4;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.menuItems.forEach((/**
         * @param {?} menuItem
         * @return {?}
         */
        menuItem => {
            menuItem.currentItem = this.item;
            this.subscription.add(menuItem.execute.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            event => this.execute.emit(Object.assign({}, event, { menuItem })))));
        }));
        /** @type {?} */
        const queryList = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"]();
        queryList.reset(this.menuItems);
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["ActiveDescendantKeyManager"](queryList).withWrap();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.autoFocus) {
            setTimeout((/**
             * @return {?}
             */
            () => this.focus()));
        }
        this.overlay.updatePosition();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    focus() {
        if (this.autoFocus) {
            this.menuElement.nativeElement.focus();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    stopEvent($event) {
        $event.stopPropagation();
    }
    /**
     * @param {?} menuItem
     * @return {?}
     */
    isMenuItemEnabled(menuItem) {
        return this.evaluateIfFunction(menuItem && menuItem.enabled);
    }
    /**
     * @param {?} menuItem
     * @return {?}
     */
    isMenuItemVisible(menuItem) {
        return this.evaluateIfFunction(menuItem && menuItem.visible);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    evaluateIfFunction(value) {
        if (value instanceof Function) {
            return value(this.item);
        }
        return value;
    }
    /**
     * @param {?} link
     * @return {?}
     */
    isDisabled(link) {
        return link.enabled && !link.enabled(this.item);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyEvent(event) {
        if (!this.isLeaf) {
            return;
        }
        this._keyManager.onKeydown(event);
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    keyboardOpenSubMenu(event) {
        if (!this.isLeaf) {
            return;
        }
        this.cancelEvent(event);
        /** @type {?} */
        const menuItem = this.menuItems[this._keyManager.activeItemIndex];
        if (menuItem) {
            this.onOpenSubMenu(menuItem);
        }
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    keyboardMenuItemSelect(event) {
        if (!this.isLeaf) {
            return;
        }
        this.cancelEvent(event);
        /** @type {?} */
        const menuItem = this.menuItems[this._keyManager.activeItemIndex];
        if (menuItem) {
            this.onMenuItemSelect(menuItem, event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onCloseLeafMenu(event) {
        if (!this.isLeaf) {
            return;
        }
        this.cancelEvent(event);
        this.closeLeafMenu.emit({
            exceptRootMenu: event.keyCode === ARROW_LEFT_KEYCODE,
            event
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    closeMenu(event) {
        if (event.type === 'click' && event.button === 2) {
            return;
        }
        this.closeAllMenus.emit({ event });
    }
    /**
     * @param {?} menuItem
     * @param {?=} event
     * @return {?}
     */
    onOpenSubMenu(menuItem, event) {
        /** @type {?} */
        const anchorElementRef = this.menuItemElements.toArray()[this._keyManager.activeItemIndex];
        /** @type {?} */
        const anchorElement = anchorElementRef && anchorElementRef.nativeElement;
        this.openSubMenu.emit({
            anchorElement,
            contextMenu: menuItem.subMenu,
            event,
            item: this.item,
            parentContextMenu: this
        });
    }
    /**
     * @param {?} menuItem
     * @param {?} event
     * @return {?}
     */
    onMenuItemSelect(menuItem, event) {
        event.preventDefault();
        event.stopPropagation();
        this.onOpenSubMenu(menuItem, event);
        if (!menuItem.subMenu) {
            menuItem.triggerExecute(this.item, event);
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    cancelEvent(event) {
        if (!event) {
            return;
        }
        /** @type {?} */
        const target = event.target;
        if (['INPUT', 'TEXTAREA', 'SELECT'].indexOf(target.tagName) > -1 ||
            target.isContentEditable) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
    }
}
ContextMenuContentComponent.ɵfac = function ContextMenuContentComponent_Factory(t) { return new (t || ContextMenuContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](CONTEXT_MENU_OPTIONS, 8)); };
ContextMenuContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContextMenuContentComponent, selectors: [["context-menu-content"]], viewQuery: function ContextMenuContentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.menuElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.menuItemElements = _t);
    } }, hostBindings: function ContextMenuContentComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.ArrowDown", function ContextMenuContentComponent_keydown_ArrowDown_HostBindingHandler($event) { return ctx.onKeyEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("keydown.ArrowUp", function ContextMenuContentComponent_keydown_ArrowUp_HostBindingHandler($event) { return ctx.onKeyEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("keydown.ArrowRight", function ContextMenuContentComponent_keydown_ArrowRight_HostBindingHandler($event) { return ctx.keyboardOpenSubMenu($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("keydown.Enter", function ContextMenuContentComponent_keydown_Enter_HostBindingHandler($event) { return ctx.keyboardMenuItemSelect($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("keydown.Space", function ContextMenuContentComponent_keydown_Space_HostBindingHandler($event) { return ctx.keyboardMenuItemSelect($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("keydown.Escape", function ContextMenuContentComponent_keydown_Escape_HostBindingHandler($event) { return ctx.onCloseLeafMenu($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("keydown.ArrowLeft", function ContextMenuContentComponent_keydown_ArrowLeft_HostBindingHandler($event) { return ctx.onCloseLeafMenu($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("click", function ContextMenuContentComponent_click_HostBindingHandler($event) { return ctx.closeMenu($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"])("contextmenu", function ContextMenuContentComponent_contextmenu_HostBindingHandler($event) { return ctx.closeMenu($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
    } }, inputs: { menuItems: "menuItems", isLeaf: "isLeaf", item: "item", event: "event", parentContextMenu: "parentContextMenu", menuClass: "menuClass", overlay: "overlay" }, outputs: { execute: "execute", openSubMenu: "openSubMenu", closeLeafMenu: "closeLeafMenu", closeAllMenus: "closeAllMenus" }, decls: 4, vars: 2, consts: [["tabindex", "0", 1, "dropdown", "open", "show", "ngx-contextmenu", 3, "ngClass"], ["tabindex", "0", 1, "dropdown-menu", "show", 2, "position", "static", "float", "none"], ["menu", ""], [3, "disabled", "divider", "dropdown-divider", "active", 4, "ngFor", "ngForOf"], ["li", ""], ["href", "", 3, "dropdown-item", "active", "disabled", "hasSubMenu", "click", "mouseenter", 4, "ngIf"], ["class", "passive", 3, "dropdown-item", "disabled", "click", "contextmenu", 4, "ngIf"], ["href", "", 3, "click", "mouseenter"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "passive", 3, "click", "contextmenu"]], template: function ContextMenuContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ContextMenuContentComponent_li_3_Template, 4, 11, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.menuClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], styles: [".passive[_ngcontent-%COMP%] {\n        display: block;\n        padding: 3px 20px;\n        clear: both;\n        font-weight: normal;\n        line-height: @line-height-base;\n        white-space: nowrap;\n      }\n      .hasSubMenu[_ngcontent-%COMP%]:before {\n        content: '\u25B6';\n        float: right;\n      }"] });
/** @nocollapse */
ContextMenuContentComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [CONTEXT_MENU_OPTIONS,] }] }
];
ContextMenuContentComponent.propDecorators = {
    menuItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    parentContextMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    menuClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    overlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isLeaf: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    execute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    openSubMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    closeLeafMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    closeAllMenus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    menuElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['menu', { static: true },] }],
    menuItemElements: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"], args: ['li',] }],
    onKeyEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['window:keydown.ArrowDown', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['window:keydown.ArrowUp', ['$event'],] }],
    keyboardOpenSubMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['window:keydown.ArrowRight', ['$event'],] }],
    keyboardMenuItemSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['window:keydown.Enter', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['window:keydown.Space', ['$event'],] }],
    onCloseLeafMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['window:keydown.Escape', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['window:keydown.ArrowLeft', ['$event'],] }],
    closeMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['document:click', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['document:contextmenu', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ContextMenuContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'context-menu-content',
                template: `
    <div
      class="dropdown open show ngx-contextmenu"
      [ngClass]="menuClass"
      tabindex="0"
    >
      <ul
        #menu
        class="dropdown-menu show"
        style="position: static; float: none;"
        tabindex="0"
      >
        <li
          #li
          *ngFor="let menuItem of menuItems; let i = index"
          [class.disabled]="!isMenuItemEnabled(menuItem)"
          [class.divider]="menuItem.divider"
          [class.dropdown-divider]="useBootstrap4 && menuItem.divider"
          [class.active]="menuItem.isActive && isMenuItemEnabled(menuItem)"
          [attr.role]="menuItem.divider ? 'separator' : undefined"
        >
          <a
            *ngIf="!menuItem.divider && !menuItem.passive"
            href
            [class.dropdown-item]="useBootstrap4"
            [class.active]="menuItem.isActive && isMenuItemEnabled(menuItem)"
            [class.disabled]="useBootstrap4 && !isMenuItemEnabled(menuItem)"
            [class.hasSubMenu]="!!menuItem.subMenu"
            (click)="onMenuItemSelect(menuItem, $event)"
            (mouseenter)="onOpenSubMenu(menuItem, $event)"
          >
            <ng-template
              [ngTemplateOutlet]="menuItem.template"
              [ngTemplateOutletContext]="{ $implicit: item }"
            ></ng-template>
          </a>

          <span
            (click)="stopEvent($event)"
            (contextmenu)="stopEvent($event)"
            class="passive"
            *ngIf="!menuItem.divider && menuItem.passive"
            [class.dropdown-item]="useBootstrap4"
            [class.disabled]="useBootstrap4 && !isMenuItemEnabled(menuItem)"
          >
            <ng-template
              [ngTemplateOutlet]="menuItem.template"
              [ngTemplateOutletContext]="{ $implicit: item }"
            ></ng-template>
          </span>
        </li>
      </ul>
    </div>
  `,
                styles: [`
      .passive {
        display: block;
        padding: 3px 20px;
        clear: both;
        font-weight: normal;
        line-height: @line-height-base;
        white-space: nowrap;
      }
      .hasSubMenu:before {
        content: '\u25B6';
        float: right;
      }
    `]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [CONTEXT_MENU_OPTIONS]
            }] }]; }, { menuItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isLeaf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], execute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], openSubMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], closeLeafMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], closeAllMenus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], onKeyEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['window:keydown.ArrowDown', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['window:keydown.ArrowUp', ['$event']]
        }], keyboardOpenSubMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['window:keydown.ArrowRight', ['$event']]
        }], keyboardMenuItemSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['window:keydown.Enter', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['window:keydown.Space', ['$event']]
        }], onCloseLeafMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['window:keydown.Escape', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['window:keydown.ArrowLeft', ['$event']]
        }], closeMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['document:click', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['document:contextmenu', ['$event']]
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], parentContextMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], menuClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], overlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], menuElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['menu', { static: true }]
        }], menuItemElements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"],
            args: ['li']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IContextMenuClickEvent() { }
if (false) {}
/**
 * @record
 */
function IContextMenuContext() { }
if (false) {}
/**
 * @record
 */
function CloseLeafMenuEvent() { }
if (false) {}
/**
 * @record
 */
function OverlayRefWithContextMenu() { }
if (false) {}
/**
 * @record
 */
function CancelContextMenuEvent() { }
if (false) {}
/**
 * @record
 */
function ExecuteContextMenuEvent() { }
if (false) {}
class ContextMenuService {
    /**
     * @param {?} overlay
     * @param {?} scrollStrategy
     */
    constructor(overlay, scrollStrategy) {
        this.overlay = overlay;
        this.scrollStrategy = scrollStrategy;
        this.isDestroyingLeafMenu = false;
        this.show = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.triggerClose = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.close = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.overlays = [];
        this.fakeElement = {
            getBoundingClientRect: (/**
             * @return {?}
             */
            () => ({
                bottom: 0,
                height: 0,
                left: 0,
                right: 0,
                top: 0,
                width: 0,
            }))
        };
    }
    /**
     * @param {?} context
     * @return {?}
     */
    openContextMenu(context) {
        const { anchorElement, event, parentContextMenu } = context;
        if (!parentContextMenu) {
            /** @type {?} */
            const mouseEvent = (/** @type {?} */ (event));
            this.fakeElement.getBoundingClientRect = (/**
             * @return {?}
             */
            () => ({
                bottom: mouseEvent.clientY,
                height: 0,
                left: mouseEvent.clientX,
                right: mouseEvent.clientX,
                top: mouseEvent.clientY,
                width: 0,
            }));
            this.closeAllContextMenus({ eventType: 'cancel', event });
            /** @type {?} */
            const positionStrategy = this.overlay.position().connectedTo(new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"](anchorElement || this.fakeElement), { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' })
                .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
                .withFallbackPosition({ originX: 'end', originY: 'top' }, { overlayX: 'start', overlayY: 'top' })
                .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
                .withFallbackPosition({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'center' })
                .withFallbackPosition({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'center' });
            this.overlays = [this.overlay.create({
                    positionStrategy,
                    panelClass: 'ngx-contextmenu',
                    scrollStrategy: this.scrollStrategy.close(),
                })];
            this.attachContextMenu(this.overlays[0], context);
        }
        else {
            /** @type {?} */
            const positionStrategy = this.overlay.position().connectedTo(new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"](event ? event.target : anchorElement), { originX: 'end', originY: 'top' }, { overlayX: 'start', overlayY: 'top' })
                .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
                .withFallbackPosition({ originX: 'end', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom' })
                .withFallbackPosition({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'bottom' });
            /** @type {?} */
            const newOverlay = this.overlay.create({
                positionStrategy,
                panelClass: 'ngx-contextmenu',
                scrollStrategy: this.scrollStrategy.close(),
            });
            this.destroySubMenus(parentContextMenu);
            this.overlays = this.overlays.concat(newOverlay);
            this.attachContextMenu(newOverlay, context);
        }
    }
    /**
     * @param {?} overlay
     * @param {?} context
     * @return {?}
     */
    attachContextMenu(overlay, context) {
        const { event, item, menuItems, menuClass } = context;
        /** @type {?} */
        const contextMenuContent = overlay.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["ComponentPortal"](ContextMenuContentComponent));
        contextMenuContent.instance.event = event;
        contextMenuContent.instance.item = item;
        contextMenuContent.instance.menuItems = menuItems;
        contextMenuContent.instance.overlay = overlay;
        contextMenuContent.instance.isLeaf = true;
        contextMenuContent.instance.menuClass = menuClass;
        ((/** @type {?} */ (overlay))).contextMenu = contextMenuContent.instance;
        /** @type {?} */
        const subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        subscriptions.add(contextMenuContent.instance.execute.asObservable()
            .subscribe((/**
         * @param {?} executeEvent
         * @return {?}
         */
        (executeEvent) => this.closeAllContextMenus(Object.assign({ eventType: 'execute' }, executeEvent)))));
        subscriptions.add(contextMenuContent.instance.closeAllMenus.asObservable()
            .subscribe((/**
         * @param {?} closeAllEvent
         * @return {?}
         */
        (closeAllEvent) => this.closeAllContextMenus(Object.assign({ eventType: 'cancel' }, closeAllEvent)))));
        subscriptions.add(contextMenuContent.instance.closeLeafMenu.asObservable()
            .subscribe((/**
         * @param {?} closeLeafMenuEvent
         * @return {?}
         */
        closeLeafMenuEvent => this.destroyLeafMenu(closeLeafMenuEvent))));
        subscriptions.add(contextMenuContent.instance.openSubMenu.asObservable()
            .subscribe((/**
         * @param {?} subMenuEvent
         * @return {?}
         */
        (subMenuEvent) => {
            this.destroySubMenus(contextMenuContent.instance);
            if (!subMenuEvent.contextMenu) {
                contextMenuContent.instance.isLeaf = true;
                return;
            }
            contextMenuContent.instance.isLeaf = false;
            this.show.next(subMenuEvent);
        })));
        contextMenuContent.onDestroy((/**
         * @return {?}
         */
        () => {
            menuItems.forEach((/**
             * @param {?} menuItem
             * @return {?}
             */
            menuItem => menuItem.isActive = false));
            subscriptions.unsubscribe();
        }));
        contextMenuContent.changeDetectorRef.detectChanges();
    }
    /**
     * @param {?} closeEvent
     * @return {?}
     */
    closeAllContextMenus(closeEvent) {
        if (this.overlays) {
            this.close.next(closeEvent);
            this.overlays.forEach((/**
             * @param {?} overlay
             * @param {?} index
             * @return {?}
             */
            (overlay, index) => {
                overlay.detach();
                overlay.dispose();
            }));
        }
        this.overlays = [];
    }
    /**
     * @return {?}
     */
    getLastAttachedOverlay() {
        /** @type {?} */
        let overlay = this.overlays[this.overlays.length - 1];
        while (this.overlays.length > 1 && overlay && !overlay.hasAttached()) {
            overlay.detach();
            overlay.dispose();
            this.overlays = this.overlays.slice(0, -1);
            overlay = this.overlays[this.overlays.length - 1];
        }
        return overlay;
    }
    /**
     * @param {?=} __0
     * @return {?}
     */
    destroyLeafMenu({ exceptRootMenu, event } = {}) {
        if (this.isDestroyingLeafMenu) {
            return;
        }
        this.isDestroyingLeafMenu = true;
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const overlay = this.getLastAttachedOverlay();
            if (this.overlays.length > 1 && overlay) {
                overlay.detach();
                overlay.dispose();
            }
            if (!exceptRootMenu && this.overlays.length > 0 && overlay) {
                this.close.next({ eventType: 'cancel', event });
                overlay.detach();
                overlay.dispose();
            }
            /** @type {?} */
            const newLeaf = this.getLastAttachedOverlay();
            if (newLeaf) {
                newLeaf.contextMenu.isLeaf = true;
            }
            this.isDestroyingLeafMenu = false;
        }));
    }
    /**
     * @param {?} contextMenu
     * @return {?}
     */
    destroySubMenus(contextMenu) {
        /** @type {?} */
        const overlay = contextMenu.overlay;
        /** @type {?} */
        const index = this.overlays.indexOf(overlay);
        this.overlays.slice(index + 1).forEach((/**
         * @param {?} subMenuOverlay
         * @return {?}
         */
        subMenuOverlay => {
            subMenuOverlay.detach();
            subMenuOverlay.dispose();
        }));
    }
    /**
     * @param {?} contextMenuContent
     * @return {?}
     */
    isLeafMenu(contextMenuContent) {
        /** @type {?} */
        const overlay = this.getLastAttachedOverlay();
        return contextMenuContent.overlay === overlay;
    }
}
ContextMenuService.ɵfac = function ContextMenuService_Factory(t) { return new (t || ContextMenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ScrollStrategyOptions"])); };
ContextMenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ContextMenuService, factory: ContextMenuService.ɵfac });
/** @nocollapse */
ContextMenuService.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ScrollStrategyOptions"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ContextMenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ScrollStrategyOptions"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ILinkConfig$1() { }
if (false) {}
/**
 * @record
 */
function MouseLocation() { }
if (false) {}
class ContextMenuComponent {
    /**
     * @param {?} _contextMenuService
     * @param {?} changeDetector
     * @param {?} elementRef
     * @param {?} options
     */
    constructor(_contextMenuService, changeDetector, elementRef, options) {
        this._contextMenuService = _contextMenuService;
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.options = options;
        this.menuClass = "";
        this.autoFocus = false;
        this.useBootstrap4 = false;
        this.disabled = false;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.visibleMenuItems = [];
        this.links = [];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        if (options) {
            this.autoFocus = options.autoFocus;
            this.useBootstrap4 = options.useBootstrap4;
        }
        this.subscription.add(_contextMenuService.show.subscribe((/**
         * @param {?} menuEvent
         * @return {?}
         */
        menuEvent => {
            this.onMenuEvent(menuEvent);
        })));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @param {?} menuEvent
     * @return {?}
     */
    onMenuEvent(menuEvent) {
        if (this.disabled) {
            return;
        }
        const { contextMenu, event, item } = menuEvent;
        if (contextMenu && contextMenu !== this) {
            return;
        }
        this.event = event;
        this.item = item;
        this.setVisibleMenuItems();
        this._contextMenuService.openContextMenu(Object.assign({}, menuEvent, { menuItems: this.visibleMenuItems, menuClass: this.menuClass }));
        this._contextMenuService.close.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe((/**
         * @param {?} closeEvent
         * @return {?}
         */
        closeEvent => this.close.emit(closeEvent)));
        this.open.next(menuEvent);
    }
    /**
     * @param {?} menuItem
     * @return {?}
     */
    isMenuItemVisible(menuItem) {
        return this.evaluateIfFunction(menuItem.visible);
    }
    /**
     * @return {?}
     */
    setVisibleMenuItems() {
        this.visibleMenuItems = this.menuItems.filter((/**
         * @param {?} menuItem
         * @return {?}
         */
        menuItem => this.isMenuItemVisible(menuItem)));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    evaluateIfFunction(value) {
        if (value instanceof Function) {
            return value(this.item);
        }
        return value;
    }
}
ContextMenuComponent.ɵfac = function ContextMenuComponent_Factory(t) { return new (t || ContextMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ContextMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](CONTEXT_MENU_OPTIONS, 8)); };
ContextMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContextMenuComponent, selectors: [["context-menu"]], contentQueries: function ContextMenuComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, ContextMenuItemDirective, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.menuItems = _t);
    } }, viewQuery: function ContextMenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.menuElement = _t.first);
    } }, inputs: { menuClass: "menuClass", autoFocus: "autoFocus", useBootstrap4: "useBootstrap4", disabled: "disabled" }, outputs: { close: "close", open: "open" }, decls: 0, vars: 0, template: function ContextMenuComponent_Template(rf, ctx) { }, styles: ["\n    .cdk-overlay-container {\n      position: fixed;\n      z-index: 1000;\n      pointer-events: none;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n    }\n    .ngx-contextmenu.cdk-overlay-pane {\n      position: absolute;\n      pointer-events: auto;\n      box-sizing: border-box;\n    }\n  "], encapsulation: 2 });
/** @nocollapse */
ContextMenuComponent.ctorParameters = () => [
    { type: ContextMenuService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [CONTEXT_MENU_OPTIONS,] }] }
];
ContextMenuComponent.propDecorators = {
    menuClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    autoFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    useBootstrap4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    menuItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [ContextMenuItemDirective,] }],
    menuElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['menu', { static: false },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ContextMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                selector: 'context-menu',
                template: ` `,
                styles: [`
    .cdk-overlay-container {
      position: fixed;
      z-index: 1000;
      pointer-events: none;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .ngx-contextmenu.cdk-overlay-pane {
      position: absolute;
      pointer-events: auto;
      box-sizing: border-box;
    }
  `]
            }]
    }], function () { return [{ type: ContextMenuService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [CONTEXT_MENU_OPTIONS]
            }] }]; }, { menuClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], autoFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], useBootstrap4: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], menuItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [ContextMenuItemDirective]
        }], menuElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['menu', { static: false }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContextMenuAttachDirective {
    /**
     * @param {?} contextMenuService
     */
    constructor(contextMenuService) {
        this.contextMenuService = contextMenuService;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onContextMenu(event) {
        if (!this.contextMenu.disabled) {
            this.contextMenuService.show.next({
                contextMenu: this.contextMenu,
                event,
                item: this.contextMenuSubject,
            });
            event.preventDefault();
            event.stopPropagation();
        }
    }
}
ContextMenuAttachDirective.ɵfac = function ContextMenuAttachDirective_Factory(t) { return new (t || ContextMenuAttachDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ContextMenuService)); };
ContextMenuAttachDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ContextMenuAttachDirective, selectors: [["", "contextMenu", ""]], hostBindings: function ContextMenuAttachDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("contextmenu", function ContextMenuAttachDirective_contextmenu_HostBindingHandler($event) { return ctx.onContextMenu($event); });
    } }, inputs: { contextMenuSubject: "contextMenuSubject", contextMenu: "contextMenu" } });
/** @nocollapse */
ContextMenuAttachDirective.ctorParameters = () => [
    { type: ContextMenuService }
];
ContextMenuAttachDirective.propDecorators = {
    contextMenuSubject: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    contextMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    onContextMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['contextmenu', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ContextMenuAttachDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[contextMenu]'
            }]
    }], function () { return [{ type: ContextMenuService }]; }, { onContextMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['contextmenu', ['$event']]
        }], contextMenuSubject: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], contextMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContextMenuModule {
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options) {
        return {
            ngModule: ContextMenuModule,
            providers: [
                ContextMenuService,
                {
                    provide: CONTEXT_MENU_OPTIONS,
                    useValue: options,
                },
                { provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"], useClass: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["FullscreenOverlayContainer"] },
            ],
        };
    }
}
ContextMenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ContextMenuModule });
ContextMenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ContextMenuModule_Factory(t) { return new (t || ContextMenuModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ContextMenuModule, { declarations: function () { return [ContextMenuAttachDirective, ContextMenuComponent, ContextMenuContentComponent, ContextMenuItemDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"]]; }, exports: function () { return [ContextMenuAttachDirective, ContextMenuComponent, ContextMenuItemDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ContextMenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    ContextMenuAttachDirective,
                    ContextMenuComponent,
                    ContextMenuContentComponent,
                    ContextMenuItemDirective,
                ],
                entryComponents: [
                    ContextMenuContentComponent,
                ],
                exports: [
                    ContextMenuAttachDirective,
                    ContextMenuComponent,
                    ContextMenuItemDirective,
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IContextMenuOptions() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-contextmenu.js.map

/***/ }),

/***/ "./src/app/views/app/pages/product/data-list/data-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/app/pages/product/data-list/data-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: DataListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataListComponent", function() { return DataListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-hotkeys */ "./node_modules/angular2-hotkeys/__ivy_ngcc__/fesm2015/angular2-hotkeys.js");
/* harmony import */ var src_app_data_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data/api.service */ "./src/app/data/api.service.ts");
/* harmony import */ var _containers_pages_list_page_header_list_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../containers/pages/list-page-header/list-page-header.component */ "./src/app/containers/pages/list-page-header/list-page-header.component.ts");
/* harmony import */ var _containers_pages_add_new_product_modal_add_new_product_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../containers/pages/add-new-product-modal/add-new-product-modal.component */ "./src/app/containers/pages/add-new-product-modal/add-new-product-modal.component.ts");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/__ivy_ngcc__/fesm2015/ngx-contextmenu.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");











const _c0 = ["basicMenu"];
const _c1 = ["addNewModalRef"];
function DataListComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataListComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Move to archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataListComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function (a1) { return { "card d-flex flex-row mb-3": true, "active": a1 }; };
function DataListComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DataListComponent_div_9_div_1_Template_input_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const p_r16 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.onSelect(p_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, ctx_r15.isSelected(p_r16)))("contextMenu", _r1)("contextMenuSubject", p_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r16.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r16.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r16.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("badge badge-pill badge-" + p_r16.statusColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r16.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "customCheck" + i_r17)("checked", ctx_r15.isSelected(p_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "customCheck" + i_r17);
} }
function DataListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataListComponent_div_9_div_1_Template, 15, 14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.data);
} }
function DataListComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DataListComponent_div_10_div_1_Template_input_change_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const p_r21 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.onSelect(p_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, ctx_r20.isSelected(p_r21)))("contextMenu", _r1)("contextMenuSubject", p_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r21.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", p_r21.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r21.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r21.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r21.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("badge badge-pill badge-" + p_r21.statusColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r21.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "customCheck" + i_r22)("checked", ctx_r20.isSelected(p_r21));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "customCheck" + i_r22);
} }
function DataListComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataListComponent_div_10_div_1_Template, 18, 16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.data);
} }
const _c3 = function (a1) { return { "card": true, "active": a1 }; };
function DataListComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DataListComponent_div_11_div_2_Template_input_change_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const p_r26 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.onSelect(p_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r26 = ctx.$implicit;
    const i_r27 = ctx.index;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contextMenu", _r1)("contextMenuSubject", p_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c3, ctx_r25.isSelected(p_r26)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r26.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", p_r26.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("badge badge-pill position-absolute badge-top-left badge-" + p_r26.statusColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r26.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "customCheck" + i_r27)("checked", ctx_r25.isSelected(p_r26));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "customCheck" + i_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r26.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r26.date);
} }
function DataListComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataListComponent_div_11_div_2_Template, 21, 15, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.data);
} }
function DataListComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 45);
} }
function DataListComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 46);
} }
const _c4 = function () { return [5, 10, 20]; };
class DataListComponent {
    constructor(hotkeysService, apiService) {
        this.hotkeysService = hotkeysService;
        this.apiService = apiService;
        this.displayMode = 'list';
        this.selectAllState = '';
        this.selected = [];
        this.data = [];
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.search = '';
        this.orderBy = '';
        this.endOfTheList = false;
        this.totalItem = 0;
        this.totalPage = 0;
        this.hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["Hotkey"]('ctrl+a', (event) => {
            this.selected = [...this.data];
            return false;
        }));
        this.hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["Hotkey"]('ctrl+d', (event) => {
            this.selected = [];
            return false;
        }));
    }
    ngOnInit() {
        this.loadData(this.itemsPerPage, this.currentPage, this.search, this.orderBy);
    }
    loadData(pageSize = 10, currentPage = 1, search = '', orderBy = '') {
        this.itemsPerPage = pageSize;
        this.currentPage = currentPage;
        this.search = search;
        this.orderBy = orderBy;
        this.apiService.getProducts(pageSize, currentPage, search, orderBy).subscribe(data => {
            if (data.status) {
                this.isLoading = false;
                this.data = data.data.map(x => {
                    return Object.assign(Object.assign({}, x), { img: x.img.replace("/img/", "/img/products/") });
                });
                this.totalItem = data.totalItem;
                this.totalPage = data.totalPage;
                this.setSelectAllState();
            }
            else {
                this.endOfTheList = true;
            }
        }, error => {
            this.isLoading = false;
        });
    }
    changeDisplayMode(mode) {
        this.displayMode = mode;
    }
    showAddNewModal() {
        this.addNewModalRef.show();
    }
    isSelected(p) {
        return this.selected.findIndex(x => x.id === p.id) > -1;
    }
    onSelect(item) {
        if (this.isSelected(item)) {
            this.selected = this.selected.filter(x => x.id !== item.id);
        }
        else {
            this.selected.push(item);
        }
        this.setSelectAllState();
    }
    setSelectAllState() {
        if (this.selected.length === this.data.length) {
            this.selectAllState = 'checked';
        }
        else if (this.selected.length !== 0) {
            this.selectAllState = 'indeterminate';
        }
        else {
            this.selectAllState = '';
        }
    }
    selectAllChange($event) {
        if ($event.target.checked) {
            this.selected = [...this.data];
        }
        else {
            this.selected = [];
        }
        this.setSelectAllState();
    }
    pageChanged(event) {
        this.loadData(this.itemsPerPage, event.page, this.search, this.orderBy);
    }
    itemsPerPageChange(perPage) {
        this.loadData(perPage, 1, this.search, this.orderBy);
    }
    changeOrderBy(item) {
        this.loadData(this.itemsPerPage, 1, this.search, item.value);
    }
    searchKeyUp(event) {
        const val = event.target.value.toLowerCase().trim();
        this.loadData(this.itemsPerPage, 1, val, this.orderBy);
    }
    onContextMenuClick(action, item) {
        console.log('onContextMenuClick -> action :  ', action, ', item.title :', item.title);
    }
}
DataListComponent.ɵfac = function DataListComponent_Factory(t) { return new (t || DataListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["HotkeysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
DataListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataListComponent, selectors: [["app-data-list"]], viewQuery: function DataListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.basicMenu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addNewModalRef = _t.first);
    } }, decls: 18, vars: 15, consts: [[3, "displayMode", "itemOptionsPerPage", "itemsPerPage", "selectAllState", "changeDisplayMode", "addNewItem", "selectAllChange", "itemsPerPageChange", "changeOrderBy", "searchKeyUp"], ["addNewModalRef", ""], ["basicMenu", ""], ["contextMenuItem", "", 3, "execute"], [1, "row"], ["class", "col-12 list", 4, "ngIf"], [1, "col-12"], [1, "justify-content-center", 3, "totalItems", "itemsPerPage", "rotate", "maxSize", "ngModel", "customNextTemplate", "customPreviousTemplate", "ngModelChange", "pageChanged"], ["nextTemplate", ""], ["prevTemplate", ""], [1, "simple-icon-docs", "mr-1"], [1, "simple-icon-drawer", "mr-1"], [1, "simple-icon-trash", "mr-1"], [1, "col-12", "list"], [3, "ngClass", "contextMenu", "contextMenuSubject", 4, "ngFor", "ngForOf"], [3, "ngClass", "contextMenu", "contextMenuSubject"], [1, "d-flex", "flex-grow-1", "min-width-zero"], [1, "card-body", "align-self-center", "d-flex", "flex-column", "flex-md-row", "justify-content-between", "min-width-zero", "align-items-md-center"], ["href", "javascript:;", 1, "list-item-heading", "mb-0", "truncate", "w-40", "w-xs-100"], [1, "mb-0", "text-muted", "text-small", "w-15", "w-xs-100"], [1, "w-15", "w-xs-100"], [1, "custom-control", "custom-checkbox", "mb-1", "align-self-center", "pr-4"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "checked", "change"], [1, "custom-control-label", 3, "for"], ["href", "javascript:;", 1, "d-flex"], [1, "list-thumbnail", "responsive", "border-0", "card-img-left", 3, "src", "alt"], [1, "pl-2", "d-flex", "flex-grow-1", "min-width-zero"], [1, "card-body", "align-self-center", "d-flex", "flex-column", "flex-lg-row", "justify-content-between", "min-width-zero", "align-items-lg-center"], ["href", "javascript:;", 1, "w-40", "w-sm-100"], [1, "list-item-heading", "mb-0", "truncate"], [1, "mb-0", "text-muted", "text-small", "w-15", "w-sm-100"], [1, "w-15", "w-sm-100"], ["class", "col-xl-3 col-lg-4 col-12 col-sm-6 mb-4", 3, "contextMenu", "contextMenuSubject", 4, "ngFor", "ngForOf"], [1, "col-xl-3", "col-lg-4", "col-12", "col-sm-6", "mb-4", 3, "contextMenu", "contextMenuSubject"], [3, "ngClass"], [1, "position-relative"], ["href", "javascript:;"], [1, "card-img-top", 3, "src", "alt"], [1, "card-body"], [1, "col-2"], [1, "custom-control", "custom-checkbox", "pl-1"], [1, "custom-control", "custom-checkbox", "mb-0"], [1, "col-10"], [1, "list-item-heading", "mb-4", "pt-1"], [1, "text-muted", "text-small", "mb-0", "font-weight-light"], [1, "simple-icon-arrow-right"], [1, "simple-icon-arrow-left"]], template: function DataListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-list-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeDisplayMode", function DataListComponent_Template_app_list_page_header_changeDisplayMode_0_listener($event) { return ctx.changeDisplayMode($event); })("addNewItem", function DataListComponent_Template_app_list_page_header_addNewItem_0_listener() { return ctx.showAddNewModal(); })("selectAllChange", function DataListComponent_Template_app_list_page_header_selectAllChange_0_listener($event) { return ctx.selectAllChange($event); })("itemsPerPageChange", function DataListComponent_Template_app_list_page_header_itemsPerPageChange_0_listener($event) { return ctx.itemsPerPageChange($event); })("changeOrderBy", function DataListComponent_Template_app_list_page_header_changeOrderBy_0_listener($event) { return ctx.changeOrderBy($event); })("searchKeyUp", function DataListComponent_Template_app_list_page_header_searchKeyUp_0_listener($event) { return ctx.searchKeyUp($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-add-new-product-modal", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "context-menu", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DataListComponent_ng_template_5_Template, 3, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("execute", function DataListComponent_Template_ng_template_execute_5_listener($event) { return ctx.onContextMenuClick("copy", $event.item); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DataListComponent_ng_template_6_Template, 3, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("execute", function DataListComponent_Template_ng_template_execute_6_listener($event) { return ctx.onContextMenuClick("move-to-archive", $event.item); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DataListComponent_ng_template_7_Template, 3, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("execute", function DataListComponent_Template_ng_template_execute_7_listener($event) { return ctx.onContextMenuClick("delete", $event.item); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DataListComponent_div_9_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DataListComponent_div_10_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DataListComponent_div_11_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "pagination", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DataListComponent_Template_pagination_ngModelChange_13_listener($event) { return ctx.currentPage = $event; })("pageChanged", function DataListComponent_Template_pagination_pageChanged_13_listener($event) { return ctx.pageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DataListComponent_ng_template_14_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DataListComponent_ng_template_16_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayMode", ctx.displayMode)("itemOptionsPerPage", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c4))("itemsPerPage", ctx.itemsPerPage)("selectAllState", ctx.selectAllState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMode === "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMode === "thumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMode === "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalItems", ctx.totalItem)("itemsPerPage", ctx.itemsPerPage)("rotate", true)("maxSize", 5)("ngModel", ctx.currentPage)("customNextTemplate", _r8)("customPreviousTemplate", _r10);
    } }, directives: [_containers_pages_list_page_header_list_page_header_component__WEBPACK_IMPORTED_MODULE_3__["ListPageHeaderComponent"], _containers_pages_add_new_product_modal_add_new_product_modal_component__WEBPACK_IMPORTED_MODULE_4__["AddNewProductModalComponent"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_5__["ContextMenuComponent"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_5__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_5__["ɵa"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-list',
                templateUrl: './data-list.component.html'
            }]
    }], function () { return [{ type: angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["HotkeysService"] }, { type: src_app_data_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, { basicMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['basicMenu']
        }], addNewModalRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['addNewModalRef', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/views/app/pages/product/details-alt/details-alt.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/app/pages/product/details-alt/details-alt.component.ts ***!
  \******************************************************************************/
/*! exports provided: DetailsAltComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsAltComponent", function() { return DetailsAltComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_data_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data/charts */ "./src/app/data/charts.ts");
/* harmony import */ var src_app_components_charts_chart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/charts/chart.service */ "./src/app/components/charts/chart.service.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var _containers_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../containers/layout/breadcrumb/breadcrumb.component */ "./src/app/containers/layout/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
/* harmony import */ var _containers_pages_product_detail_info_alt_product_detail_info_alt_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../containers/pages/product-detail-info-alt/product-detail-info-alt.component */ "./src/app/containers/pages/product-detail-info-alt/product-detail-info-alt.component.ts");
/* harmony import */ var _components_cards_radial_process_card_radial_process_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../components/cards/radial-process-card/radial-process-card.component */ "./src/app/components/cards/radial-process-card/radial-process-card.component.ts");
/* harmony import */ var _components_charts_small_line_chart_small_line_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../components/charts/small-line-chart/small-line-chart.component */ "./src/app/components/charts/small-line-chart/small-line-chart.component.ts");
/* harmony import */ var _components_charts_area_chart_area_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../components/charts/area-chart/area-chart.component */ "./src/app/components/charts/area-chart/area-chart.component.ts");
/* harmony import */ var _containers_pages_product_detail_comments_product_detail_comments_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../containers/pages/product-detail-comments/product-detail-comments.component */ "./src/app/containers/pages/product-detail-comments/product-detail-comments.component.ts");
/* harmony import */ var _containers_pages_product_detail_orders_product_detail_orders_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../containers/pages/product-detail-orders/product-detail-orders.component */ "./src/app/containers/pages/product-detail-orders/product-detail-orders.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");














function DetailsAltComponent_ul_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Another action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DetailsAltComponent {
    constructor(chartService) {
        this.chartService = chartService;
        this.smallChartData1 = src_app_data_charts__WEBPACK_IMPORTED_MODULE_1__["smallChartData1"];
        this.smallChartData2 = src_app_data_charts__WEBPACK_IMPORTED_MODULE_1__["smallChartData2"];
        this.smallChartData3 = src_app_data_charts__WEBPACK_IMPORTED_MODULE_1__["smallChartData3"];
        this.smallChartData4 = src_app_data_charts__WEBPACK_IMPORTED_MODULE_1__["smallChartData4"];
        this.areaChartData = src_app_data_charts__WEBPACK_IMPORTED_MODULE_1__["areaChartData"];
        this.chartDataConfig = this.chartService;
    }
    ngOnInit() {
    }
}
DetailsAltComponent.ɵfac = function DetailsAltComponent_Factory(t) { return new (t || DetailsAltComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_charts_chart_service__WEBPACK_IMPORTED_MODULE_2__["ChartService"])); };
DetailsAltComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsAltComponent, selectors: [["app-details-alt"]], decls: 54, vars: 36, consts: [[1, "row"], [1, "col-12"], [1, "top-right-button-container", "mb-2"], ["dropdown", ""], ["dropdownToggle", "", "type", "button", 1, "btn", "btn-outline-primary", "btn-lg", "flex-grow-1", "dropdown-toggle"], [1, "caret"], ["class", "dropdown-menu", 4, "dropdownMenu"], [1, "separator-tabs", "ml-0"], [1, "tab-content", 3, "heading"], [1, "col-12", "col-lg-4", "mb-4"], [3, "title", "percent", "isSortable"], [1, "col-12", "col-lg-8"], [1, "col-6", "mb-4"], [1, "card", "dashboard-small-chart-analytics"], [1, "card-body"], [1, "chart", 3, "data", "options"], [1, "card", "mb-4"], [1, "card-title"], [1, "chart-container"], [3, "data", "options"], [1, "dropdown-menu"], ["role", "menuitem"], ["href", "javascript:;", 1, "dropdown-item"]], template: function DetailsAltComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Chocolate Cake");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DetailsAltComponent_ul_11_Template, 7, 0, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tabset", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-product-detail-info-alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-radial-process-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-radial-process-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-small-line-chart", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-small-line-chart", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-small-line-chart", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-small-line-chart", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "app-area-chart", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "app-product-detail-comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "app-product-detail-orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 24, "pages.actions"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 26, "pages.details"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mb-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 28, "pages.order-status"))("percent", 85)("isSortable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mb-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 30, "pages.bake-progress"))("percent", 40)("isSortable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.smallChartData1)("options", ctx.chartDataConfig.smallLineChartOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.smallChartData2)("options", ctx.chartDataConfig.smallLineChartOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.smallChartData3)("options", ctx.chartDataConfig.smallLineChartOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.smallChartData4)("options", ctx.chartDataConfig.smallLineChartOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 32, "pages.popularity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.areaChartData)("options", ctx.chartDataConfig.areaChartOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 34, "pages.orders"));
    } }, directives: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownMenuDirective"], _containers_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsetComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabDirective"], _containers_pages_product_detail_info_alt_product_detail_info_alt_component__WEBPACK_IMPORTED_MODULE_6__["ProductDetailInfoAltComponent"], _components_cards_radial_process_card_radial_process_card_component__WEBPACK_IMPORTED_MODULE_7__["RadialProcessCardComponent"], _components_charts_small_line_chart_small_line_chart_component__WEBPACK_IMPORTED_MODULE_8__["SmallLineChartComponent"], _components_charts_area_chart_area_chart_component__WEBPACK_IMPORTED_MODULE_9__["AreaChartComponent"], _containers_pages_product_detail_comments_product_detail_comments_component__WEBPACK_IMPORTED_MODULE_10__["ProductDetailCommentsComponent"], _containers_pages_product_detail_orders_product_detail_orders_component__WEBPACK_IMPORTED_MODULE_11__["ProductDetailOrdersComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsAltComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-details-alt',
                templateUrl: './details-alt.component.html'
            }]
    }], function () { return [{ type: src_app_components_charts_chart_service__WEBPACK_IMPORTED_MODULE_2__["ChartService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/app/pages/product/details/details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/app/pages/product/details/details.component.ts ***!
  \**********************************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_data_carousels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data/carousels */ "./src/app/data/carousels.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var _containers_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../containers/layout/breadcrumb/breadcrumb.component */ "./src/app/containers/layout/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _components_carousel_glide_thumbs_glide_thumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../components/carousel/glide-thumbs/glide-thumbs.component */ "./src/app/components/carousel/glide-thumbs/glide-thumbs.component.ts");
/* harmony import */ var _containers_pages_product_detail_tabs_product_detail_tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../containers/pages/product-detail-tabs/product-detail-tabs.component */ "./src/app/containers/pages/product-detail-tabs/product-detail-tabs.component.ts");
/* harmony import */ var _containers_pages_product_detail_info_product_detail_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../containers/pages/product-detail-info/product-detail-info.component */ "./src/app/containers/pages/product-detail-info/product-detail-info.component.ts");
/* harmony import */ var _containers_pages_profile_photos_profile_photos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../containers/pages/profile-photos/profile-photos.component */ "./src/app/containers/pages/profile-photos/profile-photos.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");










function DetailsComponent_ul_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Another action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { bound: true, rewind: false, focusAt: 0, startAt: 0, gap: 5, perView: 1 }; };
const _c1 = function () { return { perView: 5 }; };
const _c2 = function () { return { perView: 4 }; };
const _c3 = function () { return { perView: 3 }; };
const _c4 = function (a0, a1, a2) { return { "2640": a0, "576": a1, "420": a2 }; };
const _c5 = function (a6) { return { bound: true, rewind: false, focusAt: 0, startAt: 0, gap: 10, perView: 5, breakpoints: a6 }; };
class DetailsComponent {
    constructor() {
        this.detailImages = src_app_data_carousels__WEBPACK_IMPORTED_MODULE_1__["carouselImages"];
        this.detailThumbs = src_app_data_carousels__WEBPACK_IMPORTED_MODULE_1__["carouselThumbs"];
    }
    ngOnInit() {
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(); };
DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["app-details"]], decls: 23, vars: 17, consts: [[1, "row"], [1, "col-12"], [1, "top-right-button-container", "mb-2"], ["dropdown", ""], ["dropdownToggle", "", "type", "button", 1, "btn", "btn-outline-primary", "btn-lg", "flex-grow-1", "dropdown-toggle"], [1, "caret"], ["class", "dropdown-menu", 4, "dropdownMenu"], [1, "separator", "mb-5"], [1, "col-12", "col-md-12", "col-xl-8", "col-left"], [1, "card", "mb-4"], [1, "card-body"], [3, "images", "settingsImages", "thumbs", "settingsThumbs"], [1, "col-12", "col-md-12", "col-xl-4", "col-right"], [1, "dropdown-menu"], ["role", "menuitem"], ["href", "javascript:;", 1, "dropdown-item"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Chocolate Cake");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DetailsComponent_ul_11_Template, 7, 0, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-glide-thumbs", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-product-detail-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-product-detail-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-profile-photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, "pages.actions"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.detailImages)("settingsImages", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0))("thumbs", ctx.detailThumbs)("settingsThumbs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](11, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3))));
    } }, directives: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownMenuDirective"], _containers_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"], _components_carousel_glide_thumbs_glide_thumbs_component__WEBPACK_IMPORTED_MODULE_4__["GlideThumbsComponent"], _containers_pages_product_detail_tabs_product_detail_tabs_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailTabsComponent"], _containers_pages_product_detail_info_product_detail_info_component__WEBPACK_IMPORTED_MODULE_6__["ProductDetailInfoComponent"], _containers_pages_profile_photos_profile_photos_component__WEBPACK_IMPORTED_MODULE_7__["ProfilePhotosComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-details',
                templateUrl: './details.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/app/pages/product/image-list/image-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/app/pages/product/image-list/image-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: ImageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageListComponent", function() { return ImageListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-hotkeys */ "./node_modules/angular2-hotkeys/__ivy_ngcc__/fesm2015/angular2-hotkeys.js");
/* harmony import */ var src_app_data_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data/api.service */ "./src/app/data/api.service.ts");
/* harmony import */ var _containers_pages_list_page_header_list_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../containers/pages/list-page-header/list-page-header.component */ "./src/app/containers/pages/list-page-header/list-page-header.component.ts");
/* harmony import */ var _containers_pages_add_new_product_modal_add_new_product_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../containers/pages/add-new-product-modal/add-new-product-modal.component */ "./src/app/containers/pages/add-new-product-modal/add-new-product-modal.component.ts");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/__ivy_ngcc__/fesm2015/ngx-contextmenu.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");











const _c0 = ["basicMenu"];
const _c1 = ["addNewModalRef"];
function ImageListComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ImageListComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Move to archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ImageListComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function (a1) { return { "card d-flex flex-row mb-3": true, "active": a1 }; };
function ImageListComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ImageListComponent_div_9_div_1_Template_input_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const p_r16 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.onSelect(p_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, ctx_r15.isSelected(p_r16)))("contextMenu", _r1)("contextMenuSubject", p_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r16.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r16.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r16.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("badge badge-pill badge-" + p_r16.statusColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r16.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "customCheck" + i_r17)("checked", ctx_r15.isSelected(p_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "customCheck" + i_r17);
} }
function ImageListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageListComponent_div_9_div_1_Template, 15, 14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.data);
} }
function ImageListComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ImageListComponent_div_10_div_1_Template_input_change_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const p_r21 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.onSelect(p_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, ctx_r20.isSelected(p_r21)))("contextMenu", _r1)("contextMenuSubject", p_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r21.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", p_r21.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r21.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r21.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r21.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("badge badge-pill badge-" + p_r21.statusColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r21.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "customCheck" + i_r22)("checked", ctx_r20.isSelected(p_r21));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "customCheck" + i_r22);
} }
function ImageListComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageListComponent_div_10_div_1_Template, 18, 16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.data);
} }
const _c3 = function (a1) { return { "card": true, "active": a1 }; };
function ImageListComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ImageListComponent_div_11_div_2_Template_input_change_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const p_r26 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.onSelect(p_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r26 = ctx.$implicit;
    const i_r27 = ctx.index;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contextMenu", _r1)("contextMenuSubject", p_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c3, ctx_r25.isSelected(p_r26)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r26.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", p_r26.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("badge badge-pill position-absolute badge-top-left badge-" + p_r26.statusColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r26.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "customCheck" + i_r27)("checked", ctx_r25.isSelected(p_r26));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "customCheck" + i_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r26.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r26.date);
} }
function ImageListComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageListComponent_div_11_div_2_Template, 21, 15, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.data);
} }
function ImageListComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 45);
} }
function ImageListComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 46);
} }
const _c4 = function () { return [4, 8, 12]; };
class ImageListComponent {
    constructor(hotkeysService, apiService) {
        this.hotkeysService = hotkeysService;
        this.apiService = apiService;
        this.displayMode = 'image';
        this.selectAllState = '';
        this.selected = [];
        this.data = [];
        this.currentPage = 1;
        this.itemsPerPage = 8;
        this.search = '';
        this.orderBy = '';
        this.endOfTheList = false;
        this.totalItem = 0;
        this.totalPage = 0;
        this.hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["Hotkey"]('ctrl+a', (event) => {
            this.selected = [...this.data];
            return false;
        }));
        this.hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["Hotkey"]('ctrl+d', (event) => {
            this.selected = [];
            return false;
        }));
    }
    ngOnInit() {
        this.loadData(this.itemsPerPage, this.currentPage, this.search, this.orderBy);
    }
    loadData(pageSize = 10, currentPage = 1, search = '', orderBy = '') {
        this.itemsPerPage = pageSize;
        this.currentPage = currentPage;
        this.search = search;
        this.orderBy = orderBy;
        this.apiService.getProducts(pageSize, currentPage, search, orderBy).subscribe(data => {
            if (data.status) {
                this.isLoading = false;
                this.data = data.data.map(x => {
                    return Object.assign(Object.assign({}, x), { img: x.img.replace("/img/", "/img/products/") });
                });
                this.totalItem = data.totalItem;
                this.totalPage = data.totalPage;
                this.setSelectAllState();
            }
            else {
                this.endOfTheList = true;
            }
        }, error => {
            this.isLoading = false;
        });
    }
    changeDisplayMode(mode) {
        this.displayMode = mode;
    }
    showAddNewModal() {
        this.addNewModalRef.show();
    }
    isSelected(p) {
        return this.selected.findIndex(x => x.id === p.id) > -1;
    }
    onSelect(item) {
        if (this.isSelected(item)) {
            this.selected = this.selected.filter(x => x.id !== item.id);
        }
        else {
            this.selected.push(item);
        }
        this.setSelectAllState();
    }
    setSelectAllState() {
        if (this.selected.length === this.data.length) {
            this.selectAllState = 'checked';
        }
        else if (this.selected.length !== 0) {
            this.selectAllState = 'indeterminate';
        }
        else {
            this.selectAllState = '';
        }
    }
    selectAllChange($event) {
        if ($event.target.checked) {
            this.selected = [...this.data];
        }
        else {
            this.selected = [];
        }
        this.setSelectAllState();
    }
    pageChanged(event) {
        this.loadData(this.itemsPerPage, event.page, this.search, this.orderBy);
    }
    itemsPerPageChange(perPage) {
        this.loadData(perPage, 1, this.search, this.orderBy);
    }
    changeOrderBy(item) {
        this.loadData(this.itemsPerPage, 1, this.search, item.value);
    }
    searchKeyUp(event) {
        const val = event.target.value.toLowerCase().trim();
        this.loadData(this.itemsPerPage, 1, val, this.orderBy);
    }
    onContextMenuClick(action, item) {
        console.log('onContextMenuClick -> action :  ', action, ', item.title :', item.title);
    }
}
ImageListComponent.ɵfac = function ImageListComponent_Factory(t) { return new (t || ImageListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["HotkeysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
ImageListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageListComponent, selectors: [["app-image-list"]], viewQuery: function ImageListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.basicMenu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addNewModalRef = _t.first);
    } }, decls: 18, vars: 15, consts: [[3, "displayMode", "itemOptionsPerPage", "itemsPerPage", "selectAllState", "changeDisplayMode", "addNewItem", "selectAllChange", "itemsPerPageChange", "changeOrderBy", "searchKeyUp"], ["addNewModalRef", ""], ["basicMenu", ""], ["contextMenuItem", "", 3, "execute"], [1, "row"], ["class", "col-12 list", 4, "ngIf"], [1, "col-12"], [1, "justify-content-center", 3, "totalItems", "itemsPerPage", "rotate", "maxSize", "ngModel", "customNextTemplate", "customPreviousTemplate", "ngModelChange", "pageChanged"], ["nextTemplate", ""], ["prevTemplate", ""], [1, "simple-icon-docs", "mr-1"], [1, "simple-icon-drawer", "mr-1"], [1, "simple-icon-trash", "mr-1"], [1, "col-12", "list"], [3, "ngClass", "contextMenu", "contextMenuSubject", 4, "ngFor", "ngForOf"], [3, "ngClass", "contextMenu", "contextMenuSubject"], [1, "d-flex", "flex-grow-1", "min-width-zero"], [1, "card-body", "align-self-center", "d-flex", "flex-column", "flex-md-row", "justify-content-between", "min-width-zero", "align-items-md-center"], ["href", "javascript:;", 1, "list-item-heading", "mb-0", "truncate", "w-40", "w-xs-100"], [1, "mb-0", "text-muted", "text-small", "w-15", "w-xs-100"], [1, "w-15", "w-xs-100"], [1, "custom-control", "custom-checkbox", "mb-1", "align-self-center", "pr-4"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "checked", "change"], [1, "custom-control-label", 3, "for"], ["href", "javascript:;", 1, "d-flex"], [1, "list-thumbnail", "responsive", "border-0", "card-img-left", 3, "src", "alt"], [1, "pl-2", "d-flex", "flex-grow-1", "min-width-zero"], [1, "card-body", "align-self-center", "d-flex", "flex-column", "flex-lg-row", "justify-content-between", "min-width-zero", "align-items-lg-center"], ["href", "javascript:;", 1, "w-40", "w-sm-100"], [1, "list-item-heading", "mb-0", "truncate"], [1, "mb-0", "text-muted", "text-small", "w-15", "w-sm-100"], [1, "w-15", "w-sm-100"], ["class", "col-xl-3 col-lg-4 col-12 col-sm-6 mb-4", 3, "contextMenu", "contextMenuSubject", 4, "ngFor", "ngForOf"], [1, "col-xl-3", "col-lg-4", "col-12", "col-sm-6", "mb-4", 3, "contextMenu", "contextMenuSubject"], [3, "ngClass"], [1, "position-relative"], ["href", "javascript:;"], [1, "card-img-top", 3, "src", "alt"], [1, "card-body"], [1, "col-2"], [1, "custom-control", "custom-checkbox", "pl-1"], [1, "custom-control", "custom-checkbox", "mb-0"], [1, "col-10"], [1, "list-item-heading", "mb-4", "pt-1"], [1, "text-muted", "text-small", "mb-0", "font-weight-light"], [1, "simple-icon-arrow-right"], [1, "simple-icon-arrow-left"]], template: function ImageListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-list-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeDisplayMode", function ImageListComponent_Template_app_list_page_header_changeDisplayMode_0_listener($event) { return ctx.changeDisplayMode($event); })("addNewItem", function ImageListComponent_Template_app_list_page_header_addNewItem_0_listener() { return ctx.showAddNewModal(); })("selectAllChange", function ImageListComponent_Template_app_list_page_header_selectAllChange_0_listener($event) { return ctx.selectAllChange($event); })("itemsPerPageChange", function ImageListComponent_Template_app_list_page_header_itemsPerPageChange_0_listener($event) { return ctx.itemsPerPageChange($event); })("changeOrderBy", function ImageListComponent_Template_app_list_page_header_changeOrderBy_0_listener($event) { return ctx.changeOrderBy($event); })("searchKeyUp", function ImageListComponent_Template_app_list_page_header_searchKeyUp_0_listener($event) { return ctx.searchKeyUp($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-add-new-product-modal", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "context-menu", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ImageListComponent_ng_template_5_Template, 3, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("execute", function ImageListComponent_Template_ng_template_execute_5_listener($event) { return ctx.onContextMenuClick("copy", $event.item); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ImageListComponent_ng_template_6_Template, 3, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("execute", function ImageListComponent_Template_ng_template_execute_6_listener($event) { return ctx.onContextMenuClick("move-to-archive", $event.item); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ImageListComponent_ng_template_7_Template, 3, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("execute", function ImageListComponent_Template_ng_template_execute_7_listener($event) { return ctx.onContextMenuClick("delete", $event.item); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ImageListComponent_div_9_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ImageListComponent_div_10_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ImageListComponent_div_11_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "pagination", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ImageListComponent_Template_pagination_ngModelChange_13_listener($event) { return ctx.currentPage = $event; })("pageChanged", function ImageListComponent_Template_pagination_pageChanged_13_listener($event) { return ctx.pageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ImageListComponent_ng_template_14_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ImageListComponent_ng_template_16_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayMode", ctx.displayMode)("itemOptionsPerPage", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c4))("itemsPerPage", ctx.itemsPerPage)("selectAllState", ctx.selectAllState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMode === "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMode === "thumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMode === "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalItems", ctx.totalItem)("itemsPerPage", ctx.itemsPerPage)("rotate", true)("maxSize", 5)("ngModel", ctx.currentPage)("customNextTemplate", _r8)("customPreviousTemplate", _r10);
    } }, directives: [_containers_pages_list_page_header_list_page_header_component__WEBPACK_IMPORTED_MODULE_3__["ListPageHeaderComponent"], _containers_pages_add_new_product_modal_add_new_product_modal_component__WEBPACK_IMPORTED_MODULE_4__["AddNewProductModalComponent"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_5__["ContextMenuComponent"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_5__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_5__["ɵa"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image-list',
                templateUrl: './image-list.component.html'
            }]
    }], function () { return [{ type: angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["HotkeysService"] }, { type: src_app_data_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, { basicMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['basicMenu']
        }], addNewModalRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['addNewModalRef', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/views/app/pages/product/product.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/app/pages/product/product.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ProductComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 1, vars: 0, template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product',
                templateUrl: './product.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/app/pages/product/product.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/app/pages/product/product.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _thumb_list_thumb_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thumb-list/thumb-list.component */ "./src/app/views/app/pages/product/thumb-list/thumb-list.component.ts");
/* harmony import */ var _image_list_image_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-list/image-list.component */ "./src/app/views/app/pages/product/image-list/image-list.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/details.component */ "./src/app/views/app/pages/product/details/details.component.ts");
/* harmony import */ var _data_list_data_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data-list/data-list.component */ "./src/app/views/app/pages/product/data-list/data-list.component.ts");
/* harmony import */ var _product_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product.routing */ "./src/app/views/app/pages/product/product.routing.ts");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product.component */ "./src/app/views/app/pages/product/product.component.ts");
/* harmony import */ var _details_alt_details_alt_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./details-alt/details-alt.component */ "./src/app/views/app/pages/product/details-alt/details-alt.component.ts");
/* harmony import */ var src_app_components_carousel_components_carousel_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/carousel/components.carousel.module */ "./src/app/components/carousel/components.carousel.module.ts");
/* harmony import */ var src_app_containers_pages_pages_containers_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/containers/pages/pages.containers.module */ "./src/app/containers/pages/pages.containers.module.ts");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-hotkeys */ "./node_modules/angular2-hotkeys/__ivy_ngcc__/fesm2015/angular2-hotkeys.js");
/* harmony import */ var src_app_components_cards_components_cards_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/cards/components.cards.module */ "./src/app/components/cards/components.cards.module.ts");
/* harmony import */ var src_app_components_charts_components_charts_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/charts/components.charts.module */ "./src/app/components/charts/components.charts.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_containers_layout_layout_containers_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/containers/layout/layout.containers.module */ "./src/app/containers/layout/layout.containers.module.ts");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/__ivy_ngcc__/fesm2015/ngx-contextmenu.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/accordion/fesm2015/ngx-bootstrap-accordion.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/rating */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/rating/fesm2015/ngx-bootstrap-rating.js");
































class ProductModule {
}
ProductModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductModule });
ProductModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductModule_Factory(t) { return new (t || ProductModule)(); }, imports: [[
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _product_routing__WEBPACK_IMPORTED_MODULE_6__["ProductRoutingModule"],
            src_app_components_carousel_components_carousel_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsCarouselModule"],
            src_app_containers_layout_layout_containers_module__WEBPACK_IMPORTED_MODULE_15__["LayoutContainersModule"],
            src_app_containers_pages_pages_containers_module__WEBPACK_IMPORTED_MODULE_10__["PagesContainersModule"],
            src_app_components_cards_components_cards_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsCardsModule"],
            src_app_components_charts_components_charts_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsChartModule"],
            ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_22__["RatingModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            angular2_hotkeys__WEBPACK_IMPORTED_MODULE_11__["HotkeyModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_21__["PaginationModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_20__["TabsModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__["ModalModule"].forRoot(),
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_18__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_17__["AccordionModule"].forRoot(),
            ngx_contextmenu__WEBPACK_IMPORTED_MODULE_16__["ContextMenuModule"].forRoot({
                useBootstrap4: true,
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductModule, { declarations: [_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_5__["DataListComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"], _image_list_image_list_component__WEBPACK_IMPORTED_MODULE_3__["ImageListComponent"], _thumb_list_thumb_list_component__WEBPACK_IMPORTED_MODULE_2__["ThumbListComponent"], _product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"], _details_alt_details_alt_component__WEBPACK_IMPORTED_MODULE_8__["DetailsAltComponent"]], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _product_routing__WEBPACK_IMPORTED_MODULE_6__["ProductRoutingModule"],
        src_app_components_carousel_components_carousel_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsCarouselModule"],
        src_app_containers_layout_layout_containers_module__WEBPACK_IMPORTED_MODULE_15__["LayoutContainersModule"],
        src_app_containers_pages_pages_containers_module__WEBPACK_IMPORTED_MODULE_10__["PagesContainersModule"],
        src_app_components_cards_components_cards_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsCardsModule"],
        src_app_components_charts_components_charts_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsChartModule"], ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_22__["RatingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], angular2_hotkeys__WEBPACK_IMPORTED_MODULE_11__["HotkeyModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_21__["PaginationModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_20__["TabsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__["ModalModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_18__["BsDropdownModule"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_17__["AccordionModule"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_16__["ContextMenuModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_5__["DataListComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"], _image_list_image_list_component__WEBPACK_IMPORTED_MODULE_3__["ImageListComponent"], _thumb_list_thumb_list_component__WEBPACK_IMPORTED_MODULE_2__["ThumbListComponent"], _product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"], _details_alt_details_alt_component__WEBPACK_IMPORTED_MODULE_8__["DetailsAltComponent"]],
                imports: [
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                    _product_routing__WEBPACK_IMPORTED_MODULE_6__["ProductRoutingModule"],
                    src_app_components_carousel_components_carousel_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsCarouselModule"],
                    src_app_containers_layout_layout_containers_module__WEBPACK_IMPORTED_MODULE_15__["LayoutContainersModule"],
                    src_app_containers_pages_pages_containers_module__WEBPACK_IMPORTED_MODULE_10__["PagesContainersModule"],
                    src_app_components_cards_components_cards_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsCardsModule"],
                    src_app_components_charts_components_charts_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsChartModule"],
                    ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_22__["RatingModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                    angular2_hotkeys__WEBPACK_IMPORTED_MODULE_11__["HotkeyModule"].forRoot(),
                    ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_21__["PaginationModule"].forRoot(),
                    ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_20__["TabsModule"].forRoot(),
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__["ModalModule"].forRoot(),
                    ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_18__["BsDropdownModule"].forRoot(),
                    ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_17__["AccordionModule"].forRoot(),
                    ngx_contextmenu__WEBPACK_IMPORTED_MODULE_16__["ContextMenuModule"].forRoot({
                        useBootstrap4: true,
                    })
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/app/pages/product/product.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/views/app/pages/product/product.routing.ts ***!
  \************************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.component */ "./src/app/views/app/pages/product/product.component.ts");
/* harmony import */ var _data_list_data_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-list/data-list.component */ "./src/app/views/app/pages/product/data-list/data-list.component.ts");
/* harmony import */ var _thumb_list_thumb_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./thumb-list/thumb-list.component */ "./src/app/views/app/pages/product/thumb-list/thumb-list.component.ts");
/* harmony import */ var _image_list_image_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image-list/image-list.component */ "./src/app/views/app/pages/product/image-list/image-list.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details/details.component */ "./src/app/views/app/pages/product/details/details.component.ts");
/* harmony import */ var _details_alt_details_alt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./details-alt/details-alt.component */ "./src/app/views/app/pages/product/details-alt/details-alt.component.ts");










const routes = [
    {
        path: '', component: _product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"],
        children: [
            { path: '', redirectTo: 'data-list', pathMatch: 'full' },
            { path: 'data-list', component: _data_list_data_list_component__WEBPACK_IMPORTED_MODULE_3__["DataListComponent"] },
            { path: 'thumb-list', component: _thumb_list_thumb_list_component__WEBPACK_IMPORTED_MODULE_4__["ThumbListComponent"] },
            { path: 'image-list', component: _image_list_image_list_component__WEBPACK_IMPORTED_MODULE_5__["ImageListComponent"] },
            { path: 'details', component: _details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"] },
            { path: 'details-alt', component: _details_alt_details_alt_component__WEBPACK_IMPORTED_MODULE_7__["DetailsAltComponent"] },
        ]
    }
];
class ProductRoutingModule {
}
ProductRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductRoutingModule });
ProductRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductRoutingModule_Factory(t) { return new (t || ProductRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/app/pages/product/thumb-list/thumb-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/app/pages/product/thumb-list/thumb-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: ThumbListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbListComponent", function() { return ThumbListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-hotkeys */ "./node_modules/angular2-hotkeys/__ivy_ngcc__/fesm2015/angular2-hotkeys.js");
/* harmony import */ var src_app_data_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data/api.service */ "./src/app/data/api.service.ts");
/* harmony import */ var _containers_pages_list_page_header_list_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../containers/pages/list-page-header/list-page-header.component */ "./src/app/containers/pages/list-page-header/list-page-header.component.ts");
/* harmony import */ var _containers_pages_add_new_product_modal_add_new_product_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../containers/pages/add-new-product-modal/add-new-product-modal.component */ "./src/app/containers/pages/add-new-product-modal/add-new-product-modal.component.ts");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/__ivy_ngcc__/fesm2015/ngx-contextmenu.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");











const _c0 = ["basicMenu"];
const _c1 = ["addNewModalRef"];
function ThumbListComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ThumbListComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Move to archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ThumbListComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function (a1) { return { "card d-flex flex-row mb-3": true, "active": a1 }; };
function ThumbListComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ThumbListComponent_div_9_div_1_Template_input_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const p_r16 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.onSelect(p_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, ctx_r15.isSelected(p_r16)))("contextMenu", _r1)("contextMenuSubject", p_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r16.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r16.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r16.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("badge badge-pill badge-" + p_r16.statusColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r16.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "customCheck" + i_r17)("checked", ctx_r15.isSelected(p_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "customCheck" + i_r17);
} }
function ThumbListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ThumbListComponent_div_9_div_1_Template, 15, 14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.data);
} }
function ThumbListComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ThumbListComponent_div_10_div_1_Template_input_change_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const p_r21 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.onSelect(p_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, ctx_r20.isSelected(p_r21)))("contextMenu", _r1)("contextMenuSubject", p_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r21.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", p_r21.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r21.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r21.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r21.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("badge badge-pill badge-" + p_r21.statusColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r21.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "customCheck" + i_r22)("checked", ctx_r20.isSelected(p_r21));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "customCheck" + i_r22);
} }
function ThumbListComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ThumbListComponent_div_10_div_1_Template, 18, 16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.data);
} }
const _c3 = function (a1) { return { "card": true, "active": a1 }; };
function ThumbListComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ThumbListComponent_div_11_div_2_Template_input_change_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const p_r26 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.onSelect(p_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r26 = ctx.$implicit;
    const i_r27 = ctx.index;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contextMenu", _r1)("contextMenuSubject", p_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c3, ctx_r25.isSelected(p_r26)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r26.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", p_r26.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("badge badge-pill position-absolute badge-top-left badge-" + p_r26.statusColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r26.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "customCheck" + i_r27)("checked", ctx_r25.isSelected(p_r26));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "customCheck" + i_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r26.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r26.date);
} }
function ThumbListComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ThumbListComponent_div_11_div_2_Template, 21, 15, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.data);
} }
function ThumbListComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 45);
} }
function ThumbListComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 46);
} }
const _c4 = function () { return [5, 10, 20]; };
class ThumbListComponent {
    constructor(hotkeysService, apiService) {
        this.hotkeysService = hotkeysService;
        this.apiService = apiService;
        this.displayMode = 'thumb';
        this.selectAllState = '';
        this.selected = [];
        this.data = [];
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.search = '';
        this.orderBy = '';
        this.endOfTheList = false;
        this.totalItem = 0;
        this.totalPage = 0;
        this.hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["Hotkey"]('ctrl+a', (event) => {
            this.selected = [...this.data];
            return false;
        }));
        this.hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["Hotkey"]('ctrl+d', (event) => {
            this.selected = [];
            return false;
        }));
    }
    ngOnInit() {
        this.loadData(this.itemsPerPage, this.currentPage, this.search, this.orderBy);
    }
    loadData(pageSize = 10, currentPage = 1, search = '', orderBy = '') {
        this.itemsPerPage = pageSize;
        this.currentPage = currentPage;
        this.search = search;
        this.orderBy = orderBy;
        this.apiService.getProducts(pageSize, currentPage, search, orderBy).subscribe(data => {
            if (data.status) {
                this.isLoading = false;
                this.data = data.data.map(x => {
                    return Object.assign(Object.assign({}, x), { img: x.img.replace("/img/", "/img/products/") });
                });
                this.totalItem = data.totalItem;
                this.totalPage = data.totalPage;
                this.setSelectAllState();
            }
            else {
                this.endOfTheList = true;
            }
        }, error => {
            this.isLoading = false;
        });
    }
    changeDisplayMode(mode) {
        this.displayMode = mode;
    }
    showAddNewModal() {
        this.addNewModalRef.show();
    }
    isSelected(p) {
        return this.selected.findIndex(x => x.id === p.id) > -1;
    }
    onSelect(item) {
        if (this.isSelected(item)) {
            this.selected = this.selected.filter(x => x.id !== item.id);
        }
        else {
            this.selected.push(item);
        }
        this.setSelectAllState();
    }
    setSelectAllState() {
        if (this.selected.length === this.data.length) {
            this.selectAllState = 'checked';
        }
        else if (this.selected.length !== 0) {
            this.selectAllState = 'indeterminate';
        }
        else {
            this.selectAllState = '';
        }
    }
    selectAllChange($event) {
        if ($event.target.checked) {
            this.selected = [...this.data];
        }
        else {
            this.selected = [];
        }
        this.setSelectAllState();
    }
    pageChanged(event) {
        this.loadData(this.itemsPerPage, event.page, this.search, this.orderBy);
    }
    itemsPerPageChange(perPage) {
        this.loadData(perPage, 1, this.search, this.orderBy);
    }
    changeOrderBy(item) {
        this.loadData(this.itemsPerPage, 1, this.search, item.value);
    }
    searchKeyUp(event) {
        const val = event.target.value.toLowerCase().trim();
        this.loadData(this.itemsPerPage, 1, val, this.orderBy);
    }
    onContextMenuClick(action, item) {
        console.log('onContextMenuClick -> action :  ', action, ', item.title :', item.title);
    }
}
ThumbListComponent.ɵfac = function ThumbListComponent_Factory(t) { return new (t || ThumbListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["HotkeysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
ThumbListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThumbListComponent, selectors: [["app-thumb-list"]], viewQuery: function ThumbListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.basicMenu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addNewModalRef = _t.first);
    } }, decls: 18, vars: 15, consts: [[3, "displayMode", "itemOptionsPerPage", "itemsPerPage", "selectAllState", "changeDisplayMode", "addNewItem", "selectAllChange", "itemsPerPageChange", "changeOrderBy", "searchKeyUp"], ["addNewModalRef", ""], ["basicMenu", ""], ["contextMenuItem", "", 3, "execute"], [1, "row"], ["class", "col-12 list", 4, "ngIf"], [1, "col-12"], [1, "justify-content-center", 3, "totalItems", "itemsPerPage", "rotate", "maxSize", "ngModel", "customNextTemplate", "customPreviousTemplate", "ngModelChange", "pageChanged"], ["nextTemplate", ""], ["prevTemplate", ""], [1, "simple-icon-docs", "mr-1"], [1, "simple-icon-drawer", "mr-1"], [1, "simple-icon-trash", "mr-1"], [1, "col-12", "list"], [3, "ngClass", "contextMenu", "contextMenuSubject", 4, "ngFor", "ngForOf"], [3, "ngClass", "contextMenu", "contextMenuSubject"], [1, "d-flex", "flex-grow-1", "min-width-zero"], [1, "card-body", "align-self-center", "d-flex", "flex-column", "flex-md-row", "justify-content-between", "min-width-zero", "align-items-md-center"], ["href", "javascript:;", 1, "list-item-heading", "mb-0", "truncate", "w-40", "w-xs-100"], [1, "mb-0", "text-muted", "text-small", "w-15", "w-xs-100"], [1, "w-15", "w-xs-100"], [1, "custom-control", "custom-checkbox", "mb-1", "align-self-center", "pr-4"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "checked", "change"], [1, "custom-control-label", 3, "for"], ["href", "javascript:;", 1, "d-flex"], [1, "list-thumbnail", "responsive", "border-0", "card-img-left", 3, "src", "alt"], [1, "pl-2", "d-flex", "flex-grow-1", "min-width-zero"], [1, "card-body", "align-self-center", "d-flex", "flex-column", "flex-lg-row", "justify-content-between", "min-width-zero", "align-items-lg-center"], ["href", "javascript:;", 1, "w-40", "w-sm-100"], [1, "list-item-heading", "mb-0", "truncate"], [1, "mb-0", "text-muted", "text-small", "w-15", "w-sm-100"], [1, "w-15", "w-sm-100"], ["class", "col-xl-3 col-lg-4 col-12 col-sm-6 mb-4", 3, "contextMenu", "contextMenuSubject", 4, "ngFor", "ngForOf"], [1, "col-xl-3", "col-lg-4", "col-12", "col-sm-6", "mb-4", 3, "contextMenu", "contextMenuSubject"], [3, "ngClass"], [1, "position-relative"], ["href", "javascript:;"], [1, "card-img-top", 3, "src", "alt"], [1, "card-body"], [1, "col-2"], [1, "custom-control", "custom-checkbox", "pl-1"], [1, "custom-control", "custom-checkbox", "mb-0"], [1, "col-10"], [1, "list-item-heading", "mb-4", "pt-1"], [1, "text-muted", "text-small", "mb-0", "font-weight-light"], [1, "simple-icon-arrow-right"], [1, "simple-icon-arrow-left"]], template: function ThumbListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-list-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeDisplayMode", function ThumbListComponent_Template_app_list_page_header_changeDisplayMode_0_listener($event) { return ctx.changeDisplayMode($event); })("addNewItem", function ThumbListComponent_Template_app_list_page_header_addNewItem_0_listener() { return ctx.showAddNewModal(); })("selectAllChange", function ThumbListComponent_Template_app_list_page_header_selectAllChange_0_listener($event) { return ctx.selectAllChange($event); })("itemsPerPageChange", function ThumbListComponent_Template_app_list_page_header_itemsPerPageChange_0_listener($event) { return ctx.itemsPerPageChange($event); })("changeOrderBy", function ThumbListComponent_Template_app_list_page_header_changeOrderBy_0_listener($event) { return ctx.changeOrderBy($event); })("searchKeyUp", function ThumbListComponent_Template_app_list_page_header_searchKeyUp_0_listener($event) { return ctx.searchKeyUp($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-add-new-product-modal", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "context-menu", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ThumbListComponent_ng_template_5_Template, 3, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("execute", function ThumbListComponent_Template_ng_template_execute_5_listener($event) { return ctx.onContextMenuClick("copy", $event.item); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ThumbListComponent_ng_template_6_Template, 3, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("execute", function ThumbListComponent_Template_ng_template_execute_6_listener($event) { return ctx.onContextMenuClick("move-to-archive", $event.item); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ThumbListComponent_ng_template_7_Template, 3, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("execute", function ThumbListComponent_Template_ng_template_execute_7_listener($event) { return ctx.onContextMenuClick("delete", $event.item); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ThumbListComponent_div_9_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ThumbListComponent_div_10_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ThumbListComponent_div_11_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "pagination", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ThumbListComponent_Template_pagination_ngModelChange_13_listener($event) { return ctx.currentPage = $event; })("pageChanged", function ThumbListComponent_Template_pagination_pageChanged_13_listener($event) { return ctx.pageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ThumbListComponent_ng_template_14_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ThumbListComponent_ng_template_16_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayMode", ctx.displayMode)("itemOptionsPerPage", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c4))("itemsPerPage", ctx.itemsPerPage)("selectAllState", ctx.selectAllState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMode === "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMode === "thumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMode === "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalItems", ctx.totalItem)("itemsPerPage", ctx.itemsPerPage)("rotate", true)("maxSize", 5)("ngModel", ctx.currentPage)("customNextTemplate", _r8)("customPreviousTemplate", _r10);
    } }, directives: [_containers_pages_list_page_header_list_page_header_component__WEBPACK_IMPORTED_MODULE_3__["ListPageHeaderComponent"], _containers_pages_add_new_product_modal_add_new_product_modal_component__WEBPACK_IMPORTED_MODULE_4__["AddNewProductModalComponent"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_5__["ContextMenuComponent"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_5__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_5__["ɵa"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThumbListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-thumb-list',
                templateUrl: './thumb-list.component.html'
            }]
    }], function () { return [{ type: angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["HotkeysService"] }, { type: src_app_data_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, { basicMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['basicMenu']
        }], addNewModalRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['addNewModalRef', { static: true }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=product-product-module.js.map