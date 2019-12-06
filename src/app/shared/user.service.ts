import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb:FormBuilder, private http: HttpClient) { }

  readonly BaseURI = '';                                              // ** need to add  URI **


  formModel=this.fb.group({
    UserName :['',Validators.required],
    Email :['',[Validators.required,Validators.email]],
    Address :[''],
    // AccountNumbemr1 : ['',Validators.required],
    // AcccountNumber2 : ['']
    Passwords:this.fb.group({
     Password :['',[Validators.required,Validators.minLength(8)]],
     ConfirmPassword :['',Validators.required],
   },{validator : this.comparePasswords})


  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    // passwordMismatch
    // confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }


  register() {
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      Address: this.formModel.value.Address,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);  // **** need to check /ApplicationUser/Register **
  }


  login(formData) {
    return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);  // *** post URL for login ****
  }





//  formModel_modify=this.fb.group({
//     UserName :['',Validators.required],
//     Email :['',[Validators.required,Validators.email]],
//     Address :['',Validators.required],
//     AccountNumbemr1 : ['',Validators.required],
//     AcccountNumber2 : ['']
//   });




  // modify_profile() {
  //   var body = {
  //     UserName: this.formModel.value.UserName,
  //     Email: this.formModel.value.Email,
  //     Address: this.formModel.value.Address,
  //     AccountNumbemr1 : this.formModel.value.AccountNumbemr1,
  //     AccountNumbemr2 : this.formModel.value.AccountNumbemr2
  //   };
  //   return this.http.post(this.BaseURI + '/ApplicationUser/profile', body);  // **** need to check /ApplicationUser/profile **
  // }

}
