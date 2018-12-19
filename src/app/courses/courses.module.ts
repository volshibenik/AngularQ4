import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesItemComponent } from './courses-list/courses-item/courses-item.component';
import { SearchComponent } from './search/search.component';
import {
  MatButtonModule,
  MatInputModule,
  MatIconModule,
} from '@angular/material';
import { CourseRecencyDirective } from './course-recency.directive';

@NgModule({
  declarations: [
    CoursesListComponent,
    CoursesItemComponent,
    SearchComponent,
    CourseRecencyDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [CoursesListComponent, SearchComponent],
})
export class CoursesModule {}
