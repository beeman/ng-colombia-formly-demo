import { NgModule } from '@angular/core'

import { AppSharedModule } from '../app-shared.module'
import { PageRoutingModule } from './page-routing.module'

import { HomeComponent } from './components/home/home.component'
import { ContactFormlyComponent } from './components/contact-formly/contact-formly.component'
import { ContactFormlyFieldComponent } from './components/contact-formly-field/contact-formly-field.component'
import { ContactFormlyFieldGroupComponent } from './components/contact-formly-field-group/contact-formly-field-group.component'
import { ContactReactiveComponent } from './components/contact-reactive/contact-reactive.component'

@NgModule({
  imports: [
    AppSharedModule,
    PageRoutingModule
  ],
  declarations: [
    HomeComponent,
    ContactReactiveComponent,
    ContactFormlyComponent,
    ContactFormlyFieldComponent,
    ContactFormlyFieldGroupComponent
  ]
})
export class PageModule {
}
