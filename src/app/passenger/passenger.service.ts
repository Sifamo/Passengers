import { Injectable, OnInit } from '@angular/core';
import { Passenger, PASSENGERS } from 'src/assets/passengers';


@Injectable({
    providedIn: "root",
})
export class PassengerService{
  
    passengers: Passenger[] = PASSENGERS;

    getPassengers(): Passenger[] {
        return this.passengers;
    }


}