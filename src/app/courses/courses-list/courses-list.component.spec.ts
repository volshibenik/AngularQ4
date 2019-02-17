import { CUSTOM_ELEMENTS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { COURSES } from '../courses.mock';
import { CourseModel } from 'src/app/core/models/course.model';
import { of } from 'rxjs';
import { CoursesService } from 'src/app/courses.service';

@Pipe({ name: 'orderBy' })
class OrderByPipe implements PipeTransform {
  transform(value: any[]): any[] {
    return value;
  }
}

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  let root: HTMLElement;
  let courses: CourseModel[];
  let getCoursesSpy;

  beforeEach(() => {
    courses = COURSES;
    const coursesService = jasmine.createSpyObj('CoursesService', [
      'getCourses',
    ]);
    getCoursesSpy = coursesService.getCourses.and.returnValue(of(courses));

    TestBed.configureTestingModule({
      declarations: [CoursesListComponent, OrderByPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: CoursesService,
          useValue: coursesService,
        },
      ],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    root = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create corresponding amount of children via *ngFor', () => {
    const amount = courses.length;
    const items = Array.from(root.querySelectorAll('app-courses-item'));

    expect(items.length).toEqual(amount);
  });

  it('should load additional items on loadMore click', () => {
    component.loadMore = jasmine.createSpy('loadMore').and.callThrough();
    const loadBtn: HTMLElement = root.querySelector('.button--load-more');

    loadBtn.click();

    expect(component.loadMore).toHaveBeenCalled();
  });
});
