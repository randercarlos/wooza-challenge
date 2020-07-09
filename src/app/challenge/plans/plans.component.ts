import { Platform } from './../models/platform.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Plan } from '../models/plan.model';
import { PlatformService } from '../services/platform.service';
import { PlanService } from '../services/plan.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  plans: Observable<Plan[]>;
  selectedPlatform: Platform;

  constructor(private planService: PlanService, private platformService: PlatformService, private router: Router, ) { }

  ngOnInit(): void {
    this.selectedPlatform = this.platformService.getSelectPlatform();
    this.plans = this.planService.getPlansByPlatformId(this.selectedPlatform.sku);
  }

  selectPlan(plan: Plan): void {
    this.planService.setSelectPlan(plan);
    console.log(plan);
    this.router.navigateByUrl('/dados-pessoais');
  }

}
