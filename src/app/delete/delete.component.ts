import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Doc } from '../Doc';
import { FileService } from '../file.service';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  public doc!:Doc[];
  fileName: any;
  p!:any;

  constructor(private es:FileService,private router:Router) { }

  ngOnInit(): void {
    this.getdata()
  }

  getdata(){
    this.es.getval().subscribe(data=>{
      this.doc=data
      console.log(data)
    })
  }

  deletepost(id:number){
Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    this.es.delval(id).subscribe(data=>{
      console.log("deleted");
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
      this.getdata();
    })

  }
  else if(result.dismiss==Swal.DismissReason.cancel){
    Swal.fire(
      'Cancelled',
      'Your file is safe',
      'error'
    )

  }
})


}

  update(id:number) {
    console.log(id);
     this.router.navigate([`update/${id}`]);
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
