(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stocks-stocks-module"],{

/***/ "./src/app/stocks/stock-view/stock-view.component.css":
/*!************************************************************!*\
  !*** ./src/app/stocks/stock-view/stock-view.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n"

/***/ }),

/***/ "./src/app/stocks/stock-view/stock-view.component.html":
/*!*************************************************************!*\
  !*** ./src/app/stocks/stock-view/stock-view.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 *ngIf=\"topStocks[0]\">{{topStocks[0].date.toDateString()}}</h2>\n<h3>Best Performing</h3>\n<app-stock-list [stocks] = \"topStocks\" [type]=\"'latest'\"></app-stock-list>\n<h3>Others</h3>\n<mat-form-field  class=\"example-container\">\n    <input matInput placeholder=\"Search Stocks\" style=\"color: #fff;\" (input)=\"searchStock($event)\">\n</mat-form-field>\n<app-stock-list [stocks] = \"otherStocks\" [type]=\"'latest'\"></app-stock-list>\n"

/***/ }),

/***/ "./src/app/stocks/stock-view/stock-view.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/stocks/stock-view/stock-view.component.ts ***!
  \***********************************************************/
/*! exports provided: StockViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockViewComponent", function() { return StockViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/http.service */ "./src/app/service/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StockViewComponent = /** @class */ (function () {
    function StockViewComponent(http) {
        this.http = http;
        this.stocks = [];
        this.topStocks = [];
        this.otherStocks = [];
    }
    StockViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.httpGetLatest('./latest').subscribe(function (value) {
            _this.stocks = value;
            _this.stocks = _this.stocks.sort(function (a, b) {
                return ((parseFloat(b.close) - parseFloat(b.open)) - (parseFloat(a.close) - parseFloat(a.open)));
            });
            _this.topStocks = _this.stocks.slice(0, 10);
            _this.otherStocks = _this.stocks.slice(10);
            console.log(_this.topStocks);
        });
    };
    StockViewComponent.prototype.searchStock = function (e) {
        if (e.target.value === '') {
            this.otherStocks = this.stocks.slice(10);
        }
        else {
            var result_1 = e.target.value;
            this.otherStocks = this.stocks.filter(function (element) {
                console.log(element.symbol.search(result_1));
                return element.symbol.search(result_1) >= 0;
            });
        }
    };
    StockViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stock-view',
            template: __webpack_require__(/*! ./stock-view.component.html */ "./src/app/stocks/stock-view/stock-view.component.html"),
            styles: [__webpack_require__(/*! ./stock-view.component.css */ "./src/app/stocks/stock-view/stock-view.component.css")]
        }),
        __metadata("design:paramtypes", [_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], StockViewComponent);
    return StockViewComponent;
}());



/***/ }),

/***/ "./src/app/stocks/stocks-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/stocks/stocks-routing.module.ts ***!
  \*************************************************/
/*! exports provided: StocksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksRoutingModule", function() { return StocksRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stock_view_stock_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stock-view/stock-view.component */ "./src/app/stocks/stock-view/stock-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _stock_view_stock_view_component__WEBPACK_IMPORTED_MODULE_2__["StockViewComponent"]
    }
];
var StocksRoutingModule = /** @class */ (function () {
    function StocksRoutingModule() {
    }
    StocksRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], StocksRoutingModule);
    return StocksRoutingModule;
}());



/***/ }),

/***/ "./src/app/stocks/stocks.module.ts":
/*!*****************************************!*\
  !*** ./src/app/stocks/stocks.module.ts ***!
  \*****************************************/
/*! exports provided: StocksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksModule", function() { return StocksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stocks_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stocks-routing.module */ "./src/app/stocks/stocks-routing.module.ts");
/* harmony import */ var _stock_list_stock_list_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stock-list/stock-list.module */ "./src/app/stock-list/stock-list.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _stock_view_stock_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock-view/stock-view.component */ "./src/app/stocks/stock-view/stock-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var StocksModule = /** @class */ (function () {
    function StocksModule() {
    }
    StocksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _stocks_routing_module__WEBPACK_IMPORTED_MODULE_2__["StocksRoutingModule"],
                _stock_list_stock_list_module__WEBPACK_IMPORTED_MODULE_3__["StockListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]
            ],
            declarations: [_stock_view_stock_view_component__WEBPACK_IMPORTED_MODULE_6__["StockViewComponent"]]
        })
    ], StocksModule);
    return StocksModule;
}());



/***/ })

}]);
//# sourceMappingURL=stocks-stocks-module.js.map