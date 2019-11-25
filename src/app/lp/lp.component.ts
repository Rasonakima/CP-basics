import { Component, OnInit, Input } from "@angular/core";
import { LpService } from "../services/lp.service";

@Component({
  selector: "app-lp",
  templateUrl: "./lp.component.html",
  styleUrls: ["./lp.component.css"]
})
export class LpComponent implements OnInit {
  @Input() group: string;

  plist: Array<any>;

  constructor(private lpService: LpService) {}

  ngOnInit() {
    this.lpService.getByGroup(this.group).subscribe(data => {
      this.plist = data[0].level;
    });
  }
}
