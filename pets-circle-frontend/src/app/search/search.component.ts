/**
 Created by
 Aravind Sundarrajan (B00824107)
 */
import { Component, OnInit } from '@angular/core';
import { DropdownModel } from './dropdown.model';
import { PetDetails } from '../pets-list/pet.details.model';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  selectedCategory = 1;
  selectedBreed = 1;
  selectedColor = 1;
  ownerText = "";
  showSpinner = true;
  categories: DropdownModel[] = [];
  breeds: DropdownModel[] = [];
  colors: DropdownModel[] = [];
  petDetails: PetDetails[] = [];
  suggesstions = [];
  showErrorMessage = false;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getBreeds();
    this.getCategories();
    this.getColors();
  }
  search() {
    if (this.selectedCategory === undefined && this.selectedBreed === undefined && this.ownerText == "") {
      this.showErrorMessage = true;
    } else {
      this.showErrorMessage = false;
      this.getSearchResults();
    }
  }
  /**
   * This method will make an API call to populate the breeds Dropdown
   */
  getBreeds() {
    this.httpClient.get(BASE_URL.BLUE_NOSE + '/getBreeds')
      .subscribe((data: any) => {
        console.log(data);
        data.forEach((item, index) => {
          this.breeds.push({
            id: index + 1,
            name: item.breed
          })
        })
      })
  }
  getColors() {
    this.httpClient.get(BASE_URL.BLUE_NOSE + '/getColors')
      .subscribe((data: any) => {
        console.log(data);
        data.forEach((item, index) => {
          this.colors.push({
            id: index + 1,
            name: item.color
          })
        })
      })
  }
  getCategories() {
    this.httpClient.get(BASE_URL.BLUE_NOSE + '/getCategories')
      .subscribe((data: any) => {
        console.log(data);
        data.forEach((item, index) => {
          this.categories.push({

            id: index + 1,
            name: item.category
          });
        })
        this.showSpinner = false;
      })
  }
  getSearchResults() {
    this.showSpinner = true;
    this.httpClient.post(BASE_URL.BLUE_NOSE + '/getPets',
      {
        "category": this.selectedCategory === undefined ? '' : this.getCategoryName(this.selectedCategory),
        "breed": this.selectedBreed === undefined ? '' : this.getBreedName(this.selectedBreed),
        "color": this.selectedColor === undefined ? '' : this.getColorName(this.selectedColor),
      })
      .subscribe((data: PetDetails[]) => {
        this.petDetails = data;
        this.showSpinner = false;
      })
  }

  getCategoryName(id: number) {
    return this.categories.find(item => item.id === id).name
  }
  getBreedName(id: number) {
    return this.breeds.find(item => item.id === id).name
  }
  getColorName(id: number) {
    return this.colors.find(item => item.id === id).name
  }
}
