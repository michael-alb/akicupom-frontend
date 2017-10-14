import { PromocaoFormComponent } from './promocoes/promocao-form/promocao-form.component';
import { PromocaoFormModule } from './promocoes/promocao-form/promocao-form.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routing } from './app.routing';
import { promocoesRouting } from './promocoes/promocoes.routing';
import { PromocoesModule } from './promocoes/promocoes.module';
import { LoginComponent } from './login/login.component';
import { PromocoesService } from 'app/promocoes/shared/promocoes.service';
import { CategoriasService } from 'app/promocoes/shared/categorias.service';
import { FornecedorService } from 'app/promocoes/promocao-form/shared/fornecedor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    PromocaoFormComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    PromocoesModule,
    promocoesRouting,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    PromocaoFormModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [PromocoesService, CategoriasService, FornecedorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
