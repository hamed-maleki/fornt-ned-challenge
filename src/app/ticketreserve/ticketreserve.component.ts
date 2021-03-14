import { Component, OnInit } from '@angular/core';
import { ServerdataService } from '../serverdata.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticketreserve',
  templateUrl: './ticketreserve.component.html',
  styleUrls: ['./ticketreserve.component.css']
})
export class TicketreserveComponent implements OnInit {
  mapId: string;
  seatsGroup: Array<string>;
  seatsInfo: any;
  selectedRow: any;
  loaded: boolean;
  modalStatus:boolean;
  selectedSeat:any;
  postingError:boolean;
  constructor(
    private dataService: ServerdataService,
    private router: Router
  ) {
    this.mapId = window.location.toString().split("/")[window.location.toString().split("/").length - 1];
    this.seatsGroup = [];
    this.seatsInfo = [];
    this.selectedRow = 0;
    this.loaded = true;
    this.modalStatus = false;
    this.selectedSeat = 0;
    this.postingError = false;
  }

  ngOnInit(): void {
    this.dataService.gettingData('map/' + this.mapId).subscribe((seat: any) => {
      this.seatsGroup = seat.data;
      this.seatsInfo = this.seatsGroup[0];
      this.selectedRow = 0;
      this.loaded = true;
    }, err => {

      this.loaded = false;

    })
  }
  getSeatData(index) {
    this.selectedRow = index;
    this.seatsInfo = this.seatsGroup[index]
  }
  chooseSeat(seat,index) {
    // console.log(seat,index)

    if(seat == 1) {
      this.selectedSeat = index;
      this.modalStatus = true;
      this.postingError = false;
    }
  }
  cancelBuy() {
    this.modalStatus = false;
  }
  confimBuy() {
    this.dataService.postingData("map/"+this.mapId+"/ticket",{x:this.selectedRow,y:this.selectedSeat}).subscribe((response: any) => {
      this.router.navigate(['buyInfo/'+this.selectedRow+"/"+this.selectedSeat]);
    }, err => {
      this.postingError = true;
    })
  }
}
