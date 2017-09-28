import { Routes, RouterModule } from '@angular/router';

import { PromocoesComponent } from './promocoes.component';
import {PromocaoFormComponent} from './promocao-form/promocao-form.component';

const promocoesRoutes: Routes = [
  { path: 'promocoes', component: PromocoesComponent, pathMatch: 'full' },
  { path: 'promocoes/new', component: PromocaoFormComponent},
  { path: 'promocoes/:id', component: PromocaoFormComponent}
];

export const promocoesRouting = RouterModule.forChild(promocoesRoutes);
