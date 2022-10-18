import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { InputModuleModule } from '../input-module/input-module.module';

import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { SubmissionService } from './service/submission.service';
import { SubmissionComponent } from './submission.component';
import { MapViewComponent } from './map-view/map-view.component';
import { CardComponent } from './map-view/card/card.component';

@NgModule({
  declarations: [SubmissionComponent, FilterBarComponent, MapViewComponent, CardComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    InputModuleModule,
  ],
  providers: [SubmissionService],
})
export class SubmissionModule {}
