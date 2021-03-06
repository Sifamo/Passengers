import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerAddComponent } from './containers/passenger-add/passenger-add.component';
import { PassengerInfoComponent } from './containers/passenger-info/passenger-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
        PassengerCountComponent,
        PassengerInfoComponent,
        PassengerAddComponent,
        DashboardComponent
    ],
    imports:[
        CommonModule,
        FormsModule
    ],
    exports: [
        DashboardComponent
    ]
})
export class PassengerModule {

}