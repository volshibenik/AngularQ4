import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/courses.service';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import maxLengthValidator from './max-length.validator';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnInit, OnDestroy {
  private subs: Subscription;
  private id: number;
  private topRated: boolean;
  private formResult;

  private errors;
  errorsJson;


  course = new FormGroup({
    title: new FormControl('', [Validators.required, maxLengthValidator(4)]),
    description: new FormControl('', [Validators.required, maxLengthValidator(500)]),
    creationDate: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required])
  })



  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.subs = this.route.paramMap
      .pipe(switchMap(d => this.coursesService.getItem(d.get('id'))))
      .subscribe(item => {
        const { id, topRated, title, description, duration, creationDate } = item;
        this.id = id;
        this.topRated = topRated;
        this.course.setValue({ title, description, duration, creationDate });
      });

  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  submit() {
    this.course.valid ? this.save() : this.showError()
  }

  showError() {
    this.errors = [];

    Object.values(this.course.controls)
      .forEach(c => {
        if (c.errors) {
          this.errors.push(c.errors)
        }
      })
    this.errorsJson = JSON.stringify(this.errors)

  }

  save() {
    this.formResult = Object.assign(this.course.value, { topRated: this.topRated, id: this.id })
    this.coursesService.updateItem(this.formResult);
    this.cancel();
  }

  cancel() {
    this.router.navigate(['courses']);
  }
}
