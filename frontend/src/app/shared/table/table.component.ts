import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

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
    public dialog: MatDialog
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
      if (result) {
        this.items.push(result);
      }
    });
  }

}
