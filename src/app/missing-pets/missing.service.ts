/*
 * Created by
 * Kadambur Srikanth Vishaali ( B00821049)
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';

export interface MissingPets {

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

export class MissingService {
  

  fetchMissingPetsURL: string = 'http://localhost:3000/missing';

  constructor(private http: HttpClient) 
  {}

  fetchMissingPets() {
    return this.http.get(this.fetchMissingPetsURL);
  }

  filterMissingPets(params): Observable<any>
  {
    return this.http.post<any>(this.fetchMissingPetsURL, params);
  }
    
}
