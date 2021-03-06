import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { UIRoutingModule } from './ui-routing.module';

import { UIComponent } from './ui.component';
import { UIBoxesComponent } from './boxes/boxes.component';
import { UIButtonsComponent } from './buttons/buttons.component';
import { UICallToActionsComponent } from './call-to-actions/call-to-actions.component';
import { UICardsComponent } from './cards/cards.component';
import { UIColorComponent } from './color/color.component';
import { UIComponentsComponent, DialogOverviewExampleDialog, DialogResultExampleDialog } from './components/components.component';
import { UIFeatureCalloutsComponent } from './feature-callouts/feature-callouts.component';
import { UIGridsComponent } from './grids/grids.component';
import { UIHoverComponent } from './hover/hover.component';
import { UIIconBoxesComponent } from './icon-boxes/icon-boxes.component';
import { UIIconsComponent } from './icons/icons.component';
import { UIListsComponent } from './lists/lists.component';
import { UIPricingTablesComponent } from './pricing-tables/pricing-tables.component';
import { UISashesComponent } from './sashes/sashes.component';
import { UITestimonialsComponent } from './testimonials/testimonials.component';
import { UITimelineComponent } from './timeline/timeline.component';
import { UITypographyComponent } from './typography/typography.component';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        FormsModule,
        UIRoutingModule
    ],
    declarations: [
        UIComponent,
        UIBoxesComponent,
        UIButtonsComponent,
        UICallToActionsComponent,
        UICardsComponent,
        UIColorComponent,
        UIComponentsComponent,
        DialogOverviewExampleDialog,
        DialogResultExampleDialog,
        
        UIFeatureCalloutsComponent,
        UIGridsComponent,
        UIHoverComponent,
        UIIconBoxesComponent,
        UIIconsComponent,
        UIListsComponent,
        UIPricingTablesComponent,
        UISashesComponent,
        UITestimonialsComponent,
        UITimelineComponent,
        UITypographyComponent,
    ],
    entryComponents: [
        DialogOverviewExampleDialog,
        DialogResultExampleDialog,
    ]
})

export class UIModule {}
