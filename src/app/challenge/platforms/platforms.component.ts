import { Platform } from './../models/platform.model';
import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../services/platform.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.css']
})
export class PlatformsComponent implements OnInit {

  platforms: Observable<Platform[]>;

  constructor(private platformService: PlatformService, private router: Router) { }

  ngOnInit(): void {
    this.platforms = this.platformService.getPlatforms();
  }

  selectPlatform(platform: Platform): void {
    this.platformService.setSelectPlatform(platform);
    console.log(platform.sku);
    this.router.navigateByUrl('/planos');
  }

}
