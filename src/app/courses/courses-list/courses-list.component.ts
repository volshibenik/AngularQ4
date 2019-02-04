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
  searchTerm: string;

  constructor(private coursesService: CoursesService) {}
  private subs: Subscription;
  ngOnInit() {
    this.getCourses();
  }

  ngOnDestroy() {
    console.log('onDestroy');
    this.subs.unsubscribe();
  }

  getCourses(): void {
    //    this.items = this.coursesService.getList();
    this.subs = this.coursesService
      .getCourses()
      .subscribe(d => (this.items = d));
  }

  loadMore(): void {
    console.log('will load additional elements');
    console.log(this.items, this.coursesService.getList());
  }

  onSearch(searchTerm: string): void {
    /*     this.getCourses();
    console.log('bef', this.items);
    this.items = new SearchPipe().transform(this.items, searchTerm);
    console.log('after', this.items);
    console.log('serv', this.coursesService.getList()); */
    this.searchTerm = searchTerm;
  }

  onDelete(id: number): void {
    const confirmDelete = confirm(`r u sure 'bout deletin this?`);
    if (confirmDelete) {
      this.items = this.coursesService.removeItem(id);
      console.log('delete in list', this.items);
    }
  }
}
