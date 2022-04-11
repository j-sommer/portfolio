import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { BlogItem } from "../../models/blog-item.model";
import { BlogService } from "../../services/blog.service";

@Component({
  selector: "app-blog-section",
  templateUrl: "./section.component.html",
  styleUrls: ["./section.component.scss"],
})
export class SectionComponent implements OnInit {
  public posts: Observable<BlogItem[]>;

  constructor(private blogService: BlogService) {}

  public ngOnInit(): void {
    this.posts = this.blogService.getPosts();
  }
}
