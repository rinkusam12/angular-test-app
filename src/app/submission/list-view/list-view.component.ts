import { Component, OnInit } from '@angular/core';
import { PillComponent } from 'src/app/input-module/pill/pill.component';
import { Column } from 'src/app/input-module/table/table.component';
import { SubmissionService } from '../service/submission.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  constructor(public submissionService: SubmissionService) { }
  
  ngOnInit(): void {
  }

}
