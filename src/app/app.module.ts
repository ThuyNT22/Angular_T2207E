import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student.component";
import {ClassroomComponent} from "./classroom/classroom.component";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "./pages/register/register.component";
import {AboutUsComponent} from "./pages/aboutUs/aboutUs.component";
import {ContactUsComponent} from "./pages/contactUs/contactUs.component";
import {FoodComponent} from "./food/food.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";

// khai bao cac page trong website
const appRoutes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'aboutUs',component: AboutUsComponent},
  {path:'contactUs',component: ContactUsComponent},
  {path:'food',component: FoodComponent}
]
@NgModule({
  declarations: [
    AppComponent, StudentComponent, ClassroomComponent, HomeComponent, LoginComponent, RegisterComponent, AboutUsComponent, ContactUsComponent, FoodComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
