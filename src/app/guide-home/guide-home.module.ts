import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuideHomePageRoutingModule } from './guide-home-routing.module';

import { GuideHomePage } from './guide-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuideHomePageRoutingModule
  ],
  declarations: [GuideHomePage]
})
export class GuideHomePageModule {}
