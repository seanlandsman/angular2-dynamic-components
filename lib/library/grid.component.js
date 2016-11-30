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
var Grid = (function () {
    function Grid() {
        this.cellComponentTypes = [];
    }
    Grid.prototype.addDynamicCellComponent = function (selectedComponentType) {
        this.cellComponentTypes.push(selectedComponentType);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Grid.prototype, "componentTypes", void 0);
    Grid = __decorate([
        core_1.Component({
            selector: 'grid-component',
            template: "\n        <div class=\"row\" *ngFor=\"let cellComponentType of cellComponentTypes\">\n            <div class=\"col-lg-12\">\n                <grid-cell [componentType]=\"cellComponentType\"></grid-cell>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Grid);
    return Grid;
}());
exports.Grid = Grid;
//# sourceMappingURL=grid.component.js.map