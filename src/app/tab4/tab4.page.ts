import { Component } from '@angular/core';
import { DataService } from '../api/data.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  brgy =[];
  brgypercent = [];
  view: any[] = [700, 200];
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = false;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454','#A10A28','#C7B42C','#AAAAAA'
             ]
  };

  constructor(private ds: DataService) {}

  ngOnInit() {
    this.brgycases()
    this.brgystatus()
  }
  brgycases(){
    this.ds.getdata('brgy').subscribe((data: any)=> {
      this.brgy = data.payload
      // this.cases = 
      console.log(this.brgy);

    });
  }
  brgystatus(){
    this.ds.getdata('brgy_pchart').subscribe((data: any)=> {
      this.brgypercent = data.payload
      
      console.log(this.brgypercent)

    });
  }


}
