import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FbLoginDirective } from './directives/fb-login.directive';
import { FBConfig, FB_CONFIG } from './facebook-login.config';


@NgModule({
  declarations: [FbLoginDirective],
  imports: [
    CommonModule
  ],
  exports: [FbLoginDirective]
})
export class FacebookLoginModule {
  static forRoot(fbConfig: FBConfig): ModuleWithProviders {
    return {
      ngModule: FacebookLoginModule,
      providers: [
        {provide: FB_CONFIG, useValue: fbConfig}
      ]
    }
  }
}
