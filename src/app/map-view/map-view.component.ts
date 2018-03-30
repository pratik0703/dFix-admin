import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  constructor() { }
  lat: number = 23.013054;
  lng: number = 72.562515;
  ngOnInit() {
  }

}
