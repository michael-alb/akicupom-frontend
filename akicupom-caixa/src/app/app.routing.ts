import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PromocoesComponent } from './promocoes/promocoes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'promocoes', component: PromocoesComponent},
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
