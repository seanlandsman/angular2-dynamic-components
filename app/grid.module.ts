import {NgModule, ANALYZE_FOR_ENTRY_COMPONENTS} from "@angular/core";

import {GridComponent} from "./grid.component";

@NgModule({
    declarations: [
        GridComponent
    ],
    exports: [
        GridComponent
    ]
})
export class GridModule {
    static withComponents(components: any[]) {
        return {
            ngModule: GridModule,
            providers: [
                {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true}
            ]
        }
    }
}