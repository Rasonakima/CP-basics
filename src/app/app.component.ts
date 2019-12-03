import { Component, OnInit } from "@angular/core";
import { DropService } from "./services/drop.service";
import { Group } from "./models/Group";
import { Level } from "./models/Level";
import { first } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "CP-basics";

  ids: string[];
  canDelete: boolean = false;

  constructor(private dropService: DropService) {}

  ngOnInit() {
    this.dropService.canDelete().subscribe(data => {
      this.canDelete = data;
    });
  }

  onDrop(event) {
    this.dropService
      .drop(event, undefined)
      .pipe(first())
      .subscribe();
  }
}
