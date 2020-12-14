import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { from } from 'rxjs';
import { TimeTransformPipe } from './timer/time-transform.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TimeTransformPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
