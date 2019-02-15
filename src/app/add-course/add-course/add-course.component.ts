import { Component, OnDestroy } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpinnerService } from 'src/app/spinner.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent implements OnDestroy {
  private subs: Subscription;

  title = '';
  description = '';
  duration = '';
  date = '';

  // TODO switch to r. forms when have knowledge

  // maybe not use ngModel and just pass values from template?
  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private spinner: SpinnerService,
  ) {}

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  clear() {
    this.title = '';
    this.description = '';
    this.duration = '';
  }

  add() {
    this.spinner.maybeActivate(true);
    this.subs = this.coursesService
      .addItem({
        title: this.title,
        description: this.description,
        duration: this.duration,
      })
      .subscribe(() => {
        this.clear();
        this.spinner.maybeActivate(false);
        this.router.navigate(['courses']);
      });
  }
}
