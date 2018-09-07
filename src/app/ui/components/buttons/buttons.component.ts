import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'

export interface Button {
  type: string
  label: string
  class: 'success'|'warning'|'primary'|'secondary'|'danger'
  action: string
}

@Component({
  selector: 'app-buttons',
  template: `
    <ng-container *ngFor="let button of buttons">
      <button [type]="button.type"
              class="btn btn-{{button.class}} mr-2"
              [disabled]="!form.valid"
              (click)="action.emit({ type: button.action, payload: payload })">
        {{button.label}}
      </button>
    </ng-container>
  `,
})
export class ButtonsComponent {
  @Input() public form: FormGroup = new FormGroup({})
  @Input() public buttons: Button[]
  @Input() public payload: any
  @Output() public action = new EventEmitter()
}
