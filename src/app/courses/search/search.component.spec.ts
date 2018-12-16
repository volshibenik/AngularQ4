import { Component, NgModule } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  async,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SearchComponent } from './search.component';

/* tslint:disable:component-class-suffix component-selector */

//////////////  MOCK Module & Material comp.  ///////////////
@Component({ selector: 'mat-icon', template: '' })
class MatIcon {}

@NgModule({
  declarations: [SearchComponent, MatIcon],
  imports: [BrowserAnimationsModule, FormsModule, MatInputModule],
  exports: [SearchComponent, MatIcon],
})
export class CoursesModule {}

///////////  Tests ////////////

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoursesModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show/update component property via 2way binding', fakeAsync(() => {
    const expectedOriginal = 'initial';
    const expectedNew = 'newValue';
    const input: HTMLInputElement = fixture.debugElement.query(By.css('input'))
      .nativeElement;

    expect(component.value).toBe(expectedOriginal);

    input.value = expectedNew;
    input.dispatchEvent(new Event('input'));
    tick();
    fixture.detectChanges();

    expect(component.value).toBe(expectedNew);
  }));

  it('should test click on search button', () => {
    const originalLog = console.log;
    console.log = jasmine.createSpy('log');
    const expected = 'initial';
    const searchBtn = fixture.nativeElement.querySelector('.button--search');

    searchBtn.click();
    expect(console.log).toHaveBeenCalledWith(expected);

    console.log = originalLog;
  });
});
