import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [TableComponent],
    imports: [CommonModule, FlexLayoutModule],
    exports: [TableComponent],
    providers: [],
})
export class TableModule {}