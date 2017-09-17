import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from "./users/users.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'gestor', component: HomeComponent },
  { path: 'cupons', component: UsersComponent},
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
