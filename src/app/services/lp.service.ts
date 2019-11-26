import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Group } from "../cl/models/Group";

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
    return this.http.get(this.GROUP_API + "/" + groupName);
  }

  public add(pl: any): Observable<any> {
    return this.http.post(this.GROUP_API, pl);
  }

  public update(pl: Group): Observable<any> {
    return this.http.patch(this.GROUP_API + "/" + pl.id, pl);
  }
}
