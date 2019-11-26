import { Injectable } from "@angular/core";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { ClService } from "./cl.service";
import { LpService } from "./lp.service";
import { Level } from "../cl/models/Level";
import { Group } from "../cl/models/Group";

@Injectable({
  providedIn: "root"
})
export class DropService {
  constructor(private clService: ClService, private lpService: LpService) {}

  public drop(event: CdkDragDrop<string[]>, data: any, group?: Group) {
    if (event.container == event.previousContainer) {
    } else {
      let item = event.previousContainer.data[event.previousIndex];

      if (group) {
        data.content.splice(event.currentIndex, 0, item);
        group.levels.splice(group.levels.indexOf(data), 1, data);
        this.lpService.update(group).subscribe(() => {});
      }
    }
  }
}
