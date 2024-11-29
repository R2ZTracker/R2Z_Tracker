import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchcasesPage } from './searchcases.page';

const routes: Routes = [
  {
    path: '',
    component: SearchcasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchcasesPageRoutingModule {}
