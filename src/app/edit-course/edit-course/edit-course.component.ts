import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/courses.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnInit, OnDestroy {
  private subs: Subscription;
  id: number;
  /*  title = '';
  description = '';
  duration = '';
  date = ''; */
  course;
  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.subs = this.route.paramMap.subscribe(d => {
      console.log(/* d.params, */ d.keys, d.get('id')); // why params exists but shows error ?
      this.id = +d.get('id');
    });
    this.course = Object.assign({}, this.coursesService.getItem(this.id));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  save() {
    this.coursesService.updateItem(this.course);
    this.cancel();
  }
  cancel() {
    this.router.navigate(['courses']);
  }
}
