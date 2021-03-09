import { Component, OnInit } from '@angular/core';
import { Passenger } from 'src/assets/passengers';
import { PassengerService } from '../passenger.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private passengerService: PassengerService){}

  passengers: Passenger[];
  checkedInPassengersCount: number;
  
  

  ngOnInit(): void {
    this.passengers = this.passengerService.getPassengers();
    this.checkedInPassengersCount = this.passengers.filter(passenger => passenger.checkedIn).length;
  }

  editPassenger({passenger, index}) {
    this.passengerService.updatePassenger(passenger, index);
  }

  removePassenger(index: number) {
    this.passengerService.removePassenger(index);
  }

}

