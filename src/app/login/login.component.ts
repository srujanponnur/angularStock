import { Component, OnInit } from '@angular/core';
import { Login } from './login.model';
import { DataStorageService } from '../shared/data-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username : string;
password : string;

  constructor(private dsService : DataStorageService) { }

  ngOnInit() {
  }

  handleLogin(){
let login = new Login(this.username,btoa(this.password));
this.dsService.loginProcess(login);
  }

}