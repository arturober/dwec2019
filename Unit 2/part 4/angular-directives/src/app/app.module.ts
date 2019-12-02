import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SetColorDirective } from './directives/set-color.directive';
import { RepeatTimesDirective } from './directives/repeat-times.directive';

@NgModule({
  declarations: [
    AppComponent,
    SetColorDirective,
    RepeatTimesDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
