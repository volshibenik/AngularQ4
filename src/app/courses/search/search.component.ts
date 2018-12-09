import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  private value = 'initial search value...';

  constructor() {}

  ngOnInit() {}

  search(): void {
    console.log('searching for: ', this.value);
  }
}
