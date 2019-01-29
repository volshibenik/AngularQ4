import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddCourseComponent],
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule],
  exports: [AddCourseComponent],
})
export class AddCourseModule {}
