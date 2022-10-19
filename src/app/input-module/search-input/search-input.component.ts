import { Component } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  

  active = false;

  constructor() { }


  
  onSearch(event: Event) {
    console.log((event.target as HTMLInputElement).value)
  }
 

}
