import { Component, OnInit, Input } from "@angular/core";
import { DropService } from "../services/drop.service";
import { Group } from "../models/Group";
import { Level } from "../models/Level";
import { first } from "rxjs/operators";

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

  imgPlaceHolderURL = "https://via.placeholder.com/64";

  constructor(private dropService: DropService) {}

  ngOnInit() {
    this.ids = Group.ids;
  }

  onDrop(event) {
    this.dropService
      .drop(event, this.row, this.group)
      .pipe(first())
      .subscribe();
  }

  onExit() {
    this.dropService.exit(this.row, this.group);
  }
}
