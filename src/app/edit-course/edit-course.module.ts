import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditCourseComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
  ],
})
export class EditCourseModule {}
