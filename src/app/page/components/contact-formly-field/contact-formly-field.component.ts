import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig } from '@ngx-formly/core'

import { Field } from '../../../ui/form/helpers'
import { PageService } from '../../services/page.service'

@Component({
  selector: 'app-contact-formly-field',
  templateUrl: './contact-formly-field.component.html',
})
export class ContactFormlyFieldComponent {
  public form = new FormGroup({})

  public fields: FormlyFieldConfig[] = [
    Field.input('name', {
      label: 'Name',
      placeholder: 'Enter your name',
      required: true
    }),
    Field.input('email', {
      type: 'email',
      label: 'Email',
      placeholder: 'Enter your email',
      required: true
    }),
    Field.select('country', {
      label: 'Country',
      placeholder: 'Select your country',
      options: this.service.getCountriesOptions(),
      required: true,
    }, {
      defaultValue: '',
    }),
    Field.textarea('message',  {
      label: 'Message',
      placeholder: 'Enter a message',
      rows: 5,
      required: true
    }),
  ]

  public model = {}

  constructor(private service: PageService) {}

  submit() {
    console.log(this.model)
  }

}
