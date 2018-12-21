import { Pipe, PipeTransform } from '@angular/core';
import { CourseModel } from '../core/models/course.model';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: CourseModel[]): CourseModel[] {
    return value.sort((a, b) => {
      return (a.creationDate > b.creationDate && -1) || 1;
    });
  }
}
