(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jeeva\Documents\jeevashan.github.io\web-ar-angular-frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "8R/P":
/*!********************************************************!*\
  !*** ./src/app/product-card/product-card.component.ts ***!
  \********************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



class ProductCardComponent {
    constructor() { }
    ngOnInit() {
        // console.log(this._id)
    }
}
ProductCardComponent.ɵfac = function ProductCardComponent_Factory(t) { return new (t || ProductCardComponent)(); };
ProductCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductCardComponent, selectors: [["app-product-card"]], inputs: { _id: "_id", name: "name", description: "description", ios_src: "ios_src", short_description: "short_description", src: "src", category: "category", product_image_url: "product_image_url", price: "price", industry: "industry" }, decls: 13, vars: 9, consts: [[1, "mb-5", "product", "single-product", 2, "margin-bottom", "15px !important"], [3, "routerLink"], [2, "position", "relative", "overflow", "hidden", "background-color", "rgb(238, 238, 238)"], ["width", "200px", 1, "c", 2, "display", "block", "margin-left", "auto", "margin-right", "auto", "grid-column", "9 / 13", "grid-row", "1 / 7", 3, "src"], [1, "part-2", "mt-3"], [1, "product-title", 2, "font-size", "20px", "margin-bottom", "5px !important", "font-weight", "bold"], [1, "part-2", "mt-3", 2, "margin-top", "8px !important"], [2, "line-height", "1.2", "margin-bottom", "8px !important"], [1, "product-price", 2, "font-size", "20px", "font-weight", "bold"]], template: function ProductCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/product/", ctx.industry, "/", ctx._id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.product_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.short_description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 6, ctx.price, "USD"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap\");\n.product-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  transition: all 0.2s;\n  overflow: hidden;\n}\n.product-card__image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 70%;\n  object-fit: cover;\n  border-bottom: 1px solid #ccc;\n}\n.product-card__info[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  padding: 16px 16px 32px;\n}\n.product-card__info[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.product-card__info[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.product-card__info[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  padding-right: 12px;\n  font-size: 1.125rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n.product-card__info[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .product-short-desc[_ngcontent-%COMP%] {\n  color: #777;\n}\n.product-card__info[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  font-weight: 600;\n}\n.product-card__cta[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 100%;\n  border: none;\n  background-color: #fff;\n  border-top: 1px solid #ccc;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n@media screen and (min-width: 1024px) {\n  .product-card[_ngcontent-%COMP%]:hover {\n    transform: scale(1.0125);\n  }\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  color: #444444;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: inherit;\n}\n.section-products[_ngcontent-%COMP%] {\n  padding: 80px 0 54px;\n}\n.section-products[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.section-products[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #fe302f;\n  font-weight: 500;\n}\n.section-products[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 400;\n  color: #444444;\n}\n.section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%] {\n  margin-bottom: 26px;\n}\n.section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.section-products[_ngcontent-%COMP%]   #product-1[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]::before {\n  background-size: cover;\n  transition: all 0.3s;\n}\n.section-products[_ngcontent-%COMP%]   #product-2[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]::before {\n  background: url(\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/CrossRoads%20of%20Style%20and%20Function.png\") no-repeat center;\n  background-size: cover;\n}\n.section-products[_ngcontent-%COMP%]   #product-3[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]::before {\n  background: url(\"https://i.ibb.co/L8Nrb7p/1.jpg\") no-repeat center;\n  background-size: cover;\n}\n.section-products[_ngcontent-%COMP%]   #product-4[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]::before {\n  background: url(\"https://i.ibb.co/cLnZjnS/2.jpg\") no-repeat center;\n  background-size: cover;\n}\n.section-products[_ngcontent-%COMP%]   #product-5[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]::before {\n  background: url(\"https://arasset.azureedge.net/webar/Book%20Rack_1.png\") no-repeat center;\n  background-size: cover;\n  transition: all 0.3s;\n}\n.section-products[_ngcontent-%COMP%]   #product-6[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]::before {\n  background: url(\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Comfort%20in%20the%20Kitchen.png\") no-repeat center;\n  background-size: cover;\n}\n.section-products[_ngcontent-%COMP%]   #product-7[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]::before {\n  background: url(\"https://i.ibb.co/L8Nrb7p/1.jpg\") no-repeat center;\n  background-size: cover;\n}\n.section-products[_ngcontent-%COMP%]   #product-8[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]::before {\n  background: url(\"https://i.ibb.co/cLnZjnS/2.jpg\") no-repeat center;\n  background-size: cover;\n}\n.section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]   .discount[_ngcontent-%COMP%], .section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]   .new[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 20px;\n  color: #ffffff;\n  background-color: #fe302f;\n  padding: 2px 8px;\n  text-transform: uppercase;\n  font-size: 0.85rem;\n}\n.section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]   .new[_ngcontent-%COMP%] {\n  left: 0;\n  background-color: #444444;\n}\n.section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -41px;\n  left: 20px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  opacity: 0;\n  transition: bottom 0.5s, opacity 0.5s;\n}\n.section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%]:hover   .part-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  bottom: 30px;\n  opacity: 1;\n}\n.section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 4px;\n}\n.section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  background-color: #ffffff;\n  color: #444444;\n  text-align: center;\n  box-shadow: 0 2px 20px rgba(50, 50, 50, 0.1);\n  transition: color 0.2s;\n}\n.section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fe302f;\n}\n.section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1rem;\n}\n.section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]   .product-old-price[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 7px;\n  margin-right: 2px;\n  opacity: 0.6;\n}\n.section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]   .product-old-price[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background-color: #444444;\n  transform: translateY(-50%);\n}\n.product[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RFEseUZBQUE7QUE3RFI7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUVGO0FBQUk7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQUVOO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUFJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRU47QUFETTtFQUNFLFlBQUE7QUFHUjtBQUZRO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUlWO0FBRlE7RUFDRSxXQUFBO0FBSVY7QUFETTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUFHUjtBQUVJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQUFOO0FBS0E7RUFFSTtJQUNFLHdCQUFBO0VBSEo7QUFDRjtBQVVBO0VBQ0ksa0NBQUE7RUFDQSxjQUFBO0FBUko7QUFXQTs7RUFFSSxxQkFBQTtFQUNBLGNBQUE7QUFSSjtBQVdBO0VBQ0ksb0JBQUE7QUFSSjtBQVdBO0VBQ0ksbUJBQUE7QUFSSjtBQVdBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVJKO0FBV0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVJKO0FBV0E7RUFDSSxtQkFBQTtBQVJKO0FBV0E7RUFLSSxnQkFBQTtBQVpKO0FBOEJBO0VBRUksc0JBQUE7RUFDRixvQkFBQTtBQTVCRjtBQWdDQTtFQUNJLDZKQUFBO0VBQ0Esc0JBQUE7QUE3Qko7QUFnQ0E7RUFDSSxrRUFBQTtFQUNBLHNCQUFBO0FBN0JKO0FBZ0NBO0VBQ0ksa0VBQUE7RUFDQSxzQkFBQTtBQTdCSjtBQStCQTtFQUNJLHlGQUFBO0VBQ0Esc0JBQUE7RUFDRixvQkFBQTtBQTVCRjtBQStCQTtFQUNJLGlKQUFBO0VBQ0Esc0JBQUE7QUE1Qko7QUErQkE7RUFDSSxrRUFBQTtFQUNBLHNCQUFBO0FBNUJKO0FBK0JBO0VBQ0ksa0VBQUE7RUFDQSxzQkFBQTtBQTVCSjtBQStCQTs7RUFFSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBNUJKO0FBK0JBO0VBQ0ksT0FBQTtFQUNBLHlCQUFBO0FBNUJKO0FBK0JBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EscUNBQUE7QUE1Qko7QUErQkE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBQTVCSjtBQStCQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUE1Qko7QUErQkE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esc0JBQUE7QUE1Qko7QUErQkE7RUFDSSxjQUFBO0FBNUJKO0FBK0JBO0VBQ0ksZUFBQTtBQTVCSjtBQStCQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtBQTVCSjtBQStCQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQTVCSjtBQStCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FBNUJKO0FBOEJBO0VBQ0ksZ0JBQUE7QUEzQkoiLCJmaWxlIjoicHJvZHVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgJl9faW1hZ2Uge1xyXG4gICAgPiBpbWcge1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX2luZm8ge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgcGFkZGluZzogMTZweCAxNnB4IDMycHg7XHJcbiAgICA+IGhlYWRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIC5wcm9kdWN0LW5hbWUge1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3Qtc2hvcnQtZGVzYyB7XHJcbiAgICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnByb2R1Y3QtcHJpY2Uge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zNzVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAmX19jdGEge1xyXG4gICAgPiBidXR0b24ge1xyXG4gICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gIC5wcm9kdWN0LWNhcmQge1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMTI1KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICM0NDQ0NDQ7XHJcbn1cclxuXHJcbmEsXHJcbmE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXByb2R1Y3RzIHtcclxuICAgIHBhZGRpbmc6IDgwcHggMCA1NHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi1wcm9kdWN0cyAuaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXByb2R1Y3RzIC5oZWFkZXIgaDMge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY29sb3I6ICNmZTMwMmY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi1wcm9kdWN0cyAuaGVhZGVyIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjNDQ0NDQ0OyBcclxufVxyXG5cclxuLnNlY3Rpb24tcHJvZHVjdHMgLnNpbmdsZS1wcm9kdWN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI2cHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXByb2R1Y3RzIC5zaW5nbGUtcHJvZHVjdCAucGFydC0xIHtcclxuICAgIC8vcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gaGVpZ2h0OiAyOTBweDtcclxuICAgIC8vIG1heC1oZWlnaHQ6IDI5MHB4O1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi8vIC5zZWN0aW9uLXByb2R1Y3RzIC5zaW5nbGUtcHJvZHVjdCAucGFydC0xOjpiZWZvcmUge1xyXG4vLyBcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4vLyBcdFx0Y29udGVudDogXCJcIjtcclxuLy8gXHRcdHRvcDogMDtcclxuLy8gXHRcdGxlZnQ6IDA7XHJcbi8vIFx0XHR3aWR0aDogMTAwJTtcclxuLy8gXHRcdGhlaWdodDogMTAwJTtcclxuLy8gXHRcdC8vei1pbmRleDogLTE7XHJcbi8vIFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuLy8gfVxyXG5cclxuLy8gLnNlY3Rpb24tcHJvZHVjdHMgLnNpbmdsZS1wcm9kdWN0OmhvdmVyIC5wYXJ0LTE6OmJlZm9yZSB7XHJcbi8vIFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMiwxLjIpIHJvdGF0ZSg1ZGVnKTtcclxuLy8gfVxyXG5cclxuLnNlY3Rpb24tcHJvZHVjdHMgI3Byb2R1Y3QtMSAucGFydC0xOjpiZWZvcmUge1xyXG4gICBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICBcclxufVxyXG5cclxuLnNlY3Rpb24tcHJvZHVjdHMgI3Byb2R1Y3QtMiAucGFydC0xOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly90dWxhbmVkaWdjb250ZW50LmJsb2IuY29yZS53aW5kb3dzLm5ldC9tcy1pbmN1YmF0aW9uLTIwMjEvdGh1bWJuYWlscy9Dcm9zc1JvYWRzJTIwb2YlMjBTdHlsZSUyMGFuZCUyMEZ1bmN0aW9uLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnNlY3Rpb24tcHJvZHVjdHMgI3Byb2R1Y3QtMyAucGFydC0xOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9pLmliYi5jby9MOE5yYjdwLzEuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uc2VjdGlvbi1wcm9kdWN0cyAjcHJvZHVjdC00IC5wYXJ0LTE6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2kuaWJiLmNvL2NMblpqblMvMi5qcGdcIikgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLnNlY3Rpb24tcHJvZHVjdHMgI3Byb2R1Y3QtNSAucGFydC0xOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9hcmFzc2V0LmF6dXJlZWRnZS5uZXQvd2ViYXIvQm9vayUyMFJhY2tfMS5wbmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLnNlY3Rpb24tcHJvZHVjdHMgI3Byb2R1Y3QtNiAucGFydC0xOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly90dWxhbmVkaWdjb250ZW50LmJsb2IuY29yZS53aW5kb3dzLm5ldC9tcy1pbmN1YmF0aW9uLTIwMjEvdGh1bWJuYWlscy9Db21mb3J0JTIwaW4lMjB0aGUlMjBLaXRjaGVuLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnNlY3Rpb24tcHJvZHVjdHMgI3Byb2R1Y3QtNyAucGFydC0xOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9pLmliYi5jby9MOE5yYjdwLzEuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uc2VjdGlvbi1wcm9kdWN0cyAjcHJvZHVjdC04IC5wYXJ0LTE6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2kuaWJiLmNvL2NMblpqblMvMi5qcGdcIikgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXByb2R1Y3RzIC5zaW5nbGUtcHJvZHVjdCAucGFydC0xIC5kaXNjb3VudCxcclxuLnNlY3Rpb24tcHJvZHVjdHMgLnNpbmdsZS1wcm9kdWN0IC5wYXJ0LTEgLm5ldyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmUzMDJmO1xyXG4gICAgcGFkZGluZzogMnB4IDhweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbn1cclxuXHJcbi5zZWN0aW9uLXByb2R1Y3RzIC5zaW5nbGUtcHJvZHVjdCAucGFydC0xIC5uZXcge1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDQ7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXByb2R1Y3RzIC5zaW5nbGUtcHJvZHVjdCAucGFydC0xIHVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTQxcHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuNXMsIG9wYWNpdHkgMC41cztcclxufVxyXG5cclxuLnNlY3Rpb24tcHJvZHVjdHMgLnNpbmdsZS1wcm9kdWN0OmhvdmVyIC5wYXJ0LTEgdWwge1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnNlY3Rpb24tcHJvZHVjdHMgLnNpbmdsZS1wcm9kdWN0IC5wYXJ0LTEgdWwgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXByb2R1Y3RzIC5zaW5nbGUtcHJvZHVjdCAucGFydC0xIHVsIGxpIGEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogIzQ0NDQ0NDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggcmdiKDUwIDUwIDUwIC8gMTAlKTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXByb2R1Y3RzIC5zaW5nbGUtcHJvZHVjdCAucGFydC0xIHVsIGxpIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZTMwMmY7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXByb2R1Y3RzIC5zaW5nbGUtcHJvZHVjdCAucGFydC0yIC5wcm9kdWN0LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLnNlY3Rpb24tcHJvZHVjdHMgLnNpbmdsZS1wcm9kdWN0IC5wYXJ0LTIgaDQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uc2VjdGlvbi1wcm9kdWN0cyAuc2luZ2xlLXByb2R1Y3QgLnBhcnQtMiAucHJvZHVjdC1vbGQtcHJpY2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMCA3cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLnNlY3Rpb24tcHJvZHVjdHMgLnNpbmdsZS1wcm9kdWN0IC5wYXJ0LTIgLnByb2R1Y3Qtb2xkLXByaWNlOjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuLnByb2R1Y3R7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59Il19 */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/product.service */ "Gdn9");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../product-card/product-card.component */ "8R/P");










