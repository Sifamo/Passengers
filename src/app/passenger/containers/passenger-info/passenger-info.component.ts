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

  @Output() editedPassenger: EventEmitter<Object> = new EventEmitter();
  @Output() removedPassenger: EventEmitter<number> = new EventEmitter();
  editable: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  editPassenger() {
    this.editable? this.editedPassenger.emit({passenger: this.passenger, index: this.index}): "";
    this.editable = !this.editable;
  }

  removePassenger() {
    this.removedPassenger.emit(this.index);
  }
}
