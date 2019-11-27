import { Component, OnInit } from "@angular/core";
import { ClService } from "../services/cl.service";
import { DropService } from "../services/drop.service";
import { Group } from "./models/Group";

@Component({
  selector: "app-cl",
  templateUrl: "./cl.component.html",
  styleUrls: ["./cl.component.css"]
})
export class ClComponent implements OnInit {
  clist: Array<any>;
  ids: string[];
  imgPlaceHolderURL = "https://via.placeholder.com/64";
  eName = "";

  constructor(private clService: ClService, private dropService: DropService) {}

  ngOnInit() {
    this.clService.getAll().subscribe(data => {
      this.clist = data;
      this.ids = Group.ids;
    });
  }

  onDrop(event) {
    this.dropService.drop(event, this.clist).subscribe();
  }
}
