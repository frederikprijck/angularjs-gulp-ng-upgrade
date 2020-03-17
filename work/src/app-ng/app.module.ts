import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ApplicationRef } from '@angular/core';
import { AppComponent } from './app.component';
import { UpgradeModule } from '@angular/upgrade/static';
import { CoreModule } from './core/core.module';
import {
  RouterModule,
  Routes,
  UrlTree,
  UrlHandlingStrategy
} from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { FavoriteShowsComponent } from './favorite-shows/favorite-shows.component';
import { showsServiceProvider } from './appjs-providers';
import { ToastrModule } from 'ngx-toastr';
import { setUpLocationSync } from '@angular/router/upgrade';

const routes: Routes = [
  { path: 'favorite-shows', component: FavoriteShowsComponent }
];

class CustomUrlHandlingStrategy extends UrlHandlingStrategy {
  extract(url: UrlTree): UrlTree {
    return url;
  }
  merge(newUrlPart: UrlTree, rawUrl: UrlTree): UrlTree {
    return newUrlPart;
  }
  shouldProcessUrl(url: UrlTree): boolean {
    return /^\/(?:$|favorite-shows)/i.test(url.toString());
  }
}

@NgModule({
  declarations: [AppComponent, FavoriteShowsComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    UpgradeModule,
    ToastrModule.forRoot({ progressBar: true }),
    CoreModule,
    SharedModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    { provide: UrlHandlingStrategy, useClass: CustomUrlHandlingStrategy },
    { provide: '$scope', useExisting: '$rootScope' },
    showsServiceProvider
  ],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap(appRef: ApplicationRef) {
    this.upgrade.bootstrap(document.body, ['thisDotNgUpgrade']);
    appRef.bootstrap(AppComponent);
    setUpLocationSync(this.upgrade, 'hash');
  }
}
