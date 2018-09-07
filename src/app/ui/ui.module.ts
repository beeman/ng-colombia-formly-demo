import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UiFormModule } from './form/ui-form.module'

import { ButtonsComponent } from './components/buttons/buttons.component'
import { CardComponent } from './components/card/card.component'
import { FormComponent } from './components/form/form.component'
import { FormCardComponent } from './components/form-card/form-card.component'
import { PageComponent } from './components/page/page.component'

const modules = [
  CommonModule,
  UiFormModule
]

const components = [
  ButtonsComponent,
  CardComponent,
  FormComponent,
  FormCardComponent,
  PageComponent,
]

@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...modules,
    ...components
  ],
  declarations: [
    ...components,
    FormComponent
  ]
})
export class UiModule {}
