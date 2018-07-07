import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';
import 'leaflet.locatecontrol';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map:any;

  constructor() { }

  ngOnInit() {
  	this.map = L.map('map').setView([34.702485, 135.495951], 15);
  	
  	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  	  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  	}).addTo(this.map);

  	L.marker([34.702485, 135.495951]).addTo(this.map);

  	L.control.locate().addTo(this.map);
  }

}
