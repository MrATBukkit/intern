import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';

// Sub modules
import { ChartsModule } from '../charts/charts.module';
import { ECommerceModule } from '../ecommerce/ecommerce.module';
import { PagesModule } from '../pages/pages.module';
import { PageLayoutsModule } from '../page-layouts/page-layouts.module';
import { myFormsModule } from '../forms/forms.module';
import { TablesModule } from '../tables/tables.module';
import { UIModule } from '../ui/ui.module';

@NgModule({
    imports: [
        MainRoutingModule,

        // Sub modules
        ChartsModule,
        ECommerceModule,
        myFormsModule,
        PagesModule,
        PageLayoutsModule,
        TablesModule,
        UIModule,
    ],
    declarations: []
})

export class MainModule {}
