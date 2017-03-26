import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Main
import { AppMainComponent } from './layout/main.component';
import { SlimScrollDirective } from './layout/slim-scroll.directive';
import { PreloaderDirective } from './layout/preloader.directive';
// Header
import { AppHeaderComponent } from './layout/header/header.component';
// Sidenav
import { AppSidenavComponent } from './layout/sidenav/sidenav.component';
import { ToggleOffcanvasNavDirective } from './layout/sidenav/toggle-offcanvas-nav.directive';
import { AutoCloseMobileNavDirective } from './layout/sidenav/auto-close-mobile-nav.directive';
import { AppSidenavMenuComponent } from './layout/sidenav/sidenav-menu/sidenav-menu.component';
import { AccordionNavDirective } from './layout/sidenav/sidenav-menu/accordion-nav.directive';
import { AppendSubmenuIconDirective } from './layout/sidenav/sidenav-menu/append-submenu-icon.directive';
import { HighlightActiveItemsDirective } from './layout/sidenav/sidenav-menu/highlight-active-items.directive';
// Customizer
import { AppCustomizerComponent } from './layout/customizer/customizer.component';
import { ToggleQuickviewDirective } from './layout/customizer/toggle-quickview.directive';
// Footer
import { AppFooterComponent } from './layout/footer/footer.component';
// Search Overaly
import { AppSearchOverlayComponent } from './layout/search-overlay/search-overlay.component';
import { SearchOverlayDirective } from './layout/search-overlay/search-overlay.directive';
import { OpenSearchOverlaylDirective } from './layout/search-overlay/open-search-overlay.directive';

// Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageLoginComponent } from './extra-pages/login/login.component';
import { PageSignUpComponent } from './extra-pages/sign-up/sign-up.component';
import { PageForgotPasswordComponent } from './extra-pages/forgot-password/forgot-password.component';
import { Page404Component } from './extra-pages/404/404.component';
import { Page500Component } from './extra-pages/500/500.component';
import { PageConfirmEmailComponent } from './extra-pages/confirm-email/confirm-email.component';
import { PageLockScreenComponent } from './extra-pages/lock-screen/lock-screen.component';
import { PageMaintenanceComponent } from './extra-pages/maintenance/maintenance.component';
import { PageLayoutFullscreenComponent } from './page-layouts/fullscreen/fullscreen.component';


// Sub modules
import { MainModule } from './layout/main.module';
import { SharedModule } from './shared/shared.module';

// hmr
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        MaterialModule,
        AppRoutingModule,

        // Sub modules
        MainModule,
        SharedModule,
    ],
    declarations: [
        AppComponent,
        // Main
        AppMainComponent,
        SlimScrollDirective,
        PreloaderDirective,
        // Header
        AppHeaderComponent,
        // Sidenav
        AppSidenavComponent,
        ToggleOffcanvasNavDirective,
        AutoCloseMobileNavDirective,
        AppSidenavMenuComponent,
        AccordionNavDirective,
        AppendSubmenuIconDirective,
        HighlightActiveItemsDirective,
        // Customizer
        AppCustomizerComponent,
        ToggleQuickviewDirective,
        // Footer
        AppFooterComponent,
        // Search overlay
        AppSearchOverlayComponent,
        SearchOverlayDirective,
        OpenSearchOverlaylDirective,
        // 
        DashboardComponent,
        // Pages
        PageLoginComponent,
        PageSignUpComponent,
        PageForgotPasswordComponent,
        Page404Component,
        Page500Component,
        PageConfirmEmailComponent,
        PageLockScreenComponent,
        PageMaintenanceComponent,
        PageLayoutFullscreenComponent,
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
    constructor(public appRef: ApplicationRef) {}
    hmrOnInit(store) {
        console.log('HMR store', store);
    }
    hmrOnDestroy(store) {
        let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // remove styles
        removeNgStyles();
    }
    hmrAfterDestroy(store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}
