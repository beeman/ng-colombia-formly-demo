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
              routerLink="/sign-up">
        SIGN UP
      </button>
    </app-auth-base>
  `
})
export class ForgotComponent {
  public title = 'FORGOT PASSWORD'
  public fields = [
    AuthService.FieldEmail,
  ]
  public buttons = [
    AuthService.ButtonReset
  ]

  constructor(public auth: AuthService) {}
}
