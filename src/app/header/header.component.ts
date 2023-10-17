import { Component, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'app-header',
    styles: [],
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
}
