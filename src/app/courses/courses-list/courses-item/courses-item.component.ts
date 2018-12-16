import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnDestroy,
} from '@angular/core';
import { CourseModel } from 'src/app/core/models/course.model';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss'],
})
export class CoursesItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() courseEntity: CourseModel;
  @Output() onDelete = new EventEmitter<number>();

  ngOnInit() {
    console.log('onInit');
  }
  ngOnChanges() {
    console.log('onChanges');
  }
  ngOnDestroy() {
    console.log('onDestroy');
  }

  delete(id: number): void {
    this.onDelete.emit(id);
  }
}
