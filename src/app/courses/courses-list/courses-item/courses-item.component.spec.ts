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
