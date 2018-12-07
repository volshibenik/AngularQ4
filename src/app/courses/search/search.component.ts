import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  private value = 'start typing...';

  constructor() {}

  ngOnInit() {}

  search(): void {
    console.log(this.value);
  }
}
