import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/courses.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnInit {
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
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(d => {
      console.log(/* d.params, */ d.keys, d.get('id')); // why params exists but shows error ?
      this.id = +d.get('id');
    });
    this.course = Object.assign({}, this.coursesService.getItem(this.id))

  }

  save() {
    this.coursesService.updateItem(this.course);
    console.log(this.coursesService.getList());
    this.cancel();
  }
  cancel() {
    this.router.navigate(['courses']);
  }
}
