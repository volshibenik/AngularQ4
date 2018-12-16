import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesItemComponent } from './courses-list/courses-item/courses-item.component';
import { SearchComponent } from './search/search.component';
import {
  MatButtonModule,
  MatInputModule,
  MatIconModule,
} from '@angular/material';

@NgModule({
  declarations: [CoursesListComponent, CoursesItemComponent, SearchComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [CoursesListComponent, SearchComponent],
})
export class CoursesModule {}

// does FormsModule need to be in nearest module?
// Because ngModel in 'Search' works if it's here but doesn't if in app.module.
