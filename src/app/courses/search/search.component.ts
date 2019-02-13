import { Component, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnChanges {
  @Output() onSearch = new EventEmitter<string>();
  value = 'initial';

  ngOnChanges() {
    console.log('change!!!!');

  }
  kk() {
    console.log('hahah');

  }

  search(): void {
    this.onSearch.emit(this.value);
  }
}
