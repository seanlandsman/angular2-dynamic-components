import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Grid } from "./grid.component";
import { Cell } from "./cell.component";
export var GridModule = (function () {
    function GridModule() {
    }
    GridModule.withComponents = function (components) {
        return {
            ngModule: GridModule,
            providers: [
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
            ]
        };
    };
    GridModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        FormsModule
                    ],
                    declarations: [
                        Grid,
                        Cell
                    ],
                    exports: [
                        Grid
                    ]
                },] },
    ];
    /** @nocollapse */
    GridModule.ctorParameters = [];
    return GridModule;
}());
//# sourceMappingURL=grid.module.js.map