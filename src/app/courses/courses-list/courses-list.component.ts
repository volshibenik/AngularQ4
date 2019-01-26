import { Component, OnInit } from '@angular/core';

import { CourseModel } from 'src/app/core/models/course.model';
import { SearchPipe } from '../search.pipe';
import { CoursesService } from 'src/app/courses.service';
const kk = {
  id: 10,
  title: 'video Course 1',
  creationDate: '2017-12-18T20:02:38',
  duration: '128min',
  topRated: true,
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor
  fugit doloremque modi, rerum dolore temporibus quam ducimus dolorem fuga?`,
};
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
    const confirmDelete = confirm(`r u sure 'bout deletin this?`);
    if (confirmDelete) {
      this.coursesService.removeItem(id);
      this.syncFiltered(); // ?
    }
  }
}
