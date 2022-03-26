import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  //Mr. Thanh
  //Mr. Thanh Duong
  // transform(first: string, second:string): string {
  //   return `${second} ${first}`;
  // }

  transform(first: string, second:string, third:string): string {
    return `${second} ${first} ${third}`;
  }

}
