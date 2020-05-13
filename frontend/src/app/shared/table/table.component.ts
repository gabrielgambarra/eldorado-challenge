import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('items') items: any = [];
  @Input('type') type: string;
  @Input('title') title: string;

  constructor() { }

  ngOnInit() {
  }

  getDoctorName(item) {
    return this.type == 'doctors' ? item.name : item.doctor.name;
  }

  getPatientName(item) {
    return this.type == 'patients' ? item.name : item.patient.name;
  }

}
