import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges {
  delete;

  readonly sidebarConfig = {
    title: 'Add New Widget',
    close: () => this.close(this),
    buttons: [
      {
        title: 'Save Widget',
        iconClassName: '',
        display: () => true,
        className: 'custom-button blue',
        click: () => this.onSave(this),
      },
      {
        title: 'Delete Widget',
        iconClassName: '',
        display: () => true,
        className: 'custom-button',
        click: () => this.delete.emit('this.widget.id'),
      },
    ],
  };

  close(a) {
    console.log('clo', a);
  }

  onSave(a) {
    console.log('save', a);
  }
  ngOnInit() {}
  ngOnChanges() {
    console.log('kk');
  }
}
