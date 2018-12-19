import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CourseModel } from 'src/app/core/models/course.model';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss'],
})
export class CoursesItemComponent implements OnInit {
  @Input() courseEntity: CourseModel;
  @Output() onDelete = new EventEmitter<number>();

  ngOnInit() {
    console.log(this.courseEntity.creationDate);
  }

  delete(id: number): void {
    this.onDelete.emit(id);
  }
}
