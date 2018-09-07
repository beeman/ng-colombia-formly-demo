import { NgModule } from '@angular/core'

import { AppSharedModule } from '../app-shared.module'
import { PageRoutingModule } from './page-routing.module'

import { ContactComponent } from './components/contact/contact.component'
import { HomeComponent } from './components/home/home.component';

import { ContactOldComponent } from './components/contact-old/contact-old.component';
import { ContactNewComponent } from './components/contact-new/contact-new.component';
import { ContactFormlyComponent } from './components/contact-formly/contact-formly.component';
import { ContactFormlyFieldComponent } from './components/contact-formly-field/contact-formly-field.component';
import { ContactFormlyFieldGroupComponent } from './components/contact-formly-field-group/contact-formly-field-group.component'

@NgModule({
  imports: [
    AppSharedModule,
    PageRoutingModule
  ],
  declarations: [
    ContactComponent,
    HomeComponent,
    ContactOldComponent,
    ContactNewComponent,
    ContactFormlyComponent,
    ContactFormlyFieldComponent,
    ContactFormlyFieldGroupComponent,
  ]
})
export class PageModule {
}
