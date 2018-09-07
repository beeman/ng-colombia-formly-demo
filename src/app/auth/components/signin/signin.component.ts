import { Component } from '@angular/core'
import { AuthService } from '../../services/auth.service'

@Component({
  template: `
    <app-auth-base [title]="title"
                   [fields]="fields"
                   [buttons]="buttons"
                   (action)="auth.handleAuth($event)">
      <button class="btn btn-primary mx-2"
              routerLink="/sign-up">
        SIGN UP
      </button>
      <button class="btn btn-link mx-2 float-right"
              routerLink="/forgot">
        FORGOT PASSWORD?
      </button>
    </app-auth-base>
  `
})
export class SigninComponent {
  public title = 'SIGN IN'
  public fields = [
    AuthService.FieldEmail,
    AuthService.FieldPassword,
  ]
  public buttons = [
    AuthService.ButtonSignIn
  ]

  constructor(public auth: AuthService) {}
}
