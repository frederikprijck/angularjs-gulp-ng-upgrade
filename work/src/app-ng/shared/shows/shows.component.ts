import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'shows'
})
// tslint:disable-next-line: directive-class-suffix
export class ShowsComponent extends UpgradeComponent {
  @Input()
  shows: Array<any>;
  @Output()
  onUnfavorite: EventEmitter<any>;
  @Output()
  onRemove: EventEmitter<any>;
  constructor(elementRef: ElementRef, injector: Injector) {
    super('shows', elementRef, injector);
  }
}
