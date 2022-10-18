import { Component, OnInit } from '@angular/core';
import { SubmissionService } from './service/submission.service';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent implements OnInit {

  constructor(public submissionService: SubmissionService) { }

  ngOnInit(): void {
  }

}
