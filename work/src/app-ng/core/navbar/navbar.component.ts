import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'navbar'
})
// tslint:disable-next-line: directive-class-suffix
export class NavbarComponent extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('navbar', elementRef, injector);
  }
}
