// Module imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule      } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { HttpModule    } from '@angular/http';

// Component imports
import { AppComponent  } from './components/app/app.component';
import { TrailsComponent } from './components/trails/trails.component';
import { TrailDetailComponent } from './components/trail-detail/trail-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TrailService } from './components/trail-service/trail.service';
import { AddTrailComponent } from './add-trail/add-trail.component';

@NgModule({
  declarations: [
    AppComponent,
    TrailsComponent,
    TrailDetailComponent,
    NavbarComponent,
    AddTrailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,

    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: TrailsComponent },
      { path: 'detail/:id', component: TrailDetailComponent }
    ])
  ],
  providers: [ TrailService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
