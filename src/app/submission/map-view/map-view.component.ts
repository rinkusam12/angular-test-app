import { Component, OnInit } from '@angular/core';
import { SubmissionService } from '../service/submission.service';
@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent {

  constructor(public submissionService: SubmissionService) { }

  

  center: google.maps.LatLngLiteral = {lat: 34.3, lng: -118.2437};
  zoom = 16;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [
    {
        "lat": 34.290882357625826,
        "lng": -118.24735003987101
    },
    {
        "lat": 34.29951548429649,
        "lng": -118.240505042465
    },
    {
        "lat": 34.2898186666722,
        "lng": -118.23930341282633
    },
    {
        "lat": 34.29719331363139,
        "lng": -118.2506974367216
    },
    {
        "lat": 34.29485335153878,
        "lng": -118.2436378625944
    },
    {
        "lat": 34.309364792557844,
        "lng": -118.24758853382903
    },
    {
        "lat": 34.311473942262324,
        "lng": -118.24057187504607
    },
    {
        "lat": 34.30654660227921,
        "lng": -118.24372615284759
    },
    {
        "lat": 34.303007483014824,
        "lng": -118.23748197026092
    },
    {
        "lat": 34.30242253909485,
        "lng": -118.24966992802459
    },
    {
        "lat": 34.30501044194048,
        "lng": -118.25213756031829
    },
    {
        "lat": 34.292330137924274,
        "lng": -118.25211610264617
    },
    {
        "lat": 34.28657432609664,
        "lng": -118.2523735947116
    },
    {
        "lat": 34.28733666874727,
        "lng": -118.24338283009368
    },
    {
        "lat": 34.288489034043984,
        "lng": -118.233533758591
    },
    {
        "lat": 34.29970456442933,
        "lng": -118.23505725331145
    }
];

  addMarker(event: google.maps.MapMouseEvent) {
    // this.markerPositions.push(event.latLng!.toJSON());
    // console.log(this.markerPositions)
  }
}



// just an interface for type safety.

