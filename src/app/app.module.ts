import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DashboadComponent } from './dashboad/dashboad.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { KeyfeaturesComponent } from './keyfeatures/keyfeatures.component';
import { UploadComponent } from './upload/upload.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';
import { NgToastModule } from 'ng-angular-popup';
import { ContactusComponent } from './contactus/contactus.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDocViewerModule } from 'ngx-doc-viewer'; 

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    DashboadComponent,
    DeleteComponent,
    EditComponent,
    KeyfeaturesComponent,
    UploadComponent,
    ViewComponent,
    UpdateComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgToastModule,
    FormsModule,
    NgxPaginationModule,
    NgxDocViewerModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
