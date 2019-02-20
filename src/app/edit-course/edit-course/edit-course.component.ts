import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/courses.service';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CourseModel } from 'src/app/core/models/course.model';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnInit, OnDestroy {
  private subs: Subscription;
  course: CourseModel = {
    title: '',
    id: 9999,
    description: '',
    creationDate: '',
    duration: '',
    topRated: false,
  };

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.subs = this.route.paramMap
      .pipe(switchMap(d => this.coursesService.getItem(d.get('id'))))
      .subscribe(d => (this.course = d));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  save() {
    // this.coursesService.updateItem(this.course);
    // this.cancel();
  }

  cancel() {
    this.router.navigate(['courses']);
  }
}
