import { Component, OnInit } from '@angular/core';
import { MutualMatchPets, MutualMatchService } from './mutual-match.service';

@Component({
  selector: 'app-mutual-match',
  templateUrl: './mutual-match.component.html',
  styleUrls: ['./mutual-match.component.scss']
})
export class MutualMatchComponent implements OnInit {
  mutualmatch : MutualMatchPets;  
  
  constructor(private mutualmat: MutualMatchService) { }

  ngOnInit() {
    this.mutualmat.fetchMutualMatchPets()
    .subscribe((data: MutualMatchPets) => this.mutualmatch = data); 
  }

}
