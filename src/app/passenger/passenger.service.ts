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

    updatePassenger(passenger: Passenger, index: number): Passenger {
        this.passengers[index] = passenger;
        return this.passengers[index];
    }

    removePassenger(index: number): void {
        this.passengers.splice(index, 1);
        
    }

}