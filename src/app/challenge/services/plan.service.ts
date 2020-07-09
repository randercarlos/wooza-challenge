import { Plan } from '../models/plan.model';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  private readonly apiUrl = environment.baseURL + '/planos';

  constructor(private http: HttpClient) { }

  public getPlansByPlatformId(skuPlatform: string): Observable<Plan[]> {

    return this.http.get<Plan[]>(this.apiUrl + '/' + skuPlatform)
      .pipe(
        map(data => data['planos']),
        map(data => data.filter(item => item.ativo)),
      );
  }

  public setSelectPlan(plan: Plan): void {
    sessionStorage.setItem('@WoozaChallenge/plan', JSON.stringify(plan));
  }

  public getSelectPlan(): Plan {
    return JSON.parse(sessionStorage.getItem('@WoozaChallenge/plan'));
  }

  public clearSelectPlan(): void {
    sessionStorage.removeItem('@WoozaChallenge/plan');
  }
}
