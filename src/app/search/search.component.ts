import { Component, OnInit } from '@angular/core';
import { DropdownModel } from './dropdown.model';
import { PetDetails } from '../pets-list/pet.details.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  selectedCategory;
  selectedBreed;
  ownerText = "";
  categories: DropdownModel[] = [{
    id: 1,
    name: 'Dog'
  },
  {
    id: 2,
    name: 'Cat'
  }];
  breeds: DropdownModel[] = [{
    id: 1,
    name: 'Poodle'
  },
  {
    id: 2,
    name: 'Beagle'
  },
  {
    id: 2,
    name: 'Akita'
  }];
  petDetails: PetDetails[] = [{
    id: 1,
    name: 'Bow',
    imagePath: 'assets/images/dog_1.jpg'
  }, {
    id: 2,
    name: 'Mob',
    imagePath: 'assets/images/dog_2.jpg'
  }, {
    id: 3,
    name: 'Lorem',
    imagePath: 'assets/images/dog_3.jpg'
  }];
  suggesstions = [];
  showErrorMessage = false;
  constructor() { }

  ngOnInit() {
  }
  search() {
    if (this.selectedCategory === undefined && this.selectedBreed === undefined && this.ownerText == "") {
      this.showErrorMessage = true;
    } else {
      this.showErrorMessage = false;
    }
  }

}
