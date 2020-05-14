import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAcountPage } from './my-acount.page';

const routes: Routes = [
  {
    path: '',
    component: MyAcountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAcountPageRoutingModule {}
