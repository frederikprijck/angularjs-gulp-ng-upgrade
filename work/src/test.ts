// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

import './app/shared/shared.module.js';
import './app/shared/shows/shows.service.js';
import './app/shared/shows/shows.directive.js';
import './app/core/core.module.js';
import './app/core/navbar/navbar.directive.js';
import './app/index.module.js';
import './app/all-shows/all-shows.controller.js';
import './app/index.run.js';
import './app/index.route.js';
import './app/index.config.js';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);


// Then we find all the tests.
const context2 = require.context('./', true, /\.spec\.js$/);
// And load the modules.
context2.keys().map(context2);
