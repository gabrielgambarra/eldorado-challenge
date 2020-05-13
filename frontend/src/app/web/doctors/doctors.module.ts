import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsComponent } from './doctors.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { DoctorsRoutes } from './doctors.routing';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DoctorsComponent, DoctorsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DoctorsRoutes),
  ]
})
export class DoctorsModule { }
