import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app-ng/app.module';
import { environment } from './environments/environment';

import './app/shared/shared.module.js';
import './app/shared/shows/shows.service.js';
import './app/shared/shows/shows.directive.js';
import './app/core/core.module.js';
import './app/core/navbar/navbar.directive.js';
import './app/index.module.js';
import './app/favorite-shows/favorite-shows.controller.js';
import './app/all-shows/all-shows.controller.js';
import './app/index.run.js';
import './app/index.route.js';
import './app/index.config.js';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
