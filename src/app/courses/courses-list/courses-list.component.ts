import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseModel } from 'src/app/core/models/course.model';
import { CoursesService } from 'src/app/courses.service';

import { Subscription } from 'rxjs';
import { SpinnerService } from 'src/app/spinner.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit, OnDestroy {
  items: CourseModel[] = [];
  private subsGet: Subscription;
  private subsDelete: Subscription;
  private subsSearch: Subscription;

  constructor(
    private coursesService: CoursesService,
    private spinner: SpinnerService,
  ) {}
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
    //    this.items = this.coursesService.getList();
    this.spinner.maybeActivate(true);
    this.subsGet = this.coursesService.getCourses().subscribe(d => {
      this.items = d;
      this.spinner.maybeActivate(false);
    });
  }

  loadMore(): void {
    console.log('will load additional elements');
  }

  onSearch(searchTerm: string): void {
    this.spinner.maybeActivate(true);
    this.subsSearch = this.coursesService
      .searchCourse(searchTerm)
      .subscribe(d => {
        this.items = d;
        this.spinner.maybeActivate(false);
      });
    // will load all items if true for now
  }

  onDelete(id: string): void {
    const confirmDelete = confirm(`r u sure 'bout deletin this?`);
    if (confirmDelete) {
      this.spinner.maybeActivate(true);
      this.subsDelete = this.coursesService.deleteCourse(id).subscribe(d => {
        this.spinner.maybeActivate(false);
        this.items = d;
      });
    }
  }
}
