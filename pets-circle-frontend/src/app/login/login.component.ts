import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailinvalid: Boolean;
  passwordinvalid: Boolean;
  constructor(private routes: Router) { }

  ngOnInit() {
  }

  Validate() {
    event.preventDefault();
    var mailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (!(<HTMLInputElement>document.getElementById("email")).value.match(mailformat)) {
      this.emailinvalid = true;
    }
    else {

      this.emailinvalid = false;
    }

    if (!((<HTMLInputElement>document.getElementById("password")).value == "")) {

      this.passwordinvalid = false;

    }
    else {
      this.passwordinvalid = true;
    }


    if (!this.emailinvalid && !this.passwordinvalid) {

      this.routes.navigate(['/missing']);
    }

  }

}
