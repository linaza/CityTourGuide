import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guides-list',
  templateUrl: './guides-list.page.html',
  styleUrls: ['./guides-list.page.scss'],
})
export class GuidesListPage implements OnInit {
    results: any;

  constructor() { }

  ngOnInit() {
    fetch('./assets/input/guidesList.json').then(res => res.json()).then(json => {
      console.log('result::', json);
      this.results = json;
    });
  }

}
