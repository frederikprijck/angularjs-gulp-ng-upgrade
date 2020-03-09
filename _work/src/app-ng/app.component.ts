import { Component, ElementRef, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'base-ng';
  constructor(
    private elementRef: ElementRef,
    @Inject('$compile') private $compile,
    @Inject('$rootScope') private $rootScope,
  ) {}

  ngOnInit() {
    this.$compile(this.elementRef.nativeElement.querySelector('[ng-view]'))(this.$rootScope);
  }
}
