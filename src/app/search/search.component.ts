import { Component, OnInit } from '@angular/core';
import { DropdownModel } from './dropdown.model';
import { PetDetails } from '../pets-list/pet.details.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  selectedCategory;
  selectedBreed;
  ownerText = "";
  categories: DropdownModel[] = [];
  breeds: DropdownModel[] = [];
  petDetails: PetDetails[] = [];
  suggesstions = [];
  showErrorMessage = false;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getBreeds();
    this.getCategories();
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
    this.httpClient.get('http://localhost:3000/getBreeds')
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
  getCategories() {
    this.httpClient.get('http://localhost:3000/getCategories')
      .subscribe((data: any) => {
        console.log(data);
        data.forEach((item, index) => {
          this.categories.push({
            id: index + 1,
            name: item.category
          })
        })
      })
  }
  getSearchResults() {
    this.httpClient.post('http://localhost:3000/getPets',
      {
        "category": this.selectedCategory === undefined ? '' : this.getCategoryName(this.selectedCategory),
        "breed": this.selectedBreed === undefined ? '' : this.getBreedName(this.selectedBreed)
      })
      .subscribe((data: PetDetails[]) => {
        this.petDetails = data;
      })
  }

  getCategoryName(id: number) {
    return this.categories.find(item => item.id === id).name
  }
  getBreedName(id: number) {
    return this.breeds.find(item => item.id === id).name
  }
}
