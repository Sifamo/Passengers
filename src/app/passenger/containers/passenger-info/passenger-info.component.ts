import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Passenger } from 'src/assets/passengers';

@Component({
  selector: 'app-passenger-info',
  templateUrl: './passenger-info.component.html',
  styleUrls: ['./passenger-info.component.css']
})
export class PassengerInfoComponent implements OnInit {

  @Input() passenger: Passenger;
  @Input() index: number;

  @Output() editedPassenger: EventEmitter<Passenger> = new EventEmitter();
  editable: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  editPassenger() {
    this.editable = !this.editable;
  }
}
