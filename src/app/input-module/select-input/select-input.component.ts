import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';


interface Option {
  value: string, label: string
}
@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent implements OnChanges {
  active = false
  constructor() { }
  
  @Input()
  label: string = 'Select Input';

  open = false;


  @Input()
  value = "";

  @Output()
  optionChange = new EventEmitter<string>();

  @Input()
  options: Option[] = []

  option: Option | undefined;



  ngOnChanges() {
    console.log(this.value);
    this.option = this.options.find((option) => option.value === this.value)
  }

  onDropdownClick(value: string) {
    this.active = !this.active;
    this.optionChange.emit(value);
  }



}
