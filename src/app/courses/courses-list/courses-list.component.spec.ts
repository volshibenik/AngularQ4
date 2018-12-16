import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CourseModel } from 'src/app/core/models/course.model';
import { COURSES } from '../courses.mock';

// mock item

/* @Component({
  template: ``,
  selector: 'app-courses-item'
})
class CoursesItemComponent {}
 */
describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  let root: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
    const amount = COURSES.length;
    const items = Array.from(root.querySelectorAll('app-courses-item'));

    expect(items.length).toEqual(amount);
  });

  it('should load additional items on loadMore click', () => {
    const originalLog = console.log;
    console.log = jasmine.createSpy('log');
    const loadBtn: HTMLElement = root.querySelector('.button--load-more');

    loadBtn.click();

    expect(console.log).toHaveBeenCalledWith('will load additional elements');
    console.log = originalLog;
  });
});
