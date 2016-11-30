import {Component, OnInit, Input} from "@angular/core";

@Component({
    selector: 'grid-component',
    template: `
<div class="row">
  <div class="col-lg-12">
    <div class="input-group">
      <span class="input-group-btn">
      <button type="button" class="btn btn-primary" (click)="addDynamicCellComponent()">Add Dynamic Grid component</button>
      </span>
      
      
           <select class="form-control" [(ngModel)]="selectedComponentType">
        <option  *ngFor="let cellComponentType of componentTypes" [ngValue]="cellComponentType">{{cellComponentType.name}}</option>
     </select>
    </div>
  </div>
  </div>
    
    <div class="row" *ngFor="let cellComponentType of cellComponentTypes">
    <div class="col-lg-12">
      <grid-cell [componentType]="cellComponentType"></grid-cell>
      </div>
    </div>
  `
})
export class Grid implements OnInit {
    @Input() componentTypes: any;
    // form-control
    @Input() selectedComponentType: any;

    cellComponentTypes: any[] = [];

    ngOnInit(): void {
        // default to the first available option
        this.selectedComponentType = this.componentTypes ? this.componentTypes[0] : null;
    }

    addDynamicCellComponent() {
        this.cellComponentTypes.push(this.selectedComponentType);
    }
}