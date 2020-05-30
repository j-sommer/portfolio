import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import API from "@aws-amplify/api";

import { AppModule } from "./app/app.module";
import amplifyConfig from "./aws-exports";
import { environment } from "./environments/environment";

API.configure(amplifyConfig);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
