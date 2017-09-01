import { Injectable } from '@angular/core';
import { Http       } from '@angular/http';
import { Keys       } from '../../config';
import { Urls       } from '../../config';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TrailInfoService {

  constructor(
    private _http: Http
  ) { }

  getGooglePlaceInfoForTrail(query: string, location?: string, radius? : number): Promise<any> {
    let locationAsLatLong;
    if (location) {
      switch (location) {
        // ETC
      }
    }
    let uri: string = Urls.googleMapsUrl
                    + 'query=' + query
                    + locationAsLatLong ? '&location=' + locationAsLatLong : ''
                    + radius            ? '&radius=' + String(radius) : ''
                    + '&key=' + Keys.googleMapsPlaces;

    let resAsJson = this._http.get(uri)
                        .toPromise()
                        .then(response => resAsJson = response.json())
                        .catch(this.handleError);

    console.log(resAsJson);
    return resAsJson;
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
