import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';

import { HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { DataService } from './api/data.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Chart } from 'chart.js';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
          BrowserModule,
          IonicModule.forRoot(),
          AppRoutingModule,
          BrowserAnimationsModule,
          MatExpansionModule,
          HttpClientModule,
          NgxChartsModule,
          FormsModule,
          NgHttpLoaderModule.forRoot(),
          MatDialogModule,
          NgbModule

          ],
  providers: [
        StatusBar,
        SplashScreen,
        HttpClient,
        DataService,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
      ],
  bootstrap: [AppComponent],
})
export class AppModule {}
