import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Customer } from '../Customer';
import { FileService } from '../file.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  customer=new Customer();

  constructor(private es:FileService,private router:Router) { }

  ngOnInit(): void {
  }


  onsubmit(){
    this.es.addCustomer(this.customer).subscribe(data=>console.log(data),error=>console.log(error));
      // console.log(data)
      this.customer=new Customer();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thank you for contacting us!',
        showConfirmButton: true,
        timer: 1500
      })
      this.router.navigate(['']);
    // })
  }
}
