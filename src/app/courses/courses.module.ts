import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesItemComponent } from './courses-list/courses-item/courses-item.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [CoursesListComponent, CoursesItemComponent, SearchComponent],
  imports: [CommonModule, FormsModule],
  exports: [CoursesListComponent, SearchComponent],
})
export class CoursesModule {}
