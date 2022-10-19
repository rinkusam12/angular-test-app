import { Component } from '@angular/core';
import { SubmissionService } from './service/submission.service';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent {

  constructor(public submissionService: SubmissionService) { }


}
