import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  navItems: any;
  ticketItems:any;
  cardDetails:any;
  constructor(private http:HttpClient) { }

  getJsonData(){
    this.navItems = this.http.get('../../assets/values.json')
    console.log('table data..!',this.navItems)
    return this.navItems
  }
  getJsonValue(){
    this.ticketItems = this.http.get('../../assets/tickets.json')
    console.log('tickets informations..!',this.ticketItems)
    return this.ticketItems
  }
  getCardValues(){
    this.cardDetails = this.http.get('../../assets/card.json')
    console.log('card datails..!',this.cardDetails)
    return this.cardDetails
  }

}
