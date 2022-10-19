import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';


interface Option {
  value: string, label: string
}

@Component({
  selector: 'app-search-select',
  templateUrl: './search-select.component.html',
  styleUrls: ['./search-select.component.scss']
})
export class SearchSelectComponent implements OnChanges {

  active = false
  constructor() { }
  
  @Input()
  label: string = 'Select Input';

  open = false;


  searchQuery: string = '';

  @Input()
  value = "";

  @Output()
  optionChange = new EventEmitter<string>();

  @Input()
  options: Option[] = []

  option: Option | undefined;


  filteredOptions() {
    return this.searchQuery ? this.options.filter((option) => option.value.toLowerCase().includes(this.searchQuery.toLowerCase())).slice(0, 10) : this.options.slice(0, 10);
  }

  

  ngOnChanges() {
    // console.log(this.value);
    this.option = this.options.find((option) => option.value === this.value)
  }

  onDropdownClick(value: string) {
    this.open = false;
    this.active = !this.active;
    this.optionChange.emit(value);
  }

}
