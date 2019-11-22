import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterName"
})
export class FilterNamePipe implements PipeTransform {
  transform(value: Array<any>, name?: string): any {
    if (value) {
      return value.filter(element => {
        return element.name.toLowerCase().includes(name.toLowerCase());
      });
    }
  }
}
