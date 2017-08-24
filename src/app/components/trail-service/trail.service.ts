import { Injectable } from '@angular/core';
import { Trail      } from '../trail';
import { TRAILS     } from './mock-data';

@Injectable()
export class TrailService {

  getAllTrails(): Promise<Trail[]> {
    return Promise.resolve(TRAILS);
  }

  getTrail(id: number): Promise<Trail> {
    return this.getAllTrails().then(trails => trails.find(trail => trail.id === id));
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

}
