import {Component} from "@angular/core";
import {DynamicComponent} from "./dynamic.component";

@Component({
    selector: 'my-app',
    template: `<grid-component [componentType]="getComponentType()"></grid-component>
  `
})
export class AppComponent {
    getComponentType() : any {
        return DynamicComponent;
    }
}
