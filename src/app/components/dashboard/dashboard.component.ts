import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import {HttpService} from '../../services/HttpService/http.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  LineChart=[];
  LineChart2=[];
  BarChart=[]
  jsonValues;
  jsonTickets;
  jsonCard;
  constructor(private jsonService:HttpService) { }

  ngOnInit() {
    this.LineChart=new Chart('lineChart',{
      type:'line',
      data:{
      labels:["2013","2014","2014","2015","2016","2017","2018"],
      datasets:[{
      data:[300,400,300,440,700,550],
      //fill:false,
      lineTension:0.3,
      borderColor:"blue",
      //backgroundColor:"light-blue",

      borderWidth:1
      },{
        data:[150,200,150,200,320,400],
        //fill:false,
        lineTension:0.3,
        borderColor:"blue",
        backgroundColor:"#b2b5f3",
        borderWidth:1
        }]
      },
      options:{
      title:{
      text:"Line Chart",
      display:false
      },
      legend:{
      display:false
      },
      scales:{
      yAxes:[{
      display:false
      }],
      xAxes:[{
          display:false
      }],
      
      }
      }
      });

      this.LineChart2=new Chart('lineChart2',{
        type:'line',
        data:{
        labels:["2006","2007","2008","2009","2010","2011"],
        datasets:[{
        data:[0,75,20,50,100,65],
        fill:false,
        lineTension:0.3,
        borderColor:"gray",
        backgroundColor:"gray",
        borderWidth:2
        },{
          data:[50,75,26,27,74,76],
          fill:false,
          lineTension:0.3,
          borderColor:"blue",
          backgroundColor:"light-blue",
          borderWidth:2
          }]
        },
        options:{
        title:{
        text:"Line Chart",
        display:false
        },
        legend:{
         display:false
        },
        scales:{
        yAxes:[{
        gridLines:{
        display:false
        }
        }],
        xAxes:[{
        gridLines:{
        display:false
        }
        }]
        }
        }
        });

        this.BarChart=new Chart('barChart',{
          type:'bar',
          data:{
          labels:["Mon","Tue","Wed","Thur","Fri","Sat","Sun"],
          datasets:[{
          data:[330,380,230,400,309,530,340,340],
          fill:false,
          lineTension:0.3,
          borderColor:"grey",
          backgroundColor:"blue",
          borderWidth:1
          }]
          },
          options:{
          title:{
          text:"Bar Chart",
          display:false
          },
          legend:{
          display:false
          },
          scales:{
          yAxes:[{
          gridLines:{
          display:false
          }
          }],
          xAxes:[{
          gridLines:{
          display:false
          }
          }]
          }
          }
          });

        this.getJson();
        this.getJsonTickets();
        this.getCardDetails();
  }

  getJson(){
    this.jsonService.getJsonData().subscribe(data=>{
      //console.log('geting json data..!',data)
      this.jsonValues = data.tables_data
      //console.log('geting json data..!',this.jsonValues)

    })
  }
  getJsonTickets(){
    this.jsonService.getJsonValue().subscribe(data=>{
      //console.log('tickets informations..!',data)
      this.jsonTickets = data.Manage_Tickets
      //console.log('getting ticket infromations..!',this.jsonTickets)
    })
  }
  getCardDetails(){
    this.jsonService.getCardValues().subscribe(data=>{
      console.log('card details..!',data)
      this.jsonCard = data.Card_Details
      console.log('getting card details..!',this.jsonCard)
    })
  }

}
































