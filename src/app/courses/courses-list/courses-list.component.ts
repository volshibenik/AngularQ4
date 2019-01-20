import { Component, OnInit } from '@angular/core';

import { CourseModel } from 'src/app/core/models/course.model';
import { SearchPipe } from '../search.pipe';
import { CoursesService } from 'src/app/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  items: CourseModel[] = [];
  filteredItems: CourseModel[] = [];

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this.items = this.coursesService.getList();
    this.syncFiltered();
  }

  syncFiltered(): void {
    this.filteredItems = this.items.slice();
  }

  loadMore(): void {
    console.log('will load additional elements');
  }

  onSearch(searchTerm: string): void {
    this.syncFiltered();
    this.filteredItems = new SearchPipe().transform(
      this.filteredItems,
      searchTerm,
    );
  }

  onDelete(id: number): void {
    const confirmDelete = confirm(`Sure want to delete this?`);
    if (confirmDelete) {
      this.coursesService.removeItem(id);
      this.syncFiltered(); // ?
    }
  }
}
