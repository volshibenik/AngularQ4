import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { CourseModel } from 'src/app/core/models/course.model';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss'],
})
export class CoursesItemComponent {
  @Input() courseEntity: CourseModel;
  @Output() onDelete = new EventEmitter<number>();

  delete(id: number): void {
    this.onDelete.emit(id);
  }
}
