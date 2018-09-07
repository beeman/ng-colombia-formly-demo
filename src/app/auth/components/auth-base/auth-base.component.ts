import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Button } from '../../../ui/components/buttons/buttons.component'

@Component({
  selector: 'app-auth-base',
  templateUrl: './auth-base.component.html'
})
export class AuthBaseComponent {
  @Input() public buttons: Button[] = []
  @Input() public form = new FormGroup({})
  @Input() public model = {}
  @Input() public title: string
  @Input() public fields: any[]
  @Output() public action = new EventEmitter()
}
