import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../api/data.service';
import { AlertController } from '@ionic/angular';
import * as L from 'leaflet';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  city: [];
  map: L.Map;
  propertyList: any;
  currentDate: any;


  constructor(private ds: DataService, public alertController: AlertController) {
    setInterval(() => {         
    
      this.currentDate = new Date();
      
     }, 1000);
    }

  ngOnInit(){
    this.city_cases();
  
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'New Cases Today',
      message: 'Confirmed cases: <br><br> Recovered Cases: <br><br> Death Cases: <br><br> Active Cases:',
      buttons: [
         {
          text: 'Close'
        }
      ]
    });

    await alert.present();
  }

  ionViewDidEnter() {

    this.map = new L.Map('map').setView([14.8386,120.2835],14);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
      }).addTo(this.map)

      

      fetch('https://r2zero.000webhostapp.com/brgycovidtracker_api/brgy_cases').then(res => res.json())
      .then(json => {
        this.propertyList = json;
        // console.log(this.propertyList);
        this.leafletMap();
      });
      
    }

      leafletMap() {
        for(const property of this.propertyList.payload) {
          console.log(property);
          
          L.circle([property.brgy_lat, property.brgy_lng], {color: 'Red' ,opacity: 0.5,radius: property.brgy_totalcases*15/4}).addTo(this.map)
          .bindPopup("Barangay: "+property.brgy_name +  
            "<br>Total cases: " + property.brgy_totalcases +
            "<br>Recovered cases: " + property.brgy_recoveredcases +
            "<br>Death cases: " + property.brgy_deathcases +
            "<br>Active cases: " + property.brgy_activecases)
            
        
        }
      }



    ionViewWillLeave() {
      this.map.remove();
    }

    city_cases(){
      this.ds.getdata('city_cases').subscribe((data: any)=> {
        this.city = data.payload
        
        // console.log(this.city);
  
      });
    }
    
  }