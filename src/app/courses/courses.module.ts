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
import { DurationPipe } from './duration.pipe';
import { OrderByPipe } from './order-by.pipe';
// import { SearchPipe } from './search.pipe';
import { AppRoutingModule } from '../app-routing.module';
import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  declarations: [
    CoursesListComponent,
    CoursesItemComponent,
    SearchComponent,
    CourseRecencyDirective,
    DurationPipe,
    OrderByPipe,
    //  SearchPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    AppRoutingModule,
    NgScrollbarModule,
  ],
  exports: [CoursesListComponent],
})
export class CoursesModule {}
