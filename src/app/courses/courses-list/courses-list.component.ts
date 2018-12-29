import { Component, OnInit } from '@angular/core';
import { COURSES } from '../courses.mock';
import { CourseModel } from 'src/app/core/models/course.model';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  items: CourseModel[] = [];
  filteredItems: CourseModel[] = [];

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this.items = COURSES;
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
    console.log('will delete item ', id);
  }
}
