import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Registration } from './registration.model';

@Component({
  selector: 'app-resgistration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
username : string;
email: string;
address : string;
password : string;

 registerdet = new Registration(this.username,this.email,this.address,btoa(this.password));
constructor(private dsService : DataStorageService) { 
console.log(this.password);
}

  ngOnInit() {
  }

  submit(){
    let registerdet = new Registration(this.username,this.email,this.address,btoa(this.password));
    this.dsService.register(registerdet);
  }

}
