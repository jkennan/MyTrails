import { Component, OnInit } from '@angular/core';
import { TrailService } from '../trail-service/trail.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _trailService: TrailService
  ) { }

  ngOnInit() {
  }

}
