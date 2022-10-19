import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { StatusColor } from 'src/app/input-module/pill/pill.component';
import { Data, Status } from '../../service/mock_data';
import { SubmissionService } from '../../service/submission.service';




export interface Column {
  key: keyof Data
  label: string
  render?:any;
  style?:NgStyle['ngStyle'];

}

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent {

  constructor(public submissionService: SubmissionService) { }

  columns: Column[] = [
    {
      label: "Task",
      key: "task",
    },
    {
      label: "Status",
      key: "status"
    },
    {
      label: "From",
      key: "from"
    },
    {
      label: "To",
      key: "to"
    },
    {
      label: "Custom Address",
      key: "address",
      style: { 'min-width':"380px" }
    },
    {
      label: "Due Date",
      key: "due_date",
    },

  ]


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

  onPageChange(page: number) {
      this.submissionService.currentPage = page;
  }
}
