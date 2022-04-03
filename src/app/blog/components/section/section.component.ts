import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { BlogService } from "../../services/blog.service";

export interface BlogItem {
  title: string;
  imageElem: string;
  descriptionElem: string;
  linkElem: string;
}

@Component({
  selector: "app-blog-section",
  templateUrl: "./section.component.html",
  styleUrls: ["./section.component.scss"],
})
export class SectionComponent implements OnInit {
  public posts: Observable<BlogItem[]>;

  private parser = new DOMParser();

  constructor(private blogService: BlogService) {}

  public ngOnInit(): void {
    this.posts = this.blogService
      .getPosts()
      .pipe(map((feed) => feed.items))
      .pipe(
        map((items) => {
          return items.map((item) => {
            const itemDOM = this.parser.parseFromString(
              item.description,
              "text/html"
            );

            const imageElem = itemDOM
              .getElementsByClassName("medium-feed-image")
              .item(0).innerHTML;
            const descriptionElem = itemDOM
              .getElementsByClassName("medium-feed-snippet")
              .item(0).innerHTML;
            const linkElem = itemDOM
              .getElementsByClassName("medium-feed-link")
              .item(0).innerHTML;

            return {
              title: item.title,
              imageElem,
              descriptionElem,
              linkElem,
            } as BlogItem;
          });
        })
      );
  }
}
