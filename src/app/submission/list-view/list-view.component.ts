import { Component } from '@angular/core';
import { SubmissionService } from '../service/submission.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent {

  constructor(public submissionService: SubmissionService) { }
  
 
}
