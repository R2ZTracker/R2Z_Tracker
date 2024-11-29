import { Component, OnInit } from '@angular/core';
import { DataService} from '../../api/data.service'

@Component({
  selector: 'app-globalcases',
  templateUrl: './globalcases.page.html',
  styleUrls: ['./globalcases.page.scss'],
})
export class GlobalcasesPage implements OnInit {
  countries =[];
  searchCountry: any;
  currentDate: any;


  constructor(private ds: DataService) { 
    setInterval(() => {         
    
    this.currentDate = new Date();
    
   }, 1000);
  }
  
  ngOnInit() {
    this.globalcases();
  }


  globalcases(){
    this.ds.getglobalcases('countries').subscribe((data: any)=> {
      this.countries = data
      
      // console.log(this.countries);

    });
  }

 
}
