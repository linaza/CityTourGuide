import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreeToursPage } from './free-tours.page';

const routes: Routes = [
  {
    path: '',
    component: FreeToursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreeToursPageRoutingModule {}
