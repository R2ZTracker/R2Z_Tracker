import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchcasesPageRoutingModule } from './searchcases-routing.module';

import { SearchcasesPage } from './searchcases.page';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchcasesPageRoutingModule,
    Ng2FilterPipeModule,
    Ng2SearchPipeModule
  ],
  declarations: [SearchcasesPage]
})
export class SearchcasesPageModule {}
