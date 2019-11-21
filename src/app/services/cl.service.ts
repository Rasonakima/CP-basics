import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ClService {
  public API = "//localhost:3000";
  public ELEMENT_API = this.API + "/elements";

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any> {
    return this.http.get(this.ELEMENT_API);
  }
}
