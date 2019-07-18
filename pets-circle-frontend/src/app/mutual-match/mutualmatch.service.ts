/*
 * Created by
 * Karan Gill (B00757467)
 * CODE REF AS WELL AS IDEA: TEAMMATES
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';

export interface MutualMatchPets {

  pet_id: number,
  pet_name: string,
  age: number,
  description: string,
  gender: string,
  category: string,
  color: string,
  breed: string,
  image: string,
}


@Injectable({
  providedIn: 'root'
})

export class MutualMatchService {


  fetchMutualMatchPetsURL: string = BASE_URL.BLUE_NOSE + '/mutualmatch';

  constructor(private http: HttpClient) { }

  fetchMutualMatchPets() {
    return this.http.get(this.fetchMutualMatchPetsURL);
  }

  filterMutualMatchPets(params): Observable<any> {
    return this.http.post<any>(this.fetchMutualMatchPetsURL, params);
  }

}
