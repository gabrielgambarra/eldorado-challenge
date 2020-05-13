import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SchedulesListComponent } from './schedules-list/schedules-list.component';
import { HomeRoutes } from './home.routing';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomeComponent, SchedulesListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
  ]
})
export class HomeModule { }
