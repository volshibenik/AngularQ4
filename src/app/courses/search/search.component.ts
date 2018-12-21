import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() onSearch = new EventEmitter<string>();
  value = 'initial';

  search(): void {
    this.onSearch.emit(this.value);
  }
}
