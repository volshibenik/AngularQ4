import { CourseRecencyDirective } from './course-recency.directive';
import { Component } from '@angular/core';

const DATE = '2018-12-20T20:02:38';
@Component({
  template: `
    <div [appCourseRecency]="date">Recent course - green</div>
  `,
})
class TestComponent {
  date = DATE;
}

describe('CourseRecencyDirective', () => {});
