import {Component,ViewContainerRef,Input} from '@angular/core';
import {AgGridNg2} from 'ag-grid-ng2/main';
import {AgGridCellRendererFactory} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';

@Component({
    selector: 'square-cell',
    template: `{{valueSquared()}}`
})
class SquareComponent {
    @Input() value:number;

    private valueSquared():number {
        return this.value * this.value;
    }
}

@Component({
    selector: 'cube-cell',
    template: `{{valueCubed()}}`
})
class CubeComponent {
    @Input() value:number;

    private valueCubed():number {
        return this.value * this.value * this.value;
    }
}

@Component({
    selector: 'params-cell',
    template: `Field: {{value.colDef.field}}, Value: {{value.value}}`
})
class ParamsComponent {
    @Input() value:{};
}

@Component({
    selector: 'ag-from-component',
    templateUrl: 'app/from-component.component.html',
    directives: [AgGridNg2],
    providers: [AgGridCellRendererFactory]
})
export class FromComponentComponent {

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
                headerName: "Square Component",
                field: "index",
                cellRenderer: this.agGridCellRendererFactory.createCellRendererFromComponent(SquareComponent, (component:SquareComponent, params:any) => {
                    component.value = params.value;
                }),
                width: 200
            },
            {
                headerName: "Cube Component",
                field: "index",
                cellRenderer: this.agGridCellRendererFactory.createCellRendererFromComponent(CubeComponent, (component:CubeComponent, params:any) => {
                    component.value = params.value;
                }),
                width: 200
            },
            {
                headerName: "Name Params Component",
                field: "name",
                cellRenderer: this.agGridCellRendererFactory.createCellRendererFromComponent(ParamsComponent, (component:ParamsComponent, params:any) => {
                    component.value = params;
                }),
                width: 250
            }
        ];
    }
}