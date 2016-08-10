import {Component,ViewContainerRef,Input} from '@angular/core';
import {AgGridNg2} from 'ag-grid-ng2/main';
import {AgGridCellRendererFactory} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';

@Component({
    selector: 'ag-from-template',
    templateUrl: 'app/from-template.component.html',
    directives: [AgGridNg2],
    providers: [AgGridCellRendererFactory]
})
export class FromTemplateComponent {

    private gridOptions:GridOptions;
    private showGrid:boolean;
    private rowData:any[];
    private columnDefs:any[];

    // shouldn't be necessary to inject ViewContainerRef here, but if we don't the child AgGridCellRendererFactory
    // doesn't get it injected either (and an error is thrown)
    constructor(private _viewContainerRef:ViewContainerRef,
                private agGridCellRendererFactory:AgGridCellRendererFactory) {
        // we pass an empty gridOptions in, so we can grab the api out
        this.gridOptions = <GridOptions>{};
        this.createRowData();
        this.createColumnDefs();
        this.showGrid = true;
    }

    private createRowData() {
        var rowData:any[] = [];

        for (var i = 0; i < 15; i++) {
            rowData.push({
                name: "Name " + i,
                index: i,
                years: Math.round(Math.random() * 100),
                proficiency: Math.round(Math.random() * 100)
            });
        }

        this.rowData = rowData;
    }

    private createColumnDefs() {
        this.columnDefs = [
            {headerName: "Name", field: "name", width: 200},
            {
                headerName: "Square Template",
                field: "index",
                cellRenderer: this.agGridCellRendererFactory.createCellRendererFromTemplate('{{params.value * params.value}}'),
                width: 200
            },
            {
                headerName: "Cube Template",
                field: "index",
                cellRenderer: this.agGridCellRendererFactory.createCellRendererFromTemplate('{{params.value * params.value * params.value}}'),
                width: 200
            },
            {
                headerName: "Name Params Template",
                field: "name",
                cellRenderer: this.agGridCellRendererFactory.createCellRendererFromTemplate('Field: {{params.colDef.field}}, Value: {{params.value}}'),
                width: 250
            }
        ];
    }
}