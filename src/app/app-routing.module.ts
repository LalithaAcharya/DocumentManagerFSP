import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboadComponent } from './dashboad/dashboad.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { KeyfeaturesComponent } from './keyfeatures/keyfeatures.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { UploadComponent } from './upload/upload.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:"",
    component:LandingpageComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"navbar",
    component:NavbarComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"dashboard",
    component:DashboadComponent
  },
  {
    path:'upload',
    component:UploadComponent
  },
  {
    path:"view/:fileName",
    component:ViewComponent
  },
  {
    path:"delete",
    component:DeleteComponent
  },
  {
    path:"edit",
    component:EditComponent
  },
  {
    path:"keyfeatures",
    component:KeyfeaturesComponent
  },
  {
    path:"update/:id",
    component:UpdateComponent
  },
  {
    path:"contactus",
    component:ContactusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
