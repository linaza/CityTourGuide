import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuideHomePage } from './guide-home.page';

const routes: Routes = [
  {
    path: '',
    component: GuideHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuideHomePageRoutingModule {}
