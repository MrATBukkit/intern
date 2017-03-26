import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

import { PageAboutComponent } from './about/about.component';
import { PageBlogComponent } from './blog/blog.component';
import { PageCareersComponent } from './careers/careers.component';
import { PageContactComponent } from './contact/contact.component';
import { PageFaqsComponent } from './faqs/faqs.component';
import { PageProfileComponent } from './profile/profile.component';
import { PageServicesComponent } from './services/services.component';
import { PageTermsComponent } from './terms/terms.component';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        PagesRoutingModule
    ],
    declarations: [
        PagesComponent,
        PageAboutComponent,
        PageBlogComponent,
        PageCareersComponent,
        PageContactComponent,
        PageFaqsComponent,
        PageProfileComponent,
        PageServicesComponent,
        PageTermsComponent
    ]
})

export class PagesModule {}
