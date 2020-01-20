import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (typeof value !== "string") {
      return value;
    }

    return value.split(/(?=[A-Z])/).join(' ');
  }

}
