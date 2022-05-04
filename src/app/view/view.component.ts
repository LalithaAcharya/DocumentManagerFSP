import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doc } from '../Doc';

import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  fileName!:string;
  public doc!:Doc;
  viewer = 'google';  
  selectedType = 'docx';   
  DemoDoc=this.fileName ; 

  constructor(private activateRoute:ActivatedRoute,private router:Router){ 
  
  }
  ngOnInit(): void {
    this.fileName=this.activateRoute.snapshot.params['fileName'];
    console.log(this.fileName)
  }
}
