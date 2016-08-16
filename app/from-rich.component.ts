import {Component,ViewContainerRef,Input} from '@angular/core';
import {AgGridNg2} from 'ag-grid-ng2/main';
import {AgGridCellRendererFactory} from 'ag-grid-ng2/main';
import {AgGridAware} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';
import {RatioComponent} from "./ratio.component";
import {ClickableComponent} from "./clickable.component";

// both this and the parent component could be folded into one component as they're both simple, but it illustrates how
// a fuller example could work
@Component({
    selector: 'ratio-cell',
    template: `
    <ag-ratio style="height:20px" [topRatio]="params?.value?.top" [bottomRatio]="params?.value?.bottom">
    </ag-ratio>
    `,
    styles:[`
        ag-ratio {
          display: block;
          overflow:hidden;
          border:1px solid #ccc;
          border-radius:6px;
          background: #fff;
        }
    `],
    directives: [RatioComponent]
})
class RatioParentComponent implements AgGridAware {
    private params:any;

    setGridParameters(params:any):void {
        this.params = params;
    }
}

// both this and the parent component could be folded into one component as they're both simple, but it illustrates how
// a fuller example could work
@Component({
    selector: 'clickable-cell',
    template: `
    <ag-clickable (onClicked)="clicked($event)" [cell]="cell"></ag-clickable>
    `,
    directives: [ClickableComponent]
})
class ClickableParentComponent implements AgGridAware {
    private params:any;
    private cell:any;

    setGridParameters(params:any):void {
        this.params = params;
        this.cell = {row: params.value, col: params.colDef.headerName};
    }

    clicked(cell:any) : void {
        console.log("Child Cell Clicked: " + JSON.stringify(cell));
    }
}

@Component({
    selector: 'ag-from-rich-component',
    templateUrl: 'app/from-rich.component.html',
    directives: [AgGridNg2],
    providers: [AgGridCellRendererFactory]
})
export class FromRichComponent {
    private gridOptions:GridOptions;

    // shouldn't be necessary to inject ViewContainerRef here, but if we don't the child AgGridCellRendererFactory
    // doesn't get it injected either (and an error is thrown)
    constructor(private _viewContainerRef:ViewContainerRef,
                private agGridCellRendererFactory:AgGridCellRendererFactory) {

        this.gridOptions = <GridOptions>{};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
    }

    private createColumnDefs() {
        return [
            {headerName: "Name", field: "name", width: 200},
            {
                headerName: "Ratio Component",
                field: "ratios",
                cellRenderer: this.agGridCellRendererFactory.createCellRendererFromComponent(RatioParentComponent),
                width: 200
            },
            {
                headerName: "Clickable Component",
                field: "name",
                cellRenderer: this.agGridCellRendererFactory.createCellRendererFromComponent(ClickableParentComponent),
                width: 200
            }
        ];
    }

    private createRowData() {
        return [
            {name: 'Homer Simpson', ratios: {top: 0.25, bottom: 0.75}},
            {name: 'Marge Simpson', ratios: {top: 0.67, bottom: 0.39}},
            {name: 'Bart Simpson', ratios: {top: 0.82, bottom: 0.47}},
            {name: 'Lisa Simpson', ratios: {top: 0.39, bottom: 1}}
        ];
    }
}