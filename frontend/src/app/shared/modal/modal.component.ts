import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  // obj: any;
  // doctors: Doctor[] = [];
  // patients: Patient[] = [];
  isDoctorScreen: boolean;
  isPatientScreen: boolean;
  isScheduleScreen: boolean;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public screen: string,
    // private doctorsService: DoctorsService,
    // private patientsService: PatientsService
  ) { }

  ngOnInit() {

    if (this.screen == 'schedules') {
      this.isScheduleScreen = true;

      // this.doctorsService.getAll().subscribe(success => {
      //   this.doctors = success.doctors;
      // });
  
      // this.patientsService.getAll().subscribe(success => {
      //   this.patients = success.patients;
      // });
    }

    if (this.screen == 'doctors') {
      this.isDoctorScreen = true;
    }

    if (this.screen == 'patients') {
      this.isPatientScreen = true;
    }
  }

  onSave(event) {
    this.dialogRef.close(event);
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
