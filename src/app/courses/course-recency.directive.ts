import { Directive, Input, ElementRef, OnInit } from '@angular/core';

const CONSTANTS = {
  outdateMS: 14 * 24 * 60 * 60 * 1000, // 2 weeks in ms
  freshColor: 'green',
  futureColor: 'blue',
};

@Directive({
  selector: '[appCourseRecency]',
})
export class CourseRecencyDirective implements OnInit {
  @Input('appCourseRecency') courseRecency: string;
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.maybePaintBorder(this.courseRecency);
  }

  maybePaintBorder(date: string): void {
    const dateMS: number = new Date(date).getTime();
    const now: number = Date.now();
    const timeAgo: number = now - dateMS;
    console.log(timeAgo, timeAgo < 0);

    if (timeAgo < CONSTANTS.outdateMS && timeAgo >= 0) {
      this.el.nativeElement.style.borderColor = CONSTANTS.freshColor;
    } else if (timeAgo < 0) {
      this.el.nativeElement.style.borderColor = CONSTANTS.futureColor;
    }
  }
}