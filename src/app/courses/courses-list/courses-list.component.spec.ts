import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { COURSES } from '../courses.mock';

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
    component.loadMore = jasmine.createSpy('loadMore').and.callThrough();
    const loadBtn: HTMLElement = root.querySelector('.button--load-more');

    loadBtn.click();

    expect(component.loadMore).toHaveBeenCalled();
  });
});
