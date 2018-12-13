import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesItemComponent } from './courses-item.component';
import { By } from '@angular/platform-browser';
import { CourseModel } from '../../course.model';

describe('CoursesItemComponent as just Class', () => {
  it('shoud bla', () => {
    const comp = new CoursesItemComponent();
    const courseEntity = {
      id: 1,
      title: 'string',
      creationDate: 'string',
      duration: 'string',
      description: 'string',
    };
    comp.courseEntity = courseEntity;
    comp.onDelete.subscribe(id => expect(id).toBe(courseEntity.id));
    comp.delete(1);
  });
});

describe('CoursesItemComponent with TestBed', () => {
  let component: CoursesItemComponent;
  let fixture: ComponentFixture<CoursesItemComponent>;
  let expectedCourse: CourseModel;
  let root: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesItemComponent);
    component = fixture.componentInstance;
    root = fixture.nativeElement;

    expectedCourse = {
      id: 42,
      title: 'Video Course 1',
      creationDate: '05.29.2018',
      duration: '1h 28min',
      description: `Lorem`,
    };
    component.courseEntity = expectedCourse;
    fixture.detectChanges();
  });

  it('should display hero name i', () => {
    const e = expectedCourse.title;
    console.log(e, root);
    expect(root.textContent).toContain(e);
  });

  it('click "delete"', () => {
    let id: number;
    console.log('00', id);
    component.onDelete.subscribe(data => (id = data));
    const btn: HTMLElement = root.querySelector('.btn-danger');
    btn.click();
    console.log('11', id);

    expect(id).toBe(expectedCourse.id);
  });
});
