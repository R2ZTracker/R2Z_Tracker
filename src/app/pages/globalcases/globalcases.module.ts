import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlobalcasesPageRoutingModule } from './globalcases-routing.module';

import { GlobalcasesPage } from './globalcases.page';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobalcasesPageRoutingModule,
    Ng2FilterPipeModule,
    Ng2SearchPipeModule
  ],
  declarations: [GlobalcasesPage]
})
export class GlobalcasesPageModule {}
