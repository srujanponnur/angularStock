import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../user-profile/user-profile.model';
import { UserService } from '../user-profile/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

userDetails : UserProfile;

username : string;
email : string;
address : string;
baccount1: string;
baccount2: string;
balance1:string;
balance2:string;


  constructor(private userservice : UserService ) { }

  ngOnInit() {
    this.userDetails = this.userservice.getUserProfile();
  }


  submit(){
    
  }

}