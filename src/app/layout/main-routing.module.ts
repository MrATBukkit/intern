import { RouterModule, Routes } from '@angular/router';

import { AppMainComponent } from './main.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

import { ChartsRoutes } from '../charts/charts-routing.module';
import { ECommerceRoutes } from '../ecommerce/ecommerce-routing.module';
import { FormsRoutes } from '../forms/forms-routing.module';
import { PagesRoutes } from '../pages/pages-routing.module';
import { PageLayoutsRoutes } from '../page-layouts/page-layouts-routing.module';
import { TablesRoutes } from '../tables/tables-routing.module';
import { UIRoutes } from '../ui/ui-routing.module';

const routes: Routes = [
    {
        path: 'app',
        component: AppMainComponent,
        children: [
            { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            ...ChartsRoutes,
            ...ECommerceRoutes,
            ...FormsRoutes,
            ...PagesRoutes,
            ...PageLayoutsRoutes,
            ...TablesRoutes,
            ...UIRoutes,
        ]
    }
];

export const MainRoutingModule = RouterModule.forChild(routes);

