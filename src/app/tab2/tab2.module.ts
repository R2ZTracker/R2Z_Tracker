import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';


import { Tab2PageRoutingModule } from './tab2-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
     NgxChartsModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
