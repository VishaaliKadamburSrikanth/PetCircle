import { Component, OnInit } from '@angular/core';
import { PetDetails } from '../pets-list/pet.details.model';

@Component({
  selector: 'app-your-pets',
  templateUrl: './your-pets.component.html',
  styleUrls: ['./your-pets.component.sass']
})
export class YourPetsComponent implements OnInit {
  petDetails: PetDetails[] = [{
    id: 1,
    name: 'Bow',
    imagePath: 'assets/images/dog_1.jpg'
  },{
    id: 2,
    name: 'Mob',
    imagePath: 'assets/images/dog_2.jpg'
  },{
    id: 3,
    name: 'Lorem',
    imagePath: 'assets/images/dog_3.jpg'
  }]
  constructor() { }

  ngOnInit() {
  }

}
