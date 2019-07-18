import { Component, OnInit } from '@angular/core';
import { MutualMatchService, MutualMatchPets } from './mutualmatch.service';

@Component({
  selector: 'app-mutual-match',
  templateUrl: './mutual-match.component.html',
  styleUrls: ['./mutual-match.component.scss']
})

export class MutualMatchComponent implements OnInit {

  mutualmatchPets : MutualMatchPets;  
  breed: string;
  color: string;
  desc: string;

  constructor(private mutualmatchservice: MutualMatchService) { }

  ngOnInit() {
    this.mutualmatchservice.fetchMutualMatchPets()
    .subscribe((data: MutualMatchPets) => this.mutualmatchPets = data); 
    
 }

 filterMutualMatchPets()
{
  var params = {
                breed:this.breed,
                color:this.color,
                desc:this.desc    
              }
  

  console.log(params);
  
  this.mutualmatchservice.filterMutualMatchPets(params)
  .subscribe((data: MutualMatchPets) => this.mutualmatchPets = data); 
  }

}

