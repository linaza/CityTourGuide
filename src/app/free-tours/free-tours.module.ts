import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreeToursPageRoutingModule } from './free-tours-routing.module';

import { FreeToursPage } from './free-tours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreeToursPageRoutingModule
  ],
  declarations: [FreeToursPage]
})
export class FreeToursPageModule {}
