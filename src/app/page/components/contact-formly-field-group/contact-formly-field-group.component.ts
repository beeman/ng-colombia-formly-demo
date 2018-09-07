import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig } from '@ngx-formly/core'

import { FieldGroup } from '../../../ui/form/helpers'
import { PageService } from '../../services/page.service'

@Component({
  selector: 'app-contact-formly-field-group',
  templateUrl: './contact-formly-field-group.component.html'
})
export class ContactFormlyFieldGroupComponent {
  public form = new FormGroup({})

  public fields: FormlyFieldConfig[] = [
    ...FieldGroup.contact(this.service.getCountriesOptions())
  ]

  public model = {}

  constructor(private service: PageService) {
  }

  submit() {
    console.log(this.model)
  }

}
