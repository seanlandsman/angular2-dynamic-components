import { Component, Input } from "@angular/core";
export var Grid = (function () {
    function Grid() {
        this.cellComponentTypes = [];
    }
    Grid.prototype.addDynamicCellComponent = function (selectedComponentType) {
        this.cellComponentTypes.push(selectedComponentType);
    };
    Grid.decorators = [
        { type: Component, args: [{
                    selector: 'grid-component',
                    template: "\n        <div class=\"row\" *ngFor=\"let cellComponentType of cellComponentTypes\">\n            <div class=\"col-lg-12\">\n                <grid-cell [componentType]=\"cellComponentType\"></grid-cell>\n            </div>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    Grid.ctorParameters = [];
    Grid.propDecorators = {
        'componentTypes': [{ type: Input },],
    };
    return Grid;
}());
//# sourceMappingURL=grid.component.js.map