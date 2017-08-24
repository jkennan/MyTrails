import { BrowserModule } from '@angular/platform-browser';
import { NgModule      } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { AppComponent  } from './components/app/app.component';
import { TrailsComponent } from './components/trails/trails.component';
import { TrailDetailComponent } from './components/trail-detail/trail-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TrailsComponent,
    TrailDetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: TrailsComponent },
      { path: 'detail/:id', component: TrailDetailComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
