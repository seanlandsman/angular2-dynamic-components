import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { GridModule } from "./library/grid.module";
import { AppComponent } from "./app.component";
import { BlueDynamicComponent } from "./blue-dynamic.component";
import { GreenDynamicComponent } from "./green-dynamic.component";
import { RedDynamicComponent } from "./red-dynamic.component";
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        FormsModule,
                        GridModule.withComponents([
                            BlueDynamicComponent,
                            GreenDynamicComponent,
                            RedDynamicComponent])
                    ],
                    declarations: [
                        AppComponent,
                        BlueDynamicComponent,
                        GreenDynamicComponent,
                        RedDynamicComponent
                    ],
                    bootstrap: [AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map