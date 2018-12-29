import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesItemComponent } from './courses-item.component';
import { CourseModel } from 'src/app/core/models/course.model';
import {
  Component,
  Pipe,
  PipeTransform,
  Directive,
  Input,
} from '@angular/core';

//   MOCKS  //

const expectedCourse: CourseModel = {
  id: 1,
  title: 'myTitle',
  creationDate: '2018-12-20T20:02:38',
  duration: '49min',
  topRated: false,
  description: 'string',
};

@Directive({ selector: '[appCourseRecency]' })
class CourseRecencyDirective {
  @Input('appCourseRecency') courseRecency: string;
}

@Pipe({ name: 'duration' })
class DurationPipe implements PipeTransform {
  transform(value: string): string {
    return value;
  }
}

/* tslint:disable:component-class-suffix component-selector */
@Component({ selector: 'mat-icon', template: '' })
class MatIcon {}

@Component({
  template: `
    <app-courses-item
      [courseEntity]="item"
      (onDelete)="onDelete($event)"
    ></app-courses-item>
  `,
})
class TestHostComponent {
  item: CourseModel = expectedCourse;
  deletedItemId: number;
  onDelete(id: number) {
    this.deletedItemId = id;
  }
}

//   AS CLASS  //
describe('CoursesItem as class', () => {
  it('should test component methods as mere class', () => {
    const { id } = expectedCourse;
    const comp = new CoursesItemComponent();
    comp.onDelete.emit = jasmine.createSpy('emit');
    comp.courseEntity = expectedCourse;

    comp.delete(id);
    expect(comp.onDelete.emit).toHaveBeenCalled();
    expect(comp.onDelete.emit).toHaveBeenCalledWith(id);
  });
});

//   WITH TESTHOST  //
describe('CoursesItem with TestHost', () => {
  let testHostComp: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let root: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        CoursesItemComponent,
        MatIcon,
        CourseRecencyDirective,
        DurationPipe,
      ],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComp = fixture.componentInstance;
    root = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    const courseItemWrapper = root.querySelector('.item');
    expect(courseItemWrapper).toBeTruthy();
  });

  it('should emit @Output event', () => {
    const btn: HTMLElement = root.querySelector('.button--delete');
    btn.click();

    expect(testHostComp.deletedItemId).toEqual(expectedCourse.id);
  });

  it('should check whether @Input accepts & binds correct data', () => {
    const { description } = expectedCourse;
    const newDescription = 'new';
    const h2 = root.querySelector('.description');

    expect(h2.textContent).toEqual(description);

    testHostComp.item.description = newDescription;
    fixture.detectChanges();

    expect(h2.textContent).toEqual(newDescription);
  });
});
