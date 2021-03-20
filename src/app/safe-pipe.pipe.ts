import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'safePipe'
})
export class SafePipePipe implements PipeTransform {

  constructor(private senitizer:DomSanitizer){}
  transform(url) {
    return this.senitizer.bypassSecurityTrustResourceUrl(url);
  }

}
