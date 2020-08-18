import { Component } from '@angular/core';
import { items } from './items';

@Component({
    selector: 'my-app',
    template: `
        <kendo-menu [items]="items">
        </kendo-menu>
    `
})
export class AppComponent {
    public items: any[] = items;
}
