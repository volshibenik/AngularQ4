import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BreadcrumbsComponent } from './breadcrumbs.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcrumbsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain navigation tag', () => {
    const root: HTMLElement = fixture.nativeElement;
    const nav: HTMLElement = root.querySelector('nav');
    expect(nav).not.toBeNull();
  });
});
