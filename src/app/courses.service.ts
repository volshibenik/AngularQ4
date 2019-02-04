import { Injectable } from '@angular/core';
import { CourseModel } from './core/models/course.model';
import { COURSES } from './courses/courses.mock.js';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const serverUrl = 'http://localhost:3200/c';
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses = COURSES;
  private lastId;

  constructor(private http: HttpClient) {
    this.lastId = this.courses.slice().reduce((acc, el) => {
      return el.id > acc ? el.id : acc;
    }, 0);
  }

  generateId() {
    return (this.lastId = this.lastId + 1);
  }

  getCourses(): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(serverUrl);
  }

  getList(): CourseModel[] {
    return this.courses;
  }

  getItem(id: number): CourseModel {
    return this.courses.find(e => e.id === id);
  }

  addItem(course) {
    course.id = this.generateId();
    /*    const newCourses = this.courses.slice();
    newCourses.push(course);
    return (this.courses = newCourses);*/
    // this method is invoked in separate module from Courses.
    // is there a way to update courses if we make it immutable like delete() ?
    this.courses.push(course);
  }

  updateItem(course: CourseModel) {
    const { id } = course;
    const index = this.courses.findIndex(e => e.id === id);
    const newCourses = this.courses.slice();
    newCourses[index] = course;
    return (this.courses = newCourses);
  }

  removeItem(id: number) {
    const index = this.courses.findIndex(e => e.id === id);
    const newCourses = this.courses.slice();
    newCourses.splice(index, 1);
    this.courses = newCourses;
    // this.courses.splice(index, 1);
    console.log('after delete on service', this.courses);
    return this.courses;
  }
}
