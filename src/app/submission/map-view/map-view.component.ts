import { Component, OnInit } from '@angular/core';
import { SubmissionService } from '../service/submission.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

  constructor(public submissionService: SubmissionService) { }


  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  ngOnInit(): void {
  }


  addMarker(event: google.maps.MapMouseEvent) {
    if(event.latLng) {
      this.markerPositions.push(event.latLng.toJSON());
    }
  }
}
