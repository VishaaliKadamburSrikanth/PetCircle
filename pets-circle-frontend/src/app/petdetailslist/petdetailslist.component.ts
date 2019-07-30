import { Component, OnInit } from '@angular/core';
import { PetpostserviceService } from '../postpet/petpostservice.service';

@Component({
  selector: 'app-petdetailslist',
  templateUrl: './petdetailslist.component.html',
  styleUrls: ['./petdetailslist.component.sass']
})
export class PetdetailslistComponent implements OnInit {
  petData:any ={};
  constructor(private petpost:PetpostserviceService) { }

  ngOnInit() {
    this.petpost.getpets().subscribe(petdata =>{
        
      this.petData =petdata;
      
    });
  }

}
