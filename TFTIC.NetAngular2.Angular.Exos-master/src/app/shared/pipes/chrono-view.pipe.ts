import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chronoView'
})
export class ChronoViewPipe implements PipeTransform {

  transform(value: number): string {
    let min = this.getMinute(value);
    let sec = value % 60;
    return `${(min< 10)?'0'+min : min} minutes ${(sec< 10)?'0'+sec : sec} secondes`;
  }

  private getMinute(value: number):number{
    return Math.floor(value / 60);
  }

}
