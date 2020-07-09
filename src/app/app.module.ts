import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ChallengeModule } from './challenge/challenge.module';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from "ngx-progressbar/http";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    AppRoutingModule,
    NgProgressModule.withConfig({ // enable the spinner on every request in application
      color: 'gold'
    }),
    NgProgressHttpModule,
    ChallengeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
