import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { TrailService } from '../trail-service/trail.service';
import { Trail        } from '../trail';

@Component({
  selector: 'app-trail-detail',
  templateUrl: './trail-detail.component.html',
  styleUrls: ['./trail-detail.component.css']
})
export class TrailDetailComponent implements OnInit {

  _trail: Trail;

  constructor(
    private _trailService: TrailService,
    private _route: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit() {
    this._route.paramMap.switchMap((params: ParamMap) => this._trailService.getTrail(+params.get('id')))
                        .subscribe(trail => this._trail = trail);
  }

  log() {
    console.log(this._trail);
  }

}
