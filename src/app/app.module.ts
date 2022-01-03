import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { AmplifyAngularModule, AmplifyService } from "aws-amplify-angular";
import { ResolutionService } from "core/services/resolution-service/resolution.service";
import { ScrollService } from "core/services/scroll-service/scroll.service";
import { StickybitsModule } from "ngx-stickybits";

import { environment } from "../environments/environment";
import { AboutModule } from "./about/about.module";
import { AppComponent } from "./app.component";
import { ContactModule } from "./contact/contact.module";
import { CoreModule } from "./core/core.module";
import { HomeModule } from "./home/home.module";
import { ProjectsModule } from "./projects/projects.module";
import { RoutingModule } from "./routing/routing.module";
import { ScullyLibModule } from "@scullyio/ng-lib";
import { BlogModule } from "./blog/blog.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    ContactModule,
    AboutModule,
    ProjectsModule,
    HomeModule,
    BlogModule,
    RoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StickybitsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
    AmplifyAngularModule,
    ScullyLibModule,
  ],
  providers: [ScrollService, ResolutionService, AmplifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
