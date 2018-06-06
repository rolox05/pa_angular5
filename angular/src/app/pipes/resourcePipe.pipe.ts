import { PipeTransform, Pipe } from "@angular/core";

@Pipe({name: "resourcePipe"})
export class ResourcePipe implements PipeTransform {
  transform(value: string, entity: string): string {
    return value ? value.split(entity + "/")[1] : "";
  }
}