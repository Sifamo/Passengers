import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-passenger-add',
  templateUrl: './passenger-add.component.html',
  styleUrls: ['./passenger-add.component.css']
})
export class PassengerAddComponent implements OnInit {

  checkedIn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    
  }

}
