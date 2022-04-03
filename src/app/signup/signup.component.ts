import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
interface User {
  name: String;
  lastname: String;
  phonenumber: String;
  mail : String;
  password: String;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('',Validators.required);
  mail : String;
  name: String;
  lastname: String;
  phonenumber: String;
  password: String;
  myuser : User;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'شما باید ایمیل خود وارد کنید';
    }

    return this.email.hasError('email') ? 'ایمیل وارد شده قابل قبول نیست' : '';
  }
  constructor() {
    this.mail="";
    this.name="";
    this.lastname="";
    this.phonenumber="";
    this.password="";
    this.myuser = {name:"",lastname:"",phonenumber:"",mail:"",password:""};
  }

  ngOnInit(): void {
  }

  submit():void {
    this.myuser.name = this.name;
    this.myuser.lastname = this.lastname;
    this.myuser.phonenumber = this.phonenumber;
    this.myuser.mail = this.mail;
    this.myuser.password = this.password;
    console.log(this.myuser);
    console.log(this.mail)
  }

}
