import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';
import {NgForm} from '@angular/forms';
import { User } from '../User';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user=new User();
  msg='';
  public signUpForm !: FormGroup;

  constructor(private formBuilder:FormBuilder, private http:HttpClient,private toast: NgToastService, private router:Router,private service:RegistrationService,private toster:NgToastService) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      fullName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  signUp(){
  this.service.registerUserFromRemote(this.user).subscribe(
    data=>{
      console.log("response recived");
      this.msg="Registration successfull";
      this.toster.success({detail:"SUCCESS",summary:'Login Successfull! Welcome to Doc-key',duration:5000});
      this.router.navigate(['/login']);
    },
    error=>{
      console.log("exception occured");
      this.msg=error.error;
    }
  )
  }
}