import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig } from '@ngx-formly/core'


import { PageService } from '../../services/page.service'

@Component({
  selector: 'app-contact-formly',
  templateUrl: './contact-formly.component.html'
})
export class ContactFormlyComponent {
  public form = new FormGroup({})

  public fields: FormlyFieldConfig[] = [
    {
      type: 'input',
      key: 'name',
      templateOptions: {
        label: 'Name',
        placeholder: 'Enter your name',
        required: true
      }
    },
    {
      type: 'input',
      key: 'email',
      templateOptions: {
        type: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        required: true
      }
    },
    {
      type: 'select',
      key: 'country',
      templateOptions: {
        label: 'Country',
        placeholder: 'Select your country',
        options: this.service.getCountriesOptions(),
        required: true,
      },
      defaultValue: '',
    },
    {
      type: 'textarea',
      key: 'message',
      templateOptions: {
        label: 'Message',
        placeholder: 'Enter a message',
        rows: 5,
        required: true
      }
    }
  ]

  public model = {}

  constructor(private service: PageService) {}

  submit() {
    console.log(this.model)
  }

}
