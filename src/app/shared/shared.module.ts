import { NgModule } from '@angular/core';

// Import in AppModule
import { EChartsDirective } from './echarts.directive';


@NgModule({
    imports: [],
    declarations: [
        EChartsDirective,
    ],
    exports: [
        EChartsDirective,
    ]
})

export class SharedModule {}
