import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Doc } from '../Doc';
import { FileService } from '../file.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.css']
})
export class DashboadComponent implements OnInit {
  p!:any;
  public doc!:Doc[];
  fileName: any;

  constructor(private es:FileService) { }

  ngOnInit(): void {
    this.getdata()
  }

  getdata(){
    this.es.getval().subscribe(data=>{
      this.doc=data
      console.log(data)
    })
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
      };
    }
  }


 }
 



