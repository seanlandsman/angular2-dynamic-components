import {Component} from "@angular/core";
import {RedDynamicComponent} from "./red-dynamic.component";
import {BlueDynamicComponent} from "./blue-dynamic.component";
import {GreenDynamicComponent} from "./green-dynamic.component";

@Component({
    selector: 'my-app',
    template: `
<div class="panel panel-default">
  <div class="panel-heading">Application Code</div>
</div>
<div class="panel panel-default">
  <div class="panel-heading">Library Code</div>
  <div class="panel-body">
    <grid-component [componentTypes]="getComponentType()"></grid-component>
  </div>
</div>
`,
    styles: [
        `
            div {
                margin: 25px;
            }
        `
    ]
})
export class AppComponent {
    getComponentType(): any {
        return [BlueDynamicComponent, GreenDynamicComponent, RedDynamicComponent];
    }
}
