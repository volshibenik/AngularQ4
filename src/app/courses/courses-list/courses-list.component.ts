import { Component, OnInit } from '@angular/core';
import { COURSES } from '../courses.mock';
import { Course } from '../course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  items: Course[] = COURSES; // do we need keyword public?

  constructor() {}

  ngOnInit() {}
}
