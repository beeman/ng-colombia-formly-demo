import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './components/home/home.component'
import { ContactComponent } from './components/contact/contact.component'
import { ContactOldComponent } from './components/contact-old/contact-old.component'
import { ContactNewComponent } from './components/contact-new/contact-new.component'

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'contact',
    component: ContactComponent
  }, {
    path: 'contact-old',
    component: ContactOldComponent
  }, {
    path: 'contact-new',
    component: ContactNewComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule {
}
