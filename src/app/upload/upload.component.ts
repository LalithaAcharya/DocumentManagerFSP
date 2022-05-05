import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { Doc } from '../Doc';
import { FileService } from '../file.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public doc:Doc= new Doc();

  fileName!: string;
  fileData: any;
 
  public docs!:Doc[];
  constructor(private es:FileService, private route:Router) { }

  ngOnInit(): void {
    this.getdata();
  }
onsubmit(){
  console.log(this.doc)
  this.addval()
}
 addval(){
   this.es.addval(this.doc).subscribe(data=>{
    console.log(data)
      this.doc=new Doc();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'You have uploaded your file successfully',
        showConfirmButton: true
      }).then((result)=>{
        this.route.navigate(['/dashboard']);
      })
   },
   error=>console.log(error))
}

public onFileChange(event:any) {
  const reader = new FileReader();

  if (event.target.files && event.target.files.length) {
    this.fileName = event.target.files[0].name;
    const [file] = event.target.files;
    reader.readAsDataURL(file);
    reader.onload = () => {
      localStorage.setItem(this.fileName, reader.result as string);
      // console.log(fileData);
      console.log(this.fileName);
      // console.log(reader.result);
      this.doc.fileName=this.fileName
    };
  }
}

getdata(){
  this.es.getval().subscribe(data=>{
    this.docs=data
    console.log(data)
  })
}


  
}
