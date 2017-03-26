import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';

import { FormCheckboxComponent } from './checkbox/checkbox.component';
import { FormChipsComponent } from './chips/chips.component';
import { FormInputComponent } from './input/input.component';
import { FormRadioButtonComponent } from './radio-button/radio-button.component';
import { FormSelectComponent } from './select/select.component';
import { FormSlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { FormSliderComponent } from './slider/slider.component';

import { FormElementsComponent } from './elements.component';
import { FormLayoutsComponent } from './layouts/layouts.component';
import { FormValidationComponent } from './validation/validation.component';


@NgModule({
    imports: [
        MaterialModule,
        FormsRoutingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        FormsComponent,
        FormCheckboxComponent,
        FormChipsComponent,
        FormInputComponent,
        FormRadioButtonComponent,
        FormSelectComponent,
        FormSlideToggleComponent,
        FormSliderComponent,
        FormElementsComponent,
        FormLayoutsComponent,
        FormValidationComponent,
    ]
})

export class myFormsModule {}
