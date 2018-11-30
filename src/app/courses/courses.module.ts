import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesItemComponent } from './courses-list/courses-item/courses-item.component';

@NgModule({
  declarations: [CoursesListComponent, CoursesItemComponent],
  imports: [
    CommonModule
  ],
  exports: [CoursesListComponent]
})
export class CoursesModule { }
