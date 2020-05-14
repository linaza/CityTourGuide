import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutCityPageRoutingModule } from './about-city-routing.module';

import { AboutCityPage } from './about-city.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutCityPageRoutingModule
  ],
  declarations: [AboutCityPage]
})
export class AboutCityPageModule {}
