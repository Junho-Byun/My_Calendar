(function webpackUniversalModuleDefinition(root, factory) {
    // root = this(window), factory = function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__)
    // 밑에 인자로 들어간 typeof self !== 'undefined' ? self : this
    // 밑에 인자로 들어간 function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__){}
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("moment"), require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["moment", "jquery"], factory);
	else if(typeof exports === 'object')
		exports["MyCalendar"] = factory(require("moment"), require("jquery"));
	else
		root["MyCalendar"] = factory(root["moment"], root["jQuery"]);
})(typeof self !== 'undefined' ? self : this, 
    function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__) { return  (function(modules) { // webpackBootstrap
 	// The module cache
                var installedModules = {};

                // The require function
                function __webpack_require__(moduleId) {

                    // Check if module is in cache
                    if(installedModules[moduleId]) {
                        return installedModules[moduleId].exports;
                    }
                    // Create a new module (and put it into the cache)
                    var module = installedModules[moduleId] = {
                        i: moduleId,
                        l: false,
                        exports: {}
                    };

                    // Execute the module function
                    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

                    // Flag the module as loaded
                    module.l = true;

                    // Return the exports of the module
                    return module.exports;
                }


                // expose the modules object (__webpack_modules__)
                __webpack_require__.m = modules;

                // expose the module cache
                __webpack_require__.c = installedModules;

                // define getter function for harmony exports
                __webpack_require__.d = function(exports, name, getter) {
                    if(!__webpack_require__.o(exports, name)) {
                        Object.defineProperty(exports, name, {
                            configurable: false,
                            enumerable: true,
                            get: getter
                        });
                    }
                };

                // getDefaultExport function for compatibility with non-harmony modules
                __webpack_require__.n = function(module) {
                    var getter = module && module.__esModule ?
                        function getDefault() { return module['default']; } :
                        function getModuleExports() { return module; };
                    __webpack_require__.d(getter, 'a', getter);
                    return getter;
                };

                // Object.prototype.hasOwnProperty.call
                __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

                // __webpack_public_path__
                __webpack_require__.p = "";

                // Load entry module and return exports
                return __webpack_require__(__webpack_require__.s = 4);
            })([ //])
    /* 0 */
    /***/ 
        (function(module, exports) {
        
            module.exports = __WEBPACK_EXTERNAL_MODULE_0__;
        
        }),
        
        /* 1 */,
        /* 2 */
        /***/ 
        (function(module, exports) {
        
        /*
        derived from:
        https://github.com/Microsoft/tslib/blob/v1.6.0/tslib.js
        
        only include the helpers we need, to keep down filesize
        */
            var extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b)
                    if (b.hasOwnProperty(p))
                        d[p] = b[p]; };
            exports.__extends = function (d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
        }),

        /* 3 */
        /* jQuery */
        /***/ 
        (function(module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
        }),

        /***/ 
        /* 4 */
        (function(module, exports, __webpack_require__) {
            var $ = __webpack_require__(3); // jQuery
            var Calendar_1 = __webpack_require__(6);

            $.fn.fullCalendar = function (options) {
                var args = Array.prototype.slice.call(arguments, 1); // for a possible method call
                var res = this; // what this function will return (this jQuery object by default)
                this.each(function (i, _element) {
                    var element = $(_element);
                    var calendar = element.data('fullCalendar'); // get the existing calendar object (if any)
                    var singleRes; // the returned value of this single method call
                    // a method call
                    if (typeof options === 'string') {
                        if (options === 'getCalendar') {
                            if (!i) {
                                res = calendar;
                            }
                        }
                        else if (options === 'destroy') {
                            if (calendar) {
                                calendar.destroy();
                                element.removeData('fullCalendar');
                            }
                        }
                        else if (!calendar) {
                            util_1.warn('Attempting to call a FullCalendar method on an element with no calendar.');
                        }
                        else if ($.isFunction(calendar[options])) {
                            singleRes = calendar[options].apply(calendar, args);
                            if (!i) {
                                res = singleRes; // record the first method call result
                            }
                            if (options === 'destroy') {
                                element.removeData('fullCalendar');
                            }
                        }
                        else {
                            util_1.warn("'" + options + "' is an unknown FullCalendar method.");
                        }
                    }
                    else if (!calendar) {
                        calendar = new Calendar_1.default(element, options);
                        element.data('fullCalendar', calendar);
                        calendar.render();
                    }
                });
                return res;
            };

            $.fn.myCalendar = function (options){
                /* 
                options:{
                    buttonText: {today: "today", month: "month", week: "week", day: "day"}
                    drop: ƒ (date, allDay)
                    droppable: true
                    editable: true
                    header: {left: "prev,next today", center: "title", right: "month,agendaWeek,agendaDay"}
                }
                value when I refresh the page
                */
                var args = Array.prototype.slice.call(arguments, 1);
                /* 
                    for a possible method call
                */
                var res = this; // what this function will return (this jQuery obj by default)
                
                /*
                    this = <div id="calendar" class="fc fc-unthemed fc-ltr"></div>
                    i = 0, _element = div#calendar.fc.fc-unthemed.fc-ltr
                    first value when refresh it
                    
                */
                this.each(function (i, _element){
                    var element = $(_element);
                    var calendar = element.data('myCalendar'); // get the existing calendar object (if any)
                    var singleRes; // the returned value of this single method call

                    //a method call
                    if (typeof options ==='string'){
                        if (options === 'getCalendar'){
                            if(!i){
                                res = calendar;
                            }
                        }else if (options ==='destroy'){
                            if (calendar){
                                calendar.destroy();
                                element.removeData('myCalendar');
                            }
                        }else if (!calendar){
                            util_1.warn('Attempting to call a FullCalendar method on an element with no calendar');
                        }else if($.isfunction(calendar[options])){
                            singleRes = calendar[options].apply(calendar, args);
                            if(!i)
                                res = singleRes; // record the first medhtod call result;
                            if(options==='destroy')
                                element.removeData('myCalendar');
                        }else{
                            util_1.warn("'" +options +"' is an unknown FullCalendar method.");
                        }
                    }
                    else if (!calendar){
                        // 처음에는 데이터가 없으니 calendar 만듦
                        // element = w.fn.init [div#calendar.fc.fc-unthemed.fc-ltr]
                        calendar = new Calendar_1(element, options);
                        element.data('myCalendar', calendar);
                        calendar.render();
                    }
                    return res;
                });
            };
        }),

        /* 5 */
        /***/ 
        (function(module, exports, __webpack_require__) {

            Object.defineProperty(exports, "__esModule", { value: true });
            exports.version = '3.8.2';
            // When introducing internal API incompatibilities (where fullcalendar plugins would break),
            // the minor version of the calendar should be upped (ex: 2.7.2 -> 2.8.0)
            // and the below integer should be incremented.
            var Calendar_1 = __webpack_require__(6);
            exports.Calendar = Calendar_1.default;
        }),

        /* 6 */
        /* Calendar */
        /***/ 
        (function(module, exports, __webpack_require__) {

            Object.defineProperty(exports, "__esModule", { value: true });
            var $ = __webpack_require__(3);

            
            var Calendar = /** @class */ (function () {
                function Calendar(el, overrides) {
                    this.loadingLevel = 0; // number of simultaneous loading tasks
                    this.ignoreUpdateViewSize = 0;
                    this.freezeContentHeightDepth = 0;
                    // declare the current calendar instance relies on GlobalEmitter. needed for garbage collection.
                    // unneeded() is called in destroy.
                    // GlobalEmitter_1.default.needed();
                    this.el = el;
                    this.viewsByType = {};
                    // this.optionsManager = new OptionsManager_1.default(this, overrides);
                    // this.viewSpecManager = new ViewSpecManager_1.default(this.optionsManager, this);
                    // this.initMomentInternals(); // needs to happen after options hash initialized
                    // this.initCurrentDate();
                    // this.initEventManager();
                    // this.constraints = new Constraints_1.default(this.eventManager, this);
                    // this.constructed();
                }
                Calendar.prototype.constructed = function () {
                    // useful for monkeypatching. used?
                };
                Calendar.prototype.getView = function () {
                    return this.view;
                };
                Calendar.prototype.publiclyTrigger = function (name, triggerInfo) {
                    var optHandler = this.opt(name);
                    var context;
                    var args;
                    if ($.isPlainObject(triggerInfo)) {
                        context = triggerInfo.context;
                        args = triggerInfo.args;
                    }
                    else if ($.isArray(triggerInfo)) {
                        args = triggerInfo;
                    }
                    if (context == null) {
                        context = this.el[0]; // fallback context
                    }
                    if (!args) {
                        args = [];
                    }
                    this.triggerWith(name, context, args); // Emitter's method
                    if (optHandler) {
                        return optHandler.apply(context, args);
                    }
                };
                Calendar.prototype.hasPublicHandlers = function (name) {
                    return this.hasHandlers(name) ||
                        this.opt(name); // handler specified in options
                };
                // Options Public API
                // -----------------------------------------------------------------------------------------------------------------
                // public getter/setter
                // Calendar.prototype.option = function (name, value) {
                //     var newOptionHash;
                //     if (typeof name === 'string') {
                //         if (value === undefined) {
                //             return this.optionsManager.get(name);
                //         }
                //         else {
                //             newOptionHash = {};
                //             newOptionHash[name] = value;
                //             this.optionsManager.add(newOptionHash);
                //         }
                //     }
                //     else if (typeof name === 'object') {
                //         this.optionsManager.add(name);
                //     }
                // };
                // // private getter
                // Calendar.prototype.opt = function (name) {
                //     return this.optionsManager.get(name);
                // };
                // View
                // -----------------------------------------------------------------------------------------------------------------
                // Given a view name for a custom view or a standard view, creates a ready-to-go View object
                Calendar.prototype.instantiateView = function (viewType) {
                    var spec = this.viewSpecManager.getViewSpec(viewType);
                    if (!spec) {
                        throw new Error("View type \"" + viewType + "\" is not valid");
                    }
                    return new spec['class'](this, spec);
                };
                // Returns a boolean about whether the view is okay to instantiate at some point
                Calendar.prototype.isValidViewType = function (viewType) {
                    return Boolean(this.viewSpecManager.getViewSpec(viewType));
                };
                Calendar.prototype.changeView = function (viewName, dateOrRange) {
                    if (dateOrRange) {
                        if (dateOrRange.start && dateOrRange.end) {
                            this.optionsManager.recordOverrides({
                                visibleRange: dateOrRange
                            });
                        }
                        else {
                            this.currentDate = this.moment(dateOrRange).stripZone(); // just like gotoDate
                        }
                    }
                    this.renderView(viewName);
                };
                // Forces navigation to a view for the given date.
                // `viewType` can be a specific view name or a generic one like "week" or "day".
                Calendar.prototype.zoomTo = function (newDate, viewType) {
                    var spec;
                    viewType = viewType || 'day'; // day is default zoom
                    spec = this.viewSpecManager.getViewSpec(viewType) ||
                        this.viewSpecManager.getUnitViewSpec(viewType);
                    this.currentDate = newDate.clone();
                    this.renderView(spec ? spec.type : null);
                };
                // Current Date
                // -----------------------------------------------------------------------------------------------------------------
                Calendar.prototype.initCurrentDate = function () {
                    var defaultDateInput = this.opt('defaultDate');
                    // compute the initial ambig-timezone date
                    if (defaultDateInput != null) {
                        this.currentDate = this.moment(defaultDateInput).stripZone();
                    }
                    else {
                        this.currentDate = this.getNow(); // getNow already returns unzoned
                    }
                };
                Calendar.prototype.prev = function () {
                    var view = this.view;
                    var prevInfo = view.dateProfileGenerator.buildPrev(view.get('dateProfile'));
                    if (prevInfo.isValid) {
                        this.currentDate = prevInfo.date;
                        this.renderView();
                    }
                };
                Calendar.prototype.next = function () {
                    var view = this.view;
                    var nextInfo = view.dateProfileGenerator.buildNext(view.get('dateProfile'));
                    if (nextInfo.isValid) {
                        this.currentDate = nextInfo.date;
                        this.renderView();
                    }
                };
                Calendar.prototype.prevYear = function () {
                    this.currentDate.add(-1, 'years');
                    this.renderView();
                };
                Calendar.prototype.nextYear = function () {
                    this.currentDate.add(1, 'years');
                    this.renderView();
                };
                Calendar.prototype.today = function () {
                    this.currentDate = this.getNow(); // should deny like prev/next?
                    this.renderView();
                };
                Calendar.prototype.gotoDate = function (zonedDateInput) {
                    this.currentDate = this.moment(zonedDateInput).stripZone();
                    this.renderView();
                };
                Calendar.prototype.incrementDate = function (delta) {
                    this.currentDate.add(moment.duration(delta));
                    this.renderView();
                };
                // for external API
                Calendar.prototype.getDate = function () {
                    return this.applyTimezone(this.currentDate); // infuse the calendar's timezone
                };
                // Loading Triggering
                // -----------------------------------------------------------------------------------------------------------------
                // Should be called when any type of async data fetching begins
                Calendar.prototype.pushLoading = function () {
                    if (!(this.loadingLevel++)) {
                        this.publiclyTrigger('loading', [true, this.view]);
                    }
                };
                // Should be called when any type of async data fetching completes
                Calendar.prototype.popLoading = function () {
                    if (!(--this.loadingLevel)) {
                        this.publiclyTrigger('loading', [false, this.view]);
                    }
                };
                // High-level Rendering
                // -----------------------------------------------------------------------------------
                // this = Calendar, contentEl = undefined at first
                Calendar.prototype.render = function () {
                    if (!this.contentEl) {
                        this.initialRender();
                    }
                    else if (this.elementVisible()) {
                        // mainly for the public API
                        this.calcSize();
                        this.updateViewSize();
                    }
                };
                Calendar.prototype.initialRender = function () {
                    var _this = this;
                    var el = this.el;
                    el.addClass('fc');
                    
                    // event delegation for nav links
                    el.on('click.fc', 'a[data-goto]', function (ev) {
                        var anchorEl = $(ev.currentTarget);
                        var gotoOptions = anchorEl.data('goto'); // will automatically parse JSON
                        var date = _this.moment(gotoOptions.date);
                        var viewType = gotoOptions.type;
                        // property like "navLinkDayClick". might be a string or a function
                        var customAction = _this.view.opt('navLink' + util_1.capitaliseFirstLetter(viewType) + 'Click');
                        if (typeof customAction === 'function') {
                            customAction(date, ev);
                        }
                        else {
                            if (typeof customAction === 'string') {
                                viewType = customAction;
                            }
                            _this.zoomTo(date, viewType);
                        }
                    });
                    // called immediately, and upon option change
                    // this.optionsManager.watch('settingTheme', ['?theme', '?themeSystem'], function (opts) {
                    //     var themeClass = ThemeRegistry_1.getThemeSystemClass(opts.themeSystem || opts.theme);
                    //     var theme = new themeClass(_this.optionsManager);
                    //     var widgetClass = theme.getClass('widget');
                    //     _this.theme = theme;
                    //     if (widgetClass) {
                    //         el.addClass(widgetClass);
                    //     }
                    // }, function () {
                    //     var widgetClass = _this.theme.getClass('widget');
                    //     _this.theme = null;
                    //     if (widgetClass) {
                    //         el.removeClass(widgetClass);
                    //     }
                    // });
                    // this.optionsManager.watch('settingBusinessHourGenerator', ['?businessHours'], function (deps) {
                    //     _this.businessHourGenerator = new BusinessHourGenerator_1.default(deps.businessHours, _this);
                    //     if (_this.view) {
                    //         _this.view.set('businessHourGenerator', _this.businessHourGenerator);
                    //     }
                    // }, function () {
                    //     _this.businessHourGenerator = null;
                    // });
                    // called immediately, and upon option change.
                    // HACK: locale often affects isRTL, so we explicitly listen to that too.
                    // this.optionsManager.watch('applyingDirClasses', ['?isRTL', '?locale'], function (opts) {
                    //     el.toggleClass('fc-ltr', !opts.isRTL);
                    //     el.toggleClass('fc-rtl', opts.isRTL);
                    // });
                    this.contentEl = $("<div class='fc-view-container'/>").prependTo(el);
                    // this.initToolbars();
                    // this.renderHeader();
                    // this.renderFooter();
                    // this.renderView(this.opt('defaultView'));
                    // if (this.opt('handleWindowResize')) {
                    //     $(window).resize(this.windowResizeProxy = util_1.debounce(// prevents rapid calls
                    //     this.windowResize.bind(this), this.opt('windowResizeDelay')));
                    // }
                };
                Calendar.prototype.destroy = function () {
                    if (this.view) {
                        this.clearView();
                    }
                    this.toolbarsManager.proxyCall('removeElement');
                    this.contentEl.remove();
                    this.el.removeClass('fc fc-ltr fc-rtl');
                    // removes theme-related root className
                    this.optionsManager.unwatch('settingTheme');
                    this.optionsManager.unwatch('settingBusinessHourGenerator');
                    this.el.off('.fc'); // unbind nav link handlers
                    if (this.windowResizeProxy) {
                        $(window).unbind('resize', this.windowResizeProxy);
                        this.windowResizeProxy = null;
                    }
                    GlobalEmitter_1.default.unneeded();
                };
                Calendar.prototype.elementVisible = function () {
                    return this.el.is(':visible');
                };
                // Render Queue
                // -----------------------------------------------------------------------------------------------------------------
                Calendar.prototype.bindViewHandlers = function (view) {
                    var _this = this;
                    view.watch('titleForCalendar', ['title'], function (deps) {
                        if (view === _this.view) {
                            _this.setToolbarsTitle(deps.title);
                        }
                    });
                    view.watch('dateProfileForCalendar', ['dateProfile'], function (deps) {
                        if (view === _this.view) {
                            _this.currentDate = deps.dateProfile.date; // might have been constrained by view dates
                            _this.updateToolbarButtons(deps.dateProfile);
                        }
                    });
                };
                Calendar.prototype.unbindViewHandlers = function (view) {
                    view.unwatch('titleForCalendar');
                    view.unwatch('dateProfileForCalendar');
                };
                // View Rendering
                // -----------------------------------------------------------------------------------
                // Renders a view because of a date change, view-type change, or for the first time.
                // If not given a viewType, keep the current view but render different dates.
                // Accepts an optional scroll state to restore to.
                Calendar.prototype.renderView = function (viewType) {
                    var oldView = this.view;
                    var newView;
                    this.freezeContentHeight();
                    if (oldView && viewType && oldView.type !== viewType) {
                        this.clearView();
                    }
                    // if viewType changed, or the view was never created, create a fresh view
                    if (!this.view && viewType) {
                        newView = this.view =
                            this.viewsByType[viewType] ||
                                (this.viewsByType[viewType] = this.instantiateView(viewType));
                        this.bindViewHandlers(newView);
                        newView.startBatchRender(); // so that setElement+setDate rendering are joined
                        newView.setElement($("<div class='fc-view fc-" + viewType + "-view' />").appendTo(this.contentEl));
                        this.toolbarsManager.proxyCall('activateButton', viewType);
                    }
                    if (this.view) {
                        // prevent unnecessary change firing
                        if (this.view.get('businessHourGenerator') !== this.businessHourGenerator) {
                            this.view.set('businessHourGenerator', this.businessHourGenerator);
                        }
                        this.view.setDate(this.currentDate);
                        if (newView) {
                            newView.stopBatchRender();
                        }
                    }
                    this.thawContentHeight();
                };
                // Unrenders the current view and reflects this change in the Header.
                // Unregsiters the `view`, but does not remove from viewByType hash.
                Calendar.prototype.clearView = function () {
                    var currentView = this.view;
                    this.toolbarsManager.proxyCall('deactivateButton', currentView.type);
                    this.unbindViewHandlers(currentView);
                    currentView.removeElement();
                    currentView.unsetDate(); // so bindViewHandlers doesn't fire with old values next time
                    this.view = null;
                };
                // Destroys the view, including the view object. Then, re-instantiates it and renders it.
                // Maintains the same scroll state.
                // TODO: maintain any other user-manipulated state.
                Calendar.prototype.reinitView = function () {
                    var oldView = this.view;
                    var scroll = oldView.queryScroll(); // wouldn't be so complicated if Calendar owned the scroll
                    this.freezeContentHeight();
                    this.clearView();
                    this.calcSize();
                    this.renderView(oldView.type); // needs the type to freshly render
                    this.view.applyScroll(scroll);
                    this.thawContentHeight();
                };
                // Resizing
                // -----------------------------------------------------------------------------------
                Calendar.prototype.getSuggestedViewHeight = function () {
                    if (this.suggestedViewHeight == null) {
                        this.calcSize();
                    }
                    return this.suggestedViewHeight;
                };
                Calendar.prototype.isHeightAuto = function () {
                    return this.opt('contentHeight') === 'auto' || this.opt('height') === 'auto';
                };
                Calendar.prototype.updateViewSize = function (isResize) {
                    if (isResize === void 0) { isResize = false; }
                    var view = this.view;
                    var scroll;
                    if (!this.ignoreUpdateViewSize && view) {
                        if (isResize) {
                            this.calcSize();
                            scroll = view.queryScroll();
                        }
                        this.ignoreUpdateViewSize++;
                        view.updateSize(this.getSuggestedViewHeight(), this.isHeightAuto(), isResize);
                        this.ignoreUpdateViewSize--;
                        if (isResize) {
                            view.applyScroll(scroll);
                        }
                        return true; // signal success
                    }
                };
                Calendar.prototype.calcSize = function () {
                    if (this.elementVisible()) {
                        this._calcSize();
                    }
                };
                Calendar.prototype._calcSize = function () {
                    var contentHeightInput = this.opt('contentHeight');
                    var heightInput = this.opt('height');
                    if (typeof contentHeightInput === 'number') {
                        this.suggestedViewHeight = contentHeightInput;
                    }
                    else if (typeof contentHeightInput === 'function') {
                        this.suggestedViewHeight = contentHeightInput();
                    }
                    else if (typeof heightInput === 'number') {
                        this.suggestedViewHeight = heightInput - this.queryToolbarsHeight();
                    }
                    else if (typeof heightInput === 'function') {
                        this.suggestedViewHeight = heightInput() - this.queryToolbarsHeight();
                    }
                    else if (heightInput === 'parent') {
                        this.suggestedViewHeight = this.el.parent().height() - this.queryToolbarsHeight();
                    }
                    else {
                        this.suggestedViewHeight = Math.round(this.contentEl.width() /
                            Math.max(this.opt('aspectRatio'), .5));
                    }
                };
                Calendar.prototype.windowResize = function (ev) {
                    if (
                    // the purpose: so we don't process jqui "resize" events that have bubbled up
                    // cast to any because .target, which is Element, can't be compared to window for some reason.
                    ev.target === window &&
                        this.view &&
                        this.view.isDatesRendered) {
                        if (this.updateViewSize(true)) {
                            this.publiclyTrigger('windowResize', [this.view]);
                        }
                    }
                };
                /* Height "Freezing"
                -----------------------------------------------------------------------------*/
                Calendar.prototype.freezeContentHeight = function () {
                    if (!(this.freezeContentHeightDepth++)) {
                        this.forceFreezeContentHeight();
                    }
                };
                Calendar.prototype.forceFreezeContentHeight = function () {
                    this.contentEl.css({
                        width: '100%',
                        height: this.contentEl.height(),
                        overflow: 'hidden'
                    });
                };
                Calendar.prototype.thawContentHeight = function () {
                    this.freezeContentHeightDepth--;
                    // always bring back to natural height
                    this.contentEl.css({
                        width: '',
                        height: '',
                        overflow: ''
                    });
                    // but if there are future thaws, re-freeze
                    if (this.freezeContentHeightDepth) {
                        this.forceFreezeContentHeight();
                    }
                };
                // Toolbar
                // -----------------------------------------------------------------------------------------------------------------
                Calendar.prototype.initToolbars = function () {
                    this.header = new Toolbar_1.default(this, this.computeHeaderOptions());
                    this.footer = new Toolbar_1.default(this, this.computeFooterOptions());
                    this.toolbarsManager = new Iterator_1.default([this.header, this.footer]);
                };
                Calendar.prototype.computeHeaderOptions = function () {
                    return {
                        extraClasses: 'fc-header-toolbar',
                        layout: this.opt('header')
                    };
                };
                Calendar.prototype.computeFooterOptions = function () {
                    return {
                        extraClasses: 'fc-footer-toolbar',
                        layout: this.opt('footer')
                    };
                };
                // can be called repeatedly and Header will rerender
                Calendar.prototype.renderHeader = function () {
                    var header = this.header;
                    header.setToolbarOptions(this.computeHeaderOptions());
                    header.render();
                    if (header.el) {
                        this.el.prepend(header.el);
                    }
                };
                // can be called repeatedly and Footer will rerender
                Calendar.prototype.renderFooter = function () {
                    var footer = this.footer;
                    footer.setToolbarOptions(this.computeFooterOptions());
                    footer.render();
                    if (footer.el) {
                        this.el.append(footer.el);
                    }
                };
                Calendar.prototype.setToolbarsTitle = function (title) {
                    this.toolbarsManager.proxyCall('updateTitle', title);
                };
                Calendar.prototype.updateToolbarButtons = function (dateProfile) {
                    var now = this.getNow();
                    var view = this.view;
                    var todayInfo = view.dateProfileGenerator.build(now);
                    var prevInfo = view.dateProfileGenerator.buildPrev(view.get('dateProfile'));
                    var nextInfo = view.dateProfileGenerator.buildNext(view.get('dateProfile'));
                    this.toolbarsManager.proxyCall((todayInfo.isValid && !dateProfile.currentUnzonedRange.containsDate(now)) ?
                        'enableButton' :
                        'disableButton', 'today');
                    this.toolbarsManager.proxyCall(prevInfo.isValid ?
                        'enableButton' :
                        'disableButton', 'prev');
                    this.toolbarsManager.proxyCall(nextInfo.isValid ?
                        'enableButton' :
                        'disableButton', 'next');
                };
                Calendar.prototype.queryToolbarsHeight = function () {
                    return this.toolbarsManager.items.reduce(function (accumulator, toolbar) {
                        var toolbarHeight = toolbar.el ? toolbar.el.outerHeight(true) : 0; // includes margin
                        return accumulator + toolbarHeight;
                    }, 0);
                };
                // Selection
                // -----------------------------------------------------------------------------------------------------------------
                // this public method receives start/end dates in any format, with any timezone
                Calendar.prototype.select = function (zonedStartInput, zonedEndInput) {
                    this.view.select(this.buildSelectFootprint.apply(this, arguments));
                };
                Calendar.prototype.unselect = function () {
                    if (this.view) {
                        this.view.unselect();
                    }
                };
                // Given arguments to the select method in the API, returns a span (unzoned start/end and other info)
                Calendar.prototype.buildSelectFootprint = function (zonedStartInput, zonedEndInput) {
                    var start = this.moment(zonedStartInput).stripZone();
                    var end;
                    if (zonedEndInput) {
                        end = this.moment(zonedEndInput).stripZone();
                    }
                    else if (start.hasTime()) {
                        end = start.clone().add(this.defaultTimedEventDuration);
                    }
                    else {
                        end = start.clone().add(this.defaultAllDayEventDuration);
                    }
                    return new ComponentFootprint_1.default(new UnzonedRange_1.default(start, end), !start.hasTime());
                };
                // Date Utils
                // -----------------------------------------------------------------------------------------------------------------
                // Calendar.prototype.initMomentInternals = function () {
                //     var _this = this;
                //     this.defaultAllDayEventDuration = moment.duration(this.opt('defaultAllDayEventDuration'));
                //     this.defaultTimedEventDuration = moment.duration(this.opt('defaultTimedEventDuration'));
                //     // Called immediately, and when any of the options change.
                //     // Happens before any internal objects rebuild or rerender, because this is very core.
                //     this.optionsManager.watch('buildingMomentLocale', [
                //         '?locale', '?monthNames', '?monthNamesShort', '?dayNames', '?dayNamesShort',
                //         '?firstDay', '?weekNumberCalculation'
                //     ], function (opts) {
                //         var weekNumberCalculation = opts.weekNumberCalculation;
                //         var firstDay = opts.firstDay;
                //         var _week;
                //         // normalize
                //         if (weekNumberCalculation === 'iso') {
                //             weekNumberCalculation = 'ISO'; // normalize
                //         }
                //         var localeData = Object.create(// make a cheap copy
                //         locale_1.getMomentLocaleData(opts.locale) // will fall back to en
                //         );
                //         if (opts.monthNames) {
                //             localeData._months = opts.monthNames;
                //         }
                //         if (opts.monthNamesShort) {
                //             localeData._monthsShort = opts.monthNamesShort;
                //         }
                //         if (opts.dayNames) {
                //             localeData._weekdays = opts.dayNames;
                //         }
                //         if (opts.dayNamesShort) {
                //             localeData._weekdaysShort = opts.dayNamesShort;
                //         }
                //         if (firstDay == null && weekNumberCalculation === 'ISO') {
                //             firstDay = 1;
                //         }
                //         if (firstDay != null) {
                //             _week = Object.create(localeData._week); // _week: { dow: # }
                //             _week.dow = firstDay;
                //             localeData._week = _week;
                //         }
                //         if (weekNumberCalculation === 'ISO' ||
                //             weekNumberCalculation === 'local' ||
                //             typeof weekNumberCalculation === 'function') {
                //             localeData._fullCalendar_weekCalc = weekNumberCalculation; // moment-ext will know what to do with it
                //         }
                //         _this.localeData = localeData;
                //         // If the internal current date object already exists, move to new locale.
                //         // We do NOT need to do this technique for event dates, because this happens when converting to "segments".
                //         if (_this.currentDate) {
                //             _this.localizeMoment(_this.currentDate); // sets to localeData
                //         }
                //     });
                // };
                // Builds a moment using the settings of the current calendar: timezone and locale.
                // Accepts anything the vanilla moment() constructor accepts.
                Calendar.prototype.moment = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var mom;
                    if (this.opt('timezone') === 'local') {
                        mom = moment_ext_1.default.apply(null, args);
                        // Force the moment to be local, because momentExt doesn't guarantee it.
                        if (mom.hasTime()) {
                            mom.local();
                        }
                    }
                    else if (this.opt('timezone') === 'UTC') {
                        mom = moment_ext_1.default.utc.apply(null, args); // process as UTC
                    }
                    else {
                        mom = moment_ext_1.default.parseZone.apply(null, args); // let the input decide the zone
                    }
                    this.localizeMoment(mom); // TODO
                    return mom;
                };
                Calendar.prototype.msToMoment = function (ms, forceAllDay) {
                    var mom = moment_ext_1.default.utc(ms); // TODO: optimize by using Date.UTC
                    if (forceAllDay) {
                        mom.stripTime();
                    }
                    else {
                        mom = this.applyTimezone(mom); // may or may not apply locale
                    }
                    this.localizeMoment(mom);
                    return mom;
                };
                Calendar.prototype.msToUtcMoment = function (ms, forceAllDay) {
                    var mom = moment_ext_1.default.utc(ms); // TODO: optimize by using Date.UTC
                    if (forceAllDay) {
                        mom.stripTime();
                    }
                    this.localizeMoment(mom);
                    return mom;
                };
                // Updates the given moment's locale settings to the current calendar locale settings.
                Calendar.prototype.localizeMoment = function (mom) {
                    mom._locale = this.localeData;
                };
                // Returns a boolean about whether or not the calendar knows how to calculate
                // the timezone offset of arbitrary dates in the current timezone.
                Calendar.prototype.getIsAmbigTimezone = function () {
                    return this.opt('timezone') !== 'local' && this.opt('timezone') !== 'UTC';
                };
                // Returns a copy of the given date in the current timezone. Has no effect on dates without times.
                Calendar.prototype.applyTimezone = function (date) {
                    if (!date.hasTime()) {
                        return date.clone();
                    }
                    var zonedDate = this.moment(date.toArray());
                    var timeAdjust = date.time().asMilliseconds() - zonedDate.time().asMilliseconds();
                    var adjustedZonedDate;
                    // Safari sometimes has problems with this coersion when near DST. Adjust if necessary. (bug #2396)
                    if (timeAdjust) {
                        adjustedZonedDate = zonedDate.clone().add(timeAdjust); // add milliseconds
                        if (date.time().asMilliseconds() - adjustedZonedDate.time().asMilliseconds() === 0) {
                            zonedDate = adjustedZonedDate;
                        }
                    }
                    return zonedDate;
                };
                /*
                Assumes the footprint is non-open-ended.
                */
                Calendar.prototype.footprintToDateProfile = function (componentFootprint, ignoreEnd) {
                    if (ignoreEnd === void 0) { ignoreEnd = false; }
                    var start = moment_ext_1.default.utc(componentFootprint.unzonedRange.startMs);
                    var end;
                    if (!ignoreEnd) {
                        end = moment_ext_1.default.utc(componentFootprint.unzonedRange.endMs);
                    }
                    if (componentFootprint.isAllDay) {
                        start.stripTime();
                        if (end) {
                            end.stripTime();
                        }
                    }
                    else {
                        start = this.applyTimezone(start);
                        if (end) {
                            end = this.applyTimezone(end);
                        }
                    }
                    return new EventDateProfile_1.default(start, end, this);
                };
                // Returns a moment for the current date, as defined by the client's computer or from the `now` option.
                // Will return an moment with an ambiguous timezone.
                Calendar.prototype.getNow = function () {
                    var now = this.opt('now');
                    if (typeof now === 'function') {
                        now = now();
                    }
                    return this.moment(now).stripZone();
                };
                // Produces a human-readable string for the given duration.
                // Side-effect: changes the locale of the given duration.
                Calendar.prototype.humanizeDuration = function (duration) {
                    return duration.locale(this.opt('locale')).humanize();
                };
                // will return `null` if invalid range
                Calendar.prototype.parseUnzonedRange = function (rangeInput) {
                    var start = null;
                    var end = null;
                    if (rangeInput.start) {
                        start = this.moment(rangeInput.start).stripZone();
                    }
                    if (rangeInput.end) {
                        end = this.moment(rangeInput.end).stripZone();
                    }
                    if (!start && !end) {
                        return null;
                    }
                    if (start && end && end.isBefore(start)) {
                        return null;
                    }
                    return new UnzonedRange_1.default(start, end);
                };
                // Event-Date Utilities
                // -----------------------------------------------------------------------------------------------------------------
                Calendar.prototype.initEventManager = function () {
                    var _this = this;
                    var eventManager = new EventManager_1.default(this);
                    var rawSources = this.opt('eventSources') || [];
                    var singleRawSource = this.opt('events');
                    this.eventManager = eventManager;
                    if (singleRawSource) {
                        rawSources.unshift(singleRawSource);
                    }
                    eventManager.on('release', function (eventsPayload) {
                        _this.trigger('eventsReset', eventsPayload);
                    });
                    eventManager.freeze();
                    rawSources.forEach(function (rawSource) {
                        var source = EventSourceParser_1.default.parse(rawSource, _this);
                        if (source) {
                            eventManager.addSource(source);
                        }
                    });
                    eventManager.thaw();
                };
                Calendar.prototype.requestEvents = function (start, end) {
                    return this.eventManager.requestEvents(start, end, this.opt('timezone'), !this.opt('lazyFetching'));
                };
                // Get an event's normalized end date. If not present, calculate it from the defaults.
                Calendar.prototype.getEventEnd = function (event) {
                    if (event.end) {
                        return event.end.clone();
                    }
                    else {
                        return this.getDefaultEventEnd(event.allDay, event.start);
                    }
                };
                // Given an event's allDay status and start date, return what its fallback end date should be.
                // TODO: rename to computeDefaultEventEnd
                Calendar.prototype.getDefaultEventEnd = function (allDay, zonedStart) {
                    var end = zonedStart.clone();
                    if (allDay) {
                        end.stripTime().add(this.defaultAllDayEventDuration);
                    }
                    else {
                        end.add(this.defaultTimedEventDuration);
                    }
                    if (this.getIsAmbigTimezone()) {
                        end.stripZone(); // we don't know what the tzo should be
                    }
                    return end;
                };
                // Public Events API
                // -----------------------------------------------------------------------------------------------------------------
                Calendar.prototype.rerenderEvents = function () {
                    this.view.flash('displayingEvents');
                };
                Calendar.prototype.refetchEvents = function () {
                    this.eventManager.refetchAllSources();
                };
                Calendar.prototype.renderEvents = function (eventInputs, isSticky) {
                    this.eventManager.freeze();
                    for (var i = 0; i < eventInputs.length; i++) {
                        this.renderEvent(eventInputs[i], isSticky);
                    }
                    this.eventManager.thaw();
                };
                Calendar.prototype.renderEvent = function (eventInput, isSticky) {
                    if (isSticky === void 0) { isSticky = false; }
                    var eventManager = this.eventManager;
                    var eventDef = EventDefParser_1.default.parse(eventInput, eventInput.source || eventManager.stickySource);
                    if (eventDef) {
                        eventManager.addEventDef(eventDef, isSticky);
                    }
                };
                // legacyQuery operates on legacy event instance objects
                Calendar.prototype.removeEvents = function (legacyQuery) {
                    var eventManager = this.eventManager;
                    var legacyInstances = [];
                    var idMap = {};
                    var eventDef;
                    var i;
                    if (legacyQuery == null) {
                        eventManager.removeAllEventDefs(); // persist=true
                    }
                    else {
                        eventManager.getEventInstances().forEach(function (eventInstance) {
                            legacyInstances.push(eventInstance.toLegacy());
                        });
                        legacyInstances = filterLegacyEventInstances(legacyInstances, legacyQuery);
                        // compute unique IDs
                        for (i = 0; i < legacyInstances.length; i++) {
                            eventDef = this.eventManager.getEventDefByUid(legacyInstances[i]._id);
                            idMap[eventDef.id] = true;
                        }
                        eventManager.freeze();
                        for (i in idMap) {
                            eventManager.removeEventDefsById(i); // persist=true
                        }
                        eventManager.thaw();
                    }
                };
                // legacyQuery operates on legacy event instance objects
                Calendar.prototype.clientEvents = function (legacyQuery) {
                    var legacyEventInstances = [];
                    this.eventManager.getEventInstances().forEach(function (eventInstance) {
                        legacyEventInstances.push(eventInstance.toLegacy());
                    });
                    return filterLegacyEventInstances(legacyEventInstances, legacyQuery);
                };
                Calendar.prototype.updateEvents = function (eventPropsArray) {
                    this.eventManager.freeze();
                    for (var i = 0; i < eventPropsArray.length; i++) {
                        this.updateEvent(eventPropsArray[i]);
                    }
                    this.eventManager.thaw();
                };
                Calendar.prototype.updateEvent = function (eventProps) {
                    var eventDef = this.eventManager.getEventDefByUid(eventProps._id);
                    var eventInstance;
                    var eventDefMutation;
                    if (eventDef instanceof SingleEventDef_1.default) {
                        eventInstance = eventDef.buildInstance();
                        eventDefMutation = EventDefMutation_1.default.createFromRawProps(eventInstance, eventProps, // raw props
                        null // largeUnit -- who uses it?
                        );
                        this.eventManager.mutateEventsWithId(eventDef.id, eventDefMutation); // will release
                    }
                };
                // Public Event Sources API
                // ------------------------------------------------------------------------------------
                Calendar.prototype.getEventSources = function () {
                    return this.eventManager.otherSources.slice(); // clone
                };
                Calendar.prototype.getEventSourceById = function (id) {
                    return this.eventManager.getSourceById(EventSource_1.default.normalizeId(id));
                };
                Calendar.prototype.addEventSource = function (sourceInput) {
                    var source = EventSourceParser_1.default.parse(sourceInput, this);
                    if (source) {
                        this.eventManager.addSource(source);
                    }
                };
                Calendar.prototype.removeEventSources = function (sourceMultiQuery) {
                    var eventManager = this.eventManager;
                    var sources;
                    var i;
                    if (sourceMultiQuery == null) {
                        this.eventManager.removeAllSources();
                    }
                    else {
                        sources = eventManager.multiQuerySources(sourceMultiQuery);
                        eventManager.freeze();
                        for (i = 0; i < sources.length; i++) {
                            eventManager.removeSource(sources[i]);
                        }
                        eventManager.thaw();
                    }
                };
                Calendar.prototype.removeEventSource = function (sourceQuery) {
                    var eventManager = this.eventManager;
                    var sources = eventManager.querySources(sourceQuery);
                    var i;
                    eventManager.freeze();
                    for (i = 0; i < sources.length; i++) {
                        eventManager.removeSource(sources[i]);
                    }
                    eventManager.thaw();
                };
                Calendar.prototype.refetchEventSources = function (sourceMultiQuery) {
                    var eventManager = this.eventManager;
                    var sources = eventManager.multiQuerySources(sourceMultiQuery);
                    var i;
                    eventManager.freeze();
                    for (i = 0; i < sources.length; i++) {
                        eventManager.refetchSource(sources[i]);
                    }
                    eventManager.thaw();
                };
                // not for internal use. use options module directly instead.
                // Calendar.defaults = options_1.globalDefaults;
                // Calendar.englishDefaults = options_1.englishDefaults;
                // Calendar.rtlDefaults = options_1.rtlDefaults;
                return Calendar;
            }());
            exports.default = Calendar;
            // EmitterMixin_1.default.mixInto(Calendar);
            // ListenerMixin_1.default.mixInto(Calendar);
            function filterLegacyEventInstances(legacyEventInstances, legacyQuery) {
                if (legacyQuery == null) {
                    return legacyEventInstances;
                }
                else if ($.isFunction(legacyQuery)) {
                    return legacyEventInstances.filter(legacyQuery);
                }
                else {
                    legacyQuery += ''; // normalize to string
                    return legacyEventInstances.filter(function (legacyEventInstance) {
                        // soft comparison because id not be normalized to string
                        // tslint:disable-next-line
                        return legacyEventInstance.id == legacyQuery ||
                            legacyEventInstance._id === legacyQuery; // can specify internal id, but must exactly match
                    });
                }
            }
        })
    ]);
});
