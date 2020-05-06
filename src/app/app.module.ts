import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { StickybitsModule } from "ngx-stickybits";

import { environment } from "../environments/environment";
import { AboutModule } from "./about/about.module";
import { AppComponent } from "./app.component";
import { ContactModule } from "./contact/contact.module";
import { CoreModule } from "./core/core.module";
import { FooterModule } from "./footer/footer.module";
import { ProjectsModule } from "./projects/projects.module";
import { RoutingModule } from "./routing/routing.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    FooterModule,
    ContactModule,
    AboutModule,
    ProjectsModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
