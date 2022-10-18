import { Component, OnInit } from '@angular/core';
import { SubmissionService } from '../service/submission.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

  constructor(public submissionService: SubmissionService) { }

  ngOnInit(): void {
  }

}
