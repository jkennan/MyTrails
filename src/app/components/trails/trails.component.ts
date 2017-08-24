import { Component, OnInit } from '@angular/core';
import { Trail } from '../trail';
import { TrailService } from '../trail-service/trail.service';

@Component({
  selector: 'app-trails',
  templateUrl: './trails.component.html',
  styleUrls: ['./trails.component.css']
})
export class TrailsComponent implements OnInit {

  _trails: Trail[];
  
  constructor(
    private trailService: TrailService
  ) { }

  ngOnInit() {
    this.getTrails();
  }

  getTrails(): void {
    this.trailService.getAllTrails().then(trails => this._trails = trails);
  }

}
