import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { DoctorsService } from 'src/app/providers/services/doctors.service';
import { PatientsService } from 'src/app/providers/services/patients.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('items') items: any = [];
  @Input('type') type: string;
  @Input('title') title: string;

  constructor(
    public dialog: MatDialog,
    private doctorsService: DoctorsService,
    private patientsService: PatientsService
  ) { }

  ngOnInit() {
  }

  getDoctorName(item) {
    return this.type == 'doctors' ? item.name : item.doctor.name;
  }

  getPatientName(item) {
    return this.type == 'patients' ? item.name : item.patient.name;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: this.type
    });

    dialogRef.afterClosed().subscribe(result => {
      this.items.push(result);
    });
  }

}
