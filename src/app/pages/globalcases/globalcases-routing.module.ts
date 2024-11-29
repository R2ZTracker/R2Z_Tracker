import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobalcasesPage } from './globalcases.page';

const routes: Routes = [
  {
    path: '',
    component: GlobalcasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlobalcasesPageRoutingModule {}
