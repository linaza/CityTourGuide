import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-about-city',
  templateUrl: './about-city.page.html',
  styleUrls: ['./about-city.page.scss'],
})
export class AboutCityPage implements OnInit {
    results: any;
  constructor() { }
  ngOnInit() {
    fetch('./assets/input/attractions.json').then(res => res.json()).then(json => {
      console.log('result::', json);
      this.results = json;
    });
  }
}
