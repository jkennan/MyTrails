import { Component } from '@angular/core';
import { TrailService } from '../trail-service/trail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ TrailService ]
})

export class AppComponent {
}
