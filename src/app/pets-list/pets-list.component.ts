import { Component, OnInit, Input } from '@angular/core';
import { PetDetails } from './pet.details.model';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.sass']
})
export class PetsListComponent implements OnInit {
  @Input() petDetails: PetDetails[] = [];
  constructor() { }

  ngOnInit() {
  }

}
