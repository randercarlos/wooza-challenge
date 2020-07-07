import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformsComponent } from './platforms/platforms.component';
import { PlansComponent } from './plans/plans.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';



@NgModule({
  declarations: [PlatformsComponent, PlansComponent, PersonalDataComponent],
  imports: [
    CommonModule
  ]
})
export class ChallengeModule { }
