import { Injectable } from '@angular/core';
import { Trail      } from '../trail';
import { TRAILS     } from './mock-data';
import { Http       } from '@angular/http';
import { Headers    } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TrailService {


  constructor(
    private _http: Http
  ) { }

  getAllTrails(): Promise<Trail[]> {
    return this._http.get('http://localhost:3000/api/alltrails')
                     .toPromise()
                     .then(response => 
                       response.json().trails as Trail[]
                     )
                     .catch(this.handleError);
  }

  getTrail(id: string): Promise<Trail> {
    return this._http.get('http://localhost:3000/api/trails/' + id)
               .toPromise()
               .then(response => response.json() as Trail)
               .catch(this.handleError);
  }


  filter(req: string): void {
    alert('Coming soon when observables are implemented');

    switch (req) {
      case 'all':
        //things
        break;

      case 'completed':
        //things
        break;

      case 'still to do':
        //things
        break;


      case 'nh': 
        //things
        break;

      case 'ri':
        //things
        break;
    }
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
