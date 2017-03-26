import { RouterModule, Routes } from '@angular/router';

import { AppMainComponent } from './layout/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// Pages
import { PageLoginComponent } from './extra-pages/login/login.component';
import { PageSignUpComponent } from './extra-pages/sign-up/sign-up.component';
import { PageForgotPasswordComponent } from './extra-pages/forgot-password/forgot-password.component';
import { Page404Component } from './extra-pages/404/404.component';
import { Page500Component } from './extra-pages/500/500.component';
import { PageConfirmEmailComponent } from './extra-pages/confirm-email/confirm-email.component';
import { PageLockScreenComponent } from './extra-pages/lock-screen/lock-screen.component';
import { PageMaintenanceComponent } from './extra-pages/maintenance/maintenance.component';
// Page Layouts
import { PageLayoutFullscreenComponent } from './page-layouts/fullscreen/fullscreen.component';


const AppRoutes: Routes = [
    { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
    { path: 'app', component: AppMainComponent },
    { path: 'login', component: PageLoginComponent },
    { path: 'sign-up', component: PageSignUpComponent },
    { path: 'forgot-password', component: PageForgotPasswordComponent },
    { path: '404', component: Page404Component },
    { path: '500', component: Page500Component },
    { path: 'confirm-email', component: PageConfirmEmailComponent },
    { path: 'lock-screen', component: PageLockScreenComponent },
    { path: 'maintenance', component: PageMaintenanceComponent },
    { path: 'fullscreen', component: PageLayoutFullscreenComponent },
    { path: '**', redirectTo: '/app/dashboard', pathMatch: 'full' },
];

export const AppRoutingModule = RouterModule.forRoot(AppRoutes, {useHash: true});
