import { Component, OnInit } from '@angular/core'
import { PageService } from '../../services/page.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact-old',
  templateUrl: './contact-old.component.html'
})
export class ContactOldComponent implements OnInit {
  public form = new FormGroup({})
  public countries: any[]


  constructor(private formBuilder: FormBuilder, private service: PageService) {
  }

  ngOnInit() {
    this.service.getCountriesOptions()
      .subscribe(countries => this.countries = countries)

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      country: ['', Validators.required]
    })
  }

  submit() {
    console.log(this.form.value)
  }


}
