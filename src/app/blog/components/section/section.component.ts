import { Component, OnInit } from "@angular/core";
import { Item, MediumFeed } from "medium-stories-fetcher";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { BlogService } from "../../services/blog.service";

@Component({
  selector: "app-blog-section",
  templateUrl: "./section.component.html",
  styleUrls: ["./section.component.scss"],
})
export class SectionComponent implements OnInit {
  public posts: Observable<Item[]>;

  constructor(private blogService: BlogService) {}

  public ngOnInit(): void {
    this.posts = this.blogService.getPosts().pipe(map((feed) => feed.items));
  }
}
