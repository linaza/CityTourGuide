import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuidesListPage } from './guides-list.page';

const routes: Routes = [
  {
    path: '',
    component: GuidesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuidesListPageRoutingModule {}
