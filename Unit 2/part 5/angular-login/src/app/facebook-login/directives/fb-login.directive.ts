import { Directive, EventEmitter, Output, Input, ElementRef, HostListener } from '@angular/core';
import { LoadFbApiService } from '../services/load-fb-api.service';

@Directive({
  selector: '[alFbLogin]'
})
export class FbLoginDirective {
  @Output() loginOk = new EventEmitter<FB.LoginStatusResponse>();
  @Output() loginError = new EventEmitter<string>();
  @Output() loadingEnd = new EventEmitter<void>();
  @Input() scopes: string[];

  constructor(private el: ElementRef, private loadService: LoadFbApiService) {
    loadService.loadApi().subscribe(
      () => this.loadingEnd.emit()
    );
  }

  @HostListener ('click') onClick() {
    this.loadService.login(this.scopes.join(',')).subscribe(
      resp => this.loginOk.emit(resp),
      error => this.loginError.emit('Error with Facebook login!')
    );
  }
}
