import { NgModule } from '@angular/core'

import { AppSharedModule } from '../app-shared.module'
import { AuthRoutingModule } from './auth-routing.module'

import { AuthBaseComponent } from './components/auth-base/auth-base.component'
import { ForgotComponent } from './components/forgot/forgot.component'
import { SigninComponent } from './components/signin/signin.component'
import { SignupComponent } from './components/signup/signup.component'

@NgModule({
  imports: [
    AppSharedModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthBaseComponent,
    ForgotComponent,
    SigninComponent,
    SignupComponent
  ]
})
export class AuthModule {
}
