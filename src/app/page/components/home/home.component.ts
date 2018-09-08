import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public links = [
    {
      link: '/contact-reactive',
      label: 'Reactive Form',
    },
    {
      link: '/contact-formly',
      label: 'Formly Form',
    },
    {
      link: '/contact-formly-field',
      label: 'Formly Form + Field Helper',
    },
    {
      link: '/contact-formly-field-group',
      label: 'Formly Form + Field Group Helper',
    },
    {
      link: '/sign-in',
      label: 'Sign In',
    },
    {
      link: '/sign-up',
      label: 'Sign Up',
    },
    {
      link: '/forgot',
      label: 'Forgot Password',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
