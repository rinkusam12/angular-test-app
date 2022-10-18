import { Component, Input, OnInit } from '@angular/core';


interface NavLink {
  name: string;
  url: string;
  icon: string;
}


@Component({
  selector: 'app-navigation-link',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.scss']
})
export class NavigationLinkComponent implements OnInit {

  constructor() { }

  
  @Input() link: NavLink = {} as NavLink;  

  ngOnInit(): void {
  }

}
