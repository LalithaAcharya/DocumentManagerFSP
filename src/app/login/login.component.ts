import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user=new User();
  msg='';
  public loginForm !: FormGroup;
  constructor(private service:RegistrationService,private formBuilder:FormBuilder,private router:Router,private toster:NgToastService) { }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  loginUser(){
      this.service.loginUserFromRemote(this.user).subscribe(
        data=>{
        console.log("response recieved");
        this.toster.success({detail:"SUCCESS",summary:'Login Successfull! Welcome to Doc-key',duration:5000});
        this.router.navigate(['/navbar']);
        },
        error=>{
          this.toster.error({detail:"ERROR",summary:'User nor found',duration:5000});
          console.log("exception occurd");
          this.msg="Bad credentials,please enter valid emailid and passward"
        }
      )
  }

}