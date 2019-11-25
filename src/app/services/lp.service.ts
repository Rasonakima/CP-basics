import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LpService {
  public GROUP_API = "//localhost:3000/groups";

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any> {
    return this.http.get(this.GROUP_API);
  }

  public getByGroup(groupName: string): Observable<any> {
    return this.http.get(this.GROUP_API + "?name=" + groupName);
  }
}
