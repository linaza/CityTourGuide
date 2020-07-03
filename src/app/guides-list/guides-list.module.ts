import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuidesListPageRoutingModule } from './guides-list-routing.module';

import { GuidesListPage } from './guides-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuidesListPageRoutingModule
  ],
  declarations: [GuidesListPage]
})
export class GuidesListPageModule {}
