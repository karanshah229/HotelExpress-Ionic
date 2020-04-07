(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~discover-place-detail-place-detail-module~offers-new-offer-new-offer-module"],{

/***/ "./src/app/places/place.model.ts":
/*!***************************************!*\
  !*** ./src/app/places/place.model.ts ***!
  \***************************************/
/*! exports provided: Place */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Place", function() { return Place; });
var Place = /** @class */ (function () {
    function Place(id, title, description, imageUrl, price, availableFrom, availableTo, userId, location) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = price;
        this.availableFrom = availableFrom;
        this.availableTo = availableTo;
        this.userId = userId;
        this.location = location;
    }
    return Place;
}());



/***/ }),

/***/ "./src/app/places/places.service.ts":
/*!******************************************!*\
  !*** ./src/app/places/places.service.ts ***!
  \******************************************/
/*! exports provided: PlacesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesService", function() { return PlacesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _place_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./place.model */ "./src/app/places/place.model.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PlacesService = /** @class */ (function () {
    function PlacesService(authService, http) {
        this.authService = authService;
        this.http = http;
        this._places = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    Object.defineProperty(PlacesService.prototype, "places", {
        get: function () {
            return this._places.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    PlacesService.prototype.fetchPlaces = function () {
        var _this = this;
        return this.authService.token.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (token) {
            return _this.http.get("https://ionic-pairbnb-bc44b.firebaseio.com/offered-places.json?auth=" + token);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resData) {
            var places = [];
            for (var key in resData) {
                if (resData.hasOwnProperty(key)) {
                    places.push(new _place_model__WEBPACK_IMPORTED_MODULE_4__["Place"](key, resData[key].title, resData[key].description, resData[key].imageUrl, resData[key].price, new Date(resData[key].availableFrom), new Date(resData[key].availableTo), resData[key].userId, resData[key].location));
                }
            }
            return places;
            // return [];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (places) {
            _this._places.next(places);
        }));
    };
    PlacesService.prototype.getPlace = function (id) {
        var _this = this;
        return this.authService.token.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (token) {
            return _this.http.get("https://ionic-pairbnb-bc44b.firebaseio.com/offered-places/" + id + ".json?auth=" + token);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (placeData) {
            return new _place_model__WEBPACK_IMPORTED_MODULE_4__["Place"](id, placeData.title, placeData.description, placeData.imageUrl, placeData.price, new Date(placeData.availableFrom), new Date(placeData.availableTo), placeData.userId, placeData.location);
        }));
    };
    PlacesService.prototype.uploadImage = function (image) {
        var _this = this;
        var uploadData = new FormData();
        uploadData.append('image', image);
        return this.authService.token.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (token) {
            return _this.http.post('https://us-central1-ionic-pairbnb-bc44b.cloudfunctions.net/storeImage', uploadData, { headers: { Authorization: 'Bearer ' + token } });
        }));
    };
    PlacesService.prototype.addPlace = function (title, description, price, dateFrom, dateTo, location, imageUrl) {
        var _this = this;
        var generatedId;
        var fetchedUserId;
        var newPlace;
        return this.authService.userId.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (userId) {
            fetchedUserId = userId;
            return _this.authService.token;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (token) {
            if (!fetchedUserId) {
                throw new Error('No user found!');
            }
            newPlace = new _place_model__WEBPACK_IMPORTED_MODULE_4__["Place"](Math.random().toString(), title, description, imageUrl, price, dateFrom, dateTo, fetchedUserId, location);
            return _this.http.post("https://ionic-pairbnb-bc44b.firebaseio.com/offered-places.json?auth=" + token, __assign({}, newPlace, { id: null }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (resData) {
            generatedId = resData.name;
            return _this.places;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (places) {
            newPlace.id = generatedId;
            _this._places.next(places.concat(newPlace));
        }));
        // return this.places.pipe(
        //   take(1),
        //   delay(1000),
        //   tap(places => {
        //     this._places.next(places.concat(newPlace));
        //   })
        // );
    };
    PlacesService.prototype.updatePlace = function (placeId, title, description) {
        var _this = this;
        var updatedPlaces;
        var fetchedToken;
        return this.authService.token.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (token) {
            fetchedToken = token;
            return _this.places;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (places) {
            if (!places || places.length <= 0) {
                return _this.fetchPlaces();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(places);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (places) {
            var updatedPlaceIndex = places.findIndex(function (pl) { return pl.id === placeId; });
            updatedPlaces = places.slice();
            var oldPlace = updatedPlaces[updatedPlaceIndex];
            updatedPlaces[updatedPlaceIndex] = new _place_model__WEBPACK_IMPORTED_MODULE_4__["Place"](oldPlace.id, title, description, oldPlace.imageUrl, oldPlace.price, oldPlace.availableFrom, oldPlace.availableTo, oldPlace.userId, oldPlace.location);
            return _this.http.put("https://ionic-pairbnb-bc44b.firebaseio.com/offered-places/" + placeId + ".json?auth=" + fetchedToken, __assign({}, updatedPlaces[updatedPlaceIndex], { id: null }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this._places.next(updatedPlaces);
        }));
    };
    PlacesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PlacesService);
    return PlacesService;
}());



/***/ }),

/***/ "./src/app/shared/map-modal/map-modal.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/map-modal/map-modal.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ title }}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onCancel()\">{{ closeButtonText }}</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"map\" #map></div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/shared/map-modal/map-modal.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shared/map-modal/map-modal.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  transition: opacity 150ms ease-in; }\n\n.map.visible {\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21hcC1tb2RhbC9IOlxcQ29kaW5nXFxJb25pY1xcUGFpciBCTkIvc3JjXFxhcHBcXHNoYXJlZFxcbWFwLW1vZGFsXFxtYXAtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFFWCw2QkFBNkI7RUFFN0IsVUFBVTtFQUNWLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tYXAtbW9kYWwvbWFwLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW47XG59XG5cbi5tYXAudmlzaWJsZSB7XG4gIG9wYWNpdHk6IDE7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/map-modal/map-modal.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/map-modal/map-modal.component.ts ***!
  \*********************************************************/
/*! exports provided: MapModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModalComponent", function() { return MapModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapModalComponent = /** @class */ (function () {
    function MapModalComponent(modalCtrl, renderer) {
        this.modalCtrl = modalCtrl;
        this.renderer = renderer;
        this.center = { lat: -34.397, lng: 150.644 };
        this.selectable = true;
        this.closeButtonText = 'Cancel';
        this.title = 'Pick Location';
    }
    MapModalComponent.prototype.ngOnInit = function () { };
    MapModalComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.getGoogleMaps()
            .then(function (googleMaps) {
            _this.googleMaps = googleMaps;
            var mapEl = _this.mapElementRef.nativeElement;
            var map = new googleMaps.Map(mapEl, {
                center: _this.center,
                zoom: 16
            });
            _this.googleMaps.event.addListenerOnce(map, 'idle', function () {
                _this.renderer.addClass(mapEl, 'visible');
            });
            if (_this.selectable) {
                _this.clickListener = map.addListener('click', function (event) {
                    var selectedCoords = {
                        lat: event.latLng.lat(),
                        lng: event.latLng.lng()
                    };
                    _this.modalCtrl.dismiss(selectedCoords);
                });
            }
            else {
                var marker = new googleMaps.Marker({
                    position: _this.center,
                    map: map,
                    title: 'Picked Location'
                });
                marker.setMap(map);
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    MapModalComponent.prototype.onCancel = function () {
        this.modalCtrl.dismiss();
    };
    MapModalComponent.prototype.ngOnDestroy = function () {
        if (this.clickListener) {
            this.googleMaps.event.removeListener(this.clickListener);
        }
    };
    MapModalComponent.prototype.getGoogleMaps = function () {
        var win = window;
        var googleModule = win.google;
        if (googleModule && googleModule.maps) {
            return Promise.resolve(googleModule.maps);
        }
        return new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.src =
                'https://maps.googleapis.com/maps/api/js?key=' +
                    _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].googleMapsAPIKey;
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            script.onload = function () {
                var loadedGoogleModule = win.google;
                if (loadedGoogleModule && loadedGoogleModule.maps) {
                    resolve(loadedGoogleModule.maps);
                }
                else {
                    reject('Google maps SDK not available.');
                }
            };
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('map'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MapModalComponent.prototype, "mapElementRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapModalComponent.prototype, "center", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapModalComponent.prototype, "selectable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapModalComponent.prototype, "closeButtonText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapModalComponent.prototype, "title", void 0);
    MapModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-modal',
            template: __webpack_require__(/*! ./map-modal.component.html */ "./src/app/shared/map-modal/map-modal.component.html"),
            styles: [__webpack_require__(/*! ./map-modal.component.scss */ "./src/app/shared/map-modal/map-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], MapModalComponent);
    return MapModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/pickers/image-picker/image-picker.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/shared/pickers/image-picker/image-picker.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"picker\">\n  <ion-img\n    role=\"button\"\n    class=\"image\"\n    (click)=\"onPickImage()\"\n    [src]=\"selectedImage\"\n    *ngIf=\"selectedImage && showPreview\"\n  ></ion-img>\n  <ion-button color=\"primary\" (click)=\"onPickImage()\" *ngIf=\"!selectedImage || !showPreview\">\n    <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n    <ion-label>Take Picture</ion-label>\n  </ion-button>\n</div>\n<input\n  type=\"file\"\n  accept=\"image/jpeg\"\n  *ngIf=\"usePicker\"\n  #filePicker\n  (change)=\"onFileChosen($event)\"\n/>\n"

/***/ }),

/***/ "./src/app/shared/pickers/image-picker/image-picker.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/shared/pickers/image-picker/image-picker.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".picker {\n  width: 30rem;\n  max-width: 80%;\n  height: 20rem;\n  max-height: 30vh;\n  border: 1px solid var(--ion-color-primary);\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\ninput[type='file'] {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BpY2tlcnMvaW1hZ2UtcGlja2VyL0g6XFxDb2RpbmdcXElvbmljXFxQYWlyIEJOQi9zcmNcXGFwcFxcc2hhcmVkXFxwaWNrZXJzXFxpbWFnZS1waWNrZXJcXGltYWdlLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3BpY2tlcnMvaW1hZ2UtcGlja2VyL2ltYWdlLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waWNrZXIge1xuICB3aWR0aDogMzByZW07XG4gIG1heC13aWR0aDogODAlO1xuICBoZWlnaHQ6IDIwcmVtO1xuICBtYXgtaGVpZ2h0OiAzMHZoO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5pbnB1dFt0eXBlPSdmaWxlJ10ge1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/pickers/image-picker/image-picker.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/pickers/image-picker/image-picker.component.ts ***!
  \***********************************************************************/
/*! exports provided: ImagePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePickerComponent", function() { return ImagePickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImagePickerComponent = /** @class */ (function () {
    function ImagePickerComponent(platform) {
        this.platform = platform;
        this.imagePick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showPreview = false;
        this.usePicker = false;
    }
    ImagePickerComponent.prototype.ngOnInit = function () {
        if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
            this.platform.is('desktop')) {
            this.usePicker = true;
        }
    };
    ImagePickerComponent.prototype.onPickImage = function () {
        var _this = this;
        if (!_capacitor_core__WEBPACK_IMPORTED_MODULE_1__["Capacitor"].isPluginAvailable('Camera')) {
            this.filePickerRef.nativeElement.click();
            return;
        }
        _capacitor_core__WEBPACK_IMPORTED_MODULE_1__["Plugins"].Camera.getPhoto({
            quality: 50,
            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Prompt,
            correctOrientation: true,
            // height: 320,
            width: 300,
            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"].Base64
        })
            .then(function (image) {
            _this.selectedImage = image.base64Data;
            _this.imagePick.emit(image.base64Data);
        })
            .catch(function (error) {
            console.log(error);
            if (_this.usePicker) {
                _this.filePickerRef.nativeElement.click();
            }
            return false;
        });
    };
    ImagePickerComponent.prototype.onFileChosen = function (event) {
        var _this = this;
        var pickedFile = event.target.files[0];
        if (!pickedFile) {
            return;
        }
        var fr = new FileReader();
        fr.onload = function () {
            var dataUrl = fr.result.toString();
            _this.selectedImage = dataUrl;
            _this.imagePick.emit(pickedFile);
        };
        fr.readAsDataURL(pickedFile);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('filePicker'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImagePickerComponent.prototype, "filePickerRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ImagePickerComponent.prototype, "imagePick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImagePickerComponent.prototype, "showPreview", void 0);
    ImagePickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-picker',
            template: __webpack_require__(/*! ./image-picker.component.html */ "./src/app/shared/pickers/image-picker/image-picker.component.html"),
            styles: [__webpack_require__(/*! ./image-picker.component.scss */ "./src/app/shared/pickers/image-picker/image-picker.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], ImagePickerComponent);
    return ImagePickerComponent;
}());



/***/ }),

/***/ "./src/app/shared/pickers/location-picker/location-picker.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/pickers/location-picker/location-picker.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"picker\">\n  <ion-spinner color=\"primary\" *ngIf=\"isLoading\"></ion-spinner>\n  <ion-img\n    role=\"button\"\n    class=\"location-image\"\n    (click)=\"onPickLocation()\"\n    [src]=\"selectedLocationImage\"\n    *ngIf=\"selectedLocationImage && !isLoading && showPreview\"\n  ></ion-img>\n  <ion-button\n    color=\"primary\"\n    (click)=\"onPickLocation()\"\n    *ngIf=\"(!selectedLocationImage || !showPreview) && !isLoading\"\n  >\n    <ion-icon name=\"map\" slot=\"start\"></ion-icon>\n    <ion-label>Select Location</ion-label>\n  </ion-button>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/pickers/location-picker/location-picker.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/pickers/location-picker/location-picker.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".picker {\n  width: 30rem;\n  max-width: 80%;\n  height: 20rem;\n  max-height: 30vh;\n  border: 1px solid var(--ion-color-primary);\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.location-image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BpY2tlcnMvbG9jYXRpb24tcGlja2VyL0g6XFxDb2RpbmdcXElvbmljXFxQYWlyIEJOQi9zcmNcXGFwcFxcc2hhcmVkXFxwaWNrZXJzXFxsb2NhdGlvbi1waWNrZXJcXGxvY2F0aW9uLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcGlja2Vycy9sb2NhdGlvbi1waWNrZXIvbG9jYXRpb24tcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpY2tlciB7XG4gIHdpZHRoOiAzMHJlbTtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIGhlaWdodDogMjByZW07XG4gIG1heC1oZWlnaHQ6IDMwdmg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvY2F0aW9uLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/pickers/location-picker/location-picker.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/pickers/location-picker/location-picker.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LocationPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPickerComponent", function() { return LocationPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../map-modal/map-modal.component */ "./src/app/shared/map-modal/map-modal.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LocationPickerComponent = /** @class */ (function () {
    function LocationPickerComponent(modalCtrl, http, actionSheetCtrl, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.locationPick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showPreview = false;
        this.isLoading = false;
    }
    LocationPickerComponent.prototype.ngOnInit = function () { };
    LocationPickerComponent.prototype.onPickLocation = function () {
        var _this = this;
        this.actionSheetCtrl
            .create({
            header: 'Please Choose',
            buttons: [
                {
                    text: 'Auto-Locate',
                    handler: function () {
                        _this.locateUser();
                    }
                },
                {
                    text: 'Pick on Map',
                    handler: function () {
                        _this.openMap();
                    }
                },
                { text: 'Cancel', role: 'cancel' }
            ]
        })
            .then(function (actionSheetEl) {
            actionSheetEl.present();
        });
    };
    LocationPickerComponent.prototype.locateUser = function () {
        var _this = this;
        if (!_capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Capacitor"].isPluginAvailable('Geolocation')) {
            this.showErrorAlert();
            return;
        }
        this.isLoading = true;
        _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Geolocation.getCurrentPosition()
            .then(function (geoPosition) {
            var coordinates = {
                lat: geoPosition.coords.latitude,
                lng: geoPosition.coords.longitude
            };
            _this.createPlace(coordinates.lat, coordinates.lng);
            _this.isLoading = false;
        })
            .catch(function (err) {
            _this.isLoading = false;
            _this.showErrorAlert();
        });
    };
    LocationPickerComponent.prototype.showErrorAlert = function () {
        this.alertCtrl
            .create({
            header: 'Could not fetch location',
            message: 'Please use the map to pick a location!',
            buttons: ['Okay']
        })
            .then(function (alertEl) { return alertEl.present(); });
    };
    LocationPickerComponent.prototype.openMap = function () {
        var _this = this;
        this.modalCtrl.create({ component: _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_6__["MapModalComponent"] }).then(function (modalEl) {
            modalEl.onDidDismiss().then(function (modalData) {
                if (!modalData.data) {
                    return;
                }
                var coordinates = {
                    lat: modalData.data.lat,
                    lng: modalData.data.lng
                };
                _this.createPlace(coordinates.lat, coordinates.lng);
            });
            modalEl.present();
        });
    };
    LocationPickerComponent.prototype.createPlace = function (lat, lng) {
        var _this = this;
        var pickedLocation = {
            lat: lat,
            lng: lng,
            address: null,
            staticMapImageUrl: null
        };
        this.isLoading = true;
        this.getAddress(lat, lng)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (address) {
            pickedLocation.address = address;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_this.getMapImage(pickedLocation.lat, pickedLocation.lng, 14));
        }))
            .subscribe(function (staticMapImageUrl) {
            pickedLocation.staticMapImageUrl = staticMapImageUrl;
            _this.selectedLocationImage = staticMapImageUrl;
            _this.isLoading = false;
            _this.locationPick.emit(pickedLocation);
        });
    };
    LocationPickerComponent.prototype.getAddress = function (lat, lng) {
        return this.http
            .get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=" + _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].googleMapsAPIKey)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (geoData) {
            if (!geoData || !geoData.results || geoData.results.length === 0) {
                return null;
            }
            return geoData.results[0].formatted_address;
        }));
    };
    LocationPickerComponent.prototype.getMapImage = function (lat, lng, zoom) {
        return "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + lng + "&zoom=" + zoom + "&size=500x300&maptype=roadmap\n    &markers=color:red%7Clabel:Place%7C" + lat + "," + lng + "\n    &key=" + _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].googleMapsAPIKey;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LocationPickerComponent.prototype, "locationPick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LocationPickerComponent.prototype, "showPreview", void 0);
    LocationPickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-location-picker',
            template: __webpack_require__(/*! ./location-picker.component.html */ "./src/app/shared/pickers/location-picker/location-picker.component.html"),
            styles: [__webpack_require__(/*! ./location-picker.component.scss */ "./src/app/shared/pickers/location-picker/location-picker.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], LocationPickerComponent);
    return LocationPickerComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pickers/location-picker/location-picker.component */ "./src/app/shared/pickers/location-picker/location-picker.component.ts");
/* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-modal/map-modal.component */ "./src/app/shared/map-modal/map-modal.component.ts");
/* harmony import */ var _pickers_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pickers/image-picker/image-picker.component */ "./src/app/shared/pickers/image-picker/image-picker.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_3__["LocationPickerComponent"],
                _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_4__["MapModalComponent"],
                _pickers_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_5__["ImagePickerComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]],
            exports: [_pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_3__["LocationPickerComponent"], _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_4__["MapModalComponent"], _pickers_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_5__["ImagePickerComponent"]],
            entryComponents: [_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_4__["MapModalComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~discover-place-detail-place-detail-module~offers-new-offer-new-offer-module.js.map