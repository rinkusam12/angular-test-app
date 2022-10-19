import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  

  active = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  onSearch(event: Event) {
    console.log((event.target as HTMLInputElement).value)
  }
 

}
