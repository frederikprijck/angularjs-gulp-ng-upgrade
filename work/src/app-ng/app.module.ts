import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { AppComponent } from './app.component';
import { UpgradeModule } from '@angular/upgrade/static';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    CoreModule
  ],
  providers: [
    { provide: '$scope', useExisting: '$rootScope' }
  ],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap(appRef: ApplicationRef) {
    this.upgrade.bootstrap(document.body, ['thisDotNgUpgrade']);
    appRef.bootstrap(AppComponent);
  }
}
