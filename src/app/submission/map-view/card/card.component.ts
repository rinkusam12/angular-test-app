import { Component, OnInit, Input } from '@angular/core';
import { StatusColor } from 'src/app/input-module/pill/pill.component';
import { Data, Status } from '../../service/mock_data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  constructor() { }
  
  @Input() item: Data = {
    task: '',
    from: '',
    to: '',
    street: '',
    city: '',
    postal_code: '',
    due_date: '',
    address: ''

  };
  
  ngOnInit(): void {
  }

  getStatus(status: string): StatusColor {
    switch (status as Status) {
      case Status.LowRisk:
        return 'green'
      case Status.Unassigned:
      return 'gray'
      case Status.Uncomplete:
      return 'red'
      default:
        return "gray"
        
    }
  }
}
