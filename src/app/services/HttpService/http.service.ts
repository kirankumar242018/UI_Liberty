import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  navItems: any;
  constructor(private http:HttpClient) { }

  getJsonData(){
    this.navItems = this.http.get('../../assets/values.json')
    console.log('table data..!',this.navItems)
    return this.navItems
  }

}
