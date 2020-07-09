import { Platform } from './../models/platform.model';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  private readonly apiUrl = environment.baseURL + '/plataformas';

  constructor(private http: HttpClient) { }

  public getPlatforms(): Observable<Platform[]> {
    return this.http.get<Platform[]>(this.apiUrl)
      .pipe(
        map(data => data['plataformas']),
        tap(data => console.log('DATA: ', data)),
      );
  }

  public setSelectPlatform(platform: Platform): void {
    sessionStorage.setItem('@WoozaChallenge/platform', JSON.stringify(platform));
  }

  public getSelectPlatform(): Platform {
    return JSON.parse(sessionStorage.getItem('@WoozaChallenge/platform'));
  }
}
