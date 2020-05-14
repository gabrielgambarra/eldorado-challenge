import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DoctorFormModule } from '../doctor-form/doctor-form.module';

@NgModule({
    declarations: [ModalComponent],
    imports: [
        CommonModule,
        MatDialogModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        DoctorFormModule
    ],
    exports: [],
    providers: []
})
export class ModalModule { }