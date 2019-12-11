import {
  Directive,
  Output,
  EventEmitter,
  ElementRef,
  OnInit,
  NgZone
} from "@angular/core";
import { LoadGoogleApiService } from "../services/load-google-api.service";

@Directive({
  selector: "[alGoogleLogin]"
})
export class GoogleLoginDirective implements OnInit {
  @Output() loginOk = new EventEmitter<gapi.auth2.GoogleUser>();
  @Output() loginError = new EventEmitter<string>();
  @Output() loadingEnd = new EventEmitter<void>();

  constructor(
    private el: ElementRef,
    private loadService: LoadGoogleApiService,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.loadService.getAuthApi().subscribe(
      gapi => {
        gapi.attachClickHandler(this.el.nativeElement, {},
          user => {
            this.ngZone.run(() => this.loginOk.emit(user));
          },
          error => this.ngZone.run(() => this.loginError.emit(error)));
        this.loadingEnd.emit();
      },
      error => this.loginError.emit(error)
    );
  }
}
