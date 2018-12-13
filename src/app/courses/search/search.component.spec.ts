/* import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { Component } from '@angular/core';
import { log } from 'util';
import { By } from '@angular/platform-browser';


 @Component({ selector: 'mat-form-field', template: '' })
class MatFormField {} 
@Component({ selector: 'mat-icon', template: '<input />' })
class MatIcon {}

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent, MatFormField, MatIcon],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should blabla', () => {
    //let formField = fixture.debugElement.query(By.directive(MatFormField))
   //   .componentInstance as MatFormField;
    const native: HTMLElement = fixture.nativeElement;
         const input: HTMLElement = native.querySelector('input');
    expect(input.nodeValue).toBe('initial search value...'); 
    console.log(native, '12', formField);
  });

  it('should blabla2', () => {
    const native: HTMLElement = fixture.nativeElement;
    const input: HTMLElement = native.querySelector('input');
    input.value = `kkk`;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges(); //
    expect(input.nodeValue).toBe('initial search value...');
  });
});
 */
