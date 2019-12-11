import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleLoginDirective } from './directives/google-login.directive';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ID_CLIENT } from './google-login.config';



@NgModule({
  declarations: [GoogleLoginDirective],
  imports: [
    CommonModule
  ],
  exports: [GoogleLoginDirective]
})
export class GoogleLoginModule {
  static forRoot(idClient: string): ModuleWithProviders {
    return {
      ngModule: GoogleLoginModule,
      providers: [
        { provide: ID_CLIENT, useValue: idClient}
      ]
    };
  }
}
