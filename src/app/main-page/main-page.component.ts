import { Component, OnInit } from '@angular/core';
import {ServerdataService} from '../serverdata.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  tickets: Array<string>;
  constructor(
    private dataService: ServerdataService
  ) {  
    this.tickets = [];
   }
  ngOnInit(): void {
    this.dataService.gettingData('map').subscribe((data:any) => {
      // console.table(data.data)
      if(data.data){
        this.tickets = data.data.map_ids;
      }
    },err =>{
      if(err.status == 404){
       
      }
    })
  }
}
