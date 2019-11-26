import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ClService {
  public ELEMENT_API = "//localhost:3000/elements";

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any> {
    return this.http.get(this.ELEMENT_API);
  }

  public add(cl: any): Observable<any> {
    return this.http.post(this.ELEMENT_API, cl);
  }

  remove(cl: any) {
    return this.http.delete(this.ELEMENT_API + "/" + cl);
  }
}
