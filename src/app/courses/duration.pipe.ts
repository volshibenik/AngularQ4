import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: string): string {
    const totalMinutes = +value.slice(0, -3);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes - hours * 60;
    return hours ? `${hours}h ${minutes}min` : `${minutes}min`;
  }
}
