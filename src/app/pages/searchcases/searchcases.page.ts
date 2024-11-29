import { Component, OnInit } from '@angular/core';
import { DataService} from '../../api/data.service'

@Component({
  selector: 'app-searchcases',
  templateUrl: './searchcases.page.html',
  styleUrls: ['./searchcases.page.scss'],
})
export class SearchcasesPage implements OnInit {
  patient = [];
  searchpatient: any;
  constructor(private ds: DataService) { }

  ngOnInit() {
    this.globalcases();
  }

  globalcases(){
    this.ds.getdata('get_patient').subscribe((data: any)=> {
      this.patient = data.payload
      
      // console.log(this.patient);

    });
  }
  
}
