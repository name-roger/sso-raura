import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { PetarComponent } from './pages/petar/petar.component';

const routes: Routes = [
  { 
    path: '', 
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'petar', component: PetarComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ] 
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  declarations: [],
  imports: [ 
    RouterModule.forRoot( routes )
   ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
