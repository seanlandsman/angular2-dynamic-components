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
var red_dynamic_component_1 = require("./red-dynamic.component");
var blue_dynamic_component_1 = require("./blue-dynamic.component");
var green_dynamic_component_1 = require("./green-dynamic.component");
var AppComponent = (function () {
    function AppComponent() {
        this.componentTypes = [blue_dynamic_component_1.BlueDynamicComponent, green_dynamic_component_1.GreenDynamicComponent, red_dynamic_component_1.RedDynamicComponent];
    }
    AppComponent.prototype.ngOnInit = function () {
        // default to the first available option
        this.selectedComponentType = this.componentTypes ? this.componentTypes[0] : null;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], AppComponent.prototype, "componentTypes", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "selectedComponentType", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <div class=\"container-fluid\">\n            <div class=\"page-header\">\n                <h1>Creating AOT Friendly Dynamic Components with Angular 2</h1>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Application Code</div>\n                        <div class=\"panel-body\">\n                            <div class=\"input-group\">\n                                <span class=\"input-group-btn\">\n                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"grid.addDynamicCellComponent(selectedComponentType)\">Add Dynamic Grid component</button>\n                                </span>\n                \n                                <select class=\"form-control\" [(ngModel)]=\"selectedComponentType\">\n                                    <option *ngFor=\"let cellComponentType of componentTypes\" [ngValue]=\"cellComponentType\">{{cellComponentType.name}}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Library Code</div>\n                        <div class=\"panel-body\">\n                            <grid-component #grid></grid-component>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map