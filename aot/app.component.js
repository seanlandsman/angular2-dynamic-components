import { Component, Input } from "@angular/core";
import { RedDynamicComponent } from "./red-dynamic.component";
import { BlueDynamicComponent } from "./blue-dynamic.component";
import { GreenDynamicComponent } from "./green-dynamic.component";
export var AppComponent = (function () {
    function AppComponent() {
        this.componentTypes = [BlueDynamicComponent, GreenDynamicComponent, RedDynamicComponent];
    }
    AppComponent.prototype.ngOnInit = function () {
        // default to the first available option
        this.selectedComponentType = this.componentTypes ? this.componentTypes[0] : null;
    };
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-app',
                    template: "\n        <div class=\"container-fluid\">\n            <div class=\"page-header\">\n                <h1>Creating AOT Friendly Dynamic Components with Angular 2</h1>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Application Code</div>\n                        <div class=\"panel-body\">\n                            <div class=\"input-group\">\n                                <span class=\"input-group-btn\">\n                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"grid.addDynamicCellComponent(selectedComponentType)\">Add Dynamic Grid component</button>\n                                </span>\n                \n                                <select class=\"form-control\" [(ngModel)]=\"selectedComponentType\">\n                                    <option *ngFor=\"let cellComponentType of componentTypes\" [ngValue]=\"cellComponentType\">{{cellComponentType.name}}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Library Code</div>\n                        <div class=\"panel-body\">\n                            <grid-component #grid></grid-component>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = [];
    AppComponent.propDecorators = {
        'componentTypes': [{ type: Input },],
        'selectedComponentType': [{ type: Input },],
    };
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map