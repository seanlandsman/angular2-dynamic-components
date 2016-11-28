import {Component, Input, ViewContainerRef, ComponentFactoryResolver} from "@angular/core";

@Component({
    selector: 'grid-component',
    template: `
    <button (click)="addDynamicGridComponent()">Add Dynamic Grid component</button>
    <br/>
  `
})
export class GridComponent {
    @Input() componentType: any;

    constructor(private viewContainerRef: ViewContainerRef,
                private cfr: ComponentFactoryResolver) {
    }

    addDynamicGridComponent() {
        let compFactory = this.cfr.resolveComponentFactory(this.componentType);
        this.viewContainerRef.createComponent(compFactory);
    }
}