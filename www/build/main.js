webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingService; });
var SettingService = (function () {
    function SettingService() {
        this.altBackground = false;
    }
    SettingService.prototype.setBackground = function (isAlt) {
        this.altBackground = isAlt;
    };
    SettingService.prototype.isAltBackground = function () {
        return this.altBackground;
    };
    return SettingService;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favourites_favourites__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_library__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPage = (function () {
    function TabsPage() {
        this.favouritesPage = __WEBPACK_IMPORTED_MODULE_1__favourites_favourites__["a" /* FavouritesPage */];
        this.libraryPage = __WEBPACK_IMPORTED_MODULE_2__library_library__["a" /* LibraryPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',
            template: '<ion-tabs><ion-tab [root]="favouritesPage" tabTitle="Favourites" tabIcon="star"></ion-tab><ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab></ion-tabs>'
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_quotes__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quote_quote__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FavouritesPage = (function () {
    function FavouritesPage(quotesService, modalCtrl, settingsService) {
        this.quotesService = quotesService;
        this.modalCtrl = modalCtrl;
        this.settingsService = settingsService;
    }
    FavouritesPage.prototype.ionViewWillEnter = function () {
        this.quotes = this.quotesService.getFavouriteQuotes();
    };
    FavouritesPage.prototype.onViewQuote = function (quote) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__quote_quote__["a" /* QuotePage */], quote);
        modal.present();
        modal.onDidDismiss(function (remove) {
            if (remove) {
                _this.onRemoveFromFavourites(quote);
            }
        });
    };
    FavouritesPage.prototype.onRemoveFromFavourites = function (quote) {
        this.quotesService.removeQuoteFromFavourites(quote);
        //this.quotes = this.quotesService.getFavouriteQuotes();
        var position = this.quotes.findIndex(function (quoteEl) {
            return quoteEl.id == quote.id;
        });
        this.quotes.splice(position, 1);
    };
    FavouritesPage.prototype.getBackground = function () {
        return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
    };
    FavouritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favourites',template:/*ion-inline-start:"C:\Users\Viraj-Pc\Desktop\ionic\quotes-app\src\pages\favourites\favourites.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Favourite Quotes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n  <ion-item-sliding *ngFor="let quote of quotes" >\n      <ion-item \n      [color]="getBackground()"\n      \n      (click)="onViewQuote(quote)"\n      >\n    <h2>{{ quote.person }}</h2>\n    <p>{{ quote.text }}</p>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="danger" (click)="onRemoveFromFavourites(quote)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n  </ion-item-sliding>\n  \n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Viraj-Pc\Desktop\ionic\quotes-app\src\pages\favourites\favourites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_quotes__["a" /* QuotesService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__services_settings__["a" /* SettingService */]])
    ], FavouritesPage);
    return FavouritesPage;
}());

//# sourceMappingURL=favourites.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuotePage = (function () {
    function QuotePage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    QuotePage.prototype.ionViewDidLoad = function () {
        this.person = this.navParams.get('person');
        this.text = this.navParams.get('text');
    };
    QuotePage.prototype.onClose = function (remove) {
        if (remove === void 0) { remove = false; }
        this.viewCtrl.dismiss(remove);
    };
    QuotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quote',template:/*ion-inline-start:"C:\Users\Viraj-Pc\Desktop\ionic\quotes-app\src\pages\quote\quote.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ person }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding text-center>\n<ion-card>\n  <ion-card-content>\n    {{ text }}\n  </ion-card-content>\n  <ion-row>\n    <ion-col>\n      <button ion-button small outline color="danger" (click) = "onClose(true)">\n        Unfavourite\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-card>\n<button ion-button color="danger" (click)="onClose()">Close</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Viraj-Pc\Desktop\ionic\quotes-app\src\pages\quote\quote.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], QuotePage);
    return QuotePage;
}());

