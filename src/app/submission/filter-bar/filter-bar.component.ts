import { Component, OnInit } from '@angular/core';
import { SubmissionService } from '../service/submission.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent implements OnInit {
  options = [
    {
      value: 'map',
      viewValue: 'Map',
    },
    {
      value: 'list',
      viewValue: 'List',
    },
  ];

  statusOptions = [
    {
      value: 'Low Risk',
      label: 'Low Risk',
    },
    {
      value: 'Unassigned',
      label: 'Unassigned',
    },
    {
      value: 'Uncomplete',
      label: 'Uncomplete',
    },
  ];

  searchQuery: string = '';

  // activeValue = 'map';
  constructor(public submissionService: SubmissionService) {}

  ngOnInit(): void {}

  onSearch(event: Event) {
    this.submissionService.filter.task = (
      event.target as HTMLInputElement
    ).value;
  }

  fromOptions() {
    return this.submissionService.data.map(c=>{
      return {
        value: c.from,
        label: c.from
      }
    })
  }

  onStatusFilter(value: string) {
    this.submissionService.filter.status = value.trim();
  }

  onFromFilter(value: string) {
    this.submissionService.filter.from = value.trim();
  }
}
