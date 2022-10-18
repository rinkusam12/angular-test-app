import { Component, OnInit } from '@angular/core';
import { SubmissionService } from '../service/submission.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {
  options = [
    {
      value: 'map',
      viewValue: 'Map'
    },
    {
      value: 'list',
      viewValue: 'List'
    },
  ]

  // activeValue = 'map';
  constructor(public submissionService: SubmissionService) { }

  ngOnInit(): void {
  }

}
