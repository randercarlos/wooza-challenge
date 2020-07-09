import { ChallengeRoutingModule } from './challenge-routing.module';
import { NgModule } from '@angular/core';
import { PlatformsComponent } from './platforms/platforms.component';
import { PlansComponent } from './plans/plans.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PlatformsComponent,
    PlansComponent,
    PersonalDataComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    ChallengeRoutingModule,
  ]
})
export class ChallengeModule { }
