import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { BASE_URL } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class MutualMatchService {
  fetchMutualMatchPetsURL: string = BASE_URL.BLUE_NOSE + '/mutual-match';
  constructor(private http: HttpClient) { }
  fetchMutualMatchPets() {
    return this.http.get(this.fetchMutualMatchPetsURL);
  }

}

export interface MutualMatchPets {
    pet_id: number,
    name: string,
    description: string,
    gender: string,
    color: string,
    breed: string,
    image: string
  }
  