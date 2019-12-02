import { Injectable } from "@angular/core";
import { CdkDragDrop, CdkDragExit } from "@angular/cdk/drag-drop";
import { ClService } from "./cl.service";
import { LpService } from "./lp.service";
import { Group } from "../models/Group";
import { Observable, forkJoin } from "rxjs";
import { stringify } from "querystring";

@Injectable({
  providedIn: "root"
})
export class DropService {
  private origin: boolean = true;
  private originData: any;
  private originGroup: Group;

  constructor(private lpService: LpService) {}

  public exit(data: any, group?: Group) {
    if (this.origin) {
      this.originData = data;
      this.originGroup = group;
      this.origin = false;
    }
  }

  public drop(
    event: CdkDragDrop<string[]>,
    data: any,
    group?: Group
  ): Observable<any[]> {
    this.origin = true;

    if (event.container == event.previousContainer) {
      data.content.splice(
        event.currentIndex,
        0,
        data.content.splice(event.previousIndex, 1)[0]
      );
      group.levels.splice(group.levels.indexOf(data), 1, data);
      return this.lpService.update(group);
    } else {
      let item = event.previousContainer.data[event.previousIndex];
      if (
        event.container.data.find(element => {
          return stringify(element) === stringify(item);
        })
      ) {
        return null;
      } else {
        if (group) {
          this.originData.content.splice(event.previousIndex, 1);
          this.originGroup.levels.splice(
            this.originGroup.levels.indexOf(this.originData),
            1,
            this.originData
          );

          data.content.splice(event.currentIndex, 0, item);
          group.levels.splice(group.levels.indexOf(data), 1, data);

          let originUpdate = this.lpService.update(this.originGroup);
          let update = this.lpService.update(group);

          return forkJoin([originUpdate, update]);
        }
      }
    }
  }
}
