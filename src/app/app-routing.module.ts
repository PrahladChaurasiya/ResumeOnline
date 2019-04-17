import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplatesComponent } from './templates/templates.component';
import {Form1Component} from './form1/form1.component';
import{HomeComponent} from './home/home.component';
import{LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {
    path: 'templates', component: TemplatesComponent
  },
  { 
    path:'form1', component:Form1Component
  },
  { 
    path:'login', component:LoginComponent
  },
  {
    path :'profile', component:ProfileComponent
  },
  {
    path:'**',component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
