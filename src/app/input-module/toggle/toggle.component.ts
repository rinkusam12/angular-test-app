import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent {
  @Input() activeValue: string = '';
  @Input() options: Option[] = [];
  @Output() toggleValue: EventEmitter<string> = new EventEmitter();

  constructor() {}

 

  toggleChange(value: string) {
    console.log('value', value);
    this.toggleValue.emit(value);
  }
}
