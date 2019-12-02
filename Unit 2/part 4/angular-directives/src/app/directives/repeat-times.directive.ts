import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adRepeatTimes]'
})
export class RepeatTimesDirective {
  @Input() set adRepeatTimes(num: number) {
    this.viewContainer.clear(); // Delete content

    for (let i = 1; i <= num; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i,
        pair: i % 2 === 0,
        odd: i % 2 === 1
      });
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

}
