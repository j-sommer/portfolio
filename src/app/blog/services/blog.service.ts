import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MediumFeed } from "medium-stories-fetcher";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { BlogItem } from "../models/blog-item.model";

@Injectable()
export class BlogService {
  private readonly apiBaseUrl =
    "https://lr9q2wpoil.execute-api.eu-west-1.amazonaws.com/master/posts";

  private parser = new DOMParser();

  constructor(private http: HttpClient) {}

  public getPosts(): Observable<BlogItem[]> {
    return this.http.get<MediumFeed>(this.apiBaseUrl).pipe(
      map((mediumFeed) => mediumFeed.items),
      map((items) => {
        return items.map((item) => {
          const itemDOM = this.parser.parseFromString(
            (item as any).content,
            "text/html"
          );

          const imageElem = itemDOM.getElementsByTagName("img").item(0)
            .outerHTML;

          const paragraphElements = itemDOM.getElementsByTagName("p");
          let contentPreview;

          const asArray = Array.from(paragraphElements);

          if (paragraphElements.length > 2) {
            contentPreview = asArray
              .slice(0, 2)
              .map((item) => item.outerHTML)
              .join();
          } else {
            contentPreview = paragraphElements.item(0).outerHTML;
          }

          return {
            imageElem,
            title: item.title,
            link: item.link,
            contentPreview,
          };
        });
      })
    );
  }
}
