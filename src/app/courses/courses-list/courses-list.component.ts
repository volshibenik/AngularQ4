import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseModel } from 'src/app/core/models/course.model';
import { CoursesService } from 'src/app/courses.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit, OnDestroy {
  items: CourseModel[] = [];
  compact = true;
  shown: 'native' | 'hover' | 'always' = 'native';
  private subsGet: Subscription;
  private subsDelete: Subscription;
  private subsSearch: Subscription;

  constructor(private coursesService: CoursesService) {}
  ngOnInit() {
    this.getCourses();
  }

  ngOnDestroy() {
    console.log('onDestroy');
    this.subsGet.unsubscribe();
    this.subsDelete && this.subsDelete.unsubscribe();
    this.subsSearch && this.subsSearch.unsubscribe();
  }

  getCourses(): void {
    this.subsGet = this.coursesService
      .getCourses()
      .subscribe(d => (this.items = d));
  }

  loadMore(): void {
    console.log('will load additional elements');
  }

  onSearch(searchTerm: string): void {
    this.subsSearch = this.coursesService
      .searchCourse(searchTerm)
      .subscribe(d => (this.items = d));
    // will load all items if true for now
  }

  onDelete(id: string): void {
    const confirmDelete = confirm(`r u sure 'bout deletin this?`);
    if (confirmDelete) {
      this.subsDelete = this.coursesService
        .deleteCourse(id)
        .subscribe(d => (this.items = d));
    }
  }
}
