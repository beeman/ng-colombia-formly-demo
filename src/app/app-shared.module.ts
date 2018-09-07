import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UiModule } from './ui/ui.module'

const modules = [
  CommonModule,
  UiModule,
]

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class AppSharedModule {
}
