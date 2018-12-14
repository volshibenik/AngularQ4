import {
  ComponentFixture,
  TestBed,
  async,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Component, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

import { SearchComponent } from './search.component';

//////////////  MOCKS  ///////////////
/* @Component({
  selector: 'mat-form-field',
  template: `
    <input
      matInput
      type="text"
      placeholder="Search input"
      [(ngModel)]="value"
    />
  `,
})
class MatFormField {} */

import { MatInputModule } from '@angular/material';
@Component({ selector: 'mat-icon', template: '' })
class MatIcon {}

@NgModule({
  declarations: [SearchComponent, MatIcon],
  imports: [BrowserAnimationsModule, FormsModule, MatInputModule],
  exports: [SearchComponent, MatIcon],
})
export class CoursesModule {}

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

  it('should show/update value via 2way binding', fakeAsync(() => {
    const expectedOriginal = 'initial';
    const expectedNew = 'newValue';

    const input = <HTMLInputElement>(
      fixture.debugElement.query(By.css('input')).nativeElement
    );
    console.log('11111111', input);
    expect(component.value).toBe(
      expectedOriginal,
      `At start name should be ${expectedOriginal} `,
    );

    input.value = expectedNew;
    input.dispatchEvent(new Event('input'));
    tick();
    fixture.detectChanges();
    console.log('wwwwwwwwwwwwww', input.value);
    expect(component.value).toBe(
      expectedNew,
      `Then name should be ${expectedNew} `,
    );
  }));
});
