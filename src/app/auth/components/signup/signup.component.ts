import { Component } from '@angular/core'
import { AuthService } from '../../services/auth.service'

@Component({
  template: `
    <app-auth-base [title]="title"
                   [fields]="fields"
                   [buttons]="buttons"
                   (action)="auth.handleAuth($event)">
      <button class="btn btn-primary mx-2"
              routerLink="/sign-in">
        SIGN IN
      </button>
      <button class="btn btn-link mx-2 float-right"
              routerLink="/forgot">
        FORGOT PASSWORD?
      </button>
    </app-auth-base>
  `,
})
export class SignupComponent {
  public title = 'SIGN UP'
  public fields = [
    AuthService.FieldName,
    AuthService.FieldEmail,
    AuthService.FieldPassword,
  ]
  public buttons = [
    AuthService.ButtonSignUp
  ]

  constructor(public auth: AuthService) {}
}
