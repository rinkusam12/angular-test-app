import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { InputModuleModule } from '../input-module/input-module.module';

import { GoogleMapsModule } from '@angular/google-maps';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { ListTableComponent } from './list-view/list-table/list-table.component';
import { ListViewComponent } from './list-view/list-view.component';
import { CardComponent } from './map-view/card/card.component';
import { MapViewComponent } from './map-view/map-view.component';
import { SubmissionService } from './service/submission.service';
import { SubmissionComponent } from './submission.component';
import { CsvServiceService } from '../csv-service.service';

@NgModule({
  declarations: [
    SubmissionComponent,
    FilterBarComponent,
    MapViewComponent,
    CardComponent,
    ListViewComponent,
    ListTableComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    InputModuleModule,
    MatCheckboxModule,
    GoogleMapsModule,
    
  ],
  providers: [SubmissionService, CsvServiceService],
})
export class SubmissionModule {}
