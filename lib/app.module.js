"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var grid_module_1 = require("./library/grid.module");
var app_component_1 = require("./app.component");
var blue_dynamic_component_1 = require("./blue-dynamic.component");
var green_dynamic_component_1 = require("./green-dynamic.component");
var red_dynamic_component_1 = require("./red-dynamic.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                grid_module_1.GridModule.withComponents([
                    blue_dynamic_component_1.BlueDynamicComponent,
                    green_dynamic_component_1.GreenDynamicComponent,
                    red_dynamic_component_1.RedDynamicComponent])
            ],
            declarations: [
                app_component_1.AppComponent,
                blue_dynamic_component_1.BlueDynamicComponent,
                green_dynamic_component_1.GreenDynamicComponent,
                red_dynamic_component_1.RedDynamicComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map