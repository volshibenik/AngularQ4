import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../course';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss'],
})
export class CoursesItemComponent implements OnInit {
  @Input() courseEntity: Course; // is courseEntity ok for name?

  constructor() {}

  ngOnInit() {}
}
