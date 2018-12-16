import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesItemComponent } from './courses-item.component';
import { CourseModel } from 'src/app/core/models/course.model';
import { Component } from '@angular/core';

//   MOCKS  //
const expectedCourse: CourseModel = {
  id: 1,
  title: 'myTitle',
  creationDate: 'string',
  duration: 'string',
  description: 'string',
};
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
    const comp = new CoursesItemComponent();

    comp.courseEntity = expectedCourse;
    comp.onDelete.subscribe(id => expect(id).toBe(expectedCourse.id));
    comp.delete(1);
  });
});

//   WITH TESTHOST  //
describe('CoursesItem with TestHost', () => {
  let testHostComp: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let root: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, CoursesItemComponent],
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

  it('should bind new data, gotten via @Input & invoke onChanges hook', () => {
    const originalLog = console.log;
    console.log = jasmine.createSpy('log');
    testHostComp.item = Object.assign({}, expectedCourse);
    fixture.detectChanges();

    expect(console.log).toHaveBeenCalledWith('onChanges');
    console.log = originalLog;
  });

  it('should check whether @Input accepts & binds correct data', () => {
    const { title } = expectedCourse;
    const newTitle = 'newTitle';
    const h2 = root.querySelector('.title');

    expect(h2.textContent).toEqual(title);

    testHostComp.item.title = newTitle;
    fixture.detectChanges();

    expect(h2.textContent).toEqual(newTitle);
  });
});
