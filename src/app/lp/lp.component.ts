import { Component, OnInit, Input } from "@angular/core";
import { LpService } from "../services/lp.service";
import { DropService } from "../services/drop.service";
import { Group } from "../cl/models/Group";
import { Level } from "../cl/models/Level";

@Component({
  selector: "app-lp",
  templateUrl: "./lp.component.html",
  styleUrls: ["./lp.component.css"]
})
export class LpComponent implements OnInit {
  @Input() group: string;

  groupData: Group;

  plist: Array<Level>;

  constructor(private lpService: LpService, private dropService: DropService) {}

  ngOnInit() {
    this.lpService.getByGroup(this.group).subscribe(data => {
      this.plist = data.levels;
      this.groupData = data;
    });
  }

  onDrop(event) {
    this.dropService.drop(event, this.plist);
  }
}
