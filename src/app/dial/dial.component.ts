import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dial',
  templateUrl: './dial.component.html',
  styleUrls: ['./dial.component.scss'],
})
export class DialComponent implements AfterViewInit {
  display: boolean = false;

  ctrl = new FormControl(true);
  ctr = true;
  @Input() config;

  ngAfterViewInit() {
    console.log(this.config);
    /*     this.ctrl.valueChanges.subscribe(d => console.log('kkk', d)); */
  }

  showDialog() {
    this.display = true;
  }

  kk() {
    console.log(this.ctr, this.ctrl.value);
  }

  onSwitchChange(e) {
    console.log(e);
  }
}
