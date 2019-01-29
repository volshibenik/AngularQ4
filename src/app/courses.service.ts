import { Injectable } from '@angular/core';
import { CourseModel } from './core/models/course.model';
import { COURSES } from './courses/courses.mock';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses = COURSES;
  private lastId = this.courses.slice().reduce((acc, el) => {
    return el.id > acc ? el.id : acc;
  }, 0);

  generateId() {
    return (this.lastId = this.lastId + 1);
  }

  getList(): CourseModel[] {
    return this.courses;
  }

  getItem(id: number): CourseModel {
    return this.courses.find(e => e.id === id);
  }

  addItem(course) {
    course.id = this.generateId();
    const newAr = this.courses.slice();
    newAr.push(course);
    this.courses = newAr;
  }

  updateItem(course: CourseModel) {
    const { id } = course;
    const index = this.courses.findIndex(e => e.id === id);
    this.courses[index] = course;
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
