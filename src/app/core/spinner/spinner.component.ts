import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpinnerService } from 'src/app/spinner.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit, OnDestroy {
  show = false;
  private subs: Subscription;

  constructor(private spinner: SpinnerService) {}

  ngOnInit() {
    this.subs = this.spinner.state.subscribe(state => (this.show = state));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
