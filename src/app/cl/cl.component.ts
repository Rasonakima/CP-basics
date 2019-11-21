import { Component, OnInit } from "@angular/core";
import { ClService } from "../services/cl.service";

@Component({
  selector: "app-cl",
  templateUrl: "./cl.component.html",
  styleUrls: ["./cl.component.css"]
})
export class ClComponent implements OnInit {
  clist: Array<any>;

  constructor(private clService: ClService) {}

  ngOnInit() {
    this.clService.getAll().subscribe(data => {
      this.clist = data;
    });
  }
}
