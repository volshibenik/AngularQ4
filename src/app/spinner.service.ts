import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  state = new EventEmitter<boolean>();

  maybeActivate(bool) {
    this.state.emit(bool);
  }
}
