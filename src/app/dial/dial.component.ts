import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dial',
  templateUrl: './dial.component.html',
  styleUrls: ['./dial.component.scss'],
})
export class DialComponent implements AfterViewInit {
  display: boolean = false;

  @Input() config;

  ngAfterViewInit() {
    console.log(this.config);
  }

  showDialog() {
    this.display = true;
  }
}
