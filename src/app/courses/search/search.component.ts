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
  @ViewChild('inputRef') input: ElementRef;
  /*   @ViewChild('firstNameInput') nameInputRef: ElementRef; */
  value = 'initial';
  private subs: Subscription;

  ngOnInit() {
    console.log('tt', this.input);
    this.subs = fromEvent(this.input.nativeElement, 'input')
      .pipe(
        debounceTime(250),
        map(e => e.target.value),
        filter(val => val.length > 0),
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
