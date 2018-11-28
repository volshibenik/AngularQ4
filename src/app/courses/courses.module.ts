import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';

@NgModule({
  declarations: [CoursesListComponent, CoursesItemComponent],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }
