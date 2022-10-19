import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input/search-input.component';
import { SelectInputComponent } from './select-input/select-input.component';
import { MatIconModule } from '@angular/material/icon';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ToggleComponent } from './toggle/toggle.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { PillComponent } from './pill/pill.component';
import { TableComponent } from './table/table.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { SearchSelectComponent } from './search-select/search-select.component';

@NgModule({
  declarations: [
    SearchInputComponent,
    SelectInputComponent,
    DatePickerComponent,
    ToggleComponent,
    PillComponent,
    TableComponent,
    CheckboxComponent,
    PaginationComponent,
    SearchSelectComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonToggleModule,
    FormsModule,
  ],
  exports: [
    SearchInputComponent,
    SelectInputComponent,
    DatePickerComponent,
    ToggleComponent,
    PillComponent,
    TableComponent,
    CheckboxComponent,
    PaginationComponent,
    SearchSelectComponent
  ],
})
export class InputModuleModule {}
