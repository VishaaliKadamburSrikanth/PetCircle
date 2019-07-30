/*
 * Created by
 * Kadambur Srikanth Vishaali ( B00821049)
 */

import { Component, OnInit } from '@angular/core';
import { MissingService, MissingPets } from './missing.service';

@Component({
  selector: 'app-missing-pets',
  templateUrl: './missing-pets.component.html',
  styleUrls: ['./missing-pets.component.scss'],
  })
export class MissingPetsComponent implements OnInit {

  missingPets : MissingPets;  
  breed: string;
  color: string;
  desc: string;

  constructor(private missingservice: MissingService) { }

  ngOnInit() {
    this.missingservice.fetchMissingPets()
    .subscribe((data: MissingPets) => this.missingPets = data);    
 }

 filterMissingPets()
{
  var params = {
                breed:this.breed,
                color:this.color,
                desc:this.desc    
              }
  

  console.log(params);
  
  this.missingservice.filterMissingPets(params)
  .subscribe((data: MissingPets) => this.missingPets = data); 
  }

}
