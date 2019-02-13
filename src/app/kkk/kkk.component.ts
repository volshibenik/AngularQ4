import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { filter, map, distinctUntilChanged } from 'rxjs/operators';

function fromE(el, event) {
  return new Observable(obr => {
    const eventH = ev => obr.next(ev);
    el.addEventListener(event, eventH, false);

    return {
      unsubscribe() {
        el.removeEventListener(event, eventH, false)
      }
    }
  })
}

@Component({
  selector: 'app-kkk',
  template: `
    <p class="lll" >
      kkk works!
    </p>
  `,
  styleUrls: ['./kkk.component.scss']
})
export class KkkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const pp = document.querySelector('.lll');
    fromE(pp, 'click').subscribe(e => console.log(e))

    const mappedNums = from([400, 400, 12, 12, 3, 1]).pipe(
      map(n => n + 2),
      distinctUntilChanged()
    )

    mappedNums.subscribe(e => console.log(e))

  }

}
