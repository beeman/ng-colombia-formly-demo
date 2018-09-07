import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormBuilder } from '@ngx-formly/core'

@Component({
  selector: 'app-form-card',
  template: `
    <div class="card">
      <div class="card-header" *ngIf="title">
        {{title}}
      </div>
      <div class="card-body">
        <app-form [model]="model" [fields]="fields" [form]="form" [options]="options" (onSubmit)="onSubmit.emit($event)">
          <button type="submit" class="btn btn-success" [disabled]="!form.valid">
            Submit
          </button>
        </app-form>
      </div>
    </div>
  `,
})
export class FormCardComponent implements OnInit {
  @Input() public fields: FormlyFieldConfig[]
  @Input() public form: FormGroup
  @Input() public model = {}
  @Input() public options = {}
  @Input() public title = ''
  @Output() public onSubmit = new EventEmitter()

  constructor(private builder: FormlyFormBuilder) {}

  ngOnInit() {
    this.builder.buildForm(
      this.form,
      this.fields,
      this.model,
      this.options
    )
  }

}
