/* import { Pipe, PipeTransform } from '@angular/core';
import { CourseModel } from '../core/models/course.model';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: CourseModel[], searchTerm: string): CourseModel[] {
    return searchTerm
      ? value.filter(el => el.title.includes(searchTerm))
      : value;
  }
}
 */
