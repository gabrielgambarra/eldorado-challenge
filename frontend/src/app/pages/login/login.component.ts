import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/providers/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();

  constructor() { }

  ngOnInit() {
  }

}
