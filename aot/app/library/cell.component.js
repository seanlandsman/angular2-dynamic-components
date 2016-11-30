import { Component, Input, ViewContainerRef, ComponentFactoryResolver } from "@angular/core";
export var Cell = (function () {
    function Cell(viewContainerRef, cfr) {
        this.viewContainerRef = viewContainerRef;
        this.cfr = cfr;
    }
    Cell.prototype.ngOnInit = function () {
        var compFactory = this.cfr.resolveComponentFactory(this.componentType);
        this.viewContainerRef.createComponent(compFactory);
    };
    Cell.decorators = [
        { type: Component, args: [{
                    selector: 'grid-cell',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    Cell.ctorParameters = [
        { type: ViewContainerRef, },
        { type: ComponentFactoryResolver, },
    ];
    Cell.propDecorators = {
        'componentType': [{ type: Input },],
    };
    return Cell;
}());
//# sourceMappingURL=cell.component.js.map