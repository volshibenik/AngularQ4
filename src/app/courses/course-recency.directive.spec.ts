import { CourseRecencyDirective } from './course-recency.directive';
import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

const DATES = {
  RECENT: new Date(Date.now() - 10000).toISOString().slice(0, -5),
  FUTURE: '2020-11-22T20:02:38',
  OLD: '2012-12-20T20:02:38',
};
@Component({
  template: `
    <div [appCourseRecency]="date">{{ date }}</div>
  `,
})
class TestComponent {
  date = DATES.OLD;
}

describe('CourseRecencyDirective', () => {
  it('should alter DOM element depending on component data', () => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, CourseRecencyDirective],
    });
    const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(
      TestComponent,
    );
    const root = fixture.nativeElement;
    const component = fixture.componentInstance;
    const div: HTMLElement = root.querySelector('div');

    fixture.detectChanges();
    expect(div.style.borderColor).toBe('');

    component.date = DATES.RECENT;
    fixture.detectChanges();
    expect(div.style.borderColor).toBe('green');

    component.date = DATES.FUTURE;
    fixture.detectChanges();
    expect(div.style.borderColor).toBe('blue');
  });
});
