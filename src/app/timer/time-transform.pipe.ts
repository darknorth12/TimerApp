import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeTransform'
})
export class TimeTransformPipe implements PipeTransform {

  transform(value: number): string {
    let  temp = value * 60;
    const hours = Math.floor((temp/3600));
    const minutes: number = Math.floor((temp/ 60)%60);
    const seconds=Math.floor(temp % 3600 % 60);
    return this.pad(hours) + ':' + this.pad(minutes) + ':' + this.pad(seconds);
  }

  pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}
}