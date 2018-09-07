import { Injectable } from '@angular/core'
import { Field } from '../../ui'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static FieldEmail = Field.email('email', {
    placeholder: 'Email',
    required: true,
  })

  public static FieldPassword = Field.password('password', {
    placeholder: 'Password',
  })

  public static FieldName = Field.input('name', {
    label: 'Name',
    placeholder: 'Name',
    required: true,
  })

  public static ButtonSignUp = {
    type: 'submit',
    class: 'success',
    label: 'SIGN UP',
    action: 'SIGN_UP',
  }

  public static ButtonSignIn = {
    type: 'submit',
    class: 'success',
    label: 'SIGN IN',
    action: 'SIGN_IN',
  }

  public static ButtonReset = {
    type: 'submit',
    class: 'success',
    label: 'RESET',
    action: 'RESET_PASSWORD',
  }

  handleAuth({ type, payload }) {
    console.log({ type, payload })
  }
}
