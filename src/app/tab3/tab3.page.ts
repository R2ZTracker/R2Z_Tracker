import { Component } from '@angular/core';
import { DataService } from '../api/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  currentDate:any;
  city =[];
  brgypercent = [];
 
  constructor(private ds: DataService, private modalService: NgbModal, public alertController: AlertController) {
    setInterval(() => {          
      this.currentDate = new Date(); 
     }, 1000);     
  }
  slidesOptions={
    slidesPerView: 2.2
  }

  ngOnInit() {
    this.city_cases()
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

  city_cases(){
    this.ds.getdata('city_cases').subscribe((data: any)=> {
      this.city = data.payload
      
      // console.log(this.city);

    });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  

  


}
