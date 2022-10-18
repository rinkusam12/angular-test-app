import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
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
      icon: 'list',
    },
    {
      name: 'Submissions',
      url: '/',
      icon: 'list',
    },
    {
      name: 'History',
      url: '/forms',
      icon: 'list',
    },
    {
      name: 'Reports',
      url: '/forms',
      icon: 'list',
    },
    {
      name: 'Workflow',
      url: '/forms',
      icon: 'list',
    },
  ];

  ngOnInit(): void {}
}
