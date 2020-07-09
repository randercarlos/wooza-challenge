import { PersonalDataComponent } from './personal-data/personal-data.component';
import { PlansComponent } from './plans/plans.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'plataformas', pathMatch: 'full', component: PlatformsComponent },
  { path: 'planos', pathMatch: 'full', component: PlansComponent },
  { path: 'dados-pessoais', pathMatch: 'full', component: PersonalDataComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengeRoutingModule { }
