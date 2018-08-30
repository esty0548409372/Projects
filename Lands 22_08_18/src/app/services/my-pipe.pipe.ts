import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(listCountries: any[], input: string): any {
    if (!listCountries) {
      return listCountries;
    }
    return listCountries.filter(country => country.name.includes(input)||country.capital.includes(input));
  }




}