//# sourceMappingURL=quote.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_quotes__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quotes_quotes__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LibraryPage = (function () {
    function LibraryPage() {
        this.quotesPage = __WEBPACK_IMPORTED_MODULE_2__quotes_quotes__["a" /* QuotesPage */];
    }
    LibraryPage.prototype.ngOnInit = function () {
        this.quoteCollection = __WEBPACK_IMPORTED_MODULE_1__data_quotes__["a" /* default */];
    };
    LibraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-library',template:/*ion-inline-start:"C:\Users\Viraj-Pc\Desktop\ionic\quotes-app\src\pages\library\library.html"*/'\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>Quotes library</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h3 text-center>Select your favourite quote</h3>\n<ion-list>\n<button ion-item  *ngFor="let quoteGroup of quoteCollection"\n[navPush] = "quotesPage" \n[navParams] = "quoteGroup"\n>\n <ion-icon [name]="quoteGroup.icon" item-left></ion-icon>\n <h3>{{ quoteGroup.category | uppercase }}</h3>\n <p>{{ quoteGroup.quotes.length }} Quotes</p> \n</button>\n</ion-list>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Viraj-Pc\Desktop\ionic\quotes-app\src\pages\library\library.html"*/,
        })
    ], LibraryPage);
    return LibraryPage;
}());

//# sourceMappingURL=library.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quotes__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuotesPage = (function () {
    function QuotesPage(navParams, alrtCtrl, quotesService) {
        this.navParams = navParams;
        this.alrtCtrl = alrtCtrl;
        this.quotesService = quotesService;
    }
    QuotesPage.prototype.ngOnInit = function () {
        this.quoteGroup = this.navParams.data;
    };
    /*ionViewDidLoad(){
      this.quoteGroup = this.navParams.data;
      //Add elvis operator (?) in template to use this approach
    }*/
    QuotesPage.prototype.onAddToFavourites = function (selectedQuote) {
        var _this = this;
        var alert = this.alrtCtrl.create({
            title: 'Add Quote',
            subTitle: 'Are you sure',
            message: 'Are you sure you want to add the quote?',
            buttons: [
                {
                    text: 'Yes, go ahead',
                    handler: function () {
                        _this.quotesService.addQuoteToFavourites(selectedQuote);
                    }
                },
                {
                    text: 'No, I don\'t',
                    role: 'cancel',
                    handler: function () {
                        console.log('cancelled...');
                    }
                }
            ]
        });
        alert.present();
    };
    QuotesPage.prototype.onRemoveFromFavourites = function (quotes) {
        return this.quotesService.removeQuoteFromFavourites(quotes);
    };
    QuotesPage.prototype.isFavourite = function (quotes) {
        return this.quotesService.isQuoteFavourite(quotes);
    };
    QuotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quotes',template:/*ion-inline-start:"C:\Users\Viraj-Pc\Desktop\ionic\quotes-app\src\pages\quotes\quotes.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ quoteGroup.category | uppercase }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-card *ngFor="let quote of quoteGroup.quotes; let i = index" >\n  <ion-card-header>\n    #{{ i+1 }}\n  </ion-card-header>\n <ion-card-content>\n   <p>{{ quote.text }}</p> \n   <p class="author">{{ quote.person }}</p> \n </ion-card-content>\n <ion-row>\n   <ion-col text-right>\n     <button ion-button\n     clear\n     small\n     (click) = "onAddToFavourites(quote)"\n     *ngIf="!isFavourite(quote)"\n     >Favourite</button>\n     <button ion-button\n     clear\n     color="danger"\n     small\n     (click) = "onRemoveFromFavourites(quote)"\n     *ngIf="isFavourite(quote)"\n     >Unfavourite</button>\n   </ion-col>\n </ion-row>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Viraj-Pc\Desktop\ionic\quotes-app\src\pages\quotes\quotes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__services_quotes__["a" /* QuotesService */]])
    ], QuotesPage);
    return QuotesPage;
}());

