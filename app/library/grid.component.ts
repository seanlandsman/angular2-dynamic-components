import {Component, Input} from "@angular/core";

@Component({
    selector: 'grid-component',
    template: `
        <div class="row" *ngFor="let cellComponentType of cellComponentTypes">
            <div class="col-lg-12">
                <grid-cell [componentType]="cellComponentType"></grid-cell>
            </div>
        </div>
    `
})
export class Grid {
    @Input() componentTypes: any;

    cellComponentTypes: any[] = [];

    addDynamicCellComponent(selectedComponentType:any) {
        this.cellComponentTypes.push(selectedComponentType);
    }
}