const _c0 = function () { return { "height": "150px" }; };
function HomeComponent_4_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_4_ng_template_0_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const c_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.industrySelect(c_r4.name, "all"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background:url(", c_r4.img, "); width:100%; transition: transform 0.2s;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r4.name);
} }
function HomeComponent_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_4_ng_template_0_Template, 3, 6, "ng-template", 13);
} }
function HomeComponent_8_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_8_ng_template_0_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const c_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.categorySelect(c_r10.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background:url(", c_r10.img, "); width:100%;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r10.name);
} }
function HomeComponent_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_8_ng_template_0_Template, 5, 4, "ng-template", 13);
} }
const _c1 = function () { return { "font-size": "2rem", margin: "0 auto" }; };
function HomeComponent_div_13_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 23);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function HomeComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_13_ng_template_1_Template, 1, 2, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-spin", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzIndicator", _r16);
} }
function HomeComponent_div_14_app_product_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-card", 26);
} if (rf & 2) {
    const n_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("_id", n_r19._id)("name", n_r19.name)("description", n_r19.description)("ios_src", n_r19.ios_src)("short_description", n_r19.short_description)("src", n_r19.src)("product_image_url", n_r19.product_image_url)("price", n_r19.price)("industry", n_r19.industry);
} }
function HomeComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_14_app_product_card_1_Template, 1, 9, "app-product-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.products);
} }
class HomeComponent {
    constructor(productService, cartService, route) {
        this.productService = productService;
        this.cartService = cartService;
        this.route = route;
        this.products = [];
        this.showCategory = false;
        this.categories = [
            {
                name: 'Furniture',
                img: 'https://arasset.azureedge.net/webar/icons/furniture_industry.jpg',
                industry: 'furniture'
            },
            {
                name: 'Fashion',
                img: 'https://arasset.azureedge.net/webar/icons/fashion_industry.jpg',
                industry: 'fashion'
            },
            {
                name: 'Machinery',
                img: 'https://arasset.azureedge.net/webar/icons/machinery_industry.jpg',
                industry: 'machinery'
            },
            {
                name: 'Food',
                img: 'https://webarmodels.blob.core.windows.net/webar/food_industry.jpg'
            }
        ];
        this.subCategoriesFashion = [
            {
                name: 'Footwear',
                img: 'https://arasset.azureedge.net/webar/icons/footwear.png'
            },
            {
                name: 'Handbags',
                img: 'https://arasset.azureedge.net/webar/icons/handbags.png'
            },
            {
                name: 'Menswear',
                img: 'https://arasset.azureedge.net/webar/icons/menswear.png'
            },
            {
                name: 'Womenswear',
                img: 'https://arasset.azureedge.net/webar/icons/womenswear.png'
            }
        ];
        this.subCategoriesFurniture = [
            {
                name: 'Rack',
                img: 'https://arasset.azureedge.net/webar/icons/rack.png'
            },
            {
                name: 'Sofa',
                img: 'https://arasset.azureedge.net/webar/icons/sofa.png'
            },
            {
                name: 'Set',
                img: 'https://arasset.azureedge.net/webar/icons/set.png'
            },
            {
                name: 'Cubicle',
                img: 'https://arasset.azureedge.net/webar/icons/cubicle.png'
            },
            {
                name: 'Table',
                img: 'https://arasset.azureedge.net/webar/icons/table.png'
            },
            {
                name: 'Chair',
                img: 'https://arasset.azureedge.net/webar/icons/chair.png'
            },
            {
                name: 'Lounge',
                img: 'https://arasset.azureedge.net/webar/icons/lounge.png'
            },
            {
                name: 'Large Seater',
                img: 'https://arasset.azureedge.net/webar/icons/large-seater.png'
            },
            {
                name: 'Lamp',
                img: 'https://arasset.azureedge.net/webar/icons/lamp.png'
            },
            {
                name: 'Hearth',
                img: 'https://arasset.azureedge.net/webar/icons/hearth.png'
            }
        ];
        this.subCategoriesMachinery = [
            {
                name: 'Printer',
                img: 'https://arasset.azureedge.net/webar/icons/printer.png'
            }
        ];
        this.subCategoriesFood = [
            {
                name: 'Meal',
                img: 'https://arasset.azureedge.net/webar/icons/meal.png'
            },
            {
                name: 'Bakery',
                img: 'https://arasset.azureedge.net/webar/icons/bakery.png'
            },
            {
                name: 'Barbeque',
                img: 'https://arasset.azureedge.net/webar/icons/barbeque.png'
            },
            {
                name: 'Pizza',
                img: 'https://arasset.azureedge.net/webar/icons/pizza.png'
            },
            {
                name: 'Ramen',
                img: 'https://arasset.azureedge.net/webar/icons/ramen.png'
            }
        ];
        this.loading = false;
        this.productPageCounter = 1;
        this.additionalLoading = false;
        this.load = () => {
            //    this.sub = this.productService.getProducts('https://webarbackend.azurewebsites.net/api/v1/Furniture/getAll')
            //         .subscribe(res => {
            //             this.products = res.Products;     
            //             console.log(this.products)    
            //         })
            if (this.category == "all") {
                console.log("inside if");
                this.sub = this.productService.getProducts('https://webarbackend.azurewebsites.net/api/v1/' + this.industry + '/getAll').subscribe(res => {
                    this.products = res.Products;
                });
            }
            else {
                console.log("inside else");
                var query = 'https://webarbackend.azurewebsites.net/api/v1/' + this.industry + '/' + this.category + '/getAll';
                console.log(query);
                this.sub = this.productService.getProducts(query).subscribe(res => {
                    this.products = res.Products;
                    // console.log(this.products)
                });
            }
        };
    }
    onResize(event) {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
    }
    ngOnInit() {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.loading = true;
        setTimeout(() => {
            this.productService.getAllProducts(9, this.productPageCounter).subscribe((res) => {
                console.log(res);
                this.products = res;
                this.loading = false;
            }, (err) => {
                console.log(err);
                this.loading = false;
            });
        }, 500);
        //Hack Products API Call
        this.subCategories = this.subCategoriesFurniture;
        this.showCategory = false;
        this.getIndustry();
        this.getCategory();
        this.load();
    }
    showMoreProducts() {
        this.additionalLoading = true;
        this.productPageCounter = this.productPageCounter + 1;
        setTimeout(() => {
            this.productService.getAllProducts(9, this.productPageCounter).subscribe((res) => {
                console.log(res);
                this.products = [...this.products, ...res];
                this.additionalLoading = false;
            }, (err) => {
                console.log(err);
                this.additionalLoading = false;
            });
        }, 500);
    }
    getIndustry() {
        if (this.route.params !== null) {
            // console.log("inside if")
            this.route.params.subscribe(res => {
                if (res.industry != null) {
                    this.industry = res.industry;
                }
                else {
                    this.industry = "Furniture";
                }
                console.log(this.industry);
            });
        }
    }
    getCategory() {
        if (this.route.params !== null) {
            this.route.params.subscribe(res => {
                if (res.category != null) {
                    console.log("setting category");
                    this.category = res.category;
                }
                else {
                    this.category = "all";
                }
            });
        }
    }
    getCategoriesByIndustry(industry) {
        if (industry == "Fashion") {
            this.subCategories = this.subCategoriesFashion;
        }
        else if (industry == "Furniture") {
            this.subCategories = this.subCategoriesFurniture;
        }
        else if (industry == "Machinery") {
            this.subCategories = this.subCategoriesMachinery;
        }
        else if (industry == "Food") {
            this.subCategories = this.subCategoriesFood;
        }
    }
    industrySelect(industry, category) {
        this.showCategory = true;
        this.industry = industry;
        this.category = category;
        this.getCategoriesByIndustry(industry);
        this.load();
    }
    categorySelect(category) {
        this.category = category;
        this.load();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function HomeComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 15, vars: 15, consts: [[1, "home-container"], [1, "categories"], [1, "categories__list"], [3, "zoom", "slidesPerView", "spaceBetween", "pagination", "loop", "autoplay"], [4, "ngFor", "ngForOf"], ["id", "subcategories", 2, "display", "block"], [1, "categories__list2", 2, "margin-top", "30px"], [3, "zoom", "slidesPerView", "spaceBetween", "pagination", "loop"], [1, "products"], [1, "products__header"], [2, "font-weight", "bold"], ["class", "products__loading", 4, "ngIf"], ["class", "products__list", 4, "ngIf"], ["swiperSlide", ""], [3, "click"], [1, "category-card", 3, "ngStyle"], [2, "text-align", "center", 3, "click"], [2, "background-color", "white"], [1, "category-card2"], [1, "category-name"], [1, "products__loading"], ["indicatorTemplate", ""], ["nzSimple", "", 3, "nzIndicator"], ["nz-icon", "", "nzType", "loading", 3, "ngStyle"], [1, "products__list"], [3, "_id", "name", "description", "ios_src", "short_description", "src", "product_image_url", "price", "industry", 4, "ngFor", "ngForOf"], [3, "_id", "name", "description", "ios_src", "short_description", "src", "product_image_url", "price", "industry"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "swiper", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_4_Template, 1, 0, undefined, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "swiper", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_8_Template, 1, 0, undefined, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_div_13_Template, 4, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_div_14_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", false)("slidesPerView", ctx.screenWidth > 1200 ? 3 : 1)("spaceBetween", 5)("pagination", true)("loop", true)("autoplay", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", false)("slidesPerView", ctx.screenWidth > 1200 ? 10 : 3)("spaceBetween", 25)("pagination", true)("loop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [swiper_angular__WEBPACK_IMPORTED_MODULE_4__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], swiper_angular__WEBPACK_IMPORTED_MODULE_4__["SwiperSlideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_6__["NzSpinComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"], _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_9__["ProductCardComponent"]], styles: [".home-container {\n  padding-top: 24px;\n}\n.home-container .categories {\n  margin: 0 auto;\n  padding: 24px 16px;\n  max-width: calc(350px + 32px);\n}\n.home-container .categories__header {\n  margin-bottom: 16px;\n}\n.home-container .categories__header > h2 {\n  font-size: 1.75rem;\n}\n.home-container .categories__list .swiper-pagination-bullet-active {\n  background-color: #fff;\n}\n.home-container .categories__list .category-card {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 3px;\n  font-size: 1.375rem;\n  letter-spacing: 5px;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #fff;\n  background-size: cover !important;\n  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  /* IE 9 */\n  -moz-transform: scale(0.95);\n  /* Firefox */\n  -webkit-transform: scale(0.95);\n  /* Safari and Chrome */\n  -o-transform: scale(0.95);\n}\n.home-container .categories__list .category-card:hover {\n  transform: scale(1);\n  -ms-transform: scale(1);\n  /* IE 9 */\n  -moz-transform: scale(1);\n  /* Firefox */\n  -webkit-transform: scale(1);\n  /* Safari and Chrome */\n  -o-transform: scale(1);\n}\n.home-container .categories__list2 .swiper-pagination-bullet-active {\n  background-color: black;\n}\n.home-container .categories__list2 .category-card2 {\n  height: 80px;\n  width: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 15px;\n  font-size: 1.375rem;\n  letter-spacing: 5px;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #fff;\n  background-size: cover !important;\n  cursor: pointer;\n  transform: scale(0.9);\n  -ms-transform: scale(0.9);\n  /* IE 9 */\n  -moz-transform: scale(0.9);\n  /* Firefox */\n  -webkit-transform: scale(0.9);\n  /* Safari and Chrome */\n  -o-transform: scale(0.9);\n  transition: transform 0.2s;\n}\n.home-container .categories__list2 .category-card2:hover {\n  transform: scale(1);\n  -ms-transform: scale(1);\n  /* IE 9 */\n  -moz-transform: scale(1);\n  /* Firefox */\n  -webkit-transform: scale(1);\n  /* Safari and Chrome */\n  -o-transform: scale(1);\n}\n.home-container .body {\n  transition: height 0.7s;\n}\n.home-container .category-name {\n  text-transform: uppercase;\n  font-weight: 300;\n  justify-content: center;\n  letter-spacing: 2px;\n  align-items: center;\n  color: #000;\n  align-content: center;\n}\n.home-container .swiper-button-next {\n  color: white;\n}\n.home-container .swiper-button-prev {\n  color: white;\n}\n.home-container .products {\n  margin: 0 auto;\n  padding: 24px 16px;\n  max-width: calc(350px + 32px);\n}\n.home-container .products__loading {\n  text-align: center;\n}\n.home-container .products__header {\n  margin-bottom: 16px;\n}\n.home-container .products__header > h2 {\n  font-size: 1.75rem;\n}\n.home-container .products__list {\n  display: grid;\n  grid-template-columns: 1fr;\n  row-gap: 24px;\n}\n.home-container .products__list .product-card {\n  height: 100%;\n  max-width: 350px;\n  margin: 0 auto;\n}\n.home-container .products__list .product-card__image {\n  cursor: pointer;\n}\n.home-container .load-products {\n  text-align: center;\n  padding: 16px 16px 32px;\n}\n.home-container .load-products > button {\n  max-width: 341px;\n  height: 44px;\n  width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .home-container .categories {\n    max-width: calc(700px + 72px);\n    padding: 0px 24px;\n  }\n  .home-container .products {\n    max-width: calc(700px + 72px);\n    padding: 36px 24px;\n  }\n  .home-container .products__header {\n    margin-bottom: 16px;\n  }\n  .home-container .products__list {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    column-gap: 24px;\n    row-gap: 24px;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .home-container .categories {\n    max-width: calc(1050px + 96px);\n    padding: 0px 24px;\n  }\n  .home-container .categories__list .category-card {\n    width: 348px;\n  }\n  .home-container .products {\n    max-width: calc(1050px + 96px);\n    padding: 36px 24px;\n  }\n  .home-container .products__header {\n    margin-bottom: 16px;\n  }\n  .home-container .products__list {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGO0FBQUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUVKO0FBREk7RUFDRSxtQkFBQTtBQUdOO0FBRk07RUFDRSxrQkFBQTtBQUlSO0FBQ007RUFDRSxzQkFBQTtBQUNSO0FBQ007RUFFRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxpREFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQTJCLFNBQUE7RUFDM0IsMkJBQUE7RUFBNEIsWUFBQTtFQUM1Qiw4QkFBQTtFQUErQixzQkFBQTtFQUMvQix5QkFBQTtBQUdSO0FBRE07RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0VBQXdCLFNBQUE7RUFDeEIsd0JBQUE7RUFBeUIsWUFBQTtFQUN6QiwyQkFBQTtFQUE0QixzQkFBQTtFQUM1QixzQkFBQTtBQU1SO0FBRE07RUFDRSx1QkFBQTtBQUdSO0FBRE07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQTBCLFNBQUE7RUFDMUIsMEJBQUE7RUFBMkIsWUFBQTtFQUMzQiw2QkFBQTtFQUE4QixzQkFBQTtFQUM5Qix3QkFBQTtFQUNBLDBCQUFBO0FBTVI7QUFKTTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7RUFBd0IsU0FBQTtFQUN4Qix3QkFBQTtFQUF5QixZQUFBO0VBQ3pCLDJCQUFBO0VBQTRCLHNCQUFBO0VBQzVCLHNCQUFBO0FBU1I7QUFMRTtFQUNFLHVCQUFBO0FBT0o7QUFMRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFPSjtBQUxFO0VBQXNCLFlBQUE7QUFReEI7QUFQRTtFQUFzQixZQUFBO0FBVXhCO0FBVEU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQVdKO0FBVkk7RUFDRSxrQkFBQTtBQVlOO0FBVkk7RUFDRSxtQkFBQTtBQVlOO0FBWE07RUFDRSxrQkFBQTtBQWFSO0FBVkk7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0FBWU47QUFYTTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFhUjtBQVpRO0VBQ0UsZUFBQTtBQWNWO0FBVEU7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0FBV0o7QUFWSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFZTjtBQU5BO0VBRUk7SUFDRSw2QkFBQTtJQUNBLGlCQUFBO0VBUUo7RUFERTtJQUNFLDZCQUFBO0lBQ0Esa0JBQUE7RUFHSjtFQUZJO0lBQ0UsbUJBQUE7RUFJTjtFQUZJO0lBQ0UsYUFBQTtJQUNBLDhCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0VBSU47QUFDRjtBQUdBO0VBRUk7SUFDRSw4QkFBQTtJQUNBLGlCQUFBO0VBRko7RUFJTTtJQUNFLFlBQUE7RUFGUjtFQU1FO0lBQ0UsOEJBQUE7SUFDQSxrQkFBQTtFQUpKO0VBS0k7SUFDRSxtQkFBQTtFQUhOO0VBS0k7SUFDRSxhQUFBO0lBQ0Esa0NBQUE7RUFITjtBQUNGO0FBVUE7RUFDRTtJQUNFLDJCQUFBO0VBUkY7RUFVQTtJQUNFLDZCQUFBO0VBUkY7RUFVQTtJQUNFLDJCQUFBO0VBUkY7QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogMjRweDtcclxuICAuY2F0ZWdvcmllcyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDI0cHggMTZweDtcclxuICAgIG1heC13aWR0aDogY2FsYygzNTBweCArIDMycHgpOyAvLyB3aWR0aCBvZiBjYXJkcyArIGFsbCBwYWRkaW5nICsgZ2FwXHJcbiAgICAmX19oZWFkZXIge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICA+IGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2xpc3Qge1xyXG4gICAgICAvLyBqdXN0IGZvciBjYXRlZ29yaWVzXHJcbiAgICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICAgIC5jYXRlZ29yeS1jYXJkIHtcclxuICAgICAgICAvLyBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjM3NXJlbTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBib3gtc2hhZG93Omluc2V0IDAgMCAwIDIwMDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7ICAgIFxyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMC45NSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgwLjk1KTsgLyogSUUgOSAqL1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDAuOTUpOyAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMC45NSk7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOnNjYWxlKDAuOTUpO1xyXG4gICAgICB9XHJcbiAgICAgIC5jYXRlZ29yeS1jYXJkOmhvdmVye1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgxKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOnNjYWxlKDEpOyAvKiBJRSA5ICovXHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06c2NhbGUoMSk7IC8qIEZpcmVmb3ggKi9cclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cclxuICAgICAgICAtby10cmFuc2Zvcm06c2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2xpc3QyIHtcclxuICAgICAgLy8ganVzdCBmb3IgY2F0ZWdvcmllc1xyXG4gICAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgICAgfVxyXG4gICAgICAuY2F0ZWdvcnktY2FyZDIge1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDEuMzc1cmVtO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlciAhaW1wb3J0YW50OyBcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDAuOSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgwLjkpOyAvKiBJRSA5ICovXHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06c2NhbGUoMC45KTsgLyogRmlyZWZveCAqL1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDAuOSk7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOnNjYWxlKDAuOSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcclxuICAgICAgfVxyXG4gICAgICAuY2F0ZWdvcnktY2FyZDI6aG92ZXJ7XHJcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMSk7IC8qIElFIDkgKi9cclxuICAgICAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxKTsgLyogRmlyZWZveCAqL1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xyXG4gICAgICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuYm9keXtcclxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjdzO1xyXG4gIH1cclxuICAuY2F0ZWdvcnktbmFtZXtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAuc3dpcGVyLWJ1dHRvbi1uZXh0IHsgY29sb3I6IHdoaXRlOyB9XHJcbiAgLnN3aXBlci1idXR0b24tcHJldiB7IGNvbG9yOiB3aGl0ZTsgfVxyXG4gIC5wcm9kdWN0cyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDI0cHggMTZweDtcclxuICAgIG1heC13aWR0aDogY2FsYygzNTBweCArIDMycHgpOyAvLyB3aWR0aCBvZiBjYXJkcyArIGFsbCBwYWRkaW5nICsgZ2FwXHJcbiAgICAmX19sb2FkaW5nIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgJl9faGVhZGVyIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgPiBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19saXN0IHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgIHJvdy1nYXA6IDI0cHg7XHJcbiAgICAgIC5wcm9kdWN0LWNhcmQge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICZfX2ltYWdlIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmxvYWQtcHJvZHVjdHMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTZweCAxNnB4IDMycHg7XHJcbiAgICA+IGJ1dHRvbiB7XHJcbiAgICAgIG1heC13aWR0aDogMzQxcHg7XHJcbiAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuaG9tZS1jb250YWluZXIge1xyXG4gICAgLmNhdGVnb3JpZXMge1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoNzAwcHggKyA3MnB4KTsgLy8gd2lkdGggb2YgY2FyZHMgKyBhbGwgcGFkZGluZyArIGdhcFxyXG4gICAgICBwYWRkaW5nOiAwcHggMjRweDtcclxuICAgICAgJl9fbGlzdCB7XHJcbiAgICAgICAgLmNhdGVnb3J5LWNhcmQge1xyXG4gICAgICAgICAgLy8gaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcm9kdWN0cyB7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYyg3MDBweCArIDcycHgpOyAvLyB3aWR0aCBvZiBjYXJkcyArIGFsbCBwYWRkaW5nICsgZ2FwXHJcbiAgICAgIHBhZGRpbmc6IDM2cHggMjRweDtcclxuICAgICAgJl9faGVhZGVyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICAgICZfX2xpc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDI0cHg7XHJcbiAgICAgICAgcm93LWdhcDogMjRweDtcclxuICAgICAgICAucHJvZHVjdC1jYXJkIHtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5ob21lLWNvbnRhaW5lciB7XHJcbiAgICAuY2F0ZWdvcmllcyB7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDUwcHggKyA5NnB4KTsgLy8gd2lkdGggb2YgY2FyZHMgKyBhbGwgcGFkZGluZyArIGdhcFxyXG4gICAgICBwYWRkaW5nOiAwcHggMjRweDtcclxuICAgICAgJl9fbGlzdCB7XHJcbiAgICAgICAgLmNhdGVnb3J5LWNhcmQge1xyXG4gICAgICAgICAgd2lkdGg6IDM0OHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByb2R1Y3RzIHtcclxuICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwNTBweCArIDk2cHgpOyAvLyB3aWR0aCBvZiBjYXJkcyArIGFsbCBwYWRkaW5nICsgZ2FwXHJcbiAgICAgIHBhZGRpbmc6IDM2cHggMjRweDtcclxuICAgICAgJl9faGVhZGVyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICAgICZfX2xpc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICAgICAgICAucHJvZHVjdC1jYXJkIHtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZ3JhZGllbnQge1xyXG4gIDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcclxuICB9XHJcbn1cclxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ "AytR":
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
    apiUrl: 'https://webarbackend.azurewebsites.net/api/v1/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Gdn9":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "H+bZ");



class ProductService {
    constructor(http, _api) {
        this.http = http;
        this._api = _api;
        this.getQrCodeEndpoint = 'https://webarbackend.azurewebsites.net/api/v1/makeQrCode';
    }
    getAllProducts(limitOfResults = 9, page) {
        return this.http.get(this.url + 'products', {
            params: {
                limit: limitOfResults.toString(),
                page: page,
            },
        });
    }
    getSingleProduct(id) {
        // console.log(id);
        return this._api.getTypeRequest('products/' + id);
    }
    getProducts(endpoint) {
        return this.http.get(endpoint);
    }
    getQrCode(body) {
        return this.http.post(this.getQrCodeEndpoint, body);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ApiService {
    constructor(_http) {
        this._http = _http;
    }
    getTypeRequest(url) {
        return this._http.get(`${this.baseUrl}${url}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((res) => {
            return res;
        }));
    }
    postTypeRequest(url, payload) {
        return this._http.post(`${this.baseUrl}${url}`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((res) => {
            return res;
        }));
    }
    putTypeRequest(url, payload) {
        return this._http.put(`${this.baseUrl}${url}`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((res) => {
            return res;
        }));
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Hs9l":
/*!**********************************************!*\
  !*** ./src/app/guards/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/token-storage.service */ "Zr0/");



class AuthGuardService {
    constructor(_route, _token) {
        this._route = _route;
        this._token = _token;
    }
    canActivate(route, state) {
        const currentUser = this._token.getUser();
        if (currentUser) {
            return true;
        }
        this._route.navigate(['/login']);
        return false;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "IiZn":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/progress */ "W9fG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");











function CheckoutComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CheckoutComponent_div_3_div_5_Template_input_valueChange_3_listener($event) { const field_r5 = ctx.$implicit; return field_r5.value = $event; })("ngModelChange", function CheckoutComponent_div_3_div_5_Template_input_ngModelChange_3_listener($event) { const field_r5 = ctx.$implicit; return field_r5.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](field_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", field_r5.type)("name", field_r5.name)("placeholder", field_r5.placeholder)("value", field_r5.value)("ngModel", field_r5.value);
} }
function CheckoutComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Billing Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CheckoutComponent_div_3_div_5_Template, 4, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_div_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.submitBilling(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.billingAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.canBillingSubmit());
} }
function CheckoutComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Payment Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Card number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CheckoutComponent_div_4_Template_input_valueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.cardNumber = $event; })("ngModelChange", function CheckoutComponent_div_4_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.cardNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name on card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CheckoutComponent_div_4_Template_input_valueChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.cardName = $event; })("ngModelChange", function CheckoutComponent_div_4_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.cardName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Expiry date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CheckoutComponent_div_4_Template_input_valueChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.cardExpiry = $event; })("ngModelChange", function CheckoutComponent_div_4_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.cardExpiry = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Security code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CheckoutComponent_div_4_Template_input_valueChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.cardCode = $event; })("ngModelChange", function CheckoutComponent_div_4_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.cardCode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_div_4_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.submitPayment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.cardNumber)("ngModel", ctx_r1.cardNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.cardName)("ngModel", ctx_r1.cardName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.cardExpiry)("ngModel", ctx_r1.cardExpiry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.cardCode)("ngModel", ctx_r1.cardCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.canPaymentSubmit());
} }
function CheckoutComponent_div_5_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r22.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r22.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, item_r22.price, "USD"), " x ", item_r22.quantity, " = ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 8, item_r22.quantity * item_r22.price, "USD"), " ");
} }
function CheckoutComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Order Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Item(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Payment method");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Order total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_div_5_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.submitCheckout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Place order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Order Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CheckoutComponent_div_5_div_25_Template, 9, 11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.cartData.products.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 4, ctx_r2.cartData.total, "USD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.cartData.products);
} }
function CheckoutComponent_div_6_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r26.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r26.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, item_r26.price, "USD"), " x ", item_r26.quantity, " = ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 8, item_r26.quantity * item_r26.price, "USD"), " ");
} }
function CheckoutComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Thank you!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Please check your email for the order confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Order ID: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Continue shopping ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Order Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CheckoutComponent_div_6_div_18_Template, 9, 11, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.orderId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.products);
} }
class CheckoutComponent {
    constructor(_auth, _cart) {
        this._auth = _auth;
        this._cart = _cart;
        this.currentStep = 1;
        this.loading = false;
        this.successMessage = '';
        this.billingAddress = [
            {
                name: 'Full name',
                placeholder: 'Enter your full name',
                type: 'text',
                value: '',
            },
            {
                name: 'Email',
                placeholder: 'Enter your email address',
                type: 'email',
                value: '',
            },
            {
                name: 'Address',
                placeholder: 'Enter your address',
                type: 'text',
                value: '',
            },
            {
                name: 'City',
                placeholder: 'Enter your city',
                type: 'text',
                value: '',
            },
            {
                name: 'Country',
                placeholder: 'Enter your country',
                type: 'text',
                value: '',
            },
            {
                name: 'ZIP',
                placeholder: 'Enter your zip code',
                type: 'text',
                value: '',
            },
            {
                name: 'Telephone',
                placeholder: 'Enter your telephone number',
                type: 'text',
                value: '',
            },
        ];
        this._auth.user.subscribe((user) => {
            if (user) {
                this.currentUser = user;
                this.billingAddress[0].value = user.full_name;
                this.billingAddress[1].value = user.email;
            }
        });
        this._cart.cartDataObs$.subscribe((cartData) => {
            this.cartData = cartData;
        });
    }
    ngOnInit() { }
    submitCheckout() {
        this.loading = true;
        setTimeout(() => {
            this._cart
                .submitCheckout(this.currentUser.user_id, this.cartData)
                .subscribe((res) => {
                console.log(res);
                this.loading = false;
                this.orderId = res.orderId;
                this.products = res.products;
                this.currentStep = 4;
                this._cart.clearCart();
            }, (err) => {
                console.log(err);
                this.loading = false;
            });
        }, 750);
    }
    getProgressPrecent() {
        return (this.currentStep / 4) * 100;
    }
    submitBilling() {
        this.nextStep();
    }
    canBillingSubmit() {
        return this.billingAddress.filter((field) => field.value.length > 0)
            .length !== 7
            ? true
            : false;
    }
    submitPayment() {
        this.nextStep();
    }
    canPaymentSubmit() {
        return this.cardNumber && this.cardName && this.cardExpiry && this.cardCode
            ? true
            : false;
    }
    nextStep() {
        this.currentStep += 1;
        localStorage.setItem('checkoutStep', this.currentStep.toString());
    }
    prevStep() {
        if (this.currentStep > 1) {
            this.currentStep -= 1;
            localStorage.setItem('checkoutStep', this.currentStep.toString());
        }
    }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"])); };
CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], decls: 7, vars: 7, consts: [[1, "checkout-container"], [1, "progress-container"], [3, "nzPercent", "nzShowInfo", "nzStrokeWidth"], [4, "ngIf"], [1, "billing-container"], ["class", "input-container", 4, "ngFor", "ngForOf"], ["nz-button", "", 3, "disabled", "click"], [1, "input-container"], ["for", ""], ["nz-input", "", 3, "type", "name", "placeholder", "value", "ngModel", "valueChange", "ngModelChange"], [1, "payment-container"], ["nz-input", "", "type", "text", "name", "cardNumber", "placeholder", "1234 1234 1234 1234", 3, "value", "ngModel", "valueChange", "ngModelChange"], ["nz-input", "", "type", "text", "name", "cardName", "placeholder", "John Doe", 3, "value", "ngModel", "valueChange", "ngModelChange"], [1, "\u203C\uFE0F"], ["nz-input", "", "type", "text", "name", "cardExpiry", "placeholder", "06/30", 3, "value", "ngModel", "valueChange", "ngModelChange"], ["nz-input", "", "type", "text", "name", "cardCode", "placeholder", "123", 3, "value", "ngModel", "valueChange", "ngModelChange"], [1, "summary-container"], [1, "summary-container__order"], [1, "details"], ["nz-button", "", "nzType", "primary", 3, "nzLoading", "click"], [1, "summary-container__items"], [1, "item-list"], ["class", "item-container", 4, "ngFor", "ngForOf"], [1, "item-container"], [1, "item-image"], ["alt", "", 3, "src"], [1, "item-title"], [1, "item-total"], [1, "confirmation-container"], [1, "title"], [1, "order-id"], ["nz-button", "", "routerLink", "/", 1, "cta-button"], [1, "products-container"], [1, "products-container__list"], ["class", "list-item", 4, "ngFor", "ngForOf"], [1, "list-item"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-progress", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CheckoutComponent_div_3_Template, 8, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CheckoutComponent_div_4_Template, 24, 9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CheckoutComponent_div_5_Template, 26, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CheckoutComponent_div_6_Template, 19, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", ctx.getProgressPrecent())("nzShowInfo", false)("nzStrokeWidth", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStep === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStep === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStep === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStep === 4);
    } }, directives: [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_3__["NzProgressComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["@charset \"UTF-8\";\n.checkout-container[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n  position: relative;\n}\n.checkout-container[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%] {\n  top: -12px;\n  left: 0px;\n  position: absolute;\n  height: 20px;\n  width: 100%;\n}\n.checkout-container[_ngcontent-%COMP%]   .billing-container[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.checkout-container[_ngcontent-%COMP%]   .billing-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.checkout-container[_ngcontent-%COMP%]   .billing-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .input-container[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.checkout-container[_ngcontent-%COMP%]   .billing-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .input-container[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 2px;\n}\n.checkout-container[_ngcontent-%COMP%]   .billing-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .input-container[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  height: 44px;\n}\n.checkout-container[_ngcontent-%COMP%]   .billing-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n}\n.checkout-container[_ngcontent-%COMP%]   .payment-container[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.checkout-container[_ngcontent-%COMP%]   .payment-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.checkout-container[_ngcontent-%COMP%]   .payment-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.checkout-container[_ngcontent-%COMP%]   .payment-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 2px;\n}\n.checkout-container[_ngcontent-%COMP%]   .payment-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 44px;\n}\n.checkout-container[_ngcontent-%COMP%]   .payment-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .\u203C\uFE0F[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 12px;\n}\n.checkout-container[_ngcontent-%COMP%]   .payment-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__order[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__order[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__order[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__order[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 3px;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__order[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__order[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  height: 44px;\n  width: 100%;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  margin-bottom: 24px;\n  padding: 8px 0;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .item-total[_ngcontent-%COMP%] {\n  text-align: right;\n  padding-left: 16px;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  padding-bottom: 40px;\n  text-align: center;\n  border-bottom: 1px solid #ccc;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  font-size: 2.75rem;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   .order-id[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 250px;\n  height: 44px;\n  margin: 24px auto auto;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]   .products-container[_ngcontent-%COMP%] {\n  text-align: left;\n  padding-top: 40px;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]   .products-container[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]   .products-container__list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  margin-bottom: 24px;\n  padding: 8px 0;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]   .products-container__list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]   .products-container__list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]   .products-container__list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]   .products-container__list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .item-total[_ngcontent-%COMP%] {\n  text-align: right;\n  padding-left: 16px;\n}\n@media screen and (min-width: 1200px) {\n  .checkout-container[_ngcontent-%COMP%] {\n    padding: 0;\n    padding-bottom: 60px;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%] {\n    top: -60px;\n    left: 0px;\n    position: absolute;\n    height: 20px;\n    width: 100%;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .billing-container[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n    max-width: 600px;\n    margin: 48px auto 0;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .payment-container[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n    max-width: 600px;\n    margin: 48px auto 0;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .summary-container[_ngcontent-%COMP%] {\n    max-width: 1024px;\n    margin: 48px auto 0;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n    display: flex;\n    flex-direction: row-reverse;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .summary-container__order[_ngcontent-%COMP%] {\n    width: 350px;\n    padding: 16px;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%] {\n    flex-grow: 1;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n    padding: 16px;\n    margin: 0;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%] {\n    max-width: 700px;\n    margin: 48px auto 0;\n    padding: 24px;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoZWNrb3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUFFO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRUo7QUFDSTtFQUNFLG1CQUFBO0FBQ047QUFDSTtFQUNFLG1CQUFBO0FBQ047QUFBTTtFQUNFLG1CQUFBO0FBRVI7QUFEUTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUdWO0FBRFE7RUFDRSxZQUFBO0FBR1Y7QUFDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ047QUFJSTtFQUNFLG1CQUFBO0FBRk47QUFJSTtFQUNFLG1CQUFBO0FBRk47QUFHTTtFQUNFLG1CQUFBO0FBRFI7QUFFUTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUFWO0FBRVE7RUFDRSxZQUFBO0FBQVY7QUFHTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBRFI7QUFJSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRk47QUFPSTtFQUlFLG1CQUFBO0FBUk47QUFLTTtFQUNFLG1CQUFBO0FBSFI7QUFNTTtFQUNFLG1CQUFBO0FBSlI7QUFLUTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUhWO0FBSVU7RUFDRSxrQkFBQTtBQUZaO0FBTU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUpSO0FBUU07RUFDRSxtQkFBQTtBQU5SO0FBUU07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBTlI7QUFPUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBTFY7QUFNVTtFQUNFLGtCQUFBO0FBSlo7QUFLWTtFQUNFLFdBQUE7QUFIZDtBQU1VO0VBQ0UsWUFBQTtBQUpaO0FBTVU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBSlo7QUFVRTtFQUNFLGtCQUFBO0FBUko7QUFTSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQVBOO0FBU1E7RUFDRSxrQkFBQTtBQVBWO0FBV1E7RUFDRSxnQkFBQTtBQVRWO0FBYUk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFYTjtBQWFJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQVhOO0FBWU07RUFDRSxtQkFBQTtBQVZSO0FBYVE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVhWO0FBWVU7RUFDRSxrQkFBQTtBQVZaO0FBV1k7RUFDRSxXQUFBO0FBVGQ7QUFZVTtFQUNFLFlBQUE7QUFWWjtBQVlVO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQVZaO0FBa0JBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esb0JBQUE7RUFmRjtFQWdCRTtJQUNFLFVBQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQWRKO0VBZ0JFO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtFQWRKO0VBZ0JFO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtFQWRKO0VBZ0JFO0lBQ0UsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0EsMkJBQUE7RUFkSjtFQWVJO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUFiTjtFQWVJO0lBQ0UsWUFBQTtFQWJOO0VBY007SUFDRSxhQUFBO0lBQ0EsU0FBQTtFQVpSO0VBY007SUFDRSxhQUFBO0VBWlI7RUFnQkU7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7RUFkSjtBQUNGIiwiZmlsZSI6ImNoZWNrb3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNoZWNrb3V0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDI0cHggMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNoZWNrb3V0LWNvbnRhaW5lciAucHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgdG9wOiAtMTJweDtcbiAgbGVmdDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5iaWxsaW5nLWNvbnRhaW5lciA+IGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5jaGVja291dC1jb250YWluZXIgLmJpbGxpbmctY29udGFpbmVyID4gZm9ybSB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5iaWxsaW5nLWNvbnRhaW5lciA+IGZvcm0gPiAuaW5wdXQtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5jaGVja291dC1jb250YWluZXIgLmJpbGxpbmctY29udGFpbmVyID4gZm9ybSA+IC5pbnB1dC1jb250YWluZXIgPiBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5iaWxsaW5nLWNvbnRhaW5lciA+IGZvcm0gPiAuaW5wdXQtY29udGFpbmVyID4gaW5wdXQge1xuICBoZWlnaHQ6IDQ0cHg7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5iaWxsaW5nLWNvbnRhaW5lciA+IGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5wYXltZW50LWNvbnRhaW5lciA+IGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5jaGVja291dC1jb250YWluZXIgLnBheW1lbnQtY29udGFpbmVyID4gZm9ybSB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5wYXltZW50LWNvbnRhaW5lciA+IGZvcm0gLmlucHV0LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5wYXltZW50LWNvbnRhaW5lciA+IGZvcm0gLmlucHV0LWNvbnRhaW5lciBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5wYXltZW50LWNvbnRhaW5lciA+IGZvcm0gLmlucHV0LWNvbnRhaW5lciBpbnB1dCB7XG4gIGhlaWdodDogNDRweDtcbn1cbi5jaGVja291dC1jb250YWluZXIgLnBheW1lbnQtY29udGFpbmVyID4gZm9ybSA+IC7igLzvuI8ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGNvbHVtbi1nYXA6IDEycHg7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5wYXltZW50LWNvbnRhaW5lciA+IGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5zdW1tYXJ5LWNvbnRhaW5lcl9fb3JkZXIge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLmNoZWNrb3V0LWNvbnRhaW5lciAuc3VtbWFyeS1jb250YWluZXJfX29yZGVyID4gaDIge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmNoZWNrb3V0LWNvbnRhaW5lciAuc3VtbWFyeS1jb250YWluZXJfX29yZGVyIC5kZXRhaWxzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5jaGVja291dC1jb250YWluZXIgLnN1bW1hcnktY29udGFpbmVyX19vcmRlciAuZGV0YWlscyA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbi5jaGVja291dC1jb250YWluZXIgLnN1bW1hcnktY29udGFpbmVyX19vcmRlciAuZGV0YWlscyA+IGRpdiA+IHNwYW4ge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5zdW1tYXJ5LWNvbnRhaW5lcl9fb3JkZXIgPiBidXR0b24ge1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNoZWNrb3V0LWNvbnRhaW5lciAuc3VtbWFyeS1jb250YWluZXJfX2l0ZW1zID4gaDIge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmNoZWNrb3V0LWNvbnRhaW5lciAuc3VtbWFyeS1jb250YWluZXJfX2l0ZW1zIC5pdGVtLWxpc3Qge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5jaGVja291dC1jb250YWluZXIgLnN1bW1hcnktY29udGFpbmVyX19pdGVtcyAuaXRlbS1saXN0IC5pdGVtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIHBhZGRpbmc6IDhweCAwO1xufVxuLmNoZWNrb3V0LWNvbnRhaW5lciAuc3VtbWFyeS1jb250YWluZXJfX2l0ZW1zIC5pdGVtLWxpc3QgLml0ZW0tY29udGFpbmVyIC5pdGVtLWltYWdlIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLmNoZWNrb3V0LWNvbnRhaW5lciAuc3VtbWFyeS1jb250YWluZXJfX2l0ZW1zIC5pdGVtLWxpc3QgLml0ZW0tY29udGFpbmVyIC5pdGVtLWltYWdlID4gaW1nIHtcbiAgd2lkdGg6IDgwcHg7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5zdW1tYXJ5LWNvbnRhaW5lcl9faXRlbXMgLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLml0ZW0tdGl0bGUge1xuICBmbGV4LWdyb3c6IDE7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5zdW1tYXJ5LWNvbnRhaW5lcl9faXRlbXMgLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLml0ZW0tdG90YWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLmNoZWNrb3V0LWNvbnRhaW5lciAuY29uZmlybWF0aW9uLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jaGVja291dC1jb250YWluZXIgLmNvbmZpcm1hdGlvbi1jb250YWluZXIgPiBoZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cbi5jaGVja291dC1jb250YWluZXIgLmNvbmZpcm1hdGlvbi1jb250YWluZXIgPiBoZWFkZXIgLnRpdGxlID4gaDEge1xuICBmb250LXNpemU6IDIuNzVyZW07XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5jb25maXJtYXRpb24tY29udGFpbmVyID4gaGVhZGVyIC5vcmRlci1pZCA+IHNwYW4ge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNoZWNrb3V0LWNvbnRhaW5lciAuY29uZmlybWF0aW9uLWNvbnRhaW5lciAuY3RhLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIG1hcmdpbjogMjRweCBhdXRvIGF1dG87XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5jb25maXJtYXRpb24tY29udGFpbmVyIC5wcm9kdWN0cy1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi5jaGVja291dC1jb250YWluZXIgLmNvbmZpcm1hdGlvbi1jb250YWluZXIgLnByb2R1Y3RzLWNvbnRhaW5lciA+IGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5jaGVja291dC1jb250YWluZXIgLmNvbmZpcm1hdGlvbi1jb250YWluZXIgLnByb2R1Y3RzLWNvbnRhaW5lcl9fbGlzdCAubGlzdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgcGFkZGluZzogOHB4IDA7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5jb25maXJtYXRpb24tY29udGFpbmVyIC5wcm9kdWN0cy1jb250YWluZXJfX2xpc3QgLmxpc3QtaXRlbSAuaXRlbS1pbWFnZSB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5jaGVja291dC1jb250YWluZXIgLmNvbmZpcm1hdGlvbi1jb250YWluZXIgLnByb2R1Y3RzLWNvbnRhaW5lcl9fbGlzdCAubGlzdC1pdGVtIC5pdGVtLWltYWdlID4gaW1nIHtcbiAgd2lkdGg6IDgwcHg7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5jb25maXJtYXRpb24tY29udGFpbmVyIC5wcm9kdWN0cy1jb250YWluZXJfX2xpc3QgLmxpc3QtaXRlbSAuaXRlbS10aXRsZSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5jaGVja291dC1jb250YWluZXIgLmNvbmZpcm1hdGlvbi1jb250YWluZXIgLnByb2R1Y3RzLWNvbnRhaW5lcl9fbGlzdCAubGlzdC1pdGVtIC5pdGVtLXRvdGFsIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jaGVja291dC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gIH1cbiAgLmNoZWNrb3V0LWNvbnRhaW5lciAucHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgICB0b3A6IC02MHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jaGVja291dC1jb250YWluZXIgLmJpbGxpbmctY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW46IDQ4cHggYXV0byAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB9XG4gIC5jaGVja291dC1jb250YWluZXIgLnBheW1lbnQtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW46IDQ4cHggYXV0byAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB9XG4gIC5jaGVja291dC1jb250YWluZXIgLnN1bW1hcnktY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgICBtYXJnaW46IDQ4cHggYXV0byAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICB9XG4gIC5jaGVja291dC1jb250YWluZXIgLnN1bW1hcnktY29udGFpbmVyX19vcmRlciB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cbiAgLmNoZWNrb3V0LWNvbnRhaW5lciAuc3VtbWFyeS1jb250YWluZXJfX2l0ZW1zIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLmNoZWNrb3V0LWNvbnRhaW5lciAuc3VtbWFyeS1jb250YWluZXJfX2l0ZW1zID4gaDIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5jaGVja291dC1jb250YWluZXIgLnN1bW1hcnktY29udGFpbmVyX19pdGVtcyAuaXRlbS1saXN0IHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG4gIC5jaGVja291dC1jb250YWluZXIgLmNvbmZpcm1hdGlvbi1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgbWFyZ2luOiA0OHB4IGF1dG8gMDtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB9XG59Il19 */"] });


/***/ }),

/***/ "KRBT":
/*!*************************************************!*\
  !*** ./src/app/services/interceptor.service.ts ***!
  \*************************************************/
/*! exports provided: MyInterceptor, authInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyInterceptor", function() { return MyInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function() { return authInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/token-storage.service */ "Zr0/");



const TOKEN_HEADER_KEY = 'x-access-token';
class MyInterceptor {
    constructor(_token) {
        this._token = _token;
    }
    intercept(req, next) {
        let authReq = req;
        let token = this._token.getToken();
        if (token != null) {
            authReq = req.clone({
                headers: req.headers.set(TOKEN_HEADER_KEY, token),
            });
        }
        return next.handle(authReq);
    }
}
MyInterceptor.ɵfac = function MyInterceptor_Factory(t) { return new (t || MyInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"])); };
MyInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MyInterceptor, factory: MyInterceptor.ɵfac });
const authInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: MyInterceptor, multi: true },
];


/***/ }),

/***/ "LvIC":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/core */ "TaHA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/product.service */ "Gdn9");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");

// import Swiper core and required components









function ProductComponent_div_0_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 25);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r3.qrResult, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ProductComponent_div_0_button_31_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductComponent_div_0_button_31_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return ctx_r5.open(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " View in AR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "height": a0, "width": a1 }; };
function ProductComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "model-viewer", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ProductComponent_div_0_img_7_Template, 1, 1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "10 Review(s) | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Add your review");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, ProductComponent_div_0_button_31_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r0.product.src);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("ios-src", ctx_r0.product.ios_src);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("poster", ctx_r0.product.product_image_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](13, _c0, ctx_r0.screenWidth > 1200 ? "450px" : "300px", ctx_r0.screenWidth > 1200 ? "600px" : "350px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.product.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](27, 10, ctx_r0.product.price, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.product.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.screenWidth > 1200);
} }
function ProductComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Scan this QR Code with your smartphone to experience our WebAR product ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductComponent_ng_template_1_Template_button_click_4_listener() { const modal_r7 = ctx.$implicit; return modal_r7.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r2.qrResult, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
// import { Product } from '../shared/models/hack.model';
// install Swiper components
swiper_core__WEBPACK_IMPORTED_MODULE_1__["default"].use([
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Navigation"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Pagination"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Scrollbar"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["A11y"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Virtual"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Zoom"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Autoplay"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Thumbs"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Controller"],
]);
class ProductComponent {
    constructor(_route, _product, _cart, modalService) {
        this._route = _route;
        this._product = _product;
        this._cart = _cart;
        this.modalService = modalService;
        this.showcaseImages = [];
        this.loading = false;
        this.displayStyle = "none";
        this.closeResult = '';
        this.getProduct = (industry, id) => {
            // this.sub = this.productService.getProducts('https://webarbackend.azurewebsites.net/api/v1/Furniture/'+id)
            //     .subscribe(res => {
            //         this.product = res.Product;
            //         // console.log(res)
            //     })
            this.sub = this._product.getProducts('https://webarbackend.azurewebsites.net/api/v1/' + industry + '/' + id).subscribe(res => {
                this.product = res.Product;
                this.loading = false;
                // console.log(this.product)
            });
        };
    }
    ngOnInit() {
        this.screenWidth = window.innerWidth;
        this.loading = true;
        // this._route.paramMap
        //   .pipe(
        //     map((param: any) => {
        //       return param.params._id;
        //     })
        //   )
        //   .subscribe((productId) => {
        //     console.log(productId)
        //     // returns string so convert it to number
        //     this.id = parseInt(productId);
        //     this._product.getSingleProduct(productId).subscribe((product) => {
        //       console.log(product);
        //       this.product = product;
        //       if (product.quantity === 0) this.quantity = 0;
        //       else this.quantity = 1;
        //       if (product.images) {
        //         this.showcaseImages = product.images.split(';');
        //       }
        //       this.loading = false;
        //     });
        //   });
        //Taking params from route 
        this._route.params
            .subscribe(res => {
            this.getProduct(res.industry, res._id);
            this.getQrCode(res.industry, res._id);
        });
    }
    getQrCode(industry, id) {
        this._product.getQrCode({ "url": 'https://webarbackend.azurewebsites.net/api/v1/scanQrCode/' + industry + '/' + id }).subscribe(res => {
            this.qrResult = res.result;
        });
    }
    addToCart() {
        this._cart.addProduct({
            _id: this.product._id,
            price: this.product.price,
            image: this.product.product_image_url,
            title: this.product.name,
        });
    }
    openPopup() {
        this.displayStyle = "block";
    }
    closePopup() {
        this.displayStyle = "none";
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult =
                `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModal"])); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 3, vars: 1, consts: [["class", "product-container", 4, "ngIf"], ["class", "modal-dialog-centered ", "style", "border: 2px !important;"], ["content", ""], [1, "product-container"], [1, "product-container__image"], [1, "row", 2, "padding", "35px"], [1, "col-md-6", "float-center"], ["id", "dimension-demo", "ar", "", "ar-modes", "scene-viewer webxr quick-look", "ar-scale", "fixed", "camera-orbit", "-30deg auto auto", "max-camera-orbit", "auto 100deg auto", "shadow-intensity", "1", "camera-controls", "", "alt", "", "loading", "lazy", 2, "position", "relative", 3, "src", "ios-src", "poster", "ngStyle"], [1, "col-md-6"], [3, "src", 4, "ngIf"], [1, "product-container__details", 2, "float", "center"], [1, "title", 2, "font-weight", "bold"], [1, "reviews"], [1, "rating"], ["nz-icon", "", "nzType", "star", "nzTheme", "fill"], ["nz-icon", "", "nzType", "star"], [1, "review-link"], [2, "cursor", "pointer"], [1, "category", 2, "font-weight", "bold", "font-size", "18px"], [1, "price-container"], [1, "price"], [1, "availability"], [1, "description"], ["class", "btn btn-sm btn-outline-primary", 3, "click", 4, "ngIf"], [1, "additional"], [3, "src"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [2, "border", "3px solid #78aaff"], [1, "modal-header", 2, "border-bottom", "0px !important", "padding-bottom", "0px"], ["id", "modal-basic-title", 1, "modal-title", 2, "text-align", "center", "line-height", "1.2", "font-size", "18px"], ["type", "button", "aria-label", "Close", 1, "close", "btn-close", 2, "margin-right", "2px", 3, "click"], [1, "modal-body", 2, "text-align", "center"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProductComponent_div_0_Template, 33, 16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductComponent_ng_template_1_Template, 7, 1, "ng-template", 1, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: [".product-container[_ngcontent-%COMP%] {\n  padding-bottom: 60px;\n}\n.product-container__image[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  text-align: left;\n}\n.product-container__details[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 16px;\n}\n.product-container__details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 1.25;\n  margin-bottom: 6px;\n}\n.product-container__details[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.product-container__details[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.product-container__details[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  margin-right: 2px;\n  font-size: 1rem;\n  color: #aaa;\n  cursor: pointer;\n}\n.product-container__details[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:nth-child(n+1):nth-child(-n+4) {\n  color: #f9d71c;\n}\n.product-container__details[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%]   .review-link[_ngcontent-%COMP%] {\n  color: #525252;\n  font-size: 0.75rem;\n}\n.product-container__details[_ngcontent-%COMP%]   .price-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.product-container__details[_ngcontent-%COMP%]   .price-container[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin-right: 12px;\n}\n.product-container__details[_ngcontent-%COMP%]   .price-container[_ngcontent-%COMP%]   .availability[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  text-transform: uppercase;\n}\n.product-container__details[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 40px;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  height: 46px;\n  margin-left: 12px;\n  border-radius: 50px;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  margin-bottom: 16px;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 0 8px;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:hover {\n  color: #1890ff;\n}\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  -webkit-border: 5px solid #78aaff !important;\n  -moz-border: 5px solid #78aaff !important;\n  border: 5px solid #78aaff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQUNGO0FBQUU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBRUo7QUFBRTtFQUNFLGNBQUE7RUFFQSxhQUFBO0FBQ0o7QUFBSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVOO0FBQUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUVOO0FBRE07RUFDRSxrQkFBQTtBQUdSO0FBRlE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUlWO0FBSFU7RUFDRSxjQUFBO0FBS1o7QUFETTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUdSO0FBQUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUVOO0FBRE07RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBR1I7QUFETTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQUdSO0FBQUk7RUFDRSxtQkFBQTtBQUVOO0FBQ007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQVE7RUFDRSxpQkFBQTtBQUVWO0FBQVE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUVWO0FBQ007RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFBUTtFQUNFLGlCQUFBO0FBRVY7QUFDTTtFQUNFLHlCQUFBO0FBQ1I7QUFBUTtFQUNFLGlCQUFBO0FBRVY7QUFBUTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBRVY7QUFEVTtFQUNFLGNBQUE7QUFHWjtBQUlBO0VBR0UsOEJBQUE7RUFDQSw0Q0FBQTtFQUNBLHlDQUFBO0VBQ0Esb0NBQUE7QUFERiIsImZpbGUiOiJwcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICAmX19pbWFnZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgJl9fZGV0YWlscyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIFxyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4yNTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgfVxyXG4gICAgLnJldmlld3Mge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgIC5yYXRpbmcge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICA+IGkge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICBjb2xvcjogI2FhYTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICY6bnRoLWNoaWxkKG4gKyAxKTpudGgtY2hpbGQoLW4gKyA0KSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjlkNzFjO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAucmV2aWV3LWxpbmsge1xyXG4gICAgICAgIGNvbG9yOiAjNTI1MjUyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByaWNlLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgfVxyXG4gICAgICAuYXZhaWxhYmlsaXR5IHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgIC5jdGEge1xyXG4gICAgICAuYWRkLXRvLWNhcnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgID4gc3BhbiB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgPiBidXR0b24ge1xyXG4gICAgICAgICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuY2F0ZWdvcnkge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICA+IHNwYW4ge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5zb2NpYWwtbGlua3Mge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgPiBzcGFuIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICA+IGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDhweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICMxODkwZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEycHggIWltcG9ydGFudDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDEycHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1ib3JkZXI6IDVweCBzb2xpZCAjNzhhYWZmICFpbXBvcnRhbnQ7XHJcbiAgLW1vei1ib3JkZXI6IDVweCBzb2xpZCAjNzhhYWZmICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAgNXB4IHNvbGlkICM3OGFhZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbi8vICAgLnByb2R1Y3QtY29udGFpbmVyIHtcclxuLy8gICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4vLyAgICAgJl9faW1hZ2Uge1xyXG4vLyAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4vLyAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICB9XHJcbi8vICAgICAmX19kZXRhaWxzIHtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuIl19 */"] });


/***/ }),

/***/ "OuDC":
/*!**********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");










const _c0 = function () { return { "margin-bottom": "16px" }; };
function LoginComponent_nz_alert_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 14);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMessage", ctx_r0.error)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
class LoginComponent {
    constructor(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.email = '';
        this.password = '';
        this.error = '';
        this.loading = false;
    }
    ngOnInit() { }
    onSubmit() {
        this.loading = true;
        this.error = '';
        if (!this.email || !this.password) {
            this.error = 'Make sure to fill everything ;)';
        }
        else {
            this._auth
                .login({ email: this.email, password: this.password })
                .subscribe((res) => {
                this.loading = false;
                this._router.navigate(['/']);
            }, (err) => {
                console.log(err);
                this.error = err.error.message;
                this.loading = false;
            });
        }
    }
    canSubmit() {
        return this.email.length > 0 && this.password.length > 0;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 23, vars: 5, consts: [[1, "login-container"], [1, "form-container"], ["nzShowIcon", "", "nzType", "error", 3, "nzMessage", "ngStyle", 4, "ngIf"], [3, "ngSubmit"], [1, "input-container"], ["for", "email"], ["nz-input", "", "type", "email", "name", "email", "placeholder", "Enter email address", 3, "ngModel", "ngModelChange"], ["for", "password"], ["nz-input", "", "type", "password", "name", "password", "placeholder", "Enter your password", 3, "ngModel", "ngModelChange"], [1, "cta-container"], ["nz-button", "", "type", "submit", 3, "disabled", "nzLoading"], ["routerLink", "/register"], [1, "forgot-password"], ["href", ""], ["nzShowIcon", "", "nzType", "error", 3, "nzMessage", "ngStyle"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign In to Eccom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_nz_alert_4_Template, 1, 3, "nz-alert", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Create a new account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.canSubmit())("nzLoading", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_9__["NzAlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: [".login-container[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n}\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  max-width: 475px;\n  padding: 24px 16px;\n  margin: 0 auto;\n  border-radius: 3px;\n  background-color: #fff;\n}\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > .error-container[_ngcontent-%COMP%] {\n  padding: 12px;\n  margin: 0 0 16px;\n  color: #fff;\n  background-color: #f83333;\n  border-radius: 4px;\n}\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .cta-container[_ngcontent-%COMP%] {\n  margin-top: 36px;\n  margin-bottom: 60px;\n  text-align: center;\n}\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .cta-container[_ngcontent-%COMP%]    > button[type=submit][_ngcontent-%COMP%] {\n  height: 52px;\n  width: 100%;\n  margin-bottom: 12px;\n}\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .cta-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  text-align: center;\n  font-size: 0.85rem;\n}\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #121212;\n}\n@media screen and (min-width: 768px) {\n  .login-container[_ngcontent-%COMP%] {\n    padding: 48px 16px 240px;\n  }\n  .login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n    padding: 36px;\n    border: 1px solid #ccc;\n  }\n}\n.input-container[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.input-container[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  display: inline-block;\n  margin-bottom: 6px;\n}\n.input-container[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFFSjtBQUFJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUVOO0FBQUk7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUVOO0FBQ007RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUFRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUVWO0FBQVE7RUFDRSxnQkFBQTtBQUVWO0FBQ007RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUFRO0VBQ0UsY0FBQTtBQUVWO0FBS0E7RUFDRTtJQUNFLHdCQUFBO0VBRkY7RUFJRTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtFQUZKO0FBQ0Y7QUFNQTtFQUNFLG1CQUFBO0FBSkY7QUFLRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUhKO0FBS0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFISiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDI0cHggMTZweDtcclxuICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA0NzVweDtcclxuICAgIHBhZGRpbmc6IDI0cHggMTZweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgICA+IGgyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgfVxyXG4gICAgPiAuZXJyb3ItY29udGFpbmVyIHtcclxuICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgbWFyZ2luOiAwIDAgMTZweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDUxLCA1MSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuICAgID4gZm9ybSB7XHJcbiAgICAgID4gLmN0YS1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDM2cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgPiBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgID4gZGl2IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5mb3Jnb3QtcGFzc3dvcmQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgICAgID4gYSB7XHJcbiAgICAgICAgICBjb2xvcjogIzEyMTIxMjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiA0OHB4IDE2cHggMjQwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY4O1xyXG4gICAgLmZvcm0tY29udGFpbmVyIHtcclxuICAgICAgcGFkZGluZzogMzZweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dC1jb250YWluZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgPiBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gIH1cclxuICA+IGlucHV0IHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var aframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aframe */ "sEhn");
/* harmony import */ var aframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'client';
    }
    ngOnInit() {
        // Register your custom A-Frame component here
        AFRAME.registerComponent('load-model-on-click', {
            schema: {
                model: { type: 'string' },
                position: { type: 'vec3', default: { x: 0, y: 0, z: 0 } },
                rotation: { type: 'vec3', default: { x: 0, y: 0, z: 0 } }
            },
            init: function () {
                this.el.addEventListener('click', this.onClick.bind(this));
            },
            onClick: function () {
                const modelEntity = document.createElement('a-entity');
                modelEntity.setAttribute('obj-model', this.data.model);
                modelEntity.setAttribute('position', this.data.position);
                modelEntity.setAttribute('rotation', this.data.rotation);
                this.el.appendChild(modelEntity);
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["load-model-on-click", "web-ar-angular-frontend/src/assets/the_crowned_ring.obj"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "a-entity", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", Arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNENBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/token-storage.service */ "Zr0/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");











const _c0 = function () { return { marginBottom: "12px" }; };
function ProfileComponent_nz_alert_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 7);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx_r0.alertType)("nzMessage", ctx_r0.alertMessage)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
} }
function ProfileComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ProfileComponent_div_6_Template_input_valueChange_3_listener($event) { const field_r2 = ctx.$implicit; return field_r2.value = $event; })("ngModelChange", function ProfileComponent_div_6_Template_input_ngModelChange_3_listener($event) { const field_r2 = ctx.$implicit; return field_r2.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](field_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", field_r2.key)("type", field_r2.type)("value", field_r2.value)("ngModel", field_r2.value);
} }
class ProfileComponent {
    constructor(_api, _token, _router) {
        this._api = _api;
        this._token = _token;
        this._router = _router;
        this.user = [
            {
                key: 'fullName',
                label: 'Full name',
                value: '',
                type: 'text',
            },
            {
                key: 'email',
                label: 'Email address',
                value: '',
                type: 'email',
            },
            {
                key: 'password',
                label: 'Password',
                value: '',
                type: 'password',
            },
            {
                key: 'confirmPassword',
                label: 'Confirm password',
                value: '',
                type: 'password',
            },
        ];
        this.userId = null;
        this.alertMessage = '';
        this.alertType = '';
        this.alertVisible = false;
        this.loading = false;
    }
    // Update user fields with current details
    ngOnInit() {
        const { user_id, full_name, email } = this._token.getUser();
        this.userId = user_id;
        this.user[0].value = full_name;
        this.user[1].value = email;
        console.log(this.user);
    }
    canUpdate() {
        return this.user.filter((field) => field.value.length > 0).length !== 4
            ? true
            : false;
    }
    // Submit data to be updated
    onSubmit() {
        this.alertVisible = false;
        if (this.user[2].value !== this.user[3].value) {
            this.alertType = 'error';
            this.alertMessage = 'Passwords do not match';
            this.alertVisible = true;
        }
        else {
            this.loading = true;
            this._api
                .putTypeRequest(`users/${this.userId}`, {
                fullName: this.user[0].value,
                email: this.user[1].value,
                password: this.user[2].value,
            })
                .subscribe((res) => {
                console.log(res);
                this.alertMessage = res.message;
                this.alertType = 'success';
                this.alertVisible = true;
                this.loading = false;
                const oldDetails = this._token.getUser();
                this._token.setUser(Object.assign(Object.assign({}, oldDetails), { full_name: this.user[0].value, email: this.user[1].value }));
                this.user[2].value = '';
                this.user[3].value = '';
                // window.location.reload();
            }, (err) => {
                console.log(err);
                this.alertMessage = err.error.message;
                this.alertVisible = true;
                this.alertType = 'error';
                this.loading = false;
            });
        }
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 10, vars: 4, consts: [[1, "profile-container"], [1, "form-container"], ["nzShowIcon", "", 3, "nzType", "nzMessage", "ngStyle", 4, "ngIf"], [3, "ngSubmit"], ["class", "input-container", 4, "ngFor", "ngForOf"], [1, "cta-container"], ["nz-button", "", "type", "submit", 3, "nzLoading", "disabled"], ["nzShowIcon", "", 3, "nzType", "nzMessage", "ngStyle"], [1, "input-container"], ["for", "field.key"], ["nz-input", "", 3, "name", "type", "value", "ngModel", "valueChange", "ngModelChange"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileComponent_nz_alert_4_Template, 1, 4, "nz-alert", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileComponent_div_6_Template, 4, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Update ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alertVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.loading)("disabled", ctx.canUpdate());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_9__["NzAlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".profile-container[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n}\n.profile-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  max-width: 475px;\n  padding: 24px 16px;\n  margin: 0 auto;\n}\n.profile-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.profile-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.profile-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  display: inline-block;\n  margin-bottom: 6px;\n}\n.profile-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  width: 100%;\n}\n.profile-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.profile-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  height: 52px;\n  width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .profile-container[_ngcontent-%COMP%] {\n    padding: 48px 16px 240px;\n  }\n  .profile-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n    padding: 36px;\n    border: 1px solid #ccc;\n    border-radius: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUVKO0FBREk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBR047QUFBTTtFQUNFLG1CQUFBO0FBRVI7QUFEUTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUdWO0FBRFE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFHVjtBQUFNO0VBQ0UsZ0JBQUE7QUFFUjtBQURRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFHVjtBQUlBO0VBQ0U7SUFDRSx3QkFBQTtFQURGO0VBRUU7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQUFKO0FBQ0YiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMjRweCAxNnB4O1xyXG4gIC5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDQ3NXB4O1xyXG4gICAgcGFkZGluZzogMjRweCAxNnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICA+IGgyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgPiBmb3JtIHtcclxuICAgICAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICA+IGxhYmVsIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgID4gaW5wdXQge1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jdGEtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgICAgID4gYnV0dG9uIHtcclxuICAgICAgICAgIGhlaWdodDogNTJweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAucHJvZmlsZS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNDhweCAxNnB4IDI0MHB4O1xyXG4gICAgLmZvcm0tY29udGFpbmVyIHtcclxuICAgICAgcGFkZGluZzogMzZweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgLy8gICA+IGgyIHtcclxuICAgICAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgLy8gICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/components/login/login.component */ "OuDC");
/* harmony import */ var _auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/components/register/register.component */ "ysMu");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order-history/order-history.component */ "d759");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/product.component */ "LvIC");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./checkout/checkout.component */ "IiZn");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product-card/product-card.component */ "8R/P");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/auth.module */ "Yj9t");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_interceptor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/interceptor.service */ "KRBT");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./guards/auth-guard.service */ "Hs9l");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "z4wI");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/notification */ "bNXi");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/progress */ "W9fG");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _google_model_viewer__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @google/model-viewer */ "PzGh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/core */ "fXoL");






































