import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CoursesService } from 'src/app/courses.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  data = '';
  constructor(private coursesService: CoursesService, private router: Router) {}
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const { url } = this.router;
        const lastPiece = url
          .split('/')
          .slice(-1)
          .join('');
        if (+lastPiece === +lastPiece) {
          // means it's number -> id
          this.data = this.coursesService.getItem(+lastPiece).title;
        } else {
          this.data = '';
        }
      }
    });
  }
}
