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
  searchTerm: string;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this.items = this.coursesService.getList();
  }

  loadMore(): void {
    console.log('will load additional elements');
    // this.coursesService.getList()[0] = { title: 'kk' };
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
