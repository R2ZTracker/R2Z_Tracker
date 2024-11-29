import { Component} from '@angular/core';
import { DataService } from '../api/data.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  multi: any[];
  currentDate:any;
  city =[];
  brgypercent = [];
  malepercent=[];
  femalepercent=[];
  agepercent=[];
  agepercentdata=[];
  view: any[] = [700, 200];
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = false;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ["#6a040f", "#9d0208","#d00000",'#dc2f02','#e85d04',
            '#f48c06','#faa307','#ffba08','#8f3613','#a03c15',
            '#b24317','#c3491a','#d5501c','#e25822',
            '#e46533','#e77245','#e97f56','#eb8c67' ]
  };


  constructor(private ds: DataService, public alertController: AlertController) {
    
    setInterval(() => {         
    
      this.currentDate = new Date();
      
     }, 1000);
    
    if (innerWidth > 992) {
      this.view = [innerWidth - 300, 200];
    } else {
      this.view = [innerWidth, 200];
    }
    if (innerWidth > 992) {
      this.view2 = [innerWidth - 300, 200];
    } else {
      this.view2 = [innerWidth, 200];
    }
  
  }
  view2: any[] = [700, 200];
  showXAxis = true;
  showYAxis = false;
  gradient2 = false;
  showLegend2 = false;
  showXAxisLabel = true;
  // xAxisLabel = 'Cases by Age';
 

  colorScheme2 = {
    domain: ['#62BEB6']
  };

  ngOnInit() {
    this.city_cases()
    this.brgystatus()
    this.femalecovidpercentage();
    this.malecovidpercentage();
    this.agecovidpercentage();
  
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Today Cases',
      message: 'Message',
      buttons: [
         {
          text: 'Close'
        }
      ]
    });

    await alert.present();
  }

  onResize(event) {
    if (innerWidth > 1030) {
      this.view = [innerWidth - 300, 200];
    } else {
      this.view = [innerWidth, 200];      
    }
    
  
  }

  city_cases(){
    this.ds.getdata('city_cases').subscribe((data: any)=> {
      this.city = data.payload
      
      console.log(this.city);

    });
  }

  brgystatus(){
    this.ds.getdata('brgy_pchart').subscribe((data: any)=> {
      this.brgypercent = data.payload
      
      console.log(this.brgypercent)

    });
  }
  
  femalecovidpercentage(){
    this.ds.getdata('female_percent').subscribe((data: any)=> {
      this.femalepercent = data.payload
      // console.log(this.femalepercent)

    });
  }

  malecovidpercentage(){
    this.ds.getdata('male_percent').subscribe((data: any)=> {
      this.malepercent = data.payload
      // console.log(this.malepercent)

    });
  }
  agecovidpercentage(){
    this.ds.getdata('age_percent').subscribe((data: any)=> {
      this.agepercentdata = data.payload
      this.agepercent =  [
        {
          "name": "0-9",
          "value": this.agepercentdata[0].p_age
        },
        {
          "name": "10-19",
          "value": this.agepercentdata[1].p_age
        },
        {
          "name": "20-29",
          "value": this.agepercentdata[2].p_age
        }
        ,
        {
          "name": "30-39",
          "value": this.agepercentdata[3].p_age
        },
        {
          "name": "40-49",
          "value": this.agepercentdata[4].p_age
        },
        {
          "name": "50-59",
          "value": this.agepercentdata[5].p_age
        }
        ,
        {
          "name": "60-69",
          "value": this.agepercentdata[6].p_age
        }
        ,
        {
          "name": "70-79",
          "value": this.agepercentdata[7].p_age
        }
        ,
        {
          "name": "80+",
          "value": this.agepercentdata[8].p_age
        }
        
        
      ];
      console.log(this.agepercent);
    });
  }
  
}

