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

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this.items = COURSES;
  }

  loadMore(): void {
    console.log('will load additional elements');
  }

  onSearch(searchTerm: string): void {
    this.items = new SearchPipe().transform(this.items, searchTerm);
  }

  onDelete(id: number): void {
    console.log('will delete item ', id);
  }
}
