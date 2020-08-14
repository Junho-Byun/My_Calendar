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
            var exportHooks = __webpack_require__(6);
            var Calendar_1 = __webpack_require__(5);

            $.myCalendar = exportHooks;
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
                        calendar = new Calendar_1.default(element, options);
                        element.data('myCalendar', calendar);
                        calendar.render();
                    }
                    return res;
                });
                module.exports = exportHooks;
            };
        }),
        

        /* 5 */
        /* Calendar */
        /***/ 
        (function(module, exports, __webpack_require__) {

            Object.defineProperty(exports, "__esModule", { value: true });
            var $ = __webpack_require__(3);

            var date = new Date()
            var d    = date.getDate(),
                    m    = date.getMonth(),
                    y    = date.getFullYear()
            
            var Calendar = /** @class */ (function () {
                function Calendar(el, overrides) {
                    this.date = new Date();
                    this.el = el;
                    this.overrides = overrides;
                    this.viewsByType = {};
                    this.lineFixed = true;
                    this.dayArr = ['일', '월', '화', '수', '목', '금', '토'];
                }

                Calendar.prototype.constructed = function () {
                    // useful for monkeypatching. used?
                };

                Calendar.prototype.getView = function () {
                    return this.view;
                };

                Calendar.prototype.render = function() {
                    var _this = this;
                    var el = this.el;
                    var date = this.date;
                    var tableHTML;
                    tableHTML = this.initialise(date.getFullYear(), date.getMonth(), date.getDate());

                    el.append(tableHTML);

                    this.initEventOnHeader();
                };

                Calendar.prototype.updateCalendar = function (y, m){
                    $('.header-left-value.month').text(m+1);
                    $('.header-left-value.year').text(y);
                    $('.calendar-body').replaceWith(this.updateTableHTML(y, m));
                };
                Calendar.prototype.updateTableHTML = function(y, m){
                    var calBody = ''+ this.renderTableBodyHtml(y,m);

                    return calBody;

                }
                Calendar.prototype.initialise = function (y, m, d){
                    return this.renderTableHTML(y, m);
                };
                Calendar.prototype.renderTableHTML = function(y, m){
                    var htmls = [];
                    var header = this.renderHeader();
                    var calender = ''+ '<div id="container">'+
                                            '<table class="calendarTable">'+
                                                '<thead>'+
                                                    '<tr>'+
                                                        this.renderTableHeadHtml()+
                                                    '</tr>'+
                                                '</thead>'+
                                                this.renderTableBodyHtml(y,m)+
                                            '</table>'+
                                        '</div>';
                    htmls.push(header);
                    htmls.push(calender);

                    return htmls.join('');

                }
                Calendar.prototype.renderTableHeadHtml = function(){
                    var htmls = [];
                    var dayArr = this.dayArr;
                    var i
                    var str
                    for(i = 0; i < dayArr.length ; i++){
                        str = '<td>'+dayArr[i]+'</td>';
                        htmls.push(str);
                    }
                    return htmls.join('');
                }
                Calendar.prototype.makeCalendarBodyData = function (y, m){
                    var dateArr = [];
                    var dayData = new Object();

                    // 시작 일 전 달 일 채우기
                    var daysPre = this.getNumOfDaysPre(y, m);
                    for(i = this.getSdowIndex(y,m)-1 ; i>=0; i--){
                        dateArr[i] = [daysPre, -1];
                        daysPre--;
                    }

                    var value = 1;
                    var sdow = this.getSdowIndex(y, m);
                    var nOd = this.getNumOfDays(y,m);
                    for( ; value <= nOd  ; sdow++){
                        dateArr[sdow] = [value, 0];
                        value++;
                    }

                    value = 1;
                    var nOw = this.getNumOfWeeks(y, m);
                    for(i = sdow ; i < nOw*7 ; i++){
                        dateArr[i] = [value, 1];
                        value++;
                    }

                    return dateArr;
                }
                Calendar.prototype.makeCalendarColTdTag = function(data){
                    var date = this.date;
                    var year = date.getFullYear();
                    var month = date.getMonth();
                    
                    if(data[1] == -1){
                        date = this.getPreMonthDate(year, month, data[0]);
                        var dateStr = date.getFullYear()+"-"+date.getMonth()+"-"+data[0];
                        return ''+
                            '<td class="col daysInLastMonth" data-date="' + dateStr + '">'+
                                data[0]+                                        
                            '</td>';
                    } else if(data[1] == 0){
                        date = new Date();
                        var dateStr = date.getFullYear()+"-"+date.getMonth()+"-"+data[0];
                        if(data[0]==date.getDate()){
                            if(this.date.getFullYear() == date.getFullYear() && this.date.getMonth() == date.getMonth()){
                                return ''+
                                '<td class="col daysInThisMonth today" data-date="' + dateStr + '">'+
                                data[0] +
                                '</td>';
                            }
                            return ''+
                            '<td class="col daysInThisMonth" data-date="' + dateStr + '">'+
                            data[0] +
                            '</td>';
                        }else{
                            return ''+
                            '<td class="col daysInThisMonth" data-date="' + dateStr + '">'+
                            data[0] +
                            '</td>';
                        }
                    } else{ //data[1] == 1 
                        date = this.getNextMonthDate(year, month, data[0]);
                        var dateStr = date.getFullYear()+"-"+date.getMonth()+"-"+data[0];
                        return ''+
                            '<td class="col daysInNextMonth" data-date="' + dateStr + '">'+
                            data[0] +
                            '</td>';
                    }

                }
                Calendar.prototype.makeCalendarColThTag = function(data){
                    var date = this.date;
                    var year = date.getFullYear();
                    var month = date.getMonth();
                    
                    if(data[1] == -1){
                        date = this.getPreMonthDate(year, month, data[0]);
                        var dateStr = date.getFullYear()+"-"+date.getMonth()+"-"+data[0];
                        return ''+
                            '<th class="col daysInLastMonth" data-date="' + dateStr + '">'+
                                data[0]+                                        
                            '</th>';
                    } else if(data[1] == 0){
                        date = new Date();
                        var dateStr = date.getFullYear()+"-"+date.getMonth()+"-"+data[0];
                        if(data[0]==date.getDate()){
                            if(this.date.getFullYear() == date.getFullYear() && this.date.getMonth() == date.getMonth()){
                                return ''+
                                '<th class="col daysInThisMonth today" data-date="' + dateStr + '">'+
                                data[0] +
                                '</th>';
                            }
                            return ''+
                            '<th class="col daysInThisMonth" data-date="' + dateStr + '">'+
                            data[0] +
                            '</th>';
                        }else{
                            return ''+
                            '<th class="col daysInThisMonth" data-date="' + dateStr + '">'+
                            data[0] +
                            '</th>';
                        }
                    } else{ //data[1] == 1 
                        date = this.getNextMonthDate(year, month, data[0]);
                        var dateStr = date.getFullYear()+"-"+date.getMonth()+"-"+data[0];
                        return ''+
                            '<th class="col daysInNextMonth" data-date="' + dateStr + '">'+
                            data[0] +
                            '</th>';
                    }

                }

                Calendar.prototype.makeCalendarColTag = function(data){
                    var ths = [];
                    for(i = 0 ; i < data.length ; i++){
                        ths.push(this.makeCalendarColThTag(data[i]));
                    }
                    var htmls = ''+
                                '<table>'+
                                    '<thead>'+
                                        '<tr>'+
                                            ths.join('');
                                        '</tr>'+
                                    '</thead>'+
                                    '<tbody>'+
                                        '<tr>'+
                                            1
                                        '</tr>'+
                                    '</tbody>'+
                                '</table>';
                    
                    return htmls;

                }

                Calendar.prototype.renderTableBodyHtml = function(y, m){
                    var days = this.makeCalendarBodyData(y, m); //array

                    var htmls = [];
                    htmls.push('<tr>');
                    var i = 0
                    for (; i < days.length ; ){
                        dataArray = [];
                        for(k = i ; (k+1)%8!=0 ; ){
                            dataArray.push(days[k]);
                            i++;
                            k++;
                        }
                        htmls.push(this.makeCalendarColTag(dataArray));
                        if(i == days.length-1){
                            htmls.push('</tr>');
                        } else{
                            htmls.push('</tr><tr>');
                        }
                        if(i>days.lengh)
                            break;
                    }
                
                    return ''+
                        '<tbody class="calendar-body">'+ 
                            htmls.join('')+
                        '</tbody>';
                }

                Calendar.prototype.renderHeader = function() {
                    var htmls = [];

                    var leftHeader = '<span class="h header-left">'+
                                        '<h2 class="header-left-value month">'+(this.date.getMonth()+1)+'</h2>'+
                                        '<h2 class="header-left-value year">'+this.date.getFullYear()+'</h2>'+
                                    '</span>';
                    var centerHeader = '<span class="h header-center">'+
                                            '<input class="header-center-btn day" type="button" value="day" >'+
                                            '<input class="header-center-btn week" type="button" value="week" >'+
                                            '<input class="header-center-btn month" type="button" value="month" >'+
                                        '</span>';
                    var rightHeader = '<span class="h header-right">'+
                                        '<input class="header-right-arrow left" type="button" value="<" >'+
                                        '<input class="header-right-arrow right" type="button" value=">" >'+
                                    '</span>';

                    htmls.push('<div = class="header">');
                    htmls.push(leftHeader);
                    htmls.push(centerHeader);
                    htmls.push(rightHeader);
                    htmls.push('</div>');

                    return htmls.join('');
                }
                
                Calendar.prototype.initEventOnHeader = function(){
                    var _this = this;
                    $('.header-right-arrow').on('click', function(event){
                        var date = _this.date;
                        var month = date.getMonth();
                        var year = date.getFullYear();
                        switch(event.target.classList[1]){
                            case 'right':{
                                if(month==11){
                                    year += 1
                                    month = 0;
                                }else{
                                    month += 1;
                                }
                                break;
                            }
                            case 'left':{
                                if(month==0){
                                    year -= 1;
                                    month = 11;
                                }else{
                                    month -= 1;
                                }
                            }
                        }
                        _this.date = new Date(year, month, 1);
                        _this.updateCalendar(year, month);
                    });
                }

                Calendar.prototype.renderFooter = function (){

                }

                // 한달에 몇 일?
                Calendar.prototype.getNumOfDays = function(y, m){
                    return (new Date(y, m+1, 0)).getDate();
                }
                // 전 달 
                Calendar.prototype.getPreMonthDate = function(y, m, d){
                    if(m==0)
                        return new Date(y-1, 12, d);
                    else 
                        return new Date(y, m, d);
                }
                Calendar.prototype.getNextMonthDate = function(y, m, d){
                    if(m=11)
                        return new Date(y+1, 1, d);
                    else 
                        return new Date(y, m+2, d);
                }
                Calendar.prototype.getNumOfDaysPre = function(y, m){
                    if(m==0)
                        return (new Date(y-1, 12, 0)).getDate();
                    else 
                        return (new Date(y, m, 0)).getDate();
                }
                // 다음 달 
                Calendar.prototype.getNumOfDaysAfter = function(y, m){
                    if(m=11)
                        return (new Date(y+1, 1, 0)).getDate();
                    else 
                        return (new Date(y, m+2, 0)).getDate();
                }

                // 시작 요일(start day of week)
                Calendar.prototype.getSdowStr = function (y, m){
                    return this.dayArr[this.getSdowIndex(y, m)];
                };
                // 0-6 sunday-Saturday
                Calendar.prototype.getSdowIndex = function (y, m){
                    var now = new Date(y + '-' + (m+1) + '-01');
                    return now.getDay();
                };

                //한달에 몇 주? 라인 수 (고정 or 유동)
                Calendar.prototype.getNumOfWeeks = function (y, m){
                    if(this.lineFixed)
                        return 6;
                    else{
                        sum = days_in_month(m, y)+this.getSdowIndex(y, m);
                        if($sum > 35) 
                            return 6;
                        else if($sum> 28) 
                            return 5;
                        else
                            return 4;
                    }
                };

                return Calendar;

            }());

            exports.default = Calendar;
        }),

        /* 6 */
        /***/ 
        (function(module, exports, __webpack_require__) {

            Object.defineProperty(exports, "__esModule", { value: true });
            exports.version = '3.8.2';
            // When introducing internal API incompatibilities (where fullcalendar plugins would break),
            // the minor version of the calendar should be upped (ex: 2.7.2 -> 2.8.0)
            // and the below integer should be incremented.
            var Calendar_1 = __webpack_require__(5);
            exports.Calendar = Calendar_1.default;
        })
    ]);
});
