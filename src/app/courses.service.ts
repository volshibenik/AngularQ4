import { Injectable } from '@angular/core';
import { CourseModel } from './core/models/course.model';
import { COURSES } from './courses/courses.mock';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses = COURSES;

  getList(): CourseModel[] {
    return this.courses;
  }

  getItem(id: number): CourseModel {
    return this.courses.find(e => e.id === id);
  }

  addItem(course: CourseModel) {
    // think how to get next id
    this.courses.push(course);
  }

  updateItem(course: CourseModel) {
    const { id } = course;
    const index = this.courses.findIndex(e => e.id === id);
    this.courses[index] = course;
  }

  removeItem(id: number) {
    const index = this.courses.findIndex(e => e.id === id);
    this.courses.splice(index, 1);
    console.log(this.courses);
  }
}
