import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {
  results: any;
  constructor() { }
  ngOnInit() {
    fetch('./assets/input/CARS.JSON').then(res => res.json()).then(json => {
      console.log('result::', json);
      this.results = json;
    });
  }
}

