import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// https://github.com/Leaflet/Leaflet/issues/4968#issuecomment-371184633
// BUG https://github.com/Leaflet/Leaflet/issues/4968
import {icon, Marker} from 'leaflet';
const iconRetinaUrl = 'src/assets/marker-icon-2x.png';
const iconUrl = 'src/assets/marker-icon.png';
const shadowUrl = 'src/assets/marker-shadow.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
Marker.prototype.options.icon = iconDefault;