import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { PetpostserviceService } from '../postpet/petpostservice.service';
import {HttpClient} from '@angular/common/http';
import { BASE_URL } from 'src/environments/environment';

@Component({
  selector: 'app-editpet',
  templateUrl: './editpet.component.html',
  styleUrls: ['./editpet.component.sass']
})
export class EditpetComponent implements OnInit {
  pet_name:string="";
  pet_age:string="";
  pet_gender:string="";
  pet_color:string="";
  pet_breed:string="";
  imageUrl:string="";
  pet_description:string="";
  petData:any ={};
  validation:boolean=true;

  constructor(private http: HttpClient,private router: Router,private petpost:PetpostserviceService) { }

  ngOnInit() {
    this.pet_age="";
    this.pet_breed="";
    this.pet_color="";
    this.pet_gender="";
    this.pet_name="";
    this.imageUrl="";
    this.pet_description="";
    this.petData={};
    this.validation=true;
    this.petpost.getpets().subscribe(petdata =>{
        
      this.petData =petdata;
      console.log(this.petData)
      
      this.pet_name=petdata[0].pet_name;
      this.pet_age=petdata[0].age;
      this.pet_gender=petdata[0].gender;
      this.pet_color=petdata[0].color;
      this.pet_breed=petdata[0].breed;
      this.pet_description=this.petData[0].description;
      this.imageUrl=this.petData[0].image;
      
      console.log(this.pet_name)
      
    });
  }
  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var imagepattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(imagepattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  //image is converted into url here
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageUrl = reader.result;
   
  }

  add_pet(){
    
    // validating input user values
     if(this.pet_age=="" || this.pet_breed =="" || this.pet_color=="" || this.pet_description=="" || this.pet_gender=="" ||  this.pet_name=="")
     {
       this.validation=false;
     }
    if(this.validation==true)
    {
      this.petData={
        pet_age:this.pet_age,
        pet_name:this.pet_name,
        imageUrl:this.imageUrl,
        pet_color:this.pet_color,
        pet_gender:this.pet_gender,
        pet_description:this.pet_description,
        pet_breed:this.pet_breed

      }
      
      this.addpet(this.petData).subscribe(petdata =>{
        
        this.petData =petdata;
        
      });
      alert("pet profile created");  
      // set a time out of 2000 before navigating to the pet details page to facilitate load of data from back end
      setTimeout(() => 
      {
          this.router.navigate(['/petdetailslist']);
      },
      2000)
    }
    else{
      alert("missing required fields");
      this.validation=true;
    } 
  
  }
  // on cancel user will navigate to pet details page. 
  cancel_pet(){
    this.router.navigate(['/pet-details']);
  }

  addpet(petData){
    return this.http.post(BASE_URL.BLUE_NOSE + '/postpet/postpets',petData);

  }


}
