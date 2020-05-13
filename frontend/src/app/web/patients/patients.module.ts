import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './patients.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { PatientsRoutes } from './patients.routing';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PatientsComponent, PatientsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PatientsRoutes),
  ]
})
export class PatientsModule { }
