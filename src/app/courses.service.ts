import { Injectable } from '@angular/core';
import { CourseModel } from './core/models/course.model';
import { COURSES } from './courses/courses.mock';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SpinnerService } from './spinner.service';
import { map } from 'rxjs/operators';

const serverUrl = 'http://localhost:3200';
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient, private spinner: SpinnerService) {}

  /* TODO private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`,
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  } */

  getCourses(start = '0', count = '4'): Observable<CourseModel[]> {
    this.spinner.maybeActivate(true);
    return this.http
      .get<CourseModel[]>(`${serverUrl}/courses`, {
        params: { start, count },
      })
      .pipe(
        map(v => {
          this.spinner.maybeActivate(false);
          return v;
        }),
      );
  }

  searchCourse(searchTerm: string): Observable<CourseModel[]> {
    this.spinner.maybeActivate(true);
    return this.http
      .get<CourseModel[]>(`${serverUrl}/search`, {
        params: { searchTerm },
      })
      .pipe(
        map(v => {
          this.spinner.maybeActivate(false);
          return v;
        }),
      );
  }

  deleteCourse(id: string) {
    this.spinner.maybeActivate(true);
    return this.http.post<CourseModel[]>(`${serverUrl}/delete`, { id }).pipe(
      map(v => {
        this.spinner.maybeActivate(false);
        return v;
      }),
    );
  }

  getItem(id: string) {
    this.spinner.maybeActivate(true);
    return this.http
      .get<CourseModel>(`${serverUrl}/course`, { params: { id } })
      .pipe(
        map(v => {
          this.spinner.maybeActivate(false);
          return v;
        }),
      );
  }

  addItem(course) {
    this.spinner.maybeActivate(true);
    return this.http.post<CourseModel[]>(`${serverUrl}/add`, { course }).pipe(
      map(v => {
        this.spinner.maybeActivate(false);
        return v;
      }),
    );
  }

  /*   updateItem(course: CourseModel) {
    const { id } = course;
    const index = this.courses.findIndex(e => e.id === id);
    const newCourses = this.courses.slice();
    newCourses[index] = course;
    return (this.courses = newCourses);
  }  */
}
