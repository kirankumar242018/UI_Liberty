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
  constructor(private jsonService:HttpService) { }

  ngOnInit() {
    this.LineChart=new Chart('lineChart',{
      type:'line',
      data:{
      labels:["2013","2014","2014","2015","2016","2017","2018"],
      datasets:[{
      data:[300,400,300,440,700,550],
      fill:false,
      lineTension:0.3,
      borderColor:"gray",
      backgroundColor:"gray",
      borderWidth:2.5
      },{
        data:[150,200,150,200,320,400],
        fill:false,
        lineTension:0.3,
        borderColor:"gray",
        backgroundColor:"gray",
        borderWidth:2.5
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

      this.LineChart2=new Chart('lineChart2',{
        type:'line',
        data:{
        labels:["2007","2014","2014","2015","2016","2017"],
        datasets:[{
        data:[50,75,26,27,74,76],
        fill:false,
        lineTension:0.3,
        borderColor:"gray",
        backgroundColor:"gray",
        borderWidth:2.5
        },{
          data:[150,200,150,200,320,400],
          fill:false,
          lineTension:0.3,
          borderColor:"gray",
          backgroundColor:"gray",
          borderWidth:2.5
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
          borderWidth:2.5
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

  }

  getJson(){
    this.jsonService.getJsonData().subscribe(data=>{
      console.log('geting json data..!',data)
      this.jsonValues = data.tables_data
      console.log('geting json data..!',this.jsonValues)

    })
  }

}
































