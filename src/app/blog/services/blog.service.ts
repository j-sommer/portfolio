import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MediumFeed } from "medium-stories-fetcher";
import { Observable } from "rxjs";

@Injectable()
export class BlogService {
  private readonly apiBaseUrl =
    "https://lr9q2wpoil.execute-api.eu-west-1.amazonaws.com/master/posts";

  constructor(private http: HttpClient) {}

  public getPosts(): Observable<MediumFeed> {
    return this.http.get<MediumFeed>(this.apiBaseUrl);
  }
}
