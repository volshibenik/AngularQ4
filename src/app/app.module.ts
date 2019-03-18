import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
} from 'ngx-perfect-scrollbar';

import { TableModule } from 'primeng/table';
import { InputSwitchModule } from 'primeng/inputswitch';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { CoursesModule } from './courses/courses.module';
import { AddCourseModule } from './add-course/add-course.module';
import { AdminModule } from './admin/admin.module';
import { CanActivateGuard } from './guards/can-activate.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditCourseModule } from './edit-course/edit-course.module';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { storeLogger } from 'ngrx-store-logger';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/login';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { DialComponent } from './dial/dial.component';

import { DialogModule } from 'primeng/dialog';
import { InputSwitchComponent } from './toggle/toggle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export function logger(reducer) {
  return storeLogger()(reducer);
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

export const metaReducers = [logger];
@NgModule({
  declarations: [AppComponent, DialComponent, InputSwitchComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule,
    CoursesModule,
    AddCourseModule,
    EditCourseModule,
    AdminModule,
    PerfectScrollbarModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AuthEffects]),
    NgScrollbarModule,
    TableModule,
    InputSwitchModule,
    DialogModule,
  ],
  providers: [
    CanActivateGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
