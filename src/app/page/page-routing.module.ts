import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './components/home/home.component'
import { ContactFormlyComponent } from './components/contact-formly/contact-formly.component'
import { ContactFormlyFieldComponent } from './components/contact-formly-field/contact-formly-field.component'
import { ContactFormlyFieldGroupComponent } from './components/contact-formly-field-group/contact-formly-field-group.component'
import { ContactReactiveComponent } from './components/contact-reactive/contact-reactive.component'

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'contact-formly',
    component: ContactFormlyComponent
  }, {
    path: 'contact-formly-field',
    component: ContactFormlyFieldComponent
  }, {
    path: 'contact-formly-field-group',
    component: ContactFormlyFieldGroupComponent
  }, {
    path: 'contact-reactive',
    component: ContactReactiveComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule {
}
