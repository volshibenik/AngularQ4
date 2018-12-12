import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesItemComponent } from './courses-item.component';

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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
