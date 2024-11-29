import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private var_url: string = 'https://road2zero.000webhostapp.com/brgycovidtracker_api/';
   private var_url: string = 'https://r2zero.000webhostapp.com/brgycovidtracker_api/';
  // private var_url: string = 'http://localhost/brgycovidtracker_api/';
  private globalcases_url: string = 'https://coronavirus-19-api.herokuapp.com/';
  constructor(private http: HttpClient ) { }

  push_data(api: string, data: any) {
    return this.http.post(this.var_url+api, JSON.stringify(data));
  }

  public getglobalcases(api : any){
    
    return this.http.get(this.globalcases_url+api);
  }

  public getdata(api: any){
    return this.http.get(this.var_url+api);
  }
  public getcontact(api: string, data: any){
    return this.http.post(this.var_url+api , JSON.stringify(data));
  }


}
