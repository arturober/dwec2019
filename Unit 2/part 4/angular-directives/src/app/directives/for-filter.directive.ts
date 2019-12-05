import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adForFilter]'
})
export class ForFilterDirective implements OnChanges {
  // tslint:disable-next-line: no-input-rename
  @Input('adForFilterFrom') array: any[];

  // tslint:disable-next-line: no-input-rename
  @Input('adForFilterBy') filter;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.viewContainer.clear();
    this.array.filter(this.filter).forEach(elem => {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: elem
      });
    });
  }
}
