import { Component, OnInit } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import { Map, tileLayer, marker, icon } from 'leaflet';
import { cordova} from '@ionic-native/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  map: Map<any, any>;
  x: number;
  y: number;
  propertyList = [];
  constructor(private geolocation: Geolocation) {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.x =  resp.coords.latitude;
      this.y = resp.coords.longitude;
     // this.ionViewDidEnter();
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
  ionViewDidEnter() {
    this.map = new Map('mapId').setView([0, 0], 16);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    fetch('./assets/data.json').then(res => res.json())
        .then(json => {
          this.propertyList = json.properties;
          this.leafletMap();
        });
  }

  leafletMap() {
    marker([this.x, this.y]).addTo(this.map)
        .bindPopup('my location')
        .openPopup();
    for (const property of this.propertyList) {
      marker([property.lat, property.long]).addTo(this.map)
          .bindPopup(property.city);
    }
  }
  ionViewWillLeave() {
    this.map.remove();
  }
  ngOnInit() {
  }
}
