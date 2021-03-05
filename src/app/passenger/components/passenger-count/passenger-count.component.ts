import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-passenger-count',
  templateUrl: './passenger-count.component.html',
  styleUrls: ['./passenger-count.component.css']
})
export class PassengerCountComponent {
  @Input() passengersCount: number;
  @Input() checkedInPassengersCount: number;

  constructor() { }


}
