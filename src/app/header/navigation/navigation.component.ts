import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor() {}

  links = [
    {
      name: 'Forms',
      url: '/forms',
      icon: 'list',
    },
    {
      name: 'Customers',
      url: '/forms',
      icon: 'group',
    },
    {
      name: 'Submissions',
      url: '/',
      icon: 'graphic_eq',
    },
    {
      name: 'History',
      url: '/forms',
      icon: 'history',
    },
    {
      name: 'Reports',
      url: '/forms',
      icon: 'insert_chart',
    },
    {
      name: 'Workflow',
      url: '/forms',
      icon: 'insert_chart',
    },
  ];

}
