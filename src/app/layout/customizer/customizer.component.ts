import { Component, Input } from '@angular/core';
import { APPCONFIG } from '../../config'

@Component({
    selector: 'my-app-customizer',
    styles: [],
    templateUrl: './customizer.component.html',
})

export class AppCustomizerComponent {
    AppConfig: Object;

    ngOnInit() {
        this.AppConfig = APPCONFIG;
    }
}
