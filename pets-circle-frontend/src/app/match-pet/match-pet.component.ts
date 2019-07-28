import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-pet',
  templateUrl: './match-pet.component.html',
  styleUrls: ['./match-pet.component.sass']
})
export class MatchPetComponent implements OnInit {
  petDetails = [];
  constructor() { }

  ngOnInit() {
    let parentPet = JSON.parse(localStorage.getItem('parentItem'));
    this.petDetails.push(parentPet);
  }

}
