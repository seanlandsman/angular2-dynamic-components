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
var GridComponent = (function () {
    function GridComponent(viewContainerRef, cfr) {
        this.viewContainerRef = viewContainerRef;
        this.cfr = cfr;
    }
    GridComponent.prototype.addDynamicGridComponent = function () {
        var compFactory = this.cfr.resolveComponentFactory(this.componentType);
        this.viewContainerRef.createComponent(compFactory);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GridComponent.prototype, "componentType", void 0);
    GridComponent = __decorate([
        core_1.Component({
            selector: 'grid-component',
            template: "\n    <button (click)=\"addDynamicGridComponent()\">Add Dynamic Grid component</button>\n    <br/>\n  "
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.ComponentFactoryResolver])
    ], GridComponent);
    return GridComponent;
}());
exports.GridComponent = GridComponent;
//# sourceMappingURL=grid.component.js.map