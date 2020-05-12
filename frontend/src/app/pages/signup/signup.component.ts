import { Component, OnInit, ViewChild } from '@angular/core';
import { Signup } from 'src/app/providers/models/signup.model';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signup: Signup = new Signup();

  constructor() { }

  ngOnInit() {
  }

  nice() {
    console.log(this.signup)
  }

}
