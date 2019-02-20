import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/spinner.service';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="spinner" [ngClass]="{ on: state$ | async }">
      <div class="spinner__logo"></div>
    </div>
  `,
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  state$: Observable<boolean> = this.spinner.state.pipe(startWith(false));

  constructor(private spinner: SpinnerService) {}
}