Object(_angular_common__WEBPACK_IMPORTED_MODULE_21__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_22___default.a);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdefineInjector"]({ providers: [
        _services_interceptor_service__WEBPACK_IMPORTED_MODULE_18__["authInterceptorProviders"],
        _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_19__["AuthGuardService"],
        { provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_20__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_20__["en_US"] },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["IvyCarouselModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_16__["AuthModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_24__["NzButtonModule"],
            ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_25__["NzDropDownModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_26__["NzIconModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__["NzInputModule"],
            ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_28__["NzAlertModule"],
            ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_29__["NzInputNumberModule"],
            swiper_angular__WEBPACK_IMPORTED_MODULE_30__["SwiperModule"],
            ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_31__["NzSpinModule"],
            ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_32__["NzNotificationModule"],
            ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_33__["NzProgressModule"],
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__["NzTableModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"],
        _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_9__["OrderHistoryComponent"],
        _product_product_component__WEBPACK_IMPORTED_MODULE_10__["ProductComponent"],
        _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_11__["CheckoutComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
        _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_15__["ProductCardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["IvyCarouselModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_16__["AuthModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_24__["NzButtonModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_25__["NzDropDownModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_26__["NzIconModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__["NzInputModule"],
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_28__["NzAlertModule"],
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_29__["NzInputNumberModule"],
        swiper_angular__WEBPACK_IMPORTED_MODULE_30__["SwiperModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_31__["NzSpinModule"],
        ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_32__["NzNotificationModule"],
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_33__["NzProgressModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__["NzTableModule"]] }); })();


/***/ }),

/***/ "Zr0/":
/*!***************************************************!*\
  !*** ./src/app/services/token-storage.service.ts ***!
  \***************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TokenStorageService {
    constructor() {
        this.TOKEN_KEY = 'auth-token';
        this.USER_KEY = 'auth-user';
    }
    getToken() {
        return sessionStorage.getItem(this.TOKEN_KEY);
    }
    setToken(token) {
        sessionStorage.removeItem(this.TOKEN_KEY);
        sessionStorage.setItem(this.TOKEN_KEY, token);
    }
    getUser() {
        return JSON.parse(sessionStorage.getItem(this.USER_KEY));
    }
    setUser(user) {
        sessionStorage.removeItem(this.USER_KEY);
        sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }
    clearStorage() {
        sessionStorage.clear();
    }
}
TokenStorageService.ɵfac = function TokenStorageService_Factory(t) { return new (t || TokenStorageService)(); };
TokenStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenStorageService, factory: TokenStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "c14U":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/notification */ "bNXi");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "H+bZ");




class CartService {
    constructor(_notification, _api) {
        this._notification = _notification;
        this._api = _api;
        this.cartData = {
            products: [],
            total: 0,
        };
        this.cartDataObs$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.cartData);
        let localCartData = JSON.parse(localStorage.getItem('cart'));
        if (localCartData)
            this.cartData = localCartData;
        this.cartDataObs$.next(this.cartData);
    }
    submitCheckout(userId, cart) {
        return this._api.postTypeRequest('orders/create', {
            userId: userId,
            cart: cart,
        });
    }
    addProduct(params) {
        const { id, price, quantity, image, title, maxQuantity } = params;
        const product = { id, price, quantity, image, title, maxQuantity };
        if (!this.isProductInCart(id)) {
            if (quantity)
                this.cartData.products.push(product);
            else
                this.cartData.products.push(Object.assign(Object.assign({}, product), { quantity: 1 }));
        }
        else {
            // copy array, find item index and update
            let updatedProducts = [...this.cartData.products];
            let productIndex = updatedProducts.findIndex((prod) => prod.id == id);
            let product = updatedProducts[productIndex];
            // if no quantity, increment
            if (quantity) {
                updatedProducts[productIndex] = Object.assign(Object.assign({}, product), { quantity: quantity });
            }
            else {
                updatedProducts[productIndex] = Object.assign(Object.assign({}, product), { quantity: product.quantity + 1 });
            }
            console.log(updatedProducts);
            this.cartData.products = updatedProducts;
        }
        this.cartData.total = this.getCartTotal();
        this._notification.create('success', 'Product added to cart', `${title} was successfully added to the cart`);
        this.cartDataObs$.next(Object.assign({}, this.cartData));
        localStorage.setItem('cart', JSON.stringify(this.cartData));
    }
    updateCart(id, quantity) {
        // copy array, find item index and update
        let updatedProducts = [...this.cartData.products];
        let productIndex = updatedProducts.findIndex((prod) => prod.id == id);
        updatedProducts[productIndex] = Object.assign(Object.assign({}, updatedProducts[productIndex]), { quantity: quantity });
        this.cartData.products = updatedProducts;
        this.cartData.total = this.getCartTotal();
        this.cartDataObs$.next(Object.assign({}, this.cartData));
        console.log(this.cartData.products);
        localStorage.setItem('cart', JSON.stringify(this.cartData));
    }
    removeProduct(id) {
        let updatedProducts = this.cartData.products.filter((prod) => prod.id !== id);
        this.cartData.products = updatedProducts;
        this.cartData.total = this.getCartTotal();
        this.cartDataObs$.next(Object.assign({}, this.cartData));
        localStorage.setItem('cart', JSON.stringify(this.cartData));
        this._notification.create('success', 'Removed successfully', 'The selected item was removed from the cart successfully');
    }
    clearCart() {
        this.cartData = {
            products: [],
            total: 0,
        };
        this.cartDataObs$.next(Object.assign({}, this.cartData));
        localStorage.setItem('cart', JSON.stringify(this.cartData));
    }
    getCartTotal() {
        let totalSum = 0;
        this.cartData.products.forEach((prod) => (totalSum += prod.price * prod.quantity));
        return totalSum;
    }
    isProductInCart(id) {
        return this.cartData.products.findIndex((prod) => prod.id === id) !== -1;
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_2__["NzNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "c2A7":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "z4wI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function CartComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your cart is empty. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { border: a0 }; };
function CartComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_2_div_4_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const product_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.removeCartItem(product_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-input-number", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CartComponent_div_2_div_4_Template_nz_input_number_ngModelChange_12_listener($event) { const product_r3 = ctx.$implicit; return product_r3.quantity = $event; })("ngModelChange", function CartComponent_div_2_div_4_Template_nz_input_number_ngModelChange_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const product_r3 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.updateCart(product_r3.id, product_r3.quantity); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, i_r4 === ctx_r2.cartData.products.length - 1 && "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 8, product_r3.price, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", product_r3.quantity)("nzMin", product_r3.maxQuantity > 0 ? 1 : 0)("nzMax", product_r3.maxQuantity > 0 ? product_r3.maxQuantity : 0)("nzStep", 1);
} }
function CartComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CartComponent_div_2_div_4_Template, 13, 13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.cartData.products);
} }
class CartComponent {
    constructor(_cart) {
        this._cart = _cart;
        this._cart.cartDataObs$.subscribe((cartData) => {
            this.cartData = cartData;
            console.log(cartData);
        });
    }
    ngOnInit() { }
    updateCart(id, quantity) {
        // console.log({ id, quantity });
        this._cart.updateCart(id, quantity);
    }
    removeCartItem(id) {
        this._cart.removeProduct(id);
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 21, vars: 8, consts: [[1, "cart-container"], ["class", "cart-container__empty", 4, "ngIf"], ["class", "cart-container__list", 4, "ngIf"], [1, "cart-container__total"], [1, "price"], [1, "cta"], ["nz-button", "", "nzType", "primary", "routerLink", "/checkout", 3, "disabled"], ["nz-button", "", "routerLink", "/"], [1, "cart-container__empty"], [1, "cart-container__list"], [1, "list-header"], ["class", "list-item", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "list-item", 3, "ngStyle"], [1, "list-item__remove", 3, "click"], [1, "list-item__image"], ["alt", "", 3, "src"], [1, "list-item__details"], [1, "title"], [3, "ngModel", "nzMin", "nzMax", "nzStep", "ngModelChange"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartComponent_div_2_Template, 5, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Total amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Total items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Checkout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Back to shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartData.products.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartData.products.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 5, ctx.cartData.total, "USD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cartData.products.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.cartData.products.length === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_7__["NzInputNumberComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".cart-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.cart-container__empty[_ngcontent-%COMP%] {\n  margin: 24px 16px 0;\n  padding: 16px 24px;\n  text-align: center;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  font-size: 1rem;\n  font-weight: 500;\n}\n.cart-container__list[_ngcontent-%COMP%] {\n  max-height: 60vh;\n  flex-grow: 1;\n  padding: 16px;\n  overflow-y: auto;\n  border-bottom: 1px solid #ccc;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #ccc;\n  position: relative;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item__remove[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  height: 22px;\n  width: 22px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  position: absolute;\n  right: 8px;\n  top: 8px;\n  z-index: 1;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item__remove[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item__image[_ngcontent-%COMP%] {\n  margin-right: 16px;\n  min-height: 100px;\n  min-width: 100px;\n  max-height: 100px;\n  max-width: 100px;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item__image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item__details[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  position: relative;\n  padding: 22px 0;\n  padding-right: 18px;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item__details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  font-size: 1.125rem;\n  font-weight: 500;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item__details[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  font-size: 1rem;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: -6px;\n}\n.cart-container__total[_ngcontent-%COMP%] {\n  padding: 24px 16px 16px;\n  display: flex;\n  flex-direction: column;\n}\n.cart-container__total[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n}\n.cart-container__total[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n}\n.cart-container__total[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  flex-grow: 1;\n}\n.cart-container__total[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(2)    > h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #787878;\n  font-weight: 400;\n}\n.cart-container__total[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(2)    > h2[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #787878;\n  font-weight: 400;\n}\n.cart-container__total[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.cart-container__total[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 100%;\n  margin-bottom: 12px;\n}\n@media screen and (min-width: 1200px) {\n  .cart-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    max-width: 1024px;\n    margin: 48px auto 0;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n  }\n  .cart-container__empty[_ngcontent-%COMP%] {\n    margin: 0;\n    padding-top: 40px;\n    flex-grow: 1;\n    border: none;\n  }\n  .cart-container__list[_ngcontent-%COMP%] {\n    border: none;\n  }\n  .cart-container__total[_ngcontent-%COMP%] {\n    width: 350px;\n    padding: 0 16px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .cart-container__total[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    padding: 16px 0;\n  }\n  .cart-container__total[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .cart-container__total[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .cart-container__total[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    height: 48px;\n    width: 100%;\n    margin-bottom: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUFFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQUU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQUVKO0FBREk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUdOO0FBRk07RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUlBLFVBQUE7QUFDUjtBQUpRO0VBQ0Usa0JBQUE7QUFNVjtBQUZNO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUlSO0FBSFE7RUFDRSxXQUFBO0FBS1Y7QUFGTTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUlSO0FBSFE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFLVjtBQUhRO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBS1Y7QUFIUTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFLVjtBQUFFO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFFSjtBQURJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFHTjtBQUZNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUlSO0FBSFE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFLVjtBQURRO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUdWO0FBRFE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUdWO0FBQ0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNOO0FBQU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBRVI7QUFJQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7RUFERjtFQUVFO0lBQ0UsU0FBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUFBSjtFQUVFO0lBQ0UsWUFBQTtFQUFKO0VBRUU7SUFDRSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGFBQUE7SUFDQSwyQkFBQTtJQUNBLHVCQUFBO0lBQ0Esc0JBQUE7RUFBSjtFQUNJO0lBQ0UsV0FBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0VBQ047RUFBTTtJQUNFLGtCQUFBO0VBRVI7RUFDSTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUFDTjtFQUFNO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQUVSO0FBQ0YiLCJmaWxlIjoiY2FydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICZfX2VtcHR5IHtcclxuICAgIG1hcmdpbjogMjRweCAxNnB4IDA7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgJl9fbGlzdCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA2MHZoO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgIC5saXN0LWl0ZW0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgJl9fcmVtb3ZlIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICB3aWR0aDogMjJweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogOHB4O1xyXG4gICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgID4gaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIH1cclxuICAgICAgJl9faW1hZ2Uge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgPiBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICZfX2RldGFpbHMge1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMjJweCAwO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJpY2Uge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmN0YSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogLTZweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgJl9fdG90YWwge1xyXG4gICAgcGFkZGluZzogMjRweCAxNnB4IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC5wcmljZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgID4gc3BhbiB7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICA+IGgzIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgPiBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgPiBoMyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICBjb2xvcjogIzc4Nzg3ODtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgID4gaDIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgICAgICAgIGNvbG9yOiAjNzg3ODc4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jdGEge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICA+IGJ1dHRvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5jYXJ0LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG1heC13aWR0aDogMTAyNHB4O1xyXG4gICAgbWFyZ2luOiA0OHB4IGF1dG8gMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAmX19lbXB0eSB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG4gICAgJl9fbGlzdCB7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuICAgICZfX3RvdGFsIHtcclxuICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDA7XHJcbiAgICAgICAgPiBoMyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jdGEge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICA+IGJ1dHRvbiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "d759":
/*!**********************************************************!*\
  !*** ./src/app/order-history/order-history.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryComponent", function() { return OrderHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/product.service */ "Gdn9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");






function OrderHistoryComponent_nz_table_4_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.order_id);
} }
function OrderHistoryComponent_nz_table_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "OrderID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrderHistoryComponent_nz_table_4_tr_11_Template, 7, 3, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx_r0.orders);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r1.data);
} }
class OrderHistoryComponent {
    constructor(_api, _auth, _product) {
        this._api = _api;
        this._auth = _auth;
        this._product = _product;
        this.listOfData = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
            },
        ];
        this.orders = [];
        this.error = '';
        this.user = this._auth.getUser();
    }
    ngOnInit() {
        this._api.getTypeRequest(`orders/?userId=${this.user.user_id}`).subscribe((res) => {
            console.log(res);
            res.data.forEach((item) => {
                this._product
                    .getSingleProduct(item.product_id)
                    .subscribe((product) => {
                    console.log(product);
                    this.orders.push(Object.assign(Object.assign({}, product), item));
                });
            });
            // let uniqueProductsArray = Array.from(
            //   new Set(res.data.map((p) => p.product_id))
            // );
        }, (err) => {
            this.error = err.error.message;
        });
    }
}
OrderHistoryComponent.ɵfac = function OrderHistoryComponent_Factory(t) { return new (t || OrderHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"])); };
OrderHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderHistoryComponent, selectors: [["app-order-history"]], decls: 5, vars: 2, consts: [[1, "order-history-container"], [3, "nzData", 4, "ngIf"], [3, "nzData"], ["basicTable", ""], [4, "ngFor", "ngForOf"]], template: function OrderHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Order History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrderHistoryComponent_nz_table_4_Template, 12, 2, "nz-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.error, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orders.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".order-history-container[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n  max-width: 1024px;\n  margin: 0 auto;\n}\n.order-history-container[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.order-history-container[_ngcontent-%COMP%]   .order-list[_ngcontent-%COMP%]   .order-container[_ngcontent-%COMP%]   .order-image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media screen and (min-width: 1200px) {\n  .order-history-container[_ngcontent-%COMP%] {\n    margin-top: 48px;\n    padding: 24px;\n    border: 1px solid #ccc;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9yZGVyLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQUU7RUFDRSxtQkFBQTtBQUVKO0FBR1E7RUFDRSxXQUFBO0FBRFY7QUFZQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7RUFWRjtBQUNGIiwiZmlsZSI6Im9yZGVyLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXItaGlzdG9yeS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDI0cHggMTZweDtcclxuICBtYXgtd2lkdGg6IDEwMjRweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICA+IGgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1saXN0IHtcclxuICAgIC5vcmRlci1jb250YWluZXIge1xyXG4gICAgICAub3JkZXItaW1hZ2Uge1xyXG4gICAgICAgID4gaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAub3JkZXItdGl0bGUge1xyXG4gICAgICB9XHJcbiAgICAgIC5vcmRlci10b3RhbCB7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5vcmRlci1oaXN0b3J5LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiA0OHB4O1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/token-storage.service */ "Zr0/");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");











function HeaderComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your cart is empty. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "border-bottom": a0 }; };
function HeaderComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_15_div_2_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const product_r4 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.removeProductFromCart(product_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, i_r5 !== ctx_r3.cartData.products.length - 1 && "1px solid #ccc"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r4.quantity, " x ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 5, product_r4.price, "USD"));
} }
const _c1 = function () { return { borderLeft: "none", borderRight: "none", borderBottom: "none" }; };
function HeaderComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_15_div_2_Template, 14, 10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_15_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.toggleDropdown(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " View cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_15_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.toggleDropdown(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Checkout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.cartData.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.cartData.products.length, " Item(s) selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, ctx_r2.cartData.total, "USD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
} }
const _c2 = function () { return { "font-size": "1.25rem", "vertical-align": "middle", "margin-bottom": "5px" }; };
const _c3 = function () { return { fontSize: "24px", "margin-bottom": "5px" }; };
class HeaderComponent {
    constructor(_token, _auth, _cart) {
        this._token = _token;
        this._auth = _auth;
        this._cart = _cart;
        this.isMenuOpen = false;
        this.isMobile = false;
        this.isLoggedIn = false;
        this.dropdownVisible = false;
        this.getScreenSize();
        this._auth.user.subscribe((user) => {
            if (user)
                this.isLoggedIn = true;
            else
                this.isLoggedIn = false;
        });
        this._cart.cartDataObs$.subscribe((cartData) => {
            this.cartData = cartData;
        });
    }
    getScreenSize(event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        if (this.screenWidth > 768)
            this.isMobile = false;
        else
            this.isMobile = true;
    }
    ngOnInit() {
        if (this._token.getUser())
            this.isLoggedIn = true;
        else
            this.isLoggedIn = false;
    }
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
    toggleDropdown() {
        this.dropdownVisible = !this.dropdownVisible;
    }
    removeProductFromCart(id) {
        this._cart.removeProduct(id);
    }
    logout() {
        this._auth.logout();
        this.isMenuOpen = false;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function HeaderComponent_resize_HostBindingHandler($event) { return ctx.getScreenSize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 32, vars: 8, consts: [[1, "header-container", 2, "border-bottom", "0px !important"], [1, "header-container__left"], ["nz-button", "", "nzType", "text", "size", "large", "nzShape", "circle", "nzSize", "large", 2, "vertical-align", "middle", 3, "click"], ["nz-icon", "", "nzType", "menu", 3, "ngStyle"], [1, "header-container__middle"], ["routerLink", "/", 2, "font-family", "'Righteous', cursive", "font-size", "40px"], [1, "header-container__right"], ["nz-button", "", "nz-dropdown", "", "nzType", "text", "nzPlacement", "right", "nzShape", "circle", "nzSize", "large", 2, "vertical-align", "middle"], ["nz-icon", "", "nzType", "shopping-cart", 3, "ngStyle"], ["menu", "nzDropdownMenu"], [1, "cart-dropdown"], ["class", "cart-dropdown__empty", 4, "ngIf"], ["class", "cart-dropdown__content", 4, "ngIf"], [3, "className"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 3, "click"], [1, "side-menu__content"], ["routerLink", "/", 2, "font-family", "'Righteous', cursive", "font-size", "40px", 3, "click"], ["routerLink", "/", 3, "click"], [3, "className", "click"], [1, "cart-dropdown__empty"], [1, "cart-dropdown__content"], [1, "product-list"], ["class", "product-list__item", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "cart-info"], [1, "selected-amount"], [1, "total-price"], [1, "cart-cta"], ["nz-button", "", "nzSize", "large", "routerLink", "/cart", 3, "ngStyle", "click"], ["nz-button", "", "nzType", "primary", "nzSize", "large", "routerLink", "/checkout", 3, "ngStyle", "click"], [1, "product-list__item", 3, "ngStyle"], [1, "product-item"], [1, "product-item__remove", 3, "click"], [1, "product-item__image"], ["alt", "", 3, "src"], [1, "product-item__description"], [1, "product-name"], [1, "product-amount"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Web AR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-dropdown-menu", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderComponent_div_14_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_div_15_Template, 14, 10, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_i_click_17_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_h2_click_19_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Web AR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_23_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Order History ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_31_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartData.products.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartData.products.length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.isMenuOpen ? "side-menu show" : "side-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.isMenuOpen ? "darken-background enable" : "darken-background");
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropdownButtonDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropDownDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropdownMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__["NzWaveDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]], styles: ["@charset \"UTF-8\";\n.header-container[_ngcontent-%COMP%] {\n  height: 60px;\n  padding: 0 16px;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #ccc;\n}\n.header-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header-container__middle[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  text-align: center;\n}\n.header-container__right[_ngcontent-%COMP%] {\n  position: relative;\n}\n.header-container__right[_ngcontent-%COMP%]   .cart-counter[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: red;\n  width: 17px;\n  height: 17px;\n  font-size: 11px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50px;\n  position: absolute;\n  right: 0px;\n  top: 12px;\n  z-index: 2;\n}\n@media screen and (min-width: 768px) {\n  .header-container[_ngcontent-%COMP%] {\n    padding: 0 24px;\n  }\n}\n.cart-dropdown[_ngcontent-%COMP%] {\n  max-width: 280px;\n  min-width: 280px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n}\n.cart-dropdown__empty[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: center;\n  font-weight: 500;\n}\n.cart-dropdown__content[_ngcontent-%COMP%] {\n  padding-top: 12px;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .product-list[_ngcontent-%COMP%] {\n  padding: 0 12px;\n  max-height: 180px;\n  overflow-y: auto;\n  border-bottom: 1px solid #ccc;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .product-list__item[_ngcontent-%COMP%] {\n  padding: 12px 0;\n  margin-bottom: 12px;\n  cursor: default;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .product-list__item[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  align-items: center;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .product-list__item[_ngcontent-%COMP%]   .product-item__remove[_ngcontent-%COMP%] {\n  top: 4px;\n  right: 0px;\n  position: absolute;\n  border: 1px solid #ccc;\n  height: 22px;\n  width: 22px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .product-list__item[_ngcontent-%COMP%]   .product-item__image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 72px;\n  width: 72px;\n  object-fit: contain;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .product-list__item[_ngcontent-%COMP%]   .product-item__description[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  padding-right: 24px;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .product-list__item[_ngcontent-%COMP%]   .product-item__description[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .product-list__item[_ngcontent-%COMP%]   .product-item__description[_ngcontent-%COMP%]   .product-amount[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .cart-info[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .cart-info[_ngcontent-%COMP%]   .selected-amount[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .cart-info[_ngcontent-%COMP%]   .total-price[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 500;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .cart-cta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .cart-cta[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.nav-container[_ngcontent-%COMP%] {\n  padding: 16px;\n  background-color: #eee;\n  border-bottom: 1px solid #ccc;\n}\n.nav-container[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  display: flex;\n}\n.nav-container[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: 16px;\n}\n.side-menu[_ngcontent-%COMP%] {\n  width: 285px;\n  height: 100vh;\n  position: fixed;\n  top: 0px;\n  padding: 56px 0px 24px;\n  transform: translateX(-285px);\n  background-color: #fff;\n  border-right: 1px solid #ccc;\n  transition: all 0.35s ease;\n  z-index: 10002;\n}\n.side-menu[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  top: 24px;\n  right: 24px;\n  position: absolute;\n  font-size: 1.25rem;\n  cursor: pointer;\n}\n.side-menu__content[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n}\n.side-menu__content[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  padding-left: 24px;\n  margin-bottom: 24px;\n  outline: none;\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n.side-menu__content[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%]:hover {\n  transform: translateX(16px);\n}\n.side-menu__content[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  outline: none;\n  padding: 8px 0 8px 24px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.side-menu__content[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover {\n  background-color: #a1a1a1;\n}\n.side-menu__content[_ngcontent-%COMP%]   .\uD83C\uDF51[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.side-menu__content[_ngcontent-%COMP%]   .\uD83C\uDF51[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  height: 44px;\n  width: 236px;\n  flex-grow: 1;\n  border: 1px solid #ccc;\n  background: transparent;\n}\n.ant-btn-circle.ant-btn-lg[_ngcontent-%COMP%]:hover {\n  background-color: #a1a1a1;\n}\n.side-menu.show[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.darken-background[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: transparent;\n  transition: background-color 0.35s ease;\n  z-index: 10001;\n  pointer-events: none;\n}\n.darken-background.enable[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n  pointer-events: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBRUY7QUFERTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUdKO0FBQ0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUdFO0VBQ0Usa0JBQUE7QUFESjtBQUVJO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQU47QUFLQTtFQUNFO0lBQ0UsZUFBQTtFQUZGO0FBQ0Y7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBSkY7QUFLRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSEo7QUFLRTtFQUNFLGlCQUFBO0FBSEo7QUFJSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUFGTjtBQUdNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQURSO0FBRVE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFWO0FBQ1U7RUFDRSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNaO0FBRVk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQWQ7QUFHVTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFEWjtBQUVZO0VBQ0UsbUJBQUE7QUFBZDtBQUdjO0VBQ0UsZ0JBQUE7QUFEaEI7QUFRSTtFQUNFLGFBQUE7QUFOTjtBQU9NO0VBQ0UsbUJBQUE7QUFMUjtBQU9NO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUxSO0FBUUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFOTjtBQU9NO0VBQ0UsV0FBQTtBQUxSO0FBYUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQVZGO0FBWUk7RUFDRSxhQUFBO0FBVk47QUFXTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQVRSO0FBaUJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FBZEY7QUFlRTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFiSjtBQWVFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBYko7QUFjSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBWk47QUFhTTtFQUNFLDJCQUFBO0FBWFI7QUFnQlE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQWRWO0FBZVU7RUFDRSx5QkFBQTtBQWJaO0FBa0JJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFoQk47QUFpQk07RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFmUjtBQXFCQTtFQUNFLHlCQUFBO0FBbEJGO0FBc0JBO0VBQ0Usd0JBQUE7QUFuQkY7QUFzQkE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFuQkY7QUFzQkE7RUFDRSxvQ0FBQTtFQUNBLG9CQUFBO0FBbkJGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5oZWFkZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuLmhlYWRlci1jb250YWluZXIgPiBkaXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlci1jb250YWluZXJfX21pZGRsZSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhlYWRlci1jb250YWluZXJfX3JpZ2h0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWRlci1jb250YWluZXJfX3JpZ2h0IC5jYXJ0LWNvdW50ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB3aWR0aDogMTdweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMTJweDtcbiAgei1pbmRleDogMjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmhlYWRlci1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgfVxufVxuLmNhcnQtZHJvcGRvd24ge1xuICBtYXgtd2lkdGg6IDI4MHB4O1xuICBtaW4td2lkdGg6IDI4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuLmNhcnQtZHJvcGRvd25fX2VtcHR5IHtcbiAgcGFkZGluZzogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNhcnQtZHJvcGRvd25fX2NvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn1cbi5jYXJ0LWRyb3Bkb3duX19jb250ZW50IC5wcm9kdWN0LWxpc3Qge1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIG1heC1oZWlnaHQ6IDE4MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cbi5jYXJ0LWRyb3Bkb3duX19jb250ZW50IC5wcm9kdWN0LWxpc3RfX2l0ZW0ge1xuICBwYWRkaW5nOiAxMnB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5jYXJ0LWRyb3Bkb3duX19jb250ZW50IC5wcm9kdWN0LWxpc3RfX2l0ZW0gLnByb2R1Y3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jYXJ0LWRyb3Bkb3duX19jb250ZW50IC5wcm9kdWN0LWxpc3RfX2l0ZW0gLnByb2R1Y3QtaXRlbV9fcmVtb3ZlIHtcbiAgdG9wOiA0cHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMjJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYXJ0LWRyb3Bkb3duX19jb250ZW50IC5wcm9kdWN0LWxpc3RfX2l0ZW0gLnByb2R1Y3QtaXRlbV9faW1hZ2UgPiBpbWcge1xuICBoZWlnaHQ6IDcycHg7XG4gIHdpZHRoOiA3MnB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLmNhcnQtZHJvcGRvd25fX2NvbnRlbnQgLnByb2R1Y3QtbGlzdF9faXRlbSAucHJvZHVjdC1pdGVtX19kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xufVxuLmNhcnQtZHJvcGRvd25fX2NvbnRlbnQgLnByb2R1Y3QtbGlzdF9faXRlbSAucHJvZHVjdC1pdGVtX19kZXNjcmlwdGlvbiAucHJvZHVjdC1uYW1lIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbn1cbi5jYXJ0LWRyb3Bkb3duX19jb250ZW50IC5wcm9kdWN0LWxpc3RfX2l0ZW0gLnByb2R1Y3QtaXRlbV9fZGVzY3JpcHRpb24gLnByb2R1Y3QtYW1vdW50ID4gc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2FydC1kcm9wZG93bl9fY29udGVudCAuY2FydC1pbmZvIHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5jYXJ0LWRyb3Bkb3duX19jb250ZW50IC5jYXJ0LWluZm8gLnNlbGVjdGVkLWFtb3VudCB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG4uY2FydC1kcm9wZG93bl9fY29udGVudCAuY2FydC1pbmZvIC50b3RhbC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jYXJ0LWRyb3Bkb3duX19jb250ZW50IC5jYXJ0LWN0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uY2FydC1kcm9wZG93bl9fY29udGVudCAuY2FydC1jdGEgPiBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5hdi1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cbi5uYXYtY29udGFpbmVyID4gbmF2ID4gdWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm5hdi1jb250YWluZXIgPiBuYXYgPiB1bCA+IGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5zaWRlLW1lbnUge1xuICB3aWR0aDogMjg1cHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmc6IDU2cHggMHB4IDI0cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjg1cHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZTtcbiAgei1pbmRleDogMTAwMDI7XG59XG4uc2lkZS1tZW51ID4gaSB7XG4gIHRvcDogMjRweDtcbiAgcmlnaHQ6IDI0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2lkZS1tZW51X19jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2lkZS1tZW51X19jb250ZW50ID4gaDIge1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG4uc2lkZS1tZW51X19jb250ZW50ID4gaDI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTZweCk7XG59XG4uc2lkZS1tZW51X19jb250ZW50ID4gbmF2ID4gdWwgPiBsaSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDhweCAwIDhweCAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cbi5zaWRlLW1lbnVfX2NvbnRlbnQgPiBuYXYgPiB1bCA+IGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ExYTFhMTtcbn1cbi5zaWRlLW1lbnVfX2NvbnRlbnQgLvCfjZEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2lkZS1tZW51X19jb250ZW50IC7wn42RID4gYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHdpZHRoOiAyMzZweDtcbiAgZmxleC1ncm93OiAxO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmFudC1idG4tY2lyY2xlLmFudC1idG4tbGc6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTFhMWExO1xufVxuXG4uc2lkZS1tZW51LnNob3cge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi5kYXJrZW4tYmFja2dyb3VuZCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMzVzIGVhc2U7XG4gIHotaW5kZXg6IDEwMDAxO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmRhcmtlbi1iYWNrZ3JvdW5kLmVuYWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59Il19 */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Web AR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "H+bZ");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token-storage.service */ "Zr0/");





class AuthService {
    constructor(_api, _token) {
        this._api = _api;
        this._token = _token;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this._token.getUser());
        this.user = this.userSubject.asObservable();
    }
    getUser() {
        console.log(this.userSubject);
        console.log(this.userSubject.value);
        return this.userSubject.value;
    }
    login(credentials) {
        return this._api
            .postTypeRequest('auth/login', {
            email: credentials.email,
            password: credentials.password,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((res) => {
            let user = {
                email: credentials.email,
                token: res.token,
            };
            this._token.setToken(res.token);
            this._token.setUser(res.data[0]);
            console.log(res);
            this.userSubject.next(user);
            return user;
        }));
    }
    register(user) {
        return this._api.postTypeRequest('auth/register', {
            fullName: user.fullName,
            email: user.email,
            password: user.password,
        });
    }
    logout() {
        this._token.clearStorage();
        this.userSubject.next(null);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout/checkout.component */ "IiZn");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/components/login/login.component */ "OuDC");
/* harmony import */ var _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-history/order-history.component */ "d759");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/product.component */ "LvIC");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/components/register/register.component */ "ysMu");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/auth-guard.service */ "Hs9l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
    },
    { path: 'product/:industry/:_id', component: _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_1__["CartComponent"] },
    {
        path: 'checkout',
        component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_2__["CheckoutComponent"],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
    },
    {
        path: 'order-history',
        component: _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_5__["OrderHistoryComponent"],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ysMu":
/*!****************************************************************!*\
  !*** ./src/app/auth/components/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");











const _c0 = function () { return { "margin-bottom": "16px" }; };
function RegisterComponent_nz_alert_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 21);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMessage", ctx_r0.errorMessage)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
class RegisterComponent {
    constructor(_api, _auth, _router) {
        this._api = _api;
        this._auth = _auth;
        this._router = _router;
        this.fullName = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.errorMessage = '';
        this.loading = false;
    }
    ngOnInit() { }
    onSubmit() {
        this.errorMessage = '';
        if (this.fullName && this.password && this.email && this.confirmPassword) {
            if (this.password !== this.confirmPassword) {
                this.errorMessage = 'Passwords need to match';
            }
            else {
                this.loading = true;
                this._auth
                    .register({
                    fullName: this.fullName,
                    email: this.email,
                    password: this.password,
                })
                    .subscribe((res) => {
                    console.log(res);
                    this.loading = false;
                    this._router.navigate(['/login']);
                }, (err) => {
                    this.errorMessage = err.error.message;
                    this.loading = false;
                });
            }
        }
        else {
            this.errorMessage = 'Make sure to fill everything ;)';
        }
    }
    canSubmit() {
        return this.fullName && this.email && this.password && this.confirmPassword
            ? true
            : false;
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 40, vars: 7, consts: [[1, "register-container"], [1, "form-container"], ["nzShowIcon", "", "nzType", "error", 3, "nzMessage", "ngStyle", 4, "ngIf"], [3, "ngSubmit"], ["registerForm", "ngForm"], [1, "input-container"], ["for", "fullName"], ["nz-input", "", "type", "text", "name", "fullName", "placeholder", "Enter your full name", 3, "ngModel", "ngModelChange"], ["for", "email"], ["nz-input", "", "type", "email", "name", "email", "placeholder", "Enter your email address", 3, "ngModel", "ngModelChange"], [1, "\uD83E\uDD2A"], ["for", "password"], ["nz-input", "", "type", "password", "name", "password", "placeholder", "Enter a strong password", 3, "ngModel", "ngModelChange"], ["for", "confirmPassword"], ["nz-input", "", "type", "password", "name", "confirmPassword", "placeholder", "Repeat your password", 3, "ngModel", "ngModelChange"], [1, "\u2705"], [1, "checkbox-container"], ["nz-input", "", "type", "checkbox"], [1, "cta-container"], ["nz-button", "", "type", "submit", 3, "disabled", "nzLoading"], ["routerLink", "/login"], ["nzShowIcon", "", "nzType", "error", 3, "nzMessage", "ngStyle"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign Up to Eccom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RegisterComponent_nz_alert_4_Template, 1, 3, "nz-alert", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Full name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_10_listener($event) { return ctx.fullName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_14_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_19_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Confirm password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_23_listener($event) { return ctx.confirmPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "I agree to receive instructional and promotional emails");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " I agree to Eccom's Terms of Use & Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Sign up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sign in with an existing user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.canSubmit())("nzLoading", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_10__["NzAlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: ["@charset \"UTF-8\";\n.register-container[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  max-width: 475px;\n  padding: 24px 16px;\n  margin: 0 auto;\n  border-radius: 3px;\n  background-color: #fff;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > .error-container[_ngcontent-%COMP%] {\n  padding: 12px;\n  margin: 0 0 16px;\n  color: #fff;\n  background-color: #f83333;\n  border-radius: 4px;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .\uD83E\uDD2A[_ngcontent-%COMP%] {\n  display: grid;\n  grid-column-gap: 12px;\n  grid-template-columns: 1fr 1fr;\n  margin-bottom: 24px;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .\u2705[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .\u2705[_ngcontent-%COMP%]    > .checkbox-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .\u2705[_ngcontent-%COMP%]    > .checkbox-container[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  width: auto;\n  margin-right: 12px;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .\u2705[_ngcontent-%COMP%]    > .checkbox-container[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .cta-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .cta-container[_ngcontent-%COMP%]    > button[type=submit][_ngcontent-%COMP%] {\n  height: 52px;\n  width: 100%;\n  padding: 0px 30px;\n  margin-bottom: 12px;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .cta-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  text-align: left;\n}\n@media screen and (min-width: 768px) {\n  .register-container[_ngcontent-%COMP%] {\n    padding: 48px 16px 240px;\n  }\n  .register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n    padding: 36px;\n    border: 1px solid #ccc;\n  }\n}\n.input-container[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.input-container[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  display: inline-block;\n  margin-bottom: 6px;\n}\n.input-container[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0Usa0JBQUE7QUFFRjtBQURFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBR0o7QUFGSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFJTjtBQUZJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFJTjtBQURNO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUdSO0FBRE07RUFDRSxtQkFBQTtBQUdSO0FBRlE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUlWO0FBSFU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFLWjtBQUhVO0VBQ0Usa0JBQUE7QUFLWjtBQURNO0VBQ0Usa0JBQUE7QUFHUjtBQUZRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBSVY7QUFGUTtFQUNFLGdCQUFBO0FBSVY7QUFHQTtFQUNFO0lBQ0Usd0JBQUE7RUFBRjtFQUVFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0VBQUo7QUFDRjtBQUlBO0VBQ0UsbUJBQUE7QUFGRjtBQUdFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBREo7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQURKIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnJlZ2lzdGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDI0cHggMTZweDtcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA0NzVweDtcbiAgcGFkZGluZzogMjRweCAxNnB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLnJlZ2lzdGVyLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgPiBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLmZvcm0tY29udGFpbmVyID4gLmVycm9yLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIG1hcmdpbjogMCAwIDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjgzMzMzO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ucmVnaXN0ZXItY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiAu8J+kqiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtY29sdW1uLWdhcDogMTJweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLnJlZ2lzdGVyLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgPiBmb3JtID4gLuKchSB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG4ucmVnaXN0ZXItY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiAu4pyFID4gLmNoZWNrYm94LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4ucmVnaXN0ZXItY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiAu4pyFID4gLmNoZWNrYm94LWNvbnRhaW5lciA+IGlucHV0IHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLmZvcm0tY29udGFpbmVyID4gZm9ybSA+IC7inIUgPiAuY2hlY2tib3gtY29udGFpbmVyID4gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLmZvcm0tY29udGFpbmVyID4gZm9ybSA+IC5jdGEtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJlZ2lzdGVyLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgPiBmb3JtID4gLmN0YS1jb250YWluZXIgPiBidXR0b25bdHlwZT1zdWJtaXRdIHtcbiAgaGVpZ2h0OiA1MnB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4ucmVnaXN0ZXItY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiAuY3RhLWNvbnRhaW5lciA+IGRpdiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5yZWdpc3Rlci1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDQ4cHggMTZweCAyNDBweDtcbiAgfVxuICAucmVnaXN0ZXItY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMzZweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB9XG59XG4uaW5wdXQtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5pbnB1dC1jb250YWluZXIgPiBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuLmlucHV0LWNvbnRhaW5lciA+IGlucHV0IHtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map