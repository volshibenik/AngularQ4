import { Component, EventEmitter } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthorizationService } from 'src/app/authorization.service';

//// MOCKS  ///////
const buttonLabels = {
  anonimous: 'Log In',
  user: 'Log Out',
};
const user = { id: 1, login: 'User' };

//// TESTS  //////

@Component({ selector: 'app-logo', template: '' })
class AppLogoComponent {}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authService;

  beforeEach(async(() => {
    authService = jasmine.createSpy('authSpy', AuthorizationService);
    authService['userEmitter'] = new EventEmitter();

    TestBed.configureTestingModule({
      declarations: [HeaderComponent, AppLogoComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [{ provide: AuthorizationService, useValue: authService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain header tag', () => {
    const header: HTMLElement = fixture.nativeElement.querySelector('header');
    expect(header).toBeDefined();
  });

  it('should contain "Log In" button if not authenticaled, "Log Out" otherwise', () => {
    const header: HTMLElement = fixture.nativeElement.querySelector('header');
    const getText = () => header.querySelector('.btn').textContent.trim();

    expect(getText()).toBe(buttonLabels.anonimous);

    authService['userEmitter'].emit(user);
    fixture.detectChanges();

    expect(getText()).toBe(buttonLabels.user);
  });
});
