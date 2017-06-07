import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from "./users/users.component";
import { HomeComponent } from "./home/home.component";
import { LoginUsuarioComponent } from "./login-usuario/login-usuario.component";

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'login-usuario', component: LoginUsuarioComponent},
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
