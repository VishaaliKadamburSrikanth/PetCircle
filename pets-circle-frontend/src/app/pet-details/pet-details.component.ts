import { Component, OnInit } from '@angular/core';
import { PetpostserviceService } from '../postpet/petpostservice.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.sass']
})
export class PetDetailsComponent implements OnInit {
  pet_name:string="";
  pet_age:string="";
  pet_gender:string="";
  pet_color:string="";
  pet_breed:string="";
  imageUrl:string="";
  pet_description:string="";
  petData:any ={};
 


  constructor(private petpost:PetpostserviceService) { }

  ngOnInit() {
    debugger;
    // details are fetched from data base
    this.petpost.getpets().subscribe(petdata =>{
        
      this.petData =petdata;
      
    });;
  }
  


}
