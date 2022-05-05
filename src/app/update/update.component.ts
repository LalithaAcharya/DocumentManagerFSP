import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Doc } from '../Doc';

import { FileService } from '../file.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  id!:number;
  doc:Doc=new Doc();

  percentDone!: number;
  uploadSuccess!: boolean;
  fileName!: string;
  fileData: any;
 
  constructor(private fileservice:FileService, private activateRoute:ActivatedRoute,private router:Router) { }


  ngOnInit() {
    this.id=this.activateRoute.snapshot.params['id'];
    this.fileservice.getvalbyid(this.id).subscribe(data=>{
      this.doc=data;
    },error=>console.log(error));
    }


   onSubmit(){
    this.fileservice.updateval(this.id,this.doc).subscribe(data=>
      {
        this.gotoList();
      },
      error=>console.log(error));
   }

   gotoList(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'You have uploaded your file successfully',
      showConfirmButton: true
    }).then((result)=>{
      this.router.navigate(['/dashboard']);
    });
   }

   public onFileChange(event:any) {
    const reader = new FileReader();
  
    if (event.target.files && event.target.files.length) {
      this.fileName = event.target.files[0].name;
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        localStorage.setItem(this.fileName, reader.result as string);
        console.log(this.fileName);
        this.doc.fileName=this.fileName
      };
    }
  }

  }

  
  


