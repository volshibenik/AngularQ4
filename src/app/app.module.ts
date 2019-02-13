import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    CoursesModule,
    AddCourseModule,
    EditCourseModule,
    AdminModule,
  ],
  providers: [
    CanActivateGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
