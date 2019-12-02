import { Directive, Input, ElementRef, HostListener, HostBinding, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[adSetColor]'
})
export class SetColorDirective implements OnInit, OnChanges {
  @Input() color: string;

  @HostBinding('style.background-color') bgColor;

  constructor() {}

  ngOnInit(): void {
    this.bgColor = this.color;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.bgColor = changes.color.currentValue;
  }

}
