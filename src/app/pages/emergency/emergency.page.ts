import { Component, OnInit } from '@angular/core';
import { DataService} from '../../api/data.service'
@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.page.html',
  styleUrls: ['./emergency.page.scss'],
})
export class EmergencyPage implements OnInit {
contact = []
searchcontact: any;
  constructor(public ds: DataService) { }
  
  ngOnInit() {
    this.emergencycontact()
  }
  emergencycontact(){
    this.ds.getcontact('showcontact', this.contact).subscribe((data: any)=> {
      this.contact = data.payload
      
      console.log(this.contact);

    });

  }
}
