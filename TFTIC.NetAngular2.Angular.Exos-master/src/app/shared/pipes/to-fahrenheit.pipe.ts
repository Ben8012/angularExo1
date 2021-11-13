import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFahrenheit'
})
export class ToFahrenheitPipe implements PipeTransform {

  transform(value: number, unite: string, symbol:boolean): string {
    let result = value;
    switch (unite) {
      case 'C':
        result = (value*9/5)+32;
        break;
      case 'K':
        result = (value-273.15)*9/5+32;
        break;
      default:
        result = value;
        break;
    }
    if(symbol){
      return `${result}°F`
    }
    return result.toString();
  }

}
