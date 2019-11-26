import { Component, OnInit, Input } from "@angular/core";
import { DropService } from "../services/drop.service";
import { Group } from "../cl/models/Group";
import { Level } from "../cl/models/Level";

@Component({
  selector: "app-lp-row",
  templateUrl: "./lp-row.component.html",
  styleUrls: ["./lp-row.component.css"]
})
export class LpRowComponent implements OnInit {
  @Input() group: Group;

  @Input() row: Level;

  @Input() theme: string;

  ids: string[];

  constructor(private dropService: DropService) {}

  ngOnInit() {
    this.ids = Group.ids;
  }

  onDrop(event) {
    this.dropService.drop(event, this.row, this.group);
  }
}
