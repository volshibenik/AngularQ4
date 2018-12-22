import { DurationPipe } from './duration.pipe';
import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

const VALUES = {
  INPUT: '100min',
  OUTPUT: '1h 40min',
};

@Component({
  template: `
    <div>{{ value | duration }}</div>
  `,
})
class TestComponent {
  value: string = VALUES.INPUT;
}

describe('DurationPipe', () => {
  const pipe = new DurationPipe();

  it('should transform "100min" to "1h 40min"', () => {
    expect(pipe.transform(VALUES.INPUT)).toBe(VALUES.OUTPUT);
  });

  it('should convert data inside DOM', () => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, DurationPipe],
    });
    const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(
      TestComponent,
    );
    const root = fixture.nativeElement;
    fixture.detectChanges();

    const div = root.querySelector('div');

    expect(div.textContent).toBe(VALUES.OUTPUT);
  });
});
