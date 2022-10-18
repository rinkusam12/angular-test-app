import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent implements OnInit {
  active = false
  constructor() { }
  
  @Input()
  label: string = 'Select Input';

  ngOnInit(): void {
  }

}
