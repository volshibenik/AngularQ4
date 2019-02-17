import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Observable, fromEvent, Subscription } from 'rxjs';
import { debounceTime, map, filter } from 'rxjs/operators';

function eventSource(el, event): Observable<Event> {
  return new Observable(obr => {
    const handler = e => obr.next(e);
    el.addEventListener(event, handler);
    return {
      unsubscribe() {
        el.removeEventListener(event, handler);
      },
    };
  });
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() onSearch = new EventEmitter<string>();
  @ViewChild('inputRef') input: ElementRef<HTMLInputElement>;
  value = 'initial';
  private subs: Subscription;

  ngOnInit() {
    this.subs = fromEvent(this.input.nativeElement, 'input')
      .pipe(
        debounceTime(250),
        map((e: Event) => e.target),
        map((target: HTMLInputElement) => target.value),
        filter(val => val.length > 3),
      )
      .subscribe(value => {
        console.log(value);
        this.onSearch.emit(value);
      });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
