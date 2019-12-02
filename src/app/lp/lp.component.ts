import { Component, OnInit, Input } from "@angular/core";
import { LpService } from "../services/lp.service";
import { DropService } from "../services/drop.service";
import { Group } from "../models/Group";
import { Level } from "../models/Level";

@Component({
  selector: "app-lp",
  templateUrl: "./lp.component.html",
  styleUrls: ["./lp.component.css"]
})
export class LpComponent implements OnInit {
  @Input() group: string;

  groupData: Group;

  plist: Array<Level>;

  constructor(private lpService: LpService) {}

  ngOnInit() {
    this.lpService.getByGroup(this.group).subscribe(data => {
      this.plist = data.levels;
      this.groupData = data;
      this.generateIds("pDList-");
    });
  }

  private generateIds(keyword: string) {
    if (!Group.ids) {
      Group.ids = [];
    }
    for (const level of this.groupData.levels) {
      Group.ids.push(keyword + this.groupData.id + level.number.toString());
    }
  }
}
