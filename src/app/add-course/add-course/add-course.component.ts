import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent {
  title = '';
  description = '';
  duration = '';
  date = '';

  // TODO switch to r. forms when have knowledge

  // maybe not use ngModel and just pass values from template?
  constructor(private coursesService: CoursesService) {}

  clear() {
    this.title = '';
    this.description = '';
    this.duration = '';
    this.date = '';
  }

  add() {
    this.coursesService.addItem({
      title: this.title,
      description: this.description,
      duration: this.duration,
      date: this.date,
    });
    this.clear();
  }
}
