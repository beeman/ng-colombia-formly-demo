import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  logo = 'assets/logo.png'
  title = 'Formly Demo'
  items = [
    {
      label: 'Reactive',
      url: 'contact-old'
    },
    {
      label: 'Formly',
      url: 'contact-new'
    },
    {
      label: 'Auth',
      url: 'sign-in'
    },
  ]
}
