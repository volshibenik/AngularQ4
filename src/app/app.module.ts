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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    CoursesModule,
    AddCourseModule,
    AdminModule,
  ],
  providers: [CanActivateGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
