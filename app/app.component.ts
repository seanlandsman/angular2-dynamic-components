import {Component,ViewContainerRef,Input} from '@angular/core';
import {AgGridNg2} from 'ag-grid-ng2/main';
import {AgGridCellRendererFactory} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';
import {FromComponentComponent} from "./from-component.component";
import {FromTemplateComponent} from "./from-template.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [FromComponentComponent, FromTemplateComponent]
})
export class AppComponent {
}
