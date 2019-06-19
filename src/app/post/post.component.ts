import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  alphalinvalid: Boolean;
  emailinvalid: Boolean;
  colorinvalid: Boolean;
  breedinvalid: Boolean;
  telephoneinvalid: Boolean;

  constructor(private routes: Router) { }

  ngOnInit() {
  }

  show() {
    Swal.fire(
      'Thank you! Your post is created sucessfully!'
    );
  }

  validateform() {
    var only_alpha = /^([a-zA-z\s]{4,32})$/;
    var mailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var telehone = /^\+\d{1,3}\s\d{3}\s\d{3}\s\d{4}/;

    //Name
    if ((<HTMLInputElement>document.getElementById("name")).value.match(only_alpha)) {
      this.alphalinvalid = false;
    }
    else {
      this.alphalinvalid = true;
    }

    //Breed
    if ((<HTMLInputElement>document.getElementById("breed")).value.match(only_alpha)) {
      this.breedinvalid = false;
    }
    else {
      this.breedinvalid = true;
    }

    //color
    if ((<HTMLInputElement>document.getElementById("color")).value.match(only_alpha)) {
      this.colorinvalid = false;
    }
    else {
      this.colorinvalid = true;
    }

    //email 
    if (!(<HTMLInputElement>document.getElementById("email")).value.match(mailformat)) {
      this.emailinvalid = true;
    }
    else {

      this.emailinvalid = false;
    }


    //Telephone
    if ((<HTMLInputElement>document.getElementById("telephone")).value.match(telehone)) {
      this.telephoneinvalid = false;
    }
    else {
      this.telephoneinvalid = true;
    }


  }

}