//# sourceMappingURL=quotes.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_settings__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = (function () {
    function SettingsPage(settingsService) {
        this.settingsService = settingsService;
    }
    SettingsPage.prototype.onToggle = function (toggle) {
        this.settingsService.setBackground(toggle.checked);
    };
    SettingsPage.prototype.checkAltBackground = function () {
        return this.settingsService.isAltBackground();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Viraj-Pc\Desktop\ionic\quotes-app\src\pages\settings\settings.html"*/'\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-grid>\n  <ion-row>\n    <ion-col><ion-label>Alternavtive Background</ion-label></ion-col>\n    <ion-col>\n      <ion-toggle (ionChange)="onToggle($event)" [checked]="checkAltBackground()"></ion-toggle>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Viraj-Pc\Desktop\ionic\quotes-app\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_settings__["a" /* SettingService */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_favourites_favourites__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_library_library__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_quotes_quotes__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_quote_quote__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_quotes__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_settings__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_favourites_favourites__["a" /* FavouritesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_library_library__["a" /* LibraryPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_quotes_quotes__["a" /* QuotesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_quote_quote__["a" /* QuotePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_favourites_favourites__["a" /* FavouritesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_library_library__["a" /* LibraryPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_quotes_quotes__["a" /* QuotesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_quote_quote__["a" /* QuotePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__services_quotes__["a" /* QuotesService */],
                __WEBPACK_IMPORTED_MODULE_13__services_settings__["a" /* SettingService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.settingsPage = __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.onLoad = function (page) {
        this.nav.setRoot(page);
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Viraj-Pc\Desktop\ionic\quotes-app\src\app\app.html"*/'<ion-menu [content]="nav">\n    <ion-header>\n        <ion-toolbar>\n          <ion-title>\n              Menu\n          </ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button ion-item (click)="onLoad(tabsPage)">\n                <ion-icon name="quote" item-left></ion-icon>\n                Quotes\n            </button>\n            <button ion-item (click)="onLoad(settingsPage)">\n                    <ion-icon name="settings" item-left></ion-icon>\n                    Settings\n                    \n                </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav [root]="tabsPage" #nav></ion-nav>\n'/*ion-inline-end:"C:\Users\Viraj-Pc\Desktop\ionic\quotes-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        category: 'inspirational',
        quotes: [
            {
                id: '1',
                person: 'Theodore Roosevelt',
                text: 'Believe you can and you\'re halfway there'
            },
            {
                id: '2',
                person: 'Norman Vincent Peale',
                text: 'Change your thoughts and you change your world.'
            },
            {
                id: '3',
                person: 'Robert H. Schuller',
                text: 'What great thing would you attempt if you knew you could not fail?'
            }
        ],
        icon: 'brush'
    },
    {
        category: 'ability',
        quotes: [
            {
                id: '4',
                person: 'John Wooden',
                text: 'Ability may get you to the top, but it takes character to keep you there.'
            },
            {
                id: '5',
                person: 'Robert Frost',
                text: 'Education is the ability to listen to almost anything without losing your temper.'
            }
        ],
        icon: 'bicycle'
    },
    {
        category: 'enthusiasm',
        quotes: [
            {
                id: '6',
                person: 'Benjamin Disraeli',
                text: 'Every product of genius must be the product of enthusiasm.'
            },
            {
                id: '7',
                person: 'Norman Vincent Peale',
                text: 'Enthusiasm releases the drive to carry you over obstacles and adds significance to all you do.'
            }
        ],
        icon: 'battery-charging'
    },
    {
        category: 'motivational',
        quotes: [
            {
                id: '8',
                person: 'Jim Rohn',
                text: 'Either you run the day or the day runs you.'
            },
            {
                id: '9',
                person: 'Donna Brazile',
                text: 'I was motivated to be different in part because I was different.'
            }
        ],
        icon: 'body'
    }
]);
//# sourceMappingURL=quotes.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotesService; });
var QuotesService = (function () {
    function QuotesService() {
        this.favouriteQuotes = [];
    }
    QuotesService.prototype.addQuoteToFavourites = function (quote) {
        this.favouriteQuotes.push(quote);
        console.log(this.favouriteQuotes);
    };
    QuotesService.prototype.removeQuoteFromFavourites = function (quote) {
        var position = this.favouriteQuotes.findIndex(function (quoteEl) {
            return quoteEl.id == quote.id;
        });
        this.favouriteQuotes.splice(position, 1);
    };
    QuotesService.prototype.getFavouriteQuotes = function () {
        return this.favouriteQuotes.slice();
    };
    QuotesService.prototype.isQuoteFavourite = function (quote) {
        return this.favouriteQuotes.find(function (quoteEl) {
            return quoteEl.id == quote.id;
        });
    };
    return QuotesService;
}());

//# sourceMappingURL=quotes.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map