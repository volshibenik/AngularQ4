import { Component, OnInit } from '@angular/core';
import { COURSES } from '../courses.mock';
import { CourseModel } from 'src/app/core/models/course.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  items: CourseModel[] = []; // do we need keyword public?

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this.items = COURSES;
  }

  loadMore(): void {
    console.log('will load additional elements');
  }

  onDelete(id): void {
    console.log('will delete item ', id);
  }
}
