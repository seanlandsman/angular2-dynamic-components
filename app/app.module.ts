import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {GridModule} from "./grid.module";
import {DynamicComponent} from "./dynamic.component";
import {AppComponent} from "./app.component";

@NgModule({
    imports: [
        BrowserModule,
        GridModule.withComponents([DynamicComponent])
    ],
    declarations: [AppComponent, DynamicComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}