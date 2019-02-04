import { Component } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';
import { Router } from '@angular/router';

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
  constructor(private coursesService: CoursesService, private router: Router) {}

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
    this.router.navigate(['courses']);
  }
}
